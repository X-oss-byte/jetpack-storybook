"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8944],{"../../../node_modules/.pnpm/@wordpress+components@23.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(b,g,n)=>{n.d(g,{Z:()=>o});var i=n("../../../node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),u=n.n(l),_=n("../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),k=n("../../../node_modules/.pnpm/@wordpress+deprecated@3.30.0/node_modules/@wordpress/deprecated/build-module/index.js"),U=n("../../../node_modules/.pnpm/@wordpress+components@23.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function p(s,c){const[v,a]=(0,r.useState)(s);return[v,y=>{a(y),c&&c(y)}]}function P(s,c){let{renderContent:v,renderToggle:a,className:y,contentClassName:X,expandOnMobile:L,headerTitle:I,focusOnMount:V,popoverProps:t,onClose:d,onToggle:E,style:H,position:D}=s;D!==void 0&&(0,k.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[M,K]=(0,r.useState)(null),x=(0,r.useRef)(),[h,F]=p(!1,E);(0,r.useEffect)(()=>()=>{E&&h&&E(!1)},[E,h]);function R(){F(!h)}function f(){var C;if(!x.current)return;const{ownerDocument:O}=x.current,m=O==null||(C=O.activeElement)===null||C===void 0?void 0:C.closest('[role="dialog"]');!x.current.contains(O.activeElement)&&(!m||m.contains(x.current))&&A()}function A(){d&&d(),F(!1)}const W={isOpen:h,onToggle:R,onClose:A},S=!!(t!=null&&t.anchor)||!!(t!=null&&t.anchorRef)||!!(t!=null&&t.getAnchorRect)||!!(t!=null&&t.anchorRect);return(0,r.createElement)("div",{className:u()("components-dropdown",y),ref:(0,_.Z)([x,c,K]),tabIndex:-1,style:H},a(W),h&&(0,r.createElement)(U.Z,(0,i.Z)({position:D,onClose:A,onFocusOutside:f,expandOnMobile:L,headerTitle:I,focusOnMount:V,offset:13,anchor:S?void 0:M},t,{className:u()("components-dropdown__content",t==null?void 0:t.className,X)}),v(W)))}const o=(0,r.forwardRef)(P)},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js":(b,g,n)=>{n.d(g,{Z:()=>u});var i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const u=(0,i.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(r.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/download.js":(b,g,n)=>{n.d(g,{Z:()=>u});var i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const u=(0,i.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(r.y$,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js":(b,g,n)=>{n.d(g,{Z:()=>u});var i=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const u=(0,i.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(r.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"../analytics/index.jsx":(b,g,n)=>{n.d(g,{Z:()=>P});var i=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),r=n.n(i);const l=r()("dops:analytics");let u,_;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;function k(e,o){let s="";if(typeof e=="object"){for(const c in e)s+="&x_"+encodeURIComponent(c)+"="+encodeURIComponent(e[c]);l("Bumping stats %o",e)}else s="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(o),l('Bumping stat "%s" in group "%s"',o,e);return s}function U(e,o){let s="";if(typeof e=="object"){for(const c in e)s+="&"+encodeURIComponent(c)+"="+encodeURIComponent(e[c]);l("Built stats %o",e)}else s="&"+encodeURIComponent(e)+"="+encodeURIComponent(o),l('Built stat "%s" in group "%s"',o,e);return s}const p={initialize:function(e,o,s){p.setUser(e,o),p.setSuperProps(s),p.identifyUser()},setGoogleAnalyticsEnabled:function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=o},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,o){_={ID:e,username:o}},setSuperProps:function(e){u=e},assignSuperProps:function(e){u=Object.assign(u||{},e)},mc:{bumpStat:function(e,o){const s=k(e,o);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+s+"&t="+Math.random())},bumpStatWithPageView:function(e,o){const s=U(e,o);p.mcAnalyticsEnabled&&(new Image().src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+s+"&t="+Math.random())}},pageView:{record:function(e,o){p.tracks.recordPageView(e),p.ga.recordPageView(e,o)}},purchase:{record:function(e,o,s,c,v,a,y){p.ga.recordPurchase(e,o,s,c,v,a,y)}},tracks:{recordEvent:function(e,o){if(o=o||{},e.indexOf("akismet_")!==0&&e.indexOf("jetpack_")!==0){l('- Event name must be prefixed by "akismet_" or "jetpack_"');return}u&&(l("- Super Props: %o",u),o=Object.assign(o,u)),l('Record event "%s" called with props %s',e,JSON.stringify(o)),window._tkq.push(["recordEvent",e,o])},recordJetpackClick:function(e){const o=typeof e=="object"?e:{target:e};p.tracks.recordEvent("jetpack_wpa_click",o)},recordPageView:function(e){p.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){l("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};p.ga.initialized||(_&&(e={userId:"u-"+_.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),p.ga.initialized=!0)},recordPageView:function(e,o){p.ga.initialize(),l("Recording Page View ~ [URL: "+e+"] [Title: "+o+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:o}))},recordEvent:function(e,o,s,c){p.ga.initialize();let v="Recording Event ~ [Category: "+e+"] [Action: "+o+"]";typeof s!="undefined"&&(v+=" [Option Label: "+s+"]"),typeof c!="undefined"&&(v+=" [Option Value: "+c+"]"),l(v),this.googleAnalyticsEnabled&&window.ga("send","event",e,o,s,c)},recordPurchase:function(e,o,s,c,v,a,y){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:c,currency:y}),window.ga("ecommerce:addItem",{id:e,name:o,sku:s,price:v,quantity:a}),window.ga("ecommerce:send")}},identifyUser:function(){_&&window._tkq.push(["identifyUser",_.ID,_.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},P=p},"../../packages/my-jetpack/_inc/components/product-card/index.jsx":(b,g,n)=>{n.d(g,{Z:()=>K});var i=n("../components/components/button/index.tsx"),r=n("../components/components/text/index.tsx"),l=n("../../../node_modules/.pnpm/@wordpress+components@23.7.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js"),u=n("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),_=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/more-vertical.js"),k=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),U=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/download.js"),p=n("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/check.js"),P=n("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),e=n.n(P),o=n("../../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),s=n.n(o),c=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=n("../../packages/my-jetpack/_inc/hooks/use-analytics/index.js"),a=n("../../packages/my-jetpack/_inc/components/product-card/action-buton.jsx"),y=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=n.n(y),L=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss"),I={};I.insert="head",I.singleton=!1;var V=X()(L.Z,I);const t=L.Z.locals||{};var d=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const E=u.__,H={[a.N.ACTIVE]:E("Active","jetpack-my-jetpack"),[a.N.INACTIVE]:E("Inactive","jetpack-my-jetpack"),[a.N.NEEDS_PURCHASE]:E("Inactive","jetpack-my-jetpack"),[a.N.NEEDS_PURCHASE_OR_FREE]:E("Inactive","jetpack-my-jetpack"),[a.N.ERROR]:E("Error","jetpack-my-jetpack")},D=x=>{let{productStatus:h,items:F=[],onManage:R,onInstall:f,onActivate:A,hasStandalonePlugin:W,isStandaloneInstalled:S,isStandaloneActive:C}=x;const O=h!==a.N.ERROR&&W&&(!S||!C);return(0,d.jsx)(l.Z,{className:t.dropdown,popoverProps:{noArrow:!1,placement:"bottom-end"},renderToggle:m=>{let{isOpen:T,onToggle:w}=m;return(0,d.jsx)(i.Z,{variant:"tertiary",size:"small",icon:_.Z,onClick:w,"aria-expanded":T})},renderContent:m=>{let{onClose:T}=m;return(0,d.jsxs)(d.Fragment,{children:[F.map(w=>(0,d.jsx)(i.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:w==null?void 0:w.icon,onClick:()=>{var B;T(),(B=w==null?void 0:w.onClick)==null||B.call(w)},children:w==null?void 0:w.label})),h===a.N.ACTIVE&&(0,d.jsx)(i.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:k.Z,onClick:()=>{T(),R==null||R()},children:E("Manage","jetpack-my-jetpack")}),O&&(0,d.jsxs)(d.Fragment,{children:[(h===a.N.ACTIVE||F.length>0)&&(0,d.jsx)("hr",{}),!S&&(0,d.jsx)(i.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:U.Z,onClick:()=>{T(),f==null||f()},children:E("Install Plugin","jetpack-my-jetpack")}),S&&!C&&(0,d.jsx)(i.Z,{weight:"regular",fullWidth:!0,variant:"tertiary",icon:p.Z,onClick:()=>{T(),A==null||A()},children:E("Activate Plugin","jetpack-my-jetpack")})]})]})}})};D.displayName="Menu";const M=x=>{const{name:h,description:F,icon:R,status:f,onActivate:A,onAdd:W,onFixConnection:S,onManage:C,isFetching:O,slug:m,children:T,showMenu:w=!1,menuItems:B=[],onInstallStandalone:Y,onActivateStandalone:q,hasStandalonePlugin:$=!1,isStandaloneInstalled:ee=!1,isStandaloneActive:ne=!1,isConnected:te=!1}=x,z=f===a.N.ACTIVE,Q=f===a.N.ERROR,ae=f===a.N.INACTIVE,Z=f===a.N.ABSENT||f===a.N.ABSENT_WITH_PLAN,oe=f===a.N.NEEDS_PURCHASE||f===a.N.NEEDS_PURCHASE_OR_FREE,de=H[f],se=w&&!Z&&!Q&&te&&(z||(B==null?void 0:B.length)>0||$&&(!ne||!ee)),re=e()(t.container,{[t.plugin_absent]:Z,[t["is-purchase-required"]]:oe,[t["is-link"]]:Z,[t["has-error"]]:Q}),ce=e()(t.status,{[t.active]:z,[t.inactive]:ae||oe,[t.error]:Q,[t["is-fetching"]]:O}),{recordEvent:j}=(0,v.Z)(),ie=(0,c.useCallback)(()=>{j("jetpack_myjetpack_product_card_activate_click",{product:m}),A()},[m,A,j]),le=(0,c.useCallback)(N=>{N!=null&&N.preventDefault&&N.preventDefault(),j("jetpack_myjetpack_product_card_add_click",{product:m}),W()},[m,W,j]),pe=(0,c.useCallback)(()=>{j("jetpack_myjetpack_product_card_manage_click",{product:m}),C()},[m,C,j]),ue=(0,c.useCallback)(()=>{j("jetpack_myjetpack_product_card_fixconnection_click",{product:m}),S()},[m,S,j]),me=(0,c.useCallback)(()=>{j("jetpack_myjetpack_product_card_install_standalone_plugin_click",{product:m}),Y()},[m,Y,j]),_e=(0,c.useCallback)(()=>{j("jetpack_myjetpack_product_card_activate_standalone_plugin_click",{product:m}),q()},[m,q,j]),ge=Z?N=>{let{children:J,...G}=N;return(0,d.jsx)("a",{...G,href:"#",onClick:le,children:J})}:N=>{let{children:J,...G}=N;return(0,d.jsx)("div",{...G,children:J})};return(0,d.jsxs)(ge,{className:re,children:[(0,d.jsxs)("div",{className:t.title,children:[(0,d.jsxs)("div",{className:t.name,children:[(0,d.jsx)(r.ZP,{variant:"title-medium",children:h}),se&&R]}),se?(0,d.jsx)(D,{productStatus:f,items:B,onManage:C,onInstall:me,onActivate:_e,hasStandalonePlugin:$,isStandaloneActive:ne,isStandaloneInstalled:ee}):R]}),z&&T?T:(0,d.jsx)(r.ZP,{variant:"body-small",className:t.description,children:F}),(0,d.jsxs)("div",{className:t.actions,children:[(0,d.jsx)(a.Z,{...x,onActivate:ie,onFixConnection:ue,onManage:pe,className:t.button}),!Z&&(0,d.jsx)(r.ZP,{variant:"label",className:ce,children:de})]})]})};M.displayName="ProductCard",M.propTypes={children:s().node,name:s().string.isRequired,description:s().string.isRequired,icon:s().element,admin:s().bool.isRequired,isFetching:s().bool,onManage:s().func,onFixConnection:s().func,onActivate:s().func,onAdd:s().func,slug:s().string.isRequired,status:s().oneOf([a.N.ACTIVE,a.N.INACTIVE,a.N.ERROR,a.N.ABSENT,a.N.ABSENT_WITH_PLAN,a.N.NEEDS_PURCHASE,a.N.NEEDS_PURCHASE_OR_FREE]).isRequired},M.defaultProps={icon:null,isFetching:!1,onManage:()=>{},onFixConnection:()=>{},onActivate:()=>{},onAdd:()=>{}},M.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1},isFetching:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onManage:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onFixConnection:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onActivate:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onAdd:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"node"},required:!1},name:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!0},admin:{description:"",type:{name:"bool"},required:!0},slug:{description:"",type:{name:"string"},required:!0},status:{description:"",type:{name:"enum",value:[{value:"PRODUCT_STATUSES.ACTIVE",computed:!0},{value:"PRODUCT_STATUSES.INACTIVE",computed:!0},{value:"PRODUCT_STATUSES.ERROR",computed:!0},{value:"PRODUCT_STATUSES.ABSENT",computed:!0},{value:"PRODUCT_STATUSES.ABSENT_WITH_PLAN",computed:!0},{value:"PRODUCT_STATUSES.NEEDS_PURCHASE",computed:!0},{value:"PRODUCT_STATUSES.NEEDS_PURCHASE_OR_FREE",computed:!0}]},required:!0}}};const K=M},"../../packages/my-jetpack/_inc/hooks/use-analytics/index.js":(b,g,n)=>{n.d(g,{Z:()=>_});var i=n("../analytics/index.jsx"),r=n("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("../../packages/my-jetpack/_inc/hooks/use-my-jetpack-connection/index.js");const _=()=>{var d;const{isUserConnected:k,connectedPlugins:U,userConnectionData:p={}}=(0,l.Z)(),{login:P,ID:e}=((d=p.currentUser)==null?void 0:d.wpcomUser)||{};(0,r.useEffect)(()=>{k&&e&&P&&i.Z.initialize(e,P)},[e,k,P]);const o=Object.keys(U||{}).sort().join(",").replaceAll("jetpack-",""),{clearedIdentity:s,ga:c,mc:v,pageView:a,purchase:y,setGoogleAnalyticsEnabled:X,setMcAnalyticsEnabled:L,setProperties:I,tracks:V}=i.Z,t=(0,r.useCallback)((E,H)=>{var D;V.recordEvent(E,{...H,version:(D=window==null?void 0:window.myJetpackInitialState)==null?void 0:D.myJetpackVersion,referring_plugins:o})},[]);return{clearedIdentity:s,ga:c,mc:v,pageView:a,purchase:y,recordEvent:t,setGoogleAnalyticsEnabled:X,setMcAnalyticsEnabled:L,setProperties:I,tracks:V}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/my-jetpack/_inc/components/product-card/style.module.scss":(b,g,n)=>{n.d(g,{Z:()=>k});var i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(i),l=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),u=n.n(l),_=u()(r());_.push([b.id,'.GTxJkEnk1nQQsd85aJFX{--actions-size: 28px;--status-size: 8px;padding:calc(var(--spacing-base)*3);background:var(--jp-white);border-radius:var(--jp-border-radius);box-shadow:0 0 40px rgba(0,0,0,.08);height:100%;display:flex;flex-direction:column;box-shadow:0 0 0 1px var(--jp-gray-10) inset}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx{background:none;text-decoration:none;background-color:var(--jp-white-off);color:var(--jp-black-80)}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx:hover{background-color:var(--jp-white)}.GTxJkEnk1nQQsd85aJFX.shDAGeMONr0NSur0dTAx:focus{box-shadow:0 0 0 1.5px var(--jp-black);background-color:var(--jp-white);outline:3px solid transparent}.GTxJkEnk1nQQsd85aJFX.vR8aqypsNilgpns1PWI8{box-shadow:0 0 0 1.5px var(--jp-red-60)}.HMaSD8wdv3EFkpx0cFj6{width:100%;display:flex;gap:var(--spacing-base);align-items:center;justify-content:space-between;margin-bottom:calc(var(--spacing-base)*3)}.vUw8ethtp2jZxCv6_BfX{display:flex;height:100%;gap:var(--spacing-base);align-items:center;flex-wrap:wrap-reverse}.rR6wNk2afMMgoAM48xwu{flex-grow:1}.vC9WtlYfTZJ3PQ2_WJbi{display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:calc(var(--spacing-base)*2);min-height:var(--actions-size);flex-wrap:wrap}.XFWD3H3YkLwFqcqU4N3y{white-space:nowrap;height:var(--actions-size);display:flex;align-items:center}.XFWD3H3YkLwFqcqU4N3y:before{content:"";display:inline-block;width:var(--status-size);height:var(--status-size);margin-right:var(--spacing-base);border-radius:50%}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ{color:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.gVfztnQIATbFCK7hegRQ:before{background:var(--jp-green-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8{color:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.kDLAyzB7otBfcFxesPp8:before{background:var(--jp-gray-50)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i{color:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.PmWCTVHy7wtXBeSTBh7i:before{background:var(--jp-red-60)}.XFWD3H3YkLwFqcqU4N3y.XX9rtInwXjlRjEHx007w:before{animation:x8UXNnDUSdNvlwC_6g2z .5s linear infinite}@keyframes x8UXNnDUSdNvlwC_6g2z{0%{opacity:0}50%{opacity:.5}100%{opacity:0}}',""]),_.locals={container:"GTxJkEnk1nQQsd85aJFX","is-link":"shDAGeMONr0NSur0dTAx","has-error":"vR8aqypsNilgpns1PWI8",title:"HMaSD8wdv3EFkpx0cFj6",name:"vUw8ethtp2jZxCv6_BfX",description:"rR6wNk2afMMgoAM48xwu",actions:"vC9WtlYfTZJ3PQ2_WJbi",status:"XFWD3H3YkLwFqcqU4N3y",active:"gVfztnQIATbFCK7hegRQ",inactive:"kDLAyzB7otBfcFxesPp8",error:"PmWCTVHy7wtXBeSTBh7i","is-fetching":"XX9rtInwXjlRjEHx007w","blink-animation":"x8UXNnDUSdNvlwC_6g2z"};const k=_}}]);})();
