"use strict";(self.webpackChunk_stories_js_website=self.webpackChunk_stories_js_website||[]).push([[8178],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),o=n(7294),a=n(2389),i=n(5979),s=n(6010),u="tabItem_LplD";function l(e){var t,n,a,l=e.lazy,c=e.block,p=e.defaultValue,m=e.values,f=e.groupId,d=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),g=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,o.useState)(h),O=T[0],x=T[1],E=[],D=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=g[f];null!=Z&&Z!==O&&b.some((function(e){return e.value===Z}))&&x(Z)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==O&&(D(t),x(r),null!=f&&w(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},d)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:j,onClick:j},a,{className:(0,s.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,a.Z)();return o.createElement(l,(0,r.Z)({key:String(t)},e))}},4744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return j},contentTitle:function(){return D},default:function(){return P},frontMatter:function(){return E},metadata:function(){return Z},toc:function(){return C}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),s={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0;var l=["components"],c={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0;var m=["components"],f={toc:[]};function d(e){var t=e.components,n=(0,o.Z)(e,m);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0;var v=["components"],b={toc:[]};function y(e){var t=e.components,n=(0,o.Z)(e,v);return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0;var h=["components"],k={toc:[]};function g(e){var t=e.components,n=(0,o.Z)(e,h);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0;var w=["components"],T={toc:[]};function O(e){var t=e.components,n=(0,o.Z)(e,w);return(0,a.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}))}O.isMDXComponent=!0;var x=["components"],E={title:"stories-sidebar",hide_table_of_contents:!0},D=void 0,Z={unversionedId:"api/stories-sidebar",id:"api/stories-sidebar",title:"stories-sidebar",description:"The stories-sidebar displays collection of names of stories. Every story's name is the link your can click to navigate to story.",source:"@site/docs/api/stories-sidebar.md",sourceDirName:"api",slug:"/api/stories-sidebar",permalink:"/docs/api/stories-sidebar",editUrl:"https://github.com/storiesjs/website/edit/main/docs/api/stories-sidebar.md",tags:[],version:"current",frontMatter:{title:"stories-sidebar",hide_table_of_contents:!0},sidebar:"api",previous:{title:"stories-searchbar",permalink:"/docs/api/stories-searchbar"},next:{title:"stories-split-pane",permalink:"/docs/api/stories-split-pane"}},j={},C=[],M={toc:C};function P(e){var t=e.components,n=(0,o.Z)(e,x);return(0,a.kt)("wrapper",(0,r.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The stories-sidebar displays collection of names of stories. Every story's name is the link your can click to navigate to story."),(0,a.kt)(u,{mdxType:"Props"}),(0,a.kt)(p,{mdxType:"Events"}),(0,a.kt)(d,{mdxType:"Methods"}),(0,a.kt)(y,{mdxType:"Parts"}),(0,a.kt)(g,{mdxType:"CustomProps"}),(0,a.kt)(O,{mdxType:"Slots"}))}P.isMDXComponent=!0}}]);