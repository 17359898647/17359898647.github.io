import{bH as t,bI as n,bJ as e,bK as r,bL as i,bM as o,bN as s,d as a,bO as c,ag as u,q as l,o as f,c as d,w as p,bP as v,C as b,G as m,bg as h,ah as g,bQ as _}from"./index-0d824498.js";import{t as x}from"./throttle-fe0e7e09.js";import{_ as y}from"./_plugin-vue_export-helper-1b428a4d.js";var C=NaN;function R(n){return"number"==typeof n?n:t(n)?C:+n}var $,k=e.isFinite,w=Math.min;const j=($=Math["ceil"],function(t,n){if(t=r(t),(n=null==n?0:w(i(n),292))&&k(t)){var e=(o(t)+"e").split("e"),s=$(e[0]+"e"+(+e[1]+n));return+((e=(o(s)+"e").split("e"))[0]+"e"+(+e[1]-n))}return $(t)});var B,E;const M=(B=function(t,n){return t/n},E=1,function(t,e){var r;if(void 0===t&&void 0===e)return E;if(void 0!==t&&(r=t),void 0!==e){if(void 0===r)return e;"string"==typeof t||"string"==typeof e?(t=n(t),e=n(e)):(t=R(t),e=R(e)),r=B(t,e)}return r});function N(t,n){return t>n}function I(n){return n&&n.length?function(n,e,r){for(var i=-1,o=n.length;++i<o;){var s=n[i],a=e(s);if(null!=a&&(void 0===c?a==a&&!t(a):r(a,c)))var c=a,u=s}return u}(n,s,N):void 0}const O=y(a({inheritAttrs:!1,__name:"RippleButton",emits:["click"],setup(t,{emit:n}){const e=c(),r=u();const i=x((function(t,n){const e=g(t);if(!e)return;const{clientX:r,clientY:i}=n,{left:o,top:s,width:a,height:c}=e.getBoundingClientRect(),u=j(M(I([a,c]),100)),l=r-o,f=i-s,d=document.createElement("div"),p={position:"absolute",width:`${u}px`,height:`${u}px`,borderRadius:"50%",backgroundColor:"rgba(255, 255, 255, .5)",left:`${l}px`,top:`${f}px`,transformOrigin:"center",transform:"translate(-50%, -50%) scale(10)",pointerEvents:"none"};_(d.style,p),e.insertBefore(d,e.firstChild),d.animate([{transform:"scale(10)",borderRadius:"50%",opacity:1},{transform:"scale(300)",borderRadius:"50%",opacity:0}],{duration:1e3}).onfinish=()=>{e.removeChild(d)}}),80,{leading:!0,trailing:!1});function o(t){n("click",t),i(g(r),t)}const s=l((()=>{const{...t}=e;return{...t}}));return(t,n)=>(f(),d(m(h),b({ref_key:"buttonRef",ref:r},m(s),{class:"overflow-hidden",onClick:o}),{default:p((()=>[v(t.$slots,"default",{},void 0,!0)])),icon:p((()=>[v(t.$slots,"icon",{},void 0,!0)])),_:3},16))}}),[["__scopeId","data-v-88516004"]]);export{O as _};
