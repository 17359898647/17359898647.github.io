import{aS as a,aG as e,aI as r,aT as n,aH as s,aU as t,aV as u,aK as o,aN as i,G as l,r as v,ah as c,E as f}from"./index-0d090638.js";import{m}from"./map-741cce01.js";function p(){var s=arguments.length;if(!s)return[];for(var t=Array(s-1),u=arguments[0],o=s;o--;)t[o-1]=arguments[o];return a(r(u)?n(u):[u],e(t,1))}function h(a,e){var r;return s(a,(function(a,n,s){return!(r=e(a,n,s))})),!!r}function d(a,e,n){var s=r(a)?t:h;return n&&u(a,e,n)&&(e=void 0),s(a,o(e))}function x(a){const{fullPath:e,name:r}=a;return new RegExp(`${String(r||e)}`)}const g=i("useKeepAliveCacheStore",(()=>{const{allUnKeepAliveRouters:a}=c(),e=m(l(a),(a=>x(a))),n=v(e);return{exclude:n,delCache:async a=>{r(a)?(n.value=p(n.value,m(a,(a=>x(a)))),await f(),n.value=e):(n.value=p(n.value,[x(a)]),await f(),n.value=e)}}}));export{d as s,g as u};
