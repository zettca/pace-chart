(this.webpackJsonppacex=this.webpackJsonppacex||[]).push([[0],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),i=a.n(o);const s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}var r=a(206),u=a(164),d=a(15),m=a(207),b=a(208),v=a(201),p=a(205),h=a(209),j=a(199),g=a(200),x=a(197),k=a(3);var O=({locked:e,...t})=>Object(k.jsx)(x.a,{size:"small",disabled:e,...t,children:e?Object(k.jsx)(j.a,{}):Object(k.jsx)(g.a,{})});const f=3600,E=(e,t)=>e/t*f,S=(e,t)=>t*e/f,w=(e,t)=>t*f/e,L=e=>(e=>e<10?`0${e}`:String(e))(Math.floor(e)),T={TIME:"TIME",DIST:"DIST",SPEED:"SPEED"};const M={DEFAULT:"DEFAULT",ALL:"ALL",SHORT:"SHORT",MEDIUM:"MEDIUM",LONG:"LONG",ULTRA:"ULTRA"},D=[{label:"Mile",value:1610},{label:"5K",value:5e3},{label:"10K",value:1e4},{label:"\xbd Marathon",value:21097},{label:"Marathon",value:42195},{label:"50K",value:5e4},{label:"100K",value:1e5},{label:"100 Mi",value:160934}],C=[{label:"Walk",value:6e3},{label:"Jog",value:8e3},{label:"Run",value:12e3},{label:"Fast",value:15e3},{label:"Bekele",value:24e3}],I={[M.DEFAULT]:{time:{min:60,max:3600,value:1800,step:10,buttons:[{label:"12'",value:720},{label:"30'",value:1800},{label:"1h",value:3600},{label:"2h",value:7200},{label:"3h",value:10800},{label:"4h",value:14400},{label:"6h",value:21600},{label:"8h",value:28800}]},dist:{min:1e3,max:1e4,value:5e3,step:100,buttons:D},speed:{min:6e3,max:18e3,value:12e3,step:100,buttons:C}},[M.SHORT]:{time:{min:6,max:120,step:1,value:10},dist:{min:60,max:400,step:10,value:200,buttons:D},speed:{min:1e4,max:5e4,step:100,value:16e3,buttons:C}},[M.MEDIUM]:{time:{min:40,max:3600,step:1,value:600},dist:{min:400,max:5e3,step:100,value:1500,buttons:D},speed:{min:8e3,max:4e4,step:100,value:14e3,buttons:C}},[M.LONG]:{time:{min:600,max:21600,step:2,value:1200},dist:{min:5e3,max:42e3,step:100,value:1e4,buttons:D},speed:{min:4e3,max:32e3,step:100,value:12e3,buttons:C}},[M.ULTRA]:{time:{min:10,max:100,step:2,value:10},dist:{min:10,max:100,step:2,value:10,buttons:D},speed:{min:10,max:100,step:2,value:10,buttons:C}},[M.ALL]:{time:{min:60,max:86400,step:20},dist:{min:100,max:5e4,step:100,buttons:D},speed:{min:6e3,max:24e3,step:100,buttons:C}}},y=M.DEFAULT;var A=({min:e=0,max:t=100,value:a=10,growBy:l=1.4,shrinkBy:o=.6})=>{const[i,s]=Object(n.useState)(t),[c,r]=Object(n.useState)(a);return[{min:e,max:i,value:c,onChange:(e,t)=>{c===t&&t<i||r(t)},onChangeCommitted:()=>{const e=.94*i,a=.6*i;return c<t?s(t):c<a?(n=c,s(Math.floor(n*o))):c>e?(e=>s(Math.floor(e*l)))(c):null;var n}},r]},U=a(202),P=a(203),N=a(204);const R=Object(v.a)((e=>({root:{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundSize:"cover",minHeight:"100vh",display:"flex"},card:{padding:e.spacing(3)}})));var W=e=>t=>{const a=R(),n=Math.floor(7*Math.random());return Object(k.jsx)("main",{className:a.root,style:{backgroundImage:`url(img/bg${n}.jpg)`},children:Object(k.jsx)(U.a,{style:{margin:"auto",width:"100vw"},children:Object(k.jsx)(P.a,{children:Object(k.jsx)(N.a,{className:a.card,children:Object(k.jsx)(e,{...t})})})})})};const F=Object(v.a)((e=>({root:{marginBottom:e.spacing(1)},mark:{color:e.palette.primary.light},titleContainer:{display:"flex"},title:{display:"inline-block",marginRight:e.spacing(1)}})));var $=e=>{const{id:t,title:a,locked:l=!1,buttons:o=[],onChange:i,onLockClick:s,min:c,max:r,value:u,...d}=e,m=F(),[b,v]=A({min:c,max:r,value:u});Object(n.useEffect)((()=>{v(u)}),[u]);const j=[{value:b.max,label:"+"},...o.filter((e=>e.value<b.max))];return Object(k.jsxs)("section",{className:m.root,children:[Object(k.jsxs)("div",{className:m.titleContainer,children:[Object(k.jsx)(p.a,{id:t,component:"h1",variant:"h6",className:m.title,children:a}),Object(k.jsx)(O,{locked:l,onClick:s,"aria-label":"Lock"})]}),Object(k.jsx)(h.a,{classes:{markLabel:m.mark},disabled:l,"aria-labelledby":t,...b,marks:j,onChange:(e,t)=>{b.onChange(e,t),null===i||void 0===i||i(e,t)},...d})]})};var B=W((()=>{const[e]=function(e=y){const[t,a]=Object(n.useState)(I[M[e]]);return[t,e=>{var t;a(null!==(t=I[M[e]])&&void 0!==t?t:I[y])}]}(),{time:t,dist:a,speed:l,lock:o,setLock:i,update:s}=function(e){const{time:t,dist:a,speed:l,lock:o=T.SPEED}=e,[i,s]=Object(n.useState)(t),[c,r]=Object(n.useState)(a),[u,d]=Object(n.useState)(l),[m,b]=Object(n.useState)(o);return{time:i,dist:c,speed:u,update:{time:(e,t)=>{s(t),m===T.DIST&&r(S(t,u)),m===T.SPEED&&d(w(t,c))},dist:(e,t)=>{r(t),m===T.TIME&&s(E(t,u)),m===T.SPEED&&d(w(i,t))},speed:(e,t)=>{d(t),m===T.TIME&&s(E(c,t)),m===T.DIST&&r(S(i,t))}},lock:m,setLock:b}}({time:e.time.value,dist:e.dist.value,speed:e.speed.value}),c=l/1e3,r=60/c,u=[r,r%1*60].map(L).join(":");return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)($,{id:"time",title:`Time ${d=t,[d/3600,d%3600/60,d%60].map(L).join(":")}`,locked:o===T.TIME,onChange:s.time,onLockClick:()=>i(T.TIME),...e.time,value:t}),Object(k.jsx)($,{id:"dist",title:`Distance ${(a/1e3).toFixed(1)}km`,locked:o===T.DIST,onChange:s.dist,onLockClick:()=>i(T.DIST),...e.dist,value:a}),Object(k.jsx)($,{id:"pace",title:`Pace ${u}/km (${c.toFixed(1)}kph)`,locked:o===T.SPEED,onChange:s.speed,onLockClick:()=>i(T.SPEED),...e.speed,value:l})]});var d}));var H=()=>{const e=Object(r.a)("(prefers-color-scheme: dark)"),t=Object(n.useMemo)((()=>Object(u.a)({palette:{type:e?"dark":"light",primary:{main:d.a.orange[400]||d.a.teal[400]}}})),[e]);return Object(k.jsxs)(m.a,{theme:t,children:[Object(k.jsx)(b.a,{}),Object(k.jsx)(B,{})]})};i.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(H,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="./service-worker.js";s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):c(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):c(t,e)}))}}()}},[[181,1,2]]]);
//# sourceMappingURL=main.60708f02.chunk.js.map