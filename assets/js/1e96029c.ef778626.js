"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[51],{280:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(5893),s=a(1151);const i={sidebar_position:1},r="@qavajs/template",l={id:"Modules/template",title:"@qavajs/template",description:"Module that allow to define step definitions on Gherkin language.",source:"@site/docs/Modules/template.md",sourceDirName:"Modules",slug:"/Modules/template",permalink:"/docs/Modules/template",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Modules/template.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/category/modules"},next:{title:"@qavajs/soft-assertion",permalink:"/docs/Modules/soft-assertion"}},o={},c=[{value:"Installation",id:"installation",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Multiline parameter",id:"multiline-parameter",level:2},{value:"Key-Value Params",id:"key-value-params",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"qavajstemplate",children:"@qavajs/template"}),"\n",(0,t.jsx)(n.p,{children:"Module that allow to define step definitions on Gherkin language."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"npm install @qavajs/template"})}),"\n",(0,t.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.p,{children:"To use templates their location need to be passed to templates property of config file and library need to be listed\nin require"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        require: [],\n        requireModule: [\n            '@qavajs/template'\n        ],\n        templates: ['templates/*.feature'] // glob patter to features with templates\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: Templates\n\n  Scenario: I login\n    When I open 'https://your-app.com'\n    And I type 'username' to 'Login Form > Username Input'\n    And I type 'password' to 'Login Form > Password Input'\n    And I click 'Login Form > Login Button'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then following template can be called from scenario as simple step"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: Auth\n\n  Scenario: Verify that user is able to login\n    When I login\n    Then I expect 'Header' to be visible\n"})}),"\n",(0,t.jsx)(n.p,{children:"Templates also can accept parameters as < param> e.g"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: Templates\n\n  Scenario: I login as '<username>' with '<password>' password\n    When I open 'https://your-app.com'\n    And I type '<username>' to 'Login Form > Username Input'\n    And I type '<password>' to 'Login Form > Password Input'\n    And I click 'Login Form > Login Button'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then following template can be called with actual params"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: Auth\n\n  Scenario: Verify that user is able to login\n    When I login as 'admin' with 'admin' password\n    Then I expect 'Header' to be visible\n"})}),"\n",(0,t.jsx)(n.h2,{id:"multiline-parameter",children:"Multiline parameter"}),"\n",(0,t.jsx)(n.p,{children:"It is also possible to pass multi line parameter to template"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:'Feature: TextArea\n\n  Scenario: Verify that user is able to login\n    When I set text area:\n    """\n    this\n    is\n    multiline\n    text\n    """\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Multiline data can be accessed by ",(0,t.jsx)(n.code,{children:"<qavajsMultiline>"})," formal parameter in template"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: Templates\n\n  Scenario: I set text area:\n    When I type '<qavajsMultiline>' to 'Form > Text Area'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"key-value-params",children:"Key-Value Params"}),"\n",(0,t.jsx)(n.p,{children:"Multiple parameters can be passed in form of key-value data table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: TextArea\n\n  Scenario: Verify that user is able to login\n    When I fill registration form:\n      | name     | John Dou                 |\n      | position | Test Automation Engineer |\n"})}),"\n",(0,t.jsx)(n.p,{children:"And values can be accessed by corresponding keys"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gherkin",children:"Feature: Templates\n\n  Scenario: I fill registration form:\n    When I type '<name>' to 'Form > Name'\n    When I type '<position>' to 'Form > Position'\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);