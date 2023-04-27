(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6098],{"../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c(d){return d&&typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia(d):null}function a(d){const o=(0,n.useMemo)(()=>{const s=c(d);return{subscribe(l){return s?(s.addEventListener("change",l),()=>{s.removeEventListener("change",l)}):()=>{}},getValue(){var l;return(l=s==null?void 0:s.matches)!==null&&l!==void 0?l:!1}}},[d]);return(0,n.useSyncExternalStore)(o.subscribe,o.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>a});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c(d){let{icon:o,size:s=24,...l}=d;return(0,n.cloneElement)(o,{width:s,height:s,...l})}const a=c},"../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js":(i,r,e)=>{"use strict";e.d(r,{Z:()=>d});var n=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const d=(0,n.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.y$,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.28.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(i,r,e)=>{"use strict";e.d(r,{Cd:()=>d,G:()=>o,UL:()=>m,Wj:()=>f,mg:()=>_,y$:()=>l});var n=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),c=e.n(n),a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=t=>(0,a.createElement)("circle",t),o=t=>(0,a.createElement)("g",t),s=t=>createElement("line",t),l=t=>(0,a.createElement)("path",t),_=t=>(0,a.createElement)("polygon",t),m=t=>(0,a.createElement)("rect",t),M=t=>createElement("defs",t),j=t=>createElement("radialGradient",t),h=t=>createElement("linearGradient",t),u=t=>createElement("stop",t),f=t=>{let{className:p,isPressed:v,...x}=t;const g={...x,className:c()(p,{"is-pressed":v})||void 0,"aria-hidden":!0,focusable:!1};return(0,a.createElement)("svg",g)}},"../components/components/jetpack-footer/stories/index.stories.tsx":(i,r,e)=>{var j,h,u,f,t,p;"use strict";e.r(r),e.d(r,{WithMenu:()=>m,__namedExportsOrder:()=>M,_default:()=>_,default:()=>o});var n=e("../components/components/jetpack-footer/index.tsx"),c=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'JS Packages/Components/Jetpack Footer',
	component: JetpackFooter,
} as ComponentMeta< typeof JetpackFooter >;

const Template: ComponentStory< typeof JetpackFooter > = args => <JetpackFooter { ...args } />;

const DefaultArgs = {
	a8cLogoHref: 'https://automattic.com',
	moduleName: 'Jetpack',
	className: '',
	moduleNameHref: 'https://jetpack.com',
};

export const _default = Template.bind( {} );
_default.args = DefaultArgs;

