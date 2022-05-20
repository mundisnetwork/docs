"use strict";(self.webpackChunkmundis_docs=self.webpackChunkmundis_docs||[]).push([[586],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1614:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={title:"NFTs"},l=void 0,c={unversionedId:"multiverse/nft",id:"multiverse/nft",title:"NFTs",description:"In Mundis, Non-fungible assets (NFTs) have some important distinctions to fungible assets (tokens). They must be:",source:"@site/src/multiverse/nft.md",sourceDirName:"multiverse",slug:"/multiverse/nft",permalink:"/multiverse/nft",draft:!1,tags:[],version:"current",frontMatter:{title:"NFTs"},sidebar:"docs",previous:{title:"Access",permalink:"/multiverse/access"},next:{title:"Registration",permalink:"/rattle-shake/register"}},u={},p=[{value:"Standards",id:"standards",level:2},{value:"Transferability",id:"transferability",level:3},{value:"Payment Settlement &amp; Extension",id:"payment-settlement--extension",level:3},{value:"Expiration and Invalidation",id:"expiration-and-invalidation",level:3},{value:"Auctions",id:"auctions",level:2},{value:"Royalties",id:"royalties",level:2},{value:"Marketplace",id:"marketplace",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Mundis, Non-fungible assets (NFTs) have some important distinctions to fungible assets (tokens). They must be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unique"),": each NFT is uniquely identified by an L0/L1 address in Mundis and optionally an Anima storage hash for its resources. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ownable"),": an NFT can be owned by a single citizen. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Immutable"),": once issued, an NFT cannot be destroyed or altered. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transferrable"),": the ownership of an NFT can be transferred between citizens and an L1 chain. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Displayable"),": an NFT can be optionally displayed in Layer 2 if it's compatible. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Categorizable"),": NFTs must adhere to an ontology in Mundis (i.e., digital art, avatar, car, shoes, etc.) defined.")),(0,r.kt)("p",null,"Mundis NFTs builds and extends the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/"},"Metaplex Protocol")," to support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creating/minting NFTs"),(0,r.kt)("li",{parentName:"ul"},"auctions for primary/secondary sales"),(0,r.kt)("li",{parentName:"ul"},"visualizing NFTs in a standard way across wallets and applications"),(0,r.kt)("li",{parentName:"ul"},"creating storefronts"),(0,r.kt)("li",{parentName:"ul"},"royalties for collaborating on creating content")),(0,r.kt)("p",null,"The mission of Mundis is to standardize the NFT protocol to a greater extent, allowing anyone to easily mint, display and monetize their creations in the Multiverse and all associated Metaverses."),(0,r.kt)("h2",{id:"standards"},"Standards"),(0,r.kt)("p",null,"To accommodate many NFT use cases, Mundis implements the following types of NFTs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standard NFT"),": a normal NFT (like a Master NFT) that is a non-fungible token and associated metadata but lacks rights to print. It can be a one-of-a-kind artwork that when sold, is transferred from the artist's wallet to the purchaser's wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Master NFT"),": a non-fungible token and associated metadata that allows creators to control the provenance of prints created from the master NFT. Rights to create prints can be tokenized, the owner of the master NFT can distribute additional tokens to allow users to create prints. Additionally, the creator can set a max supply for the master NFT, just like a regular mint on Mundis, with the main difference being that each print is a numbered NFT created from it. A notable and desirable effect of master NFTs is that as prints are sold, the artwork will remain visible in the artist's wallet as a master NFT, while prints NFTs appear in the purchaser's wallets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Print NFT"),":  a copy of a master NFT. Each print has a number associated with it to uniquely identify it. Prints can be created as a part of an auction on the Mundis NFT Marketplace but can also be minted manually by the creator.")),(0,r.kt)("p",null,"Additional mechanisms for revocation, time, use, and data-based expiry, explosion, and selective/non-transferability are available in Mundis to support Metaverse use-cases like issuance, ownership, and management of programmatically governed tokens to facilitate rental agreements, loans, tickets, domain names, gaming items, certifications, credentials, badges, and much more. "),(0,r.kt)("h3",{id:"transferability"},"Transferability"),(0,r.kt)("p",null,"NFTs in Mundis support three degrees of transferability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frozen"),(0,r.kt)("li",{parentName:"ul"},"Permissioned transfer"),(0,r.kt)("li",{parentName:"ul"},"Permissionless transfer")),(0,r.kt)("p",null,"If the issuer chooses to make transferability permissioned, he must choose a transfer authority to approve transfers. A token holder can then only transfer ownership by invoking the transfer method which will require a signature from the transfer authority. If the token issuer choses to make the token freely transferable, a transfer authority is not required."),(0,r.kt)("p",null,"In all circumstances, a signature from the transfer receiver is required to correctly invoke the transfer mechanism. This is due to the fact that the transfer method reassigns ownership of the current owner's token account, which by default removes the current delegate. Before the token account is re-frozen, a signature from the new owner is necessary to reset the token manager as a delegate."),(0,r.kt)("h3",{id:"payment-settlement--extension"},"Payment Settlement & Extension"),(0,r.kt)("p",null,"NFT issuers can optionally chose to collect funds throughout a NFT lifecycle and then pay out these funds either upfront or upon invalidation. When choosing to accept funds, the issuer must specify the payment mint and add a paid-claim-approver with the amount specified to ensure it must be paid to claim the token."),(0,r.kt)("p",null,"It's also feasible to provide invalidators extensions so that they can accept payment and avoid invalidation. It is up to the issuer to use a payment-accepting invalidator and then establish an extension price within it. Allowing the invalidator to be extended proportionally to the initial payment and length is an example extension schema."),(0,r.kt)("h3",{id:"expiration-and-invalidation"},"Expiration and Invalidation"),(0,r.kt)("p",null,"When constructing a token-manager, one or more invalidators might be assigned as the only public keys that can perform an invalidation. A permissionless call can invalidate the token in the case of time or usage-based invalidation. After that, all appropriate payments are made, and the product's lifecycle is complete."),(0,r.kt)("p",null,"Mundis has the following built-in invalidation mechanisms:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Time: the issuer can set a duration at issuance or claiming. The token can be invalidated after the expiration date."),(0,r.kt)("li",{parentName:"ol"},"Usage: the issuer can set a maximum number of usages. Token holders declare usages by signing transactions. If the number of usages exceeds the set maximum usages, the token can be invalidated."),(0,r.kt)("li",{parentName:"ol"},"Manual revocation: the issuer can specify a revoke authority that can invalidate the certificate anytime.")),(0,r.kt)("p",null,"Mundis also supports different invalidation types. These specify what happens with the token after an invalidation took place:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Return: after invalidation, the token will be returned to the issuer"),(0,r.kt)("li",{parentName:"ol"},"Invalidate: after invalidation, the token will remain marked as invalid and can no longer be used"),(0,r.kt)("li",{parentName:"ol"},"Release: after invalidation the token-manager will be deleted and tokens are released")),(0,r.kt)("h2",{id:"auctions"},"Auctions"),(0,r.kt)("p",null,"The NFT marketplace will supports four types of auctions derived from English auctions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Single Item"),": can be used to sell Standard NFTs and re-sell Print NFTs, as well as the sale of Master NFTs themselves (and the associated printing rights) if the artist so wishes."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open Auction"),': requires the offering of a Master NFT that specifically has no fixed supply. The auction will only create Print NFTs for bidders. Each bidder is guaranteed to get a unique print. (there are no "winners" in this type of auction). An open auction can:',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"have a pre-set fixed price"),(0,r.kt)("li",{parentName:"ol"},"have the bid price set to the last offer "),(0,r.kt)("li",{parentName:"ol"},"have no price (be free)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Limited Auction"),": a Master NFT may be provided to the auction with a number of copies that represent the number of winner places. For each winner, a Print NFT will be minted and awarded to the winning bidder of that place. For example, the first-place winner will win Print #1; the second-place winner Print #2, etc."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Tiered Auction"),": a mix of the previous auction types as winning placements. For instance, the first-place winner could win a Print of Limited Edition NFT A, while the second-place winner could win a Standard NFT, etc. In addition, participants who did not win could get a Participation Print NFT from the Master NFT.")),(0,r.kt)("h2",{id:"royalties"},"Royalties"),(0,r.kt)("p",null,"Each NFT can be minted with configurable royalty payments that are then sent automatically back to the original creators whenever an artwork is resold on the NFT marketplace in the future."),(0,r.kt)("h2",{id:"marketplace"},"Marketplace"),(0,r.kt)("p",null,"Creators can sell their content as NFTs in the NFT marketplace. The Marketplace will be available in The Construct and as a dApp accessible through any internet browser. NFT sellers have the option to receive payment for their creations in any supported Mundis token."))}m.isMDXComponent=!0}}]);