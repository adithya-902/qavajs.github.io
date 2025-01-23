"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[1442],{8007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"v2","title":"What\'s new in v2","description":"- new page object approach","source":"@site/docs/v2.md","sourceDirName":".","slug":"/v2","permalink":"/docs/v2","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/v2.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udca1 Getting Started","permalink":"/docs/intro"},"next":{"title":"Steps v2","permalink":"/docs/category/steps-v2"}}');var o=t(4848),s=t(8453);const c={sidebar_position:1},l="What's new in v2",i={},a=[{value:"Migration guide",id:"migration-guide",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"whats-new-in-v2",children:"What's new in v2"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"new page object approach"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["page object now is built-in to corresponding UI library and exports single named export ",(0,o.jsx)(n.code,{children:"locator"})," from ",(0,o.jsx)(n.code,{children:"/po"})," sub-path."]}),"\n",(0,o.jsx)(n.p,{children:"playwright example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { locator } from '@qavajs/steps-playwright/po';\n\nclass App {\n    Button = locator('#button'); //simple locator\n    Row = locator.template(line => `.row:has-text(\"${line}\")`); //template locator\n    Toast = locator.native(({ page }) => page.locator('.toast')); //native locator\n    Modal = locator('#modal').as(Modal); // component\n}\n\nclass Modal {\n    Save = locator('#save');   \n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"wdio example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { locator } from '@qavajs/steps-wdio/po';\n\nclass App {\n    Button = locator('#button'); //simple locator\n    Row = locator.template(line => `.row:has-text(\"${line}\")`); //template locator\n    Toast = locator.native(({ browser }) => browser.$('.toast')); //native locator\n    Modal = locator('#modal').as(Modal); // component\n}\n\nclass Modal {\n    Save = locator('#save');   \n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gherkin",children:"Scenario: new page object features\n  When I click 'Button'\n  Then I expect 'Row (Kyiv)' to be present # word in parenthesis become argument of template function\n  When I click 'Modal > Save'\n  And I expect 'Toast' to be visible\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["introduced ",(0,o.jsx)(n.code,{children:"playwrightLocator"})," parameter type to transform page object alias to locator"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"When('I click {playwrightLocator}', async function (locator: Locator) {\n    await locator.click()\n});\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gherkin",children:"Scenario: new page object features\n  When I click 'Button'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["introduced ",(0,o.jsx)(n.code,{children:"wdioLocator"})," parameter type to transform page object alias to accessor function"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"When('I click {wdioLocator}', async function (locator: Locator) {\n    await locator().click()\n});\n\nWhen('I click first element in collection {wdioLocator}', async function (locator: Locator) {\n  await locator.collection()[0].click()\n});\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@qavajs/cli"})," become ",(0,o.jsx)(n.code,{children:"@qavajs/core"})," and provides shared types\n",(0,o.jsx)(n.code,{children:"MemoryValue"})," - memory data accessor (all qavajs steps works this accessor)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { type MemoryValue } from '@qavajs/core';\n\nWhen('I write {string} to {value}', function (data: string, memoryValue: MemoryValue) {\n    memoryValue.set(data);\n});\n\nWhen('I read {value} from memory', function (memoryValue: MemoryValue) {\n    console.log(memoryValue.value());\n});\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gherkin",children:"Scenario: new MemoryValue type\n  When I write '42' to 'theAnswer' # value with be saved to $theAnswer key\n  And I read '$theAnswer' from memory\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Validation"})," - resolver for validation logic"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { type Validation } from '@qavajs/core';\n\nThen('I expect {string} {validation} {string}', function (actual: string, expect: Validation, expected: string) {\n    expect(actual, expected);\n});\n\nThen('I wait until {string} {validation} {string}', async function (actual: string, expect: Validation, expected: string) {\n    await expect.poll(actual, expected);\n});\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-gherkin",children:"Scenario: new Validation type\n  Then I expect '41' not to equal '42'\n  But I expect '41' equal '41'\n  And I wait until '42' to be greater that '41'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["exposed new ",(0,o.jsx)(n.code,{children:"getValue"})," and ",(0,o.jsx)(n.code,{children:"setValue"})," properties to qavajs world to access memory"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"When('I write {string} to memory', function (data: string) {\n    this.setValue('yourKey', data);\n});\n\nWhen('I read from memory', function (key: string) {\n    console.log(this.getValue('$yourKey'));\n});\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["exposed new ",(0,o.jsx)(n.code,{children:"validation"})," property to get expect function"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"When('I write {string} to memory', function (data: string) {\n    this.setValue('yourKey', data);\n});\n\nWhen('I read from memory', function (key: string) {\n    console.log(this.getValue('$yourKey'));\n});\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["removed ",(0,o.jsx)(n.code,{children:"I wait until..."})," steps from wdio and playwright plugins in favor of ",(0,o.jsx)(n.code,{children:"I expect..."})," that support polling"]}),"\n",(0,o.jsxs)(n.li,{children:["removed ",(0,o.jsx)(n.code,{children:"Response..."})," steps from api plugin in favor of ",(0,o.jsx)(n.code,{children:"I expect"})," and property accessor"]}),"\n",(0,o.jsxs)(n.li,{children:["removed globals in favor using world properties ",(0,o.jsx)(n.code,{children:"this.browser"})," for wdio and ",(0,o.jsx)(n.code,{children:"this.playwright"})," for playwright"]}),"\n",(0,o.jsxs)(n.li,{children:["removed ",(0,o.jsx)(n.code,{children:"I switch to frame"})," in playwright plugin in favor using frame locators"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"migration-guide",children:"Migration guide"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"v1"}),(0,o.jsx)(n.th,{children:"v2"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"I wait until..."})," steps"]}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"I expect..."})," steps"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Element = $('selector')"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Element = locator('selector')"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Collection = $$('selector')"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Collection = locator('selector')"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Component = $(new Component('selector'))"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Component = locator('selector').as(Component)"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"class CustomComponent extends Component {}"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"class CustomComponent {}"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'Element = $(Selector(text => `//*[@text="${text}"]`))'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'Element => locator.template(text => `//*[@text="${text}"]`)'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Element = $(NativeSelector(page => page.locator('selector'))"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Element = locator.native(page => page.locator('selector'))"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"getElement('Button')"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"this.element()"})," or use ",(0,o.jsx)(n.code,{children:"{wdioLocator}"}),"/",(0,o.jsx)(n.code,{children:"{playwrightLocator}"})," parameter type"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"getCollection('Button')"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"this.element().collection()"})," or use ",(0,o.jsx)(n.code,{children:"{wdioLocator}"}),"/",(0,o.jsx)(n.code,{children:"{playwrightLocator}"})," parameter type"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"memory.getValue('$key')"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"this.getValue('$key')"})," or use ",(0,o.jsx)(n.code,{children:"{value}"})," parameter type"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"memory.setValue('key', 42)"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"this.setValue('key', 42)"})," or use ",(0,o.jsx)(n.code,{children:"{value}"})," parameter type"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"getValidatiion('to equal')"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"this.validation('to equal')"})," or use ",(0,o.jsx)(n.code,{children:"{validation}"})," parameter type"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"global.config"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"this.config"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"global.browser"})," (wdio)"]}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"this.wdio.browser"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"global.driver"}),"  (wdio)"]}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"this.wdio.driver"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"global.browser"})," (playwright)"]}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"this.playwright.browser"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"global.context"})," (playwright)"]}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"this.playwright.context"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"global.page"})," (playwright)"]}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"this.playwright.page"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(6540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);