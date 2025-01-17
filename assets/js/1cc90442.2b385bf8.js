"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[3025],{3838:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"StandaloneSolutions/cypress","title":"@qavajs/cypress","description":"qavajs implementation on top of cypress runner","source":"@site/docs/StandaloneSolutions/cypress.md","sourceDirName":"StandaloneSolutions","slug":"/StandaloneSolutions/cypress","permalink":"/docs/StandaloneSolutions/cypress","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/StandaloneSolutions/cypress.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"@qavajs/playwright","permalink":"/docs/StandaloneSolutions/playwright"},"next":{"title":"FAQ","permalink":"/docs/qna"}}');var a=s(4848),r=s(8453);const o={sidebar_position:1},i="@qavajs/cypress",c={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"qavajscypress",children:"@qavajs/cypress"})}),"\n",(0,a.jsx)(n.p,{children:"qavajs implementation on top of cypress runner"}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install cypress\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install @qavajs/cypress @qavajs/cypress-runner-adapter @qavajs/memory\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"cypress.config.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { defineConfig } = require('cypress');\nconst cucumber = require('@qavajs/cypress-runner-adapter/adapter');\nmodule.exports = defineConfig({\n    e2e: {\n        specPattern: 'cypress/features/**/*.feature', //path to features\n        supportFile: 'cypress/support/e2e.js', //path to main support file\n        setupNodeEvents(on, config) {\n            on('file:preprocessor', cucumber)\n        },\n    },\n});\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"support file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import defineQavajs from '@qavajs/cypress/defineQavajs';\nimport '@qavajs/cypress';\n\nimport PageObject from '../page_object/'; // path to qavajs page objects\nimport Memory from '../memory'; // path to qavajs memory\n\ndefineQavajs({\n    pageObject: new PageObject(),\n    memory: new Memory()\n});\n\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(6540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);