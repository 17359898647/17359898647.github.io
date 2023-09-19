import{_ as t}from"./SvgIcon.vue_vue_type_script_setup_true_lang-db2cc328.js";import{_ as r}from"./RippleButton-d52e3df0.js";import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as n}from"./Space-0aee0c6d.js";import{f as o,a3 as a,j as i,i as s,P as l,d as u,k as d,aR as c,p as f,bx as p,bd as g,h as m,o as _,c as y,w as h,a as b,J as $,br as v}from"./index-fe7feb26.js";import"./Icon-4396df88.js";import"./format-length-2aad21f5.js";import"./throttle-90a1fa83.js";import"./debounce-291d9800.js";import"./get-slot-a0e67e91.js";const x="0!important",j="-1px!important";function I(t){return s(t+"-type",[i("& +",[o("button",{},[s(t+"-type",[l("border",{borderLeftWidth:x}),l("state-border",{left:j})])])])])}function w(t){return s(t+"-type",[i("& +",[o("button",[s(t+"-type",[l("border",{borderTopWidth:x}),l("state-border",{top:j})])])])])}const q=o("button-group","\n flex-wrap: nowrap;\n display: inline-flex;\n position: relative;\n",[a("vertical",{flexDirection:"row"},[a("rtl",[o("button",[i("&:first-child:not(:last-child)",`\n margin-right: ${x};\n border-top-right-radius: ${x};\n border-bottom-right-radius: ${x};\n `),i("&:last-child:not(:first-child)",`\n margin-left: ${x};\n border-top-left-radius: ${x};\n border-bottom-left-radius: ${x};\n `),i("&:not(:first-child):not(:last-child)",`\n margin-left: ${x};\n margin-right: ${x};\n border-radius: ${x};\n `),I("default"),s("ghost",[I("primary"),I("info"),I("success"),I("warning"),I("error")])])])]),s("vertical",{flexDirection:"column"},[o("button",[i("&:first-child:not(:last-child)",`\n margin-bottom: ${x};\n margin-left: ${x};\n margin-right: ${x};\n border-bottom-left-radius: ${x};\n border-bottom-right-radius: ${x};\n `),i("&:last-child:not(:first-child)",`\n margin-top: ${x};\n margin-left: ${x};\n margin-right: ${x};\n border-top-left-radius: ${x};\n border-top-right-radius: ${x};\n `),i("&:not(:first-child):not(:last-child)",`\n margin: ${x};\n border-radius: ${x};\n `),w("default"),s("ghost",[w("primary"),w("info"),w("success"),w("warning"),w("error")])])])]),P=u({name:"ButtonGroup",props:{size:{type:String,default:void 0},vertical:Boolean},setup(t){const{mergedClsPrefixRef:r,mergedRtlRef:e}=d(t);c("-button-group",q,r),f(p,t);return{rtlEnabled:g("ButtonGroup",e,r),mergedClsPrefix:r}},render(){const{mergedClsPrefix:t}=this;return m("div",{class:[`${t}-button-group`,this.rtlEnabled&&`${t}-button-group--rtl`,this.vertical&&`${t}-button-group--vertical`],role:"group"},this.$slots)}});const B=e({},[["render",function(e,o){const a=r,i=t,s=n,l=v;return _(),y(l,{title:"普通按钮"},{default:h((()=>[b(s,null,{default:h((()=>[b(a,{strong:""},{default:h((()=>[$(" Default ")])),_:1}),b(a,{strong:"",type:"tertiary"},{default:h((()=>[$(" Tertiary ")])),_:1}),b(a,{strong:"",type:"primary"},{default:h((()=>[$(" Primary ")])),_:1}),b(a,{strong:"",type:"info"},{default:h((()=>[$(" Info ")])),_:1}),b(a,{strong:"",type:"success"},{default:h((()=>[$(" Success ")])),_:1}),b(a,{strong:"",type:"warning"},{default:h((()=>[$(" Warning ")])),_:1}),b(a,{strong:"",type:"error"},{default:h((()=>[$(" Error ")])),_:1}),b(a,{round:"",strong:""},{default:h((()=>[$(" Default ")])),_:1}),b(a,{round:"",strong:"",type:"primary"},{default:h((()=>[$(" Primary ")])),_:1}),b(a,{round:"",strong:"",type:"info"},{default:h((()=>[$(" Info ")])),_:1}),b(a,{round:"",strong:"",type:"success"},{default:h((()=>[$(" Success ")])),_:1}),b(a,{round:"",strong:"",type:"warning"},{default:h((()=>[$(" Warning ")])),_:1}),b(a,{round:"",strong:"",type:"error"},{default:h((()=>[$(" Error ")])),_:1}),b(a,{circle:"",secondary:"",strong:""},{icon:h((()=>[b(i,{lineIcon:"mdi:square-inc-cash"})])),_:1}),b(a,{circle:"",secondary:"",strong:"",type:"primary"},{icon:h((()=>[b(i,{lineIcon:"mdi:square-inc-cash"})])),_:1}),b(a,{circle:"",secondary:"",strong:"",type:"info"},{icon:h((()=>[b(i,{lineIcon:"mdi:square-inc-cash"})])),_:1}),b(a,{circle:"",secondary:"",strong:"",type:"success"},{icon:h((()=>[b(i,{lineIcon:"mdi:square-inc-cash"})])),_:1}),b(a,{circle:"",secondary:"",strong:"",type:"warning"},{icon:h((()=>[b(i,{lineIcon:"mdi:square-inc-cash"})])),_:1}),b(a,{circle:"",secondary:"",strong:"",type:"error"},{icon:h((()=>[b(i,{lineIcon:"mdi:square-inc-cash"})])),_:1})])),_:1})])),_:1})}]]);const R=e({},[["render",function(e,o){const a=t,i=r,s=P,l=n,u=v;return _(),y(u,{title:"按钮组"},{default:h((()=>[b(l,null,{default:h((()=>[b(s,{vertical:""},{default:h((()=>[b(i,{round:""},{default:h((()=>[b(a),$(" 活着 ")])),_:1}),b(i,{ghost:""},{default:h((()=>[b(a),$(" 不多 ")])),_:1}),b(i,null,{default:h((()=>[b(a),$(" 不少 ")])),_:1})])),_:1}),b(s,{size:"large",vertical:""},{default:h((()=>[b(i,null,{default:h((()=>[b(a),$(" 幸福 ")])),_:1}),b(i,null,{default:h((()=>[b(a),$(" 刚好 ")])),_:1}),b(i,{ghost:"",round:""},{default:h((()=>[b(a),$(" 够用 ")])),_:1})])),_:1}),b(s,{size:"small"},{default:h((()=>[b(i,{round:"",type:"default"},{default:h((()=>[b(a),$(" 活着 ")])),_:1}),b(i,{type:"default"},{default:h((()=>[b(a),$(" 其实 ")])),_:1}),b(i,{type:"default"},{default:h((()=>[b(a),$(" 很好 ")])),_:1})])),_:1}),b(s,null,{default:h((()=>[b(i,{ghost:""},{default:h((()=>[b(a),$(" 再吃 ")])),_:1}),b(i,{ghost:""},{default:h((()=>[b(a),$(" 一颗 ")])),_:1}),b(i,{round:""},{default:h((()=>[b(a),$(" 苹果 ")])),_:1})])),_:1})])),_:1})])),_:1})}]]),S=u({__name:"ButtonTest",setup:t=>(t,r)=>{const e=n,o=v;return _(),y(o,null,{default:h((()=>[b(e,{vertical:!0},{default:h((()=>[b(B),b(R)])),_:1})])),_:1})}});export{S as default};
