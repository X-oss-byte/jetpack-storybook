(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9750],{"../../../node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js":(k,g,w)=>{"use strict";w.d(g,{cx:()=>$});var c=w("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=w("../../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),h=w("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function f(x,A){if(x.inserted[A.name]===void 0)return x.insert("",A,x.sheet,!0)}function T(x,A,O){var G=[],Z=(0,h.fp)(x,G,O);return G.length<2?O:Z+A(G)}var p=function(A){var O=(0,c.Z)(A);O.sheet.speedy=function(X){this.isSpeedy=X},O.compat=!0;var G=function(){for(var B=arguments.length,U=new Array(B),C=0;C<B;C++)U[C]=arguments[C];var W=(0,l.O)(U,O.registered,void 0);return(0,h.My)(O,W,!1),O.key+"-"+W.name},Z=function(){for(var B=arguments.length,U=new Array(B),C=0;C<B;C++)U[C]=arguments[C];var W=(0,l.O)(U,O.registered),Q="animation-"+W.name;return f(O,{name:W.name,styles:"@keyframes "+Q+"{"+W.styles+"}"}),Q},K=function(){for(var B=arguments.length,U=new Array(B),C=0;C<B;C++)U[C]=arguments[C];var W=(0,l.O)(U,O.registered);f(O,W)},J=function(){for(var B=arguments.length,U=new Array(B),C=0;C<B;C++)U[C]=arguments[C];return T(O.registered,G,M(U))};return{css:G,cx:J,injectGlobal:K,keyframes:Z,hydrate:function(B){B.forEach(function(U){O.inserted[U]=!0})},flush:function(){O.registered={},O.inserted={},O.sheet.flush()},sheet:O.sheet,cache:O,getRegisteredStyles:h.fp.bind(null,O.registered),merge:T.bind(null,O.registered,G)}},M=function x(A){for(var O="",G=0;G<A.length;G++){var Z=A[G];if(Z!=null){var K=void 0;switch(typeof Z){case"boolean":break;case"object":{if(Array.isArray(Z))K=x(Z);else{K="";for(var J in Z)Z[J]&&J&&(K&&(K+=" "),K+=J)}break}default:K=Z}K&&(O&&(O+=" "),O+=K)}}return O},m=p({key:"css"}),P=m.flush,I=m.hydrate,$=m.cx,z=m.merge,L=m.getRegisteredStyles,y=m.injectGlobal,D=m.keyframes,u=m.css,d=m.sheet,_=m.cache},"../../../node_modules/.pnpm/@wordpress+compose@6.14.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(k,g,w)=>{"use strict";w.d(g,{Z:()=>T});var c=w("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const l=new WeakMap;function h(p){const M=l.get(p)||0;return l.set(p,M+1),M}function f(p,M,m){return(0,c.useMemo)(()=>{if(m)return m;const P=h(p);return M?`${M}-${P}`:P},[p,m,M])}const T=f},"../../../node_modules/.pnpm/@wordpress+deprecated@3.37.0/node_modules/@wordpress/deprecated/build-module/index.js":(k,g,w)=>{"use strict";w.d(g,{Z:()=>h});var c=w("../../../node_modules/.pnpm/@wordpress+hooks@3.37.0/node_modules/@wordpress/hooks/build-module/index.js");const l=Object.create(null);function h(f,T={}){const{since:p,version:M,alternative:m,plugin:P,link:I,hint:$}=T,z=P?` from ${P}`:"",L=p?` since version ${p}`:"",y=M?` and will be removed${z} in version ${M}`:"",D=m?` Please use ${m} instead.`:"",u=I?` See: ${I}`:"",d=$?` Note: ${$}`:"",_=`${f} is deprecated${L}${y}.${D}${u}${d}`;_ in l||((0,c.Kw)("deprecated",f,T,_),console.warn(_),l[_]=!0)}},"../../../node_modules/.pnpm/@wordpress+hooks@3.37.0/node_modules/@wordpress/hooks/build-module/index.js":(k,g,w)=>{"use strict";w.d(g,{KG:()=>Z,KJ:()=>K,O:()=>q,Hu:()=>O,Kw:()=>Q,H7:()=>U,iR:()=>J});function c(o){return typeof o!="string"||o===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(o)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const l=c;function h(o){return typeof o!="string"||o===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(o)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(o)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const f=h;function T(o,a){return function(j,i,b,E=10){const S=o[a];if(!f(j)||!l(i))return;if(typeof b!="function"){console.error("The hook callback must be a function.");return}if(typeof E!="number"){console.error("If specified, the hook priority must be a number.");return}const R={callback:b,priority:E,namespace:i};if(S[j]){const F=S[j].handlers;let H;for(H=F.length;H>0&&!(E>=F[H-1].priority);H--);H===F.length?F[H]=R:F.splice(H,0,R),S.__current.forEach(V=>{V.name===j&&V.currentIndex>=H&&V.currentIndex++})}else S[j]={handlers:[R],runs:0};j!=="hookAdded"&&o.doAction("hookAdded",j,i,b,E)}}const p=T;function M(o,a,v=!1){return function(i,b){const E=o[a];if(!f(i)||!v&&!l(b))return;if(!E[i])return 0;let S=0;if(v)S=E[i].handlers.length,E[i]={runs:E[i].runs,handlers:[]};else{const R=E[i].handlers;for(let F=R.length-1;F>=0;F--)R[F].namespace===b&&(R.splice(F,1),S++,E.__current.forEach(H=>{H.name===i&&H.currentIndex>=F&&H.currentIndex--}))}return i!=="hookRemoved"&&o.doAction("hookRemoved",i,b),S}}const m=M;function P(o,a){return function(j,i){const b=o[a];return typeof i!="undefined"?j in b&&b[j].handlers.some(E=>E.namespace===i):j in b}}const I=P;function $(o,a,v=!1){return function(i,...b){const E=o[a];E[i]||(E[i]={handlers:[],runs:0}),E[i].runs++;const S=E[i].handlers;if(!S||!S.length)return v?b[0]:void 0;const R={name:i,currentIndex:0};for(E.__current.push(R);R.currentIndex<S.length;){const H=S[R.currentIndex].callback.apply(null,b);v&&(b[0]=H),R.currentIndex++}if(E.__current.pop(),v)return b[0]}}const z=$;function L(o,a){return function(){var b;var j;const i=o[a];return(j=(b=i.__current[i.__current.length-1])==null?void 0:b.name)!==null&&j!==void 0?j:null}}const y=L;function D(o,a){return function(j){const i=o[a];return typeof j=="undefined"?typeof i.__current[0]!="undefined":i.__current[0]?j===i.__current[0].name:!1}}const u=D;function d(o,a){return function(j){const i=o[a];if(f(j))return i[j]&&i[j].runs?i[j].runs:0}}const _=d;class x{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=p(this,"actions"),this.addFilter=p(this,"filters"),this.removeAction=m(this,"actions"),this.removeFilter=m(this,"filters"),this.hasAction=I(this,"actions"),this.hasFilter=I(this,"filters"),this.removeAllActions=m(this,"actions",!0),this.removeAllFilters=m(this,"filters",!0),this.doAction=z(this,"actions"),this.applyFilters=z(this,"filters",!0),this.currentAction=y(this,"actions"),this.currentFilter=y(this,"filters"),this.doingAction=u(this,"actions"),this.doingFilter=u(this,"filters"),this.didAction=_(this,"actions"),this.didFilter=_(this,"filters")}}function A(){return new x}const O=A,G=O(),{addAction:Z,addFilter:K,removeAction:J,removeFilter:X,hasAction:B,hasFilter:U,removeAllActions:C,removeAllFilters:W,doAction:Q,applyFilters:q,currentAction:N,currentFilter:ee,doingAction:te,doingFilter:e,didAction:t,didFilter:n,actions:r,filters:s}=G},"../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js":k=>{"use strict";var g=function(d){return w(d)&&!c(d)};function w(u){return!!u&&typeof u=="object"}function c(u){var d=Object.prototype.toString.call(u);return d==="[object RegExp]"||d==="[object Date]"||f(u)}var l=typeof Symbol=="function"&&Symbol.for,h=l?Symbol.for("react.element"):60103;function f(u){return u.$$typeof===h}function T(u){return Array.isArray(u)?[]:{}}function p(u,d){return d.clone!==!1&&d.isMergeableObject(u)?y(T(u),u,d):u}function M(u,d,_){return u.concat(d).map(function(x){return p(x,_)})}function m(u,d){if(!d.customMerge)return y;var _=d.customMerge(u);return typeof _=="function"?_:y}function P(u){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(u).filter(function(d){return Object.propertyIsEnumerable.call(u,d)}):[]}function I(u){return Object.keys(u).concat(P(u))}function $(u,d){try{return d in u}catch(_){return!1}}function z(u,d){return $(u,d)&&!(Object.hasOwnProperty.call(u,d)&&Object.propertyIsEnumerable.call(u,d))}function L(u,d,_){var x={};return _.isMergeableObject(u)&&I(u).forEach(function(A){x[A]=p(u[A],_)}),I(d).forEach(function(A){z(u,A)||($(u,A)&&_.isMergeableObject(d[A])?x[A]=m(A,_)(u[A],d[A],_):x[A]=p(d[A],_))}),x}function y(u,d,_){_=_||{},_.arrayMerge=_.arrayMerge||M,_.isMergeableObject=_.isMergeableObject||g,_.cloneUnlessOtherwiseSpecified=p;var x=Array.isArray(d),A=Array.isArray(u),O=x===A;return O?x?_.arrayMerge(u,d,_):L(u,d,_):p(d,_)}y.all=function(d,_){if(!Array.isArray(d))throw new Error("first argument should be an array");return d.reduce(function(x,A){return y(x,A,_)},{})};var D=y;k.exports=D},"../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js":k=>{"use strict";var g=typeof BigInt64Array!="undefined";k.exports=function w(c,l){if(c===l)return!0;if(c&&l&&typeof c=="object"&&typeof l=="object"){if(c.constructor!==l.constructor)return!1;var h,f,T;if(Array.isArray(c)){if(h=c.length,h!=l.length)return!1;for(f=h;f--!==0;)if(!w(c[f],l[f]))return!1;return!0}if(c instanceof Map&&l instanceof Map){if(c.size!==l.size)return!1;for(f of c.entries())if(!l.has(f[0]))return!1;for(f of c.entries())if(!w(f[1],l.get(f[0])))return!1;return!0}if(c instanceof Set&&l instanceof Set){if(c.size!==l.size)return!1;for(f of c.entries())if(!l.has(f[0]))return!1;return!0}if(ArrayBuffer.isView(c)&&ArrayBuffer.isView(l)){if(h=c.length,h!=l.length)return!1;for(f=h;f--!==0;)if(c[f]!==l[f])return!1;return!0}if(c.constructor===RegExp)return c.source===l.source&&c.flags===l.flags;if(c.valueOf!==Object.prototype.valueOf)return c.valueOf()===l.valueOf();if(c.toString!==Object.prototype.toString)return c.toString()===l.toString();if(T=Object.keys(c),h=T.length,h!==Object.keys(l).length)return!1;for(f=h;f--!==0;)if(!Object.prototype.hasOwnProperty.call(l,T[f]))return!1;for(f=h;f--!==0;){var p=T[f];if(!w(c[p],l[p]))return!1}return!0}return c!==c&&l!==l}},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(k,g,w)=>{"use strict";w.d(g,{P:()=>l});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function c(h){return Object.prototype.toString.call(h)==="[object Object]"}function l(h){var f,T;return c(h)===!1?!1:(f=h.constructor,f===void 0?!0:(T=f.prototype,!(c(T)===!1||T.hasOwnProperty("isPrototypeOf")===!1)))}},"../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js":(k,g,w)=>{"use strict";w.d(g,{B:()=>p});var c={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},az:{regexp:/\u0130/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},lt:{regexp:/\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,map:{I:"i\u0307",J:"j\u0307",\u012E:"\u012F\u0307",\u00CC:"i\u0307\u0300",\u00CD:"i\u0307\u0301",\u0128:"i\u0307\u0303"}}};function l(m,P){var I=c[P.toLowerCase()];return h(I?m.replace(I.regexp,function($){return I.map[$]}):m)}function h(m){return m.toLowerCase()}var f=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],T=/[^A-Z0-9]+/gi;function p(m,P){P===void 0&&(P={});for(var I=P.splitRegexp,$=I===void 0?f:I,z=P.stripRegexp,L=z===void 0?T:z,y=P.transform,D=y===void 0?h:y,u=P.delimiter,d=u===void 0?" ":u,_=M(M(m,$,"$1\0$2"),L,"\0"),x=0,A=_.length;_.charAt(x)==="\0";)x++;for(;_.charAt(A-1)==="\0";)A--;return _.slice(x,A).split("\0").map(D).join(d)}function M(m,P,I){return P instanceof RegExp?m.replace(P,I):P.reduce(function($,z){return $.replace(z,I)},m)}},"../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js":(k,g,w)=>{"use strict";w.d(g,{o:()=>f});var c=w("../../../node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs"),l=w("../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");function h(T,p){return p===void 0&&(p={}),(0,l.B)(T,(0,c.pi)({delimiter:"."},p))}function f(T,p){return p===void 0&&(p={}),h(T,(0,c.pi)({delimiter:"-"},p))}},"../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":k=>{var g=k.exports={},w,c;function l(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?w=setTimeout:w=l}catch(y){w=l}try{typeof clearTimeout=="function"?c=clearTimeout:c=h}catch(y){c=h}})();function f(y){if(w===setTimeout)return setTimeout(y,0);if((w===l||!w)&&setTimeout)return w=setTimeout,setTimeout(y,0);try{return w(y,0)}catch(D){try{return w.call(null,y,0)}catch(u){return w.call(this,y,0)}}}function T(y){if(c===clearTimeout)return clearTimeout(y);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(y);try{return c(y)}catch(D){try{return c.call(null,y)}catch(u){return c.call(this,y)}}}var p=[],M=!1,m,P=-1;function I(){!M||!m||(M=!1,m.length?p=m.concat(p):P=-1,p.length&&$())}function $(){if(!M){var y=f(I);M=!0;for(var D=p.length;D;){for(m=p,p=[];++P<D;)m&&m[P].run();P=-1,D=p.length}m=null,M=!1,T(y)}}g.nextTick=function(y){var D=new Array(arguments.length-1);if(arguments.length>1)for(var u=1;u<arguments.length;u++)D[u-1]=arguments[u];p.push(new z(y,D)),p.length===1&&!M&&f($)};function z(y,D){this.fun=y,this.array=D}z.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={};function L(){}g.on=L,g.addListener=L,g.once=L,g.off=L,g.removeListener=L,g.removeAllListeners=L,g.emit=L,g.prependListener=L,g.prependOnceListener=L,g.listeners=function(y){return[]},g.binding=function(y){throw new Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(y){throw new Error("process.chdir is not supported")},g.umask=function(){return 0}},"../../../node_modules/.pnpm/tslib@2.6.1/node_modules/tslib/tslib.es6.mjs":(k,g,w)=>{"use strict";w.d(g,{pi:()=>h});var c=function(e,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},c(e,t)};function l(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");c(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var h=function(){return h=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},h.apply(this,arguments)};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function T(e,t,n,r){var s=arguments.length,o=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var v=e.length-1;v>=0;v--)(a=e[v])&&(o=(s<3?a(o):s>3?a(t,n,o):a(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}function p(e,t){return function(n,r){t(n,r,e)}}function M(e,t,n,r,s,o){function a(Y){if(Y!==void 0&&typeof Y!="function")throw new TypeError("Function expected");return Y}for(var v=r.kind,j=v==="getter"?"get":v==="setter"?"set":"value",i=!t&&e?r.static?e:e.prototype:null,b=t||(i?Object.getOwnPropertyDescriptor(i,r.name):{}),E,S=!1,R=n.length-1;R>=0;R--){var F={};for(var H in r)F[H]=H==="access"?{}:r[H];for(var H in r.access)F.access[H]=r.access[H];F.addInitializer=function(Y){if(S)throw new TypeError("Cannot add initializers after decoration has completed");o.push(a(Y||null))};var V=(0,n[R])(v==="accessor"?{get:b.get,set:b.set}:b[j],F);if(v==="accessor"){if(V===void 0)continue;if(V===null||typeof V!="object")throw new TypeError("Object expected");(E=a(V.get))&&(b.get=E),(E=a(V.set))&&(b.set=E),(E=a(V.init))&&s.unshift(E)}else(E=a(V))&&(v==="field"?s.unshift(E):b[j]=E)}i&&Object.defineProperty(i,r.name,b),S=!0}function m(e,t,n){for(var r=arguments.length>2,s=0;s<t.length;s++)n=r?t[s].call(e,n):t[s].call(e);return r?n:void 0}function P(e){return typeof e=="symbol"?e:"".concat(e)}function I(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function $(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function z(e,t,n,r){function s(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function v(b){try{i(r.next(b))}catch(E){a(E)}}function j(b){try{i(r.throw(b))}catch(E){a(E)}}function i(b){b.done?o(b.value):s(b.value).then(v,j)}i((r=r.apply(e,t||[])).next())})}function L(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,s,o,a;return a={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function v(i){return function(b){return j([i,b])}}function j(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(n=0)),n;)try{if(r=1,s&&(o=i[0]&2?s.return:i[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[i[0]&2,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,s=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1],o=i;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(i);break}o[2]&&n.ops.pop(),n.trys.pop();continue}i=t.call(e,n)}catch(b){i=[6,b],s=0}finally{r=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}var y=Object.create?function(e,t,n,r){r===void 0&&(r=n);var s=Object.getOwnPropertyDescriptor(t,n);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,s)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]};function D(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&y(t,e,n)}function u(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),s,o=[],a;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)o.push(s.value)}catch(v){a={error:v}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function x(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),s=0,t=0;t<n;t++)for(var o=arguments[t],a=0,v=o.length;a<v;a++,s++)r[s]=o[a];return r}function A(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,o;r<s;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function G(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),s,o=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(S){r[S]&&(s[S]=function(R){return new Promise(function(F,H){o.push([S,R,F,H])>1||v(S,R)})})}function v(S,R){try{j(r[S](R))}catch(F){E(o[0][3],F)}}function j(S){S.value instanceof O?Promise.resolve(S.value.v).then(i,b):E(o[0][2],S)}function i(S){v("next",S)}function b(S){v("throw",S)}function E(S,R){S(R),o.shift(),o.length&&v(o[0][0],o[0][1])}}function Z(e){var t,n;return t={},r("next"),r("throw",function(s){throw s}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(s,o){t[s]=e[s]?function(a){return(n=!n)?{value:O(e[s](a)),done:!1}:o?o(a):a}:o}}function K(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof u=="function"?u(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(a){return new Promise(function(v,j){a=e[o](a),s(v,j,a.done,a.value)})}}function s(o,a,v,j){Promise.resolve(j).then(function(i){o({value:i,done:v})},a)}}function J(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var X=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function B(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&y(t,e,n);return X(t,e),t}function U(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function W(e,t,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(e,n):s?s.value=n:t.set(e,n),n}function Q(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function q(e,t,n){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if(typeof r!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var N=typeof SuppressedError=="function"?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function ee(e){function t(r){e.error=e.hasError?new N(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}function n(){for(;e.stack.length;){var r=e.stack.pop();try{var s=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(s).then(n,function(o){return t(o),n()})}catch(o){t(o)}}if(e.hasError)throw e.error}return n()}var te={__extends:l,__assign:h,__rest:f,__decorate:T,__param:p,__metadata:$,__awaiter:z,__generator:L,__createBinding:y,__exportStar:D,__values:u,__read:d,__spread:_,__spreadArrays:x,__spreadArray:A,__await:O,__asyncGenerator:G,__asyncDelegator:Z,__asyncValues:K,__makeTemplateObject:J,__importStar:B,__importDefault:U,__classPrivateFieldGet:C,__classPrivateFieldSet:W,__classPrivateFieldIn:Q,__addDisposableResource:q,__disposeResources:ee}}}]);})();
