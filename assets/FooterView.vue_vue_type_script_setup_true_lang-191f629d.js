import{f as o,i as e,d as r,k as t,x as s,q as n,A as i,h as a,F as l,o as d,c,w as b,J as u,G as f,I as p,l as v}from"./index-95b60c01.js";import{p as h}from"./interface-391335ac.js";import{l as m}from"./light-e26023da.js";const x=o("layout-footer","\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n",[e("absolute-positioned","\n position: absolute;\n left: 0;\n right: 0;\n bottom: 0;\n "),e("bordered","\n border-top: solid 1px var(--n-border-color);\n ")]),g=r({name:"LayoutFooter",props:Object.assign(Object.assign({},s.props),{inverted:Boolean,position:h,bordered:Boolean}),setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=t(o),a=s("Layout","-layout-footer",x,m,o,e),l=n((()=>{const{common:{cubicBezierEaseInOut:e},self:r}=a.value,t={"--n-bezier":e};return o.inverted?(t["--n-color"]=r.footerColorInverted,t["--n-text-color"]=r.textColorInverted,t["--n-border-color"]=r.footerBorderColorInverted):(t["--n-color"]=r.footerColor,t["--n-text-color"]=r.textColor,t["--n-border-color"]=r.footerBorderColor),t})),d=r?i("layout-footer",n((()=>o.inverted?"a":"b")),l,o):void 0;return{mergedClsPrefix:e,cssVars:r?void 0:l,themeClass:null==d?void 0:d.themeClass,onRender:null==d?void 0:d.onRender}},render(){var o;const{mergedClsPrefix:e}=this;return null===(o=this.onRender)||void 0===o||o.call(this),a("div",{class:[`${e}-layout-footer`,this.themeClass,this.position&&`${e}-layout-footer--${this.position}-positioned`,this.bordered&&`${e}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),C=r({__name:"FooterView",setup(o){const{isFixedFooter:e,isFooterHeight:r}=l(v),t=n((()=>({height:`${r.value}px`})));return(o,r)=>{const s=g;return d(),c(s,{class:"z100 flex-center",position:f(e)?"absolute":"static",style:p(f(t))},{default:b((()=>[u(" footer ")])),_:1},8,["position","style"])}}});export{C as _};
