"use strict";(self.webpackChunk_stories_js_website=self.webpackChunk_stories_js_website||[]).push([[5854],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],i={title:"Stories Packages",sidebar_label:"Packages & CDN"},l=void 0,c={unversionedId:"intro/cdn",id:"intro/cdn",title:"Stories Packages",description:"Stories Packages: CDN, Angular, Vue, and React",source:"@site/docs/intro/cdn.md",sourceDirName:"intro",slug:"/intro/cdn",permalink:"/docs/intro/cdn",editUrl:"https://github.com/storiesjs/website/edit/main/docs/intro/cdn.md",tags:[],version:"current",frontMatter:{title:"Stories Packages",sidebar_label:"Packages & CDN"},sidebar:"docs",previous:{title:"User Stories",permalink:"/docs/intro/story"},next:{title:"Next Steps",permalink:"/docs/intro/next"}},p={},d=[{value:"Stories Components CDN",id:"stories-components-cdn",level:2},{value:"Stories in Angular project",id:"stories-in-angular-project",level:2},{value:"Stories in React project",id:"stories-in-react-project",level:2},{value:"Stories in Vue project",id:"stories-in-vue-project",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Stories Packages: CDN, Angular, Vue, and React"),(0,a.kt)("meta",{name:"description",content:"View our different packages that can be used to quickly start using Stories in a test environment, Angular, Vue, React, or none at all."})),(0,a.kt)("p",null,"Stories provides different packages that can be used to quickly get started using Stories Components with framework, or none at all."),(0,a.kt)("h2",{id:"stories-components-cdn"},"Stories Components CDN"),(0,a.kt)("p",null,"Stories Components can be included from a CDN for quick testing in a ",(0,a.kt)("a",{parentName:"p",href:"https://plnkr.co/"},"Plunker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://codepen.io"},"Codepen"),", ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/"},"CodeSandbox")," or any other online code editor!"),(0,a.kt)("p",null,"It's recommended to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/"},"jsdelivr")," to access the Stories Components from a CDN. To get the latest version, add the following inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," element in an HTML file, or where external assets are included in the online code editor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="https://cdn.jsdelivr.net/npm/@stories-js/components/dist/esm/index.js"><\/script>\n<script nomodule src="https://cdn.jsdelivr.net/npm/@stories-js/components/dist/index.cjs.min.js"><\/script>\n')),(0,a.kt)("p",null,"With this it's possible to use all of the Stories Components without having to install a framework."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This does not install any frameworks integrations. This allows use of the Stories Components without a framework."))),(0,a.kt)("h2",{id:"stories-in-angular-project"},"Stories in Angular project"),(0,a.kt)("p",null,"When using Stories Components in an Angular project, install the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/components")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/angular")," packages from ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com"},"npm"),". This comes with all of the Stories Components and Angular specific services and story renderer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @stories-js/components@latest --save\n$ npm install @stories-js/angular@latest --save\n")),(0,a.kt)("p",null,"Each time there is a new Stories Angular release, this version will need to be updated to get the latest features and fixes."),(0,a.kt)("p",null,"For adding Stories Angular to an already existing Angular project, use the Angular CLI's ",(0,a.kt)("inlineCode",{parentName:"p"},"ng add")," feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ng add @stories-js/components\n$ ng add @stories-js/angular\n")),(0,a.kt)("p",null,"This will add the necessary imports to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/angular")," package as well as add the styles needed."),(0,a.kt)("h2",{id:"stories-in-react-project"},"Stories in React project"),(0,a.kt)("p",null,"When using Stories Components in a React project, install the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/components")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/react")," packages from ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com"},"npm"),". This comes with all of the Stories Components and React story renderer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @stories-js/components@latest --save\n$ npm install @stories-js/react@latest --save\n")),(0,a.kt)("p",null,"Each time there is a new Stories React release, this version will need to be updated to get the latest features and fixes."),(0,a.kt)("h2",{id:"stories-in-vue-project"},"Stories in Vue project"),(0,a.kt)("p",null,"To add Stories Components to an existing Vue project, install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/components")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stories-js/vue")," packages. This comes with all of the Stories Components and Vue story renderer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install @stories-js/components@latest --save\n$ npm install @stories-js/react@latest --save\n")),(0,a.kt)("p",null,"Each time there is a new Stories Vue release, this version will need to be updated to get the latest features and fixes."))}m.isMDXComponent=!0}}]);