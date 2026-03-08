export default function initializeSchema(db) {
  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS bakery_incoming (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    date TEXT,
    receiver_name TEXT,
    flour_qty REAL,
    flour_unit TEXT,
    bran_qty REAL,
    bran_unit TEXT,
    yeast_qty REAL,
    yeast_unit TEXT,
    salt_qty REAL,
    salt_unit TEXT
  )
`,
  ).run();

  db.prepare(
    `
  CREATE INDEX IF NOT EXISTS bakery_incoming_date_idx
  ON bakery_incoming (date)
`,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS bakery_output (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    is_ramadan INTEGER NOT NULL DEFAULT 0,
    total_output REAL NOT NULL DEFAULT 0,
    dry_meals_output REAL NOT NULL DEFAULT 0,
    bread_output REAL NOT NULL DEFAULT 0,
    flour_qty_output REAL NOT NULL DEFAULT 0,
    bran_qty_output REAL NOT NULL DEFAULT 0,
    yeast_qty_output REAL NOT NULL DEFAULT 0,
    salt_qty_output REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`,
  ).run();

  db.prepare(
    `
  CREATE INDEX IF NOT EXISTS bakery_output_date_idx
  ON bakery_output (date)
`,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS bakery_stock_single (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    flour_qty REAL DEFAULT 0,
    flour_unit TEXT,
    bran_qty REAL DEFAULT 0,
    bran_unit TEXT,
    yeast_qty REAL DEFAULT 0,
    yeast_unit TEXT,
    salt_qty REAL DEFAULT 0,
    salt_unit TEXT
  )
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS bran (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  income REAL NOT NULL DEFAULT 0,
  consumed REAL NOT NULL DEFAULT 0,
  current REAL NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_bran_date ON bran (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS branch_soldiers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  branch TEXT NOT NULL,
  name TEXT NOT NULL,
  police_number TEXT,
  address TEXT,
  qualification TEXT,
  batch_date TEXT,
  reserve_date TEXT,
  image_url TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS current_stock (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  current_quantity REAL NOT NULL DEFAULT 0,
  unit TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS dry_current_stock (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  current_quantity REAL NOT NULL DEFAULT 0,
  unit TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS dry_incoming_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  date TEXT NOT NULL,
  receiver_name TEXT NOT NULL,
  quantity REAL NOT NULL,
  unit TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  mission_meals REAL,
  mission_type TEXT,
  expiry_date TEXT,
  permit_number REAL,
  permit_number_mission REAL
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_dry_incoming_items_date ON dry_incoming_items (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS dry_items_withdrawals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  date TEXT NOT NULL,
  quantity REAL NOT NULL,
  net_weight REAL NOT NULL,
  expiry_date TEXT,
  ration_type TEXT,
  unit TEXT NOT NULL,
  mission_meals REAL,
  mission_type TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  stock_after REAL
);
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_dry_items_withdrawals_date
ON dry_items_withdrawals (date);
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS flour (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  income REAL NOT NULL DEFAULT 0,
  consumed REAL NOT NULL DEFAULT 0,
  current REAL NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_flour_date ON flour (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS health_certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_url TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  expiry_date TEXT
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS bakery_health_certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_url TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  expiry_date TEXT
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS incoming_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  date TEXT NOT NULL,
  receiver_name TEXT NOT NULL,
  quantity REAL NOT NULL,
  unit TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  expiry_date TEXT,
  permit_number REAL
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_incoming_items_date ON incoming_items (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS items_withdrawals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  date TEXT NOT NULL,
  quantity REAL NOT NULL,
  net_weight REAL NOT NULL,
  expiry_date TEXT,
  ration_type TEXT,
  unit TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  quantity_azim REAL,
  stock_after REAL
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_items_withdrawals_date ON items_withdrawals (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS meat_current_stock (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  current_quantity REAL NOT NULL DEFAULT 0,
  unit TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS meat_incoming_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  date TEXT NOT NULL,
  receiver_name TEXT NOT NULL,
  quantity REAL NOT NULL,
  unit TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  vet_check TEXT,
  expiry_date TEXT,
  permit_number REAL
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_meat_incoming_items_date ON meat_incoming_items (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS meat_items_withdrawals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT NOT NULL,
  date TEXT NOT NULL,
  quantity REAL NOT NULL,
  net_weight REAL NOT NULL,
  expiry_date TEXT,
  ration_type TEXT,
  unit TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  stock_after REAL
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_meat_items_withdrawals_date ON meat_items_withdrawals (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS numbers_report (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  officers REAL NOT NULL,
  individuals REAL NOT NULL,
  soldiers REAL NOT NULL,
  total REAL NOT NULL,
  dry_meals REAL,
  dry_meals_bakery REAL,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_numbers_report_date ON numbers_report (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS officers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rank TEXT NOT NULL,
  name TEXT NOT NULL,
  seniority TEXT,
  appointmentDate TEXT,
  phone TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS ramadan (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  is_ramadan INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS role_dates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level TEXT NOT NULL,
  from_date TEXT,
  to_date TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS bakery_role_dates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level TEXT NOT NULL,
  from_date TEXT,
  to_date TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS salt (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  income REAL NOT NULL DEFAULT 0,
  consumed REAL NOT NULL DEFAULT 0,
  current REAL NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_salt_date ON salt (date)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS soldier_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level TEXT NOT NULL,
  name TEXT NOT NULL,
  from_date TEXT NOT NULL,
  to_date TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS bakery_soldier_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level TEXT NOT NULL,
  name TEXT NOT NULL,
  from_date TEXT NOT NULL,
  to_date TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS soldiers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rank TEXT NOT NULL,
  name TEXT NOT NULL,
  appointmentDate TEXT NOT NULL,
  phone TEXT,
  seniority TEXT,
  created_at TEXT DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE TABLE IF NOT EXISTS yeast (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  income REAL NOT NULL DEFAULT 0,
  consumed REAL NOT NULL DEFAULT 0,
  current REAL NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_yeast_date ON yeast (date)
`,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS permit_number (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
  `,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS permit_number_dry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
  `,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS permit_number_return (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
  `,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS permit_number_tarfih (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
  `,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS permit_number_fresh (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
  `,
  ).run();

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS daily_withdrawal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    manual_swap TEXT,
    selected_day TEXT,

    -- Fresh items
    rice_officers REAL DEFAULT 0,
    rice_individuals REAL DEFAULT 0,
    rice_soldiers REAL DEFAULT 0,
    rice_total REAL DEFAULT 0,

    macaroni_officers REAL DEFAULT 0,
    macaroni_individuals REAL DEFAULT 0,
    macaroni_soldiers REAL DEFAULT 0,
    macaroni_total REAL DEFAULT 0,

    sauce_rice_officers REAL DEFAULT 0,
    sauce_rice_individuals REAL DEFAULT 0,
    sauce_rice_soldiers REAL DEFAULT 0,
    sauce_rice_total REAL DEFAULT 0,

    black_pepper_rice_officers REAL DEFAULT 0,
    black_pepper_rice_individuals REAL DEFAULT 0,
    black_pepper_rice_soldiers REAL DEFAULT 0,
    black_pepper_rice_total REAL DEFAULT 0,

    sauce_macaroni_officers REAL DEFAULT 0,
    sauce_macaroni_individuals REAL DEFAULT 0,
    sauce_macaroni_soldiers REAL DEFAULT 0,
    sauce_macaroni_total REAL DEFAULT 0,

    black_pepper_macaroni_officers REAL DEFAULT 0,
    black_pepper_macaroni_individuals REAL DEFAULT 0,
    black_pepper_macaroni_soldiers REAL DEFAULT 0,
    black_pepper_macaroni_total REAL DEFAULT 0,

    noodles_officers REAL DEFAULT 0,
    noodles_individuals REAL DEFAULT 0,
    noodles_soldiers REAL DEFAULT 0,
    noodles_total REAL DEFAULT 0,

    cooking_oil_officers REAL DEFAULT 0,
    cooking_oil_individuals REAL DEFAULT 0,
    cooking_oil_soldiers REAL DEFAULT 0,
    cooking_oil_total REAL DEFAULT 0,

    white_beans_officers REAL DEFAULT 0,
    white_beans_individuals REAL DEFAULT 0,
    white_beans_soldiers REAL DEFAULT 0,
    white_beans_total REAL DEFAULT 0,

    fava_officers REAL DEFAULT 0,
    fava_individuals REAL DEFAULT 0,
    fava_soldiers REAL DEFAULT 0,
    fava_total REAL DEFAULT 0,

    sugar_officers REAL DEFAULT 0,
    sugar_individuals REAL DEFAULT 0,
    sugar_soldiers REAL DEFAULT 0,
    sugar_total REAL DEFAULT 0,

    tea_officers REAL DEFAULT 0,
    tea_individuals REAL DEFAULT 0,
    tea_soldiers REAL DEFAULT 0,
    tea_total REAL DEFAULT 0,

    cumin_officers REAL DEFAULT 0,
    cumin_individuals REAL DEFAULT 0,
    cumin_soldiers REAL DEFAULT 0,
    cumin_total REAL DEFAULT 0,

    salt_officers REAL DEFAULT 0,
    salt_individuals REAL DEFAULT 0,
    salt_soldiers REAL DEFAULT 0,
    salt_total REAL DEFAULT 0,

    garlic_powder_officers REAL DEFAULT 0,
    garlic_powder_individuals REAL DEFAULT 0,
    garlic_powder_soldiers REAL DEFAULT 0,
    garlic_powder_total REAL DEFAULT 0,

    spices_officers REAL DEFAULT 0,
    spices_individuals REAL DEFAULT 0,
    spices_soldiers REAL DEFAULT 0,
    spices_total REAL DEFAULT 0,

    eggs_officers REAL DEFAULT 0,
    eggs_individuals REAL DEFAULT 0,
    eggs_soldiers REAL DEFAULT 0,
    eggs_total REAL DEFAULT 0,

    -- Dry items
    white_cheese_officers REAL DEFAULT 0,
    white_cheese_individuals REAL DEFAULT 0,
    white_cheese_soldiers REAL DEFAULT 0,
    white_cheese_total REAL DEFAULT 0,

    jam_officers REAL DEFAULT 0,
    jam_individuals REAL DEFAULT 0,
    jam_soldiers REAL DEFAULT 0,
    jam_total REAL DEFAULT 0,

    halawa_officers REAL DEFAULT 0,
    halawa_individuals REAL DEFAULT 0,
    halawa_soldiers REAL DEFAULT 0,
    halawa_total REAL DEFAULT 0,

    canned_fava_officers REAL DEFAULT 0,
    canned_fava_individuals REAL DEFAULT 0,
    canned_fava_soldiers REAL DEFAULT 0,
    canned_fava_total REAL DEFAULT 0,

    juice_officers REAL DEFAULT 0,
    juice_individuals REAL DEFAULT 0,
    juice_soldiers REAL DEFAULT 0,
    juice_total REAL DEFAULT 0,

    -- Meat items
    meat_officers REAL DEFAULT 0,
    meat_individuals REAL DEFAULT 0,
    meat_soldiers REAL DEFAULT 0,
    meat_total REAL DEFAULT 0,

    chicken_officers REAL DEFAULT 0,
    chicken_individuals REAL DEFAULT 0,
    chicken_soldiers REAL DEFAULT 0,
    chicken_total REAL DEFAULT 0,

    frozen_vegetables_officers REAL DEFAULT 0,
    frozen_vegetables_individuals REAL DEFAULT 0,
    frozen_vegetables_soldiers REAL DEFAULT 0,
    frozen_vegetables_total REAL DEFAULT 0,

    lentils_officers REAL DEFAULT 0,
    lentils_individuals REAL DEFAULT 0,
    lentils_soldiers REAL DEFAULT 0,
    lentils_total REAL DEFAULT 0,

    -- Extras
    onion_officers REAL DEFAULT 0,
    onion_individuals REAL DEFAULT 0,
    onion_soldiers REAL DEFAULT 0,
    onion_total REAL DEFAULT 0,

    fruits_officers REAL DEFAULT 0,
    fruits_individuals REAL DEFAULT 0,
    fruits_soldiers REAL DEFAULT 0,
    fruits_total REAL DEFAULT 0,

    salad_officers REAL DEFAULT 0,
    salad_individuals REAL DEFAULT 0,
    salad_soldiers REAL DEFAULT 0,
    salad_total REAL DEFAULT 0,

    zabady_officers REAL DEFAULT 0,
    zabady_individuals REAL DEFAULT 0,
    zabady_soldiers REAL DEFAULT 0,
    zabady_total REAL DEFAULT 0,

    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`,
  ).run();

  db.prepare(
    `
CREATE INDEX IF NOT EXISTS idx_daily_withdrawal_date ON daily_withdrawal (date)
`,
  ).run();
}
