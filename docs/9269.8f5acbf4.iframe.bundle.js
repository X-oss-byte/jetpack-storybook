"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9269],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(i,t,e)=>{e.d(t,{aD:()=>o.aD});var o=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),s=(...n)=>{let c=config,r=n;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(c={...config,...r.pop()});let a=r[0];(r.length!==1||typeof a=="string")&&(a={},r.forEach(m=>{a[m]=m}));let u={};return Object.keys(a).forEach(m=>{u[m]=action(a[m],c)}),u},d=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/dropdown/index.js":(i,t,e)=>{e.d(t,{Z:()=>P});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(s),n=e("../../../node_modules/.pnpm/@wordpress+compose@6.13.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.36.0/node_modules/@wordpress/deprecated/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/use-context-system.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/context/context-connect.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/index.js");function m(E,_){const[h,v]=(0,o.useState)(E);return[h,p=>{v(p),_&&_(p)}]}const x=(E,_)=>{const{renderContent:h,renderToggle:v,className:p,contentClassName:b,expandOnMobile:C,headerTitle:L,focusOnMount:W,popoverProps:l,onClose:B,onToggle:f,style:S,position:T,variant:I}=(0,r.y)(E,"Dropdown");T!==void 0&&(0,c.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[K,U]=(0,o.useState)(null),g=(0,o.useRef)(),[w,M]=m(!1,f);(0,o.useEffect)(()=>()=>{f&&w&&f(!1)},[f,w]);function F(){M(!w)}function z(){var R;if(!g.current)return;const{ownerDocument:D}=g.current,A=(R=D==null?void 0:D.activeElement)==null?void 0:R.closest('[role="dialog"]');!g.current.contains(D.activeElement)&&(!A||A.contains(g.current))&&y()}function y(){B&&B(),M(!1)}const j={isOpen:w,onToggle:F,onClose:y},Z=!!(l!=null&&l.anchor)||!!(l!=null&&l.anchorRef)||!!(l!=null&&l.getAnchorRect)||!!(l!=null&&l.anchorRect);return(0,o.createElement)("div",{className:p,ref:(0,n.Z)([g,_,U]),tabIndex:-1,style:S},v(j),w&&(0,o.createElement)(u.ZP,{position:T,onClose:y,onFocusOutside:z,expandOnMobile:C,headerTitle:L,focusOnMount:W,offset:13,anchor:Z?void 0:K,variant:I,...l,className:d()("components-dropdown__content",l==null?void 0:l.className,b)},h(j)))},P=(0,a.Iq)(x,"Dropdown")},"../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(i,t,e)=>{e.d(t,{ZP:()=>v});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(s),n=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.14_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const m=c.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",r.Z.spinnerSize,"px;height:",r.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",a.D.ui.theme,";overflow:visible;opacity:1;background-color:transparent;"),O={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},P=(0,n.Z)("circle",{target:"ea4tfvq1"})(O,";stroke:",a.D.gray[300],";"),E=(0,n.Z)("path",{target:"ea4tfvq0"})(O,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",m,";");function _({className:p,...b},C){return(0,o.createElement)(x,{className:d()("components-spinner",p),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...b,ref:C},(0,o.createElement)(P,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,o.createElement)(E,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const v=(0,o.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(i,t,e)=>{e.d(t,{Z:()=>a});var o=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/ui/utils/space.js"),s=e("../../../node_modules/.pnpm/@wordpress+components@25.2.0_@types+react-dom@18.2.6_@types+react@18.2.14_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const d="36px",n="12px",c={controlSurfaceColor:s.D.white,controlTextActiveColor:s.D.ui.theme,controlPaddingX:n,controlPaddingXLarge:`calc(${n} * 1.3334)`,controlPaddingXSmall:`calc(${n} / 1.3334)`,controlBackgroundColor:s.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${s.D.ui.theme}`,controlDestructiveBorderColor:s.D.alert.red,controlHeight:d,controlHeightXSmall:`calc( ${d} * 0.6 )`,controlHeightSmall:`calc( ${d} * 0.8 )`,controlHeightLarge:`calc( ${d} * 1.2 )`,controlHeightXLarge:`calc( ${d} * 1.4 )`},r={toggleGroupControlBackgroundColor:c.controlBackgroundColor,toggleGroupControlBorderColor:s.D.ui.border,toggleGroupControlBackdropBackgroundColor:c.controlSurfaceColor,toggleGroupControlBackdropBorderColor:s.D.ui.border,toggleGroupControlButtonColorActive:c.controlBackgroundColor},a=Object.assign({},c,r,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,o.D)(2)}`,cardPaddingSmall:`${(0,o.D)(4)}`,cardPaddingMedium:`${(0,o.D)(4)} ${(0,o.D)(6)}`,cardPaddingLarge:`${(0,o.D)(6)} ${(0,o.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:s.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:s.D.white,surfaceColor:s.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,t,e)=>{e.d(t,{Z:()=>d});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function s({icon:n,size:c=24,...r}){return(0,o.cloneElement)(n,{width:c,height:c,...r})}const d=s},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/cloud.js":(i,t,e)=>{e.d(t,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.y$,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/edit.js":(i,t,e)=>{e.d(t,{Z:()=>s});var o=e("../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/pencil.js");const s=o.Z},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/external.js":(i,t,e)=>{e.d(t,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/image.js":(i,t,e)=>{e.d(t,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(s.y$,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/media.js":(i,t,e)=>{e.d(t,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.y$,{d:"m7 6.5 4 2.5-4 2.5z"}),(0,o.createElement)(s.y$,{fillRule:"evenodd",clipRule:"evenodd",d:"m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/pencil.js":(i,t,e)=>{e.d(t,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(s.y$,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.27.0/node_modules/@wordpress/icons/build-module/library/video.js":(i,t,e)=>{e.d(t,{Z:()=>n});var o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/@wordpress+primitives@3.34.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const n=(0,o.createElement)(s.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(s.y$,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"}))}}]);})();
