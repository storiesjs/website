"use strict";(self.webpackChunk_stories_js_website=self.webpackChunk_stories_js_website||[]).push([[4101],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(b,l(l({ref:e},p),{},{components:n})):r.createElement(b,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(7294);function a(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(2389),l=n(5979),i=n(6010),s="tabItem_LplD";function u(t){var e,n,o,u=t.lazy,p=t.block,c=t.defaultValue,m=t.values,d=t.groupId,b=t.className,f=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,l.lx)(k,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(e=null!=c?c:null==(n=f.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(o=f[0])?void 0:o.props.value;if(null!==N&&!k.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),h=y.tabGroupChoices,g=y.setTabGroupChoices,C=(0,a.useState)(N),T=C[0],w=C[1],D=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=h[d];null!=x&&x!==T&&k.some((function(t){return t.value===x}))&&w(x)}var E=function(t){var e=t.currentTarget,n=D.indexOf(e),r=k[n].value;r!==T&&(O(e),w(r),null!=d&&g(d,r))},P=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=D.indexOf(t.currentTarget)+1;n=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(t.currentTarget)-1;n=D[a]||D[D.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},k.map((function(t){var e=t.value,n=t.label,o=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return D.push(t)},onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===e})}),null!=n?n:e)}))),u?(0,a.cloneElement)(f.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function p(t){var e=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(e)},t))}},3440:function(t,e,n){n.r(e),n.d(e,{assets:function(){return E},contentTitle:function(){return O},default:function(){return j},frontMatter:function(){return D},metadata:function(){return x},toc:function(){return P}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=(n(9877),n(8215),["components"]),i={toc:[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"selectedTab",id:"selectedtab",level:3}]};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,o.kt)("br",null),"Default options are: ",(0,o.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,o.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,o.kt)("br",null),"For more information on colors, see ",(0,o.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"selectedtab"},"selectedTab"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The selected tab component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"selected-tab"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0;var u=["components"],p={toc:[]};function c(t){var e=t.components,n=(0,a.Z)(t,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}))}c.isMDXComponent=!0;var m=["components"],d={toc:[]};function b(t){var e=t.components,n=(0,a.Z)(t,m);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}))}b.isMDXComponent=!0;var f=["components"],k={toc:[]};function v(t){var e=t.components,n=(0,a.Z)(t,f);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}))}v.isMDXComponent=!0;var N=["components"],y={toc:[{value:"CSS Custom Properties",id:"css-custom-properties",level:2}]};function h(t){var e=t.components,n=(0,a.Z)(t,N);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the tab bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--border")),(0,o.kt)("td",{parentName:"tr",align:null},"Border of the tab bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the tab bar")))))}h.isMDXComponent=!0;var g=["components"],C={toc:[]};function T(t){var e=t.components,n=(0,a.Z)(t,g);return(0,o.kt)("wrapper",(0,r.Z)({},C,n,{components:e,mdxType:"MDXLayout"}))}T.isMDXComponent=!0;var w=["components"],D={title:"stories-tab-bar",hide_table_of_contents:!0},O=void 0,x={unversionedId:"api/stories-tab-bar",id:"api/stories-tab-bar",title:"stories-tab-bar",description:"The stories-tab-bar is a component that contains a set of stories-tab-button's. Put the stories-tab-bar in the stories-tabs to organize communication with every stories-tab.",source:"@site/docs/api/stories-tab-bar.md",sourceDirName:"api",slug:"/api/stories-tab-bar",permalink:"/docs/api/stories-tab-bar",editUrl:"https://github.com/storiesjs/website/edit/main/docs/api/stories-tab-bar.md",tags:[],version:"current",frontMatter:{title:"stories-tab-bar",hide_table_of_contents:!0},sidebar:"api",previous:{title:"stories-split-pane",permalink:"/docs/api/stories-split-pane"},next:{title:"stories-tab-button",permalink:"/docs/api/stories-tab-button"}},E={},P=[],Z={toc:P};function j(t){var e=t.components,n=(0,a.Z)(t,w);return(0,o.kt)("wrapper",(0,r.Z)({},Z,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The stories-tab-bar is a component that contains a set of ",(0,o.kt)("a",{parentName:"p",href:"../tab-button"},"stories-tab-button's"),". Put the stories-tab-bar in the ",(0,o.kt)("a",{parentName:"p",href:"../tabs"},"stories-tabs")," to organize communication with every ",(0,o.kt)("a",{parentName:"p",href:"../tab"},"stories-tab"),"."),(0,o.kt)(s,{mdxType:"Props"}),(0,o.kt)(c,{mdxType:"Events"}),(0,o.kt)(b,{mdxType:"Methods"}),(0,o.kt)(v,{mdxType:"Parts"}),(0,o.kt)(h,{mdxType:"CustomProps"}),(0,o.kt)(T,{mdxType:"Slots"}))}j.isMDXComponent=!0}}]);