import{cj as t,ck as e,cl as o,cm as r,cn as i,co as n,cp as s,d as a,cq as d,X as u,x as c,o as p,c as l,b as f,bK as h,E as m,I as R,be as b,ac as g,cr as v}from"./index-Qa5VqOB0.js";import{t as B}from"./throttle-33UR_pdi.js";import{_ as x}from"./_plugin-vue_export-helper-NGi3vMWx.js";var y=NaN;function _(e){return"number"==typeof e?e:t(e)?y:+e}var L,T=o.isFinite,$=Math.min;const C=(L=Math["ceil"],function(t,e){if(t=r(t),(e=null==e?0:$(i(e),292))&&T(t)){var o=(n(t)+"e").split("e"),s=L(o[0]+"e"+(+o[1]+e));return+((o=(n(s)+"e").split("e"))[0]+"e"+(+o[1]-e))}return L(t)});var k,w;const E=(k=function(t,e){return t/e},w=1,function(t,o){var r;if(void 0===t&&void 0===o)return w;if(void 0!==t&&(r=t),void 0!==o){if(void 0===r)return o;"string"==typeof t||"string"==typeof o?(t=e(t),o=e(o)):(t=_(t),o=_(o)),r=k(t,o)}return r});function j(t,e){return t>e}function I(e){return e&&e.length?function(e,o,r){for(var i=-1,n=e.length;++i<n;){var s=e[i],a=o(s);if(null!=a&&(void 0===d?a==a&&!t(a):r(a,d)))var d=a,u=s}return u}(e,s,j):void 0}const M=x(a({inheritAttrs:!1,__name:"RippleButton",props:{ripple:{type:Boolean,default:!0}},emits:["click"],setup(t,{emit:e}){const o=t,r=e,i=d(),n=u();const s=B((function(t,e){const o=g(t);if(!o)return;const{clientX:r,clientY:i}=e,{left:n,top:s,width:a,height:d,borderTopLeftRadius:u,borderTopRightRadius:c,borderBottomLeftRadius:p,borderBottomRightRadius:l}=function(t){const{left:e,top:o,width:r,height:i}=t.getBoundingClientRect(),{borderTopLeftRadius:n,borderTopRightRadius:s,borderBottomLeftRadius:a,borderBottomRightRadius:d}=getComputedStyle(t);return{borderBottomLeftRadius:a,borderBottomRightRadius:d,borderTopLeftRadius:n,borderTopRightRadius:s,height:i,left:e,top:o,width:r}}(o),f=C(E(I([a,d]),100)),h=r-n,m=i-s,R=document.createElement("div");R.classList.add("ripple");const b=document.createElement("div"),B={backgroundColor:"rgba(255, 255, 255, .4)",borderRadius:"50%",height:`${f}px`,left:`${h}px`,pointerEvents:"none",position:"absolute",top:`${m}px`,transform:"translate(-50%, -50%) scale(10)",transformOrigin:"center",width:`${f}px`},x={borderBottomLeftRadius:p,borderBottomRightRadius:l,borderTopLeftRadius:u,borderTopRightRadius:c,height:`${d}px`,overflow:"hidden",pointerEvents:"none",position:"absolute",width:`${a}px`};v(b.style,B),v(R.style,x),R.appendChild(b),o.insertBefore(R,o.firstChild),b.animate([{borderRadius:"50%",opacity:1,transform:"scale(10)"},{borderRadius:"50%",opacity:0,transform:"scale(300)"}],{duration:1e3}).onfinish=()=>{o.removeChild(R)}}),80,{leading:!0,trailing:!1});function a(t){r("click",t),o.ripple&&s(g(n),t)}const x=c((()=>{const{...t}=i;return{...t}}));return(t,e)=>(p(),l(R(b),m({ref_key:"buttonRef",ref:n},R(x),{onClick:a}),{default:f((()=>[h(t.$slots,"default",{},void 0,!0)])),icon:f((()=>[h(t.$slots,"icon",{},void 0,!0)])),_:3},16))}}),[["__scopeId","data-v-dea717cf"]]);export{M as _};
