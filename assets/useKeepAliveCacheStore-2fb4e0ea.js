import{aU as a,aK as e,aM as r,aV as n,aL as s,aW as t,aX as u,aO as o,a6 as i,G as l,r as v,a9 as c,E as f}from"./index-238407ab.js";import{m}from"./map-ce85832a.js";function p(){var s=arguments.length;if(!s)return[];for(var t=Array(s-1),u=arguments[0],o=s;o--;)t[o-1]=arguments[o];return a(r(u)?n(u):[u],e(t,1))}function d(a,e){var r;return s(a,(function(a,n,s){return!(r=e(a,n,s))})),!!r}function h(a,e,n){var s=r(a)?t:d;return n&&u(a,e,n)&&(e=void 0),s(a,o(e))}function x(a){const{fullPath:e,name:r}=a;return new RegExp(`${String(r||e)}`)}const g=i("useKeepAliveCacheStore",(()=>{const{allUnKeepAliveRouters:a}=c(),e=m(l(a),(a=>x(a))),n=v(e);return{exclude:n,delCache:async a=>{r(a)?(n.value=p(n.value,m(a,(a=>x(a)))),await f(),n.value=e):(n.value=p(n.value,[x(a)]),await f(),n.value=e)}}}));export{h as s,g as u};
