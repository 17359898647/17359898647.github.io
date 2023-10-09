import{r as e,_ as o,p as n}from"./Popover-a2088b09.js";import{r,n as t,d as i,h as l,K as d,F as a,b3 as s,q as u,p,$ as c,T as v,C as f,Z as h,bL as b,_ as m,b4 as w,b2 as g,cH as y,f as x,g as S,j as N,a3 as R,i as P,P as k,t as C,k as I,x as $,cI as O,Q as A,be as z,A as F,a1 as _}from"./index-b242db6d.js";import{N as j}from"./Icon-52f5e921.js";import{h as K,c as L,u as T}from"./create-bca2b0ba.js";import{V as D,a as B,b as M}from"./Follower-b26eec9b.js";import{u as H}from"./use-merged-state-e56711b5.js";function E(e){return o=>{e.value=o?o.$el:null}}const q=i({name:"ChevronRight",render:()=>l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}),U=i({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),G=d("n-dropdown-menu"),W=d("n-dropdown"),V=d("n-dropdown-option");function Q(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function Z(e){return"divider"===e.type}const X=i({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=a(W),{hoverKeyRef:n,keyboardKeyRef:i,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:d,activeKeyPathRef:v,animatedRef:f,mergedShowRef:h,renderLabelRef:b,renderIconRef:m,labelFieldRef:w,childrenFieldRef:g,renderOptionRef:y,nodePropsRef:x,menuPropsRef:S}=o,N=a(V,null),R=a(G),P=a(s),k=u((()=>e.tmNode.rawNode)),C=u((()=>{const{value:o}=g;return Q(e.tmNode.rawNode,o)})),I=u((()=>{const{disabled:o}=e.tmNode;return o})),$=function(e,o,n){if(!o)return e;const i=r(e.value);let l=null;return t(e,(e=>{null!==l&&window.clearTimeout(l),!0===e?n&&!n.value?i.value=!0:l=window.setTimeout((()=>{i.value=!0}),o):i.value=!1})),i}(u((()=>{if(!C.value)return!1;const{key:o,disabled:r}=e.tmNode;if(r)return!1;const{value:t}=n,{value:a}=i,{value:s}=l,{value:u}=d;return null!==t?u.includes(o):null!==a?u.includes(o)&&u[u.length-1]!==o:null!==s&&u.includes(o)})),300,u((()=>null===i.value&&!f.value))),O=u((()=>!!(null==N?void 0:N.enteringSubmenuRef.value))),A=r(!1);function z(){const{parentKey:o,tmNode:r}=e;r.disabled||h.value&&(l.value=o,i.value=null,n.value=r.key)}return p(V,{enteringSubmenuRef:A}),{labelField:w,renderLabel:b,renderIcon:m,siblingHasIcon:R.showIconRef,siblingHasSubmenu:R.hasSubmenuRef,menuProps:S,popoverBody:P,animated:f,mergedShowSubmenu:u((()=>$.value&&!O.value)),rawNode:k,hasSubmenu:C,pending:c((()=>{const{value:o}=d,{key:n}=e.tmNode;return o.includes(n)})),childActive:c((()=>{const{value:o}=v,{key:n}=e.tmNode,r=o.findIndex((e=>n===e));return-1!==r&&r<o.length-1})),active:c((()=>{const{value:o}=v,{key:n}=e.tmNode,r=o.findIndex((e=>n===e));return-1!==r&&r===o.length-1})),mergedDisabled:I,renderOption:y,nodeProps:x,handleClick:function(){const{value:n}=C,{tmNode:r}=e;h.value&&(n||r.disabled||(o.doSelect(r.key,r.rawNode),o.doUpdateShow(!1)))},handleMouseMove:function(){const{tmNode:o}=e;o.disabled||h.value&&n.value!==o.key&&z()},handleMouseEnter:z,handleMouseLeave:function(o){if(e.tmNode.disabled)return;if(!h.value)return;const{relatedTarget:r}=o;!r||K({target:r},"dropdownOption")||K({target:r},"scrollbarRail")||(n.value=null)},handleSubmenuBeforeEnter:function(){A.value=!0},handleSubmenuAfterEnter:function(){A.value=!1}}},render(){var e,o;const{animated:n,rawNode:r,mergedShowSubmenu:t,clsPrefix:i,siblingHasIcon:d,siblingHasSubmenu:a,renderLabel:s,renderIcon:u,renderOption:p,nodeProps:c,props:b,scrollable:m}=this;let w=null;if(t){const o=null===(e=this.menuProps)||void 0===e?void 0:e.call(this,r,r.children);w=l(oe,Object.assign({},o,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=null==c?void 0:c(r),x=l("div",Object.assign({class:[`${i}-dropdown-option`,null==y?void 0:y.class],"data-dropdown-option":!0},y),l("div",f(g,b),[l("div",{class:[`${i}-dropdown-option-body__prefix`,d&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(r):h(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(r):h(null!==(o=r[this.labelField])&&void 0!==o?o:r.title)),l("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,a&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(j,null,{default:()=>l(q,null)}):null)]),this.hasSubmenu?l(D,null,{default:()=>[l(B,null,{default:()=>l("div",{class:`${i}-dropdown-offset-container`},l(M,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>l("div",{class:`${i}-dropdown-menu-wrapper`},n?l(v,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return p?p({node:x,option:r}):x}}),J=i({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=a(G),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:t,renderOptionRef:i}=a(W);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:t,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:r,nodeProps:t,renderLabel:i,renderOption:d}=this,{rawNode:a}=this.tmNode,s=l("div",Object.assign({class:`${o}-dropdown-option`},null==t?void 0:t(a)),l("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},h(a.icon)),l("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(a):h(null!==(e=a.title)&&void 0!==e?e:a[this.labelField])),l("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:s,option:a}):s}}),Y=i({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:r}=e;return l(m,null,l(J,{clsPrefix:n,tmNode:e,key:e.key}),null==r?void 0:r.map((e=>{const{rawNode:r}=e;return!1===r.show?null:Z(r)?l(U,{clsPrefix:n,key:e.key}):e.isGroup?(b("dropdown","`group` node is not allowed to be put in `group` node."),null):l(X,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})})))}}),ee=i({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return l("div",o,[null==e?void 0:e()])}}),oe=i({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=a(W);p(G,{showIconRef:u((()=>{const n=o.value;return e.tmNodes.some((e=>{var o;if(e.isGroup)return null===(o=e.children)||void 0===o?void 0:o.some((({rawNode:e})=>n?n(e):e.icon));const{rawNode:r}=e;return n?n(r):r.icon}))})),hasSubmenuRef:u((()=>{const{value:o}=n;return e.tmNodes.some((e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some((({rawNode:e})=>Q(e,o)));const{rawNode:r}=e;return Q(r,o)}))}))});const t=r(null);return p(w,null),p(g,null),p(s,t),{bodyRef:t}},render(){const{parentKey:o,clsPrefix:n,scrollable:r}=this,t=this.tmNodes.map((e=>{const{rawNode:t}=e;return!1===t.show?null:function(e){return"render"===e.type}(t)?l(ee,{tmNode:e,key:e.key}):Z(t)?l(U,{clsPrefix:n,key:e.key}):function(e){return"group"===e.type}(t)?l(Y,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key}):l(X,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key,props:t.props,scrollable:r})}));return l("div",{class:[`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},r?l(y,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?e({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),ne=x("dropdown-menu","\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[S(),x("dropdown-option","\n position: relative;\n ",[N("a","\n text-decoration: none;\n color: inherit;\n outline: none;\n ",[N("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),x("dropdown-option-body","\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ",[N("&::before",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '),R("disabled",[P("pending","\n color: var(--n-option-text-color-hover);\n ",[k("prefix, suffix","\n color: var(--n-option-text-color-hover);\n "),N("&::before","background-color: var(--n-option-color-hover);")]),P("active","\n color: var(--n-option-text-color-active);\n ",[k("prefix, suffix","\n color: var(--n-option-text-color-active);\n "),N("&::before","background-color: var(--n-option-color-active);")]),P("child-active","\n color: var(--n-option-text-color-child-active);\n ",[k("prefix, suffix","\n color: var(--n-option-text-color-child-active);\n ")])]),P("disabled","\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "),P("group","\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ",[k("prefix","\n width: calc(var(--n-option-prefix-width) / 2);\n ",[P("show-icon","\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]),k("prefix","\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ",[P("show-icon","\n width: var(--n-option-icon-prefix-width);\n "),x("icon","\n font-size: var(--n-option-icon-size);\n ")]),k("label","\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "),k("suffix","\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ",[P("has-submenu","\n width: var(--n-option-icon-suffix-width);\n "),x("icon","\n font-size: var(--n-option-icon-size);\n ")]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]),x("dropdown-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "),x("dropdown-menu-wrapper","\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "),N(">",[x("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),R("scrollable","\n padding: var(--n-padding);\n "),P("scrollable",[k("content","\n padding: var(--n-padding);\n ")])]),re={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},te=Object.keys(n),ie=i({name:"Dropdown",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},n),re),$.props),setup(e){const o=r(!1),n=H(C(e,"show"),o),i=u((()=>{const{keyField:o,childrenField:n}=e;return L(e.options,{getKey:e=>e[o],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[n]})})),l=u((()=>i.value.treeNodes)),d=r(null),a=r(null),s=r(null),v=u((()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=d.value)&&void 0!==e?e:a.value)&&void 0!==o?o:s.value)&&void 0!==n?n:null})),f=u((()=>i.value.getPath(v.value).keyPath)),h=u((()=>i.value.getPath(e.value).keyPath)),b=c((()=>e.keyboard&&n.value));T({keydown:{ArrowUp:{prevent:!0,handler:function(){R("up")}},ArrowRight:{prevent:!0,handler:function(){R("right")}},ArrowDown:{prevent:!0,handler:function(){R("down")}},ArrowLeft:{prevent:!0,handler:function(){R("left")}},Enter:{prevent:!0,handler:function(){const e=N();(null==e?void 0:e.isLeaf)&&n.value&&(y(e.key,e.rawNode),x(!1))}},Escape:function(){x(!1)}}},b);const{mergedClsPrefixRef:m,inlineThemeDisabled:w}=I(e),g=$("Dropdown","-dropdown",ne,O,e,m);function y(o,n){const{onSelect:r}=e;r&&A(r,o,n)}function x(n){const{"onUpdate:show":r,onUpdateShow:t}=e;r&&A(r,n),t&&A(t,n),o.value=n}function S(){d.value=null,a.value=null,s.value=null}function N(){var e;const{value:o}=i,{value:n}=v;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function R(e){const{value:o}=v,{value:{getFirstAvailableNode:n}}=i;let r=null;if(null===o){const e=n();null!==e&&(r=e.key)}else{const o=N();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(r=n.key)}}null!==r&&(d.value=null,a.value=r)}p(W,{labelFieldRef:C(e,"labelField"),childrenFieldRef:C(e,"childrenField"),renderLabelRef:C(e,"renderLabel"),renderIconRef:C(e,"renderIcon"),hoverKeyRef:d,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:f,activeKeyPathRef:h,animatedRef:C(e,"animated"),mergedShowRef:n,nodePropsRef:C(e,"nodeProps"),renderOptionRef:C(e,"renderOption"),menuPropsRef:C(e,"menuProps"),doSelect:y,doUpdateShow:x}),t(n,(o=>{e.animated||o||S()}));const P=u((()=>{const{size:o,inverted:n}=e,{common:{cubicBezierEaseInOut:r},self:t}=g.value,{padding:i,dividerColor:l,borderRadius:d,optionOpacityDisabled:a,[z("optionIconSuffixWidth",o)]:s,[z("optionSuffixWidth",o)]:u,[z("optionIconPrefixWidth",o)]:p,[z("optionPrefixWidth",o)]:c,[z("fontSize",o)]:v,[z("optionHeight",o)]:f,[z("optionIconSize",o)]:h}=t,b={"--n-bezier":r,"--n-font-size":v,"--n-padding":i,"--n-border-radius":d,"--n-option-height":f,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":p,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":s,"--n-option-icon-size":h,"--n-divider-color":l,"--n-option-opacity-disabled":a};return n?(b["--n-color"]=t.colorInverted,b["--n-option-color-hover"]=t.optionColorHoverInverted,b["--n-option-color-active"]=t.optionColorActiveInverted,b["--n-option-text-color"]=t.optionTextColorInverted,b["--n-option-text-color-hover"]=t.optionTextColorHoverInverted,b["--n-option-text-color-active"]=t.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=t.optionTextColorChildActiveInverted,b["--n-prefix-color"]=t.prefixColorInverted,b["--n-suffix-color"]=t.suffixColorInverted,b["--n-group-header-text-color"]=t.groupHeaderTextColorInverted):(b["--n-color"]=t.color,b["--n-option-color-hover"]=t.optionColorHover,b["--n-option-color-active"]=t.optionColorActive,b["--n-option-text-color"]=t.optionTextColor,b["--n-option-text-color-hover"]=t.optionTextColorHover,b["--n-option-text-color-active"]=t.optionTextColorActive,b["--n-option-text-color-child-active"]=t.optionTextColorChildActive,b["--n-prefix-color"]=t.prefixColor,b["--n-suffix-color"]=t.suffixColor,b["--n-group-header-text-color"]=t.groupHeaderTextColor),b})),k=w?F("dropdown",u((()=>`${e.size[0]}${e.inverted?"i":""}`)),P,e):void 0;return{mergedClsPrefix:m,mergedTheme:g,tmNodes:l,mergedShow:n,handleAfterLeave:()=>{e.animated&&S()},doUpdateShow:x,cssVars:w?void 0:P,themeClass:null==k?void 0:k.themeClass,onRender:null==k?void 0:k.onRender}},render(){const{mergedTheme:e}=this,n={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,r,t)=>{var i;const{mergedClsPrefix:d,menuProps:a}=this;null===(i=this.onRender)||void 0===i||i.call(this);const s=(null==a?void 0:a(void 0,this.tmNodes.map((e=>e.rawNode))))||{},u={ref:E(o),class:[e,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:t};return l(oe,f(this.$attrs,u,s))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(o,Object.assign({},_(this.$props,te),n),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}});export{q as C,ie as _,E as c};
