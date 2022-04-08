"use strict";(self.webpackChunk_stories_js_website=self.webpackChunk_stories_js_website||[]).push([[9963],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),o=n(7294),a=n(2389),l=n(5979),i=n(6010),u="tabItem_LplD";function s(e){var t,n,a,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),g=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,o.useState)(h),T=N[0],x=N[1],O=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==T&&v.some((function(e){return e.value===E}))&&x(E)}var Z=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==T&&(D(t),x(r),null!=d&&w(d,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:Z,onClick:Z},a,{className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,a.Z)();return o.createElement(s,(0,r.Z)({key:String(t)},e))}},9932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return Z},contentTitle:function(){return D},default:function(){return P},frontMatter:function(){return O},metadata:function(){return E},toc:function(){return j}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=(n(9877),n(8215),["components"]),i={toc:[{value:"Properties",id:"properties",level:2},{value:"collapse",id:"collapse",level:3}]};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"collapse"},"collapse"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"If true, buttons will disappear when its",(0,a.kt)("br",null),"parent toolbar has fully collapsed if the toolbar",(0,a.kt)("br",null),"is not the first toolbar. If the toolbar is the",(0,a.kt)("br",null),"first toolbar, the buttons will be hidden and will",(0,a.kt)("br",null),"only be shown once all toolbars have fully collapsed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"collapse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))))}u.isMDXComponent=!0;var s=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}))}c.isMDXComponent=!0;var m=["components"],d={toc:[]};function f(e){var t=e.components,n=(0,o.Z)(e,m);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0;var b=["components"],v={toc:[]};function y(e){var t=e.components,n=(0,o.Z)(e,b);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0;var h=["components"],k={toc:[]};function g(e){var t=e.components,n=(0,o.Z)(e,h);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0;var w=["components"],N={toc:[]};function T(e){var t=e.components,n=(0,o.Z)(e,w);return(0,a.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}))}T.isMDXComponent=!0;var x=["components"],O={title:"stories-buttons",hide_table_of_contents:!0},D=void 0,E={unversionedId:"api/stories-buttons",id:"api/stories-buttons",title:"stories-buttons",description:"The stories-buttons is an wrapping container for another buttons.",source:"@site/docs/api/stories-buttons.md",sourceDirName:"api",slug:"/api/stories-buttons",permalink:"/docs/api/stories-buttons",editUrl:"https://github.com/storiesjs/website/edit/main/docs/api/stories-buttons.md",tags:[],version:"current",frontMatter:{title:"stories-buttons",hide_table_of_contents:!0},sidebar:"api",previous:{title:"stories-button",permalink:"/docs/api/stories-button"},next:{title:"stories-checkbox",permalink:"/docs/api/stories-checkbox"}},Z={},j=[],C={toc:j};function P(e){var t=e.components,n=(0,o.Z)(e,x);return(0,a.kt)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The stories-buttons is an wrapping container for another buttons."),(0,a.kt)(u,{mdxType:"Props"}),(0,a.kt)(c,{mdxType:"Events"}),(0,a.kt)(f,{mdxType:"Methods"}),(0,a.kt)(y,{mdxType:"Parts"}),(0,a.kt)(g,{mdxType:"CustomProps"}),(0,a.kt)(T,{mdxType:"Slots"}))}P.isMDXComponent=!0}}]);