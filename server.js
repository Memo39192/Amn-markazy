import Database from 'better-sqlite3';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import express from 'express';
import fs from 'fs';
import http from 'http';
import multer from 'multer';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';
import initializeSchema from './tables.js';

const SECRET_KEY = 'a9F#2Lq!Xr7P@M4sZ8K0WcEJvB6D^HnY';
const APP_BASELINE_ID = '9f2c8d3a-4b17-4f1b-b9a3-7d61b0f7a1c2';
const INTEGRITY_FILE = 'sync.enc';
const INSTALL_FLAG = '.installed';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');

function decrypt(data) {
  const [ivBase64, encrypted] = data.split(':');
  const iv = Buffer.from(ivBase64, 'base64');
  const key = crypto.createHash('sha256').update(SECRET_KEY).digest();

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

function hashFile(filePath) {
  return crypto
    .createHash('sha256')
    .update(fs.readFileSync(filePath))
    .digest('hex');
}

function verifyIntegrity() {
  if (!fs.existsSync(INTEGRITY_FILE)) return false;

  const encrypted = fs.readFileSync(INTEGRITY_FILE, 'utf8');
  const saved = JSON.parse(decrypt(encrypted));

  for (const relPath of Object.keys(saved)) {
    const absPath = path.join(__dirname, relPath);

    if (!fs.existsSync(absPath)) return false;
    if (hashFile(absPath) !== saved[relPath]) return false;
  }

  return true;
}

// if (!fs.existsSync(INTEGRITY_FILE) || !fs.existsSync(INSTALL_FLAG)) {
//   console.error('❌ Application not licensed or tampered');
//   process.exit(1);
// }

// if (fs.readFileSync(INSTALL_FLAG, 'utf8').trim() !== APP_BASELINE_ID) {
//   console.error('❌ Invalid installation signature');
//   process.exit(1);
// }

// if (!verifyIntegrity()) {
//   console.error('❌ Licensed check failed');
//   process.exit(1);
// }

const PORT = 2000;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const db = new Database(path.join(__dirname, 'data.db'));
initializeSchema(db);
// ================================
//          STORAGE (buckets)
// ================================
const STORAGE_ROOT = path.join(__dirname, 'storage');
fs.mkdirSync(STORAGE_ROOT, { recursive: true });
app.use('/storage', express.static(STORAGE_ROOT));

// multer factory
function createMulterForBucket(bucket) {
  const dest = path.join(STORAGE_ROOT, bucket);
  fs.mkdirSync(dest, { recursive: true });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, dest),
    filename: (req, file, cb) => {
      const safeName = file.originalname
        .replace(/\s+/g, '_')
        .replace(/[^A-Za-z0-9_\-\.]/g, '');
      const name = `${Date.now()}-${Math.round(
        Math.random() * 1e6,
      )}-${safeName}`;
      cb(null, name);
    },
  });

  return multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
      if (/image\/(png|jpe?g|gif|webp)/.test(file.mimetype)) cb(null, true);
      else cb(new Error('فقط ملفات الصور مسموح بها'));
    },
  });
}

// helper: map table -> bucket (for tables that store image_url)
const tableBucketMap = {
  branch_soldiers: 'branch_soldiers_images',
  health_certificates: 'health_certificates_images',
  bakery_health_certificates: 'bakery_health_certificates_images',
};

function filenameFromUrl(url) {
  if (!url) return null;
  try {
    return url.split('/').pop();
  } catch {
    return null;
  }
}
function deleteFileIfExists(bucket, imageUrl) {
  if (!bucket || !imageUrl) return;
  const filename = filenameFromUrl(imageUrl);
  if (!filename) return;

  const filePath = path.join(STORAGE_ROOT, bucket, filename);
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch (e) {
    console.error('deleteFileIfExists error', e);
  }
}

// ==========================
//  SANITIZE / RESTORE HELPERS
// ==========================

// convert incoming values to types SQLite accepts
function sanitizeValue(v) {
  if (v === null || typeof v === 'undefined') return null;

  if (typeof v === 'boolean') {
    // store booleans as 0/1
    return v ? 1 : 0;
  }

  if (typeof v === 'number' || typeof v === 'string' || typeof v === 'bigint') {
    return v;
  }

  // Date -> ISO string
  if (v instanceof Date) return v.toISOString();

  // objects/arrays -> stringify (safe)
  if (typeof v === 'object') {
    try {
      return JSON.stringify(v);
    } catch {
      return String(v);
    }
  }

  return v;
}

