(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,t,a){e.exports=a(135)},123:function(e,t,a){},124:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(86),i=a.n(r),l=(a(123),a(73)),s=a(190),c=a(191),m=a(192),u=a(179),p=a(180),h=a(185),f=a(59),d=a.n(f),g=a(87),E=a.n(g),b=a(88),y=a.n(b);a(124);function v(){const[e,t]=Object(n.useState)(d.a),[a,r]=Object(n.useState)(!1),i=Object(n.useRef)(null);Object(n.useEffect)(()=>{const e=setInterval(()=>{t(e=>e===d.a?E.a:d.a)},1e3);return()=>clearInterval(e)},[]);const l=()=>{r(!1)},s=e=>{i.current&&!i.current.contains(e.target)&&l()};return Object(n.useEffect)(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:"Click to witness happy doggo",arrow:!0},o.a.createElement("img",{className:"headerIcon",src:e,alt:"chiweenie",onClick:()=>{r(!0)}})),o.a.createElement(p.a,{open:a,onClose:l},o.a.createElement(h.a,{className:"happyDoggoDialog",ref:i},o.a.createElement("img",{src:y.a,alt:"Happy Doggo",className:"happyDoggoImage"}))))}a(130);function x(){const e="Ashley's Very Professional Website",t=["Very","Professional"],a=.1*(e.indexOf("Website")-e.indexOf("Very"));return o.a.createElement(s.a,{position:"static",sx:{backgroundColor:"#e0f7fa",color:"#00695c",position:"relative"}},o.a.createElement(c.a,{sx:{height:80}},o.a.createElement(m.a,{variant:"h6",sx:{flexGrow:1,fontFamily:"'Montserrat', sans-serif"}},e.split(" ").map((e,n)=>{const r=t.includes(e);return o.a.createElement("span",{key:n,className:r?"wiggle":"",style:{display:"inline-block",marginRight:"0.25rem",animationDelay:r?a+"s":"0s"}},e.split("").map((e,t)=>o.a.createElement("span",{key:t,className:"bounce-in",style:{animationDelay:.1*(2*n+t)+"s",display:"inline-block"}},e)))})),o.a.createElement(v,null)))}var w=a(4),k=a(186),C=a(181),j=a(194),I=a(187),N=a(41),D=a.n(N),O=a(91),A=a.n(O);a(131);function B(){return o.a.createElement(k.a,null,o.a.createElement(m.a,{variant:"h5",color:"#3CCBC7"},"Hello! My name is Ashley."),o.a.createElement(m.a,{variant:"h6",color:"#00695c"},"Welcome to my very professional, serious, no-nonsense website. hehe"),o.a.createElement(m.a,{className:"description"},"I hold a Bachelor of Science (Major in Computer Science) from the University of British Columbia and am currently a software engineer based in Vancouver... but I am so much more than that. I am also a bread enthusiast (both in terms of baking and eating), the world's biggest chiweenie fan and an avid collector of Peanuts memorabilia. My life aspirations include storytelling, adopting an army of dogs, serving as a rural juror, and having everyone I meet like me (though I can settle for being okay with those who may not)."),o.a.createElement("img",{className:"barleybrown",src:A.a,alt:"barleybrown"}),o.a.createElement(m.a,{variant:"body1",className:"websiteDescription"},"This"," ",o.a.createElement(I.a,{href:"https://github.com/kwashl/ashleytoashes",target:"_blank",rel:"noopener noreferrer",style:{fontWeight:"bold",textDecoration:"none",color:"#3CCBC7"}},"website",o.a.createElement(D.a,{sx:{verticalAlign:"middle",marginLeft:"5px"}}))," ","features interactive elements and animations built with React and hosted on GitHub Pages."))}var S=a(193),L=a(92),P=a.n(L);a(68);function F(){return o.a.createElement(k.a,{sx:{textAlign:"center",margin:"20px"}},o.a.createElement(I.a,{href:"https://github.com/kwashl/pencil-animation",target:"_blank",rel:"noopener",sx:{textDecoration:"none",color:"#000"}},o.a.createElement(m.a,{variant:"h5",sx:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:2}},"Pencil Animation",o.a.createElement(D.a,{sx:{marginLeft:1}}))),o.a.createElement("video",{className:"video",controls:!0},o.a.createElement("source",{src:P.a,type:"video/mp4"}),"Your browser does not support the video tag."))}var H=a(93),T=a.n(H);function M(){return o.a.createElement(k.a,{sx:{textAlign:"center",margin:"20px"}},o.a.createElement(I.a,{href:"https://github.com/kwashl/twirly-animation",target:"_blank",rel:"noopener",sx:{textDecoration:"none",color:"#000"}},o.a.createElement(m.a,{variant:"h5",sx:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:2}},"Character Twirling Animation",o.a.createElement(D.a,{sx:{marginLeft:1}}))),o.a.createElement("video",{className:"video",controls:!0},o.a.createElement("source",{src:T.a,type:"video/mp4"}),"Your browser does not support the video tag."))}var R=a(94),W=a.n(R);function G(){return o.a.createElement(k.a,{sx:{textAlign:"center",margin:"20px"}},o.a.createElement(m.a,{variant:"h5",sx:{marginBottom:2}},"Love Stinks"),o.a.createElement("video",{className:"video",controls:!0},o.a.createElement("source",{src:W.a,type:"video/mp4"}),"Your browser does not support the video tag."),o.a.createElement(m.a,{variant:"body1",sx:{marginTop:2}},"This was a Film Studies project that I worked on in high school, and marked my first foray into stop-motion animation. Although the frame rate is quite low, resulting in a noticeably choppy video, it served as a valuable introduction to animation, and stop-motion remains one of my favourite film mediums."))}a(133);function V(){return o.a.createElement(k.a,null,o.a.createElement(m.a,{variant:"h6",color:"#00695c"},"Here are some of my very professional, serious, no-nonsense projects."),o.a.createElement(S.a,{className:"card"},o.a.createElement(F,null)),o.a.createElement(S.a,{className:"card"},o.a.createElement(M,null)),o.a.createElement(S.a,{className:"card"},o.a.createElement(G,null)))}function _(){const e=Object(w.o)(),t=Object(w.m)(),a="/portfolio"===t.pathname?1:0,[r,i]=Object(n.useState)(a);Object(n.useEffect)(()=>{"/portfolio"===t.pathname?i(1):i(0)},[t.pathname]);return o.a.createElement(k.a,{sx:{flexGrow:1,display:"flex",height:"100vh"}},o.a.createElement(C.a,{orientation:"vertical",variant:"scrollable",value:r,onChange:(t,a)=>{i(a),0===a?e("/"):1===a&&e("/portfolio")},sx:{borderRight:1,borderColor:"divider",width:"300px",minWidth:"300px"}},o.a.createElement(j.a,{label:"About",sx:{height:"90px",minHeight:"90px",display:"flex",alignItems:"center",justifyContent:"center"}}),o.a.createElement(j.a,{label:"Portfolio",sx:{height:"90px",minHeight:"90px",display:"flex",alignItems:"center",justifyContent:"center"}})),o.a.createElement(k.a,{sx:{p:3,flexGrow:1}},o.a.createElement(w.c,null,o.a.createElement(w.a,{path:"/",element:o.a.createElement(B,null)}),o.a.createElement(w.a,{path:"/portfolio",element:o.a.createElement(V,null)}))))}a(134);function Y(){return o.a.createElement(l.a,null,o.a.createElement(x,null),o.a.createElement(_,null))}var J=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then(t=>{let{getCLS:a,getFID:n,getFCP:o,getLCP:r,getTTFB:i}=t;a(e),n(e),o(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null))),J()},59:function(e,t,a){e.exports=a.p+"static/media/sleepy.f60d20b9.png"},68:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/wakey.48eb935d.png"},88:function(e,t,a){e.exports=a.p+"static/media/happydoggo.1acb42e5.png"},91:function(e,t,a){e.exports=a.p+"static/media/barleybrown.d2caa5a1.png"},92:function(e,t,a){e.exports=a.p+"static/media/pencil.cba627fe.mp4"},93:function(e,t,a){e.exports=a.p+"static/media/pinocchio.407e992e.mp4"},94:function(e,t,a){e.exports=a.p+"static/media/love_stinks.7f47f371.mp4"}},[[115,1,2]]]);
//# sourceMappingURL=main.fb9ea29c.chunk.js.map