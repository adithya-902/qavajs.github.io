"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[9975],{928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(5893),l=t(1151),r=t(4866),i=t(5162);const s={sidebar_position:4},o="Validation",c={id:"Guides/validation",title:"Validation",description:"All @qavajs libraries use single validation system provided by @qavajs/validation package.",source:"@site/docs/Guides/validation.mdx",sourceDirName:"Guides",slug:"/Guides/validation",permalink:"/docs/Guides/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/validation.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Parallel Execution",permalink:"/docs/Guides/parallel"},next:{title:"WDIO Adapter",permalink:"/docs/Guides/wdio-adapter"}},u={},d=[{value:"to equal",id:"to-equal",level:2},{value:"to strictly equal",id:"to-strictly-equal",level:2},{value:"to deeply equal",id:"to-deeply-equal",level:2},{value:"to contain",id:"to-contain",level:2},{value:"to match",id:"to-match",level:2},{value:"to be above, to be greater than",id:"to-be-above-to-be-greater-than",level:2},{value:"to be below, to be less than",id:"to-be-below-to-be-less-than",level:2},{value:"have type",id:"have-type",level:2},{value:"have members",id:"have-members",level:2},{value:"include members",id:"include-members",level:2},{value:"have property",id:"have-property",level:2},{value:"case insensitive equal",id:"case-insensitive-equal",level:2},{value:"match schema",id:"match-schema",level:2},{value:"Using in custom steps",id:"using-in-custom-steps",level:2},{value:"Poll validation",id:"poll-validation",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"validation",children:"Validation"}),"\n",(0,a.jsx)(n.p,{children:"All @qavajs libraries use single validation system provided by @qavajs/validation package."}),"\n",(0,a.jsxs)(n.p,{children:["All validations can be negated adding ",(0,a.jsx)(n.em,{children:"not"})," word."]}),"\n",(0,a.jsx)(n.h2,{id:"to-equal",children:"to equal"}),"\n",(0,a.jsx)(n.p,{children:"not strict equal (==)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect text of 'Element' to equal 'some text'\nThen I expect '$variable' not to equal '42'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"to-strictly-equal",children:"to strictly equal"}),"\n",(0,a.jsx)(n.p,{children:"strict equal (===) (with type checking)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect text of 'Element' to strictly equal 'some text'\nThen I expect '$variable' not to strictly equal '$js(42)'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"to-deeply-equal",children:"to deeply equal"}),"\n",(0,a.jsx)(n.p,{children:"deep equal (chai eql) to compare reference types"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect '$variable' to deeply equal '$js({ x: 42 })'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"to-contain",children:"to contain"}),"\n",(0,a.jsx)(n.p,{children:"contain a substring"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect text of 'Element' to contain 'text'\nThen I expect '$variable' to contain 'text'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"to-match",children:"to match"}),"\n",(0,a.jsx)(n.p,{children:"match a regular expression"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect text of 'Element' to match '^text$'\nThen I expect '$variable' not to match '$regexp'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"to-be-above-to-be-greater-than",children:"to be above, to be greater than"}),"\n",(0,a.jsx)(n.p,{children:"greater than"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect number of element in 'Collection' collection to be greater than '3'\nThen I expect '$variable' not to be above '5'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"to-be-below-to-be-less-than",children:"to be below, to be less than"}),"\n",(0,a.jsx)(n.p,{children:"less than"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect number of element in 'Collection' collection to be less than '3'\nThen I expect '$variable' not to be below '5'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"have-type",children:"have type"}),"\n",(0,a.jsx)(n.p,{children:"data type validation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect '$js(42)' to have type 'number'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"have-members",children:"have members"}),"\n",(0,a.jsx)(n.p,{children:"array/object have exact members"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect '$js([3, 2, 1])' to have members '$js([1, 2, 3])'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"include-members",children:"include members"}),"\n",(0,a.jsx)(n.p,{children:"array/object includes members"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect '$js([3, 2, 1])' to include members '$js([1, 2])'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"have-property",children:"have property"}),"\n",(0,a.jsx)(n.p,{children:"have property"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect '$js({ x: 2 })' to have property 'x'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"case-insensitive-equal",children:"case insensitive equal"}),"\n",(0,a.jsx)(n.p,{children:"not strict equal (==) with casting to lower case"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect text of 'Element' to case insensitive equal 'some text'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"match-schema",children:"match schema"}),"\n",(0,a.jsxs)(n.p,{children:["match ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/ajv",children:"ajv"})," schema"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-gherkin",children:"Then I expect '$object' to match schema '$schema'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"using-in-custom-steps",children:"Using in custom steps"}),"\n",(0,a.jsx)(n.p,{children:"You can also use validations in custom steps"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"JavaScript",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { Then } = require('@cucumber/cucumber');\nconst { getValidation } = require('@qavajs/validation');\n\nThen('I expect the answer {} {string}', async function(validationType, expected) {\n    const answer = '42';\n    const validate = getValidation(validationType);\n    validate(answer, expected);\n});\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Then } from '@cucumber/cucumber';\nimport { getValidation } from '@qavajs/validation';\n\nThen('I expect the answer {} {string}', async function(validationType: string, expected: string) {\n    const answer = '42';\n    const validate = getValidation(validationType);\n    validate(answer, expected);\n});\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"poll-validation",children:"Poll validation"}),"\n",(0,a.jsx)(n.p,{children:"Validation with auto-retries"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{value:"js",label:"JavaScript",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { Then } = require('@cucumber/cucumber');\nconst { getPollValidation } = require('@qavajs/validation');\n\nThen('I expect the answer {} {string}', async function(validationType, expected) {\n    const answer = getAnswer();\n    const validate = getPollValidation(validationType);\n    await validate(getAnswer, expected, { timeout: 2000, interval: 500 });\n});\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Then } from '@cucumber/cucumber';\nimport { getPollValidation } from '@qavajs/validation';\n\nThen('I expect the answer {} {string}', async function(validationType: string, expected: string) {\n    const answer = getAnswer();\n    const validate = getPollValidation(validationType);\n    await validate(getAnswer, expected, { timeout: 2000, interval: 500 });\n});\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(512);const l={tabItem:"tabItem_Ymn6"};var r=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>q});var a=t(7294),l=t(512),r=t(2466),i=t(6550),s=t(469),o=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const l=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=v({queryString:t,groupId:l}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,u.Nk)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),b=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),l=s[t].value;l!==a&&(c(n),i(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,l.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(f,{...e,...n})]})}function q(e){const n=(0,x.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(7294);const l={},r=a.createContext(l);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);