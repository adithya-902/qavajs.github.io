"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[5498],{54:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Modules/soft-assertion","title":"@qavajs/soft-assertion","description":"Module that allow to use soft asserts in qavajs tests","source":"@site/docs/Modules/soft-assertion.md","sourceDirName":"Modules","slug":"/Modules/soft-assertion","permalink":"/docs/Modules/soft-assertion","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Modules/soft-assertion.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"@qavajs/template","permalink":"/docs/Modules/template"},"next":{"title":"Formatters","permalink":"/docs/category/formatters"}}');var o=t(4848),a=t(8453);const r={sidebar_position:2},i="@qavajs/soft-assertion",l={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"qavajssoft-assertion",children:"@qavajs/soft-assertion"})}),"\n",(0,o.jsx)(s.p,{children:"Module that allow to use soft asserts in qavajs tests"}),"\n",(0,o.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"npm install @qavajs/soft-assertion"})}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(s.p,{children:"Add module to requireModule."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        requireModule: [\n            '@qavajs/soft-assertion/index.js'\n        ]\n    }\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Now you can use ",(0,o.jsx)(s.code,{children:"softly"})," prefix before any expect."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-gherkin",children:"Feature: Feature\n\n  Scenario: verify soft assert\n    # first step fails but other steps will not be skipped\n    Then I softly expect '2' to equal '1'\n    # pass\n    And I expect '1' to equal '1'\n    # fail\n    And I expect '2' to equal '1'\n    # skip\n    And I expect '1' to equal '1'\n"})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var n=t(6540);const o={},a=n.createContext(o);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);