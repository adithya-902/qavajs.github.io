"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:4},o="WDIO Adapter",c={unversionedId:"Guides/wdio-adapter",id:"Guides/wdio-adapter",title:"WDIO Adapter",description:"@qavajs/cli comes with wdioAdapter function that allow to use wdio services e.g selenium-service, appium-service, etc.",source:"@site/docs/Guides/wdio-adapter.md",sourceDirName:"Guides",slug:"/Guides/wdio-adapter",permalink:"/docs/Guides/wdio-adapter",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/wdio-adapter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Parallel Execution",permalink:"/docs/Guides/parallel"},next:{title:"Typescript",permalink:"/docs/Guides/typescript"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wdio-adapter"},"WDIO Adapter"),(0,i.kt)("p",null,"@qavajs/cli comes with wdioAdapter function that allow to use wdio services e.g selenium-service, appium-service, etc.\nService defintion may be string with module path or configuration tuple [modulePath, options, capabilities, config"),(0,i.kt)("p",null,"simple use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { wdioService } = require('@qavajs/cli');\n\nmodule.exports = {\n    default: {\n        service: [\n            wdioService('@wdio/selenium-standalone-service')\n        ],\n    }\n}\n")),(0,i.kt)("p",null,"use with params"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { wdioService } = require('@qavajs/cli');\n\nmodule.exports = {\n    default: {\n        service: [\n            wdioService([\n                '@wdio/appium-service',\n                {\n                    args: {\n                        chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')\n                    }\n                }\n            ])\n        ],\n    }\n}\n")))}u.isMDXComponent=!0}}]);