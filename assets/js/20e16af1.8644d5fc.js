"use strict";(self.webpackChunk_stories_js_website=self.webpackChunk_stories_js_website||[]).push([[649],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=d(n),c=a,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(7294);function a(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(7462),a=n(7294),o=n(2389),i=n(5979),l=n(6010),s="tabItem_LplD";function d(t){var e,n,o,d=t.lazy,u=t.block,p=t.defaultValue,m=t.values,c=t.groupId,f=t.className,g=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,i.lx)(k,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(e=null!=p?p:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(o=g[0])?void 0:o.props.value;if(null!==v&&!k.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),N=y.tabGroupChoices,h=y.setTabGroupChoices,x=(0,a.useState)(v),w=x[0],C=x[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var D=N[c];null!=D&&D!==w&&k.some((function(t){return t.value===D}))&&C(D)}var P=function(t){var e=t.currentTarget,n=T.indexOf(e),r=k[n].value;r!==w&&(O(e),C(r),null!=c&&h(c,r))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=T.indexOf(t.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(t.currentTarget)-1;n=T[a]||T[T.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},k.map((function(t){var e=t.value,n=t.label,o=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return T.push(t)},onKeyDown:E,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),d?(0,a.cloneElement)(g.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function u(t){var e=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},7471:function(t,e,n){n.r(e),n.d(e,{assets:function(){return P},contentTitle:function(){return O},default:function(){return j},frontMatter:function(){return T},metadata:function(){return D},toc:function(){return E}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),l={toc:[{value:"Properties",id:"properties",level:2},{value:"fixed",id:"fixed",level:3}]};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"fixed"},"fixed"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the grid will have a fixed width based on the screen size.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fixed"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))))}s.isMDXComponent=!0;var d=["components"],u={toc:[]};function p(t){var e=t.components,n=(0,a.Z)(t,d);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}))}p.isMDXComponent=!0;var m=["components"],c={toc:[]};function f(t){var e=t.components,n=(0,a.Z)(t,m);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}))}f.isMDXComponent=!0;var g=["components"],k={toc:[]};function b(t){var e=t.components,n=(0,a.Z)(t,g);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}))}b.isMDXComponent=!0;var v=["components"],y={toc:[{value:"CSS Custom Properties",id:"css-custom-properties",level:2}]};function N(t){var e=t.components,n=(0,a.Z)(t,v);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-padding")),(0,o.kt)("td",{parentName:"tr",align:null},"Padding for the Grid")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-padding-lg")),(0,o.kt)("td",{parentName:"tr",align:null},"Padding for the Grid on lg screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-padding-md")),(0,o.kt)("td",{parentName:"tr",align:null},"Padding for the Grid on md screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-padding-sm")),(0,o.kt)("td",{parentName:"tr",align:null},"Padding for the Grid on sm screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-padding-xl")),(0,o.kt)("td",{parentName:"tr",align:null},"Padding for the Grid on xl screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-padding-xs")),(0,o.kt)("td",{parentName:"tr",align:null},"Padding for the Grid on xs screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-width")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the fixed Grid")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-width-lg")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the fixed Grid on lg screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-width-md")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the fixed Grid on md screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-width-sm")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the fixed Grid on sm screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-width-xl")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the fixed Grid on xl screens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stories-grid-width-xs")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the fixed Grid on xs screens")))))}N.isMDXComponent=!0;var h=["components"],x={toc:[]};function w(t){var e=t.components,n=(0,a.Z)(t,h);return(0,o.kt)("wrapper",(0,r.Z)({},x,n,{components:e,mdxType:"MDXLayout"}))}w.isMDXComponent=!0;var C=["components"],T={title:"stories-grid",hide_table_of_contents:!0},O=void 0,D={unversionedId:"api/stories-grid",id:"api/stories-grid",title:"stories-grid",description:"The stories-grid is a container designed on mobile-first flexbox system for building custom layouts. A layout based on a 12 columns by default, but could be easily customized to any number via CSS customization. Columns will expand to fill the row, and will resize to fit additional columns.",source:"@site/docs/api/stories-grid.md",sourceDirName:"api",slug:"/api/stories-grid",permalink:"/docs/api/stories-grid",editUrl:"https://github.com/storiesjs/website/edit/main/docs/api/stories-grid.md",tags:[],version:"current",frontMatter:{title:"stories-grid",hide_table_of_contents:!0},sidebar:"api",previous:{title:"stories-footer",permalink:"/docs/api/stories-footer"},next:{title:"stories-icon",permalink:"/docs/api/stories-icon"}},P={},E=[],Z={toc:E};function j(t){var e=t.components,n=(0,a.Z)(t,C);return(0,o.kt)("wrapper",(0,r.Z)({},Z,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The stories-grid is a container designed on mobile-first flexbox system for building custom layouts. A layout based on a 12 columns by default, but could be easily customized to any number via CSS customization. Columns will expand to fill the row, and will resize to fit additional columns."),(0,o.kt)(s,{mdxType:"Props"}),(0,o.kt)(p,{mdxType:"Events"}),(0,o.kt)(f,{mdxType:"Methods"}),(0,o.kt)(b,{mdxType:"Parts"}),(0,o.kt)(N,{mdxType:"CustomProps"}),(0,o.kt)(w,{mdxType:"Slots"}))}j.isMDXComponent=!0}}]);