"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[2037],{8948:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(5893),o=t(1151);const i={sidebar_position:0},r="@qavajs/playwright",s={id:"StandaloneSolutions/playwright",title:"@qavajs/playwright",description:"qavajs implementation on top of playwright runner",source:"@site/docs/StandaloneSolutions/playwright.md",sourceDirName:"StandaloneSolutions",slug:"/StandaloneSolutions/playwright",permalink:"/docs/StandaloneSolutions/playwright",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/StandaloneSolutions/playwright.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Standalone Solutions",permalink:"/docs/category/standalone-solutions"},next:{title:"@qavajs/cypress",permalink:"/docs/StandaloneSolutions/cypress"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"qavajsplaywright",children:"@qavajs/playwright"}),"\n",(0,a.jsx)(e.p,{children:"qavajs implementation on top of playwright runner"}),"\n",(0,a.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"npm init playwright"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"npm install @qavajs/playwright-runner-adapter"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"npm install @qavajs/playwright"})}),"\n",(0,a.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(e.p,{children:"cucumber.ts"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import Memory from './memory';\nimport App from './page_object';\n\nexport default {\n    paths: ['features/*.feature'],\n    require: [\n        'node_modules/@qavajs/playwright/index.js', // package steps\n        'step_definitions/*.ts' // custom step definitions\n    ],\n    memory: new Memory(),\n    pageObject: new App()\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"playwright.config.ts"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"proces.env.CONFIG = 'cucumber.ts';\nproces.env.PROFILE = 'default';\n\nexport default defineConfig({\n    testDir: resolve('node_modules/@qavajs/playwright-runner-adapter/adapter'),\n    ...\n});\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>r});var a=t(7294);const o={},i=a.createContext(o);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);