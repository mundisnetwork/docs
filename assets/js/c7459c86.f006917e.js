"use strict";(self.webpackChunkmundis_docs=self.webpackChunkmundis_docs||[]).push([[981],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4454:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={title:"Security"},s=void 0,u={unversionedId:"backbone/security",id:"backbone/security",title:"Security",description:"Mundis is a bridging protocol where each L1 chain is sovereign and must maintain its own validator set and economic security. Since L1 chains are sovereign, the L0 chain is protected from L1 chain attacks.",source:"@site/src/backbone/security.md",sourceDirName:"backbone",slug:"/backbone/security",permalink:"/backbone/security",draft:!1,tags:[],version:"current",frontMatter:{title:"Security"},sidebar:"docs",previous:{title:"Global Services",permalink:"/backbone/services"},next:{title:"Layer 2",permalink:"/multiverse/layer2"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mundis is a bridging protocol where each L1 chain is sovereign and must maintain its own validator set and economic security. Since L1 chains are sovereign, the L0 chain is protected from L1 chain attacks. "),(0,a.kt)("p",null,"L0 and L1 chains assume a byzantine adversarial model, where a minimum of ",(0,a.kt)("em",{parentName:"p"},"2*n/3+1")," Architects must be honest. Mundis uses a pBFT variant where the global timeline is used as a time source, reducing pBFT-specific messaging overhead and latency. If ",(0,a.kt)("em",{parentName:"p"},"2*n/3+1")," Architects are honest or haven't been compromised, Mundis can achieve secure consensus."),(0,a.kt)("p",null,"The L0 event timeline also records L1 block headers and basic Markle proofs needed for inter-L1 asset transfers. The timeline acts as an audit and additional verification mechanism for L1 chains. An L1 inter-chain transfer is secured by the ordered source and destination chain. Merkle proofs stored in the timeline that allows both ends of a transfer to be ordered and individually verifiable on each L1 chain."))}f.isMDXComponent=!0}}]);