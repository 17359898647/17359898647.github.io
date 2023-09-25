import{_ as a}from"./SvgIcon.vue_vue_type_script_setup_true_lang-e5a0b865.js";import{aD as l,aE as e,aF as t,aG as s,aH as n,aI as u,aJ as i,aK as o,aL as c,aM as r,aN as f,aO as h,F as v,l as d,r as p,ag as g,q as m,aP as P,aQ as w,a6 as y,a7 as R,a8 as b,u as x,s as A,aR as C,a as I,aS as T,n as k,aT as S,a9 as _,aa as j,ae as L}from"./index-238407ab.js";import{u as O,s as D}from"./useKeepAliveCacheStore-2fb4e0ea.js";import{d as F}from"./debounce-f8f5a1a5.js";import{m as H}from"./map-ce85832a.js";import{f as K}from"./findIndex-50d1dadc.js";function W(a,e){return!!(null==a?0:a.length)&&l(a,e,0)>-1}function B(a,l,e){for(var t=-1,s=null==a?0:a.length;++t<s;)if(e(l,a[t]))return!0;return!1}const q=u((function(a,l){return i(a)?function(a,l,u,i){var o=-1,c=W,r=!0,f=a.length,h=[],v=l.length;if(!f)return h;u&&(l=e(l,t(u))),i?(c=B,r=!1):l.length>=200&&(c=n,r=!1,l=new s(l));a:for(;++o<f;){var d=a[o],p=null==u?d:u(d);if(d=i||0!==d?d:0,r&&p==p){for(var g=v;g--;)if(l[g]===p)continue a;h.push(d)}else c(l,p,i)||h.push(d)}return h}(a,o(l,1,i,!0)):[]}));function E(a,l){var e=[];return c(a,(function(a,t,s){l(a,t,s)&&e.push(a)})),e}const G=a=>{const{meta:l,path:e,fullPath:t,name:s}=a;return{...l,fullPath:t||e,name:s}},J=y("useTagStore",(()=>{const l=R(),e=b(),t=p(),s=x(),{delCache:n}=O(),{setAttrs:u}=s,{isCollapsed:i,isFullscreen:o}=A(s),{allAffixRouters:c}=_(),y=p(H(c.value,(a=>G(a)))),{undo:W,history:B,canUndo:J}=C(t,{capacity:10}),M=a=>{const{fullPath:l,isHidden:e}=a;if(!y.value.some((a=>a.fullPath===l))&&!e){const l=K(y.value,(a=>a.fullPath===t.value));-1===l?y.value.push(a):y.value.splice(l+1,0,a)}},N=p([{label:()=>I("span",null,[o.value?"关闭全屏":"开启全屏"]),key:"fullScreen",icon:()=>I(a,{lineIcon:o.value?"material-symbols:fullscreen-exit":"material-symbols:fullscreen"},null)},{label:"关闭所有",key:"closeAll",icon:()=>I(a,{lineIcon:"ant-design:close-outlined"},null)},{label:"关闭其他",key:"closeOther",icon:()=>I(a,{lineIcon:"ant-design:swap-outlined"},null)},{label:"关闭右侧",key:"closeRight",icon:()=>I(a,{lineIcon:"ant-design:swap-right-outlined"},null)},{label:"关闭左侧",key:"closeLeft",icon:()=>I(a,{lineIcon:"ant-design:swap-left-outlined"},null)},{label:"刷新当前页",key:"refresh",icon:()=>I(a,{lineIcon:"ic:twotone-refresh"},null)}]),Q=async(a,l)=>{await e.push(l),await w(300);const t=(s=y.value,u=a,(r(s)?f:E)(s,h(u)));var s,u;const i=q(y.value,t);L(i,(a=>{const l=K(y.value,a);-1!==l&&y.value.splice(l,1)})),await n(i)},{scrollRef:U,scrollTo:z,contentRef:V,containerRef:X}=function(a){const{animationTime:l}={animationTime:.3,...a},{isSiderWidth:e,isCollapsedWidth:t,isCollapsed:s,isContentPadding:n}=v(d),u=p(),i=g(),o=p(),c=m((()=>(s.value?t.value:e.value)+n.value)),{width:r}=P(o),f=m((()=>r.value/2)),h=F((async a=>{var e,t;if(a<0)return;await w(1e3*l);const s=null==(e=u.value)?void 0:e.children[a];if(!s)return;const{left:n,width:o}=s.getBoundingClientRect(),r=n-c.value-f.value+o/2;null==(t=i.value)||t.scrollBy({left:r,behavior:"smooth"})}),300,{leading:!0,trailing:!0,maxWait:1e3});return{contentRef:u,containerRef:o,scrollRef:i,scrollTo:h}}();T((async()=>{M(G(l)),!l.meta.isHidden&&(t.value=l.fullPath),await z(K(y.value,(a=>a.fullPath===t.value)))})),k((()=>l.fullPath),(async()=>{M(G(l)),!l.meta.isHidden&&(t.value=l.fullPath),await z(K(y.value,(a=>a.fullPath===l.fullPath)))}),{flush:"post"});const{width:Y}=S();return k([Y,i],(async()=>{await z(K(y.value,(a=>a.fullPath===l.fullPath)))})),{tagList:y,tagDropdownOptions:N,scrollRef:U,scrollTo:z,contentRef:V,containerRef:X,createTag:G,delTagList:async a=>{const{fullPath:l}=a,s=t.value;if(l===t.value){W();let a=D(y.value,(a=>a.fullPath===t.value));for(;(!a&&0!==B.value.length||s===t.value)&&J.value;)W(),a=D(y.value,(a=>a.fullPath===t.value));await e.push(t.value===s?y.value[0].fullPath:t.value??y.value[0].fullPath)}else await e.push(y.value[0].fullPath);const u=K(y.value,(a=>a.fullPath===l));-1!==u&&y.value.splice(u,1),await n(a)},tagDropdownClick:async(a,l)=>{const{fullPath:e}=l,t={closeAll:async()=>{await Q((a=>!j(a.isAffix)),y.value[0].fullPath)},closeOther:async()=>{await Q((a=>a.isAffix||a.fullPath===e),e)},closeRight:async()=>{const a=K(y.value,(a=>a.fullPath===e));await Q(((l,e)=>l.isAffix||e<=a),e)},closeLeft:async()=>{const a=K(y.value,(a=>a.fullPath===e));await Q(((l,e)=>l.isAffix||e>=a),e)},refresh:async()=>{u("isRefreshPage",!1),await n(l),u("isRefreshPage",!0)},fullScreen:async()=>{u("isFullscreen",!o.value)},default:()=>{}},s=t[a]||t.default;await s()}}}),{persist:{paths:["tagList"]}});export{G as c,J as u};