// restore  when reading from DB for specific tables/columns
function restoreRowBooleans(row, table) {
  if (!row || typeof row !== 'object') return row;

  // only handling ramadan for now (convert 0/1 to false/true)
  if (
    table === 'ramadan' &&
    Object.prototype.hasOwnProperty.call(row, 'is_ramadan')
  ) {
    const val = row.is_ramadan;
    if (val === 1) row.is_ramadan = true;
    else if (val === 0) row.is_ramadan = false;
    else row.is_ramadan = Boolean(val);
  }

  return row;
}

// ================================
//          ROUTES (file uploads)
// ================================

// merged-posts.js
const tablesConfig = {
  branch_soldiers: {
    requireImage: false,
  },
  health_certificates: {
    requireImage: true,
  },
  bakery_health_certificates: {
    requireImage: true,
  },
};

function createMultipartPostRoute(tableName, { requireImage }) {
  return (req, res) => {
    const bucket = tableBucketMap[tableName];
    const uploader = createMulterForBucket(bucket).single('file');

    uploader(req, res, function (err) {
      if (err)
        return res.status(400).json({ error: err.message || 'upload error' });

      // Build payload and set createdAt
      const payload = filterPayload(tableName, req.body, {
        setCreatedAt: true,
      });

      if (req.file) {
        payload.image_url = `/storage/${bucket}/${req.file.filename}`;
      }

      const keys = Object.keys(payload);

      // Validation: require at least one field; if requireImage then image_url must exist
      if (!keys.length || (requireImage && !payload.image_url)) {
        if (req.file) {
          try {
            fs.unlinkSync(req.file.path);
          } catch (e) {}
        }
        const msg = !keys.length
          ? 'no valid fields provided'
          : 'no valid fields provided or missing image';
        return res.status(400).json({ error: msg });
      }

      try {
        const placeholders = keys.map(() => '?').join(', ');
        const colsSql = keys.join(', ');
        const values = keys.map(k => payload[k]);

        const stmt = db.prepare(
          `INSERT INTO ${tableName} (${colsSql}) VALUES (${placeholders})`,
        );
        const info = stmt.run(...values);
        const id = info.lastInsertRowid;
        let row = db.prepare(`SELECT * FROM ${tableName} WHERE id = ?`).get(id);

        row = restoreRowBooleans(row, tableName);

        broadcast({
          type: 'broadcast',
          table: tableName,
          op: 'create',
          payload: row,
        });

        return res.status(201).json(row);
      } catch (e) {
        if (req.file) {
          try {
            fs.unlinkSync(req.file.path);
          } catch (ee) {}
        }
        console.error(`POST ${tableName} error`, e);
        return res.status(500).json({ error: 'server error' });
      }
    });
  };
}

// mount routes for the configured tables
Object.keys(tablesConfig).forEach(tableName => {
  app.post(
    `/api/${tableName}`,
    createMultipartPostRoute(tableName, tablesConfig[tableName]),
  );
});

