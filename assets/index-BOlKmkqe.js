import{X as e,r as t,cN as n,aF as r,c4 as o,cO as s,Y as i,x as a,ae as c,c5 as l,bm as u,aB as f,a4 as d,br as h,aW as p}from"./index-Qa5VqOB0.js";function m(e,t){return function(){return e.apply(t,arguments)}}const{toString:g}=Object.prototype,{getPrototypeOf:y}=Object,b=(e=>t=>{const n=g.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),E=e=>(e=e.toLowerCase(),t=>b(t)===e),w=e=>t=>typeof t===e,{isArray:O}=Array,S=w("undefined");const R=E("ArrayBuffer");const A=w("string"),v=w("function"),T=w("number"),j=e=>null!==e&&"object"==typeof e,C=e=>{if("object"!==b(e))return!1;const t=y(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},x=E("Date"),N=E("File"),P=E("Blob"),_=E("FileList"),D=E("URLSearchParams");function F(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),O(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function U(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,B=e=>!S(e)&&e!==L;const k=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&y(Uint8Array)),q=E("HTMLFormElement"),I=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),z=E("RegExp"),M=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},H="abcdefghijklmnopqrstuvwxyz",J="0123456789",V={DIGIT:J,ALPHA:H,ALPHA_DIGIT:H+H.toUpperCase()+J};const W=E("AsyncFunction"),K={isArray:O,isArrayBuffer:R,isBuffer:function(e){return null!==e&&!S(e)&&null!==e.constructor&&!S(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||v(e.append)&&("formdata"===(t=b(e))||"object"===t&&v(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&R(e.buffer),t},isString:A,isNumber:T,isBoolean:e=>!0===e||!1===e,isObject:j,isPlainObject:C,isUndefined:S,isDate:x,isFile:N,isBlob:P,isRegExp:z,isFunction:v,isStream:e=>j(e)&&v(e.pipe),isURLSearchParams:D,isTypedArray:k,isFileList:_,forEach:F,merge:function e(){const{caseless:t}=B(this)&&this||{},n={},r=(r,o)=>{const s=t&&U(n,o)||o;C(n[s])&&C(r)?n[s]=e(n[s],r):C(r)?n[s]=e({},r):O(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&F(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(F(t,((t,r)=>{n&&v(t)?e[r]=m(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:b,kindOfTest:E,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(O(e))return e;let t=e.length;if(!T(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:q,hasOwnProperty:I,hasOwnProp:I,reduceDescriptors:M,freezeMethods:e=>{M(e,((t,n)=>{if(v(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];v(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return O(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:U,global:L,isContextDefined:B,ALPHABET:V,generateString:(e=16,t=V.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&v(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(j(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=O(e)?[]:{};return F(e,((e,t)=>{const s=n(e,r+1);!S(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:W,isThenable:e=>e&&(j(e)||v(e))&&v(e.then)&&v(e.catch)};function $(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}K.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const G=$.prototype,X={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{X[e]={value:e}})),Object.defineProperties($,X),Object.defineProperty(G,"isAxiosError",{value:!0}),$.from=(e,t,n,r,o,s)=>{const i=Object.create(G);return K.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),$.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function Q(e){return K.isPlainObject(e)||K.isArray(e)}function Y(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}function Z(e,t,n){return e?e.concat(t).map((function(e,t){return e=Y(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ee=K.toFlatObject(K,{},null,(function(e){return/^is[A-Z]/.test(e)}));function te(e,t,n){if(!K.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!K.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&K.isSpecCompliantForm(t);if(!K.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(K.isDate(e))return e.toISOString();if(!a&&K.isBlob(e))throw new $("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(e)||K.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(K.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(K.isArray(e)&&function(e){return K.isArray(e)&&!e.some(Q)}(e)||(K.isFileList(e)||K.endsWith(n,"[]"))&&(a=K.toArray(e)))return n=Y(n),a.forEach((function(e,r){!K.isUndefined(e)&&null!==e&&t.append(!0===i?Z([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!Q(e)||(t.append(Z(o,n,s),c(e)),!1)}const u=[],f=Object.assign(ee,{defaultVisitor:l,convertValue:c,isVisitable:Q});if(!K.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!K.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),K.forEach(n,(function(n,s){!0===(!(K.isUndefined(n)||null===n)&&o.call(t,n,K.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function re(e,t){this._pairs=[],e&&te(e,this,t)}const oe=re.prototype;function se(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ie(e,t,n){if(!t)return e;const r=n&&n.encode||se,o=n&&n.serialize;let s;if(s=o?o(t,n):K.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}oe.append=function(e,t){this._pairs.push([e,t])},oe.toString=function(e){const t=e?function(t){return e.call(this,t,ne)}:ne;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ae=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:re,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ue="undefined"!=typeof window&&"undefined"!=typeof document,fe=(de="undefined"!=typeof navigator&&navigator.product,ue&&["ReactNative","NativeScript","NS"].indexOf(de)<0);var de;const he="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,pe={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ue,hasStandardBrowserEnv:fe,hasStandardBrowserWebWorkerEnv:he},Symbol.toStringTag,{value:"Module"})),...le};function me(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&K.isArray(r)?r.length:s,a)return K.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&K.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&K.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(K.isFormData(e)&&K.isFunction(e.entries)){const n={};return K.forEachEntry(e,((e,r)=>{t(function(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ge={transitional:ce,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=K.isObject(e);o&&K.isHTMLForm(e)&&(e=new FormData(e));if(K.isFormData(e))return r&&r?JSON.stringify(me(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return te(e,new pe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return pe.isNode&&K.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=K.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return te(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(K.isString(e))try{return(t||JSON.parse)(e),K.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ge.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&K.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw $.from(o,$.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pe.classes.FormData,Blob:pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],(e=>{ge.headers[e]={}}));const ye=ge,be=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ee=Symbol("internals");function we(e){return e&&String(e).trim().toLowerCase()}function Oe(e){return!1===e||null==e?e:K.isArray(e)?e.map(Oe):String(e)}function Se(e,t,n,r,o){return K.isFunction(r)?r.call(this,t,n):(o&&(t=n),K.isString(t)?K.isString(r)?-1!==t.indexOf(r):K.isRegExp(r)?r.test(t):void 0:void 0)}let Re=class{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=we(t);if(!o)throw new Error("header name must be a non-empty string");const s=K.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Oe(e))}const s=(e,t)=>K.forEach(e,((e,n)=>o(e,n,t)));return K.isPlainObject(e)||e instanceof this.constructor?s(e,t):K.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&be[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=we(e)){const n=K.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(K.isFunction(t))return t.call(this,e,n);if(K.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=we(e)){const n=K.findKey(this,e);return!(!n||void 0===this[n]||t&&!Se(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=we(e)){const o=K.findKey(n,e);!o||t&&!Se(0,n[o],o,t)||(delete n[o],r=!0)}}return K.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Se(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return K.forEach(this,((r,o)=>{const s=K.findKey(n,o);if(s)return t[s]=Oe(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Oe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return K.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&K.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ee]=this[Ee]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=we(e);t[r]||(!function(e,t){const n=K.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return K.isArray(e)?e.forEach(r):r(e),this}};Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),K.reduceDescriptors(Re.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),K.freezeMethods(Re);const Ae=Re;function ve(e,t){const n=this||ye,r=t||n,o=Ae.from(r.headers);let s=r.data;return K.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Te(e){return!(!e||!e.__CANCEL__)}function je(e,t,n){$.call(this,null==e?"canceled":e,$.ERR_CANCELED,t,n),this.name="CanceledError"}K.inherits(je,$,{__CANCEL__:!0});const Ce=pe.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];K.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),K.isString(r)&&i.push("path="+r),K.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ne=pe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=K.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function Pe(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const _e={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Ae.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(K.isFormData(r))if(pe.hasStandardBrowserEnv||pe.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=xe(e.baseURL,e.url);function d(){if(!u)return;const r=Ae.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),ie(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new $("Request aborted",$.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new $("Network Error",$.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ce;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new $(t,r.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,u)),u=null},pe.hasStandardBrowserEnv&&(c&&K.isFunction(c)&&(c=c(e)),c||!1!==c&&Ne(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&Ce.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&K.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),K.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",Pe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new je(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);h&&-1===pe.protocols.indexOf(h)?n(new $("Unsupported protocol "+h+":",$.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};K.forEach(_e,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const De=e=>`- ${e}`,Fe=e=>K.isFunction(e)||null===e||!1===e,Ue=e=>{e=K.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Fe(n)&&(r=_e[(t=String(n)).toLowerCase()],void 0===r))throw new $(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new $("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(De).join("\n"):" "+De(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new je(null,e)}function Be(e){Le(e),e.headers=Ae.from(e.headers),e.data=ve.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ue(e.adapter||ye.adapter)(e).then((function(t){return Le(e),t.data=ve.call(e,e.transformResponse,t),t.headers=Ae.from(t.headers),t}),(function(t){return Te(t)||(Le(e),t&&t.response&&(t.response.data=ve.call(e,e.transformResponse,t.response),t.response.headers=Ae.from(t.response.headers))),Promise.reject(t)}))}const ke=e=>e instanceof Ae?e.toJSON():e;function qe(e,t){t=t||{};const n={};function r(e,t,n){return K.isPlainObject(e)&&K.isPlainObject(t)?K.merge.call({caseless:n},e,t):K.isPlainObject(t)?K.merge({},t):K.isArray(t)?t.slice():t}function o(e,t,n){return K.isUndefined(t)?K.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!K.isUndefined(t))return r(void 0,t)}function i(e,t){return K.isUndefined(t)?K.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(ke(e),ke(t),!0)};return K.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);K.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ie="1.6.2",ze={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ze[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Me={};ze.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new $(function(e,t){return"[Axios v1.6.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),$.ERR_DEPRECATED);return t&&!Me[o]&&(Me[o]=!0),!e||e(r,o,s)}};const He={assertOptions:function(e,t,n){if("object"!=typeof e)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new $("option "+s+" must be "+n,$.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new $("Unknown option "+s,$.ERR_BAD_OPTION)}},validators:ze},Je=He.validators;let Ve=class{constructor(e){this.defaults=e,this.interceptors={request:new ae,response:new ae}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=qe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&He.assertOptions(n,{silentJSONParsing:Je.transitional(Je.boolean),forcedJSONParsing:Je.transitional(Je.boolean),clarifyTimeoutError:Je.transitional(Je.boolean)},!1),null!=r&&(K.isFunction(r)?t.paramsSerializer={serialize:r}:He.assertOptions(r,{encode:Je.function,serialize:Je.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&K.merge(o.common,o[t.method]);o&&K.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ae.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[Be.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{l=Be.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ie(xe((e=qe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}};K.forEach(["delete","get","head","options"],(function(e){Ve.prototype[e]=function(t,n){return this.request(qe(n||{},{method:e,url:t,data:(n||{}).data}))}})),K.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(qe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ve.prototype[e]=t(),Ve.prototype[e+"Form"]=t(!0)}));const We=Ve;const Ke=class e{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new je(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let t;return{token:new e((function(e){t=e})),cancel:t}}};const $e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($e).forEach((([e,t])=>{$e[t]=e}));const Ge=$e;const Xe=function e(t){const n=new We(t),r=m(We.prototype.request,n);return K.extend(r,We.prototype,n,{allOwnKeys:!0}),K.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(qe(t,n))},r}(ye);Xe.Axios=We,Xe.CanceledError=je,Xe.CancelToken=Ke,Xe.isCancel=Te,Xe.VERSION=Ie,Xe.toFormData=te,Xe.AxiosError=$,Xe.Cancel=Xe.CanceledError,Xe.all=function(e){return Promise.all(e)},Xe.spread=function(e){return function(t){return e.apply(null,t)}},Xe.isAxiosError=function(e){return K.isObject(e)&&!0===e.isAxiosError},Xe.mergeConfig=qe,Xe.AxiosHeaders=Ae,Xe.formToJSON=e=>me(K.isHTMLForm(e)?new FormData(e):e),Xe.getAdapter=Ue,Xe.HttpStatusCode=Ge,Xe.default=Xe;const Qe=Xe,{Axios:Ye,AxiosError:Ze,CanceledError:et,isCancel:tt,CancelToken:nt,VERSION:rt,all:ot,Cancel:st,isAxiosError:it,spread:at,toFormData:ct,AxiosHeaders:lt,HttpStatusCode:ut,formToJSON:ft,getAdapter:dt,mergeConfig:ht}=Qe;function pt(...o){const s="string"==typeof o[0]?o[0]:void 0,i="string"==typeof s?1:0;let a={},c=Qe,l={immediate:!!i,shallow:!0};const u=e=>!!(null==e?void 0:e.request);o.length>0+i&&(u(o[0+i])?c=o[0+i]:a=o[0+i]),o.length>1+i&&u(o[1+i])&&(c=o[1+i]),(o.length===2+i&&!u(o[1+i])||o.length===3+i)&&(l=o[o.length-1]);const{initialData:f,shallow:d,onSuccess:h=n,onError:p=n,immediate:m,resetOnExecute:g=!1}=l,y=e(),b=(d?e:t)(f),E=t(!1),w=t(!1),O=t(!1),S=e(),R=Qe.CancelToken.source;let A=R();const v=e=>{!E.value&&w.value&&(A.cancel(e),A=R(),O.value=!0,w.value=!1,E.value=!1)},T=e=>{w.value=e,E.value=!e},j=()=>new Promise(((e,t)=>{r(E).toBe(!0).then((()=>S.value?t(S.value):e(P)))})),C={then:(...e)=>j().then(...e),catch:(...e)=>j().catch(...e)};let x=0;const N=(e=s,t={})=>{S.value=void 0;const n="string"==typeof e?e:null!=s?s:t.url;if(void 0===n)return S.value=new Ze(Ze.ERR_INVALID_URL),E.value=!0,C;g&&(b.value=f),v(),T(!0),x+=1;const r=x;return O.value=!1,c(n,{...a,..."object"==typeof e?e:t,cancelToken:A.token}).then((e=>{if(O.value)return;y.value=e;const t=e.data;b.value=t,h(t)})).catch((e=>{S.value=e,p(e)})).finally((()=>{var e;null==(e=l.onFinish)||e.call(l),r===x&&T(!1)})),C};m&&s&&N();const P={response:y,data:b,error:S,isFinished:E,isLoading:w,cancel:v,isAborted:O,isCanceled:O,abort:v,execute:N};return{...P,...C}}const mt=o(((e,t)=>{const n=s(t);i(n,((e,t)=>{void 0===e&&(null==n||delete n[t])}));const r=new URLSearchParams(n).toString();return r?`${e}?${r}`:`${e}`}));const gt=Qe.create({baseURL:"https://jsonplaceholder.typicode.com",headers:{"content-type":"application/json"},timeout:1e4,withCredentials:!1});gt.interceptors.request.use((e=>{const{headers:t}=e;return e.headers={Authorization:"userToken",...t},e}),(e=>Promise.reject(e))),gt.interceptors.response.use((e=>e),(async e=>{if("ERR_CANCELED"===e.code)return Promise.reject(e);const t=(null==e?void 0:e.config)||{};return(null==t?void 0:t.__retry)?async function(e){const t=e.config,n=t.__retry||0,r=t.__retryDelay||0;return n<=0?Promise.reject(e):(await p(r),gt({...t,__retry:n-1}))}(e):Promise.reject(e)}));const yt=e=>function(e,t){const{url:n="",headers:r,params:o,method:s="get",refetch:i=!0,retryDelay:p=500,data:m,initialData:g,immediate:y=!0,resetOnExecute:b=!0,shallow:E=!0,retry:w=0}=t,O=h(),S=h(),R=h(),A=h(),v=h(),T=mt(n,o),j=a((()=>({data:c(m),headers:{"Access-Control-Allow-Origin":"*",...r},method:s,onDownloadProgress:A.trigger,onUploadProgress:v.trigger,__retry:w,__retryDelay:p}))),C=pt(T.value,j.value,e,{immediate:y,initialData:g,onError:e=>{"ERR_CANCELED"!==(null==e?void 0:e.code)&&S.trigger(e)},onFinish:R.trigger,onSuccess:O.trigger,resetOnExecute:b,shallow:E}),x=l();return x.run((()=>{c(i)&&u([T,j],(()=>{C.execute(T.value,j.value)}))})),f((()=>{null==C||C.abort(),x.stop()})),{...C,onSuccess:O.on,onError:S.on,onFinish:R.on,onDownloadProgress:A.on,onUploadProgress:v.on,execute:(e=T.value,t={})=>C.execute(d(e)?e:T.value??(null==t?void 0:t.url),{...j.value,..."object"==typeof e?e:t})}}(gt,{resetOnExecute:!1,retry:3,retryDelay:500,...e});export{yt as r};
