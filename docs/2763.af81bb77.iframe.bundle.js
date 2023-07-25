"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2763],{"../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(D,E,s)=>{s.d(E,{Z:()=>d});var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),i=s.n(c),r=s("../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),l=s("../../../node_modules/.pnpm/@wordpress+deprecated@3.37.0/node_modules/@wordpress/deprecated/build-module/index.js"),f=s("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),C=s("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js"),p=s("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function S(o,g){const[w,A]=(0,t.useState)(o);return[w,O=>{A(O),g&&g(O)}]}const e=(o,g)=>{const{renderContent:w,renderToggle:A,className:O,contentClassName:X,expandOnMobile:a,headerTitle:u,focusOnMount:h,popoverProps:m,onClose:b,onToggle:x,style:I,position:N,variant:B}=(0,f.y)(o,"Dropdown");N!==void 0&&(0,l.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[U,y]=(0,t.useState)(null),P=(0,t.useRef)(),[T,R]=S(!1,x);(0,t.useEffect)(()=>()=>{x&&T&&x(!1)},[x,T]);function M(){R(!T)}function _(){var W;if(!P.current)return;const{ownerDocument:V}=P.current,z=(W=V==null?void 0:V.activeElement)==null?void 0:W.closest('[role="dialog"]');!P.current.contains(V.activeElement)&&(!z||z.contains(P.current))&&j()}function j(){b&&b(),R(!1)}const v={isOpen:T,onToggle:M,onClose:j},L=!!(m!=null&&m.anchor)||!!(m!=null&&m.anchorRef)||!!(m!=null&&m.getAnchorRect)||!!(m!=null&&m.anchorRect);return(0,t.createElement)("div",{className:O,ref:(0,r.Z)([P,g,y]),tabIndex:-1,style:I},A(v),T&&(0,t.createElement)(p.ZP,{position:N,onClose:j,onFocusOutside:_,expandOnMobile:a,headerTitle:u,focusOnMount:h,offset:13,anchor:L?void 0:U,variant:B,...m,className:i()("components-dropdown__content",m==null?void 0:m.className,X)},w(v)))},d=(0,C.Iq)(e,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/download.js":(D,E,s)=>{s.d(E,{Z:()=>r});var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,t.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(D,E,s)=>{s.d(E,{Z:()=>r});var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("../../../node_modules/.pnpm/@wordpress+primitives@3.35.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const r=(0,t.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../analytics/index.jsx":(D,E,s)=>{s.d(E,{Z:()=>S});var t=s("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),c=s.n(t);const i=c()("dops:analytics");let r,l;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function f(e,n){let d="";if(typeof e=="object"){for(const o in e)d+="&x_"+encodeURIComponent(o)+"="+encodeURIComponent(e[o]);i("Bumping stats %o",e)}else d="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(n),i('Bumping stat "%s" in group "%s"',n,e);return d}function C(e,n){let d="";if(typeof e=="object"){for(const o in e)d+="&"+encodeURIComponent(o)+"="+encodeURIComponent(e[o]);i("Built stats %o",e)}else d="&"+encodeURIComponent(e)+"="+encodeURIComponent(n),i('Built stat "%s" in group "%s"',n,e);return d}const p={initialize:function(e,n,d){p.setUser(e,n),p.setSuperProps(d),p.identifyUser()},setGoogleAnalyticsEnabled:function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=n},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,n){l={ID:e,username:n}},setSuperProps:function(e){r=e},assignSuperProps:function(e){r=Object.assign(r||{},e)},mc:{bumpStat:function(e,n){const d=f(e,n);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+d+"&t="+Math.random())},bumpStatWithPageView:function(e,n){const d=C(e,n);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+d+"&t="+Math.random())}},pageView:{record:function(e,n){p.tracks.recordPageView(e),p.ga.recordPageView(e,n)}},purchase:{record:function(e,n,d,o,g,w,A){p.ga.recordPurchase(e,n,d,o,g,w,A)}},tracks:{recordEvent:function(e,n){if(n=n||{},e.indexOf("akismet_")!==0&&e.indexOf("jetpack_")!==0){i('- Event name must be prefixed by "akismet_" or "jetpack_"');return}r&&(i("- Super Props: %o",r),n=Object.assign(n,r)),i('Record event "%s" called with props %s',e,JSON.stringify(n)),window._tkq.push(["recordEvent",e,n])},recordJetpackClick:function(e){const n=typeof e=="object"?e:{target:e};p.tracks.recordEvent("jetpack_wpa_click",n)},recordPageView:function(e){p.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){i("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};p.ga.initialized||(l&&(e={userId:"u-"+l.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),p.ga.initialized=!0)},recordPageView:function(e,n){p.ga.initialize(),i("Recording Page View ~ [URL: "+e+"] [Title: "+n+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:n}))},recordEvent:function(e,n,d,o){p.ga.initialize();let g="Recording Event ~ [Category: "+e+"] [Action: "+n+"]";typeof d!="undefined"&&(g+=" [Option Label: "+d+"]"),typeof o!="undefined"&&(g+=" [Option Value: "+o+"]"),i(g),this.googleAnalyticsEnabled&&window.ga("send","event",e,n,d,o)},recordPurchase:function(e,n,d,o,g,w,A){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:o,currency:A}),window.ga("ecommerce:addItem",{id:e,name:n,sku:d,price:g,quantity:w}),window.ga("ecommerce:send")}},identifyUser:function(){l&&window._tkq.push(["identifyUser",l.ID,l.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},S=p},"../components/components/button/index.tsx":(D,E,s)=>{s.d(E,{Z:()=>A});var t=s("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),c=s("../../../node_modules/.pnpm/@wordpress+components@25.3.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js"),i=s("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/icon/index.js"),r=s("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/external.js"),l=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),f=s.n(l),C=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=s.n(p),e=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss"),n={};n.insert="head",n.singleton=!1;var d=S()(e.Z,n);const o=e.Z.locals||{};var g=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const w=(0,C.forwardRef)((O,X)=>{var V,z;const{children:a,variant:u="primary",size:h="normal",weight:m="bold",icon:b,iconSize:x,disabled:I,isDestructive:N,isLoading:B,isExternalLink:U,className:y,text:P,fullWidth:T,...R}=O,M=f()(o.button,y,{[o.normal]:h==="normal",[o.small]:h==="small",[o.icon]:!!b,[o.loading]:B,[o.regular]:m==="regular",[o["full-width"]]:T,[o["is-icon-button"]]:!!b&&!a});R.ref=X;const _=h==="normal"?20:16,j=U&&(0,g.jsx)(i.Z,{size:_,icon:r.Z,className:o["external-icon"]}),v=U?"_blank":void 0,L=(a==null?void 0:a[0])&&a[0]!==null&&((z=(V=a==null?void 0:a[0])==null?void 0:V.props)==null?void 0:z.className)!=="components-tooltip";return(0,g.jsxs)(t.ZP,{target:v,variant:u,className:f()(M,{"has-text":!!b&&L}),icon:U?void 0:b,iconSize:x,disabled:I,"aria-disabled":I,isDestructive:N,text:P,...R,children:[B&&(0,g.jsx)(c.ZP,{}),(0,g.jsx)("span",{children:a}),j]})});w.displayName="Button";const A=w;try{w.displayName="Button",w.__docgenInfo={description:"Button component",displayName:"Button",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/button/index.tsx#Button"]={docgenInfo:w.__docgenInfo,name:"Button",path:"../components/components/button/index.tsx#Button"})}catch(O){}},"../../packages/my-jetpack/_inc/components/product-card/index.jsx":(D,E,s)=>{s.d(E,{Z:()=>I});var t=s("../components/components/button/index.tsx"),c=s("../components/components/text/index.tsx"),i=s("../../../node_modules/.pnpm/@wordpress+components@25.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),r=s("../../../node_modules/.pnpm/@wordpress+i18n@4.37.0/node_modules/@wordpress/i18n/build-module/index.js"),l=s("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),f=s("../../../node_modules/.pnpm/@wordpress+icons@9.28.0/node_modules/@wordpress/icons/build-module/library/download.js"),C=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),p=s.n(C),S=s("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),e=s.n(S),n=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=s("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),o=s("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),g=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=s.n(g),A=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),O={};O.insert="head",O.singleton=!1;var X=w()(A.Z,O);const a=A.Z.locals||{};var u=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const h=r.__,m={[o.N.ACTIVE]:h("Active","jetpack-my-jetpack"),[o.N.INACTIVE]:h("Inactive","jetpack-my-jetpack"),[o.N.NEEDS_PURCHASE]:h("Inactive","jetpack-my-jetpack"),[o.N.NEEDS_PURCHASE_OR_FREE]:h("Inactive","jetpack-my-jetpack"),[o.N.ERROR]:h("Error","jetpack-my-jetpack")},b=N=>{let{items:B=[],showInstall:U=!1,onInstall:y,showActivate:P=!1,showDeactivate:T=!1,onActivate:R,onDeactivate:M}=N;return(0,u.jsx)(i.Z,{className:a.dropdown,popoverProps:{noArrow:!1,placement:"bottom-end"},renderToggle:_=>{let{isOpen:j,onToggle:v}=_;return(0,u.jsx)(t.Z,{variant:"tertiary",size:"small",icon:l.Z,onClick:v,"aria-expanded":j})},renderContent:_=>{let{onClose:j}=_;return(0,u.jsxs)(u.Fragment,{children:[B.map(v=>(0,u.jsx)(t.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:v==null?void 0:v.icon,onClick:()=>{var L;j(),(L=v==null?void 0:v.onClick)==null||L.call(v)},children:v==null?void 0:v.label})),U&&(0,u.jsx)(t.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:f.Z,onClick:()=>{j(),y==null||y()},children:h("Install Plugin","jetpack-my-jetpack")}),P&&(0,u.jsx)(t.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",onClick:()=>{j(),R==null||R()},children:h("Activate Plugin","jetpack-my-jetpack")}),T&&(0,u.jsx)(t.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",onClick:()=>{j(),M==null||M()},children:h("Deactivate Plugin","jetpack-my-jetpack")})]})}})};b.displayName="Menu",b.propTypes={onActivate:e().func,onDeactivate:e().func,showActivate:e().bool,showDeactivate:e().bool,showInstall:e().bool,items:e().arrayOf(e().shape({label:e().string,icon:e().node,onClick:e().func})),onInstall:e().func},b.defaultProps={onActivate:()=>{},onDeactivate:()=>{},showActivate:!1,showDeactivate:!1};const x=N=>{const{name:B,description:U,status:y,onActivate:P,isFetching:T,isInstallingStandalone:R,isDeactivatingStandalone:M,slug:_,children:j,showMenu:v=!1,showActivateOption:L=!1,showDeactivateOption:V=!1,showInstallOption:z=!1,menuItems:W=[],onInstallStandalone:F,onActivateStandalone:K,onDeactivateStandalone:G}=N,q=y===o.N.ACTIVE,H=y===o.N.ERROR,Q=y===o.N.INACTIVE,Z=y===o.N.ABSENT||y===o.N.ABSENT_WITH_PLAN,J=y===o.N.NEEDS_PURCHASE||y===o.N.NEEDS_PURCHASE_OR_FREE,Y=m[y],$=p()(a.container,{[a.plugin_absent]:Z,[a["is-purchase-required"]]:J,[a["is-link"]]:Z,[a["has-error"]]:H}),ee=p()(a.status,{[a.active]:q,[a.inactive]:Q||J,[a.error]:H,[a["is-fetching"]]:T||R||M}),{recordEvent:k}=(0,d.Z)(),se=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_activate_click",{product:_}),P()},[_,P,k]),ne=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_add_click",{product:_})},[_,k]),oe=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_manage_click",{product:_})},[_,k]),te=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_fixconnection_click",{product:_})},[_,k]),ae=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_install_standalone_plugin_click",{product:_}),F()},[_,F,k]),de=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_activate_standalone_plugin_click",{product:_}),K()},[_,K,k]),ie=(0,n.useCallback)(()=>{k("jetpack_myjetpack_product_card_deactivate_standalone_plugin_click",{product:_}),G()},[_,G,k]);return(0,u.jsxs)("div",{className:$,children:[(0,u.jsxs)("div",{className:a.title,children:[(0,u.jsx)("div",{className:a.name,children:(0,u.jsx)(c.ZP,{variant:"title-medium",children:B})}),v&&(0,u.jsx)(b,{items:W,showActivate:L,showDeactivate:V,onActivate:de,onDeactivate:ie,showInstall:z,onInstall:ae})]}),q&&j?j:(0,u.jsx)(c.ZP,{variant:"body-small",className:a.description,children:U}),(0,u.jsxs)("div",{className:a.actions,children:[(0,u.jsx)(o.Z,{...N,onActivate:se,onFixConnection:te,onManage:oe,onAdd:ne,className:a.button}),!Z&&(0,u.jsx)(c.ZP,{variant:"label",className:ee,children:Y})]})]})};x.displayName="ProductCard",x.propTypes={children:e().node,name:e().string.isRequired,description:e().string.isRequired,admin:e().bool.isRequired,isFetching:e().bool,isInstallingStandalone:e().bool,isDeactivatingStandalone:e().bool,isManageDisabled:e().bool,onActivate:e().func,slug:e().string.isRequired,showMenu:e().bool,showActivateOption:e().bool,showDeactivateOption:e().bool,showInstallOption:e().bool,menuItems:e().arrayOf(e().shape({label:e().string,icon:e().node,onClick:e().func})),onInstallStandalone:e().func,onActivateStandalone:e().func,onDeactivateStandalone:e().func,status:e().oneOf([o.N.ACTIVE,o.N.INACTIVE,o.N.ERROR,o.N.ABSENT,o.N.ABSENT_WITH_PLAN,o.N.NEEDS_PURCHASE,o.N.NEEDS_PURCHASE_OR_FREE]).isRequired},x.defaultProps={isFetching:!1,isInstallingStandalone:!1,isDeactivatingStandalone:!1,onActivate:()=>{},showMenu:!1,showActivateOption:!1,showDeactivateOption:!1,showInstallOption:!1,menuItems:[]},x.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{isFetching:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isInstallingStandalone:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isDeactivatingStandalone:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onActivate:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},showMenu:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showActivateOption:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showDeactivateOption:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showInstallOption:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},icon:{name:"node",required:!1},onClick:{name:"func",required:!1}}}},required:!1},children:{description:"",type:{name:"node"},required:!1},name:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!0},admin:{description:"",type:{name:"bool"},required:!0},isManageDisabled:{description:"",type:{name:"bool"},required:!1},slug:{description:"",type:{name:"string"},required:!0},onInstallStandalone:{description:"",type:{name:"func"},required:!1},onActivateStandalone:{description:"",type:{name:"func"},required:!1},onDeactivateStandalone:{description:"",type:{name:"func"},required:!1},status:{description:"",type:{name:"enum",value:[{value:"PRODUCT_STATUSES.ACTIVE",computed:!0},{value:"PRODUCT_STATUSES.INACTIVE",computed:!0},{value:"PRODUCT_STATUSES.ERROR",computed:!0},{value:"PRODUCT_STATUSES.ABSENT",computed:!0},{value:"PRODUCT_STATUSES.ABSENT_WITH_PLAN",computed:!0},{value:"PRODUCT_STATUSES.NEEDS_PURCHASE",computed:!0},{value:"PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE",computed:!0}]},required:!0}}};const I=x},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(D,E,s)=>{s.d(E,{Z:()=>l});var t=s("../analytics/index.jsx"),c=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=s("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const l=()=>{var m;const{isUserConnected:f,connectedPlugins:C,userConnectionData:p={}}=(0,i.Z)(),{login:S,ID:e}=((m=p.currentUser)==null?void 0:m.wpcomUser)||{};(0,c.useEffect)(()=>{f&&e&&S&&t.Z.initialize(e,S)},[e,f,S]);const n=Object.keys(C||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:d,ga:o,mc:g,pageView:w,purchase:A,setGoogleAnalyticsEnabled:O,setMcAnalyticsEnabled:X,setProperties:a,tracks:u}=t.Z,h=(0,c.useCallback)((b,x)=>{var I;u.recordEvent(b,{...x,version:(I=window==null?void 0:window.myJetpackInitialState)==null?void 0:I.myJetpackVersion,referring_plugins:n})},[]);return{clearedIdentity:d,ga:o,mc:g,pageView:w,purchase:A,recordEvent:h,setGoogleAnalyticsEnabled:O,setMcAnalyticsEnabled:X,setProperties:a,tracks:u}}},"../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js":(D,E,s)=>{s.d(E,{Z:()=>c});var t=s("../connection/components/use-connection/index.jsx");function c(){const{apiRoot:i,apiNonce:r}=myJetpackRest,{topJetpackMenuItemUrl:l}=myJetpackInitialState,f=(0,t.Z)({apiRoot:i,apiNonce:r}),C=f.isRegistered;return{apiNonce:r,apiRoot:i,...f,isSiteConnected:C,topJetpackMenuItemUrl:l}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/button/style.module.scss":(D,E,s)=>{s.d(E,{Z:()=>f});var t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(t),i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(i),l=r()(c());l.push([D.id,".zOVExsGAtu3qEPXi90gA{--wp-admin-theme-color: var(--jp-black);--wp-admin-theme-color-darker-10: var(--jp-black-80);--wp-admin-theme-color-darker-20: var(--jp-black-80);--wp-admin-border-width-focus: 1.51px;border-radius:var(--jp-border-radius);justify-content:center;font-weight:600}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6{padding:var(--spacing-base);width:calc(var(--spacing-base)*5);height:calc(var(--spacing-base)*5)}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6>svg:first-child{margin:0;padding:0}.zOVExsGAtu3qEPXi90gA.LeZ9swgay3_IutOEDvA6.hLhkVRHwk8NBz5iEbJRi{padding:calc(var(--spacing-base)/2);width:calc(var(--spacing-base)*4);min-width:calc(var(--spacing-base)*4);height:calc(var(--spacing-base)*4)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body);line-height:24px;padding:var(--spacing-base) calc(var(--spacing-base)*3)}.zOVExsGAtu3qEPXi90gA.EDZJbVaYCITE2Rfk7M9w:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw{padding:var(--spacing-base) calc(var(--spacing-base)*2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6){height:auto;font-size:var(--font-body-extra-small);line-height:20px;padding:calc(var(--spacing-base)/2) var(--spacing-base)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6).nJ9PKanHLfnJSPjoI1Cw>svg:first-child{margin-right:calc(var(--spacing-base)/2)}.zOVExsGAtu3qEPXi90gA.hLhkVRHwk8NBz5iEbJRi:not(.LeZ9swgay3_IutOEDvA6)>.components-spinner{height:20px}.zOVExsGAtu3qEPXi90gA.D63ZAJR5_hiWANBMf4PK{font-weight:400}.zOVExsGAtu3qEPXi90gA.SKM87VLtnU7TyMLgZN7h{min-width:100%}.zOVExsGAtu3qEPXi90gA.is-primary:disabled,.zOVExsGAtu3qEPXi90gA.is-secondary:disabled{background:var(--jp-gray);color:var(--jp-gray-20)}.zOVExsGAtu3qEPXi90gA.is-secondary{background:var(--jp-white);box-shadow:inset 0 0 0 1.51px var(--jp-black)}.zOVExsGAtu3qEPXi90gA.is-secondary:active:not(:disabled),.zOVExsGAtu3qEPXi90gA.is-secondary:hover:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-link.EDZJbVaYCITE2Rfk7M9w,.zOVExsGAtu3qEPXi90gA.is-link.hLhkVRHwk8NBz5iEbJRi{padding:0}.zOVExsGAtu3qEPXi90gA.is-link:hover:not(:disabled){text-decoration-thickness:3px}.zOVExsGAtu3qEPXi90gA.is-link:focus:not(:disabled){text-decoration-line:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:not(:disabled){color:var(--jp-white);background:var(--jp-red-50);box-shadow:inset 0 0 0 1px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:hover:not(:disabled){background:var(--jp-red-60);box-shadow:inset 0 0 0 1px var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);background:var(--jp-red-70);color:var(--jp-white)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-primary:active:not(:disabled){background:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary{box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:not(:disabled){color:var(--jp-red-50);background:var(--jp-white);box-shadow:inset 0 0 0 1.5px var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:hover:not(:disabled){background:var(--jp-red-0);box-shadow:inset 0 0 0 1.5px var(--jp-red-60);color:var(--jp-red-60)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:focus:not(:disabled){box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70);color:var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-secondary:active:not(:disabled){background:var(--jp-gray-0)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:not(:disabled){color:var(--jp-red-50)}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:hover:not(:disabled){color:var(--jp-red-60);box-shadow:none}.zOVExsGAtu3qEPXi90gA.is-destructive.is-link:focus:not(:disabled){color:var(--jp-red-70);box-shadow:inset 0 0 0 1px var(--jp-white),0 0 0 var(--wp-admin-border-width-focus) var(--jp-red-70)}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC{position:relative}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC.has-icon{justify-content:center}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>*:not(.components-spinner){visibility:hidden}.zOVExsGAtu3qEPXi90gA.ZgSKxNOwc80Jci9sUsBC>.components-spinner{margin:0;position:absolute}.UIufD8FSQ4jmuUyoT8C2{margin-left:calc(var(--spacing-base)/2)}",""]),l.locals={button:"zOVExsGAtu3qEPXi90gA","is-icon-button":"LeZ9swgay3_IutOEDvA6",small:"hLhkVRHwk8NBz5iEbJRi",normal:"EDZJbVaYCITE2Rfk7M9w",icon:"nJ9PKanHLfnJSPjoI1Cw",regular:"D63ZAJR5_hiWANBMf4PK","full-width":"SKM87VLtnU7TyMLgZN7h",loading:"ZgSKxNOwc80Jci9sUsBC","external-icon":"UIufD8FSQ4jmuUyoT8C2"};const f=l},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(D,E,s)=>{s.d(E,{Z:()=>f});var t=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=s.n(t),i=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),r=s.n(i),l=r()(c());l.push([D.id,'.GTxJkEnk1nQQsd85aJFX{--actions-size: 28px;--status-size: 8px;padding:calc(var(--spacing-base)*3);background:var(--jp-white);border-radius:var(--jp-border-radius);box-shadow:0 0 40px rgba(0,0,0,.08);height:100%;display:flex;flex-direction:column;box-shadow:0 0 0 1px var(--jp-gray-10) inset}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid rgba(0,0,0,0)}.GTxJkEnk1nQQsd85aJFX.vR8aqypsNilgpns1PWI8{box-shadow:0 0 0 1.5px var(--jp-red-60)}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*3)}.vUw8ethtp2jZxCv6_BfX{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*2);min-height:var(--actions-size);flex-wrap:wrap}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:var(--actions-size);display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:var(--status-size);height:var(--status-size);margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),l.locals={container:"GTxJkEnk1nQQsd85aJFX","is-link":"shDAGeMONr0NSur0dTAx","has-error":"vR8aqypsNilgpns1PWI8",title:"HMaSD8wdv3EFkpx0cFj6",name:"vUw8ethtp2jZxCv6_BfX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const f=l}}]);})();
