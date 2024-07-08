"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[8678],{7769:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(5893),o=r(1151);const a={sidebar_position:4},s="@qavajs/html-formatter",i={id:"Formatters/html-formatter",title:"@qavajs/html-formatter",description:"Single file HTML formatter for cucumber framework",source:"@site/docs/Formatters/html-formatter.md",sourceDirName:"Formatters",slug:"/Formatters/html-formatter",permalink:"/docs/Formatters/html-formatter",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Formatters/html-formatter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"@qavajs/console-formatter",permalink:"/docs/Formatters/console-formatter"},next:{title:"junit formatter",permalink:"/docs/Formatters/junit-formatter"}},m={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"qavajshtml-formatter",children:"@qavajs/html-formatter"}),"\n",(0,n.jsx)(e.p,{children:"Single file HTML formatter for cucumber framework"}),"\n",(0,n.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"npm install @qavajs/html-formatter\n"})}),"\n",(0,n.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(e.p,{children:"Add to formatter section in config file"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        format: [\n            ['@qavajs/html-formatter', 'report.html']\n        ],\n        formatOptions: {\n            htmlConfig: {\n                metadata: {\n                    'OS': 'macos',\n                    'OS Version': '13.1'\n                }\n            }\n        }\n    }\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["or pass ",(0,n.jsx)(e.code,{children:"--format @qavajs/html-formatter:report.html"})," in cli"]}),"\n",(0,n.jsxs)(e.p,{children:["Kudos to ",(0,n.jsx)(e.a,{href:"https://github.com/epam/UUI",children:"https://github.com/epam/UUI"})," for providing components"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://raw.githubusercontent.com/qavajs/html-formatter/main/assets/qavajs_html_reporter.png",alt:""})})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},1151:(t,e,r)=>{r.d(e,{Z:()=>i,a:()=>s});var n=r(7294);const o={},a=n.createContext(o);function s(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);