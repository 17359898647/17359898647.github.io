import{q as e,b4 as o,b5 as n,j as t,f as r,a3 as a,P as l,i as s,cB as i,d,k as c,x as u,cC as p,r as v,F as h,m as f,bf as g,aq as w,A as b,z as m,n as y,t as $,be as S,p as x,h as B,T as k,bn as z,bm as C,bo as M,cn as O,bl as E,C as A,ao as j,c0 as T,_ as F,cy as I,B as P,$ as R,cD as _,cE as N,cF as D,bt as H,a1 as W,Q as L}from"./index-238407ab.js";import{m as U}from"./map-ce85832a.js";import{f as K}from"./format-length-2aad21f5.js";import{u as q,b as V,a as X,V as Y}from"./Follower-19b8806f.js";import{u as Q}from"./use-merged-state-65ab3d52.js";let G;function J(o,n){return e((()=>{for(const e of n)if(void 0!==o[e])return o[e];return o[n[n.length-1]]}))}const Z="@@mmoContext",ee={mounted(e,{value:n}){e[Z]={handler:void 0},"function"==typeof n&&(e[Z].handler=n,o("mousemoveoutside",e,n))},updated(e,{value:t}){const r=e[Z];"function"==typeof t?r.handler?r.handler!==t&&(n("mousemoveoutside",e,r.handler),r.handler=t,o("mousemoveoutside",e,t)):(e[Z].handler=t,o("mousemoveoutside",e,t)):r.handler&&(n("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:o}=e[Z];o&&n("mousemoveoutside",e,o),e[Z].handler=void 0}},oe={top:"bottom",bottom:"top",left:"right",right:"left"},ne="var(--n-arrow-height) * 1.414",te=t([r("popover","\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n position: relative;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n box-shadow: var(--n-box-shadow);\n word-break: break-word;\n ",[t(">",[r("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),a("raw","\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n ",[a("scrollable",[a("show-header-or-footer","padding: var(--n-padding);")])]),l("header","\n padding: var(--n-padding);\n border-bottom: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "),l("footer","\n padding: var(--n-padding);\n border-top: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "),s("scrollable, show-header-or-footer",[l("content","\n padding: var(--n-padding);\n ")])]),r("popover-shared","\n transform-origin: inherit;\n ",[r("popover-arrow-wrapper","\n position: absolute;\n overflow: hidden;\n pointer-events: none;\n ",[r("popover-arrow",`\n transition: background-color .3s var(--n-bezier);\n position: absolute;\n display: block;\n width: calc(${ne});\n height: calc(${ne});\n box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);\n transform: rotate(45deg);\n background-color: var(--n-color);\n pointer-events: all;\n `)]),t("&.popover-transition-enter-from, &.popover-transition-leave-to","\n opacity: 0;\n transform: scale(.85);\n "),t("&.popover-transition-enter-to, &.popover-transition-leave-from","\n transform: scale(1);\n opacity: 1;\n "),t("&.popover-transition-enter-active","\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-out),\n transform .15s var(--n-bezier-ease-out);\n "),t("&.popover-transition-leave-active","\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-in),\n transform .15s var(--n-bezier-ease-in);\n ")]),ae("top-start",`\n top: calc(${ne} / -2);\n left: calc(${re("top-start")} - var(--v-offset-left));\n `),ae("top",`\n top: calc(${ne} / -2);\n transform: translateX(calc(${ne} / -2)) rotate(45deg);\n left: 50%;\n `),ae("top-end",`\n top: calc(${ne} / -2);\n right: calc(${re("top-end")} + var(--v-offset-left));\n `),ae("bottom-start",`\n bottom: calc(${ne} / -2);\n left: calc(${re("bottom-start")} - var(--v-offset-left));\n `),ae("bottom",`\n bottom: calc(${ne} / -2);\n transform: translateX(calc(${ne} / -2)) rotate(45deg);\n left: 50%;\n `),ae("bottom-end",`\n bottom: calc(${ne} / -2);\n right: calc(${re("bottom-end")} + var(--v-offset-left));\n `),ae("left-start",`\n left: calc(${ne} / -2);\n top: calc(${re("left-start")} - var(--v-offset-top));\n `),ae("left",`\n left: calc(${ne} / -2);\n transform: translateY(calc(${ne} / -2)) rotate(45deg);\n top: 50%;\n `),ae("left-end",`\n left: calc(${ne} / -2);\n bottom: calc(${re("left-end")} + var(--v-offset-top));\n `),ae("right-start",`\n right: calc(${ne} / -2);\n top: calc(${re("right-start")} - var(--v-offset-top));\n `),ae("right",`\n right: calc(${ne} / -2);\n transform: translateY(calc(${ne} / -2)) rotate(45deg);\n top: 50%;\n `),ae("right-end",`\n right: calc(${ne} / -2);\n bottom: calc(${re("right-end")} + var(--v-offset-top));\n `),...U({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},((e,o)=>{const n=["right","left"].includes(o),a=n?"width":"height";return e.map((e=>{const l="end"===e.split("-")[1],i=`calc((${`var(--v-target-${a}, 0px)`} - ${ne}) / 2)`,d=re(e);return t(`[v-placement="${e}"] >`,[r("popover-shared",[s("center-arrow",[r("popover-arrow",`${o}: calc(max(${i}, ${d}) ${l?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])}))}))]);function re(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ae(e,o){const n=e.split("-")[0],a=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return t(`[v-placement="${e}"] >`,[r("popover-shared",`\n margin-${oe[n]}: var(--n-space);\n `,[s("show-arrow",`\n margin-${oe[n]}: var(--n-space-arrow);\n `),s("overlap","\n margin: 0;\n "),i("popover-arrow-wrapper",`\n right: 0;\n left: 0;\n top: 0;\n bottom: 0;\n ${n}: 100%;\n ${oe[n]}: auto;\n ${a}\n `,[r("popover-arrow",o)])])])}const le=Object.assign(Object.assign({},u.props),{to:q.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),se=({arrowStyle:e,clsPrefix:o})=>B("div",{key:"__popover-arrow__",class:`${o}-popover-arrow-wrapper`},B("div",{class:`${o}-popover-arrow`,style:e})),ie=d({name:"PopoverBody",inheritAttrs:!1,props:le,setup(o,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:a,inlineThemeDisabled:l}=c(o),s=u("Popover","-popover",te,p,o,a),i=v(null),d=h("NPopover"),k=v(null),P=v(o.show),R=v(!1);f((()=>{const{show:e}=o;!e||(void 0===G&&(G=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),G)||o.internalDeactivateImmediately||(R.value=!0)}));const _=e((()=>{const{trigger:e,onClickoutside:n}=o,t=[],{positionManuallyRef:{value:r}}=d;return r||("click"!==e||n||t.push([g,V,void 0,{capture:!0}]),"hover"===e&&t.push([ee,U])),n&&t.push([g,V,void 0,{capture:!0}]),("show"===o.displayDirective||o.animated&&R.value)&&t.push([w,o.show]),t})),N=e((()=>{const e="trigger"===o.width?void 0:K(o.width),n=[];e&&n.push({width:e});const{maxWidth:t,minWidth:r}=o;return t&&n.push({maxWidth:K(t)}),r&&n.push({maxWidth:K(r)}),l||n.push(D.value),n})),D=e((()=>{const{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:o,cubicBezierEaseOut:n},self:{space:t,spaceArrow:r,padding:a,fontSize:l,textColor:i,dividerColor:d,color:c,boxShadow:u,borderRadius:p,arrowHeight:v,arrowOffset:h,arrowOffsetVertical:f}}=s.value;return{"--n-box-shadow":u,"--n-bezier":e,"--n-bezier-ease-in":o,"--n-bezier-ease-out":n,"--n-font-size":l,"--n-text-color":i,"--n-color":c,"--n-divider-color":d,"--n-border-radius":p,"--n-arrow-height":v,"--n-arrow-offset":h,"--n-arrow-offset-vertical":f,"--n-padding":a,"--n-space":t,"--n-space-arrow":r}})),H=l?b("popover",void 0,D,o):void 0;function W(e){"hover"===o.trigger&&o.keepAliveOnHover&&o.show&&d.handleMouseEnter(e)}function L(e){"hover"===o.trigger&&o.keepAliveOnHover&&d.handleMouseLeave(e)}function U(e){"hover"!==o.trigger||X().contains(S(e))||d.handleMouseMoveOutside(e)}function V(e){("click"===o.trigger&&!X().contains(S(e))||o.onClickoutside)&&d.handleClickOutside(e)}function X(){return d.getTriggerElement()}return d.setBodyInstance({syncPosition:function(){var e;null===(e=i.value)||void 0===e||e.syncPosition()}}),m((()=>{d.setBodyInstance(null)})),y($(o,"show"),(e=>{o.animated||(P.value=!!e)})),x(z,k),x(C,null),x(M,null),{displayed:R,namespace:r,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:i,adjustedTo:q(o),followerEnabled:P,renderContentNode:function(){if(null==H||H.onRender(),!("show"===o.displayDirective||o.show||o.animated&&R.value))return null;let e;const r=d.internalRenderBodyRef.value,{value:l}=a;if(r)e=r([`${l}-popover-shared`,null==H?void 0:H.themeClass.value,o.overlap&&`${l}-popover-shared--overlap`,o.showArrow&&`${l}-popover-shared--show-arrow`,o.arrowPointToCenter&&`${l}-popover-shared--center-arrow`],k,N.value,W,L);else{const{value:r}=d.extraClassRef,{internalTrapFocus:a}=o,s=!O(n.header)||!O(n.footer),i=()=>{var e;const t=s?B(F,null,T(n.header,(e=>e?B("div",{class:`${l}-popover__header`,style:o.headerStyle},e):null)),T(n.default,(e=>e?B("div",{class:`${l}-popover__content`,style:o.contentStyle},n):null)),T(n.footer,(e=>e?B("div",{class:`${l}-popover__footer`,style:o.footerStyle},e):null))):o.scrollable?null===(e=n.default)||void 0===e?void 0:e.call(n):B("div",{class:`${l}-popover__content`,style:o.contentStyle},n);return[o.scrollable?B(I,{contentClass:s?void 0:`${l}-popover__content`,contentStyle:s?void 0:o.contentStyle},{default:()=>t}):t,o.showArrow?se({arrowStyle:o.arrowStyle,clsPrefix:l}):null]};e=B("div",A({class:[`${l}-popover`,`${l}-popover-shared`,null==H?void 0:H.themeClass.value,r.map((e=>`${l}-${e}`)),{[`${l}-popover--scrollable`]:o.scrollable,[`${l}-popover--show-header-or-footer`]:s,[`${l}-popover--raw`]:o.raw,[`${l}-popover-shared--overlap`]:o.overlap,[`${l}-popover-shared--show-arrow`]:o.showArrow,[`${l}-popover-shared--center-arrow`]:o.arrowPointToCenter}],ref:k,style:N.value,onKeydown:d.handleKeydown,onMouseenter:W,onMouseleave:L},t),a?B(E,{active:o.show,autoFocus:!0},{default:i}):i())}return j(e,_.value)}}},render(){return B(V,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:"trigger"===this.width?"target":void 0,teleportDisabled:this.adjustedTo===q.tdkey},{default:()=>this.animated?B(k,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;null===(e=this.internalOnAfterLeave)||void 0===e||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),de=Object.keys(le),ce={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};const ue={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:q.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},pe=d({name:"Popover",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},u.props),ue),{internalOnAfterLeave:Function,internalRenderBody:Function}),__popover__:!0,setup(o){const n=P(),t=v(null),r=e((()=>o.show)),a=v(o.defaultShow),l=Q(r,a),s=R((()=>!o.disabled&&l.value)),i=()=>{if(o.disabled)return!0;const{getDisabled:e}=o;return!!(null==e?void 0:e())},d=()=>!i()&&l.value,c=J(o,["arrow","showArrow"]),u=e((()=>!o.overlap&&c.value));let p=null;const h=v(null),g=v(null),w=R((()=>void 0!==o.x&&void 0!==o.y));function b(e){const{"onUpdate:show":n,onUpdateShow:t,onShow:r,onHide:l}=o;a.value=e,n&&L(n,e),t&&L(t,e),e&&r&&L(r,!0),e&&l&&L(l,!1)}function m(){const{value:e}=h;e&&(window.clearTimeout(e),h.value=null)}function y(){const{value:e}=g;e&&(window.clearTimeout(e),g.value=null)}function S(){const e=i();if("hover"===o.trigger&&!e){if(y(),null!==h.value)return;if(d())return;const e=()=>{b(!0),h.value=null},{delay:n}=o;0===n?e():h.value=window.setTimeout(e,n)}}function B(){const e=i();if("hover"===o.trigger&&!e){if(m(),null!==g.value)return;if(!d())return;const e=()=>{b(!1),g.value=null},{duration:n}=o;0===n?e():g.value=window.setTimeout(e,n)}}return x("NPopover",{getTriggerElement:function(){var e;return null===(e=t.value)||void 0===e?void 0:e.targetRef},handleKeydown:function(e){o.internalTrapFocus&&"Escape"===e.key&&(m(),y(),b(!1))},handleMouseEnter:S,handleMouseLeave:B,handleClickOutside:function(e){var n;d()&&("click"===o.trigger&&(m(),y(),b(!1)),null===(n=o.onClickoutside)||void 0===n||n.call(o,e))},handleMouseMoveOutside:function(){B()},setBodyInstance:function(e){p=e},positionManuallyRef:w,isMountedRef:n,zIndexRef:$(o,"zIndex"),extraClassRef:$(o,"internalExtraClass"),internalRenderBodyRef:$(o,"internalRenderBody")}),f((()=>{l.value&&i()&&b(!1)})),{binderInstRef:t,positionManually:w,mergedShowConsideringDisabledProp:s,uncontrolledShow:a,mergedShowArrow:u,getMergedShow:d,setShow:function(e){a.value=e},handleClick:function(){if("click"===o.trigger&&!i()){m(),y();b(!d())}},handleMouseEnter:S,handleMouseLeave:B,handleFocus:function(){const e=i();if("focus"===o.trigger&&!e){if(d())return;b(!0)}},handleBlur:function(){const e=i();if("focus"===o.trigger&&!e){if(!d())return;b(!1)}},syncPosition:function(){p&&p.syncPosition()}}},render(){var e;const{positionManually:o,$slots:n}=this;let t,r=!1;if(!o&&(t=n.activator?_(n,"activator"):_(n,"trigger"),t)){t=N(t),t=t.type===D?B("span",[t]):t;const n={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(null===(e=t.type)||void 0===e?void 0:e.__popover__)r=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[n,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[n];else{const{internalInheritedEventHandlers:e}=this,r=[n,...e],i={onBlur:e=>{r.forEach((o=>{o.onBlur(e)}))},onFocus:e=>{r.forEach((o=>{o.onFocus(e)}))},onClick:e=>{r.forEach((o=>{o.onClick(e)}))},onMouseenter:e=>{r.forEach((o=>{o.onMouseenter(e)}))},onMouseleave:e=>{r.forEach((o=>{o.onMouseleave(e)}))}};a=t,l=e?"nested":o?"manual":this.trigger,s=i,ce[l].forEach((e=>{a.props?a.props=Object.assign({},a.props):a.props={};const o=a.props[e],n=s[e];a.props[e]=o?(...e)=>{o(...e),n(...e)}:n}))}}var a,l,s;return B(Y,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const e=this.getMergedShow();return[this.internalTrapFocus&&e?j(B("div",{style:{position:"fixed",inset:0}}),[[H,{enabled:e,zIndex:this.zIndex}]]):null,o?null:B(X,null,{default:()=>t}),B(ie,W(this.$props,de,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:e})),{default:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)},header:()=>{var e,o;return null===(o=(e=this.$slots).header)||void 0===o?void 0:o.call(e)},footer:()=>{var e,o;return null===(o=(e=this.$slots).footer)||void 0===o?void 0:o.call(e)}})]}})}});export{pe as _,ue as p,se as r,J as u};
