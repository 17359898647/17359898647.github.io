import{_ as e}from"./RippleButton-01023426.js";import{r as t}from"./index-824a8f7b.js";import{d as s,r as a,o,c as r,w as l,bw as n,a as i,G as u,J as p,ak as d,U as m,af as c}from"./index-238407ab.js";import{_ as f}from"./Input-d989b6c2.js";import{_ as j}from"./Space-81cbf9cd.js";import"./throttle-c29aa9bf.js";import"./debounce-f8f5a1a5.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./use-merged-state-65ab3d52.js";import"./get-slot-a0e67e91.js";const _=["innerHTML"],g=s({__name:"NetTest",setup(s){const g=a("1"),{execute:v,isLoading:h,data:x}=t({url:()=>`https://jsonplaceholder.typicode.com/todos/${g.value}`,retry:3,onSuccess:e=>{},onError:e=>{},onFinish:()=>{}});return(t,s)=>{const a=e,y=f,L=n,S=j;return o(),r(L,{title:"网络测试"},{default:l((()=>[i(S,{size:10,vertical:""},{default:l((()=>[i(a,{loading:u(h),onClick:s[0]||(s[0]=()=>u(v)())},{default:l((()=>[p(" 触发 ")])),_:1},8,["loading"]),i(y,{value:u(g),"onUpdate:value":s[1]||(s[1]=e=>d(g)?g.value=e:null)},null,8,["value"]),i(L,null,{default:l((()=>[m("pre",{innerHTML:JSON.stringify(("toValue"in t?t.toValue:u(c))(u(x)),null,2)},null,8,_)])),_:1})])),_:1})])),_:1})}}});export{g as default};
