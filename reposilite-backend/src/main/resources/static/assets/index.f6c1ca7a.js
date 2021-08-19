var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,o)=>{for(var s in o||(o={}))n.call(o,s)&&r(e,s,o[s]);if(t)for(var s of t(o))a.call(o,s)&&r(e,s,o[s]);return e};import{r as s,d as l,u as i,o as d,a as c,c as u,b as p,n as m,e as f,f as b,w as g,g as v,h as w,t as y,i as h,F as x,j as I,p as k,k as T,l as E,m as S,q as O,s as _,V as P,v as L,T as M}from"./vendor.0ea7ccdd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const R=s({isDark:!1});function j(){return{theme:R,fetchTheme:()=>{R.isDark="true"===localStorage.getItem("dark-theme")},toggleTheme:()=>{R.isDark=!R.isDark,localStorage.setItem("dark-theme",R.isDark)}}}const D=l({setup(){i({title:window.REPOSILITE_TITLE,description:window.REPOSILITE_DESCRIPTION});const{theme:e,fetchTheme:t}=j();return d((()=>{t()})),{theme:e}}});D.render=function(e,t,n,a,r,o){const s=c("router-view");return f(),u("div",{class:m({dark:e.theme.isDark})},[p(s,{class:"min-h-screen dark:bg-black dark:text-white"})],2)};const V={},A={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},B=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)];V.render=function(e,t){return f(),u("svg",A,B)};const H={components:{GlobeIcon:V}},$={class:"bg-gray-100 dark:bg-black"},C={class:"container mx-auto flex flex-row"},G=b("div",{class:"w-35"},[b("img",{class:"border-2 rounded-full dark:border-gray-700",src:"https://avatars.githubusercontent.com/u/75123628?s=200&v=4"})],-1),U={class:"flex flex-col justify-center px-10"},N=b("div",null,[b("p",null,"Public Maven repository for Bookkity organization")],-1),z={class:"flex flex-row py-2"},K=b("a",{class:"px-3 text-gray-500",href:"https://github.com/bookkity"},"https://github.com/bookkity",-1);H.render=function(e,t,n,a,r,o){const s=c("GlobeIcon");return f(),u("div",$,[b("div",C,[G,b("div",U,[N,b("div",z,[p(s),K])])])])};const q={},F={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},J=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)];q.render=function(e,t){return f(),u("svg",F,J)};const Q={},W={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},X=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)];Q.render=function(e,t){return f(),u("svg",W,X)};const Y={name:"Index",components:{Hero:H,MoonIcon:q,SunIcon:Q},setup(){const{theme:e,toggleTheme:t}=j();return{theme:e,toggleTheme:t}},data:()=>({title:window.REPOSILITE_TITLE})},Z={class:"bg-gray-100 dark:bg-black dark:text-white"},ee={class:"container mx-auto flex flex-row py-10 justify-between"},te={class:"text-xl font-medium py-1"},ne={class:"flex flex-row mt-0.5"},ae=b("div",{class:"py-1.5 rounded-full bg-white dark:bg-gray-900 font-bold px-6 text-sm"}," Dashboard ",-1);Y.render=function(e,t,n,a,r,o){const s=c("router-link"),l=c("SunIcon"),i=c("MoonIcon"),d=c("Hero");return f(),u("header",Z,[b("div",ee,[b("h1",te,[p(s,{to:"/"},{default:g((()=>[w(y(r.title),1)])),_:1})]),b("nav",ne,[p(s,{to:"/dashboard"},{default:g((()=>[ae])),_:1}),b("div",{class:"ml-4 pl-2 pr-1.5 py-0.9 cursor-pointer rounded-full bg-white dark:bg-gray-900",onClick:t[0]||(t[0]=e=>a.toggleTheme())},[a.theme.isDark?(f(),v(l,{key:0})):(f(),v(i,{key:1}))])])]),p(d,{class:"pt-2 pb-11"})])};const re=[{name:"Maven",value:"\n<dependency>\n    <groupId>{groupId}</groupId>\n    <artifactId>{artifactId}</artifactId>\n    <version>{version}</version>\n</dependency>"},{name:"Gradle Groovy",value:'implementation "{groupId}:{artifactId}:{version}"'},{name:"Gradle Kotlin",value:'implementation("{groupId}:{artifactId}:{version}")'},{name:"SBT",value:'"{groupId}" %% "{artifactId}" %% "{version}"'}],oe={setup(){const e=s({selectedTab:re[0].name});return o({tabs:re},h(e))}},se={class:"bg-white dark:bg-gray-900 shadow-lg p-7 border rounded-xl border-gray-100 dark:border-gray-900"},le=b("div",{class:"flex flex-row justify-between"},[b("h1",{class:"font-bold"},"Artifact details")],-1),ie=b("hr",{class:"dark:border-gray-800"},null,-1),de={class:"mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-gray-900"},ce={class:"text-sm max-w-21"};oe.render=function(e,t,n,a,r,o){const s=c("tab"),l=c("tabs"),i=c("tab-panel"),d=c("tab-panels");return f(),u("div",se,[le,p(l,{modelValue:e.selectedTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedTab=t),class:"pt-3"},{default:g((()=>[(f(!0),u(x,null,I(a.tabs,((e,t)=>(f(),v(s,{class:"buildtool py-1 px-2 cursor-pointer",key:`t${t}`,val:e.name,label:e.name,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"]),ie,p(d,{modelValue:e.selectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedTab=t),animate:!0},{default:g((()=>[(f(!0),u(x,null,I(a.tabs,((e,t)=>(f(),v(i,{key:`tp${t}`,val:e.name},{default:g((()=>[b("div",de,[b("pre",ce,y(e.value.trim()),1)])])),_:2},1032,["val"])))),128))])),_:1},8,["modelValue"])])};const ue={components:{Card:oe},data:()=>({files:["releases","snapshot"]})},pe={class:"bg-gray-100"},me=b("div",{class:"bg-gray-100 dark:bg-black"},[b("div",{class:"container mx-auto"},[b("p",{class:"pt-7 pb-3 pl-2 font-semibold"},[w("Index of / "),b("span",{class:"font-normal text-xl text-gray-500"}," ⤴ ")])])],-1),fe={class:"dark:bg-black"},be={class:"container mx-auto relative"},ge={class:"lg:absolute pt-5 -top-15 right-8"},ve={class:"pt-4"},we=b("div",{class:"text-xm px-6 pt-1.75"},"⚫",-1),ye={class:"font-semibold"};ue.render=function(e,t,n,a,r,o){const s=c("Card");return f(),u("div",pe,[me,b("div",fe,[b("div",be,[b("div",ge,[p(s)]),b("div",ve,[(f(!0),u(x,null,I(r.files,(e=>(f(),u("div",{key:e,class:"flex flex-row mb-1.5 py-3 rounded-full bg-white dark:bg-gray-900 max-w-1/2 cursor-pointer"},[we,b("div",ye,y(e),1)])))),128))])])])])};const he={components:{Hero:H,Browser:ue}};he.render=function(e,t,n,a,r,o){const s=c("Browser");return f(),v(s,{ref:""},null,512)};const xe=[{type:"Maven",snippet:`\n    <repository>\n        <name>${window.REPOSILITE_TITLE}</name>\n        <id>${window.REPOSILITE_ID}</id>\n        <url>${window.location}</url>\n    </repository>\n    `},{type:"Gradle Groovy",snippet:`\n    maven {\n        url "${window.location}"\n    }\n    `},{type:"Gradle Kotlin",snippet:`\n    maven {\n        url = uri("${window.location}")\n    }\n    `},{type:"SBT",snippet:`\n    resolvers += "${window.REPOSILITE_TITLE}" at "${window.location}"\n    `}],Ie={setup:()=>({configurations:xe}),methods:{trim(e){const t=e.length-e.trimStart().length-1;return e.split("\n").map((e=>e.substring(t))).join("\n").trim()}}},ke={class:"container mx-auto pt-10 pb-6 px-6 flex flex-wrap justify-center"},Te={class:"text-lg font-bold"},Ee={class:"my-4 py-4 px-6 rounded-lg shadow-md text-sm h-130px bg-gray-50 dark:bg-gray-900 justify-items-center"};Ie.render=function(e,t,n,a,r,o){return f(),u("div",ke,[(f(!0),u(x,null,I(a.configurations,(e=>(f(),u("div",{key:e.type,class:"min-w-1/4 w-1/2 px-7"},[b("h1",Te,y(e.type),1),b("pre",Ee,y(o.trim(e.snippet)),1)])))),128))])};const Se={},Oe={class:"container mx-auto pt-10 px-6"},_e=[b("i",null,"Endpoints :: soon™",-1)];Se.render=function(e,t){return f(),u("div",Oe,_e)};const Pe=["Overview","Usage","Endpoints"],Le={name:"Index",components:{Header:Y,Overview:he,Usage:Ie,Endpoints:Se},setup(){const e=s({selectedMenuTab:Pe[0]});return o({menuTabs:Pe},h(e))}};k("data-v-095cb884");const Me={class:"bg-gray-100 dark:bg-black"},Re={class:"container mx-auto"},je=b("hr",{class:"dark:border-gray-700"},null,-1),De={class:"overflow-auto"};T(),Le.render=function(e,t,n,a,r,o){const s=c("Header"),l=c("tab"),i=c("tabs"),d=c("Overview"),m=c("tab-panel"),w=c("Usage"),y=c("Endpoints"),h=c("tab-panels");return f(),u("div",null,[p(s),b("div",Me,[b("div",Re,[p(i,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedMenuTab=t)},{default:g((()=>[(f(!0),u(x,null,I(a.menuTabs,((e,t)=>(f(),v(l,{class:"item font-normal",key:`menu${t}`,val:e,label:e,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"])]),je,b("div",De,[p(h,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuTab=t),animate:!0},{default:g((()=>[p(m,{val:"Overview"},{default:g((()=>[p(d)])),_:1}),p(m,{val:"Usage"},{default:g((()=>[p(w)])),_:1}),p(m,{val:"Endpoints"},{default:g((()=>[p(y)])),_:1})])),_:1},8,["modelValue"])])])])},Le.__scopeId="data-v-095cb884";const Ve={name:"Index",components:{Header:Y},methods:{login(){}}};k("data-v-33f7a355");const Ae={class:"container mx-auto pt-10 px-6 flex justify-center"},Be={class:"border border-gray-100 dark:border-gray-700 m-w-20 p-10 rounded-2xl shadow-md text-center"},He=b("h1",{class:"font-bold text-xl pb-4"},"Login",-1),$e={class:"flex flex-col w-96"},Ce=b("input",{placeholder:"Alias",type:"text",class:"input"},null,-1),Ge=b("input",{placeholder:"Token",type:"password",class:"input"},null,-1),Ue={class:"text-right mt-1"},Ne=w("← Back to index"),ze=["click"];T(),Ve.render=function(e,t,n,a,r,o){const s=c("Header"),l=c("router-link");return f(),u("div",null,[p(s),b("div",Ae,[b("div",Be,[He,b("form",$e,[Ce,Ge,b("div",Ue,[p(l,{to:"/",class:"text-blue-400 text-xs"},{default:g((()=>[Ne])),_:1})]),b("div",{class:"bg-gray-100 dark:bg-gray-900 py-2 my-3 cursor-pointer",click:o.login},"Sign in",8,ze)])])])])},Ve.__scopeId="data-v-33f7a355";const Ke=[{path:"/",name:"Index",component:Le},{path:"/dashboard",name:"Dashboard",component:Ve}],qe=E({history:S(),routes:Ke}),Fe=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH");window.REPOSILITE_BASE_PATH=Fe?"{{REPOSILITE.BASE_PATH}}":"/",window.REPOSILITE_ID=Fe?"{{REPOSILITE.ID}}":"reposilite-repository",window.REPOSILITE_TITLE=Fe?"{{REPOSILITE.TITLE}}":"Reposilite Repository",window.REPOSILITE_DESCRIPTION=Fe?"{{REPOSILITE.DESCRIPTION}}":"Default description";O(D).use(_()).use(P,L).use(M).use(qe).mount("#app");
