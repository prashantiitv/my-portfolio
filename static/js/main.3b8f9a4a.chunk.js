(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(61),o=a.n(l),c=(a(73),a(26)),i=a(16),m=a(27),s=a(11);const p=Object(s.a)(m.SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`,d=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Experience",path:"/experience"},{name:"Education",path:"/education"}];var u=()=>{const e=Object(i.f)();return r.a.createElement(p,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,d.map(t=>r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===t.path||e.pathname===t.path,element:c.b,to:t.path,key:t.name},t.name))))},E=a(4),h=a(19);const b=s.a.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${h.a[50]};

  @media (max-width: 640px) {
    display: ${e=>{let{isHome:t}=e;return t?"flex":"none"}};
    flex-direction: column;
  }
`,g=s.a.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,f=s.a.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`,x=s.a.a`
  display: flex;
  width: 11rem;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  justify-content: center;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`;var v=e=>{let{user:t}=e;const a=Object(i.f)();return r.a.createElement(b,{isHome:"/"===a.pathname},r.a.createElement(g,null,r.a.createElement(f,{src:t.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,t.basics.name),r.a.createElement("p",null,t.basics.label),r.a.createElement("p",null,"Currently in ",t.basics.region),r.a.createElement("p",null,t.basics.yearsOfExperience," years of experience as a developer"),r.a.createElement("p",null,t.basics.headline))),r.a.createElement("div",null,r.a.createElement(x,{href:"https://drive.google.com/file/d/1R-a9OQU2Lt4_AbVPYFxphRGOIU2hS5Vw/view?usp=share_link",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View Resume"),r.a.createElement(E.Ge,null))))},y=a(7),w=a(3),k=a(6),j=a(5),O=a(43),I=a.n(O);const $=s.a.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`,P=s.a.div`
  height: 48px;
`,_=s.a.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  z-index: 1;
`,S=Object(s.a)(c.b)`
  width: 25%;
  color: ${e=>{let{active:t}=e;return t?h.a[80]:h.a[30]}};
  background-color: ${e=>{let{active:t}=e;return t?h.a[30]:h.a[80]}};
`,H=Object(s.a)(I.a)`
  width: 100%;
  justify-content: center;
  background-color: ${h.a[30]};
  color: ${h.a[80]};
`;var L=()=>r.a.createElement($,null,r.a.createElement(P,null),r.a.createElement(_,null,r.a.createElement(S,{to:"/"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:y.Xc,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(S,{to:"/projects"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:w.R,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(S,{to:"/experience"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:k.n,iconDescription:"Experience",tooltipPosition:"bottom"})),r.a.createElement(S,{to:"/education"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:j.Fc,iconDescription:"Education",tooltipPosition:"bottom"}))));const N=Object(s.a)(m.Content)`
  min-height: 100vh;

  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;var C=e=>{let{user:t,children:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(N,null,r.a.createElement(v,{user:t}),r.a.createElement("div",null,a)),r.a.createElement(L,null))};const D=s.a.h2`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media (max-width: 640px) {
    text-align: center;
  }
`,F=s.a.p`
  white-space: pre-wrap;
`,M=s.a.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${h.a[20]};
  color: ${h.a[70]};
  border-radius: 2px;
  font-weight: bold;
`,R=s.a.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`,A=s.a.a`
  text-decoration: none;
  color: #78a9ff;

  &:hover {
    color: #4589ff;
  }
`;var G=e=>{let{user:t}=e;return r.a.createElement(C,{user:t},r.a.createElement("div",null,r.a.createElement(D,null,"About Me"),r.a.createElement(F,null,t.basics.summary)),r.a.createElement("div",null,r.a.createElement(D,null,"Skills"),r.a.createElement("div",null,t.skills.map(e=>r.a.createElement(M,{key:e.name},e.name)))),r.a.createElement("div",null,r.a.createElement(D,null,"Profiles"),r.a.createElement("ul",null,r.a.createElement(R,null,r.a.createElement(A,{href:"https://www.linkedin.com/in/prashant-bharti/",target:"_blank",rel:"noreferrer noopener"},"LinkedIn"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(A,{href:"https://github.com/prashantiitv/",target:"_blank",rel:"noreferrer noopener"},"GitHub"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(A,{href:"https://www.hackerearth.com/@prashantiitv",target:"_blank",rel:"noreferrer noopener"},"Hackerearth"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(A,{href:"https://www.scaler.com/academy/profile/b94ba0de3405/",target:"_blank",rel:"noreferrer noopener"},"Scaler"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(A,{href:"https://leetcode.com/prashantiitv/",target:"_blank",rel:"noreferrer noopener"},"Leetcode"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(A,{href:"https://codepen.io/prashantiit",target:"_blank",rel:"noreferrer noopener"},"CodePen")))))},V=a(2);const z=s.a.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${h.b};
`,J=s.a.h4`
  font-weight: bold;
`,U=s.a.div`
  margin-top: 1.2rem;
`,B=s.a.a`
  display: flex;
  width: 4.5rem;
  text-decoration: none;
  padding: 0.2rem 0.2rem 0.5rem 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  justify-content: center;
  border: 2px solid #0043ce;
  background-color: #00286d;
  transition: background-color 250ms ease;

  &:hover {
    background-color: #0043ce;
  }

  svg {
    fill: white;
    padding-top: 4px;
    margin-left: 4px;
  }
`;var Q=e=>{let{user:t}=e;return r.a.createElement(C,{user:t},r.a.createElement("div",null,r.a.createElement(D,null,"Projects"),r.a.createElement("ul",null,t.projects.map((e,t)=>r.a.createElement(z,{key:t},r.a.createElement(J,null,e.displayName),r.a.createElement("div",null,r.a.createElement(F,null,e.summary.replace("  ","\n")),r.a.createElement(B,{href:e.website,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Link",r.a.createElement(V.cc,null)))),r.a.createElement(U,null,[...e.languages,...e.libraries].map((e,t)=>r.a.createElement(M,{key:t},e))))))))};const T=s.a.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${h.b};
`,W=s.a.h4`
  font-weight: bold;
`,X=s.a.p`
  font-weight: bold;
  display: inline-block;
`;var Y=e=>{let{user:t}=e;return r.a.createElement(C,{user:t},r.a.createElement("div",null,r.a.createElement(D,null,"Work Experience"),r.a.createElement("ul",null,t.work.map((e,t)=>r.a.createElement(T,{key:t},r.a.createElement(W,null,e.position),r.a.createElement("div",null,r.a.createElement(X,null,e.company),r.a.createElement("span",null," \u22c5 ")," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(F,null,e.summary))))))};const q=s.a.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${h.b};
`,K=s.a.h4`
  font-weight: bold;
`,Z=s.a.p`
  font-weight: bold;
  display: inline-block;
`;var ee=e=>{let{user:t}=e;return r.a.createElement(C,{user:t},r.a.createElement("div",null,r.a.createElement(D,null,"Education"),r.a.createElement("ul",null,t.education.map((e,t)=>r.a.createElement(q,{key:t},r.a.createElement(K,null,e.institution),r.a.createElement("div",null,r.a.createElement(Z,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(F,null,e.activities.replace("\n\n","\n")))))))};var te=e=>{let{user:t}=e;return r.a.createElement(c.a,{basename:"/my-portfolio"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(G,{user:t})),r.a.createElement(i.a,{path:"/projects"},r.a.createElement(Q,{user:t})),r.a.createElement(i.a,{path:"/experience"},r.a.createElement(Y,{user:t})),r.a.createElement(i.a,{path:"/education"},r.a.createElement(ee,{user:t}))))};var ae=function(){const[e,t]=Object(n.useState)(null);return Object(n.useEffect)(()=>{fetch("https://gitconnected.com/v1/portfolio/prashantiitv").then(e=>e.json()).then(e=>{t(e)})},[]),e?r.a.createElement(te,{user:e}):r.a.createElement("div",null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root"))},68:function(e,t,a){e.exports=a(130)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.3b8f9a4a.chunk.js.map