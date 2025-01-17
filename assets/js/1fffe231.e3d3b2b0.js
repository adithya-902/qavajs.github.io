"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[4227],{449:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Guides/memory","title":"Memory","description":"Framework provides the capability to transit variables between step and access them from gherkin definitions","source":"@site/docs/Guides/memory.md","sourceDirName":"Guides","slug":"/Guides/memory","permalink":"/docs/Guides/memory","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/memory.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Guides","permalink":"/docs/category/guides"},"next":{"title":"Page Object v1","permalink":"/docs/Guides/page-object-v1"}}');var r=a(4848),t=a(8453);const i={sidebar_position:1},o="Memory",l={},c=[{value:"Constants and computed",id:"constants-and-computed",level:2},{value:"String interpolation",id:"string-interpolation",level:2},{value:"$js",id:"js",level:2},{value:"Escape $",id:"escape-",level:2},{value:"Parallel",id:"parallel",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"memory",children:"Memory"})}),"\n",(0,r.jsx)(n.p,{children:"Framework provides the capability to transit variables between step and access them from gherkin definitions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I save text of 'Answer' to equal 'answer'\nThen I expect text of 'Another Answer' to equal '$answer'\n"})}),"\n",(0,r.jsx)(n.h1,{id:"custom-steps",children:"Custom Steps"}),"\n",(0,r.jsx)(n.p,{children:"Memory value can be set and read from memory object"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const memory = require('@qavajs/memory');\n\nWhen(/^save variable as '(.+)'$/, async function (key) {\n    memory.setValue(key, 42);\n});\n\nThen(/^value '(.+)' should be equal to '(.+)'$/, async function (variable1, variable2) {\n    const val = memory.getValue(variable1);\n    expect(val).to.equal(variable2);\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When save variable as 'variable'\n# previously saved variable can be accessed via $identifier\nThen value of '$variable' should be equal to '42'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"constants-and-computed",children:"Constants and computed"}),"\n",(0,r.jsx)(n.p,{children:"Lib provides capability to set constant values and computed (JavaScript function references that can be called from feature file)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n    constant: 42,\n    computed: function() {\n        return Date.now()\n    }\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"Then I expect text of 'Answer' to equal '$constant'\nThen I expect text of 'What Time Is It' to equal '$computed()'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"string-interpolation",children:"String interpolation"}),"\n",(0,r.jsx)(n.p,{children:"Module also provides capability to use string interpolation in your Gherkin scenarios"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I save '42' to memory as 'variable'\nThen I expect text of 'Answer' to equal 'answer is {$variable}' #expected value will be 'answer is 42'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"js",children:"$js"}),"\n",(0,r.jsxs)(n.p,{children:["Built-in ",(0,r.jsx)(n.code,{children:"$js"})," computed provides a way to execute JavaScript code."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I expect text of 'Current Date' to equal '$js(Date.now())'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"escape-",children:"Escape $"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"$"})," can be escaped with double backslash"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Gherkin",children:"When I expect text of 'Currency Label' to equal '\\\\$42'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parallel",children:"Parallel"}),"\n",(0,r.jsx)(n.p,{children:"In case you need to assign uniq value for each Cucumber thread you can use parallel function.\nIt will assign value based on CUCUMBER_WORKER_ID env variable."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { parallel } = require('@qavajs/memory/utils');\n\nclass Memory {\n    user = parallel([\n        { username: 'user1', password: 'password' },\n        { username: 'user2', password: 'password' }\n    ]);\n}\n\nmodule.exports = Memory;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);