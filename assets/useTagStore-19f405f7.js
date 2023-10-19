import{_ as a}from"./SvgIcon.vue_vue_type_script_setup_true_lang-1e30c1cc.js";import{aT as e,aU as l,aV as n,aW as t,aX as s,aY as u,aZ as i,a_ as o,a$ as c,b0 as r,b1 as f,b2 as v,b3 as h,b4 as d,b5 as p,b6 as g,a6 as m,G as w,r as P,a9 as y,E as b,F as R,l as x,af as A,q as C,b7 as I,b8 as T,a7 as _,a8 as k,u as S,s as j,b9 as L,a as H,ba as W,n as E,bb as F,aa as O,ae as U}from"./index-77c7f314.js";import{m as B}from"./map-02987239.js";import{d as D}from"./debounce-06e694f8.js";import{f as G}from"./findIndex-cdf5ac6a.js";function K(a,l){return!!(null==a?0:a.length)&&e(a,l,0)>-1}function $(){var a=arguments.length;if(!a)return[];for(var e=Array(a-1),u=arguments[0],i=a;i--;)e[i-1]=arguments[i];return l(t(u)?s(u):[u],n(e,1))}function q(a,e,l){for(var n=-1,t=null==a?0:a.length;++n<t;)if(l(e,a[n]))return!0;return!1}const V=r((function(a,e){return f(a)?function(a,e,l,n){var t=-1,s=K,r=!0,f=a.length,v=[],h=e.length;if(!f)return v;l&&(e=u(e,i(l))),n?(s=q,r=!1):e.length>=200&&(s=c,r=!1,e=new o(e));a:for(;++t<f;){var d=a[t],p=null==l?d:l(d);if(d=n||0!==d?d:0,r&&p==p){for(var g=h;g--;)if(e[g]===p)continue a;v.push(d)}else s(e,p,n)||v.push(d)}return v}(a,n(e,1,f,!0)):[]}));function X(a,e){var l=[];return v(a,(function(a,n,t){e(a,n,t)&&l.push(a)})),l}function Y(a,e){var l;return v(a,(function(a,n,t){return!(l=e(a,n,t))})),!!l}function Z(a,e,l){var n=t(a)?p:Y;return l&&g(a,e,l)&&(e=void 0),n(a,d(e))}function z(a){const{fullPath:e,name:l}=a;return new RegExp(`${String(l||e)}`)}const J=m("useKeepAliveCacheStore",(()=>{const{allUnKeepAliveRouters:a}=y(),e=B(w(a),(a=>z(a))),l=P(e);return{exclude:l,delCache:async a=>{t(a)?(l.value=$(l.value,B(a,(a=>z(a)))),await b(),l.value=e):(l.value=$(l.value,[z(a)]),await b(),l.value=e)}}}));const M=a=>{const{meta:e,path:l,fullPath:n,name:t}=a;return{...e,fullPath:n||l,name:t}},N=m("useTagStore",(()=>{const e=_(),l=k(),n=P(),s=S(),{delCache:u}=J(),{setAttrs:i}=s,{isCollapsed:o,isFullscreen:c}=j(s),{allAffixRouters:r}=y(),f=P(B(r.value,(a=>M(a)))),{undo:v,history:p,canUndo:g}=L(n,{capacity:10}),m=a=>{const{fullPath:e,isHidden:l}=a;if(!f.value.some((a=>a.fullPath===e))&&!l){const e=G(f.value,(a=>a.fullPath===n.value));-1===e?f.value.push(a):f.value.splice(e+1,0,a)}},w=P([{label:()=>H("span",null,[c.value?"关闭全屏":"开启全屏"]),key:"fullScreen",icon:()=>H(a,{lineIcon:c.value?"icon-material-symbols:fullscreen-exit":"icon-material-symbols:fullscreen"},null)},{label:"关闭所有",key:"closeAll",icon:()=>H(a,{lineIcon:"icon-ant-design:close-outlined"},null)},{label:"关闭其他",key:"closeOther",icon:()=>H(a,{lineIcon:"icon-ant-design:swap-outlined"},null)},{label:"关闭右侧",key:"closeRight",icon:()=>H(a,{lineIcon:"icon-ant-design:swap-right-outlined"},null)},{label:"关闭左侧",key:"closeLeft",icon:()=>H(a,{lineIcon:"icon-ant-design:swap-left-outlined"},null)},{label:"刷新当前页",key:"refresh",icon:()=>H(a,{lineIcon:"icon-ic:twotone-refresh"},null)}]),b=async(a,e)=>{await l.push(e),await T(300);const n=(s=f.value,i=a,(t(s)?h:X)(s,d(i)));var s,i;const o=V(f.value,n);U(o,(a=>{const e=G(f.value,a);-1!==e&&f.value.splice(e,1)})),await u(o)},{scrollRef:K,scrollTo:$,contentRef:q,containerRef:Y}=function(a){const{animationTime:e}={animationTime:.3,...a},{isSiderWidth:l,isCollapsedWidth:n,isCollapsed:t,isContentPadding:s}=R(x),u=P(),i=A(),o=P(),c=C((()=>(t.value?n.value:l.value)+s.value)),{width:r}=I(o),f=C((()=>r.value/2)),v=D((async a=>{var l,n;if(a<0)return;await T(1e3*e);const t=null==(l=u.value)?void 0:l.children[a];if(!t)return;const{left:s,width:o}=t.getBoundingClientRect(),r=s-c.value-f.value+o/2;null==(n=i.value)||n.scrollBy({left:r,behavior:"smooth"})}),300,{leading:!0,trailing:!0,maxWait:1e3});return{contentRef:u,containerRef:o,scrollRef:i,scrollTo:v}}();W((async()=>{m(M(e)),!e.meta.isHidden&&(n.value=e.fullPath),await $(G(f.value,(a=>a.fullPath===n.value)))})),E((()=>e.fullPath),(async()=>{m(M(e)),!e.meta.isHidden&&(n.value=e.fullPath),await $(G(f.value,(a=>a.fullPath===e.fullPath)))}),{flush:"post"});const{width:z}=F();return E([z,o],(async()=>{await $(G(f.value,(a=>a.fullPath===e.fullPath)))})),{tagList:f,tagDropdownOptions:w,scrollRef:K,scrollTo:$,contentRef:q,containerRef:Y,createTag:M,delTagList:async a=>{const{fullPath:e}=a,t=n.value;if(e===n.value){v();let a=Z(f.value,(a=>a.fullPath===n.value));for(;(!a&&0!==p.value.length||t===n.value)&&g.value;)v(),a=Z(f.value,(a=>a.fullPath===n.value));await l.push(n.value===t?f.value[0].fullPath:n.value??f.value[0].fullPath)}const s=G(f.value,(a=>a.fullPath===e));-1!==s&&f.value.splice(s,1),await u(a)},tagDropdownClick:async(a,e)=>{const{fullPath:l}=e,n={closeAll:async()=>{await b((a=>!O(a.isAffix)),f.value[0].fullPath)},closeOther:async()=>{await b((a=>a.isAffix||a.fullPath===l),l)},closeRight:async()=>{const a=G(f.value,(a=>a.fullPath===l));await b(((e,l)=>e.isAffix||l<=a),l)},closeLeft:async()=>{const a=G(f.value,(a=>a.fullPath===l));await b(((e,l)=>e.isAffix||l>=a),l)},refresh:async()=>{i("isRefreshPage",!1),await u(e),i("isRefreshPage",!0)},fullScreen:async()=>{i("isFullscreen",!c.value)},default:()=>{}};await(n[a]||n.default)()}}}),{persist:{paths:["tagList"]}});export{J as a,M as c,Z as s,N as u};
