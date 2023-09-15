import{_ as e}from"./SvgIcon.vue_vue_type_script_setup_true_lang-58cb497b.js";import{_ as r}from"./Refresh.vue_vue_type_script_setup_true_lang-657fd38f.js";import{_ as n}from"./Collaps.vue_vue_type_script_setup_true_lang-ef93b4a9.js";import{_ as t}from"./Dark.vue_vue_type_style_index_0_lang-44ed9ccc.js";import{_ as o}from"./fullScreen.vue_vue_type_script_setup_true_lang-9307a5aa.js";import{f as a,j as s,i,P as l,d as c,k as u,x as m,ab as d,p,t as v,q as h,A as f,h as b,O as _,r as g,y as x,ac as C,ad as k,F as y,D as I,ae as z,aa as R,a as w,a7 as j,af as S,ag as P,ah as $,o as B,H,w as T,_ as E,ai as L,G as O,I as A,l as D,c as V,U as F,V as G,a9 as N}from"./index-adc90a5e.js";import{u as q}from"./useAnimate-76afaefe.js";import{_ as Q}from"./Dropdown-c4991ad7.js";const U=a("breadcrumb","\n white-space: nowrap;\n cursor: default;\n line-height: var(--n-item-line-height);\n",[s("ul","\n list-style: none;\n padding: 0;\n margin: 0;\n "),s("a","\n color: inherit;\n text-decoration: inherit;\n "),a("breadcrumb-item","\n font-size: var(--n-font-size);\n transition: color .3s var(--n-bezier);\n display: inline-flex;\n align-items: center;\n ",[a("icon","\n font-size: 18px;\n vertical-align: -.2em;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n "),s("&:not(:last-child)",[i("clickable",[l("link","\n cursor: pointer;\n ",[s("&:hover","\n background-color: var(--n-item-color-hover);\n "),s("&:active","\n background-color: var(--n-item-color-pressed); \n ")])])]),l("link","\n padding: 4px;\n border-radius: var(--n-item-border-radius);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n position: relative;\n ",[s("&:hover","\n color: var(--n-item-text-color-hover);\n ",[a("icon","\n color: var(--n-item-text-color-hover);\n ")]),s("&:active","\n color: var(--n-item-text-color-pressed);\n ",[a("icon","\n color: var(--n-item-text-color-pressed);\n ")])]),l("separator","\n margin: 0 8px;\n color: var(--n-separator-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n "),s("&:last-child",[l("link","\n font-weight: var(--n-font-weight-active);\n cursor: unset;\n color: var(--n-item-text-color-active);\n ",[a("icon","\n color: var(--n-item-text-color-active);\n ")]),l("separator","\n display: none;\n ")])])]),W=_("n-breadcrumb"),J=c({name:"Breadcrumb",props:Object.assign(Object.assign({},m.props),{separator:{type:String,default:"/"}}),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=u(e),t=m("Breadcrumb","-breadcrumb",U,d,e,r);p(W,{separatorRef:v(e,"separator"),mergedClsPrefixRef:r});const o=h((()=>{const{common:{cubicBezierEaseInOut:e},self:{separatorColor:r,itemTextColor:n,itemTextColorHover:o,itemTextColorPressed:a,itemTextColorActive:s,fontSize:i,fontWeightActive:l,itemBorderRadius:c,itemColorHover:u,itemColorPressed:m,itemLineHeight:d}}=t.value;return{"--n-font-size":i,"--n-bezier":e,"--n-item-text-color":n,"--n-item-text-color-hover":o,"--n-item-text-color-pressed":a,"--n-item-text-color-active":s,"--n-separator-color":r,"--n-item-color-hover":u,"--n-item-color-pressed":m,"--n-item-border-radius":c,"--n-font-weight-active":l,"--n-item-line-height":d}})),a=n?f("breadcrumb",void 0,o,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:o,themeClass:null==a?void 0:a.themeClass,onRender:null==a?void 0:a.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),b("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},b("ul",null,this.$slots))}}),K=c({name:"BreadcrumbItem",props:{separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},setup(e,{slots:r}){const n=y(W,null);if(!n)return()=>null;const{separatorRef:t,mergedClsPrefixRef:o}=n,a=((e=(k?window:null))=>{const r=()=>{const{hash:r,host:n,hostname:t,href:o,origin:a,pathname:s,port:i,protocol:l,search:c}=(null==e?void 0:e.location)||{};return{hash:r,host:n,hostname:t,href:o,origin:a,pathname:s,port:i,protocol:l,search:c}},n=()=>{t.value=r()},t=g(r());return x((()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))})),C((()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))})),t})(),s=h((()=>e.href?"a":"span")),i=h((()=>a.value.href===e.href?"location":null));return()=>{const{value:n}=o;return b("li",{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},b(s.value,{class:`${n}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},r),b("span",{class:`${n}-breadcrumb-item__separator`,"aria-hidden":"true"},I(r.separator,(()=>{var r;return[null!==(r=e.separator)&&void 0!==r?r:t.value]}))))}}});function M(r){const n=[];return z(r,(r=>{const{meta:t,children:o,path:a,name:s}=r,{isHidden:i,lineIcon:l,localIcon:c,isTitle:u}=t||{};R(i)&&n.push({icon:()=>w(e,{lineIcon:l,localIcon:c},null),label:u,key:String(s)||a,children:R(o)?void 0:M(o)})})),n}const X={class:"flex gap-2"},Y=c({__name:"BreadCrumbs",setup(a){const{allRouters:s}=N(),{isHeaderHeight:i,isContentPadding:l}=y(D),c=j(),u=g(function(e){const r={},n=(e,t)=>{z(e,(e=>{const{children:o,path:a,name:s}=e,i={...e,parentName:t};!R(o)&&(null==o?void 0:o.length)>0&&n(o,a),r[String(s)||a]=i}))};return n(e),r}(S(s))),m=h((()=>function(e,r){const n=[],t=e=>{z(r,(r=>{const{parentName:o,name:a}=r;e===a&&(R(o)||t(o),n.push(r))}))};return t(e),n}(c.name,u.value))),d=P(),p=h((()=>{var e;return null==(e=$(d))?void 0:e.firstElementChild}));return q({el:p}),(a,s)=>{const c=r,u=e,p=Q,v=K;return B(),H("div",{class:"flex flex-nowrap items-center gap-2 overflow-hidden",style:A({height:`${O(i)}px`,padding:`0 ${O(l)}px`})},[w(n),w(o),w(t),w(c),w(O(J),{ref_key:"breadcrumbRef",ref:d},{default:T((()=>[(B(!0),H(E,null,L(O(m),(({name:e,meta:r,children:n})=>(B(),V(v,{key:e},{default:T((()=>[w(p,{options:O(R)(n)?void 0:O(M)(n),size:"small",onSelect:e=>{a.$router.push({name:e})}},{default:T((()=>[F("div",X,[w(u,{lineIcon:null==r?void 0:r.lineIcon,localIcon:null==r?void 0:r.localIcon},null,8,["lineIcon","localIcon"]),F("span",null,G(null==r?void 0:r.isTitle),1)])])),_:2},1032,["options","onSelect"])])),_:2},1024)))),128))])),_:1},512)],4)}}});export{Y as _};
