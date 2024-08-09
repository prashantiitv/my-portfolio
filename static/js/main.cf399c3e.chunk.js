(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(61),o=a.n(l),i=(a(73),a(26)),c=a(16),m=a(27),s=a(11);const p=Object(s.a)(m.SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`,d=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Experience",path:"/experience"},{name:"Education",path:"/education"}];var u=()=>{const e=Object(c.f)();return r.a.createElement(p,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,d.map(t=>r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===t.path||e.pathname===t.path,element:i.b,to:t.path,key:t.name},t.name))))},E=a(4),h=a(19);const b=s.a.div`
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
`;var v=e=>{let{user:t}=e;const a=Object(c.f)();return r.a.createElement(b,{isHome:"/"===a.pathname},r.a.createElement(g,null,r.a.createElement(f,{src:t.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,t.basics.name),r.a.createElement("p",null,t.basics.label),r.a.createElement("p",null,"Currently in ",t.basics.region),r.a.createElement("p",null,t.basics.yearsOfExperience,"+ years of experience as a Software Developer"),r.a.createElement("p",null,t.basics.headline))),r.a.createElement("div",null,r.a.createElement(x,{href:"https://drive.google.com/file/d/1T_FR0dGfqHiHG7XUmuL2q_asjhDw0gIS/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View Resume"),r.a.createElement(E.Ge,null))))},y=a(7),w=a(3),k=a(6),j=a(5),O=a(43),I=a.n(O);const $=s.a.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`,S=s.a.div`
  height: 48px;
`,P=s.a.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  z-index: 1;
`,_=Object(s.a)(i.b)`
  width: 25%;
  color: ${e=>{let{active:t}=e;return t?h.a[80]:h.a[30]}};
  background-color: ${e=>{let{active:t}=e;return t?h.a[30]:h.a[80]}};
`,H=Object(s.a)(I.a)`
  width: 100%;
  justify-content: center;
  background-color: ${h.a[30]};
  color: ${h.a[80]};
`;var D=()=>r.a.createElement($,null,r.a.createElement(S,null),r.a.createElement(P,null,r.a.createElement(_,{to:"/"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:y.Xc,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(_,{to:"/projects"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:w.R,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(_,{to:"/experience"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:k.n,iconDescription:"Experience",tooltipPosition:"bottom"})),r.a.createElement(_,{to:"/education"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:j.Fc,iconDescription:"Education",tooltipPosition:"bottom"}))));const N=Object(s.a)(m.Content)`
  min-height: 100vh;

  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;var F=e=>{let{user:t,children:a}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(N,null,r.a.createElement(v,{user:t}),r.a.createElement("div",null,a)),r.a.createElement(D,null))};const G=s.a.h2`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media (max-width: 640px) {
    text-align: center;
  }
`,L=s.a.p`
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
`,C=s.a.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`,R=s.a.a`
  text-decoration: none;
  color: #78a9ff;

  &:hover {
    color: #4589ff;
  }
`;var q=e=>{let{user:t}=e;return r.a.createElement(F,{user:t},r.a.createElement("div",null,r.a.createElement(G,null,"About Me"),r.a.createElement(L,null,t.basics.summary)),r.a.createElement("div",null,r.a.createElement(G,null,"Skills"),r.a.createElement("div",null,t.skills.map(e=>r.a.createElement(M,{key:e.name},e.name)))),r.a.createElement("div",null,r.a.createElement(G,null,"Profiles"),r.a.createElement("ul",null,r.a.createElement(C,null,r.a.createElement(R,{href:"https://www.linkedin.com/in/prashant-bharti/",target:"_blank",rel:"noreferrer noopener"},"LinkedIn"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(R,{href:"https://github.com/prashantiitv/",target:"_blank",rel:"noreferrer noopener"},"GitHub"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(R,{href:"https://www.hackerearth.com/@prashantiitv",target:"_blank",rel:"noreferrer noopener"},"Hackerearth"),r.a.createElement("span",null," \u22c5 "),r.a.createElement(R,{href:"https://www.scaler.com/academy/profile/b94ba0de3405/",target:"_blank",rel:"noreferrer noopener"},"Scaler")))))},z=a(2);const A=s.a.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${h.b};
`,J=s.a.h4`
  font-weight: bold;
`,T=s.a.div`
  margin-top: 1.2rem;
`,X=s.a.a`
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
`;var B=e=>{let{user:t}=e;return r.a.createElement(F,{user:t},r.a.createElement("div",null,r.a.createElement(G,null,"Projects"),r.a.createElement("ul",null,t.projects.map((e,t)=>r.a.createElement(A,{key:t},r.a.createElement(J,null,e.displayName),r.a.createElement("div",null,r.a.createElement(L,null,e.summary.replace("  ","\n")),r.a.createElement(X,{href:e.website,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Link",r.a.createElement(z.cc,null)))),r.a.createElement(T,null,[...e.languages,...e.libraries].map((e,t)=>r.a.createElement(M,{key:t},e))))))))};const U=s.a.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${h.b};
`,V=s.a.h4`
  font-weight: bold;
`,W=s.a.p`
  font-weight: bold;
  display: inline-block;
`;var K=e=>{let{user:t}=e;return r.a.createElement(F,{user:t},r.a.createElement("div",null,r.a.createElement(G,null,"Work Experience"),r.a.createElement("ul",null,t.work.map((e,t)=>r.a.createElement(U,{key:t},r.a.createElement(V,null,e.position),r.a.createElement("div",null,r.a.createElement(W,null,e.company),r.a.createElement("span",null," \u22c5 ")," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(L,null,e.summary))))))};const Q=s.a.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${h.b};
`,Y=s.a.h4`
  font-weight: bold;
`,Z=s.a.p`
  font-weight: bold;
  display: inline-block;
`;var ee=e=>{let{user:t}=e;return r.a.createElement(F,{user:t},r.a.createElement("div",null,r.a.createElement(G,null,"Education"),r.a.createElement("ul",null,t.education.map((e,t)=>r.a.createElement(Q,{key:t},r.a.createElement(Y,null,e.institution),r.a.createElement("div",null,r.a.createElement(Z,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(L,null,e.activities.replace("\n\n","\n")))))))};var te=e=>{let{user:t}=e;return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(q,{user:t})),r.a.createElement(c.a,{path:"/projects"},r.a.createElement(B,{user:t})),r.a.createElement(c.a,{path:"/experience"},r.a.createElement(K,{user:t})),r.a.createElement(c.a,{path:"/education"},r.a.createElement(ee,{user:t}))))};var ae=function(){const[e,t]=Object(n.useState)(null);return Object(n.useEffect)(()=>{fetch("https://gitconnected.com/v1/portfolio/prashantiitv").then(e=>e.json()).then(e=>{t(e)})},[]),e?r.a.createElement(te,{user:e}):r.a.createElement("div",null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root"))},68:function(e,t,a){e.exports=a(130)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.cf399c3e.chunk.js.map