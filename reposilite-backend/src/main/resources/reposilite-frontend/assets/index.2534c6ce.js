var Pe=Object.defineProperty,qe=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var _e=(e,t,a)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,U=(e,t)=>{for(var a in t||(t={}))De.call(t,a)&&_e(e,a,t[a]);if(he)for(var a of he(t))He.call(t,a)&&_e(e,a,t[a]);return e},ve=(e,t)=>qe(e,Be(t));import{a as re,r as v,w as H,c as L,b as G,d as K,u as ke,e as Ue,f as q,o as c,g as u,h as l,i as h,j as p,t as T,k as C,n as ie,l as pe,m as $,p as ee,q as O,s as te,v as se,x as Ie,E as Ce,y as Te,z as Se,A as M,B as P,C as fe,D as Ne,F as ge,G as ne,H as W,P as je,I as A,J as B,K as ze,T as Fe,L as We,M as Ge,N as Ke,O as Ye,Q as oe,R as be,S as Qe,U as Ze,V as Je,W as Xe,X as et,Y as tt}from"./vendor.6cd95357.js";const st=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};st();function Y(){const e=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH"),t=e?"{{REPOSILITE.BASE_PATH}}":"/",a=e?"{{REPOSILITE.ID}}":"reposilite-repository",o=e?"{{REPOSILITE.TITLE}}":"Reposilite Repository",s=e?"{{REPOSILITE.DESCRIPTION}}":"Public Maven repository hosted through the Reposilite",n=e?"{{REPOSILITE.ORGANIZATION_WEBSITE}}":location.protocol+"//"+location.host+t,r=e?"{{REPOSILITE.ORGANIZATION_LOGO}}":"https://avatars.githubusercontent.com/u/75123628?s=200&v=4",i=e?"{{REPOSILITE.ICP_LICENSE}}":"\u56FDICP\u5907000000000\u53F7",d=window.location.protocol+"//"+location.host+t,m=d.endsWith("/")?d.slice(0,-1):d;return{available:e,basePath:t,id:a,title:o,description:s,organizationWebsite:n,organizationLogo:r,icpLicense:i,productionUrl:d,baseUrl:m}}const{baseUrl:nt}=Y(),ce=e=>nt+e,Oe=(e,t)=>{const a=()=>e&&t?o(e,t):{},o=(i,d)=>({headers:{Authorization:`xBasic ${btoa(`${i}:${d}`)}`}}),s=(i,d)=>re.get(ce(i),U({},d||a())),n=(i,d,m)=>re.put(ce(i),d,{headers:U({"Content-Type":"text/plain"},(m||a()).headers)});return{auth:{me(){return s("/api/auth/me")}},console:{},maven:{content(i){return s(`/${i}`)},details(i){return s(`/api/maven/details/${i||""}`)},download(i){return s(`/${i}`,U({responseType:"blob"},a()))}},settings:{content(i){return s(`/api/settings/content/${i}`)},updateContent(i,d){return n(`/api/settings/content/${i}`,d)}}}},D=v({name:localStorage.getItem("token-name")||"",secret:localStorage.getItem("token-secret")||""});H(()=>{localStorage.setItem("token-name",D.value.name),localStorage.setItem("token-secret",D.value.secret)});const Me=(e,t)=>D.value={name:e,secret:t},Q=v(),ot=()=>{Q.value=void 0,Me("","")},Ee=(e,t)=>Oe(e,t).auth.me().then(a=>{Me(e,t),Q.value=a.data}),at=()=>Ee(D.value.name,D.value.secret),lt=L(()=>Oe(D.value.name,D.value.secret)),rt=L(()=>Q.value!==void 0),it=L(()=>{var e,t;return(t=(e=Q.value)==null?void 0:e.permissions)==null?void 0:t.find(a=>a.identifier==="access-token:manager")});function R(){return{token:D,details:Q,login:Ee,logout:ot,isLogged:rt,client:lt,isManager:it,initializeSession:at}}const N=G({isDark:!1}),ae="dark-theme";function Ve(){return{theme:N,fetchTheme:()=>{localStorage.getItem(ae)===null?N.isDark=window.matchMedia("(prefers-color-scheme: dark)").matches:N.isDark=localStorage.getItem(ae)==="true"},toggleTheme:()=>{N.isDark=!N.isDark,localStorage.setItem(ae,N.isDark)}}}const X=G({watchable:0,path:""}),{details:ct}=R();K(()=>ct.value,()=>X.watchable++);function dt(){const e=ke();return K(()=>e.params.qualifier,t=>{X.path=t,X.watchable++},{immediate:!0}),{qualifier:X}}const ut={class:"min-h-screen dark:bg-black dark:text-white"},pt={key:0,class:"absolute h-8 pb-2 w-full text-center text-xs dark:bg-black dark:text-white"},mt={href:"https://beian.miit.gov.cn",target:"_blank"},ht={setup(e){const{title:t,description:a,icpLicense:o}=Y(),{theme:s,fetchTheme:n}=Ve(),{initializeSession:r}=R(),{qualifier:i}=dt();return Ue({title:t,description:a}),n(),r().catch(()=>{}),(d,m)=>{const k=q("router-view");return c(),u("div",{class:ie({dark:p(s).isDark})},[l("div",ut,[h(k,{class:"router-view-full",qualifier:p(i)},null,8,["qualifier"]),p(o)?(c(),u("div",pt,[l("a",mt,T(p(o)),1)])):C("",!0)])],2)}}};var V=(e,t)=>{const a=e.__vccOpts||e;for(const[o,s]of t)a[o]=s;return a};const _t={},vt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ft=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),gt=[ft];function bt(e,t){return c(),u("svg",vt,gt)}var $t=V(_t,[["render",bt]]);const xt={class:"bg-gray-100 dark:bg-black"},yt={class:"container mx-auto flex flex-row <sm:flex-col <sm:items-center"},wt={class:"w-35 <sm:mb-2"},kt=["src"],It={class:"flex flex-col justify-center px-10 <sm:px-0"},Ct={class:"<sm:text-center"},Tt={class:"flex flex-row py-2 <sm:justify-center"},St=["href"],jt={setup(e){const{description:t,organizationWebsite:a,organizationLogo:o}=Y();return(s,n)=>(c(),u("div",xt,[l("div",yt,[l("div",wt,[l("img",{class:"border-2 rounded-full dark:border-gray-700",src:p(o)},null,8,kt)]),l("div",It,[l("div",Ct,T(p(t)),1),l("div",Tt,[h($t),l("a",{class:"px-3 text-gray-500",href:p(a)},T(p(a)),9,St)])])])]))}},Ot={},Mt={class:"mx-2 py-1.5 rounded-full font-bold px-6 text-sm max-h-35px min-w-93px default-button"};function Et(e,t){return c(),u("div",Mt,[pe(e.$slots,"default")])}var $e=V(Ot,[["render",Et]]);const Le=e=>(Te("data-v-11581f94"),e=e(),Se(),e),Vt={id:"login-modal"},Lt={class:"relative border bg-white dark:bg-gray-900 border-gray-100 dark:border-black m-w-20 py-5 px-10 rounded-2xl shadow-xl text-center"},Rt=Le(()=>l("p",{class:"font-bold text-xl pb-4"},"Login with access token",-1)),At={class:"text-right mt-1"},Pt=Le(()=>l("button",{class:"bg-gray-100 dark:bg-gray-800 py-2 my-3 rounded-md cursor-pointer"},"Sign in",-1)),qt={inheritAttrs:!1},Bt=Object.assign(qt,{setup(e){const{login:t}=R(),a=v(!1),o=v(""),s=v(""),n=()=>a.value=!1,r=(i,d)=>t(i,d).then(()=>O(`Dashboard accessed as ${i}`,{position:"bottom-right"})).then(()=>n()).catch(m=>O(`${m.response.status}: ${m.response.data.message}`,{type:"danger"}));return(i,d)=>(c(),u("div",Vt,[h(p(Ce),Ie({modelValue:a.value,"onUpdate:modelValue":d[5]||(d[5]=m=>a.value=m)},i.$attrs,{classes:"flex justify-center items-center"}),{default:$(()=>[l("div",Lt,[Rt,l("form",{class:"flex flex-col w-96 <sm:w-65",onSubmit:d[3]||(d[3]=ee(m=>r(o.value,s.value),["prevent"]))},[te(l("input",{placeholder:"Name","onUpdate:modelValue":d[0]||(d[0]=m=>o.value=m),type:"text",class:"input"},null,512),[[se,o.value]]),te(l("input",{placeholder:"Secret","onUpdate:modelValue":d[1]||(d[1]=m=>s.value=m),type:"password",class:"input"},null,512),[[se,s.value]]),l("div",At,[l("button",{onClick:d[2]||(d[2]=m=>n()),class:"text-blue-400 text-xs"},"\u2190 Back to index")]),Pt],32),l("button",{class:"absolute top-0 right-0 mt-5 mr-5",onClick:d[4]||(d[4]=m=>n())},"\u{1F5D9}")])]),_:1},16,["modelValue"]),l("div",{onClick:d[6]||(d[6]=m=>a.value=!0)},[pe(i.$slots,"button",{},void 0,!0)])]))}});var Dt=V(Bt,[["__scopeId","data-v-11581f94"]]);const Ht={},Ut={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Nt=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),zt=[Nt];function Ft(e,t){return c(),u("svg",Ut,zt)}var Wt=V(Ht,[["render",Ft]]);const Gt={},Kt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Yt=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Qt=[Yt];function Zt(e,t){return c(),u("svg",Kt,Qt)}var Jt=V(Gt,[["render",Zt]]);const Xt={},es={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ts=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},null,-1),ss=[ts];function ns(e,t){return c(),u("svg",es,ss)}var os=V(Xt,[["render",ns]]);const as={class:"flex flex-row <sm:max-w-100px <sm:flex-wrap <sm:flex-1 <sm:justify-end <sm:min-w-1/2"},ls={key:0,class:"pt-1.1 px-2 <sm:py-2 <sm:max-w-full <sm:truncate"},rs=P(" Welcome "),is={class:"font-bold underline"},cs=P(" Sign in "),ds=P(" Logout "),us={key:2,class:"hidden px-2.7 pt-0.8 mr-1.5 cursor-pointer rounded-full bg-white dark:bg-gray-900 max-h-35px <sm:block"},ps={setup(e){const{theme:t,toggleTheme:a}=Ve(),{token:o,isLogged:s,logout:n}=R();return(r,i)=>(c(),u("nav",as,[p(s)?(c(),u("div",ls,[rs,l("span",is,T(p(o).name),1)])):C("",!0),h(Dt,null,{button:$(()=>[p(s)?C("",!0):(c(),M($e,{key:0},{default:$(()=>[cs]),_:1}))]),_:1}),p(s)?(c(),M($e,{key:1,onClick:i[0]||(i[0]=d=>p(n)()),class:"<sm:hidden"},{default:$(()=>[ds]),_:1})):C("",!0),p(s)?(c(),u("div",us,[h(os,{onClick:i[1]||(i[1]=d=>p(n)())})])):C("",!0),l("div",{class:"pl-2 pt-1.3 rounded-full max-h-35px default-button",onClick:i[2]||(i[2]=d=>p(a)())},[p(t).isDark?(c(),M(Jt,{key:0,class:"mr-1.9"})):(c(),M(Wt,{key:1,class:"mr-1.5"}))])]))}},ms={class:"bg-gray-100 dark:bg-black dark:text-white"},hs={class:"container mx-auto flex flex-row py-10 justify-between <sm:pb-2 <sm:pt-5 <sm:px-5 <sm:justify-start"},_s={class:"text-xl font-medium py-1 <sm:w-1/2"},vs={setup(e){const{title:t}=Y();return(a,o)=>{const s=q("router-link");return c(),u("header",ms,[l("div",hs,[l("h1",_s,[h(s,{to:"/"},{default:$(()=>[P(T(p(t)),1)]),_:1})]),h(ps,{class:"mt-0.5"})]),h(jt,{class:"pt-2 pb-10 <sm:pb-4"})])}}},de=v(localStorage.getItem("reversedFileOrder")==="true");H(()=>localStorage.setItem("reversedFileOrder",de.value));const ue=v(localStorage.getItem("displayHashFiles")==="true");H(()=>localStorage.setItem("displayHashFiles",ue.value));function Re(){return{reversedFileOrder:de,displayHashFiles:ue,applyAdjustments:t=>{if(ue.value||(t=t.filter(a=>![".md5",".sha1",".sha256",".sha512"].some(o=>a.name.endsWith(o)))),de.value)try{t=t.sort((a,o)=>{const s=a.type==="DIRECTORY",n=o.type==="DIRECTORY";if(s&&n){const r=fe().exec(a.name)[0]||a.name,i=fe().exec(o.name)[0]||o.name;return Ne.rcompare(r,i)}return 0})}catch{}return t}}}const fs={},gs={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},bs=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"},null,-1),$s=[bs];function xs(e,t){return c(),u("svg",gs,$s)}var ys=V(fs,[["render",xs]]);const ws={id:"adjustments-modal"},ks={class:"relative border bg-white dark:bg-gray-900 border-gray-100 dark:border-black m-w-20 py-5 px-10 rounded-2xl shadow-xl text-center"},Is=l("h1",{class:"font-bold pb-4"},"File browser adjustments",-1),Cs=l("hr",{class:""},null,-1),Ts={class:"flex justify-between pt-6"},Ss=l("p",{class:"pr-7"},"Sort files from newest to oldest",-1),js={class:"flex justify-between pt-6"},Os=l("p",{class:"pr-7"},[P(" Display hash files such as "),l("span",{class:"font-italic font-mono bg-gray-200 dark:bg-black px-2 py-0.5 m-2 rounded-lg"},".md5/.sha1/.sha256/.sha512")],-1),Ms={inheritAttrs:!1},Es=Object.assign(Ms,{setup(e){const{reversedFileOrder:t,displayHashFiles:a}=Re(),o=v(!1);return(s,n)=>(c(),u("div",ws,[h(p(Ce),Ie({modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=r=>o.value=r)},s.$attrs,{classes:"flex justify-center iems-center"}),{default:$(()=>[l("div",ks,[l("div",null,[Is,Cs,l("div",Ts,[Ss,h(p(ge),{modelValue:p(t),"onUpdate:modelValue":n[0]||(n[0]=r=>ne(t)?t.value=r:null),class:"ml-10"},null,8,["modelValue"])]),l("div",js,[Os,h(p(ge),{modelValue:p(a),"onUpdate:modelValue":n[1]||(n[1]=r=>ne(a)?a.value=r:null),class:"ml-10"},null,8,["modelValue"])])]),l("button",{class:"absolute top-0 right-0 mt-5 mr-9",onClick:n[2]||(n[2]=r=>o.value=!1)},"\u{1F5D9}")])]),_:1},16,["modelValue"]),l("div",{onClick:n[4]||(n[4]=r=>o.value=!0)},[pe(s.$slots,"button")])]))}});function Vs(){return{createSnippets:(t,a,o)=>[{name:"Maven",lang:"xml",snippet:`
<dependency>
  <groupId>${t}</groupId>
  <artifactId>${a}</artifactId>
  <version>${o}</version>
</dependency>`.trim()},{name:"Gradle Groovy",lang:"xml",snippet:`implementation "${t}:${a}:${o}"`},{name:"Gradle Kotlin",lang:"kotlin",snippet:`implementation("${t}:${a}:${o}")`},{name:"SBT",lang:"scala",snippet:`"${t}" %% "${a}" %% "${o}"`}]}}function Ls(){const{basePath:e,id:t,title:a}=Y();return{createRepositories:s=>{const n=L(()=>s.path.split("/")[0]),r=t+(s.path?`-${n.value}`:""),i=location.protocol+"//"+location.host+e+(e.endsWith("/")?"":"/")+(s.path?`${n.value}`:"{repository}");return[{name:"Maven",lang:"xml",snippet:`
<repository>
  <id>${r}</id>
  <name>${a}</name>
  <url>${i}</url>
</repository>`.trim()},{name:"Gradle Groovy",lang:"groovy",snippet:`maven {
    url "${i}"
}`.trim()},{name:"Gradle Kotlin",lang:"kotlin",snippet:`maven {
    url = uri("${i}")
}`},{name:"SBT",lang:"scala",snippet:`resolvers +=
  "${r}" 
     at "${i}"`}]}}}const Rs=new DOMParser;function As(){const e=s=>{var n,r;return(r=(n=s==null?void 0:s.getElementsByTagName("groupId")[0])==null?void 0:n.firstChild)==null?void 0:r.nodeValue},t=s=>{var n,r;return(r=(n=s==null?void 0:s.getElementsByTagName("artifactId")[0])==null?void 0:n.firstChild)==null?void 0:r.nodeValue},a=s=>{var n;return(n=[...s.querySelector("versioning versions").children].map(r=>r.firstChild.nodeValue))!=null?n:["{unknown}"]};return{parseMetadata:s=>{const n=Rs.parseFromString(s,"text/xml"),r=a(n);return{metadata:n,groupId:e(n),artifactId:t(n),versions:r}},groupId:e,artifactId:t,versions:a}}const Ps={},qs={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Bs=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},null,-1),Ds=[Bs];function Hs(e,t){return c(),u("svg",qs,Ds)}var Us=V(Ps,[["render",Hs]]);const Ns={props:{configuration:{type:Object,required:!0}},setup(e){const t=e,a=L(()=>U({highlighter:o=>{var s;return W.highlight(o,(s=W.languages[t.configuration.lang])!=null?s:W.languages.js)}},t.configuration));return(o,s)=>(c(),M(p(je),{class:"card-editor font-mono text-ssm absolute",modelValue:p(a).snippet,"onUpdate:modelValue":s[0]||(s[0]=n=>p(a).snippet=n),highlight:p(a).highlighter,readonly:"","line-numbers":""},null,8,["modelValue","highlight"]))}},zs={},Fs={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Ws=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),Gs=[Ws];function Ks(e,t){return c(),u("svg",Fs,Gs)}var Ys=V(zs,[["render",Ks]]);const Qs={id:"card-menu",class:"flex mt-2 <sm:hidden"},Zs=["onClick"],Js={class:"hidden flex-col items-center mt-24px <sm:flex"},Xs={class:"w-20px h-25px float-right m-auto flex items-center"},en={key:0,class:"rounded-lg w-full box-border p-2 bg-true-gray-100 dark:bg-dark-600"},tn=["onClick"],sn={props:{configurations:{type:Object,required:!0}},emits:["selectTab"],setup(e,{emit:t}){const a=v(localStorage.getItem("card-tab")||"Maven");H(()=>{localStorage.setItem("card-tab",a.value),t("selectTab",a.value)});const o=n=>a.value=n.name,s=v(localStorage.getItem("dropdown-open")||!1);return H(()=>localStorage.setItem("dropdown-open",s.value)),(n,r)=>(c(),u("div",null,[l("div",Qs,[(c(!0),u(A,null,B(e.configurations,i=>(c(),u("div",{key:i.name,onClick:d=>o(i),class:ie(["py-4 px-7 flex-grow text-center border-b-2 cursor-pointer border-transparent",{"!border-gray-800":i.name===a.value}])},T(i.name),11,Zs))),128))]),l("div",Js,[l("div",{class:"w-full box-border py-5px p-2 rounded-lg border-1 border-true-gray-200 dark:border-dark-300",onClick:r[0]||(r[0]=i=>s.value=!s.value)},[P(T(a.value)+" ",1),l("div",Xs,[h(Ys)])]),s.value?C("",!0):(c(),u("ul",en,[(c(!0),u(A,null,B(e.configurations,i=>(c(),u("li",{key:i.name,onClick:d=>{n.selectTab(i),s.value=!s.value},class:ie(["dropdown py-1",{hidden:i.name===a.value}])},T(i.name),11,tn))),128))]))])]))}};const nn={class:"bg-white dark:bg-gray-900 shadow-lg p-7 rounded-xl border-gray-100 dark:border-black"},on={class:"flex flex-row justify-between"},an={class:"font-bold flex items-center w-full"},ln=l("hr",{class:"dark:border-gray-800 <sm:hidden"},null,-1),rn={class:"overflow-hidden"},cn={props:{qualifier:{type:Object,required:!0}},setup(e){const t=e,a=v(""),o=v([]),{createRepositories:s}=Ls(),{createSnippets:n}=Vs(),{parseMetadata:r}=As(),{client:i}=R(),{copy:d,isSupported:m}=ze(),k=()=>{a.value="Repository details",o.value=s(t.qualifier)},x=(f,_)=>{a.value="Artifact details";const{groupId:g,artifactId:F,versions:I}=r(f),y=I[_?I.indexOf(_):I.length-1];o.value=n(g,F,y)};H(()=>{const f=t.qualifier.path,_=f.split("/");if(_.length==1&&_[0]==""){k();return}i.value.maven.content(`${f}/maven-metadata.xml`).then(g=>x(g.data)).catch(()=>{i.value.maven.content(`${f.substring(0,f.indexOf(_[_.length-1])-1)}/maven-metadata.xml`).then(g=>x(g.data,_[_.length-1])).catch(g=>{g.message!=="Request failed with status code 404"&&console.log(g),k()})})});const b=v(),E=v("slide-right");K(b,(f,_)=>{const g=o.value.findIndex(I=>I.name===f),F=o.value.findIndex(I=>I.name===_);E.value=g-F<0?"slide-left":"slide-right"});const Z=async()=>{const{snippet:f}=o.value.find(_=>_.name===b.value);return await d(f),O("Snippet copied",{type:"info",timeout:"2000"})},S=f=>b.value=f;return(f,_)=>(c(),u("div",nn,[l("div",on,[l("h1",an,[P(T(a.value)+" ",1),p(m)?(c(),u("span",{key:0,onClick:Z,class:"ml-auto cursor-pointer"},[h(Us)])):C("",!0)])]),h(sn,{configurations:o.value,onSelectTab:S},null,8,["configurations"]),ln,l("div",rn,[h(Fe,{name:E.value,mode:"out-in"},{default:$(()=>[(c(),u("div",{key:b.value,class:"h-29 relative mt-6 py-3 pl-1 mr-1 rounded-lg bg-gray-100 dark:bg-gray-800"},[(c(!0),u(A,null,B(o.value,g=>(c(),u(A,{key:g.name},[g.name===b.value?(c(),M(Ns,{key:0,configuration:g},null,8,["configuration"])):C("",!0)],64))),128))]))]),_:1},8,["name"])])]))}},dn={class:""},un={class:"pb-3 font-semibold"},pn={class:"select-none"},mn=P(" Index of "),hn={class:"select-text"},_n={class:"hover:transition-colors hover:duration-200 hover:text-purple-500"},vn=l("span",{class:"font-normal text-xl text-gray-500 select-none"}," \u2934 ",-1),fn={props:{parentPath:{type:String,required:!0}},setup(e){const t=ke(),a=L(()=>{const o=t.path.split("/");return o.map((s,n)=>({link:o.slice(0,n+1).join("/")||"/",name:n===o.length-1?s:s+"/"}))});return(o,s)=>{const n=q("router-link");return c(),u("div",dn,[l("p",un,[l("span",pn,[h(n,{to:"/"},{default:$(()=>[mn]),_:1})]),l("span",hn,[(c(!0),u(A,null,B(p(a),r=>(c(),M(n,{key:r.link,to:r.link},{default:$(()=>[l("span",_n,T(r.name),1)]),_:2},1032,["to"]))),128))]),h(n,{to:e.parentPath},{default:$(()=>[vn]),_:1},8,["to"])])])}}},gn={},bn={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},$n=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),xn=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1),yn=[$n,xn];function wn(e,t){return c(),u("svg",bn,yn)}var kn=V(gn,[["render",wn]]);const In={class:"browser-entry flex flex-row justify-between mb-1.5 py-3 rounded-full default-button"},Cn={class:"flex flex-row"},Tn={key:0,class:"text-xm px-6 pt-1.75"},Sn={key:1,class:"text-xm px-6 pt-1.75"},jn={class:"font-semibold"},On={key:0,class:"px-6 flex"},Mn=["title"],xe={props:{file:{type:Object,required:!0}},setup(e){const t=e,a=["application/xml","text/plain","text/xml","text/markdown","application/json"].some(s=>{var n;return((n=t.file)==null?void 0:n.contentType)==s}),o=s=>window.open(s);return(s,n)=>(c(),u("div",In,[l("div",Cn,[e.file.type=="DIRECTORY"?(c(),u("div",Tn,"\u26AB")):(c(),u("div",Sn,"\u26AA")),l("div",jn,T(e.file.name),1)]),e.file.contentLength?(c(),u("div",On,[p(a)?(c(),u("div",{key:0,title:`Click to view ${e.file.name} file content in a new tab`},[h(kn,{id:"view-button",class:"px-1 mr-7 pt-0.4 rounded-full text-purple-300 hover:transition-colors hover:duration-200 hover:bg-gray-100 hover:dark:bg-gray-900",onClick:[n[0]||(n[0]=ee(r=>o(`${s.$route.path}/${e.file.name}`),["left","prevent"])),n[1]||(n[1]=ee(()=>{},["stop"]))]})],8,Mn)):C("",!0),l("div",null,T(p(We)(e.file.contentLength)),1)])):C("",!0)]))}},En={id:"browser-list",class:"pt-3"},Vn=["onClick","href"],Ln={key:0,class:"pl-2"},Rn=l("p",null,"Directory is empty",-1),An=[Rn],Pn={key:1,class:"pl-2"},qn=l("p",null,"Directory not found",-1),Bn=[qn],Dn={props:{files:{type:Object,required:!0}},setup(e){const{client:t}=R(),a=(o,s)=>{t.value.maven.download(o.substring(1)+"/"+s).then(n=>Ge(n.data,s,n.headers["content-type"])).catch(n=>O(`Cannot download file - ${n.response.status}: ${n.response.data.message}`,{type:"danger"}))};return(o,s)=>{const n=q("router-link");return c(),u("div",En,[(c(!0),u(A,null,B(e.files.list,r=>(c(),u("div",{key:r},[r.type==="DIRECTORY"?(c(),M(n,{key:0,to:o.append(o.$route.path,r.name)},{default:$(()=>[h(xe,{file:r},null,8,["file"])]),_:2},1032,["to"])):(c(),u("a",{key:1,onClick:ee(i=>a(o.$route.path,r.name),["left","prevent"]),href:`${o.$route.path}/${r.name}`,target:"_blank"},[h(xe,{file:r},null,8,["file"])],8,Vn))]))),128)),e.files.isEmpty?(c(),u("div",Ln,An)):C("",!0),e.files.error?(c(),u("div",Pn,Bn)):C("",!0)])}}},Hn={class:"bg-gray-100"},Un={class:"dark:bg-black"},Nn={class:"container mx-auto relative min-h-320px mb-1.5"},zn={class:"lg:absolute pt-13 -top-5 right-8"},Fn={class:"lg:max-w-2/5 xl:max-w-1/2"},Wn={class:"flex justify-between pt-7 px-2"},Gn={class:"w-9"},Kn={class:"bg-white dark:bg-gray-900 pl-2 pt-1.3 pb-1 pr-2 cursor-pointer rounded-full default-button"},Yn={props:{qualifier:{type:Object,required:!0}},setup(e){const t=e,a=v(""),o=v({}),{client:s}=R(),{applyAdjustments:n}=Re(),r=L(()=>ve(U({},o.value),{list:n([...o.value.list])}));return K(()=>t.qualifier.watchable,async()=>{o.value={list:[]};const i=t.qualifier.path;s.value.maven.details(i).then(m=>o.value={list:m.data.files}).then(()=>o.value.isEmpty=o.value.list.length==0).catch(m=>{O(`${m.response.status}: ${m.response.data.message}`,{type:"danger"}),o.value={list:[],error:!0}});const d=m=>(m.endsWith("/")?m.slice(0,-1):m).split("/").slice(0,-1).join("/")||"/";a.value=d(`/${i}`)},{immediate:!0}),(i,d)=>(c(),u("div",Hn,[l("div",Un,[l("div",Nn,[l("div",zn,[h(cn,{qualifier:e.qualifier},null,8,["qualifier"])]),l("div",Fn,[l("div",Wn,[h(fn,{parentPath:a.value},null,8,["parentPath"]),h(Es,null,{button:$(()=>[l("div",Gn,[l("div",Kn,[h(ys,{class:"pr-0.9"})])])]),_:1})]),h(Dn,{files:p(r)},null,8,["files"])])])])]))}};const Qn={class:"container mx-auto py-10 px-15"},Zn=l("div",null,[l("p",null,"Modify configuration shared between all instances."),l("p",null,[l("strong",null,"Remember"),P(": Configuration propagation can take up to 30 seconds on all instances")])],-1),Jn=l("p",null,"Reset changes",-1),Xn=[Jn],eo=l("p",null,"Update and reload",-1),to=[eo],so={class:"border-1 rounded p-4 dark:border-gray-700"},no={setup(e){const{client:t}=R(),a=d=>W.highlight(d,W.languages.js),o="configuration.shared.cdn",s=v(""),n=v(!1),r=()=>t.value.settings.content(o).then(d=>s.value=d.data.content).catch(d=>O(d,{type:"error"})),i=()=>t.value.settings.updateContent(o,s.value).then(()=>O("Configuration has been deployed, fetching...",{type:"info"})).then(()=>r()).then(()=>O("Configuration reloaded, refresh page to see changes",{type:"success"})).catch(d=>O(d,{type:"error"}));return r().then(()=>n.value=!0),(d,m)=>(c(),u("div",Qn,[l("div",{class:"flex justify-between pb-5 flex-col xl:flex-row"},[Zn,l("div",{id:"configuration-state",class:"flex flex-row pt-3 xl:pt-2"},[l("button",{onClick:r},Xn),l("button",{onClick:i},to)])]),l("div",so,[n.value?(c(),M(p(je),{key:0,class:"configuration-editor font-mono text-xs",modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=k=>s.value=k),highlight:a,"line-numbers":""},null,8,["modelValue"])):C("",!0)])]))}},Ae=["Other","Trace","Debug","Info","Warn","Error"],le=G({}),ye=v(""),oo=v(0),J=G([]),ao=new Ke,lo=e=>{var t;return(t=Ae.find(a=>e.includes(`${a.toUpperCase()} | `)))!=null?t:"Other"},we=e=>ao.toHtml(e.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll(" ","&nbsp;"));function ro(){Ae.forEach(o=>{le[o]={name:o,enabled:!0,count:L(()=>J.reduce((s,n)=>s+(n.level===o),0))}});const e=L(()=>J.filter(o=>o.message.toLowerCase().includes(ye.value.toLowerCase())).filter(o=>le[o.level].enabled));return{levels:le,log:e,filter:ye,sanitizeMessage:we,logMessage:o=>{J.push({id:oo.value++,message:we(o),level:lo(o)})},clearLog:()=>{J.length=0}}}const j=v(),z=v("");function io(){const e=ce("/api/console/sock").replace("https","wss").replace("http","ws"),t=()=>{var S;return((S=j.value)==null?void 0:S.readyState)===WebSocket.OPEN},a=()=>{t()&&j.value.close()},o=v([""]),s=v(0),n=S=>{o.value[o.value.length-1]==""&&o.value.pop(),o.value.push(S),s.value=o.value.length-1},r=()=>{n(z.value),j.value.send(z.value),z.value=""},i=()=>m(-1),d=()=>m(1),m=S=>{const f=z.value,_=o.value,g=_.length-1;g===s.value&&_[g]!==f&&n(f),s.value=Math.max(0,Math.min(_.length-1,s.value+S)),z.value=o.value[s.value]},k=v(),x=v(),b=v(),E=v();return{connection:j,connect:S=>{try{j.value=new WebSocket(e),j.value.onopen=()=>{j.value.send(`Authorization:${S.name}:${S.secret}`),k==null||k.value()},j.value.onmessage=_=>{_.data!="keep-alive"&&(x==null||x.value(_.data))},j.value.onerror=_=>b==null?void 0:b.value(_),j.value.onclose=()=>E==null?void 0:E.value();const f=setInterval(()=>{var _;t()?(_=j==null?void 0:j.value)==null||_.send("keep-alive"):clearInterval(f)},1e3*5)}catch(f){b==null||b.value(f)}},close:a,onOpen:k,onMessage:x,onError:b,onClose:E,command:z,execute:r,previousCommand:i,nextCommand:d}}const co={class:"container mx-auto pt-10 px-15 pb-10 text-xs"},uo={class:"flex text-sm flex-col xl:flex-row w-full py-2 justify-between"},po={class:"flex flex-row justify-around w-full xl:w-1/2 <md:flex-wrap"},mo=["checked","onChange"],ho={class:"pl-2 pr-4"},_o={class:"bg-white dark:bg-gray-900 rounded-lg"},vo={id:"console",class:"overflow-scroll h-144 px-4 whitespace-pre-wrap font-mono text-xs"},fo=["innerHTML"],go=l("hr",{class:"dark:border-dark-300"},null,-1),bo={props:{selectedTab:{type:Object,required:!0}},setup(e){const t=e,{levels:a,log:o,logMessage:s,filter:n,clearLog:r}=ro(),{onOpen:i,onMessage:d,onClose:m,onError:k,connect:x,close:b,command:E,execute:Z,previousCommand:S,nextCommand:f}=io();Ye(()=>b());const _=()=>{const I=document.getElementById("console");I.scrollTop=I.scrollHeight},g=()=>document.getElementById("consoleInput").focus(),F=()=>{i.value=()=>r(),d.value=y=>{s(y),be(()=>_())},k.value=y=>O(`${y||""}`,{type:"danger"}),m.value=()=>O("Connection with console has been lost",{type:"danger"}),O("Connecting to the remote console",{type:"info"});const{token:I}=R();x(I.value),be(()=>setTimeout(()=>g(),1500))};return K(()=>t.selectedTab.value,I=>I==="Console"?F():b(),{immediate:!0}),(I,y)=>(c(),u("div",co,[l("div",uo,[te(l("input",{placeholder:"Filter","onUpdate:modelValue":y[0]||(y[0]=w=>ne(n)?n.value=w:null),class:"w-full xl:w-1/2 mr-5 py-1 px-4 rounded-lg bg-white dark:bg-gray-900"},null,512),[[se,p(n)]]),l("div",po,[(c(!0),u(A,null,B(p(a),w=>(c(),u("div",{key:w.name,class:"pt-1.9 xl:pt-0.8 font-sans whitespace-nowrap"},[l("input",{type:"checkbox",checked:w.enabled,onChange:So=>w.enabled=!w.enabled},null,40,mo),l("span",ho,T(w.name)+" ("+T(w.count)+")",1)]))),128))])]),l("div",_o,[l("div",vo,[(c(!0),u(A,null,B(p(o),w=>(c(),u("p",{key:w.id,innerHTML:w.message,class:"whitespace-nowrap"},null,8,fo))),128))]),go,te(l("input",{id:"consoleInput",placeholder:"Type command or '?' to get help",class:"w-full py-2 px-4 rounded-b-lg bg-white dark:bg-gray-900 dark:text-white","onUpdate:modelValue":y[1]||(y[1]=w=>ne(E)?E.value=w:null),onKeyup:[y[2]||(y[2]=oe(w=>p(Z)(),["enter"])),y[3]||(y[3]=oe(w=>p(S)(),["up"])),y[4]||(y[4]=oe(w=>p(f)(),["down"]))]},null,544),[[se,p(E)]])])]))}};const $o=e=>(Te("data-v-546f8039"),e=e(),Se(),e),xo={class:"bg-gray-100 dark:bg-black"},yo={class:"container mx-auto <sm:px-0"},wo=$o(()=>l("hr",{class:"dark:border-gray-700"},null,-1)),ko={class:"overflow-auto"},Io={props:{qualifier:{type:Object,required:!0}},setup(e){const{isManager:t}=R(),a=[{name:"Overview"},{name:"Console",manager:!0},{name:"Configuration",manager:!0}],o=G({value:localStorage.getItem("selectedTab")||"Overview"});H(()=>localStorage.setItem("selectedTab",o.value));const s=L(()=>a.filter(n=>!(n==null?void 0:n.manager)||t.value).map(n=>n.name));return(n,r)=>{const i=q("tab"),d=q("tabs"),m=q("tab-panel"),k=q("tab-panels");return c(),u("div",null,[h(vs),l("div",xo,[l("div",yo,[h(d,{modelValue:p(o).value,"onUpdate:modelValue":r[0]||(r[0]=x=>p(o).value=x)},{default:$(()=>[(c(!0),u(A,null,B(p(s),(x,b)=>(c(),M(i,{class:"item font-normal",key:`menu${b}`,val:x,label:x,indicator:!0},null,8,["val","label"]))),128))]),_:1},8,["modelValue"])]),wo,l("div",ko,[h(k,{modelValue:p(o).value,"onUpdate:modelValue":r[1]||(r[1]=x=>p(o).value=x),animate:!0},{default:$(()=>[h(m,{val:"Overview"},{default:$(()=>[h(Yn,{qualifier:e.qualifier,ref:""},null,8,["qualifier"])]),_:1}),p(t)?(c(),M(m,{key:0,val:"Console"},{default:$(()=>[h(bo,{selectedTab:p(o)},null,8,["selectedTab"])]),_:1})):C("",!0),p(t)?(c(),M(m,{key:1,val:"Configuration"},{default:$(()=>[h(no,{selectedTab:p(o)},null,8,["selectedTab"])]),_:1})):C("",!0)]),_:1},8,["modelValue"])])])])}}};var Co=V(Io,[["__scopeId","data-v-546f8039"]]);const To=Qe({history:Ze(),routes:[{path:"/:qualifier(.*)",name:"Index",component:Co}]});const me=Je(ht);me.config.globalProperties.append=(e,t)=>e+(e.endsWith("/")?"":"/")+t;me.config.globalProperties.drop=e=>(e.endsWith("/")?e.slice(0,-1):e).split("/").slice(0,-1).join("/");me.use(Xe()).use(et,re).use(tt).use(To).mount("#app");