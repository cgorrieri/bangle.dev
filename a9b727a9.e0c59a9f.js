(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(155)),b={title:"@bangle.dev/text-formatting",sidebar_label:"@bangle.dev/text-formatting",packageName:"@bangle.dev/text-formatting",id:"text_formatting"},o={unversionedId:"api/text_formatting",id:"api/text_formatting",isDocsHomePage:!1,title:"@bangle.dev/text-formatting",description:"contrib",source:"@site/docs/api/text_formatting.md",slug:"/api/text_formatting",permalink:"/docs/api/text_formatting",editUrl:"https://github.com/bangle-io/bangle.dev/edit/master/_bangle-website/docs/api/text_formatting.md",version:"current",sidebar_label:"@bangle.dev/text-formatting",sidebar:"docs",previous:{title:"@bangle.dev/react-menu",permalink:"/docs/api/react_menu"},next:{title:"@bangle.dev/collab-client",permalink:"/docs/api/collab_client"}},p=[{value:"subscript: Component",id:"subscript-component",children:[]},{value:"superscript: Component",id:"superscript-component",children:[]}],i={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"contrib")),Object(c.b)("p",null,"Provides more text formatting components on top of the ones provides by ",Object(c.b)("inlineCode",{parentName:"p"},"@bangle.dev/core"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"# peer deps\nnpm install @bangle.dev/core\nnpm install @bangle.dev/text-formatting\n")),Object(c.b)("h3",{id:"subscript-component"},"subscript: ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/docs/api/core/#component"}),"Component")),Object(c.b)("p",null,"Allows text to marked as ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub"}),"subscript"),". ",Object(c.b)("strong",{parentName:"p"},"Note"),": Expects a spec named ",Object(c.b)("inlineCode",{parentName:"p"},"superscript")," to exist, you should either use it with provided ",Object(c.b)("inlineCode",{parentName:"p"},"superscript")," component or create one of yours."),Object(c.b)("h4",{id:"spec-markspec"},"spec(): ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#spec"}),"MarkSpec")),Object(c.b)("h4",{id:"plugins---plugins"},"plugins({ ... }): ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#plugins"}),"Plugins")),Object(c.b)("p",null,"Named parameters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"keybindings"),": ?",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/core/#keybindingsobject"}),"KeybindingsObject"),"=","defaultKeys",Object(c.b)("br",{parentName:"li"}),"For a list of allowed keys see ",Object(c.b)("strong",{parentName:"li"},"defaultKeys")," below.")),Object(c.b)("h4",{id:"defaultkeys-keybindingsobject"},"defaultKeys: ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#keybindingsobject"}),"KeybindingsObject")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"toggleSubscript")," = ",Object(c.b)("inlineCode",{parentName:"li"},"null"),": toggle subscript, disabled by default.")),Object(c.b)("h4",{id:"commands-commandobject"},"commands: ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#commandobject"}),"CommandObject")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"toggleSubscript"),"(): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/core/#command"}),"Command"),Object(c.b)("br",{parentName:"p"}),"\n","Toggles subscript mark.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"queryIsSubscriptActive"),"(): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#querycommand"}),"QueryCommand"),"<","boolean",">",Object(c.b)("br",{parentName:"p"}),"\n","Query if the selection is inside a subscript mark or not."))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage")),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/examples/text-formatting#superscript--subscript"}),"example"),"."),Object(c.b)("h3",{id:"superscript-component"},"superscript: ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/docs/api/core/#component"}),"Component")),Object(c.b)("p",null,"Allows text to marked as ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/super"}),"superscript"),". ",Object(c.b)("strong",{parentName:"p"},"Note"),": Expects a spec named ",Object(c.b)("inlineCode",{parentName:"p"},"subscript")," to exist, you should either use it with provided ",Object(c.b)("inlineCode",{parentName:"p"},"subscript")," component or create one of yours."),Object(c.b)("h4",{id:"spec-markspec-1"},"spec(): ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#spec"}),"MarkSpec")),Object(c.b)("h4",{id:"plugins---plugins-1"},"plugins({ ... }): ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#plugins"}),"Plugins")),Object(c.b)("p",null,"Named parameters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"keybindings"),": ?",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/core/#keybindingsobject"}),"KeybindingsObject"),"=","defaultKeys",Object(c.b)("br",{parentName:"li"}),"For a list of allowed keys see ",Object(c.b)("strong",{parentName:"li"},"defaultKeys")," below.")),Object(c.b)("h4",{id:"defaultkeys-keybindingsobject-1"},"defaultKeys: ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#keybindingsobject"}),"KeybindingsObject")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"toggleSuperscript")," = ",Object(c.b)("inlineCode",{parentName:"li"},"null"),": toggle superscript, disabled by default.")),Object(c.b)("h4",{id:"commands-commandobject-1"},"commands: ",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/api/core/#commandobject"}),"CommandObject")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"toggleSuperscript"),"(): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/core/#command"}),"Command"),Object(c.b)("br",{parentName:"p"}),"\n","Toggles superscript mark.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"queryIsSuperscriptActive"),"(): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#querycommand"}),"QueryCommand"),"<","boolean",">",Object(c.b)("br",{parentName:"p"}),"\n","Query if the selection is inside a superscript mark or not."))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage")),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/examples/text-formatting#superscript--subscript"}),"example"),"."))}s.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=s(n),u=r,d=l["".concat(b,".").concat(u)]||l[u]||m[u]||c;return n?a.a.createElement(d,o(o({ref:t},i),{},{components:n})):a.a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var i=2;i<c;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);