export const WithMenu = Template.bind( {} );
WithMenu.args = {
	...DefaultArgs,
	menu: [
		{
			label: 'Menu Item',
			href: '#',
		},
		{
			label: 'External Menu Item',
			href: '#',
			target: '_blank',
		},
		{
			label: 'Menu Item With Title',
			title: 'Hello, World!',
			href: '#',
		},
	],
};
`,d={_default:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}},WithMenu:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}}};const o={parameters:{storySource:{source:`import JetpackFooter from '../index';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
export default ({
  title: 'JS Packages/Components/Jetpack Footer',
  component: JetpackFooter
} as ComponentMeta<typeof JetpackFooter>);
const Template: ComponentStory<typeof JetpackFooter> = args => <JetpackFooter {...args} />;
const DefaultArgs = {
  a8cLogoHref: 'https://automattic.com',
  moduleName: 'Jetpack',
  className: '',
  moduleNameHref: 'https://jetpack.com'
};
export const _default = Template.bind({});
_default.args = DefaultArgs;
export const WithMenu = Template.bind({});
WithMenu.args = {
  ...DefaultArgs,
  menu: [{
    label: 'Menu Item',
    href: '#'
  }, {
    label: 'External Menu Item',
    href: '#',
    target: '_blank'
  }, {
    label: 'Menu Item With Title',
    title: 'Hello, World!',
    href: '#'
  }]
};
_default.parameters = {
  ..._default.parameters,
  docs: {
    ..._default.parameters?.docs,
    source: {
      originalSource: "args => <JetpackFooter {...args} />",
      ..._default.parameters?.docs?.source
    }
  }
};
WithMenu.parameters = {
  ...WithMenu.parameters,
  docs: {
    ...WithMenu.parameters?.docs,
    source: {
      originalSource: "args => <JetpackFooter {...args} />",
      ...WithMenu.parameters?.docs?.source
    }
  }
};`,locationsMap:{default:{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}},"with-menu":{startLoc:{col:55,line:7},endLoc:{col:90,line:7},startBody:{col:55,line:7},endBody:{col:90,line:7}}}}},title:"JS Packages/Components/Jetpack Footer",component:n.Z},s=v=>(0,c.jsx)(n.Z,{...v});s.displayName="Template";const l={a8cLogoHref:"https://automattic.com",moduleName:"Jetpack",className:"",moduleNameHref:"https://jetpack.com"},_=s.bind({});_.args=l;const m=s.bind({});m.args={...l,menu:[{label:"Menu Item",href:"#"},{label:"External Menu Item",href:"#",target:"_blank"},{label:"Menu Item With Title",title:"Hello, World!",href:"#"}]},_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(u=(h=_.parameters)==null?void 0:h.docs)==null?void 0:u.source}}},m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:"args => <JetpackFooter {...args} />",...(p=(t=m.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const M=["_default","WithMenu"]},"../components/components/automattic-byline-logo/index.tsx":(i,r,e)=>{"use strict";e.d(r,{Z:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),a=e.n(c),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=n.__,l=m=>{let{title:M=s("An Automattic Airline","jetpack"),height:j=7,className:h,...u}=m;return(0,o.jsxs)("svg",{role:"img",x:"0",y:"0",viewBox:"0 0 935 38.2",enableBackground:"new 0 0 935 38.2","aria-labelledby":"jp-automattic-byline-logo-title",height:j,className:a()("jp-automattic-byline-logo",h),...u,children:[(0,o.jsx)("desc",{id:"jp-automattic-byline-logo-title",children:M}),(0,o.jsx)("path",{d:"M317.1 38.2c-12.6 0-20.7-9.1-20.7-18.5v-1.2c0-9.6 8.2-18.5 20.7-18.5 12.6 0 20.8 8.9 20.8 18.5v1.2C337.9 29.1 329.7 38.2 317.1 38.2zM331.2 18.6c0-6.9-5-13-14.1-13s-14 6.1-14 13v0.9c0 6.9 5 13.1 14 13.1s14.1-6.2 14.1-13.1V18.6zM175 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7L157 1.3h5.5L182 36.8H175zM159.7 8.2L152 23.1h15.7L159.7 8.2zM212.4 38.2c-12.7 0-18.7-6.9-18.7-16.2V1.3h6.6v20.9c0 6.6 4.3 10.5 12.5 10.5 8.4 0 11.9-3.9 11.9-10.5V1.3h6.7V22C231.4 30.8 225.8 38.2 212.4 38.2zM268.6 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H268.6zM397.3 36.8V8.7l-1.8 3.1 -14.9 25h-3.3l-14.7-25 -1.8-3.1v28.1h-6.5V1.3h9.2l14 24.4 1.7 3 1.7-3 13.9-24.4h9.1v35.5H397.3zM454.4 36.8l-4.7-8.8h-20.9l-4.5 8.8h-7l19.2-35.5h5.5l19.5 35.5H454.4zM439.1 8.2l-7.7 14.9h15.7L439.1 8.2zM488.4 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H488.4zM537.3 6.8v30h-6.7v-30h-15.5V1.3h37.7v5.5H537.3zM569.3 36.8V4.6c2.7 0 3.7-1.4 3.7-3.4h2.8v35.5L569.3 36.8 569.3 36.8zM628 11.3c-3.2-2.9-7.9-5.7-14.2-5.7 -9.5 0-14.8 6.5-14.8 13.3v0.7c0 6.7 5.4 13 15.3 13 5.9 0 10.8-2.8 13.9-5.7l4 4.2c-3.9 3.8-10.5 7.1-18.3 7.1 -13.4 0-21.6-8.7-21.6-18.3v-1.2c0-9.6 8.9-18.7 21.9-18.7 7.5 0 14.3 3.1 18 7.1L628 11.3zM321.5 12.4c1.2 0.8 1.5 2.4 0.8 3.6l-6.1 9.4c-0.8 1.2-2.4 1.6-3.6 0.8l0 0c-1.2-0.8-1.5-2.4-0.8-3.6l6.1-9.4C318.7 11.9 320.3 11.6 321.5 12.4L321.5 12.4z"}),(0,o.jsx)("path",{d:"M37.5 36.7l-4.7-8.9H11.7l-4.6 8.9H0L19.4 0.8H25l19.7 35.9H37.5zM22 7.8l-7.8 15.1h15.9L22 7.8zM82.8 36.7l-23.3-24 -2.3-2.5v26.6h-6.7v-36H57l22.6 24 2.3 2.6V0.8h6.7v35.9H82.8z"}),(0,o.jsx)("path",{d:"M719.9 37l-4.8-8.9H694l-4.6 8.9h-7.1l19.5-36h5.6l19.8 36H719.9zM704.4 8l-7.8 15.1h15.9L704.4 8zM733 37V1h6.8v36H733zM781 37c-1.8 0-2.6-2.5-2.9-5.8l-0.2-3.7c-0.2-3.6-1.7-5.1-8.4-5.1h-12.8V37H750V1h19.6c10.8 0 15.7 4.3 15.7 9.9 0 3.9-2 7.7-9 9 7 0.5 8.5 3.7 8.6 7.9l0.1 3c0.1 2.5 0.5 4.3 2.2 6.1V37H781zM778.5 11.8c0-2.6-2.1-5.1-7.9-5.1h-13.8v10.8h14.4c5 0 7.3-2.4 7.3-5.2V11.8zM794.8 37V1h6.8v30.4h28.2V37H794.8zM836.7 37V1h6.8v36H836.7zM886.2 37l-23.4-24.1 -2.3-2.5V37h-6.8V1h6.5l22.7 24.1 2.3 2.6V1h6.8v36H886.2zM902.3 37V1H935v5.6h-26v9.2h20v5.5h-20v10.1h26V37H902.3z"})]})};l.displayName="AutomatticBylineLogo";const _=l},"../components/components/jetpack-footer/index.tsx":(i,r,e)=>{"use strict";e.d(r,{Z:()=>g});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/icon/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.21.0/node_modules/@wordpress/icons/build-module/library/external.js"),d=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),o=e.n(d),s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("../components/components/automattic-byline-logo/index.tsx"),_=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(_),M=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss"),j={};j.insert="head",j.singleton=!1;var h=m()(M.Z,j);const u=M.Z.locals||{};var f=e("../components/components/jetpack-logo/index.tsx"),t=e("../components/components/layout/use-breakpoint-match/index.ts"),p=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=n.__,x=L=>{let{a8cLogoHref:O="https://automattic.com",moduleName:b=v("Jetpack","jetpack"),className:P,moduleNameHref:D="https://jetpack.com",menu:y,...k}=L;const[A]=(0,t.Z)("sm","<="),[C]=(0,t.Z)("md","<=");return(0,p.jsxs)("div",{className:o()("jp-dashboard-footer",{"is-sm":A,"is-md":C},P),...k,children:[(0,p.jsxs)("div",{className:"jp-dashboard-footer__logo",children:[(0,p.jsx)(f.Z,{logoColor:"#000",showText:!1,height:16,className:"jp-dashboard-footer__jetpack-symbol","aria-label":v("Jetpack logo","jetpack")}),(0,p.jsx)("span",{className:"jp-dashboard-footer__module-name",children:D?(0,p.jsx)("a",{href:D,"aria-label":b,children:b}):b})]}),y&&(0,p.jsx)("div",{className:"jp-dashboard-footer__menu",children:y.map(E=>(0,p.jsxs)("a",{href:E.href,title:E.title,target:E.target,onClick:E.onClick,onKeyDown:E.onKeyDown,className:o()("jp-dashboard-footer__menu-item",{"is-external":E.target==="_blank"}),role:E.role,rel:"noopener noreferrer",tabIndex:E.role==="button"?0:void 0,children:[E.label,E.target==="_blank"&&(0,p.jsx)(c.Z,{className:"jp-dashboard-footer__menu-item__icon",icon:a.Z})]},E.label))}),(0,p.jsx)("a",{className:"jp-dashboard-footer__a8c-logo",href:O,"aria-label":v("An Automattic Airline","jetpack"),children:(0,p.jsx)(l.Z,{})})]})};x.displayName="JetpackFooter";const g=x},"../components/components/jetpack-logo/index.tsx":(i,r,e)=>{"use strict";e.d(r,{Z:()=>_});var n=e("../../../node_modules/.pnpm/@wordpress+i18n@4.30.0/node_modules/@wordpress/i18n/build-module/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),a=e.n(c),d=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const s=n.__,l=m=>{let{logoColor:M="#069e08",showText:j=!0,className:h,height:u=32,...f}=m;const t=j?"0 0 118 32":"0 0 32 32";return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:t,className:a()("jetpack-logo",h),"aria-labelledby":"jetpack-logo-title",height:u,...f,children:[(0,o.jsx)("desc",{id:"jetpack-logo-title",children:s("Jetpack Logo","jetpack")}),(0,o.jsx)("path",{fill:M,d:"M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15,19H7l8-16V19z M17,29V13h8L17,29z"}),j&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M41.3,26.6c-0.5-0.7-0.9-1.4-1.3-2.1c2.3-1.4,3-2.5,3-4.6V8h-3V6h6v13.4C46,22.8,45,24.8,41.3,26.6z"}),(0,o.jsx)("path",{d:"M65,18.4c0,1.1,0.8,1.3,1.4,1.3c0.5,0,2-0.2,2.6-0.4v2.1c-0.9,0.3-2.5,0.5-3.7,0.5c-1.5,0-3.2-0.5-3.2-3.1V12H60v-2h2.1V7.1 H65V10h4v2h-4V18.4z"}),(0,o.jsx)("path",{d:"M71,10h3v1.3c1.1-0.8,1.9-1.3,3.3-1.3c2.5,0,4.5,1.8,4.5,5.6s-2.2,6.3-5.8,6.3c-0.9,0-1.3-0.1-2-0.3V28h-3V10z M76.5,12.3 c-0.8,0-1.6,0.4-2.5,1.2v5.9c0.6,0.1,0.9,0.2,1.8,0.2c2,0,3.2-1.3,3.2-3.9C79,13.4,78.1,12.3,76.5,12.3z"}),(0,o.jsx)("path",{d:"M93,22h-3v-1.5c-0.9,0.7-1.9,1.5-3.5,1.5c-1.5,0-3.1-1.1-3.1-3.2c0-2.9,2.5-3.4,4.2-3.7l2.4-0.3v-0.3c0-1.5-0.5-2.3-2-2.3 c-0.7,0-2.3,0.5-3.7,1.1L84,11c1.2-0.4,3-1,4.4-1c2.7,0,4.6,1.4,4.6,4.7L93,22z M90,16.4l-2.2,0.4c-0.7,0.1-1.4,0.5-1.4,1.6 c0,0.9,0.5,1.4,1.3,1.4s1.5-0.5,2.3-1V16.4z"}),(0,o.jsx)("path",{d:"M104.5,21.3c-1.1,0.4-2.2,0.6-3.5,0.6c-4.2,0-5.9-2.4-5.9-5.9c0-3.7,2.3-6,6.1-6c1.4,0,2.3,0.2,3.2,0.5V13 c-0.8-0.3-2-0.6-3.2-0.6c-1.7,0-3.2,0.9-3.2,3.6c0,2.9,1.5,3.8,3.3,3.8c0.9,0,1.9-0.2,3.2-0.7V21.3z"}),(0,o.jsx)("path",{d:"M110,15.2c0.2-0.3,0.2-0.8,3.8-5.2h3.7l-4.6,5.7l5,6.3h-3.7l-4.2-5.8V22h-3V6h3V15.2z"}),(0,o.jsx)("path",{d:"M58.5,21.3c-1.5,0.5-2.7,0.6-4.2,0.6c-3.6,0-5.8-1.8-5.8-6c0-3.1,1.9-5.9,5.5-5.9s4.9,2.5,4.9,4.9c0,0.8,0,1.5-0.1,2h-7.3 c0.1,2.5,1.5,2.8,3.6,2.8c1.1,0,2.2-0.3,3.4-0.7C58.5,19,58.5,21.3,58.5,21.3z M56,15c0-1.4-0.5-2.9-2-2.9c-1.4,0-2.3,1.3-2.4,2.9 C51.6,15,56,15,56,15z"})]})]})};l.displayName="JetpackLogo";const _=l},"../components/components/layout/use-breakpoint-match/index.ts":(i,r,e)=>{"use strict";e.d(r,{Z:()=>j});var n=e("../../../node_modules/.pnpm/@wordpress+compose@6.7.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js"),c=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(c),d=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss"),o={};o.insert="head",o.singleton=!1;var s=a()(d.Z,o);const l=d.Z.locals||{},_=["sm","md","lg"],m=(h,u,f)=>{const t=_.indexOf(h),p=t+1,v=u.includes("=");let x=[];return u.startsWith("<")&&(x=_.slice(0,v?p:t)),u.startsWith(">")&&(x=_.slice(v?t:p)),x!=null&&x.length?x.some(g=>f[g]):f[h]},j=(h,u)=>{const f=Array.isArray(h)?h:[h],t=Array.isArray(u)?u:[u],[p,v,x]=_,g=(0,n.Z)(l[p]),L=(0,n.Z)(l[v]),O=(0,n.Z)(l[x]),b={sm:g,md:L,lg:O};return f.map((P,D)=>{const y=t[D];return y?m(P,y,b):b[P]})}},"../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js":(i,r)=>{var e,n;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty;function a(){for(var d=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var l=typeof s;if(l==="string"||l==="number")d.push(s);else if(Array.isArray(s)){if(s.length){var _=a.apply(null,s);_&&d.push(_)}}else if(l==="object")if(s.toString===Object.prototype.toString)for(var m in s)c.call(s,m)&&s[m]&&d.push(m);else d.push(s.toString())}}return d.join(" ")}i.exports?(a.default=a,i.exports=a):(e=[],n=function(){return a}.apply(r,e),n!==void 0&&(i.exports=n))})()},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/jetpack-footer/style.scss":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(a),o=d()(c());o.push([i.id,".jp-dashboard-footer{align-items:center;color:var(--jp-black);display:flex;flex-wrap:wrap;font-size:var(--font-body-extra-small);line-height:1.333;max-width:1128px;width:100%}.jp-dashboard-footer a,.jp-dashboard-footer a:link,.jp-dashboard-footer a:hover,.jp-dashboard-footer a:visited,.jp-dashboard-footer a:active{color:var(--jp-black);text-decoration:none}.jp-dashboard-footer.is-md{flex-direction:column;align-items:flex-start}.jp-dashboard-footer__logo{margin-right:32px}.jp-dashboard-footer.is-md .jp-dashboard-footer__logo{margin-right:0;margin-bottom:24px}.jp-dashboard-footer.is-sm .jp-dashboard-footer__logo{margin-bottom:48px}.jp-dashboard-footer__module-name,.jp-dashboard-footer__jetpack-symbol{vertical-align:middle;display:inline-block}.jp-dashboard-footer__module-name{margin-left:5px;font-weight:600}.jp-dashboard-footer__menu{display:flex}.jp-dashboard-footer.is-md .jp-dashboard-footer__menu{margin-bottom:24px}.jp-dashboard-footer.is-sm .jp-dashboard-footer__menu{flex-direction:column;align-items:flex-start;margin-bottom:48px}.jp-dashboard-footer.is-sm .jp-dashboard-footer__menu .jp-dashboard-footer__menu-item{margin-right:0;margin-bottom:16px}.jp-dashboard-footer.is-sm .jp-dashboard-footer__menu .jp-dashboard-footer__menu-item:last-child{margin-bottom:0}.jp-dashboard-footer__menu .jp-dashboard-footer__menu-item{position:relative;color:var(--jp-black);margin-right:16px;text-decoration:none}.jp-dashboard-footer__menu .jp-dashboard-footer__menu-item.is-external{padding-right:20px}.jp-dashboard-footer__menu .jp-dashboard-footer__menu-item:focus{border-radius:2px;outline-offset:3px;outline:1.5px solid var(--jp-black);box-shadow:none}.jp-dashboard-footer__menu .jp-dashboard-footer__menu-item:hover{text-decoration:underline;text-decoration-thickness:1.5px}.jp-dashboard-footer__menu .jp-dashboard-footer__menu-item:hover:focus{text-decoration:none}.jp-dashboard-footer__menu .jp-dashboard-footer__menu-item__icon{width:16px;height:16px;margin-left:4px;position:absolute;right:0}.jp-dashboard-footer__a8c-logo{margin-left:auto}.jp-dashboard-footer.is-md .jp-dashboard-footer__a8c-logo{margin-left:0}",""]);const s=o},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.21_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.43.3_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../components/components/layout/breakpoints.module.scss":(i,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),a=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=e.n(a),o=d()(c());o.push([i.id,"",""]),o.locals={sm:"(max-width: 599px)",md:"(min-width: 600px) and (max-width: 959px)",lg:"(min-width: 960px)"};const s=o}}]);})();
