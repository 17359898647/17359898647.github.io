import{d as a,al as e,ar as s,F as t,l as n,q as o,ag as i,y as u,ae as r,s as l,as as d,o as m,H as f,aj as p,G as c,_ as v,a9 as x,at as _,c as h,w as g,ao as b,ap as y,aq as j,ai as w,T as C,au as H,av as I}from"./index-238407ab.js";import{u as A,s as N}from"./useKeepAliveCacheStore-2fb4e0ea.js";import{_ as $}from"./_plugin-vue_export-helper-1b428a4d.js";import"./map-ce85832a.js";const k=$(a({inheritAttrs:!1,__name:"IframKeep",props:{routeName:{},isIframe:{type:Boolean}},setup(a){const $=a;e((a=>({"8d8dbd12":c(B),"7c1debfe":c(D),"7b9f223b":c(E)})));const{routeName:k}=s($),{isRefreshPage:q,isHeaderHeight:F,isTagViewHeight:K,isContentPadding:P,isFooterHeight:R}=t(n),{allIframeRouters:T}=x(),B=o((()=>`${F.value+K.value}px`)),D=o((()=>`${R.value+P.value}px`)),E=o((()=>`${P.value}px`));const G=i([]);u((()=>{r(T.value,(async a=>{const{name:e}=a,s=await async function(a){const{component:e}=T.value.find((e=>e.name===a));if(H(e))return(await e()).default}(e);G.value.push({component:s,name:e}),_(G)}))}));const S=A(),{exclude:V}=l(S),z=d(k,500);function J(a){return z.value!==a||!N(V.value,(e=>e.test(I(a)?a:"")))&&q.value}function L(a){return $.routeName===a&&$.isIframe}return(a,e)=>(m(!0),f(v,null,p(c(G),(({name:a,component:e})=>(m(),h(C,{appear:"",enterActiveClass:"animated-fade-in-left animated animated-duration-300 ease-in-out !absolute absolute_orientation",leaveActiveClass:"animated-fade-out-right animated animated-duration-300 ease-in-out !absolute absolute_orientation"},{default:g((()=>[J(a)?b((m(),f("div",{key:a,class:"flex flex-1 flex-col"},[(m(),h(y(e),{key:a,class:"flex-1 overflow-hidden"}))])),[[j,L(a)]]):w("",!0)])),_:2},1024)))),256))}}),[["__scopeId","data-v-d341557e"]]);export{k as default};
