(this.webpackJsonppacex=this.webpackJsonppacex||[]).push([[0],{40:function(e,a,t){e.exports=t(50)},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(14),c=t.n(o),r=t(75),m=t(35),u=t(70),i=t(72),s=t(65),v=t(74),h=t(66);var E=e=>{const a=Math.floor(7*Math.random()),t={background:"url(img/bg".concat(a,".jpg) no-repeat center center fixed"),backgroundSize:"cover",minHeight:"100vh"};return l.a.createElement("main",{style:t},l.a.createElement(i.a,{pt:4},l.a.createElement(s.a,null,l.a.createElement(v.a,null,l.a.createElement(h.a,null,e)))))},g=t(69),p=t(33),b=t.n(p),d=t(34),k=t.n(d);const C=e=>(e=>e<10?"0".concat(e):String(e))(Math.floor(e)),M=(e,a)=>e/a*3600,j=(e,a)=>3600*a/e,w=[3600,60,1];var x=({onChange:e,time:a,step:t})=>{const n=[a/3600,Math.floor(a/60)%60,a%60].map(C).join(":");return l.a.createElement("input",{type:"time",value:n,onChange:e,step:t})},y=t(73),F=t(67);const f=[{label:"Walk",value:6e3},{label:"Jog",value:8e3},{label:"Run",value:12e3},{label:"Fast",value:15e3},{label:"Bekele",value:24e3}];var S=({value:e,color:a,onChange:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{min:6e3,max:24e3,value:e,color:a,onChange:t,onWheel:t}),l.a.createElement("div",null,f.map(e=>l.a.createElement(F.a,{color:a,key:"s".concat(e.value),onClick:a=>t(a,e.value)},e.label))));const O=[{label:"Mile",value:1610},{label:"5K",value:5e3},{label:"10K",value:1e4},{label:"\xbd Marathon",value:21100},{label:"Marathon",value:42200},{label:"50K",value:5e4},{label:"100K",value:1e5}];var W=({value:e,color:a,onChange:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{min:100,max:5e4,value:e,color:a,onChange:t,onWheel:t}),l.a.createElement("div",null,O.map(e=>l.a.createElement(F.a,{color:a,key:"d".concat(e.value),onClick:a=>t(a,e.value)},e.label)))),K=t(68);var B=(e,a)=>l.a.createElement("section",null,l.a.createElement(K.a,{component:"h1",variant:"h6"},e),a);var J=()=>{const[e,a]=Object(n.useState)(5420),[t,o]=Object(n.useState)(1e4),[c,r]=Object(n.useState)(1e4),[m,u]=Object(n.useState)(!0),i=c/1e3,s=60/i,v=[s,s%1*60].map(C).join(":"),h=m?l.a.createElement(b.a,null):l.a.createElement(k.a,null);return l.a.createElement(l.a.Fragment,null,B("Time",l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{time:e,onChange:(e,n)=>{const l=n||((e="")=>e.split(":").reduce((e,a,t)=>e+(Number(a)*w[t]||0),0))(e.target.value);a(l),r(j(l,t))},step:1}),l.a.createElement(g.a,{onClick:()=>u(!m)},h))),B("Distance ".concat((t/1e3).toFixed(1),"km"),l.a.createElement(W,{color:"primary",value:t,onChange:(n,l)=>{const u=l||t+100*-Math.sign(n.deltaY);o(u),m?r(j(e,u)):a(M(u,c))},step:100})),B("Pace ".concat(v,"/km (").concat(i.toFixed(1),"kph)"),l.a.createElement(S,{color:"secondary",value:c,onChange:(n,l)=>{const u=l||c+100*-Math.sign(n.deltaY);r(u),m?o(((e,a)=>a*e/3600)(e,u)):a(M(t,u))},step:100})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(()=>{const e=Object(m.a)();return l.a.createElement(u.a,{theme:e},l.a.createElement(r.a,null),E(l.a.createElement(J,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.0608ba1d.chunk.js.map