app.delete('/api/:table/:id', (req, res) => {
  try {
    const table = req.params.table;
    if (!isValidTable(table))
      return res.status(400).json({ error: 'invalid table' });

    const row = db
      .prepare(`SELECT * FROM ${table} WHERE id = ?`)
      .get(req.params.id);
    if (!row) return res.status(404).json({ error: 'not found' });

    const bucket = tableBucketMap[table];
    if (bucket && row.image_url) deleteFileIfExists(bucket, row.image_url);

    db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(req.params.id);
    broadcast({
      type: 'broadcast',
      table,
      op: 'delete',
      payload: { id: req.params.id },
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error('DELETE /api/:table/:id error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

// الجداول المسموح لها
const ADJUSTABLE_WITHDRAWAL_TABLES = new Set([
  'items_withdrawals',
  'dry_items_withdrawals',
  'meat_items_withdrawals',
]);

app.get('/api/:table/prev', (req, res) => {
  try {
    const { table } = req.params;
    const { item_name, date, id } = req.query;

    // 🔒 أمان
    if (!ADJUSTABLE_WITHDRAWAL_TABLES.has(table)) {
      return res.status(400).json({ error: 'invalid table' });
    }

    if (!item_name || !date || !id) {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const row = db
      .prepare(
        `
        SELECT id, stock_after
        FROM ${table}
        WHERE item_name = ?
          AND (
            date < ?
            OR (date = ? AND id < ?)
          )
        ORDER BY date DESC, id DESC
        LIMIT 1
      `,
      )
      .get(item_name, date, date, id);

    // لو مفيش صف قبله
    if (!row) return res.json(null);

    return res.json(row);
  } catch (err) {
    console.error('get-prev error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.get('/api/:table/next', (req, res) => {
  try {
    const { table } = req.params;
    const { item_name, date, id } = req.query;

    if (!ADJUSTABLE_WITHDRAWAL_TABLES.has(table)) {
      return res.status(400).json({ error: 'invalid table' });
    }

    if (!item_name || !date || !id) {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const hasMissionMeals = table === 'dry_items_withdrawals';

    const sql = hasMissionMeals
      ? `
        SELECT id, stock_after, quantity, mission_meals
        FROM ${table}
        WHERE item_name = ?
          AND (date > ? OR (date = ? AND id > ?))
        ORDER BY date ASC, id ASC
        LIMIT 1
      `
      : `
        SELECT id, stock_after, quantity
        FROM ${table}
        WHERE item_name = ?
          AND (date > ? OR (date = ? AND id > ?))
        ORDER BY date ASC, id ASC
        LIMIT 1
      `;

    const row = db.prepare(sql).get(item_name, date, date, id);

    if (!row) return res.json(null);
    return res.json(row);
  } catch (err) {
    console.error('get-next error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.post('/api/:table/adjust-next', (req, res) => {
  try {
    const { table } = req.params;
    const { item_name, date, id, diff } = req.body;

    // 🔒 أمان
    if (!ADJUSTABLE_WITHDRAWAL_TABLES.has(table)) {
      return res.status(400).json({ error: 'invalid table' });
    }

    if (!item_name || !date || !id || typeof diff !== 'number') {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const rows = db
      .prepare(
        `
      SELECT id, stock_after
      FROM ${table}
      WHERE item_name = ?
        AND (
          date > ?
          OR (date = ? AND id > ?)
        )
      ORDER BY date ASC, id ASC
    `,
      )
      .all(item_name, date, date, id);

    const stmt = db.prepare(`
      UPDATE ${table}
      SET stock_after = ?
      WHERE id = ?
    `);

    // 🟢 Transaction للأمان
    const tx = db.transaction(() => {
      for (const r of rows) {
        stmt.run(Number(r.stock_after) - diff, r.id);
      }
    });

    tx();

    return res.json({ ok: true, affected: rows.length });
  } catch (err) {
    console.error('adjust-next error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

const INCOMING_TO_WITHDRAWALS_MAP = {
  incoming_items: 'items_withdrawals',
  dry_incoming_items: 'dry_items_withdrawals',
  meat_incoming_items: 'meat_items_withdrawals',
};

app.post('/api/:incomingTable/adjust-withdrawals', (req, res) => {
  try {
    const { incomingTable } = req.params;
    const { item_name, date, diff } = req.body;

    const withdrawalsTable = INCOMING_TO_WITHDRAWALS_MAP[incomingTable];
    if (!withdrawalsTable) {
      return res.status(400).json({ error: 'invalid incoming table' });
    }

    if (!item_name || !date || typeof diff !== 'number') {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const rows = db
      .prepare(
        `
      SELECT id, stock_after
      FROM ${withdrawalsTable}
      WHERE item_name = ?
        AND date >= ?
      ORDER BY date ASC
    `,
      )
      .all(item_name, date);

    const stmt = db.prepare(`
      UPDATE ${withdrawalsTable}
      SET stock_after = ?
      WHERE id = ?
    `);

    // 🔒 transaction للأمان
    const tx = db.transaction(() => {
      for (const r of rows) {
        stmt.run(Number(r.stock_after || 0) + diff, r.id);
      }
    });

    tx();

    return res.json({
      ok: true,
      affected: rows.length,
      withdrawalsTable,
    });
  } catch (err) {
    console.error('adjust-withdrawals error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.post('/api/bakery/apply-incoming-to-daily', (req, res) => {
  try {
    const { date, items } = req.body;

    if (!date || !items || typeof items !== 'object') {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const tables = [
      { name: 'flour', key: 'flour' },
      { name: 'bran', key: 'bran' },
      { name: 'yeast', key: 'yeast' },
      { name: 'salt', key: 'salt' },
    ];

    const tx = db.transaction(() => {
      for (const t of tables) {
        const delta = Number(items[t.key] || 0);
        if (!delta) continue;

        db.prepare(
          `
          UPDATE ${t.name}
          SET current = COALESCE(current, 0) + ?
          WHERE date > ?
        `,
        ).run(delta, date);
      }
    });

    tx();

    return res.json({ ok: true });
  } catch (err) {
    console.error('apply-incoming-to-daily error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

// ================================
//       CRUD HELPERS & API
// ================================
const allowedTables = new Set([
  'bakery_incoming',
  'bakery_output',
  'bakery_stock_single',
  'bran',
  'branch_soldiers',
  'current_stock',
  'dry_current_stock',
  'dry_incoming_items',
  'dry_items_withdrawals',
  'flour',
  'health_certificates',
  'bakery_health_certificates',
  'incoming_items',
  'items_withdrawals',
  'meat_current_stock',
  'meat_incoming_items',
  'meat_items_withdrawals',
  'numbers_report',
  'officers',
  'ramadan',
  'role_dates',
  'bakery_role_dates',
  'salt',
  'soldier_roles',
  'bakery_soldier_roles',
  'soldiers',
  'yeast',
  'permit_number',
  'permit_number_dry',
  'permit_number_return',
  'permit_number_tarfih',
  'permit_number_fresh',
  'daily_withdrawal',
]);

function isValidTable(name) {
  return allowedTables.has(name);
}

const tableColumnsCache = new Map();

function getTableColumns(table) {
  if (tableColumnsCache.has(table)) return tableColumnsCache.get(table);
  try {
    const rows = db.prepare(`PRAGMA table_info(${table})`).all();
    const cols = rows.map(r => r.name);
    tableColumnsCache.set(table, cols);
    return cols;
  } catch (err) {
    return [];
  }
}

function filterPayload(table, payload, opts = {}) {
  const cols = getTableColumns(table);
  const out = {};
  if (!payload || typeof payload !== 'object') return out;

  Object.keys(payload).forEach(k => {
    if (cols.includes(k)) out[k] = sanitizeValue(payload[k]);
  });

  if (
    opts.setCreatedAt &&
    cols.includes('created_at') &&
    !Object.prototype.hasOwnProperty.call(payload, 'created_at')
  ) {
    out.created_at = new Date().toISOString();
  }

  return out;
}

function resolveOrderBy(table, requested) {
  const cols = getTableColumns(table);
  const allowed = new Set(['date', 'created_at']);
  if (requested && allowed.has(requested) && cols.includes(requested))
    return requested;
  return cols.includes('date') ? 'date' : 'created_at';
}

function buildWhereAndParamsFromQuery(table, query) {
  const where = [];
  const params = [];
  const cols = getTableColumns(table);

  if (query.date && cols.includes('date')) {
    where.push('date = ?');
    params.push(query.date);
  }
  if (query.date_from && cols.includes('date')) {
    where.push('date >= ?');
    params.push(query.date_from);
  }
  if (query.date_to && cols.includes('date')) {
    where.push('date <= ?');
    params.push(query.date_to);
  }
  ['item_name', 'receiver_name', 'level', 'branch', 'name'].forEach(k => {
    if (query[k] && cols.includes(k)) {
      where.push(`${k} = ?`);
      params.push(query[k]);
    }
  });

  return { where, params };
}

// set no-store for API responses to avoid SW caching
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

// GET list with filters & ordering
app.get('/api/:table', (req, res) => {
  try {
    const table = req.params.table;
    if (!isValidTable(table))
      return res.status(400).json({ error: 'invalid table' });

    const { where, params } = buildWhereAndParamsFromQuery(table, req.query);

    let orderBy = resolveOrderBy(table, req.query.order_by);
    let order = (req.query.order || 'desc').toLowerCase();
    if (order !== 'asc' && order !== 'desc') order = 'desc';

    const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';

    const hasLimit = req.query.limit !== undefined;

    let sql;
    let finalParams = params;

    if (hasLimit) {
      const limit = Math.min(parseInt(req.query.limit, 10) || 100, 1000);
      const offset = Math.max(parseInt(req.query.offset || '0', 10), 0);

      sql = `
        SELECT * FROM ${table}
        ${whereSql}
        ORDER BY ${orderBy} ${order.toUpperCase()}
        LIMIT ? OFFSET ?
      `;

      finalParams = params.concat([limit, offset]);
    } else {
      sql = `
        SELECT * FROM ${table}
        ${whereSql}
        ORDER BY ${orderBy} ${order.toUpperCase()}
      `;
    }

    const rows = db.prepare(sql).all(...finalParams);

    // restore booleans for rows if needed
    const restored = rows.map(r => restoreRowBooleans(r, table));

    return res.json(restored);
  } catch (err) {
    console.error('GET /api/:table error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.get('/api/:table/:id', (req, res) => {
  try {
    const table = req.params.table;
    if (!isValidTable(table))
      return res.status(400).json({ error: 'invalid table' });

    let row = db
      .prepare(`SELECT * FROM ${table} WHERE id = ?`)
      .get(req.params.id);
    if (!row) return res.status(404).json({ error: 'not found' });

    row = restoreRowBooleans(row, table);

    return res.json(row);
  } catch (err) {
    console.error('GET /api/:table/:id error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.post('/api/:table', (req, res) => {
  try {
    const table = req.params.table;
    if (!isValidTable(table))
      return res.status(400).json({ error: 'invalid table' });

    const payload = filterPayload(table, req.body, { setCreatedAt: true });

    const keys = Object.keys(payload);
    if (!keys.length)
      return res.status(400).json({ error: 'no valid fields provided' });

    const placeholders = keys.map(() => '?').join(', ');
    const colsSql = keys.join(', ');
    const values = keys.map(k => payload[k]);

    const stmt = db.prepare(
      `INSERT INTO ${table} (${colsSql}) VALUES (${placeholders})`,
    );
    const info = stmt.run(...values);
    const id = info.lastInsertRowid;
    let row = db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(id);

    row = restoreRowBooleans(row, table);

    broadcast({ type: 'broadcast', table, op: 'create', payload: row });

    return res.status(201).json(row);
  } catch (err) {
    console.error('POST /api/:table error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

// UPDATE
app.put('/api/:table/:id', (req, res) => {
  try {
    const table = req.params.table;
    if (!isValidTable(table))
      return res.status(400).json({ error: 'invalid table' });

    const payload = filterPayload(table, req.body);
    const keys = Object.keys(payload);
    if (!keys.length)
      return res.status(400).json({ error: 'no valid fields provided' });

    const setSql = keys.map(k => `${k} = ?`).join(', ');
    const values = keys.map(k => payload[k]).concat(req.params.id);

    db.prepare(`UPDATE ${table} SET ${setSql} WHERE id = ?`).run(...values);
    let row = db
      .prepare(`SELECT * FROM ${table} WHERE id = ?`)
      .get(req.params.id);

    row = restoreRowBooleans(row, table);

    broadcast({ type: 'broadcast', table, op: 'update', payload: row });

    return res.json(row);
  } catch (err) {
    console.error('PUT /api/:table/:id error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

// ================================
//             MISC
// ================================
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.get('/tables', (req, res) => {
  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table'")
    .all();
  res.json(tables);
});

// serve static files
app.use(express.static(DIST_DIR));

// SPA fallback (after other routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// ================================
//        START SERVER + WS
// ================================
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name in nets) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIP();

server.listen(PORT, () => {
  console.log('====================');
  console.log('Starting Host Server');
  console.log('====================');
  console.log('');
  console.log(`host → http://localhost:${PORT}`);
  console.log(`client → http://${localIP}:${PORT}`);
  console.log('');
  console.log('email    :  [admin@example.com]');
  console.log("password :  [e:jT'gu-!ha'|y%_n]");
  console.log('');
  console.log('=============================================');
  console.log("Server Is Running.., Don't Close This Window");
  console.log('=============================================');
});

const wss = new WebSocketServer({ server, path: '/ws' });

function broadcast(payload) {
  const msg = JSON.stringify(payload);
  if (!wss) return;
  wss.clients.forEach(c => {
    if (c && c.readyState === 1) {
      try {
        c.send(msg);
      } catch (e) {
        /* ignore send errors */
      }
    }
  });
}

wss.on('connection', socket => {
  console.log('WS client connected');
  socket.on('message', msg => {
    /* future messages */
  });
  socket.on('close', () => {
    console.log('WS client disconnected');
  });
});
