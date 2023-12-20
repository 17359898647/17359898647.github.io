import{_ as a}from"./SvgIcon.vue_vue_type_script_setup_true_lang-b4QGm_hb.js";import{aH as e,aI as l,aJ as t,aK as n,aL as s,aM as u,aN as i,aO as o,aP as c,aQ as r,aR as f,aS as v,aT as h,aU as d,az as p,ae as g,r as m,a0 as P,G as w,H as y,l as R,X as x,x as A,aV as b,aW as C,ad as I,aA as S,u as T,s as k,aX as L,e as _,aY as j,t as H,aZ as K,a3 as O,aa as W,Y as U}from"./index-Qa5VqOB0.js";import{m as B}from"./map-hEPbGxMQ.js";import{d as D}from"./debounce-FdcB0W0r.js";import{f as F}from"./findIndex-TKz0K_UW.js";function G(a,l){return!!(null==a?0:a.length)&&e(a,l,0)>-1}function M(){var a=arguments.length;if(!a)return[];for(var e=Array(a-1),u=arguments[0],i=a;i--;)e[i-1]=arguments[i];return l(n(u)?s(u):[u],t(e,1))}function X(a,e,l){for(var t=-1,n=null==a?0:a.length;++t<n;)if(l(e,a[t]))return!0;return!1}const Y=r((function(a,e){return f(a)?function(a,e,l,t){var n=-1,s=G,r=!0,f=a.length,v=[],h=e.length;if(!f)return v;l&&(e=u(e,i(l))),t?(s=X,r=!1):e.length>=200&&(s=c,r=!1,e=new o(e));a:for(;++n<f;){var d=a[n],p=null==l?d:l(d);if(d=t||0!==d?d:0,r&&p==p){for(var g=h;g--;)if(e[g]===p)continue a;v.push(d)}else s(e,p,t)||v.push(d)}return v}(a,t(e,1,f,!0)):[]}));function z(a,e){var l=[];return v(a,(function(a,t,n){e(a,t,n)&&l.push(a)})),l}function E(a){const{fullPath:e,name:l}=a,t=`^${String(l||e)}`.replace(/\[([^\]]+)]/g,"[\\s\\S]*");return new RegExp(t)}const J=p("useKeepAliveCacheStore",(()=>{const{allUnKeepAliveRouters:a}=P(),e=B(g(a),(a=>E(a))),l=m(e);return{delCache:async a=>{n(a)?(l.value=M(l.value,B(a,(a=>E(a)))),await w(),l.value=e):(l.value=M(l.value,[E(a)]),await w(),l.value=e)},exclude:l}}));const N=a=>{const{meta:e,path:l,fullPath:t,name:n}=a;return{...e,fullPath:t||l,name:n}},Q=p("useTagStore",(()=>{const e=I(),l=S(),t=m(),s=T(),{delCache:u}=J(),{setAttrs:i}=s,{isCollapsed:o,isFullscreen:c}=k(s),{allAffixRouters:r}=P(),f=m(B(r.value,(a=>N(a)))),{undo:v,history:p,canUndo:g}=L(t,{capacity:10}),w=a=>{const{fullPath:e,isHidden:l}=a;if(!f.value.some((a=>a.fullPath===e))&&!l){const e=F(f.value,(a=>a.fullPath===t.value));-1===e?f.value.push(a):f.value.splice(e+1,0,a)}},G=m([{icon:()=>_(a,{lineIcon:c.value?"icon-material-symbols:fullscreen-exit":"icon-material-symbols:fullscreen"},null),key:"fullScreen",label:()=>_("span",null,[c.value?"关闭全屏":"开启全屏"])},{icon:()=>_(a,{lineIcon:"icon-ant-design:close-outlined"},null),key:"closeAll",label:"关闭所有"},{icon:()=>_(a,{lineIcon:"icon-ant-design:swap-outlined"},null),key:"closeOther",label:"关闭其他"},{icon:()=>_(a,{lineIcon:"icon-ant-design:swap-right-outlined"},null),key:"closeRight",label:"关闭右侧"},{icon:()=>_(a,{lineIcon:"icon-ant-design:swap-left-outlined"},null),key:"closeLeft",label:"关闭左侧"},{icon:()=>_(a,{lineIcon:"icon-ic:twotone-refresh"},null),key:"refresh",label:"刷新当前页"}]),M=async(a,e)=>{await l.push(e),await C(300);const t=(s=f.value,i=a,(n(s)?h:z)(s,d(i)));var s,i;const o=Y(f.value,t);U(o,(a=>{const e=F(f.value,a);-1!==e&&f.value.splice(e,1)})),await u(o)},{scrollRef:X,scrollTo:E,contentRef:Q,containerRef:V}=function(a){const{animationTime:e}={animationTime:.3,...a},{isSiderWidth:l,isCollapsedWidth:t,isCollapsed:n,isContentPadding:s}=y(R),u=m(),i=x(),o=m(),c=A((()=>(n.value?t.value:l.value)+s.value)),{width:r}=b(o),f=A((()=>r.value/2)),v=D((async a=>{var l,t;if(a<0)return;await C(1e3*e);const n=null==(l=u.value)?void 0:l.children[a];if(!n)return;const{left:s,width:o}=n.getBoundingClientRect(),r=s-c.value-f.value+o/2;null==(t=i.value)||t.scrollBy({behavior:"smooth",left:r})}),300,{leading:!0,maxWait:1e3,trailing:!0});return{containerRef:o,contentRef:u,scrollRef:i,scrollTo:v}}();j((async()=>{w(N(e)),!e.meta.isHidden&&(t.value=e.fullPath),await E(F(f.value,(a=>a.fullPath===t.value)))})),H((()=>e.fullPath),(async()=>{w(N(e)),!e.meta.isHidden&&(t.value=e.fullPath),await E(F(f.value,(a=>a.fullPath===e.fullPath)))}),{flush:"post"});const{width:Z}=K();return H([Z,o],(async()=>{await E(F(f.value,(a=>a.fullPath===e.fullPath)))})),{containerRef:V,contentRef:Q,createTag:N,delTagList:async a=>{const{fullPath:e}=a,n=t.value;if(e===t.value){v();let a=O(f.value,(a=>a.fullPath===t.value));for(;(!a&&0!==p.value.length||n===t.value)&&g.value;)v(),a=O(f.value,(a=>a.fullPath===t.value));await l.push(t.value===n?f.value[0].fullPath:t.value??f.value[0].fullPath)}const s=F(f.value,(a=>a.fullPath===e));-1!==s&&f.value.splice(s,1),await u(a)},scrollRef:X,scrollTo:E,tagDropdownClick:async(a,e)=>{const{fullPath:l}=e,t={closeAll:async()=>{await M((a=>!W(a.isAffix)),f.value[0].fullPath)},closeLeft:async()=>{const a=F(f.value,(a=>a.fullPath===l));await M(((e,l)=>e.isAffix||l>=a),l)},closeOther:async()=>{await M((a=>a.isAffix||a.fullPath===l),l)},closeRight:async()=>{const a=F(f.value,(a=>a.fullPath===l));await M(((e,l)=>e.isAffix||l<=a),l)},default:()=>{},fullScreen:async()=>{i("isFullscreen",!c.value)},refresh:async()=>{i("isRefreshPage",!1),await u(e),i("isRefreshPage",!0)}};await(t[a]||t.default)()},tagDropdownOptions:G,tagList:f}}),{persist:{paths:["tagList"]}});export{Q as a,N as c,J as u};
