import{s,a1 as i,a2 as u,a3 as c,a4 as l,a5 as d,a6 as f,a7 as m,a8 as h,a9 as A,aa as g,V as v,d as P,u as y,j as w,y as C,ab as _,ac as R,ad as b,ae as E}from"./chunks/framework.d084db19.js";import{t as D}from"./chunks/theme.3ada804f.js";const T={...D};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(T),j=P({name:"VitePressApp",setup(){const{site:e}=y();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),R(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function O(){const e=V(),a=S();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function S(){return h(j)}function V(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
