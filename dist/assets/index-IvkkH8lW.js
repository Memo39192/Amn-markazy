(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}})();function I4(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zh={exports:{}},dl={};var Ib;function K4(){if(Ib)return dl;Ib=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(s,c,u){var h=null;if(u!==void 0&&(h=""+u),c.key!==void 0&&(h=""+c.key),"key"in c){u={};for(var p in c)p!=="key"&&(u[p]=c[p])}else u=c;return c=u.ref,{$$typeof:e,type:s,key:h,ref:c!==void 0?c:null,props:u}}return dl.Fragment=a,dl.jsx=o,dl.jsxs=o,dl}var Kb;function X4(){return Kb||(Kb=1,zh.exports=K4()),zh.exports}var r=X4(),Ah={exports:{}},Ne={};var Xb;function Z4(){if(Xb)return Ne;Xb=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function j(k){return k===null||typeof k!="object"?null:(k=x&&k[x]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,$={};function D(k,Z,se){this.props=k,this.context=Z,this.refs=$,this.updater=se||_}D.prototype.isReactComponent={},D.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},D.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function A(){}A.prototype=D.prototype;function M(k,Z,se){this.props=k,this.context=Z,this.refs=$,this.updater=se||_}var O=M.prototype=new A;O.constructor=M,C(O,D.prototype),O.isPureReactComponent=!0;var z=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function F(k,Z,se,de,J,ye){return se=ye.ref,{$$typeof:e,type:k,key:Z,ref:se!==void 0?se:null,props:ye}}function ie(k,Z){return F(k.type,Z,void 0,void 0,void 0,k.props)}function K(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function ue(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(se){return Z[se]})}var X=/\/+/g;function H(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?ue(""+k.key):Z.toString(36)}function oe(){}function ce(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(oe,oe):(k.status="pending",k.then(function(Z){k.status==="pending"&&(k.status="fulfilled",k.value=Z)},function(Z){k.status==="pending"&&(k.status="rejected",k.reason=Z)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function Y(k,Z,se,de,J){var ye=typeof k;(ye==="undefined"||ye==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(ye){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case e:case a:ve=!0;break;case b:return ve=k._init,Y(ve(k._payload),Z,se,de,J)}}if(ve)return J=J(k),ve=de===""?"."+H(k,0):de,z(J)?(se="",ve!=null&&(se=ve.replace(X,"$&/")+"/"),Y(J,Z,se,"",function(rt){return rt})):J!=null&&(K(J)&&(J=ie(J,se+(J.key==null||k&&k.key===J.key?"":(""+J.key).replace(X,"$&/")+"/")+ve)),Z.push(J)),1;ve=0;var Le=de===""?".":de+":";if(z(k))for(var Ce=0;Ce<k.length;Ce++)de=k[Ce],ye=Le+H(de,Ce),ve+=Y(de,Z,se,ye,J);else if(Ce=j(k),typeof Ce=="function")for(k=Ce.call(k),Ce=0;!(de=k.next()).done;)de=de.value,ye=Le+H(de,Ce++),ve+=Y(de,Z,se,ye,J);else if(ye==="object"){if(typeof k.then=="function")return Y(ce(k),Z,se,de,J);throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ve}function N(k,Z,se){if(k==null)return k;var de=[],J=0;return Y(k,de,"","",function(ye){return Z.call(se,ye,J++)}),de}function ne(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(se){(k._status===0||k._status===-1)&&(k._status=1,k._result=se)},function(se){(k._status===0||k._status===-1)&&(k._status=2,k._result=se)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function te(){}return Ne.Children={map:N,forEach:function(k,Z,se){N(k,function(){Z.apply(this,arguments)},se)},count:function(k){var Z=0;return N(k,function(){Z++}),Z},toArray:function(k){return N(k,function(Z){return Z})||[]},only:function(k){if(!K(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Ne.Component=D,Ne.Fragment=o,Ne.Profiler=c,Ne.PureComponent=M,Ne.StrictMode=s,Ne.Suspense=g,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(k){return I.H.useMemoCache(k)}},Ne.cache=function(k){return function(){return k.apply(null,arguments)}},Ne.cloneElement=function(k,Z,se){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var de=C({},k.props),J=k.key,ye=void 0;if(Z!=null)for(ve in Z.ref!==void 0&&(ye=void 0),Z.key!==void 0&&(J=""+Z.key),Z)!R.call(Z,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&Z.ref===void 0||(de[ve]=Z[ve]);var ve=arguments.length-2;if(ve===1)de.children=se;else if(1<ve){for(var Le=Array(ve),Ce=0;Ce<ve;Ce++)Le[Ce]=arguments[Ce+2];de.children=Le}return F(k.type,J,void 0,void 0,ye,de)},Ne.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:u,_context:k},k},Ne.createElement=function(k,Z,se){var de,J={},ye=null;if(Z!=null)for(de in Z.key!==void 0&&(ye=""+Z.key),Z)R.call(Z,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(J[de]=Z[de]);var ve=arguments.length-2;if(ve===1)J.children=se;else if(1<ve){for(var Le=Array(ve),Ce=0;Ce<ve;Ce++)Le[Ce]=arguments[Ce+2];J.children=Le}if(k&&k.defaultProps)for(de in ve=k.defaultProps,ve)J[de]===void 0&&(J[de]=ve[de]);return F(k,ye,void 0,void 0,null,J)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(k){return{$$typeof:p,render:k}},Ne.isValidElement=K,Ne.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:ne}},Ne.memo=function(k,Z){return{$$typeof:y,type:k,compare:Z===void 0?null:Z}},Ne.startTransition=function(k){var Z=I.T,se={};I.T=se;try{var de=k(),J=I.S;J!==null&&J(se,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(te,pe)}catch(ye){pe(ye)}finally{I.T=Z}},Ne.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Ne.use=function(k){return I.H.use(k)},Ne.useActionState=function(k,Z,se){return I.H.useActionState(k,Z,se)},Ne.useCallback=function(k,Z){return I.H.useCallback(k,Z)},Ne.useContext=function(k){return I.H.useContext(k)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(k,Z){return I.H.useDeferredValue(k,Z)},Ne.useEffect=function(k,Z,se){var de=I.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return de.useEffect(k,Z)},Ne.useId=function(){return I.H.useId()},Ne.useImperativeHandle=function(k,Z,se){return I.H.useImperativeHandle(k,Z,se)},Ne.useInsertionEffect=function(k,Z){return I.H.useInsertionEffect(k,Z)},Ne.useLayoutEffect=function(k,Z){return I.H.useLayoutEffect(k,Z)},Ne.useMemo=function(k,Z){return I.H.useMemo(k,Z)},Ne.useOptimistic=function(k,Z){return I.H.useOptimistic(k,Z)},Ne.useReducer=function(k,Z,se){return I.H.useReducer(k,Z,se)},Ne.useRef=function(k){return I.H.useRef(k)},Ne.useState=function(k){return I.H.useState(k)},Ne.useSyncExternalStore=function(k,Z,se){return I.H.useSyncExternalStore(k,Z,se)},Ne.useTransition=function(){return I.H.useTransition()},Ne.version="19.1.0",Ne}var Zb;function x1(){return Zb||(Zb=1,Ah.exports=Z4()),Ah.exports}var S=x1();const tt=I4(S);var qh={exports:{}},ul={},Nh={exports:{}},Oh={};var Jb;function J4(){return Jb||(Jb=1,function(e){function a(N,ne){var pe=N.length;N.push(ne);e:for(;0<pe;){var te=pe-1>>>1,k=N[te];if(0<c(k,ne))N[te]=ne,N[pe]=k,pe=te;else break e}}function o(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var ne=N[0],pe=N.pop();if(pe!==ne){N[0]=pe;e:for(var te=0,k=N.length,Z=k>>>1;te<Z;){var se=2*(te+1)-1,de=N[se],J=se+1,ye=N[J];if(0>c(de,pe))J<k&&0>c(ye,de)?(N[te]=ye,N[J]=pe,te=J):(N[te]=de,N[se]=pe,te=se);else if(J<k&&0>c(ye,pe))N[te]=ye,N[J]=pe,te=J;else break e}}return ne}function c(N,ne){var pe=N.sortIndex-ne.sortIndex;return pe!==0?pe:N.id-ne.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();e.unstable_now=function(){return h.now()-p}}var g=[],y=[],b=1,x=null,j=3,_=!1,C=!1,$=!1,D=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var ne=o(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=N)s(y),ne.sortIndex=ne.expirationTime,a(g,ne);else break;ne=o(y)}}function I(N){if($=!1,z(N),!C)if(o(g)!==null)C=!0,R||(R=!0,H());else{var ne=o(y);ne!==null&&Y(I,ne.startTime-N)}}var R=!1,F=-1,ie=5,K=-1;function ue(){return D?!0:!(e.unstable_now()-K<ie)}function X(){if(D=!1,R){var N=e.unstable_now();K=N;var ne=!0;try{e:{C=!1,$&&($=!1,M(F),F=-1),_=!0;var pe=j;try{t:{for(z(N),x=o(g);x!==null&&!(x.expirationTime>N&&ue());){var te=x.callback;if(typeof te=="function"){x.callback=null,j=x.priorityLevel;var k=te(x.expirationTime<=N);if(N=e.unstable_now(),typeof k=="function"){x.callback=k,z(N),ne=!0;break t}x===o(g)&&s(g),z(N)}else s(g);x=o(g)}if(x!==null)ne=!0;else{var Z=o(y);Z!==null&&Y(I,Z.startTime-N),ne=!1}}break e}finally{x=null,j=pe,_=!1}ne=void 0}}finally{ne?H():R=!1}}}var H;if(typeof O=="function")H=function(){O(X)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=X,H=function(){ce.postMessage(null)}}else H=function(){A(X,0)};function Y(N,ne){F=A(function(){N(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return j},e.unstable_next=function(N){switch(j){case 1:case 2:case 3:var ne=3;break;default:ne=j}var pe=j;j=ne;try{return N()}finally{j=pe}},e.unstable_requestPaint=function(){D=!0},e.unstable_runWithPriority=function(N,ne){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var pe=j;j=N;try{return ne()}finally{j=pe}},e.unstable_scheduleCallback=function(N,ne,pe){var te=e.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?te+pe:te):pe=te,N){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=pe+k,N={id:b++,callback:ne,priorityLevel:N,startTime:pe,expirationTime:k,sortIndex:-1},pe>te?(N.sortIndex=pe,a(y,N),o(g)===null&&N===o(y)&&($?(M(F),F=-1):$=!0,Y(I,pe-te))):(N.sortIndex=k,a(g,N),C||_||(C=!0,R||(R=!0,H()))),N},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(N){var ne=j;return function(){var pe=j;j=ne;try{return N.apply(this,arguments)}finally{j=pe}}}}(Oh)),Oh}var Wb;function W4(){return Wb||(Wb=1,Nh.exports=J4()),Nh.exports}var Mh={exports:{}},It={};var e2;function e5(){if(e2)return It;e2=1;var e=x1();function a(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(g,y,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:g,containerInfo:y,implementation:b}}var h=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,It.createPortal=function(g,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return u(g,y,null,b)},It.flushSync=function(g){var y=h.T,b=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=y,s.p=b,s.d.f()}},It.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},It.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},It.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var b=y.as,x=p(b,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,_=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:j,fetchPriority:_}):b==="script"&&s.d.X(g,{crossOrigin:x,integrity:j,fetchPriority:_,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},It.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},It.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,x=p(b,y.crossOrigin);s.d.L(g,b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},It.preloadModule=function(g,y){if(typeof g=="string")if(y){var b=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},It.requestFormReset=function(g){s.d.r(g)},It.unstable_batchedUpdates=function(g,y){return g(y)},It.useFormState=function(g,y,b){return h.H.useFormState(g,y,b)},It.useFormStatus=function(){return h.H.useHostTransitionStatus()},It.version="19.1.0",It}var t2;function t5(){if(t2)return Mh.exports;t2=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Mh.exports=e5(),Mh.exports}var r2;function r5(){if(r2)return ul;r2=1;var e=W4(),a=x1(),o=t5();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,l=n;;){var d=i.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===i)return p(d),t;if(m===l)return p(d),n;m=m.sibling}throw Error(s(188))}if(i.return!==l.return)i=d,l=m;else{for(var v=!1,w=d.child;w;){if(w===i){v=!0,i=d,l=m;break}if(w===l){v=!0,l=d,i=m;break}w=w.sibling}if(!v){for(w=m.child;w;){if(w===i){v=!0,i=m,l=d;break}if(w===l){v=!0,l=m,i=d;break}w=w.sibling}if(!v)throw Error(s(189))}}if(i.alternate!==l)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),O=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case D:return"Profiler";case $:return"StrictMode";case I:return"Suspense";case R:return"SuspenseList";case K:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case _:return"Portal";case O:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case ie:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var Y=Array.isArray,N=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},te=[],k=-1;function Z(t){return{current:t}}function se(t){0>k||(t.current=te[k],te[k]=null,k--)}function de(t,n){k++,te[k]=t.current,t.current=n}var J=Z(null),ye=Z(null),ve=Z(null),Le=Z(null);function Ce(t,n){switch(de(ve,n),de(ye,t),de(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wb(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wb(n),t=_b(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(J),de(J,t)}function rt(){se(J),se(ye),se(ve)}function nt(t){t.memoizedState!==null&&de(Le,t);var n=J.current,i=_b(n,t.type);n!==i&&(de(ye,t),de(J,i))}function Ft(t){ye.current===t&&(se(J),se(ye)),Le.current===t&&(se(Le),il._currentValue=pe)}var Dt=Object.prototype.hasOwnProperty,Ia=e.unstable_scheduleCallback,ea=e.unstable_cancelCallback,Ui=e.unstable_shouldYield,le=e.unstable_requestPaint,ke=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ue=e.unstable_ImmediatePriority,E=e.unstable_UserBlockingPriority,U=e.unstable_NormalPriority,V=e.unstable_LowPriority,me=e.unstable_IdlePriority,fe=e.log,he=e.unstable_setDisableYieldValue,xe=null,ze=null;function Oe(t){if(typeof fe=="function"&&he(t),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(xe,t)}catch{}}var at=Math.clz32?Math.clz32:vf,Fi=Math.log,Wr=Math.LN2;function vf(t){return t>>>=0,t===0?32:31-(Fi(t)/Wr|0)|0}var ta=256,ra=4194304;function jn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ka(t,n,i){var l=t.pendingLanes;if(l===0)return 0;var d=0,m=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?d=jn(l):(v&=w,v!==0?d=jn(v):i||(i=w&~t,i!==0&&(d=jn(i))))):(w=l&~m,w!==0?d=jn(w):v!==0?d=jn(v):i||(i=l&~t,i!==0&&(d=jn(i)))),d===0?0:n!==0&&n!==d&&(n&m)===0&&(m=d&-d,i=n&-n,m>=i||m===32&&(i&4194048)!==0)?n:d}function Xa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ip(){var t=ta;return ta<<=1,(ta&4194048)===0&&(ta=256),t}function op(){var t=ra;return ra<<=1,(ra&62914560)===0&&(ra=4194304),t}function jf(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function ps(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function O6(t,n,i,l,d,m){var v=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var w=t.entanglements,T=t.expirationTimes,P=t.hiddenUpdates;for(i=v&~i;0<i;){var ee=31-at(i),ae=1<<ee;w[ee]=0,T[ee]=-1;var Q=P[ee];if(Q!==null)for(P[ee]=null,ee=0;ee<Q.length;ee++){var G=Q[ee];G!==null&&(G.lane&=-536870913)}i&=~ae}l!==0&&sp(t,l,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(v&~n))}function sp(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-at(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|i&4194090}function lp(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var l=31-at(i),d=1<<l;d&n|t[l]&n&&(t[l]|=n),i&=~d}}function wf(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _f(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function cp(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:Pb(t.type))}function M6(t,n){var i=ne.p;try{return ne.p=t,n()}finally{ne.p=i}}var na=Math.random().toString(36).slice(2),Vt="__reactFiber$"+na,ar="__reactProps$"+na,Li="__reactContainer$"+na,Sf="__reactEvents$"+na,B6="__reactListeners$"+na,U6="__reactHandles$"+na,dp="__reactResources$"+na,gs="__reactMarker$"+na;function kf(t){delete t[Vt],delete t[ar],delete t[Sf],delete t[B6],delete t[U6]}function Pi(t){var n=t[Vt];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Li]||i[Vt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=Cb(t);t!==null;){if(i=t[Vt])return i;t=Cb(t)}return n}t=i,i=t.parentNode}return null}function Hi(t){if(t=t[Vt]||t[Li]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ys(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Qi(t){var n=t[dp];return n||(n=t[dp]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Rt(t){t[gs]=!0}var up=new Set,fp={};function Za(t,n){Gi(t,n),Gi(t+"Capture",n)}function Gi(t,n){for(fp[t]=n,t=0;t<n.length;t++)up.add(n[t])}var F6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mp={},hp={};function L6(t){return Dt.call(hp,t)?!0:Dt.call(mp,t)?!1:F6.test(t)?hp[t]=!0:(mp[t]=!0,!1)}function sc(t,n,i){if(L6(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function lc(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function wn(t,n,i,l){if(l===null)t.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+l)}}var $f,pp;function Vi(t){if($f===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);$f=n&&n[1]||"",pp=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$f+t+pp}var Cf=!1;function Ef(t,n){if(!t||Cf)return"";Cf=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(G){var Q=G}Reflect.construct(t,[],ae)}else{try{ae.call()}catch(G){Q=G}t.call(ae.prototype)}}else{try{throw Error()}catch(G){Q=G}(ae=t())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(G){if(G&&Q&&typeof G.stack=="string")return[G.stack,Q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],w=m[1];if(v&&w){var T=v.split(`
`),P=w.split(`
`);for(d=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;d<P.length&&!P[d].includes("DetermineComponentFrameRoot");)d++;if(l===T.length||d===P.length)for(l=T.length-1,d=P.length-1;1<=l&&0<=d&&T[l]!==P[d];)d--;for(;1<=l&&0<=d;l--,d--)if(T[l]!==P[d]){if(l!==1||d!==1)do if(l--,d--,0>d||T[l]!==P[d]){var ee=`
`+T[l].replace(" at new "," at ");return t.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",t.displayName)),ee}while(1<=l&&0<=d);break}}}finally{Cf=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Vi(i):""}function P6(t){switch(t.tag){case 26:case 27:case 5:return Vi(t.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 15:return Ef(t.type,!1);case 11:return Ef(t.type.render,!1);case 1:return Ef(t.type,!0);case 31:return Vi("Activity");default:return""}}function gp(t){try{var n="";do n+=P6(t),t=t.return;while(t);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function kr(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function H6(t){var n=yp(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,m=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){l=""+v,m.call(this,v)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function cc(t){t._valueTracker||(t._valueTracker=H6(t))}function bp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return t&&(l=yp(t)?t.checked?"true":"false":t.value),t=l,t!==i?(n.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Q6=/[\n"\\]/g;function $r(t){return t.replace(Q6,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tf(t,n,i,l,d,m,v,w){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kr(n)):t.value!==""+kr(n)&&(t.value=""+kr(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Df(t,v,kr(n)):i!=null?Df(t,v,kr(i)):l!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+kr(w):t.removeAttribute("name")}function xp(t,n,i,l,d,m,v,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),n!=null||i!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;i=i!=null?""+kr(i):"",n=n!=null?""+kr(n):i,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Df(t,n,i){n==="number"&&dc(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Yi(t,n,i,l){if(t=t.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=n.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&l&&(t[i].defaultSelected=!0)}else{for(i=""+kr(i),n=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function vp(t,n,i){if(n!=null&&(n=""+kr(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+kr(i):""}function jp(t,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(s(92));if(Y(l)){if(1<l.length)throw Error(s(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=kr(n),t.defaultValue=i,l=t.textContent,l===i&&l!==""&&l!==null&&(t.value=l)}function Ii(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var G6=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wp(t,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,i):typeof i!="number"||i===0||G6.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function _p(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in n)l=n[d],n.hasOwnProperty(d)&&i[d]!==l&&wp(t,d,l)}else for(var m in n)n.hasOwnProperty(m)&&wp(t,m,n[m])}function Rf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y6=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uc(t){return Y6.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zf=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ki=null,Xi=null;function Sp(t){var n=Hi(t);if(n&&(t=n.stateNode)){var i=t[ar]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tf(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+$r(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==t&&l.form===t.form){var d=l[ar]||null;if(!d)throw Error(s(90));Tf(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===t.form&&bp(l)}break e;case"textarea":vp(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Yi(t,!!i.multiple,n,!1)}}}var qf=!1;function kp(t,n,i){if(qf)return t(n,i);qf=!0;try{var l=t(n);return l}finally{if(qf=!1,(Ki!==null||Xi!==null)&&(Xc(),Ki&&(n=Ki,t=Xi,Xi=Ki=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function bs(t,n){var i=t.stateNode;if(i===null)return null;var l=i[ar]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=!1;if(_n)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{Nf=!1}var aa=null,Of=null,fc=null;function $p(){if(fc)return fc;var t,n=Of,i=n.length,l,d="value"in aa?aa.value:aa.textContent,m=d.length;for(t=0;t<i&&n[t]===d[t];t++);var v=i-t;for(l=1;l<=v&&n[i-l]===d[m-l];l++);return fc=d.slice(t,1<l?1-l:void 0)}function mc(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hc(){return!0}function Cp(){return!1}function ir(t){function n(i,l,d,m,v){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(i=t[w],this[w]=i?i(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?hc:Cp,this.isPropagationStopped=Cp,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=hc)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=hc)},persist:function(){},isPersistent:hc}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=ir(Ja),vs=b({},Ja,{view:0,detail:0}),I6=ir(vs),Mf,Bf,js,gc=b({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(Mf=t.screenX-js.screenX,Bf=t.screenY-js.screenY):Bf=Mf=0,js=t),Mf)},movementY:function(t){return"movementY"in t?t.movementY:Bf}}),Ep=ir(gc),K6=b({},gc,{dataTransfer:0}),X6=ir(K6),Z6=b({},vs,{relatedTarget:0}),Uf=ir(Z6),J6=b({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),W6=ir(J6),ej=b({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tj=ir(ej),rj=b({},Ja,{data:0}),Tp=ir(rj),nj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ij={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oj(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ij[t])?!!n[t]:!1}function Ff(){return oj}var sj=b({},vs,{key:function(t){if(t.key){var n=nj[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aj[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lj=ir(sj),cj=b({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=ir(cj),dj=b({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),uj=ir(dj),fj=b({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),mj=ir(fj),hj=b({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pj=ir(hj),gj=b({},Ja,{newState:0,oldState:0}),yj=ir(gj),bj=[9,13,27,32],Lf=_n&&"CompositionEvent"in window,ws=null;_n&&"documentMode"in document&&(ws=document.documentMode);var xj=_n&&"TextEvent"in window&&!ws,Rp=_n&&(!Lf||ws&&8<ws&&11>=ws),zp=" ",Ap=!1;function qp(t,n){switch(t){case"keyup":return bj.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function vj(t,n){switch(t){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Ap=!0,zp);case"textInput":return t=n.data,t===zp&&Ap?null:t;default:return null}}function jj(t,n){if(Zi)return t==="compositionend"||!Lf&&qp(t,n)?(t=$p(),fc=Of=aa=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var wj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!wj[t.type]:n==="textarea"}function Mp(t,n,i,l){Ki?Xi?Xi.push(l):Xi=[l]:Ki=l,n=rd(n,"onChange"),0<n.length&&(i=new pc("onChange","change",null,i,l),t.push({event:i,listeners:n}))}var _s=null,Ss=null;function _j(t){yb(t,0)}function yc(t){var n=ys(t);if(bp(n))return t}function Bp(t,n){if(t==="change")return n}var Up=!1;if(_n){var Pf;if(_n){var Hf="oninput"in document;if(!Hf){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Hf=typeof Fp.oninput=="function"}Pf=Hf}else Pf=!1;Up=Pf&&(!document.documentMode||9<document.documentMode)}function Lp(){_s&&(_s.detachEvent("onpropertychange",Pp),Ss=_s=null)}function Pp(t){if(t.propertyName==="value"&&yc(Ss)){var n=[];Mp(n,Ss,t,Af(t)),kp(_j,n)}}function Sj(t,n,i){t==="focusin"?(Lp(),_s=n,Ss=i,_s.attachEvent("onpropertychange",Pp)):t==="focusout"&&Lp()}function kj(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(Ss)}function $j(t,n){if(t==="click")return yc(n)}function Cj(t,n){if(t==="input"||t==="change")return yc(n)}function Ej(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fr=typeof Object.is=="function"?Object.is:Ej;function ks(t,n){if(fr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!Dt.call(n,d)||!fr(t[d],n[d]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,n){var i=Hp(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=n&&l>=n)return{node:i,offset:n-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Hp(i)}}function Gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=dc(t.document)}return n}function Qf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Tj=_n&&"documentMode"in document&&11>=document.documentMode,Ji=null,Gf=null,$s=null,Vf=!1;function Yp(t,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Vf||Ji==null||Ji!==dc(l)||(l=Ji,"selectionStart"in l&&Qf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$s&&ks($s,l)||($s=l,l=rd(Gf,"onSelect"),0<l.length&&(n=new pc("onSelect","select",null,n,i),t.push({event:n,listeners:l}),n.target=Ji)))}function Wa(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Wi={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Yf={},Ip={};_n&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function ei(t){if(Yf[t])return Yf[t];if(!Wi[t])return t;var n=Wi[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ip)return Yf[t]=n[i];return t}var Kp=ei("animationend"),Xp=ei("animationiteration"),Zp=ei("animationstart"),Dj=ei("transitionrun"),Rj=ei("transitionstart"),zj=ei("transitioncancel"),Jp=ei("transitionend"),Wp=new Map,If="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");If.push("scrollEnd");function Pr(t,n){Wp.set(t,n),Za(n,[t])}var eg=new WeakMap;function Cr(t,n){if(typeof t=="object"&&t!==null){var i=eg.get(t);return i!==void 0?i:(n={value:t,source:n,stack:gp(n)},eg.set(t,n),n)}return{value:t,source:n,stack:gp(n)}}var Er=[],eo=0,Kf=0;function bc(){for(var t=eo,n=Kf=eo=0;n<t;){var i=Er[n];Er[n++]=null;var l=Er[n];Er[n++]=null;var d=Er[n];Er[n++]=null;var m=Er[n];if(Er[n++]=null,l!==null&&d!==null){var v=l.pending;v===null?d.next=d:(d.next=v.next,v.next=d),l.pending=d}m!==0&&tg(i,d,m)}}function xc(t,n,i,l){Er[eo++]=t,Er[eo++]=n,Er[eo++]=i,Er[eo++]=l,Kf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Xf(t,n,i,l){return xc(t,n,i,l),vc(t)}function to(t,n){return xc(t,null,null,n),vc(t)}function tg(t,n,i){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i);for(var d=!1,m=t.return;m!==null;)m.childLanes|=i,l=m.alternate,l!==null&&(l.childLanes|=i),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&n!==null&&(d=31-at(i),t=m.hiddenUpdates,l=t[d],l===null?t[d]=[n]:l.push(n),n.lane=i|536870912),m):null}function vc(t){if(50<Zs)throw Zs=0,rh=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ro={};function Aj(t,n,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mr(t,n,i,l){return new Aj(t,n,i,l)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sn(t,n){var i=t.alternate;return i===null?(i=mr(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function rg(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jc(t,n,i,l,d,m){var v=0;if(l=t,typeof t=="function")Zf(t)&&(v=1);else if(typeof t=="string")v=N4(t,i,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case K:return t=mr(31,i,n,d),t.elementType=K,t.lanes=m,t;case C:return ti(i.children,d,m,n);case $:v=8,d|=24;break;case D:return t=mr(12,i,n,d|2),t.elementType=D,t.lanes=m,t;case I:return t=mr(13,i,n,d),t.elementType=I,t.lanes=m,t;case R:return t=mr(19,i,n,d),t.elementType=R,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:case O:v=10;break e;case M:v=9;break e;case z:v=11;break e;case F:v=14;break e;case ie:v=16,l=null;break e}v=29,i=Error(s(130,t===null?"null":typeof t,"")),l=null}return n=mr(v,i,n,d),n.elementType=t,n.type=l,n.lanes=m,n}function ti(t,n,i,l){return t=mr(7,t,l,n),t.lanes=i,t}function Jf(t,n,i){return t=mr(6,t,null,n),t.lanes=i,t}function Wf(t,n,i){return n=mr(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var no=[],ao=0,wc=null,_c=0,Tr=[],Dr=0,ri=null,kn=1,$n="";function ni(t,n){no[ao++]=_c,no[ao++]=wc,wc=t,_c=n}function ng(t,n,i){Tr[Dr++]=kn,Tr[Dr++]=$n,Tr[Dr++]=ri,ri=t;var l=kn;t=$n;var d=32-at(l)-1;l&=~(1<<d),i+=1;var m=32-at(n)+d;if(30<m){var v=d-d%5;m=(l&(1<<v)-1).toString(32),l>>=v,d-=v,kn=1<<32-at(n)+d|i<<d|l,$n=m+t}else kn=1<<m|i<<d|l,$n=t}function em(t){t.return!==null&&(ni(t,1),ng(t,1,0))}function tm(t){for(;t===wc;)wc=no[--ao],no[ao]=null,_c=no[--ao],no[ao]=null;for(;t===ri;)ri=Tr[--Dr],Tr[Dr]=null,$n=Tr[--Dr],Tr[Dr]=null,kn=Tr[--Dr],Tr[Dr]=null}var Jt=null,ut=null,Ye=!1,ai=null,en=!1,rm=Error(s(519));function ii(t){var n=Error(s(418,""));throw Ts(Cr(n,t)),rm}function ag(t){var n=t.stateNode,i=t.type,l=t.memoizedProps;switch(n[Vt]=t,n[ar]=l,i){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(i=0;i<Ws.length;i++)He(Ws[i],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),xp(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),cc(n);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),jp(n,l.value,l.defaultValue,l.children),cc(n)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||jb(n.textContent,i)?(l.popover!=null&&(He("beforetoggle",n),He("toggle",n)),l.onScroll!=null&&He("scroll",n),l.onScrollEnd!=null&&He("scrollend",n),l.onClick!=null&&(n.onclick=nd),n=!0):n=!1,n||ii(t)}function ig(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 13:en=!1;return;case 27:case 3:en=!0;return;default:Jt=Jt.return}}function Cs(t){if(t!==Jt)return!1;if(!Ye)return ig(t),Ye=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bh(t.type,t.memoizedProps)),i=!i),i&&ut&&ii(t),ig(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(n===0){ut=Qr(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;t=t.nextSibling}ut=null}}else n===27?(n=ut,va(t.type)?(t=wh,wh=null,ut=t):ut=n):ut=Jt?Qr(t.stateNode.nextSibling):null;return!0}function Es(){ut=Jt=null,Ye=!1}function og(){var t=ai;return t!==null&&(lr===null?lr=t:lr.push.apply(lr,t),ai=null),t}function Ts(t){ai===null?ai=[t]:ai.push(t)}var nm=Z(null),oi=null,Cn=null;function ia(t,n,i){de(nm,n._currentValue),n._currentValue=i}function En(t){t._currentValue=nm.current,se(nm)}function am(t,n,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===i)break;t=t.return}}function im(t,n,i,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var v=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var T=0;T<n.length;T++)if(w.context===n[T]){m.lanes|=i,w=m.alternate,w!==null&&(w.lanes|=i),am(m.return,i,t),l||(v=null);break e}m=w.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(s(341));v.lanes|=i,m=v.alternate,m!==null&&(m.lanes|=i),am(v,i,t),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===t){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Ds(t,n,i,l){t=null;for(var d=n,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=d.type;fr(d.pendingProps.value,v.value)||(t!==null?t.push(w):t=[w])}}else if(d===Le.current){if(v=d.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}d=d.return}t!==null&&im(n,t,i,l),n.flags|=262144}function Sc(t){for(t=t.firstContext;t!==null;){if(!fr(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function si(t){oi=t,Cn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Yt(t){return sg(oi,t)}function kc(t,n){return oi===null&&si(t),sg(t,n)}function sg(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Cn===null){if(t===null)throw Error(s(308));Cn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Cn=Cn.next=n;return i}var qj=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Nj=e.unstable_scheduleCallback,Oj=e.unstable_NormalPriority,kt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function om(){return{controller:new qj,data:new Map,refCount:0}}function Rs(t){t.refCount--,t.refCount===0&&Nj(Oj,function(){t.controller.abort()})}var zs=null,sm=0,io=0,oo=null;function Mj(t,n){if(zs===null){var i=zs=[];sm=0,io=ch(),oo={status:"pending",value:void 0,then:function(l){i.push(l)}}}return sm++,n.then(lg,lg),n}function lg(){if(--sm===0&&zs!==null){oo!==null&&(oo.status="fulfilled");var t=zs;zs=null,io=0,oo=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Bj(t,n){var i=[],l={status:"pending",value:null,reason:null,then:function(d){i.push(d)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var d=0;d<i.length;d++)(0,i[d])(n)},function(d){for(l.status="rejected",l.reason=d,d=0;d<i.length;d++)(0,i[d])(void 0)}),l}var cg=N.S;N.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Mj(t,n),cg!==null&&cg(t,n)};var li=Z(null);function lm(){var t=li.current;return t!==null?t:it.pooledCache}function $c(t,n){n===null?de(li,li.current):de(li,n.pool)}function dg(){var t=lm();return t===null?null:{parent:kt._currentValue,pool:t}}var As=Error(s(460)),ug=Error(s(474)),Cc=Error(s(542)),cm={then:function(){}};function fg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ec(){}function mg(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Ec,Ec),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pg(t),t;default:if(typeof n.status=="string")n.then(Ec,Ec);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=l}},function(l){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pg(t),t}throw qs=n,As}}var qs=null;function hg(){if(qs===null)throw Error(s(459));var t=qs;return qs=null,t}function pg(t){if(t===As||t===Cc)throw Error(s(483))}var oa=!1;function dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function um(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function la(t,n,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,n=vc(t),tg(t,null,i),n}return xc(t,l,n,i),vc(t)}function Ns(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,lp(t,i)}}function fm(t,n){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};m===null?d=m=v:m=m.next=v,i=i.next}while(i!==null);m===null?d=m=n:m=m.next=n}else d=m=n;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var mm=!1;function Os(){if(mm){var t=oo;if(t!==null)throw t}}function Ms(t,n,i,l){mm=!1;var d=t.updateQueue;oa=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var T=w,P=T.next;T.next=null,v===null?m=P:v.next=P,v=T;var ee=t.alternate;ee!==null&&(ee=ee.updateQueue,w=ee.lastBaseUpdate,w!==v&&(w===null?ee.firstBaseUpdate=P:w.next=P,ee.lastBaseUpdate=T))}if(m!==null){var ae=d.baseState;v=0,ee=P=T=null,w=m;do{var Q=w.lane&-536870913,G=Q!==w.lane;if(G?(Qe&Q)===Q:(l&Q)===Q){Q!==0&&Q===io&&(mm=!0),ee!==null&&(ee=ee.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var De=t,$e=w;Q=n;var We=i;switch($e.tag){case 1:if(De=$e.payload,typeof De=="function"){ae=De.call(We,ae,Q);break e}ae=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=$e.payload,Q=typeof De=="function"?De.call(We,ae,Q):De,Q==null)break e;ae=b({},ae,Q);break e;case 2:oa=!0}}Q=w.callback,Q!==null&&(t.flags|=64,G&&(t.flags|=8192),G=d.callbacks,G===null?d.callbacks=[Q]:G.push(Q))}else G={lane:Q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ee===null?(P=ee=G,T=ae):ee=ee.next=G,v|=Q;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;G=w,w=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);ee===null&&(T=ae),d.baseState=T,d.firstBaseUpdate=P,d.lastBaseUpdate=ee,m===null&&(d.shared.lanes=0),ga|=v,t.lanes=v,t.memoizedState=ae}}function gg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function yg(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)gg(i[t],n)}var so=Z(null),Tc=Z(0);function bg(t,n){t=Nn,de(Tc,t),de(so,n),Nn=t|n.baseLanes}function hm(){de(Tc,Nn),de(so,so.current)}function pm(){Nn=Tc.current,se(so),se(Tc)}var ca=0,Be=null,Ze=null,xt=null,Dc=!1,lo=!1,ci=!1,Rc=0,Bs=0,co=null,Uj=0;function ht(){throw Error(s(321))}function gm(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!fr(t[i],n[i]))return!1;return!0}function ym(t,n,i,l,d,m){return ca=m,Be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?ty:ry,ci=!1,m=i(l,d),ci=!1,lo&&(m=vg(n,i,l,d)),xg(t),m}function xg(t){N.H=Mc;var n=Ze!==null&&Ze.next!==null;if(ca=0,xt=Ze=Be=null,Dc=!1,Bs=0,co=null,n)throw Error(s(300));t===null||zt||(t=t.dependencies,t!==null&&Sc(t)&&(zt=!0))}function vg(t,n,i,l){Be=t;var d=0;do{if(lo&&(co=null),Bs=0,lo=!1,25<=d)throw Error(s(301));if(d+=1,xt=Ze=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}N.H=Vj,m=n(i,l)}while(lo);return m}function Fj(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Us(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(Be.flags|=1024),n}function bm(){var t=Rc!==0;return Rc=0,t}function xm(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function vm(t){if(Dc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dc=!1}ca=0,xt=Ze=Be=null,lo=!1,Bs=Rc=0,co=null}function or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Be.memoizedState=xt=t:xt=xt.next=t,xt}function vt(){if(Ze===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=xt===null?Be.memoizedState:xt.next;if(n!==null)xt=n,Ze=t;else{if(t===null)throw Be.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},xt===null?Be.memoizedState=xt=t:xt=xt.next=t}return xt}function jm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Us(t){var n=Bs;return Bs+=1,co===null&&(co=[]),t=mg(co,t,n),n=Be,(xt===null?n.memoizedState:xt.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?ty:ry),t}function zc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Us(t);if(t.$$typeof===O)return Yt(t)}throw Error(s(438,String(t)))}function wm(t){var n=null,i=Be.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=Be.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=jm(),Be.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),l=0;l<t;l++)i[l]=ue;return n.index++,i}function Tn(t,n){return typeof n=="function"?n(t):n}function Ac(t){var n=vt();return _m(n,Ze,t)}function _m(t,n,i){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=i;var d=t.baseQueue,m=l.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}n.baseQueue=d=m,l.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{n=d.next;var w=v=null,T=null,P=n,ee=!1;do{var ae=P.lane&-536870913;if(ae!==P.lane?(Qe&ae)===ae:(ca&ae)===ae){var Q=P.revertLane;if(Q===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),ae===io&&(ee=!0);else if((ca&Q)===Q){P=P.next,Q===io&&(ee=!0);continue}else ae={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},T===null?(w=T=ae,v=m):T=T.next=ae,Be.lanes|=Q,ga|=Q;ae=P.action,ci&&i(m,ae),m=P.hasEagerState?P.eagerState:i(m,ae)}else Q={lane:ae,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},T===null?(w=T=Q,v=m):T=T.next=Q,Be.lanes|=ae,ga|=ae;P=P.next}while(P!==null&&P!==n);if(T===null?v=m:T.next=w,!fr(m,t.memoizedState)&&(zt=!0,ee&&(i=oo,i!==null)))throw i;t.memoizedState=m,t.baseState=v,t.baseQueue=T,l.lastRenderedState=m}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Sm(t){var n=vt(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var l=i.dispatch,d=i.pending,m=n.memoizedState;if(d!==null){i.pending=null;var v=d=d.next;do m=t(m,v.action),v=v.next;while(v!==d);fr(m,n.memoizedState)||(zt=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),i.lastRenderedState=m}return[m,l]}function jg(t,n,i){var l=Be,d=vt(),m=Ye;if(m){if(i===void 0)throw Error(s(407));i=i()}else i=n();var v=!fr((Ze||d).memoizedState,i);v&&(d.memoizedState=i,zt=!0),d=d.queue;var w=Sg.bind(null,l,d,t);if(Fs(2048,8,w,[t]),d.getSnapshot!==n||v||xt!==null&&xt.memoizedState.tag&1){if(l.flags|=2048,uo(9,qc(),_g.bind(null,l,d,i,n),null),it===null)throw Error(s(349));m||(ca&124)!==0||wg(l,n,i)}return i}function wg(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=Be.updateQueue,n===null?(n=jm(),Be.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function _g(t,n,i,l){n.value=i,n.getSnapshot=l,kg(n)&&$g(t)}function Sg(t,n,i){return i(function(){kg(n)&&$g(t)})}function kg(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!fr(t,i)}catch{return!0}}function $g(t){var n=to(t,2);n!==null&&br(n,t,2)}function km(t){var n=or();if(typeof t=="function"){var i=t;if(t=i(),ci){Oe(!0);try{i()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:t},n}function Cg(t,n,i,l){return t.baseState=i,_m(t,Ze,typeof l=="function"?l:Tn)}function Lj(t,n,i,l,d){if(Oc(t))throw Error(s(485));if(t=n.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};N.T!==null?i(!0):m.isTransition=!1,l(m),i=n.pending,i===null?(m.next=n.pending=m,Eg(n,m)):(m.next=i.next,n.pending=i.next=m)}}function Eg(t,n){var i=n.action,l=n.payload,d=t.state;if(n.isTransition){var m=N.T,v={};N.T=v;try{var w=i(d,l),T=N.S;T!==null&&T(v,w),Tg(t,n,w)}catch(P){$m(t,n,P)}finally{N.T=m}}else try{m=i(d,l),Tg(t,n,m)}catch(P){$m(t,n,P)}}function Tg(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){Dg(t,n,l)},function(l){return $m(t,n,l)}):Dg(t,n,i)}function Dg(t,n,i){n.status="fulfilled",n.value=i,Rg(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,Eg(t,i)))}function $m(t,n,i){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,Rg(n),n=n.next;while(n!==l)}t.action=null}function Rg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zg(t,n){return n}function Ag(t,n){if(Ye){var i=it.formState;if(i!==null){e:{var l=Be;if(Ye){if(ut){t:{for(var d=ut,m=en;d.nodeType!==8;){if(!m){d=null;break t}if(d=Qr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){ut=Qr(d.nextSibling),l=d.data==="F!";break e}}ii(l)}l=!1}l&&(n=i[0])}}return i=or(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:n},i.queue=l,i=Jg.bind(null,Be,l),l.dispatch=i,l=km(!1),m=Rm.bind(null,Be,!1,l.queue),l=or(),d={state:n,dispatch:null,action:t,pending:null},l.queue=d,i=Lj.bind(null,Be,d,m,i),d.dispatch=i,l.memoizedState=t,[n,i,!1]}function qg(t){var n=vt();return Ng(n,Ze,t)}function Ng(t,n,i){if(n=_m(t,n,zg)[0],t=Ac(Tn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Us(n)}catch(v){throw v===As?Cc:v}else l=n;n=vt();var d=n.queue,m=d.dispatch;return i!==n.memoizedState&&(Be.flags|=2048,uo(9,qc(),Pj.bind(null,d,i),null)),[l,m,t]}function Pj(t,n){t.action=n}function Og(t){var n=vt(),i=Ze;if(i!==null)return Ng(n,i,t);vt(),n=n.memoizedState,i=vt();var l=i.queue.dispatch;return i.memoizedState=t,[n,l,!1]}function uo(t,n,i,l){return t={tag:t,create:i,deps:l,inst:n,next:null},n=Be.updateQueue,n===null&&(n=jm(),Be.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,n.lastEffect=t),t}function qc(){return{destroy:void 0,resource:void 0}}function Mg(){return vt().memoizedState}function Nc(t,n,i,l){var d=or();l=l===void 0?null:l,Be.flags|=t,d.memoizedState=uo(1|n,qc(),i,l)}function Fs(t,n,i,l){var d=vt();l=l===void 0?null:l;var m=d.memoizedState.inst;Ze!==null&&l!==null&&gm(l,Ze.memoizedState.deps)?d.memoizedState=uo(n,m,i,l):(Be.flags|=t,d.memoizedState=uo(1|n,m,i,l))}function Bg(t,n){Nc(8390656,8,t,n)}function Ug(t,n){Fs(2048,8,t,n)}function Fg(t,n){return Fs(4,2,t,n)}function Lg(t,n){return Fs(4,4,t,n)}function Pg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Hg(t,n,i){i=i!=null?i.concat([t]):null,Fs(4,4,Pg.bind(null,n,t),i)}function Cm(){}function Qg(t,n){var i=vt();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&gm(n,l[1])?l[0]:(i.memoizedState=[t,n],t)}function Gg(t,n){var i=vt();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&gm(n,l[1]))return l[0];if(l=t(),ci){Oe(!0);try{t()}finally{Oe(!1)}}return i.memoizedState=[l,n],l}function Em(t,n,i){return i===void 0||(ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=i,t=Iy(),Be.lanes|=t,ga|=t,i)}function Vg(t,n,i,l){return fr(i,n)?i:so.current!==null?(t=Em(t,i,l),fr(t,n)||(zt=!0),t):(ca&42)===0?(zt=!0,t.memoizedState=i):(t=Iy(),Be.lanes|=t,ga|=t,n)}function Yg(t,n,i,l,d){var m=ne.p;ne.p=m!==0&&8>m?m:8;var v=N.T,w={};N.T=w,Rm(t,!1,n,i);try{var T=d(),P=N.S;if(P!==null&&P(w,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var ee=Bj(T,l);Ls(t,n,ee,yr(t))}else Ls(t,n,l,yr(t))}catch(ae){Ls(t,n,{then:function(){},status:"rejected",reason:ae},yr())}finally{ne.p=m,N.T=v}}function Hj(){}function Tm(t,n,i,l){if(t.tag!==5)throw Error(s(476));var d=Ig(t).queue;Yg(t,d,n,pe,i===null?Hj:function(){return Kg(t),i(l)})}function Ig(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:pe},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kg(t){var n=Ig(t).next.queue;Ls(t,n,{},yr())}function Dm(){return Yt(il)}function Xg(){return vt().memoizedState}function Zg(){return vt().memoizedState}function Qj(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=yr();t=sa(i);var l=la(n,t,i);l!==null&&(br(l,n,i),Ns(l,n,i)),n={cache:om()},t.payload=n;return}n=n.return}}function Gj(t,n,i){var l=yr();i={lane:l,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Oc(t)?Wg(n,i):(i=Xf(t,n,i,l),i!==null&&(br(i,t,l),ey(i,n,l)))}function Jg(t,n,i){var l=yr();Ls(t,n,i,l)}function Ls(t,n,i,l){var d={lane:l,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Oc(t))Wg(n,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var v=n.lastRenderedState,w=m(v,i);if(d.hasEagerState=!0,d.eagerState=w,fr(w,v))return xc(t,n,d,0),it===null&&bc(),!1}catch{}finally{}if(i=Xf(t,n,d,l),i!==null)return br(i,t,l),ey(i,n,l),!0}return!1}function Rm(t,n,i,l){if(l={lane:2,revertLane:ch(),action:l,hasEagerState:!1,eagerState:null,next:null},Oc(t)){if(n)throw Error(s(479))}else n=Xf(t,i,l,2),n!==null&&br(n,t,2)}function Oc(t){var n=t.alternate;return t===Be||n!==null&&n===Be}function Wg(t,n){lo=Dc=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function ey(t,n,i){if((i&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,lp(t,i)}}var Mc={readContext:Yt,use:zc,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht},ty={readContext:Yt,use:zc,useCallback:function(t,n){return or().memoizedState=[t,n===void 0?null:n],t},useContext:Yt,useEffect:Bg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,Nc(4194308,4,Pg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Nc(4194308,4,t,n)},useInsertionEffect:function(t,n){Nc(4,2,t,n)},useMemo:function(t,n){var i=or();n=n===void 0?null:n;var l=t();if(ci){Oe(!0);try{t()}finally{Oe(!1)}}return i.memoizedState=[l,n],l},useReducer:function(t,n,i){var l=or();if(i!==void 0){var d=i(n);if(ci){Oe(!0);try{i(n)}finally{Oe(!1)}}}else d=n;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=Gj.bind(null,Be,t),[l.memoizedState,t]},useRef:function(t){var n=or();return t={current:t},n.memoizedState=t},useState:function(t){t=km(t);var n=t.queue,i=Jg.bind(null,Be,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Cm,useDeferredValue:function(t,n){var i=or();return Em(i,t,n)},useTransition:function(){var t=km(!1);return t=Yg.bind(null,Be,t.queue,!0,!1),or().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var l=Be,d=or();if(Ye){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),it===null)throw Error(s(349));(Qe&124)!==0||wg(l,n,i)}d.memoizedState=i;var m={value:i,getSnapshot:n};return d.queue=m,Bg(Sg.bind(null,l,m,t),[t]),l.flags|=2048,uo(9,qc(),_g.bind(null,l,m,i,n),null),i},useId:function(){var t=or(),n=it.identifierPrefix;if(Ye){var i=$n,l=kn;i=(l&~(1<<32-at(l)-1)).toString(32)+i,n="«"+n+"R"+i,i=Rc++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=Uj++,n="«"+n+"r"+i.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Dm,useFormState:Ag,useActionState:Ag,useOptimistic:function(t){var n=or();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Rm.bind(null,Be,!0,i),i.dispatch=n,[t,n]},useMemoCache:wm,useCacheRefresh:function(){return or().memoizedState=Qj.bind(null,Be)}},ry={readContext:Yt,use:zc,useCallback:Qg,useContext:Yt,useEffect:Ug,useImperativeHandle:Hg,useInsertionEffect:Fg,useLayoutEffect:Lg,useMemo:Gg,useReducer:Ac,useRef:Mg,useState:function(){return Ac(Tn)},useDebugValue:Cm,useDeferredValue:function(t,n){var i=vt();return Vg(i,Ze.memoizedState,t,n)},useTransition:function(){var t=Ac(Tn)[0],n=vt().memoizedState;return[typeof t=="boolean"?t:Us(t),n]},useSyncExternalStore:jg,useId:Xg,useHostTransitionStatus:Dm,useFormState:qg,useActionState:qg,useOptimistic:function(t,n){var i=vt();return Cg(i,Ze,t,n)},useMemoCache:wm,useCacheRefresh:Zg},Vj={readContext:Yt,use:zc,useCallback:Qg,useContext:Yt,useEffect:Ug,useImperativeHandle:Hg,useInsertionEffect:Fg,useLayoutEffect:Lg,useMemo:Gg,useReducer:Sm,useRef:Mg,useState:function(){return Sm(Tn)},useDebugValue:Cm,useDeferredValue:function(t,n){var i=vt();return Ze===null?Em(i,t,n):Vg(i,Ze.memoizedState,t,n)},useTransition:function(){var t=Sm(Tn)[0],n=vt().memoizedState;return[typeof t=="boolean"?t:Us(t),n]},useSyncExternalStore:jg,useId:Xg,useHostTransitionStatus:Dm,useFormState:Og,useActionState:Og,useOptimistic:function(t,n){var i=vt();return Ze!==null?Cg(i,Ze,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:wm,useCacheRefresh:Zg},fo=null,Ps=0;function Bc(t){var n=Ps;return Ps+=1,fo===null&&(fo=[]),mg(fo,t,n)}function Hs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Uc(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ny(t){var n=t._init;return n(t._payload)}function ay(t){function n(B,q){if(t){var L=B.deletions;L===null?(B.deletions=[q],B.flags|=16):L.push(q)}}function i(B,q){if(!t)return null;for(;q!==null;)n(B,q),q=q.sibling;return null}function l(B){for(var q=new Map;B!==null;)B.key!==null?q.set(B.key,B):q.set(B.index,B),B=B.sibling;return q}function d(B,q){return B=Sn(B,q),B.index=0,B.sibling=null,B}function m(B,q,L){return B.index=L,t?(L=B.alternate,L!==null?(L=L.index,L<q?(B.flags|=67108866,q):L):(B.flags|=67108866,q)):(B.flags|=1048576,q)}function v(B){return t&&B.alternate===null&&(B.flags|=67108866),B}function w(B,q,L,re){return q===null||q.tag!==6?(q=Jf(L,B.mode,re),q.return=B,q):(q=d(q,L),q.return=B,q)}function T(B,q,L,re){var we=L.type;return we===C?ee(B,q,L.props.children,re,L.key):q!==null&&(q.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ie&&ny(we)===q.type)?(q=d(q,L.props),Hs(q,L),q.return=B,q):(q=jc(L.type,L.key,L.props,null,B.mode,re),Hs(q,L),q.return=B,q)}function P(B,q,L,re){return q===null||q.tag!==4||q.stateNode.containerInfo!==L.containerInfo||q.stateNode.implementation!==L.implementation?(q=Wf(L,B.mode,re),q.return=B,q):(q=d(q,L.children||[]),q.return=B,q)}function ee(B,q,L,re,we){return q===null||q.tag!==7?(q=ti(L,B.mode,re,we),q.return=B,q):(q=d(q,L),q.return=B,q)}function ae(B,q,L){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Jf(""+q,B.mode,L),q.return=B,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case j:return L=jc(q.type,q.key,q.props,null,B.mode,L),Hs(L,q),L.return=B,L;case _:return q=Wf(q,B.mode,L),q.return=B,q;case ie:var re=q._init;return q=re(q._payload),ae(B,q,L)}if(Y(q)||H(q))return q=ti(q,B.mode,L,null),q.return=B,q;if(typeof q.then=="function")return ae(B,Bc(q),L);if(q.$$typeof===O)return ae(B,kc(B,q),L);Uc(B,q)}return null}function Q(B,q,L,re){var we=q!==null?q.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return we!==null?null:w(B,q,""+L,re);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return L.key===we?T(B,q,L,re):null;case _:return L.key===we?P(B,q,L,re):null;case ie:return we=L._init,L=we(L._payload),Q(B,q,L,re)}if(Y(L)||H(L))return we!==null?null:ee(B,q,L,re,null);if(typeof L.then=="function")return Q(B,q,Bc(L),re);if(L.$$typeof===O)return Q(B,q,kc(B,L),re);Uc(B,L)}return null}function G(B,q,L,re,we){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return B=B.get(L)||null,w(q,B,""+re,we);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case j:return B=B.get(re.key===null?L:re.key)||null,T(q,B,re,we);case _:return B=B.get(re.key===null?L:re.key)||null,P(q,B,re,we);case ie:var Fe=re._init;return re=Fe(re._payload),G(B,q,L,re,we)}if(Y(re)||H(re))return B=B.get(L)||null,ee(q,B,re,we,null);if(typeof re.then=="function")return G(B,q,L,Bc(re),we);if(re.$$typeof===O)return G(B,q,L,kc(q,re),we);Uc(q,re)}return null}function De(B,q,L,re){for(var we=null,Fe=null,Se=q,Ee=q=0,qt=null;Se!==null&&Ee<L.length;Ee++){Se.index>Ee?(qt=Se,Se=null):qt=Se.sibling;var Ve=Q(B,Se,L[Ee],re);if(Ve===null){Se===null&&(Se=qt);break}t&&Se&&Ve.alternate===null&&n(B,Se),q=m(Ve,q,Ee),Fe===null?we=Ve:Fe.sibling=Ve,Fe=Ve,Se=qt}if(Ee===L.length)return i(B,Se),Ye&&ni(B,Ee),we;if(Se===null){for(;Ee<L.length;Ee++)Se=ae(B,L[Ee],re),Se!==null&&(q=m(Se,q,Ee),Fe===null?we=Se:Fe.sibling=Se,Fe=Se);return Ye&&ni(B,Ee),we}for(Se=l(Se);Ee<L.length;Ee++)qt=G(Se,B,Ee,L[Ee],re),qt!==null&&(t&&qt.alternate!==null&&Se.delete(qt.key===null?Ee:qt.key),q=m(qt,q,Ee),Fe===null?we=qt:Fe.sibling=qt,Fe=qt);return t&&Se.forEach(function(ka){return n(B,ka)}),Ye&&ni(B,Ee),we}function $e(B,q,L,re){if(L==null)throw Error(s(151));for(var we=null,Fe=null,Se=q,Ee=q=0,qt=null,Ve=L.next();Se!==null&&!Ve.done;Ee++,Ve=L.next()){Se.index>Ee?(qt=Se,Se=null):qt=Se.sibling;var ka=Q(B,Se,Ve.value,re);if(ka===null){Se===null&&(Se=qt);break}t&&Se&&ka.alternate===null&&n(B,Se),q=m(ka,q,Ee),Fe===null?we=ka:Fe.sibling=ka,Fe=ka,Se=qt}if(Ve.done)return i(B,Se),Ye&&ni(B,Ee),we;if(Se===null){for(;!Ve.done;Ee++,Ve=L.next())Ve=ae(B,Ve.value,re),Ve!==null&&(q=m(Ve,q,Ee),Fe===null?we=Ve:Fe.sibling=Ve,Fe=Ve);return Ye&&ni(B,Ee),we}for(Se=l(Se);!Ve.done;Ee++,Ve=L.next())Ve=G(Se,B,Ee,Ve.value,re),Ve!==null&&(t&&Ve.alternate!==null&&Se.delete(Ve.key===null?Ee:Ve.key),q=m(Ve,q,Ee),Fe===null?we=Ve:Fe.sibling=Ve,Fe=Ve);return t&&Se.forEach(function(Y4){return n(B,Y4)}),Ye&&ni(B,Ee),we}function We(B,q,L,re){if(typeof L=="object"&&L!==null&&L.type===C&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case j:e:{for(var we=L.key;q!==null;){if(q.key===we){if(we=L.type,we===C){if(q.tag===7){i(B,q.sibling),re=d(q,L.props.children),re.return=B,B=re;break e}}else if(q.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ie&&ny(we)===q.type){i(B,q.sibling),re=d(q,L.props),Hs(re,L),re.return=B,B=re;break e}i(B,q);break}else n(B,q);q=q.sibling}L.type===C?(re=ti(L.props.children,B.mode,re,L.key),re.return=B,B=re):(re=jc(L.type,L.key,L.props,null,B.mode,re),Hs(re,L),re.return=B,B=re)}return v(B);case _:e:{for(we=L.key;q!==null;){if(q.key===we)if(q.tag===4&&q.stateNode.containerInfo===L.containerInfo&&q.stateNode.implementation===L.implementation){i(B,q.sibling),re=d(q,L.children||[]),re.return=B,B=re;break e}else{i(B,q);break}else n(B,q);q=q.sibling}re=Wf(L,B.mode,re),re.return=B,B=re}return v(B);case ie:return we=L._init,L=we(L._payload),We(B,q,L,re)}if(Y(L))return De(B,q,L,re);if(H(L)){if(we=H(L),typeof we!="function")throw Error(s(150));return L=we.call(L),$e(B,q,L,re)}if(typeof L.then=="function")return We(B,q,Bc(L),re);if(L.$$typeof===O)return We(B,q,kc(B,L),re);Uc(B,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,q!==null&&q.tag===6?(i(B,q.sibling),re=d(q,L),re.return=B,B=re):(i(B,q),re=Jf(L,B.mode,re),re.return=B,B=re),v(B)):i(B,q)}return function(B,q,L,re){try{Ps=0;var we=We(B,q,L,re);return fo=null,we}catch(Se){if(Se===As||Se===Cc)throw Se;var Fe=mr(29,Se,null,B.mode);return Fe.lanes=re,Fe.return=B,Fe}finally{}}}var mo=ay(!0),iy=ay(!1),Rr=Z(null),tn=null;function da(t){var n=t.alternate;de($t,$t.current&1),de(Rr,t),tn===null&&(n===null||so.current!==null||n.memoizedState!==null)&&(tn=t)}function oy(t){if(t.tag===22){if(de($t,$t.current),de(Rr,t),tn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(tn=t)}}else ua()}function ua(){de($t,$t.current),de(Rr,Rr.current)}function Dn(t){se(Rr),tn===t&&(tn=null),se($t)}var $t=Z(0);function Fc(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||jh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function zm(t,n,i,l){n=t.memoizedState,i=i(l,n),i=i==null?n:b({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Am={enqueueSetState:function(t,n,i){t=t._reactInternals;var l=yr(),d=sa(l);d.payload=n,i!=null&&(d.callback=i),n=la(t,d,l),n!==null&&(br(n,t,l),Ns(n,t,l))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var l=yr(),d=sa(l);d.tag=1,d.payload=n,i!=null&&(d.callback=i),n=la(t,d,l),n!==null&&(br(n,t,l),Ns(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=yr(),l=sa(i);l.tag=2,n!=null&&(l.callback=n),n=la(t,l,i),n!==null&&(br(n,t,i),Ns(n,t,i))}};function sy(t,n,i,l,d,m,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,v):n.prototype&&n.prototype.isPureReactComponent?!ks(i,l)||!ks(d,m):!0}function ly(t,n,i,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==t&&Am.enqueueReplaceState(n,n.state,null)}function di(t,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(t=t.defaultProps){i===n&&(i=b({},i));for(var d in t)i[d]===void 0&&(i[d]=t[d])}return i}var Lc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function cy(t){Lc(t)}function dy(t){console.error(t)}function uy(t){Lc(t)}function Pc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function fy(t,n,i){try{var l=t.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function qm(t,n,i){return i=sa(i),i.tag=3,i.payload={element:null},i.callback=function(){Pc(t,n)},i}function my(t){return t=sa(t),t.tag=3,t}function hy(t,n,i,l){var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;t.payload=function(){return d(m)},t.callback=function(){fy(n,i,l)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){fy(n,i,l),typeof d!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function Yj(t,n,i,l,d){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&Ds(n,i,d,!0),i=Rr.current,i!==null){switch(i.tag){case 13:return tn===null?ah():i.alternate===null&&ft===0&&(ft=3),i.flags&=-257,i.flags|=65536,i.lanes=d,l===cm?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),oh(t,l,d)),!1;case 22:return i.flags|=65536,l===cm?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),oh(t,l,d)),!1}throw Error(s(435,i.tag))}return oh(t,l,d),ah(),!1}if(Ye)return n=Rr.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,l!==rm&&(t=Error(s(422),{cause:l}),Ts(Cr(t,i)))):(l!==rm&&(n=Error(s(423),{cause:l}),Ts(Cr(n,i))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Cr(l,i),d=qm(t.stateNode,l,d),fm(t,d),ft!==4&&(ft=2)),!1;var m=Error(s(520),{cause:l});if(m=Cr(m,i),Xs===null?Xs=[m]:Xs.push(m),ft!==4&&(ft=2),n===null)return!0;l=Cr(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=d&-d,i.lanes|=t,t=qm(i.stateNode,l,t),fm(i,t),!1;case 1:if(n=i.type,m=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ya===null||!ya.has(m))))return i.flags|=65536,d&=-d,i.lanes|=d,d=my(d),hy(d,t,i,l),fm(i,d),!1}i=i.return}while(i!==null);return!1}var py=Error(s(461)),zt=!1;function Lt(t,n,i,l){n.child=t===null?iy(n,null,i,l):mo(n,t.child,i,l)}function gy(t,n,i,l,d){i=i.render;var m=n.ref;if("ref"in l){var v={};for(var w in l)w!=="ref"&&(v[w]=l[w])}else v=l;return si(n),l=ym(t,n,i,v,m,d),w=bm(),t!==null&&!zt?(xm(t,n,d),Rn(t,n,d)):(Ye&&w&&em(n),n.flags|=1,Lt(t,n,l,d),n.child)}function yy(t,n,i,l,d){if(t===null){var m=i.type;return typeof m=="function"&&!Zf(m)&&m.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=m,by(t,n,m,l,d)):(t=jc(i.type,null,l,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(m=t.child,!Pm(t,d)){var v=m.memoizedProps;if(i=i.compare,i=i!==null?i:ks,i(v,l)&&t.ref===n.ref)return Rn(t,n,d)}return n.flags|=1,t=Sn(m,l),t.ref=n.ref,t.return=n,n.child=t}function by(t,n,i,l,d){if(t!==null){var m=t.memoizedProps;if(ks(m,l)&&t.ref===n.ref)if(zt=!1,n.pendingProps=l=m,Pm(t,d))(t.flags&131072)!==0&&(zt=!0);else return n.lanes=t.lanes,Rn(t,n,d)}return Nm(t,n,i,l,d)}function xy(t,n,i){var l=n.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=m!==null?m.baseLanes|i:i,t!==null){for(d=n.child=t.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;n.childLanes=m&~l}else n.childLanes=0,n.child=null;return vy(t,n,l,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$c(n,m!==null?m.cachePool:null),m!==null?bg(n,m):hm(),oy(n);else return n.lanes=n.childLanes=536870912,vy(t,n,m!==null?m.baseLanes|i:i,i)}else m!==null?($c(n,m.cachePool),bg(n,m),ua(),n.memoizedState=null):(t!==null&&$c(n,null),hm(),ua());return Lt(t,n,d,i),n.child}function vy(t,n,i,l){var d=lm();return d=d===null?null:{parent:kt._currentValue,pool:d},n.memoizedState={baseLanes:i,cachePool:d},t!==null&&$c(n,null),hm(),oy(n),t!==null&&Ds(t,n,l,!0),null}function Hc(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Nm(t,n,i,l,d){return si(n),i=ym(t,n,i,l,void 0,d),l=bm(),t!==null&&!zt?(xm(t,n,d),Rn(t,n,d)):(Ye&&l&&em(n),n.flags|=1,Lt(t,n,i,d),n.child)}function jy(t,n,i,l,d,m){return si(n),n.updateQueue=null,i=vg(n,l,i,d),xg(t),l=bm(),t!==null&&!zt?(xm(t,n,m),Rn(t,n,m)):(Ye&&l&&em(n),n.flags|=1,Lt(t,n,i,m),n.child)}function wy(t,n,i,l,d){if(si(n),n.stateNode===null){var m=ro,v=i.contextType;typeof v=="object"&&v!==null&&(m=Yt(v)),m=new i(l,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Am,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=l,m.state=n.memoizedState,m.refs={},dm(n),v=i.contextType,m.context=typeof v=="object"&&v!==null?Yt(v):ro,m.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(zm(n,i,v,l),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&Am.enqueueReplaceState(m,m.state,null),Ms(n,l,m,d),Os(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){m=n.stateNode;var w=n.memoizedProps,T=di(i,w);m.props=T;var P=m.context,ee=i.contextType;v=ro,typeof ee=="object"&&ee!==null&&(v=Yt(ee));var ae=i.getDerivedStateFromProps;ee=typeof ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ee||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||P!==v)&&ly(n,m,l,v),oa=!1;var Q=n.memoizedState;m.state=Q,Ms(n,l,m,d),Os(),P=n.memoizedState,w||Q!==P||oa?(typeof ae=="function"&&(zm(n,i,ae,l),P=n.memoizedState),(T=oa||sy(n,i,T,l,Q,P,v))?(ee||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=P),m.props=l,m.state=P,m.context=v,l=T):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{m=n.stateNode,um(t,n),v=n.memoizedProps,ee=di(i,v),m.props=ee,ae=n.pendingProps,Q=m.context,P=i.contextType,T=ro,typeof P=="object"&&P!==null&&(T=Yt(P)),w=i.getDerivedStateFromProps,(P=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ae||Q!==T)&&ly(n,m,l,T),oa=!1,Q=n.memoizedState,m.state=Q,Ms(n,l,m,d),Os();var G=n.memoizedState;v!==ae||Q!==G||oa||t!==null&&t.dependencies!==null&&Sc(t.dependencies)?(typeof w=="function"&&(zm(n,i,w,l),G=n.memoizedState),(ee=oa||sy(n,i,ee,l,Q,G,T)||t!==null&&t.dependencies!==null&&Sc(t.dependencies))?(P||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,G,T),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,G,T)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=G),m.props=l,m.state=G,m.context=T,l=ee):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),l=!1)}return m=l,Hc(t,n),l=(n.flags&128)!==0,m||l?(m=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,t!==null&&l?(n.child=mo(n,t.child,null,d),n.child=mo(n,null,i,d)):Lt(t,n,i,d),n.memoizedState=m.state,t=n.child):t=Rn(t,n,d),t}function _y(t,n,i,l){return Es(),n.flags|=256,Lt(t,n,i,l),n.child}var Om={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mm(t){return{baseLanes:t,cachePool:dg()}}function Bm(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=zr),t}function Sy(t,n,i){var l=n.pendingProps,d=!1,m=(n.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:($t.current&2)!==0),v&&(d=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ye){if(d?da(n):ua(),Ye){var w=ut,T;if(T=w){e:{for(T=w,w=en;T.nodeType!==8;){if(!w){w=null;break e}if(T=Qr(T.nextSibling),T===null){w=null;break e}}w=T}w!==null?(n.memoizedState={dehydrated:w,treeContext:ri!==null?{id:kn,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},T=mr(18,null,null,0),T.stateNode=w,T.return=n,n.child=T,Jt=n,ut=null,T=!0):T=!1}T||ii(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return jh(w)?n.lanes=32:n.lanes=536870912,null;Dn(n)}return w=l.children,l=l.fallback,d?(ua(),d=n.mode,w=Qc({mode:"hidden",children:w},d),l=ti(l,d,i,null),w.return=n,l.return=n,w.sibling=l,n.child=w,d=n.child,d.memoizedState=Mm(i),d.childLanes=Bm(t,v,i),n.memoizedState=Om,l):(da(n),Um(n,w))}if(T=t.memoizedState,T!==null&&(w=T.dehydrated,w!==null)){if(m)n.flags&256?(da(n),n.flags&=-257,n=Fm(t,n,i)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),d=l.fallback,w=n.mode,l=Qc({mode:"visible",children:l.children},w),d=ti(d,w,i,null),d.flags|=2,l.return=n,d.return=n,l.sibling=d,n.child=l,mo(n,t.child,null,i),l=n.child,l.memoizedState=Mm(i),l.childLanes=Bm(t,v,i),n.memoizedState=Om,n=d);else if(da(n),jh(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var P=v.dgst;v=P,l=Error(s(419)),l.stack="",l.digest=v,Ts({value:l,source:null,stack:null}),n=Fm(t,n,i)}else if(zt||Ds(t,n,i,!1),v=(i&t.childLanes)!==0,zt||v){if(v=it,v!==null&&(l=i&-i,l=(l&42)!==0?1:wf(l),l=(l&(v.suspendedLanes|i))!==0?0:l,l!==0&&l!==T.retryLane))throw T.retryLane=l,to(t,l),br(v,t,l),py;w.data==="$?"||ah(),n=Fm(t,n,i)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=T.treeContext,ut=Qr(w.nextSibling),Jt=n,Ye=!0,ai=null,en=!1,t!==null&&(Tr[Dr++]=kn,Tr[Dr++]=$n,Tr[Dr++]=ri,kn=t.id,$n=t.overflow,ri=n),n=Um(n,l.children),n.flags|=4096);return n}return d?(ua(),d=l.fallback,w=n.mode,T=t.child,P=T.sibling,l=Sn(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,P!==null?d=Sn(P,d):(d=ti(d,w,i,null),d.flags|=2),d.return=n,l.return=n,l.sibling=d,n.child=l,l=d,d=n.child,w=t.child.memoizedState,w===null?w=Mm(i):(T=w.cachePool,T!==null?(P=kt._currentValue,T=T.parent!==P?{parent:P,pool:P}:T):T=dg(),w={baseLanes:w.baseLanes|i,cachePool:T}),d.memoizedState=w,d.childLanes=Bm(t,v,i),n.memoizedState=Om,l):(da(n),i=t.child,t=i.sibling,i=Sn(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=i,n.memoizedState=null,i)}function Um(t,n){return n=Qc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Qc(t,n){return t=mr(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fm(t,n,i){return mo(n,t.child,null,i),t=Um(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ky(t,n,i){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),am(t.return,n,i)}function Lm(t,n,i,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=i,m.tailMode=d)}function $y(t,n,i){var l=n.pendingProps,d=l.revealOrder,m=l.tail;if(Lt(t,n,l.children,i),l=$t.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ky(t,i,n);else if(t.tag===19)ky(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(de($t,l),d){case"forwards":for(i=n.child,d=null;i!==null;)t=i.alternate,t!==null&&Fc(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Lm(n,!1,d,i,m);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&Fc(t)===null){n.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}Lm(n,!0,i,null,m);break;case"together":Lm(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Rn(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Ds(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=Sn(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Sn(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Pm(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sc(t)))}function Ij(t,n,i){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),ia(n,kt,t.memoizedState.cache),Es();break;case 27:case 5:nt(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(da(n),n.flags|=128,null):(i&n.child.childLanes)!==0?Sy(t,n,i):(da(n),t=Rn(t,n,i),t!==null?t.sibling:null);da(n);break;case 19:var d=(t.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||(Ds(t,n,i,!1),l=(i&n.childLanes)!==0),d){if(l)return $y(t,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),de($t,$t.current),l)break;return null;case 22:case 23:return n.lanes=0,xy(t,n,i);case 24:ia(n,kt,t.memoizedState.cache)}return Rn(t,n,i)}function Cy(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)zt=!0;else{if(!Pm(t,i)&&(n.flags&128)===0)return zt=!1,Ij(t,n,i);zt=(t.flags&131072)!==0}else zt=!1,Ye&&(n.flags&1048576)!==0&&ng(n,_c,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,d=l._init;if(l=d(l._payload),n.type=l,typeof l=="function")Zf(l)?(t=di(l,t),n.tag=1,n=wy(null,n,l,t,i)):(n.tag=0,n=Nm(null,n,l,t,i));else{if(l!=null){if(d=l.$$typeof,d===z){n.tag=11,n=gy(null,n,l,t,i);break e}else if(d===F){n.tag=14,n=yy(null,n,l,t,i);break e}}throw n=ce(l)||l,Error(s(306,n,""))}}return n;case 0:return Nm(t,n,n.type,n.pendingProps,i);case 1:return l=n.type,d=di(l,n.pendingProps),wy(t,n,l,d,i);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(s(387));l=n.pendingProps;var m=n.memoizedState;d=m.element,um(t,n),Ms(n,l,null,i);var v=n.memoizedState;if(l=v.cache,ia(n,kt,l),l!==m.cache&&im(n,[kt],i,!0),Os(),l=v.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){n=_y(t,n,l,i);break e}else if(l!==d){d=Cr(Error(s(424)),n),Ts(d),n=_y(t,n,l,i);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ut=Qr(t.firstChild),Jt=n,Ye=!0,ai=null,en=!0,i=iy(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Es(),l===d){n=Rn(t,n,i);break e}Lt(t,n,l,i)}n=n.child}return n;case 26:return Hc(t,n),t===null?(i=Rb(n.type,null,n.pendingProps,null))?n.memoizedState=i:Ye||(i=n.type,t=n.pendingProps,l=ad(ve.current).createElement(i),l[Vt]=n,l[ar]=t,Ht(l,i,t),Rt(l),n.stateNode=l):n.memoizedState=Rb(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Ye&&(l=n.stateNode=Eb(n.type,n.pendingProps,ve.current),Jt=n,en=!0,d=ut,va(n.type)?(wh=d,ut=Qr(l.firstChild)):ut=d),Lt(t,n,n.pendingProps.children,i),Hc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ye&&((d=l=ut)&&(l=w4(l,n.type,n.pendingProps,en),l!==null?(n.stateNode=l,Jt=n,ut=Qr(l.firstChild),en=!1,d=!0):d=!1),d||ii(n)),nt(n),d=n.type,m=n.pendingProps,v=t!==null?t.memoizedProps:null,l=m.children,bh(d,m)?l=null:v!==null&&bh(d,v)&&(n.flags|=32),n.memoizedState!==null&&(d=ym(t,n,Fj,null,null,i),il._currentValue=d),Hc(t,n),Lt(t,n,l,i),n.child;case 6:return t===null&&Ye&&((t=i=ut)&&(i=_4(i,n.pendingProps,en),i!==null?(n.stateNode=i,Jt=n,ut=null,t=!0):t=!1),t||ii(n)),null;case 13:return Sy(t,n,i);case 4:return Ce(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=mo(n,null,l,i):Lt(t,n,l,i),n.child;case 11:return gy(t,n,n.type,n.pendingProps,i);case 7:return Lt(t,n,n.pendingProps,i),n.child;case 8:return Lt(t,n,n.pendingProps.children,i),n.child;case 12:return Lt(t,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,ia(n,n.type,l.value),Lt(t,n,l.children,i),n.child;case 9:return d=n.type._context,l=n.pendingProps.children,si(n),d=Yt(d),l=l(d),n.flags|=1,Lt(t,n,l,i),n.child;case 14:return yy(t,n,n.type,n.pendingProps,i);case 15:return by(t,n,n.type,n.pendingProps,i);case 19:return $y(t,n,i);case 31:return l=n.pendingProps,i=n.mode,l={mode:l.mode,children:l.children},t===null?(i=Qc(l,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=Sn(t.child,l),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return xy(t,n,i);case 24:return si(n),l=Yt(kt),t===null?(d=lm(),d===null&&(d=it,m=om(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=i),d=m),n.memoizedState={parent:l,cache:d},dm(n),ia(n,kt,d)):((t.lanes&i)!==0&&(um(t,n),Ms(n,null,null,i),Os()),d=t.memoizedState,m=n.memoizedState,d.parent!==l?(d={parent:l,cache:l},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),ia(n,kt,l)):(l=m.cache,ia(n,kt,l),l!==d.cache&&im(n,[kt],i,!0))),Lt(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function zn(t){t.flags|=4}function Ey(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ob(n)){if(n=Rr.current,n!==null&&((Qe&4194048)===Qe?tn!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||n!==tn))throw qs=cm,ug;t.flags|=8192}}function Gc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?op():536870912,t.lanes|=n,yo|=n)}function Qs(t,n){if(!Ye)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dt(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(n)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=i,n}function Kj(t,n,i){var l=n.pendingProps;switch(tm(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(n),null;case 1:return dt(n),null;case 3:return i=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),En(kt),rt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Cs(n)?zn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,og())),dt(n),null;case 26:return i=n.memoizedState,t===null?(zn(n),i!==null?(dt(n),Ey(n,i)):(dt(n),n.flags&=-16777217)):i?i!==t.memoizedState?(zn(n),dt(n),Ey(n,i)):(dt(n),n.flags&=-16777217):(t.memoizedProps!==l&&zn(n),dt(n),n.flags&=-16777217),null;case 27:Ft(n),i=ve.current;var d=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&zn(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return dt(n),null}t=J.current,Cs(n)?ag(n):(t=Eb(d,l,i),n.stateNode=t,zn(n))}return dt(n),null;case 5:if(Ft(n),i=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&zn(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return dt(n),null}if(t=J.current,Cs(n))ag(n);else{switch(d=ad(ve.current),t){case 1:t=d.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=d.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=d.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?d.createElement(i,{is:l.is}):d.createElement(i)}}t[Vt]=n,t[ar]=l;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)t.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=t;e:switch(Ht(t,i,l),i){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&zn(n)}}return dt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&zn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(t=ve.current,Cs(n)){if(t=n.stateNode,i=n.memoizedProps,l=null,d=Jt,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[Vt]=n,t=!!(t.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||jb(t.nodeValue,i)),t||ii(n)}else t=ad(t).createTextNode(l),t[Vt]=n,n.stateNode=t}return dt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Cs(n),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(s(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Vt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dt(n),d=!1}else d=og(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(Dn(n),n):(Dn(n),null)}if(Dn(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=l!==null,t=t!==null&&t.memoizedState!==null,i){l=n.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)}return i!==t&&i&&(n.child.flags|=8192),Gc(n,n.updateQueue),dt(n),null;case 4:return rt(),t===null&&mh(n.stateNode.containerInfo),dt(n),null;case 10:return En(n.type),dt(n),null;case 19:if(se($t),d=n.memoizedState,d===null)return dt(n),null;if(l=(n.flags&128)!==0,m=d.rendering,m===null)if(l)Qs(d,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(m=Fc(t),m!==null){for(n.flags|=128,Qs(d,!1),t=m.updateQueue,n.updateQueue=t,Gc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)rg(i,t),i=i.sibling;return de($t,$t.current&1|2),n.child}t=t.sibling}d.tail!==null&&ke()>Ic&&(n.flags|=128,l=!0,Qs(d,!1),n.lanes=4194304)}else{if(!l)if(t=Fc(m),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Gc(n,t),Qs(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Ye)return dt(n),null}else 2*ke()-d.renderingStartTime>Ic&&i!==536870912&&(n.flags|=128,l=!0,Qs(d,!1),n.lanes=4194304);d.isBackwards?(m.sibling=n.child,n.child=m):(t=d.last,t!==null?t.sibling=m:n.child=m,d.last=m)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=ke(),n.sibling=null,t=$t.current,de($t,l?t&1|2:t&1),n):(dt(n),null);case 22:case 23:return Dn(n),pm(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(i&536870912)!==0&&(n.flags&128)===0&&(dt(n),n.subtreeFlags&6&&(n.flags|=8192)):dt(n),i=n.updateQueue,i!==null&&Gc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),t!==null&&se(li),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),En(kt),dt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Xj(t,n){switch(tm(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return En(kt),rt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ft(n),null;case 13:if(Dn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return se($t),null;case 4:return rt(),null;case 10:return En(n.type),null;case 22:case 23:return Dn(n),pm(),t!==null&&se(li),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return En(kt),null;case 25:return null;default:return null}}function Ty(t,n){switch(tm(n),n.tag){case 3:En(kt),rt();break;case 26:case 27:case 5:Ft(n);break;case 4:rt();break;case 13:Dn(n);break;case 19:se($t);break;case 10:En(n.type);break;case 22:case 23:Dn(n),pm(),t!==null&&se(li);break;case 24:En(kt)}}function Gs(t,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var d=l.next;i=d;do{if((i.tag&t)===t){l=void 0;var m=i.create,v=i.inst;l=m(),v.destroy=l}i=i.next}while(i!==d)}}catch(w){et(n,n.return,w)}}function fa(t,n,i){try{var l=n.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&t)===t){var v=l.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,d=n;var T=i,P=w;try{P()}catch(ee){et(d,T,ee)}}}l=l.next}while(l!==m)}}catch(ee){et(n,n.return,ee)}}function Dy(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{yg(n,i)}catch(l){et(t,t.return,l)}}}function Ry(t,n,i){i.props=di(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(l){et(t,n,l)}}function Vs(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof i=="function"?t.refCleanup=i(l):i.current=l}}catch(d){et(t,n,d)}}function rn(t,n){var i=t.ref,l=t.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(d){et(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(d){et(t,n,d)}else i.current=null}function zy(t){var n=t.type,i=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(d){et(t,t.return,d)}}function Hm(t,n,i){try{var l=t.stateNode;y4(l,t.type,i,n),l[ar]=n}catch(d){et(t,t.return,d)}}function Ay(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ay(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gm(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=nd));else if(l!==4&&(l===27&&va(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(Gm(t,n,i),t=t.sibling;t!==null;)Gm(t,n,i),t=t.sibling}function Vc(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(l!==4&&(l===27&&va(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Vc(t,n,i),t=t.sibling;t!==null;)Vc(t,n,i),t=t.sibling}function qy(t){var n=t.stateNode,i=t.memoizedProps;try{for(var l=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Ht(n,l,i),n[Vt]=t,n[ar]=i}catch(m){et(t,t.return,m)}}var An=!1,pt=!1,Vm=!1,Ny=typeof WeakSet=="function"?WeakSet:Set,At=null;function Zj(t,n){if(t=t.containerInfo,gh=dd,t=Vp(t),Qf(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var v=0,w=-1,T=-1,P=0,ee=0,ae=t,Q=null;t:for(;;){for(var G;ae!==i||d!==0&&ae.nodeType!==3||(w=v+d),ae!==m||l!==0&&ae.nodeType!==3||(T=v+l),ae.nodeType===3&&(v+=ae.nodeValue.length),(G=ae.firstChild)!==null;)Q=ae,ae=G;for(;;){if(ae===t)break t;if(Q===i&&++P===d&&(w=v),Q===m&&++ee===l&&(T=v),(G=ae.nextSibling)!==null)break;ae=Q,Q=ae.parentNode}ae=G}i=w===-1||T===-1?null:{start:w,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(yh={focusedElem:t,selectionRange:i},dd=!1,At=n;At!==null;)if(n=At,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,At=t;else for(;At!==null;){switch(n=At,m=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,i=n,d=m.memoizedProps,m=m.memoizedState,l=i.stateNode;try{var De=di(i.type,d,i.elementType===i.type);t=l.getSnapshotBeforeUpdate(De,m),l.__reactInternalSnapshotBeforeUpdate=t}catch($e){et(i,i.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)vh(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,At=t;break}At=n.return}}function Oy(t,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:ma(t,i),l&4&&Gs(5,i);break;case 1:if(ma(t,i),l&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(v){et(i,i.return,v)}else{var d=di(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){et(i,i.return,v)}}l&64&&Dy(i),l&512&&Vs(i,i.return);break;case 3:if(ma(t,i),l&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{yg(t,n)}catch(v){et(i,i.return,v)}}break;case 27:n===null&&l&4&&qy(i);case 26:case 5:ma(t,i),n===null&&l&4&&zy(i),l&512&&Vs(i,i.return);break;case 12:ma(t,i);break;case 13:ma(t,i),l&4&&Uy(t,i),l&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=o4.bind(null,i),S4(t,i))));break;case 22:if(l=i.memoizedState!==null||An,!l){n=n!==null&&n.memoizedState!==null||pt,d=An;var m=pt;An=l,(pt=n)&&!m?ha(t,i,(i.subtreeFlags&8772)!==0):ma(t,i),An=d,pt=m}break;case 30:break;default:ma(t,i)}}function My(t){var n=t.alternate;n!==null&&(t.alternate=null,My(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kf(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var st=null,sr=!1;function qn(t,n,i){for(i=i.child;i!==null;)By(t,n,i),i=i.sibling}function By(t,n,i){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(xe,i)}catch{}switch(i.tag){case 26:pt||rn(i,n),qn(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:pt||rn(i,n);var l=st,d=sr;va(i.type)&&(st=i.stateNode,sr=!1),qn(t,n,i),tl(i.stateNode),st=l,sr=d;break;case 5:pt||rn(i,n);case 6:if(l=st,d=sr,st=null,qn(t,n,i),st=l,sr=d,st!==null)if(sr)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(i.stateNode)}catch(m){et(i,n,m)}else try{st.removeChild(i.stateNode)}catch(m){et(i,n,m)}break;case 18:st!==null&&(sr?(t=st,$b(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),cl(t)):$b(st,i.stateNode));break;case 4:l=st,d=sr,st=i.stateNode.containerInfo,sr=!0,qn(t,n,i),st=l,sr=d;break;case 0:case 11:case 14:case 15:pt||fa(2,i,n),pt||fa(4,i,n),qn(t,n,i);break;case 1:pt||(rn(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Ry(i,n,l)),qn(t,n,i);break;case 21:qn(t,n,i);break;case 22:pt=(l=pt)||i.memoizedState!==null,qn(t,n,i),pt=l;break;default:qn(t,n,i)}}function Uy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{cl(t)}catch(i){et(n,n.return,i)}}function Jj(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ny),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ny),n;default:throw Error(s(435,t.tag))}}function Ym(t,n){var i=Jj(t);n.forEach(function(l){var d=s4.bind(null,t,l);i.has(l)||(i.add(l),l.then(d,d))})}function hr(t,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l],m=t,v=n,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(va(w.type)){st=w.stateNode,sr=!1;break e}break;case 5:st=w.stateNode,sr=!1;break e;case 3:case 4:st=w.stateNode.containerInfo,sr=!0;break e}w=w.return}if(st===null)throw Error(s(160));By(m,v,d),st=null,sr=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Fy(n,t),n=n.sibling}var Hr=null;function Fy(t,n){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:hr(n,t),pr(t),l&4&&(fa(3,t,t.return),Gs(3,t),fa(5,t,t.return));break;case 1:hr(n,t),pr(t),l&512&&(pt||i===null||rn(i,i.return)),l&64&&An&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var d=Hr;if(hr(n,t),pr(t),l&512&&(pt||i===null||rn(i,i.return)),l&4){var m=i!==null?i.memoizedState:null;if(l=t.memoizedState,i===null)if(l===null)if(t.stateNode===null){e:{l=t.type,i=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[gs]||m[Vt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Ht(m,l,i),m[Vt]=t,Rt(m),l=m;break e;case"link":var v=qb("link","href",d).get(l+(i.href||""));if(v){for(var w=0;w<v.length;w++)if(m=v[w],m.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&m.getAttribute("rel")===(i.rel==null?null:i.rel)&&m.getAttribute("title")===(i.title==null?null:i.title)&&m.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){v.splice(w,1);break t}}m=d.createElement(l),Ht(m,l,i),d.head.appendChild(m);break;case"meta":if(v=qb("meta","content",d).get(l+(i.content||""))){for(w=0;w<v.length;w++)if(m=v[w],m.getAttribute("content")===(i.content==null?null:""+i.content)&&m.getAttribute("name")===(i.name==null?null:i.name)&&m.getAttribute("property")===(i.property==null?null:i.property)&&m.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&m.getAttribute("charset")===(i.charSet==null?null:i.charSet)){v.splice(w,1);break t}}m=d.createElement(l),Ht(m,l,i),d.head.appendChild(m);break;default:throw Error(s(468,l))}m[Vt]=t,Rt(m),l=m}t.stateNode=l}else Nb(d,t.type,t.stateNode);else t.stateNode=Ab(d,l,t.memoizedProps);else m!==l?(m===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):m.count--,l===null?Nb(d,t.type,t.stateNode):Ab(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Hm(t,t.memoizedProps,i.memoizedProps)}break;case 27:hr(n,t),pr(t),l&512&&(pt||i===null||rn(i,i.return)),i!==null&&l&4&&Hm(t,t.memoizedProps,i.memoizedProps);break;case 5:if(hr(n,t),pr(t),l&512&&(pt||i===null||rn(i,i.return)),t.flags&32){d=t.stateNode;try{Ii(d,"")}catch(G){et(t,t.return,G)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,Hm(t,d,i!==null?i.memoizedProps:d)),l&1024&&(Vm=!0);break;case 6:if(hr(n,t),pr(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,i=t.stateNode;try{i.nodeValue=l}catch(G){et(t,t.return,G)}}break;case 3:if(sd=null,d=Hr,Hr=id(n.containerInfo),hr(n,t),Hr=d,pr(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{cl(n.containerInfo)}catch(G){et(t,t.return,G)}Vm&&(Vm=!1,Ly(t));break;case 4:l=Hr,Hr=id(t.stateNode.containerInfo),hr(n,t),pr(t),Hr=l;break;case 12:hr(n,t),pr(t);break;case 13:hr(n,t),pr(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Wm=ke()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ym(t,l)));break;case 22:d=t.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,P=An,ee=pt;if(An=P||d,pt=ee||T,hr(n,t),pt=ee,An=P,pr(t),l&8192)e:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(i===null||T||An||pt||ui(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){T=i=n;try{if(m=T.stateNode,d)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=T.stateNode;var ae=T.memoizedProps.style,Q=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;w.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(G){et(T,T.return,G)}}}else if(n.tag===6){if(i===null){T=n;try{T.stateNode.nodeValue=d?"":T.memoizedProps}catch(G){et(T,T.return,G)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Ym(t,i))));break;case 19:hr(n,t),pr(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ym(t,l)));break;case 30:break;case 21:break;default:hr(n,t),pr(t)}}function pr(t){var n=t.flags;if(n&2){try{for(var i,l=t.return;l!==null;){if(Ay(l)){i=l;break}l=l.return}if(i==null)throw Error(s(160));switch(i.tag){case 27:var d=i.stateNode,m=Qm(t);Vc(t,m,d);break;case 5:var v=i.stateNode;i.flags&32&&(Ii(v,""),i.flags&=-33);var w=Qm(t);Vc(t,w,v);break;case 3:case 4:var T=i.stateNode.containerInfo,P=Qm(t);Gm(t,P,T);break;default:throw Error(s(161))}}catch(ee){et(t,t.return,ee)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ly(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ly(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Oy(t,n.alternate,n),n=n.sibling}function ui(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:fa(4,n,n.return),ui(n);break;case 1:rn(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Ry(n,n.return,i),ui(n);break;case 27:tl(n.stateNode);case 26:case 5:rn(n,n.return),ui(n);break;case 22:n.memoizedState===null&&ui(n);break;case 30:ui(n);break;default:ui(n)}t=t.sibling}}function ha(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,d=t,m=n,v=m.flags;switch(m.tag){case 0:case 11:case 15:ha(d,m,i),Gs(4,m);break;case 1:if(ha(d,m,i),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(P){et(l,l.return,P)}if(l=m,d=l.updateQueue,d!==null){var w=l.stateNode;try{var T=d.shared.hiddenCallbacks;if(T!==null)for(d.shared.hiddenCallbacks=null,d=0;d<T.length;d++)gg(T[d],w)}catch(P){et(l,l.return,P)}}i&&v&64&&Dy(m),Vs(m,m.return);break;case 27:qy(m);case 26:case 5:ha(d,m,i),i&&l===null&&v&4&&zy(m),Vs(m,m.return);break;case 12:ha(d,m,i);break;case 13:ha(d,m,i),i&&v&4&&Uy(d,m);break;case 22:m.memoizedState===null&&ha(d,m,i),Vs(m,m.return);break;case 30:break;default:ha(d,m,i)}n=n.sibling}}function Im(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Rs(i))}function Km(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Rs(t))}function nn(t,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Py(t,n,i,l),n=n.sibling}function Py(t,n,i,l){var d=n.flags;switch(n.tag){case 0:case 11:case 15:nn(t,n,i,l),d&2048&&Gs(9,n);break;case 1:nn(t,n,i,l);break;case 3:nn(t,n,i,l),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Rs(t)));break;case 12:if(d&2048){nn(t,n,i,l),t=n.stateNode;try{var m=n.memoizedProps,v=m.id,w=m.onPostCommit;typeof w=="function"&&w(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){et(n,n.return,T)}}else nn(t,n,i,l);break;case 13:nn(t,n,i,l);break;case 23:break;case 22:m=n.stateNode,v=n.alternate,n.memoizedState!==null?m._visibility&2?nn(t,n,i,l):Ys(t,n):m._visibility&2?nn(t,n,i,l):(m._visibility|=2,ho(t,n,i,l,(n.subtreeFlags&10256)!==0)),d&2048&&Im(v,n);break;case 24:nn(t,n,i,l),d&2048&&Km(n.alternate,n);break;default:nn(t,n,i,l)}}function ho(t,n,i,l,d){for(d=d&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=t,v=n,w=i,T=l,P=v.flags;switch(v.tag){case 0:case 11:case 15:ho(m,v,w,T,d),Gs(8,v);break;case 23:break;case 22:var ee=v.stateNode;v.memoizedState!==null?ee._visibility&2?ho(m,v,w,T,d):Ys(m,v):(ee._visibility|=2,ho(m,v,w,T,d)),d&&P&2048&&Im(v.alternate,v);break;case 24:ho(m,v,w,T,d),d&&P&2048&&Km(v.alternate,v);break;default:ho(m,v,w,T,d)}n=n.sibling}}function Ys(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,l=n,d=l.flags;switch(l.tag){case 22:Ys(i,l),d&2048&&Im(l.alternate,l);break;case 24:Ys(i,l),d&2048&&Km(l.alternate,l);break;default:Ys(i,l)}n=n.sibling}}var Is=8192;function po(t){if(t.subtreeFlags&Is)for(t=t.child;t!==null;)Hy(t),t=t.sibling}function Hy(t){switch(t.tag){case 26:po(t),t.flags&Is&&t.memoizedState!==null&&M4(Hr,t.memoizedState,t.memoizedProps);break;case 5:po(t);break;case 3:case 4:var n=Hr;Hr=id(t.stateNode.containerInfo),po(t),Hr=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Is,Is=16777216,po(t),Is=n):po(t));break;default:po(t)}}function Qy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ks(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];At=l,Vy(l,t)}Qy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gy(t),t=t.sibling}function Gy(t){switch(t.tag){case 0:case 11:case 15:Ks(t),t.flags&2048&&fa(9,t,t.return);break;case 3:Ks(t);break;case 12:Ks(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yc(t)):Ks(t);break;default:Ks(t)}}function Yc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];At=l,Vy(l,t)}Qy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:fa(8,n,n.return),Yc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Yc(n));break;default:Yc(n)}t=t.sibling}}function Vy(t,n){for(;At!==null;){var i=At;switch(i.tag){case 0:case 11:case 15:fa(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Rs(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,At=l;else e:for(i=t;At!==null;){l=At;var d=l.sibling,m=l.return;if(My(l),l===i){At=null;break e}if(d!==null){d.return=m,At=d;break e}At=m}}}var Wj={getCacheForType:function(t){var n=Yt(kt),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i}},e4=typeof WeakMap=="function"?WeakMap:Map,Ke=0,it=null,Pe=null,Qe=0,Xe=0,gr=null,pa=!1,go=!1,Xm=!1,Nn=0,ft=0,ga=0,fi=0,Zm=0,zr=0,yo=0,Xs=null,lr=null,Jm=!1,Wm=0,Ic=1/0,Kc=null,ya=null,Pt=0,ba=null,bo=null,xo=0,eh=0,th=null,Yy=null,Zs=0,rh=null;function yr(){if((Ke&2)!==0&&Qe!==0)return Qe&-Qe;if(N.T!==null){var t=io;return t!==0?t:ch()}return cp()}function Iy(){zr===0&&(zr=(Qe&536870912)===0||Ye?ip():536870912);var t=Rr.current;return t!==null&&(t.flags|=32),zr}function br(t,n,i){(t===it&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(vo(t,0),xa(t,Qe,zr,!1)),ps(t,i),((Ke&2)===0||t!==it)&&(t===it&&((Ke&2)===0&&(fi|=i),ft===4&&xa(t,Qe,zr,!1)),an(t))}function Ky(t,n,i){if((Ke&6)!==0)throw Error(s(327));var l=!i&&(n&124)===0&&(n&t.expiredLanes)===0||Xa(t,n),d=l?n4(t,n):ih(t,n,!0),m=l;do{if(d===0){go&&!l&&xa(t,n,0,!1);break}else{if(i=t.current.alternate,m&&!t4(i)){d=ih(t,n,!1),m=!1;continue}if(d===2){if(m=n,t.errorRecoveryDisabledLanes&m)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var w=t;d=Xs;var T=w.current.memoizedState.isDehydrated;if(T&&(vo(w,v).flags|=256),v=ih(w,v,!1),v!==2){if(Xm&&!T){w.errorRecoveryDisabledLanes|=m,fi|=m,d=4;break e}m=lr,lr=d,m!==null&&(lr===null?lr=m:lr.push.apply(lr,m))}d=v}if(m=!1,d!==2)continue}}if(d===1){vo(t,0),xa(t,n,0,!0);break}e:{switch(l=t,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:xa(l,n,zr,!pa);break e;case 2:lr=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(d=Wm+300-ke(),10<d)){if(xa(l,n,zr,!pa),Ka(l,0,!0)!==0)break e;l.timeoutHandle=Sb(Xy.bind(null,l,i,lr,Kc,Jm,n,zr,fi,yo,pa,m,2,-0,0),d);break e}Xy(l,i,lr,Kc,Jm,n,zr,fi,yo,pa,m,0,-0,0)}}break}while(!0);an(t)}function Xy(t,n,i,l,d,m,v,w,T,P,ee,ae,Q,G){if(t.timeoutHandle=-1,ae=n.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(al={stylesheets:null,count:0,unsuspend:O4},Hy(n),ae=B4(),ae!==null)){t.cancelPendingCommit=ae(nb.bind(null,t,n,m,i,l,d,v,w,T,ee,1,Q,G)),xa(t,m,v,!P);return}nb(t,n,m,i,l,d,v,w,T)}function t4(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var d=i[l],m=d.getSnapshot;d=d.value;try{if(!fr(m(),d))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(t,n,i,l){n&=~Zm,n&=~fi,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var d=n;0<d;){var m=31-at(d),v=1<<m;l[m]=-1,d&=~v}i!==0&&sp(t,i,n)}function Xc(){return(Ke&6)===0?(Js(0),!1):!0}function nh(){if(Pe!==null){if(Xe===0)var t=Pe.return;else t=Pe,Cn=oi=null,vm(t),fo=null,Ps=0,t=Pe;for(;t!==null;)Ty(t.alternate,t),t=t.return;Pe=null}}function vo(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,x4(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),nh(),it=t,Pe=i=Sn(t.current,null),Qe=n,Xe=0,gr=null,pa=!1,go=Xa(t,n),Xm=!1,yo=zr=Zm=fi=ga=ft=0,lr=Xs=null,Jm=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var d=31-at(l),m=1<<d;n|=t[d],l&=~m}return Nn=n,bc(),i}function Zy(t,n){Be=null,N.H=Mc,n===As||n===Cc?(n=hg(),Xe=3):n===ug?(n=hg(),Xe=4):Xe=n===py?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gr=n,Pe===null&&(ft=1,Pc(t,Cr(n,t.current)))}function Jy(){var t=N.H;return N.H=Mc,t===null?Mc:t}function Wy(){var t=N.A;return N.A=Wj,t}function ah(){ft=4,pa||(Qe&4194048)!==Qe&&Rr.current!==null||(go=!0),(ga&134217727)===0&&(fi&134217727)===0||it===null||xa(it,Qe,zr,!1)}function ih(t,n,i){var l=Ke;Ke|=2;var d=Jy(),m=Wy();(it!==t||Qe!==n)&&(Kc=null,vo(t,n)),n=!1;var v=ft;e:do try{if(Xe!==0&&Pe!==null){var w=Pe,T=gr;switch(Xe){case 8:nh(),v=6;break e;case 3:case 2:case 9:case 6:Rr.current===null&&(n=!0);var P=Xe;if(Xe=0,gr=null,jo(t,w,T,P),i&&go){v=0;break e}break;default:P=Xe,Xe=0,gr=null,jo(t,w,T,P)}}r4(),v=ft;break}catch(ee){Zy(t,ee)}while(!0);return n&&t.shellSuspendCounter++,Cn=oi=null,Ke=l,N.H=d,N.A=m,Pe===null&&(it=null,Qe=0,bc()),v}function r4(){for(;Pe!==null;)eb(Pe)}function n4(t,n){var i=Ke;Ke|=2;var l=Jy(),d=Wy();it!==t||Qe!==n?(Kc=null,Ic=ke()+500,vo(t,n)):go=Xa(t,n);e:do try{if(Xe!==0&&Pe!==null){n=Pe;var m=gr;t:switch(Xe){case 1:Xe=0,gr=null,jo(t,n,m,1);break;case 2:case 9:if(fg(m)){Xe=0,gr=null,tb(n);break}n=function(){Xe!==2&&Xe!==9||it!==t||(Xe=7),an(t)},m.then(n,n);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:fg(m)?(Xe=0,gr=null,tb(n)):(Xe=0,gr=null,jo(t,n,m,7));break;case 5:var v=null;switch(Pe.tag){case 26:v=Pe.memoizedState;case 5:case 27:var w=Pe;if(!v||Ob(v)){Xe=0,gr=null;var T=w.sibling;if(T!==null)Pe=T;else{var P=w.return;P!==null?(Pe=P,Zc(P)):Pe=null}break t}}Xe=0,gr=null,jo(t,n,m,5);break;case 6:Xe=0,gr=null,jo(t,n,m,6);break;case 8:nh(),ft=6;break e;default:throw Error(s(462))}}a4();break}catch(ee){Zy(t,ee)}while(!0);return Cn=oi=null,N.H=l,N.A=d,Ke=i,Pe!==null?0:(it=null,Qe=0,bc(),ft)}function a4(){for(;Pe!==null&&!Ui();)eb(Pe)}function eb(t){var n=Cy(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,n===null?Zc(t):Pe=n}function tb(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=jy(i,n,n.pendingProps,n.type,void 0,Qe);break;case 11:n=jy(i,n,n.pendingProps,n.type.render,n.ref,Qe);break;case 5:vm(n);default:Ty(i,n),n=Pe=rg(n,Nn),n=Cy(i,n,Nn)}t.memoizedProps=t.pendingProps,n===null?Zc(t):Pe=n}function jo(t,n,i,l){Cn=oi=null,vm(n),fo=null,Ps=0;var d=n.return;try{if(Yj(t,d,n,i,Qe)){ft=1,Pc(t,Cr(i,t.current)),Pe=null;return}}catch(m){if(d!==null)throw Pe=d,m;ft=1,Pc(t,Cr(i,t.current)),Pe=null;return}n.flags&32768?(Ye||l===1?t=!0:go||(Qe&536870912)!==0?t=!1:(pa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Rr.current,l!==null&&l.tag===13&&(l.flags|=16384))),rb(n,t)):Zc(n)}function Zc(t){var n=t;do{if((n.flags&32768)!==0){rb(n,pa);return}t=n.return;var i=Kj(n.alternate,n,Nn);if(i!==null){Pe=i;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=t}while(n!==null);ft===0&&(ft=5)}function rb(t,n){do{var i=Xj(t.alternate,t);if(i!==null){i.flags&=32767,Pe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){Pe=t;return}Pe=t=i}while(t!==null);ft=6,Pe=null}function nb(t,n,i,l,d,m,v,w,T){t.cancelPendingCommit=null;do Jc();while(Pt!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(m=n.lanes|n.childLanes,m|=Kf,O6(t,i,m,v,w,T),t===it&&(Pe=it=null,Qe=0),bo=n,ba=t,xo=i,eh=m,th=d,Yy=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,l4(U,function(){return lb(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,d=ne.p,ne.p=2,v=Ke,Ke|=4;try{Zj(t,n,i)}finally{Ke=v,ne.p=d,N.T=l}}Pt=1,ab(),ib(),ob()}}function ab(){if(Pt===1){Pt=0;var t=ba,n=bo,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=N.T,N.T=null;var l=ne.p;ne.p=2;var d=Ke;Ke|=4;try{Fy(n,t);var m=yh,v=Vp(t.containerInfo),w=m.focusedElem,T=m.selectionRange;if(v!==w&&w&&w.ownerDocument&&Gp(w.ownerDocument.documentElement,w)){if(T!==null&&Qf(w)){var P=T.start,ee=T.end;if(ee===void 0&&(ee=P),"selectionStart"in w)w.selectionStart=P,w.selectionEnd=Math.min(ee,w.value.length);else{var ae=w.ownerDocument||document,Q=ae&&ae.defaultView||window;if(Q.getSelection){var G=Q.getSelection(),De=w.textContent.length,$e=Math.min(T.start,De),We=T.end===void 0?$e:Math.min(T.end,De);!G.extend&&$e>We&&(v=We,We=$e,$e=v);var B=Qp(w,$e),q=Qp(w,We);if(B&&q&&(G.rangeCount!==1||G.anchorNode!==B.node||G.anchorOffset!==B.offset||G.focusNode!==q.node||G.focusOffset!==q.offset)){var L=ae.createRange();L.setStart(B.node,B.offset),G.removeAllRanges(),$e>We?(G.addRange(L),G.extend(q.node,q.offset)):(L.setEnd(q.node,q.offset),G.addRange(L))}}}}for(ae=[],G=w;G=G.parentNode;)G.nodeType===1&&ae.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ae.length;w++){var re=ae[w];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}dd=!!gh,yh=gh=null}finally{Ke=d,ne.p=l,N.T=i}}t.current=n,Pt=2}}function ib(){if(Pt===2){Pt=0;var t=ba,n=bo,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=N.T,N.T=null;var l=ne.p;ne.p=2;var d=Ke;Ke|=4;try{Oy(t,n.alternate,n)}finally{Ke=d,ne.p=l,N.T=i}}Pt=3}}function ob(){if(Pt===4||Pt===3){Pt=0,le();var t=ba,n=bo,i=xo,l=Yy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pt=5:(Pt=0,bo=ba=null,sb(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(ya=null),_f(i),n=n.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(xe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=N.T,d=ne.p,ne.p=2,N.T=null;try{for(var m=t.onRecoverableError,v=0;v<l.length;v++){var w=l[v];m(w.value,{componentStack:w.stack})}}finally{N.T=n,ne.p=d}}(xo&3)!==0&&Jc(),an(t),d=t.pendingLanes,(i&4194090)!==0&&(d&42)!==0?t===rh?Zs++:(Zs=0,rh=t):Zs=0,Js(0)}}function sb(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Rs(n)))}function Jc(t){return ab(),ib(),ob(),lb()}function lb(){if(Pt!==5)return!1;var t=ba,n=eh;eh=0;var i=_f(xo),l=N.T,d=ne.p;try{ne.p=32>i?32:i,N.T=null,i=th,th=null;var m=ba,v=xo;if(Pt=0,bo=ba=null,xo=0,(Ke&6)!==0)throw Error(s(331));var w=Ke;if(Ke|=4,Gy(m.current),Py(m,m.current,v,i),Ke=w,Js(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(xe,m)}catch{}return!0}finally{ne.p=d,N.T=l,sb(t,n)}}function cb(t,n,i){n=Cr(i,n),n=qm(t.stateNode,n,2),t=la(t,n,2),t!==null&&(ps(t,2),an(t))}function et(t,n,i){if(t.tag===3)cb(t,t,i);else for(;n!==null;){if(n.tag===3){cb(n,t,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ya===null||!ya.has(l))){t=Cr(i,t),i=my(2),l=la(n,i,2),l!==null&&(hy(i,l,n,t),ps(l,2),an(l));break}}n=n.return}}function oh(t,n,i){var l=t.pingCache;if(l===null){l=t.pingCache=new e4;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(i)||(Xm=!0,d.add(i),t=i4.bind(null,t,n,i),n.then(t,t))}function i4(t,n,i){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,it===t&&(Qe&i)===i&&(ft===4||ft===3&&(Qe&62914560)===Qe&&300>ke()-Wm?(Ke&2)===0&&vo(t,0):Zm|=i,yo===Qe&&(yo=0)),an(t)}function db(t,n){n===0&&(n=op()),t=to(t,n),t!==null&&(ps(t,n),an(t))}function o4(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),db(t,i)}function s4(t,n){var i=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),db(t,i)}function l4(t,n){return Ia(t,n)}var Wc=null,wo=null,sh=!1,ed=!1,lh=!1,mi=0;function an(t){t!==wo&&t.next===null&&(wo===null?Wc=wo=t:wo=wo.next=t),ed=!0,sh||(sh=!0,d4())}function Js(t,n){if(!lh&&ed){lh=!0;do for(var i=!1,l=Wc;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var v=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-at(42|t)+1)-1,m&=d&~(v&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(i=!0,hb(l,m))}else m=Qe,m=Ka(l,l===it?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Xa(l,m)||(i=!0,hb(l,m));l=l.next}while(i);lh=!1}}function c4(){ub()}function ub(){ed=sh=!1;var t=0;mi!==0&&(b4()&&(t=mi),mi=0);for(var n=ke(),i=null,l=Wc;l!==null;){var d=l.next,m=fb(l,n);m===0?(l.next=null,i===null?Wc=d:i.next=d,d===null&&(wo=i)):(i=l,(t!==0||(m&3)!==0)&&(ed=!0)),l=d}Js(t)}function fb(t,n){for(var i=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var v=31-at(m),w=1<<v,T=d[v];T===-1?((w&i)===0||(w&l)!==0)&&(d[v]=oc(w,n)):T<=n&&(t.expiredLanes|=w),m&=~w}if(n=it,i=Qe,i=Ka(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,i===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ea(l),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Xa(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(l!==null&&ea(l),_f(i)){case 2:case 8:i=E;break;case 32:i=U;break;case 268435456:i=me;break;default:i=U}return l=mb.bind(null,t),i=Ia(i,l),t.callbackPriority=n,t.callbackNode=i,n}return l!==null&&l!==null&&ea(l),t.callbackPriority=2,t.callbackNode=null,2}function mb(t,n){if(Pt!==0&&Pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Jc()&&t.callbackNode!==i)return null;var l=Qe;return l=Ka(t,t===it?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ky(t,l,n),fb(t,ke()),t.callbackNode!=null&&t.callbackNode===i?mb.bind(null,t):null)}function hb(t,n){if(Jc())return null;Ky(t,n,!0)}function d4(){v4(function(){(Ke&6)!==0?Ia(Ue,c4):ub()})}function ch(){return mi===0&&(mi=ip()),mi}function pb(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:uc(""+t)}function gb(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function u4(t,n,i,l,d){if(n==="submit"&&i&&i.stateNode===d){var m=pb((d[ar]||null).action),v=l.submitter;v&&(n=(n=v[ar]||null)?pb(n.formAction):v.getAttribute("formAction"),n!==null&&(m=n,v=null));var w=new pc("action","action",null,l,d);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(mi!==0){var T=v?gb(d,v):new FormData(d);Tm(i,{pending:!0,data:T,method:d.method,action:m},null,T)}}else typeof m=="function"&&(w.preventDefault(),T=v?gb(d,v):new FormData(d),Tm(i,{pending:!0,data:T,method:d.method,action:m},m,T))},currentTarget:d}]})}}for(var dh=0;dh<If.length;dh++){var uh=If[dh],f4=uh.toLowerCase(),m4=uh[0].toUpperCase()+uh.slice(1);Pr(f4,"on"+m4)}Pr(Kp,"onAnimationEnd"),Pr(Xp,"onAnimationIteration"),Pr(Zp,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Dj,"onTransitionRun"),Pr(Rj,"onTransitionStart"),Pr(zj,"onTransitionCancel"),Pr(Jp,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Za("onBeforeInput",["compositionend","keypress","textInput","paste"]),Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ws));function yb(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],d=l.event;l=l.listeners;e:{var m=void 0;if(n)for(var v=l.length-1;0<=v;v--){var w=l[v],T=w.instance,P=w.currentTarget;if(w=w.listener,T!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=P;try{m(d)}catch(ee){Lc(ee)}d.currentTarget=null,m=T}else for(v=0;v<l.length;v++){if(w=l[v],T=w.instance,P=w.currentTarget,w=w.listener,T!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=P;try{m(d)}catch(ee){Lc(ee)}d.currentTarget=null,m=T}}}}function He(t,n){var i=n[Sf];i===void 0&&(i=n[Sf]=new Set);var l=t+"__bubble";i.has(l)||(bb(n,t,2,!1),i.add(l))}function fh(t,n,i){var l=0;n&&(l|=4),bb(i,t,l,n)}var td="_reactListening"+Math.random().toString(36).slice(2);function mh(t){if(!t[td]){t[td]=!0,up.forEach(function(i){i!=="selectionchange"&&(h4.has(i)||fh(i,!1,t),fh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[td]||(n[td]=!0,fh("selectionchange",!1,n))}}function bb(t,n,i,l){switch(Pb(n)){case 2:var d=L4;break;case 8:d=P4;break;default:d=Ch}i=d.bind(null,n,i,t),d=void 0,!Nf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(n,i,{capture:!0,passive:d}):t.addEventListener(n,i,!0):d!==void 0?t.addEventListener(n,i,{passive:d}):t.addEventListener(n,i,!1)}function hh(t,n,i,l,d){var m=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var w=l.stateNode.containerInfo;if(w===d)break;if(v===4)for(v=l.return;v!==null;){var T=v.tag;if((T===3||T===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;w!==null;){if(v=Pi(w),v===null)return;if(T=v.tag,T===5||T===6||T===26||T===27){l=m=v;continue e}w=w.parentNode}}l=l.return}kp(function(){var P=m,ee=Af(i),ae=[];e:{var Q=Wp.get(t);if(Q!==void 0){var G=pc,De=t;switch(t){case"keypress":if(mc(i)===0)break e;case"keydown":case"keyup":G=lj;break;case"focusin":De="focus",G=Uf;break;case"focusout":De="blur",G=Uf;break;case"beforeblur":case"afterblur":G=Uf;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=X6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=uj;break;case Kp:case Xp:case Zp:G=W6;break;case Jp:G=mj;break;case"scroll":case"scrollend":G=I6;break;case"wheel":G=pj;break;case"copy":case"cut":case"paste":G=tj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Dp;break;case"toggle":case"beforetoggle":G=yj}var $e=(n&4)!==0,We=!$e&&(t==="scroll"||t==="scrollend"),B=$e?Q!==null?Q+"Capture":null:Q;$e=[];for(var q=P,L;q!==null;){var re=q;if(L=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||L===null||B===null||(re=bs(q,B),re!=null&&$e.push(el(q,re,L))),We)break;q=q.return}0<$e.length&&(Q=new G(Q,De,null,i,ee),ae.push({event:Q,listeners:$e}))}}if((n&7)===0){e:{if(Q=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",Q&&i!==zf&&(De=i.relatedTarget||i.fromElement)&&(Pi(De)||De[Li]))break e;if((G||Q)&&(Q=ee.window===ee?ee:(Q=ee.ownerDocument)?Q.defaultView||Q.parentWindow:window,G?(De=i.relatedTarget||i.toElement,G=P,De=De?Pi(De):null,De!==null&&(We=u(De),$e=De.tag,De!==We||$e!==5&&$e!==27&&$e!==6)&&(De=null)):(G=null,De=P),G!==De)){if($e=Ep,re="onMouseLeave",B="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&($e=Dp,re="onPointerLeave",B="onPointerEnter",q="pointer"),We=G==null?Q:ys(G),L=De==null?Q:ys(De),Q=new $e(re,q+"leave",G,i,ee),Q.target=We,Q.relatedTarget=L,re=null,Pi(ee)===P&&($e=new $e(B,q+"enter",De,i,ee),$e.target=L,$e.relatedTarget=We,re=$e),We=re,G&&De)t:{for($e=G,B=De,q=0,L=$e;L;L=_o(L))q++;for(L=0,re=B;re;re=_o(re))L++;for(;0<q-L;)$e=_o($e),q--;for(;0<L-q;)B=_o(B),L--;for(;q--;){if($e===B||B!==null&&$e===B.alternate)break t;$e=_o($e),B=_o(B)}$e=null}else $e=null;G!==null&&xb(ae,Q,G,$e,!1),De!==null&&We!==null&&xb(ae,We,De,$e,!0)}}e:{if(Q=P?ys(P):window,G=Q.nodeName&&Q.nodeName.toLowerCase(),G==="select"||G==="input"&&Q.type==="file")var we=Bp;else if(Op(Q))if(Up)we=Cj;else{we=kj;var Fe=Sj}else G=Q.nodeName,!G||G.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?P&&Rf(P.elementType)&&(we=Bp):we=$j;if(we&&(we=we(t,P))){Mp(ae,we,i,ee);break e}Fe&&Fe(t,Q,P),t==="focusout"&&P&&Q.type==="number"&&P.memoizedProps.value!=null&&Df(Q,"number",Q.value)}switch(Fe=P?ys(P):window,t){case"focusin":(Op(Fe)||Fe.contentEditable==="true")&&(Ji=Fe,Gf=P,$s=null);break;case"focusout":$s=Gf=Ji=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Yp(ae,i,ee);break;case"selectionchange":if(Tj)break;case"keydown":case"keyup":Yp(ae,i,ee)}var Se;if(Lf)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Zi?qp(t,i)&&(Ee="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Ee="onCompositionStart");Ee&&(Rp&&i.locale!=="ko"&&(Zi||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zi&&(Se=$p()):(aa=ee,Of="value"in aa?aa.value:aa.textContent,Zi=!0)),Fe=rd(P,Ee),0<Fe.length&&(Ee=new Tp(Ee,t,null,i,ee),ae.push({event:Ee,listeners:Fe}),Se?Ee.data=Se:(Se=Np(i),Se!==null&&(Ee.data=Se)))),(Se=xj?vj(t,i):jj(t,i))&&(Ee=rd(P,"onBeforeInput"),0<Ee.length&&(Fe=new Tp("onBeforeInput","beforeinput",null,i,ee),ae.push({event:Fe,listeners:Ee}),Fe.data=Se)),u4(ae,t,P,i,ee)}yb(ae,n)})}function el(t,n,i){return{instance:t,listener:n,currentTarget:i}}function rd(t,n){for(var i=n+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=bs(t,i),d!=null&&l.unshift(el(t,d,m)),d=bs(t,n),d!=null&&l.push(el(t,d,m))),t.tag===3)return l;t=t.return}return[]}function _o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xb(t,n,i,l,d){for(var m=n._reactName,v=[];i!==null&&i!==l;){var w=i,T=w.alternate,P=w.stateNode;if(w=w.tag,T!==null&&T===l)break;w!==5&&w!==26&&w!==27||P===null||(T=P,d?(P=bs(i,m),P!=null&&v.unshift(el(i,P,T))):d||(P=bs(i,m),P!=null&&v.push(el(i,P,T)))),i=i.return}v.length!==0&&t.push({event:n,listeners:v})}var p4=/\r\n?/g,g4=/\u0000|\uFFFD/g;function vb(t){return(typeof t=="string"?t:""+t).replace(p4,`
`).replace(g4,"")}function jb(t,n){return n=vb(n),vb(t)===n}function nd(){}function Je(t,n,i,l,d,m){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Ii(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Ii(t,""+l);break;case"className":lc(t,"class",l);break;case"tabIndex":lc(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":lc(t,i,l);break;case"style":_p(t,l,m);break;case"data":if(n!=="object"){lc(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=uc(""+l),t.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(i==="formAction"?(n!=="input"&&Je(t,n,"name",d.name,d,null),Je(t,n,"formEncType",d.formEncType,d,null),Je(t,n,"formMethod",d.formMethod,d,null),Je(t,n,"formTarget",d.formTarget,d,null)):(Je(t,n,"encType",d.encType,d,null),Je(t,n,"method",d.method,d,null),Je(t,n,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=uc(""+l),t.setAttribute(i,l);break;case"onClick":l!=null&&(t.onclick=nd);break;case"onScroll":l!=null&&He("scroll",t);break;case"onScrollEnd":l!=null&&He("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(s(60));t.innerHTML=i}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}i=uc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""+l):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":l===!0?t.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,l):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(i,l):t.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(i):t.setAttribute(i,l);break;case"popover":He("beforetoggle",t),He("toggle",t),sc(t,"popover",l);break;case"xlinkActuate":wn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":sc(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=V6.get(i)||i,sc(t,i,l))}}function ph(t,n,i,l,d,m){switch(i){case"style":_p(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(s(60));t.innerHTML=i}}break;case"children":typeof l=="string"?Ii(t,l):(typeof l=="number"||typeof l=="bigint")&&Ii(t,""+l);break;case"onScroll":l!=null&&He("scroll",t);break;case"onScrollEnd":l!=null&&He("scrollend",t);break;case"onClick":l!=null&&(t.onclick=nd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fp.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(d=i.endsWith("Capture"),n=i.slice(2,d?i.length-7:void 0),m=t[ar]||null,m=m!=null?m[i]:null,typeof m=="function"&&t.removeEventListener(n,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,l,d);break e}i in t?t[i]=l:l===!0?t.setAttribute(i,""):sc(t,i,l)}}}function Ht(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",t),He("load",t);var l=!1,d=!1,m;for(m in i)if(i.hasOwnProperty(m)){var v=i[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Je(t,n,m,v,i,null)}}d&&Je(t,n,"srcSet",i.srcSet,i,null),l&&Je(t,n,"src",i.src,i,null);return;case"input":He("invalid",t);var w=m=v=d=null,T=null,P=null;for(l in i)if(i.hasOwnProperty(l)){var ee=i[l];if(ee!=null)switch(l){case"name":d=ee;break;case"type":v=ee;break;case"checked":T=ee;break;case"defaultChecked":P=ee;break;case"value":m=ee;break;case"defaultValue":w=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Je(t,n,l,ee,i,null)}}xp(t,m,w,T,P,v,d,!1),cc(t);return;case"select":He("invalid",t),l=v=m=null;for(d in i)if(i.hasOwnProperty(d)&&(w=i[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":v=w;break;case"multiple":l=w;default:Je(t,n,d,w,i,null)}n=m,i=v,t.multiple=!!l,n!=null?Yi(t,!!l,n,!1):i!=null&&Yi(t,!!l,i,!0);return;case"textarea":He("invalid",t),m=d=l=null;for(v in i)if(i.hasOwnProperty(v)&&(w=i[v],w!=null))switch(v){case"value":l=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Je(t,n,v,w,i,null)}jp(t,l,d,m),cc(t);return;case"option":for(T in i)if(i.hasOwnProperty(T)&&(l=i[T],l!=null))switch(T){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(t,n,T,l,i,null)}return;case"dialog":He("beforetoggle",t),He("toggle",t),He("cancel",t),He("close",t);break;case"iframe":case"object":He("load",t);break;case"video":case"audio":for(l=0;l<Ws.length;l++)He(Ws[l],t);break;case"image":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"embed":case"source":case"link":He("error",t),He("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in i)if(i.hasOwnProperty(P)&&(l=i[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Je(t,n,P,l,i,null)}return;default:if(Rf(n)){for(ee in i)i.hasOwnProperty(ee)&&(l=i[ee],l!==void 0&&ph(t,n,ee,l,i,void 0));return}}for(w in i)i.hasOwnProperty(w)&&(l=i[w],l!=null&&Je(t,n,w,l,i,null))}function y4(t,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,v=null,w=null,T=null,P=null,ee=null;for(G in i){var ae=i[G];if(i.hasOwnProperty(G)&&ae!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":T=ae;default:l.hasOwnProperty(G)||Je(t,n,G,null,l,ae)}}for(var Q in l){var G=l[Q];if(ae=i[Q],l.hasOwnProperty(Q)&&(G!=null||ae!=null))switch(Q){case"type":m=G;break;case"name":d=G;break;case"checked":P=G;break;case"defaultChecked":ee=G;break;case"value":v=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:G!==ae&&Je(t,n,Q,G,l,ae)}}Tf(t,v,w,T,P,ee,m,d);return;case"select":G=v=w=Q=null;for(m in i)if(T=i[m],i.hasOwnProperty(m)&&T!=null)switch(m){case"value":break;case"multiple":G=T;default:l.hasOwnProperty(m)||Je(t,n,m,null,l,T)}for(d in l)if(m=l[d],T=i[d],l.hasOwnProperty(d)&&(m!=null||T!=null))switch(d){case"value":Q=m;break;case"defaultValue":w=m;break;case"multiple":v=m;default:m!==T&&Je(t,n,d,m,l,T)}n=w,i=v,l=G,Q!=null?Yi(t,!!i,Q,!1):!!l!=!!i&&(n!=null?Yi(t,!!i,n,!0):Yi(t,!!i,i?[]:"",!1));return;case"textarea":G=Q=null;for(w in i)if(d=i[w],i.hasOwnProperty(w)&&d!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Je(t,n,w,null,l,d)}for(v in l)if(d=l[v],m=i[v],l.hasOwnProperty(v)&&(d!=null||m!=null))switch(v){case"value":Q=d;break;case"defaultValue":G=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&Je(t,n,v,d,l,m)}vp(t,Q,G);return;case"option":for(var De in i)if(Q=i[De],i.hasOwnProperty(De)&&Q!=null&&!l.hasOwnProperty(De))switch(De){case"selected":t.selected=!1;break;default:Je(t,n,De,null,l,Q)}for(T in l)if(Q=l[T],G=i[T],l.hasOwnProperty(T)&&Q!==G&&(Q!=null||G!=null))switch(T){case"selected":t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Je(t,n,T,Q,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in i)Q=i[$e],i.hasOwnProperty($e)&&Q!=null&&!l.hasOwnProperty($e)&&Je(t,n,$e,null,l,Q);for(P in l)if(Q=l[P],G=i[P],l.hasOwnProperty(P)&&Q!==G&&(Q!=null||G!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:Je(t,n,P,Q,l,G)}return;default:if(Rf(n)){for(var We in i)Q=i[We],i.hasOwnProperty(We)&&Q!==void 0&&!l.hasOwnProperty(We)&&ph(t,n,We,void 0,l,Q);for(ee in l)Q=l[ee],G=i[ee],!l.hasOwnProperty(ee)||Q===G||Q===void 0&&G===void 0||ph(t,n,ee,Q,l,G);return}}for(var B in i)Q=i[B],i.hasOwnProperty(B)&&Q!=null&&!l.hasOwnProperty(B)&&Je(t,n,B,null,l,Q);for(ae in l)Q=l[ae],G=i[ae],!l.hasOwnProperty(ae)||Q===G||Q==null&&G==null||Je(t,n,ae,Q,l,G)}var gh=null,yh=null;function ad(t){return t.nodeType===9?t:t.ownerDocument}function wb(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _b(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xh=null;function b4(){var t=window.event;return t&&t.type==="popstate"?t===xh?!1:(xh=t,!0):(xh=null,!1)}var Sb=typeof setTimeout=="function"?setTimeout:void 0,x4=typeof clearTimeout=="function"?clearTimeout:void 0,kb=typeof Promise=="function"?Promise:void 0,v4=typeof queueMicrotask=="function"?queueMicrotask:typeof kb<"u"?function(t){return kb.resolve(null).then(t).catch(j4)}:Sb;function j4(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function $b(t,n){var i=n,l=0,d=0;do{var m=i.nextSibling;if(t.removeChild(i),m&&m.nodeType===8)if(i=m.data,i==="/$"){if(0<l&&8>l){i=l;var v=t.ownerDocument;if(i&1&&tl(v.documentElement),i&2&&tl(v.body),i&4)for(i=v.head,tl(i),v=i.firstChild;v;){var w=v.nextSibling,T=v.nodeName;v[gs]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&v.rel.toLowerCase()==="stylesheet"||i.removeChild(v),v=w}}if(d===0){t.removeChild(m),cl(n);return}d--}else i==="$"||i==="$?"||i==="$!"?d++:l=i.charCodeAt(0)-48;else l=0;i=m}while(i);cl(n)}function vh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":vh(i),kf(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function w4(t,n,i,l){for(;t.nodeType===1;){var d=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[gs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Qr(t.nextSibling),t===null)break}return null}function _4(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Qr(t.nextSibling),t===null))return null;return t}function jh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function S4(t,n){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")n();else{var l=function(){n(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Qr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var wh=null;function Cb(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}function Eb(t,n,i){switch(n=ad(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function tl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kf(t)}var Ar=new Map,Tb=new Set;function id(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var On=ne.d;ne.d={f:k4,r:$4,D:C4,C:E4,L:T4,m:D4,X:z4,S:R4,M:A4};function k4(){var t=On.f(),n=Xc();return t||n}function $4(t){var n=Hi(t);n!==null&&n.tag===5&&n.type==="form"?Kg(n):On.r(t)}var So=typeof document>"u"?null:document;function Db(t,n,i){var l=So;if(l&&typeof n=="string"&&n){var d=$r(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof i=="string"&&(d+='[crossorigin="'+i+'"]'),Tb.has(d)||(Tb.add(d),t={rel:t,crossOrigin:i,href:n},l.querySelector(d)===null&&(n=l.createElement("link"),Ht(n,"link",t),Rt(n),l.head.appendChild(n)))}}function C4(t){On.D(t),Db("dns-prefetch",t,null)}function E4(t,n){On.C(t,n),Db("preconnect",t,n)}function T4(t,n,i){On.L(t,n,i);var l=So;if(l&&t&&n){var d='link[rel="preload"][as="'+$r(n)+'"]';n==="image"&&i&&i.imageSrcSet?(d+='[imagesrcset="'+$r(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(d+='[imagesizes="'+$r(i.imageSizes)+'"]')):d+='[href="'+$r(t)+'"]';var m=d;switch(n){case"style":m=ko(t);break;case"script":m=$o(t)}Ar.has(m)||(t=b({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Ar.set(m,t),l.querySelector(d)!==null||n==="style"&&l.querySelector(rl(m))||n==="script"&&l.querySelector(nl(m))||(n=l.createElement("link"),Ht(n,"link",t),Rt(n),l.head.appendChild(n)))}}function D4(t,n){On.m(t,n);var i=So;if(i&&t){var l=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+$r(l)+'"][href="'+$r(t)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=$o(t)}if(!Ar.has(m)&&(t=b({rel:"modulepreload",href:t},n),Ar.set(m,t),i.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(nl(m)))return}l=i.createElement("link"),Ht(l,"link",t),Rt(l),i.head.appendChild(l)}}}function R4(t,n,i){On.S(t,n,i);var l=So;if(l&&t){var d=Qi(l).hoistableStyles,m=ko(t);n=n||"default";var v=d.get(m);if(!v){var w={loading:0,preload:null};if(v=l.querySelector(rl(m)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Ar.get(m))&&_h(t,i);var T=v=l.createElement("link");Rt(T),Ht(T,"link",t),T._p=new Promise(function(P,ee){T.onload=P,T.onerror=ee}),T.addEventListener("load",function(){w.loading|=1}),T.addEventListener("error",function(){w.loading|=2}),w.loading|=4,od(v,n,l)}v={type:"stylesheet",instance:v,count:1,state:w},d.set(m,v)}}}function z4(t,n){On.X(t,n);var i=So;if(i&&t){var l=Qi(i).hoistableScripts,d=$o(t),m=l.get(d);m||(m=i.querySelector(nl(d)),m||(t=b({src:t,async:!0},n),(n=Ar.get(d))&&Sh(t,n),m=i.createElement("script"),Rt(m),Ht(m,"link",t),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function A4(t,n){On.M(t,n);var i=So;if(i&&t){var l=Qi(i).hoistableScripts,d=$o(t),m=l.get(d);m||(m=i.querySelector(nl(d)),m||(t=b({src:t,async:!0,type:"module"},n),(n=Ar.get(d))&&Sh(t,n),m=i.createElement("script"),Rt(m),Ht(m,"link",t),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function Rb(t,n,i,l){var d=(d=ve.current)?id(d):null;if(!d)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=ko(i.href),i=Qi(d).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ko(i.href);var m=Qi(d).hoistableStyles,v=m.get(t);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,v),(m=d.querySelector(rl(t)))&&!m._p&&(v.instance=m,v.state.loading=5),Ar.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ar.set(t,i),m||q4(d,t,i,v.state))),n&&l===null)throw Error(s(528,""));return v}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$o(i),i=Qi(d).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ko(t){return'href="'+$r(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function zb(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function q4(t,n,i,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Ht(n,"link",i),Rt(n),t.head.appendChild(n))}function $o(t){return'[src="'+$r(t)+'"]'}function nl(t){return"script[async]"+t}function Ab(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+$r(i.href)+'"]');if(l)return n.instance=l,Rt(l),l;var d=b({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Rt(l),Ht(l,"style",d),od(l,i.precedence,t),n.instance=l;case"stylesheet":d=ko(i.href);var m=t.querySelector(rl(d));if(m)return n.state.loading|=4,n.instance=m,Rt(m),m;l=zb(i),(d=Ar.get(d))&&_h(l,d),m=(t.ownerDocument||t).createElement("link"),Rt(m);var v=m;return v._p=new Promise(function(w,T){v.onload=w,v.onerror=T}),Ht(m,"link",l),n.state.loading|=4,od(m,i.precedence,t),n.instance=m;case"script":return m=$o(i.src),(d=t.querySelector(nl(m)))?(n.instance=d,Rt(d),d):(l=i,(d=Ar.get(m))&&(l=b({},i),Sh(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),Rt(d),Ht(d,"link",l),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,od(l,i.precedence,t));return n.instance}function od(t,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,v=0;v<l.length;v++){var w=l[v];if(w.dataset.precedence===n)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function _h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sd=null;function qb(t,n,i){if(sd===null){var l=new Map,d=sd=new Map;d.set(i,l)}else d=sd,l=d.get(i),l||(l=new Map,d.set(i,l));if(l.has(t))return l;for(l.set(t,null),i=i.getElementsByTagName(t),d=0;d<i.length;d++){var m=i[d];if(!(m[gs]||m[Vt]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(n)||"";v=t+v;var w=l.get(v);w?w.push(m):l.set(v,[m])}}return l}function Nb(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function N4(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ob(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var al=null;function O4(){}function M4(t,n,i){if(al===null)throw Error(s(475));var l=al;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var d=ko(i.href),m=t.querySelector(rl(d));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ld.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=m,Rt(m);return}m=t.ownerDocument||t,i=zb(i),(d=Ar.get(d))&&_h(i,d),m=m.createElement("link"),Rt(m);var v=m;v._p=new Promise(function(w,T){v.onload=w,v.onerror=T}),Ht(m,"link",i),n.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=ld.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function B4(){if(al===null)throw Error(s(475));var t=al;return t.stylesheets&&t.count===0&&kh(t,t.stylesheets),0<t.count?function(n){var i=setTimeout(function(){if(t.stylesheets&&kh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i)}}:null}function ld(){if(this.count--,this.count===0){if(this.stylesheets)kh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cd=null;function kh(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cd=new Map,n.forEach(U4,t),cd=null,ld.call(t))}function U4(t,n){if(!(n.state.loading&4)){var i=cd.get(t);if(i)var l=i.get(null);else{i=new Map,cd.set(t,i);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var v=d[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),l=v)}l&&i.set(null,l)}d=n.instance,v=d.getAttribute("data-precedence"),m=i.get(v)||l,m===l&&i.set(null,d),i.set(v,d),this.count++,l=ld.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var il={$$typeof:O,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function F4(t,n,i,l,d,m,v,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jf(0),this.hiddenUpdates=jf(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Mb(t,n,i,l,d,m,v,w,T,P,ee,ae){return t=new F4(t,n,i,v,w,T,P,ae),n=1,m===!0&&(n|=24),m=mr(3,null,null,n),t.current=m,m.stateNode=t,n=om(),n.refCount++,t.pooledCache=n,n.refCount++,m.memoizedState={element:l,isDehydrated:i,cache:n},dm(m),t}function Bb(t){return t?(t=ro,t):ro}function Ub(t,n,i,l,d,m){d=Bb(d),l.context===null?l.context=d:l.pendingContext=d,l=sa(n),l.payload={element:i},m=m===void 0?null:m,m!==null&&(l.callback=m),i=la(t,l,n),i!==null&&(br(i,t,n),Ns(i,t,n))}function Fb(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function $h(t,n){Fb(t,n),(t=t.alternate)&&Fb(t,n)}function Lb(t){if(t.tag===13){var n=to(t,67108864);n!==null&&br(n,t,67108864),$h(t,67108864)}}var dd=!0;function L4(t,n,i,l){var d=N.T;N.T=null;var m=ne.p;try{ne.p=2,Ch(t,n,i,l)}finally{ne.p=m,N.T=d}}function P4(t,n,i,l){var d=N.T;N.T=null;var m=ne.p;try{ne.p=8,Ch(t,n,i,l)}finally{ne.p=m,N.T=d}}function Ch(t,n,i,l){if(dd){var d=Eh(l);if(d===null)hh(t,n,l,ud,i),Hb(t,l);else if(Q4(d,t,n,i,l))l.stopPropagation();else if(Hb(t,l),n&4&&-1<H4.indexOf(t)){for(;d!==null;){var m=Hi(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=jn(m.pendingLanes);if(v!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var T=1<<31-at(v);w.entanglements[1]|=T,v&=~T}an(m),(Ke&6)===0&&(Ic=ke()+500,Js(0))}}break;case 13:w=to(m,2),w!==null&&br(w,m,2),Xc(),$h(m,2)}if(m=Eh(l),m===null&&hh(t,n,l,ud,i),m===d)break;d=m}d!==null&&l.stopPropagation()}else hh(t,n,l,null,i)}}function Eh(t){return t=Af(t),Th(t)}var ud=null;function Th(t){if(ud=null,t=Pi(t),t!==null){var n=u(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ud=t,null}function Pb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ue:return 2;case E:return 8;case U:case V:return 32;case me:return 268435456;default:return 32}default:return 32}}var Dh=!1,ja=null,wa=null,_a=null,ol=new Map,sl=new Map,Sa=[],H4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hb(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function ll(t,n,i,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},n!==null&&(n=Hi(n),n!==null&&Lb(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Q4(t,n,i,l,d){switch(n){case"focusin":return ja=ll(ja,t,n,i,l,d),!0;case"dragenter":return wa=ll(wa,t,n,i,l,d),!0;case"mouseover":return _a=ll(_a,t,n,i,l,d),!0;case"pointerover":var m=d.pointerId;return ol.set(m,ll(ol.get(m)||null,t,n,i,l,d)),!0;case"gotpointercapture":return m=d.pointerId,sl.set(m,ll(sl.get(m)||null,t,n,i,l,d)),!0}return!1}function Qb(t){var n=Pi(t.target);if(n!==null){var i=u(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,M6(t.priority,function(){if(i.tag===13){var l=yr();l=wf(l);var d=to(i,l);d!==null&&br(d,i,l),$h(i,l)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fd(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Eh(t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);zf=l,i.target.dispatchEvent(l),zf=null}else return n=Hi(i),n!==null&&Lb(n),t.blockedOn=i,!1;n.shift()}return!0}function Gb(t,n,i){fd(t)&&i.delete(n)}function G4(){Dh=!1,ja!==null&&fd(ja)&&(ja=null),wa!==null&&fd(wa)&&(wa=null),_a!==null&&fd(_a)&&(_a=null),ol.forEach(Gb),sl.forEach(Gb)}function md(t,n){t.blockedOn===n&&(t.blockedOn=null,Dh||(Dh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,G4)))}var hd=null;function Vb(t){hd!==t&&(hd=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){hd===t&&(hd=null);for(var n=0;n<t.length;n+=3){var i=t[n],l=t[n+1],d=t[n+2];if(typeof l!="function"){if(Th(l||i)===null)continue;break}var m=Hi(i);m!==null&&(t.splice(n,3),n-=3,Tm(m,{pending:!0,data:d,method:i.method,action:l},l,d))}}))}function cl(t){function n(T){return md(T,t)}ja!==null&&md(ja,t),wa!==null&&md(wa,t),_a!==null&&md(_a,t),ol.forEach(n),sl.forEach(n);for(var i=0;i<Sa.length;i++){var l=Sa[i];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Sa.length&&(i=Sa[0],i.blockedOn===null);)Qb(i),i.blockedOn===null&&Sa.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var d=i[l],m=i[l+1],v=d[ar]||null;if(typeof m=="function")v||Vb(i);else if(v){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,v=m[ar]||null)w=v.formAction;else if(Th(d)!==null)continue}else w=v.action;typeof w=="function"?i[l+1]=w:(i.splice(l,3),l-=3),Vb(i)}}}function Rh(t){this._internalRoot=t}pd.prototype.render=Rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,l=yr();Ub(i,l,t,n,null,null)},pd.prototype.unmount=Rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ub(t.current,2,null,t,null,null),Xc(),n[Li]=null}};function pd(t){this._internalRoot=t}pd.prototype.unstable_scheduleHydration=function(t){if(t){var n=cp();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Sa.length&&n!==0&&n<Sa[i].priority;i++);Sa.splice(i,0,t),i===0&&Qb(t)}};var Yb=a.version;if(Yb!=="19.1.0")throw Error(s(527,Yb,"19.1.0"));ne.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var V4={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gd.isDisabled&&gd.supportsFiber)try{xe=gd.inject(V4),ze=gd}catch{}}return ul.createRoot=function(t,n){if(!c(t))throw Error(s(299));var i=!1,l="",d=cy,m=dy,v=uy,w=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=Mb(t,1,!1,null,null,i,l,d,m,v,w,null),t[Li]=n.current,mh(t),new Rh(n)},ul.hydrateRoot=function(t,n,i){if(!c(t))throw Error(s(299));var l=!1,d="",m=cy,v=dy,w=uy,T=null,P=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(w=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks),i.formState!==void 0&&(P=i.formState)),n=Mb(t,1,!0,n,i??null,l,d,m,v,w,T,P),n.context=Bb(null),i=n.current,l=yr(),l=wf(l),d=sa(l),d.callback=null,la(i,d,l),i=l,n.current.lanes=i,ps(n,i),an(n),t[Li]=n.current,mh(t),new pd(n)},ul.version="19.1.0",ul}var n2;function n5(){if(n2)return qh.exports;n2=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),qh.exports=r5(),qh.exports}var a5=n5();const i5=S.createContext(null),Bh={didCatch:!1,error:null};class o5 extends S.Component{constructor(a){super(a),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Bh}static getDerivedStateFromError(a){return{didCatch:!0,error:a}}resetErrorBoundary(){const{error:a}=this.state;if(a!==null){for(var o,s,c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];(o=(s=this.props).onReset)===null||o===void 0||o.call(s,{args:u,reason:"imperative-api"}),this.setState(Bh)}}componentDidCatch(a,o){var s,c;(s=(c=this.props).onError)===null||s===void 0||s.call(c,a,o)}componentDidUpdate(a,o){const{didCatch:s}=this.state,{resetKeys:c}=this.props;if(s&&o.error!==null&&s5(a.resetKeys,c)){var u,h;(u=(h=this.props).onReset)===null||u===void 0||u.call(h,{next:c,prev:a.resetKeys,reason:"keys"}),this.setState(Bh)}}render(){const{children:a,fallbackRender:o,FallbackComponent:s,fallback:c}=this.props,{didCatch:u,error:h}=this.state;let p=a;if(u){const g={error:h,resetErrorBoundary:this.resetErrorBoundary};if(typeof o=="function")p=o(g);else if(s)p=S.createElement(s,g);else if(c!==void 0)p=c;else throw h}return S.createElement(i5.Provider,{value:{didCatch:u,error:h,resetErrorBoundary:this.resetErrorBoundary}},p)}}function s5(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.length!==a.length||e.some((o,s)=>!Object.is(o,a[s]))}var Mi=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ni=typeof window>"u"||"Deno"in globalThis;function Xt(){}function l5(e,a){return typeof e=="function"?e(a):e}function J0(e){return typeof e=="number"&&e>=0&&e!==1/0}function zv(e,a){return Math.max(e+(a||0)-Date.now(),0)}function Fa(e,a){return typeof e=="function"?e(a):e}function Br(e,a){return typeof e=="function"?e(a):e}function a2(e,a){const{type:o="all",exact:s,fetchStatus:c,predicate:u,queryKey:h,stale:p}=e;if(h){if(s){if(a.queryHash!==v1(h,a.options))return!1}else if(!Hl(a.queryKey,h))return!1}if(o!=="all"){const g=a.isActive();if(o==="active"&&!g||o==="inactive"&&g)return!1}return!(typeof p=="boolean"&&a.isStale()!==p||c&&c!==a.state.fetchStatus||u&&!u(a))}function i2(e,a){const{exact:o,status:s,predicate:c,mutationKey:u}=e;if(u){if(!a.options.mutationKey)return!1;if(o){if(Oi(a.options.mutationKey)!==Oi(u))return!1}else if(!Hl(a.options.mutationKey,u))return!1}return!(s&&a.state.status!==s||c&&!c(a))}function v1(e,a){return(a?.queryKeyHashFn||Oi)(e)}function Oi(e){return JSON.stringify(e,(a,o)=>W0(o)?Object.keys(o).sort().reduce((s,c)=>(s[c]=o[c],s),{}):o)}function Hl(e,a){return e===a?!0:typeof e!=typeof a?!1:e&&a&&typeof e=="object"&&typeof a=="object"?Object.keys(a).every(o=>Hl(e[o],a[o])):!1}function j1(e,a){if(e===a)return e;const o=o2(e)&&o2(a);if(o||W0(e)&&W0(a)){const s=o?e:Object.keys(e),c=s.length,u=o?a:Object.keys(a),h=u.length,p=o?[]:{},g=new Set(s);let y=0;for(let b=0;b<h;b++){const x=o?b:u[b];(!o&&g.has(x)||o)&&e[x]===void 0&&a[x]===void 0?(p[x]=void 0,y++):(p[x]=j1(e[x],a[x]),p[x]===e[x]&&e[x]!==void 0&&y++)}return c===h&&y===c?e:p}return a}function Ru(e,a){if(!a||Object.keys(e).length!==Object.keys(a).length)return!1;for(const o in e)if(e[o]!==a[o])return!1;return!0}function o2(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function W0(e){if(!s2(e))return!1;const a=e.constructor;if(a===void 0)return!0;const o=a.prototype;return!(!s2(o)||!o.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function s2(e){return Object.prototype.toString.call(e)==="[object Object]"}function c5(e){return new Promise(a=>{setTimeout(a,e)})}function e1(e,a,o){return typeof o.structuralSharing=="function"?o.structuralSharing(e,a):o.structuralSharing!==!1?j1(e,a):a}function d5(e,a,o=0){const s=[...e,a];return o&&s.length>o?s.slice(1):s}function u5(e,a,o=0){const s=[a,...e];return o&&s.length>o?s.slice(0,-1):s}var w1=Symbol();function Av(e,a){return!e.queryFn&&a?.initialPromise?()=>a.initialPromise:!e.queryFn||e.queryFn===w1?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function qv(e,a){return typeof e=="function"?e(...a):!!e}var f5=class extends Mi{#t;#e;#r;constructor(){super(),this.#r=e=>{if(!Ni&&window.addEventListener){const a=()=>e();return window.addEventListener("visibilitychange",a,!1),()=>{window.removeEventListener("visibilitychange",a)}}}}onSubscribe(){this.#e||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(e){this.#r=e,this.#e?.(),this.#e=e(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()})}setFocused(e){this.#t!==e&&(this.#t=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(a=>{a(e)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}},_1=new f5,m5=class extends Mi{#t=!0;#e;#r;constructor(){super(),this.#r=e=>{if(!Ni&&window.addEventListener){const a=()=>e(!0),o=()=>e(!1);return window.addEventListener("online",a,!1),window.addEventListener("offline",o,!1),()=>{window.removeEventListener("online",a),window.removeEventListener("offline",o)}}}}onSubscribe(){this.#e||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(e){this.#r=e,this.#e?.(),this.#e=e(this.setOnline.bind(this))}setOnline(e){this.#t!==e&&(this.#t=e,this.listeners.forEach(o=>{o(e)}))}isOnline(){return this.#t}},zu=new m5;function t1(){let e,a;const o=new Promise((c,u)=>{e=c,a=u});o.status="pending",o.catch(()=>{});function s(c){Object.assign(o,c),delete o.resolve,delete o.reject}return o.resolve=c=>{s({status:"fulfilled",value:c}),e(c)},o.reject=c=>{s({status:"rejected",reason:c}),a(c)},o}function h5(e){return Math.min(1e3*2**e,3e4)}function Nv(e){return(e??"online")==="online"?zu.isOnline():!0}var Ov=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Uh(e){return e instanceof Ov}function Mv(e){let a=!1,o=0,s=!1,c;const u=t1(),h=$=>{s||(j(new Ov($)),e.abort?.())},p=()=>{a=!0},g=()=>{a=!1},y=()=>_1.isFocused()&&(e.networkMode==="always"||zu.isOnline())&&e.canRun(),b=()=>Nv(e.networkMode)&&e.canRun(),x=$=>{s||(s=!0,e.onSuccess?.($),c?.(),u.resolve($))},j=$=>{s||(s=!0,e.onError?.($),c?.(),u.reject($))},_=()=>new Promise($=>{c=D=>{(s||y())&&$(D)},e.onPause?.()}).then(()=>{c=void 0,s||e.onContinue?.()}),C=()=>{if(s)return;let $;const D=o===0?e.initialPromise:void 0;try{$=D??e.fn()}catch(A){$=Promise.reject(A)}Promise.resolve($).then(x).catch(A=>{if(s)return;const M=e.retry??(Ni?0:3),O=e.retryDelay??h5,z=typeof O=="function"?O(o,A):O,I=M===!0||typeof M=="number"&&o<M||typeof M=="function"&&M(o,A);if(a||!I){j(A);return}o++,e.onFail?.(o,A),c5(z).then(()=>y()?void 0:_()).then(()=>{a?j(A):C()})})};return{promise:u,cancel:h,continue:()=>(c?.(),u),cancelRetry:p,continueRetry:g,canStart:b,start:()=>(b()?C():_().then(C),u)}}var p5=e=>setTimeout(e,0);function g5(){let e=[],a=0,o=p=>{p()},s=p=>{p()},c=p5;const u=p=>{a?e.push(p):c(()=>{o(p)})},h=()=>{const p=e;e=[],p.length&&c(()=>{s(()=>{p.forEach(g=>{o(g)})})})};return{batch:p=>{let g;a++;try{g=p()}finally{a--,a||h()}return g},batchCalls:p=>(...g)=>{u(()=>{p(...g)})},schedule:u,setNotifyFunction:p=>{o=p},setBatchNotifyFunction:p=>{s=p},setScheduler:p=>{c=p}}}var mt=g5(),Bv=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),J0(this.gcTime)&&(this.#t=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ni?1/0:5*60*1e3))}clearGcTimeout(){this.#t&&(clearTimeout(this.#t),this.#t=void 0)}},y5=class extends Bv{#t;#e;#r;#n;#a;#i;#s;constructor(e){super(),this.#s=!1,this.#i=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#n=e.client,this.#r=this.#n.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=b5(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#a?.promise}setOptions(e){this.options={...this.#i,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#r.remove(this)}setData(e,a){const o=e1(this.state.data,e,this.options);return this.#o({data:o,type:"success",dataUpdatedAt:a?.updatedAt,manual:a?.manual}),o}setState(e,a){this.#o({type:"setState",state:e,setStateOptions:a})}cancel(e){const a=this.#a?.promise;return this.#a?.cancel(e),a?a.then(Xt).catch(Xt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(e=>Br(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===w1||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Fa(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!zv(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(a=>a.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(a=>a.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(a=>a!==e),this.observers.length||(this.#a&&(this.#s?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(e,a){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&a?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(e&&this.setOptions(e),!this.options.queryFn){const g=this.observers.find(y=>y.options.queryFn);g&&this.setOptions(g.options)}const o=new AbortController,s=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(this.#s=!0,o.signal)})},c=()=>{const g=Av(this.options,a),b=(()=>{const x={client:this.#n,queryKey:this.queryKey,meta:this.meta};return s(x),x})();return this.#s=!1,this.options.persister?this.options.persister(g,b,this):g(b)},h=(()=>{const g={fetchOptions:a,options:this.options,queryKey:this.queryKey,client:this.#n,state:this.state,fetchFn:c};return s(g),g})();this.options.behavior?.onFetch(h,this),this.#e=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==h.fetchOptions?.meta)&&this.#o({type:"fetch",meta:h.fetchOptions?.meta});const p=g=>{Uh(g)&&g.silent||this.#o({type:"error",error:g}),Uh(g)||(this.#r.config.onError?.(g,this),this.#r.config.onSettled?.(this.state.data,g,this)),this.scheduleGc()};return this.#a=Mv({initialPromise:a?.initialPromise,fn:h.fetchFn,abort:o.abort.bind(o),onSuccess:g=>{if(g===void 0){p(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(y){p(y);return}this.#r.config.onSuccess?.(g,this),this.#r.config.onSettled?.(g,this.state.error,this),this.scheduleGc()},onError:p,onFail:(g,y)=>{this.#o({type:"failed",failureCount:g,error:y})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0}),this.#a.start()}#o(e){const a=o=>{switch(e.type){case"failed":return{...o,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...o,fetchStatus:"paused"};case"continue":return{...o,fetchStatus:"fetching"};case"fetch":return{...o,...Uv(o.data,this.options),fetchMeta:e.meta??null};case"success":return this.#e=void 0,{...o,data:e.data,dataUpdateCount:o.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Uh(s)&&s.revert&&this.#e?{...this.#e,fetchStatus:"idle"}:{...o,error:s,errorUpdateCount:o.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:o.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...o,isInvalidated:!0};case"setState":return{...o,...e.state}}};this.state=a(this.state),mt.batch(()=>{this.observers.forEach(o=>{o.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}};function Uv(e,a){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Nv(a.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function b5(e){const a=typeof e.initialData=="function"?e.initialData():e.initialData,o=a!==void 0,s=o?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:a,dataUpdateCount:0,dataUpdatedAt:o?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:o?"success":"pending",fetchStatus:"idle"}}var x5=class extends Mi{constructor(e={}){super(),this.config=e,this.#t=new Map}#t;build(e,a,o){const s=a.queryKey,c=a.queryHash??v1(s,a);let u=this.get(c);return u||(u=new y5({client:e,queryKey:s,queryHash:c,options:e.defaultQueryOptions(a),state:o,defaultOptions:e.getQueryDefaults(s)}),this.add(u)),u}add(e){this.#t.has(e.queryHash)||(this.#t.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const a=this.#t.get(e.queryHash);a&&(e.destroy(),a===e&&this.#t.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){mt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#t.get(e)}getAll(){return[...this.#t.values()]}find(e){const a={exact:!0,...e};return this.getAll().find(o=>a2(a,o))}findAll(e={}){const a=this.getAll();return Object.keys(e).length>0?a.filter(o=>a2(e,o)):a}notify(e){mt.batch(()=>{this.listeners.forEach(a=>{a(e)})})}onFocus(){mt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){mt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},v5=class extends Bv{#t;#e;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#e=e.mutationCache,this.#t=[],this.state=e.state||Fv(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(a=>a!==e),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#e.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){const a=()=>{this.#n({type:"continue"})};this.#r=Mv({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(c,u)=>{this.#n({type:"failed",failureCount:c,error:u})},onPause:()=>{this.#n({type:"pause"})},onContinue:a,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});const o=this.state.status==="pending",s=!this.#r.canStart();try{if(o)a();else{this.#n({type:"pending",variables:e,isPaused:s}),await this.#e.config.onMutate?.(e,this);const u=await this.options.onMutate?.(e);u!==this.state.context&&this.#n({type:"pending",context:u,variables:e,isPaused:s})}const c=await this.#r.start();return await this.#e.config.onSuccess?.(c,e,this.state.context,this),await this.options.onSuccess?.(c,e,this.state.context),await this.#e.config.onSettled?.(c,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(c,null,e,this.state.context),this.#n({type:"success",data:c}),c}catch(c){try{throw await this.#e.config.onError?.(c,e,this.state.context,this),await this.options.onError?.(c,e,this.state.context),await this.#e.config.onSettled?.(void 0,c,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,c,e,this.state.context),c}finally{this.#n({type:"error",error:c})}}finally{this.#e.runNext(this)}}#n(e){const a=o=>{switch(e.type){case"failed":return{...o,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...o,isPaused:!0};case"continue":return{...o,isPaused:!1};case"pending":return{...o,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...o,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...o,data:void 0,error:e.error,failureCount:o.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=a(this.state),mt.batch(()=>{this.#t.forEach(o=>{o.onMutationUpdate(e)}),this.#e.notify({mutation:this,type:"updated",action:e})})}};function Fv(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var j5=class extends Mi{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#e=new Map,this.#r=0}#t;#e;#r;build(e,a,o){const s=new v5({mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(a),state:o});return this.add(s),s}add(e){this.#t.add(e);const a=yd(e);if(typeof a=="string"){const o=this.#e.get(a);o?o.push(e):this.#e.set(a,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){const a=yd(e);if(typeof a=="string"){const o=this.#e.get(a);if(o)if(o.length>1){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}else o[0]===e&&this.#e.delete(a)}}this.notify({type:"removed",mutation:e})}canRun(e){const a=yd(e);if(typeof a=="string"){const s=this.#e.get(a)?.find(c=>c.state.status==="pending");return!s||s===e}else return!0}runNext(e){const a=yd(e);return typeof a=="string"?this.#e.get(a)?.find(s=>s!==e&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){mt.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(e){const a={exact:!0,...e};return this.getAll().find(o=>i2(a,o))}findAll(e={}){return this.getAll().filter(a=>i2(e,a))}notify(e){mt.batch(()=>{this.listeners.forEach(a=>{a(e)})})}resumePausedMutations(){const e=this.getAll().filter(a=>a.state.isPaused);return mt.batch(()=>Promise.all(e.map(a=>a.continue().catch(Xt))))}};function yd(e){return e.options.scope?.id}function l2(e){return{onFetch:(a,o)=>{const s=a.options,c=a.fetchOptions?.meta?.fetchMore?.direction,u=a.state.data?.pages||[],h=a.state.data?.pageParams||[];let p={pages:[],pageParams:[]},g=0;const y=async()=>{let b=!1;const x=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(a.signal.aborted?b=!0:a.signal.addEventListener("abort",()=>{b=!0}),a.signal)})},j=Av(a.options,a.fetchOptions),_=async(C,$,D)=>{if(b)return Promise.reject();if($==null&&C.pages.length)return Promise.resolve(C);const M=(()=>{const R={client:a.client,queryKey:a.queryKey,pageParam:$,direction:D?"backward":"forward",meta:a.options.meta};return x(R),R})(),O=await j(M),{maxPages:z}=a.options,I=D?u5:d5;return{pages:I(C.pages,O,z),pageParams:I(C.pageParams,$,z)}};if(c&&u.length){const C=c==="backward",$=C?w5:c2,D={pages:u,pageParams:h},A=$(s,D);p=await _(D,A,C)}else{const C=e??u.length;do{const $=g===0?h[0]??s.initialPageParam:c2(s,p);if(g>0&&$==null)break;p=await _(p,$),g++}while(g<C)}return p};a.options.persister?a.fetchFn=()=>a.options.persister?.(y,{client:a.client,queryKey:a.queryKey,meta:a.options.meta,signal:a.signal},o):a.fetchFn=y}}}function c2(e,{pages:a,pageParams:o}){const s=a.length-1;return a.length>0?e.getNextPageParam(a[s],a,o[s],o):void 0}function w5(e,{pages:a,pageParams:o}){return a.length>0?e.getPreviousPageParam?.(a[0],a,o[0],o):void 0}var _5=class{#t;#e;#r;#n;#a;#i;#s;#o;constructor(e={}){this.#t=e.queryCache||new x5,this.#e=e.mutationCache||new j5,this.#r=e.defaultOptions||{},this.#n=new Map,this.#a=new Map,this.#i=0}mount(){this.#i++,this.#i===1&&(this.#s=_1.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#o=zu.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#i--,this.#i===0&&(this.#s?.(),this.#s=void 0,this.#o?.(),this.#o=void 0)}isFetching(e){return this.#t.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#e.findAll({...e,status:"pending"}).length}getQueryData(e){const a=this.defaultQueryOptions({queryKey:e});return this.#t.get(a.queryHash)?.state.data}ensureQueryData(e){const a=this.defaultQueryOptions(e),o=this.#t.build(this,a),s=o.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&o.isStaleByTime(Fa(a.staleTime,o))&&this.prefetchQuery(a),Promise.resolve(s))}getQueriesData(e){return this.#t.findAll(e).map(({queryKey:a,state:o})=>{const s=o.data;return[a,s]})}setQueryData(e,a,o){const s=this.defaultQueryOptions({queryKey:e}),u=this.#t.get(s.queryHash)?.state.data,h=l5(a,u);if(h!==void 0)return this.#t.build(this,s).setData(h,{...o,manual:!0})}setQueriesData(e,a,o){return mt.batch(()=>this.#t.findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,a,o)]))}getQueryState(e){const a=this.defaultQueryOptions({queryKey:e});return this.#t.get(a.queryHash)?.state}removeQueries(e){const a=this.#t;mt.batch(()=>{a.findAll(e).forEach(o=>{a.remove(o)})})}resetQueries(e,a){const o=this.#t;return mt.batch(()=>(o.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},a)))}cancelQueries(e,a={}){const o={revert:!0,...a},s=mt.batch(()=>this.#t.findAll(e).map(c=>c.cancel(o)));return Promise.all(s).then(Xt).catch(Xt)}invalidateQueries(e,a={}){return mt.batch(()=>(this.#t.findAll(e).forEach(o=>{o.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},a)))}refetchQueries(e,a={}){const o={...a,cancelRefetch:a.cancelRefetch??!0},s=mt.batch(()=>this.#t.findAll(e).filter(c=>!c.isDisabled()&&!c.isStatic()).map(c=>{let u=c.fetch(void 0,o);return o.throwOnError||(u=u.catch(Xt)),c.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(s).then(Xt)}fetchQuery(e){const a=this.defaultQueryOptions(e);a.retry===void 0&&(a.retry=!1);const o=this.#t.build(this,a);return o.isStaleByTime(Fa(a.staleTime,o))?o.fetch(a):Promise.resolve(o.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Xt).catch(Xt)}fetchInfiniteQuery(e){return e.behavior=l2(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Xt).catch(Xt)}ensureInfiniteQueryData(e){return e.behavior=l2(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return zu.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#r}setDefaultOptions(e){this.#r=e}setQueryDefaults(e,a){this.#n.set(Oi(e),{queryKey:e,defaultOptions:a})}getQueryDefaults(e){const a=[...this.#n.values()],o={};return a.forEach(s=>{Hl(e,s.queryKey)&&Object.assign(o,s.defaultOptions)}),o}setMutationDefaults(e,a){this.#a.set(Oi(e),{mutationKey:e,defaultOptions:a})}getMutationDefaults(e){const a=[...this.#a.values()],o={};return a.forEach(s=>{Hl(e,s.mutationKey)&&Object.assign(o,s.defaultOptions)}),o}defaultQueryOptions(e){if(e._defaulted)return e;const a={...this.#r.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return a.queryHash||(a.queryHash=v1(a.queryKey,a)),a.refetchOnReconnect===void 0&&(a.refetchOnReconnect=a.networkMode!=="always"),a.throwOnError===void 0&&(a.throwOnError=!!a.suspense),!a.networkMode&&a.persister&&(a.networkMode="offlineFirst"),a.queryFn===w1&&(a.enabled=!1),a}defaultMutationOptions(e){return e?._defaulted?e:{...this.#r.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}},S1=class extends Mi{constructor(e,a){super(),this.options=a,this.#t=e,this.#o=null,this.#s=t1(),this.options.experimental_prefetchInRender||this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(a)}#t;#e=void 0;#r=void 0;#n=void 0;#a;#i;#s;#o;#m;#u;#f;#c;#d;#l;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),d2(this.#e,this.options)?this.#h():this.updateResult(),this.#x())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return r1(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return r1(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#v(),this.#j(),this.#e.removeObserver(this)}setOptions(e){const a=this.options,o=this.#e;if(this.options=this.#t.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Br(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#e.setOptions(this.options),a._defaulted&&!Ru(this.options,a)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const s=this.hasListeners();s&&u2(this.#e,o,this.options,a)&&this.#h(),this.updateResult(),s&&(this.#e!==o||Br(this.options.enabled,this.#e)!==Br(a.enabled,this.#e)||Fa(this.options.staleTime,this.#e)!==Fa(a.staleTime,this.#e))&&this.#g();const c=this.#y();s&&(this.#e!==o||Br(this.options.enabled,this.#e)!==Br(a.enabled,this.#e)||c!==this.#l)&&this.#b(c)}getOptimisticResult(e){const a=this.#t.getQueryCache().build(this.#t,e),o=this.createResult(a,e);return k5(this,o)&&(this.#n=o,this.#i=this.options,this.#a=this.#e.state),o}getCurrentResult(){return this.#n}trackResult(e,a){return new Proxy(e,{get:(o,s)=>(this.trackProp(s),a?.(s),Reflect.get(o,s))})}trackProp(e){this.#p.add(e)}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const a=this.#t.defaultQueryOptions(e),o=this.#t.getQueryCache().build(this.#t,a);return o.fetch().then(()=>this.createResult(o,a))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#n))}#h(e){this.#w();let a=this.#e.fetch(this.options,e);return e?.throwOnError||(a=a.catch(Xt)),a}#g(){this.#v();const e=Fa(this.options.staleTime,this.#e);if(Ni||this.#n.isStale||!J0(e))return;const o=zv(this.#n.dataUpdatedAt,e)+1;this.#c=setTimeout(()=>{this.#n.isStale||this.updateResult()},o)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#b(e){this.#j(),this.#l=e,!(Ni||Br(this.options.enabled,this.#e)===!1||!J0(this.#l)||this.#l===0)&&(this.#d=setInterval(()=>{(this.options.refetchIntervalInBackground||_1.isFocused())&&this.#h()},this.#l))}#x(){this.#g(),this.#b(this.#y())}#v(){this.#c&&(clearTimeout(this.#c),this.#c=void 0)}#j(){this.#d&&(clearInterval(this.#d),this.#d=void 0)}createResult(e,a){const o=this.#e,s=this.options,c=this.#n,u=this.#a,h=this.#i,g=e!==o?e.state:this.#r,{state:y}=e;let b={...y},x=!1,j;if(a._optimisticResults){const ie=this.hasListeners(),K=!ie&&d2(e,a),ue=ie&&u2(e,o,a,s);(K||ue)&&(b={...b,...Uv(y.data,e.options)}),a._optimisticResults==="isRestoring"&&(b.fetchStatus="idle")}let{error:_,errorUpdatedAt:C,status:$}=b;j=b.data;let D=!1;if(a.placeholderData!==void 0&&j===void 0&&$==="pending"){let ie;c?.isPlaceholderData&&a.placeholderData===h?.placeholderData?(ie=c.data,D=!0):ie=typeof a.placeholderData=="function"?a.placeholderData(this.#f?.state.data,this.#f):a.placeholderData,ie!==void 0&&($="success",j=e1(c?.data,ie,a),x=!0)}if(a.select&&j!==void 0&&!D)if(c&&j===u?.data&&a.select===this.#m)j=this.#u;else try{this.#m=a.select,j=a.select(j),j=e1(c?.data,j,a),this.#u=j,this.#o=null}catch(ie){this.#o=ie}this.#o&&(_=this.#o,j=this.#u,C=Date.now(),$="error");const A=b.fetchStatus==="fetching",M=$==="pending",O=$==="error",z=M&&A,I=j!==void 0,F={status:$,fetchStatus:b.fetchStatus,isPending:M,isSuccess:$==="success",isError:O,isInitialLoading:z,isLoading:z,data:j,dataUpdatedAt:b.dataUpdatedAt,error:_,errorUpdatedAt:C,failureCount:b.fetchFailureCount,failureReason:b.fetchFailureReason,errorUpdateCount:b.errorUpdateCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>g.dataUpdateCount||b.errorUpdateCount>g.errorUpdateCount,isFetching:A,isRefetching:A&&!M,isLoadingError:O&&!I,isPaused:b.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:O&&I,isStale:k1(e,a),refetch:this.refetch,promise:this.#s,isEnabled:Br(a.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const ie=X=>{F.status==="error"?X.reject(F.error):F.data!==void 0&&X.resolve(F.data)},K=()=>{const X=this.#s=F.promise=t1();ie(X)},ue=this.#s;switch(ue.status){case"pending":e.queryHash===o.queryHash&&ie(ue);break;case"fulfilled":(F.status==="error"||F.data!==ue.value)&&K();break;case"rejected":(F.status!=="error"||F.error!==ue.reason)&&K();break}}return F}updateResult(){const e=this.#n,a=this.createResult(this.#e,this.options);if(this.#a=this.#e.state,this.#i=this.options,this.#a.data!==void 0&&(this.#f=this.#e),Ru(a,e))return;this.#n=a;const o=()=>{if(!e)return!0;const{notifyOnChangeProps:s}=this.options,c=typeof s=="function"?s():s;if(c==="all"||!c&&!this.#p.size)return!0;const u=new Set(c??this.#p);return this.options.throwOnError&&u.add("error"),Object.keys(this.#n).some(h=>{const p=h;return this.#n[p]!==e[p]&&u.has(p)})};this.#_({listeners:o()})}#w(){const e=this.#t.getQueryCache().build(this.#t,this.options);if(e===this.#e)return;const a=this.#e;this.#e=e,this.#r=e.state,this.hasListeners()&&(a?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#x()}#_(e){mt.batch(()=>{e.listeners&&this.listeners.forEach(a=>{a(this.#n)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function S5(e,a){return Br(a.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&a.retryOnMount===!1)}function d2(e,a){return S5(e,a)||e.state.data!==void 0&&r1(e,a,a.refetchOnMount)}function r1(e,a,o){if(Br(a.enabled,e)!==!1&&Fa(a.staleTime,e)!=="static"){const s=typeof o=="function"?o(e):o;return s==="always"||s!==!1&&k1(e,a)}return!1}function u2(e,a,o,s){return(e!==a||Br(s.enabled,e)===!1)&&(!o.suspense||e.state.status!=="error")&&k1(e,o)}function k1(e,a){return Br(a.enabled,e)!==!1&&e.isStaleByTime(Fa(a.staleTime,e))}function k5(e,a){return!Ru(e.getCurrentResult(),a)}function f2(e,a){const o=new Set(a);return e.filter(s=>!o.has(s))}function $5(e,a,o){const s=e.slice(0);return s[a]=o,s}var C5=class extends Mi{#t;#e;#r;#n;#a;#i;#s;#o;#m=[];constructor(e,a,o){super(),this.#t=e,this.#n=o,this.#r=[],this.#a=[],this.#e=[],this.setQueries(a)}onSubscribe(){this.listeners.size===1&&this.#a.forEach(e=>{e.subscribe(a=>{this.#d(e,a)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#a.forEach(e=>{e.destroy()})}setQueries(e,a){this.#r=e,this.#n=a,mt.batch(()=>{const o=this.#a,s=this.#c(this.#r);this.#m=s,s.forEach(p=>p.observer.setOptions(p.defaultedQueryOptions));const c=s.map(p=>p.observer),u=c.map(p=>p.getCurrentResult()),h=c.some((p,g)=>p!==o[g]);o.length===c.length&&!h||(this.#a=c,this.#e=u,this.hasListeners()&&(f2(o,c).forEach(p=>{p.destroy()}),f2(c,o).forEach(p=>{p.subscribe(g=>{this.#d(p,g)})}),this.#l()))})}getCurrentResult(){return this.#e}getQueries(){return this.#a.map(e=>e.getCurrentQuery())}getObservers(){return this.#a}getOptimisticResult(e,a){const o=this.#c(e),s=o.map(c=>c.observer.getOptimisticResult(c.defaultedQueryOptions));return[s,c=>this.#f(c??s,a),()=>this.#u(s,o)]}#u(e,a){return a.map((o,s)=>{const c=e[s];return o.defaultedQueryOptions.notifyOnChangeProps?c:o.observer.trackResult(c,u=>{a.forEach(h=>{h.observer.trackProp(u)})})})}#f(e,a){return a?((!this.#i||this.#e!==this.#o||a!==this.#s)&&(this.#s=a,this.#o=this.#e,this.#i=j1(this.#i,a(e))),this.#i):e}#c(e){const a=new Map(this.#a.map(s=>[s.options.queryHash,s])),o=[];return e.forEach(s=>{const c=this.#t.defaultQueryOptions(s),u=a.get(c.queryHash);u?o.push({defaultedQueryOptions:c,observer:u}):o.push({defaultedQueryOptions:c,observer:new S1(this.#t,c)})}),o}#d(e,a){const o=this.#a.indexOf(e);o!==-1&&(this.#e=$5(this.#e,o,a),this.#l())}#l(){if(this.hasListeners()){const e=this.#i,a=this.#u(this.#e,this.#m),o=this.#f(a,this.#n?.combine);e!==o&&mt.batch(()=>{this.listeners.forEach(s=>{s(this.#e)})})}}},E5=class extends Mi{#t;#e=void 0;#r;#n;constructor(a,o){super(),this.#t=a,this.setOptions(o),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(a){const o=this.options;this.options=this.#t.defaultMutationOptions(a),Ru(this.options,o)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),o?.mutationKey&&this.options.mutationKey&&Oi(o.mutationKey)!==Oi(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(a){this.#a(),this.#i(a)}getCurrentResult(){return this.#e}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#a(),this.#i()}mutate(a,o){return this.#n=o,this.#r?.removeObserver(this),this.#r=this.#t.getMutationCache().build(this.#t,this.options),this.#r.addObserver(this),this.#r.execute(a)}#a(){const a=this.#r?.state??Fv();this.#e={...a,isPending:a.status==="pending",isSuccess:a.status==="success",isError:a.status==="error",isIdle:a.status==="idle",mutate:this.mutate,reset:this.reset}}#i(a){mt.batch(()=>{if(this.#n&&this.hasListeners()){const o=this.#e.variables,s=this.#e.context;a?.type==="success"?(this.#n.onSuccess?.(a.data,o,s),this.#n.onSettled?.(a.data,null,o,s)):a?.type==="error"&&(this.#n.onError?.(a.error,o,s),this.#n.onSettled?.(void 0,a.error,o,s))}this.listeners.forEach(o=>{o(this.#e)})})}},Lv=S.createContext(void 0),Te=e=>{const a=S.useContext(Lv);if(!a)throw new Error("No QueryClient set, use QueryClientProvider to set one");return a},T5=({client:e,children:a})=>(S.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),r.jsx(Lv.Provider,{value:e,children:a})),Pv=S.createContext(!1),Hv=()=>S.useContext(Pv);Pv.Provider;function D5(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var R5=S.createContext(D5()),Qv=()=>S.useContext(R5),Gv=(e,a)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(a.isReset()||(e.retryOnMount=!1))},Vv=e=>{S.useEffect(()=>{e.clearReset()},[e])},Yv=({result:e,errorResetBoundary:a,throwOnError:o,query:s,suspense:c})=>e.isError&&!a.isReset()&&!e.isFetching&&s&&(c&&e.data===void 0||qv(o,[e.error,s])),Iv=e=>{if(e.suspense){const a=s=>s==="static"?s:Math.max(s??1e3,1e3),o=e.staleTime;e.staleTime=typeof o=="function"?(...s)=>a(o(...s)):a(o),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},Kv=(e,a)=>e.isLoading&&e.isFetching&&!a,n1=(e,a)=>e?.suspense&&a.isPending,Au=(e,a,o)=>a.fetchOptimistic(e).catch(()=>{o.clearReset()});function Fh({queries:e,...a},o){const s=Te(),c=Hv(),u=Qv(),h=S.useMemo(()=>e.map($=>{const D=s.defaultQueryOptions($);return D._optimisticResults=c?"isRestoring":"optimistic",D}),[e,s,c]);h.forEach($=>{Iv($),Gv($,u)}),Vv(u);const[p]=S.useState(()=>new C5(s,h,a)),[g,y,b]=p.getOptimisticResult(h,a.combine),x=!c&&a.subscribed!==!1;S.useSyncExternalStore(S.useCallback($=>x?p.subscribe(mt.batchCalls($)):Xt,[p,x]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),S.useEffect(()=>{p.setQueries(h,a)},[h,a,p]);const _=g.some(($,D)=>n1(h[D],$))?g.flatMap(($,D)=>{const A=h[D];if(A){const M=new S1(s,A);if(n1(A,$))return Au(A,M,u);Kv($,c)&&Au(A,M,u)}return[]}):[];if(_.length>0)throw Promise.all(_);const C=g.find(($,D)=>{const A=h[D];return A&&Yv({result:$,errorResetBoundary:u,throwOnError:A.throwOnError,query:s.getQueryCache().get(A.queryHash),suspense:A.suspense})});if(C?.error)throw C.error;return y(b())}function z5(e,a,o){const s=Hv(),c=Qv(),u=Te(),h=u.defaultQueryOptions(e);u.getDefaultOptions().queries?._experimental_beforeQuery?.(h),h._optimisticResults=s?"isRestoring":"optimistic",Iv(h),Gv(h,c),Vv(c);const p=!u.getQueryCache().get(h.queryHash),[g]=S.useState(()=>new a(u,h)),y=g.getOptimisticResult(h),b=!s&&e.subscribed!==!1;if(S.useSyncExternalStore(S.useCallback(x=>{const j=b?g.subscribe(mt.batchCalls(x)):Xt;return g.updateResult(),j},[g,b]),()=>g.getCurrentResult(),()=>g.getCurrentResult()),S.useEffect(()=>{g.setOptions(h)},[h,g]),n1(h,y))throw Au(h,g,c);if(Yv({result:y,errorResetBoundary:c,throwOnError:h.throwOnError,query:u.getQueryCache().get(h.queryHash),suspense:h.suspense}))throw y.error;return u.getDefaultOptions().queries?._experimental_afterQuery?.(h,y),h.experimental_prefetchInRender&&!Ni&&Kv(y,s)&&(p?Au(h,g,c):u.getQueryCache().get(h.queryHash)?.promise)?.catch(Xt).finally(()=>{g.updateResult()}),h.notifyOnChangeProps?y:g.trackResult(y)}function je(e,a){return z5(e,S1)}function Re(e,a){const o=Te(),[s]=S.useState(()=>new E5(o,e));S.useEffect(()=>{s.setOptions(e)},[s,e]);const c=S.useSyncExternalStore(S.useCallback(h=>s.subscribe(mt.batchCalls(h)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),u=S.useCallback((h,p)=>{s.mutate(h,p).catch(Xt)},[s]);if(c.error&&qv(s.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:u,mutateAsync:c.mutate}}var A5=function(){return null};let q5={data:""},N5=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||q5,O5=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,M5=/\/\*[^]*?\*\/|  +/g,m2=/\n+/g,Ma=(e,a)=>{let o="",s="",c="";for(let u in e){let h=e[u];u[0]=="@"?u[1]=="i"?o=u+" "+h+";":s+=u[1]=="f"?Ma(h,u):u+"{"+Ma(h,u[1]=="k"?"":a)+"}":typeof h=="object"?s+=Ma(h,a?a.replace(/([^,])+/g,p=>u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,g=>/&/.test(g)?g.replace(/&/g,p):p?p+" "+g:g)):u):h!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=Ma.p?Ma.p(u,h):u+":"+h+";")}return o+(a&&c?a+"{"+c+"}":c)+s},Mn={},Xv=e=>{if(typeof e=="object"){let a="";for(let o in e)a+=o+Xv(e[o]);return a}return e},B5=(e,a,o,s,c)=>{let u=Xv(e),h=Mn[u]||(Mn[u]=(g=>{let y=0,b=11;for(;y<g.length;)b=101*b+g.charCodeAt(y++)>>>0;return"go"+b})(u));if(!Mn[h]){let g=u!==e?e:(y=>{let b,x,j=[{}];for(;b=O5.exec(y.replace(M5,""));)b[4]?j.shift():b[3]?(x=b[3].replace(m2," ").trim(),j.unshift(j[0][x]=j[0][x]||{})):j[0][b[1]]=b[2].replace(m2," ").trim();return j[0]})(e);Mn[h]=Ma(c?{["@keyframes "+h]:g}:g,o?"":"."+h)}let p=o&&Mn.g?Mn.g:null;return o&&(Mn.g=Mn[h]),((g,y,b,x)=>{x?y.data=y.data.replace(x,g):y.data.indexOf(g)===-1&&(y.data=b?g+y.data:y.data+g)})(Mn[h],a,s,p),h},U5=(e,a,o)=>e.reduce((s,c,u)=>{let h=a[u];if(h&&h.call){let p=h(o),g=p&&p.props&&p.props.className||/^go/.test(p)&&p;h=g?"."+g:p&&typeof p=="object"?p.props?"":Ma(p,""):p===!1?"":p}return s+c+(h??"")},"");function Vu(e){let a=this||{},o=e.call?e(a.p):e;return B5(o.unshift?o.raw?U5(o,[].slice.call(arguments,1),a.p):o.reduce((s,c)=>Object.assign(s,c&&c.call?c(a.p):c),{}):o,N5(a.target),a.g,a.o,a.k)}let Zv,a1,i1;Vu.bind({g:1});let Jn=Vu.bind({k:1});function F5(e,a,o,s){Ma.p=a,Zv=e,a1=o,i1=s}function Va(e,a){let o=this||{};return function(){let s=arguments;function c(u,h){let p=Object.assign({},u),g=p.className||c.className;o.p=Object.assign({theme:a1&&a1()},p),o.o=/ *go\d+/.test(g),p.className=Vu.apply(o,s)+(g?" "+g:"");let y=e;return e[0]&&(y=p.as||e,delete p.as),i1&&y[0]&&i1(p),Zv(y,p)}return c}}var L5=e=>typeof e=="function",qu=(e,a)=>L5(e)?e(a):e,P5=(()=>{let e=0;return()=>(++e).toString()})(),Jv=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");e=!a||a.matches}return e}})(),H5=20,Wv=(e,a)=>{switch(a.type){case 0:return{...e,toasts:[a.toast,...e.toasts].slice(0,H5)};case 1:return{...e,toasts:e.toasts.map(u=>u.id===a.toast.id?{...u,...a.toast}:u)};case 2:let{toast:o}=a;return Wv(e,{type:e.toasts.find(u=>u.id===o.id)?1:0,toast:o});case 3:let{toastId:s}=a;return{...e,toasts:e.toasts.map(u=>u.id===s||s===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return a.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(u=>u.id!==a.toastId)};case 5:return{...e,pausedAt:a.time};case 6:let c=a.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+c}))}}},xu=[],Ri={toasts:[],pausedAt:void 0},Bi=e=>{Ri=Wv(Ri,e),xu.forEach(a=>{a(Ri)})},Q5={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},G5=(e={})=>{let[a,o]=S.useState(Ri),s=S.useRef(Ri);S.useEffect(()=>(s.current!==Ri&&o(Ri),xu.push(o),()=>{let u=xu.indexOf(o);u>-1&&xu.splice(u,1)}),[]);let c=a.toasts.map(u=>{var h,p,g;return{...e,...e[u.type],...u,removeDelay:u.removeDelay||((h=e[u.type])==null?void 0:h.removeDelay)||e?.removeDelay,duration:u.duration||((p=e[u.type])==null?void 0:p.duration)||e?.duration||Q5[u.type],style:{...e.style,...(g=e[u.type])==null?void 0:g.style,...u.style}}});return{...a,toasts:c}},V5=(e,a="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:o?.id||P5()}),Kl=e=>(a,o)=>{let s=V5(a,e,o);return Bi({type:2,toast:s}),s.id},yt=(e,a)=>Kl("blank")(e,a);yt.error=Kl("error");yt.success=Kl("success");yt.loading=Kl("loading");yt.custom=Kl("custom");yt.dismiss=e=>{Bi({type:3,toastId:e})};yt.remove=e=>Bi({type:4,toastId:e});yt.promise=(e,a,o)=>{let s=yt.loading(a.loading,{...o,...o?.loading});return typeof e=="function"&&(e=e()),e.then(c=>{let u=a.success?qu(a.success,c):void 0;return u?yt.success(u,{id:s,...o,...o?.success}):yt.dismiss(s),c}).catch(c=>{let u=a.error?qu(a.error,c):void 0;u?yt.error(u,{id:s,...o,...o?.error}):yt.dismiss(s)}),e};var Y5=(e,a)=>{Bi({type:1,toast:{id:e,height:a}})},I5=()=>{Bi({type:5,time:Date.now()})},Bl=new Map,K5=1e3,X5=(e,a=K5)=>{if(Bl.has(e))return;let o=setTimeout(()=>{Bl.delete(e),Bi({type:4,toastId:e})},a);Bl.set(e,o)},Z5=e=>{let{toasts:a,pausedAt:o}=G5(e);S.useEffect(()=>{if(o)return;let u=Date.now(),h=a.map(p=>{if(p.duration===1/0)return;let g=(p.duration||0)+p.pauseDuration-(u-p.createdAt);if(g<0){p.visible&&yt.dismiss(p.id);return}return setTimeout(()=>yt.dismiss(p.id),g)});return()=>{h.forEach(p=>p&&clearTimeout(p))}},[a,o]);let s=S.useCallback(()=>{o&&Bi({type:6,time:Date.now()})},[o]),c=S.useCallback((u,h)=>{let{reverseOrder:p=!1,gutter:g=8,defaultPosition:y}=h||{},b=a.filter(_=>(_.position||y)===(u.position||y)&&_.height),x=b.findIndex(_=>_.id===u.id),j=b.filter((_,C)=>C<x&&_.visible).length;return b.filter(_=>_.visible).slice(...p?[j+1]:[0,j]).reduce((_,C)=>_+(C.height||0)+g,0)},[a]);return S.useEffect(()=>{a.forEach(u=>{if(u.dismissed)X5(u.id,u.removeDelay);else{let h=Bl.get(u.id);h&&(clearTimeout(h),Bl.delete(u.id))}})},[a]),{toasts:a,handlers:{updateHeight:Y5,startPause:I5,endPause:s,calculateOffset:c}}},J5=Jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,W5=Jn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,e7=Jn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,t7=Va("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J5} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${W5} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${e7} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,r7=Jn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,n7=Va("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${r7} 1s linear infinite;
`,a7=Jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,i7=Jn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,o7=Va("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${a7} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${i7} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,s7=Va("div")`
  position: absolute;
`,l7=Va("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,c7=Jn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,d7=Va("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${c7} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,u7=({toast:e})=>{let{icon:a,type:o,iconTheme:s}=e;return a!==void 0?typeof a=="string"?S.createElement(d7,null,a):a:o==="blank"?null:S.createElement(l7,null,S.createElement(n7,{...s}),o!=="loading"&&S.createElement(s7,null,o==="error"?S.createElement(t7,{...s}):S.createElement(o7,{...s})))},f7=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,m7=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,h7="0%{opacity:0;} 100%{opacity:1;}",p7="0%{opacity:1;} 100%{opacity:0;}",g7=Va("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,y7=Va("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,b7=(e,a)=>{let o=e.includes("top")?1:-1,[s,c]=Jv()?[h7,p7]:[f7(o),m7(o)];return{animation:a?`${Jn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Jn(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},x7=S.memo(({toast:e,position:a,style:o,children:s})=>{let c=e.height?b7(e.position||a||"top-center",e.visible):{opacity:0},u=S.createElement(u7,{toast:e}),h=S.createElement(y7,{...e.ariaProps},qu(e.message,e));return S.createElement(g7,{className:e.className,style:{...c,...o,...e.style}},typeof s=="function"?s({icon:u,message:h}):S.createElement(S.Fragment,null,u,h))});F5(S.createElement);var v7=({id:e,className:a,style:o,onHeightUpdate:s,children:c})=>{let u=S.useCallback(h=>{if(h){let p=()=>{let g=h.getBoundingClientRect().height;s(e,g)};p(),new MutationObserver(p).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return S.createElement("div",{ref:u,className:a,style:o},c)},j7=(e,a)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},c=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Jv()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(o?1:-1)}px)`,...s,...c}},w7=Vu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,bd=16,_7=({reverseOrder:e,position:a="top-center",toastOptions:o,gutter:s,children:c,containerStyle:u,containerClassName:h})=>{let{toasts:p,handlers:g}=Z5(o);return S.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:bd,left:bd,right:bd,bottom:bd,pointerEvents:"none",...u},className:h,onMouseEnter:g.startPause,onMouseLeave:g.endPause},p.map(y=>{let b=y.position||a,x=g.calculateOffset(y,{reverseOrder:e,gutter:s,defaultPosition:a}),j=j7(b,x);return S.createElement(v7,{id:y.id,key:y.id,onHeightUpdate:g.updateHeight,className:y.visible?w7:"",style:j},y.type==="custom"?qu(y.message,y):c?c(y):S.createElement(x7,{toast:y,position:b}))}))},W=yt;var h2="popstate";function S7(e={}){function a(s,c){let{pathname:u,search:h,hash:p}=s.location;return o1("",{pathname:u,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(s,c){return typeof c=="string"?c:Ql(c)}return $7(a,o,null,e)}function ct(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Ur(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function k7(){return Math.random().toString(36).substring(2,10)}function p2(e,a){return{usr:e.state,key:e.key,idx:a}}function o1(e,a,o=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?ls(a):a,state:o,key:a&&a.key||s||k7()}}function Ql({pathname:e="/",search:a="",hash:o=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function ls(e){let a={};if(e){let o=e.indexOf("#");o>=0&&(a.hash=e.substring(o),e=e.substring(0,o));let s=e.indexOf("?");s>=0&&(a.search=e.substring(s),e=e.substring(0,s)),e&&(a.pathname=e)}return a}function $7(e,a,o,s={}){let{window:c=document.defaultView,v5Compat:u=!1}=s,h=c.history,p="POP",g=null,y=b();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function b(){return(h.state||{idx:null}).idx}function x(){p="POP";let D=b(),A=D==null?null:D-y;y=D,g&&g({action:p,location:$.location,delta:A})}function j(D,A){p="PUSH";let M=o1($.location,D,A);y=b()+1;let O=p2(M,y),z=$.createHref(M);try{h.pushState(O,"",z)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;c.location.assign(z)}u&&g&&g({action:p,location:$.location,delta:1})}function _(D,A){p="REPLACE";let M=o1($.location,D,A);y=b();let O=p2(M,y),z=$.createHref(M);h.replaceState(O,"",z),u&&g&&g({action:p,location:$.location,delta:0})}function C(D){return C7(D)}let $={get action(){return p},get location(){return e(c,h)},listen(D){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(h2,x),g=D,()=>{c.removeEventListener(h2,x),g=null}},createHref(D){return a(c,D)},createURL:C,encodeLocation(D){let A=C(D);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:j,replace:_,go(D){return h.go(D)}};return $}function C7(e,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),ct(o,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ql(e);return s=s.replace(/ $/,"%20"),!a&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function e3(e,a,o="/"){return E7(e,a,o,!1)}function E7(e,a,o,s){let c=typeof a=="string"?ls(a):a,u=Wn(c.pathname||"/",o);if(u==null)return null;let h=t3(e);T7(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let y=F7(u);p=B7(h[g],y,s)}return p}function t3(e,a=[],o=[],s="",c=!1){let u=(h,p,g=c,y)=>{let b={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&g)return;ct(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let x=Zn([s,b.relativePath]),j=o.concat(b);h.children&&h.children.length>0&&(ct(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),t3(h.children,a,j,x,g)),!(h.path==null&&!h.index)&&a.push({path:x,score:O7(x,h.index),routesMeta:j})};return e.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))u(h,p);else for(let g of r3(h.path))u(h,p,!0,g)}),a}function r3(e){let a=e.split("/");if(a.length===0)return[];let[o,...s]=a,c=o.endsWith("?"),u=o.replace(/\?$/,"");if(s.length===0)return c?[u,""]:[u];let h=r3(s.join("/")),p=[];return p.push(...h.map(g=>g===""?u:[u,g].join("/"))),c&&p.push(...h),p.map(g=>e.startsWith("/")&&g===""?"/":g)}function T7(e){e.sort((a,o)=>a.score!==o.score?o.score-a.score:M7(a.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var D7=/^:[\w-]+$/,R7=3,z7=2,A7=1,q7=10,N7=-2,g2=e=>e==="*";function O7(e,a){let o=e.split("/"),s=o.length;return o.some(g2)&&(s+=N7),a&&(s+=z7),o.filter(c=>!g2(c)).reduce((c,u)=>c+(D7.test(u)?R7:u===""?A7:q7),s)}function M7(e,a){return e.length===a.length&&e.slice(0,-1).every((s,c)=>s===a[c])?e[e.length-1]-a[a.length-1]:0}function B7(e,a,o=!1){let{routesMeta:s}=e,c={},u="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],y=p===s.length-1,b=u==="/"?a:a.slice(u.length)||"/",x=Nu({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},b),j=g.route;if(!x&&y&&o&&!s[s.length-1].route.index&&(x=Nu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!x)return null;Object.assign(c,x.params),h.push({params:c,pathname:Zn([u,x.pathname]),pathnameBase:Q7(Zn([u,x.pathnameBase])),route:j}),x.pathnameBase!=="/"&&(u=Zn([u,x.pathnameBase]))}return h}function Nu(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,s]=U7(e.path,e.caseSensitive,e.end),c=a.match(o);if(!c)return null;let u=c[0],h=u.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:s.reduce((y,{paramName:b,isOptional:x},j)=>{if(b==="*"){let C=p[j]||"";h=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const _=p[j];return x&&!_?y[b]=void 0:y[b]=(_||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:e}}function U7(e,a=!1,o=!0){Ur(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(s.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),s]}function F7(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Ur(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function Wn(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,s=e.charAt(o);return s&&s!=="/"?null:e.slice(o)||"/"}var L7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function P7(e,a="/"){let{pathname:o,search:s="",hash:c=""}=typeof e=="string"?ls(e):e,u;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?u=y2(o.substring(1),"/"):u=y2(o,a)):u=a,{pathname:u,search:G7(s),hash:V7(c)}}function y2(e,a){let o=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Lh(e,a,o,s){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function H7(e){return e.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function $1(e){let a=H7(e);return a.map((o,s)=>s===a.length-1?o.pathname:o.pathnameBase)}function C1(e,a,o,s=!1){let c;typeof e=="string"?c=ls(e):(c={...e},ct(!c.pathname||!c.pathname.includes("?"),Lh("?","pathname","search",c)),ct(!c.pathname||!c.pathname.includes("#"),Lh("#","pathname","hash",c)),ct(!c.search||!c.search.includes("#"),Lh("#","search","hash",c)));let u=e===""||c.pathname==="",h=u?"/":c.pathname,p;if(h==null)p=o;else{let x=a.length-1;if(!s&&h.startsWith("..")){let j=h.split("/");for(;j[0]==="..";)j.shift(),x-=1;c.pathname=j.join("/")}p=x>=0?a[x]:"/"}let g=P7(c,p),y=h&&h!=="/"&&h.endsWith("/"),b=(u||h===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(y||b)&&(g.pathname+="/"),g}var Zn=e=>e.join("/").replace(/\/\/+/g,"/"),Q7=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),G7=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V7=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Y7=class{constructor(e,a,o,s=!1){this.status=e,this.statusText=a||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function I7(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function K7(e){return e.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var n3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function a3(e,a){let o=e;if(typeof o!="string"||!L7.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let s=o,c=!1;if(n3)try{let u=new URL(window.location.href),h=o.startsWith("//")?new URL(u.protocol+o):new URL(o),p=Wn(h.pathname,a);h.origin===u.origin&&p!=null?o=p+h.search+h.hash:c=!0}catch{Ur(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:c,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var i3=["POST","PUT","PATCH","DELETE"];new Set(i3);var X7=["GET",...i3];new Set(X7);var cs=S.createContext(null);cs.displayName="DataRouter";var Yu=S.createContext(null);Yu.displayName="DataRouterState";var Z7=S.createContext(!1),o3=S.createContext({isTransitioning:!1});o3.displayName="ViewTransition";var J7=S.createContext(new Map);J7.displayName="Fetchers";var W7=S.createContext(null);W7.displayName="Await";var Sr=S.createContext(null);Sr.displayName="Navigation";var Xl=S.createContext(null);Xl.displayName="Location";var Lr=S.createContext({outlet:null,matches:[],isDataRoute:!1});Lr.displayName="Route";var E1=S.createContext(null);E1.displayName="RouteError";var s3="REACT_ROUTER_ERROR",e8="REDIRECT",t8="ROUTE_ERROR_RESPONSE";function r8(e){if(e.startsWith(`${s3}:${e8}:{`))try{let a=JSON.parse(e.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function n8(e){if(e.startsWith(`${s3}:${t8}:{`))try{let a=JSON.parse(e.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new Y7(a.status,a.statusText,a.data)}catch{}}function a8(e,{relative:a}={}){ct(ds(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=S.useContext(Sr),{hash:c,pathname:u,search:h}=Zl(e,{relative:a}),p=u;return o!=="/"&&(p=u==="/"?o:Zn([o,u])),s.createHref({pathname:p,search:h,hash:c})}function ds(){return S.useContext(Xl)!=null}function vn(){return ct(ds(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Xl).location}var l3="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c3(e){S.useContext(Sr).static||S.useLayoutEffect(e)}function ur(){let{isDataRoute:e}=S.useContext(Lr);return e?x8():i8()}function i8(){ct(ds(),"useNavigate() may be used only in the context of a <Router> component.");let e=S.useContext(cs),{basename:a,navigator:o}=S.useContext(Sr),{matches:s}=S.useContext(Lr),{pathname:c}=vn(),u=JSON.stringify($1(s)),h=S.useRef(!1);return c3(()=>{h.current=!0}),S.useCallback((g,y={})=>{if(Ur(h.current,l3),!h.current)return;if(typeof g=="number"){o.go(g);return}let b=C1(g,JSON.parse(u),c,y.relative==="path");e==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:Zn([a,b.pathname])),(y.replace?o.replace:o.push)(b,y.state,y)},[a,o,u,c,e])}var o8=S.createContext(null);function s8(e){let a=S.useContext(Lr).outlet;return S.useMemo(()=>a&&S.createElement(o8.Provider,{value:e},a),[a,e])}function us(){let{matches:e}=S.useContext(Lr),a=e[e.length-1];return a?a.params:{}}function Zl(e,{relative:a}={}){let{matches:o}=S.useContext(Lr),{pathname:s}=vn(),c=JSON.stringify($1(o));return S.useMemo(()=>C1(e,JSON.parse(c),s,a==="path"),[e,c,s,a])}function l8(e,a){return d3(e,a)}function d3(e,a,o,s,c){ct(ds(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=S.useContext(Sr),{matches:h}=S.useContext(Lr),p=h[h.length-1],g=p?p.params:{},y=p?p.pathname:"/",b=p?p.pathnameBase:"/",x=p&&p.route;{let M=x&&x.path||"";f3(y,!x||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let j=vn(),_;if(a){let M=typeof a=="string"?ls(a):a;ct(b==="/"||M.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${M.pathname}" was given in the \`location\` prop.`),_=M}else _=j;let C=_.pathname||"/",$=C;if(b!=="/"){let M=b.replace(/^\//,"").split("/");$="/"+C.replace(/^\//,"").split("/").slice(M.length).join("/")}let D=e3(e,{pathname:$});Ur(x||D!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ur(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=m8(D&&D.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Zn([b,u.encodeLocation?u.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?b:Zn([b,u.encodeLocation?u.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),h,o,s,c);return a&&A?S.createElement(Xl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},A):A}function c8(){let e=b8(),a=I7(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",e),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:u},"ErrorBoundary")," or"," ",S.createElement("code",{style:u},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},a),o?S.createElement("pre",{style:c},o):null,h)}var d8=S.createElement(c8,null),u3=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.onError?this.props.onError(e,a):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const o=n8(e.digest);o&&(e=o)}let a=e!==void 0?S.createElement(Lr.Provider,{value:this.props.routeContext},S.createElement(E1.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?S.createElement(u8,{error:e},a):a}};u3.contextType=Z7;var Ph=new WeakMap;function u8({children:e,error:a}){let{basename:o}=S.useContext(Sr);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let s=r8(a.digest);if(s){let c=Ph.get(a);if(c)throw c;let u=a3(s.location,o);if(n3&&!Ph.get(a))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw Ph.set(a,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function f8({routeContext:e,match:a,children:o}){let s=S.useContext(cs);return s&&s.static&&s.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=a.route.id),S.createElement(Lr.Provider,{value:e},o)}function m8(e,a=[],o=null,s=null,c=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let u=e,h=o?.errors;if(h!=null){let b=u.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);ct(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,b+1))}let p=!1,g=-1;if(o)for(let b=0;b<u.length;b++){let x=u[b];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=b),x.route.id){let{loaderData:j,errors:_}=o,C=x.route.loader&&!j.hasOwnProperty(x.route.id)&&(!_||_[x.route.id]===void 0);if(x.route.lazy||C){p=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}let y=o&&s?(b,x)=>{s(b,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:K7(o.matches),errorInfo:x})}:void 0;return u.reduceRight((b,x,j)=>{let _,C=!1,$=null,D=null;o&&(_=h&&x.route.id?h[x.route.id]:void 0,$=x.route.errorElement||d8,p&&(g<0&&j===0?(f3("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,D=null):g===j&&(C=!0,D=x.route.hydrateFallbackElement||null)));let A=a.concat(u.slice(0,j+1)),M=()=>{let O;return _?O=$:C?O=D:x.route.Component?O=S.createElement(x.route.Component,null):x.route.element?O=x.route.element:O=b,S.createElement(f8,{match:x,routeContext:{outlet:b,matches:A,isDataRoute:o!=null},children:O})};return o&&(x.route.ErrorBoundary||x.route.errorElement||j===0)?S.createElement(u3,{location:o.location,revalidation:o.revalidation,component:$,error:_,children:M(),routeContext:{outlet:null,matches:A,isDataRoute:!0},onError:y}):M()},null)}function T1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h8(e){let a=S.useContext(cs);return ct(a,T1(e)),a}function p8(e){let a=S.useContext(Yu);return ct(a,T1(e)),a}function g8(e){let a=S.useContext(Lr);return ct(a,T1(e)),a}function D1(e){let a=g8(e),o=a.matches[a.matches.length-1];return ct(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function y8(){return D1("useRouteId")}function b8(){let e=S.useContext(E1),a=p8("useRouteError"),o=D1("useRouteError");return e!==void 0?e:a.errors?.[o]}function x8(){let{router:e}=h8("useNavigate"),a=D1("useNavigate"),o=S.useRef(!1);return c3(()=>{o.current=!0}),S.useCallback(async(c,u={})=>{Ur(o.current,l3),o.current&&(typeof c=="number"?await e.navigate(c):await e.navigate(c,{fromRouteId:a,...u}))},[e,a])}var b2={};function f3(e,a,o){!a&&!b2[e]&&(b2[e]=!0,Ur(!1,o))}S.memo(v8);function v8({routes:e,future:a,state:o,onError:s}){return d3(e,void 0,o,s,a)}function j8({to:e,replace:a,state:o,relative:s}){ct(ds(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=S.useContext(Sr);Ur(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=S.useContext(Lr),{pathname:h}=vn(),p=ur(),g=C1(e,$1(u),h,s==="path"),y=JSON.stringify(g);return S.useEffect(()=>{p(JSON.parse(y),{replace:a,state:o,relative:s})},[p,y,s,a,o]),null}function w8(e){return s8(e.context)}function be(e){ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _8({basename:e="/",children:a=null,location:o,navigationType:s="POP",navigator:c,static:u=!1,unstable_useTransitions:h}){ct(!ds(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:p,navigator:c,static:u,unstable_useTransitions:h,future:{}}),[p,c,u,h]);typeof o=="string"&&(o=ls(o));let{pathname:y="/",search:b="",hash:x="",state:j=null,key:_="default"}=o,C=S.useMemo(()=>{let $=Wn(y,p);return $==null?null:{location:{pathname:$,search:b,hash:x,state:j,key:_},navigationType:s}},[p,y,b,x,j,_,s]);return Ur(C!=null,`<Router basename="${p}"> is not able to match the URL "${y}${b}${x}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:S.createElement(Sr.Provider,{value:g},S.createElement(Xl.Provider,{children:a,value:C}))}function S8({children:e,location:a}){return l8(s1(e),a)}function s1(e,a=[]){let o=[];return S.Children.forEach(e,(s,c)=>{if(!S.isValidElement(s))return;let u=[...a,c];if(s.type===S.Fragment){o.push.apply(o,s1(s.props.children,u));return}ct(s.type===be,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ct(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=s1(s.props.children,u)),o.push(h)}),o}var vu="get",ju="application/x-www-form-urlencoded";function Iu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function k8(e){return Iu(e)&&e.tagName.toLowerCase()==="button"}function $8(e){return Iu(e)&&e.tagName.toLowerCase()==="form"}function C8(e){return Iu(e)&&e.tagName.toLowerCase()==="input"}function E8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function T8(e,a){return e.button===0&&(!a||a==="_self")&&!E8(e)}function l1(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,o)=>{let s=e[o];return a.concat(Array.isArray(s)?s.map(c=>[o,c]):[[o,s]])},[]))}function D8(e,a){let o=l1(e);return a&&a.forEach((s,c)=>{o.has(c)||a.getAll(c).forEach(u=>{o.append(c,u)})}),o}var xd=null;function R8(){if(xd===null)try{new FormData(document.createElement("form"),0),xd=!1}catch{xd=!0}return xd}var z8=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hh(e){return e!=null&&!z8.has(e)?(Ur(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):e}function A8(e,a){let o,s,c,u,h;if($8(e)){let p=e.getAttribute("action");s=p?Wn(p,a):null,o=e.getAttribute("method")||vu,c=Hh(e.getAttribute("enctype"))||ju,u=new FormData(e)}else if(k8(e)||C8(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||p.getAttribute("action");if(s=g?Wn(g,a):null,o=e.getAttribute("formmethod")||p.getAttribute("method")||vu,c=Hh(e.getAttribute("formenctype"))||Hh(p.getAttribute("enctype"))||ju,u=new FormData(p,e),!R8()){let{name:y,type:b,value:x}=e;if(b==="image"){let j=y?`${y}.`:"";u.append(`${j}x`,"0"),u.append(`${j}y`,"0")}else y&&u.append(y,x)}}else{if(Iu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=vu,s=null,c=ju,h=e}return u&&c==="text/plain"&&(h=u,u=void 0),{action:s,method:o.toLowerCase(),encType:c,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function R1(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function q8(e,a,o,s){let c=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${s}`:c.pathname=`${c.pathname}.${s}`:c.pathname==="/"?c.pathname=`_root.${s}`:a&&Wn(c.pathname,a)==="/"?c.pathname=`${a.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function N8(e,a){if(e.id in a)return a[e.id];try{let o=await import(e.module);return a[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function O8(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function M8(e,a,o){let s=await Promise.all(e.map(async c=>{let u=a.routes[c.route.id];if(u){let h=await N8(u,o);return h.links?h.links():[]}return[]}));return L8(s.flat(1).filter(O8).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function x2(e,a,o,s,c,u){let h=(g,y)=>o[y]?g.route.id!==o[y].route.id:!0,p=(g,y)=>o[y].pathname!==g.pathname||o[y].route.path?.endsWith("*")&&o[y].params["*"]!==g.params["*"];return u==="assets"?a.filter((g,y)=>h(g,y)||p(g,y)):u==="data"?a.filter((g,y)=>{let b=s.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(h(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let x=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function B8(e,a,{includeHydrateFallback:o}={}){return U8(e.map(s=>{let c=a.routes[s.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function U8(e){return[...new Set(e)]}function F8(e){let a={},o=Object.keys(e).sort();for(let s of o)a[s]=e[s];return a}function L8(e,a){let o=new Set;return new Set(a),e.reduce((s,c)=>{let u=JSON.stringify(F8(c));return o.has(u)||(o.add(u),s.push({key:u,link:c})),s},[])}function m3(){let e=S.useContext(cs);return R1(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function P8(){let e=S.useContext(Yu);return R1(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var z1=S.createContext(void 0);z1.displayName="FrameworkContext";function h3(){let e=S.useContext(z1);return R1(e,"You must render this element inside a <HydratedRouter> element"),e}function H8(e,a){let o=S.useContext(z1),[s,c]=S.useState(!1),[u,h]=S.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:b,onTouchStart:x}=a,j=S.useRef(null);S.useEffect(()=>{if(e==="render"&&h(!0),e==="viewport"){let $=A=>{A.forEach(M=>{h(M.isIntersecting)})},D=new IntersectionObserver($,{threshold:.5});return j.current&&D.observe(j.current),()=>{D.disconnect()}}},[e]),S.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let _=()=>{c(!0)},C=()=>{c(!1),h(!1)};return o?e!=="intent"?[u,j,{}]:[u,j,{onFocus:fl(p,_),onBlur:fl(g,C),onMouseEnter:fl(y,_),onMouseLeave:fl(b,C),onTouchStart:fl(x,_)}]:[!1,j,{}]}function fl(e,a){return o=>{e&&e(o),o.defaultPrevented||a(o)}}function Q8({page:e,...a}){let{router:o}=m3(),s=S.useMemo(()=>e3(o.routes,e,o.basename),[o.routes,e,o.basename]);return s?S.createElement(V8,{page:e,matches:s,...a}):null}function G8(e){let{manifest:a,routeModules:o}=h3(),[s,c]=S.useState([]);return S.useEffect(()=>{let u=!1;return M8(e,a,o).then(h=>{u||c(h)}),()=>{u=!0}},[e,a,o]),s}function V8({page:e,matches:a,...o}){let s=vn(),{future:c,manifest:u,routeModules:h}=h3(),{basename:p}=m3(),{loaderData:g,matches:y}=P8(),b=S.useMemo(()=>x2(e,a,y,u,s,"data"),[e,a,y,u,s]),x=S.useMemo(()=>x2(e,a,y,u,s,"assets"),[e,a,y,u,s]),j=S.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let $=new Set,D=!1;if(a.forEach(M=>{let O=u.routes[M.route.id];!O||!O.hasLoader||(!b.some(z=>z.route.id===M.route.id)&&M.route.id in g&&h[M.route.id]?.shouldRevalidate||O.hasClientLoader?D=!0:$.add(M.route.id))}),$.size===0)return[];let A=q8(e,p,c.unstable_trailingSlashAwareDataRequests,"data");return D&&$.size>0&&A.searchParams.set("_routes",a.filter(M=>$.has(M.route.id)).map(M=>M.route.id).join(",")),[A.pathname+A.search]},[p,c.unstable_trailingSlashAwareDataRequests,g,s,u,b,a,e,h]),_=S.useMemo(()=>B8(x,u),[x,u]),C=G8(x);return S.createElement(S.Fragment,null,j.map($=>S.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...o})),_.map($=>S.createElement("link",{key:$,rel:"modulepreload",href:$,...o})),C.map(({key:$,link:D})=>S.createElement("link",{key:$,nonce:o.nonce,...D,crossOrigin:D.crossOrigin??o.crossOrigin})))}function Y8(...e){return a=>{e.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var I8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{I8&&(window.__reactRouterVersion="7.13.0")}catch{}function K8({basename:e,children:a,unstable_useTransitions:o,window:s}){let c=S.useRef();c.current==null&&(c.current=S7({window:s,v5Compat:!0}));let u=c.current,[h,p]=S.useState({action:u.action,location:u.location}),g=S.useCallback(y=>{o===!1?p(y):S.startTransition(()=>p(y))},[o]);return S.useLayoutEffect(()=>u.listen(g),[u,g]),S.createElement(_8,{basename:e,children:a,location:h.location,navigationType:h.action,navigator:u,unstable_useTransitions:o})}var p3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gt=S.forwardRef(function({onClick:a,discover:o="render",prefetch:s="none",relative:c,reloadDocument:u,replace:h,state:p,target:g,to:y,preventScrollReset:b,viewTransition:x,unstable_defaultShouldRevalidate:j,..._},C){let{basename:$,unstable_useTransitions:D}=S.useContext(Sr),A=typeof y=="string"&&p3.test(y),M=a3(y,$);y=M.to;let O=a8(y,{relative:c}),[z,I,R]=H8(s,_),F=J8(y,{replace:h,state:p,target:g,preventScrollReset:b,relative:c,viewTransition:x,unstable_defaultShouldRevalidate:j,unstable_useTransitions:D});function ie(ue){a&&a(ue),ue.defaultPrevented||F(ue)}let K=S.createElement("a",{..._,...R,href:M.absoluteURL||O,onClick:M.isExternal||u?a:ie,ref:Y8(C,I),target:g,"data-discover":!A&&o==="render"?"true":void 0});return z&&!A?S.createElement(S.Fragment,null,K,S.createElement(Q8,{page:O})):K});Gt.displayName="Link";var g3=S.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:s="",end:c=!1,style:u,to:h,viewTransition:p,children:g,...y},b){let x=Zl(h,{relative:y.relative}),j=vn(),_=S.useContext(Yu),{navigator:C,basename:$}=S.useContext(Sr),D=_!=null&&nw(x)&&p===!0,A=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,M=j.pathname,O=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;o||(M=M.toLowerCase(),O=O?O.toLowerCase():null,A=A.toLowerCase()),O&&$&&(O=Wn(O,$)||O);const z=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let I=M===A||!c&&M.startsWith(A)&&M.charAt(z)==="/",R=O!=null&&(O===A||!c&&O.startsWith(A)&&O.charAt(A.length)==="/"),F={isActive:I,isPending:R,isTransitioning:D},ie=I?a:void 0,K;typeof s=="function"?K=s(F):K=[s,I?"active":null,R?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let ue=typeof u=="function"?u(F):u;return S.createElement(Gt,{...y,"aria-current":ie,className:K,ref:b,style:ue,to:h,viewTransition:p},typeof g=="function"?g(F):g)});g3.displayName="NavLink";var X8=S.forwardRef(({discover:e="render",fetcherKey:a,navigate:o,reloadDocument:s,replace:c,state:u,method:h=vu,action:p,onSubmit:g,relative:y,preventScrollReset:b,viewTransition:x,unstable_defaultShouldRevalidate:j,..._},C)=>{let{unstable_useTransitions:$}=S.useContext(Sr),D=tw(),A=rw(p,{relative:y}),M=h.toLowerCase()==="get"?"get":"post",O=typeof p=="string"&&p3.test(p),z=I=>{if(g&&g(I),I.defaultPrevented)return;I.preventDefault();let R=I.nativeEvent.submitter,F=R?.getAttribute("formmethod")||h,ie=()=>D(R||I.currentTarget,{fetcherKey:a,method:F,navigate:o,replace:c,state:u,relative:y,preventScrollReset:b,viewTransition:x,unstable_defaultShouldRevalidate:j});$&&o!==!1?S.startTransition(()=>ie()):ie()};return S.createElement("form",{ref:C,method:M,action:A,onSubmit:s?g:z,..._,"data-discover":!O&&e==="render"?"true":void 0})});X8.displayName="Form";function Z8(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function y3(e){let a=S.useContext(cs);return ct(a,Z8(e)),a}function J8(e,{target:a,replace:o,state:s,preventScrollReset:c,relative:u,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g}={}){let y=ur(),b=vn(),x=Zl(e,{relative:u});return S.useCallback(j=>{if(T8(j,a)){j.preventDefault();let _=o!==void 0?o:Ql(b)===Ql(x),C=()=>y(e,{replace:_,state:s,preventScrollReset:c,relative:u,viewTransition:h,unstable_defaultShouldRevalidate:p});g?S.startTransition(()=>C()):C()}},[b,y,x,o,s,a,e,c,u,h,p,g])}function nr(e){Ur(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=S.useRef(l1(e)),o=S.useRef(!1),s=vn(),c=S.useMemo(()=>D8(s.search,o.current?null:a.current),[s.search]),u=ur(),h=S.useCallback((p,g)=>{const y=l1(typeof p=="function"?p(new URLSearchParams(c)):p);o.current=!0,u("?"+y,g)},[u,c]);return[c,h]}var W8=0,ew=()=>`__${String(++W8)}__`;function tw(){let{router:e}=y3("useSubmit"),{basename:a}=S.useContext(Sr),o=y8(),s=e.fetch,c=e.navigate;return S.useCallback(async(u,h={})=>{let{action:p,method:g,encType:y,formData:b,body:x}=A8(u,a);if(h.navigate===!1){let j=h.fetcherKey||ew();await s(j,o,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:x,formMethod:h.method||g,formEncType:h.encType||y,flushSync:h.flushSync})}else await c(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:x,formMethod:h.method||g,formEncType:h.encType||y,replace:h.replace,state:h.state,fromRouteId:o,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,c,a,o])}function rw(e,{relative:a}={}){let{basename:o}=S.useContext(Sr),s=S.useContext(Lr);ct(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),u={...Zl(e||".",{relative:a})},h=vn();if(e==null){u.search=h.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(b=>b==="")){p.delete("index"),g.filter(x=>x).forEach(x=>p.append("index",x));let b=p.toString();u.search=b?`?${b}`:""}}return(!e||e===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:Zn([o,u.pathname])),Ql(u)}function nw(e,{relative:a}={}){let o=S.useContext(o3);ct(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=y3("useViewTransitionState"),c=Zl(e,{relative:a});if(!o.isTransitioning)return!1;let u=Wn(o.currentLocation.pathname,s)||o.currentLocation.pathname,h=Wn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return Nu(c.pathname,h)!=null||Nu(c.pathname,u)!=null}function aw(e,a){const[o,s]=S.useState(function(){const c=localStorage.getItem(a);return c?JSON.parse(c):e});return S.useEffect(function(){localStorage.setItem(a,JSON.stringify(o))},[o,a]),[o,s]}const b3=S.createContext();function iw({children:e}){const[a,o]=aw(window.matchMedia("(prefers-color-scheme: dark)").matches,"isDarkMode");S.useEffect(function(){a?(document.documentElement.classList.add("dark-mode"),document.documentElement.classList.remove("light-mode")):(document.documentElement.classList.add("light-mode"),document.documentElement.classList.remove("dark-mode"))},[a]);const s=()=>o(c=>!c);return r.jsx(b3,{value:{isDarkMode:a,toggleDarkMode:s},children:e})}function ow(){const e=S.use(b3);if(e===void 0)throw new Error("DarkModeContext was used outside of DarkModeProvider");return e}var Jl=e=>e.type==="checkbox",zi=e=>e instanceof Date,tr=e=>e==null;const x3=e=>typeof e=="object";var bt=e=>!tr(e)&&!Array.isArray(e)&&x3(e)&&!zi(e),sw=e=>bt(e)&&e.target?Jl(e.target)?e.target.checked:e.target.value:e,lw=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,cw=(e,a)=>e.has(lw(a)),dw=e=>{const a=e.constructor&&e.constructor.prototype;return bt(a)&&a.hasOwnProperty("isPrototypeOf")},A1=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ot(e){let a;const o=Array.isArray(e),s=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)a=new Date(e);else if(!(A1&&(e instanceof Blob||s))&&(o||bt(e)))if(a=o?[]:{},!o&&!dw(e))a=e;else for(const c in e)e.hasOwnProperty(c)&&(a[c]=Ot(e[c]));else return e;return a}var Ku=e=>/^\w*$/.test(e),_t=e=>e===void 0,q1=e=>Array.isArray(e)?e.filter(Boolean):[],N1=e=>q1(e.replace(/["|']|\]/g,"").split(/\.|\[/)),_e=(e,a,o)=>{if(!a||!bt(e))return o;const s=(Ku(a)?[a]:N1(a)).reduce((c,u)=>tr(c)?c:c[u],e);return _t(s)||s===e?_t(e[a])?o:e[a]:s},yn=e=>typeof e=="boolean",lt=(e,a,o)=>{let s=-1;const c=Ku(a)?[a]:N1(a),u=c.length,h=u-1;for(;++s<u;){const p=c[s];let g=o;if(s!==h){const y=e[p];g=bt(y)||Array.isArray(y)?y:isNaN(+c[s+1])?{}:[]}if(p==="__proto__"||p==="constructor"||p==="prototype")return;e[p]=g,e=e[p]}};const v2={BLUR:"blur",FOCUS_OUT:"focusout"},Xr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},uw=tt.createContext(null);uw.displayName="HookFormContext";var fw=(e,a,o,s=!0)=>{const c={defaultValues:a._defaultValues};for(const u in e)Object.defineProperty(c,u,{get:()=>{const h=u;return a._proxyFormState[h]!==Xr.all&&(a._proxyFormState[h]=!s||Xr.all),e[h]}});return c};const mw=typeof window<"u"?S.useLayoutEffect:S.useEffect;var xn=e=>typeof e=="string",hw=(e,a,o,s,c)=>xn(e)?(s&&a.watch.add(e),_e(o,e,c)):Array.isArray(e)?e.map(u=>(s&&a.watch.add(u),_e(o,u))):(s&&(a.watchAll=!0),o),pw=(e,a,o,s,c)=>a?{...o[e],types:{...o[e]&&o[e].types?o[e].types:{},[s]:c||!0}}:{},Ul=e=>Array.isArray(e)?e:[e],j2=()=>{let e=[];return{get observers(){return e},next:c=>{for(const u of e)u.next&&u.next(c)},subscribe:c=>(e.push(c),{unsubscribe:()=>{e=e.filter(u=>u!==c)}}),unsubscribe:()=>{e=[]}}},c1=e=>tr(e)||!x3(e);function Ba(e,a,o=new WeakSet){if(c1(e)||c1(a))return e===a;if(zi(e)&&zi(a))return e.getTime()===a.getTime();const s=Object.keys(e),c=Object.keys(a);if(s.length!==c.length)return!1;if(o.has(e)||o.has(a))return!0;o.add(e),o.add(a);for(const u of s){const h=e[u];if(!c.includes(u))return!1;if(u!=="ref"){const p=a[u];if(zi(h)&&zi(p)||bt(h)&&bt(p)||Array.isArray(h)&&Array.isArray(p)?!Ba(h,p,o):h!==p)return!1}}return!0}var dr=e=>bt(e)&&!Object.keys(e).length,O1=e=>e.type==="file",Zr=e=>typeof e=="function",Ou=e=>{if(!A1)return!1;const a=e?e.ownerDocument:0;return e instanceof(a&&a.defaultView?a.defaultView.HTMLElement:HTMLElement)},v3=e=>e.type==="select-multiple",M1=e=>e.type==="radio",gw=e=>M1(e)||Jl(e),Qh=e=>Ou(e)&&e.isConnected;function yw(e,a){const o=a.slice(0,-1).length;let s=0;for(;s<o;)e=_t(e)?s++:e[a[s++]];return e}function bw(e){for(const a in e)if(e.hasOwnProperty(a)&&!_t(e[a]))return!1;return!0}function wt(e,a){const o=Array.isArray(a)?a:Ku(a)?[a]:N1(a),s=o.length===1?e:yw(e,o),c=o.length-1,u=o[c];return s&&delete s[u],c!==0&&(bt(s)&&dr(s)||Array.isArray(s)&&bw(s))&&wt(e,o.slice(0,-1)),e}var j3=e=>{for(const a in e)if(Zr(e[a]))return!0;return!1};function Mu(e,a={}){const o=Array.isArray(e);if(bt(e)||o)for(const s in e)Array.isArray(e[s])||bt(e[s])&&!j3(e[s])?(a[s]=Array.isArray(e[s])?[]:{},Mu(e[s],a[s])):tr(e[s])||(a[s]=!0);return a}function w3(e,a,o){const s=Array.isArray(e);if(bt(e)||s)for(const c in e)Array.isArray(e[c])||bt(e[c])&&!j3(e[c])?_t(a)||c1(o[c])?o[c]=Array.isArray(e[c])?Mu(e[c],[]):{...Mu(e[c])}:w3(e[c],tr(a)?{}:a[c],o[c]):o[c]=!Ba(e[c],a[c]);return o}var ml=(e,a)=>w3(e,a,Mu(a));const w2={value:!1,isValid:!1},_2={value:!0,isValid:!0};var _3=e=>{if(Array.isArray(e)){if(e.length>1){const a=e.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:a,isValid:!!a.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_t(e[0].attributes.value)?_t(e[0].value)||e[0].value===""?_2:{value:e[0].value,isValid:!0}:_2:w2}return w2},S3=(e,{valueAsNumber:a,valueAsDate:o,setValueAs:s})=>_t(e)?e:a?e===""?NaN:e&&+e:o&&xn(e)?new Date(e):s?s(e):e;const S2={isValid:!1,value:null};var k3=e=>Array.isArray(e)?e.reduce((a,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:a,S2):S2;function k2(e){const a=e.ref;return O1(a)?a.files:M1(a)?k3(e.refs).value:v3(a)?[...a.selectedOptions].map(({value:o})=>o):Jl(a)?_3(e.refs).value:S3(_t(a.value)?e.ref.value:a.value,e)}var xw=(e,a,o,s)=>{const c={};for(const u of e){const h=_e(a,u);h&&lt(c,u,h._f)}return{criteriaMode:o,names:[...e],fields:c,shouldUseNativeValidation:s}},Bu=e=>e instanceof RegExp,hl=e=>_t(e)?e:Bu(e)?e.source:bt(e)?Bu(e.value)?e.value.source:e.value:e,$2=e=>({isOnSubmit:!e||e===Xr.onSubmit,isOnBlur:e===Xr.onBlur,isOnChange:e===Xr.onChange,isOnAll:e===Xr.all,isOnTouch:e===Xr.onTouched});const C2="AsyncFunction";var vw=e=>!!e&&!!e.validate&&!!(Zr(e.validate)&&e.validate.constructor.name===C2||bt(e.validate)&&Object.values(e.validate).find(a=>a.constructor.name===C2)),jw=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),E2=(e,a,o)=>!o&&(a.watchAll||a.watch.has(e)||[...a.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const Fl=(e,a,o,s)=>{for(const c of o||Object.keys(e)){const u=_e(e,c);if(u){const{_f:h,...p}=u;if(h){if(h.refs&&h.refs[0]&&a(h.refs[0],c)&&!s)return!0;if(h.ref&&a(h.ref,h.name)&&!s)return!0;if(Fl(p,a))break}else if(bt(p)&&Fl(p,a))break}}};function T2(e,a,o){const s=_e(e,o);if(s||Ku(o))return{error:s,name:o};const c=o.split(".");for(;c.length;){const u=c.join("."),h=_e(a,u),p=_e(e,u);if(h&&!Array.isArray(h)&&o!==u)return{name:o};if(p&&p.type)return{name:u,error:p};if(p&&p.root&&p.root.type)return{name:`${u}.root`,error:p.root};c.pop()}return{name:o}}var ww=(e,a,o,s)=>{o(e);const{name:c,...u}=e;return dr(u)||Object.keys(u).length>=Object.keys(a).length||Object.keys(u).find(h=>a[h]===(!s||Xr.all))},_w=(e,a,o)=>!e||!a||e===a||Ul(e).some(s=>s&&(o?s===a:s.startsWith(a)||a.startsWith(s))),Sw=(e,a,o,s,c)=>c.isOnAll?!1:!o&&c.isOnTouch?!(a||e):(o?s.isOnBlur:c.isOnBlur)?!e:(o?s.isOnChange:c.isOnChange)?e:!0,kw=(e,a)=>!q1(_e(e,a)).length&&wt(e,a),$w=(e,a,o)=>{const s=Ul(_e(e,o));return lt(s,"root",a[o]),lt(e,o,s),e},wu=e=>xn(e);function D2(e,a,o="validate"){if(wu(e)||Array.isArray(e)&&e.every(wu)||yn(e)&&!e)return{type:o,message:wu(e)?e:"",ref:a}}var Co=e=>bt(e)&&!Bu(e)?e:{value:e,message:""},R2=async(e,a,o,s,c,u)=>{const{ref:h,refs:p,required:g,maxLength:y,minLength:b,min:x,max:j,pattern:_,validate:C,name:$,valueAsNumber:D,mount:A}=e._f,M=_e(o,$);if(!A||a.has($))return{};const O=p?p[0]:h,z=H=>{c&&O.reportValidity&&(O.setCustomValidity(yn(H)?"":H||""),O.reportValidity())},I={},R=M1(h),F=Jl(h),ie=R||F,K=(D||O1(h))&&_t(h.value)&&_t(M)||Ou(h)&&h.value===""||M===""||Array.isArray(M)&&!M.length,ue=pw.bind(null,$,s,I),X=(H,oe,ce,Y=Bn.maxLength,N=Bn.minLength)=>{const ne=H?oe:ce;I[$]={type:H?Y:N,message:ne,ref:h,...ue(H?Y:N,ne)}};if(u?!Array.isArray(M)||!M.length:g&&(!ie&&(K||tr(M))||yn(M)&&!M||F&&!_3(p).isValid||R&&!k3(p).isValid)){const{value:H,message:oe}=wu(g)?{value:!!g,message:g}:Co(g);if(H&&(I[$]={type:Bn.required,message:oe,ref:O,...ue(Bn.required,oe)},!s))return z(oe),I}if(!K&&(!tr(x)||!tr(j))){let H,oe;const ce=Co(j),Y=Co(x);if(!tr(M)&&!isNaN(M)){const N=h.valueAsNumber||M&&+M;tr(ce.value)||(H=N>ce.value),tr(Y.value)||(oe=N<Y.value)}else{const N=h.valueAsDate||new Date(M),ne=k=>new Date(new Date().toDateString()+" "+k),pe=h.type=="time",te=h.type=="week";xn(ce.value)&&M&&(H=pe?ne(M)>ne(ce.value):te?M>ce.value:N>new Date(ce.value)),xn(Y.value)&&M&&(oe=pe?ne(M)<ne(Y.value):te?M<Y.value:N<new Date(Y.value))}if((H||oe)&&(X(!!H,ce.message,Y.message,Bn.max,Bn.min),!s))return z(I[$].message),I}if((y||b)&&!K&&(xn(M)||u&&Array.isArray(M))){const H=Co(y),oe=Co(b),ce=!tr(H.value)&&M.length>+H.value,Y=!tr(oe.value)&&M.length<+oe.value;if((ce||Y)&&(X(ce,H.message,oe.message),!s))return z(I[$].message),I}if(_&&!K&&xn(M)){const{value:H,message:oe}=Co(_);if(Bu(H)&&!M.match(H)&&(I[$]={type:Bn.pattern,message:oe,ref:h,...ue(Bn.pattern,oe)},!s))return z(oe),I}if(C){if(Zr(C)){const H=await C(M,o),oe=D2(H,O);if(oe&&(I[$]={...oe,...ue(Bn.validate,oe.message)},!s))return z(oe.message),I}else if(bt(C)){let H={};for(const oe in C){if(!dr(H)&&!s)break;const ce=D2(await C[oe](M,o),O,oe);ce&&(H={...ce,...ue(oe,ce.message)},z(ce.message),s&&(I[$]=H))}if(!dr(H)&&(I[$]={ref:O,...H},!s))return I}}return z(!0),I};const Cw={mode:Xr.onSubmit,reValidateMode:Xr.onChange,shouldFocusError:!0};function Ew(e={}){let a={...Cw,...e},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:Zr(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1},s={},c=bt(a.defaultValues)||bt(a.values)?Ot(a.defaultValues||a.values)||{}:{},u=a.shouldUnregister?{}:Ot(c),h={action:!1,mount:!1,watch:!1},p={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},g,y=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let x={...b};const j={array:j2(),state:j2()},_=a.criteriaMode===Xr.all,C=E=>U=>{clearTimeout(y),y=setTimeout(E,U)},$=async E=>{if(!a.disabled&&(b.isValid||x.isValid||E)){const U=a.resolver?dr((await F()).errors):await K(s,!0);U!==o.isValid&&j.state.next({isValid:U})}},D=(E,U)=>{!a.disabled&&(b.isValidating||b.validatingFields||x.isValidating||x.validatingFields)&&((E||Array.from(p.mount)).forEach(V=>{V&&(U?lt(o.validatingFields,V,U):wt(o.validatingFields,V))}),j.state.next({validatingFields:o.validatingFields,isValidating:!dr(o.validatingFields)}))},A=(E,U=[],V,me,fe=!0,he=!0)=>{if(me&&V&&!a.disabled){if(h.action=!0,he&&Array.isArray(_e(s,E))){const xe=V(_e(s,E),me.argA,me.argB);fe&&lt(s,E,xe)}if(he&&Array.isArray(_e(o.errors,E))){const xe=V(_e(o.errors,E),me.argA,me.argB);fe&&lt(o.errors,E,xe),kw(o.errors,E)}if((b.touchedFields||x.touchedFields)&&he&&Array.isArray(_e(o.touchedFields,E))){const xe=V(_e(o.touchedFields,E),me.argA,me.argB);fe&&lt(o.touchedFields,E,xe)}(b.dirtyFields||x.dirtyFields)&&(o.dirtyFields=ml(c,u)),j.state.next({name:E,isDirty:X(E,U),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else lt(u,E,U)},M=(E,U)=>{lt(o.errors,E,U),j.state.next({errors:o.errors})},O=E=>{o.errors=E,j.state.next({errors:o.errors,isValid:!1})},z=(E,U,V,me)=>{const fe=_e(s,E);if(fe){const he=_e(u,E,_t(V)?_e(c,E):V);_t(he)||me&&me.defaultChecked||U?lt(u,E,U?he:k2(fe._f)):ce(E,he),h.mount&&$()}},I=(E,U,V,me,fe)=>{let he=!1,xe=!1;const ze={name:E};if(!a.disabled){if(!V||me){(b.isDirty||x.isDirty)&&(xe=o.isDirty,o.isDirty=ze.isDirty=X(),he=xe!==ze.isDirty);const Oe=Ba(_e(c,E),U);xe=!!_e(o.dirtyFields,E),Oe?wt(o.dirtyFields,E):lt(o.dirtyFields,E,!0),ze.dirtyFields=o.dirtyFields,he=he||(b.dirtyFields||x.dirtyFields)&&xe!==!Oe}if(V){const Oe=_e(o.touchedFields,E);Oe||(lt(o.touchedFields,E,V),ze.touchedFields=o.touchedFields,he=he||(b.touchedFields||x.touchedFields)&&Oe!==V)}he&&fe&&j.state.next(ze)}return he?ze:{}},R=(E,U,V,me)=>{const fe=_e(o.errors,E),he=(b.isValid||x.isValid)&&yn(U)&&o.isValid!==U;if(a.delayError&&V?(g=C(()=>M(E,V)),g(a.delayError)):(clearTimeout(y),g=null,V?lt(o.errors,E,V):wt(o.errors,E)),(V?!Ba(fe,V):fe)||!dr(me)||he){const xe={...me,...he&&yn(U)?{isValid:U}:{},errors:o.errors,name:E};o={...o,...xe},j.state.next(xe)}},F=async E=>{D(E,!0);const U=await a.resolver(u,a.context,xw(E||p.mount,s,a.criteriaMode,a.shouldUseNativeValidation));return D(E),U},ie=async E=>{const{errors:U}=await F(E);if(E)for(const V of E){const me=_e(U,V);me?lt(o.errors,V,me):wt(o.errors,V)}else o.errors=U;return U},K=async(E,U,V={valid:!0})=>{for(const me in E){const fe=E[me];if(fe){const{_f:he,...xe}=fe;if(he){const ze=p.array.has(he.name),Oe=fe._f&&vw(fe._f);Oe&&b.validatingFields&&D([me],!0);const at=await R2(fe,p.disabled,u,_,a.shouldUseNativeValidation&&!U,ze);if(Oe&&b.validatingFields&&D([me]),at[he.name]&&(V.valid=!1,U))break;!U&&(_e(at,he.name)?ze?$w(o.errors,at,he.name):lt(o.errors,he.name,at[he.name]):wt(o.errors,he.name))}!dr(xe)&&await K(xe,U,V)}}return V.valid},ue=()=>{for(const E of p.unMount){const U=_e(s,E);U&&(U._f.refs?U._f.refs.every(V=>!Qh(V)):!Qh(U._f.ref))&&Le(E)}p.unMount=new Set},X=(E,U)=>!a.disabled&&(E&&U&&lt(u,E,U),!Ba(k(),c)),H=(E,U,V)=>hw(E,p,{...h.mount?u:_t(U)?c:xn(E)?{[E]:U}:U},V,U),oe=E=>q1(_e(h.mount?u:c,E,a.shouldUnregister?_e(c,E,[]):[])),ce=(E,U,V={})=>{const me=_e(s,E);let fe=U;if(me){const he=me._f;he&&(!he.disabled&&lt(u,E,S3(U,he)),fe=Ou(he.ref)&&tr(U)?"":U,v3(he.ref)?[...he.ref.options].forEach(xe=>xe.selected=fe.includes(xe.value)):he.refs?Jl(he.ref)?he.refs.forEach(xe=>{(!xe.defaultChecked||!xe.disabled)&&(Array.isArray(fe)?xe.checked=!!fe.find(ze=>ze===xe.value):xe.checked=fe===xe.value||!!fe)}):he.refs.forEach(xe=>xe.checked=xe.value===fe):O1(he.ref)?he.ref.value="":(he.ref.value=fe,he.ref.type||j.state.next({name:E,values:Ot(u)})))}(V.shouldDirty||V.shouldTouch)&&I(E,fe,V.shouldTouch,V.shouldDirty,!0),V.shouldValidate&&te(E)},Y=(E,U,V)=>{for(const me in U){if(!U.hasOwnProperty(me))return;const fe=U[me],he=E+"."+me,xe=_e(s,he);(p.array.has(E)||bt(fe)||xe&&!xe._f)&&!zi(fe)?Y(he,fe,V):ce(he,fe,V)}},N=(E,U,V={})=>{const me=_e(s,E),fe=p.array.has(E),he=Ot(U);lt(u,E,he),fe?(j.array.next({name:E,values:Ot(u)}),(b.isDirty||b.dirtyFields||x.isDirty||x.dirtyFields)&&V.shouldDirty&&j.state.next({name:E,dirtyFields:ml(c,u),isDirty:X(E,he)})):me&&!me._f&&!tr(he)?Y(E,he,V):ce(E,he,V),E2(E,p)&&j.state.next({...o}),j.state.next({name:h.mount?E:void 0,values:Ot(u)})},ne=async E=>{h.mount=!0;const U=E.target;let V=U.name,me=!0;const fe=_e(s,V),he=Oe=>{me=Number.isNaN(Oe)||zi(Oe)&&isNaN(Oe.getTime())||Ba(Oe,_e(u,V,Oe))},xe=$2(a.mode),ze=$2(a.reValidateMode);if(fe){let Oe,at;const Fi=U.type?k2(fe._f):sw(E),Wr=E.type===v2.BLUR||E.type===v2.FOCUS_OUT,vf=!jw(fe._f)&&!a.resolver&&!_e(o.errors,V)&&!fe._f.deps||Sw(Wr,_e(o.touchedFields,V),o.isSubmitted,ze,xe),ta=E2(V,p,Wr);lt(u,V,Fi),Wr?(fe._f.onBlur&&fe._f.onBlur(E),g&&g(0)):fe._f.onChange&&fe._f.onChange(E);const ra=I(V,Fi,Wr),jn=!dr(ra)||ta;if(!Wr&&j.state.next({name:V,type:E.type,values:Ot(u)}),vf)return(b.isValid||x.isValid)&&(a.mode==="onBlur"?Wr&&$():Wr||$()),jn&&j.state.next({name:V,...ta?{}:ra});if(!Wr&&ta&&j.state.next({...o}),a.resolver){const{errors:Ka}=await F([V]);if(he(Fi),me){const Xa=T2(o.errors,s,V),oc=T2(Ka,s,Xa.name||V);Oe=oc.error,V=oc.name,at=dr(Ka)}}else D([V],!0),Oe=(await R2(fe,p.disabled,u,_,a.shouldUseNativeValidation))[V],D([V]),he(Fi),me&&(Oe?at=!1:(b.isValid||x.isValid)&&(at=await K(s,!0)));me&&(fe._f.deps&&te(fe._f.deps),R(V,at,Oe,ra))}},pe=(E,U)=>{if(_e(o.errors,U)&&E.focus)return E.focus(),1},te=async(E,U={})=>{let V,me;const fe=Ul(E);if(a.resolver){const he=await ie(_t(E)?E:fe);V=dr(he),me=E?!fe.some(xe=>_e(he,xe)):V}else E?(me=(await Promise.all(fe.map(async he=>{const xe=_e(s,he);return await K(xe&&xe._f?{[he]:xe}:xe)}))).every(Boolean),!(!me&&!o.isValid)&&$()):me=V=await K(s);return j.state.next({...!xn(E)||(b.isValid||x.isValid)&&V!==o.isValid?{}:{name:E},...a.resolver||!E?{isValid:V}:{},errors:o.errors}),U.shouldFocus&&!me&&Fl(s,pe,E?fe:p.mount),me},k=E=>{const U={...h.mount?u:c};return _t(E)?U:xn(E)?_e(U,E):E.map(V=>_e(U,V))},Z=(E,U)=>({invalid:!!_e((U||o).errors,E),isDirty:!!_e((U||o).dirtyFields,E),error:_e((U||o).errors,E),isValidating:!!_e(o.validatingFields,E),isTouched:!!_e((U||o).touchedFields,E)}),se=E=>{E&&Ul(E).forEach(U=>wt(o.errors,U)),j.state.next({errors:E?o.errors:{}})},de=(E,U,V)=>{const me=(_e(s,E,{_f:{}})._f||{}).ref,fe=_e(o.errors,E)||{},{ref:he,message:xe,type:ze,...Oe}=fe;lt(o.errors,E,{...Oe,...U,ref:me}),j.state.next({name:E,errors:o.errors,isValid:!1}),V&&V.shouldFocus&&me&&me.focus&&me.focus()},J=(E,U)=>Zr(E)?j.state.subscribe({next:V=>E(H(void 0,U),V)}):H(E,U,!0),ye=E=>j.state.subscribe({next:U=>{_w(E.name,U.name,E.exact)&&ww(U,E.formState||b,ke,E.reRenderRoot)&&E.callback({values:{...u},...o,...U})}}).unsubscribe,ve=E=>(h.mount=!0,x={...x,...E.formState},ye({...E,formState:x})),Le=(E,U={})=>{for(const V of E?Ul(E):p.mount)p.mount.delete(V),p.array.delete(V),U.keepValue||(wt(s,V),wt(u,V)),!U.keepError&&wt(o.errors,V),!U.keepDirty&&wt(o.dirtyFields,V),!U.keepTouched&&wt(o.touchedFields,V),!U.keepIsValidating&&wt(o.validatingFields,V),!a.shouldUnregister&&!U.keepDefaultValue&&wt(c,V);j.state.next({values:Ot(u)}),j.state.next({...o,...U.keepDirty?{isDirty:X()}:{}}),!U.keepIsValid&&$()},Ce=({disabled:E,name:U})=>{(yn(E)&&h.mount||E||p.disabled.has(U))&&(E?p.disabled.add(U):p.disabled.delete(U))},rt=(E,U={})=>{let V=_e(s,E);const me=yn(U.disabled)||yn(a.disabled);return lt(s,E,{...V||{},_f:{...V&&V._f?V._f:{ref:{name:E}},name:E,mount:!0,...U}}),p.mount.add(E),V?Ce({disabled:yn(U.disabled)?U.disabled:a.disabled,name:E}):z(E,!0,U.value),{...me?{disabled:U.disabled||a.disabled}:{},...a.progressive?{required:!!U.required,min:hl(U.min),max:hl(U.max),minLength:hl(U.minLength),maxLength:hl(U.maxLength),pattern:hl(U.pattern)}:{},name:E,onChange:ne,onBlur:ne,ref:fe=>{if(fe){rt(E,U),V=_e(s,E);const he=_t(fe.value)&&fe.querySelectorAll&&fe.querySelectorAll("input,select,textarea")[0]||fe,xe=gw(he),ze=V._f.refs||[];if(xe?ze.find(Oe=>Oe===he):he===V._f.ref)return;lt(s,E,{_f:{...V._f,...xe?{refs:[...ze.filter(Qh),he,...Array.isArray(_e(c,E))?[{}]:[]],ref:{type:he.type,name:E}}:{ref:he}}}),z(E,!1,void 0,he)}else V=_e(s,E,{}),V._f&&(V._f.mount=!1),(a.shouldUnregister||U.shouldUnregister)&&!(cw(p.array,E)&&h.action)&&p.unMount.add(E)}}},nt=()=>a.shouldFocusError&&Fl(s,pe,p.mount),Ft=E=>{yn(E)&&(j.state.next({disabled:E}),Fl(s,(U,V)=>{const me=_e(s,V);me&&(U.disabled=me._f.disabled||E,Array.isArray(me._f.refs)&&me._f.refs.forEach(fe=>{fe.disabled=me._f.disabled||E}))},0,!1))},Dt=(E,U)=>async V=>{let me;V&&(V.preventDefault&&V.preventDefault(),V.persist&&V.persist());let fe=Ot(u);if(j.state.next({isSubmitting:!0}),a.resolver){const{errors:he,values:xe}=await F();o.errors=he,fe=Ot(xe)}else await K(s);if(p.disabled.size)for(const he of p.disabled)wt(fe,he);if(wt(o.errors,"root"),dr(o.errors)){j.state.next({errors:{}});try{await E(fe,V)}catch(he){me=he}}else U&&await U({...o.errors},V),nt(),setTimeout(nt);if(j.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:dr(o.errors)&&!me,submitCount:o.submitCount+1,errors:o.errors}),me)throw me},Ia=(E,U={})=>{_e(s,E)&&(_t(U.defaultValue)?N(E,Ot(_e(c,E))):(N(E,U.defaultValue),lt(c,E,Ot(U.defaultValue))),U.keepTouched||wt(o.touchedFields,E),U.keepDirty||(wt(o.dirtyFields,E),o.isDirty=U.defaultValue?X(E,Ot(_e(c,E))):X()),U.keepError||(wt(o.errors,E),b.isValid&&$()),j.state.next({...o}))},ea=(E,U={})=>{const V=E?Ot(E):c,me=Ot(V),fe=dr(E),he=fe?c:me;if(U.keepDefaultValues||(c=V),!U.keepValues){if(U.keepDirtyValues){const xe=new Set([...p.mount,...Object.keys(ml(c,u))]);for(const ze of Array.from(xe))_e(o.dirtyFields,ze)?lt(he,ze,_e(u,ze)):N(ze,_e(he,ze))}else{if(A1&&_t(E))for(const xe of p.mount){const ze=_e(s,xe);if(ze&&ze._f){const Oe=Array.isArray(ze._f.refs)?ze._f.refs[0]:ze._f.ref;if(Ou(Oe)){const at=Oe.closest("form");if(at){at.reset();break}}}}if(U.keepFieldsRef)for(const xe of p.mount)N(xe,_e(he,xe));else s={}}u=a.shouldUnregister?U.keepDefaultValues?Ot(c):{}:Ot(he),j.array.next({values:{...he}}),j.state.next({values:{...he}})}p={mount:U.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!b.isValid||!!U.keepIsValid||!!U.keepDirtyValues,h.watch=!!a.shouldUnregister,j.state.next({submitCount:U.keepSubmitCount?o.submitCount:0,isDirty:fe?!1:U.keepDirty?o.isDirty:!!(U.keepDefaultValues&&!Ba(E,c)),isSubmitted:U.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:fe?{}:U.keepDirtyValues?U.keepDefaultValues&&u?ml(c,u):o.dirtyFields:U.keepDefaultValues&&E?ml(c,E):U.keepDirty?o.dirtyFields:{},touchedFields:U.keepTouched?o.touchedFields:{},errors:U.keepErrors?o.errors:{},isSubmitSuccessful:U.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1})},Ui=(E,U)=>ea(Zr(E)?E(u):E,U),le=(E,U={})=>{const V=_e(s,E),me=V&&V._f;if(me){const fe=me.refs?me.refs[0]:me.ref;fe.focus&&(fe.focus(),U.shouldSelect&&Zr(fe.select)&&fe.select())}},ke=E=>{o={...o,...E}},Ue={control:{register:rt,unregister:Le,getFieldState:Z,handleSubmit:Dt,setError:de,_subscribe:ye,_runSchema:F,_focusError:nt,_getWatch:H,_getDirty:X,_setValid:$,_setFieldArray:A,_setDisabledField:Ce,_setErrors:O,_getFieldArray:oe,_reset:ea,_resetDefaultValues:()=>Zr(a.defaultValues)&&a.defaultValues().then(E=>{Ui(E,a.resetOptions),j.state.next({isLoading:!1})}),_removeUnmounted:ue,_disableForm:Ft,_subjects:j,_proxyFormState:b,get _fields(){return s},get _formValues(){return u},get _state(){return h},set _state(E){h=E},get _defaultValues(){return c},get _names(){return p},set _names(E){p=E},get _formState(){return o},get _options(){return a},set _options(E){a={...a,...E}}},subscribe:ve,trigger:te,register:rt,handleSubmit:Dt,watch:J,setValue:N,getValues:k,reset:Ui,resetField:Ia,clearErrors:se,unregister:Le,setError:de,setFocus:le,getFieldState:Z};return{...Ue,formControl:Ue}}function Ut(e={}){const a=tt.useRef(void 0),o=tt.useRef(void 0),[s,c]=tt.useState({isDirty:!1,isValidating:!1,isLoading:Zr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Zr(e.defaultValues)?void 0:e.defaultValues});if(!a.current)if(e.formControl)a.current={...e.formControl,formState:s},e.defaultValues&&!Zr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:h,...p}=Ew(e);a.current={...p,formState:s}}const u=a.current.control;return u._options=e,mw(()=>{const h=u._subscribe({formState:u._proxyFormState,callback:()=>c({...u._formState}),reRenderRoot:!0});return c(p=>({...p,isReady:!0})),u._formState.isReady=!0,h},[u]),tt.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),tt.useEffect(()=>{e.mode&&(u._options.mode=e.mode),e.reValidateMode&&(u._options.reValidateMode=e.reValidateMode)},[u,e.mode,e.reValidateMode]),tt.useEffect(()=>{e.errors&&(u._setErrors(e.errors),u._focusError())},[u,e.errors]),tt.useEffect(()=>{e.shouldUnregister&&u._subjects.state.next({values:u._getWatch()})},[u,e.shouldUnregister]),tt.useEffect(()=>{if(u._proxyFormState.isDirty){const h=u._getDirty();h!==s.isDirty&&u._subjects.state.next({isDirty:h})}},[u,s.isDirty]),tt.useEffect(()=>{e.values&&!Ba(e.values,o.current)?(u._reset(e.values,{keepFieldsRef:!0,...u._options.resetOptions}),o.current=e.values,c(h=>({...h}))):u._resetDefaultValues()},[u,e.values]),tt.useEffect(()=>{u._state.mount||(u._setValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),a.current.formState=fw(s,u),a.current}var Zt=function(){return Zt=Object.assign||function(a){for(var o,s=1,c=arguments.length;s<c;s++){o=arguments[s];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(a[u]=o[u])}return a},Zt.apply(this,arguments)};function rs(e,a,o){if(o||arguments.length===2)for(var s=0,c=a.length,u;s<c;s++)(u||!(s in a))&&(u||(u=Array.prototype.slice.call(a,0,s)),u[s]=a[s]);return e.concat(u||Array.prototype.slice.call(a))}var ot="-ms-",Ll="-moz-",Ie="-webkit-",$3="comm",Xu="rule",B1="decl",Tw="@import",C3="@keyframes",Dw="@layer",E3=Math.abs,U1=String.fromCharCode,d1=Object.assign;function Rw(e,a){return Mt(e,0)^45?(((a<<2^Mt(e,0))<<2^Mt(e,1))<<2^Mt(e,2))<<2^Mt(e,3):0}function T3(e){return e.trim()}function Xn(e,a){return(e=a.exec(e))?e[0]:e}function Me(e,a,o){return e.replace(a,o)}function _u(e,a,o){return e.indexOf(a,o)}function Mt(e,a){return e.charCodeAt(a)|0}function ns(e,a,o){return e.slice(a,o)}function bn(e){return e.length}function D3(e){return e.length}function Ml(e,a){return a.push(e),e}function zw(e,a){return e.map(a).join("")}function z2(e,a){return e.filter(function(o){return!Xn(o,a)})}var Zu=1,as=1,R3=0,Fr=0,St=0,fs="";function Ju(e,a,o,s,c,u,h,p){return{value:e,root:a,parent:o,type:s,props:c,children:u,line:Zu,column:as,length:h,return:"",siblings:p}}function Oa(e,a){return d1(Ju("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Eo(e){for(;e.root;)e=Oa(e.root,{children:[e]});Ml(e,e.siblings)}function Aw(){return St}function qw(){return St=Fr>0?Mt(fs,--Fr):0,as--,St===10&&(as=1,Zu--),St}function Jr(){return St=Fr<R3?Mt(fs,Fr++):0,as++,St===10&&(as=1,Zu++),St}function qi(){return Mt(fs,Fr)}function Su(){return Fr}function Wu(e,a){return ns(fs,e,a)}function u1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nw(e){return Zu=as=1,R3=bn(fs=e),Fr=0,[]}function Ow(e){return fs="",e}function Gh(e){return T3(Wu(Fr-1,f1(e===91?e+2:e===40?e+1:e)))}function Mw(e){for(;(St=qi())&&St<33;)Jr();return u1(e)>2||u1(St)>3?"":" "}function Bw(e,a){for(;--a&&Jr()&&!(St<48||St>102||St>57&&St<65||St>70&&St<97););return Wu(e,Su()+(a<6&&qi()==32&&Jr()==32))}function f1(e){for(;Jr();)switch(St){case e:return Fr;case 34:case 39:e!==34&&e!==39&&f1(St);break;case 40:e===41&&f1(e);break;case 92:Jr();break}return Fr}function Uw(e,a){for(;Jr()&&e+St!==57;)if(e+St===84&&qi()===47)break;return"/*"+Wu(a,Fr-1)+"*"+U1(e===47?e:Jr())}function Fw(e){for(;!u1(qi());)Jr();return Wu(e,Fr)}function Lw(e){return Ow(ku("",null,null,null,[""],e=Nw(e),0,[0],e))}function ku(e,a,o,s,c,u,h,p,g){for(var y=0,b=0,x=h,j=0,_=0,C=0,$=1,D=1,A=1,M=0,O="",z=c,I=u,R=s,F=O;D;)switch(C=M,M=Jr()){case 40:if(C!=108&&Mt(F,x-1)==58){_u(F+=Me(Gh(M),"&","&\f"),"&\f",E3(y?p[y-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:F+=Gh(M);break;case 9:case 10:case 13:case 32:F+=Mw(C);break;case 92:F+=Bw(Su()-1,7);continue;case 47:switch(qi()){case 42:case 47:Ml(Pw(Uw(Jr(),Su()),a,o,g),g);break;default:F+="/"}break;case 123*$:p[y++]=bn(F)*A;case 125*$:case 59:case 0:switch(M){case 0:case 125:D=0;case 59+b:A==-1&&(F=Me(F,/\f/g,"")),_>0&&bn(F)-x&&Ml(_>32?q2(F+";",s,o,x-1,g):q2(Me(F," ","")+";",s,o,x-2,g),g);break;case 59:F+=";";default:if(Ml(R=A2(F,a,o,y,b,c,p,O,z=[],I=[],x,u),u),M===123)if(b===0)ku(F,a,R,R,z,u,x,p,I);else switch(j===99&&Mt(F,3)===110?100:j){case 100:case 108:case 109:case 115:ku(e,R,R,s&&Ml(A2(e,R,R,0,0,c,p,O,c,z=[],x,I),I),c,I,x,p,s?z:I);break;default:ku(F,R,R,R,[""],I,0,p,I)}}y=b=_=0,$=A=1,O=F="",x=h;break;case 58:x=1+bn(F),_=C;default:if($<1){if(M==123)--$;else if(M==125&&$++==0&&qw()==125)continue}switch(F+=U1(M),M*$){case 38:A=b>0?1:(F+="\f",-1);break;case 44:p[y++]=(bn(F)-1)*A,A=1;break;case 64:qi()===45&&(F+=Gh(Jr())),j=qi(),b=x=bn(O=F+=Fw(Su())),M++;break;case 45:C===45&&bn(F)==2&&($=0)}}return u}function A2(e,a,o,s,c,u,h,p,g,y,b,x){for(var j=c-1,_=c===0?u:[""],C=D3(_),$=0,D=0,A=0;$<s;++$)for(var M=0,O=ns(e,j+1,j=E3(D=h[$])),z=e;M<C;++M)(z=T3(D>0?_[M]+" "+O:Me(O,/&\f/g,_[M])))&&(g[A++]=z);return Ju(e,a,o,c===0?Xu:p,g,y,b,x)}function Pw(e,a,o,s){return Ju(e,a,o,$3,U1(Aw()),ns(e,2,-2),0,s)}function q2(e,a,o,s,c){return Ju(e,a,o,B1,ns(e,0,s),ns(e,s+1,-1),s,c)}function z3(e,a,o){switch(Rw(e,a)){case 5103:return Ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+e+e;case 4789:return Ll+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+e+Ll+e+ot+e+e;case 5936:switch(Mt(e,a+11)){case 114:return Ie+e+ot+Me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ie+e+ot+Me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ie+e+ot+Me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ie+e+ot+e+e;case 6165:return Ie+e+ot+"flex-"+e+e;case 5187:return Ie+e+Me(e,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return Ie+e+ot+"flex-item-"+Me(e,/flex-|-self/g,"")+(Xn(e,/flex-|baseline/)?"":ot+"grid-row-"+Me(e,/flex-|-self/g,""))+e;case 4675:return Ie+e+ot+"flex-line-pack"+Me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ie+e+ot+Me(e,"shrink","negative")+e;case 5292:return Ie+e+ot+Me(e,"basis","preferred-size")+e;case 6060:return Ie+"box-"+Me(e,"-grow","")+Ie+e+ot+Me(e,"grow","positive")+e;case 4554:return Ie+Me(e,/([^-])(transform)/g,"$1"+Ie+"$2")+e;case 6187:return Me(Me(Me(e,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),e,"")+e;case 5495:case 3959:return Me(e,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return Me(Me(e,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+e+e;case 4200:if(!Xn(e,/flex-|baseline/))return ot+"grid-column-align"+ns(e,a)+e;break;case 2592:case 3360:return ot+Me(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(s,c){return a=c,Xn(s.props,/grid-\w+-end/)})?~_u(e+(o=o[a].value),"span",0)?e:ot+Me(e,"-start","")+e+ot+"grid-row-span:"+(~_u(o,"span",0)?Xn(o,/\d+/):+Xn(o,/\d+/)-+Xn(e,/\d+/))+";":ot+Me(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(s){return Xn(s.props,/grid-\w+-start/)})?e:ot+Me(Me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Me(e,/(.+)-inline(.+)/,Ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(e)-1-a>6)switch(Mt(e,a+1)){case 109:if(Mt(e,a+4)!==45)break;case 102:return Me(e,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+Ll+(Mt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~_u(e,"stretch",0)?z3(Me(e,"stretch","fill-available"),a,o)+e:e}break;case 5152:case 5920:return Me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,u,h,p,g,y){return ot+c+":"+u+y+(h?ot+c+"-span:"+(p?g:+g-+u)+y:"")+e});case 4949:if(Mt(e,a+6)===121)return Me(e,":",":"+Ie)+e;break;case 6444:switch(Mt(e,Mt(e,14)===45?18:11)){case 120:return Me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(Mt(e,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+ot+"$2box$3")+e;case 100:return Me(e,":",":"+ot)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Me(e,"scroll-","scroll-snap-")+e}return e}function Uu(e,a){for(var o="",s=0;s<e.length;s++)o+=a(e[s],s,e,a)||"";return o}function Hw(e,a,o,s){switch(e.type){case Dw:if(e.children.length)break;case Tw:case B1:return e.return=e.return||e.value;case $3:return"";case C3:return e.return=e.value+"{"+Uu(e.children,s)+"}";case Xu:if(!bn(e.value=e.props.join(",")))return""}return bn(o=Uu(e.children,s))?e.return=e.value+"{"+o+"}":""}function Qw(e){var a=D3(e);return function(o,s,c,u){for(var h="",p=0;p<a;p++)h+=e[p](o,s,c,u)||"";return h}}function Gw(e){return function(a){a.root||(a=a.return)&&e(a)}}function Vw(e,a,o,s){if(e.length>-1&&!e.return)switch(e.type){case B1:e.return=z3(e.value,e.length,o);return;case C3:return Uu([Oa(e,{value:Me(e.value,"@","@"+Ie)})],s);case Xu:if(e.length)return zw(o=e.props,function(c){switch(Xn(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Eo(Oa(e,{props:[Me(c,/:(read-\w+)/,":"+Ll+"$1")]})),Eo(Oa(e,{props:[c]})),d1(e,{props:z2(o,s)});break;case"::placeholder":Eo(Oa(e,{props:[Me(c,/:(plac\w+)/,":"+Ie+"input-$1")]})),Eo(Oa(e,{props:[Me(c,/:(plac\w+)/,":"+Ll+"$1")]})),Eo(Oa(e,{props:[Me(c,/:(plac\w+)/,ot+"input-$1")]})),Eo(Oa(e,{props:[c]})),d1(e,{props:z2(o,s)});break}return""})}}var Yw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_r={},is=typeof process<"u"&&_r!==void 0&&(_r.REACT_APP_SC_ATTR||_r.SC_ATTR)||"data-styled",A3="active",q3="data-styled-version",ef="6.1.19",F1=`/*!sc*/
`,Fu=typeof window<"u"&&typeof document<"u",Iw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_r!==void 0&&_r.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_r.REACT_APP_SC_DISABLE_SPEEDY!==""?_r.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_r.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_r!==void 0&&_r.SC_DISABLE_SPEEDY!==void 0&&_r.SC_DISABLE_SPEEDY!==""&&_r.SC_DISABLE_SPEEDY!=="false"&&_r.SC_DISABLE_SPEEDY),Kw={},tf=Object.freeze([]),os=Object.freeze({});function N3(e,a,o){return o===void 0&&(o=os),e.theme!==o.theme&&e.theme||a||o.theme}var O3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zw=/(^-|-$)/g;function N2(e){return e.replace(Xw,"-").replace(Zw,"")}var Jw=/(a)(d)/gi,vd=52,O2=function(e){return String.fromCharCode(e+(e>25?39:97))};function m1(e){var a,o="";for(a=Math.abs(e);a>vd;a=a/vd|0)o=O2(a%vd)+o;return(O2(a%vd)+o).replace(Jw,"$1-$2")}var Vh,M3=5381,Wo=function(e,a){for(var o=a.length;o;)e=33*e^a.charCodeAt(--o);return e},B3=function(e){return Wo(M3,e)};function L1(e){return m1(B3(e)>>>0)}function Ww(e){return e.displayName||e.name||"Component"}function Yh(e){return typeof e=="string"&&!0}var U3=typeof Symbol=="function"&&Symbol.for,F3=U3?Symbol.for("react.memo"):60115,e_=U3?Symbol.for("react.forward_ref"):60112,t_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},L3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n_=((Vh={})[e_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vh[F3]=L3,Vh);function M2(e){return("type"in(a=e)&&a.type.$$typeof)===F3?L3:"$$typeof"in e?n_[e.$$typeof]:t_;var a}var a_=Object.defineProperty,i_=Object.getOwnPropertyNames,B2=Object.getOwnPropertySymbols,o_=Object.getOwnPropertyDescriptor,s_=Object.getPrototypeOf,U2=Object.prototype;function P3(e,a,o){if(typeof a!="string"){if(U2){var s=s_(a);s&&s!==U2&&P3(e,s,o)}var c=i_(a);B2&&(c=c.concat(B2(a)));for(var u=M2(e),h=M2(a),p=0;p<c.length;++p){var g=c[p];if(!(g in r_||o&&o[g]||h&&g in h||u&&g in u)){var y=o_(a,g);try{a_(e,g,y)}catch{}}}}return e}function ss(e){return typeof e=="function"}function P1(e){return typeof e=="object"&&"styledComponentId"in e}function Ai(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function Lu(e,a){if(e.length===0)return"";for(var o=e[0],s=1;s<e.length;s++)o+=e[s];return o}function Gl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function h1(e,a,o){if(o===void 0&&(o=!1),!o&&!Gl(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var s=0;s<a.length;s++)e[s]=h1(e[s],a[s]);else if(Gl(a))for(var s in a)e[s]=h1(e[s],a[s]);return e}function H1(e,a){Object.defineProperty(e,"toString",{value:a})}function Wl(e){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var l_=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var o=0,s=0;s<a;s++)o+=this.groupSizes[s];return o},e.prototype.insertRules=function(a,o){if(a>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,u=c;a>=u;)if((u<<=1)<0)throw Wl(16,"".concat(a));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=c;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(a+1),g=(h=0,o.length);h<g;h++)this.tag.insertRule(p,o[h])&&(this.groupSizes[a]++,p++)},e.prototype.clearGroup=function(a){if(a<this.length){var o=this.groupSizes[a],s=this.indexOfGroup(a),c=s+o;this.groupSizes[a]=0;for(var u=s;u<c;u++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(a){var o="";if(a>=this.length||this.groupSizes[a]===0)return o;for(var s=this.groupSizes[a],c=this.indexOfGroup(a),u=c+s,h=c;h<u;h++)o+="".concat(this.tag.getRule(h)).concat(F1);return o},e}(),$u=new Map,Pu=new Map,Cu=1,jd=function(e){if($u.has(e))return $u.get(e);for(;Pu.has(Cu);)Cu++;var a=Cu++;return $u.set(e,a),Pu.set(a,e),a},c_=function(e,a){Cu=a+1,$u.set(e,a),Pu.set(a,e)},d_="style[".concat(is,"][").concat(q3,'="').concat(ef,'"]'),u_=new RegExp("^".concat(is,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),f_=function(e,a,o){for(var s,c=o.split(","),u=0,h=c.length;u<h;u++)(s=c[u])&&e.registerName(a,s)},m_=function(e,a){for(var o,s=((o=a.textContent)!==null&&o!==void 0?o:"").split(F1),c=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var g=p.match(u_);if(g){var y=0|parseInt(g[1],10),b=g[2];y!==0&&(c_(b,y),f_(e,b,g[3]),e.getTag().insertRules(y,c)),c.length=0}else c.push(p)}}},F2=function(e){for(var a=document.querySelectorAll(d_),o=0,s=a.length;o<s;o++){var c=a[o];c&&c.getAttribute(is)!==A3&&(m_(e,c),c.parentNode&&c.parentNode.removeChild(c))}};function h_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var H3=function(e){var a=document.head,o=e||a,s=document.createElement("style"),c=function(p){var g=Array.from(p.querySelectorAll("style[".concat(is,"]")));return g[g.length-1]}(o),u=c!==void 0?c.nextSibling:null;s.setAttribute(is,A3),s.setAttribute(q3,ef);var h=h_();return h&&s.setAttribute("nonce",h),o.insertBefore(s,u),s},p_=function(){function e(a){this.element=H3(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,c=0,u=s.length;c<u;c++){var h=s[c];if(h.ownerNode===o)return h}throw Wl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(a,o){try{return this.sheet.insertRule(o,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var o=this.sheet.cssRules[a];return o&&o.cssText?o.cssText:""},e}(),g_=function(){function e(a){this.element=H3(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,o){if(a<=this.length&&a>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),y_=function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,o){return a<=this.length&&(this.rules.splice(a,0,o),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),L2=Fu,b_={isServer:!Fu,useCSSOMInjection:!Iw},Hu=function(){function e(a,o,s){a===void 0&&(a=os),o===void 0&&(o={});var c=this;this.options=Zt(Zt({},b_),a),this.gs=o,this.names=new Map(s),this.server=!!a.isServer,!this.server&&Fu&&L2&&(L2=!1,F2(this)),H1(this,function(){return function(u){for(var h=u.getTag(),p=h.length,g="",y=function(x){var j=function(A){return Pu.get(A)}(x);if(j===void 0)return"continue";var _=u.names.get(j),C=h.getGroup(x);if(_===void 0||!_.size||C.length===0)return"continue";var $="".concat(is,".g").concat(x,'[id="').concat(j,'"]'),D="";_!==void 0&&_.forEach(function(A){A.length>0&&(D+="".concat(A,","))}),g+="".concat(C).concat($,'{content:"').concat(D,'"}').concat(F1)},b=0;b<p;b++)y(b);return g}(c)})}return e.registerId=function(a){return jd(a)},e.prototype.rehydrate=function(){!this.server&&Fu&&F2(this)},e.prototype.reconstructWithOptions=function(a,o){return o===void 0&&(o=!0),new e(Zt(Zt({},this.options),a),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=function(o){var s=o.useCSSOMInjection,c=o.target;return o.isServer?new y_(c):s?new p_(c):new g_(c)}(this.options),new l_(a)));var a},e.prototype.hasNameForId=function(a,o){return this.names.has(a)&&this.names.get(a).has(o)},e.prototype.registerName=function(a,o){if(jd(a),this.names.has(a))this.names.get(a).add(o);else{var s=new Set;s.add(o),this.names.set(a,s)}},e.prototype.insertRules=function(a,o,s){this.registerName(a,o),this.getTag().insertRules(jd(a),s)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(jd(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e}(),x_=/&/g,v_=/^\s*\/\/.*$/gm;function Q3(e,a){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(a," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(a," ")),o.props=o.props.map(function(s){return"".concat(a," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Q3(o.children,a)),o})}function j_(e){var a,o,s,c=os,u=c.options,h=u===void 0?os:u,p=c.plugins,g=p===void 0?tf:p,y=function(j,_,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(a):j},b=g.slice();b.push(function(j){j.type===Xu&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(x_,o).replace(s,y))}),h.prefix&&b.push(Vw),b.push(Hw);var x=function(j,_,C,$){_===void 0&&(_=""),C===void 0&&(C=""),$===void 0&&($="&"),a=$,o=_,s=new RegExp("\\".concat(o,"\\b"),"g");var D=j.replace(v_,""),A=Lw(C||_?"".concat(C," ").concat(_," { ").concat(D," }"):D);h.namespace&&(A=Q3(A,h.namespace));var M=[];return Uu(A,Qw(b.concat(Gw(function(O){return M.push(O)})))),M};return x.hash=g.length?g.reduce(function(j,_){return _.name||Wl(15),Wo(j,_.name)},M3).toString():"",x}var w_=new Hu,p1=j_(),G3=tt.createContext({shouldForwardProp:void 0,styleSheet:w_,stylis:p1});G3.Consumer;tt.createContext(void 0);function g1(){return S.useContext(G3)}var V3=function(){function e(a,o){var s=this;this.inject=function(c,u){u===void 0&&(u=p1);var h=s.name+u.hash;c.hasNameForId(s.id,h)||c.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=o,H1(this,function(){throw Wl(12,String(s.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=p1),this.name+a.hash},e}(),__=function(e){return e>="A"&&e<="Z"};function P2(e){for(var a="",o=0;o<e.length;o++){var s=e[o];if(o===1&&s==="-"&&e[0]==="-")return e;__(s)?a+="-"+s.toLowerCase():a+=s}return a.startsWith("ms-")?"-"+a:a}var Y3=function(e){return e==null||e===!1||e===""},I3=function(e){var a,o,s=[];for(var c in e){var u=e[c];e.hasOwnProperty(c)&&!Y3(u)&&(Array.isArray(u)&&u.isCss||ss(u)?s.push("".concat(P2(c),":"),u,";"):Gl(u)?s.push.apply(s,rs(rs(["".concat(c," {")],I3(u),!1),["}"],!1)):s.push("".concat(P2(c),": ").concat((a=c,(o=u)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||a in Yw||a.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function La(e,a,o,s){if(Y3(e))return[];if(P1(e))return[".".concat(e.styledComponentId)];if(ss(e)){if(!ss(u=e)||u.prototype&&u.prototype.isReactComponent||!a)return[e];var c=e(a);return La(c,a,o,s)}var u;return e instanceof V3?o?(e.inject(o,s),[e.getName(s)]):[e]:Gl(e)?I3(e):Array.isArray(e)?Array.prototype.concat.apply(tf,e.map(function(h){return La(h,a,o,s)})):[e.toString()]}function K3(e){for(var a=0;a<e.length;a+=1){var o=e[a];if(ss(o)&&!P1(o))return!1}return!0}var S_=B3(ef),k_=function(){function e(a,o,s){this.rules=a,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&K3(a),this.componentId=o,this.baseHash=Wo(S_,o),this.baseStyle=s,Hu.registerId(o)}return e.prototype.generateAndInjectStyles=function(a,o,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Ai(c,this.staticRulesId);else{var u=Lu(La(this.rules,a,o,s)),h=m1(Wo(this.baseHash,u)>>>0);if(!o.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,p)}c=Ai(c,h),this.staticRulesId=h}else{for(var g=Wo(this.baseHash,s.hash),y="",b=0;b<this.rules.length;b++){var x=this.rules[b];if(typeof x=="string")y+=x;else if(x){var j=Lu(La(x,a,o,s));g=Wo(g,j+b),y+=j}}if(y){var _=m1(g>>>0);o.hasNameForId(this.componentId,_)||o.insertRules(this.componentId,_,s(y,".".concat(_),void 0,this.componentId)),c=Ai(c,_)}}return c},e}(),Q1=tt.createContext(void 0);Q1.Consumer;var Ih={};function $_(e,a,o){var s=P1(e),c=e,u=!Yh(e),h=a.attrs,p=h===void 0?tf:h,g=a.componentId,y=g===void 0?function(z,I){var R=typeof z!="string"?"sc":N2(z);Ih[R]=(Ih[R]||0)+1;var F="".concat(R,"-").concat(L1(ef+R+Ih[R]));return I?"".concat(I,"-").concat(F):F}(a.displayName,a.parentComponentId):g,b=a.displayName,x=b===void 0?function(z){return Yh(z)?"styled.".concat(z):"Styled(".concat(Ww(z),")")}(e):b,j=a.displayName&&a.componentId?"".concat(N2(a.displayName),"-").concat(a.componentId):a.componentId||y,_=s&&c.attrs?c.attrs.concat(p).filter(Boolean):p,C=a.shouldForwardProp;if(s&&c.shouldForwardProp){var $=c.shouldForwardProp;if(a.shouldForwardProp){var D=a.shouldForwardProp;C=function(z,I){return $(z,I)&&D(z,I)}}else C=$}var A=new k_(o,j,s?c.componentStyle:void 0);function M(z,I){return function(R,F,ie){var K=R.attrs,ue=R.componentStyle,X=R.defaultProps,H=R.foldedComponentIds,oe=R.styledComponentId,ce=R.target,Y=tt.useContext(Q1),N=g1(),ne=R.shouldForwardProp||N.shouldForwardProp,pe=N3(F,Y,X)||os,te=function(ye,ve,Le){for(var Ce,rt=Zt(Zt({},ve),{className:void 0,theme:Le}),nt=0;nt<ye.length;nt+=1){var Ft=ss(Ce=ye[nt])?Ce(rt):Ce;for(var Dt in Ft)rt[Dt]=Dt==="className"?Ai(rt[Dt],Ft[Dt]):Dt==="style"?Zt(Zt({},rt[Dt]),Ft[Dt]):Ft[Dt]}return ve.className&&(rt.className=Ai(rt.className,ve.className)),rt}(K,F,pe),k=te.as||ce,Z={};for(var se in te)te[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&te.theme===pe||(se==="forwardedAs"?Z.as=te.forwardedAs:ne&&!ne(se,k)||(Z[se]=te[se]));var de=function(ye,ve){var Le=g1(),Ce=ye.generateAndInjectStyles(ve,Le.styleSheet,Le.stylis);return Ce}(ue,te),J=Ai(H,oe);return de&&(J+=" "+de),te.className&&(J+=" "+te.className),Z[Yh(k)&&!O3.has(k)?"class":"className"]=J,ie&&(Z.ref=ie),S.createElement(k,Z)}(O,z,I)}M.displayName=x;var O=tt.forwardRef(M);return O.attrs=_,O.componentStyle=A,O.displayName=x,O.shouldForwardProp=C,O.foldedComponentIds=s?Ai(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=j,O.target=s?c.target:e,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=s?function(I){for(var R=[],F=1;F<arguments.length;F++)R[F-1]=arguments[F];for(var ie=0,K=R;ie<K.length;ie++)h1(I,K[ie],!0);return I}({},c.defaultProps,z):z}}),H1(O,function(){return".".concat(O.styledComponentId)}),u&&P3(O,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function H2(e,a){for(var o=[e[0]],s=0,c=a.length;s<c;s+=1)o.push(a[s],e[s+1]);return o}var Q2=function(e){return Object.assign(e,{isCss:!0})};function rr(e){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];if(ss(e)||Gl(e))return Q2(La(H2(tf,rs([e],a,!0))));var s=e;return a.length===0&&s.length===1&&typeof s[0]=="string"?La(s):Q2(La(H2(s,a)))}function y1(e,a,o){if(o===void 0&&(o=os),!a)throw Wl(1,a);var s=function(c){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return e(a,o,rr.apply(void 0,rs([c],u,!1)))};return s.attrs=function(c){return y1(e,a,Zt(Zt({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return y1(e,a,Zt(Zt({},o),c))},s}var X3=function(e){return y1($_,e)},f=X3;O3.forEach(function(e){f[e]=X3(e)});var C_=function(){function e(a,o){this.rules=a,this.componentId=o,this.isStatic=K3(a),Hu.registerId(this.componentId+1)}return e.prototype.createStyles=function(a,o,s,c){var u=c(Lu(La(this.rules,o,s,c)),""),h=this.componentId+a;s.insertRules(h,h,u)},e.prototype.removeStyles=function(a,o){o.clearRules(this.componentId+a)},e.prototype.renderStyles=function(a,o,s,c){a>2&&Hu.registerId(this.componentId+a),this.removeStyles(a,s),this.createStyles(a,o,s,c)},e}();function E_(e){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];var s=rr.apply(void 0,rs([e],a,!1)),c="sc-global-".concat(L1(JSON.stringify(s))),u=new C_(s,c),h=function(g){var y=g1(),b=tt.useContext(Q1),x=tt.useRef(y.styleSheet.allocateGSInstance(c)).current;return y.styleSheet.server&&p(x,g,y.styleSheet,b,y.stylis),tt.useLayoutEffect(function(){if(!y.styleSheet.server)return p(x,g,y.styleSheet,b,y.stylis),function(){return u.removeStyles(x,y.styleSheet)}},[x,g,y.styleSheet,b,y.stylis]),null};function p(g,y,b,x,j){if(u.isStatic)u.renderStyles(g,Kw,b,j);else{var _=Zt(Zt({},y),{theme:N3(y,x,h.defaultProps)});u.renderStyles(g,_,b,j)}}return tt.memo(h)}function Z3(e){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];var s=Lu(rr.apply(void 0,rs([e],a,!1))),c=L1(s);return new V3(c,s)}const rf="/api/branch_soldiers";async function T_(e){const a=await fetch(rf,{method:"POST",body:e});if(!a.ok){const o=await a.json().catch(()=>({error:"Server error"}));throw new Error(o.error||"فشل في إضافة الجندي")}return await a.json()}async function D_(e){const a=await fetch(`${rf}?branch=${encodeURIComponent(e)}&order=asc`);if(!a.ok)throw new Error("فشل تحميل بيانات الجنود");return await a.json()}async function R_(e){const a=await fetch(`${rf}/${e}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>({error:"Server error"}));throw new Error(o.error||"فشل حذف الجندي")}return e}async function z_(){const e=await fetch(`${rf}?order=asc`);if(!e.ok)throw new Error("فشل تحميل البيانات");return await e.json()}function A_(e){return je({queryKey:["branch_soldiers",e],queryFn:()=>D_(e)})}function q_(){const e=Te();return Re({mutationFn:T_,onSuccess:a=>{W.success("تمت إضافة الجندي بنجاح"),e.invalidateQueries(["branch_soldiers",a.branch])},onError:()=>W.error("حدث خطأ أثناء الإضافة")})}function N_(){const e=Te();return Re({mutationFn:R_,onSuccess:()=>{W.success("تم الحذف بنجاح"),e.invalidateQueries({queryKey:["branch_soldiers"]})},onError:()=>W.error("حدث خطأ أثناء الحذف")})}function O_(){return je({queryKey:["soldiers"],queryFn:z_})}const M_=Z3`
  to {
    transform: rotate(1turn)
  }
`,Ae=f.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${M_} 1.5s infinite linear;
`,B_=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;

  min-width: 115rem;
  @media print {
    min-width: auto !important;
  }
`,U_=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,F_=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,L_=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,hi=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,pi=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,gi=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,yi=f.p`
  color: red;
  font-size: 1.2rem;
  margin-top: 0.3rem;
`,P_=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  flex-basis: 100%;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,H_=f.button`
  background: var(--color-brand-700);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`,Q_=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
`,G_=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
  min-width: 800px;
`,V_=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Un=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,on=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,Y_=f.button`
  background-color: #dc2626;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #b91c1c;
  }
`;function G2(e){if(!e)return"—";const a=new Date(e),o=String(a.getDate()).padStart(2,"0"),s=String(a.getMonth()+1).padStart(2,"0"),c=a.getFullYear();return`${o}/${s}/${c}`}function ms({branch:e,title:a}){const{data:o,isPending:s}=A_(e),{mutateAsync:c,isPending:u}=q_(),{mutate:h,isPending:p}=N_(),[g,y]=S.useState(!1),{register:b,handleSubmit:x,reset:j,formState:{errors:_}}=Ut();if(s)return r.jsx(Ae,{});async function C($){try{const D=new FormData;["name","police_number","address","qualification","batch_date","reserve_date"].forEach(M=>{$[M]&&D.append(M,$[M])}),D.append("branch",e),$.image_file&&$.image_file.length>0&&D.append("file",$.image_file[0]),await c(D),j(),y(!1)}catch(D){W.error(D.message||"حدث خطأ أثناء الإضافة")}}return r.jsxs(B_,{children:[r.jsx(U_,{children:a}),r.jsx(H_,{onClick:()=>y($=>!$),children:g?"✖️ إغلاق":"➕ إضافة مجند"}),g&&r.jsx(F_,{children:r.jsxs(L_,{onSubmit:x(C),children:[r.jsxs(hi,{children:[r.jsx(pi,{children:"الاسم"}),r.jsx(gi,{...b("name",{required:"الاسم مطلوب"})}),_?.name&&r.jsx(yi,{children:_?.name.message})]}),r.jsxs(hi,{children:[r.jsx(pi,{children:"رقم الشرطة"}),r.jsx(gi,{...b("police_number",{required:"رقم الشرطة مطلوب"})}),_?.police_number&&r.jsx(yi,{children:_?.police_number.message})]}),r.jsxs(hi,{children:[r.jsx(pi,{children:"العنوان"}),r.jsx(gi,{...b("address",{required:"العنوان مطلوب"})}),_?.address&&r.jsx(yi,{children:_?.address.message})]}),r.jsxs(hi,{children:[r.jsx(pi,{children:"المؤهل"}),r.jsx(gi,{...b("qualification",{required:"المؤهل مطلوب"})}),_?.qualification&&r.jsx(yi,{children:_?.qualification.message})]}),r.jsxs(hi,{children:[r.jsx(pi,{children:"تاريخ الدفعة"}),r.jsx(gi,{type:"date",...b("batch_date",{required:"تاريخ الدفعة مطلوب"})}),_?.batch_date&&r.jsx(yi,{children:_?.batch_date.message})]}),r.jsxs(hi,{children:[r.jsx(pi,{children:"تاريخ الرديف"}),r.jsx(gi,{type:"date",...b("reserve_date",{required:"تاريخ الرديف مطلوب"})}),_?.reserve_date&&r.jsx(yi,{children:_?.reserve_date.message})]}),r.jsxs(hi,{children:[r.jsx(pi,{children:"صورة الجندي"}),r.jsx(gi,{type:"file",accept:"image/*",...b("image_file",{required:"يجب اختيار صورة"})}),_?.image_file&&r.jsx(yi,{children:_?.image_file.message})]}),r.jsx(P_,{type:"submit",disabled:u,children:u?"جارٍ الإضافة...":"✔️ إضافة"})]})}),r.jsx(Q_,{children:r.jsxs(G_,{children:[r.jsx(V_,{children:r.jsxs("tr",{children:[r.jsx(Un,{children:"م"}),r.jsx(Un,{children:"الاسم"}),r.jsx(Un,{children:"رقم الشرطة"}),r.jsx(Un,{children:"العنوان"}),r.jsx(Un,{children:"المؤهل"}),r.jsx(Un,{children:"تاريخ الدفعة"}),r.jsx(Un,{children:"تاريخ الرديف"}),r.jsx(Un,{children:"الصورة"}),r.jsx(Un,{children:"حذف"})]})}),r.jsx("tbody",{children:o?.length===0?r.jsx("tr",{children:r.jsx(on,{colSpan:"9",children:"لا يوجد بيانات"})}):o?.map(($,D)=>r.jsxs("tr",{children:[r.jsx(on,{children:D+1}),r.jsx(on,{children:$.name}),r.jsx(on,{children:$.police_number}),r.jsx(on,{children:$.address}),r.jsx(on,{children:$.qualification}),r.jsx(on,{children:G2($.batch_date)}),r.jsxs(on,{style:{color:new Date($.reserve_date)-new Date<=1e3*60*60*24*60?"red":"inherit",fontWeight:new Date($.reserve_date)-new Date<=1e3*60*60*24*60?"700":"400"},children:[G2($.reserve_date)," ",new Date($.reserve_date)-new Date<=1e3*60*60*24*60&&"🚨"]}),r.jsx(on,{children:$.image_url?r.jsx("img",{src:$.image_url.startsWith("/")?window.location.origin+$.image_url:$.image_url,alt:$.name,width:"50",height:"50"}):"—"}),r.jsx(on,{children:r.jsx(Y_,{disabled:p,onClick:()=>{window.confirm("هل أنت متأكد من حذف هذا الجندي؟")&&h($.id)},children:"🗑"})})]},$.id))})]})})]})}function I_(){return r.jsx(ms,{branch:"الشئون الإدارية",title:"الشئون الإدارية"})}async function K_(){const e=await fetch("/api/soldiers?order=asc");if(!e.ok){const a=await e.json().catch(()=>null);throw new Error(a?.error||e.statusText||"Fetch error")}return e.json()}async function X_(e){const a=await fetch("/api/soldiers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||a.statusText||"Create failed")}return a.json()}async function Z_(e){const a=await fetch(`/api/soldiers/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||a.statusText||"Delete failed")}}function J_(){const{data:e,isPending:a,error:o}=je({queryKey:["soldiers"],queryFn:K_});return{soldiers:e,isPending:a,error:o}}function W_(){const e=Te(),{mutate:a,isPending:o}=Re({mutationFn:X_,onSuccess:()=>{W.success("تمت الإضافة بنجاح"),e.invalidateQueries(["soldiers"])},onError:()=>W.error("حدث خطأ")});return{addSoldier:a,isPending:o}}function e9(){const e=Te(),{mutate:a,isPending:o}=Re({mutationFn:Z_,onSuccess:()=>{W.success("تم الحذف بنجاح"),e.invalidateQueries(["soldiers"])},onError:()=>W.error("فشل الحذف")});return{deleteSoldier:a,isPending:o}}const t9=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;

  min-width: 95rem;
  @media print {
    min-width: auto !important;
  }
`,r9=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,n9=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 1rem;
`,a9=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,i9=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,bi=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,o9=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,$a=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,s9=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
`,l9=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-top: 1rem;

  label {
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    color: var(--color-grey-700);
  }

  input {
    background-color: var(--color-grey-0);
    padding: 0.8rem 1rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 0.6rem;
    font-size: 1.4rem;
    margin-top: 0.4rem;
    width: 100%;
  }

  p {
    color: red;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0;
    display: block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    background: var(--color-brand-600);
    color: white;
    border: none;
    padding: 0.8rem 1.6rem;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    cursor: pointer;
    flex-basis: 100%;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,c9=f.button`
  background: var(--color-brand-700);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`,d9=f.button`
  background-color: #dc2626;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b91c1c;
  }

  &:disabled {
    background-color: #f87171;
    cursor: not-allowed;
  }
`;function u9(){const{soldiers:e,isPending:a}=J_(),{addSoldier:o,isPending:s}=W_(),{deleteSoldier:c,isPending:u}=e9(),[h,p]=S.useState(!1),{register:g,handleSubmit:y,reset:b,formState:{errors:x}}=Ut();if(a)return r.jsx(Ae,{});function j(_){o(_,{onSuccess:()=>{b(),p(!1)}})}return r.jsxs(t9,{children:[r.jsx(r9,{children:"الأفراد"}),r.jsx(c9,{onClick:()=>p(_=>!_),children:h?"✖️  إغلاق":"➕  إضافة فرد"}),h&&r.jsx(s9,{children:r.jsxs(l9,{onSubmit:y(j),children:[r.jsxs("label",{children:["الدرجة",r.jsx("input",{type:"text",...g("rank",{required:"الدرجة مطلوبة"})}),x?.rank&&r.jsx("p",{children:x.rank?.message})]}),r.jsxs("label",{children:["الاسم",r.jsx("input",{type:"text",...g("name",{required:"الاسم مطلوب"})}),x?.name&&r.jsx("p",{children:x.name?.message})]}),r.jsxs("label",{children:["الأقدمية",r.jsx("input",{type:"text",...g("seniority",{required:"الأقدمية مطلوبة"})}),x?.seniority&&r.jsx("p",{children:x.seniority?.message})]}),r.jsxs("label",{children:["تاريخ التعيين",r.jsx("input",{type:"date",...g("appointmentDate",{required:"تاريخ التعيين مطلوب"})}),x?.appointmentDate&&r.jsx("p",{children:x.appointmentDate?.message})]}),r.jsxs("label",{children:["رقم التليفون",r.jsx("input",{type:"text",...g("phone",{required:"رقم التليفون مطلوب",pattern:{value:/^[0-9]{10,15}$/,message:"رقم التليفون غير صحيح"}})}),x?.phone&&r.jsx("p",{children:x.phone?.message})]}),r.jsx("button",{type:"submit",disabled:s,children:s?"جارٍ الإضافة...":"✔️ إضافة"})]})}),r.jsx(n9,{children:r.jsxs(a9,{children:[r.jsx(i9,{children:r.jsxs("tr",{children:[r.jsx(bi,{children:"م"}),r.jsx(bi,{children:"الدرجة"}),r.jsx(bi,{children:"الاسم"}),r.jsx(bi,{children:"الأقدمية"}),r.jsx(bi,{children:"تاريخ التعيين"}),r.jsx(bi,{children:"رقم التليفون"}),r.jsx(bi,{children:"إجراءات"})]})}),r.jsx(o9,{children:e.length===0?r.jsx("tr",{children:r.jsx($a,{colSpan:"7",children:"لا يوجد بيانات"})}):e?.map((_,C)=>r.jsxs("tr",{children:[r.jsx($a,{children:C+1}),r.jsx($a,{children:_?.rank}),r.jsx($a,{children:_?.name}),r.jsx($a,{children:_?.seniority}),r.jsx($a,{children:_?.appointmentDate}),r.jsx($a,{children:_?.phone}),r.jsx($a,{children:r.jsx(d9,{disabled:u,onClick:()=>{window.confirm("هل أنت متأكد من حذف هذا الفرد؟")&&c(_?.id)},children:"🗑"})})]},C))})]})})]})}const f9=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,m9=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,h9=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,p9=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,g9=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,y9=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function b9(){const e=[{title:"المقرر الصيفي",path:"summer"},{title:"المقرر الشتوي",path:"winter"},{title:"شهر رمضان",path:"ramadan"}];return r.jsxs(f9,{children:[r.jsx(m9,{children:"المقررات"}),r.jsx(h9,{children:e.map(a=>r.jsx(p9,{to:`/rations/stores/allocations/${a.path}`,children:r.jsx(g9,{children:r.jsx(y9,{children:a.title})})},a.path))})]})}const x9=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,V2=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,v9=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  direction: rtl;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Y2=f(Gt)`
  text-decoration: none;
  color: inherit;
`,I2=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,K2=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function j9(){return r.jsxs(x9,{children:[r.jsxs("div",{children:[r.jsx(V2,{style:{fontSize:"2.9rem",fontWeight:"900",margin:0},children:"مخزن ( ج )"}),r.jsx(V2,{children:"اللحوم / ضابط عظيم"})]}),r.jsxs(v9,{children:[r.jsx(Y2,{to:"/rations/stores/azim-meats/meat-meals",children:r.jsx(I2,{children:r.jsx(K2,{children:"مخزن اللحوم"})})}),r.jsx(Y2,{to:"/rations/stores/azim-meats/azim",children:r.jsx(I2,{children:r.jsx(K2,{children:"ضابط عظيم"})})})]})]})}async function w9(e){try{const a=await fetch(`/api/dry_items_withdrawals?date=${encodeURIComponent(e)}`);if(!a.ok)throw new Error("فشل جلب بيانات الجاف");const o=await a.json(),s=await fetch(`/api/items_withdrawals?date=${encodeURIComponent(e)}`);if(!s.ok)throw new Error("فشل جلب بيانات الطازج");const c=await s.json();return{dryData:Array.isArray(o)?o:[],freshData:Array.isArray(c)?c:[]}}catch(a){return console.error("❌ getAzimStoreData error:",a),W.error("فشل في جلب بيانات صرف اليومية"),{dryData:[],freshData:[]}}}function _9(e){return je({queryKey:["azim-store",e],queryFn:()=>w9(e),onError:a=>{console.error("useAzimStoreByDate error:",a),W.error("حدث خطأ أثناء تحميل بيانات اليومية")}})}async function Tt(e,a){const o=await fetch(e,a);if(!o.ok)throw new Error("request failed");return o.json()}async function Ua({table:e,oldDate:a,newDate:o,oldValue:s,newValue:c}){const u=async g=>{const y=await Tt(`/api/${e}?date=${encodeURIComponent(g)}&limit=1`);return Array.isArray(y)&&y.length?y[0]:null};if(a===o){const g=await u(o);if(!g)throw new Error("row not found");return Tt(`/api/${e}/${g.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({income:Number(g.income||0)+(c-s),current:Number(g.current||0)+(c-s)})})}const h=await u(a);h&&await Tt(`/api/${e}/${h.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({income:Number(h.income||0)-s,current:Number(h.current||0)-s})});const p=await u(o);if(!p)throw new Error("new date row not found");return Tt(`/api/${e}/${p.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({income:Number(p.income||0)+c,current:Number(p.current||0)+c})})}async function J3(e){return Tt(`/api/flour?date=${e}`)}async function S9(e){return Tt(`/api/bakery_incoming/${e}`)}async function k9(e){const a=await Tt(`/api/bakery_incoming?date=${e}`);return a.length?a[0]:null}async function $9(e){const a=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),o=`/api/bakery_incoming?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}`,s=await fetch(o);if(!s.ok){const u=await s.json().catch(()=>null);throw new Error(u?.error||"فشل تحميل البيانات")}const c=await s.json();return Array.isArray(c)&&c.length?c:null}async function nf(){return(await Tt("/api/bakery_stock_single?limit=1"))?.[0]||null}async function C9(e){const a=await nf();return a?.id?Tt(`/api/bakery_stock_single/${a.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}):Tt("/api/bakery_stock_single",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}async function E9(e){const a=await fetch(`/api/bakery_incoming/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}async function G1(e){const a=await nf(),o={flour_qty:Number(a?.flour_qty||0)+Number(e.flour_delta||0),flour_unit:e.flour_unit??a?.flour_unit??null,bran_qty:Number(a?.bran_qty||0)+Number(e.bran_delta||0),bran_unit:e.bran_unit??a?.bran_unit??null,salt_qty:Number(a?.salt_qty||0)+Number(e.salt_delta||0),salt_unit:e.salt_unit??a?.salt_unit??null,yeast_qty:Number(a?.yeast_qty||0)+Number(e.yeast_delta||0),yeast_unit:e.yeast_unit??a?.yeast_unit??null};return C9(o)}async function T9(e){const a=await nf(),o=Number(e.flour_qty_output||0),s=Number(e.bran_qty_output||0),c=Number(e.salt_qty_output||0),u=Number(e.yeast_qty_output||0);if(a?.id){const p={flour_qty:Number(a.flour_qty||0)-o,bran_qty:Number(a.bran_qty||0)-s,salt_qty:Number(a.salt_qty||0)-c,yeast_qty:Number(a.yeast_qty||0)-u,flour_unit:a.flour_unit,bran_unit:a.bran_unit,salt_unit:a.salt_unit,yeast_unit:a.yeast_unit};return Tt(`/api/bakery_stock_single/${a.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})}const h={flour_qty:0-o,bran_qty:0-s,salt_qty:0-c,yeast_qty:0-u,flour_unit:e.flour_unit??null,bran_unit:e.bran_unit??null,salt_unit:e.salt_unit??null,yeast_unit:e.yeast_unit??null};return Tt("/api/bakery_stock_single",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})}async function D9(e){return Tt("/api/bakery_incoming",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}async function R9({id:e,payload:a}){return Tt(`/api/bakery_incoming/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}async function z9(){return await Tt("/api/bakery_incoming?limit=31&order_by=date&order=desc")||[]}function A9(){const e=je({queryKey:["bakery-incoming"],queryFn:z9});return{data:e.data??[],isPending:e.isPending,isError:e.isError}}function q9(){const e=Te();return Re({mutationFn:D9,onSuccess:async(o,s)=>{try{await G1({flour_delta:Number(s.flour_qty||0),flour_unit:s.flour_unit,bran_delta:Number(s.bran_qty||0),bran_unit:s.bran_unit,salt_delta:Number(s.salt_qty||0),salt_unit:s.salt_unit,yeast_delta:Number(s.yeast_qty||0),yeast_unit:s.yeast_unit}),await Tt("/api/bakery/apply-incoming-to-daily",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:s.date,items:{flour:Number(s.flour_qty||0),bran:Number(s.bran_qty||0),yeast:Number(s.yeast_qty||0),salt:Number(s.salt_qty||0)}})});const c=await J3(s.date);c.length>0&&await Promise.all([Ua({table:"flour",oldDate:s.date,newDate:s.date,oldValue:0,newValue:Number(s.flour_qty||0)}),Ua({table:"bran",oldDate:s.date,newDate:s.date,oldValue:0,newValue:Number(s.bran_qty||0)}),Ua({table:"yeast",oldDate:s.date,newDate:s.date,oldValue:0,newValue:Number(s.yeast_qty||0)}),Ua({table:"salt",oldDate:s.date,newDate:s.date,oldValue:0,newValue:Number(s.salt_qty||0)})]),e.invalidateQueries(["bakery-incoming"]),e.invalidateQueries(["bakery-stock-single"]),e.invalidateQueries(["flour"]),e.invalidateQueries(["bran"]),e.invalidateQueries(["yeast"]),e.invalidateQueries(["salt"]),W.success("تمت الإضافة بنجاح"),c.length>0&&W.success("تم تحديث عمليات الصرف")}catch(c){console.error("stock update failed after add:",c),W.error("تمت الإضافة لكن فشل تحديث المخزون")}},onError:()=>W.error("حدث خطأ")})}function N9(){const e=Te();return Re({mutationFn:R9,onMutate:async o=>{const s=await S9(o.id),c={flour_delta:Number(o.payload.flour_qty||0)-Number(s.flour_qty||0),bran_delta:Number(o.payload.bran_qty||0)-Number(s.bran_qty||0),salt_delta:Number(o.payload.salt_qty||0)-Number(s.salt_qty||0),yeast_delta:Number(o.payload.yeast_qty||0)-Number(s.yeast_qty||0),flour_unit:o.payload.flour_unit??s.flour_unit,bran_unit:o.payload.bran_unit??s.bran_unit,salt_unit:o.payload.salt_unit??s.salt_unit,yeast_unit:o.payload.yeast_unit??s.yeast_unit};return{old:s,deltas:c}},onSuccess:async(o,s,c)=>{const u=c.deltas;try{await G1(u);const h=c.old.date,p=s.payload.date;h!==p?(await Tt("/api/bakery/apply-incoming-to-daily",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:h,items:{flour:-Number(c.old.flour_qty||0),bran:-Number(c.old.bran_qty||0),yeast:-Number(c.old.yeast_qty||0),salt:-Number(c.old.salt_qty||0)}})}),await Tt("/api/bakery/apply-incoming-to-daily",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:p,items:{flour:Number(s.payload.flour_qty??c.old.flour_qty??0),bran:Number(s.payload.bran_qty??c.old.bran_qty??0),yeast:Number(s.payload.yeast_qty??c.old.yeast_qty??0),salt:Number(s.payload.salt_qty??c.old.salt_qty??0)}})})):await Tt("/api/bakery/apply-incoming-to-daily",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:p,items:{flour:u.flour_delta,bran:u.bran_delta,yeast:u.yeast_delta,salt:u.salt_delta}})});const y=await J3(s.payload.date);y.length>0&&await Promise.all([Ua({table:"flour",oldDate:c.old.date,newDate:s.payload.date,oldValue:Number(c.old.flour_qty||0),newValue:Number(s.payload.flour_qty??c.old.flour_qty??0)}),Ua({table:"bran",oldDate:c.old.date,newDate:s.payload.date,oldValue:Number(c.old.bran_qty||0),newValue:Number(s.payload.bran_qty??c.old.bran_qty??0)}),Ua({table:"yeast",oldDate:c.old.date,newDate:s.payload.date,oldValue:Number(c.old.yeast_qty||0),newValue:Number(s.payload.yeast_qty??c.old.yeast_qty??0)}),Ua({table:"salt",oldDate:c.old.date,newDate:s.payload.date,oldValue:Number(c.old.salt_qty||0),newValue:Number(s.payload.salt_qty??c.old.salt_qty??0)})]),e.invalidateQueries(["bakery-incoming"]),e.invalidateQueries(["bakery-stock-single"]),e.invalidateQueries(["flour"]),e.invalidateQueries(["bran"]),e.invalidateQueries(["yeast"]),e.invalidateQueries(["salt"]),y.length>0&&W.success("تم تحديث عمليات الصرف")}catch(h){console.error("stock update failed after update:",h)}},onError:()=>W.error("حدث خطأ")})}function O9(){const e=Te();return Re({mutationFn:T9,onSuccess:()=>{e.invalidateQueries(["bakery-stock-single"])},onError:o=>{console.error("consume failed:",o),W.error("فشل تحديث المخزون")}})}function M9(){const e=Te();return Re({mutationFn:E9,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"});function B9(e){const a=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${a}-${o}-${s}`}async function ec(e){const a=await fetch(e);if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"Request failed")}return a.json()}async function pl(e,a){const o=await fetch(`/api/${e}/${encodeURIComponent(a)}`,{method:"DELETE"});if(!o.ok){const s=await o.json().catch(()=>null);throw new Error(s?.error||`فشل حذف من ${e}`)}return!0}async function U9(){return(await ec("/api/numbers_report?order_by=date&order=desc&limit=1"))?.[0]||null}async function F9(e){return(await ec(`/api/numbers_report?date=${e}&order_by=created_at&order=asc`))?.[0]||null}async function L9(e,a){return await ec(`/api/numbers_report?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}&order_by=date&order=asc`)}async function P9(){const e=new Date;e.setDate(1);const a=B9(e);return await ec(`/api/numbers_report?date_from=${encodeURIComponent(a)}&order_by=created_at&order=asc`)}async function H9(e){const a=await fetch("/api/numbers_report",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل إضافة السجل")}return a.json()}async function Q9(e,a){const o=await ec(`/api/bakery_output/${encodeURIComponent(e)}`).catch(()=>null);o&&o.id===e&&(await pl("bakery_output",o.id),await G1({flour_delta:Number(o.flour_qty_output||0),flour_unit:o.flour_unit??null,bran_delta:Number(o.bran_qty_output||0),bran_unit:o.bran_unit??null,salt_delta:Number(o.salt_qty_output||0),salt_unit:o.salt_unit??null,yeast_delta:Number(o.yeast_qty_output||0),yeast_unit:o.yeast_unit??null}),await pl("flour",e),await pl("bran",e),await pl("salt",e),await pl("yeast",e),W.success("يرجى مراجعة صرف المخبز مجدداً"));const s=await fetch(`/api/numbers_report/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok){const c=await s.json().catch(()=>null);throw new Error(c?.error||"فشل تحديث السجل")}return s.json()}async function G9(e){const a=await fetch(`/api/numbers_report/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل حذف السجل")}return!0}async function V9(e){const a=await fetch(`/api/daily_withdrawal/${encodeURIComponent(e)}`,{method:"DELETE"});if(a.status===404)return!0;if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل حذف السجل")}return!0}function Ya(){const e=je({queryKey:["last-numbers"],queryFn:U9});return{data:e.data??[],isPending:e.isLoading,isError:e.isError}}function Y9(e){return je({queryKey:["day-numbers-first",e],queryFn:()=>F9(e),enabled:!!e,onError:a=>{console.error("useDayNumbersFirst error:",a),W.error("حدث خطأ")}})}function W3(){return je({queryKey:["current-monthly-number-report"],queryFn:P9})}function V1(e){return je({queryKey:["numbers-range",e],queryFn:()=>L9(e.from,e.to),enabled:!!e})}function I9(){const e=Te();return Re({mutationFn:H9,onSuccess:()=>{e.invalidateQueries({queryKey:["current-monthly-number-report"]})}})}function K9(){const e=Te();return Re({mutationFn:({id:a,payload:o})=>Q9(a,o),onSuccess:()=>{e.invalidateQueries()}})}function X9(){const e=Te();return Re({mutationFn:async a=>(await G9(a),await V9(a),!0),onSuccess:()=>{e.invalidateQueries()}})}const Z9=f.div`
  background-color: var(--color-grey-50);
  direction: rtl;
  min-width: 95rem;
  margin: 0rem;
  padding: 0 4rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,J9=f.h1`
  font-size: 3rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.8rem;

  @media print {
    color: black;
  }
`,W9=f.p`
  text-align: center;
  font-size: 1.8rem;
  color: var(--color-grey-700);
  margin-bottom: 3rem;
  font-weight: 600;

  @media print {
    color: black;
  }
`,eS=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;

  @media print {
    box-shadow: none;
  }
`,tS=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.6rem;

  thead {
    background-color: var(--color-brand-600);
    color: white;

    @media print {
      color: black;
    }
  }
  tbody {
    tr:nth-child(even) {
      background-color: var(--color-grey-100);
    }
    tr:hover {
      background-color: var(--color-grey-200);
    }
  }
  td,
  th {
    padding: 1.2rem;
    border: 1px solid var(--color-grey-300);
  }
`,rS=f.tr`
  /* background-color: var(--color-brand-400); */
  td {
    font-weight: 700;
    color: var(--color-grey-800);
    text-align: center;

    @media print {
      color: black;
    }
  }
`,nS=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,aS=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Kh=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,iS=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,oS=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1.2rem;
  width: 40%;

  @media print {
    display: none;
  }
`,sS=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,lS=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,cS=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,dS=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.25rem;
  width: 100%;
`,uS=[{name:"divider",label:"الأصناف الجافة"},{name:"white-cheese",label:"جبنه بيضاء"},{name:"canned-fava",label:"فول معلب"},{name:"jam",label:"مربى"},{name:"halawa",label:"حلاوة"},{name:"divider",label:"الأصناف الطازجة"},{name:"sugar",label:"سكر"},{name:"tea",label:"شاي"},{name:"fava",label:"فول صحيح"},{name:"lentils",label:"عدس"},{name:"noodles",label:"شعرية"},{name:"cooking-oil",label:"زيت"},{name:"divider",label:"صنف التحسين"},{name:"eggs",label:"بيض"}];function fS(e,a,o){const c=(["sugar","tea","fava","lentils","noodles","cooking-oil","eggs"].includes(e.name)?a:o)?.filter(y=>y.item_name===e.name)||[];if(c.length===0)return{quantity:"-",unit:"-",ration_type:"-"};let u=c.reduce((y,b)=>y+(Number(b.quantity)||0),0),h=c.reduce((y,b)=>y+(Number(b.quantity_azim)||0),0),p=c[0]?.ration_type||"-",g=c[0]?.unit||"-";return e.name==="cooking-oil"&&(u=h),e.name==="noodles"&&(u=h),{ration_type:p,quantity:u||"-",unit:g}}const mS=(e,a=4)=>Number(Number(e).toFixed(a));function hS(){const[e,a]=S.useState(null),[o,s]=S.useState(!1),{data:c,isLoading:u}=Ya(),h=c?.date||null,p=e||h,{data:g,isLoading:y}=_9(p),b=p?new Date(p).toLocaleDateString("ar-EG",{weekday:"long",month:"numeric",day:"numeric",year:"numeric"}):"-";if(u||y)return r.jsx(Ae,{});const{dryData:x=[],freshData:j=[]}=g||{};let _=0;return r.jsxs(Z9,{children:[r.jsx(iS,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(J9,{children:"يومية ضابط عظيم"}),r.jsxs(W9,{children:["تاريخ : ",p?b:"-"]}),r.jsx(Kh,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>s(C=>!C),children:o?"✖️ إغلاق":"عرض  يومية سابقة"}),o&&r.jsx(oS,{children:r.jsxs(sS,{onSubmit:C=>{C.preventDefault();const D=C.target?.date?.value||null;a(D),s(!1)},children:[r.jsxs(lS,{children:[r.jsx(cS,{children:"اختر تاريخ"}),r.jsx(dS,{name:"date",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",marginTop:"0.6rem"},children:[r.jsx(Kh,{type:"submit",disabled:y,children:y?"جارٍ التحميل...":"عرض"}),r.jsx(Kh,{type:"button",$bg:"#777",onClick:()=>{s(!1)},children:"إلغاء"})]})]})}),r.jsx(eS,{children:r.jsxs(tS,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"م"}),r.jsx("th",{children:"اسم الصنف"}),r.jsx("th",{children:"الكمية المنصرفة"}),r.jsx("th",{children:"الوحدة"}),r.jsx("th",{children:"مقرر الصنف"})]})}),r.jsx("tbody",{children:uS.map(C=>{if(C.name==="divider")return r.jsx(rS,{children:r.jsx("td",{colSpan:"5",children:C.label})},`divider-${C.label}`);_+=1;const{quantity:$,unit:D,ration_type:A}=fS(C,j,x);return r.jsxs("tr",{children:[r.jsx("td",{children:_}),r.jsx("td",{children:C.label}),r.jsx("td",{children:mS(Number($))||"-"}),r.jsx("td",{children:D}),r.jsx("td",{children:A})]},C.name)})})]})}),r.jsx(nS,{children:r.jsx(aS,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const pS=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
  direction: rtl;
`,gS=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,yS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  direction: rtl;
  align-items: center;
`,bS=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,xS=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,vS=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function jS(){const e=[{title:"المخزن",path:"bakery-items"},{title:"الأرصدة الحالية",path:"bakery-stock"},{title:"الوارد",path:"bakery-incoming"},{title:"تفريدة المخبز",path:"bakery-output"},{title:"القوة العاملة",path:"workforce-bakery"},{title:"يومية المخبز",path:"daily-bakery"}];return r.jsxs(pS,{children:[r.jsx(gS,{children:"وحدة المخبز"}),r.jsx(yS,{children:e.map(a=>r.jsx(bS,{to:`${a.path}`,children:r.jsx(xS,{children:r.jsx(vS,{children:a.title})})},a.path))})]})}function wS(e=new Date){const a=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=`${a}-${o}-01`,c=new Date(a,e.getMonth()+1,0).toISOString().slice(0,10);return{from:s,lastDay:c}}async function Y1(e,a="Request failed"){const o=await fetch(e);if(!o.ok){const s=await o.json().catch(()=>null);throw new Error(s?.error||a)}return o.json()}async function af(e){const{from:a,lastDay:o}=wS(),s=`/api/${e}?date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`;return await Y1(s,`فشل جلب بيانات ${e} للشهر`)}async function _S(e,{from:a,to:o}){const s=`/api/${e}?date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`;return await Y1(s,`فشل جلب بيانات ${e} للفترة`)}async function SS(){return af("flour")}async function kS(){return af("bran")}async function $S(){return af("yeast")}async function CS(){return af("salt")}async function ES({table:e,from:a,to:o}){return _S(e,{from:a,to:o})}async function TS(e,a){if(!a)throw new Error("Missing id");const o=`/api/${e}/${encodeURIComponent(a)}`;return await Y1(o,`فشل جلب السجل من ${e}`)}function DS(){return je({queryKey:["bakery-item","flour","month"],queryFn:SS,onError:e=>{console.error("useFlourMonth error",e),W.error("خطأ في تحميل بيانات الدقيق")}})}function RS(){return je({queryKey:["bakery-item","bran","month"],queryFn:kS,onError:e=>{console.error("useBranMonth error",e),W.error("خطأ في تحميل بيانات النخالة")}})}function zS(){return je({queryKey:["bakery-item","yeast","month"],queryFn:$S,onError:e=>{console.error("useYeastMonth error",e),W.error("خطأ في تحميل بيانات الخميرة")}})}function AS(){return je({queryKey:["bakery-item","salt","month"],queryFn:CS,onError:e=>{console.error("useSaltMonth error",e),W.error("خطأ في تحميل بيانات الملح")}})}function qS(e,a,o,s=!1){return je({queryKey:["bakery-item",e,"range",a,o],queryFn:()=>ES({table:e,from:a,to:o}),enabled:s,onError:c=>{console.error("useTableRange error",c),W.error("حدث خطأ")}})}function wd(e,a,o=!!a){return je({queryKey:["bakery-item",e,"id",a],queryFn:()=>TS(e,a),enabled:o,onError:s=>{console.error("useTableById error",s),W.error("فشل تحميل السجل")}})}async function tc(e,a){const o=await fetch(e,a);if(!o.ok)throw new Error("request failed");return o.json()}function NS(e){const a=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${a}-${o}-${s}`}async function OS(e){if(!e)throw new Error("Missing id");const a=`/api/bakery_output/${encodeURIComponent(e)}`;return tc(a)}async function MS(){const e=new Date;e.setDate(1);const a=NS(e);return await tc(`/api/bakery_output?date_from=${encodeURIComponent(a)}&order=asc`)||[]}function BS(){return je({queryKey:["bakery-output-current-month"],queryFn:MS})}async function US({from:e,to:a}){return await tc(`/api/bakery_output?date_from=${e}&date_to=${a}&order=asc`)||[]}function FS(e,a){return je({queryKey:["bakery-output-range",e],queryFn:()=>US(e),enabled:a})}async function LS(e){return tc("/api/bakery_output",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function PS(){const e=Te();return Re({mutationFn:LS,onSuccess:()=>{W.success("تم تأكيد الصرف"),e.invalidateQueries(["bakery-output-current-month"]),e.invalidateQueries(["today-numbers"])},onError:()=>W.error("حدث خطأ")})}function HS(){const e=Te();async function a({table:o,payload:s}){return tc(`/api/${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})}return Re({mutationFn:a,onSuccess:()=>{e.invalidateQueries(["flour"]),e.invalidateQueries(["bran"]),e.invalidateQueries(["salt"]),e.invalidateQueries(["yeast"])},onError:()=>W.error("تعذر حفظ البيانات")})}function QS(e,a=!!e){return je({queryKey:["bakery-output",e],queryFn:()=>OS(e),enabled:a,onError:o=>{console.error("useBakeryOutputById error",o),W.error("فشل تحميل بيانات الصرف")}})}const GS=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 100rem;

  @media print {
    background-color: white;
    color: black;
    min-width: auto !important;
  }
`,VS=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media print {
    color: black;
  }
`,_d=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media print {
    overflow: visible !important;
    box-shadow: none;
    padding: 0;
  }
`,Sd=f.table`
  direction: rtl;
  text-align: center;
  font-size: 1.5rem;
  border-collapse: collapse;
  @media print {
    border: 1px solid #ccc;
  }
`,kd=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #fff !important;
    color: black !important;
  }
`,Nt=f.th`
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  border: 1px solid #ccc;
`,$d=f.tbody`
  @media print {
    border: 1px solid #ccc;
  }
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,ge=f.td`
  padding: 0.6rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.4rem;
  }
`,YS=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,IS=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,To=f.div`
  text-align: center;
  margin: 1rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;

  @media print {
    color: black;
  }
`,KS=f.div`
  text-align: center;
  margin: 8rem 2rem 8rem 2rem;

  font-size: 1.8rem;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  @media print {
    color: black;
  }
`,Xh=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  font-size: 1.4rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,XS=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
  width: 40%;
  @media print {
    display: none;
  }
`,ZS=f.form`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap;
`,JS=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,WS=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,ek=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  width: 100%;
`,tk=f.tr`
  font-weight: 900;
  font-size: 1.9rem;
  border-top: 1px solid var(--color-grey-900);

  td {
    padding: 0.7rem;
  }
`;function rk(e){const a=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],o=new Date(e+"T00:00:00");return a[o.getDay()]}function nk(e){return e?new Date(e).toLocaleDateString("ar-EG",{day:"numeric",month:"2-digit",year:"numeric",era:"short"}):"-"}const ak=(e,a=3)=>Number(Number(e).toFixed(a));function ik(){const e=new Date().toISOString().split("T")[0],[a,o]=S.useState(!1),[s,c]=S.useState(e),{data:u,isPending:h}=Y9(s),{data:p,isPending2:g}=wd("flour",u?.id),{data:y,isPending3:b}=wd("bran",u?.id),{data:x,isPending4:j}=wd("yeast",u?.id),{data:_,isPending5:C}=wd("salt",u?.id),{data:$,isPending6:D}=QS(u?.id);if(h||g||b||j||C||D)return r.jsx(Ae,{});let A=nt=>nt?ak(Number(nt)):"-";$||(A=()=>"-");const O=new Date(u?.date).getMonth()+1,z=[11,12,1,2,3].includes(O),I=Number(u?.officers||0),R=Number(u?.individuals||0),F=Number(u?.soldiers||0),ie=Number(u?.dry_meals_bakery||0);let K=$?.is_ramadan?4:z?6:5;const ue=I*K,X=R*K,H=F*K,oe=ie*6,ce=ue/1550,Y=X/1550,N=H/1550,ne=oe/1550,pe=ue*3/1550,te=X*3/1550,k=H*3/1550,Z=oe*3/1550,se=z?ce:ue/3100,de=z?Y:X/3100,J=z?N:H/3100,ye=z?ne:oe/3100,ve=ce,Le=Y,Ce=N,rt=ne;return r.jsxs(GS,{children:[r.jsx(VS,{children:"يومية المخبز"}),r.jsxs(To,{children:[r.jsxs("div",{style:{width:"65%"},children:[r.jsx(To,{children:r.jsx("p",{children:"الإدارة العامة للأمن المركزي"})}),r.jsx(To,{children:r.jsx("p",{children:"منطقة القاهرة الجديدة"})}),r.jsx(To,{children:r.jsx("p",{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"})}),r.jsx(To,{children:r.jsx("p",{children:"وحدة المخبز"})}),r.jsxs(To,{style:{marginTop:"6rem"},children:[r.jsx(Xh,{style:{color:"black",background:"#f1ce08",marginTop:"auto"},onClick:()=>o(nt=>!nt),children:a?"✖️ إغلاق":"عرض  سابق"}),r.jsxs("p",{style:{marginLeft:"auto",marginRight:$?.is_ramadan?"2rem":"6rem",fontFamily:900},children:["يومية المنصرف جراية التعيينات عن يوم"," ",rk(s)," الموافق"," ",nk(s)," ",$?.is_ramadan?"/ شهر رمضان":null]})]})]}),r.jsx(_d,{style:{width:"35%",marginTop:"5rem"},children:r.jsxs(Sd,{children:[r.jsxs(kd,{children:[r.jsx("tr",{children:r.jsx(Nt,{colSpan:2,children:" بيان الأعداد"})}),r.jsxs("tr",{children:[r.jsx(Nt,{style:{width:"52%"},children:"الرتبة"}),r.jsx(Nt,{children:"العدد"})]})]}),r.jsxs($d,{children:[r.jsxs("tr",{children:[r.jsx(ge,{children:"ضباط"}),r.jsx(ge,{children:A(u?.officers)||"-"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"أفراد"}),r.jsx(ge,{children:A(u?.individuals)||"-"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"مجندين"}),r.jsx(ge,{children:A(u?.soldiers)||"-"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"جاف"}),r.jsx(ge,{children:A(u?.dry_meals_bakery)||"-"})]}),r.jsxs(tk,{children:[r.jsx("td",{children:"الإجمالي"}),r.jsx("td",{children:u?`${A(u.total)}${u?.dry_meals_bakery?` + ${A(u.dry_meals_bakery)} جاف`:""}`:"-"})]})]})]})})]}),a&&r.jsx(XS,{children:r.jsxs(ZS,{onSubmit:nt=>{nt.preventDefault();const Ft=nt.target.date?.value;if(o(!1),!Ft){W.error("اختيار خاطيء");return}c(Ft)},children:[r.jsxs(JS,{children:[r.jsx(WS,{children:"اختر تاريخ"}),r.jsx(ek,{name:"date",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:12,width:"100%"},children:[r.jsx(Xh,{type:"submit",children:"عرض"}),r.jsx(Xh,{type:"button",style:{background:"#777"},onClick:()=>o(!1),children:"إلغاء"})]})]})}),r.jsx(_d,{style:{width:"60%",margin:"3rem auto"},children:r.jsxs(Sd,{children:[r.jsx(kd,{children:r.jsxs("tr",{children:[r.jsx(Nt,{children:"م"}),r.jsx(Nt,{children:"اسم الصنف"}),r.jsx(Nt,{colSpan:2,children:"بيان بالرصيد المرحل من اليوم السابق"})]})}),r.jsxs($d,{children:[r.jsxs("tr",{children:[r.jsx(ge,{children:"1"}),r.jsx(ge,{children:"دقيق"}),r.jsx(ge,{children:A(p?.consumed+p?.current)||"-"}),r.jsx(ge,{children:"جوال"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"2"}),r.jsx(ge,{children:"نخالة"}),r.jsx(ge,{children:A(y?.consumed+y?.current)||"-"}),r.jsx(ge,{children:"كيلو"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"3"}),r.jsx(ge,{children:"خميرة"}),r.jsx(ge,{children:A(x?.consumed+x?.current)||"-"}),r.jsx(ge,{children:"قالب"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"4"}),r.jsx(ge,{children:"ملح"}),r.jsx(ge,{children:A(_?.consumed+_?.current)||"-"}),r.jsx(ge,{children:"كيلو"})]})]})]})}),r.jsx(_d,{style:{width:"90%",margin:"3rem auto"},children:r.jsxs(Sd,{children:[r.jsxs(kd,{children:[r.jsxs("tr",{children:[r.jsx(Nt,{rowSpan:2,children:"م"}),r.jsx(Nt,{rowSpan:2,children:"اسم الصنف"}),r.jsx(Nt,{colSpan:4,children:"الكميات المنصرفة"}),r.jsx(Nt,{rowSpan:2,children:"الوحدة"}),r.jsx(Nt,{rowSpan:2,children:"إجمالي المنصرف"})]}),r.jsxs("tr",{children:[r.jsx(Nt,{children:"ضباط"}),r.jsx(Nt,{children:"أفراد"}),r.jsx(Nt,{children:"مجندين"}),r.jsx(Nt,{children:"جاف"})]})]}),r.jsxs($d,{children:[r.jsxs("tr",{children:[r.jsx(ge,{children:"1"}),r.jsx(ge,{children:"جراية"}),r.jsx(ge,{children:A(ue)}),r.jsx(ge,{children:A(X)}),r.jsx(ge,{children:A(H)}),r.jsx(ge,{children:A(oe)}),r.jsx(ge,{children:"رغيف"}),r.jsx(ge,{children:$?.bread_output})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"2"}),r.jsx(ge,{children:"دقيق"}),r.jsx(ge,{children:A(ce)}),r.jsx(ge,{children:A(Y)}),r.jsx(ge,{children:A(N)}),r.jsx(ge,{children:A(ne)}),r.jsx(ge,{children:"جوال"}),r.jsx(ge,{children:$?.flour_qty_output})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"3"}),r.jsx(ge,{children:"نخالة"}),r.jsx(ge,{children:A(pe)}),r.jsx(ge,{children:A(te)}),r.jsx(ge,{children:A(k)}),r.jsx(ge,{children:A(Z)}),r.jsx(ge,{children:"كيلو"}),r.jsx(ge,{children:$?.bran_qty_output})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"4"}),r.jsx(ge,{children:"خميرة"}),r.jsx(ge,{children:A(se)}),r.jsx(ge,{children:A(de)}),r.jsx(ge,{children:A(J)}),r.jsx(ge,{children:A(ye)}),r.jsx(ge,{children:"قالب"}),r.jsx(ge,{children:$?.yeast_qty_output})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"5"}),r.jsx(ge,{children:"ملح"}),r.jsx(ge,{children:A(ve)}),r.jsx(ge,{children:A(Le)}),r.jsx(ge,{children:A(Ce)}),r.jsx(ge,{children:A(rt)}),r.jsx(ge,{children:"كيلو"}),r.jsx(ge,{children:$?.salt_qty_output})]})]})]})}),r.jsx(_d,{style:{width:"60%",margin:"3rem auto"},children:r.jsxs(Sd,{children:[r.jsx(kd,{children:r.jsxs("tr",{children:[r.jsx(Nt,{children:"م"}),r.jsx(Nt,{children:"اسم الصنف"}),r.jsx(Nt,{colSpan:2,children:"بيان بالرصيد المرحل إلى اليوم التالي"})]})}),r.jsxs($d,{children:[r.jsxs("tr",{children:[r.jsx(ge,{children:"1"}),r.jsx(ge,{children:"دقيق"}),r.jsx(ge,{children:A(p?.current)||"-"}),r.jsx(ge,{children:"جوال"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"2"}),r.jsx(ge,{children:"نخالة"}),r.jsx(ge,{children:A(y?.current)||"-"}),r.jsx(ge,{children:"كيلو"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"3"}),r.jsx(ge,{children:"خميرة"}),r.jsx(ge,{children:A(x?.current)||"-"}),r.jsx(ge,{children:"قالب"})]}),r.jsxs("tr",{children:[r.jsx(ge,{children:"4"}),r.jsx(ge,{children:"ملح"}),r.jsx(ge,{children:A(_?.current)||"-"}),r.jsx(ge,{children:"كيلو"})]})]})]})}),r.jsxs(KS,{children:[r.jsx("p",{children:"رئيس وحدة المخبز "}),r.jsx("p",{style:{padding:"0 15rem"},children:"قائد القطاع"})]}),r.jsx("div",{style:{borderTop:"1px solid #333",padding:12,marginLeft:"5rem"}}),r.jsx(YS,{children:r.jsx(IS,{onClick:()=>window.print(),children:"🖨️ طباعة / PDF"})})]})}function e6(e){async function a(){const c=await fetch(`/api/${e}?order=asc`);if(!c.ok)throw new Error("فشل جلب الشهادات");const u=await c.json();return Array.isArray(u)?u:[]}async function o({file:c,expiry_date:u}){const h=new FormData;h.append("file",c),h.append("expiry_date",u);const p=await fetch(`/api/${e}`,{method:"POST",body:h});if(!p.ok){const g=await p.json().catch(()=>null);throw new Error(g?.error||"فشل رفع الشهادة")}return await p.json()}async function s(c){const u=await fetch(`/api/${e}/${encodeURIComponent(c)}`,{method:"DELETE"});if(!u.ok){const h=await u.json().catch(()=>null);throw new Error(h?.error||"فشل حذف الشهادة")}return!0}return{fetchCertificates:a,uploadHealthCertificate:o,deleteCertificate:s}}const Zh=e6("bakery_health_certificates"),Jh=e6("health_certificates");function ok(e){if(!e)return"—";const a=new Date(e),o=String(a.getDate()).padStart(2,"0"),s=String(a.getMonth()+1).padStart(2,"0"),c=a.getFullYear();return`${o}/${s}/${c}`}const sk=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
  }
`,lk=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,ck=f.h1`
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
`,dk=f.div`
  background-color: #f1ce08;
  color: #222;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 5px;
`,uk=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,fk=f.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,X2=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Z2=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,mk=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  flex-basis: 100%;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,hk=f.button`
  background: var(--color-brand-700);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`,pk=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
`,gk=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,yk=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Cd=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
  border: 1px solid #e5e7eb;
`,bk=f.tr`
  border: 1px solid #e5e7eb;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-grey-100);
  }
`,gl=f.td`
  border: 1px solid #e5e7eb;

  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,xk=f.button`
  background-color: #dc2626;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #b91c1c;
  }
`;function vk(){const[e,a]=S.useState(!1),o=Te(),{register:s,handleSubmit:c,reset:u}=Ut(),{data:h,isPending:p}=je({queryKey:["bakery-health-certificates"],queryFn:Zh.fetchCertificates}),{mutateAsync:g,isPending:y}=Re({mutationFn:Zh.uploadHealthCertificate,onSuccess:()=>{W.success("تم رفع الشهادة بنجاح"),o.invalidateQueries(["bakery-health-certificates"]),u(),a(!1)},onError:()=>W.error("حدث خطأ أثناء الرفع")}),{mutate:b,isPending:x}=Re({mutationFn:Zh.deleteCertificate,onSuccess:()=>{W.success("تم حذف الشهادة"),o.invalidateQueries(["bakery-health-certificates"])},onError:()=>W.error("فشل حذف الشهادة")});async function j(_){const C=_.image_file?.[0];if(!C)return W.error("يجب اختيار صورة");await g({file:C,expiry_date:_.expiry_date})}return p?r.jsx(Ae,{}):r.jsxs(sk,{children:[r.jsx(lk,{children:r.jsx(ck,{children:"الشهادات الصحية - وحدة المخبز"})}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[r.jsx(hk,{onClick:()=>a(_=>!_),children:e?"✖️ إغلاق":"➕ إضافة شهادة"}),r.jsxs(dk,{children:["عدد الشهادات : ",h?.length||0]})]}),e&&r.jsx(uk,{children:r.jsxs(fk,{onSubmit:c(j),children:[r.jsx(X2,{children:"صورة الشهادة الصحية"}),r.jsx(Z2,{type:"file",accept:"image/*",...s("image_file",{required:!0})}),r.jsx(X2,{children:"تاريخ انتهاء الصلاحية"}),r.jsx(Z2,{type:"date",...s("expiry_date",{required:!0})}),r.jsx(mk,{type:"submit",disabled:y,children:y?"جارٍ الرفع...":"✔️ رفع"})]})}),r.jsx(pk,{children:r.jsxs(gk,{children:[r.jsx(yk,{children:r.jsxs("tr",{children:[r.jsx(Cd,{children:"م"}),r.jsx(Cd,{children:"صورة الشهادة"}),r.jsx(Cd,{children:"تاريخ الانتهاء"}),r.jsx(Cd,{})]})}),r.jsx("tbody",{children:h?.length>0?h.map((_,C)=>r.jsxs(bk,{children:[r.jsx(gl,{children:C+1}),r.jsx(gl,{children:r.jsx("img",{src:_.image_url,alt:"شهادة صحية",width:"220",height:"120",style:{borderRadius:"8px",objectFit:"fill",border:"1px solid #ddd"}})}),r.jsxs(gl,{style:{color:new Date(_.expiry_date)-new Date<=1e3*60*60*24*60?"red":"inherit",fontWeight:new Date(_.expiry_date)-new Date<=1e3*60*60*24*60?"700":"400"},children:[ok(_.expiry_date)," ",new Date(_.expiry_date)-new Date<=1e3*60*60*24*60&&"🚨"]}),r.jsx(gl,{children:r.jsx(xk,{disabled:x,onClick:()=>{window.confirm("هل أنت متأكد من حذف الشهادة؟")&&b(_.id)},children:"🗑"})})]},_.id)):r.jsx("tr",{children:r.jsx(gl,{colSpan:"4",children:"لا توجد شهادات بعد"})})})]})})]})}const jk=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;

  min-width: 110rem;
  @media print {
    min-width: auto !important;
  }
`,wk=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,_k=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,Sk=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,kk=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,xr=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,$k=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }
  tr:hover {
    background-color: var(--color-grey-200);
  }
`,cr=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,Ck=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,Ek=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,sn=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,ln=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Do=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,Ed=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,of=f.button`
  background: ${({bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  height: fit-content;
  margin-top: auto;
`,Tk=f(of)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,Dk=f(of)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,Rk=f(of)`
  background: var(--color-brand-700);
  margin-bottom: 1rem;
`,zk=f.div`
  display: flex;
  align-items: center;
`;function Ak(){const[e,a]=S.useState(!1),[o,s]=S.useState(null),{data:c,isPending:u}=A9(),h=q9(),p=N9(),g=M9(),{register:y,handleSubmit:b,reset:x,setValue:j}=Ut();if(u)return r.jsx(Ae,{});async function _(D){const A={...D,flour_qty:D.flour_qty||0,bran_qty:D.bran_qty||0,salt_qty:D.salt_qty||0,yeast_qty:D.yeast_qty||0};if(A.flour_qty+A.bran_qty+A.salt_qty+A.yeast_qty<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");o?p.mutate({id:o.id,payload:A},{onSuccess:()=>{x(),s(null),a(!1),W.success("تم التعديل بنجاح")}}):h.mutate(A,{onSuccess:()=>{x(),a(!1)}})}function C(D){s(D),j("date",D.date),j("receiver_name",D.receiver_name),j("flour_qty",D.flour_qty??""),j("flour_unit",D.flour_unit??""),j("bran_qty",D.bran_qty??""),j("bran_unit",D.bran_unit??""),j("salt_qty",D.salt_qty??""),j("salt_unit",D.salt_unit??""),j("yeast_qty",D.yeast_qty??""),j("yeast_unit",D.yeast_unit??""),a(!0)}function $(){o&&p.mutate({id:o.id,payload:{...o,flour_qty:0,bran_qty:0,salt_qty:0,yeast_qty:0}},{onSuccess:()=>{g.mutate(o.id,{onSuccess:()=>{x(),s(null),a(!1),W.success("تم الحذف بنجاح")}})}})}return r.jsxs(jk,{children:[r.jsx(wk,{children:"وارد المخبز"}),r.jsx(zk,{children:r.jsx(Rk,{onClick:()=>{e?(a(!1),s(null),x()):a(!0)},children:e?"✖️ إغلاق":"➕ إضافة وارد"})}),e&&r.jsx(Ck,{children:r.jsxs(Ek,{onSubmit:b(_),children:[r.jsxs(sn,{children:[r.jsx(ln,{children:"التاريخ"}),r.jsx(Do,{type:"date",defaultValue:new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),max:new Date().toISOString().split("T")[0],...y("date")})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"اسم المستلم"}),r.jsx(Do,{type:"text",...y("receiver_name")})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الدقيق"}),r.jsx(Do,{type:"number",step:"any",...y("flour_qty")})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الوحدة"}),r.jsxs(Ed,{defaultValue:"جوال",...y("flour_unit"),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"جوال",children:"جوال"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"قالب",children:"قالب"})]})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"النخالة"}),r.jsx(Do,{type:"number",step:"any",...y("bran_qty")})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الوحدة"}),r.jsxs(Ed,{defaultValue:"كيلوجرام",...y("bran_unit"),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"جوال",children:"جوال"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"قالب",children:"قالب"})]})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الخميرة"}),r.jsx(Do,{type:"number",step:"any",...y("yeast_qty")})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الوحدة"}),r.jsxs(Ed,{defaultValue:"قالب",...y("yeast_unit"),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"جوال",children:"جوال"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"قالب",children:"قالب"})]})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الملح"}),r.jsx(Do,{type:"number",step:"any",...y("salt_qty")})]}),r.jsxs(sn,{children:[r.jsx(ln,{children:"الوحدة"}),r.jsxs(Ed,{defaultValue:"كيلوجرام",...y("salt_unit"),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"جوال",children:"جوال"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"قالب",children:"قالب"})]})]}),r.jsx(of,{type:"submit",disabled:h.isPending||p.isPending,children:o?p.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":h.isPending?"جارٍ الإضافة...":"✔️ إضافة"}),o&&r.jsx(Dk,{type:"button",disabled:p.isPending,onClick:$,children:p.isPending?"جارٍ الحذف...":"حذف"})]})}),r.jsx(_k,{children:r.jsxs(Sk,{children:[r.jsx(kk,{children:r.jsxs("tr",{children:[r.jsx(xr,{children:"م"}),r.jsx(xr,{children:"اليوم"}),r.jsx(xr,{children:"التاريخ"}),r.jsx(xr,{children:"اسم المستلم"}),r.jsx(xr,{children:"الدقيق"}),r.jsx(xr,{children:"الوحدة"}),r.jsx(xr,{children:"النخالة"}),r.jsx(xr,{children:"الوحدة"}),r.jsx(xr,{children:"الخميرة"}),r.jsx(xr,{children:"الوحدة"}),r.jsx(xr,{children:"الملح"}),r.jsx(xr,{children:"الوحدة"}),r.jsx(xr,{children:"إجراءات"})]})}),r.jsx($k,{children:c?.length===0?r.jsx("tr",{children:r.jsx(cr,{colSpan:"13",children:"لا يوجد بيانات"})}):c?.map((D,A)=>r.jsxs("tr",{children:[r.jsx(cr,{children:1+A}),r.jsx(cr,{children:D.date?new Date(D.date).toLocaleDateString("ar-EG",{weekday:"long"}):"—"}),r.jsx(cr,{children:D.date||"—"}),r.jsx(cr,{children:D.receiver_name||"—"}),r.jsx(cr,{children:D.flour_qty||"—"}),r.jsx(cr,{children:D.flour_unit||"—"}),r.jsx(cr,{children:D.bran_qty||"—"}),r.jsx(cr,{children:D.bran_unit||"—"}),r.jsx(cr,{children:D.yeast_qty||"—"}),r.jsx(cr,{children:D.yeast_unit||"—"}),r.jsx(cr,{children:D.salt_qty||"—"}),r.jsx(cr,{children:D.salt_unit||"—"}),r.jsx(cr,{children:r.jsx(Tk,{onClick:()=>C(D),children:"✏️"})})]},D.id))})]})})]})}const qk=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,Nk=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
  @media print {
    color: black;
  }
`,Ok=f.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`,Wh=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;

  @media print {
    display: none;
  }
`,Mk=f.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey-300);
  font-size: 1rem;
  background: var(--color-grey-0);
`,e0=f.label`
  font-size: 1rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,J2=f.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey-300);
  font-size: 1rem;
  background: var(--color-grey-0);
  width: 100%;
`,W2=f.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Bk=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1.2rem;

  @media print {
    display: none;
  }
`,t0=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Uk=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;
  margin-top: 1.6rem;
  @media print {
    overflow: visible !important;
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,Fk=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.4rem;
`,Lk=f.thead`
  background-color: var(--color-brand-600);
  color: white;
  @media print {
    background-color: #fff !important;
    color: black !important;
  }
`,xi=f.th`
  padding: 1rem;
  text-align: center;
  font-weight: 700;

  &:last-child {
    width: 15rem;
  }
`,Pk=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Wt=f.td`
  padding: 0.9rem;
  text-align: center;
  color: var(--color-grey-700);
  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }
`,Hk=f.tr`
  font-weight: 900;
  font-size: 1.6rem;
  border-top: 1px solid var(--color-grey-900);
  td {
    padding: 1rem;
    padding-top: 2rem;
  }
`,Qk=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,Gk=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-700);
  }
`,Vk=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,Yk=f.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`,Td=f.button`
  background: ${e=>e.$active?"var(--color-brand-600)":"var(--color-grey-100)"};
  color: ${e=>e.$active?"white":""};
  border: 1px solid var(--color-grey-300);
  padding: 1.6rem;
  border-radius: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.8rem;
  min-width: 12rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  @media print {
    color: black;
    display: ${e=>e.$active?"black":"none"};
    background: none;
    border: none;
    box-shadow: none;
  }
`,Ik=f.td`
  padding: 1.5rem;
  font-weight: 700;
`,ex=(e,a=4)=>Number(Number(e).toFixed(a)),Kk=(e,a=2)=>{const o=Math.sign(e),[s,c=""]=Math.abs(e).toString().split("."),u=s+(a?"."+c.slice(0,a):"");return o*Number(u)};function Xk(){const[e,a]=S.useState("flour"),[o,s]=S.useState(!1),[c,u]=S.useState(null),{data:h,isPending:p}=DS(),{data:g,isPending:y}=RS(),{data:b,isPending:x}=zS(),{data:j,isPending:_}=AS(),{data:C,isPending:$}=qS(e,c?.from,c?.to,!!c),D=S.useMemo(()=>c?C||[]:e==="flour"?h||[]:e==="bran"?g||[]:e==="yeast"?b||[]:e==="salt"?j||[]:[],[e,h,g,b,j,C,c]),A=e==="flour"&&p||e==="bran"&&y||e==="yeast"&&x||e==="salt"&&_,M=S.useMemo(()=>{const R=ie=>{const K=Number(ie??0);return Number.isFinite(K)?K:0},F=ie=>Kk(ex((D||[]).reduce((K,ue)=>K+R(ue[ie]),0)));return{income:F("income"),consumed:F("consumed")}},[D]);if(A)return r.jsx(Ae,{});function O(){return r.jsxs(r.Fragment,{children:[r.jsx(xi,{children:"م"}),r.jsx(xi,{children:"اليوم"}),r.jsx(xi,{children:"التاريخ"}),r.jsx(xi,{children:"وارد"}),r.jsx(xi,{children:"رصيد"}),r.jsx(xi,{children:"منصرف"}),r.jsx(xi,{children:"باقي"})]})}const z=R=>ex(Number(R||0))||"-";function I(R,F){const ie=R.date?new Date(R.date).toLocaleDateString("ar-EG",{weekday:"long"}):"-",K=R.date||"-",ue=z(R.income),X=z(R.consumed),H=z(R.current)==="-"?0:z(R.current),oe=z((R.consumed||0)+(R.current||0))==="-"?0:z((R.consumed||0)+(R.current||0)),ce=z((R.consumed||0)+(R.current||0))==="-"?0:z((R.consumed||0)+(R.current||0)),Y=z((R.consumed||0)+(R.current||0))==="-"?0:z((R.consumed||0)+(R.current||0)),N=z((R.consumed||0)+(R.current||0))==="-"?0:z((R.consumed||0)+(R.current||0));return r.jsxs("tr",{children:[r.jsx(Wt,{children:1+F}),r.jsx(Wt,{children:ie}),r.jsx(Wt,{children:K}),r.jsx(Wt,{children:ue}),e==="flour"&&r.jsx(Wt,{children:oe}),e==="bran"&&r.jsx(Wt,{children:ce}),e==="yeast"&&r.jsx(Wt,{children:Y}),e==="salt"&&r.jsx(Wt,{children:N}),r.jsx(Wt,{children:X}),r.jsx(Wt,{children:H})]},R.id||F)}return r.jsxs(qk,{children:[r.jsx(Vk,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(Nk,{children:"أصناف المخبز"}),r.jsxs(Yk,{children:[r.jsx(Td,{$active:e==="flour",onClick:()=>{a("flour"),u(null)},children:"الدقيق"}),r.jsx(Td,{$active:e==="bran",onClick:()=>{a("bran"),u(null)},children:"النخالة"}),r.jsx(Td,{$active:e==="yeast",onClick:()=>{a("yeast"),u(null)},children:"الخميرة"}),r.jsx(Td,{$active:e==="salt",onClick:()=>{a("salt"),u(null)},children:"الملح"})]}),r.jsx(Ok,{children:r.jsx(Wh,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>{s(R=>!R)},children:o?"✖️ إغلاق":"عرض سابق"})}),o&&r.jsx(Bk,{children:r.jsxs("form",{onSubmit:R=>{R.preventDefault();const F=R.target.from.value,ie=R.target.to.value,K=R.target.item?.value||e;if(!F||!ie||F>ie){W.error("اختيار خاطئ");return}a(K),u({from:F,to:ie})},children:[r.jsxs(W2,{children:[r.jsxs(t0,{children:[r.jsx(e0,{children:"من"}),r.jsx(J2,{name:"from",type:"date"})]}),r.jsxs(t0,{children:[r.jsx(e0,{children:"إلى"}),r.jsx(J2,{name:"to",type:"date"})]}),r.jsxs(t0,{children:[r.jsx(e0,{children:"اختر الصنف"}),r.jsxs(Mk,{name:"item",defaultValue:e,children:[r.jsx("option",{value:"flour",children:"الدقيق"}),r.jsx("option",{value:"bran",children:"النخالة"}),r.jsx("option",{value:"yeast",children:"الخميرة"}),r.jsx("option",{value:"salt",children:"الملح"})]})]})]}),r.jsxs(W2,{style:{justifyContent:"flex-end",marginTop:"1rem"},children:[r.jsx("div",{children:r.jsx(Wh,{type:"submit",style:{minWidth:"12rem"},disabled:c&&$,children:c&&$?"جاري العرض...":"عرض"})}),r.jsx("div",{children:r.jsx(Wh,{type:"button",$bg:"#777",onClick:()=>{u(null),s(R=>!R)},children:"إلغاء"})})]})]})}),r.jsx(Uk,{children:r.jsxs(Fk,{children:[r.jsx(Lk,{children:r.jsx("tr",{children:O()})}),r.jsxs(Pk,{children:[(!D||D.length===0)&&r.jsx("tr",{children:r.jsx(Ik,{colSpan:7,children:"لا يوجد بيانات"})}),D?.map((R,F)=>I(R,F)),D?.length>0&&r.jsxs(Hk,{children:[r.jsx(Wt,{colSpan:3,children:"الإجمالي"}),r.jsx(Wt,{children:M.income||"-"}),r.jsx(Wt,{children:"-"}),r.jsx(Wt,{children:M.consumed}),r.jsx(Wt,{children:"-"})]})]})]})}),r.jsx(Qk,{children:r.jsx(Gk,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}async function Zk(){const e=await fetch("/api/ramadan?limit=1");if(!e.ok)throw new Error("فشل جلب بيانات رمضان");const a=await e.json();return Array.isArray(a)&&a.length?a[0]:null}async function Jk(e){const a=await fetch("/api/ramadan?limit=1");if(!a.ok)throw new Error("فشل الوصول إلى بيانات رمضان");const o=await a.json(),s=Array.isArray(o)&&o.length?o[0]:null,c={is_ramadan:e,created_at:new Date().toISOString()};if(s&&s.id){const u=await fetch(`/api/ramadan/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل تحديث حالة رمضان");return await u.json()}else{const u=await fetch("/api/ramadan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل إنشاء سجل رمضان");return await u.json()}}function t6(){const e=Te(),a=je({queryKey:["ramadan"],queryFn:Zk}),o=Re({mutationFn:Jk,onSuccess:s=>e.setQueryData(["ramadan"],s)});return{data:a.data,isPending:a.isPending,update:s=>o.mutate(s),mutationState:{isPending:o.isPending,isError:o.isError,error:o.error,isSuccess:o.isSuccess}}}const Wk=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 110rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,e$=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
  @media print {
    color: black;
  }
`,t$=f.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`,Dd=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;

  @media print {
    display: none;
  }
`,r$=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1.2rem;

  @media print {
    display: none;
  }
`,tx=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,rx=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,nx=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.25rem;
  width: 100%;
`,n$=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;
  margin-top: 1.6rem;
  @media print {
    overflow: visible !important;
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,a$=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.4rem;

  @media print {
    th:last-child,
    td:last-child {
      display: none !important;
    }
  }
`,i$=f.thead`
  background-color: var(--color-brand-600);
  color: white;
  @media print {
    background-color: #fff !important;
    color: black !important;
  }
`,Gr=f.th`
  padding: 1rem;
  text-align: center;
  font-weight: 700;
`,o$=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,gt=f.td`
  padding: 0.9rem;
  text-align: center;
  color: var(--color-grey-700);
  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }
`,s$=f.tr`
  font-weight: 900;
  font-size: 1.6rem;
  border-top: 1px solid var(--color-grey-900);
  td {
    padding: 1rem;
    padding-top: 2rem;
  }
`,l$=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,c$=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-700);
  }
`,d$=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`;function u$(e){if(!e)return null;const a=new Date(e);return a.setDate(a.getDate()+1),a.toISOString().split("T")[0]}const yl=(e,a=3)=>Number(Number(e).toFixed(a)),Rd=(e,a=2)=>{const o=Math.sign(e),[s,c=""]=Math.abs(e).toString().split("."),u=s+(a?"."+c.slice(0,a):"");return o*Number(u)};function f$(){const[e,a]=S.useState(!1),[o,s]=S.useState(null),c=HS(),u=PS(),h=O9(),{data:p,isPending:g}=BS(),{data:y,isPending:b}=W3(),{data:x,isPending:j}=FS(o,!!o),{data:_,isPending:C}=V1(o),{data:$,isPending:D}=t6(),A=async R=>{try{await u.mutateAsync({id:R.id,date:R.date,is_ramadan:Number($?.is_ramadan),total_output:R.total_output,dry_meals_output:R.dry_meals_output,bread_output:R.bread_output,flour_qty_output:R.flour_qty_output,bran_qty_output:R.bran_qty_output,yeast_qty_output:R.yeast_qty_output,salt_qty_output:R.salt_qty_output});const F=await h.mutateAsync({flour_qty_output:R.flour_qty_output,bran_qty_output:R.bran_qty_output,yeast_qty_output:R.yeast_qty_output,salt_qty_output:R.salt_qty_output}),ie=u$(R?.date),K=await k9(R.date),ue=await $9(ie),X=ue?.reduce((Le,Ce)=>Le+Ce?.flour_qty,0)||0,H=ue?.reduce((Le,Ce)=>Le+Ce?.bran_qty,0)||0,oe=ue?.reduce((Le,Ce)=>Le+Ce?.yeast_qty,0)||0,ce=ue?.reduce((Le,Ce)=>Le+Ce?.salt_qty,0)||0,{flour_qty:Y,bran_qty:N,yeast_qty:ne,salt_qty:pe}=K||{},{flour_qty:te,bran_qty:k,yeast_qty:Z,salt_qty:se}=F||{},de={id:R.id,date:R.date,income:Number(Y||0),consumed:Number(R.flour_qty_output||0),current:Number(te||0)-Number(X)},J={id:R.id,date:R.date,income:Number(N||0),consumed:Number(R.bran_qty_output||0),current:Number(k||0)-Number(H)},ye={id:R.id,date:R.date,income:Number(ne||0),consumed:Number(R.yeast_qty_output||0),current:Number(Z||0)-Number(oe)},ve={id:R.id,date:R.date,income:Number(pe||0),consumed:Number(R.salt_qty_output||0),current:Number(se||0)-Number(ce)};await Promise.all([c.mutateAsync({table:"flour",payload:de}),c.mutateAsync({table:"bran",payload:J}),c.mutateAsync({table:"yeast",payload:ye}),c.mutateAsync({table:"salt",payload:ve})])}catch(F){console.error("confirm or consume failed:",F)}};function M(R,F=[]){if(!Array.isArray(R))return F;for(const ie of R){if(F.some(k=>k.id===ie.id)||Number(ie.total||0)+Number(ie.dry_meals_bakery||0)<=0)continue;const H=new Date(ie.date).getMonth()+1,oe=[11,12,1,2,3].includes(H);let ce=oe?(Number(ie.total)+Number(ie.dry_meals_bakery))*6:Number(ie.total)*5+Number(ie.dry_meals_bakery)*6;$?.is_ramadan&&(ce=Number(ie.total)*4+Number(ie.dry_meals_bakery)*6);const Y=Number.isFinite(ce)?yl(Number(ce)):0,N=Rd(yl(Number(Y/1550||0))),ne=Rd(yl(Number(Y*3/1550||0))),pe=oe?N:Rd(yl(Number(Y/3100||0))),te=N;F.push({id:ie.id,date:ie.date,total_output:ie.total,dry_meals_output:ie.dry_meals_bakery,bread_output:Y,flour_qty_output:N,bran_qty_output:ne,yeast_qty_output:pe,salt_qty_output:te,notConfirmed:!0})}return F}const O=S.useMemo(()=>{if(o){const F=Array.isArray(x)?[...x]:[];return!_||_===null?F:M(_,F)}const R=Array.isArray(p)?[...p]:[];return!y||y===null?R:M(y,R)},[o,p,y,M,x,_]),z=S.useMemo(()=>{const R=ie=>{const K=Number(ie??0);return Number.isFinite(K)?K:0},F=ie=>Rd(yl(Number(O?.reduce((K,ue)=>K+R(ue[ie]),0))));return{total_output:F("total_output"),dry_meals_output:F("dry_meals_output"),bread_output:F("bread_output"),flour_qty_output:F("flour_qty_output"),bran_qty_output:F("bran_qty_output"),yeast_qty_output:F("yeast_qty_output"),salt_qty_output:F("salt_qty_output")}},[O]),I=S.useMemo(()=>O?.find(F=>F.notConfirmed)?.id||null,[O]);return D||g||b||o&&(j||C)?r.jsx(Ae,{}):r.jsxs(Wk,{children:[r.jsx(d$,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsxs(e$,{children:["تفريدة المخبز"," ",O.length>0?`لشهر ${new Date(O[0].date).toLocaleDateString("ar-EG",{month:"long"})}`:null]}),r.jsx(t$,{children:r.jsx(Dd,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>a(R=>!R),children:e?"✖️ إغلاق":"عرض سابق"})}),e&&r.jsx(r$,{children:r.jsxs("form",{onSubmit:R=>{R.preventDefault();const F=R.target.from.value,ie=R.target.to.value;if(!F||!ie||F>ie){W.error("اختيار خاطيء");return}s({from:F,to:ie}),a(K=>!K)},children:[r.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[r.jsxs(tx,{children:[r.jsx(rx,{children:"من"}),r.jsx(nx,{name:"from",type:"date"})]}),r.jsxs(tx,{children:[r.jsx(rx,{children:"إلى"}),r.jsx(nx,{name:"to",type:"date"})]})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[r.jsx(Dd,{type:"submit",disabled:o&&j||o&&C,style:{minWidth:"12rem"},children:o&&j||o&&C?"جاري العرض...":"عرض"}),r.jsx(Dd,{type:"button",$bg:"#777",onClick:()=>{s(null),a(!1)},children:"إلغاء"})]})]})}),r.jsx(n$,{children:r.jsxs(a$,{children:[r.jsx(i$,{children:r.jsxs("tr",{children:[r.jsx(Gr,{children:"م"}),r.jsx(Gr,{children:"اليوم"}),r.jsx(Gr,{children:"التاريخ"}),r.jsx(Gr,{children:"الإجمالي"}),r.jsx(Gr,{children:"الجاف"}),r.jsx(Gr,{children:"عدد الأرغفة المصنعة"}),r.jsx(Gr,{children:"الدقيق"}),r.jsx(Gr,{children:"النخالة"}),r.jsx(Gr,{children:"الخميرة"}),r.jsx(Gr,{children:"الملح"}),r.jsx(Gr,{children:"إجراءات"})]})}),r.jsxs(o$,{children:[O?.length===0&&r.jsx("tr",{children:r.jsx(gt,{colSpan:"11",children:"لا يوجد بيانات يرجى إضافة أعداد أولاً"})}),O?.map((R,F)=>r.jsxs("tr",{children:[r.jsx(gt,{children:1+F}),r.jsx(gt,{children:new Date(R.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(gt,{children:R.date}),r.jsx(gt,{children:R.total_output}),r.jsx(gt,{children:R.dry_meals_output||"-"}),r.jsx(gt,{children:R.bread_output}),r.jsx(gt,{children:R.flour_qty_output}),r.jsx(gt,{children:R.bran_qty_output}),r.jsx(gt,{children:R.yeast_qty_output}),r.jsx(gt,{children:R.salt_qty_output}),r.jsx(gt,{children:R.notConfirmed?r.jsx(Dd,{disabled:u.isPending||h.isPending||c.isPending||R.id!==I,onClick:()=>A(R),children:R.id!==I?"أكد السابق أولاً":"تأكيد الصرف"}):"تم الصرف"})]},R.id||F)),O?.length>0&&r.jsxs(s$,{children:[r.jsx(gt,{colSpan:3,children:"الإجمالي"}),r.jsx(gt,{children:z.total_output}),r.jsx(gt,{children:z.dry_meals_output||"-"}),r.jsx(gt,{children:z.bread_output}),r.jsx(gt,{children:z.flour_qty_output}),r.jsx(gt,{children:z.bran_qty_output}),r.jsx(gt,{children:z.yeast_qty_output}),r.jsx(gt,{children:z.salt_qty_output}),r.jsx(gt,{children:"-"})]})]})]})}),r.jsx(l$,{children:r.jsx(c$,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}function rc(e,a){return e?`${e}_${a}`:a}async function m$(e,a=""){const o=await fetch(`/api/${rc(a,"soldier_roles")}?level=${encodeURIComponent(e)}&order=asc`);if(!o.ok)throw new Error("فشل تحميل بيانات الجنود");const s=await o.json();return Array.isArray(s)?s:[]}async function h$({name:e,level:a,from_date:o,to_date:s},c=""){const u=await fetch(`/api/${rc(c,"soldier_roles")}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,level:a,from_date:o,to_date:s})});if(!u.ok)throw new Error("حدث خطأ أثناء الإضافة");return u.json()}async function p$(e,a=""){if(!(await fetch(`/api/${rc(a,"soldier_roles")}/${encodeURIComponent(e)}`,{method:"DELETE"})).ok)throw new Error("حدث خطأ أثناء الحذف");return e}async function g$(e,a=""){const o=await fetch(`/api/${rc(a,"role_dates")}?level=${encodeURIComponent(e)}&limit=1`);if(!o.ok)throw new Error("فشل تحميل تواريخ الدور");const s=await o.json();return Array.isArray(s)&&s.length?s[0]:null}async function y$({level:e,from_date:a,to_date:o},s=""){const c=rc(s,"role_dates"),u=await fetch(`/api/${c}?level=${encodeURIComponent(e)}&limit=1`);if(!u.ok)throw new Error("فشل جلب تواريخ الدور الحالية");const h=await u.json(),p=Array.isArray(h)&&h.length?h[0]:null;if(p){const y=await fetch(`/api/${c}/${encodeURIComponent(p.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:e,from_date:a,to_date:o})});if(!y.ok)throw new Error("فشل تحديث التواريخ");return y.json()}const g=await fetch(`/api/${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:e,from_date:a,to_date:o})});if(!g.ok)throw new Error("فشل إنشاء التواريخ");return g.json()}function b$(e,a=""){return je({queryKey:["soldier_roles",a||"",e],queryFn:()=>m$(e,a)})}function x$(e=""){const a=Te();return Re({mutationFn:o=>h$(o,e),onSuccess:o=>{yt.success("تمت إضافة الجندي بنجاح");const s=o?.level;s?a.invalidateQueries(["soldier_roles",e||"",s]):a.invalidateQueries({queryKey:["soldier_roles",e||""]})},onError:()=>yt.error("فشل في الإضافة")})}function v$(e=""){const a=Te();return Re({mutationFn:o=>p$(o,e),onSuccess:()=>{yt.success("تم حذف الجندي بنجاح"),a.invalidateQueries({queryKey:["soldier_roles",e||""]})},onError:()=>yt.error("حدث خطأ أثناء الحذف")})}function j$(e,a=""){return je({queryKey:["role_dates",a||"",e],queryFn:()=>g$(e,a)})}function w$(e=""){const a=Te();return Re({mutationFn:o=>y$(o,e),onSuccess:(o,s)=>{const c=s?.level;c?a.invalidateQueries(["role_dates",e||"",c]):a.invalidateQueries({queryKey:["role_dates",e||""]}),yt.success("تم حفظ التواريخ بنجاح")},onError:()=>yt.error("خطأ أثناء حفظ التواريخ")})}const _$=f.div`
  direction: rtl;
  padding: 2rem;
  background: var(--color-grey-50);
  min-width: 95rem;
  @media print {
    min-width: auto !important;
  }
`,S$=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  margin-bottom: 2rem;
  font-size: 2.4rem;
`,k$=f.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`,$$=f.div`
  background: var(--color-grey-0);
  border: 1px solid var(--color-brand-200);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  width: 100%;
`,C$=f.h2`
  text-align: center;
  color: var(--color-brand-600);
  margin-bottom: 1.6rem;
`,E$=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.6rem;
  text-align: center;
`,ax=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 1rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-grey-300);
  font-size: 1.4rem;
  width: 100%;
`,Eu=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: 0.6rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.4rem;

  &:hover {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,T$=f(Eu)`
  font-size: 1.2rem;

  background: #e63946;
  padding: 0.2rem 1rem;

  &:hover {
    background: #d62828;
  }
`,D$=f.input`
  width: 100%;
  background-color: var(--color-grey-0);

  padding: 0.6rem 1rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-grey-300);
  font-size: 1.4rem;
  margin-bottom: 1rem;
`,R$=f.div`
  flex-grow: 1;
  overflow-y: auto;
`,z$=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  margin-top: 1.2rem;
  /* table-layout: fixed; */
`,A$=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,r0=f.th`
  border: 1px solid var(--color-grey-300);
  text-align: center;
  padding: 0.6rem 0.8rem;

  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(3) {
    width: 20%;
  }
`,n0=f.td`
  border: 1px solid var(--color-grey-300);
  text-align: center;
  padding: 0.6rem 0.8rem;
`,ix=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & span {
    width: 40%;
  }
`,ox=f.span`
  margin-left: 10px;
`;function a0({title:e,level:a,prefix:o=""}){const{data:s=[]}=b$(a,o),c=x$(o),u=v$(o),{data:h}=j$(a,o),p=w$(o),[g,y]=S.useState(""),[b,x]=S.useState(""),[j,_]=S.useState(""),[C,$]=S.useState(!1);S.useEffect(()=>{h?(y(h.from_date||""),x(h.to_date||""),h.from_date&&h.to_date&&$(!0)):(y(""),x(""),$(!1))},[h]);async function D(){if(!(!g||!b))try{await p.mutateAsync({level:a,from_date:g,to_date:b}),$(!0)}catch(O){console.error("upsertDates failed",O)}}async function A(){if(!(!g||!b)&&j.trim())try{await c.mutateAsync({name:j,level:a,from_date:g,to_date:b}),_("")}catch(O){console.error("addRole failed",O)}}async function M(O){try{await u.mutateAsync(O)}catch(z){console.error("deleteRole failed",z)}}return r.jsxs($$,{children:[r.jsx(C$,{children:e}),r.jsx(E$,{children:C?r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:[r.jsx(ox,{children:"تاريخ القيام :"}),g]}),r.jsxs("p",{children:[r.jsx(ox,{children:"تاريخ العودة :"}),b]}),r.jsx(Eu,{disabled:p.isLoading,onClick:()=>$(!1),children:"✏️ تعديل التاريخ"})]}):r.jsxs(r.Fragment,{children:[r.jsxs(ix,{children:[r.jsx("span",{children:"تاريخ القيام"}),r.jsx(ax,{type:"date",value:g,onChange:O=>y(O.target.value)})]}),r.jsxs(ix,{children:[r.jsx("span",{children:"تاريخ العودة"}),r.jsx(ax,{type:"date",value:b,onChange:O=>x(O.target.value)})]}),r.jsx(Eu,{disabled:!g||!b||p.isLoading,onClick:D,children:"✅ تأكيد التاريخ"})]})}),r.jsx(D$,{type:"text",placeholder:"اسم الجندي",value:j,onChange:O=>_(O.target.value)}),r.jsx(Eu,{disabled:c.isLoading||!C||!j.trim(),onClick:A,children:"➕ إضافة"}),r.jsx(R$,{children:r.jsxs(z$,{children:[r.jsx(A$,{children:r.jsxs("tr",{children:[r.jsx(r0,{children:"م"}),r.jsx(r0,{children:"الاسم"}),r.jsx(r0,{})]})}),r.jsx("tbody",{children:s.map((O,z)=>r.jsxs("tr",{children:[r.jsx(n0,{children:z+1}),r.jsx(n0,{children:O.name}),r.jsx(n0,{children:r.jsx(T$,{disabled:u.isLoading,onClick:()=>M(O.id),children:"🗑"})})]},O.id))})]})})]})}function r6({bakery:e=!1}){const a=e?"bakery":"";return r.jsxs(_$,{children:[r.jsx(S$,{children:"الأدوار"}),r.jsxs(k$,{children:[r.jsx(a0,{title:"الدور الأول",level:"الأول",prefix:a}),r.jsx(a0,{title:"الدور الثاني",level:"الثاني",prefix:a}),r.jsx(a0,{title:"الدور الثالث",level:"الثالث",prefix:a})]})]})}function q$(){return r.jsx(r6,{bakery:!0})}function N$(){return r.jsx(ms,{branch:"مجندين المخبز",title:"مجندين المخبز"})}const O$={flour:"الدقيق",bran:"النخالة",yeast:"الخميرة",salt:"الملح"},M$=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,B$=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    color: black;
  }
`,U$=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,F$=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,L$=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,zd=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,P$=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,Ad=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,H$=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,Q$=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,G$=f.p`
  display: none;
  font-size: 2.2rem;
  text-align: center;
  color: black;
  margin-bottom: 2rem;

  @media print {
    display: block;
  }
`,V$=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,Y$=(e,a=2)=>Number(Number(e).toFixed(a));function I$(){const{data:e,isPending:a}=je({queryKey:["bakery-current-stock"],queryFn:nf}),o=new Date().toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit"});return a?r.jsx(Ae,{}):r.jsxs(M$,{children:[r.jsx(V$,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(B$,{children:"الأرصدة الحالية للمخبز"}),r.jsxs(G$,{children:["التاريخ : ",o]}),r.jsx(U$,{children:r.jsxs(F$,{children:[r.jsx(L$,{children:r.jsxs("tr",{children:[r.jsx(zd,{children:"م"}),r.jsx(zd,{children:"اسم الصنف"}),r.jsx(zd,{children:"الرصيد الحالي"}),r.jsx(zd,{children:"الوحدة"})]})}),r.jsx(P$,{children:Object.entries(O$).map(([s,c],u)=>{const h=`${s}_qty`,p=`${s}_unit`;return r.jsxs("tr",{children:[r.jsx(Ad,{children:u+1}),r.jsx(Ad,{children:c}),r.jsx(Ad,{children:e&&e[h]!=null?Y$(Number(e[h])):"—"}),r.jsx(Ad,{children:e&&e[p]?e[p]:"—"})]},s)})})]})}),r.jsx(H$,{children:r.jsx(Q$,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const K$=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,X$=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,Z$=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,J$=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,W$=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,eC=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function tC(){const e=[{title:"قاعة ضباط",path:"officers-hall"},{title:"مجندين المكتب",path:"office-soldiers"},{title:"وحدة التعيينات",path:"rations-unit"},{title:"قاعة أفراد",path:"personnel-hall"},{title:"الشئون الإدارية",path:"admin-affairs"}];return r.jsxs(K$,{children:[r.jsx(X$,{children:"الفرعيات"}),r.jsx(Z$,{children:e.map(a=>r.jsx(J$,{to:`/rations/workforce/soldiers/distribution/branches/${a.path}`,children:r.jsx(W$,{children:r.jsx(eC,{children:a.title})})},a.path))})]})}async function rC(e){const a=await fetch(`/api/items_withdrawals?date=${encodeURIComponent(e)}&order_by=created_at&order=asc`);if(!a.ok)throw new Error("فشل جلب السحوبات");const o=await a.json();return Array.isArray(o)?o:[]}async function nC(e,a){const o=await fetch(`/api/items_withdrawals?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}&order_by=date&order=asc`);if(!o.ok)throw new Error("فشل جلب السحوبات");const s=await o.json();return Array.isArray(s)?s.map(c=>({item_name:c.item_name,quantity:c.quantity,unit:c.unit})):[]}async function aC(e,a){const o=await fetch(`/api/incoming_items?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}&order_by=date&order=asc`);if(!o.ok)throw new Error("فشل جلب الواردات");const s=await o.json();return Array.isArray(s)?s:[]}async function iC(e,a,o){const s=await fetch(`/api/incoming_items?item_name=${encodeURIComponent(e)}&date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`);if(!s.ok)throw new Error("فشل في جلب بيانات التقرير المحدد.");const c=await s.json();return Array.isArray(c)?c:[]}async function oC(e,a,o){const s=await fetch(`/api/items_withdrawals?item_name=${encodeURIComponent(e)}&date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`);if(!s.ok)throw new Error("فشل في جلب بيانات التقرير المحدد.");const c=await s.json();return Array.isArray(c)?c:[]}const sC={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},i0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,sx=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,o0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,lC=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,cC=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Ro=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,zo=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,dC=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,uC=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,fC=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,mC=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,hC=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,s0=(e,a=4)=>Number(Number(e).toFixed(a));function pC(){const[e]=nr(),a=e.get("date"),{data:o,isPending:s,error:c}=je({queryKey:["daily-report",a],queryFn:()=>rC(a),enabled:!!a}),u={};o&&o.forEach(g=>{const y=`${g.item_name}||${g.unit||""}`,b=Number(g.quantity)||0,x=Number(g.stock_after)||0;u[y]||(u[y]={item_name:g.item_name,unit:g.unit||"",quantity:0,stock_after:0}),u[y].quantity+=b,u[y].stock_after=x});const h=[];if(Object.entries(sC).forEach(([g,y])=>{const b=Object.values(u).filter(x=>x.item_name===g);b.length===0?h.push({item_key:g,item_label:y,quantity:0,stock_after:0,stock_before:0,unit:""}):b.forEach(x=>{h.push({item_key:g,item_label:y,quantity:x.quantity,stock_after:x.stock_after,stock_before:x.quantity+x.stock_after,unit:x.unit})})}),!a)return r.jsxs(i0,{children:[r.jsx(sx,{children:r.jsx(o0,{children:"تقرير يومي للصرف للأصناف الطازجة"})}),r.jsx(o0,{children:"لم يتم تمرير التاريخ. الرجاء اختيار تاريخ من صفحة الأصناف."})]});if(s)return r.jsx(Ae,{});if(c)return r.jsxs(i0,{children:["حدث خطأ: ",c.message]});const p=new Date(a).toLocaleDateString("ar-EG",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"});return r.jsxs(i0,{children:[r.jsx(fC,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(sx,{children:r.jsxs(o0,{children:["تقرير يومي للصرف للأصناف الطازجة — ",p]})}),r.jsx(lC,{children:r.jsxs(cC,{children:[r.jsx(mC,{children:r.jsxs("tr",{children:[r.jsx(Ro,{children:"م"}),r.jsx(Ro,{children:"اسم الصنف"}),r.jsx(Ro,{children:"الرصيد قبل الصرف"}),r.jsx(Ro,{children:"الكمية المصروفة"}),r.jsx(Ro,{children:"الرصيد بعد الصرف"}),r.jsx(Ro,{children:"الوحدة"})]})}),r.jsx(hC,{children:h.map((g,y)=>r.jsxs("tr",{children:[r.jsx(zo,{children:y+1}),r.jsx(zo,{children:g.item_label}),r.jsx(zo,{children:s0(Number(g.stock_before))||"-"}),r.jsx(zo,{children:s0(Number(g.quantity))||"-"}),r.jsx(zo,{children:s0(Number(g.stock_after))||"-"}),r.jsx(zo,{children:g.unit||"-"})]},`${g.item_key}-${g.unit||"no-unit"}-${y}`))})]})}),r.jsx(dC,{children:r.jsx(uC,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}var n6={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lx=tt.createContext&&tt.createContext(n6),gC=["attr","size","title"];function yC(e,a){if(e==null)return{};var o=bC(e,a),s,c;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(c=0;c<u.length;c++)s=u[c],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}function bC(e,a){if(e==null)return{};var o={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(a.indexOf(s)>=0)continue;o[s]=e[s]}return o}function Qu(){return Qu=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},Qu.apply(this,arguments)}function cx(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),o.push.apply(o,s)}return o}function Gu(e){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?cx(Object(o),!0).forEach(function(s){xC(e,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):cx(Object(o)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(o,s))})}return e}function xC(e,a,o){return a=vC(a),a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function vC(e){var a=jC(e,"string");return typeof a=="symbol"?a:a+""}function jC(e,a){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var s=o.call(e,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function a6(e){return e&&e.map((a,o)=>tt.createElement(a.tag,Gu({key:o},a.attr),a6(a.child)))}function qe(e){return a=>tt.createElement(wC,Qu({attr:Gu({},e.attr)},a),a6(e.child))}function wC(e){var a=o=>{var{attr:s,size:c,title:u}=e,h=yC(e,gC),p=c||o.size||"1em",g;return o.className&&(g=o.className),e.className&&(g=(g?g+" ":"")+e.className),tt.createElement("svg",Qu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,h,{className:g,style:Gu(Gu({color:e.color||o.color},o.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&tt.createElement("title",null,u),e.children)};return lx!==void 0?tt.createElement(lx.Consumer,null,o=>a(o)):a(n6)}function nc(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function ac(e){return qe({attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"},child:[]},{tag:"path",attr:{d:"M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"},child:[]}]})(e)}function sf(e){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M-618-3000H782V600H-618zM0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function ic(e){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"},child:[]}]})(e)}function i6(e){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"},child:[]}]})(e)}function o6(e){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"},child:[]}]})(e)}function _C(e){return qe({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h5a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-5 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"},child:[]},{tag:"path",attr:{d:"M4.415 12l6.585 -6.586v3.586l.007 .117a1 1 0 0 0 .993 .883l5 -.001v4l-5 .001a1 1 0 0 0 -1 1v3.586l-6.585 -6.586z"},child:[]},{tag:"path",attr:{d:"M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"},child:[]}]})(e)}function SC(e){return qe({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.037 1.037 0 0 0 -.2 .284l-.022 .052a.95 .95 0 0 0 -.06 .222l-.008 .067l-.002 .063v-.035v.073a1.034 1.034 0 0 0 .07 .352l.023 .052l.03 .061l.022 .037a1.2 1.2 0 0 0 .05 .074l.024 .03l.073 .082l4 4l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.585l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z",fill:"currentColor",strokeWidth:"0"},child:[]}]})(e)}function s6(e){return qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.5 9.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M9.5 4.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M9.5 14.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M4.5 19.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M14.5 9.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M19.5 4.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M14.5 19.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M19.5 14.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(e)}async function kC(e,a){const o=`/api/${e}?item_name=${encodeURIComponent(a)}&order_by=date&order=desc&limit=1`,s=await fetch(o);if(!s.ok){const u=await s.json().catch(()=>null);throw new Error(u?.error||"فشل تحميل البيانات")}const c=await s.json();return Array.isArray(c)&&c.length?{unit:c[0].unit,date:c[0].date,expiry_date:c[0].expiry_date,created_at:c[0].created_at,quantity:c[0].quantity,mission_meals:c[0].mission_meals||0}:null}function hs(e,a){return je({queryKey:["last-income",e,a],queryFn:()=>kC(e,a),enabled:!!(e&&a)})}async function lf(e,a,o){const s=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),c=`/api/${e}?item_name=${encodeURIComponent(a)}&date_from=${encodeURIComponent(o)}&date_to=${encodeURIComponent(s)}`,u=await fetch(c);if(!u.ok){const p=await u.json().catch(()=>null);throw new Error(p?.error||"فشل تحميل البيانات")}const h=await u.json();return Array.isArray(h)&&h.length?h:null}async function l6(e,a){const o=`/api/${e}?item_name=${encodeURIComponent(a)}&order_by=date&order=desc&limit=1`,s=await fetch(o);if(!s.ok){const u=await s.json().catch(()=>null);throw new Error(u?.error||"فشل تحميل البيانات")}const c=await s.json();return Array.isArray(c)&&c.length?{unit:c[0].unit,date:c[0].date,expiry_date:c[0].expiry_date,created_at:c[0].created_at,quantity:c[0].quantity,mission_meals:c[0].mission_meals||0}:null}function I1(e,a){return je({queryKey:["last-withdrawal",e,a],queryFn:()=>l6(e,a),enabled:!!(e&&a)})}async function $C(){const e=await fetch("/api/permit_number?limit=1");if(!e.ok)throw new Error("فشل جلب البيانات");const a=await e.json();return Array.isArray(a)&&a.length?a[0]:null}async function CC(e){const a=await fetch("/api/permit_number?limit=1");if(!a.ok)throw new Error("فشل الوصول إلى البيانات");const o=await a.json(),s=Array.isArray(o)&&o.length?o[0]:null,c={value:e,created_at:new Date().toISOString()};if(s&&s.id){const u=await fetch(`/api/permit_number/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل التحديث");return await u.json()}else{const u=await fetch("/api/permit_number",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل إنشاء السجل");return await u.json()}}function EC(){return je({queryKey:["permit-number"],queryFn:$C})}function TC(){const e=Te(),a=Re({mutationFn:CC,onSuccess:o=>{e.setQueryData(["permit-number"],o)}});return{updateAsync:a.mutateAsync,isPending:a.isPending,isError:a.isError,error:a.error,isSuccess:a.isSuccess}}async function c6(){const e=await fetch("/api/current_stock");if(!e.ok)throw new Error("فشل تحميل المخزون");const a=await e.json();return Array.isArray(a)?a:[]}async function DC(e){const a=await fetch(`/api/current_stock?item_name=${encodeURIComponent(e)}&limit=1`);if(!a.ok)throw new Error("فشل تحميل مخزون الصنف");const o=await a.json();return Array.isArray(o)&&o.length?o[0]:null}async function K1(e,a=""){const o=await fetch(`/api/current_stock?item_name=${encodeURIComponent(e)}&limit=1`);if(!o.ok)throw new Error("فشل جلب بيانات المخزون");const s=await o.json(),c=Array.isArray(s)&&s.length?s[0]:null;if(c)return c;const u=await fetch("/api/current_stock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e,current_quantity:0,unit:a})});if(!u.ok)throw new Error("فشل إنشاء صف المخزون");return await u.json()}async function cf(e,a,o=null){const s=await K1(e,o??""),u={current_quantity:Number(s.current_quantity||0)+Number(a||0),created_at:new Date().toISOString()};o!==null&&(u.unit=o);const h=await fetch(`/api/current_stock/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!h.ok)throw new Error("فشل تحديث المخزون");return await h.json()}const RC=(e,a=4)=>Number(Number(e).toFixed(a));async function zC(e){if(!e||!e.id)throw new Error("payload must include id");const a=await fetch(`/api/daily_withdrawal/${e.id}`);let o=null;if(a.ok)o=await a.json();else if(a.status!==404)throw new Error("فشل الوصول إلى بيانات daily_withdrawal");const s=h=>Number.isFinite(Number(h))?RC(Number(h)):0,c=Object.keys(e).filter(h=>h!=="created_at");if(o?.id){if(c.every(g=>{const y=o[g],b=e[g];if(g==="manual_swap")try{const x=typeof y=="string"?JSON.parse(y):y??{},j=typeof b=="string"?JSON.parse(b):b??{};return JSON.stringify(x)===JSON.stringify(j)}catch{return!1}return s(y)===s(b)}))return{skipped:!0};const p=await fetch(`/api/daily_withdrawal/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!p.ok)throw new Error("فشل تحديث daily_withdrawal");return await p.json()}const u=await fetch("/api/daily_withdrawal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!u.ok)throw new Error("فشل إنشاء daily_withdrawal");return await u.json()}function AC(e){return je({queryKey:["daily-withdrawal",e],queryFn:async()=>{const a=await fetch(`/api/daily_withdrawal?date=${e}`);if(!a.ok)throw new Error("فشل جلب daily_withdrawal");const o=await a.json();return Array.isArray(o)&&o.length?o:null}})}function df(e){return je({queryKey:["daily-withdrawal",e],queryFn:async()=>{if(e===void 0)return{};const a=await fetch(`/api/daily_withdrawal/${e}`);if(a.status===404)return{};if(!a.ok)throw new Error("فشل جلب daily_withdrawal");return await a.json()}})}function qC(e){return je({queryKey:["daily-withdrawal",e],queryFn:async()=>{const a=await fetch(`/api/daily_withdrawal?date_from=${encodeURIComponent(e?.from)}&date_to=${encodeURIComponent(e?.to)}&order_by=date&order=asc`);if(!a.ok)throw new Error("فشل جلب daily_withdrawal");const o=await a.json();return Array.isArray(o)&&o.length?o:null},enabled:!!e})}async function d6(){const e=await fetch("/api/dry_current_stock");if(!e.ok)throw new Error("فشل تحميل المخزون");const a=await e.json();return Array.isArray(a)?a:[]}async function NC(e){const a=await fetch(`/api/dry_current_stock?item_name=${encodeURIComponent(e)}&limit=1`);if(!a.ok)throw new Error("فشل تحميل مخزون الصنف");const o=await a.json();return Array.isArray(o)&&o.length?o[0]:null}async function X1(e,a=""){const o=await fetch(`/api/dry_current_stock?item_name=${encodeURIComponent(e)}&limit=1`);if(!o.ok)throw new Error("فشل جلب بيانات المخزون");const s=await o.json(),c=Array.isArray(s)&&s.length?s[0]:null;if(c)return c;const u=await fetch("/api/dry_current_stock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e,current_quantity:0,unit:a})});if(!u.ok)throw new Error("فشل إنشاء صف المخزون");return await u.json()}async function uf(e,a,o=null){const s=await X1(e,o??""),u={current_quantity:Number(s.current_quantity||0)+Number(a||0),created_at:new Date().toISOString()};o!==null&&(u.unit=o);const h=await fetch(`/api/dry_current_stock/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!h.ok)throw new Error("فشل تحديث المخزون");return await h.json()}async function u6(){const e=await fetch("/api/meat_current_stock");if(!e.ok)throw new Error("فشل تحميل المخزون");return await e.json()}async function OC(e){const a=await fetch(`/api/meat_current_stock?item_name=${encodeURIComponent(e)}&limit=1`);if(!a.ok)throw new Error("فشل تحميل مخزون الصنف");const o=await a.json();return Array.isArray(o)&&o.length?o[0]:null}async function Z1(e,a=""){const o=await fetch(`/api/meat_current_stock?item_name=${encodeURIComponent(e)}&limit=1`);if(!o.ok)throw new Error("فشل جلب بيانات المخزون");const s=await o.json(),c=Array.isArray(s)&&s.length?s[0]:null;if(c)return c;const u=await fetch("/api/meat_current_stock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e,current_quantity:0,unit:a})});if(!u.ok)throw new Error("فشل إنشاء صف المخزون");return await u.json()}async function ff(e,a,o=null){const s=await Z1(e,o??""),u={current_quantity:Number(s.current_quantity||0)+Number(a||0),created_at:new Date().toISOString()};o!==null&&(u.unit=o);const h=await fetch("/api/meat_current_stock/"+s.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!h.ok)throw new Error("فشل تحديث المخزون");return await h.json()}const MC=f.tr`
  font-weight: 900;
  font-size: 1.7rem;
  border-top: 1px solid var(--color-grey-900);

  td {
    padding: 1.5rem;
  }
`,dx=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    background-color: white;
    color: black;
    min-width: auto !important;
  }
`,qd=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media print {
    color: black;
  }
`,BC=f.h2`
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media print {
    color: black;
  }
`,UC=f.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`,FC=f.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,LC=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 40%;
  margin: 3rem 0 5rem;

  @media print {
    overflow: visible !important;
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,PC=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.5rem;
`,HC=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media print {
    overflow: visible !important;
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,ux=f.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  gap: 0.6rem;
  border: none;

  @media print {
    display: none;
  }
`,QC=f.button`
  background: ${({$active:e})=>e?"var(--color-brand-600)":"var(--color-grey-200)"};
  color: ${({$active:e})=>e?"#ddd":"var(--color-grey-700)"};
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.6rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.7rem;
`,GC=f.div`
  display: none;
  justify-content: flex-end;
  margin-bottom: -2rem;
  margin-left: 1rem;
  color: #000;
  font-size: 2rem;
  font-weight: 700;

  @media print {
    display: ${({$active:e})=>e&&"flex"};
  }
`,VC=f.table`
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.5rem;

  @media print {
    th:nth-child(7),
    td:nth-child(7),
    th:last-child,
    td:last-child {
      display: none !important;
    }
  }
`,fx=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #fff !important;
    color: black !important;
  }
`,cn=f.th`
  padding: 1rem;
  text-align: center;
  font-weight: 700;
`,mx=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,er=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }
`,YC=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,IC=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,KC=f.input`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 2.5rem;
  height: 100%;
  width: 6rem;
  padding-top: 1px;
  text-align: center;
`,l0=f.button`
  background: #777;
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  font-size: 2rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,XC=f.form`
  display: flex;
  gap: 1rem;
  height: 3rem;
  align-items: center;
`,ZC=f(Gt)`
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: ${({$visited:e})=>e?"var(--color-grey-500)":"var(--color-brand-600)"};

  opacity: ${({$visited:e})=>e?.5:1};

  &:hover {
    color: ${({$visited:e})=>e?"var(--color-grey-600)":"var(--color-brand-700)"};
  }
`,JC=f.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;

  @media print {
    display: none;
  }
`,WC=f.span`
  font-size: 1.8rem;
  font-weight: 700;
`,eE=f.select`
  font-size: 1.7rem;
  font-weight: 600;
  padding: 0.6rem 1.4rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  cursor: pointer;
  transition: all 0.2s ease;
`,J1={rice:"أرز بلدي",macaroni:"مكرونة",sauce_rice:"صلصة أرز",black_pepper_rice:"فلفل أسود أرز",sauce_macaroni:"صلصة مكرونة",black_pepper_macaroni:"فلفل أسود مكرونة",noodles:"شعرية",cooking_oil:"زيت طعام",white_beans:"فاصوليا",frozen_vegetables:"خضار مجمد",fava:"فول صحيح",sugar:"سكر",tea:"شاي",cumin:"كمون",salt:"ملح",garlic_powder:"ثوم بودرة",spices:"بهارات",eggs:"بيض",white_cheese:"جبنة بيضاء",jam:"مربى",halawa:"حلاوة",canned_fava:"فول معلب",meat:"لحوم",chicken:"دواجن",lentils:"عدس",juice:"عصير",zabady:"زبادي",onion:"بصل",fruits:"فاكهة",salad:"سلطة"},hx=Object.entries(J1).reduce((e,[a,o])=>(e[o]=a,e),{}),tE=Object.keys(J1),px=Object.fromEntries(tE.map((e,a)=>[e,a])),bl={rice:{name:"أرز بلدي",category:"fresh",officers:.09,individuals:.09,soldiers:.09,workDays:"السبت-الأحد-الثلاثاء-الأربعاء"},macaroni:{name:"مكرونة",category:"fresh",officers:.09,individuals:.09,soldiers:.09,workDays:"الإثنين-الخميس-الجمعة"},"sauce-rice":{name:"صلصة أرز",category:"fresh",officers:.015,individuals:.015,soldiers:.015,workDays:"يومياً"},"black-pepper-rice":{name:"فلفل أسود أرز",category:"fresh",officers:25e-5,individuals:25e-5,soldiers:25e-5,workDays:"يومياً"},"sauce-macaroni":{name:"صلصة مكرونة",category:"fresh",officers:.025,individuals:.025,soldiers:.025,workDays:"يومياً"},"black-pepper-macaroni":{name:"فلفل أسود مكرونة",category:"fresh",officers:75e-5,individuals:75e-5,soldiers:75e-5,workDays:"يومياً"},noodles:{name:"شعرية",category:"fresh",officers:.015,individuals:.015,soldiers:.015,workDays:"يومياً"},"cooking-oil":{name:"زيت طعام",category:"fresh",officers:.012,individuals:.017,soldiers:.017,workDays:"يومياً"},"white-beans":{name:"فاصوليا",category:"fresh",officers:.04,individuals:.04,soldiers:.04,workDays:"الإثنين-الخميس-الجمعة"},fava:{name:"فول صحيح",category:"fresh",officers:0,individuals:.04,soldiers:.04,workDays:"يومياً"},sugar:{name:"سكر",category:"fresh",officers:1,individuals:1,soldiers:1,workDays:"يومياً"},tea:{name:"شاي",category:"fresh",officers:1,individuals:1,soldiers:1,workDays:"يومياً"},cumin:{name:"كمون",category:"fresh",officers:25e-5,individuals:25e-5,soldiers:25e-5,workDays:"يومياً"},salt:{name:"ملح",category:"fresh",officers:.01,individuals:.01,soldiers:.01,workDays:"يومياً"},"garlic-powder":{name:"ثوم بودرة",category:"fresh",officers:25e-5,individuals:25e-5,soldiers:25e-5,workDays:"يومياً"},spices:{name:"بهارات",category:"fresh",officers:25e-5,individuals:25e-5,soldiers:25e-5,workDays:"يومياً"},eggs:{name:"بيض",category:"fresh",officers:1,individuals:0,soldiers:0,workDays:"يومياً"},"white-cheese":{name:"جبنة بيضاء",category:"dry",officers:2,individuals:1,soldiers:1,workDays:"يومياً"},jam:{name:"مربى",category:"dry",officers:2,individuals:1,soldiers:1,workDays:"السبت-الإثنين-الثلاثاء-الخميس-الجمعة"},halawa:{name:"حلاوة",category:"dry",officers:2,individuals:1,soldiers:1,workDays:"الأحد-الأربعاء"},"canned-fava":{name:"فول معلب",category:"dry",officers:.5,individuals:0,soldiers:0,workDays:"يومياً"},onion:{name:"بصل",category:"",officers:.01,individuals:.01,soldiers:.01,workDays:"يومياً"},fruits:{name:"فاكهة",category:"",officers:.175,individuals:.175,soldiers:.175,workDays:"يومياً"},salad:{name:"سلطة",category:"",officers:.35,individuals:.175,soldiers:.175,workDays:"يومياً"},meat:{name:"لحوم",category:"meat",officers:.1,individuals:.1,soldiers:.1,workDays:"الأحد"},chicken:{name:"دواجن",category:"meat",officers:.225,individuals:.225,soldiers:.225,workDays:"السبت-الثلاثاء-الأربعاء"},"frozen-vegetables":{name:"خضار مجمد",category:"meat",officers:.09,individuals:.09,soldiers:.09,workDays:"السبت-الأحد-الثلاثاء-الأربعاء"}},Tu={"أرز بلدي":{key:"rice",category:"fresh"},مكرونة:{key:"macaroni",category:"fresh"},"صلصة أرز":{key:"tomato-sauce",category:"fresh"},"فلفل أسود أرز":{key:"black-pepper",category:"fresh"},"صلصة مكرونة":{key:"tomato-sauce",category:"fresh"},"فلفل أسود مكرونة":{key:"black-pepper",category:"fresh"},شعرية:{key:"noodles",category:"fresh"},"زيت طعام":{key:"cooking-oil",category:"fresh"},فاصوليا:{key:"white-beans",category:"fresh"},"فول صحيح":{key:"fava",category:"fresh"},سكر:{key:"sugar",category:"fresh"},شاي:{key:"tea",category:"fresh"},كمون:{key:"cumin",category:"fresh"},ملح:{key:"salt",category:"fresh"},عدس:{key:"lentils",category:"fresh"},زبادي:{key:"zabady",category:"fresh"},"ثوم بودرة":{key:"garlic-powder",category:"fresh"},بهارات:{key:"spices",category:"fresh"},بيض:{key:"eggs",category:"fresh"},"جبنة بيضاء":{key:"white-cheese",category:"dry"},مربى:{key:"jam",category:"dry"},حلاوة:{key:"halawa",category:"dry"},"فول معلب":{key:"canned-fava",category:"dry"},عصير:{key:"juice",category:"dry"},لحوم:{key:"meat",category:"meat"},دواجن:{key:"chicken",category:"meat"},"خضار مجمد":{key:"frozen-vegetables",category:"meat"}},c0=["rice","macaroni"].sort().join("|"),gx=[["rice","macaroni"],["meat","chicken"],["jam","halawa"],["frozen-vegetables","white-beans"]],rE={"black-pepper-rice":{requires:["rice"]},"black-pepper-macaroni":{requires:["macaroni"]},"sauce-rice":{requires:["rice"]},"sauce-macaroni":{requires:["macaroni"]}};function Pl(e){const a=["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],o=new Date(e+"T00:00:00");return a[o.getDay()]}function f6(e){const o=new Date(e).getMonth()+1;return[11,12,1,2,3].includes(o)?"شتاء":"صيف"}function W1(e,a){const o=Bt((e.officers||0)*(a.officers||0)),s=Bt((e.individuals||0)*(a.individuals||0)),c=Bt((e.soldiers||0)*(a.soldiers||0));return ep(Bt(o+s+c))}function nE(e){return e?e==="يومياً"?["يومياً"]:e.split("-").map(a=>a.trim()):[]}function b1(e,a){const o=nE(e.workDays);return o.includes("يومياً")?!0:o.includes(a)}function Nd(e,a,o,s){if(e.some(u=>u.key===a))return e;const c=s[a];return c?[...e,{key:a,name:c.name,officersAmount:Bt((c.officers||0)*(o.officers||0)),individualsAmount:Bt((c.individuals||0)*(o.individuals||0)),soldiersAmount:Bt((c.soldiers||0)*(o.soldiers||0)),total:W1(c,o)}]:e}function aE(e,a,o){const s=a||Pl(o),c=b1(e.rice,s),u=b1(e.macaroni,s);if(c&&!u)return"macaroni";if(u&&!c)return"rice"}function iE({items:e,relations:a,counts:o,date:s,selectedDay:c}){const u=f6(s),h={},p=c||Pl(s),g=Object.keys(e);for(const x of g){const j=e[x];if(!j||j.hidden||!b1(j,p))continue;const _=W1(j,o);h[x]={key:x,item:j,required:_,chosenKey:x}}let y=!0;for(;y;){y=!1;for(const x of Object.keys(h)){const j=a[x];if(j&&j.requires&&j.requires.length>0){for(const _ of j.requires)if(!h[_]){delete h[x],y=!0;break}}}}return{visibleItems:Object.keys(e).filter(x=>h[x]).map(x=>{const j=h[x];return{key:x,name:j.item.name,officersAmount:Bt((j.item.officers||0)*(o.officers||0)),individualsAmount:Bt((j.item.individuals||0)*(o.individuals||0)),soldiersAmount:Bt((j.item.soldiers||0)*(o.soldiers||0)),total:ep(Bt(j.required))}}),season:u,selectedDay:c}}function oE(e){const a=Tu[e];if(!a)return null;const o=encodeURIComponent(a.key);switch(a.category){case"fresh":return`/rations/stores/fresh-meals/fresh-items/${o}`;case"dry":return`/rations/stores/dry-meals/dry-items/${o}`;case"meat":return`/rations/stores/azim-meats/meat-meals/meat-items/${o}`;default:return null}}function sE(e){return e==="fresh"?"items_withdrawals":e==="dry"?"dry_items_withdrawals":e==="meat"?"meat_items_withdrawals":null}function lE(e){if(e==="fresh")return"incoming_items";if(e==="dry")return"dry_incoming_items";if(e==="meat")return"meat_incoming_items"}function cE(e){const a={};return e.forEach(o=>{const s=o?.data;if(!s)return;const c=Array.isArray(s)?s:Array.isArray(s.data)?s.data:null;c&&c.forEach(u=>{const h=u.item_name,p=Number(u.current_quantity);h&&(a[h]=p)})}),a}const Bt=(e,a=5)=>Number(Number(e).toFixed(a)),ep=(e,a=3)=>{const o=Math.sign(e),[s,c=""]=Math.abs(e).toString().split("."),u=s+(a?"."+c.slice(0,a):"");return o*Number(u)};function dE(e){if(!e)return null;const a=new Date(e);return a.setDate(a.getDate()+1),a.toISOString().split("T")[0]}function uE(){const[e,a]=S.useState({}),[o,s]=S.useState(""),[c,u]=S.useState(!1),[h,p]=S.useState(!1),{data:g,isPending:y}=Ya(),{data:b,isPending:x}=EC(),{updateAsync:j,isPending:_}=TC(),{data:C,isPending:$,update:D}=t6(),{data:A,isPending:M}=df(g?.id),{register:O,setValue:z,getValues:I}=Ut();S.useEffect(()=>{g?.date&&s(Pl(g.date))},[g?.date]);const F=Fh({queries:[{queryKey:["all-current-stock"],queryFn:()=>c6(),enabled:!0},{queryKey:["all-dry-stock"],queryFn:()=>d6(),enabled:!0},{queryKey:["all-meat-stock"],queryFn:()=>u6(),enabled:!0}]}),ie=cE(F);let K=!1,ue=!1;F.forEach(le=>{(le.isFetching||le.isPending)&&(K=!0),le.isError&&(ue=!0)});const X=g?.date?f6(g.date):"",H=g?.date?Pl(g.date):"",oe=structuredClone(rE),ce=e[c0]||aE(bl,o,g?.date),Y=Object.keys(bl).reduce((le,ke)=>(le[ke]={...bl[ke]},le),{});["السبت","الأحد","الثلاثاء"].includes(H)&&Y.eggs&&(Y.eggs={...Y.eggs,officers:2}),["الجمعة","الخميس","الأربعاء"].includes(H)&&Y["white-cheese"]&&(Y["white-cheese"]={...Y["white-cheese"],officers:1}),ce==="rice"&&X==="صيف"&&Y.noodles&&(Y.noodles={...Y.noodles,hidden:!0}),X==="شتاء"&&(ce==="macaroni"?Y.noodles={...Y.noodles,individuals:.018,soldiers:.018}:ce==="rice"&&(Y.noodles={...Y.noodles,officers:0,individuals:.003,soldiers:.003}),Y["cooking-oil"]&&(Y["cooking-oil"]={...Y["cooking-oil"],individuals:.02,soldiers:.02}),Y["garlic-powder"]&&(Y["garlic-powder"]={...Y["garlic-powder"],individuals:28e-5,soldiers:28e-5}),Y.onion&&(Y.onion={...Y.onion,individuals:.011,soldiers:.011}),Y.lentils||(Y.lentils={name:"عدس",category:"fresh",officers:0,individuals:.015,soldiers:.015,workDays:"يومياً"})),h&&(Y.zabady={name:"زبادي",category:"",officers:1,individuals:1,soldiers:1,workDays:"يومياً"},Y.juice={name:"عصير",category:"dry",officers:1,individuals:1,soldiers:1,workDays:"يومياً"},Y.eggs&&(Y.eggs={...Y.eggs,hidden:!0}),Y.lentils&&(Y.lentils={...Y.lentils,hidden:!0}),Y["canned-fava"]&&(Y["canned-fava"]={...Y["canned-fava"],hidden:!0}),Y["white-cheese"]&&(Y["white-cheese"]={...Y["white-cheese"],officers:1}),Y["cooking-oil"]&&(Y["cooking-oil"]={...Y["cooking-oil"],officers:.017,individuals:.017,soldiers:.017}),ce==="rice"&&Y.noodles&&(Y.noodles={...Y.noodles,hidden:!0}),ce==="macaroni"&&(Y.noodles={...Y.noodles,individuals:.015,soldiers:.015}),Y.fava&&(Y.fava={...Y.fava,officers:.04}),Y.salad&&(Y.salad={...Y.salad,individuals:.35,soldiers:.35}),Y.halawa&&(Y.halawa={...Y.halawa,officers:1}),Y.jam&&(Y.jam={...Y.jam,officers:1}));let te=[...g?iE({items:Y,relations:oe,counts:g,date:g.date,selectedDay:o}).visibleItems:[]];Object.values(e).forEach(le=>{const[ke,Ge]=gx.find(me=>me.includes(le))||[];if(!ke||!Ge)return;const Ue=le,E=Ue===ke?Ge:ke;if(!te.find(me=>me.key===Ue))return;te=te.filter(me=>me.key!==Ue);const V=Y[E];V&&te.push({key:E,name:V.name,officersAmount:Bt((V.officers||0)*(g.officers||0)),individualsAmount:Bt((V.individuals||0)*(g.individuals||0)),soldiersAmount:Bt((V.soldiers||0)*(g.soldiers||0)),total:W1(V,g)})});const k=e[c0]==="rice",Z=e[c0]==="macaroni";k&&(te=te.filter(le=>!["sauce-rice","black-pepper-rice"].includes(le.key)),te=Nd(te,"sauce-macaroni",g,Y),te=Nd(te,"black-pepper-macaroni",g,Y)),Z&&(te=te.filter(le=>!["sauce-macaroni","black-pepper-macaroni"].includes(le.key)),te=Nd(te,"sauce-rice",g,Y),te=Nd(te,"black-pepper-rice",g,Y));const se=Object.values(Tu).reduce((le,{key:ke,category:Ge})=>{const Ue=sE(Ge);if(!Ue||!ke)return le;const E=`${Ue}__${ke}`;return le.has(E)||le.set(E,{tableName:Ue,key:ke,category:Ge}),le},new Map),de=Fh({queries:Array.from(se.values()).map(({tableName:le,key:ke})=>({queryKey:["last-withdrawal",le,ke],queryFn:async()=>({data:await l6(le,ke),key:ke}),enabled:!0}))}),J=S.useMemo(()=>dE(g?.date),[g?.date]),ye=Fh({queries:J?Array.from(se.values()).map(({key:le,category:ke})=>{const Ge=lE(ke);return{queryKey:["income-date-range",Ge,le,J],queryFn:async()=>({data:await lf(Ge,le,J),key:le}),enabled:!!(Ge&&le&&J)}}):[]}),ve={},Le={};de.forEach(le=>{if(!le?.data?.data)return;const{key:ke,data:Ge}=le.data;ve[ke]=Ge}),ye.forEach(le=>{if(!le?.data?.data)return;const{key:ke,data:Ge}=le.data;Le[ke]=Ge?.reduce((Ue,E)=>Ue+Number(E.quantity||0)+Number(E.mission_meals||0),0)||0});const Ce=de.some(le=>le.isPending||le.isFetching),rt=ye.some(le=>le.isPending||le.isFetching),nt=te.map(le=>{const Ge=Tu[le.name]?.key;let Ue=Ge?ie[Ge]:void 0;const E=ve[Ge],U=Le[Ge];if(E?.date>=g?.date)return{name:le.name,officers:le.officersAmount,individuals:le.individualsAmount,soldiers:le.soldiersAmount,total:le.total};Ue=Number(Ue||0)-Number(U||0);let V=le.total;return g.dry_meals&&((le.key==="white-cheese"||le.key==="jam"||le.key==="halawa")&&(V+=g.dry_meals),le.key==="canned-fava"&&(V+=g.dry_meals/2),le.key==="juice"&&(V+=g.dry_meals*2)),(Ue===void 0||Ue<=0||Ue<V?0:le.total)===0&&Ge?{name:le.name,officers:0,individuals:0,soldiers:0,total:0}:{name:le.name,officers:le.officersAmount,individuals:le.individualsAmount,soldiers:le.soldiersAmount,total:le.total}}),Ft=[...nt].sort((le,ke)=>{const Ge=hx[le.name],Ue=hx[ke.name];return(px[Ge]??9999)-(px[Ue]??9999)}),Dt=Object.fromEntries(Ft.map(le=>[le.name,Number(le.total||0)])),Ia=Dt["أرز بلدي"]??0,ea=Dt.مكرونة??0;S.useEffect(()=>{if(!nt||!nt.length||!nt.some(Ue=>Number(Ue.total)>0)||y||x||$||M||Ce||rt)return;function le(Ue){return Object.entries(Ue||{}).reduce((E,[U,V])=>(V&&(E[V]=U),E),{})}function ke(Ue,E,U){const V=le(E),me=Array.from(new Set(Object.values(V).map(xe=>xe.replace(/-/g,"_")))),fe={};return me.forEach(xe=>{fe[`${xe}_officers`]=0,fe[`${xe}_individuals`]=0,fe[`${xe}_soldiers`]=0,fe[`${xe}_total`]=0}),(Array.isArray(Ue)?Ue:[]).forEach(xe=>{const ze=V[xe.name];if(!ze)return;const Oe=ze.replace(/-/g,"_");fe[`${Oe}_officers`]=Bt(Number(xe.officers||0)),fe[`${Oe}_individuals`]=Bt(Number(xe.individuals||0)),fe[`${Oe}_soldiers`]=Bt(Number(xe.soldiers||0)),fe[`${Oe}_total`]=ep(Bt(Number(xe.total||0)))}),fe.date=new Date(U?.date).toISOString().slice(0,10),fe.id=U?.id,fe.manual_swap=JSON.stringify(e),fe.selected_day=o,fe}const Ge=setTimeout(async()=>{const Ue=ke(nt,J1,g);try{if((await zC(Ue)).skipped)return;W.success("تم توزيع اليومية بنجاح اذهب لتأكيد الصرف")}catch(E){W.error("حدث خطأ"),console.error(E)}},500);return()=>clearTimeout(Ge)},[g,rt,Ce,y,x,$,M,e,o,nt]),S.useEffect(()=>{if(!g?.id)return;let le={};if(A?.id===g.id&&A?.manual_swap)try{le=typeof A.manual_swap=="string"?JSON.parse(A.manual_swap):A.manual_swap}catch{le={}}a(le)},[g?.id,A?.id,A?.manual_swap]),S.useEffect(()=>{A&&A.selected_day&&s(A.selected_day)},[A]),S.useEffect(()=>{C&&(p(C.is_ramadan),a(le=>{const ke={...le};return C.is_ramadan?ke["halawa|jam"]="halawa":delete ke["halawa|jam"],ke}))},[C]);async function Ui(le){le.preventDefault();const ke=await j(I("value"));z("value",ke?.value),u(!1)}return y||x||$||M||K||Ce||rt?r.jsx(Ae,{}):ue?r.jsxs(dx,{children:[r.jsx(qd,{children:"يومية الصرف"}),r.jsx("div",{style:{padding:"2rem",textAlign:"center"},children:"حدث خطأ أثناء جلب بيانات المخزون — حاول تحديث الصفحة."})]}):r.jsxs(dx,{children:[r.jsx(qd,{children:"يومية الصرف"}),r.jsxs(UC,{children:[r.jsxs(FC,{children:[r.jsxs(qd,{children:["وزارة الداخلية",r.jsx("br",{}),"منطقة القاهرة الجديدة ",r.jsx("br",{}),"قطاع الشهيد/ عمرو مسعد عبد الشافي"]}),r.jsxs(qd,{children:["يومية المنصرف من التعيينات عن يوم :"," ",Pl(g?.date),r.jsx("br",{}),"بتاريخ :"," ",g?.date?new Date(g?.date).toLocaleDateString("ar-EG",{era:"narrow"}):""]})]}),r.jsx(LC,{children:r.jsxs(PC,{children:[r.jsx(fx,{children:r.jsxs("tr",{children:[r.jsx(cn,{children:"الرتبة"}),r.jsx(cn,{style:{width:"50%"},children:"العدد"})]})}),r.jsxs(mx,{children:[r.jsxs("tr",{children:[r.jsx(er,{children:"ضباط"}),r.jsx(er,{children:g?.officers||"-"})]}),r.jsxs("tr",{children:[r.jsx(er,{children:"أفراد"}),r.jsx(er,{children:g?.individuals||"-"})]}),r.jsxs("tr",{children:[r.jsx(er,{children:"مجندين"}),r.jsx(er,{children:g?.soldiers||"-"})]}),r.jsxs(MC,{children:[r.jsx("td",{children:"الإجمالي"}),r.jsx("td",{children:g?.total||"-"})]})]})]})})]}),r.jsxs(JC,{children:[r.jsx(WC,{children:"تبديل اليومية بيوم اّخر : "}),r.jsxs(eE,{value:o,onChange:le=>s(le.target.value),children:[r.jsx("option",{value:"السبت",children:"السبت"}),r.jsx("option",{value:"الأحد",children:"الأحد"}),r.jsx("option",{value:"الإثنين",children:"الإثنين"}),r.jsx("option",{value:"الثلاثاء",children:"الثلاثاء"}),r.jsx("option",{value:"الأربعاء",children:"الأربعاء"}),r.jsx("option",{value:"الخميس",children:"الخميس"}),r.jsx("option",{value:"الجمعة",children:"الجمعة"})]})]}),r.jsxs(BC,{children:[r.jsx("span",{children:" رقم الإذن : "}),c?r.jsxs(XC,{onSubmit:Ui,children:[r.jsx(KC,{type:"number",defaultValue:b?.value,...O("value",{required:!0})}),r.jsx(l0,{disabled:_,type:"submit",style:{background:"var(--color-brand-600)",color:"#eee"},children:r.jsx(nc,{})}),r.jsx(l0,{type:"button",onClick:()=>{u(!1),z("value",b?.value??"")},children:r.jsx(ac,{})})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{paddingTop:"2px"},children:b?.value}),r.jsx(l0,{style:{padding:"0.4rem 0.6rem"},onClick:()=>u(le=>!le),children:r.jsx(ic,{})})]})]}),r.jsx(GC,{$active:h,children:"مقرر رمضان"}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"4rem"},children:[r.jsx(ux,{children:gx.map(([le,ke])=>{const Ge=te.some(V=>V.key===le),Ue=te.some(V=>V.key===ke);if(!Ge&&!Ue)return null;const E=Ge?le:ke,U=[le,ke].sort().join("|");return r.jsxs("button",{onClick:()=>a(V=>{const me={...V};return me[U]===E?delete me[U]:me[U]=E,me}),style:{borderRadius:"12px",border:"none",cursor:"pointer",background:"var(--color-grey-200)",fontWeight:700,display:"flex",alignItems:"center",gap:"1rem"},children:[r.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.5rem 1.4rem",borderRadius:"12px",background:E===le?"var(--color-brand-600)":"var(--color-grey-200)",color:E===le?"#eee":"var(--color-grey-700)"},children:bl[le].name}),r.jsx("span",{children:"⇄"}),r.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.5rem 1.4rem",borderRadius:"12px",background:E===ke?"var(--color-brand-600)":"var(--color-grey-200)",color:E===ke?"#eee":"var(--color-grey-700)"},children:bl[ke].name})]},U)})}),r.jsx(ux,{children:r.jsx(QC,{$active:h,onClick:()=>{const le=!h;p(le),D(le),h&&W.success("تم إيقاف مقرر شهر رمضان"),h||W.success("تم تشغيل مقرر شهر رمضان")},children:h?"مقرر رمضان ✅":"مقرر رمضان ❌"})})]}),r.jsx(HC,{children:r.jsxs(VC,{children:[r.jsx(fx,{children:r.jsxs("tr",{children:[r.jsx(cn,{children:"م"}),r.jsx(cn,{children:"اسم الصنف"}),r.jsx(cn,{children:"ضباط"}),r.jsx(cn,{children:"أفراد"}),r.jsx(cn,{children:"مجندين"}),r.jsx(cn,{children:"الإجمالي"}),r.jsx(cn,{}),r.jsx(cn,{})]})}),r.jsx(mx,{children:g?.length===0||!g?r.jsx("tr",{children:r.jsx(er,{colSpan:"9",children:"لا توجد أصناف بعد يرجى إضافة أعداد أولاً"})}):Ft.map((le,ke)=>{const Ge=oE(le.name),Ue=ve[Tu[le.name]?.key],E=Ue&&Ue.date>=g.date,U=Ia<=0,V=ea<=0,me=U&&["صلصة أرز","فلفل أسود أرز"].includes(le.name)||V&&["صلصة مكرونة","فلفل أسود مكرونة"].includes(le.name),fe=le.total<=0;return r.jsxs("tr",{children:[r.jsx(er,{children:ke+1}),r.jsx(er,{style:{color:fe?"red":"inherit"},children:le.name}),r.jsx(er,{children:le.officers||"-"}),r.jsx(er,{children:le.individuals||"-"}),r.jsx(er,{children:le.soldiers||"-"}),r.jsx(er,{children:le.total||"-"}),r.jsx(er,{style:{width:"1%"},children:Ge?le.total>0&&!me?r.jsx(ZC,{to:Ge,$visited:E,children:r.jsx(SC,{})}):"-":""}),r.jsx(er,{style:{width:"1%"}})]},ke)})})]})}),r.jsx(YC,{children:r.jsx(IC,{onClick:()=>{u(!1),setTimeout(()=>window.print(),0)},children:"🖨️ طباعة / حفظ PDF"})})]})}const fE=f.div`
  text-align: center;
`,mE=f.img`
  height: 24rem;
  width: 22rem;
`;function m6(){return r.jsx(fE,{children:r.jsx(mE,{src:"/logo.png",alt:"Logo"})})}const hE=f.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-50);
  padding: 0 4rem;
`,pE=f.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  margin-bottom: 4rem;
`,yx=f.h3`
  font-size: 2.2rem;
  color: var(--color-grey-700);

  @media (max-width: 700px) {
    margin-bottom: 18rem;
  }
`,gE=f.h1`
  font-size: 3.2rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
  @media (max-width: 700px) {
    margin-bottom: 12rem;
  }
`,yE=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 4rem;
  direction: rtl;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bx=f(Gt)`
  text-decoration: none;
  color: inherit;
`,xx=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-brand-800);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,vx=f.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-brand-600);
`,jx=f.p`
  font-size: 1.6rem;
  color: var(--color-grey-600);
`,bE=f.span`
  display: inline-block;
  margin-top: 1.6rem;
`;function xE(){return r.jsxs(hE,{children:[r.jsxs(pE,{children:[r.jsx(yx,{children:"منطقة القاهرة الجديدة"}),r.jsxs(yx,{children:["وزارة الداخلية",r.jsx("br",{}),"قطاع الأمن المركزي"]})]}),r.jsx(m6,{}),r.jsxs(gE,{children:["قطاع الشهيد الرائد / عمرو مسعد عبد الشافي",r.jsx("br",{}),r.jsx(bE,{children:"التمــوين"})]}),r.jsxs(yE,{children:[r.jsx(bx,{to:"/rations",children:r.jsxs(xx,{children:[r.jsx(vx,{children:"وحــدة الـتـعـيـيـنـات"}),r.jsx(jx,{children:"عرض بيانات وتوزيعات وحدة التعيينات"})]})}),r.jsx(bx,{to:"/bakery",children:r.jsxs(xx,{children:[r.jsx(vx,{children:"وحــدة الـمـخـبـز"}),r.jsx(jx,{children:"عرض تفاصيل وإدارة وحدة المخبز"})]})})]})]})}async function vE(e){const a=await fetch(`/api/dry_items_withdrawals?date=${encodeURIComponent(e)}`);if(!a.ok)throw new Error("فشل جلب السحوبات");const o=await a.json();return Array.isArray(o)?o:[]}async function jE(e,a){const o=await fetch(`/api/dry_items_withdrawals?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}`);if(!o.ok)throw new Error("فشل جلب السحوبات خلال المدة");const s=await o.json();return Array.isArray(s)?s:[]}async function wE(e,a){const o=await fetch(`/api/dry_incoming_items?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}&order_by=date&order=asc`);if(!o.ok)throw new Error("فشل جلب الواردات");const s=await o.json();return Array.isArray(s)?s:[]}async function _E(e,a,o){const s=await fetch(`/api/dry_incoming_items?item_name=${encodeURIComponent(e)}&date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`);if(!s.ok)throw new Error("فشل في جلب بيانات التقرير المحدد.");const c=await s.json();return Array.isArray(c)?c:[]}async function SE(e,a,o){const s=await fetch(`/api/dry_items_withdrawals?item_name=${encodeURIComponent(e)}&date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`);if(!s.ok)throw new Error("فشل في جلب بيانات التقرير المحدد.");const c=await s.json();return Array.isArray(c)?c:[]}const kE={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},d0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 100rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,wx=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,u0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,$E=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,CE=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Ca=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,Ea=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,EE=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,TE=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,DE=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,RE=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,zE=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,xl=(e,a=4)=>Number(Number(e).toFixed(a));function AE(){const[e]=nr(),a=e.get("date"),{data:o,isPending:s,error:c}=je({queryKey:["dry-daily-report",a],queryFn:()=>vE(a),enabled:!!a}),u={};o&&o.forEach(g=>{const y=`${g.item_name}||${g.unit||""}`,b=Number(g.quantity)||0,x=Number(g.mission_meals)||0,j=Number(g.stock_after)||0;u[y]||(u[y]={item_name:g.item_name,unit:g.unit||"",quantity:0,mission_meals:0,stock_after:0}),u[y].quantity+=b,u[y].mission_meals+=x,u[y].stock_after=j});const h=[];if(Object.entries(kE).forEach(([g,y])=>{const b=Object.values(u).filter(x=>x.item_name===g);b.length===0?h.push({item_key:g,item_label:y,quantity:0,mission_meals:0,stock_after:0,stock_before:0,unit:""}):b.forEach(x=>{h.push({item_key:g,item_label:y,quantity:x.quantity,mission_meals:x.mission_meals,stock_after:x.stock_after,stock_before:x.quantity+x.mission_meals+x.stock_after,unit:x.unit})})}),!a)return r.jsxs(d0,{children:[r.jsx(wx,{children:r.jsx(u0,{children:"تقرير يومي للأصناف الجافة "})}),r.jsx(u0,{children:"لم يتم تمرير التاريخ. الرجاء اختيار تاريخ من صفحة الأصناف."})]});if(s)return r.jsx(Ae,{});if(c)return r.jsxs(d0,{children:["حدث خطأ: ",c.message]});const p=new Date(a).toLocaleDateString("ar-EG",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"});return r.jsxs(d0,{children:[r.jsx(DE,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(wx,{children:r.jsxs(u0,{children:["تقرير يومي للصرف للأصناف الجافة — ",p]})}),r.jsx($E,{children:r.jsxs(CE,{children:[r.jsx(RE,{children:r.jsxs("tr",{children:[r.jsx(Ca,{children:"م"}),r.jsx(Ca,{children:"اسم الصنف"}),r.jsx(Ca,{children:"الرصيد قبل الصرف"}),r.jsx(Ca,{children:"الكمية المنصرفة"}),r.jsx(Ca,{children:"الوجبات الجافة"}),r.jsx(Ca,{children:"إجمالي المنصرف"}),r.jsx(Ca,{children:"الرصيد بعد الصرف"}),r.jsx(Ca,{children:"الوحدة"})]})}),r.jsx(zE,{children:h.map((g,y)=>r.jsxs("tr",{children:[r.jsx(Ea,{children:y+1}),r.jsx(Ea,{children:g.item_label}),r.jsx(Ea,{children:xl(Number(g.stock_before))||"-"}),r.jsx(Ea,{children:xl(Number(g.quantity))??0}),r.jsx(Ea,{children:xl(Number(g.mission_meals))||"-"}),r.jsx(Ea,{children:xl(Number(g.quantity+g.mission_meals))??0}),r.jsx(Ea,{children:xl(Number(g.stock_after))||"-"}),r.jsx(Ea,{children:g.unit||"-"})]},`${g.item_key}-${g.unit||"no-unit"}-${y}`))})]})}),r.jsx(EE,{children:r.jsx(TE,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}async function qE(e){const a=await fetch(`/api/dry_incoming_items?date=${encodeURIComponent(e)}`);if(!a.ok)throw new Error("فشل جلب سجلات الصرف");const o=await a.json();return Array.isArray(o)?o:[]}async function NE(e){const a=await fetch(`/api/dry_incoming_items?item_name=${encodeURIComponent(e)}&order_by=date&order=desc&limit=31`);if(!a.ok)throw new Error("فشل جلب الواردات");const o=await a.json();return Array.isArray(o)?o:[]}async function OE(e){const a=await fetch("/api/dry_incoming_items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const c=await a.json().catch(()=>null);throw new Error(c?.error||"فشل إضافة الوارد")}const o=await a.json();await X1(e.item_name,e.unit??"");const s=Number(e.quantity||0)+Number(e.mission_meals||0);return await uf(e.item_name,s,e.unit??null),s!==0&&await fetch("/api/dry_incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e.item_name,date:e.date,diff:s})}),o}async function ME({id:e,payload:a}){const o=await fetch(`/api/dry_incoming_items/${encodeURIComponent(e)}`);if(!o.ok){const x=await o.json().catch(()=>null);throw new Error(x?.error||"السجل المطلوب غير موجود")}const s=await o.json(),c=await fetch(`/api/dry_incoming_items/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!c.ok){const x=await c.json().catch(()=>null);throw new Error(x?.error||"فشل تحديث الوارد")}const u=await c.json(),h=Number(s.quantity||0)+Number(s.mission_meals||0),p=Number(a.quantity??s.quantity??0)+Number(a.mission_meals??s.mission_meals??0),g=p-h,y=s.date,b=a.date;return(g!==0||(a.unit??s.unit)!==s.unit)&&await uf(a.item_name||s.item_name,g,a.unit??s.unit??null),h===p&&y===b||(h!==0&&await fetch("/api/dry_incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:y,diff:-h})}),p!==0&&await fetch("/api/dry_incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:b,diff:p})})),u}async function BE(e){const a=await fetch(`/api/dry_incoming_items/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}function UE(e){return je({queryKey:["dry-incomings-date",e],queryFn:async()=>{const a=await fetch(`/api/dry_incoming_items?date_from=${encodeURIComponent(e?.from)}&date_to=${encodeURIComponent(e?.to)}&order_by=date&order=asc`);if(!a.ok)throw new Error("useDryIncomings error");const o=await a.json();return Array.isArray(o)&&o.length?o:null},enabled:!!e,onError:a=>{console.error("useDryIncomings error:",a),W.error("حدث خطأ")}})}function FE(e){return je({queryKey:["dry-incomings-date",e],queryFn:()=>qE(e),onError:a=>{console.error("useDryIncomings error:",a),W.error("فشل تحميل سجل الصرف")}})}function LE(e){return je({queryKey:["dry-incoming-items",e],queryFn:()=>NE(e),enabled:!!e,onError:a=>{console.error("useDryIncomingItems error:",a),W.error("فشل جلب الوارد")}})}function PE(){const e=Te();return Re({mutationFn:OE,onSuccess:()=>{W.success("تمت الإضافة بنجاح"),e.invalidateQueries()},onError:a=>{console.error("useAddDryIncomingItem error:",a),W.error("فشل إضافة الوارد")}})}function HE(){const e=Te();return Re({mutationFn:ME,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error("useUpdateDryIncomingItem error:",a),W.error("حدث خطأ")}})}function QE(){const e=Te();return Re({mutationFn:BE,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}const GE={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},VE=f.div`
  background-color: var(--color-grey-50);
  padding: 4rem 1rem;
  direction: rtl;
  min-width: 135rem;
`,YE=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,IE=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,KE=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,XE=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,qr=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,ZE=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,vr=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,JE=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,WE=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Fn=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Ln=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,vi=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,_x=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,mf=f.button`
  background: ${({bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  height: fit-content;
  margin-top: auto;
`,eT=f(mf)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,tT=f(mf)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,rT=f(mf)`
  background: var(--color-brand-700);
  margin-bottom: 1rem;
`,nT=f.div`
  display: flex;
  align-items: center;
`,Sx=(e,a=4)=>Number(Number(e).toFixed(a));function aT(){const{itemName:e}=us(),{data:a,isPending:o}=hs("dry_incoming_items",e),s=e!=="tuna-officers"&&e!=="tuna-soldiers"&&e!=="tamr-biscuit"&&e!=="wafer-biscuit"&&e!=="mineral-water"&&e!=="marai-juice",[c,u]=S.useState(!1),[h,p]=S.useState(null),{data:g,isPending:y}=LE(e),b=PE(),x=HE(),j=QE(),{register:_,handleSubmit:C,reset:$,setValue:D}=Ut();if(y||o)return r.jsx(Ae,{});async function A(z){const I={item_name:e,date:z.date,permit_number:Number(z.permit_number)||0,permit_number_mission:Number(z.permit_number_mission)||0,receiver_name:z.receiver_name||"",quantity:Number(z.quantity)||0,mission_meals:z.mission_meals?Number(z.mission_meals):0,unit:z.unit||"",mission_type:z.mission_type||null},R=z.mission_meals?Number(z.mission_meals):0;if(Number(z.quantity)+R<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");h?x.mutate({id:h.id,payload:{...I,expiry_date:z.expiry_date||null,item_name:e}},{onSuccess:()=>{$(),p(null),u(!1),W.success("تم تعديل الوارد بنجاح")}}):b.mutate({...I,expiry_date:z.expiry_date||null,item_name:e},{onSuccess:()=>{$(),u(!1)}})}function M(z){p(z),D("date",z.date),D("permit_number",z.permit_number),D("permit_number_mission",z.permit_number_mission),D("receiver_name",z.receiver_name),D("quantity",z.quantity),D("mission_meals",z.mission_meals),D("unit",z.unit),D("expiry_date",z.expiry_date),D("mission_type",z.mission_type),u(!0)}function O(){h&&x.mutate({id:h.id,payload:{...h,quantity:0,mission_meals:0,item_name:e}},{onSuccess:()=>{j.mutate(h.id,{onSuccess:()=>{$(),p(null),u(!1),W.success("تم الحذف بنجاح")}})}})}return r.jsxs(VE,{children:[r.jsxs(YE,{children:["الوارد - ",GE[e]||e]}),r.jsx(nT,{children:r.jsx(rT,{onClick:()=>{c?(u(!1),p(null),$()):u(!0)},children:c?"✖️ إغلاق":"➕ إضافة وارد"})}),c&&r.jsx(JE,{children:r.jsxs(WE,{onSubmit:C(A),children:[r.jsxs(Fn,{children:[r.jsx(Ln,{children:"التاريخ"}),r.jsx(vi,{type:"date",defaultValue:new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),max:new Date().toISOString().split("T")[0],..._("date",{required:!0})})]}),r.jsxs(Fn,{children:[r.jsx(Ln,{children:"رقم الإذن"}),r.jsx(vi,{type:"number",..._("permit_number")})]}),r.jsxs(Fn,{children:[r.jsx(Ln,{children:"اسم المستلم"}),r.jsx(vi,{type:"text",..._("receiver_name",{required:!0})})]}),r.jsxs(Fn,{children:[r.jsx(Ln,{children:"الكمية المضافة"}),r.jsx(vi,{type:"number",step:"any",..._("quantity",{required:!0})})]}),s&&r.jsxs(Fn,{children:[r.jsx(Ln,{children:"الكمية المضافة ( ارتجاع مأموريات )"}),r.jsx(vi,{type:"number",step:"any",..._("mission_meals")})]}),s&&r.jsxs(Fn,{children:[r.jsx(Ln,{children:"رقم الإذن ( ارتجاع مأموريات )"}),r.jsx(vi,{type:"number",step:"any",..._("permit_number_mission")})]}),r.jsxs(Fn,{children:[r.jsx(Ln,{children:"الوحدة"}),r.jsxs(_x,{defaultValue:!h&&a?.unit,..._("unit",{required:!0}),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"مليجرام",children:"مليجرام"}),r.jsx("option",{value:"لتر",children:"لتر"}),r.jsx("option",{value:"عدد",children:"عدد"}),r.jsx("option",{value:"قطعة",children:"قطعة"}),r.jsx("option",{value:"علبة",children:"علبة"}),r.jsx("option",{value:"زجاجة",children:"زجاجة"}),r.jsx("option",{value:"فتلة",children:"فتلة"})]})]}),r.jsxs(Fn,{children:[r.jsx(Ln,{children:"صلاحية الصنف"}),r.jsx(vi,{defaultValue:!h&&a?.expiry_date,type:"date",..._("expiry_date")})]}),s&&r.jsxs(Fn,{children:[r.jsx(Ln,{children:"عودة مأموريات"}),r.jsxs(_x,{..._("mission_type"),children:[r.jsx("option",{value:"",children:"اختر"}),r.jsx("option",{value:"انتشار",children:"انتشار"}),r.jsx("option",{value:"بئر العبد",children:"بئر العبد"}),r.jsx("option",{value:"وادي فيران",children:"وادي فيران"}),r.jsx("option",{value:"النزوح",children:"النزوح"}),r.jsx("option",{value:"شمال سيناء",children:"شمال سيناء"}),r.jsx("option",{value:"توصيل",children:"توصيل"}),r.jsx("option",{value:"أخرى",children:"أخرى"})]})]}),r.jsx(mf,{type:"submit",disabled:b.isPending||x.isPending,children:h?x.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":b.isPending?"جارٍ الإضافة...":"✔️ إضافة"}),h&&r.jsx(tT,{type:"button",disabled:x.isPending,onClick:O,children:x.isPending?"جارٍ الحذف...":"حذف"})]})}),r.jsx(IE,{children:r.jsxs(KE,{children:[r.jsx(XE,{children:r.jsxs("tr",{children:[r.jsx(qr,{children:"م"}),r.jsx(qr,{children:"اليوم"}),r.jsx(qr,{children:"التاريخ"}),r.jsx(qr,{children:"رقم الإذن"}),r.jsx(qr,{children:"اسم المستلم"}),r.jsx(qr,{children:"الكمية المضافة"}),s&&r.jsxs(qr,{children:["الكمية المضافة ",r.jsx("br",{})," ( ارتجاع مأموريات )"]}),s&&r.jsxs(qr,{children:["رقم الإذن ",r.jsx("br",{})," ( ارتجاع مأموريات )"]}),r.jsx(qr,{children:"الوحدة"}),r.jsx(qr,{children:"صلاحية الصنف"}),s&&r.jsx(qr,{children:"عودة مأموريات"}),r.jsx(qr,{children:"إجراءات"})]})}),r.jsx(ZE,{children:g?.length===0?r.jsx("tr",{children:r.jsx(vr,{colSpan:"12",children:"لا يوجد بيانات"})}):g?.map((z,I)=>{const F=z.expiry_date?(new Date(z.expiry_date)-new Date)/864e5:null,ie=F!==null&&F<=60;return r.jsxs("tr",{children:[r.jsx(vr,{children:I+1}),r.jsx(vr,{children:new Date(z.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(vr,{children:z.date}),r.jsx(vr,{children:z.permit_number||"—"}),r.jsx(vr,{children:z.receiver_name||"—"}),r.jsx(vr,{children:z.quantity!=null?Sx(Number(z.quantity)):"—"}),s&&r.jsx(vr,{children:z.mission_meals!=null?Sx(Number(z.mission_meals)):"—"}),s&&r.jsx(vr,{children:z.permit_number_mission||"—"}),r.jsx(vr,{children:z.unit||"—"}),r.jsxs(vr,{style:{color:ie?"red":"inherit",fontWeight:ie?700:400},children:[z.expiry_date||"—"," ",ie&&"🚨"]}),s&&r.jsx(vr,{children:z.mission_type??"—"}),r.jsx(vr,{children:r.jsx(eT,{onClick:()=>M(z),children:"✏️"})})]},z.id)})})]})})]})}function h6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m20.35 26.1-2.68 15.78L381.7 103.9l2.6-15.79zm-.55 57.94-1.58 15.92L382.2 136l1.6-16zm212.1 84.36c-2.1-.1-4.2.7-5.9 2.3-3.4 3.1-3.5 8.4-.4 11.7l2.6 2.8-17.7-7.6c-4.2-1.8-9.1.1-10.9 4.3-1.8 4.3.1 9.2 4.4 11l6.8 3c-30.5 1.9-60.3 12-83.5 29l-1.8-3c-2.4-3.9-7.5-5.2-11.5-2.8-3.9 2.4-5.2 7.5-2.8 11.4l3.2 5.3-.4.4-8.2-8.6c-3.2-3.3-8.5-3.5-11.8-.3-3.3 3.2-3.5 8.5-.3 11.8l9.2 9.6c-9.5 12.4-16.3 26.8-19.3 42.9h346.8c5 0 9-3.7 9-8.3 0-4.6-4-8.3-9-8.3h-8l3-.6c5-.7 8-5 7-9.5-1-4.6-5-7.7-10-6.9l-11 1.8c-3-3.3-6-6.2-9-8.8l2-2.1c3-3.2 4-8.4 0-11.8-3-3.3-8.1-3.4-11.4-.2l-5 4.7c-12.9-6.6-26.7-9.8-38.5-11.3 3.7-2.6 4.7-7.8 2-11.6-2.6-3.7-7.8-4.7-11.6-2l-13.3 9.3 3.4-6c2.2-4 .8-9.1-3.2-11.4-4-2.2-9.1-.8-11.3 3.2l-6 10.5c-13-9.4-27.6-16.2-42.9-20.6L237.8 171c-1.6-1.7-3.7-2.5-5.9-2.6zm-52.1 52.1 15.4 5.5c3.3 1.2 4.9 4.8 3.8 8-1.2 3.3-4.8 4.9-8 3.8l-15.4-5.6c-3.3-1.2-5-4.7-3.8-8 1.9-3.5 4.8-4.5 8-3.7zm85.6 22.4c1.5 3.1.2 6.9-2.9 8.3l-14.8 7.1c-3.1 1.5-6.9.1-8.4-3-1.4-3.1-.1-6.8 3-8.3l14.8-7c3.1-1.4 7 .4 8.3 2.9zm98.6 10.6 11.8 11.3c2.5 2.4 2.6 6.4.2 8.9-2.4 2.4-6.3 2.5-8.8.1l-11.8-11.3c-2.5-2.4-2.6-6.4-.2-8.9 2.7-2.2 6.5-2.3 8.8-.1zm-214.3 16.8c1 3.3-.8 6.8-4.1 7.9l-15.6 5c-3.2 1-6.8-.8-7.8-4.1-1.1-3.3.7-6.8 4-7.8l15.6-5c3.3-.9 7 1.5 7.9 4zm145-3.3 15.9 4c3.4.8 5.4 4.2 4.6 7.6-.9 3.3-4.3 5.4-7.6 4.5l-15.9-4c-3.4-.8-5.4-4.2-4.5-7.6 1.5-3.6 4.3-5 7.5-4.5zM39.33 312c1.68 42.5 16.6 76.8 48.58 101.7C121.9 440.1 176.1 456 255 456s133.1-15.9 167.1-42.3c32-24.9 46.9-59.2 48.6-101.7zM191 472v16h128v-16z"},child:[]}]})(e)}function Pa(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 65c-65.3 0-124.4 10.69-166.36 27.5-20.99 8.4-37.64 18.3-48.6 28.7C30.09 131.5 25 141.8 25 152s5.09 20.5 16.04 30.8c10.96 10.4 27.61 20.3 48.6 28.7C131.6 228.3 190.7 239 256 239c65.3 0 124.4-10.7 166.4-27.5 20.9-8.4 37.6-18.3 48.6-28.7 10.9-10.3 16-20.6 16-30.8s-5.1-20.5-16-30.8c-11-10.4-27.7-20.3-48.6-28.7C380.4 75.69 321.3 65 256 65zm.1 13.53c51.3 0 97.8 6.57 132.1 17.57 17.2 5.5 31.4 12 41.9 20 10.6 7.9 18 18 18 29.9 0 11.9-7.4 22-18 29.9-10.5 8-24.7 14.5-41.9 20-34.3 11-80.8 17.6-132.1 17.6s-97.8-6.6-132.1-17.6c-17.2-5.5-31.43-12-41.95-20-10.51-7.9-17.95-18-17.95-29.9 0-11.9 7.44-22 17.95-29.9 10.52-8 24.75-14.5 41.95-20 34.3-11 80.8-17.57 132.1-17.57zm0 17.97c-49.8 0-94.8 6.6-126.7 16.7-15.9 5.1-28.5 11.2-36.49 17.2-8.01 6.1-10.81 11.3-10.81 15.6 0 4.3 2.8 9.5 10.81 15.6 7.99 6 20.59 12.1 36.49 17.2 31.9 10.1 76.9 16.7 126.7 16.7s94.8-6.6 126.7-16.7c15.9-5.1 28.5-11.2 36.5-17.2 8-6.1 10.8-11.3 10.8-15.6 0-4.3-2.8-9.5-10.8-15.6-8-6-20.6-12.1-36.5-17.2-31.9-10.1-76.9-16.7-126.7-16.7zM25 192.2V360c0 13.2 5.88 24.6 17.7 35.4 11.81 10.8 29.56 20.4 51.32 28.1C137.5 439 196.8 447 256 447c59.2 0 118.5-8 162-23.5 21.7-7.7 39.5-17.3 51.3-28.1 11.8-10.8 17.7-22.2 17.7-35.4V192.2c-1.2 1.3-2.4 2.5-3.7 3.7-13.3 12.6-31.8 23.4-54.3 32.3-44.8 18-105.8 28.8-173 28.8s-128.2-10.8-173.05-28.8c-22.45-8.9-40.94-19.7-54.27-32.3-1.28-1.2-2.5-2.4-3.68-3.7zM96 280l64.4 48.2c33.3-15.3 71.8-34.1 135.7-34.1 40 0 120 25.9 120 46 0 19.9-80 45.9-120 45.9-63.9 0-102.4-18.9-135.7-34.2L96 400z"},child:[]}]})(e)}function hf(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M265.625 44.094c-11.92-.006-23.856.406-35.72 1.28l-8.75 7.407c10.17 6.262 17 15.568 18.782 26.064 1.987 11.69-2.516 24.07-12.125 33.562-19.217 18.984-51.41 23.684-75.718 11.344-3.116-1.582-5.967-3.43-8.53-5.5L16.75 225.28l73.844-19.374c7.536-18.897 26.34-33.647 48.312-37.594 3.574-.64 7.115-.964 10.563-.968 10.34-.013 19.93 2.784 27.655 8.125 2.484 1.716 4.762 3.703 6.78 5.936l292.376-76.72c-44.976-39.156-127.223-60.55-210.655-60.592zm224.97 74.687l-298.22 77.72c1.1 3.658 1.72 7.54 1.72 11.563 0 27.05-23.283 50.49-51.876 55.625-14.298 2.567-27.89-.067-38.19-7.188-10.298-7.12-16.968-19.036-16.968-32.563L19.69 241.5v95.375c.307-.08.527-.21.843-.28 14.397-3.31 28.193-1.258 38.69 5.592 10.495 6.85 17.25 18.793 17.25 32.407 0 27.227-23.146 51.74-51.876 58.344-1.705.39-3.29.547-4.907.75v13.218l202.563-52.812c-2.63-5.602-4.063-11.73-4.063-18.156 0-26.515 24.672-48.032 55.125-48.032 26.018 0 47.824 15.708 53.625 36.813 1.365.34 2.746.686 4.125 1.06l159.532-41.092V118.78zm-341.126 67.25c-2.306.005-4.726.204-7.25.657-20.205 3.63-36.47 21.794-36.47 37.25 0 7.73 3.215 13.253 8.906 17.188 5.69 3.935 14.148 5.97 24.25 4.156 20.204-3.628 36.5-21.76 36.5-37.218 0-7.728-3.215-13.283-8.906-17.218-4.268-2.952-10.118-4.823-17.03-4.813zm247.468 64.032c20.694 0 38.843 15.04 38.843 35.032 0 19.992-18.148 35.062-38.842 35.062-20.695 0-38.875-15.07-38.875-35.062 0-19.992 18.18-35.03 38.875-35.03zm0 18.688c-11.896 0-20.188 7.946-20.188 16.344 0 8.397 8.292 16.344 20.188 16.344 11.895 0 20.156-7.947 20.156-16.344 0-8.398-8.26-16.344-20.156-16.344z"},child:[]}]})(e)}function p6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M365.852 31.858c-10.152 2.474-24.915 7.073-37.437 13.602-9.2 4.797-17.277 10.575-21.928 16.19-4.65 5.618-6.05 9.96-4.416 15.587l3.556 12.254-12.736-.76c-3.048-.183-4.944-.117-7.364-.262-2.42-.146-5.405-.706-8.27-1.87-3.86-1.568-9.082-4.65-16.085-8.91-.366 4.63-.58 10.108-.407 16.006.38 12.915 2.02 27.945 4.82 41.17 1.328 6.27 3.007 12.134 4.805 17.13 2.992-4.705 6.264-9.202 9.84-13.368 17.022-19.818 40.47-41.586 69.867-43.697 14.423-1.037 29.333 5.324 42.554 12.41 3.997-7.635 10.257-13.963 16.617-19.67 6.403-5.748 13.146-11.018 18.95-15.97-9.552-6.72-16.81-10.074-23.02-10.855-7.936-.998-16.028 1.45-28.835 8.828l-15.21 8.762 4.7-46.577zm-12.796 80.995a16.57 16.57 0 0 0-1.672.03c-20.817 1.494-41.72 19.098-57.5 37.47-13.842 16.117-23.36 41.13-28.65 61.556 6.866 1.127 14.21 2.21 21.564 2.43 10.95.33 20.46-1.593 25.334-5.83l7.04-6.114 5.862 7.25c4.956 6.128 10.802 14.087 14.32 23.476 1.78 4.75 2.88 10.128 2.698 15.607 12.487-2.64 23.93-7.162 28.884-12.86l5.256-6.043 6.614 4.52c10.006 6.838 19.827 14.582 26.634 25.236 1.033-3.752 1.935-7.666 2.416-11.75 1.503-12.738-.18-25.93-6.636-35.494-10.232-11.257-22.116-22.055-24.93-37.03-1.066-5.675.69-10.02 2.78-14.29 2.092-4.27 4.972-8.467 8.35-12.593 3.803-4.644 8.228-9.1 12.948-13.05-4.015-2.658-8.39-5.55-13.877-8.665-12.77-7.256-28.594-13.592-37.434-13.86zM48.52 128.626c-6.353-.037-9.976.466-9.976 1.576 2.82 12.857 7.998 26.53 15.432 39.48 26.005-3.718 53.01-5.705 80.652-5.488 26.75 8.66 54.68 16.02 80.83 25.338-25.477-4.52-50.737-6.842-75.512-7.3a489.987 489.987 0 0 0-11.82-.073c-28.5.16-56.26 2.772-82.938 7.17 4.785 32.48 20.097 79.06 50.397 120.476 32.95 45.036 82.958 84.022 156.976 94.457 58.185 8.202 107.473-4.926 132.47-31.346 12.5-13.21 19.395-29.548 19.23-49.768-.157-18.958-6.877-41.526-22.327-67.106-1.133-.884-2.3-1.766-3.52-2.654-13.164 10.368-31.666 13.752-47.895 15.322l-18.392 1.78 9.94-15.58c2.974-4.66 2.76-9.265.433-15.474-1.486-3.962-4.016-8.048-6.75-11.992-9.13 4.418-19.634 5.185-29.495 4.887-12.977-.392-25.546-2.913-33.66-4.262l-9.268-1.538 1.936-9.193c2.894-13.746 7.735-30.663 15.19-46.902-46.584-23.24-175.11-41.595-211.933-41.812zm303.762.088c8.852 0 16.186 7.384 16.186 16.213 0 8.83-7.334 16.213-16.186 16.213-8.85 0-16.187-7.384-16.187-16.213 0-8.83 7.336-16.213 16.187-16.213zm73.906 13.47l-1.707.936c-5.958 3.275-13.704 10.08-19.133 16.71-2.715 3.316-4.887 6.612-6.11 9.108-.885 1.807-1.032 3.154-1.13 3.35 1.295 5.8 10.486 16.914 20.966 28.522l.387.427.326.473a54.88 54.88 0 0 1 4.754 8.342c11.47.563 23.966-.753 38.652-3.727l-41.35-30.937s37.437.748 51.126-1.635c4.696-.818-25.494-22.228-46.78-31.57zM160.52 231.076l17.516 4.15c-1.628 6.866-6.334 11.36-11.355 15.008-5.02 3.65-10.874 6.607-17 9.354-5.37 2.408-10.923 4.598-16.195 6.698 17.247 7.16 39.738 12.514 57.944 7.756l8.135-2.127 2.672 7.975c2.102 6.27.8 12.92-1.97 18.097-2.766 5.176-6.815 9.438-11.452 13.343-4.408 3.713-9.428 7.075-14.636 10.11 1.512.4 2.75.78 4.413 1.185 16.154 3.923 39.21 7.99 62.21 9.678 22.997 1.688 46.086.824 61.544-4.053 7.728-2.44 13.347-5.8 16.605-9.553 3.26-3.753 4.8-7.815 4.16-14.64l17.922-1.678c1.02 10.888-2.2 20.873-8.49 28.12-6.29 7.245-15.014 11.835-24.78 14.917-19.536 6.163-44.068 6.615-68.28 4.837-24.213-1.778-47.956-5.964-65.14-10.137-8.59-2.087-15.446-4.112-20.384-6.105-2.47-.997-4.277-1.582-6.817-3.805-1.27-1.112-3.838-3.195-3.59-8.084.122-2.444 1.414-4.847 2.696-6.168 1.28-1.32 2.438-1.895 3.368-2.295 9.76-4.196 20.562-10.17 27.602-16.098a41.493 41.493 0 0 0 3.95-3.828c-28.726 2.026-57.113-10.163-73.773-20.45l-13.646-8.425 14.302-7.258c9.833-4.99 23.145-9.453 34.26-14.44 5.56-2.492 10.508-5.107 13.787-7.49 3.277-2.38 4.37-4.38 4.42-4.597zM132.378 373.31c-9.94 10.178-24.66 20.105-40.18 28.05-6.34-7.936-13.154-15.46-20.445-22.242L59.495 392.3c5.485 5.1 10.75 10.778 15.762 16.814-5.725 2.31-11.364 4.275-16.715 5.793l4.914 17.315c6.655-1.89 13.604-4.25 20.605-7.035-.004 16.89-1.79 35.74-6.532 48.816l16.92 6.14c3.645-10.05 5.755-21.453 6.826-32.9 4.775 8.44 9.016 16.875 12.606 24.934l16.443-7.326c-6.96-15.626-16.04-32.46-26.976-48.42 16.785-8.633 32.574-19.633 43.97-32.488a244.225 244.225 0 0 1-14.94-10.632zm301.435 35.127c-15.158.19-32.163 7.857-49.21 18.494a196.634 196.634 0 0 0-20.456 14.66c-6.71-5.158-13.73-10.692-20.86-16.23a1086.232 1086.232 0 0 0-7.88-6.062c-7.882 1.91-16.138 3.324-24.705 4.232 7.053 4.96 14.317 10.433 21.545 16.047 6.184 4.802 12.332 9.672 18.37 14.354-4.958 5.056-9.45 10.33-13.243 15.735l14.734 10.34c3.507-4.998 7.984-10.123 13.076-15.117 5.09 3.68 10.056 7.083 14.82 9.965l9.317-15.4a143.322 143.322 0 0 1-4.667-2.96c19.407-2.33 39.054-.35 52.653 2.676l3.91-17.57c-10.58-2.356-23.95-4.223-38.416-4.275l-.19.002c13.615-7.218 26.607-11.223 33.21-10.857l1-17.97a44.232 44.232 0 0 0-3.007-.063z"},child:[]}]})(e)}function pf(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296.385 64.965s-17.449 15.537-26.69 12.29c-3.338-1.172-6.104-4.45-8.353-8.49L244.398 85.71l84.582 84.584 60.258-60.258-14.955-14.955c-3.33 1.341-6.57 2.1-9.422 1.842-10.105-.913-23.527-19.315-23.527-19.315S325.559 92.59 316.4 90.602c-10.594-2.3-20.015-25.637-20.015-25.637zm-64.713 33.47l-60.254 60.256L256 243.273l60.254-60.253zm170.293 24.327l-60.258 60.258 84.584 84.582 60.256-60.256zM158.69 171.418l-44.802 44.803 100.488 68.675L243.273 256zm170.29 24.328L268.726 256l84.582 84.582 60.255-60.254zM78.491 213.828L48.848 278.02l85.732.11 48.123 93.856 72.02-17.418 49.988 79.266 29.115-45.504zM256 268.727l-26.504 26.503 100.488 68.676 10.598-10.597zM34.107 296l-8.654 8.654 181.893 181.893 67.047-67.047-28-44.4-73.239 17.712-49.58-96.697L34.777 296z"},child:[]}]})(e)}function Ha(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M266.9 31.85C158.6 30.52 30.27 148.3 32 256c1.82 113.4 142.9 231.4 256 224 95.5-6.2 189.9-119.7 189.8-215.4C477.7 161.1 375.4 36.94 272 32c-1.7-.08-3.4-.13-5.1-.15zm24.8 20.97c1 .04 1.9.18 2.9.41 16.7 4.1 27.3 37.42 15 49.47-12 11.8-44 .6-48-15.74-3.5-14.32 15.1-34.72 30.1-34.14zM135.4 131.4c1.4 0 2.7.2 4 .5 17.9 4.1 31.6 34.3 22.5 50.3-7.5 13.1-30.6 9.8-45 5.2-8.9-2.8-21.07-9.3-20.95-18.7.23-17.2 20.55-36.9 38.15-37.3h1.3zm238.7 69.5h1.2c12.1.2 24.7 14.9 25 27 .3 10.6-10.4 22.9-21 24-11.5 1.2-26.1-9.5-27.7-21-1.7-12.4 10-29.2 22.5-30zm-141 105.7c15.4 0 26 22.1 27 37.5.7 11.9-5.4 29.7-17.2 31.5-16.1 2.5-33.8-17.6-35.3-33.8-1.3-14.4 11-35.2 25.5-35.2zm188.6 1.1c1.2 0 2.2.1 3.3.4 11.7 3.2 17.8 26.9 9 35.2-8.5 8.1-30.9.9-33.7-10.5-2.5-10.2 10.6-24.8 21.4-25.1zm-269.6 19.9c19.2-.5 36 30.2 30.8 48.7-3.7 13.1-23.1 18.2-36.8 18-9-.1-21.4-4-24-12.7-5.9-19.7 9.4-53.4 30-54zm166.2 87.6c.3 0 .7.1 1 .1 11.3 1.1 21.2 17.4 18.8 28.5-2.2 10.1-16.2 18.7-26.3 16.5-8.8-1.9-15.8-13.5-14.9-22.5 1-10.2 11.2-22.8 21.4-22.6z"},child:[]}]})(e)}function g6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M170.344 13.625l-17 22.72 17 22.718 17.03-22.72-17.03-22.718zM375.25 21.22l-22.313 29.75 22.313 29.78 22.28-29.78-22.28-29.75zm-130.28 18.5l-22.282 29.75 22.28 29.75 22.313-29.75-22.31-29.75zM54.03 43.093l-17 22.718 17 22.72 17.032-22.72-17.03-22.718zm391.126 24.843l-13.594 29.407-29.437 13.594 29.438 14.156 13.593 28.844 13.563-29.407 29.436-13.593-28.875-13.593-14.124-29.406zm-300.812 13.22l-17.063 36.968-36.968 17.063 36.97 17.78 17.062 36.25 17.03-36.968 36.97-17.063-36.25-17.062-17.75-36.97zm208.594 9.218l-22.313 29.75 22.313 29.78 22.28-29.78-22.28-29.75zM252.78 153.5l-18.5 24.688 18.5 24.718 18.5-24.72-18.5-24.686zm103.032 31.063l-14 30.375-30.375 14 30.375 14.593 14 29.814 14.032-30.375 30.375-14.032-29.783-14-14.625-30.375zM85.406 191.53l-17.03 22.69 17.03 22.718 17-22.72-17-22.687zm94.125 27.064l-17 22.72 17 22.717 17.032-22.717-17.03-22.72zm72.657 24.062c-7.673.11-14.296 4.334-21.687 10.03-46.035 35.503-104.323 87.027-105.03 115.814-8.237.98-15.564 5.264-15.564 12.813 0 11.258 15.384 15.297 26.625 12.25-.138.687-.218 1.404-.218 2.156 0 16.076 31.4 17.454 37.25 4.467 34.6 9.25 77.038 10.805 115.813 6.157 2.352 14.95 33.956 15.173 37.688 1.03 10.247 7.523 28.91 7.963 40.218 1.376 10.675 6.772 32.408 3.443 32.408-9.813 0-1.963-.465-3.7-1.313-5.218 5.86-2.54 10.063-6.99 10.063-13.376 0-14.332-21.145-18.725-34.72-13.594-4.536-31.173-59.7-84.754-100.874-115.688-8.093-6.08-14.688-8.492-20.656-8.406zM76.72 355.062c-10.75.023-21.5 5.02-21.5 14.907 0 19.773 43 19.4 43 0 0-9.978-10.753-14.93-21.5-14.908zm390.436 13.032c-9.547.042-19.094 4.416-19.094 13.03 0 17.73 38.188 17.568 38.188 0 0-8.783-9.547-13.072-19.094-13.03zm-428.75 15.72c-9.547.018-19.093 4.434-19.093 13.217 0 17.57 38.187 17.234 38.187 0 0-8.862-9.547-13.237-19.094-13.217zm411.72 23.498c-10.75.023-21.5 5.02-21.5 14.907 0 19.775 42.968 19.4 42.968 0 0-9.98-10.72-14.93-21.47-14.908zm-273.845 6.594c-6 .013-11.994 1.765-15.624 5.25-11.234-4.884-29.875-1.086-29.875 11.188 0 14.306 25.317 16.71 34.72 7.812 11.234 4.8 29.875 1.01 29.875-11.03 0-8.864-9.547-13.24-19.094-13.22zm87.22 1.594c-9.547.042-19.094 4.415-19.094 13.03 0 17.727 38.188 17.57 38.188 0 0-8.782-9.547-13.072-19.094-13.03zm-192 9.375c-9.547.02-19.094 4.435-19.094 13.22 0 17.566 38.188 17.23 38.188 0 0-8.865-9.547-13.24-19.094-13.22zM370 438.063c-9.547.04-19.094 4.446-19.094 13.062 0 9.873 11.848 14.203 22.344 13.063-.717 1.552-1.094 3.284-1.094 5.187 0 18.818 36.526 20.522 43.75 5.53 10.313.833 21.625-3.56 21.625-13.124 0-14.715-26.8-16.88-35.5-7.06-4.325-.91-9.065-.96-13.467-.19.345-1.054.53-2.18.53-3.405 0-8.784-9.546-13.104-19.093-13.063zm-150.906 3.5c-10.948.048-21.875 5.09-21.875 14.968 0 20.33 43.78 20.146 43.78 0 0-10.07-10.958-15.016-21.906-14.967zm100.594 17.687c-12.55.026-25.094 5.86-25.094 17.406 0 23.09 50.187 22.65 50.187 0 0-11.65-12.544-17.432-25.092-17.406zm-153 6.72c-10.948.047-21.907 5.087-21.907 14.967 0 20.328 43.782 20.145 43.782 0 0-10.072-10.927-15.016-21.875-14.968z"},child:[]}]})(e)}function gf(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M208.936 31.055c-3.923.033-7.87.167-11.84.394 2.045 3.68 4.064 6.525 5.312 9.66 1.463 3.827 3.751 5.314 7.842 5.58 11.587.824 22.826 3.348 34.123 7.971-5.925.813-11.323 1.264-16.582 2.354-5.29 1.117-10.447 2.87-16.158 4.437 1.222 3.802 2.309 6.91 3.105 10.045.614 2.379 1.783 2.75 4.15 2.473 6.67-.84 13.393-1.288 20.089-1.926-7.607 4.6-15.58 10.603-18.334 14.031-.985.69-1.996 2.072-1.97 3.162.028 3.136.586 6.337.85 8.875 14.99-6.033 29.474-12.77 44.567-17.713 15.015-4.955 30.614-8.183 46.055-12.156-13.419-16.12-31.305-25.327-51.342-30.96-16.302-4.588-32.869-6.37-49.867-6.227zm146.31 49.86c-22.545-.137-44.897 2.09-66.947 7.298-43.662 10.256-161.096 63.487-172.975 85.064-2.895 5.315 4.705 13.794 10.953 12.397 38.478 8.635 78.845 24.024 111.477 28.01 1.038.12 2.923-1.09 3.455-2.178 3.003-5.635 5.662-11.401 8.611-17.432 4.65 2.231 7.601 19.37 4.65 25.643.239.425.481.811.718 1.236 9.117-.928 18.228-1.9 27.238-2.869-9.726 9.807-21.47 16.9-34.733 21.603-1.355.519-3.164 1.024-3.746 2.086-2.923 5.555-5.5 11.322-8.638 17.807 29.02-5.582 75.659-40.62 80.681-38.508-3.03 5.315-5.658 10.085-8.85 15.758 10.447 3.708 20.302 7.655 30.454 10.738 15.84 4.823 32.05 8.119 48.767 5.315 13.951-2.353 25.964-7.88 31.916-21.817 3.456-7.933 3.213-16.171.85-24.384-3.67 8.146-9.647 13.912-16.742 18.802-13.79 9.435-29.791 6.883-39.598-6.644-8.025-11.042-10.548-24.078-12.912-37.084-2.552-13.94.797-26.588 9.113-37.842 10.473-14.085 25.856-13.966 36.012.238 2.525 3.603 4.25 7.827 6.508 12.106 12.33-24.556 35.58-28.116 47.33-2.139.184-2.3.425-3.867.506-5.463.425-20.861-8.798-36.726-25.51-48.5-19.188-13.485-41.035-18.707-64.076-19.183-1.505-.03-3.009-.05-4.512-.059zm-10.295 9.177l7.735 14.441 14.28-8.047 5.087 9.026-14.46 8.175 7.844 14.606-9.154 4.904-7.703-14.441-14.275 8.01-5.121-8.955 14.496-8.174-7.85-14.678 9.121-4.867zM19.205 95.88c6.62 7.453 12.89 14.24 18.816 21.297 1.992 2.352 3.907 3.68 7.018 4.011 17.907 2.377 38.635 9.214 56.045 17.81-15.866-1.503-31.2-.48-46.137 4.103 2.288 6.764 4.732 13.101 6.514 19.638.796 2.872 1.808 4.08 4.703 4.385 6.324.665 12.568 1.687 18.816 2.564-5.662 4.188-11.535 7.454-17.304 10.95-1.142.691-2.362 2.326-2.416 3.588-.372 9.448-.453 18.92-.64 29.271 7.603-1.09 15.387-2.167 24.37-3.467-7.523 7.496-19.538 13.874-29.043 21.672-2.766 7.228-4.999 14.655-7.842 23.106 31.97-12.16 62.637-24.862 86.499-50.426-2.601-.838-4.57-1.381-6.481-2.113-7.626-2.83-15.786-4.821-22.777-8.81-12.912-7.413-14.747-21.577-5.285-33.124 5.764-7.03 13.284-11.627 21.152-15.785 4.117-2.233 8.314-4.292 13.287-6.883-34.23-31.266-75.34-39.675-119.295-41.787zm246.268 25.734s-2.87 3.922-7.762 8.93c-4.942 4.984-12.008 10.87-19.559 16.053-7.546 5.169-15.625 9.634-22.056 12.412-6.432 2.71-11.162 3.943-11.162 3.943s2.872-3.919 7.787-8.928c4.892-4.983 11.988-10.87 19.56-16.05 7.573-5.13 15.623-9.57 22.055-12.371 6.458-2.726 11.137-3.989 11.137-3.989zm37.841 12.252s-2.762 3.92-7.546 8.93c-4.839 4.981-11.748 10.896-19.133 16.117-7.416 5.13-15.362 9.62-21.686 12.436-6.351 2.74-11 4.013-11 4.013s2.787-3.96 7.545-8.968c4.838-4.984 11.746-10.857 19.135-16.08 7.466-5.168 15.36-9.632 21.71-12.436 6.324-2.75 10.975-4.012 10.975-4.012zm29.13 13.37s-2.369 3.891-6.54 8.9c-4.171 4.983-10.34 10.924-17.035 16.172-6.695 5.22-13.95 9.806-19.77 12.675-5.876 2.844-10.232 4.172-10.232 4.172s2.363-3.907 6.535-8.902c4.171-4.984 10.366-10.896 17.008-16.184 6.723-5.223 13.978-9.738 19.8-12.636 5.873-2.842 10.233-4.198 10.233-4.198zm46.437 20.673c-7.681 0-13.924 6.245-13.924 13.965 0 7.734 6.243 13.977 13.924 13.977h99.932c7.734 0 13.982-6.243 13.982-13.977 0-7.721-6.248-13.965-13.983-13.965h-99.931zm-129.969 109.2c2.524 2.895 4.993 5.791 7.49 8.689 36.25 42.306-26.356 104.717-33.902 114.709-7.384 9.863-12.187 24.573-11.21 38.44-19.017-14.468-17.412-36.484-7.552-58.743-26.177 11.88-44.785 25.408-54.953 57.361-4.015 20.875 48.262 43.387 57.719 43.387 62.8 0 68.322-45.737 72.52-79.514 14.308 12.828 2.488 52.056 20.86 66.026 17.415 13.24 48.634 15.97 65.589 2.324 5.022-4.039 42.094-75.26-12.358-101.568 10.803 28.592-3.217 53.538-34.494 65.148 6.608-18.675 16.343-38.23 12.52-62.851-5.023-28.766-20.522-74.035-46.276-86.102-5.979-2.776-30.108-7.307-35.953-7.307z"},child:[]}]})(e)}function y6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.625 30.75L25.345 126.5l.968.406v104.188l5.78 2.375 6.938 2.843 15.407 186.812 14.438-174.563 17.813 7.313v233.53h18.687v-198.25l13.063 120.095 13.5-123.813 22.312 201.125 21.22-196.218.093.03 11.125 115.22 10.25-106.438 57.968 23.78 3.53 1.44.377-.157 14.656 156.155 15.81-168.594 37.564-15.405v191.438h18.687V312.75l2.314-22.97 41.687-17.06 4.126 50.53v166.563h18.688V263.375l1.25-.5 11.78 105.97 12.938-116.095 8.688-3.563 20.97 188.157 22.967-206.125.282-.126V126.78l.686-.28-233.28-95.75zM472.53 134.47v84.06l-27.56 11.282h-.126v.063l-4.156 1.688L450.5 143.5l22.03-9.03zM77.19 147.78l13.187 5.407 9.406 86.688h-2.874L70.47 229.03l6.718-81.25zm304.125 24.126l6.625 81.25L350 268.72l8.875-87.626 22.438-9.188zm-237.188 3.344l20.97 8.625 8.436 87.438-38.155-15.657 8.75-80.406zm174.063 22.563l8.187 80.562-35.125 14.375 8.188-87.25 18.75-7.688zm-111.594 3.093l42.062 17.25 8.22 87.375-58.063-23.842 7.78-80.782z"},child:[]}]})(e)}function b6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.5 30.8c.4 3.92.9 8.68 1.3 14.06 15.8.8 34-.77 48-3.02-1.3-4.46-2.4-8.28-3.1-11.04zm54.7 28.42c-17.5 2.35-36.7 4.33-52.3 3.89.8 20.64.4 43.99-6.3 61.29-17.6 45.2-66.9 73.1-107.9 101.2-20.52 14-39.08 28.1-51.04 42.9-11.95 14.8-17.56 29.6-14.09 48.4 6.06 32.9 30.45 59.1 63.93 78.3-21.28-56 45.5-122.1 89-156-34.1 49.8-75.2 96.4-71.2 153.8 2.5 29.1 23.2 45.8 37.4 52.2 27.8 4.1 52.9-4.8 76.3-13.1-26.7-29.4-28.5-87.4-11.5-113.4-5.5 30.4-1.9 65.7 15.4 90 16.2 22.5 44.3 39.5 66.6 43.6 9.4 1.7 28.1-4.1 42.6-13.4-17.5-11.7-28-24.5-32.6-43.4l17.5-4.3c7.3 28.3 28.5 37.4 53.6 40.5 25.6 3.2 51.9-4 60.8-17.7 12.5-19.1 15.1-41.1 4.8-65.6-4.3-10.3-11.9-20.3-20.3-31.8-16.6-22.6-35.5-45.2-54.2-64.7 24.9 10.8 69.6 50.8 84.5 76.1 2.3-6.1 4-12.5 4.9-19.1 2.4-17.9-2.9-32.2-13.7-46.3-37.3-43.6-95.3-67.6-132.5-104.8 8.9 22.2 18.4 42.6 30.1 62.1-53.3-40.4-61.9-98.9-79.8-160.68zM253.7 447.6c-1.1 19-2.2 28.7-1 46l18-1.3c-1.6-11.3-.1-23.7.8-33.5-6.1-3.2-12.1-6.9-17.8-11.2zm-15.8 3c-6.1 2.2-12.7 4.4-18.3 6.1.2 11.9-1.2 22-3.6 33.4l17.6 3.7c4.2-14.4 3.3-29.9 4.3-43.2zM208 460c-7.2 1.6-13.8 3.4-20.3 4.1-2.7 7-6.2 11.5-10.5 17.7L192 492c7.3-9.7 13.3-21.5 16-32zm75 4c2.1 11 3.9 19.2 5.8 29.9l17.7-3.1c-1.1-7-2.6-14.7-4.1-21-6.4-1.2-12.9-3.2-19.4-5.8zm47.2 3.9c-6.3 1.9-12.7 2.9-18.8 2.8 3.7 7.2 6 12.9 9.1 20.4l16.7-6.9c-2.2-5.4-4.7-11.3-7-16.3z"},child:[]}]})(e)}function yf(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M105 24v46h302V24zm14 62v55c-9.8 20.2-17.4 45.4-23.14 73h18.64c5.5-26.1 12.7-49.4 21.5-67l1-1.9V104h70.9c10.2 6.8 33.2 20.9 48.1 21 9.9.1 23.3-5.5 34.8-11.6 9.9 11.6 20.7 26.6 22 38.6.7 6.8-8.3 12.2-7.8 19 .7 10.4 5.6 26.8 16 26.9 11.6.1 18.2-17.9 18.5-29.5.2-5.6-7.8-9.1-8.2-14.8-1.2-14.7 10.7-38.5 16.7-49.6h27v41.1l1 1.9c8.8 17.6 16 40.9 21.5 67h18.7c-5.7-27.6-13.4-52.8-23.2-73V86zM89.02 232v158H423V232zm119.58 15.8c9.4-.2 19.2 3 27.9 9.2 6.5 4.7 11.5 10.6 14.8 17 .7-.4 1.3-.7 2-1.1 3.1-1.6 6.4-3 9.7-3.9.9-2.4 2.2-4.8 3.8-7 3.6-5 8.3-8.7 13.8-10.5 5.4-1.8 12.1-1.6 17.4 2.2 5.4 3.9 7.6 10.2 7.6 15.9 0 5.7-2 11.4-5.6 16.4-1.6 2.2-3.5 4.2-5.5 5.8.2 3.4 0 6.9-.6 10.4-.1.8-.3 1.5-.4 2.3 7.1 1 14.3 4 20.8 8.7 8.7 6.3 14.8 14.6 17.5 23.5 2.9 9.1 2.2 19.2-3.6 27.2-5.8 8.1-15.2 11.9-24.7 12.1-9.3.1-19.1-3-27.8-9.3-4.9-3.5-9-7.8-12.1-12.4l-.8 1.1-.5-.4c-4.2 3.5-8.5 6.5-12.9 8.8-10.1 5.4-22 7.5-31.4.8-9.3-6.8-11-18.7-9.1-30.1.7-4.8 2.2-9.9 4.2-14.9l-2.2-1.6.4-.5c-4.7-1.6-9.2-3.9-13.5-7-8.6-6.2-14.7-14.6-17.5-23.5-2.8-9.1-2.2-19.2 3.6-27.2 5.8-8.1 15.2-11.9 24.7-12zm.3 18c-5.1.1-8.4 1.8-10.4 4.5-2 2.8-2.5 6.4-1 11.4 1.5 4.7 5.2 10.1 10.9 14.2 4.7 3.4 9.9 5.3 14.4 5.8l1.8-2.7c3-4.1 6.2-7.9 9.6-11.4l2.2-3c-1.8-4.4-5.3-9.3-10.5-13-5.6-4.1-12-5.9-17-5.8zm57.3 21.6c-.9 0-1.8.2-2.7.6l-1.8.9c-1.4.7-2.9 1.6-4.5 2.7l17.7 12.7c.5-1.8.9-3.5 1.2-5 .1-.7.2-1.3.3-2 1.2-5.4-3.9-9.8-9.2-9.9h-1zm-16.9 20.9c-3.1-.3-7.9 6.4-9.5 8.3l17 12.2c2.8-3.1 6.5-10.4 4.4-12.1l-11.3-8.2c-.2-.1-.4-.1-.6-.2zm39 13.7l-2.7 3.6c-2.1 4.1-4.7 8.1-7.5 12.1-.6.9-1.2 1.7-1.9 2.5 1.9 4.1 5.2 8.5 10 11.9 5.7 4.1 12 6 17 5.9 5.1-.1 8.5-1.8 10.4-4.6 2-2.7 2.6-6.4 1.1-11.3-1.5-4.8-5.3-10.2-10.9-14.3-5.1-3.7-10.8-5.5-15.5-5.8zm-60 8.6c-.7 2.4-1.3 4.7-1.6 6.8-1.3 7.8.4 11.5 1.9 12.6 1.4 1 5.5 1.5 12.5-2.2 1.9-1 3.9-2.2 6-3.7zM86.28 408c1.48 12.5 3.47 24 6.01 34.2 3.15 12.6 7.05 23.1 12.51 31.3 5.4 8.2 13.5 14.5 23.2 14.5h256c9.7 0 17.8-6.3 23.2-14.5 5.5-8.2 9.4-18.7 12.5-31.3 2.5-10.2 4.5-21.7 6-34.2h-18.1c-1.4 11.1-3.1 21.1-5.3 29.8-2.9 11.4-6.5 20.4-10 25.7-3.6 5.3-6 6.5-8.3 6.5H128c-2.3 0-4.7-1.2-8.3-6.5-3.5-5.3-7.1-14.3-10-25.7-2.2-8.7-3.9-18.7-5.3-29.8z"},child:[]}]})(e)}function x6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.156 98.063c-4.05-.11-8.044 1.117-11.656 4-1.542 1.23-3.1 2.884-4.47 4.75-22.9 31.22-48.278 57.33-75.186 81-8.76 14.692 10.695 44.406 25.594 44.406 34.144-12.928 69.617-22.516 106.75-26.314 42.628-4.358 17.688-68.134-26.25-45.47 30.3-22.666 7.094-61.79-14.782-62.374zM310.47 108.156c-6.167-.108-12.215 1.172-17.595 4.28-1.576.912-3.042 1.948-4.406 3.095-.038-.056-.09-.13-.126-.186-79.912 66.402-116.334 73.468-158.22 86.844-6.886 2.2-12.27 7.18-16.5 15.5s-6.892 19.843-7.343 33.125c-.9 26.563 6.935 59.927 23.72 89.03 16.72 28.99 43.37 53.946 67.656 67.126 12.143 6.59 23.682 10.167 32.375 10.436 8.694.27 13.915-1.95 17.782-7.375 30.986-43.45 89.343-69.052 156.157-92.25-.005-.006.003-.023 0-.03 2.012-.663 3.967-1.51 5.842-2.594 8.2-4.738 13.535-12.897 16.282-22.125 2.747-9.227 3.22-19.75 2.03-31.25-.953-9.233-3.033-19.127-6.155-29.374-5.916 1.366-11.628 3.157-17.908 5.47 2.835 9.25 4.69 17.978 5.5 25.81 1.007 9.74.403 18.06-1.375 24.033-1.777 5.972-4.412 9.338-7.718 11.25-3.308 1.91-7.543 2.505-13.595 1.06-6.052-1.443-13.55-5.07-21.47-10.81-15.838-11.482-33.334-31.223-47.624-56-14.29-24.78-22.61-49.838-24.624-69.314-1.006-9.738-.403-18.027 1.375-24 1.78-5.973 4.414-9.37 7.72-11.28 1.653-.957 3.52-1.58 5.75-1.782.557-.05 1.147-.067 1.75-.063 1.81.014 3.824.272 6.094.814 6.05 1.444 13.518 5.04 21.437 10.78 8.218 5.957 16.884 14.166 25.314 24.126 5.07-4.055 9.34-8.25 13.406-13.188-8.97-10.46-18.366-19.26-27.75-26.062-9.354-6.78-18.733-11.61-28.094-13.844-2.34-.558-4.674-.935-7.03-1.125-.885-.07-1.776-.108-2.657-.124zm7.967 34.188c-.438.024-.86.063-1.28.125-17.327 2.54-14.97 36.035 5.03 74.56 20 38.528 50.52 67.576 67.844 65.032 5.995-.88 9.263-5.687 10.658-12.875-1.67 2.187-3.847 3.484-6.72 3.907-15.316 2.248-42.316-23.093-60-57.156-17.682-34.064-19.254-63.91-3.937-66.157 3.638-.53 7.69.417 12.345 2.782-8.68-6.8-17.353-10.583-23.938-10.218zM102 325.124c-16.555 1.844-35.304 3.26-57.063 4.376-49.128 2.523-25.555 71.576 30.094 52.22-49.365 29.9 3.86 86.927 26.97 46.75 10.362-18.016 21.88-33.79 34.375-47.814-8.42-9.644-16.078-20.224-22.563-31.47-4.52-7.835-8.462-15.898-11.812-24.06z"},child:[]}]})(e)}function v6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M21.35 26.1l-2.68 15.78L382.7 103.9l2.6-15.79L21.35 26.1zm-.55 57.94l-1.58 15.92L383.2 136l1.6-16-364-35.96zm202.6 52.16c-1.8 7.8-7.7 19.5-14.3 31C201.1 181 192 194 192 208c0 18.7 9.8 31.1 18 40.3 8.2 9.3 14 15.3 14 23.7 0 5.7-3.3 14.8-7.8 24h18c3.4-7.9 5.8-16 5.8-24 0-15.5-10.2-25.5-18-34.3-7.8-8.8-14-16.4-14-29.7 0-4.9 6.9-18.8 14.9-32.8 7-12.1 14.8-24.6 16.7-37.4l-16.2-1.6zm40 4c-1.7 7.5-7.5 18.2-14.2 28.8-8 12.8-17.2 25-17.2 39 0 18.7 9.8 31.1 18 40.3 8.2 9.3 14 15.3 14 23.7 0 5.7-3.3 14.8-7.8 24h18c3.4-7.9 5.8-16 5.8-24 0-15.5-10.2-25.5-18-34.3-7.8-8.8-14-16.4-14-29.7 0-4.9 6.8-17.6 14.8-30.5 7-11.3 14.8-23.1 16.8-35.8l-16.2-1.5zm40 3.9c-1.7 7.2-7.4 16.9-14 26.7-8 11.8-17.4 23.2-17.4 37.2 0 18.7 9.8 31.1 18 40.3 8.2 9.3 14 15.3 14 23.7 0 5.7-3.3 14.8-7.8 24h18c3.4-7.9 5.8-16 5.8-24 0-15.5-10.2-25.5-18-34.3-7.8-8.8-14-16.4-14-29.7 0-4.9 6.6-16.4 14.6-28.3 7-10.4 15-21.5 16.9-34l-16.1-1.6zM40.33 312c1.68 42.5 16.6 76.8 48.58 101.7C122.9 440.1 177.1 456 256 456s133.1-15.9 167.1-42.3c32-24.9 46.9-59.2 48.6-101.7H40.33zM192 472v16h128v-16H192z"},child:[]}]})(e)}function j6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M279.406 20c-22.566.257-41.433 6.548-53.187 18.844l-.626-.375-1.78 3.093c-1.508 1.848-2.89 3.787-4.095 5.874-1.197 2.07-2.19 4.228-3.032 6.438l-36.125 62.563-4.688 8.124-5.313 9.188c-.077.134-.142.272-.218.406L62.064 321.72c-12.087 20.93-7.338 47.287 7.248 71.717 14.587 24.43 39.327 48.134 71.032 66.438 31.704 18.304 64.58 27.864 93.03 28.28 28.452.42 53.666-8.63 65.75-29.56l108.532-187.97 4.625-8 4.626-8.063 36.53-63.25c1.662-1.983 3.163-4.11 4.47-6.375 1.29-2.232 2.338-4.543 3.22-6.937l.812-1.375-.282-.156c12.272-37.432-23.027-92.36-84-127.564-33.91-19.578-69.14-29.237-98.25-28.906zm32.97 19.313c4.743.044 10.416 1.66 15.874 4.812 10.916 6.302 16.874 16.395 13.313 22.563-3.562 6.167-15.303 6.052-26.22-.25-10.916-6.303-16.873-16.395-13.312-22.563 1.782-3.084 5.6-4.607 10.345-4.563zm-57.095 7.593c4.745.044 10.387 1.662 15.845 4.813 10.916 6.3 16.905 16.393 13.344 22.56-3.563 6.17-15.304 6.054-26.22-.25-10.916-6.3-16.874-16.393-13.313-22.56 1.78-3.085 5.6-4.608 10.344-4.564zm133 36.22c4.745.043 10.387 1.66 15.845 4.81 10.916 6.304 16.905 16.396 13.344 22.564-3.563 6.168-15.304 6.084-26.22-.22-10.916-6.3-16.874-16.425-13.313-22.593 1.78-3.083 5.6-4.606 10.344-4.562zm-171.717 8.343c3.616 12.197 10.345 24.915 19.75 37.374L195.5 198.438c-.536-.846-1.09-1.69-1.594-2.532-12.515-20.96-14.71-39.73-7.156-52.812l29.813-51.625zM335.125 93c4.744.044 10.417 1.66 15.875 4.813 10.916 6.302 16.874 16.425 13.313 22.593-3.562 6.168-15.303 6.053-26.22-.25-10.916-6.302-16.873-16.426-13.312-22.594 1.782-3.083 5.6-4.606 10.345-4.562zM275.5 103.188c4.744.044 10.386 1.66 15.844 4.812 10.916 6.302 16.874 16.395 13.312 22.563-3.56 6.167-15.27 6.083-26.187-.22-10.918-6.302-16.906-16.425-13.345-22.593 1.78-3.084 5.63-4.607 10.375-4.563zm138.688 35.468c4.743.044 10.416 1.662 15.875 4.813 10.916 6.3 16.873 16.393 13.312 22.56-3.56 6.17-15.302 6.054-26.22-.25-10.915-6.3-16.873-16.393-13.31-22.56 1.78-3.085 5.6-4.608 10.342-4.564zm-62.813 8.375c4.744.045 10.417 1.63 15.875 4.782 10.916 6.303 16.874 16.426 13.313 22.594-3.562 6.168-15.303 6.053-26.22-.25-10.916-6.302-16.873-16.426-13.312-22.594 1.782-3.083 5.6-4.575 10.345-4.53zm-75.906 20.25c5.026 3.787 10.32 7.44 15.842 10.94l-41.718 72.25c-5.707-3.656-11.103-7.494-16.188-11.47l42.063-71.72zm32 20.345c41.19 21.913 83.48 29.3 113.78 22.063l-29.78 51.593c-7.556 13.086-24.873 20.578-49.283 20.22-22.31-.327-49.572-7.498-76.437-21.625l41.72-72.25z"},child:[]}]})(e)}function w6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M452.7 45.03c-1.2 0-2.3.1-3.6.27-9.8 1.4-26 9.6-42.9 25.9-71.1 68.8-113.7 117.6-132.4 140.3 20.4 2.2 37.9 5.1 51 8.6 5.3-11.8 13.4-23.8 23.5-36.3 24.6-30.5 60.9-63 98.4-98.5 11.9-11.4 17.2-20.3 18.4-25.9.9-4.4-.2-7.8-2.1-10.1-2-2.52-5.5-4.25-10.3-4.27zm-8 8.6c2-.1 3.7.47 4.6 1.67 2.6 3.3-.7 10.1-7.3 15.3-6.6 5.1-14 6.7-16.6 3.4-2.5-3.2.8-10.1 7.4-15.2 4.1-3.25 8.6-5.06 11.9-5.17zM197.3 222.2c-56.6 0-105.84 5.7-130.26 13.8-7.21 2.3-12.46 5.1-15.57 7.8-3.44 3-4.85 6.3-4.85 9.5s1.41 6.5 4.85 9.5c.43.4.89.7 1.4 1.1v158.2c0 15 10.35 28 24.95 31 79.78 18 159.48 19 239.18 0 14.5-3 24.8-16 24.8-31V282.3c-46.5 15.4-117.3 13.8-127.3 1.9 49.3-1 91.2-6.3 113.1-13.6 7.2-2.4 12.5-5.1 15.6-7.8 3.4-3 4.8-6.3 4.8-9.5s-1.4-6.5-4.8-9.5c-3.1-2.7-8.4-5.5-15.6-7.8-24.4-8.1-73.6-13.8-130.3-13.8zm0 12.5c55 0 102.7 5.3 126.4 13.1 4.4 1.5 8 3 10.3 4.7.3.2.7.5 1 .8-.3.3-.7.6-1 .8-2.3 1.7-5.9 3.2-10.3 4.7-23.7 7.8-71.4 13-126.4 13-54.9 0-102.65-5.2-126.33-13-4.45-1.5-7.96-3-10.33-4.7-.32-.2-.69-.5-.99-.8.3-.3.67-.6.99-.8 2.37-1.7 5.88-3.2 10.33-4.7 23.68-7.8 71.43-13.1 126.33-13.1z"},child:[]}]})(e)}function Qa(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M171 42l-20 48h210l-20-48H171zm-19.45 65.55v296.9h208.9v-296.9h-208.9zM151 422l20 48h170l20-48H151z"},child:[]}]})(e)}function _6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M67 20.31c-42.25.41-79.45 58.42-19.84 72.19C151 116.5 232 178.6 295.1 275.6c8.2 16.3 14.4 32.5 11.3 48.8-4.4 15.9-5.3 32-3.2 45.9 4.1 25 16.5 52.2 37.8 75.4 21.2 23.2 46.9 37.8 71.4 44 24.5 6.1 49 4.3 65.4-10.7 16.5-15.1 18.6-38.2 12.9-61.7-5.7-23.5-20-48.8-41-71.7-21-23-44.9-39.5-67.8-47.3-8.2-2.8-16.5-4.6-24.4-5-13.6-5.5-23.6-17.1-32.6-30.5C269.3 154.7 186.7 84.04 90.4 26.66c-7.62-3.79-16.14-6.35-23.4-6.35zM322.2 335.8c24.6 61.8 73.3 110.8 127.6 137.5-8.4 1.5-18.9 1.1-30.3-1.7-21-5.3-44.5-18.3-63.8-39.3-19.3-21.1-30.7-46.4-34.2-67.9-1-9.7-1.3-20.1.7-28.6z"},child:[]}]})(e)}function Ga(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M121.4 33v30h78.1V33zm11 48c-16.4 16.58-42.95 46.2-42.95 71v39H231.5v-39c0-24.8-26.5-54.42-43-71zM89.45 209v16H231.5v-16zm0 34v16H231.5v-16zm0 34v16H231.5v-16zm0 34v170.2c43.05 12.7 98.95 12.7 142.05 0V311zm224.85 34l14.3 142H345l-6.9-118.5 18-1L363 487h45.3l14.3-142z"},child:[]}]})(e)}function S6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M98.344 16.688C79.692 43.785 68.498 69.01 65.5 89.56l23.938 39.157 28.624-33.47c.868-21.213-5.49-48.677-19.718-78.563zM472.5 19.625C444.04 36.055 423.112 54 411.562 71.25l4.75 45.688L456.563 99c9.89-18.777 15.938-46.29 15.938-79.375zm-91.75 27.28c-10.153 21.036-16.8 40.84-20.156 58.314l18.375 57.686 19.78-34.25-6.5-62.22h.03c-3.422-6.392-7.252-12.906-11.53-19.53zM27.25 80.782c-.125 23.364 2.393 44.102 6.875 61.314L75.5 186.25l3.125-39.406L46 93.47l.03-.032c-5.83-4.287-12.08-8.52-18.78-12.657zm132.844 10.532c-8.415 3.504-16.29 7.213-23.594 11.094l-39.25 45.97-3.094 39.374 50.438-39.094c6.712-15.904 12.09-35.263 15.5-57.344zm177.22 21.626c-24.024 58.09-16.16 97.86 7.873 108.5l21.157-36.625-19.594-61.438c-2.973-3.46-6.108-6.943-9.438-10.438zm146.03.218c-4.55-.028-8.97.084-13.28.28L414.935 138l-19.78 34.28 62.343-13.655c12.897-11.47 26.09-26.626 38.656-45.094-4.358-.216-8.64-.348-12.812-.374zm-226.094 8.72c-23.24 23.238-38.832 46.003-45.53 65.655l16.436 42.907 34.22-27.75c4.695-20.704 3.436-48.856-5.126-80.812zM16.406 159.06c3.28 62.77 27.482 95.31 53.75 94.594l3.344-42.22-44.063-47c-4.175-1.844-8.515-3.647-13.03-5.374zm143.22 11.375c-6.457 1.354-12.63 2.896-18.5 4.563l-48.97 37.938-3.312 41.75c26.492 7.51 57.16-20.567 70.78-84.25zm16.06 1.563c-4.36 22.935-5.65 43.762-4.374 61.5l32.688 51 10.22-38.188-22.407-58.437h.03c-4.952-5.28-10.318-10.592-16.155-15.875zm267.408 8.938l-60.563 13.218-20.936 36.25c20.682 18.195 60.438 6.035 100.125-45.625-6.413-1.552-12.62-2.823-18.626-3.843zm-138.688 25.53c-8.912 1.92-17.304 4.16-25.187 6.657l-46.97 38.03-10.22 38.19 56.69-29.283c9.493-14.424 18.323-32.49 25.686-53.593zm155.125 25.063c-25.85 20.324-44.046 41.06-53.03 59.782l11.22 44.532 37.28-23.47c7.126-19.99 9.236-48.088 4.53-80.843zm-123.342 8.595c-34.435 77.573-59.394 159.06-62.97 253.03h18.72c3.558-90.792 27.573-169.428 61.312-245.436l-17.063-7.595zm-185.375 6.906c-8.173 62.347 9.714 98.713 35.687 102.75l10.97-40.874-34.814-54.25c-3.77-2.57-7.713-5.105-11.844-7.625zm221.75 24.532c-7.053 22.243-10.817 42.77-11.657 60.532l26.406 54.594L402 349.967l-15.28-60.687h.06c-4.3-5.848-9.033-11.76-14.217-17.717zm-302.47 1.532c-8.664 74.584-8.13 147.835 12.188 220.062h19.44c-20.877-70.772-21.764-143.02-13.064-217.906l-18.562-2.156zm219.47 11.094c-6.613.16-12.953.54-19.032 1.125L215.5 313.78l-10.844 40.408c24.69 12.23 59.938-9.82 84.906-70zm206.718 36.937c-9.072.844-17.664 2.052-25.78 3.594l-51.156 32.217-14.688 36.657 59.75-22.313c11.14-13.193 22.055-30.075 31.875-50.155zm-157.31 22c-15.528 60.938-2.096 99.19 23.217 106.28l15.72-39.28-28.094-58.03c-3.43-3-7.053-5.985-10.844-8.97zM183.25 368.72c-12.674 41.233-22.26 82.547-26.844 124.436h18.813c4.507-39.722 13.69-79.23 25.905-118.97l-17.875-5.467zm270 26.655l-58 21.688-15.563 38.875c23.056 15.098 60.673-2.606 92.625-59.407-6.594-.627-12.95-1.003-19.062-1.155zM356.5 469.03c-1.874 7.713-3.185 15.757-3.656 24.126h18.687c.45-6.686 1.55-13.206 3.126-19.687l-18.156-4.44z"},child:[]}]})(e)}const iT=f.div`
  direction: rtl;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`,oT=f.h1`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin-bottom: 3rem;
`,Od=f.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 60rem) {
    grid-template-columns: 1fr 1fr 1fr;
    & > div:nth-child(4) {
      grid-column: span 3;
      width: 60%;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(4) {
      grid-column: span 1;
      width: 100%;
    }
  }

  @media (max-width: 32rem) {
    grid-template-columns: 1fr;
  }
`,sT=f.div`
  background-color: ${({color:e})=>e||"var(--color-grey-0)"};
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  color: var(--color-grey-0);
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 5rem;
    height: 5rem;
  }
`,lT=f.div`
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  color: var(--color-brand-700);
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
`,cT=f.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`,kx=f.div`
  background: var(--color-grey-0);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.3s ease;
  margin: auto;
`,$x=f.div`
  background-color: var(--color-brand-700);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`,Cx=f.div`
  max-height: ${({open:e})=>e?"300px":"0"};
  opacity: ${({open:e})=>e?1:0};
  padding: ${({open:e})=>e?"1.6rem":"0 1.6rem"};
  border-top: ${({open:e})=>e?"1px solid var(--color-grey-200)":"none"};
  overflow: hidden;
  transition: all 0.35s ease;
`,Md=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`,vl=f.label`
  font-size: 1.3rem;
  color: var(--color-grey-700);
`,Bd=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-300);
  font-size: 1.2rem;
`,Ex=f.button`
  margin: auto;
  margin-top: 3.2rem;
  width: 70%;
  background: var(--color-brand-600);
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Ud={first:[{name_ar:"جبنة بيضاء",name_en:"white-cheese",icon:hf,color:"#F4B400"},{name_ar:"مربى",name_en:"jam",icon:yf,color:"#F57C00"},{name_ar:"حلاوة",name_en:"halawa",icon:pf,color:"#E67E22"},{name_ar:"فول معلب",name_en:"canned-fava",icon:sf,color:"#8E44AD"}],second:[{name_ar:"تونة",name_en:"tuna",icon:gf,color:"#6C5CE7"},{name_ar:"عصير",name_en:"juice",icon:Qa,color:"#FF6F00"},{name_ar:"مياه",name_en:"water",icon:Ga,color:"#039BE5"}],third:[{name_ar:"تونة قطع ضباط",name_en:"tuna-officers",icon:Pa,color:"#3949AB"},{name_ar:"تونة قطع مجندين",name_en:"tuna-soldiers",icon:Pa,color:"#5C6BC0"},{name_ar:"بسكوت بالتمر",name_en:"tamr-biscuit",icon:Ha,color:"#A1887F"}],fourth:[{name_ar:"بسكوت ويفر",name_en:"wafer-biscuit",icon:Ha,color:"#D7A86E"},{name_ar:"مياه معدنية",name_en:"mineral-water",icon:Ga,color:"#29B6F6"},{name_ar:"عصير مراعي",name_en:"marai-juice",icon:Qa,color:"#FFA726"}]},dT=[{name_ar:"جبنة بيضاء",name_en:"white-cheese",icon:hf,color:"#F4B400"},{name_ar:"مربى",name_en:"jam",icon:yf,color:"#F57C00"},{name_ar:"حلاوة",name_en:"halawa",icon:pf,color:"#E67E22"},{name_ar:"فول معلب",name_en:"canned-fava",icon:sf,color:"#8E44AD"},{name_ar:"تونة",name_en:"tuna",icon:gf,color:"#6C5CE7"},{name_ar:"عصير",name_en:"juice",icon:Qa,color:"#FF6F00"},{name_ar:"مياه",name_en:"water",icon:Ga,color:"#039BE5"},{name_ar:"تونة قطع ضباط",name_en:"tuna-officers",icon:Pa,color:"#3949AB"},{name_ar:"تونة قطع مجندين",name_en:"tuna-soldiers",icon:Pa,color:"#5C6BC0"},{name_ar:"بسكوت بالتمر",name_en:"tamr-biscuit",icon:Ha,color:"#A1887F"},{name_ar:"بسكوت ويفر",name_en:"wafer-biscuit",icon:Ha,color:"#D7A86E"},{name_ar:"مياه معدنية",name_en:"mineral-water",icon:Ga,color:"#29B6F6"},{name_ar:"عصير مراعي",name_en:"marai-juice",icon:Qa,color:"#FFA726"}];function uT(){const e=ur(),[a,o]=S.useState(""),[s,c]=S.useState(""),[u,h]=S.useState(null),[p,g]=S.useState({item:"",from:"",to:""}),y=x=>h(u===x?null:x),b=x=>x.map(({name_ar:j,name_en:_,icon:C,color:$})=>r.jsxs(sT,{color:$,onClick:()=>e(`/rations/stores/dry-meals/dry-incoming/${_}`),children:[r.jsx(C,{}),r.jsx("span",{children:j})]},_));return r.jsxs(iT,{children:[r.jsx(oT,{children:"الأصناف الواردة - الوجبات الجافة"}),r.jsx(Od,{cols:4,children:b(Ud.first)}),r.jsx(Od,{cols:3,children:b(Ud.second)}),r.jsx(lT,{children:"—————— أصناف الترفيه ——————"}),r.jsx(Od,{cols:3,children:b(Ud.third)}),r.jsx(Od,{cols:3,children:b(Ud.fourth)}),r.jsxs(cT,{children:[r.jsxs(kx,{children:[r.jsx($x,{onClick:()=>y("single-range"),children:"تقرير شهري لكل صنف"}),r.jsxs(Cx,{open:u==="single-range",children:[r.jsxs(Md,{children:[r.jsx(vl,{children:"اختر الصنف"}),r.jsxs("select",{value:p.item||"",onChange:x=>g({...p,item:x.target.value}),style:{padding:"0.6rem 0.8rem",borderRadius:"6px",border:"1px solid var(--color-grey-300)",fontSize:"1.2rem",backgroundColor:"var(--color-grey-0)"},children:[r.jsx("option",{value:"",children:"-- اختر --"}),dT.map(x=>r.jsx("option",{value:x.name_en,children:x.name_ar},x.name_en))]}),r.jsx(vl,{children:"من"}),r.jsx(Bd,{type:"date",value:p.from||"",onChange:x=>g({...p,from:x.target.value})}),r.jsx(vl,{children:"إلى"}),r.jsx(Bd,{type:"date",value:p.to||"",onChange:x=>g({...p,to:x.target.value})})]}),r.jsx(Md,{children:r.jsx(Ex,{disabled:!p.item||!p.from||!p.to||p.from>p.to,onClick:()=>e(`/rations/stores/dry-meals/dry-incoming/reports/range-single?item=${encodeURIComponent(p.item)}&from=${encodeURIComponent(p.from)}&to=${encodeURIComponent(p.to)}`),children:"عرض التقرير"})})]})]}),r.jsxs(kx,{children:[r.jsx($x,{onClick:()=>y("range"),children:"تقرير شهري لجميع الأصناف الواردة"}),r.jsxs(Cx,{open:u==="range",children:[r.jsxs(Md,{children:[r.jsx(vl,{children:"من"}),r.jsx(Bd,{type:"date",value:a,onChange:x=>o(x.target.value)}),r.jsx(vl,{children:"إلى"}),r.jsx(Bd,{type:"date",value:s,onChange:x=>c(x.target.value)})]}),r.jsx(Md,{children:r.jsx(Ex,{disabled:!a||!s||a>s,onClick:()=>e(`/rations/stores/dry-meals/dry-incoming/reports/range?from=${encodeURIComponent(a)}&to=${encodeURIComponent(s)}`),children:"عرض التقرير"})})]})]})]})]})}const fT={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},f0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;

  min-width: 95rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,Tx=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,m0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,mT=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,hT=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Fd=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
  color: white;
  @media print {
    color: black;
  }
`,Ld=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,pT=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,gT=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,yT=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,bT=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,xT=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,vT=(e,a=4)=>Number(Number(e).toFixed(a));function jT(){const[e]=nr(),a=e.get("from"),o=e.get("to"),{data:s,isPending:c,error:u}=je({queryKey:["incoming-range-report",a,o],queryFn:()=>wE(a,o),enabled:!!a&&!!o}),h={};s&&s.forEach(b=>{const x=`${b.item_name}||${b.unit||""}`,j=Number(b.quantity)||0;h[x]||(h[x]={item_name:b.item_name,unit:b.unit||"",quantity:0}),h[x].quantity+=j});const p=[];if(Object.entries(fT).forEach(([b,x])=>{const j=Object.values(h).filter(_=>_.item_name===b);j.length===0?p.push({item_key:b,item_label:x,quantity:0,unit:""}):j.forEach(_=>{p.push({item_key:b,item_label:x,quantity:_.quantity,unit:_.unit})})}),!a||!o)return r.jsxs(f0,{children:[r.jsx(Tx,{children:r.jsx(m0,{children:"تقرير شهري للوارد"})}),r.jsx(m0,{children:"يجب تحديد فترة البداية والنهاية من صفحة الأصناف."})]});if(c)return r.jsx(Ae,{});if(u)return r.jsxs(f0,{children:["حدث خطأ أثناء تحميل البيانات: ",u.message]});const g=new Date(a).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(f0,{children:[r.jsx(yT,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(Tx,{children:r.jsxs(m0,{children:["تقرير الوارد للأصناف الجافة من ",g," إلى ",y]})}),r.jsx(mT,{children:r.jsxs(hT,{children:[r.jsx(bT,{children:r.jsxs("tr",{children:[r.jsx(Fd,{children:"م"}),r.jsx(Fd,{children:"اسم الصنف"}),r.jsx(Fd,{children:"الكمية الواردة"}),r.jsx(Fd,{children:"الوحدة"})]})}),r.jsx(xT,{children:p.map((b,x)=>r.jsxs("tr",{children:[r.jsx(Ld,{children:x+1}),r.jsx(Ld,{children:b.item_label}),r.jsx(Ld,{children:vT(Number(b.quantity))})," ",r.jsx(Ld,{children:b.unit||"-"})]},`${b.item_key}-${b.unit||"no-unit"}-${x}`))})]})}),r.jsx(pT,{children:r.jsx(gT,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const h0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,wT=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,Dx=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,_T=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,ST=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Ta=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,jt=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,kT=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,$T=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,CT=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,ET=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,TT=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,DT={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},Ao=(e,a=4)=>Number(Number(e).toFixed(a));function RT(){const[e]=nr(),a=e.get("item"),o=e.get("from"),s=e.get("to"),c=a!=="tuna-officers"&&a!=="tuna-soldiers"&&a!=="tamr-biscuit"&&a!=="wafer-biscuit"&&a!=="mineral-water"&&a!=="marai-juice",{data:u,isPending:h,error:p}=je({queryKey:["dry-item-range-single",a,o,s],queryFn:()=>_E(a,o,s),enabled:!!a&&!!o&&!!s});if(!a||!o||!s)return r.jsx(h0,{children:r.jsx(Dx,{children:"يرجى اختيار الصنف والفترة أولاً"})});if(h)return r.jsx(Ae,{});if(p)return r.jsxs(h0,{children:["حدث خطأ: ",p.message]});const g=u?.reduce((_,C)=>_+(Number(C.quantity)||0),0),y=u?.reduce((_,C)=>_+(Number(C.mission_meals)||0),0),b=u[0]?.unit||"-",x=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),j=new Date(s).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(h0,{children:[r.jsx(TT,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(wT,{children:r.jsxs(Dx,{children:["تقرير وارد - ",DT[a]||a," - أصناف جافة من ",x," إلى"," ",j]})}),r.jsx(_T,{children:r.jsxs(ST,{children:[r.jsx(kT,{children:r.jsxs("tr",{children:[r.jsx(Ta,{children:"م"}),r.jsx(Ta,{children:"اليوم"}),r.jsx(Ta,{children:"التاريخ"}),r.jsx(Ta,{children:"الكمية المضافة"}),c&&r.jsxs(Ta,{children:["الكمية المضافة",r.jsx("br",{})," ( ارتجاع مأموريات )"]}),c&&r.jsxs(Ta,{children:["رقم الإذن",r.jsx("br",{})," ( ارتجاع مأموريات )"]}),r.jsx(Ta,{children:"الوحدة"}),r.jsx(Ta,{children:"رقم الإذن"})]})}),r.jsxs($T,{children:[u?.map((_,C)=>r.jsxs("tr",{children:[r.jsx(jt,{children:C+1}),r.jsx(jt,{children:Intl.DateTimeFormat("ar-EG",{weekday:"long"}).format(new Date(_.date+"T00:00:00"))}),r.jsx(jt,{children:_.date}),r.jsx(jt,{children:Ao(Number(_.quantity))}),c&&r.jsx(jt,{children:Ao(Number(_.mission_meals))||"-"}),c&&r.jsx(jt,{children:_.permit_number_mission||"-"}),r.jsx(jt,{children:_.unit||"-"}),r.jsx(jt,{children:_.permit_number||"-"})]},C)),c&&r.jsxs("tr",{style:{borderTop:"2px solid #888"},children:[r.jsx(jt,{rowSpan:2,colSpan:3,style:{fontWeight:"bold",borderLeft:"2px solid #888"},children:"الإجمالي"}),r.jsx(jt,{colSpan:1,style:{fontWeight:"bold"},children:Ao(Number(g))}),c&&r.jsx(jt,{style:{fontWeight:"bold"},children:Ao(Number(y))}),r.jsx(jt,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"}),r.jsx(jt,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:b}),r.jsx(jt,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"})]}),r.jsxs("tr",{style:{borderTop:"2px solid #888"},children:[!c&&r.jsx(jt,{colSpan:3,style:{fontWeight:"bold"},children:"الإجمالي"}),c?r.jsx(jt,{colSpan:2,style:{fontWeight:"bold"},children:Ao(Number(g+y))}):r.jsx(jt,{style:{fontWeight:"bold"},children:Ao(Number(g+y))}),r.jsx(jt,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:c?"-":b}),r.jsx(jt,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:c?b:"-"}),c&&r.jsx(jt,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"})]})]})]})}),r.jsx(CT,{children:r.jsx(ET,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const zT=f.div`
  direction: rtl;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`,AT=f.h1`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin-bottom: 3rem;
`,Pd=f.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 60rem) {
    grid-template-columns: 1fr 1fr 1fr;
    & > div:nth-child(4) {
      grid-column: span 3;
      width: 60%;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(4) {
      grid-column: span 1;
      width: 100%;
    }
  }

  @media (max-width: 32rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 32rem) {
    grid-template-columns: 1fr;
  }
`,qT=f.div`
  background-color: ${({color:e})=>e||"var(--color-grey-0)"};
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  color: var(--color-grey-0);
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 5rem;
    height: 5rem;
  }
`,NT=f.div`
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  color: var(--color-brand-700);
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
`,OT=f.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem;
`,p0=f.div`
  background: var(--color-grey-0);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  min-width: 40rem;
  overflow: hidden;
  transition: all 0.3s ease;
`,g0=f.div`
  background-color: var(--color-brand-700);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`,y0=f.div`
  max-height: ${({open:e})=>e?"300px":"0"};
  opacity: ${({open:e})=>e?1:0};
  padding: ${({open:e})=>e?"1.6rem":"0 1.6rem"};
  border-top: ${({open:e})=>e?"1px solid var(--color-grey-200)":"none"};
  overflow: hidden;
  transition: all 0.35s ease;
`,qo=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`,No=f.label`
  font-size: 1.3rem;
  color: var(--color-grey-700);
`,jl=f.input`
  background-color: var(--color-grey-0);

  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-300);
  font-size: 1.2rem;
`,b0=f.button`
  margin: auto;
  margin-top: 3.2rem;
  width: 70%;
  background: var(--color-brand-600);
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Hd={first:[{name_ar:"جبنة بيضاء",name_en:"white-cheese",icon:hf,color:"#F4B400"},{name_ar:"مربى",name_en:"jam",icon:yf,color:"#F57C00"},{name_ar:"حلاوة",name_en:"halawa",icon:pf,color:"#E67E22"},{name_ar:"فول معلب",name_en:"canned-fava",icon:sf,color:"#8E44AD"}],second:[{name_ar:"تونة",name_en:"tuna",icon:gf,color:"#6C5CE7"},{name_ar:"عصير",name_en:"juice",icon:Qa,color:"#FF6F00"},{name_ar:"مياه",name_en:"water",icon:Ga,color:"#039BE5"}],third:[{name_ar:"تونة قطع ضباط",name_en:"tuna-officers",icon:Pa,color:"#3949AB"},{name_ar:"تونة قطع مجندين",name_en:"tuna-soldiers",icon:Pa,color:"#5C6BC0"},{name_ar:"بسكوت بالتمر",name_en:"tamr-biscuit",icon:Ha,color:"#A1887F"}],fourth:[{name_ar:"بسكوت ويفر",name_en:"wafer-biscuit",icon:Ha,color:"#D7A86E"},{name_ar:"مياه معدنية",name_en:"mineral-water",icon:Ga,color:"#29B6F6"},{name_ar:"عصير مراعي",name_en:"marai-juice",icon:Qa,color:"#FFA726"}]},MT=[{name_ar:"جبنة بيضاء",name_en:"white-cheese",icon:hf,color:"#F4B400"},{name_ar:"مربى",name_en:"jam",icon:yf,color:"#F57C00"},{name_ar:"حلاوة",name_en:"halawa",icon:pf,color:"#E67E22"},{name_ar:"فول معلب",name_en:"canned-fava",icon:sf,color:"#8E44AD"},{name_ar:"تونة",name_en:"tuna",icon:gf,color:"#6C5CE7"},{name_ar:"عصير",name_en:"juice",icon:Qa,color:"#FF6F00"},{name_ar:"مياه",name_en:"water",icon:Ga,color:"#039BE5"},{name_ar:"تونة قطع ضباط",name_en:"tuna-officers",icon:Pa,color:"#3949AB"},{name_ar:"تونة قطع مجندين",name_en:"tuna-soldiers",icon:Pa,color:"#5C6BC0"},{name_ar:"بسكوت بالتمر",name_en:"tamr-biscuit",icon:Ha,color:"#A1887F"},{name_ar:"بسكوت ويفر",name_en:"wafer-biscuit",icon:Ha,color:"#D7A86E"},{name_ar:"مياه معدنية",name_en:"mineral-water",icon:Ga,color:"#29B6F6"},{name_ar:"عصير مراعي",name_en:"marai-juice",icon:Qa,color:"#FFA726"}];function BT(){const e=ur(),[a,o]=S.useState(""),[s,c]=S.useState(""),[u,h]=S.useState(""),[p,g]=S.useState(null),[y,b]=S.useState({item:"",from:"",to:""}),x=_=>{g(p===_?null:_)},j=_=>_.map(({name_ar:C,name_en:$,icon:D,color:A})=>r.jsxs(qT,{color:A,onClick:()=>e(`/rations/stores/dry-meals/dry-items/${$}`),children:[r.jsx(D,{}),r.jsx("span",{children:C})]},$));return r.jsxs(zT,{children:[r.jsx(AT,{children:"أصناف الصرف - الوجبات الجافة"}),r.jsx(Pd,{cols:4,children:j(Hd.first)}),r.jsx(Pd,{cols:3,children:j(Hd.second)}),r.jsx(NT,{children:"—————— أصناف الترفيه ——————"}),r.jsx(Pd,{cols:3,children:j(Hd.third)}),r.jsx(Pd,{cols:3,children:j(Hd.fourth)}),r.jsxs(OT,{children:[r.jsxs(p0,{children:[r.jsx(g0,{onClick:()=>x("daily"),children:"تقرير يومي لجميع الأصناف"}),r.jsxs(y0,{open:p==="daily",children:[r.jsxs(qo,{children:[r.jsx(No,{children:"اختر التاريخ"}),r.jsx(jl,{type:"date",value:a,onChange:_=>o(_.target.value)})]}),r.jsx(qo,{children:r.jsx(b0,{disabled:!a,onClick:()=>e(`/rations/stores/dry-meals/reports/daily?date=${encodeURIComponent(a)}`),children:"عرض التقرير"})})]})]}),r.jsxs(p0,{children:[r.jsx(g0,{onClick:()=>x("range"),children:"تقرير شهري لجميع الأصناف"}),r.jsxs(y0,{open:p==="range",children:[r.jsxs(qo,{children:[r.jsx(No,{children:"من"}),r.jsx(jl,{type:"date",value:s,onChange:_=>c(_.target.value)}),r.jsx(No,{children:"إلى"}),r.jsx(jl,{type:"date",value:u,onChange:_=>h(_.target.value)})]}),r.jsx(qo,{children:r.jsx(b0,{disabled:!s||!u||s>u,onClick:()=>e(`/rations/stores/dry-meals/reports/range?from=${encodeURIComponent(s)}&to=${encodeURIComponent(u)}`),children:"عرض التقرير"})})]})]}),r.jsxs(p0,{children:[r.jsx(g0,{onClick:()=>x("single-range"),children:"تقرير شهري لكل صنف"}),r.jsxs(y0,{open:p==="single-range",children:[r.jsxs(qo,{children:[r.jsx(No,{children:"اختر الصنف"}),r.jsxs("select",{value:y.item||"",onChange:_=>b({...y,item:_.target.value}),style:{padding:"0.6rem 0.8rem",borderRadius:"6px",border:"1px solid var(--color-grey-300)",fontSize:"1.2rem",backgroundColor:"var(--color-grey-0)"},children:[r.jsx("option",{value:"",children:"-- اختر --"}),MT.map(_=>r.jsx("option",{value:_.name_en,children:_.name_ar},_.name_en))]}),r.jsx(No,{children:"من"}),r.jsx(jl,{type:"date",value:y.from||"",onChange:_=>b({...y,from:_.target.value})}),r.jsx(No,{children:"إلى"}),r.jsx(jl,{type:"date",value:y.to||"",onChange:_=>b({...y,to:_.target.value})})]}),r.jsx(qo,{children:r.jsx(b0,{disabled:!y.item||!y.from||!y.to||y.from>y.to,onClick:()=>e(`/rations/stores/dry-meals/reports/item-range?item=${encodeURIComponent(y.item)}&from=${encodeURIComponent(y.from)}&to=${encodeURIComponent(y.to)}`),children:"عرض التقرير"})})]})]})]})]})}async function UT(e){const a=await fetch(`/api/dry_items_withdrawals?date=${encodeURIComponent(e)}`);if(!a.ok)throw new Error("فشل جلب سجلات الصرف");const o=await a.json();return Array.isArray(o)?o:[]}async function FT(e){const a=await fetch(`/api/dry_items_withdrawals?item_name=${encodeURIComponent(e)}&order_by=date&order=desc&limit=31`);if(!a.ok)throw new Error("فشل جلب سجلات الصرف");const o=await a.json();return Array.isArray(o)?o:[]}async function LT(e){const a=await fetch("/api/dry_items_withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const g=await a.json().catch(()=>null);throw new Error(g?.error||"فشل إضافة السحب")}const o=await a.json();await X1(e.item_name,e.unit??"");const s=Number(e.quantity||0)+Number(e.mission_meals||0);await uf(e.item_name,-s,e.unit??null);const c=await fetch(`/api/dry_items_withdrawals/prev?item_name=${encodeURIComponent(e.item_name)}&date=${e.date}&id=${o.id}`),u=c.ok?await c.json():null,h=await fetch(`/api/dry_items_withdrawals/next?item_name=${encodeURIComponent(e.item_name)}&date=${e.date}&id=${o.id}`),p=h.ok?await h.json():null;if(!p)return o;if(u){const y=Number(u?.stock_after??0)-s;await fetch(`/api/dry_items_withdrawals/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_after:y})})}else{const g=Number(p?.stock_after??0),y=Number(p?.quantity??0)+Number(p?.mission_meals??0),b=g+y-s;await fetch(`/api/dry_items_withdrawals/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_after:b})})}return await fetch("/api/dry_items_withdrawals/adjust-next",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e.item_name,date:e.date,id:o.id,diff:s})}),o}async function PT({id:e,payload:a}){const o=await fetch(`/api/dry_items_withdrawals/${encodeURIComponent(e)}`);if(!o.ok){const x=await o.json().catch(()=>null);throw new Error(x?.error||"السجل المطلوب غير موجود")}const s=await o.json(),c=Number(s.quantity||0)+Number(s.mission_meals||0),u=Number(a.quantity??s.quantity??0)+Number(a.mission_meals??s.mission_meals??0),h=c-u,p={...a,stock_after:Number(s.stock_after||0)+h},g=await fetch(`/api/dry_items_withdrawals/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!g.ok){const x=await g.json().catch(()=>null);throw new Error(x?.error||"فشل تحديث السحب")}const y=await g.json();h!==0&&await uf(a.item_name||s.item_name,h,a.unit??s.unit??null);const b=u-c;return b!==0&&await fetch("/api/dry_items_withdrawals/adjust-next",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:s.date,id:s.id,diff:b})}),y}async function HT(e){const a=await fetch(`/api/dry_items_withdrawals/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}function QT(e){return je({queryKey:["dry-withdrawals",e],queryFn:async()=>{const a=await fetch(`/api/dry_items_withdrawals?date_from=${encodeURIComponent(e?.from)}&date_to=${encodeURIComponent(e?.to)}&order_by=date&order=asc`);if(!a.ok)throw new Error("فشل جلب daily_withdrawal");const o=await a.json();return Array.isArray(o)&&o.length?o:null},enabled:!!e,onError:a=>{console.error("useDryWithdrawals error:",a),W.error("حدث خطأ")}})}function k6(e){return je({queryKey:["dry-withdrawals",e],queryFn:()=>UT(e),onError:a=>{console.error("useDryWithdrawals error:",a),W.error("فشل تحميل سجل الصرف")}})}function GT(e){return je({queryKey:["dry-withdrawals",e],queryFn:()=>FT(e),enabled:!!e,onError:a=>{console.error("useDryWithdrawals error:",a),W.error("فشل تحميل سجل الصرف")}})}function VT(e){return je({queryKey:["dry-current-stock",e],queryFn:()=>NC(e),enabled:!!e,onError:a=>{console.error("useDryCurrentStock error:",a),W.error("فشل تحميل المخزون الحالي")}})}function YT(){const e=Te();return Re({mutationFn:LT,onSuccess:()=>{W.success("تم إضافة الصرف بنجاح"),e.invalidateQueries()},onError:a=>{console.error("useAddDryWithdrawal error:",a),W.error("فشل إضافة الصرف")}})}function IT(){const e=Te();return Re({mutationFn:PT,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error("useUpdateDryWithdrawal error:",a),W.error("حدث خطأ")}})}function KT(){const e=Te();return Re({mutationFn:HT,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}const XT=f.div`
  background-color: var(--color-grey-50);
  padding: 4rem 1rem;
  direction: rtl;
  min-width: 125rem;
`,ZT=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,JT=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem 1rem;
  width: 100%;
  margin-top: 4.2rem;
`,WT=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.4rem;
`,eD=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Nr=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,tD=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }
  tr:hover {
    background-color: var(--color-grey-200);
  }
`,jr=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,rD=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,nD=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Da=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Ra=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,wl=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,x0=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,Vl=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`,aD=f(Vl)`
  color: #000;
`,iD=f(Vl)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,oD=f(Vl)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,sD={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"};function lD(e,a,o,s,c,u){let h="";e==="canned-fava"?h="صيفاً - شتاءًا":e==="white-cheese"||e==="halawa"||e==="jam"?h="صيفاً - شتاءًا - رمضان":e==="tuna"||e==="juice"||e==="water"?h="وجبات جافة":h="";let p="";const g={jam:244,halawa:180,"white-cheese":50,tuna:48,juice:27,"canned-fava":24,water:12};g[e]!==void 0&&(p=g[e]);let y=es(Number(u))||0;e==="canned-fava"&&(y=y/2),e==="juice"&&(y=y*2),e==="water"&&(y=y*2);let b=c?es(Number(c)):0,x=y;return a===s?.date&&(b=0,x=0),{date:a,expiry_date:o?.expiry_date||s?.expiry_date||"",unit:o?.unit||s?.unit||"",ration_type:h,quantity:b,mission_meals:x,net_weight:p}}function cD(e){if(!e)return null;const a=new Date(e);return a.setDate(a.getDate()+1),a.toISOString().split("T")[0]}const es=(e,a=4)=>Number(Number(e).toFixed(a));function dD(){const{itemName:e}=us(),[a,o]=S.useState(!1),[s,c]=S.useState(null),{data:u,isPending:h}=Ya(),{data:p,isPending:g}=df(u?.id),{data:y,isPending:b}=GT(e),{data:x,isPending:j}=VT(e),{data:_,isPending:C}=hs("dry_incoming_items",e),{data:$,isPending4:D}=I1("dry_items_withdrawals",e),A=YT(),M=IT(),O=KT(),{register:z,handleSubmit:I,reset:R,setValue:F}=Ut();let ie=null;const K=e!=="tuna-officers"&&e!=="tuna-soldiers"&&e!=="tamr-biscuit"&&e!=="wafer-biscuit"&&e!=="mineral-water"&&e!=="marai-juice",ue=e!=="tuna"&&e!=="water"&&e!=="tuna-officers"&&e!=="tuna-soldiers"&&e!=="tamr-biscuit"&&e!=="wafer-biscuit"&&e!=="mineral-water"&&e!=="marai-juice",H=`${e.replace(/-/g,"_")}_total`,oe=p?Number(p[H]):0;K&&(ie=u?.dry_meals),S.useEffect(()=>{s&&(F("date",s.date),F("quantity",s.quantity),F("net_weight",s.net_weight),F("expiry_date",s.expiry_date||""),F("ration_type",s.ration_type||""),F("unit",s.unit||""),F("mission_meals",s.mission_meals||""),F("mission_type",s.mission_type||""))},[s,F]),S.useEffect(()=>{a&&!s&&R(lD(e,u?.date,_,$,oe,ie))},[a,s,e,_,R,oe,ie,u?.date,$]);const ce=s?Number(s.quantity||0)+Number(s.mission_meals||0):0,N=Number(x?.current_quantity??0)+ce;async function ne(k){const Z=k.mission_meals?Number(k.mission_meals):0,se=Number(k.quantity)+Z,de=cD(k.date);let J=0;!s&&de&&(J=(await lf("dry_incoming_items",e,de))?.reduce((Le,Ce)=>Ce.quantity+Ce.mission_meals+Le,0)||0);const ye={item_name:e,date:k.date,quantity:Number(k.quantity),stock_after:0,net_weight:Number(k.net_weight||0),expiry_date:k.expiry_date||null,ration_type:k.ration_type||null,unit:k.unit,mission_meals:Z,mission_type:k.mission_type||null};if(se<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");if(s){const ve=Number(x?.current_quantity??0)+ce;if(se>ve)return W.error("لايوجد رصيد كافي");M.mutate({id:s.id,payload:{...ye,item_name:e}},{onSuccess:()=>{R(),c(null),o(!1),W.success("تم تعديل الصرف بنجاح")}})}else{if(ye.stock_after=Number(x?.current_quantity??0)-se-Number(J||0),se>(x?.current_quantity??0)||ye.stock_after<0)return W.error("لايوجد رصيد كافي");A.mutate(ye,{onSuccess:()=>{R(),o(!1)}})}}function pe(k){c(k),o(!0)}function te(){s&&M.mutate({id:s.id,payload:{...s,quantity:0,mission_meals:0,item_name:e}},{onSuccess:()=>{O.mutate(s.id,{onSuccess:()=>{R(),c(null),o(!1),W.success("تم الحذف بنجاح")}})}})}return b||j||h||g||C||D?r.jsx(Ae,{}):r.jsxs(XT,{children:[r.jsxs(ZT,{children:["الصرف - ",sD[e]||e]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"1rem",marginBottom:"1.5rem"},children:[r.jsx(Vl,{onClick:()=>{a?(o(!1),c(null),R()):o(!0)},children:a?"✖️ إغلاق":"➕ إضافة / تأكيد صرف"}),r.jsx(aD,{$bg:"#f1ce08",children:`الرصيد الحالي : ${es(Number(N))} ${x?.unit??""}`})]}),a&&r.jsx(rD,{children:r.jsxs(nD,{onSubmit:I(ne),children:[r.jsxs(Da,{children:[r.jsx(Ra,{children:"التاريخ"}),r.jsx(wl,{disabled:s,type:"date",max:new Date().toISOString().split("T")[0],...z("date",{required:!0})})]}),ue&&r.jsxs(Da,{children:[r.jsx(Ra,{children:"الكمية المصروفة"}),r.jsx(wl,{type:"number",step:"any",...z("quantity",{required:!0})})]}),K&&r.jsxs(Da,{children:[r.jsx(Ra,{children:"الوزن الصافي"}),r.jsx(wl,{type:"number",step:"any",...z("net_weight")})]}),r.jsxs(Da,{children:[r.jsx(Ra,{children:"صلاحية الصنف"}),r.jsx(wl,{type:"date",...z("expiry_date")})]}),r.jsxs(Da,{children:[r.jsx(Ra,{children:"الوحدة"}),r.jsxs(x0,{...z("unit",{required:!0}),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"كيلوجرام",children:"بالكيلوجرام"}),r.jsx("option",{value:"مليجرام",children:"بالمليجرام"}),r.jsx("option",{value:"عدد",children:"بالعدد"}),r.jsx("option",{value:"لتر",children:"باللتر"}),r.jsx("option",{value:"قطعة",children:"بالقطعة"}),r.jsx("option",{value:"علبة",children:"بالعلبة"}),r.jsx("option",{value:"زجاجة",children:"بالزجاجة"}),r.jsx("option",{value:"فتلة",children:"بالفتلة"})]})]}),r.jsxs(Da,{children:[r.jsx(Ra,{children:"صرف (مأموريات)"}),r.jsx(wl,{type:"number",step:"any",...z("mission_meals")})]}),r.jsxs(Da,{children:[r.jsx(Ra,{children:"لزوم مأمورية"}),r.jsxs(x0,{...z("mission_type"),children:[r.jsx("option",{value:"",children:"اختر"}),r.jsx("option",{value:"انتشار",children:"انتشار"}),r.jsx("option",{value:"بئر العبد",children:"بئر العبد"}),r.jsx("option",{value:"وادي فيران",children:"وادي فيران"}),r.jsx("option",{value:"النزوح",children:"النزوح"}),r.jsx("option",{value:"شمال سيناء",children:"شمال سيناء"}),r.jsx("option",{value:"توصيل",children:"توصيل"}),r.jsx("option",{value:"أخرى",children:"أخرى"})]})]}),K&&r.jsxs(Da,{children:[r.jsx(Ra,{children:"مقرر الصنف"}),r.jsxs(x0,{...z("ration_type"),children:[r.jsx("option",{value:"",children:"اختر"}),r.jsx("option",{value:"صيفاً",children:"صيفاً"}),r.jsx("option",{value:"شتاءًا",children:"شتاءًا"}),r.jsx("option",{value:"رمضان",children:"رمضان"}),r.jsx("option",{value:"صيفاً - شتاءًا",children:"صيفاً - شتاءًا"}),r.jsx("option",{value:"صيفاً - شتاءًا - رمضان",children:"صيفاً - شتاءًا - رمضان"}),r.jsx("option",{value:"وجبات جافة",children:"وجبات جافة"})]})]}),r.jsxs("div",{style:{flexBasis:"100%",display:"flex",gap:"1rem"},children:[r.jsx(Vl,{type:"submit",disabled:A.isPending||M.isPending,children:s?M.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":A.isPending?"جارٍ الإضافة / التأكيد...":"✔️ إضافة / تأكيد"}),s&&r.jsx(oD,{type:"button",disabled:M.isPending,onClick:te,children:M.isPending?"جارٍ الحذف...":"حذف"})]})]})}),r.jsx(JT,{children:r.jsxs(WT,{children:[r.jsx(eD,{children:r.jsxs("tr",{children:[r.jsx(Nr,{children:"م"}),r.jsx(Nr,{children:"اليوم"}),r.jsx(Nr,{children:"التاريخ"}),ue&&r.jsx(Nr,{children:"الكمية المصروفة"}),r.jsx(Nr,{children:"صرف (مأموريات)"}),r.jsx(Nr,{children:"الرصيد بعد الصرف"}),K&&r.jsx(Nr,{children:"الوزن الصافي"}),r.jsx(Nr,{children:"الوحدة"}),r.jsx(Nr,{children:"صلاحية الصنف"}),K&&r.jsx(Nr,{children:"مقرر الصنف"}),r.jsx(Nr,{children:"لزوم مأمورية"}),r.jsx(Nr,{children:"إجراءات"})]})}),r.jsx(tD,{children:y?.length===0?r.jsx("tr",{children:r.jsx(jr,{colSpan:"12",children:"لا يوجد بيانات"})}):y?.map((k,Z)=>{const de=k.expiry_date?(new Date(k.expiry_date)-new Date)/864e5:null,J=de!==null&&de<=60;return r.jsxs("tr",{children:[r.jsx(jr,{children:1+Z}),r.jsx(jr,{children:new Date(k.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(jr,{children:k.date}),ue&&r.jsx(jr,{children:es(Number(k.quantity||0))}),r.jsx(jr,{children:k.mission_meals!=null?es(Number(k.mission_meals)):"—"}),r.jsx(jr,{children:es(Number(k.stock_after||0))}),K&&r.jsx(jr,{children:k.net_weight||"—"}),r.jsx(jr,{children:k.unit||"—"}),r.jsxs(jr,{style:{color:J?"red":"inherit",fontWeight:J?700:400},children:[k.expiry_date||"-"," ",J&&"🚨"]}),K&&r.jsx(jr,{children:k.ration_type??"—"}),r.jsx(jr,{children:k.mission_type??"—"}),r.jsx(jr,{children:r.jsx(iD,{onClick:()=>pe(k),children:"✏️"})})]},k.id)})})]})})]})}const uD=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
  direction: rtl;
`,Rx=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,fD=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,mD=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,hD=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,pD=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function gD(){const e=[{title:"الأصناف",path:"dry-items"},{title:"الأرصدة الحالية",path:"dry-stock"},{title:"الوارد",path:"dry-incoming"}];return r.jsxs(uD,{children:[r.jsxs("div",{children:[r.jsx(Rx,{style:{fontSize:"2.9rem",fontWeight:"900",margin:0},children:"مخزن ( أ )"}),r.jsx(Rx,{children:"الوجبات الجافة / أصناف الترفيه"})]}),r.jsx(fD,{children:e.map(a=>r.jsx(mD,{to:`/rations/stores/dry-meals/${a.path}`,children:r.jsx(hD,{children:r.jsx(pD,{children:a.title})})},a.path))})]})}async function yD(){const e=await fetch("/api/permit_number_dry?limit=1");if(!e.ok)throw new Error("فشل جلب البيانات");const a=await e.json();return Array.isArray(a)&&a.length?a[0]:null}async function bD(e){const a=await fetch("/api/permit_number_dry?limit=1");if(!a.ok)throw new Error("فشل الوصول إلى البيانات");const o=await a.json(),s=Array.isArray(o)&&o.length?o[0]:null,c={value:e,created_at:new Date().toISOString()};if(s&&s.id){const u=await fetch(`/api/permit_number_dry/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل التحديث");return await u.json()}else{const u=await fetch("/api/permit_number_dry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل إنشاء السجل");return await u.json()}}function xD(){return je({queryKey:["permit-number-dry"],queryFn:yD})}function vD(){const e=Te(),a=Re({mutationFn:bD,onSuccess:o=>{e.setQueryData(["permit-number-dry"],o)}});return{updateAsync:a.mutateAsync,isPending:a.isPending,isError:a.isError,error:a.error,isSuccess:a.isSuccess}}async function jD(){const e=await fetch("/api/permit_number_return?limit=1");if(!e.ok)throw new Error("فشل جلب البيانات");const a=await e.json();return Array.isArray(a)&&a.length?a[0]:null}async function wD(e){const a=await fetch("/api/permit_number_return?limit=1");if(!a.ok)throw new Error("فشل الوصول إلى البيانات");const o=await a.json(),s=Array.isArray(o)&&o.length?o[0]:null,c={value:e,created_at:new Date().toISOString()};if(s&&s.id){const u=await fetch(`/api/permit_number_return/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل التحديث");return await u.json()}else{const u=await fetch("/api/permit_number_return",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل إنشاء السجل");return await u.json()}}function _D(){return je({queryKey:["permit-number-return"],queryFn:jD})}function SD(){const e=Te(),a=Re({mutationFn:wD,onSuccess:o=>{e.setQueryData(["permit-number-return"],o)}});return{updateAsync:a.mutateAsync,isPending:a.isPending,isError:a.isError,error:a.error,isSuccess:a.isSuccess}}const kD=f.div`
  background-color: var(--color-grey-50);
  direction: rtl;
  min-width: 120rem;
  padding: 0rem 1rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,$D=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;

  @media print {
    box-shadow: none;
  }
`,CD=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.6rem;

  thead {
    background-color: var(--color-brand-600);
    color: white;

    @media print {
      color: black;
    }
  }
  tbody {
    tr:nth-child(even) {
      background-color: var(--color-grey-100);
    }
    tr:hover {
      background-color: var(--color-grey-200);
    }
  }
  td,
  th {
    padding: 1.2rem;
    border: 1px solid var(--color-grey-300);
  }
`,ED=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,TD=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Oo=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,DD=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    display: block;
  }
`,RD=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1.2rem;
  width: 40%;
  margin-right: auto;
  @media print {
    display: none;
  }
`,zx=f.form`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap;
`,zD=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,AD=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Ax=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  width: 100%;
`,_l=f.div`
  text-align: center;
  margin: 1rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;

  @media print {
    color: black;
  }
`,qD=f.div`
  text-align: center;
  margin: 4rem 2rem 8rem 2rem;

  font-size: 1.8rem;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  @media print {
    color: black;
  }
`,ND=f.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media print {
    color: black;
  }
`,OD=f.div`
  margin: 12px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  @media print {
    display: none;
  }
`,MD=f.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background: ${({$active:e})=>e?"var(--color-brand-700)":"#ddd"};
  color: ${({$active:e})=>e?"white":"black"};
`,BD=[{name_ar:"جبنة بيضاء",name_en:"white-cheese"},{name_ar:"مربى",name_en:"jam"},{name_ar:"حلاوة",name_en:"halawa"},{name_ar:"فول معلب",name_en:"canned-fava"},{name_ar:"تونة",name_en:"tuna"},{name_ar:"عصير",name_en:"juice"},{name_ar:"مياه",name_en:"water"}],UD=["white-cheese","jam","halawa","canned-fava","tuna","juice","water"],FD=(e,a=4)=>Number(Number(e).toFixed(a));function LD(){const[e,a]=S.useState(!1),[o,s]=S.useState(null),[c,u]=S.useState(!1),[h,p]=S.useState(""),{data:g,isPending:y}=Ya(),b=g?.date||null,x=o||b,{data:j,isPending:_}=k6(x),{data:C,isPending:$}=xD(),{updateAsync:D,isPending:A}=vD(),{register:M,setValue:O,getValues:z}=Ut(),R=(Array.isArray(j)?j:[])?.filter(X=>X?.mission_meals!==0&&UD.includes(X?.item_name))?.reduce((X,H)=>{const oe=H?.mission_type||"غير محدد";return(X[oe]||=[]).push(H),X},{});for(const X in R)R[X].sort((H,oe)=>new Date(H.created_at)-new Date(oe.created_at));const F={};for(const X in R)F[X]=R[X].reduce((H,oe)=>{const ce=oe.item_name;return H[ce]?H[ce].mission_meals+=Number(oe.mission_meals||0):H[ce]={...oe,mission_meals:Number(oe.mission_meals||0)},H},{});S.useEffect(()=>{const X=Object.keys(R);if(!X.length){p("");return}h&&X.includes(h)||p(X[X.length-1])},[R,h]);const ie=F[h]||{},K=x?new Date(x).toLocaleDateString("ar-EG"):"-";async function ue(X){X.preventDefault();const H=await D(z("value"));O("value",H?.value),a(!1)}return y||_||$?r.jsx(Ae,{}):r.jsxs(kD,{children:[r.jsx(DD,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsxs(_l,{children:[r.jsx("p",{children:"مخزن : وحدة التعيينات"}),r.jsx("p",{children:"مستديم"}),r.jsx("p",{}),r.jsx("p",{}),r.jsx("p",{children:"نموذج ( 2 ) مخازن حكومة"}),r.jsx("p",{})]}),r.jsxs(_l,{children:[r.jsxs("p",{children:[" تاريخ الطلب : ",K]}),r.jsxs("p",{children:["طلب إذن صرف مأمورية : ",h||""]}),r.jsx("p",{}),r.jsx("p",{})]}),r.jsxs(_l,{children:[r.jsx("p",{children:"اسم الطالب المخزن الإدارة"}),r.jsx("p",{children:"مستهلك"}),r.jsx("p",{}),r.jsxs(ND,{children:[r.jsx("span",{children:" رقم الإذن : "}),e?r.jsxs(zx,{onSubmit:ue,children:[r.jsx(Ax,{style:{width:"6rem",height:"3rem",textAlign:"center"},type:"number",defaultValue:C?.value,...M("value",{required:!0})}),r.jsx(Oo,{disabled:A,type:"submit",style:{padding:"0.5rem",marginBottom:"0"},children:r.jsx(nc,{})}),r.jsx(Oo,{disabled:A,style:{padding:"0.5rem",marginBottom:"0",background:"#777"},type:"button",onClick:()=>{a(!1),O("value",C?.value??"")},children:r.jsx(ac,{})})]}):!o&&r.jsxs(r.Fragment,{children:[r.jsx("span",{children:C?.value}),r.jsx(Oo,{disabled:A,style:{padding:"0.2rem 0.3rem",marginBottom:"0"},onClick:()=>a(X=>!X),children:r.jsx(ic,{})})]})]}),r.jsx("p",{})]}),r.jsx(_l,{children:r.jsx("p",{style:{fontSize:"3rem",margin:"auto",marginTop:"4rem"},children:"جاف"})}),r.jsxs(_l,{children:[r.jsx(OD,{children:Object.keys(R).map(X=>r.jsx(MD,{$active:h===X,onClick:()=>p(X),children:X},X))}),r.jsx(Oo,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>u(X=>!X),children:c?"✖️ إغلاق":"عرض إذن سابق"})]}),c&&r.jsx(RD,{children:r.jsxs(zx,{onSubmit:X=>{X.preventDefault(),s(X.target.date.value||null),u(!1)},children:[r.jsxs(zD,{children:[r.jsx(AD,{children:"اختر تاريخ"}),r.jsx(Ax,{name:"date",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:12,width:"100%"},children:[r.jsx(Oo,{type:"submit",children:"عرض"}),r.jsx(Oo,{type:"button",$bg:"#777",onClick:()=>u(!1),children:"إلغاء"})]})]})}),r.jsx($D,{children:r.jsxs(CD,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"رقم الصنف"}),r.jsx("th",{children:"اسم الصنف"}),r.jsx("th",{children:"الوحدة"}),r.jsx("th",{children:"الكمية المطلوبة"}),r.jsx("th",{children:"الكمية المصرح بها"}),r.jsx("th",{children:"الكمية المنصرفة"}),r.jsx("th",{children:"حالة الصنف"}),r.jsx("th",{children:"سعر الوحدة"}),r.jsx("th",{style:{width:"8%"},children:"القيمة"}),r.jsx("th",{style:{width:"16%"},children:"ملاحظات"})]})}),r.jsx("tbody",{children:BD?.map((X,H)=>{const oe=ie[X.name_en],ce=FD(Number(oe?.mission_meals))||"-";return r.jsxs("tr",{children:[r.jsx("td",{children:H+1}),r.jsx("td",{children:X.name_ar}),r.jsx("td",{children:oe?.unit||"-"}),r.jsx("td",{children:ce}),r.jsx("td",{children:ce}),r.jsx("td",{children:ce}),r.jsx("td",{children:"جيدة"}),r.jsx("td",{}),r.jsx("td",{}),r.jsx("td",{})]},X.name_en)})})]})}),r.jsxs(qD,{children:[r.jsx("p",{children:"توقيع الطالب"}),r.jsxs("p",{children:["يصرح بالصرف",r.jsx("br",{}),"مدير المخازن"]}),r.jsxs("p",{children:["تم الصرف",r.jsx("br",{}),"أمين المخزن"]}),r.jsx("p",{children:"كاتب الشطب"}),r.jsx("p",{children:"توقيع المستلم"}),r.jsx("p",{})]}),r.jsxs("div",{style:{borderTop:"1px solid #333",padding:12,marginLeft:"5rem"},children:[r.jsx("p",{children:"(*) كشف العجز سند خصم أصناف فاقدة أو تالفة - محضر بيع - طلب تشغيل - اهداء ليست النشاط للجهة"}),r.jsx("p",{children:"(*) جديدة - مستعمل - قابل للإصلاح - كهنة أو خردة"})]}),r.jsx(ED,{children:r.jsx(TD,{onClick:()=>window.print(),children:"🖨️ طباعة / PDF"})})]})}const PD={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},v0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,qx=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,j0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,HD=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,QD=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Mo=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,Bo=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,GD=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,VD=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,YD=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,ID=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,KD=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,w0=(e,a=4)=>Number(Number(e).toFixed(a));function XD(){const[e]=nr(),a=e.get("from"),o=e.get("to"),{data:s,isPending:c,error:u}=je({queryKey:["dry-range-report",a,o],queryFn:()=>jE(a,o),enabled:!!a&&!!o}),h={};s&&s.forEach(b=>{const x=`${b.item_name}||${b.unit||""}`,j=Number(b.quantity)||0,_=Number(b.mission_meals)||0;h[x]||(h[x]={item_name:b.item_name,unit:b.unit||"",quantity:0,mission_meals:0}),h[x].quantity+=j,h[x].mission_meals+=_});const p=[];if(Object.entries(PD).forEach(([b,x])=>{const j=Object.values(h).filter(_=>_.item_name===b);j.length===0?p.push({item_key:b,item_label:x,quantity:0,mission_meals:0,unit:""}):j.forEach(_=>{p.push({item_key:b,item_label:x,quantity:_.quantity,mission_meals:_.mission_meals,unit:_.unit})})}),!a||!o)return r.jsxs(v0,{children:[r.jsx(qx,{children:r.jsx(j0,{children:"تقرير شهري"})}),r.jsx(j0,{children:"يجب تمرير تاريخ البداية والنهاية من صفحة الأصناف."})]});if(c)return r.jsx(Ae,{});if(u)return r.jsxs(v0,{children:["حدث خطأ: ",u.message]});const g=new Date(a).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(v0,{children:[r.jsx(YD,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(qx,{children:r.jsxs(j0,{children:["تقرير شهري للصرف للأصناف الجافة من ",g," إلى ",y]})}),r.jsx(HD,{children:r.jsxs(QD,{children:[r.jsx(ID,{children:r.jsxs("tr",{children:[r.jsx(Mo,{children:"م"}),r.jsx(Mo,{children:"اسم الصنف"}),r.jsx(Mo,{children:"الكمية المصروفة"}),r.jsx(Mo,{children:"الوجبات الجافة (مأموريات)"}),r.jsx(Mo,{children:"إجمالي المصروف"}),r.jsx(Mo,{children:"الوحدة"})]})}),r.jsx(KD,{children:p.map((b,x)=>r.jsxs("tr",{children:[r.jsx(Bo,{children:x+1}),r.jsx(Bo,{children:b.item_label}),r.jsx(Bo,{children:w0(Number(b.quantity))??0}),r.jsx(Bo,{children:w0(Number(b.mission_meals))||"-"}),r.jsx(Bo,{children:w0(Number(b.quantity+b.mission_meals))??0}),r.jsx(Bo,{children:b.unit||"-"})]},`${b.item_key}-${b.unit||"no-unit"}-${x}`))})]})}),r.jsx(GD,{children:r.jsx(VD,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const _0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,ZD=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,Nx=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,JD=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,WD=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,za=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,Ct=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }
`,eR=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,tR=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,rR=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,nR=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,aR=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,iR={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},Aa=(e,a=4)=>Number(Number(e).toFixed(a));function oR(){const[e]=nr(),a=e.get("item"),o=e.get("from"),s=e.get("to"),{data:c,isPending:u,error:h}=je({queryKey:["dry-item-range",a,o,s],queryFn:()=>SE(a,o,s),enabled:!!a&&!!o&&!!s});if(!a||!o||!s)return r.jsx(_0,{children:r.jsx(Nx,{children:"يرجى اختيار الصنف والفترة أولاً"})});if(u)return r.jsx(Ae,{});if(h)return r.jsxs(_0,{children:["حدث خطأ: ",h.message]});const p=c?.reduce((C,$)=>C+(Number($.quantity)+Number($.mission_meals)||0),0),g=c?.reduce((C,$)=>C+(Number($.quantity)||0),0),y=c?.reduce((C,$)=>C+(Number($.mission_meals)||0),0),b=c[0]?.unit||"-",x=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),j=new Date(s).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),_=a!=="tuna-officers"&&a!=="tuna-soldiers"&&a!=="tamr-biscuit"&&a!=="wafer-biscuit"&&a!=="mineral-water"&&a!=="marai-juice";return r.jsxs(_0,{children:[r.jsx(aR,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(ZD,{children:r.jsxs(Nx,{children:["تقرير صرف - ",iR[a]||a,"- أصناف جافة من ",x," إلى"," ",j]})}),r.jsx(JD,{children:r.jsxs(WD,{children:[r.jsx(eR,{children:r.jsxs("tr",{children:[r.jsx(za,{children:"م"}),r.jsx(za,{children:"اليوم"}),r.jsx(za,{children:"التاريخ"}),r.jsx(za,{children:"الرصيد قبل الصرف"}),_&&r.jsx(za,{children:"الكمية المصروفة"}),r.jsx(za,{children:"الوجبات الجافة(مأموريات)"}),r.jsx(za,{children:"الرصيد بعد الصرف"}),r.jsx(za,{children:"الوحدة"})]})}),r.jsxs(tR,{children:[c?.map((C,$)=>r.jsxs("tr",{children:[r.jsx(Ct,{children:$+1}),r.jsx(Ct,{children:Intl.DateTimeFormat("ar-EG",{weekday:"long"}).format(new Date(C.date+"T00:00:00"))}),r.jsx(Ct,{children:C.date}),r.jsx(Ct,{children:Aa(Number(C.quantity+C.stock_after+C.mission_meals))}),_&&r.jsx(Ct,{children:Aa(Number(C.quantity))}),r.jsx(Ct,{children:Aa(Number(C.mission_meals))||"-"}),r.jsx(Ct,{children:Aa(Number(C.stock_after))}),r.jsx(Ct,{children:C.unit||"-"})]},$)),_?r.jsxs("tr",{style:{borderTop:"2px solid #888"},children:[r.jsx(Ct,{colSpan:3,rowSpan:2,style:{fontWeight:"bold",borderLeft:"2px solid #888"},children:"الإجمالي"}),r.jsx(Ct,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"}),r.jsx(Ct,{colSpan:1,style:{fontWeight:"bold"},children:Aa(Number(g))}),r.jsx(Ct,{colSpan:1,style:{fontWeight:"bold"},children:Aa(Number(y))}),r.jsx(Ct,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"}),r.jsx(Ct,{colSpan:2,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:b})]}):r.jsxs("tr",{style:{borderTop:"2px solid #888"},children:[r.jsx(Ct,{colSpan:3,style:{fontWeight:"bold",borderLeft:"2px solid #888"},children:"الإجمالي"}),r.jsx(Ct,{colSpan:3,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:Aa(Number(y))}),r.jsx(Ct,{colSpan:2,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:b})]}),_&&r.jsxs("tr",{children:[r.jsx(Ct,{colSpan:4,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:Aa(Number(p))}),r.jsx(Ct,{colSpan:2,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:b})]})]})]})}),r.jsx(rR,{children:r.jsx(nR,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const sR={"white-cheese":"جبنة بيضاء",jam:"مربى",halawa:"حلاوة","canned-fava":"فول معلب",tuna:"تونة",juice:"عصير",water:"مياه","tuna-officers":"تونة قطع ضباط","tuna-soldiers":"تونة قطع مجندين","tamr-biscuit":"بسكوت بالتمر","wafer-biscuit":"بسكوت ويفر","mineral-water":"مياه معدنية","marai-juice":"عصير مراعي"},lR=f.div`
  background-color: var(--color-grey-50);
  padding: 4rem 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    background-color: white;
    color: black;
  }
`,cR=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    color: black;
  }
`,dR=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,uR=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,fR=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,Qd=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,mR=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,Gd=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,hR=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,pR=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,gR=f.p`
  display: none;
  font-size: 2.2rem;
  text-align: center;
  color: black;
  margin-bottom: 2rem;

  @media print {
    display: block;
  }
`,yR=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,bR=(e,a=4)=>Number(Number(e).toFixed(a));function xR(){const{data:e,isPending:a}=je({queryKey:["dry_current_stock"],queryFn:d6}),o={};e?.forEach(c=>{o[c.item_name]=c});const s=new Date().toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit"});return a?r.jsx(Ae,{}):r.jsxs(lR,{children:[r.jsx(yR,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(cR,{children:"الأرصدة الحالية للأصناف الجافة"}),r.jsxs(gR,{children:["التاريخ : ",s]}),r.jsx(dR,{children:r.jsxs(uR,{children:[r.jsx(fR,{children:r.jsxs("tr",{children:[r.jsx(Qd,{children:"م"}),r.jsx(Qd,{children:"اسم الصنف"}),r.jsx(Qd,{children:"الرصيد الحالي"}),r.jsx(Qd,{children:"الوحدة"})]})}),r.jsx(mR,{children:Object.entries(sR).map(([c,u],h)=>{const p=o[c];return r.jsxs("tr",{children:[r.jsx(Gd,{children:h+1}),r.jsx(Gd,{children:u}),r.jsx(Gd,{children:p?`${bR(Number(p.current_quantity))}`:"—"}),r.jsx(Gd,{children:p?`${p.unit||""}`:"—"})]},c)})})]})}),r.jsx(hR,{children:r.jsx(pR,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const vR=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;

  min-width: 115rem;
  @media print {
    min-width: auto !important;
  }
`,jR=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,wR=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
`,_R=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,SR=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Pn=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,dn=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`;function Ox(e){if(!e)return"—";const a=new Date(e),o=String(a.getDate()).padStart(2,"0"),s=String(a.getMonth()+1).padStart(2,"0"),c=a.getFullYear();return`${o}/${s}/${c}`}function kR(){const{data:e,isPending:a,isError:o,error:s}=O_();if(a)return r.jsx(Ae,{});if(o)return console.error(s),r.jsx("p",{style:{textAlign:"center"},children:"حدث خطأ أثناء تحميل البيانات"});const c=e?.filter(u=>u.branch!=="مجندين المخبز");return r.jsxs(vR,{children:[r.jsx(jR,{children:"القوة"}),r.jsx(wR,{children:r.jsxs(_R,{children:[r.jsx(SR,{children:r.jsxs("tr",{children:[r.jsx(Pn,{children:"م"}),r.jsx(Pn,{children:"الاسم"}),r.jsx(Pn,{children:"رقم الشرطة"}),r.jsx(Pn,{children:"العنوان"}),r.jsx(Pn,{children:"المؤهل"}),r.jsx(Pn,{children:"الفرع"}),r.jsx(Pn,{children:"تاريخ الدفعة"}),r.jsx(Pn,{children:"تاريخ الرديف"}),r.jsx(Pn,{children:"الصورة"})]})}),r.jsx("tbody",{children:c.length===0?r.jsx("tr",{children:r.jsx(dn,{colSpan:"9",children:"لا يوجد بيانات"})}):c.map((u,h)=>{const y=(new Date(u.reserve_date)-new Date)/(1e3*60*60*24)<=60;return r.jsxs("tr",{children:[r.jsx(dn,{children:h+1}),r.jsx(dn,{children:u.name}),r.jsx(dn,{children:u.police_number}),r.jsx(dn,{children:u.address}),r.jsx(dn,{children:u.qualification}),r.jsx(dn,{children:u.branch}),r.jsx(dn,{children:Ox(u.batch_date)}),r.jsxs(dn,{style:{color:y?"red":"inherit",fontWeight:y?"700":"400"},children:[Ox(u.reserve_date)," ",y&&r.jsx("span",{children:"🚨"})]}),r.jsx(dn,{children:u.image_url?r.jsx("img",{src:u.image_url,alt:u.name,width:"50",height:"50",style:{borderRadius:"8px"}}):"—"})]},u.id)})})]})})]})}const $R=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,CR=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,ER=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  direction: rtl;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,TR=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,DR=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,RR=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function zR(){const e=[{title:"القوة",path:"force"},{title:"الفرعيات",path:"branches"}];return r.jsxs($R,{children:[r.jsx(CR,{children:"القوة والتوزيع"}),r.jsx(ER,{children:e.map(a=>r.jsx(TR,{to:`/rations/workforce/soldiers/distribution/${a.path}`,children:r.jsx(DR,{children:r.jsx(RR,{children:a.title})})},a.path))})]})}function AR(e){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"},child:[]}]})(e)}function $6(e){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"},child:[]},{tag:"path",attr:{d:"M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"},child:[]}]})(e)}function C6(e){return qe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M120 0l80 0c13.3 0 24 10.7 24 24l0 40L96 64l0-40c0-13.3 10.7-24 24-24zM32 167.5c0-19.5 10-37.6 26.6-47.9l15.8-9.9C88.7 100.7 105.2 96 122.1 96l75.8 0c16.9 0 33.4 4.7 47.7 13.7l15.8 9.9C278 129.9 288 148 288 167.5c0 17-7.5 32.3-19.4 42.6C280.6 221.7 288 238 288 256c0 19.1-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48s-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64c0-19.1 8.4-36.3 21.7-48C40.4 388.3 32 371.1 32 352s8.4-36.3 21.7-48C40.4 292.3 32 275.1 32 256c0-18 7.4-34.3 19.4-45.9C39.5 199.7 32 184.5 32 167.5zM96 240c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z"},child:[]}]})(e)}function E6(e){return qe({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"},child:[]}]})(e)}function T6(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0L486.5 231c6.2-6.2 6.2-16.4 0-22.6L475.2 197c-5.2-5.2-10.6-9.8-16.4-13.9L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3z"},child:[]}]})(e)}function D6(e){return qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"},child:[]},{tag:"path",attr:{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"},child:[]}]})(e)}function R6(e){return qe({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,116H32a4,4,0,0,0-4,4,100.32,100.32,0,0,0,56,89.82V216a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12v-6.18A100.32,100.32,0,0,0,228,120,4,4,0,0,0,224,116Zm-57.67,87.66A4,4,0,0,0,164,207.3V216a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4v-8.7a4,4,0,0,0-2.33-3.64A92.31,92.31,0,0,1,36.09,124H219.91A92.31,92.31,0,0,1,166.33,203.66ZM164.88,57.5c5.56-6.92,8-12.89,6.83-16.81-1-3.54-4.9-4.87-4.94-4.88a4,4,0,0,1,2.42-7.63c.32.1,7.84,2.52,10.16,10.11,2.05,6.72-.72,14.87-8.23,24.22-5.56,6.91-8,12.88-6.83,16.8,1,3.54,4.9,4.87,4.94,4.88A4,4,0,0,1,168,92a4.09,4.09,0,0,1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11C154.6,75,157.37,66.84,164.88,57.5Zm-40,0c5.56-6.92,8-12.89,6.83-16.81-1-3.54-4.9-4.87-4.94-4.88a4,4,0,0,1,2.42-7.63c.32.1,7.84,2.52,10.16,10.11,2.05,6.72-.72,14.87-8.23,24.22-5.56,6.91-8,12.88-6.83,16.8,1,3.54,4.9,4.87,4.94,4.88A4,4,0,0,1,128,92a4.09,4.09,0,0,1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11C114.6,75,117.37,66.84,124.88,57.5Zm-40,0c5.56-6.92,8-12.89,6.83-16.81-1-3.54-4.9-4.87-4.94-4.88a4,4,0,0,1,2.42-7.63c.32.1,7.84,2.52,10.16,10.11,2.05,6.72-.72,14.87-8.23,24.22-5.56,6.91-8,12.88-6.83,16.8,1,3.54,4.9,4.87,4.94,4.88A4,4,0,0,1,88,92a4.09,4.09,0,0,1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11C74.6,75,77.37,66.84,84.88,57.5Z"},child:[]}]})(e)}const qR=f.div`
  padding: 3rem 4rem;
  direction: rtl;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,NR=f.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin-bottom: 3rem;
`,Mx=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  justify-items: center;

  & > div:nth-child(13) {
    grid-column: 2 / 3;
  }
  & > div:nth-child(14) {
    grid-column: 3 / 4;
  }

  @media (max-width: 72rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    & > div {
      grid-column: span 2;
    }
    & > div:nth-child(13) {
      grid-column: 2 / 4;
    }
    & > div:nth-child(14) {
      grid-column: 4 / 6;
    }
  }
`,Bx=f.div`
  background-color: ${({color:e})=>e||"var(--color-grey-0)"};
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: var(--color-grey-100);
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 40px;
    height: 40px;
  }
`,OR=f.div`
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  color: var(--color-brand-700);
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
`,MR=f.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`,Ux=f.div`
  background: var(--color-grey-0);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  width: fit-content;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: auto;
`,Fx=f.div`
  background-color: var(--color-brand-700);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`,Lx=f.div`
  max-height: ${({open:e})=>e?"300px":"0"};
  opacity: ${({open:e})=>e?1:0};
  padding: ${({open:e})=>e?"1.6rem":"0 1.6rem"};
  border-top: ${({open:e})=>e?"1px solid var(--color-grey-200)":"none"};
  overflow: hidden;
  transition: all 0.35s ease;
`,Vd=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`,Sl=f.label`
  font-size: 1.3rem;
  color: var(--color-grey-700);
`,Yd=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-300);
  font-size: 1.2rem;
`,Px=f.button`
  margin: auto;
  margin-top: 3.2rem;
  width: 70%;
  background: var(--color-brand-600);
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,S0=[{name_ar:"أرز بلدي",name_en:"rice",icon:S6,color:"#7B3F00"},{name_ar:"مكرونة",name_en:"macaroni",icon:T6,color:"#D2691E"},{name_ar:"صلصة",name_en:"tomato-sauce",icon:w6,color:"#C62828"},{name_ar:"شعرية",name_en:"noodles",icon:v6,color:"#D7A86E"},{name_ar:"زيت",name_en:"cooking-oil",icon:C6,color:"#FBC02D"},{name_ar:"فاصوليا",name_en:"white-beans",icon:D6,color:"#388E3C"},{name_ar:"فول صحيح",name_en:"fava",icon:$6,color:"#6D4C41"},{name_ar:"ملح",name_en:"salt",icon:j6,color:"#90A4AE"},{name_ar:"سكر",name_en:"sugar",icon:_6,color:"#bdbdbd"},{name_ar:"شاي",name_en:"tea",icon:R6,color:"#5D4037"},{name_ar:"فلفل أسود",name_en:"black-pepper",icon:i6,color:"#666"},{name_ar:"كمون",name_en:"cumin",icon:s6,color:"#8D6E63"},{name_ar:"عدس",name_en:"lentils",icon:h6,color:"#C17F59"},{name_ar:"زبادي",name_en:"zabady",icon:o6,color:"#abb04a"},{name_ar:"بيض",name_en:"eggs",icon:E6,color:"#E6B325"},{name_ar:"ثوم بودرة",name_en:"garlic-powder",icon:b6,color:"#E0C097"},{name_ar:"بهارات",name_en:"spices",icon:g6,color:"#9C6644"}];function BR(){const e=ur(),[a,o]=S.useState(""),[s,c]=S.useState(""),[u,h]=S.useState(!1),[p,g]=S.useState({item:"",from:"",to:""}),y=j=>h(u===j?null:j),b=S0.slice(0,14),x=S0.slice(14);return r.jsxs(qR,{children:[r.jsx(NR,{children:"الأصناف الواردة - الوجبات الطازجة"}),r.jsx(Mx,{children:b.map(({name_ar:j,name_en:_,icon:C,color:$})=>r.jsxs(Bx,{color:$,onClick:()=>e(`/rations/stores/fresh-meals/fresh-incoming/${_}`),children:[r.jsx(C,{}),r.jsx("span",{children:j})]},_))}),r.jsx(OR,{children:"—————— أصناف صندوق التحسين ——————"}),r.jsx(Mx,{children:x.map(({name_ar:j,name_en:_,icon:C,color:$})=>r.jsxs(Bx,{color:$,onClick:()=>e(`/rations/stores/fresh-meals/fresh-incoming/${_}`),children:[r.jsx(C,{}),r.jsx("span",{children:j})]},_))}),r.jsxs(MR,{children:[r.jsxs(Ux,{children:[r.jsx(Fx,{onClick:()=>y("single-range"),children:"تقرير شهري لكل صنف"}),r.jsxs(Lx,{open:u==="single-range",children:[r.jsxs(Vd,{children:[r.jsx(Sl,{children:"اختر الصنف"}),r.jsxs("select",{value:p.item||"",onChange:j=>g({...p,item:j.target.value}),style:{padding:"0.6rem 0.8rem",borderRadius:"6px",border:"1px solid var(--color-grey-300)",fontSize:"1.2rem",backgroundColor:"var(--color-grey-0)"},children:[r.jsx("option",{value:"",children:"-- اختر --"}),S0.map(j=>r.jsx("option",{value:j.name_en,children:j.name_ar},j.name_en))]}),r.jsx(Sl,{children:"من"}),r.jsx(Yd,{type:"date",value:p.from||"",onChange:j=>g({...p,from:j.target.value})}),r.jsx(Sl,{children:"إلى"}),r.jsx(Yd,{type:"date",value:p.to||"",onChange:j=>g({...p,to:j.target.value})})]}),r.jsx(Vd,{children:r.jsx(Px,{disabled:!p.item||!p.from||!p.to||p.from>p.to,onClick:()=>e(`/rations/stores/fresh-meals/fresh-incoming/reports/range-single?item=${encodeURIComponent(p.item)}&from=${encodeURIComponent(p.from)}&to=${encodeURIComponent(p.to)}`),children:"عرض التقرير"})})]})]}),r.jsxs(Ux,{children:[r.jsx(Fx,{onClick:()=>y("range"),children:"تقرير شهري لجميع الأصناف الواردة"}),r.jsxs(Lx,{open:u==="range",children:[r.jsxs(Vd,{children:[r.jsx(Sl,{children:"من"}),r.jsx(Yd,{type:"date",value:a,onChange:j=>o(j.target.value)}),r.jsx(Sl,{children:"إلى"}),r.jsx(Yd,{type:"date",value:s,onChange:j=>c(j.target.value)})]}),r.jsx(Vd,{children:r.jsx(Px,{disabled:!a||!s||a>s,onClick:()=>e(`/rations/stores/fresh-meals/fresh-incoming/reports/range?from=${encodeURIComponent(a)}&to=${encodeURIComponent(s)}`),children:"عرض التقرير"})})]})]})]})]})}const k0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,UR=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,Hx=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,FR=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,LR=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,ji=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,Vr=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,PR=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,HR=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,QR=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,GR=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,VR=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,YR={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},Qx=(e,a=4)=>Number(Number(e).toFixed(a));function IR(){const[e]=nr(),a=e.get("item"),o=e.get("from"),s=e.get("to"),{data:c,isPending:u,error:h}=je({queryKey:["fresh-item-range-single",a,o,s],queryFn:()=>iC(a,o,s),enabled:!!a&&!!o&&!!s});if(!a||!o||!s)return r.jsx(k0,{children:r.jsx(Hx,{children:"يرجى اختيار الصنف والفترة أولاً"})});if(u)return r.jsx(Ae,{});if(h)return r.jsxs(k0,{children:["حدث خطأ: ",h.message]});const p=c?.reduce((x,j)=>x+(Number(j.quantity)||0),0),g=c[0]?.unit||"-",y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),b=new Date(s).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(k0,{children:[r.jsx(VR,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(UR,{children:r.jsxs(Hx,{children:["تقرير وارد - ",YR[a]||a,"- أصناف طازجة من ",y," إلى"," ",b]})}),r.jsx(FR,{children:r.jsxs(LR,{children:[r.jsx(PR,{children:r.jsxs("tr",{children:[r.jsx(ji,{children:"م"}),r.jsx(ji,{children:"اليوم"}),r.jsx(ji,{children:"التاريخ"}),r.jsx(ji,{children:"اسم المستلم"}),r.jsx(ji,{children:"الكمية الواردة"}),r.jsx(ji,{children:"الوحدة"}),r.jsx(ji,{children:"رقم الإذن"})]})}),r.jsxs(HR,{children:[c?.map((x,j)=>r.jsxs("tr",{children:[r.jsx(Vr,{children:j+1}),r.jsx(Vr,{children:Intl.DateTimeFormat("ar-EG",{weekday:"long"}).format(new Date(x.date+"T00:00:00"))}),r.jsx(Vr,{children:x.date}),r.jsx(Vr,{children:x.receiver_name}),r.jsx(Vr,{children:Qx(Number(x.quantity))}),r.jsx(Vr,{children:x.unit||"-"}),r.jsx(Vr,{children:x.permit_number||"-"})]},j)),r.jsxs("tr",{children:[r.jsx(Vr,{colSpan:4,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"الإجمالي"}),r.jsx(Vr,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:Qx(Number(p))}),r.jsx(Vr,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:g}),r.jsx(Vr,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"})]})]})]})}),r.jsx(QR,{children:r.jsx(GR,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const KR=f.div`
  padding: 3rem 4rem;
  direction: rtl;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,XR=f.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin-bottom: 3rem;
`,Gx=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  justify-items: center;

  & > div:nth-child(13) {
    grid-column: 2 / 3;
  }
  & > div:nth-child(14) {
    grid-column: 3 / 4;
  }

  @media (max-width: 72rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    & > div {
      grid-column: span 2;
    }
    & > div:nth-child(13) {
      grid-column: 2 / 4;
    }
    & > div:nth-child(14) {
      grid-column: 4 / 6;
    }
  }
`,ZR=f.div`
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  color: var(--color-brand-700);
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
`,Vx=f.div`
  background-color: ${({color:e})=>e||"var(--color-grey-0)"};
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: var(--color-grey-100);
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 5rem;
    height: 5rem;
  }
`,JR=f.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem;
`,$0=f.div`
  background: var(--color-grey-0);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  min-width: 40rem;
  overflow: hidden;
  transition: all 0.3s ease;
`,C0=f.div`
  background-color: var(--color-brand-700);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`,E0=f.div`
  max-height: ${({open:e})=>e?"300px":"0"};
  opacity: ${({open:e})=>e?1:0};
  padding: ${({open:e})=>e?"1.6rem":"0 1.6rem"};
  border-top: ${({open:e})=>e?"1px solid var(--color-grey-200)":"none"};
  overflow: hidden;
  transition: all 0.35s ease;
`,Uo=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  flex-wrap: wrap;
`,Fo=f.label`
  font-size: 1.3rem;
  color: var(--color-grey-700);
`,kl=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-300);
  font-size: 1.2rem;
`,T0=f.button`
  margin: auto;
  margin-top: 3.2rem;
  width: 70%;
  background: var(--color-brand-600);
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,D0=[{name_ar:"أرز بلدي",name_en:"rice",icon:S6,color:"#7B3F00"},{name_ar:"مكرونة",name_en:"macaroni",icon:T6,color:"#D2691E"},{name_ar:"صلصة",name_en:"tomato-sauce",icon:w6,color:"#C62828"},{name_ar:"شعرية",name_en:"noodles",icon:v6,color:"#D7A86E"},{name_ar:"زيت",name_en:"cooking-oil",icon:C6,color:"#FBC02D"},{name_ar:"فاصوليا",name_en:"white-beans",icon:D6,color:"#388E3C"},{name_ar:"فول صحيح",name_en:"fava",icon:$6,color:"#6D4C41"},{name_ar:"ملح",name_en:"salt",icon:j6,color:"#90A4AE"},{name_ar:"سكر",name_en:"sugar",icon:_6,color:"#bdbdbd"},{name_ar:"شاي",name_en:"tea",icon:R6,color:"#5D4037"},{name_ar:"فلفل أسود",name_en:"black-pepper",icon:i6,color:"#666"},{name_ar:"كمون",name_en:"cumin",icon:s6,color:"#8D6E63"},{name_ar:"عدس",name_en:"lentils",icon:h6,color:"#C17F59"},{name_ar:"زبادي",name_en:"zabady",icon:o6,color:"#abb04a"},{name_ar:"بيض",name_en:"eggs",icon:E6,color:"#E6B325"},{name_ar:"ثوم بودرة",name_en:"garlic-powder",icon:b6,color:"#E0C097"},{name_ar:"بهارات",name_en:"spices",icon:g6,color:"#9C6644"}];function WR(){const e=ur(),[a,o]=S.useState(""),[s,c]=S.useState(""),[u,h]=S.useState(""),[p,g]=S.useState(null),[y,b]=S.useState({item:"",from:"",to:""}),x=C=>g(p===C?null:C),j=D0.slice(0,14),_=D0.slice(14);return r.jsxs(KR,{children:[r.jsx(XR,{children:"أصناف الصرف - الوجبات الطازجة"}),r.jsx(Gx,{children:j.map(({name_ar:C,name_en:$,icon:D,color:A})=>r.jsxs(Vx,{color:A,onClick:()=>e(`/rations/stores/fresh-meals/fresh-items/${$}`),children:[r.jsx(D,{}),r.jsx("span",{children:C})]},$))}),r.jsx(ZR,{children:"—————— أصناف صندوق التحسين ——————"}),r.jsx(Gx,{children:_.map(({name_ar:C,name_en:$,icon:D,color:A})=>r.jsxs(Vx,{color:A,onClick:()=>e(`/rations/stores/fresh-meals/fresh-items/${$}`),children:[r.jsx(D,{}),r.jsx("span",{children:C})]},$))}),r.jsxs(JR,{children:[r.jsxs($0,{children:[r.jsx(C0,{onClick:()=>x("daily"),children:"تقرير يومي لجميع الأصناف"}),r.jsxs(E0,{open:p==="daily",children:[r.jsxs(Uo,{children:[r.jsx(Fo,{children:"اختر التاريخ"}),r.jsx(kl,{type:"date",value:a,onChange:C=>o(C.target.value)})]}),r.jsx(Uo,{children:r.jsx(T0,{disabled:!a,onClick:()=>e(`/rations/stores/fresh-meals/reports/daily?date=${encodeURIComponent(a)}`),children:"عرض التقرير"})})]})]}),r.jsxs($0,{children:[r.jsx(C0,{onClick:()=>x("range"),children:"تقرير شهري لجميع الأصناف"}),r.jsxs(E0,{open:p==="range",children:[r.jsxs(Uo,{children:[r.jsx(Fo,{children:"من"}),r.jsx(kl,{type:"date",value:s,onChange:C=>c(C.target.value)}),r.jsx(Fo,{children:"إلى"}),r.jsx(kl,{type:"date",value:u,onChange:C=>h(C.target.value)})]}),r.jsx(Uo,{children:r.jsx(T0,{disabled:!s||!u||s>u,onClick:()=>e(`/rations/stores/fresh-meals/reports/range?from=${encodeURIComponent(s)}&to=${encodeURIComponent(u)}`),children:"عرض التقرير"})})]})]}),r.jsxs($0,{children:[r.jsx(C0,{onClick:()=>x("single-range"),children:"تقرير شهري لكل صنف"}),r.jsxs(E0,{open:p==="single-range",children:[r.jsxs(Uo,{children:[r.jsx(Fo,{children:"اختر الصنف"}),r.jsxs("select",{value:y.item||"",onChange:C=>b({...y,item:C.target.value}),style:{padding:"0.6rem 0.8rem",borderRadius:"6px",border:"1px solid var(--color-grey-300)",fontSize:"1.2rem",backgroundColor:"var(--color-grey-0)"},children:[r.jsx("option",{value:"",children:"-- اختر --"}),D0.map(C=>r.jsx("option",{value:C.name_en,children:C.name_ar},C.name_en))]}),r.jsx(Fo,{children:"من"}),r.jsx(kl,{type:"date",value:y.from||"",onChange:C=>b({...y,from:C.target.value})}),r.jsx(Fo,{children:"إلى"}),r.jsx(kl,{type:"date",value:y.to||"",onChange:C=>b({...y,to:C.target.value})})]}),r.jsx(Uo,{children:r.jsx(T0,{disabled:!y.item||!y.from||!y.to||y.from>y.to,onClick:()=>e(`/rations/stores/fresh-meals/reports/item-range?item=${encodeURIComponent(y.item)}&from=${encodeURIComponent(y.from)}&to=${encodeURIComponent(y.to)}`),children:"عرض التقرير"})})]})]})]})]})}async function ez(e){const a=await fetch(`/api/items_withdrawals?item_name=${encodeURIComponent(e)}&order_by=date&order=desc&limit=31`);if(!a.ok)throw new Error("فشل جلب سجلات الصرف");const o=await a.json();return Array.isArray(o)?o:[]}async function tz(e){const a=await fetch("/api/items_withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const g=await a.json().catch(()=>null);throw new Error(g?.error||"فشل إضافة السحب")}const o=await a.json();await K1(e.item_name,e.unit??""),await cf(e.item_name,-Number(e.quantity||0),e.unit??null);const s=Number(e.quantity||0),c=await fetch(`/api/items_withdrawals/prev?item_name=${encodeURIComponent(e.item_name)}&date=${e.date}&id=${o.id}`),u=c.ok?await c.json():null,h=await fetch(`/api/items_withdrawals/next?item_name=${encodeURIComponent(e.item_name)}&date=${e.date}&id=${o.id}`),p=h.ok?await h.json():null;if(!p)return o;if(u){const y=Number(u?.stock_after??0)-s;await fetch(`/api/items_withdrawals/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_after:y})})}else{const g=Number(p?.stock_after??0),y=Number(p?.quantity??0),b=g+y-s;await fetch(`/api/items_withdrawals/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_after:b})})}return await fetch("/api/items_withdrawals/adjust-next",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e.item_name,date:e.date,id:o.id,diff:s})}),o}async function rz({id:e,payload:a}){const o=await fetch(`/api/items_withdrawals/${encodeURIComponent(e)}`);if(!o.ok){const x=await o.json().catch(()=>null);throw new Error(x?.error||"السجل المطلوب غير موجود")}const s=await o.json(),c=Number(s.quantity||0),u=Number(a.quantity??c),h=c-u,p={...a,stock_after:Number(s.stock_after||0)+h},g=await fetch(`/api/items_withdrawals/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!g.ok){const x=await g.json().catch(()=>null);throw new Error(x?.error||"فشل تحديث السحب")}const y=await g.json();h!==0&&await cf(a.item_name||s.item_name,h,a.unit??s.unit??null);const b=u-c;return b!==0&&await fetch("/api/items_withdrawals/adjust-next",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:s.date,id:s.id,diff:b})}),y}async function nz(e){const a=await fetch(`/api/items_withdrawals/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}function az(e){return je({queryKey:["withdrawals",e],queryFn:()=>ez(e),enabled:!!e,onError:a=>{console.error("useWithdrawals error:",a),W.error("فشل تحميل سجل الصرف")}})}function iz(e){return je({queryKey:["current-stock",e],queryFn:()=>DC(e),enabled:!!e,onError:a=>{console.error("useCurrentStock error:",a),W.error("فشل تحميل المخزون الحالي")}})}function oz(){const e=Te();return Re({mutationFn:tz,onSuccess:()=>{W.success("تم إضافة الصرف بنجاح"),e.invalidateQueries()},onError:a=>{console.error("useAddWithdrawal error:",a),W.error("فشل إضافة الصرف")}})}function sz(){const e=Te();return Re({mutationFn:rz,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error("useUpdateWithdrawal error:",a),W.error("حدث خطأ")}})}function lz(){const e=Te();return Re({mutationFn:nz,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}const cz=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 105rem;
`,dz=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,uz=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,fz=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.4rem;
`,mz=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Yr=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,hz=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }
  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Or=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,pz=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,gz=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,wi=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,_i=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,$l=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,Yx=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,Yl=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`,yz=f(Yl)`
  color: #000;
`,bz=f(Yl)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,xz=f(Yl)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,vz={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"};function jz(e,a,o,s,c,u){let h="صيفاً - شتاءًا - رمضان";e==="lentils"?h="شتاءًا":e==="eggs"&&(h="صيفاً - شتاءًا");let p="";const g={rice:50,"white-beans":50,fava:50,lentils:50,eggs:30,salt:25,sugar:20,tea:20,meat:20,"frozen-vegetables":20,"tomato-sauce":12,chicken:11,"cooking-oil":10.9,macaroni:10,noodles:10,cumin:5,"black-pepper":5,"garlic-powder":1,spices:1,zabady:1};g[e]!==void 0&&(p=g[e]);let y=c?ts(Number(c)):0,b=ts(Number(u));return a===s?.date&&(y=0,b=0),{date:a,expiry_date:o?.expiry_date||s?.expiry_date||"",unit:o?.unit||s?.unit||"",ration_type:h,quantity:y,quantity_azim:b,net_weight:p}}function wz(e){if(!e)return null;const a=new Date(e);return a.setDate(a.getDate()+1),a.toISOString().split("T")[0]}const ts=(e,a=4)=>Number(Number(e).toFixed(a));function _z(){const{itemName:e}=us(),[a,o]=S.useState(!1),[s,c]=S.useState(null),{data:u,isPending:h}=Ya(),{data:p,isPending:g}=df(u?.id),{data:y,isPending:b}=az(e),{data:x,isPending:j}=iz(e),{data:_,isPending2:C}=hs("incoming_items",e),{data:$,isPending3:D}=I1("items_withdrawals",e),{register:A,handleSubmit:M,reset:O}=Ut(),z=oz(),I=sz(),R=lz(),F=e==="noodles"||e==="cooking-oil",K=`${e.replace(/-/g,"_")}_total`;let ue=p?Number(p[K]):0;p&&e==="tomato-sauce"&&(ue=Number(p.sauce_rice_total||p.sauce_macaroni_total)),p&&e==="black-pepper"&&(ue=Number(p.black_pepper_rice_total||p.black_pepper_macaroni_total));const X=s?Number(s.quantity||0):0,oe=Number(x?.current_quantity??0)+X;function ce(){const k=new Date(u?.date).getMonth()+1;return[11,12,1,2,3].includes(k)?"شتاء":"صيف"}let Y=0;ce()==="شتاء"&&e==="noodles"&&(Y=Number(u.individuals+u.soldiers)*.003),ce()==="شتاء"&&e==="cooking-oil"&&(Y=Number(u.individuals+u.soldiers)*.006),ce()==="صيف"&&e==="cooking-oil"&&(Y=Number(u.individuals+u.soldiers)*.003),S.useEffect(()=>{s&&O({date:s.date,quantity:s.quantity,quantity_azim:s.quantity_azim||"",net_weight:s.net_weight||"",expiry_date:s.expiry_date||"",ration_type:s.ration_type||"",unit:s.unit||""})},[s,O]),S.useEffect(()=>{a&&!s&&O(jz(e,u?.date,_,$,ue,Y))},[a,s,e,_,O,ue,Y,u?.date,$]);async function N(te){const k=wz(te.date);let Z=0;!s&&k&&(Z=(await lf("incoming_items",e,k))?.reduce((J,ye)=>ye.quantity+J,0)||0);const se={item_name:e,date:te.date,quantity:Number(te.quantity),stock_after:Number(x?.current_quantity)-Number(te.quantity)-Number(Z||0),quantity_azim:Number(te.quantity_azim)||null,net_weight:Number(te.net_weight||0),expiry_date:te.expiry_date||null,ration_type:te.ration_type||null,unit:te.unit};if(se.quantity<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");if(s){const de=Number(x?.current_quantity)+X;if(se.quantity>de)return W.error("لايوجد رصيد كافي");I.mutate({id:s.id,payload:{...se,item_name:e}},{onSuccess:()=>{O(),c(null),o(!1),W.success("تم تعديل الصرف")}})}else{if(se.quantity>(x?.current_quantity??0)||se.stock_after<0)return W.error("لايوجد رصيد كافي");z.mutate(se,{onSuccess:()=>{O(),o(!1)}})}}function ne(te){c(te),o(!0)}function pe(){s&&I.mutate({id:s.id,payload:{...s,quantity:0,item_name:e}},{onSuccess:()=>{R.mutate(s.id,{onSuccess:()=>{O(),c(null),o(!1),W.success("تم الحذف بنجاح")}})}})}return b||j||g||C||D||h?r.jsx(Ae,{}):r.jsxs(cz,{children:[r.jsxs(dz,{children:["الصرف - ",vz[e]||e]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"1rem",marginBottom:"1.5rem"},children:[r.jsx(Yl,{onClick:()=>{a?(o(!1),c(null),O()):o(!0)},children:a?"✖️ إغلاق":"➕ إضافة / تأكيد صرف"}),r.jsx(yz,{$bg:"#f1ce08",children:`الرصيد الحالي : ${ts(Number(oe))} ${x?.unit??""}`})]}),a&&r.jsx(pz,{children:r.jsxs(gz,{onSubmit:M(N),children:[r.jsxs(wi,{children:[r.jsx(_i,{children:"التاريخ"}),r.jsx($l,{disabled:s,type:"date",max:new Date().toISOString().split("T")[0],...A("date",{required:!0})})]}),r.jsxs(wi,{children:[r.jsx(_i,{children:"الكمية المصروفة"}),r.jsx($l,{type:"number",step:"any",...A("quantity",{required:!0})})]}),F&&r.jsxs(wi,{children:[r.jsx(_i,{children:"يومية ظابط عظيم"}),r.jsx($l,{type:"number",step:"any",...A("quantity_azim")})]}),r.jsxs(wi,{children:[r.jsx(_i,{children:"الوزن الصافي"}),r.jsx($l,{type:"number",step:"any",...A("net_weight")})]}),r.jsxs(wi,{children:[r.jsx(_i,{children:"صلاحية الصنف"}),r.jsx($l,{type:"date",...A("expiry_date")})]}),r.jsxs(wi,{children:[r.jsx(_i,{children:"الوحدة"}),r.jsxs(Yx,{...A("unit",{required:!0}),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"كيلوجرام",children:"بالكيلوجرام"}),r.jsx("option",{value:"مليجرام",children:"بالمليجرام"}),r.jsx("option",{value:"عدد",children:"بالعدد"}),r.jsx("option",{value:"لتر",children:"باللتر"}),r.jsx("option",{value:"قطعة",children:"بالقطعة"}),r.jsx("option",{value:"علبة",children:"بالعلبة"}),r.jsx("option",{value:"زجاجة",children:"بالزجاجة"}),r.jsx("option",{value:"فتلة",children:"بالفتلة"})]})]}),r.jsxs(wi,{children:[r.jsx(_i,{children:"مقرر الصنف"}),r.jsxs(Yx,{...A("ration_type"),children:[r.jsx("option",{value:"",children:"اختر"}),r.jsx("option",{value:"صيفاً",children:"صيفاً"}),r.jsx("option",{value:"شتاءًا",children:"شتاءًا"}),r.jsx("option",{value:"رمضان",children:"رمضان"}),r.jsx("option",{value:"صيفاً - شتاءًا",children:"صيفاً - شتاءًا"}),r.jsx("option",{value:"صيفاً - شتاءًا - رمضان",children:"صيفاً - شتاءًا - رمضان"}),r.jsx("option",{value:"وجبات جافة",children:"وجبات جافة"})]})]}),r.jsxs("div",{style:{flexBasis:"100%",display:"flex",gap:"1rem"},children:[r.jsx(Yl,{type:"submit",disabled:z.isPending||I.isPending,children:s?I.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":z.isPending?"جارٍ الإضافة / التأكيد...":"✔️ إضافة / تأكيد"}),s&&r.jsx(xz,{type:"button",disabled:I.isPending,onClick:pe,children:I.isPending?"جارٍ الحذف...":"حذف"})]})]})}),r.jsx(uz,{children:r.jsxs(fz,{children:[r.jsx(mz,{children:r.jsxs("tr",{children:[r.jsx(Yr,{children:"م"}),r.jsx(Yr,{children:"اليوم"}),r.jsx(Yr,{children:"التاريخ"}),r.jsx(Yr,{children:"الكمية المصروفة"}),r.jsx(Yr,{children:"الرصيد بعد الصرف"}),F&&r.jsx(Yr,{children:"يومية ظابط عظيم"}),r.jsx(Yr,{children:"الوزن الصافي"}),r.jsx(Yr,{children:"الوحدة"}),r.jsx(Yr,{children:"صلاحية الصنف"}),r.jsx(Yr,{children:"مقرر الصنف"}),r.jsx(Yr,{children:"إجراءات"})]})}),r.jsx(hz,{children:y?.length===0?r.jsx("tr",{children:r.jsx(Or,{colSpan:"10",children:"لا يوجد بيانات"})}):y?.map((te,k)=>{const se=te.expiry_date?(new Date(te.expiry_date)-new Date)/864e5:null,de=se!==null&&se<=60;return r.jsxs("tr",{children:[r.jsx(Or,{children:1+k}),r.jsx(Or,{children:new Date(te.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(Or,{children:te.date}),r.jsx(Or,{children:ts(Number(te.quantity))}),r.jsx(Or,{children:ts(Number(te.stock_after))}),F&&r.jsx(Or,{children:ts(Number(te.quantity_azim))}),r.jsx(Or,{children:te.net_weight||"—"}),r.jsx(Or,{children:te.unit}),r.jsxs(Or,{style:{color:de?"red":"inherit",fontWeight:de?"700":"400"},children:[te.expiry_date||"-"," ",de&&"🚨"]}),r.jsx(Or,{children:te.ration_type??"—"}),r.jsx(Or,{children:r.jsx(bz,{onClick:()=>ne(te),children:"✏️"})})]},te.id)})})]})})]})}const Sz=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
  direction: rtl;
`,Ix=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,kz=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,$z=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,Cz=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,Ez=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function Tz(){const e=[{title:"الأصناف",path:"fresh-items"},{title:"الأرصدة الحالية",path:"fresh-stock"},{title:"الوارد",path:"fresh-incoming"}];return r.jsxs(Sz,{children:[r.jsxs("div",{children:[r.jsx(Ix,{style:{fontSize:"2.9rem",fontWeight:"900",margin:0},children:"مخزن ( ب )"}),r.jsx(Ix,{children:"الوجبات الطازجة / أصناف صندوق التحسين"})]}),r.jsx(kz,{children:e.map(a=>r.jsx($z,{to:`/rations/stores/fresh-meals/${a.path}`,children:r.jsx(Cz,{children:r.jsx(Ez,{children:a.title})})},a.path))})]})}async function Dz(){const e=await fetch("/api/permit_number_fresh?limit=1");if(!e.ok)throw new Error("فشل جلب البيانات");const a=await e.json();return Array.isArray(a)&&a.length?a[0]:null}async function Rz(e){const a=await fetch("/api/permit_number_fresh?limit=1");if(!a.ok)throw new Error("فشل الوصول إلى البيانات");const o=await a.json(),s=Array.isArray(o)&&o.length?o[0]:null,c={value:e,created_at:new Date().toISOString()};if(s&&s.id){const u=await fetch(`/api/permit_number_fresh/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل التحديث");return await u.json()}else{const u=await fetch("/api/permit_number_fresh",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل إنشاء السجل");return await u.json()}}function zz(){return je({queryKey:["permit-number-fresh"],queryFn:Dz})}function Az(){const e=Te(),a=Re({mutationFn:Rz,onSuccess:o=>{e.setQueryData(["permit-number-fresh"],o)}});return{updateAsync:a.mutateAsync,isPending:a.isPending,isError:a.isError,error:a.error,isSuccess:a.isSuccess}}const qz=f.div`
  background-color: var(--color-grey-50);
  direction: rtl;
  min-width: 120rem;
  padding: 0rem 1rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,Nz=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;

  @media print {
    box-shadow: none;
  }
`,Oz=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.6rem;

  thead {
    background-color: var(--color-brand-600);
    color: white;

    @media print {
      color: black;
    }
  }
  tbody {
    tr:nth-child(even) {
      background-color: var(--color-grey-100);
    }
    tr:hover {
      background-color: var(--color-grey-200);
    }
  }
  td,
  th {
    padding: 1.2rem;
    border: 1px solid var(--color-grey-300);
  }
`,Mz=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,Bz=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Lo=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,Uz=f.button`
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background: ${({$active:e})=>e?"var(--color-brand-700)":"#ddd"};
  color: ${({$active:e})=>e?"white":"black"};

  @media print {
    color: black !important;
    display: ${({$active:e})=>e?"block":"none"};
  }
`,Fz=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    display: block;
  }
`,Lz=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1.2rem;
  width: 40%;

  @media print {
    display: none;
  }
`,Kx=f.form`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap;
`,Pz=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Hz=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Xx=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  width: 100%;
`,Id=f.div`
  text-align: center;
  margin: 1rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;

  @media print {
    color: black;
  }
`,Qz=f.div`
  text-align: center;
  margin: 4rem 2rem 8rem 2rem;

  font-size: 1.8rem;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  @media print {
    color: black;
  }
`,Gz=f.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media print {
    color: black;
  }
`,Zx=[{name_ar:"أرز بلدي",name_en:"rice",unit:"كيلوجرام"},{name_ar:"مكرونة",name_en:"macaroni",unit:"كيلوجرام"},{name_ar:"صلصة أرز",name_en:"sauce_rice",unit:"كيلوجرام"},{name_ar:"فلفل أسود أرز",name_en:"black_pepper_rice",unit:"مليجرام"},{name_ar:"صلصة مكرونة",name_en:"sauce_macaroni",unit:"كيلوجرام"},{name_ar:"فلفل أسود مكرونة",name_en:"black_pepper_macaroni",unit:"مليجرام"},{name_ar:"شعرية",name_en:"noodles",unit:"كيلوجرام"},{name_ar:"زيت طعام",name_en:"cooking_oil",unit:"كيلوجرام"},{name_ar:"فاصوليا",name_en:"white_beans",unit:"كيلوجرام"},{name_ar:"فول صحيح",name_en:"fava",unit:"كيلوجرام"},{name_ar:"سكر",name_en:"sugar",unit:"فتلة"},{name_ar:"شاي",name_en:"tea",unit:"فتلة"},{name_ar:"كمون",name_en:"cumin",unit:"مليجرام"},{name_ar:"ملح",name_en:"salt",unit:"كيلوجرام"},{name_ar:"ثوم بودرة",name_en:"garlic_powder",unit:"مليجرام"},{name_ar:"بهارات",name_en:"spices",unit:"مليجرام"},{name_ar:"بيض",name_en:"eggs",unit:"عدد"},{name_ar:"بصل",name_en:"onion",unit:"كيلوجرام"},{name_ar:"فاكهة",name_en:"fruits",unit:"كيلوجرام"},{name_ar:"سلطة",name_en:"salad",unit:"كيلوجرام"},{name_ar:"جبنة بيضاء",name_en:"white_cheese",unit:"عدد"},{name_ar:"مربى",name_en:"jam",unit:"قطعة"},{name_ar:"حلاوة",name_en:"halawa",unit:"قطعة"},{name_ar:"فول معلب",name_en:"canned_fava",unit:"علبة"},{name_ar:"لحوم",name_en:"meat",unit:"كيلوجرام"},{name_ar:"دواجن",name_en:"chicken",unit:"كيلوجرام"},{name_ar:"خضار مجمد",name_en:"frozen_vegetables",unit:"كيلوجرام"},{name_ar:"عدس",name_en:"lentils",unit:"كيلوجرام"},{name_ar:"زبادي",name_en:"zabady",unit:"علبة"},{name_ar:"عصير",name_en:"juice",unit:"علبة"}],Vz=(e,a=4)=>Number(Number(e).toFixed(a));function Yz(){const[e,a]=S.useState(0),[o,s]=S.useState(!1),[c,u]=S.useState(null),[h,p]=S.useState(!1),{data:g,isPending:y}=Ya(),b=g?.date||null,x=c||b,{data:j,isPending:_}=zz(),{updateAsync:C,isPending:$}=Az(),{data:D,isPending:A}=AC(x),{register:M,setValue:O,getValues:z}=Ut(),I=x?new Date(x).toLocaleDateString("ar-EG",{weekday:"long",month:"numeric",day:"numeric",year:"numeric"}):"-";async function R(K){K.preventDefault();const ue=await C(z("value"));O("value",ue?.value),s(!1)}S.useEffect(()=>{D?.length>0&&a(D.length-1)},[D]);const F=D?.[e]||{},ie=Zx.map(K=>{const ue=K.name_en.replace(/-/g,"_");return{qty:Number(F?.[`${ue}_total`]??0),unit:K.unit}});return y||A||_?r.jsx(Ae,{}):r.jsxs(qz,{children:[r.jsx(Fz,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsxs(Id,{children:[r.jsx("p",{children:"اسم الجهة : مخزن التعيينات"}),r.jsx("p",{children:"مستديم"}),r.jsx("p",{}),r.jsx("p",{}),r.jsx("p",{children:"نموذج ( 2 ) مخازن حكومة"}),r.jsx("p",{})]}),r.jsxs(Id,{children:[r.jsxs("p",{children:["التاريخ : ",I]}),r.jsx("p",{children:"مستهلك"}),r.jsx("p",{children:"سند صرف"}),r.jsx("p",{})]}),r.jsxs(Id,{children:[r.jsx("p",{children:"اسم الطالب : ( المخزن / الإدارة / العامل )"}),r.jsx("p",{children:"طلب إذن صرف"}),r.jsxs(Gz,{children:[r.jsx("span",{children:" رقم الإذن : "}),o?r.jsxs(Kx,{onSubmit:R,children:[r.jsx(Xx,{style:{width:"6rem",height:"3rem",textAlign:"center"},type:"number",defaultValue:j?.value,...M("value",{required:!0})}),r.jsx(Lo,{disabled:$,type:"submit",style:{padding:"0.5rem",marginBottom:"0"},children:r.jsx(nc,{})}),r.jsx(Lo,{disabled:$,style:{padding:"0.5rem",marginBottom:"0",background:"#777"},type:"button",onClick:()=>{s(!1),O("value",j?.value??"")},children:r.jsx(ac,{})})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:j?.value}),r.jsx(Lo,{disabled:$,style:{padding:"0.2rem 0.3rem",marginBottom:"0"},onClick:()=>s(K=>!K),children:r.jsx(ic,{})})]})]}),r.jsx("p",{})]}),r.jsxs(Id,{style:{justifyContent:"flex-start",gap:"4rem",marginTop:"6rem"},children:[r.jsx(Lo,{style:{color:"black",margin:"0"},$bg:"#f1ce08",onClick:()=>p(K=>!K),children:h?"✖️ إغلاق":"عرض إذن سابق"}),D?.length>1&&r.jsx("div",{style:{display:"flex",gap:"1rem"},children:D.map((K,ue)=>r.jsxs(Uz,{onClick:()=>a(ue),$active:e===ue,children:["يومية - ",ue+1]},ue))})]}),h&&r.jsx(Lz,{children:r.jsxs(Kx,{onSubmit:K=>{K.preventDefault(),u(K.target.date.value||null),p(!1)},children:[r.jsxs(Pz,{children:[r.jsx(Hz,{children:"اختر تاريخ"}),r.jsx(Xx,{name:"date",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%"},children:[r.jsx(Lo,{type:"submit",children:"عرض"}),r.jsx(Lo,{type:"button",$bg:"#777",onClick:()=>p(!1),children:"إلغاء"})]})]})}),r.jsx(Nz,{children:r.jsxs(Oz,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"رقم الصنف"}),r.jsx("th",{children:"اسم الصنف"}),r.jsx("th",{children:"الوحدة"}),r.jsx("th",{children:"الكمية المطلوبة"}),r.jsx("th",{children:"الكمية المصرح بها"}),r.jsx("th",{children:"الكمية المنصرفة"}),r.jsx("th",{children:"حالة الصنف"}),r.jsx("th",{children:"سعر الوحدة"}),r.jsx("th",{style:{width:"8%"},children:"القيمة"}),r.jsx("th",{children:"ملاحظات"})]})}),r.jsx("tbody",{children:D?(()=>{let K=0;return Zx.map((ue,X)=>{const{qty:H,unit:oe}=ie[X];if(!H)return null;K++;const ce=Vz(Number(H))||"-";return r.jsxs("tr",{children:[r.jsx("td",{children:K}),r.jsx("td",{children:ue.name_ar}),r.jsx("td",{children:oe}),r.jsx("td",{children:ce}),r.jsx("td",{children:ce}),r.jsx("td",{children:ce}),r.jsx("td",{children:"جيدة"}),r.jsx("td",{children:"صرف وإمداد"}),r.jsx("td",{}),r.jsx("td",{children:"لاتوجد"})]},ue.name_en)})})():r.jsx("tr",{children:r.jsx("td",{style:{fontSize:"2rem"},colSpan:"10",children:"لا يوجد بيانات"})})})]})}),r.jsxs(Qz,{children:[r.jsx("p",{children:"يصرح بالصرف"}),r.jsx("p",{children:"توقيع الطالب"}),r.jsx("p",{children:"مدير المخزن"}),r.jsx("p",{children:"كاتب الشطب"}),r.jsx("p",{})]}),r.jsx("div",{style:{borderTop:"1px solid #333",padding:"1rem",marginLeft:"10rem"}}),r.jsx(Mz,{children:r.jsx(Bz,{onClick:()=>window.print(),children:"🖨️ طباعة / PDF"})})]})}const R0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,Iz=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,Jx=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,Kz=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,Xz=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Si=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,un=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }
`,Zz=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,Jz=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,Wz=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,eA=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,tA=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,rA={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},Kd=(e,a=4)=>Number(Number(e).toFixed(a));function nA(){const[e]=nr(),a=e.get("item"),o=e.get("from"),s=e.get("to"),{data:c,isPending:u,error:h}=je({queryKey:["fresh-item-range",a,o,s],queryFn:()=>oC(a,o,s),enabled:!!a&&!!o&&!!s});if(!a||!o||!s)return r.jsx(R0,{children:r.jsx(Jx,{children:"يرجى اختيار الصنف والفترة أولاً"})});if(u)return r.jsx(Ae,{});if(h)return r.jsxs(R0,{children:["حدث خطأ: ",h.message]});const p=c?.reduce((x,j)=>x+(Number(j.quantity)||0),0),g=c[0]?.unit||"-",y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),b=new Date(s).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(R0,{children:[r.jsx(tA,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(Iz,{children:r.jsxs(Jx,{children:["تقرير صرف - ",rA[a]||a,"- أصناف طازجة من ",y," إلى"," ",b]})}),r.jsx(Kz,{children:r.jsxs(Xz,{children:[r.jsx(Zz,{children:r.jsxs("tr",{children:[r.jsx(Si,{children:"م"}),r.jsx(Si,{children:"اليوم"}),r.jsx(Si,{children:"التاريخ"}),r.jsx(Si,{children:"الرصيد قبل الصرف"}),r.jsx(Si,{children:"الكمية المصروفة"}),r.jsx(Si,{children:"الرصيد بعد الصرف"}),r.jsx(Si,{children:"الوحدة"})]})}),r.jsxs(Jz,{children:[c?.map((x,j)=>r.jsxs("tr",{children:[r.jsx(un,{children:j+1}),r.jsx(un,{children:Intl.DateTimeFormat("ar-EG",{weekday:"long"}).format(new Date(x.date+"T00:00:00"))}),r.jsx(un,{children:x.date}),r.jsx(un,{children:Kd(Number(x.quantity+x.stock_after))}),r.jsx(un,{children:Kd(Number(x.quantity))}),r.jsx(un,{children:Kd(Number(x.stock_after))}),r.jsx(un,{children:x.unit||"-"})]},j)),r.jsxs("tr",{children:[r.jsx(un,{colSpan:3,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"الإجمالي"}),r.jsx(un,{colSpan:3,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:Kd(Number(p))}),r.jsx(un,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:g})]})]})]})}),r.jsx(Wz,{children:r.jsx(eA,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const aA={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},iA=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;
  @media print {
    background-color: white;
    color: black;
  }
`,oA=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    color: black;
  }
`,sA=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,lA=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,cA=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,Xd=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,dA=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,Zd=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,uA=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,fA=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,mA=f.p`
  display: none;
  font-size: 2.2rem;
  text-align: center;
  color: black;
  margin-bottom: 2rem;

  @media print {
    display: block;
  }
`,hA=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,pA=(e,a=4)=>Number(Number(e).toFixed(a));function gA(){const{data:e,isPending:a}=je({queryKey:["current_stock"],queryFn:c6}),o={};e?.forEach(c=>{o[c.item_name]=c});const s=new Date().toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit"});return a?r.jsx(Ae,{}):r.jsxs(iA,{children:[r.jsx(hA,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(oA,{children:"الأرصدة الحالية للأصناف الطازجة"}),r.jsxs(mA,{children:["التاريخ : ",s]}),r.jsx(sA,{children:r.jsxs(lA,{children:[r.jsx(cA,{children:r.jsxs("tr",{children:[r.jsx(Xd,{children:"م"}),r.jsx(Xd,{children:"اسم الصنف"}),r.jsx(Xd,{children:"الرصيد الحالي"}),r.jsx(Xd,{children:"الوحدة"})]})}),r.jsx(dA,{children:Object.entries(aA).map(([c,u],h)=>{const p=o[c];return r.jsxs("tr",{children:[r.jsx(Zd,{children:h+1}),r.jsx(Zd,{children:u}),r.jsx(Zd,{children:p?`${pA(Number(p.current_quantity))}`:"—"}),r.jsx(Zd,{children:p?`${p.unit||""}`:"—"})]},c)})})]})}),r.jsx(uA,{children:r.jsx(fA,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}function yA(e){if(!e)return"—";const a=new Date(e),o=String(a.getDate()).padStart(2,"0"),s=String(a.getMonth()+1).padStart(2,"0"),c=a.getFullYear();return`${o}/${s}/${c}`}const bA=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
  }
`,xA=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,vA=f.h1`
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
`,jA=f.div`
  background-color: #f1ce08;
  color: #222;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 5px;
`,wA=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,_A=f.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,Wx=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,ev=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,SA=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  flex-basis: 100%;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,kA=f.button`
  background: var(--color-brand-700);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`,$A=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
`,CA=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,EA=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Jd=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
  border: 1px solid #e5e7eb; /* خط فاصل أنيق */
`,TA=f.tr`
  border: 1px solid #e5e7eb; /* خط فاصل أنيق */
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-grey-100);
  }
`,Cl=f.td`
  border: 1px solid #e5e7eb; /* خط فاصل أنيق */

  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,DA=f.button`
  background-color: #dc2626;
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #b91c1c;
  }
`;function RA(){const[e,a]=S.useState(!1),o=Te(),{register:s,handleSubmit:c,reset:u}=Ut(),{data:h,isPending:p}=je({queryKey:["health-certificates"],queryFn:Jh.fetchCertificates}),{mutateAsync:g,isPending:y}=Re({mutationFn:Jh.uploadHealthCertificate,onSuccess:()=>{W.success("تم رفع الشهادة بنجاح"),o.invalidateQueries(["health-certificates"]),u(),a(!1)},onError:()=>W.error("حدث خطأ أثناء الرفع")}),{mutate:b,isPending:x}=Re({mutationFn:Jh.deleteCertificate,onSuccess:()=>{W.success("تم حذف الشهادة"),o.invalidateQueries(["health-certificates"])},onError:()=>W.error("فشل حذف الشهادة")});async function j(_){const C=_.image_file?.[0];if(!C)return W.error("يجب اختيار صورة");await g({file:C,expiry_date:_.expiry_date})}return p?r.jsx(Ae,{}):r.jsxs(bA,{children:[r.jsx(xA,{children:r.jsx(vA,{children:"الشهادات الصحية - وحدة التعيينات"})}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[r.jsx(kA,{onClick:()=>a(_=>!_),children:e?"✖️ إغلاق":"➕ إضافة شهادة"}),r.jsxs(jA,{children:["عدد الشهادات : ",h?.length||0]})]}),e&&r.jsx(wA,{children:r.jsxs(_A,{onSubmit:c(j),children:[r.jsx(Wx,{children:"صورة الشهادة الصحية"}),r.jsx(ev,{type:"file",accept:"image/*",...s("image_file",{required:!0})}),r.jsx(Wx,{children:"تاريخ انتهاء الصلاحية"}),r.jsx(ev,{type:"date",...s("expiry_date",{required:!0})}),r.jsx(SA,{type:"submit",disabled:y,children:y?"جارٍ الرفع...":"✔️ رفع"})]})}),r.jsx($A,{children:r.jsxs(CA,{children:[r.jsx(EA,{children:r.jsxs("tr",{children:[r.jsx(Jd,{children:"م"}),r.jsx(Jd,{children:"صورة الشهادة"}),r.jsx(Jd,{children:"تاريخ الانتهاء"}),r.jsx(Jd,{})]})}),r.jsx("tbody",{children:h?.length>0?h.map((_,C)=>r.jsxs(TA,{children:[r.jsx(Cl,{children:C+1}),r.jsx(Cl,{children:r.jsx("img",{src:_.image_url,alt:"شهادة صحية",width:"220",height:"120",style:{borderRadius:"8px",objectFit:"fill",border:"1px solid #ddd"}})}),r.jsxs(Cl,{style:{color:new Date(_.expiry_date)-new Date<=1e3*60*60*24*60?"red":"inherit",fontWeight:new Date(_.expiry_date)-new Date<=1e3*60*60*24*60?"700":"400"},children:[yA(_.expiry_date)," ",new Date(_.expiry_date)-new Date<=1e3*60*60*24*60&&"🚨"]}),r.jsx(Cl,{children:r.jsx(DA,{disabled:x,onClick:()=>{window.confirm("هل أنت متأكد من حذف الشهادة؟")&&b(_.id)},children:"🗑"})})]},_.id)):r.jsx("tr",{children:r.jsx(Cl,{colSpan:"4",children:"لا توجد شهادات بعد"})})})]})})]})}async function zA(e){const a=await fetch(`/api/incoming_items?item_name=${encodeURIComponent(e)}&order_by=date&order=desc&limit=31`);if(!a.ok)throw new Error("فشل جلب الواردات");const o=await a.json();return Array.isArray(o)?o:[]}async function AA(e){const a=await fetch("/api/incoming_items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const c=await a.json().catch(()=>null);throw new Error(c?.error||"فشل إضافة الوارد")}const o=await a.json();await K1(e.item_name,e.unit??""),await cf(e.item_name,Number(e.quantity||0),e.unit??null);const s=Number(e.quantity||0)+Number(e.mission_meals||0);return s!==0&&await fetch("/api/incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e.item_name,date:e.date,diff:s})}),o}async function qA({id:e,payload:a}){const o=await fetch(`/api/incoming_items/${encodeURIComponent(e)}`);if(!o.ok){const x=await o.json().catch(()=>null);throw new Error(x?.error||"السجل المطلوب غير موجود")}const s=await o.json(),c=await fetch(`/api/incoming_items/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!c.ok){const x=await c.json().catch(()=>null);throw new Error(x?.error||"فشل تحديث الوارد")}const u=await c.json(),h=Number(s.quantity||0),p=Number(a.quantity??s.quantity??0),g=p-h,y=s.date,b=a.date??s.date;return(g!==0||(a.unit??s.unit)!==s.unit)&&await cf(a.item_name||s.item_name,g,a.unit??s.unit??null),h===p&&y===b||(h!==0&&await fetch("/api/incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:y,diff:-h})}),p!==0&&await fetch("/api/incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:b,diff:p})})),u}async function NA(e){const a=await fetch(`/api/incoming_items/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}function OA(e){return je({queryKey:["incoming-items",e],queryFn:()=>zA(e),enabled:!!e,onError:a=>{console.error("useIncomingItems error:",a),W.error("فشل جلب الوارد")}})}function MA(){const e=Te();return Re({mutationFn:AA,onSuccess:()=>{W.success("تمت إضافة الوارد بنجاح"),e.invalidateQueries()},onError:a=>{console.error("useAddIncomingItem error:",a),W.error("فشل إضافة الوارد")}})}function BA(){const e=Te();return Re({mutationFn:qA,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error("useUpdateIncomingItem error:",a),W.error("حدث خطأ")}})}function UA(){const e=Te();return Re({mutationFn:NA,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}const FA={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},LA=f.div`
  background-color: var(--color-grey-50);
  padding: 4rem 2rem;
  direction: rtl;
  min-width: 95rem;
`,PA=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,HA=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,QA=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,GA=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Hn=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,VA=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,fn=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,YA=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,IA=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Po=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Ho=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,El=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,KA=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,bf=f.button`
  background: ${({bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  height: fit-content;
  margin-top: auto;
`,XA=f(bf)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,ZA=f(bf)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,JA=f(bf)`
  background: var(--color-brand-700);
  margin-bottom: 1rem;
`,WA=f.div`
  display: flex;
  align-items: center;
`,eq=(e,a=4)=>Number(Number(e).toFixed(a));function tq(){const{itemName:e}=us(),[a,o]=S.useState(!1),[s,c]=S.useState(null),{data:u,isPending:h}=OA(e),{data:p,isPending:g}=hs("incoming_items",e),y=MA(),b=BA(),x=UA(),{register:j,handleSubmit:_,reset:C,setValue:$}=Ut();if(h||g)return r.jsx(Ae,{});function D(O){if(O.quantity<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");s?b.mutate({id:s.id,payload:{...O,expiry_date:O.expiry_date||null,item_name:e}},{onSuccess:()=>{C(),c(null),o(!1),W.success("تم التعديل بنجاح")}}):y.mutate({...O,expiry_date:O.expiry_date||null,permit_number:O.permit_number||0,item_name:e},{onSuccess:()=>{C(),o(!1)}})}function A(O){c(O),$("date",O.date),$("permit_number",O.permit_number),$("receiver_name",O.receiver_name),$("quantity",O.quantity),$("unit",O.unit),$("expiry_date",O.expiry_date),o(!0)}function M(){s&&b.mutate({id:s.id,payload:{...s,quantity:0,item_name:e}},{onSuccess:()=>{x.mutate(s.id,{onSuccess:()=>{C(),c(null),o(!1),W.success("تم الحذف بنجاح")}})}})}return r.jsxs(LA,{children:[r.jsxs(PA,{children:["الوارد - ",FA[e]||e]}),r.jsx(WA,{children:r.jsx(JA,{onClick:()=>{a?(o(!1),c(null),C()):o(!0)},children:a?"✖️ إغلاق":"➕ إضافة وارد"})}),a&&r.jsx(YA,{children:r.jsxs(IA,{onSubmit:_(D),children:[r.jsxs(Po,{children:[r.jsx(Ho,{children:"التاريخ"}),r.jsx(El,{type:"date",defaultValue:new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),max:new Date().toISOString().split("T")[0],...j("date",{required:!0})})]}),r.jsxs(Po,{children:[r.jsx(Ho,{children:"رقم الإذن"}),r.jsx(El,{type:"number",...j("permit_number")})]}),r.jsxs(Po,{children:[r.jsx(Ho,{children:"اسم المستلم"}),r.jsx(El,{type:"text",...j("receiver_name",{required:!0})})]}),r.jsxs(Po,{children:[r.jsx(Ho,{children:"الكمية المضافة"}),r.jsx(El,{type:"number",step:"any",...j("quantity",{required:!0})})]}),r.jsxs(Po,{children:[r.jsx(Ho,{children:"الوحدة"}),r.jsxs(KA,{defaultValue:!s&&p?.unit,...j("unit",{required:!0}),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"مليجرام",children:"مليجرام"}),r.jsx("option",{value:"لتر",children:"لتر"}),r.jsx("option",{value:"عدد",children:"عدد"}),r.jsx("option",{value:"قطعة",children:"قطعة"}),r.jsx("option",{value:"علبة",children:"علبة"}),r.jsx("option",{value:"زجاجة",children:"زجاجة"}),r.jsx("option",{value:"فتلة",children:"فتلة"})]})]}),r.jsxs(Po,{children:[r.jsx(Ho,{children:"صلاحية الصنف"}),r.jsx(El,{defaultValue:!s&&p?.expiry_date,type:"date",...j("expiry_date")})]}),r.jsx(bf,{type:"submit",disabled:y.isPending||b.isPending,children:s?b.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":y.isPending?"جارٍ الإضافة...":"✔️ إضافة"}),s&&r.jsx(ZA,{type:"button",disabled:b.isPending,onClick:M,children:b.isPending?"جارٍ الحذف...":"حذف"})]})}),r.jsx(HA,{children:r.jsxs(QA,{children:[r.jsx(GA,{children:r.jsxs("tr",{children:[r.jsx(Hn,{children:"م"}),r.jsx(Hn,{children:"اليوم"}),r.jsx(Hn,{children:"التاريخ"}),r.jsx(Hn,{children:"رقم الإذن"}),r.jsx(Hn,{children:"اسم المستلم"}),r.jsx(Hn,{children:"الكمية المضافة"}),r.jsx(Hn,{children:"الوحدة"}),r.jsx(Hn,{children:"صلاحية الصنف"}),r.jsx(Hn,{children:"إجراءات"})]})}),r.jsx(VA,{children:u?.length===0?r.jsx("tr",{children:r.jsx(fn,{colSpan:"9",children:"لا يوجد بيانات"})}):u?.map((O,z)=>{const R=O.expiry_date?(new Date(O.expiry_date)-new Date)/864e5:null,F=R!==null&&R<=60;return r.jsxs("tr",{children:[r.jsx(fn,{children:z+1}),r.jsx(fn,{children:new Date(O.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(fn,{children:O.date}),r.jsx(fn,{children:O.permit_number||"—"}),r.jsx(fn,{children:O.receiver_name||"—"}),r.jsx(fn,{children:O.quantity!=null?eq(Number(O.quantity)):"—"}),r.jsx(fn,{children:O.unit||"—"}),r.jsxs(fn,{style:{color:F?"red":"inherit",fontWeight:F?700:400},children:[O.expiry_date||"—"," ",F&&"🚨"]}),r.jsx(fn,{children:r.jsx(XA,{onClick:()=>A(O),children:"✏️"})})]},O.id)})})]})})]})}const rq={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},z0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,tv=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,A0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,nq=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,aq=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Wd=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
  color: white;

  @media print {
    color: black;
  }
`,eu=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,iq=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,oq=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,sq=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,lq=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,cq=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,dq=(e,a=4)=>Number(Number(e).toFixed(a));function uq(){const[e]=nr(),a=e.get("from"),o=e.get("to"),{data:s,isPending:c,error:u}=je({queryKey:["incoming-range-report",a,o],queryFn:()=>aC(a,o),enabled:!!a&&!!o}),h={};s&&s.forEach(b=>{const x=`${b.item_name}||${b.unit||""}`,j=Number(b.quantity)||0;h[x]||(h[x]={item_name:b.item_name,unit:b.unit||"",quantity:0}),h[x].quantity+=j});const p=[];if(Object.entries(rq).forEach(([b,x])=>{const j=Object.values(h).filter(_=>_.item_name===b);j.length===0?p.push({item_key:b,item_label:x,quantity:0,unit:""}):j.forEach(_=>{p.push({item_key:b,item_label:x,quantity:_.quantity,unit:_.unit})})}),!a||!o)return r.jsxs(z0,{children:[r.jsx(tv,{children:r.jsx(A0,{children:"تقرير شهري للوارد"})}),r.jsx(A0,{children:"يجب تحديد فترة البداية والنهاية من صفحة الأصناف."})]});if(c)return r.jsx(Ae,{});if(u)return r.jsxs(z0,{children:["حدث خطأ أثناء تحميل البيانات: ",u.message]});const g=new Date(a).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(z0,{children:[r.jsx(sq,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(tv,{children:r.jsxs(A0,{children:["تقرير الوارد للأصناف الطازجة من ",g," إلى ",y]})}),r.jsx(nq,{children:r.jsxs(aq,{children:[r.jsx(lq,{children:r.jsxs("tr",{children:[r.jsx(Wd,{children:"م"}),r.jsx(Wd,{children:"اسم الصنف"}),r.jsx(Wd,{children:"الكمية الواردة"}),r.jsx(Wd,{children:"الوحدة"})]})}),r.jsx(cq,{children:p.map((b,x)=>r.jsxs("tr",{children:[r.jsx(eu,{children:x+1}),r.jsx(eu,{children:b.item_label}),r.jsx(eu,{children:dq(Number(b.quantity))}),r.jsx(eu,{children:b.unit||"-"})]},`${b.item_key}-${b.unit||"no-unit"}-${x}`))})]})}),r.jsx(iq,{children:r.jsx(oq,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const fq={small:rr`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,medium:rr`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,large:rr`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `},mq={primary:rr`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,secondary:rr`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,danger:rr`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `},tp=f.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${e=>fq[e.$size||"medium"]}
  ${e=>mq[e.$variation||"primary"]}
`,hq=f.form`
  ${e=>e.$type==="regular"&&rr`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${e=>e.$type==="modal"&&rr`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`,pq=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,gq=f.label`
  font-weight: 500;
`,yq=f.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function q0({label:e,error:a,children:o}){return r.jsxs(pq,{children:[e&&r.jsx(gq,{htmlFor:o.props.id,children:e}),o,a&&r.jsx(yq,{children:a})]})}const rv=f.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;
`,bq="AUTH_USERS",rp="AUTH_CURRENT_USER",nv=[{email:"admin@example.com",password:"e:jT'gu-!ha'|y%_n",fullName:"Admin User",role:"authenticated"}];function xq(){try{const e=localStorage.getItem(bq);return e?JSON.parse(e):nv.slice()}catch(e){return console.error("localStorage not available or corrupted",e),nv.slice()}}async function vq({email:e,password:a}){const s=xq().find(u=>u.email.toLowerCase()===(e||"").toLowerCase()&&u.password===a);if(!s){const u=new Error("Invalid credentials");throw u.status=401,u}const c={email:s.email,fullName:s.fullName,role:s.role};return localStorage.setItem(rp,JSON.stringify(c)),{user:c}}async function jq(){return localStorage.removeItem(rp),{ok:!0}}async function wq(){try{const e=localStorage.getItem(rp);return e?JSON.parse(e):null}catch(e){return console.log(e),null}}function _q(){const e=Te(),a=ur(),{mutate:o,isPending:s}=Re({mutationFn:vq,onSuccess(c){const u=c?.user??null;e.setQueryData(["user"],u),a("/dashboard",{replace:!0})},onError(c){console.log(c),W.error("البريد الإلكتروني أو كلمة المرور غير صحيحة")}});return{login:o,isPending:s}}const Sq=Z3`
  to {
    transform: rotate(1turn)
  }
`,z6=f(AR)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${Sq} 1.5s infinite linear;
`;function kq(){const[e,a]=S.useState(""),[o,s]=S.useState(""),{login:c,isPending:u}=_q();function h(p){p.preventDefault(),!(!e||!o)&&c({email:e,password:o},{onSettled:()=>{a(""),s("")}})}return r.jsxs(hq,{$type:"regular",onSubmit:h,children:[r.jsx(q0,{label:"Email address",children:r.jsx(rv,{required:!0,type:"email",id:"email",autoComplete:"username",value:e,onChange:p=>a(p.target.value),disabled:u})}),r.jsx(q0,{label:"Password",children:r.jsx(rv,{required:!0,type:"password",id:"password",autoComplete:"current-password",value:o,onChange:p=>s(p.target.value),disabled:u})}),r.jsx(q0,{children:r.jsx(tp,{$size:"large",disabled:u,children:u?r.jsx(z6,{}):"Log in"})})]})}const np=f.h1`
  ${e=>e.as==="h1"&&rr`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${e=>e.as==="h2"&&rr`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${e=>e.as==="h3"&&rr`
      font-size: 2rem;
      font-weight: 500;
    `}
  ${e=>e.as==="h4"&&rr`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

line-height:1.4;
`,$q=f.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);
`;function Cq(){return r.jsxs($q,{children:[r.jsx(m6,{}),r.jsx(np,{as:"h4",children:"Log in"}),r.jsx(kq,{})]})}async function Eq(e){const a=await fetch(`/api/meat_items_withdrawals?date=${encodeURIComponent(e)}`);if(!a.ok)throw new Error("فشل جلب السحوبات");const o=await a.json();return Array.isArray(o)?o:[]}async function Tq(e,a){const o=await fetch(`/api/meat_items_withdrawals?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}`);if(!o.ok)throw new Error("فشل جلب السحوبات خلال المدة");const s=await o.json();return Array.isArray(s)?s:[]}async function Dq(e,a){const o=await fetch(`/api/meat_incoming_items?date_from=${encodeURIComponent(e)}&date_to=${encodeURIComponent(a)}&order_by=date&order=asc`);if(!o.ok)throw new Error("فشل جلب الوارد");const s=await o.json();return Array.isArray(s)?s:[]}async function Rq(e,a,o){const s=await fetch(`/api/meat_incoming_items?item_name=${encodeURIComponent(e)}&date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`);if(!s.ok)throw new Error("فشل في جلب بيانات التقرير المحدد.");const c=await s.json();return Array.isArray(c)?c:[]}async function zq(e,a,o){const s=await fetch(`/api/meat_items_withdrawals?item_name=${encodeURIComponent(e)}&date_from=${encodeURIComponent(a)}&date_to=${encodeURIComponent(o)}&order_by=date&order=asc`);if(!s.ok)throw new Error("فشل في جلب بيانات التقرير المحدد.");const c=await s.json();return Array.isArray(c)?c:[]}const Aq={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},N0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,av=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,O0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,qq=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,Nq=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Qo=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,Go=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,Oq=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,Mq=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Bq=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,Uq=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,Fq=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,M0=(e,a=4)=>Number(Number(e).toFixed(a));function Lq(){const[e]=nr(),a=e.get("date"),{data:o,isPending:s,error:c}=je({queryKey:["meat-daily-report",a],queryFn:()=>Eq(a),enabled:!!a}),u={};o&&o.forEach(g=>{const y=`${g.item_name}||${g.unit||""}`,b=Number(g.quantity)||0,x=Number(g.stock_after)||0;u[y]||(u[y]={item_name:g.item_name,unit:g.unit||"",quantity:0,stock_after:0}),u[y].quantity+=b,u[y].stock_after=x});const h=[];if(Object.entries(Aq).forEach(([g,y])=>{const b=Object.values(u).filter(x=>x.item_name===g);b.length===0?h.push({item_key:g,item_label:y,quantity:0,stock_after:0,stock_before:0,unit:""}):b.forEach(x=>{h.push({item_key:g,item_label:y,quantity:x.quantity,stock_after:x.stock_after,stock_before:x.quantity+x.stock_after,unit:x.unit})})}),!a)return r.jsxs(N0,{children:[r.jsx(av,{children:r.jsx(O0,{children:"تقرير يومي لأصناف مخزن اللحوم"})}),r.jsx(O0,{children:"لم يتم تمرير التاريخ. الرجاء اختيار تاريخ من صفحة الأصناف."})]});if(s)return r.jsx(Ae,{});if(c)return r.jsxs(N0,{children:["حدث خطأ: ",c.message]});const p=new Date(a).toLocaleDateString("ar-EG",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"});return r.jsxs(N0,{children:[r.jsx(Bq,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(av,{children:r.jsxs(O0,{children:["تقرير صرف يومي لأصناف مخزن اللحوم — ",p]})}),r.jsx(qq,{children:r.jsxs(Nq,{children:[r.jsx(Uq,{children:r.jsxs("tr",{children:[r.jsx(Qo,{children:"م"}),r.jsx(Qo,{children:"اسم الصنف"}),r.jsx(Qo,{children:"الرصيد قبل الصرف"}),r.jsx(Qo,{children:"الكمية المصروفة"}),r.jsx(Qo,{children:"الرصيد بعد الصرف"}),r.jsx(Qo,{children:"الوحدة"})]})}),r.jsx(Fq,{children:h.map((g,y)=>r.jsxs("tr",{children:[r.jsx(Go,{children:y+1}),r.jsx(Go,{children:g.item_label}),r.jsx(Go,{children:M0(Number(g.stock_before))||"-"}),r.jsx(Go,{children:M0(Number(g.quantity))||"-"}),r.jsx(Go,{children:M0(Number(g.stock_after))||"-"}),r.jsx(Go,{children:g.unit||"-"})]},`${g.item_key}-${g.unit||"no-unit"}-${y}`))})]})}),r.jsx(Oq,{children:r.jsx(Mq,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}async function Pq(e){const a=await fetch(`/api/meat_incoming_items?item_name=${encodeURIComponent(e)}&order_by=date&order=desc&limit=31`);if(!a.ok)throw new Error("فشل جلب الواردات");const o=await a.json();return Array.isArray(o)?o:[]}async function Hq(e){const a=await fetch("/api/meat_incoming_items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const c=await a.json().catch(()=>null);throw new Error(c?.error||"فشل إضافة الوارد")}const o=await a.json();await Z1(e.item_name,e.unit??""),await ff(e.item_name,Number(e.quantity||0),e.unit??null);const s=Number(e.quantity||0)+Number(e.mission_meals||0);return s!==0&&await fetch("/api/meat_incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e.item_name,date:e.date,diff:s})}),o}async function Qq({id:e,payload:a}){const o=await fetch(`/api/meat_incoming_items/${encodeURIComponent(e)}`);if(!o.ok){const x=await o.json().catch(()=>null);throw new Error(x?.error||"السجل المطلوب غير موجود")}const s=await o.json(),c=await fetch(`/api/meat_incoming_items/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!c.ok){const x=await c.json().catch(()=>null);throw new Error(x?.error||"فشل تحديث الوارد")}const u=await c.json(),h=Number(s.quantity||0),p=Number(a.quantity??s.quantity??0),g=p-h,y=s.date,b=a.date??s.date;return(g!==0||(a.unit??s.unit)!==s.unit)&&await ff(a.item_name||s.item_name,g,a.unit??s.unit??null),h===p&&y===b||(h!==0&&await fetch("/api/meat_incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:y,diff:-h})}),p!==0&&await fetch("/api/meat_incoming_items/adjust-withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:b,diff:p})})),u}async function Gq(e){const a=await fetch(`/api/meat_incoming_items/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}function Vq(e){return je({queryKey:["meat-incoming-items",e],queryFn:()=>Pq(e),enabled:!!e,onError:a=>{console.error("useIncomingItems error:",a),W.error("فشل جلب الوارد")}})}function Yq(){const e=Te();return Re({mutationFn:Hq,onSuccess:()=>{W.success("تمت إضافة الوارد بنجاح"),e.invalidateQueries()},onError:a=>{console.error("useAddIncomingItem error:",a),W.error("فشل إضافة الوارد")}})}function Iq(){const e=Te();return Re({mutationFn:Qq,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error("useUpdateIncomingItem error:",a),W.error("حدث خطأ")}})}function Kq(){const e=Te();return Re({mutationFn:Gq,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}const Xq={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},Zq=f.div`
  background-color: var(--color-grey-50);
  padding: 4rem 2rem;
  direction: rtl;
  min-width: 120rem;
  @media print {
    min-width: auto !important;
  }
`,Jq=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,Wq=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,eN=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,tN=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,mn=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,rN=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Ir=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,nN=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,aN=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,ki=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,$i=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Vo=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,iN=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,xf=f.button`
  background: ${({bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  height: fit-content;
  margin-top: auto;
`,oN=f(xf)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,sN=f(xf)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,lN=f(xf)`
  background: var(--color-brand-700);
  margin-bottom: 1rem;
`,cN=f.div`
  display: flex;
  align-items: center;
`,dN=(e,a=4)=>Number(Number(e).toFixed(a));function uN(){const{itemName:e}=us(),[a,o]=S.useState(!1),[s,c]=S.useState(null),{data:u,isPending:h}=Vq(e),{data:p,isPending:g}=hs("meat_incoming_items",e),y=Yq(),b=Iq(),x=Kq(),{register:j,handleSubmit:_,reset:C,setValue:$}=Ut();let D=!0;if(e==="frozen-vegetables"&&(D=!1),h||g)return r.jsx(Ae,{});function A(z){if(z.quantity<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");s?b.mutate({id:s.id,payload:{...z,expiry_date:z.expiry_date||null,vet_check:z.vet_check||null,item_name:e}},{onSuccess:()=>{C(),c(null),o(!1),W.success("تم تعديل الوارد بنجاح")}}):y.mutate({...z,expiry_date:z.expiry_date||null,vet_check:z.vet_check||null,permit_number:z.permit_number||0,item_name:e},{onSuccess:()=>{C(),o(!1)}})}function M(z){c(z),$("date",z.date),$("permit_number",z.permit_number),$("receiver_name",z.receiver_name),$("quantity",z.quantity),$("unit",z.unit),$("expiry_date",z.expiry_date),$("vet_check",z.vet_check||""),o(!0)}function O(){s&&b.mutate({id:s.id,payload:{...s,quantity:0,item_name:e}},{onSuccess:()=>{x.mutate(s.id,{onSuccess:()=>{C(),c(null),o(!1),W.success("تم الحذف بنجاح")}})}})}return r.jsxs(Zq,{children:[r.jsxs(Jq,{children:["الوارد - ",Xq[e]||e]}),r.jsx(cN,{children:r.jsx(lN,{onClick:()=>{a?(o(!1),c(null),C()):o(!0)},children:a?"✖️ إغلاق":"➕ إضافة وارد"})}),a&&r.jsx(nN,{children:r.jsxs(aN,{onSubmit:_(A),children:[r.jsxs(ki,{children:[r.jsx($i,{children:"التاريخ"}),r.jsx(Vo,{type:"date",defaultValue:new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),max:new Date().toISOString().split("T")[0],...j("date",{required:!0})})]}),r.jsxs(ki,{children:[r.jsx($i,{children:"رقم الإذن"}),r.jsx(Vo,{type:"number",...j("permit_number")})]}),r.jsxs(ki,{children:[r.jsx($i,{children:"اسم المستلم"}),r.jsx(Vo,{type:"text",...j("receiver_name",{required:!0})})]}),r.jsxs(ki,{children:[r.jsx($i,{children:"الكمية المضافة"}),r.jsx(Vo,{type:"number",step:"any",...j("quantity",{required:!0})})]}),r.jsxs(ki,{children:[r.jsx($i,{children:"الوحدة"}),r.jsxs(iN,{defaultValue:!s&&p?.unit,...j("unit",{required:!0}),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"كيلوجرام",children:"كيلوجرام"}),r.jsx("option",{value:"مليجرام",children:"مليجرام"}),r.jsx("option",{value:"لتر",children:"لتر"}),r.jsx("option",{value:"عدد",children:"عدد"}),r.jsx("option",{value:"قطعة",children:"قطعة"}),r.jsx("option",{value:"علبة",children:"علبة"}),r.jsx("option",{value:"زجاجة",children:"زجاجة"}),r.jsx("option",{value:"فتلة",children:"فتلة"})]})]}),r.jsxs(ki,{children:[r.jsx($i,{children:"صلاحية الصنف"}),r.jsx(Vo,{defaultValue:!s&&p?.expiry_date,type:"date",...j("expiry_date")})]}),D&&r.jsxs(ki,{children:[r.jsx($i,{children:"كشف الدكتور البيطري"}),r.jsx(Vo,{type:"date",...j("vet_check")})]}),r.jsx(xf,{type:"submit",disabled:y.isPending||b.isPending,children:s?b.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":y.isPending?"جارٍ الإضافة...":"✔️ إضافة"}),s&&r.jsx(sN,{type:"button",disabled:b.isPending,onClick:O,children:b.isPending?"جارٍ الحذف...":"حذف"})]})}),r.jsx(Wq,{children:r.jsxs(eN,{children:[r.jsx(tN,{children:r.jsxs("tr",{children:[r.jsx(mn,{children:"م"}),r.jsx(mn,{children:"اليوم"}),r.jsx(mn,{children:"التاريخ"}),r.jsx(mn,{children:"رقم الإذن"}),r.jsx(mn,{children:"اسم المستلم"}),r.jsx(mn,{children:"الكمية المضافة"}),r.jsx(mn,{children:"الوحدة"}),r.jsx(mn,{children:"صلاحية الصنف"}),D&&r.jsx(mn,{children:"كشف الدكتور البيطري"}),r.jsx(mn,{children:"إجراءات"})]})}),r.jsx(rN,{children:u?.length===0?r.jsx("tr",{children:r.jsx(Ir,{colSpan:"10",children:"لا يوجد بيانات"})}):u?.map((z,I)=>{const F=z.expiry_date?(new Date(z.expiry_date)-new Date)/864e5:null,ie=F!==null&&F<=60;return r.jsxs("tr",{children:[r.jsx(Ir,{children:I+1}),r.jsx(Ir,{children:new Date(z.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(Ir,{children:z.date}),r.jsx(Ir,{children:z.permit_number||"—"}),r.jsx(Ir,{children:z.receiver_name||"—"}),r.jsx(Ir,{children:z.quantity!=null?dN(Number(z.quantity)):"—"}),r.jsx(Ir,{children:z.unit||"—"}),r.jsxs(Ir,{style:{color:ie?"red":"inherit",fontWeight:ie?700:400},children:[z.expiry_date||"—"," ",ie&&"🚨"]}),D&&r.jsx(Ir,{children:z.vet_check||"—"}),r.jsx(Ir,{children:r.jsx(oN,{onClick:()=>M(z),children:"✏️"})})]},z.id)})})]})})]})}const fN=f.div`
  padding: 3rem 4rem;
  direction: rtl;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,mN=f.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin-bottom: 3rem;
`,hN=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  gap: 3rem;
  justify-items: center;

  @media (max-width: 65rem) {
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(3) {
      grid-column: span 2;
      width: 70%;
    }
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;

    & > div:nth-child(3) {
      grid-column: span 1;
      width: 100%;
    }
  }
`,pN=f.div`
  background-color: ${({color:e})=>e||"var(--color-grey-0)"};
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: var(--color-grey-100);
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 40px;
    height: 40px;
  }
`,gN=f.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`,iv=f.div`
  background: var(--color-grey-0);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.3s ease;
  margin: auto;
`,ov=f.div`
  background-color: var(--color-brand-700);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`,sv=f.div`
  max-height: ${({open:e})=>e?"300px":"0"};
  opacity: ${({open:e})=>e?1:0};
  padding: ${({open:e})=>e?"1.6rem":"0 1.6rem"};
  border-top: ${({open:e})=>e?"1px solid var(--color-grey-200)":"none"};
  overflow: hidden;
  transition: all 0.35s ease;
`,tu=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`,Tl=f.label`
  font-size: 1.3rem;
  color: var(--color-grey-700);
`,ru=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-300);
  font-size: 1.2rem;
`,lv=f.button`
  margin: auto;
  margin-top: 3.2rem;
  width: 70%;
  background: var(--color-brand-600);
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,cv=[{name_ar:"لحوم",name_en:"meat",icon:x6,color:"#ca1e1e"},{name_ar:"دواجن",name_en:"chicken",icon:p6,color:"#D2691E"},{name_ar:"خضار مجمد",name_en:"frozen-vegetables",icon:y6,color:"#1E90FF"}];function yN(){const e=ur(),[a,o]=S.useState(""),[s,c]=S.useState(""),[u,h]=S.useState(null),[p,g]=S.useState({item:"",from:"",to:""}),y=b=>h(u===b?null:b);return r.jsxs(fN,{children:[r.jsx(mN,{children:"الأصناف الواردة - مخزن اللحوم"}),r.jsx(hN,{children:cv.map(({name_ar:b,name_en:x,icon:j,color:_})=>r.jsxs(pN,{color:_,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/meat-incoming/${x}`),children:[r.jsx(j,{}),r.jsx("span",{children:b})]},x))}),r.jsxs(gN,{children:[r.jsxs(iv,{children:[r.jsx(ov,{onClick:()=>y("single-range"),children:"تقرير شهري لكل صنف"}),r.jsxs(sv,{open:u==="single-range",children:[r.jsxs(tu,{children:[r.jsx(Tl,{children:"اختر الصنف"}),r.jsxs("select",{value:p.item||"",onChange:b=>g({...p,item:b.target.value}),style:{padding:"0.6rem 0.8rem",borderRadius:"6px",border:"1px solid var(--color-grey-300)",fontSize:"1.2rem",backgroundColor:"var(--color-grey-0)"},children:[r.jsx("option",{value:"",children:"-- اختر --"}),cv.map(b=>r.jsx("option",{value:b.name_en,children:b.name_ar},b.name_en))]}),r.jsx(Tl,{children:"من"}),r.jsx(ru,{type:"date",value:p.from||"",onChange:b=>g({...p,from:b.target.value})}),r.jsx(Tl,{children:"إلى"}),r.jsx(ru,{type:"date",value:p.to||"",onChange:b=>g({...p,to:b.target.value})})]}),r.jsx(tu,{children:r.jsx(lv,{disabled:!p.item||!p.from||!p.to||p.from>p.to,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/meat-incoming/reports/range-single?item=${encodeURIComponent(p.item)}&from=${encodeURIComponent(p.from)}&to=${encodeURIComponent(p.to)}`),children:"عرض التقرير"})})]})]}),r.jsxs(iv,{children:[r.jsx(ov,{onClick:()=>y("range"),children:"تقرير شهري لجميع الأصناف الواردة"}),r.jsxs(sv,{open:u==="range",children:[r.jsxs(tu,{children:[r.jsx(Tl,{children:"من"}),r.jsx(ru,{type:"date",value:a,onChange:b=>o(b.target.value)}),r.jsx(Tl,{children:"إلى"}),r.jsx(ru,{type:"date",value:s,onChange:b=>c(b.target.value)})]}),r.jsx(tu,{children:r.jsx(lv,{disabled:!a||!s||a>s,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/meat-incoming/reports/range?from=${encodeURIComponent(a)}&to=${encodeURIComponent(s)}`),children:"عرض التقرير"})})]})]})]})]})}const bN={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},B0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,dv=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,U0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,xN=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,vN=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,nu=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
  color: white;
  @media print {
    color: black;
  }
`,au=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,jN=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,wN=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,_N=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,SN=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,kN=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,$N=(e,a=4)=>Number(Number(e).toFixed(a));function CN(){const[e]=nr(),a=e.get("from"),o=e.get("to"),{data:s,isPending:c,error:u}=je({queryKey:["meat-incoming-range-report",a,o],queryFn:()=>Dq(a,o),enabled:!!a&&!!o}),h={};s&&s.forEach(b=>{const x=`${b.item_name}||${b.unit||""}`,j=Number(b.quantity)||0;h[x]||(h[x]={item_name:b.item_name,unit:b.unit||"",quantity:0}),h[x].quantity+=j});const p=[];if(Object.entries(bN).forEach(([b,x])=>{const j=Object.values(h).filter(_=>_.item_name===b);j.length===0?p.push({item_key:b,item_label:x,quantity:0,unit:""}):j.forEach(_=>{p.push({item_key:b,item_label:x,quantity:_.quantity,unit:_.unit})})}),!a||!o)return r.jsxs(B0,{children:[r.jsx(dv,{children:r.jsx(U0,{children:"تقرير شهري للوارد"})}),r.jsx(U0,{children:"يجب تحديد فترة البداية والنهاية من صفحة الأصناف."})]});if(c)return r.jsx(Ae,{});if(u)return r.jsxs(B0,{children:["حدث خطأ أثناء تحميل البيانات: ",u.message]});const g=new Date(a).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(B0,{children:[r.jsx(_N,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(dv,{children:r.jsxs(U0,{children:["تقرير الوارد لأصناف مخزن اللحوم من ",g," إلى ",y]})}),r.jsx(xN,{children:r.jsxs(vN,{children:[r.jsx(SN,{children:r.jsxs("tr",{children:[r.jsx(nu,{children:"م"}),r.jsx(nu,{children:"اسم الصنف"}),r.jsx(nu,{children:"الكمية الواردة"}),r.jsx(nu,{children:"الوحدة"})]})}),r.jsx(kN,{children:p.map((b,x)=>r.jsxs("tr",{children:[r.jsx(au,{children:x+1}),r.jsx(au,{children:b.item_label}),r.jsx(au,{children:$N(Number(b.quantity))}),r.jsx(au,{children:b.unit||"-"})]},`${b.item_key}-${b.unit||"no-unit"}-${x}`))})]})}),r.jsx(jN,{children:r.jsx(wN,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const F0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,EN=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,uv=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,TN=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,DN=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,qa=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,wr=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,RN=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,zN=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,AN=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,qN=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,NN=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,ON={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},fv=(e,a=4)=>Number(Number(e).toFixed(a));function MN(){const[e]=nr(),a=e.get("item"),o=e.get("from"),s=e.get("to");let c=!0;a==="frozen-vegetables"&&(c=!1);const{data:u,isPending:h,error:p}=je({queryKey:["meat-item-range-single",a,o,s],queryFn:()=>Rq(a,o,s),enabled:!!a&&!!o&&!!s});if(!a||!o||!s)return r.jsx(F0,{children:r.jsx(uv,{children:"يرجى اختيار الصنف والفترة أولاً"})});if(h)return r.jsx(Ae,{});if(p)return r.jsxs(F0,{children:["حدث خطأ: ",p.message]});const g=u?.reduce((j,_)=>j+(Number(_.quantity)||0),0),y=u[0]?.unit||"-",b=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),x=new Date(s).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(F0,{children:[r.jsx(NN,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(EN,{children:r.jsxs(uv,{children:["تقرير وارد - ",ON[a]||a,"- مخزن اللحوم من ",b," إلى"," ",x]})}),r.jsx(TN,{children:r.jsxs(DN,{children:[r.jsx(RN,{children:r.jsxs("tr",{children:[r.jsx(qa,{children:"م"}),r.jsx(qa,{children:"اليوم"}),r.jsx(qa,{children:"التاريخ"}),r.jsx(qa,{children:"اسم المستلم"}),r.jsx(qa,{children:"الكمية الواردة"}),r.jsx(qa,{children:"الوحدة"}),c&&r.jsx(qa,{children:"كشف الدكتور البيطري"}),r.jsx(qa,{children:"رقم الإذن"})]})}),r.jsxs(zN,{children:[u?.map((j,_)=>r.jsxs("tr",{children:[r.jsx(wr,{children:_+1}),r.jsx(wr,{children:Intl.DateTimeFormat("ar-EG",{weekday:"long"}).format(new Date(j.date+"T00:00:00"))}),r.jsx(wr,{children:j.date}),r.jsx(wr,{children:j.receiver_name}),r.jsx(wr,{children:fv(Number(j.quantity))}),r.jsx(wr,{children:j.unit||"-"}),c&&r.jsx(wr,{children:j.vet_check||"-"}),r.jsx(wr,{children:j.permit_number||"-"})]},_)),r.jsxs("tr",{children:[r.jsx(wr,{colSpan:4,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"الإجمالي"}),r.jsx(wr,{colSpan:1,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:fv(Number(g))}),r.jsx(wr,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:y}),c&&r.jsx(wr,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"}),r.jsx(wr,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"-"})]})]})]})}),r.jsx(AN,{children:r.jsx(qN,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const BN=f.div`
  padding: 3rem 4rem;
  direction: rtl;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,UN=f.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-brand-700);
  margin-bottom: 3rem;
`,FN=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  gap: 3rem;
  justify-items: center;

  @media (max-width: 65rem) {
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(3) {
      grid-column: span 2;
      width: 70%;
    }
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;

    & > div:nth-child(3) {
      grid-column: span 1;
      width: 100%;
    }
  }
`,LN=f.div`
  background-color: ${({color:e})=>e||"var(--color-grey-0)"};
  border-radius: 1.4rem;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: var(--color-grey-100);
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 5rem;
    height: 5rem;
  }
`,PN=f.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem;
`,L0=f.div`
  background: var(--color-grey-0);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  min-width: 40rem;
  overflow: hidden;
  transition: all 0.3s ease;
`,P0=f.div`
  background-color: var(--color-brand-700);
  color: #fff;
  text-align: center;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-brand-600);
  }
`,H0=f.div`
  max-height: ${({open:e})=>e?"300px":"0"};
  opacity: ${({open:e})=>e?1:0};
  padding: ${({open:e})=>e?"1.6rem":"0 1.6rem"};
  border-top: ${({open:e})=>e?"1px solid var(--color-grey-200)":"none"};
  overflow: hidden;
  transition: all 0.35s ease;
`,Yo=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  flex-wrap: wrap;
`,Io=f.label`
  font-size: 1.3rem;
  color: var(--color-grey-700);
`,Dl=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--color-grey-300);
  font-size: 1.2rem;
`,Q0=f.button`
  margin: auto;
  margin-top: 3.2rem;
  width: 70%;
  background: var(--color-brand-600);
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-brand-700);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,mv=[{name_ar:"لحوم",name_en:"meat",icon:x6,color:"#ca1e1e"},{name_ar:"دواجن",name_en:"chicken",icon:p6,color:"#D2691E"},{name_ar:"خضار مجمد",name_en:"frozen-vegetables",icon:y6,color:"#1E90FF"}];function HN(){const e=ur(),[a,o]=S.useState(""),[s,c]=S.useState(""),[u,h]=S.useState(""),[p,g]=S.useState(null),[y,b]=S.useState({item:"",from:"",to:""}),x=j=>g(p===j?null:j);return r.jsxs(BN,{children:[r.jsx(UN,{children:"أصناف الصرف - مخزن اللحوم"}),r.jsx(FN,{children:mv.map(({name_ar:j,name_en:_,icon:C,color:$})=>r.jsxs(LN,{color:$,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/meat-items/${_}`),children:[r.jsx(C,{}),r.jsx("span",{children:j})]},_))}),r.jsxs(PN,{children:[r.jsxs(L0,{children:[r.jsx(P0,{onClick:()=>x("daily"),children:"تقرير يومي لجميع الأصناف"}),r.jsxs(H0,{open:p==="daily",children:[r.jsxs(Yo,{children:[r.jsx(Io,{children:"اختر التاريخ"}),r.jsx(Dl,{type:"date",value:a,onChange:j=>o(j.target.value)})]}),r.jsx(Yo,{children:r.jsx(Q0,{disabled:!a,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/reports/daily?date=${encodeURIComponent(a)}`),children:"عرض التقرير"})})]})]}),r.jsxs(L0,{children:[r.jsx(P0,{onClick:()=>x("range"),children:"تقرير شهري لجميع الأصناف"}),r.jsxs(H0,{open:p==="range",children:[r.jsxs(Yo,{children:[r.jsx(Io,{children:"من"}),r.jsx(Dl,{type:"date",value:s,onChange:j=>c(j.target.value)}),r.jsx(Io,{children:"إلى"}),r.jsx(Dl,{type:"date",value:u,onChange:j=>h(j.target.value)})]}),r.jsx(Yo,{children:r.jsx(Q0,{disabled:!s||!u||s>u,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/reports/range?from=${encodeURIComponent(s)}&to=${encodeURIComponent(u)}`),children:"عرض التقرير"})})]})]}),r.jsxs(L0,{children:[r.jsx(P0,{onClick:()=>x("single-range"),children:"تقرير شهري لكل صنف"}),r.jsxs(H0,{open:p==="single-range",children:[r.jsxs(Yo,{children:[r.jsx(Io,{children:"اختر الصنف"}),r.jsxs("select",{value:y.item||"",onChange:j=>b({...y,item:j.target.value}),style:{padding:"0.6rem 0.8rem",borderRadius:"6px",border:"1px solid var(--color-grey-300)",fontSize:"1.2rem",backgroundColor:"var(--color-grey-0)"},children:[r.jsx("option",{value:"",children:"-- اختر --"}),mv.map(j=>r.jsx("option",{value:j.name_en,children:j.name_ar},j.name_en))]}),r.jsx(Io,{children:"من"}),r.jsx(Dl,{type:"date",value:y.from||"",onChange:j=>b({...y,from:j.target.value})}),r.jsx(Io,{children:"إلى"}),r.jsx(Dl,{type:"date",value:y.to||"",onChange:j=>b({...y,to:j.target.value})})]}),r.jsx(Yo,{children:r.jsx(Q0,{disabled:!y.item||!y.from||!y.to||y.from>y.to,onClick:()=>e(`/rations/stores/azim-meats/meat-meals/reports/item-range?item=${encodeURIComponent(y.item)}&from=${encodeURIComponent(y.from)}&to=${encodeURIComponent(y.to)}`),children:"عرض التقرير"})})]})]})]})]})}async function QN(e){const a=await fetch(`/api/meat_items_withdrawals?item_name=${encodeURIComponent(e)}&order_by=date&order=desc&limit=31`);if(!a.ok){const s=await a.json().catch(()=>null);throw new Error(s?.error||"فشل جلب السحوبات")}const o=await a.json();return Array.isArray(o)?o:[]}async function GN(e){const a=await fetch("/api/meat_items_withdrawals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok){const g=await a.json().catch(()=>null);throw new Error(g?.error||"فشل إضافة السحب")}const o=await a.json();await Z1(e.item_name,e.unit??""),await ff(e.item_name,-Number(e.quantity||0),e.unit??null);const s=Number(e.quantity||0),c=await fetch(`/api/meat_items_withdrawals/prev?item_name=${encodeURIComponent(e.item_name)}&date=${e.date}&id=${o.id}`),u=c.ok?await c.json():null,h=await fetch(`/api/meat_items_withdrawals/next?item_name=${encodeURIComponent(e.item_name)}&date=${e.date}&id=${o.id}`),p=h.ok?await h.json():null;if(!p)return o;if(u){const y=Number(u?.stock_after??0)-s;await fetch(`/api/meat_items_withdrawals/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_after:y})})}else{const g=Number(p?.stock_after??0),y=Number(p?.quantity??0),b=g+y-s;await fetch(`/api/meat_items_withdrawals/${o.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_after:b})})}return await fetch("/api/meat_items_withdrawals/adjust-next",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:e.item_name,date:e.date,id:o.id,diff:s})}),o}async function VN({id:e,payload:a}){const o=await fetch(`/api/meat_items_withdrawals/${encodeURIComponent(e)}`);if(!o.ok){const x=await o.json().catch(()=>null);throw new Error(x?.error||"سجل الصرف المطلوب غير موجود")}const s=await o.json(),c=Number(s.quantity||0),u=Number(a.quantity??c),h=c-u,p={...a,stock_after:Number(s.stock_after||0)+h},g=await fetch(`/api/meat_items_withdrawals/${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!g.ok){const x=await g.json().catch(()=>null);throw new Error(x?.error||"فشل تحديث السحب")}const y=await g.json();h!==0&&await ff(a.item_name||s.item_name,h,a.unit??s.unit??null);const b=u-c;return b!==0&&await fetch("/api/meat_items_withdrawals/adjust-next",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_name:s.item_name,date:s.date,id:s.id,diff:b})}),y}async function YN(e){const a=await fetch(`/api/meat_items_withdrawals/${encodeURIComponent(e)}`,{method:"DELETE"});if(!a.ok){const o=await a.json().catch(()=>null);throw new Error(o?.error||"فشل الحذف")}return!0}function IN(e){return je({queryKey:["meat-withdrawals",e],queryFn:()=>QN(e),enabled:!!e,onError:a=>{console.error("useWithdrawals error:",a),W.error("فشل تحميل سجل الصرف")}})}function KN(e){return je({queryKey:["meat-current-stock",e],queryFn:()=>OC(e),enabled:!!e,onError:a=>{console.error("useCurrentStock error:",a),W.error("فشل تحميل المخزون الحالي")}})}function XN(){const e=Te();return Re({mutationFn:GN,onSuccess:(a,o)=>{W.success("تم إضافة الصرف بنجاح"),e.invalidateQueries({queryKey:["meat-withdrawals",o.item_name]}),e.invalidateQueries({queryKey:["meat-current-stock",o.item_name]})},onError:()=>W.error("فشل إضافة الصرف")})}function ZN(){const e=Te();return Re({mutationFn:VN,onSuccess:(a,{payload:o})=>{const s=o.item_name;e.invalidateQueries({queryKey:["meat-withdrawals",s]}),e.invalidateQueries({queryKey:["meat-current-stock",s]})},onError:()=>W.error("حدث خطأ")})}function JN(){const e=Te();return Re({mutationFn:YN,onSuccess:()=>{e.invalidateQueries()},onError:a=>{console.error(a),W.error("حدث خطأ")}})}const WN=f.div`
  background-color: var(--color-grey-50);
  padding: 4rem 2rem;
  direction: rtl;
  min-width: 105rem;
  @media print {
    min-width: auto !important;
  }
`,eO=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,tO=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,rO=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.4rem;
`,nO=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,hn=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,aO=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }
  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Kr=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,iO=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
`,oO=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Ko=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Xo=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,iu=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,hv=f.select`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
`,Il=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`,sO=f(Il)`
  color: #000;
`,lO=f(Il)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,cO=f(Il)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,dO={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"};function uO(e,a,o,s,c){let u=20;e==="chicken"&&(u=11);let h=c?Du(Number(c)):0;return a===s?.date&&(h=0),{date:a,quantity:h,net_weight:u,expiry_date:o?.expiry_date||s?.expiry_date||"",ration_type:"صيفاً - شتاءًا - رمضان",unit:o?.unit||s?.unit||""}}function fO(e){if(!e)return null;const a=new Date(e);return a.setDate(a.getDate()+1),a.toISOString().split("T")[0]}const Du=(e,a=4)=>Number(Number(e).toFixed(a));function mO(){const{itemName:e}=us(),[a,o]=S.useState(!1),[s,c]=S.useState(null),{data:u,isPending:h}=IN(e),{data:p,isPending:g}=KN(e),{data:y,isPending:b}=hs("meat_incoming_items",e),{data:x,isPending2:j}=I1("meat_items_withdrawals",e),{data:_,isPending:C}=Ya(),$=XN(),D=ZN(),A=JN(),{data:M,isPending:O}=df(_?.id),{register:z,handleSubmit:I,reset:R}=Ut(),ie=`${e.replace(/-/g,"_")}_total`,K=M?Number(M[ie]):0,ue=s?Number(s.quantity||0):0,H=Number(p?.current_quantity??0)+ue;S.useEffect(()=>{s&&R({date:s.date,quantity:s.quantity,net_weight:s.net_weight,expiry_date:s.expiry_date||"",ration_type:s.ration_type||"",unit:s.unit||""})},[s,R]),S.useEffect(()=>{a&&!s&&R(uO(e,_?.date,y,x,K))},[a,s,e,y,x,R,K,_?.date]);async function oe(N){const ne=fO(N.date);let pe=0;!s&&ne&&(pe=(await lf("meat_incoming_items",e,ne))?.reduce((Z,se)=>se.quantity+Z,0)||0);const te={item_name:e,date:N.date,quantity:Number(N.quantity),stock_after:Number(p?.current_quantity)-Number(N.quantity)-Number(pe||0),net_weight:Number(N.net_weight||0),expiry_date:N.expiry_date||null,ration_type:N.ration_type||null,unit:N.unit};if(te.quantity<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");if(s){const k=Number(p?.current_quantity)+ue;if(te.quantity>k)return W.error("لايوجد رصيد كافي");D.mutate({id:s.id,payload:{...te}},{onSuccess:()=>{R(),c(null),o(!1),W.success("تم تعديل الصرف")}})}else{if(te.quantity>(p?.current_quantity??0)||te.stock_after<0)return W.error("لايوجد رصيد كافي");$.mutate(te,{onSuccess:()=>{R(),o(!1)}})}}function ce(N){c(N),o(!0)}function Y(){s&&D.mutate({id:s.id,payload:{...s,quantity:0,item_name:e}},{onSuccess:()=>{A.mutate(s.id,{onSuccess:()=>{R(),c(null),o(!1),W.success("تم الحذف بنجاح")}})}})}return h||C||g||b||j||O?r.jsx(Ae,{}):r.jsxs(WN,{children:[r.jsxs(eO,{children:["الصرف - ",dO[e]||e]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"1rem",marginBottom:"1.5rem"},children:[r.jsx(Il,{onClick:()=>{a?(o(!1),c(null),R()):o(!0)},children:a?"✖️ إغلاق":"➕ إضافة / تأكيد صرف"}),r.jsx(sO,{$bg:"#f1ce08",children:`الرصيد الحالي : ${Du(Number(H))}  ${p?.unit??""}`})]}),a&&r.jsx(iO,{children:r.jsxs(oO,{onSubmit:I(oe),children:[r.jsxs(Ko,{children:[r.jsx(Xo,{children:"التاريخ"}),r.jsx(iu,{disabled:s,type:"date",max:new Date().toISOString().split("T")[0],...z("date",{required:!0})})]}),r.jsxs(Ko,{children:[r.jsx(Xo,{children:"الكمية المصروفة"}),r.jsx(iu,{type:"number",step:"any",...z("quantity",{required:!0})})]}),r.jsxs(Ko,{children:[r.jsx(Xo,{children:"الوزن الصافي"}),r.jsx(iu,{type:"number",step:"any",...z("net_weight")})]}),r.jsxs(Ko,{children:[r.jsx(Xo,{children:"صلاحية الصنف"}),r.jsx(iu,{type:"date",...z("expiry_date")})]}),r.jsxs(Ko,{children:[r.jsx(Xo,{children:"الوحدة"}),r.jsxs(hv,{...z("unit",{required:!0}),children:[r.jsx("option",{value:"",children:"اختر الوحدة"}),r.jsx("option",{value:"كيلوجرام",children:"بالكيلوجرام"}),r.jsx("option",{value:"مليجرام",children:"بالمليجرام"}),r.jsx("option",{value:"عدد",children:"بالعدد"}),r.jsx("option",{value:"لتر",children:"باللتر"}),r.jsx("option",{value:"قطعة",children:"بالقطعة"}),r.jsx("option",{value:"علبة",children:"بالعلبة"}),r.jsx("option",{value:"زجاجة",children:"بالزجاجة"}),r.jsx("option",{value:"فتلة",children:"بالفتلة"})]})]}),r.jsxs(Ko,{children:[r.jsx(Xo,{children:"مقرر الصنف"}),r.jsxs(hv,{...z("ration_type"),children:[r.jsx("option",{value:"",children:"اختر"}),r.jsx("option",{value:"صيفاً",children:"صيفاً"}),r.jsx("option",{value:"شتاءًا",children:"شتاءًا"}),r.jsx("option",{value:"رمضان",children:"رمضان"}),r.jsx("option",{value:"صيفاً - شتاءًا",children:"صيفاً - شتاءًا"}),r.jsx("option",{value:"صيفاً - شتاءًا - رمضان",children:"صيفاً - شتاءًا - رمضان"}),r.jsx("option",{value:"وجبات جافة",children:"وجبات جافة"})]})]}),r.jsxs("div",{style:{flexBasis:"100%",display:"flex",gap:"1rem"},children:[r.jsx(Il,{type:"submit",disabled:$.isPending||D.isPending,children:s?D.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":$.isPending?"جارٍ الإضافة / التأكيد...":"✔️ إضافة / تأكيد"}),s&&r.jsx(cO,{type:"button",disabled:D.isPending,onClick:Y,children:D.isPending?"جارٍ الحذف...":"حذف"})]})]})}),r.jsx(tO,{children:r.jsxs(rO,{children:[r.jsx(nO,{children:r.jsxs("tr",{children:[r.jsx(hn,{children:"م"}),r.jsx(hn,{children:"اليوم"}),r.jsx(hn,{children:"التاريخ"}),r.jsx(hn,{children:"الكمية المصروفة"}),r.jsx(hn,{children:"الرصيد بعد الصرف"}),r.jsx(hn,{children:"الوزن الصافي"}),r.jsx(hn,{children:"الوحدة"}),r.jsx(hn,{children:"صلاحية الصنف"}),r.jsx(hn,{children:"مقرر الصنف"}),r.jsx(hn,{children:"إجراءات"})]})}),r.jsx(aO,{children:u?.length===0?r.jsx("tr",{children:r.jsx(Kr,{colSpan:"10",children:"لا يوجد بيانات"})}):u?.map((N,ne)=>{const te=N.expiry_date?(new Date(N.expiry_date)-new Date)/864e5:null,k=te!==null&&te<=60;return r.jsxs("tr",{children:[r.jsx(Kr,{children:ne+1}),r.jsx(Kr,{children:new Date(N.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(Kr,{children:N.date}),r.jsx(Kr,{children:N.quantity!=null?Du(Number(N.quantity)):"—"}),r.jsx(Kr,{children:N.stock_after!=null?Du(Number(N.stock_after)):"—"}),r.jsx(Kr,{children:N.net_weight||"—"}),r.jsx(Kr,{children:N.unit||"—"}),r.jsxs(Kr,{style:{color:k?"red":"inherit",fontWeight:k?700:400},children:[N.expiry_date||"-"," ",k&&"🚨"]}),r.jsx(Kr,{children:N.ration_type??"—"}),r.jsx(Kr,{children:r.jsx(lO,{onClick:()=>ce(N),children:"✏️"})})]},N.id)})})]})})]})}const hO=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
  direction: rtl;
`,pO=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,gO=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,yO=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,bO=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,xO=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function vO(){const e=[{title:"الأصناف",path:"meat-items"},{title:"الأرصدة الحالية",path:"meat-stock"},{title:"الوارد",path:"meat-incoming"}];return r.jsxs(hO,{children:[r.jsx(pO,{children:"مخزن اللحوم"}),r.jsx(gO,{children:e.map(a=>r.jsx(yO,{to:`/rations/stores/azim-meats/meat-meals/${a.path}`,children:r.jsx(bO,{children:r.jsx(xO,{children:a.title})})},a.path))})]})}const jO={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},G0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,pv=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,V0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,wO=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,_O=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,ou=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,su=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,SO=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,kO=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,$O=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,CO=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,EO=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,TO=(e,a=4)=>Number(Number(e).toFixed(a));function DO(){const[e]=nr(),a=e.get("from"),o=e.get("to"),{data:s,isPending:c,error:u}=je({queryKey:["meat-range-report",a,o],queryFn:()=>Tq(a,o),enabled:!!a&&!!o}),h={};s&&s.forEach(b=>{const x=`${b.item_name}||${b.unit||""}`,j=Number(b.quantity)||0;h[x]||(h[x]={item_name:b.item_name,unit:b.unit||"",quantity:0}),h[x].quantity+=j});const p=[];if(Object.entries(jO).forEach(([b,x])=>{const j=Object.values(h).filter(_=>_.item_name===b);j.length===0?p.push({item_key:b,item_label:x,quantity:0,unit:""}):j.forEach(_=>{p.push({item_key:b,item_label:x,quantity:_.quantity,unit:_.unit})})}),!a||!o)return r.jsxs(G0,{children:[r.jsx(pv,{children:r.jsx(V0,{children:"تقرير شهري"})}),r.jsx(V0,{children:"يجب تمرير تاريخ البداية والنهاية من صفحة الأصناف."})]});if(c)return r.jsx(Ae,{});if(u)return r.jsxs(G0,{children:["حدث خطأ: ",u.message]});const g=new Date(a).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(G0,{children:[r.jsx($O,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(pv,{children:r.jsxs(V0,{children:["تقرير شهري لصرف أصناف مخزن اللحوم من ",g," إلى ",y]})}),r.jsx(wO,{children:r.jsxs(_O,{children:[r.jsx(CO,{children:r.jsxs("tr",{children:[r.jsx(ou,{children:"م"}),r.jsx(ou,{children:"اسم الصنف"}),r.jsx(ou,{children:"الكمية المنصرفة"}),r.jsx(ou,{children:"الوحدة"})]})}),r.jsx(EO,{children:p.map((b,x)=>r.jsxs("tr",{children:[r.jsx(su,{children:x+1}),r.jsx(su,{children:b.item_label}),r.jsx(su,{children:TO(Number(b.quantity))??0}),r.jsx(su,{children:b.unit||"-"})]},`${b.item_key}-${b.unit||"no-unit"}-${x}`))})]})}),r.jsx(SO,{children:r.jsx(kO,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const Y0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,RO=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,gv=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,zO=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,AO=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,Ci=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,pn=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  font-size: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
`,qO=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,NO=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,OO=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,MO=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,BO=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,UO={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},lu=(e,a=4)=>Number(Number(e).toFixed(a));function FO(){const[e]=nr(),a=e.get("item"),o=e.get("from"),s=e.get("to"),{data:c,isPending:u,error:h}=je({queryKey:["meat-item-range",a,o,s],queryFn:()=>zq(a,o,s),enabled:!!a&&!!o&&!!s});if(!a||!o||!s)return r.jsx(Y0,{children:r.jsx(gv,{children:"يرجى اختيار الصنف والفترة أولاً"})});if(u)return r.jsx(Ae,{});if(h)return r.jsxs(Y0,{children:["حدث خطأ: ",h.message]});const p=c?.reduce((x,j)=>x+(Number(j.quantity)||0),0),g=c[0]?.unit||"-",y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),b=new Date(s).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(Y0,{children:[r.jsx(BO,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(RO,{children:r.jsxs(gv,{children:["تقرير صرف - ",UO[a]||a,"- مخزن اللحوم من ",y," إلى"," ",b]})}),r.jsx(zO,{children:r.jsxs(AO,{children:[r.jsx(qO,{children:r.jsxs("tr",{children:[r.jsx(Ci,{children:"م"}),r.jsx(Ci,{children:"اليوم"}),r.jsx(Ci,{children:"التاريخ"}),r.jsx(Ci,{children:"الرصيد قبل الصرف"}),r.jsx(Ci,{children:"الكمية المصروفة"}),r.jsx(Ci,{children:"الرصيد بعد الصرف"}),r.jsx(Ci,{children:"الوحدة"})]})}),r.jsxs(NO,{children:[c?.map((x,j)=>r.jsxs("tr",{children:[r.jsx(pn,{children:j+1}),r.jsx(pn,{children:Intl.DateTimeFormat("ar-EG",{weekday:"long"}).format(new Date(x.date+"T00:00:00"))}),r.jsx(pn,{children:x.date}),r.jsx(pn,{children:lu(Number(x.quantity+x.stock_after))}),r.jsx(pn,{children:lu(Number(x.quantity))}),r.jsx(pn,{children:lu(Number(x.stock_after))}),r.jsx(pn,{children:x.unit||"-"})]},j)),r.jsxs("tr",{children:[r.jsx(pn,{colSpan:3,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:"الإجمالي"}),r.jsx(pn,{colSpan:3,style:{fontWeight:"bold",borderTop:"2px solid #888"},children:lu(Number(p))}),r.jsx(pn,{style:{fontWeight:"bold",borderTop:"2px solid #888"},children:g})]})]})]})}),r.jsx(OO,{children:r.jsx(MO,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const LO={meat:"لحوم",chicken:"دواجن","frozen-vegetables":"خضار مجمد"},PO=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,HO=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    color: black;
  }
`,QO=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,GO=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
  min-width: 60rem;
`,VO=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,cu=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,YO=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,du=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,IO=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,KO=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,XO=f.p`
  display: none;
  font-size: 2.2rem;
  text-align: center;
  color: black;
  margin-bottom: 2rem;

  @media print {
    display: block;
  }
`,ZO=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,JO=(e,a=4)=>Number(Number(e).toFixed(a));function WO(){const{data:e,isPending:a}=je({queryKey:["meat-current-stock"],queryFn:u6}),o={};e?.forEach(c=>{o[c.item_name]=c});const s=new Date().toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit"});return a?r.jsx(Ae,{}):r.jsxs(PO,{children:[r.jsx(ZO,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(HO,{children:"الأرصدة الحالية لأصناف مخزن اللحوم"}),r.jsxs(XO,{children:["التاريخ : ",s]}),r.jsx(QO,{children:r.jsxs(GO,{children:[r.jsx(VO,{children:r.jsxs("tr",{children:[r.jsx(cu,{children:"م"}),r.jsx(cu,{children:"اسم الصنف"}),r.jsx(cu,{children:"الرصيد الحالي"}),r.jsx(cu,{children:"الوحدة"})]})}),r.jsx(YO,{children:Object.entries(LO).map(([c,u],h)=>{const p=o[c];return r.jsxs("tr",{children:[r.jsx(du,{children:h+1}),r.jsx(du,{children:u}),r.jsx(du,{children:p?`${JO(Number(p.current_quantity))}`:"—"}),r.jsx(du,{children:p?`${p.unit||""}`:"—"})]},c)})})]})}),r.jsx(IO,{children:r.jsx(KO,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const eM=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 120rem;

  @media print {
    background-color: white;
    color: black;
    min-width: auto !important;
  }
`,tM=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media print {
    color: black;
  }
`,yv=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media print {
    overflow: visible !important;
    box-shadow: none;
    padding: 0;
  }
`,bv=f.table`
  direction: rtl;
  text-align: center;
  font-size: 1.5rem;
  border-collapse: collapse;
  border: 1px solid #ccc;
`,xv=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #fff !important;
    color: black !important;
  }
`,Qt=f.th`
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
`,vv=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Kt=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
  border: 1px solid #ccc;

  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.4rem;
  }
`,rM=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,nM=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Rl=f.div`
  text-align: center;
  margin: 0.5rem 0;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;

  @media print {
    color: black;
  }
`,aM=f.div`
  text-align: center;
  margin: 4rem 2rem 8rem 2rem;

  font-size: 1.8rem;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  @media print {
    color: black;
  }
`,I0=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  font-size: 1.6rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,iM=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1rem;
  @media print {
    display: none;
  }
`,oM=f.form`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap;
`,jv=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,wv=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,_v=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  width: 100%;
`,sM=[{name_ar:"أرز بلدي",name_en:"rice",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"مكرونة",name_en:"macaroni",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"صلصة أرز",name_en:"sauce_rice",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"صلصة مكرونة",name_en:"sauce_macaroni",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"فلفل أسود أرز",name_en:"black_pepper_rice",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"فلفل أسود مكرونة",name_en:"black_pepper_macaroni",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"عدس",name_en:"lentils",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"شعرية",name_en:"noodles",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"زيت طعام",name_en:"cooking_oil",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"فاصوليا",name_en:"white_beans",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"فول صحيح",name_en:"fava",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"سكر",name_en:"sugar",unit:"فتلة",off:"-",ind:"-",sol:"-"},{name_ar:"شاي",name_en:"tea",unit:"فتلة",off:"-",ind:"-",sol:"-"},{name_ar:"كمون",name_en:"cumin",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"ملح",name_en:"salt",unit:"كيلوجرام",off:"-",ind:"-",sol:"-"},{name_ar:"جبنة بيضاء",name_en:"white_cheese",unit:"عدد",off:"-",ind:"-",sol:"-"},{name_ar:"مربى",name_en:"jam",unit:"قطعة",off:"-",ind:"-",sol:"-"},{name_ar:"حلاوة",name_en:"halawa",unit:"قطعة",off:"-",ind:"-",sol:"-"},{name_ar:"فول معلب",name_en:"canned_fava",unit:"علبة",off:"-",ind:"-",sol:"-"},{name_ar:"تونة",name_en:"tuna",unit:"علبة",off:"-",ind:"-",sol:"-"},{name_ar:"عصير",name_en:"juice",unit:"علبة",off:"-",ind:"-",sol:"-"},{name_ar:"مياه",name_en:"water",unit:"زجاجة",off:"-",ind:"-",sol:"-"}],Mr=e=>e&&e>0?dM(Number(e)):0;function Sv(e){const a=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${a}-${o}-${s}`}function uu(e){return e.replace(/\d/g,a=>"٠١٢٣٤٥٦٧٨٩"[a])}const lM=["white-cheese","jam","halawa","canned-fava","tuna","juice","water"];function cM(e){return e?.reduce((a,o)=>{if(lM.includes(o.item_name)){const s=o.item_name.replace(/-/g,"_");a[s]=(a[s]||0)+(o.mission_meals||0)}return a},{})}const dM=(e,a=5)=>Number(Number(e).toFixed(a)),fu=(e,a=3)=>{const o=Math.sign(e),[s,c=""]=Math.abs(e).toString().split("."),u=s+(a?"."+c.slice(0,a):"");return o*Number(u)};function uM(){const e=new Date,a=new Date(e.getFullYear(),e.getMonth(),1),o=Sv(a),s=Sv(e),[c,u]=S.useState(!1),[h,p]=S.useState({from:o,to:s}),{data:g,isPending:y}=UE(h),{data:b,isPending:x}=QT(h),{data:j,isPending:_}=V1(h),{data:C,isPending:$}=qC(h),D=cM(b);console.log(b);const A=g?.reduce((H,oe)=>H+(Number(oe.mission_meals)||0),0),M=j?.reduce((H,oe)=>H+Mr(oe?.dry_meals),0);function O(H){return H?new Date(H).toLocaleDateString("ar-EG",{day:"numeric",month:"2-digit",year:"numeric",era:"short"}):"-"}function z(H){return H?new Date(H).toLocaleDateString("ar-EG",{month:"long"}):"-"}function I(H){return H?.reduce((oe,ce)=>(Object.entries(ce).forEach(([Y,N])=>{Y!=="id"&&typeof N=="number"&&!isNaN(N)&&(oe[Y]=(oe[Y]||0)+N)}),oe),{})}const R=I(C),F=C||[],K=Object.fromEntries((j||[]).map(H=>[H.id,H])),ue=sM.map(H=>({...H,off:0,ind:0,sol:0})),X=Object.fromEntries(ue.map(H=>[H.name_en,H]));return F.forEach(H=>{if(!H||H.id==null)return;const oe=K[H.id];oe&&Object.entries(H).forEach(([ce,Y])=>{if(typeof Y!="number"||Y===0)return;const N=ce.split("_"),ne=N.pop(),pe=N.join("_");if(!pe||!ne)return;const te=X[pe];te&&(ne==="officers"&&(te.off+=oe.officers),ne==="individuals"&&(te.ind+=oe.individuals),ne==="soldiers"&&(te.sol+=oe.soldiers))})}),$||_||y||x?r.jsx(Ae,{}):r.jsxs(eM,{children:[r.jsx(tM,{children:"استهلاك شهرى / كشف الأصناف"}),r.jsxs(Rl,{children:[r.jsx("p",{children:"الإدارة العامة للأمن المركزي"}),r.jsxs("p",{style:{padding:"0 5rem"},children:["المقرر الصيفي من ",uu("1 / 4")," حتى"," ",uu("31 / 10")]})]}),r.jsxs(Rl,{children:[r.jsx("p",{children:"منطقة القاهرة الجديدة"}),r.jsxs("p",{style:{padding:"0 5rem"},children:["المقرر الشتوي من ",uu("1 / 11")," حتى"," ",uu("31 / 3")]})]}),r.jsx(Rl,{children:r.jsx("p",{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"})}),r.jsx(Rl,{children:r.jsx("p",{children:"وحدة التعيينات"})}),r.jsxs(Rl,{children:[r.jsx(I0,{style:{color:"black",background:"#f1ce08",marginTop:"auto"},onClick:()=>u(H=>!H),children:c?"✖️ إغلاق":"عرض سابق"}),r.jsxs("p",{style:{padding:"1rem"},children:["السيد اللواء مساعد الوزير / مدير الإدارة العامة لإمداد الشرطة ",r.jsx("br",{}),"نتشرف بأن نرسل لسيادتكم بيان بالأعداد التي تم صرفها وكذا الكميات التي تم استهلاكها",r.jsx("br",{}),"خلال شهر ",z(h?.from)," ",r.jsx("br",{}),"في الفترة من ",O(h?.from)," حتى"," ",O(h?.to)]}),r.jsx(yv,{style:{width:"35%"},children:r.jsxs(bv,{children:[r.jsx(xv,{children:r.jsxs("tr",{children:[r.jsx(Qt,{children:"الوجبة الجافة"}),r.jsx(Qt,{children:"مرتجع"})]})}),r.jsx(vv,{children:r.jsxs("tr",{children:[r.jsx(Kt,{children:M||"-"}),r.jsx(Kt,{children:A||"-"})]})})]})})," "]}),c&&r.jsx(iM,{children:r.jsxs(oM,{onSubmit:H=>{H.preventDefault();const oe=H.target?.from?.value,ce=H.target?.to?.value;if(!oe||!ce||oe>ce){W.error("اختيار خاطيء");return}p({from:oe,to:ce}),u(!1)},children:[r.jsxs(jv,{children:[r.jsx(wv,{children:"من"}),r.jsx(_v,{name:"from",type:"date"})]}),r.jsxs(jv,{children:[r.jsx(wv,{children:"إلى"}),r.jsx(_v,{name:"to",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:12,width:"100%"},children:[r.jsx(I0,{type:"submit",children:"عرض"}),r.jsx(I0,{type:"button",style:{background:"#777"},onClick:()=>u(!1),children:"إلغاء"})]})]})}),r.jsx(yv,{children:r.jsxs(bv,{children:[r.jsxs(xv,{children:[r.jsxs("tr",{children:[r.jsx(Qt,{rowSpan:2,children:"م"}),r.jsx(Qt,{rowSpan:2,children:"اسم الصنف"}),r.jsx(Qt,{children:"الفئة"}),r.jsx(Qt,{colSpan:2,children:"ضباط"}),r.jsx(Qt,{colSpan:2,children:"أفراد"}),r.jsx(Qt,{colSpan:2,children:"مجندين"}),r.jsx(Qt,{rowSpan:2,children:"وجبة جافة"}),r.jsx(Qt,{rowSpan:2,colSpan:2,children:"إجمالي"})]}),r.jsxs("tr",{children:[r.jsx(Qt,{children:"الوحدة"}),r.jsx(Qt,{children:"القوة"}),r.jsx(Qt,{children:"الكمية المستهلكة"}),r.jsx(Qt,{children:"القوة"}),r.jsx(Qt,{children:"الكمية المستهلكة"}),r.jsx(Qt,{children:"القوة"}),r.jsx(Qt,{children:"الكمية المستهلكة"})]})]}),r.jsx(vv,{children:ue.map((H,oe)=>{const ce=R?.[`${H.name_en}_officers`]||0,Y=R?.[`${H.name_en}_individuals`]||0,N=R?.[`${H.name_en}_soldiers`]||0,ne=R?.[`${H.name_en}_total`]||0,pe=D?.[H.name_en]||0,te=R?.sauce_rice_total+R?.sauce_macaroni_total,k=R?.black_pepper_rice_total+R?.black_pepper_macaroni_total,Z=R?.cooking_oil_total;return r.jsxs("tr",{children:[r.jsx(Kt,{children:oe+1}),r.jsx(Kt,{children:H.name_ar}),r.jsx(Kt,{children:H.unit}),r.jsx(Kt,{children:Mr(H.off)||"-"}),r.jsx(Kt,{children:Mr(ce)||"-"}),r.jsx(Kt,{children:Mr(H.ind)||"-"}),r.jsx(Kt,{children:Mr(Y)||"-"}),r.jsx(Kt,{children:Mr(H.sol)||"-"}),r.jsx(Kt,{children:Mr(N)||"-"}),r.jsx(Kt,{children:Mr(pe)||"-"}),r.jsx(Kt,{children:fu(Mr(ne+pe))||"-"}),oe===2&&r.jsx(Kt,{style:{fontWeight:"bold"},rowSpan:2,children:fu(Mr(te))||"-"}),oe===4&&r.jsx(Kt,{style:{fontWeight:"bold"},rowSpan:2,children:fu(Mr(k))||"-"}),oe===8&&r.jsxs(Kt,{style:{fontWeight:"bold"},children:[fu(Mr(Z/.914))||"-"," لتر"]})]},H.name_en)})})]})}),r.jsxs(aM,{children:[r.jsxs("p",{children:["تحريراً في "," "]}),r.jsx("p",{children:"رئيس قسم التعيينات "}),r.jsx("p",{style:{padding:"0 10rem"},children:"قائد القطاع"})]}),r.jsx("div",{style:{borderTop:"1px solid #333",padding:12,marginLeft:"5rem"}}),r.jsx(rM,{children:r.jsx(nM,{onClick:()=>window.print(),children:"🖨️ طباعة / PDF"})})]})}const fM=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;

    background-color: white;
    color: black;
  }
`,mM=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
  @media print {
    color: black;
  }
`,hM=f.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`,Di=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,pM=f(Di)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  background: #777;

  &:hover {
    background: #888;
  }
`,gM=f(Di)`
  background: #e63946;

  &:hover {
    background: #d62828;
  }
`,kv=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 1.2rem;

  @media print {
    display: none;
  }
`,$v=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Qn=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Gn=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Vn=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.25rem;
  width: 100%;
`,yM=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;
  margin-top: 1.6rem;
  @media print {
    overflow: visible !important;
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,bM=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.4rem;

  th:last-child,
  td:last-child {
    width: 5%;
  }
  @media print {
    th:last-child,
    td:last-child {
      display: none !important;
    }
  }
`,xM=f.thead`
  background-color: var(--color-brand-600);
  color: white;
  @media print {
    background-color: #fff !important;
    color: black !important;
  }
`,gn=f.th`
  padding: 1rem;
  text-align: center;
  font-weight: 700;

  &:last-child {
    width: 9rem;
  }
`,vM=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Et=f.td`
  padding: 0.9rem;
  text-align: center;
  color: var(--color-grey-700);
  @media print {
    color: black;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }
`,jM=f.tr`
  font-weight: 900;
  font-size: 1.6rem;
  border-top: 1px solid var(--color-grey-900);
  td {
    padding: 1rem;
    padding-top: 2rem;
  }
`,wM=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,_M=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,SM=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;

  @media print {
    display: block;
  }
`,kM=(e,a=4)=>Number(Number(e).toFixed(a));function $M(){const[e,a]=S.useState(!1),[o,s]=S.useState(null),[c,u]=S.useState(!1),[h,p]=S.useState(null),[g,y]=S.useState(null),{register:b,watch:x,reset:j,setValue:_,getValues:C}=Ut(),{data:$,isPending:D,isError:A}=W3(),{data:M,isPending:O,isError2:z}=V1(o),I=I9(),R=K9(),F=X9(),ie=Number(x("officers")||0),K=Number(x("individuals")||0),ue=Number(x("soldiers")||0),X=ie+K+ue,H=Number(x("dryMeals")||0),oe=Number(x("dryMealsBakery")||0),ce=g??$??[];S.useEffect(()=>{y(o?Array.isArray(M)?M:[]:null)},[M,o]);let Y={o:0,i:0,s:0,t:0,d:0,db:0};if(ce.length>0&&(Y=ce.reduce((J,ye)=>(J.o+=Number(ye.officers||0),J.i+=Number(ye.individuals||0),J.s+=Number(ye.soldiers||0),J.t+=Number(ye.total||0),J.d+=Number(ye.dry_meals||0),J.db+=Number(ye.dry_meals_bakery||0),J),{o:0,i:0,s:0,t:0,d:0,db:0})),D&&g===null)return r.jsx(Ae,{});if(A||z)return r.jsx("p",{style:{textAlign:"center",fontSize:"1.6rem",marginTop:"3rem"},children:"فشل تحميل البيانات ❌"});async function N(J){const ye=J.from,ve=J.to;if(!ye||!ve||ye>ve){W.error("اختيار غير صحيح");return}s({from:ye,to:ve}),u(!1)}function ne(J){J.preventDefault();const ye={date:C("date"),officers:ie,individuals:K,soldiers:ue,total:X,dry_meals:H,dry_meals_bakery:oe};if(ye.total+ye.dry_meals+ye.dry_meals_bakery<=0)return W.error("يرجى إدخال قيمة أكبر من الصفر");h?R.mutate({id:h.id,payload:ye},{onSuccess:()=>{j(),a(!1),p(null),W.success("تم التحديث بنجاح يرجى مراجعة جميع عمليات الصرف مجدداً")},onError:()=>W.error("فشل التعديل")}):I.mutate(ye,{onSuccess:()=>{W.success("تمت الإضافة بنجاح"),j(),a(!1)},onError:()=>W.error("فشل الإضافة")})}function pe(J){_("date",J.date),_("officers",J.officers||0),_("individuals",J.individuals||0),_("soldiers",J.soldiers||0),_("dryMeals",J.dry_meals||0),_("dryMealsBakery",J.dry_meals_bakery||0),p(J),a(!0)}function te(){h&&R.mutate({id:h.id,payload:{...h,officers:0,individuals:0,soldiers:0,total:0,dry_meals:0,dry_meals_bakery:0}},{onSuccess:()=>{F.mutate(h.id,{onSuccess:()=>{j(),a(!1),p(null),W.success("تم الحذف بنجاح يرجى مراجعة جميع عمليات الصرف مجدداً")},onError:()=>{W.error("تم التعديل لكن فشل الحذف")}})},onError:()=>W.error("فشل الحذف")})}function k(J){return J===0||J===null||J===void 0?"—":kM(Number(J))}const Z=ce&&ce.length>0?ce.reduce((J,ye)=>new Date(ye.created_at)>new Date(J.created_at)?ye:J):null,se=Z?ce.filter(J=>J.date===Z.date):[],de=new Set(se.map(J=>J.id));return r.jsxs(fM,{children:[r.jsx(SM,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsxs(mM,{children:["كشف أعداد القوات"," ",ce.length>0?`شهر ${new Date(ce[0].date).toLocaleDateString("ar-EG",{month:"long"})}`:null]}),r.jsxs(hM,{children:[r.jsx(Di,{onClick:()=>{a(J=>!J),e||(j(),p(null))},children:e?"✖️ إغلاق":"➕ إضافة أعداد"}),r.jsx(Di,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>u(J=>!J),children:c?"✖️ إغلاق":"عرض كشف أعداد سابق"})]}),e&&r.jsx(kv,{children:r.jsxs($v,{onSubmit:ne,children:[r.jsxs(Qn,{children:[r.jsx(Gn,{children:"التاريخ"}),r.jsx(Vn,{type:"date",defaultValue:new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"}),max:new Date().toISOString().split("T")[0],...b("date",{required:!0})})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"ضباط"}),r.jsx(Vn,{type:"number",step:"any",...b("officers",{required:!0})})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"أفراد"}),r.jsx(Vn,{type:"number",step:"any",...b("individuals",{required:!0})})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"مجندين"}),r.jsx(Vn,{type:"number",step:"any",...b("soldiers",{required:!0})})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"الإجمالي"}),r.jsx(Vn,{type:"number",disabled:!0,value:X})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"وجبات جافة مأموريات"}),r.jsx(Vn,{type:"number",step:"any",...b("dryMeals")})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"وجبات جافة مخبز"}),r.jsx(Vn,{type:"number",step:"any",...b("dryMealsBakery")})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",marginTop:"0.6rem"},children:[r.jsx(Di,{type:"submit",disabled:I.isPending||R.isPending,children:h?R.isPending?"جارٍ التعديل...":"✔️ حفظ التعديل":I.isPending?"جارٍ الإضافة...":"✔️ إضافة"}),h&&r.jsx(gM,{type:"button",disabled:R.isPending||F.isPending,onClick:te,children:R.isPending||F.isPending?"جارٍ الحذف...":"حذف"})]})]})}),c&&r.jsx(kv,{children:r.jsxs($v,{onSubmit:J=>{J.preventDefault();const ye=J.target;N({from:ye.from?.value,to:ye.to?.value})},children:[r.jsxs(Qn,{children:[r.jsx(Gn,{children:"من"}),r.jsx(Vn,{name:"from",type:"date"})]}),r.jsxs(Qn,{children:[r.jsx(Gn,{children:"إلى"}),r.jsx(Vn,{name:"to",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%",marginTop:"0.6rem"},children:[r.jsx(Di,{type:"submit",disabled:o&&O,children:o&&O?"جارٍ التحميل...":"عرض"}),r.jsx(Di,{type:"button",$bg:"#777",onClick:()=>u(!1),children:"إلغاء"})]})]})}),r.jsx(yM,{children:r.jsxs(bM,{children:[r.jsx(xM,{children:r.jsxs("tr",{children:[r.jsx(gn,{children:"م"}),r.jsx(gn,{children:"اليوم"}),r.jsx(gn,{children:"التاريخ"}),r.jsx(gn,{children:"ضباط"}),r.jsx(gn,{children:"أفراد"}),r.jsx(gn,{children:"مجندين"}),r.jsx(gn,{children:"الإجمالي"}),r.jsx(gn,{children:"جاف مأموريات"}),r.jsx(gn,{children:"جاف مخبز"}),r.jsx(gn,{children:"تعديل"})]})}),r.jsxs(vM,{children:[!ce||ce.length===0?r.jsx("tr",{children:r.jsx(Et,{colSpan:"10",children:"لا توجد بيانات"})}):ce.map((J,ye)=>r.jsxs("tr",{children:[r.jsx(Et,{children:ye+1}),r.jsx(Et,{children:new Date(J.date).toLocaleDateString("ar-EG",{weekday:"long"})}),r.jsx(Et,{children:J.date}),r.jsx(Et,{children:k(J.officers)}),r.jsx(Et,{children:k(J.individuals)}),r.jsx(Et,{children:k(J.soldiers)}),r.jsx(Et,{children:k(J.total)}),r.jsx(Et,{children:k(J.dry_meals)}),r.jsx(Et,{children:k(J.dry_meals_bakery)}),r.jsx(Et,{children:de.has(J.id)?r.jsx(pM,{style:{fontSize:"1.4rem"},$bg:"#777",onClick:()=>pe(J),children:"✏️"}):"—"})]},J.id)),ce&&ce.length>0&&r.jsxs(jM,{children:[r.jsx(Et,{colSpan:"3",children:"الإجمالي"}),r.jsx(Et,{children:k(Y.o)}),r.jsx(Et,{children:k(Y.i)}),r.jsx(Et,{children:k(Y.s)}),r.jsx(Et,{children:k(Y.t)}),r.jsx(Et,{children:k(Y.d)}),r.jsx(Et,{children:k(Y.db)}),r.jsx(Et,{children:"—"})]})]})]})}),r.jsx(wM,{children:r.jsx(_M,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}async function CM(){const e=await fetch("/api/officers?order=asc");if(!e.ok)throw new Error("officers could not be loaded");return await e.json()}async function EM(e){const a=await fetch("/api/officers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok)throw new Error("Failed to add officer");return await a.json()}async function TM(e){if(!(await fetch(`/api/officers/${e}`,{method:"DELETE"})).ok)throw new Error("فشل في حذف الضابط");return e}function DM(){const{data:e,isPending:a}=je({queryKey:["officers"],queryFn:CM});return{officers:e,isPending:a}}function RM(){const e=Te(),{mutate:a,isPending:o}=Re({mutationFn:EM,onSuccess:()=>{W.success("تمت الإضافة بنجاح"),e.invalidateQueries(["officers"])},onError:()=>W.error("حدث خطأ")});return{addOfficer:a,isPending:o}}function zM(){const e=Te(),{mutate:a,isPending:o}=Re({mutationFn:TM,onSuccess:()=>{W.success("تم الحذف بنجاح"),e.invalidateQueries(["officers"])},onError:()=>W.error("فشل الحذف")});return{deleteOfficer:a,isPending:o}}const AM=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;
  @media print {
    min-width: auto !important;
  }
`,qM=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,NM=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  margin-top: 4.2rem;
`,OM=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.6rem;
`,MM=f.thead`
  background-color: var(--color-brand-600);
  color: white;
`,Ei=f.th`
  padding: 1.2rem;
  text-align: center;
  font-weight: 700;
`,BM=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }
`,Na=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);
`,UM=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem; /* مسافة بين الفورم والجدول */
  width: 100%;
  max-width: 100%;
`,FM=f.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,zl=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,Al=f.label`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,ql=f.input`
  background-color: var(--color-grey-0);
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  font-size: 1.4rem;
  width: 100%;
`,Nl=f.p`
  color: red;
  font-size: 1.2rem;
  margin-top: 0.3rem;
  margin-bottom: 0;
`,LM=f.button`
  background: var(--color-brand-600);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  flex-basis: 100%; /* يخلي الزر في صف لوحده */

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,PM=f.button`
  background: var(--color-brand-700);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
`,HM=f.button`
  background-color: #dc2626; /* أحمر */
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b91c1c; /* أغمق */
  }

  &:disabled {
    background-color: #f87171; /* أحمر فاتح لو disabled */
    cursor: not-allowed;
  }
`;function QM(){const{officers:e,isPending:a}=DM(),{addOfficer:o,isPending:s}=RM(),{deleteOfficer:c,isPending:u}=zM(),[h,p]=S.useState(!1),{register:g,handleSubmit:y,reset:b,formState:{errors:x}}=Ut();if(a)return r.jsx(Ae,{});function j(_){o(_,{onSuccess:()=>{b(),p(!1)}})}return r.jsxs(AM,{children:[r.jsx(qM,{children:"الضباط"}),r.jsx(PM,{onClick:()=>p(_=>!_),children:h?"✖️  إغلاق":"➕  إضافة ضابط"}),h&&r.jsx(UM,{children:r.jsxs(FM,{onSubmit:y(j),children:[r.jsxs(zl,{children:[r.jsx(Al,{children:"الرتبة"}),r.jsx(ql,{type:"text",...g("rank",{required:"الرتبة مطلوبة"})}),x?.rank&&r.jsx(Nl,{children:x.rank?.message})]}),r.jsxs(zl,{children:[r.jsx(Al,{children:"الاسم"}),r.jsx(ql,{type:"text",...g("name",{required:"الاسم مطلوب"})}),x?.name&&r.jsx(Nl,{children:x.name?.message})]}),r.jsxs(zl,{children:[r.jsx(Al,{children:"الأقدمية"}),r.jsx(ql,{type:"text",...g("seniority",{required:"الأقدمية مطلوبة"})}),x?.seniority&&r.jsx(Nl,{children:x.seniority?.message})]}),r.jsxs(zl,{children:[r.jsx(Al,{children:"تاريخ التعيين"}),r.jsx(ql,{type:"date",...g("appointmentDate",{required:"تاريخ التعيين مطلوب"})}),x?.appointmentDate&&r.jsx(Nl,{children:x.appointmentDate?.message})]}),r.jsxs(zl,{children:[r.jsx(Al,{children:"رقم التليفون"}),r.jsx(ql,{type:"text",...g("phone",{required:"رقم التليفون مطلوب",pattern:{value:/^[0-9]{10,15}$/,message:"رقم التليفون غير صحيح"}})}),x?.phone&&r.jsx(Nl,{children:x.phone?.message})]}),r.jsx(LM,{type:"submit",disabled:s,children:s?"جارٍ الإضافة...":"✔️ إضافة"})]})}),r.jsx(NM,{children:r.jsxs(OM,{children:[r.jsx(MM,{children:r.jsxs("tr",{children:[r.jsx(Ei,{children:"م"}),r.jsx(Ei,{children:"الرتبة"}),r.jsx(Ei,{children:"الاسم"}),r.jsx(Ei,{children:"الأقدمية"}),r.jsx(Ei,{children:"تاريخ التعيين"}),r.jsx(Ei,{children:"رقم التليفون"}),r.jsx(Ei,{children:"إجراءات"})]})}),r.jsx(BM,{children:e?.length===0?r.jsx("tr",{children:r.jsx(Na,{colSpan:"7",children:"لا يوجد بيانات"})}):e?.map((_,C)=>r.jsxs("tr",{children:[r.jsx(Na,{children:1+C}),r.jsx(Na,{children:_?.rank}),r.jsx(Na,{children:_?.name}),r.jsx(Na,{children:_?.seniority}),r.jsx(Na,{children:_?.appointmentDate}),r.jsx(Na,{children:_?.phone}),r.jsx(Na,{children:r.jsx(HM,{disabled:u,onClick:()=>{window.confirm("هل أنت متأكد من حذف هذا الضابط؟")&&c(_?.id)},children:"🗑 حذف"})})]},_?.id))})]})})]})}function GM(){return r.jsx(ms,{branch:"قاعة الضباط",title:"قاعة الضباط"})}function VM(){return r.jsx(ms,{branch:"مجندين المكتب",title:"مجندين المكتب"})}const YM=f.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,IM=f.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;function KM(){const e=ur();return r.jsx(YM,{children:r.jsxs(IM,{children:[r.jsx(np,{as:"h1",children:"The page you are looking for could not be found 😢"}),r.jsx(tp,{onClick:()=>e(-1),$size:"large",children:"← Go back"})]})})}function XM(){return r.jsx(ms,{branch:"قاعة أفراد",title:"قاعة أفراد"})}const ZM=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  min-width: 95rem;
  @media print {
    min-width: auto !important;
  }
`,JM=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.6rem;

  thead {
    background-color: var(--color-brand-600);
    color: white;
  }
  tbody {
    tr:nth-child(even) {
      background-color: var(--color-grey-100);
    }
    tr:hover {
      background-color: var(--color-grey-200);
    }
  }
  td {
    padding: 1.2rem;
    text-align: center;
    color: var(--color-grey-700);
    border: 1px solid var(--color-grey-300);
  }

  th {
    padding: 1.2rem;
    text-align: center;
    font-weight: 700;
    border: 1px solid var(--color-grey-300);
  }
`;function ap({items:e}){return r.jsx(ZM,{children:r.jsxs(JM,{children:[r.jsxs("thead",{children:[r.jsxs("tr",{children:[r.jsx("th",{rowSpan:"2",children:"م"}),r.jsx("th",{rowSpan:"2",children:"بيان الأصناف"}),r.jsx("th",{colSpan:"2",children:"المجندين"}),r.jsx("th",{colSpan:"2",children:"الأفراد"}),r.jsx("th",{colSpan:"2",children:"الضباط"})]}),r.jsxs("tr",{children:[r.jsx("th",{children:"المقرر"}),r.jsx("th",{children:"عدد أيام الصرف"}),r.jsx("th",{children:"المقرر"}),r.jsx("th",{children:"عدد أيام الصرف"}),r.jsx("th",{children:"المقرر"}),r.jsx("th",{children:"عدد أيام الصرف"})]})]}),r.jsx("tbody",{children:e.map((a,o)=>r.jsxs("tr",{children:[r.jsx("td",{children:o+1}),r.jsx("td",{children:a.name}),r.jsx("td",{children:a.soldiers?.amount??"-"}),r.jsx("td",{children:a.soldiers?.days??"-"}),r.jsx("td",{children:a.individuals?.amount??"-"}),r.jsx("td",{children:a.individuals?.days??"-"}),r.jsx("td",{children:a.officers?.amount??"-"}),r.jsx("td",{children:a.officers?.days??"-"})]},a.name))})]})})}const WM=f.h1`
  font-size: 3.2rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
`,eB=f.h2`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
`,tB=[{name:"فول صحيح",soldiers:{amount:.04,days:"يومياً"},individuals:{amount:.04,days:"يومياً"},officers:{amount:.04,days:"يومياً"}},{name:"خضار السلطة",soldiers:{amount:.35,days:"يومياً"},individuals:{amount:.35,days:"يومياً"},officers:{amount:.35,days:"يومياً"}},{name:"فاكهة",soldiers:{amount:.175,days:"يومياً"},individuals:{amount:.175,days:"يومياً"},officers:{amount:.175,days:"يومياً"}},{name:"زبادى",soldiers:{amount:1,days:"يومياً"},individuals:{amount:1,days:"يومياً"},officers:{amount:1,days:"يومياً"}},{name:"عصير",soldiers:{amount:1,days:"يومياً"},individuals:{amount:1,days:"يومياً"},officers:{amount:1,days:"يومياً"}},{name:"جبنة بيضاء",soldiers:{amount:.8,days:"يومياً"},individuals:{amount:.8,days:"يومياً"},officers:{amount:.8,days:"يومياً"}}];function rB(){return r.jsxs(r.Fragment,{children:[r.jsx(WM,{children:"مقرر رمضان"}),r.jsx(eB,{children:"بيان بأيام الصرف ومقررات الأصناف"}),r.jsx(ap,{items:tB})]})}const nB={rice:"أرز بلدي",macaroni:"مكرونة","tomato-sauce":"صلصة",noodles:"شعرية","cooking-oil":"زيت طعام","white-beans":"فاصوليا",fava:"فول صحيح",sugar:"سكر",tea:"شاي","black-pepper":"فلفل أسود",cumin:"كمون",salt:"ملح",lentils:"عدس",zabady:"زبادي",eggs:"بيض","garlic-powder":"ثوم بودرة",spices:"بهارات"},K0=f.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  direction: rtl;
  min-width: 95rem;

  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,Cv=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`,X0=f.h1`
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;

  @media print {
    color: black;
  }
`,aB=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;

  @media print {
    box-shadow: none;
    border: 1px solid #ccc;
  }
`,iB=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.7rem;
`,mu=f.th`
  background: var(--color-brand-600);
  padding: 0.8rem;
  font-weight: 700;
`,hu=f.td`
  padding: 1.2rem;
  text-align: center;
  color: var(--color-grey-700);

  @media print {
    color: black;
    border: 1px solid #ccc;
  }
`,oB=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,sB=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,lB=f.h1`
  display: none;
  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 5rem;
  @media print {
    display: block;
  }
`,cB=f.thead`
  background-color: var(--color-brand-600);
  color: white;

  @media print {
    background-color: #ddd !important;
    color: black !important;
  }
`,dB=f.tbody`
  tr:nth-child(even) {
    background-color: var(--color-grey-100);
  }

  tr:hover {
    background-color: var(--color-grey-200);
  }

  @media print {
    tr:nth-child(even) {
      background-color: #f5f5f5 !important;
    }
    tr:hover {
      background-color: transparent !important;
    }
  }
`,uB=(e,a=4)=>Number(Number(e).toFixed(a));function fB(){const[e]=nr(),a=e.get("from"),o=e.get("to"),{data:s,isPending:c,error:u}=je({queryKey:["range-report",a,o],queryFn:()=>nC(a,o),enabled:!!a&&!!o}),h={};s&&s.forEach(b=>{const x=`${b.item_name}||${b.unit||""}`,j=Number(b.quantity)||0;h[x]||(h[x]={item_name:b.item_name,unit:b.unit||"",quantity:0}),h[x].quantity+=j});const p=[];if(Object.entries(nB).forEach(([b,x])=>{const j=Object.values(h).filter(_=>_.item_name===b);j.length===0?p.push({item_key:b,item_label:x,quantity:0,unit:""}):j.forEach(_=>{p.push({item_key:b,item_label:x,quantity:_.quantity,unit:_.unit})})}),!a||!o)return r.jsxs(K0,{children:[r.jsx(Cv,{children:r.jsx(X0,{children:"تقرير شهري"})}),r.jsx(X0,{children:"يجب تمرير تاريخ البداية والنهاية من صفحة الأصناف."})]});if(c)return r.jsx(Ae,{});if(u)return r.jsxs(K0,{children:["حدث خطأ: ",u.message]});const g=new Date(a).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"}),y=new Date(o).toLocaleDateString("ar-EG",{year:"numeric",month:"2-digit",day:"2-digit",era:"narrow"});return r.jsxs(K0,{children:[r.jsx(lB,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx(Cv,{children:r.jsxs(X0,{children:["تقرير شهري للصرف للأصناف الطازجة من ",g," إلى ",y]})}),r.jsx(aB,{children:r.jsxs(iB,{children:[r.jsx(cB,{children:r.jsxs("tr",{children:[r.jsx(mu,{children:"م"}),r.jsx(mu,{children:"اسم الصنف"}),r.jsx(mu,{children:"الكمية المصروفة"}),r.jsx(mu,{children:"الوحدة"})]})}),r.jsx(dB,{children:p?.map((b,x)=>r.jsxs("tr",{children:[r.jsx(hu,{children:x+1}),r.jsx(hu,{children:b.item_label}),r.jsx(hu,{children:uB(Number(b.quantity))??0}),r.jsx(hu,{children:b.unit||"-"})]},`${b.item_key}-${b.unit||"no-unit"}-${x}`))})]})}),r.jsx(oB,{children:r.jsx(sB,{onClick:()=>window.print(),children:"🖨️ طباعة / حفظ PDF"})})]})}const mB=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 2rem;
`,hB=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`,pB=f.div`
  display: grid;
  gap: 2.5rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,Yn=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,In=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,Kn=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function pu(e){return e.replace(/\d/g,a=>"٠١٢٣٤٥٦٧٨٩"[a])}function gB(){return r.jsxs(mB,{children:[r.jsx(hB,{children:"وحدة التعيينات"}),r.jsxs(pB,{children:[r.jsx(Yn,{to:"/rations/stores",children:r.jsx(In,{children:r.jsx(Kn,{children:"المخازن"})})}),r.jsx(Yn,{to:"/rations/workforce",children:r.jsx(In,{children:r.jsx(Kn,{children:"القوة العاملة"})})}),r.jsx(Yn,{to:"/rations/numbers-report",children:r.jsx(In,{children:r.jsx(Kn,{children:"كشف الأعداد"})})}),r.jsx(Yn,{to:"/rations/daily-withdrawal",children:r.jsx(In,{children:r.jsx(Kn,{children:"يومية الصرف"})})}),r.jsx(Yn,{to:"/rations/fresh-permit",children:r.jsx(In,{children:r.jsx(Kn,{children:pu("إذن 111 يومي")})})}),r.jsx(Yn,{to:"/rations/dry-permit",children:r.jsx(In,{children:r.jsx(Kn,{children:pu(" إذن 111 جاف ( مأموريات )")})})}),r.jsx(Yn,{to:"/rations/tarfih-permit",children:r.jsx(In,{children:r.jsxs(Kn,{children:[" ",pu(" إذن 111 ترفيه")]})})}),r.jsx(Yn,{to:"/rations/return-permit",children:r.jsx(In,{children:r.jsx(Kn,{children:pu(" إذن 111 ارتجاع ( مأموريات )")})})}),r.jsx(Yn,{to:"/rations/monthly-consumption",children:r.jsx(In,{children:r.jsx(Kn,{children:"الإستهلاك الشهري"})})})]})]})}function yB(){return r.jsx(ms,{branch:"وحدة التعيينات",title:"وحدة التعيينات"})}const bB=f.div`
  background-color: var(--color-grey-50);
  direction: rtl;
  min-width: 100rem;
  padding: 0rem 1rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,xB=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;

  @media print {
    box-shadow: none;
  }
`,vB=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.6rem;

  thead {
    background-color: var(--color-brand-600);
    color: white;

    @media print {
      color: black;
    }
  }
  tbody {
    tr:nth-child(even) {
      background-color: var(--color-grey-100);
    }
    tr:hover {
      background-color: var(--color-grey-200);
    }
  }
  td,
  th {
    padding: 1.2rem;
    border: 1px solid var(--color-grey-300);
  }
`,jB=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,wB=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Zo=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,_B=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 3rem;

  @media print {
    display: block;
  }
`,SB=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 3rem;
  width: 40%;
  margin-right: auto;

  @media print {
    display: none;
  }
`,Ev=f.form`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap;
`,kB=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,$B=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Tv=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  width: 100%;
`,gu=f.div`
  text-align: center;
  margin: 1rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;

  @media print {
    color: black;
  }
`,CB=f.div`
  text-align: center;
  margin: 4rem 2rem 8rem 2rem;

  font-size: 1.8rem;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  @media print {
    color: black;
  }
`,EB=f.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media print {
    color: black;
  }
`,TB=f.div`
  margin: 12px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  @media print {
    display: none;
  }
`,DB=f.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background: ${({$active:e})=>e?"var(--color-brand-700)":"#ddd"};
  color: ${({$active:e})=>e?"white":"black"};
`,RB=[{name_ar:"جبنة بيضاء",name_en:"white-cheese"},{name_ar:"مربى",name_en:"jam"},{name_ar:"حلاوة",name_en:"halawa"},{name_ar:"فول معلب",name_en:"canned-fava"},{name_ar:"تونة",name_en:"tuna"},{name_ar:"عصير",name_en:"juice"},{name_ar:"مياه",name_en:"water"}],zB=["white-cheese","jam","halawa","canned-fava","tuna","juice","water"],AB=(e,a=4)=>Number(Number(e).toFixed(a));function qB(){const[e,a]=S.useState(!1),[o,s]=S.useState(null),[c,u]=S.useState(!1),[h,p]=S.useState(""),g=new Date().toISOString().split("T")[0],y=o||g,{data:b,isPending:x}=FE(y),{data:j,isPending:_}=_D(),{updateAsync:C,isPending:$}=SD(),{register:D,setValue:A,getValues:M}=Ut(),z=(Array.isArray(b)?b:[])?.filter(K=>K?.mission_meals!==0&&zB.includes(K?.item_name))?.reduce((K,ue)=>{const X=ue?.mission_type||"غير محدد";return(K[X]||=[]).push(ue),K},{});for(const K in z)z[K].sort((ue,X)=>new Date(ue.created_at)-new Date(X.created_at));const I={};for(const K in z)I[K]=z[K].reduce((ue,X)=>{const H=X.item_name;return ue[H]?ue[H].mission_meals+=Number(X.mission_meals||0):ue[H]={...X,mission_meals:Number(X.mission_meals||0)},ue},{});S.useEffect(()=>{const K=Object.keys(z);if(!K.length){p("");return}h&&K.includes(h)||p(K[K.length-1])},[z,h]);const R=I[h]||{},F=y?new Date(y).toLocaleDateString("ar-EG"):new Date().toLocaleDateString("ar-EG");async function ie(K){K.preventDefault();const ue=await C(M("value"));A("value",ue?.value),a(!1)}return x||_?r.jsx(Ae,{}):r.jsxs(bB,{children:[r.jsx(_B,{children:"قطاع الشهيد / عمرو مسعد عبد الشافي"}),r.jsxs(gu,{children:[r.jsx("p",{children:"اسم الجهة : قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsx("p",{}),r.jsx("p",{}),r.jsx("p",{children:"نموذج ( 8 ) مخازن حكومة"}),r.jsx("p",{})]}),r.jsx(gu,{children:r.jsx("p",{children:"مخزن : وحدة التعيينات"})}),r.jsxs(gu,{children:[r.jsxs("p",{children:["تاريخ العودة : ",F]}),r.jsxs("p",{children:["طلب إذن ارتجاع مأمورية : ",h||""]}),r.jsxs(EB,{children:[r.jsx("span",{children:" رقم الإذن : "}),e?r.jsxs(Ev,{onSubmit:ie,children:[r.jsx(Tv,{style:{width:"6rem",height:"3rem",textAlign:"center"},type:"number",defaultValue:j?.value,...D("value",{required:!0})}),r.jsx(Zo,{disabled:$,type:"submit",style:{padding:"0.5rem",marginBottom:"0"},children:r.jsx(nc,{})}),r.jsx(Zo,{disabled:$,style:{padding:"0.5rem",marginBottom:"0",background:"#777"},type:"button",onClick:()=>{a(!1),A("value",j?.value??"")},children:r.jsx(ac,{})})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:j?.value}),r.jsx(Zo,{disabled:$,style:{padding:"0.2rem 0.3rem",marginBottom:"0"},onClick:()=>a(K=>!K),children:r.jsx(ic,{})})]})]}),r.jsx("p",{})]}),r.jsxs(gu,{children:[r.jsx(TB,{children:Object.keys(z).map(K=>r.jsx(DB,{$active:h===K,onClick:()=>p(K),children:K},K))}),r.jsx(Zo,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>u(K=>!K),children:c?"✖️ إغلاق":"عرض إذن سابق"})]}),c&&r.jsx(SB,{children:r.jsxs(Ev,{onSubmit:K=>{K.preventDefault(),s(K.target.date.value||null)},children:[r.jsxs(kB,{children:[r.jsx($B,{children:"اختر تاريخ"}),r.jsx(Tv,{name:"date",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",width:"100%"},children:[r.jsx(Zo,{type:"submit",children:"عرض"}),r.jsx(Zo,{type:"button",$bg:"#777",onClick:()=>u(!1),children:"إلغاء"})]})]})}),r.jsx(xB,{children:r.jsxs(vB,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"رقم الصنف"}),r.jsx("th",{children:"اسم الصنف"}),r.jsx("th",{children:"تاريخ العودة"}),r.jsx("th",{children:"الوحدة"}),r.jsx("th",{children:"الكمية"}),r.jsx("th",{children:"حالة الصنف"}),r.jsx("th",{children:"القيمة المقدرة"}),r.jsx("th",{children:"رأي لجنة الفحص"})]})}),r.jsx("tbody",{children:RB?.map((K,ue)=>{const X=R[K.name_en],H=AB(Number(X?.mission_meals))||"-",oe=X?.unit||"-";return r.jsxs("tr",{children:[r.jsx("td",{children:ue+1}),r.jsx("td",{children:K.name_ar}),r.jsx("td",{children:F}),r.jsx("td",{children:oe}),r.jsx("td",{children:H}),r.jsx("td",{children:"جيدة"}),r.jsx("td",{}),r.jsx("td",{})]},K.name_en)})})]})}),r.jsxs(CB,{children:[r.jsx("p",{children:"توقيع صاحب العهدة"}),r.jsx("p",{children:"رئيس لجنة الفحص"}),r.jsx("p",{children:"أعضاء اللجنة"}),r.jsx("p",{children:"مدير المخازن"}),r.jsx("p",{})]}),r.jsx("div",{style:{borderTop:"1px solid #333",padding:"1rem",marginLeft:"5rem"}}),r.jsx(jB,{children:r.jsx(wB,{onClick:()=>window.print(),children:"🖨️ طباعة / PDF"})})]})}function NB(){return r.jsx(r6,{})}const OB=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,MB=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,BB=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,UB=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,FB=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,LB=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function PB(){const e=[{title:"الأدوار",path:"roles"},{title:"القوة والتوزيع",path:"force-distribution"},{title:"الشهادات الصحية - وحدة التعيينات",path:"health-certificates"}];return r.jsxs(OB,{children:[r.jsx(MB,{children:"المجندين"}),r.jsx(BB,{children:e.map(a=>r.jsx(UB,{to:`/rations/workforce/soldiers/${a.path}`,children:r.jsx(FB,{children:r.jsx(LB,{children:a.title})})},a.path))})]})}const HB=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,QB=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,GB=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  direction: rtl;
  align-items: center;
`,yu=f(Gt)`
  text-decoration: none;
  color: inherit;
`,bu=f.div`
  height: 11rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.8rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,Ti=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function VB(){return r.jsxs(HB,{children:[r.jsx(QB,{children:"المخازن"}),r.jsxs(GB,{children:[r.jsx(yu,{to:"/rations/stores/dry-meals",children:r.jsxs(bu,{children:[r.jsx(Ti,{style:{fontSize:"2.3rem",fontWeight:"900"},children:"مخزن ( أ )"}),r.jsx(Ti,{children:"الوجبات الجافة / أصناف الترفيه"})]})}),r.jsx(yu,{to:"/rations/stores/fresh-meals",children:r.jsxs(bu,{children:[r.jsx(Ti,{style:{fontSize:"2.3rem",fontWeight:"900"},children:"مخزن ( ب )"}),r.jsx(Ti,{children:"الوجبات الطازجة / أصناف صندوق التحسين"})]})}),r.jsx(yu,{to:"/rations/stores/azim-meats",children:r.jsxs(bu,{children:[r.jsx(Ti,{style:{fontSize:"2.3rem",fontWeight:"900"},children:"مخزن ( ج )"}),r.jsx(Ti,{children:"اللحوم / ضابط عظيم"})]})}),r.jsx(yu,{to:"/rations/stores/allocations",children:r.jsx(bu,{children:r.jsx(Ti,{children:"المقررات"})})})]})]})}const YB=f.h1`
  font-size: 3.2rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
`,IB=f.h2`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
`,KB=[{name:"أرز بلدي",soldiers:{amount:.09,days:"4 مرات يومياً"},individuals:{amount:.09,days:"4 مرات يومياً"},officers:{amount:.09,days:"4 مرات يومياً"}},{name:"مكرونة",soldiers:{amount:.09,days:"3 مرات يومياً"},individuals:{amount:.09,days:"3 مرات يومياً"},officers:{amount:.09,days:"3 مرات يومياً"}},{name:"فول صحيح",soldiers:{amount:.04,days:"يومياً"},individuals:{amount:.04,days:"يومياً"},officers:{amount:"-",days:"-"}},{name:"شعرية",soldiers:{amount:.015,days:"4 مرات يومياً"},individuals:{amount:.015,days:"4 مرات يومياً"},officers:{amount:.015,days:"4 مرات يومياً"}},{name:"صلصة أرز",soldiers:{amount:.015,days:"4 مرات يومياً"},individuals:{amount:.015,days:"4 مرات يومياً"},officers:{amount:.015,days:"4 مرات يومياً"}},{name:"صلصة مكرونة",soldiers:{amount:.025,days:"3 مرات يومياً"},individuals:{amount:.025,days:"3 مرات يومياً"},officers:{amount:.025,days:"3 مرات يومياً"}},{name:"زيت طعام",soldiers:{amount:.017,days:"يومياً"},individuals:{amount:.017,days:"يومياً"},officers:{amount:.012,days:"يومياً"}},{name:"فاصوليا",soldiers:{amount:.04,days:"3 مرات يومياً"},individuals:{amount:.04,days:"3 مرات يومياً"},officers:{amount:.04,days:"3 مرات يومياً"}},{name:"فلفل أسود أرز",soldiers:{amount:25e-5,days:"4 مرات يومياً"},individuals:{amount:25e-5,days:"4 مرات يومياً"},officers:{amount:25e-5,days:"4 مرات يومياً"}},{name:"فلفل أسود مكرونة",soldiers:{amount:75e-5,days:"3 مرات يومياً"},individuals:{amount:75e-5,days:"3 مرات يومياً"},officers:{amount:75e-5,days:"3 مرات يومياً"}},{name:"كمون",soldiers:{amount:25e-5,days:"يومياً"},individuals:{amount:25e-5,days:"يومياً"},officers:{amount:25e-5,days:"يومياً"}},{name:"الملح",soldiers:{amount:.01,days:"يومياً"},individuals:{amount:.01,days:"يومياً"},officers:{amount:.01,days:"يومياً"}},{name:"سكر",soldiers:{amount:.01,days:"يومياً"},individuals:{amount:.01,days:"يومياً"},officers:{amount:.01,days:"يومياً"}},{name:"شاي",soldiers:{amount:.02,days:"يومياً"},individuals:{amount:.02,days:"يومياً"},officers:{amount:.02,days:"يومياً"}},{name:"بصل ناشف للطهي",soldiers:{amount:.01,days:"يومياً"},individuals:{amount:.01,days:"يومياً"},officers:{amount:.01,days:"يومياً"}},{name:"خضار السلطة",soldiers:{amount:.175,days:"يومياً"},individuals:{amount:.175,days:"يومياً"},officers:{amount:.35,days:"يومياً"}},{name:"فاكهة",soldiers:{amount:.175,days:"يومياً"},individuals:{amount:.175,days:"يومياً"},officers:{amount:.175,days:"يومياً"}},{name:"جبنة بيضاء",soldiers:{amount:.8,days:"يومياً"},individuals:{amount:.8,days:"يومياً"},officers:{amount:.8,days:"11 مرات أسبوعياً"}},{name:"مربي",soldiers:{amount:1,days:"5 مرات أسبوعياً"},individuals:{amount:1,days:"5 مرات أسبوعياً"},officers:{amount:2,days:"5 مرات أسبوعياً"}},{name:"حلاوة",soldiers:{amount:1,days:"2 مرات أسبوعياً"},individuals:{amount:1,days:"2 مرات أسبوعياً"},officers:{amount:2,days:"2 مرات أسبوعياً"}},{name:"تونة",soldiers:{amount:1,days:"وجبات جافة"},individuals:{amount:1,days:"وجبات جافة"},officers:{amount:1,days:"وجبات جافة"}},{name:"مياه",soldiers:{amount:2,days:"وجبات جافة"},individuals:{amount:2,days:"وجبات جافة"},officers:{amount:2,days:"وجبات جافة"}},{name:"عصير",soldiers:{amount:2,days:"وجبات جافة"},individuals:{amount:2,days:"وجبات جافة"},officers:{amount:2,days:"وجبات جافة"}},{name:"فول معلب",soldiers:{amount:"-",days:"وجبات جافة"},individuals:{amount:"-",days:"وجبات جافة"},officers:{amount:.5,days:"يومياً"}},{name:"لحوم",soldiers:{amount:.1,days:"مرة واحدة يومياً"},individuals:{amount:.1,days:"مرة واحدة يومياً"},officers:{amount:.1,days:"مرة واحدة يومياً"}},{name:"دواجن",soldiers:{amount:.225,days:"3 مرات يومياً"},individuals:{amount:.225,days:"3 مرات يومياً"},officers:{amount:.225,days:"3 مرات يومياً"}},{name:"بيض",soldiers:{amount:"-",days:"-"},individuals:{amount:"-",days:"-"},officers:{amount:1,days:"10 مرات أسبوعياًً"}},{name:"بهارات",soldiers:{amount:25e-5,days:"يومياً"},individuals:{amount:25e-5,days:"يومياً"},officers:{amount:25e-5,days:"يومياً"}},{name:"ثوم",soldiers:{amount:25e-5,days:"يومياً"},individuals:{amount:25e-5,days:"يومياً"},officers:{amount:25e-5,days:"يومياً"}}];function XB(){return r.jsxs(r.Fragment,{children:[r.jsx(YB,{children:"المقرر الصيفي"}),r.jsx(IB,{children:"بيان بأيام الصرف ومقررات الأصناف"}),r.jsx(ap,{items:KB})]})}async function ZB(){const e=await fetch("/api/permit_number_tarfih?limit=1");if(!e.ok)throw new Error("فشل جلب البيانات");const a=await e.json();return Array.isArray(a)&&a.length?a[0]:null}async function JB(e){const a=await fetch("/api/permit_number_tarfih?limit=1");if(!a.ok)throw new Error("فشل الوصول إلى البيانات");const o=await a.json(),s=Array.isArray(o)&&o.length?o[0]:null,c={value:e,created_at:new Date().toISOString()};if(s&&s.id){const u=await fetch(`/api/permit_number_tarfih/${encodeURIComponent(s.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل التحديث");return await u.json()}else{const u=await fetch("/api/permit_number_tarfih",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error("فشل إنشاء السجل");return await u.json()}}function WB(){return je({queryKey:["permit-number-tarfih"],queryFn:ZB})}function eU(){const e=Te(),a=Re({mutationFn:JB,onSuccess:o=>{e.setQueryData(["permit-number-tarfih"],o)}});return{updateAsync:a.mutateAsync,isPending:a.isPending,isError:a.isError,error:a.error,isSuccess:a.isSuccess}}const tU=f.div`
  background-color: var(--color-grey-50);
  direction: rtl;
  min-width: 120rem;
  padding: 0rem 1rem;
  @media print {
    min-width: auto !important;
    background-color: white;
    color: black;
  }
`,rU=f.div`
  overflow-x: auto;
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;

  @media print {
    box-shadow: none;
  }
`,nU=f.table`
  width: 100%;
  border-collapse: collapse;
  direction: rtl;
  text-align: center;
  font-size: 1.6rem;

  thead {
    background-color: var(--color-brand-600);
    color: white;

    @media print {
      color: black;
    }
  }
  tbody {
    tr:nth-child(even) {
      background-color: var(--color-grey-100);
    }
    tr:hover {
      background-color: var(--color-grey-200);
    }
  }
  td,
  th {
    padding: 1.2rem;
    border: 1px solid var(--color-grey-300);
  }
`,aU=f.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  @media print {
    display: none;
  }
`,iU=f.button`
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-700);
  }
`,Jo=f.button`
  background: ${({$bg:e})=>e||"var(--color-brand-600)"};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 700;
  opacity: ${({disabled:e})=>e?.6:1};
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
  }
  @media print {
    display: none;
  }
`,oU=f.h1`
  display: none;

  text-align: center;
  color: var(--color-brand-700);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 6rem;

  @media print {
    display: block;
  }
`,sU=f.div`
  background: var(--color-grey-0);
  border-radius: 1.2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 1.4rem;
  margin-bottom: 3rem;
  width: 40%;
  margin-right: auto;

  @media print {
    display: none;
  }
`,Dv=f.form`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  flex-wrap: wrap;
`,lU=f.div`
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
`,cU=f.label`
  font-size: 1.25rem;
  color: var(--color-grey-700);
  margin-bottom: 0.4rem;
`,Rv=f.input`
  background-color: var(--color-grey-0);
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 0.6rem;
  width: 100%;
`,Ol=f.div`
  text-align: center;
  margin: 1rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;

  @media print {
    color: black;
  }
`,dU=f.div`
  text-align: center;
  margin: 4rem 2rem 8rem 2rem;

  font-size: 1.8rem;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  @media print {
    color: black;
  }
`,uU=f.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media print {
    color: black;
  }
`,fU=f.div`
  margin: 12px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  @media print {
    display: none;
  }
`,mU=f.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background: ${({$active:e})=>e?"var(--color-brand-700)":"#ddd"};
  color: ${({$active:e})=>e?"white":"black"};
`,hU=[{name_ar:"تونة قطع ضباط",name_en:"tuna-officers"},{name_ar:"تونة قطع مجندين",name_en:"tuna-soldiers"},{name_ar:"بسكوت بالتمر",name_en:"tamr-biscuit"},{name_ar:"بسكوت ويفر",name_en:"wafer-biscuit"},{name_ar:"مياه معدنية",name_en:"mineral-water"},{name_ar:"عصير مراعي",name_en:"marai-juice"}],pU=["tuna-officers","tuna-soldiers","tamr-biscuit","wafer-biscuit","mineral-water","marai-juice"],gU=(e,a=4)=>Number(Number(e).toFixed(a));function yU(){const[e,a]=S.useState(!1),[o,s]=S.useState(null),[c,u]=S.useState(!1),[h,p]=S.useState(""),{data:g,isPending:y}=Ya(),b=g?.date||null,x=o||b,{data:j,isPending:_}=k6(x),{data:C,isPending:$}=WB(),{updateAsync:D,isPending:A}=eU(),{register:M,setValue:O,getValues:z}=Ut(),R=(Array.isArray(j)?j:[])?.filter(X=>X?.mission_meals!==0&&pU.includes(X?.item_name))?.reduce((X,H)=>{const oe=H?.mission_type||"غير محدد";return(X[oe]||=[]).push(H),X},{});for(const X in R)R[X].sort((H,oe)=>new Date(H.created_at)-new Date(oe.created_at));const F={};for(const X in R)F[X]=R[X].reduce((H,oe)=>{const ce=oe.item_name;return H[ce]?H[ce].mission_meals+=oe.mission_meals:H[ce]={...oe},H},{});S.useEffect(()=>{const X=Object.keys(R);if(!X.length){p("");return}h&&X.includes(h)||p(X[X.length-1])},[R,h]);const ie=F[h]||{},K=x?new Date(x).toLocaleDateString("ar-EG"):"-";async function ue(X){X.preventDefault();const H=await D(z("value"));O("value",H?.value),a(!1)}return y||_||$?r.jsx(Ae,{}):r.jsxs(tU,{children:[r.jsx(oU,{children:"قطاع الشهيد الرائد / عمرو مسعد عبد الشافي"}),r.jsxs(Ol,{children:[r.jsx("p",{children:"مخزن : وحدة التعيينات"}),r.jsx("p",{children:"مستديم"}),r.jsx("p",{}),r.jsx("p",{}),r.jsx("p",{children:"نموذج ( 2 ) مخازن حكومة"}),r.jsx("p",{})]}),r.jsxs(Ol,{children:[r.jsxs("p",{children:[" تاريخ الطلب : ",K]}),r.jsxs("p",{children:["طلب إذن صرف مأمورية : ",h||""]}),r.jsx("p",{}),r.jsx("p",{})]}),r.jsxs(Ol,{children:[r.jsx("p",{children:"اسم الطالب المخزن الإدارة"}),r.jsx("p",{children:"مستهلك"}),r.jsx("p",{}),r.jsxs(uU,{children:[r.jsx("span",{children:" رقم الإذن : "}),e?r.jsxs(Dv,{onSubmit:ue,children:[r.jsx(Rv,{style:{width:"6rem",height:"3rem",textAlign:"center"},type:"number",defaultValue:C?.value,...M("value",{required:!0})}),r.jsx(Jo,{disabled:A,type:"submit",style:{padding:"0.5rem",marginBottom:"0"},children:r.jsx(nc,{})}),r.jsx(Jo,{disabled:A,style:{padding:"0.5rem",marginBottom:"0",background:"#777"},type:"button",onClick:()=>{a(!1),O("value",C?.value??"")},children:r.jsx(ac,{})})]}):!o&&r.jsxs(r.Fragment,{children:[r.jsx("span",{children:C?.value}),r.jsx(Jo,{disabled:A,style:{padding:"0.2rem 0.3rem",marginBottom:"0"},onClick:()=>a(X=>!X),children:r.jsx(ic,{})})]})]}),r.jsx("p",{})]}),r.jsx(Ol,{children:r.jsx("p",{style:{fontSize:"3rem",margin:"auto",marginTop:"4rem"},children:"ترفيه"})}),r.jsxs(Ol,{children:[r.jsx(fU,{children:Object.keys(R).map(X=>r.jsx(mU,{$active:h===X,onClick:()=>p(X),children:X},X))}),r.jsx(Jo,{style:{color:"black"},$bg:"#f1ce08",onClick:()=>u(X=>!X),children:c?"✖️ إغلاق":"عرض إذن سابق"})]}),c&&r.jsx(sU,{children:r.jsxs(Dv,{onSubmit:X=>{X.preventDefault(),s(X.target.date.value||null),u(!1)},children:[r.jsxs(lU,{children:[r.jsx(cU,{children:"اختر تاريخ"}),r.jsx(Rv,{name:"date",type:"date"})]}),r.jsxs("div",{style:{display:"flex",gap:12,width:"100%"},children:[r.jsx(Jo,{type:"submit",children:"عرض"}),r.jsx(Jo,{type:"button",$bg:"#777",onClick:()=>u(!1),children:"إلغاء"})]})]})}),r.jsx(rU,{children:r.jsxs(nU,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"رقم الصنف"}),r.jsx("th",{children:"اسم الصنف"}),r.jsx("th",{children:"الوحدة"}),r.jsx("th",{children:"الكمية المطلوبة"}),r.jsx("th",{children:"الكمية المصرح بها"}),r.jsx("th",{children:"الكمية المنصرفة"}),r.jsx("th",{children:"حالة الصنف"}),r.jsx("th",{children:"سعر الوحدة"}),r.jsx("th",{style:{width:"8%"},children:"القيمة"}),r.jsx("th",{style:{width:"13%"},children:"ملاحظات"})]})}),r.jsx("tbody",{children:hU?.map((X,H)=>{const oe=ie[X.name_en],ce=gU(Number(oe?.mission_meals))||"-";return r.jsxs("tr",{children:[r.jsx("td",{children:H+1}),r.jsx("td",{children:X.name_ar}),r.jsx("td",{children:oe?.unit||"-"}),r.jsx("td",{children:ce}),r.jsx("td",{children:ce}),r.jsx("td",{children:ce}),r.jsx("td",{children:"جيدة"}),r.jsx("td",{}),r.jsx("td",{}),r.jsx("td",{})]},X.name_en)})})]})}),r.jsxs(dU,{children:[r.jsx("p",{children:"توقيع الطالب"}),r.jsxs("p",{children:["يصرح بالصرف",r.jsx("br",{}),"مدير المخازن"]}),r.jsxs("p",{children:["تم الصرف",r.jsx("br",{}),"أمين المخزن"]}),r.jsx("p",{children:"كاتب الشطب"}),r.jsx("p",{children:"توقيع المستلم"}),r.jsx("p",{})]}),r.jsxs("div",{style:{borderTop:"1px solid #333",padding:12,marginLeft:"5rem"},children:[r.jsx("p",{children:"(*) كشف العجز سند خصم أصناف فاقدة أو تالفة - محضر بيع - طلب تشغيل - اهداء ليست النشاط للجهة"}),r.jsx("p",{children:"(*) جديدة - مستعمل - قابل للإصلاح - كهنة أو خردة"})]}),r.jsx(aU,{children:r.jsx(iU,{onClick:()=>window.print(),children:"🖨️ طباعة / PDF"})})]})}const bU=f.h1`
  font-size: 3.2rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
`,xU=f.h2`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
`,vU=[{name:"شعرية",soldiers:{amount:.018,days:"يومياً"},individuals:{amount:.018,days:"يومياً"},officers:{amount:.015,days:"يومياً"}},{name:"زيت طعام",soldiers:{amount:.02,days:"يومياً"},individuals:{amount:.02,days:"يومياً"},officers:{amount:.012,days:"يومياً"}},{name:"بصل ناشف",soldiers:{amount:.011,days:"يومياً"},individuals:{amount:.011,days:"يومياً"},officers:{amount:.01,days:"يومياً"}},{name:"عدس",soldiers:{amount:.015,days:"يومياً"},individuals:{amount:.015,days:"يومياً"},officers:{amount:"-",days:"-"}},{name:"ثوم",soldiers:{amount:.0028,days:"يومياً"},individuals:{amount:.0028,days:"يومياً"},officers:{amount:.0025,days:"يومياً"}}];function jU(){return r.jsxs(r.Fragment,{children:[r.jsx(bU,{children:"المقرر الشتوي"}),r.jsx(xU,{children:"بيان بأيام الصرف ومقررات الأصناف"}),r.jsx(ap,{items:vU})]})}const wU=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,_U=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,SU=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,kU=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,$U=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,CU=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function EU(){const e=[{title:"ضباط",path:"officers"},{title:"أفراد",path:"afrad"},{title:"مجندين",path:"soldiers"}];return r.jsxs(wU,{children:[r.jsx(_U,{children:"القوة العاملة"}),r.jsx(SU,{children:e.map(a=>r.jsx(kU,{to:`/rations/workforce/${a.path}`,children:r.jsx($U,{children:r.jsx(CU,{children:a.title})})},a.path))})]})}const TU=f.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: var(--color-grey-50);
  gap: 3rem;
`,DU=f.h1`
  font-size: 2.8rem;
  color: var(--color-brand-700);
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`,RU=f.div`
  display: grid;
  gap: 3rem;
  direction: rtl;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  & > :last-child {
    grid-column: 1 / -1;
    width: 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > :last-child {
      width: 100%;
    }
  }
`,zU=f(Gt)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`,AU=f.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.2rem;
  padding: 3rem 2.4rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`,qU=f.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;function NU(){const e=[{title:"الأدوار",path:"bakery-roles"},{title:"المجندين",path:"bakery-soldiers"},{title:"الشهادات الصحية - وحدة المخبز",path:"bakery-health-certificates"}];return r.jsxs(TU,{children:[r.jsx(DU,{children:"القوة العاملة"}),r.jsx(RU,{children:e.map(a=>r.jsx(zU,{to:`/bakery/workforce-bakery/${a.path}`,children:r.jsx(AU,{children:r.jsx(qU,{children:a.title})})},a.path))})]})}const A6=E_`
  :root {
    /* Grey */
    &,
    &.light-mode {
      --color-grey-0: #fff;
      --color-grey-50: #f9fafb;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #e5e7eb;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9ca3af;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;

      --color-blue-100: #e0f2fe;
      --color-blue-700: #0369a1;
      --color-green-100: #dcfce7;
      --color-green-700: #15803d;
      --color-yellow-100: #fef9c3;
      --color-yellow-700: #a16207;
      --color-silver-100: #e5e7eb;
      --color-silver-700: #374151;
      --color-indigo-100: #e0e7ff;
      --color-indigo-700: #4338ca;

      --color-red-100: #fee2e2;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;

      --backdrop-color: rgba(255, 255, 255, 0.1);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
      --image-grayscale: 0;
      --image-opacity: 100%;
    }

    &.dark-mode {
      --color-grey-0: #18212f;
      --color-grey-50: #111827;
      --color-grey-100: #1f2937;
      --color-grey-200: #374151;
      --color-grey-300: #4b5563;
      --color-grey-400: #6b7280;
      --color-grey-500: #9ca3af;
      --color-grey-600: #d1d5db;
      --color-grey-700: #e5e7eb;
      --color-grey-800: #f3f4f6;
      --color-grey-900: #f9fafb;

      --color-blue-100: #075985;
      --color-blue-700: #e0f2fe;
      --color-green-100: #166534;
      --color-green-700: #dcfce7;
      --color-yellow-100: #854d0e;
      --color-yellow-700: #fef9c3;
      --color-silver-100: #374151;
      --color-silver-700: #f3f4f6;
      --color-indigo-100: #3730a3;
      --color-indigo-700: #e0e7ff;

      --color-red-100: #fee2e2;
      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;

      --backdrop-color: rgba(0, 0, 0, 0.3);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

      --image-grayscale: 10%;
      --image-opacity: 90%;
    }

    /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 55%;
  }

  @media (max-width: 1150px) {
    html {
      font-size: 46%;
    }
  }

  @media (max-width: 700px) {
    html {
      font-size: 35%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: var(--color-grey-700);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.8rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  @media (max-width: 600px) {
    body > * {
      display: none !important;
    }

    body::before {
      content: 'هذا الموقع غير متاح على الشاشات الصغيرة. برجاء فتحه على جهاز أكبر';
      display: block;
      margin-top: 12rem;
      padding: 6rem;
      text-align: center;
      font-size: 3rem;
      line-height: 1.6;
      color: #333;
    }
  }

  @media (max-width: 600px) {
    body > * {
      display: none !important;
    }
  }
`;function OU(e){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"},child:[]}]})(e)}function MU(e){return qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function BU(e){return qe({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"},child:[]}]})(e)}const q6=f.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;function UU(){const e=ur(),a=Te(),{mutate:o,isPending:s}=Re({mutationFn:jq,onSuccess:()=>{a.removeQueries({queryKey:["user"]}),e("/login",{replace:!0})}});return{logout:o,isPending:s}}function FU(){const{logout:e,isPending:a}=UU();return r.jsx(q6,{onClick:e,disabled:a,children:a?r.jsx(z6,{}):r.jsx(BU,{})})}function LU(e){return qe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},child:[]}]})(e)}function PU(e){return qe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},child:[]}]})(e)}function HU(){const{isDarkMode:e,toggleDarkMode:a}=ow();return r.jsx(q6,{onClick:a,children:e?r.jsx(PU,{}):r.jsx(LU,{})})}const QU=f.ul`
  display: flex;
  gap: 0.4rem;
`;function GU(){return r.jsxs(QU,{children:[r.jsx("li",{children:r.jsx(HU,{})}),r.jsx("li",{children:r.jsx(FU,{})})]})}const VU=f.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media print {
    display: none;
  }
`,YU=f.button`
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  color: var(--color-grey-700);

  &:hover {
    color: var(--color-brand-600);
  }
`,IU=f.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;function KU({onToggleSidebar:e}){return r.jsxs(VU,{children:[r.jsx(YU,{onClick:e,children:r.jsx(MU,{})}),r.jsx(IU,{children:r.jsx(GU,{})})]})}function XU(e){return qe({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z",fill:"currentColor"},child:[]}]})(e)}function ZU(e){return qe({attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 4 C 8.822 4 4 8.4303594 4 12.568359 C 4 14.014359 4.775 15.191891 6 15.712891 L 6 24 C 6 26.206 7.794 28 10 28 L 22 28 C 24.206 28 26 26.206 26 24 L 26 15.712891 C 27.225 15.191891 28 14.014359 28 12.568359 C 28 8.4303594 23.178 4 16 4 z M 16 6 C 22.438 6 26 9.8833594 26 12.568359 C 26 13.336359 25.56675 13.862562 24.84375 13.976562 L 24 14.111328 L 24 24 C 24 25.103 23.103 26 22 26 L 10 26 C 8.897 26 8 25.103 8 24 L 8 14.111328 L 7.15625 13.978516 C 6.43325 13.863516 6 13.336359 6 12.568359 C 6 9.8833594 9.562 6 16 6 z"},child:[]}]})(e)}const JU=f.ul`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
`,Z0=f(g3)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    color: var(--color-grey-600);
    font-size: 2rem;
    font-weight: 500;
    padding: 2rem 1rem;
    margin: 3rem 0;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function WU(){return r.jsx("nav",{children:r.jsxs(JU,{children:[r.jsx("li",{children:r.jsxs(Z0,{to:"/dashboard",children:[r.jsx(OU,{}),r.jsx("span",{children:"الصفحة الرئيسية"})]})}),r.jsx("li",{children:r.jsxs(Z0,{to:"/rations",children:[r.jsx(XU,{}),r.jsx("span",{children:"وحدة التعيينات"})]})}),r.jsx("li",{children:r.jsxs(Z0,{to:"/bakery",children:[r.jsx(ZU,{}),r.jsx("span",{children:"وحدة المخبز"})]})})]})})}const eF=f.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 24rem;
  transform: ${e=>e.$isOpen?"translateX(0)":"translateX(-100%)"};
  opacity: ${e=>e.$isOpen?"1":"0"};
  pointer-events: ${e=>e.$isOpen?"auto":"none"};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;function tF({isOpen:e}){return r.jsx(eF,{$isOpen:e,children:r.jsx(WU,{})})}const rF=f.div`
  position: relative;
  display: grid;
  grid-template-columns: ${e=>e.$sidebarOpen?"24rem 1fr":"0rem 1fr"};
  grid-template-rows: auto 1fr;
  height: 100dvh;
  transition: grid-template-columns 0.3s ease;
  background-color: var(--color-grey-50);
`,nF=f.main`
  background-color: var(--color-grey-50);
  overflow: auto;
`,aF=f.div`
  position: relative;
  max-width: 135rem;
  gap: 3.2rem;
  margin: 4rem auto;

  @media (max-width: 700px) {
    margin-top: 6rem;
  }
  @media print {
    margin-top: 12rem;
  }
`,iF=f.button`
  position: absolute;
  left: 1%;
  background: var(--color-grey-0);
  color: var(--color-brand-600);
  border: none;
  &:focus {
    outline: none;
  }

  font-size: 2.5rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);

  @media print {
    display: none;
  }

  &:hover {
    transform: translateX(-1px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    background-color: var(--color-grey-100);
  }
`;function oF(){const[e,a]=S.useState(!1),o=ur(),c=vn().pathname==="/dashboard";return r.jsxs(rF,{$sidebarOpen:e,children:[r.jsx(KU,{onToggleSidebar:()=>a(u=>!u)}),r.jsx(tF,{isOpen:e}),r.jsx(nF,{children:r.jsxs(aF,{children:[!c&&r.jsx(iF,{onClick:()=>o(-1),children:r.jsx(_C,{})}),r.jsx(w8,{})]})})]})}function sF(){const{isPending:e,data:a}=je({queryKey:["user"],queryFn:wq});return{isPending:e,user:a,isAuthenticated:!!a}}const lF=f.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;function cF({children:e}){const a=ur(),{isPending:o,isAuthenticated:s}=sF();if(S.useEffect(function(){!o&&!s&&a("/login")},[s,o,a]),o)return r.jsx(lF,{children:r.jsx(Ae,{})});if(s)return e}const N6=new _5({defaultOptions:{queries:{staleTime:0}}});window.__queryClient=N6;function dF(){return r.jsx(iw,{children:r.jsxs(T5,{client:N6,children:[r.jsx(K8,{children:r.jsxs(S8,{children:[r.jsxs(be,{element:r.jsx(cF,{children:r.jsx(oF,{})}),children:[r.jsx(be,{index:!0,element:r.jsx(j8,{replace:!0,to:"dashboard"})}),r.jsx(be,{path:"dashboard",element:r.jsx(xE,{})}),r.jsx(be,{path:"rations",element:r.jsx(gB,{})}),r.jsx(be,{path:"bakery",element:r.jsx(jS,{})}),r.jsx(be,{path:"bakery/bakery-items",element:r.jsx(Xk,{})}),r.jsx(be,{path:"bakery/bakery-stock",element:r.jsx(I$,{})}),r.jsx(be,{path:"bakery/bakery-incoming",element:r.jsx(Ak,{})}),r.jsx(be,{path:"bakery/bakery-output",element:r.jsx(f$,{})}),r.jsx(be,{path:"bakery/workforce-bakery",element:r.jsx(NU,{})}),r.jsx(be,{path:"bakery/daily-bakery",element:r.jsx(ik,{})}),r.jsx(be,{path:"bakery/workforce-bakery/bakery-roles",element:r.jsx(q$,{})}),r.jsx(be,{path:"bakery/workforce-bakery/bakery-soldiers",element:r.jsx(N$,{})}),r.jsx(be,{path:"bakery/workforce-bakery/bakery-health-certificates",element:r.jsx(vk,{})}),r.jsx(be,{path:"rations/stores",element:r.jsx(VB,{})}),r.jsx(be,{path:"rations/workforce",element:r.jsx(EU,{})}),r.jsx(be,{path:"rations/numbers-report",element:r.jsx($M,{})}),r.jsx(be,{path:"rations/daily-withdrawal",element:r.jsx(uE,{})}),r.jsx(be,{path:"rations/fresh-permit",element:r.jsx(Yz,{})}),r.jsx(be,{path:"rations/dry-permit",element:r.jsx(LD,{})}),r.jsx(be,{path:"rations/tarfih-permit",element:r.jsx(yU,{})}),r.jsx(be,{path:"rations/return-permit",element:r.jsx(qB,{})}),r.jsx(be,{path:"rations/monthly-consumption",element:r.jsx(uM,{})}),r.jsx(be,{path:"rations/workforce/officers",element:r.jsx(QM,{})}),r.jsx(be,{path:"rations/workforce/afrad",element:r.jsx(u9,{})}),r.jsx(be,{path:"rations/workforce/soldiers",element:r.jsx(PB,{})}),r.jsx(be,{path:"rations/workforce/soldiers/health-certificates",element:r.jsx(RA,{})}),r.jsx(be,{path:"/rations/workforce/soldiers/distribution/branches",element:r.jsx(tC,{})}),r.jsx(be,{path:"/rations/workforce/soldiers/distribution/branches/office-soldiers",element:r.jsx(VM,{})}),r.jsx(be,{path:"/rations/workforce/soldiers/distribution/branches/officers-hall",element:r.jsx(GM,{})}),r.jsx(be,{path:"/rations/workforce/soldiers/distribution/branches/personnel-hall",element:r.jsx(XM,{})}),r.jsx(be,{path:"/rations/workforce/soldiers/distribution/branches/rations-unit",element:r.jsx(yB,{})}),r.jsx(be,{path:"/rations/workforce/soldiers/distribution/branches/admin-affairs",element:r.jsx(I_,{})}),r.jsx(be,{path:"rations/workforce/soldiers/distribution/force",element:r.jsx(kR,{})}),r.jsx(be,{path:"rations/workforce/soldiers/force-distribution",element:r.jsx(zR,{})}),r.jsx(be,{path:"rations/workforce/soldiers/roles",element:r.jsx(NB,{})}),r.jsx(be,{path:"rations/stores/dry-meals",element:r.jsx(gD,{})}),r.jsx(be,{path:"rations/stores/fresh-meals",element:r.jsx(Tz,{})}),r.jsx(be,{path:"/rations/stores/fresh-meals/reports/daily",element:r.jsx(pC,{})}),r.jsx(be,{path:"/rations/stores/fresh-meals/reports/range",element:r.jsx(fB,{})}),r.jsx(be,{path:"rations/stores/fresh-meals/fresh-items",element:r.jsx(WR,{})}),r.jsx(be,{path:"rations/stores/fresh-meals/fresh-items/:itemName",element:r.jsx(_z,{})}),r.jsx(be,{path:"rations/stores/fresh-meals/fresh-stock",element:r.jsx(gA,{})}),r.jsx(be,{path:"rations/stores/fresh-meals/fresh-incoming/",element:r.jsx(BR,{})}),r.jsx(be,{path:"rations/stores/dry-meals/dry-items",element:r.jsx(BT,{})}),r.jsx(be,{path:"/rations/stores/dry-meals/reports/daily",element:r.jsx(AE,{})}),r.jsx(be,{path:"/rations/stores/dry-meals/reports/range",element:r.jsx(XD,{})}),r.jsx(be,{path:"rations/stores/dry-meals/dry-items/:itemName",element:r.jsx(dD,{})}),r.jsx(be,{path:"rations/stores/dry-meals/dry-stock",element:r.jsx(xR,{})}),r.jsx(be,{path:"rations/stores/dry-meals/dry-incoming/",element:r.jsx(uT,{})}),r.jsx(be,{path:"rations/stores/dry-meals/dry-incoming/:itemName",element:r.jsx(aT,{})}),r.jsx(be,{path:"rations/stores/azim-meats",element:r.jsx(j9,{})}),r.jsx(be,{path:"rations/stores/azim-meats/azim",element:r.jsx(hS,{})}),r.jsx(be,{path:"rations/stores/fresh-meals/fresh-incoming/:itemName",element:r.jsx(tq,{})}),r.jsx(be,{path:"/rations/stores/fresh-meals/fresh-incoming/reports/range-single",element:r.jsx(IR,{})}),r.jsx(be,{path:"/rations/stores/fresh-meals/fresh-incoming/reports/range",element:r.jsx(uq,{})}),r.jsx(be,{path:"/rations/stores/fresh-meals/reports/item-range",element:r.jsx(nA,{})}),r.jsx(be,{path:"/rations/stores/dry-meals/reports/item-range",element:r.jsx(oR,{})}),r.jsx(be,{path:"/rations/stores/dry-meals/dry-incoming/reports/range-single",element:r.jsx(RT,{})}),r.jsx(be,{path:"/rations/stores/dry-meals/dry-incoming/reports/range",element:r.jsx(jT,{})}),r.jsx(be,{path:"rations/stores/azim-meats/meat-meals",element:r.jsx(vO,{})}),r.jsx(be,{path:"/rations/stores/azim-meats/meat-meals/reports/daily",element:r.jsx(Lq,{})}),r.jsx(be,{path:"/rations/stores/azim-meats/meat-meals/reports/range",element:r.jsx(DO,{})}),r.jsx(be,{path:"rations/stores/azim-meats/meat-meals/meat-items",element:r.jsx(HN,{})}),r.jsx(be,{path:"rations/stores/azim-meats/meat-meals/meat-items/:itemName",element:r.jsx(mO,{})}),r.jsx(be,{path:"rations/stores/azim-meats/meat-meals/meat-stock",element:r.jsx(WO,{})}),r.jsx(be,{path:"rations/stores/azim-meats/meat-meals/meat-incoming/",element:r.jsx(yN,{})}),r.jsx(be,{path:"rations/stores/azim-meats/meat-meals/meat-incoming/:itemName",element:r.jsx(uN,{})}),r.jsx(be,{path:"/rations/stores/azim-meats/meat-meals/meat-incoming/reports/range-single",element:r.jsx(MN,{})}),r.jsx(be,{path:"/rations/stores/azim-meats/meat-meals/meat-incoming/reports/range",element:r.jsx(CN,{})}),r.jsx(be,{path:"/rations/stores/azim-meats/meat-meals/reports/item-range",element:r.jsx(FO,{})}),r.jsx(be,{path:"rations/stores/allocations",element:r.jsx(b9,{})}),r.jsx(be,{path:"rations/stores/allocations/summer",element:r.jsx(XB,{})}),r.jsx(be,{path:"rations/stores/allocations/winter",element:r.jsx(jU,{})}),r.jsx(be,{path:"rations/stores/allocations/ramadan",element:r.jsx(rB,{})})]}),r.jsx(be,{path:"login",element:r.jsx(Cq,{})}),r.jsx(be,{path:"*",element:r.jsx(KM,{})})]})}),r.jsx(_7,{gutter:12,containerStyle:{margin:"0.8rem"},toastOptions:{style:{fontSize:"1.6rem",maxWidth:"50rem",padding:"1.6rem 2.4rem",backgroundColor:"var(--color-grey-0)",color:"var(--color-grey-700)"},success:{duration:5e3},error:{duration:5e3}}}),r.jsx(A6,{}),r.jsx(A5,{initialIsOpen:!1})]})})}const uF=f.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,fF=f.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: 'Sono';
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;function mF({error:e,resetErrorBoundary:a}){return r.jsxs(r.Fragment,{children:[r.jsx(A6,{}),r.jsx(uF,{children:r.jsxs(fF,{children:[r.jsx(np,{as:"h1",children:"Something went wrong 😕"}),r.jsx("p",{children:e.message}),r.jsx(tp,{$size:"large",onClick:a,children:"Try again"})]})})]})}a5.createRoot(document.getElementById("root")).render(r.jsx(S.StrictMode,{children:r.jsx(o5,{FallbackComponent:mF,onReset:()=>window.location.replace("/"),children:r.jsx(dF,{})})}));
