import{_ as a}from"./SvgIcon.vue_vue_type_script_setup_true_lang-77f0e3a3.js";import{aD as e,aE as l,aF as t,aG as n,aH as s,aI as u,aJ as i,aK as o,aL as r,aM as c,aN as f,aO as v,aP as h,aQ as d,aR as p,aS as g,a6 as m,G as P,r as w,a9 as y,E as R,F as x,l as A,ag as b,q as C,aT as I,aU as T,a7 as S,a8 as k,u as _,s as L,aV as j,a as F,aW as H,n as D,aX as O,aa as W,ae as E}from"./index-6121a986.js";import{m as G}from"./map-a96e78af.js";import{d as K}from"./debounce-a53ac5d1.js";import{f as U}from"./findIndex-d05ea49d.js";function B(a,l){return!!(null==a?0:a.length)&&e(a,l,0)>-1}function q(){var a=arguments.length;if(!a)return[];for(var e=Array(a-1),u=arguments[0],i=a;i--;)e[i-1]=arguments[i];return l(n(u)?s(u):[u],t(e,1))}function J(a,e,l){for(var t=-1,n=null==a?0:a.length;++t<n;)if(l(e,a[t]))return!0;return!1}const M=c((function(a,e){return f(a)?function(a,e,l,t){var n=-1,s=B,c=!0,f=a.length,v=[],h=e.length;if(!f)return v;l&&(e=u(e,i(l))),t?(s=J,c=!1):e.length>=200&&(s=r,c=!1,e=new o(e));a:for(;++n<f;){var d=a[n],p=null==l?d:l(d);if(d=t||0!==d?d:0,c&&p==p){for(var g=h;g--;)if(e[g]===p)continue a;v.push(d)}else s(e,p,t)||v.push(d)}return v}(a,t(e,1,f,!0)):[]}));function N(a,e){var l=[];return v(a,(function(a,t,n){e(a,t,n)&&l.push(a)})),l}function Q(a,e){var l;return v(a,(function(a,t,n){return!(l=e(a,t,n))})),!!l}function V(a,e,l){var t=n(a)?p:Q;return l&&g(a,e,l)&&(e=void 0),t(a,d(e))}function X(a){const{fullPath:e,name:l}=a;return new RegExp(`${String(l||e)}`)}const $=m("useKeepAliveCacheStore",(()=>{const{allUnKeepAliveRouters:a}=y(),e=G(P(a),(a=>X(a))),l=w(e);return{exclude:l,delCache:async a=>{n(a)?(l.value=q(l.value,G(a,(a=>X(a)))),await R(),l.value=e):(l.value=q(l.value,[X(a)]),await R(),l.value=e)}}}));const z=a=>{const{meta:e,path:l,fullPath:t,name:n}=a;return{...e,fullPath:t||l,name:n}},Y=m("useTagStore",(()=>{const e=S(),l=k(),t=w(),s=_(),{delCache:u}=$(),{setAttrs:i}=s,{isCollapsed:o,isFullscreen:r}=L(s),{allAffixRouters:c}=y(),f=w(G(c.value,(a=>z(a)))),{undo:v,history:p,canUndo:g}=j(t,{capacity:10}),m=a=>{const{fullPath:e,isHidden:l}=a;if(!f.value.some((a=>a.fullPath===e))&&!l){const e=U(f.value,(a=>a.fullPath===t.value));-1===e?f.value.push(a):f.value.splice(e+1,0,a)}},P=w([{label:()=>F("span",null,[r.value?"关闭全屏":"开启全屏"]),key:"fullScreen",icon:()=>F(a,{lineIcon:r.value?"material-symbols:fullscreen-exit":"material-symbols:fullscreen"},null)},{label:"关闭所有",key:"closeAll",icon:()=>F(a,{lineIcon:"ant-design:close-outlined"},null)},{label:"关闭其他",key:"closeOther",icon:()=>F(a,{lineIcon:"ant-design:swap-outlined"},null)},{label:"关闭右侧",key:"closeRight",icon:()=>F(a,{lineIcon:"ant-design:swap-right-outlined"},null)},{label:"关闭左侧",key:"closeLeft",icon:()=>F(a,{lineIcon:"ant-design:swap-left-outlined"},null)},{label:"刷新当前页",key:"refresh",icon:()=>F(a,{lineIcon:"ic:twotone-refresh"},null)}]),R=async(a,e)=>{await l.push(e),await T(300);const t=(s=f.value,i=a,(n(s)?h:N)(s,d(i)));var s,i;const o=M(f.value,t);E(o,(a=>{const e=U(f.value,a);-1!==e&&f.value.splice(e,1)})),await u(o)},{scrollRef:B,scrollTo:q,contentRef:J,containerRef:Q}=function(a){const{animationTime:e}={animationTime:.3,...a},{isSiderWidth:l,isCollapsedWidth:t,isCollapsed:n,isContentPadding:s}=x(A),u=w(),i=b(),o=w(),r=C((()=>(n.value?t.value:l.value)+s.value)),{width:c}=I(o),f=C((()=>c.value/2)),v=K((async a=>{var l,t;if(a<0)return;await T(1e3*e);const n=null==(l=u.value)?void 0:l.children[a];if(!n)return;const{left:s,width:o}=n.getBoundingClientRect(),c=s-r.value-f.value+o/2;null==(t=i.value)||t.scrollBy({left:c,behavior:"smooth"})}),300,{leading:!0,trailing:!0,maxWait:1e3});return{contentRef:u,containerRef:o,scrollRef:i,scrollTo:v}}();H((async()=>{m(z(e)),!e.meta.isHidden&&(t.value=e.fullPath),await q(U(f.value,(a=>a.fullPath===t.value)))})),D((()=>e.fullPath),(async()=>{m(z(e)),!e.meta.isHidden&&(t.value=e.fullPath),await q(U(f.value,(a=>a.fullPath===e.fullPath)))}),{flush:"post"});const{width:X}=O();return D([X,o],(async()=>{await q(U(f.value,(a=>a.fullPath===e.fullPath)))})),{tagList:f,tagDropdownOptions:P,scrollRef:B,scrollTo:q,contentRef:J,containerRef:Q,createTag:z,delTagList:async a=>{const{fullPath:e}=a,n=t.value;if(e===t.value){v();let a=V(f.value,(a=>a.fullPath===t.value));for(;(!a&&0!==p.value.length||n===t.value)&&g.value;)v(),a=V(f.value,(a=>a.fullPath===t.value));await l.push(t.value===n?f.value[0].fullPath:t.value??f.value[0].fullPath)}const s=U(f.value,(a=>a.fullPath===e));-1!==s&&f.value.splice(s,1),await u(a)},tagDropdownClick:async(a,e)=>{const{fullPath:l}=e,t={closeAll:async()=>{await R((a=>!W(a.isAffix)),f.value[0].fullPath)},closeOther:async()=>{await R((a=>a.isAffix||a.fullPath===l),l)},closeRight:async()=>{const a=U(f.value,(a=>a.fullPath===l));await R(((e,l)=>e.isAffix||l<=a),l)},closeLeft:async()=>{const a=U(f.value,(a=>a.fullPath===l));await R(((e,l)=>e.isAffix||l>=a),l)},refresh:async()=>{i("isRefreshPage",!1),await u(e),i("isRefreshPage",!0)},fullScreen:async()=>{i("isFullscreen",!r.value)},default:()=>{}};await(t[a]||t.default)()}}}),{persist:{paths:["tagList"]}});export{$ as a,z as c,V as s,Y as u};
