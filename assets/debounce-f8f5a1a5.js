import{bJ as n,bK as t,cS as i}from"./index-238407ab.js";const r=function(){return n.Date.now()};var o=Math.max,e=Math.min;function u(n,u,a){var f,c,v,d,m,s,l=0,p=!1,T=!1,x=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var i=f,r=c;return f=c=void 0,l=t,d=n.apply(r,i)}function g(n){var t=n-s;return void 0===s||t>=u||t<0||T&&n-l>=v}function w(){var n=r();if(g(n))return y(n);m=setTimeout(w,function(n){var t=u-(n-s);return T?e(t,v-(n-l)):t}(n))}function y(n){return m=void 0,x&&f?h(n):(f=c=void 0,d)}function b(){var n=r(),t=g(n);if(f=arguments,c=this,s=n,t){if(void 0===m)return function(n){return l=n,m=setTimeout(w,u),p?h(n):d}(s);if(T)return clearTimeout(m),m=setTimeout(w,u),h(s)}return void 0===m&&(m=setTimeout(w,u)),d}return u=t(u)||0,i(a)&&(p=!!a.leading,v=(T="maxWait"in a)?o(t(a.maxWait)||0,u):v,x="trailing"in a?!!a.trailing:x),b.cancel=function(){void 0!==m&&clearTimeout(m),l=0,f=s=c=m=void 0},b.flush=function(){return void 0===m?d:y(r())},b}export{u as d};
