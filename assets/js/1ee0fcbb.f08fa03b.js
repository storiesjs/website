"use strict";(self.webpackChunk_stories_js_website=self.webpackChunk_stories_js_website||[]).push([[9357],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),u=o,d=f["".concat(p,".").concat(u)]||f[u]||m[u]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4649:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"User Stories"},p=void 0,c={unversionedId:"story/definition",id:"story/definition",title:"User Stories",description:"User Stories are one of the core elements of an Agile program. They help provide a user-focused framework for daily work to drive collaboration, creativity, and a better product overall. The development team get the context from User Stories of what they are creating. Stories help them understand how they're providing value for the business and to keep the user top of mind.",source:"@site/docs/story/definition.md",sourceDirName:"story",slug:"/story/definition",permalink:"/docs/story/definition",editUrl:"https://github.com/storiesjs/website/edit/main/docs/story/definition.md",tags:[],version:"current",frontMatter:{title:"User Stories"}},l={},m=[{value:"Story",id:"story",level:2},{value:"Component Story Format (CSF)",id:"component-story-format-csf",level:2}],f={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"User Stories are one of the core elements of an Agile program. They help provide a user-focused framework for daily work to drive collaboration, creativity, and a better product overall. The development team get the context from User Stories of what they are creating. Stories help them understand how they're providing value for the business and to keep the user top of mind."),(0,i.kt)("p",null,"User Story is a short, informal description of a software feature written from the end user's perspective."),(0,i.kt)("h2",{id:"story"},"Story"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Story")," is representing User Story for the UI component and is the main object of interaction in Stories. It connects the isolated environment of Stories and the ",(0,i.kt)("em",{parentName:"p"},"Component"),". The ",(0,i.kt)("em",{parentName:"p"},"Story")," is a render function that reflects the state of the ",(0,i.kt)("em",{parentName:"p"},"Component"),". Once a ",(0,i.kt)("em",{parentName:"p"},"Story")," is created, you have to add it to the Stories application and it appears in the UI along with the rendered state of the ",(0,i.kt)("em",{parentName:"p"},"Component"),"."),(0,i.kt)("p",null,"In order for Stories to distinguish regular files from stories, naming is used with the ",(0,i.kt)("em",{parentName:"p"},".stories.js")," or ",(0,i.kt)("em",{parentName:"p"},".stories.ts")," prefix. It is considered good practice if one ",(0,i.kt)("em",{parentName:"p"},".stories.js")," or ",(0,i.kt)("em",{parentName:"p"},".stories.ts")," file include a number of stories  describes one ",(0,i.kt)("em",{parentName:"p"},"Component")," in different states."),(0,i.kt)("h2",{id:"component-story-format-csf"},"Component Story Format (CSF)"),(0,i.kt)("p",null,"The Component Story Format (CSF) is an open standard for writing stories of a ",(0,i.kt)("em",{parentName:"p"},"Component"),", based on JavaScript ES6 modules. A ",(0,i.kt)("em",{parentName:"p"},"Story")," is a code snippet that renders a ",(0,i.kt)("em",{parentName:"p"},"Component")," in a specific state to provide it's the most accurate representation in a User Story. "),(0,i.kt)("p",null,"Benefits of CSF"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Simple")," - write story definition as export of ES6 module;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Open standard")," - doesn't belong to any vendor-specific library;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Declarative")," - easily use in MDX;")))}u.isMDXComponent=!0}}]);