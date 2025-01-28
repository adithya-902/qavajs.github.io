"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[3442],{6549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Guides/page-object-v2","title":"Page Object v2","description":"qavajs provides flexible page object model that resolves plain-english selector and return element or array of elements.","source":"@site/docs/Guides/page-object-v2.mdx","sourceDirName":"Guides","slug":"/Guides/page-object-v2","permalink":"/docs/Guides/page-object-v2","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/page-object-v2.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Page Object v1","permalink":"/docs/Guides/page-object-v1"},"next":{"title":"Composing Steps","permalink":"/docs/Guides/composing-steps"}}');var r=n(4848),o=n(8453),l=n(5537),s=n(9329);const c={sidebar_position:2},i="Page Object v2",u={},d=[{value:"Create page object",id:"create-page-object",level:2},{value:"Template locator",id:"template-locator",level:2},{value:"Working with collections",id:"working-with-collections",level:2},{value:"Native framework locator",id:"native-framework-locator",level:2},{value:"Using page object in custom steps",id:"using-page-object-in-custom-steps",level:2}];function p(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"page-object-v2",children:"Page Object v2"})}),"\n",(0,r.jsx)(t.p,{children:"qavajs provides flexible page object model that resolves plain-english selector and return element or array of elements."}),"\n",(0,r.jsx)(t.h2,{id:"create-page-object",children:"Create page object"}),"\n",(0,r.jsxs)(t.p,{children:["Entry point of page object is class defined as ",(0,r.jsx)(t.em,{children:"pageObject"})," property in config"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { locator } = require('@qavajs/steps-playwright/po'); // @qavajs/steps-wdio/po\n\nclass App {\n    SimpleLocator = locator('.single-element');\n    TemplateLocator = locator.template(text => `.class:has-text(\"${text}\")`);\n    NativeLocator = locator.native(({ browser, context, page, argument }) => page.getByText('some text'));\n    Component = locator('.container').as(SingleComponent);\n}\n\nclass SingleComponent {\n    ChildItem = locator('.child-item');\n}\n\nmodule.exports = App;\n"})})}),(0,r.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { locator } from '@qavajs/steps-playwright/po'; // @qavajs/steps-wdio/po\n\nclass App {\n    SimpleLocator = locator('.single-element');\n    TemplateLocator = locator.template(text => `.class:has-text(\"${text}\")`);\n    NativeLocator = locator.native(({ browser, context, page, argument }) => page.getByText('some text'));\n    Component = locator('.container').as(SingleComponent);\n}\n\nclass SingleComponent {\n    ChildItem = locator('.child-item');\n}\n\nexport default App;\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Usage in feature file"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gherkin",children:"Feature: Page Object Demo\n\n    Scenario: Interact with element\n        When I click 'Simple Locator'\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"template-locator",children:"Template locator"}),"\n",(0,r.jsx)(t.p,{children:"In case you need to generate selector based on some data you can use dynamic selectors"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { locator } = require('@qavajs/steps-playwright/po'); // @qavajs/steps-wdio/po\n\nclass Component {\n    Element = locator.template(index => `div:nth-child(${index})`); // function should return valid selector\n}\n"})})}),(0,r.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { locator } from '@qavajs/steps-playwright/po'; // @qavajs/steps-wdio/po\n\nclass Component {\n    Element = locator.template(index => `div:nth-child(${index})`); // function should return valid selector\n}\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Then you can pass parameter to this function from Gherkin file"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gherkin",children:"When I click 'Component > Element (2)'\n"})}),"\n",(0,r.jsx)(t.h2,{id:"working-with-collections",children:"Working with collections"}),"\n",(0,r.jsx)(t.p,{children:"Unlike qavajs v1, there is no built-in collection selectors. Instead you can define own way to get some certain\nelement from collection using template locator."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { locator } from '@qavajs/steps-playwright/po'; // @qavajs/steps-wdio/po\n\nclass App {\n    ElementByIndex = locator.template(index => `xpath=//div[${index}]`);\n    ElementByInnerText = locator.template(text => `div:has-text(\"${text}\")`);\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gherkin",children:"When I click 'Element By Index (1)'\nWhen I click 'Element By Inner Text (some text)'\n"})}),"\n",(0,r.jsx)(t.h2,{id:"native-framework-locator",children:"Native framework locator"}),"\n",(0,r.jsxs)(t.p,{children:["It is also possible to use driver-built capabilities to return element. You can pass handler that has access to\ncurrent ",(0,r.jsx)(t.code,{children:"page"}),", ",(0,r.jsx)(t.code,{children:"browser"}),", ",(0,r.jsx)(t.code,{children:"context"}),", ",(0,r.jsx)(t.code,{children:"argument"})," to handler;"]}),"\n",(0,r.jsx)(t.p,{children:"Playwright example:"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { locator } = require('@qavajs/steps-playwright/po');\n\nclass Component {\n    Element = locator.native(({ page }) => page.getByText(`some text`)));\n}\n"})})}),(0,r.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { locator } from '@qavajs/steps-playwright/po';\n\nclass Component {\n    Element = locator.native(({ page }) => page.getByText(`some text`)));\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"using-page-object-in-custom-steps",children:"Using page object in custom steps"}),"\n",(0,r.jsxs)(t.p,{children:["It's possible to use page object in custom step definitions via built-in parameter types ",(0,r.jsx)(t.code,{children:"playwrightLocator"})," and ",(0,r.jsx)(t.code,{children:"wdioLocator"})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { When } = require('@cucumber/cucumber');\n\n// playwright\nWhen('click {playwrightLocator}'/, async function (locator) {\n    await locator.click();\n});\n\n// wdio\nWhen('click {wdioLocator}'/, async function (locator) {\n    await locator().click();\n});\n"})})}),(0,r.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { When } from '@cucumber/cucumber';\n\n// playwright\nWhen('click {playwrightLocator}'/, async function (locator) {\n    await locator.click();\n});\n\n// wdio\nWhen('click {wdioLocator}'/, async function (locator) {\n    await locator().click();\n});\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gherkin",children:"When click 'Product > Add To Cart'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),o=n(5627),l=n(6347),s=n(372),c=n(604),i=n(1861),u=n(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,d]=m({queryString:n,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),j=(()=>{const e=i??g;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function b(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(i(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(f,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);