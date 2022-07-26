"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Memory",s={unversionedId:"Guides/memory",id:"Guides/memory",title:"Memory",description:"Framework provides the capability to transit variables between step and access them from gherkin definitions",source:"@site/docs/Guides/memory.md",sourceDirName:"Guides",slug:"/Guides/memory",permalink:"/docs/Guides/memory",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/memory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Page Object",permalink:"/docs/Guides/page-object"}},c={},l=[{value:"Using constants and computed",id:"using-constants-and-computed",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"memory"},"Memory"),(0,a.kt)("p",null,"Framework provides the capability to transit variables between step and access them from gherkin definitions"),(0,a.kt)("p",null,"You can use special type {text} to transform string parameter to memory value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Then('{text} value should be 42', async function (value) {\n    expect(await value).to.equal(42);\n})\n")),(0,a.kt)("p",null,"or read value directly from memory object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const memory = require('@qavajs/memory');\n\nWhen(/^save variable as '(.+)'$/, async function (key) {\n    memory.setValue(key, 42);\n});\n\nThen(/^value '(.+)' should be equal to '(.+)'$/, async function (variable1, variable2) {\n    const val = memory.getValue(variable1);\n    expect(val).to.equal(variable2);\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gherkin"},"When save variable as 'variable'\nThen value of '$variable' should be equal to '42'\n")),(0,a.kt)("h2",{id:"using-constants-and-computed"},"Using constants and computed"),(0,a.kt)("p",null,"Lib provides capability to set constant values and computed (values that calculated in the moment of call)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    CONSTANT: 42,\n    computed: function() {\n        return Date.now()\n    }\n};\n\n")))}p.isMDXComponent=!0}}]);