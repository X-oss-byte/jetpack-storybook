(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6282],{"../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js":(K,s,c)=>{"use strict";c.d(s,{Z:()=>E});function E(d){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},E(d)}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(K,s,c)=>{"use strict";c.d(s,{ZP:()=>n,_y:()=>m,yE:()=>u});var E=c("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");const m=(0,E.createContext)(d.Z),{Consumer:A,Provider:l}=m,u=A,n=l},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(K,s,c)=>{"use strict";c.d(s,{Z:()=>m});var E=c("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function m(){return(0,E.useContext)(d._y)}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js":(K,s,c)=>{"use strict";c.d(s,{Z:()=>d});var E=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/registry.js");const d=(0,E.p)()},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js":(K,s,c)=>{"use strict";c.d(s,{M:()=>E,R:()=>d});function E(m){const A=(...l)=>m(A.registry.select)(...l);return A.isRegistrySelector=!0,A}function d(m){return m.isRegistryControl=!0,m}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/lock-unlock.js":(K,s,c)=>{"use strict";c.d(s,{U:()=>m,d:()=>d});var E=c("../../../node_modules/.pnpm/@wordpress+private-apis@0.19.0/node_modules/@wordpress/private-apis/build-module/implementation.js");const{lock:d,unlock:m}=(0,E.es)("I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.","@wordpress/data")},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js":(K,s,c)=>{"use strict";c.d(s,{Z:()=>ct});var E={};c.r(E),c.d(E,{getCachedResolvers:()=>qe,getIsResolving:()=>Xe,getResolutionError:()=>Ye,getResolutionState:()=>se,hasFinishedResolution:()=>ze,hasResolutionFailed:()=>Je,hasResolvingSelectors:()=>et,hasStartedResolution:()=>je,isResolving:()=>Qe});var d={};c.r(d),c.d(d,{failResolution:()=>Ie,failResolutions:()=>nt,finishResolution:()=>Pe,finishResolutions:()=>rt,invalidateResolution:()=>ot,invalidateResolutionForStore:()=>st,invalidateResolutionForStoreSelector:()=>ut,startResolution:()=>Ae,startResolutions:()=>tt});var m=c("../../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js");function A(e,t){if((0,m.Z)(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if((0,m.Z)(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function l(e){var t=A(e,"string");return(0,m.Z)(t)==="symbol"?t:String(t)}function u(e,t,r){return t=l(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(o){u(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function f(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var g=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),p=function(){return Math.random().toString(36).substring(7).split("").join(".")},y={INIT:"@@redux/INIT"+p(),REPLACE:"@@redux/REPLACE"+p(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+p()}};function v(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e){if(e===void 0)return"undefined";if(e===null)return"null";var t=typeof e;switch(t){case"boolean":case"string":case"number":case"symbol":case"function":return t}if(Array.isArray(e))return"array";if(S(e))return"date";if(I(e))return"error";var r=O(e);switch(r){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return r}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}function O(e){return typeof e.constructor=="function"?e.constructor.name:null}function I(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function S(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function R(e){var t=typeof e;return t}function T(e,t,r){var o;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(f(0));if(typeof t=="function"&&typeof r=="undefined"&&(r=t,t=void 0),typeof r!="undefined"){if(typeof r!="function")throw new Error(f(1));return r(T)(e,t)}if(typeof e!="function")throw new Error(f(2));var h=e,P=t,M=[],w=M,D=!1;function B(){w===M&&(w=M.slice())}function C(){if(D)throw new Error(f(3));return P}function V(W){if(typeof W!="function")throw new Error(f(4));if(D)throw new Error(f(5));var Q=!0;return B(),w.push(W),function(){if(Q){if(D)throw new Error(f(6));Q=!1,B();var G=w.indexOf(W);w.splice(G,1),M=null}}}function F(W){if(!v(W))throw new Error(f(7));if(typeof W.type=="undefined")throw new Error(f(8));if(D)throw new Error(f(9));try{D=!0,P=h(P,W)}finally{D=!1}for(var Q=M=w,J=0;J<Q.length;J++){var G=Q[J];G()}return W}function Y(W){if(typeof W!="function")throw new Error(f(10));h=W,F({type:y.REPLACE})}function z(){var W,Q=V;return W={subscribe:function(G){if(typeof G!="object"||G===null)throw new Error(f(11));function ne(){G.next&&G.next(C())}ne();var ee=Q(ne);return{unsubscribe:ee}}},W[g]=function(){return this},W}return F({type:y.INIT}),o={dispatch:F,subscribe:V,getState:C,replaceReducer:Y},o[g]=z,o}var _=null;function U(e){typeof console!="undefined"&&typeof console.error=="function"&&console.error(e);try{throw new Error(e)}catch(t){}}function k(e,t,r,o){var h=Object.keys(t),P=r&&r.type===y.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(h.length===0)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!v(e))return"The "+P+' has unexpected type of "'+R(e)+'". Expected argument to be an object with the following '+('keys: "'+h.join('", "')+'"');var M=Object.keys(e).filter(function(w){return!t.hasOwnProperty(w)&&!o[w]});if(M.forEach(function(w){o[w]=!0}),!(r&&r.type===y.REPLACE)&&M.length>0)return"Unexpected "+(M.length>1?"keys":"key")+" "+('"'+M.join('", "')+'" found in '+P+". ")+"Expected to find one of the known reducer keys instead: "+('"'+h.join('", "')+'". Unexpected keys will be ignored.')}function N(e){Object.keys(e).forEach(function(t){var r=e[t],o=r(void 0,{type:y.INIT});if(typeof o=="undefined")throw new Error(f(12));if(typeof r(void 0,{type:y.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(f(13))})}function $(e){for(var t=Object.keys(e),r={},o=0;o<t.length;o++){var h=t[o];typeof e[h]=="function"&&(r[h]=e[h])}var P=Object.keys(r),M,w;try{N(r)}catch(D){w=D}return function(B,C){if(B===void 0&&(B={}),w)throw w;if(!1)var V;for(var F=!1,Y={},z=0;z<P.length;z++){var W=P[z],Q=r[W],J=B[W],G=Q(J,C);if(typeof G=="undefined"){var ne=C&&C.type;throw new Error(f(14))}Y[W]=G,F=F||G!==J}return F=F||P.length!==Object.keys(B).length,F?Y:B}}function q(e,t){return function(){return t(e.apply(this,arguments))}}function ae(e,t){if(typeof e=="function")return q(e,t);if(typeof e!="object"||e===null)throw new Error(f(16));var r={};for(var o in e){var h=e[o];typeof h=="function"&&(r[o]=q(h,t))}return r}function ce(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(o){return o}:t.length===1?t[0]:t.reduce(function(o,h){return function(){return o(h.apply(void 0,arguments))}})}function X(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(o){return function(){var h=o.apply(void 0,arguments),P=function(){throw new Error(f(15))},M={getState:h.getState,dispatch:function(){return P.apply(void 0,arguments)}},w=t.map(function(D){return D(M)});return P=ce.apply(void 0,w)(h.dispatch),i(i({},h),{},{dispatch:P})}}}var ge=c("../../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js"),de=c.n(ge),j=c("../../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js"),b=c.n(j);function L(e){return!!e&&typeof e[Symbol.iterator]=="function"&&typeof e.next=="function"}var ue=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js");function ie(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}var le=c("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs");function oe(e){return(0,le.P)(e)&&typeof e.type=="string"}function ke(e,t){return oe(e)&&e.type===t}function Ue(e={},t){const r=Object.entries(e).map(([P,M])=>(w,D,B,C,V)=>{if(!ke(w,P))return!1;const F=M(w);return ie(F)?F.then(C,V):C(F),!0}),o=(P,M)=>oe(P)?(t(P),M(),!0):!1;r.push(o);const h=(0,ue.create)(r);return P=>new Promise((M,w)=>h(P,D=>{oe(D)&&t(D),M(D)},w))}function Ne(e={}){return t=>{const r=Ue(e,t.dispatch);return o=>h=>L(h)?r(h):o(h)}}const we=(e=!1)=>(...t)=>(...r)=>{const o=t.flat();return e&&o.reverse(),o.reduce((h,P)=>[P(...h)],r)[0]},St=we(),Rt=null,De=we(!0);var ye=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/factory.js");const Se="@@data/SELECT",Re="@@data/RESOLVE_SELECT",Oe="@@data/DISPATCH";function ve(e){return e!==null&&typeof e=="object"}function Fe(e,t,...r){return{type:Se,storeKey:ve(e)?e.name:e,selectorName:t,args:r}}function We(e,t,...r){return{type:Re,storeKey:ve(e)?e.name:e,selectorName:t,args:r}}function Ke(e,t,...r){return{type:Oe,storeKey:ve(e)?e.name:e,actionName:t,args:r}}const Et={select:Fe,resolveSelect:We,dispatch:Ke},xe={[Se]:(0,ye.R)(e=>({storeKey:t,selectorName:r,args:o})=>e.select(t)[r](...o)),[Re]:(0,ye.R)(e=>({storeKey:t,selectorName:r,args:o})=>{const h=e.select(t)[r].hasResolver?"resolveSelect":"select";return e[h](t)[r](...o)}),[Oe]:(0,ye.R)(e=>({storeKey:t,actionName:r,args:o})=>e.dispatch(t)[r](...o))};var fe=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/lock-unlock.js");const $e=()=>e=>t=>ie(t)?t.then(r=>{if(r)return e(r)}):e(t);var Ee=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/store/index.js");const Ve=(e,t)=>()=>r=>o=>{const h=e.select(Ee.Z).getCachedResolvers(t);return Object.entries(h).forEach(([P,M])=>{var D,B,C;const w=(C=(B=(D=e.stores)==null?void 0:D[t])==null?void 0:B.resolvers)==null?void 0:C[P];!w||!w.shouldInvalidate||M.forEach((V,F)=>{(V==null?void 0:V.status)!=="finished"&&(V==null?void 0:V.status)!=="error"||!w.shouldInvalidate(o,...F)||e.dispatch(Ee.Z).invalidateResolution(t,P,F)})}),r(o)};function Ze(e){return()=>t=>r=>typeof r=="function"?r(e):t(r)}const Be=e=>t=>(r={},o)=>{const h=o[e];if(h===void 0)return r;const P=t(r[h],o);return P===r[h]?r:{...r,[h]:P}};function te(e){if(e==null)return[];const t=e.length;let r=t;for(;r>0&&e[r-1]===void 0;)r--;return r===t?e:e.slice(0,r)}const Ge=Be("selectorName")((e=new(b()),t)=>{switch(t.type){case"START_RESOLUTION":{const r=new(b())(e);return r.set(te(t.args),{status:"resolving"}),r}case"FINISH_RESOLUTION":{const r=new(b())(e);return r.set(te(t.args),{status:"finished"}),r}case"FAIL_RESOLUTION":{const r=new(b())(e);return r.set(te(t.args),{status:"error",error:t.error}),r}case"START_RESOLUTIONS":{const r=new(b())(e);for(const o of t.args)r.set(te(o),{status:"resolving"});return r}case"FINISH_RESOLUTIONS":{const r=new(b())(e);for(const o of t.args)r.set(te(o),{status:"finished"});return r}case"FAIL_RESOLUTIONS":{const r=new(b())(e);return t.args.forEach((o,h)=>{const P={status:"error",error:void 0},M=t.errors[h];M&&(P.error=M),r.set(te(o),P)}),r}case"INVALIDATE_RESOLUTION":{const r=new(b())(e);return r.delete(te(t.args)),r}}return e}),He=(e={},t)=>{switch(t.type){case"INVALIDATE_RESOLUTION_FOR_STORE":return{};case"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR":{if(t.selectorName in e){const{[t.selectorName]:r,...o}=e;return o}return e}case"START_RESOLUTION":case"FINISH_RESOLUTION":case"FAIL_RESOLUTION":case"START_RESOLUTIONS":case"FINISH_RESOLUTIONS":case"FAIL_RESOLUTIONS":case"INVALIDATE_RESOLUTION":return Ge(e,t)}return e};function se(e,t,r){const o=e[t];if(o)return o.get(te(r))}function Xe(e,t,r){const o=se(e,t,r);return o&&o.status==="resolving"}function je(e,t,r){return se(e,t,r)!==void 0}function ze(e,t,r){var h;const o=(h=se(e,t,r))==null?void 0:h.status;return o==="finished"||o==="error"}function Je(e,t,r){var o;return((o=se(e,t,r))==null?void 0:o.status)==="error"}function Ye(e,t,r){const o=se(e,t,r);return(o==null?void 0:o.status)==="error"?o.error:null}function Qe(e,t,r){var o;return((o=se(e,t,r))==null?void 0:o.status)==="resolving"}function qe(e){return e}function et(e){return Object.values(e).some(t=>Array.from(t._map.values()).some(r=>{var o;return((o=r[1])==null?void 0:o.status)==="resolving"}))}function Ae(e,t){return{type:"START_RESOLUTION",selectorName:e,args:t}}function Pe(e,t){return{type:"FINISH_RESOLUTION",selectorName:e,args:t}}function Ie(e,t,r){return{type:"FAIL_RESOLUTION",selectorName:e,args:t,error:r}}function tt(e,t){return{type:"START_RESOLUTIONS",selectorName:e,args:t}}function rt(e,t){return{type:"FINISH_RESOLUTIONS",selectorName:e,args:t}}function nt(e,t,r){return{type:"FAIL_RESOLUTIONS",selectorName:e,args:t,errors:r}}function ot(e,t){return{type:"INVALIDATE_RESOLUTION",selectorName:e,args:t}}function st(){return{type:"INVALIDATE_RESOLUTION_FOR_STORE"}}function ut(e){return{type:"INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR",selectorName:e}}const be=e=>{const t=[...e];for(let r=t.length-1;r>=0;r--)t[r]===void 0&&t.splice(r,1);return t},re=(e,t)=>Object.fromEntries(Object.entries(e!=null?e:{}).map(([r,o])=>[r,t(o,r)])),it=(e,t)=>t instanceof Map?Object.fromEntries(t):t;function at(){const e={};return{isRunning(t,r){return e[t]&&e[t].get(be(r))},clear(t,r){e[t]&&e[t].delete(be(r))},markAsRunning(t,r){e[t]||(e[t]=new(b())),e[t].set(be(r),!0)}}}function Te(e){const t=new WeakMap;return{get(r,o){let h=t.get(r);return h||(h=e(r,o),t.set(r,h)),h}}}function ct(e,t){const r={},o={},h={privateActions:r,registerPrivateActions:M=>{Object.assign(r,M)},privateSelectors:o,registerPrivateSelectors:M=>{Object.assign(o,M)}},P={name:e,instantiate:M=>{const w=new Set,D=t.reducer,C=lt(e,t,M,{registry:M,get dispatch(){return Q},get select(){return Me},get resolveSelect(){return Ce()}});(0,fe.d)(C,h);const V=at();function F(Z){return(...x)=>Promise.resolve(C.dispatch(Z(...x)))}const Y={...re(d,F),...re(t.actions,F)},z=Te(F),W=new Proxy(()=>{},{get:(Z,x)=>{const H=r[x];return H?z.get(H,x):Y[x]}}),Q=new Proxy(W,{apply:(Z,x,[H])=>C.dispatch(H)});(0,fe.d)(Y,W);const J=t.resolvers?pt(t.resolvers):{};function G(Z,x){Z.isRegistrySelector&&(Z.registry=M);const H=(..._t)=>{const wt=C.__unstableOriginalGetState();return Z(wt.root,..._t)},he=J[x];return he?mt(H,x,he,C,V):(H.hasResolver=!1,H)}function ne(Z){const x=(...H)=>{const he=C.__unstableOriginalGetState();return Z(he.metadata,...H)};return x.hasResolver=!1,x}const ee={...re(E,ne),...re(t.selectors,G)},pe=Te(G);for(const[Z,x]of Object.entries(o))pe.get(x,Z);const me=new Proxy(()=>{},{get:(Z,x)=>{const H=o[x];return H?pe.get(H,x):ee[x]}}),Me=new Proxy(me,{apply:(Z,x,[H])=>H(C.__unstableOriginalGetState())});(0,fe.d)(ee,me);const _e=dt(ee,C),ht=ft(ee,C),gt=()=>ee,yt=()=>Y,Ce=()=>_e,vt=()=>ht;C.__unstableOriginalGetState=C.getState,C.getState=()=>C.__unstableOriginalGetState().root;const bt=C&&(Z=>(w.add(Z),()=>w.delete(Z)));let Le=C.__unstableOriginalGetState();return C.subscribe(()=>{const Z=C.__unstableOriginalGetState(),x=Z!==Le;if(Le=Z,x)for(const H of w)H()}),{reducer:D,store:C,actions:Y,selectors:ee,resolvers:J,getSelectors:gt,getResolveSelectors:Ce,getSuspendSelectors:vt,getActions:yt,subscribe:bt}}};return(0,fe.d)(P,h),P}function lt(e,t,r,o){const h={...t.controls,...xe},P=re(h,V=>V.isRegistryControl?V(r):V),M=[Ve(r,e),$e,Ne(P),Ze(o)],w=[X(...M)];typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION__&&w.push(window.__REDUX_DEVTOOLS_EXTENSION__({name:e,instanceId:e,serialize:{replacer:it}}));const{reducer:D,initialState:B}=t,C=de()({metadata:He,root:D});return T(C,{root:B},De(w))}function dt(e,t){const{getIsResolving:r,hasStartedResolution:o,hasFinishedResolution:h,hasResolutionFailed:P,isResolving:M,getCachedResolvers:w,getResolutionState:D,getResolutionError:B,hasResolvingSelectors:C,...V}=e;return re(V,(F,Y)=>F.hasResolver?(...z)=>new Promise((W,Q)=>{const J=()=>e.hasFinishedResolution(Y,z),G=me=>{if(e.hasResolutionFailed(Y,z)){const _e=e.getResolutionError(Y,z);Q(_e)}else W(me)},ne=()=>F.apply(null,z),ee=ne();if(J())return G(ee);const pe=t.subscribe(()=>{J()&&(pe(),G(ne()))})}):async(...z)=>F.apply(null,z))}function ft(e,t){return re(e,(r,o)=>r.hasResolver?(...h)=>{const P=r.apply(null,h);if(e.hasFinishedResolution(o,h)){if(e.hasResolutionFailed(o,h))throw e.getResolutionError(o,h);return P}throw new Promise(M=>{const w=t.subscribe(()=>{e.hasFinishedResolution(o,h)&&(M(),w())})})}:r)}function pt(e){return re(e,t=>t.fulfill?t:{...t,fulfill:t})}function mt(e,t,r,o,h){function P(w){const D=o.getState();if(h.isRunning(t,w)||typeof r.isFulfilled=="function"&&r.isFulfilled(D,...w))return;const{metadata:B}=o.__unstableOriginalGetState();je(B,t,w)||(h.markAsRunning(t,w),setTimeout(async()=>{h.clear(t,w),o.dispatch(Ae(t,w));try{const C=r.fulfill(...w);C&&await o.dispatch(C),o.dispatch(Pe(t,w))}catch(C){o.dispatch(Ie(t,w,C))}},0))}const M=(...w)=>(P(w),e(...w));return M.hasResolver=!0,M}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/registry.js":(K,s,c)=>{"use strict";c.d(s,{p:()=>f});var E=c("../../../node_modules/.pnpm/@wordpress+hooks@3.38.0/node_modules/@wordpress/hooks/build-module/index.js");const d=Object.create(null);function m(g,p={}){const{since:y,version:v,alternative:a,plugin:O,link:I,hint:S}=p,R=O?` from ${O}`:"",T=y?` since version ${y}`:"",_=v?` and will be removed${R} in version ${v}`:"",U=a?` Please use ${a} instead.`:"",k=I?` See: ${I}`:"",N=S?` Note: ${S}`:"",$=`${g} is deprecated${T}${_}.${U}${k}${N}`;$ in d||((0,E.Kw)("deprecated",g,p,$),console.warn($),d[$]=!0)}var A=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/index.js"),l=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/store/index.js");function u(){let g=!1,p=!1;const y=new Set,v=()=>Array.from(y).forEach(a=>a());return{get isPaused(){return g},subscribe(a){return y.add(a),()=>y.delete(a)},pause(){g=!0},resume(){g=!1,p&&(p=!1,v())},emit(){if(g){p=!0;return}v()}}}var n=c("../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/lock-unlock.js");function i(g){return typeof g=="string"?g:g.name}function f(g={},p=null){const y={},v=u();let a=null;function O(){v.emit()}const I=(j,b)=>{if(!b)return v.subscribe(j);const L=i(b),ue=y[L];return ue?ue.subscribe(j):p?p.subscribe(j,b):v.subscribe(j)};function S(j){const b=i(j);a==null||a.add(b);const L=y[b];return L?L.getSelectors():p==null?void 0:p.select(b)}function R(j,b){a=new Set;try{return j.call(this)}finally{b.current=Array.from(a),a=null}}function T(j){const b=i(j);a==null||a.add(b);const L=y[b];return L?L.getResolveSelectors():p&&p.resolveSelect(b)}function _(j){const b=i(j);a==null||a.add(b);const L=y[b];return L?L.getSuspendSelectors():p&&p.suspendSelect(b)}function U(j){const b=i(j),L=y[b];return L?L.getActions():p&&p.dispatch(b)}function k(j){return Object.fromEntries(Object.entries(j).map(([b,L])=>typeof L!="function"?[b,L]:[b,function(){return X[b].apply(null,arguments)}]))}function N(j,b){if(y[j])return console.error('Store "'+j+'" is already registered.'),y[j];const L=b();if(typeof L.getSelectors!="function")throw new TypeError("store.getSelectors must be a function");if(typeof L.getActions!="function")throw new TypeError("store.getActions must be a function");if(typeof L.subscribe!="function")throw new TypeError("store.subscribe must be a function");L.emitter=u();const ue=L.subscribe;if(L.subscribe=ie=>{const le=L.emitter.subscribe(ie),oe=ue(()=>{if(L.emitter.isPaused){L.emitter.emit();return}ie()});return()=>{oe==null||oe(),le==null||le()}},y[j]=L,L.subscribe(O),p)try{(0,n.U)(L.store).registerPrivateActions((0,n.U)(p).privateActionsOf(j)),(0,n.U)(L.store).registerPrivateSelectors((0,n.U)(p).privateSelectorsOf(j))}catch(ie){}return L}function $(j){N(j.name,()=>j.instantiate(X))}function q(j,b){m("wp.data.registerGenericStore",{since:"5.9",alternative:"wp.data.register( storeDescriptor )"}),N(j,()=>b)}function ae(j,b){if(!b.reducer)throw new TypeError("Must specify store reducer");return N(j,()=>(0,A.Z)(j,b).instantiate(X)).store}function ce(j){if(v.isPaused){j();return}v.pause(),Object.values(y).forEach(b=>b.emitter.pause()),j(),v.resume(),Object.values(y).forEach(b=>b.emitter.resume())}let X={batch:ce,stores:y,namespaces:y,subscribe:I,select:S,resolveSelect:T,suspendSelect:_,dispatch:U,use:ge,register:$,registerGenericStore:q,registerStore:ae,__unstableMarkListeningStores:R};function ge(j,b){if(j)return X={...X,...j(X,b)},X}X.register(l.Z);for(const[j,b]of Object.entries(g))X.register((0,A.Z)(j,b));p&&p.subscribe(O);const de=k(X);return(0,n.d)(de,{privateActionsOf:j=>{try{return(0,n.U)(y[j].store).privateActions}catch(b){return{}}},privateSelectorsOf:j=>{try{return(0,n.U)(y[j].store).privateSelectors}catch(b){return{}}}}),de}},"../../../node_modules/.pnpm/@wordpress+data@9.7.0_react@18.2.0/node_modules/@wordpress/data/build-module/store/index.js":(K,s,c)=>{"use strict";c.d(s,{Z:()=>d});const d={name:"core/data",instantiate(m){const A=u=>(n,...i)=>m.select(n)[u](...i),l=u=>(n,...i)=>m.dispatch(n)[u](...i);return{getSelectors(){return Object.fromEntries(["getIsResolving","hasStartedResolution","hasFinishedResolution","isResolving","getCachedResolvers"].map(u=>[u,A(u)]))},getActions(){return Object.fromEntries(["startResolution","finishResolution","invalidateResolution","invalidateResolutionForStore","invalidateResolutionForStoreSelector"].map(u=>[u,l(u)]))},subscribe(){return()=>()=>{}}}}}},"../../../node_modules/.pnpm/@wordpress+private-apis@0.19.0/node_modules/@wordpress/private-apis/build-module/implementation.js":(K,s,c)=>{"use strict";c.d(s,{es:()=>u});var E=c("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");const d=["@wordpress/block-editor","@wordpress/block-library","@wordpress/blocks","@wordpress/commands","@wordpress/components","@wordpress/core-commands","@wordpress/core-data","@wordpress/customize-widgets","@wordpress/data","@wordpress/edit-post","@wordpress/edit-site","@wordpress/edit-widgets","@wordpress/editor","@wordpress/router"],m=[],A="I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.";let l;try{l=!E.env.IS_WORDPRESS_CORE}catch(a){l=!0}const u=(a,O)=>{if(!d.includes(O))throw new Error(`You tried to opt-in to unstable APIs as module "${O}". This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`);if(!l&&m.includes(O))throw new Error(`You tried to opt-in to unstable APIs as module "${O}" which is already registered. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`);if(a!==A)throw new Error("You tried to opt-in to unstable APIs without confirming you know the consequences. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on the next WordPress release.");return m.push(O),{lock:n,unlock:i}};function n(a,O){if(!a)throw new Error("Cannot lock an undefined object.");g in a||(a[g]={}),f.set(a[g],O)}function i(a){if(!a)throw new Error("Cannot unlock an undefined object.");if(!(g in a))throw new Error("Cannot unlock an object that was not locked before. ");return f.get(a[g])}const f=new WeakMap,g=Symbol("Private API ID");function p(a){d.push(a)}function y(){for(;d.length;)d.pop()}function v(){for(;m.length;)m.pop()}},"../../../node_modules/.pnpm/equivalent-key-map@0.2.2/node_modules/equivalent-key-map/equivalent-key-map.js":K=>{"use strict";function s(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(u){return typeof u}:s=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},s(l)}function c(l,u){if(!(l instanceof u))throw new TypeError("Cannot call a class as a function")}function E(l,u){for(var n=0;n<u.length;n++){var i=u[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function d(l,u,n){return u&&E(l.prototype,u),n&&E(l,n),l}function m(l,u){var n=l._map,i=l._arrayTreeMap,f=l._objectTreeMap;if(n.has(u))return n.get(u);for(var g=Object.keys(u).sort(),p=Array.isArray(u)?i:f,y=0;y<g.length;y++){var v=g[y];if(p=p.get(v),p===void 0)return;var a=u[v];if(p=p.get(a),p===void 0)return}var O=p.get("_ekm_value");if(O)return n.delete(O[0]),O[0]=u,p.set("_ekm_value",O),n.set(u,O),O}var A=function(){function l(u){if(c(this,l),this.clear(),u instanceof l){var n=[];u.forEach(function(f,g){n.push([g,f])}),u=n}if(u!=null)for(var i=0;i<u.length;i++)this.set(u[i][0],u[i][1])}return d(l,[{key:"set",value:function(n,i){if(n===null||s(n)!=="object")return this._map.set(n,i),this;for(var f=Object.keys(n).sort(),g=[n,i],p=Array.isArray(n)?this._arrayTreeMap:this._objectTreeMap,y=0;y<f.length;y++){var v=f[y];p.has(v)||p.set(v,new l),p=p.get(v);var a=n[v];p.has(a)||p.set(a,new l),p=p.get(a)}var O=p.get("_ekm_value");return O&&this._map.delete(O[0]),p.set("_ekm_value",g),this._map.set(n,g),this}},{key:"get",value:function(n){if(n===null||s(n)!=="object")return this._map.get(n);var i=m(this,n);if(i)return i[1]}},{key:"has",value:function(n){return n===null||s(n)!=="object"?this._map.has(n):m(this,n)!==void 0}},{key:"delete",value:function(n){return this.has(n)?(this.set(n,void 0),!0):!1}},{key:"forEach",value:function(n){var i=this,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this;this._map.forEach(function(g,p){p!==null&&s(p)==="object"&&(g=g[1]),n.call(f,g,p,i)})}},{key:"clear",value:function(){this._map=new Map,this._arrayTreeMap=new Map,this._objectTreeMap=new Map}},{key:"size",get:function(){return this._map.size}}]),l}();K.exports=A},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/async.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.race=s.join=s.fork=s.promise=void 0;var E=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),d=u(E),m=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js"),A=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/dispatcher.js"),l=u(A);function u(v){return v&&v.__esModule?v:{default:v}}var n=s.promise=function(a,O,I,S,R){return d.default.promise(a)?(a.then(O,R),!0):!1},i=new Map,f=s.fork=function(a,O,I){if(!d.default.fork(a))return!1;var S=Symbol("fork"),R=(0,l.default)();i.set(S,R),I(a.iterator.apply(null,a.args),function(_){return R.dispatch(_)},function(_){return R.dispatch((0,m.error)(_))});var T=R.subscribe(function(){T(),i.delete(S)});return O(S),!0},g=s.join=function(a,O,I,S,R){if(!d.default.join(a))return!1;var T=i.get(a.task);return T?function(){var _=T.subscribe(function(U){_(),O(U)})}():R("join error : task not found"),!0},p=s.race=function(a,O,I,S,R){if(!d.default.race(a))return!1;var T=!1,_=function(N,$,q){T||(T=!0,N[$]=q,O(N))},U=function(N){T||R(N)};return d.default.array(a.competitors)?function(){var k=a.competitors.map(function(){return!1});a.competitors.forEach(function(N,$){I(N,function(q){return _(k,$,q)},U)})}():function(){var k=Object.keys(a.competitors).reduce(function(N,$){return N[$]=!1,N},{});Object.keys(a.competitors).forEach(function(N){I(a.competitors[N],function($){return _(k,N,$)},U)})}(),!0},y=function(a,O){if(!d.default.subscribe(a))return!1;if(!d.default.channel(a.channel))throw new Error('the first argument of "subscribe" must be a valid channel');var I=a.channel.subscribe(function(S){I&&I(),O(S)});return!0};s.default=[n,f,g,p,y]},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/builtin.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.iterator=s.array=s.object=s.error=s.any=void 0;var E=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),d=m(E);function m(f){return f&&f.__esModule?f:{default:f}}var A=s.any=function(g,p,y,v){return v(g),!0},l=s.error=function(g,p,y,v,a){return d.default.error(g)?(a(g.error),!0):!1},u=s.object=function(g,p,y,v,a){if(!d.default.all(g)||!d.default.obj(g.value))return!1;var O={},I=Object.keys(g.value),S=0,R=!1,T=function(k,N){R||(O[k]=N,S++,S===I.length&&v(O))},_=function(k,N){R||(R=!0,a(N))};return I.map(function(U){y(g.value[U],function(k){return T(U,k)},function(k){return _(U,k)})}),!0},n=s.array=function(g,p,y,v,a){if(!d.default.all(g)||!d.default.array(g.value))return!1;var O=[],I=0,S=!1,R=function(U,k){S||(O[U]=k,I++,I===g.value.length&&v(O))},T=function(U,k){S||(S=!0,a(k))};return g.value.map(function(_,U){y(_,function(k){return R(U,k)},function(k){return T(U,k)})}),!0},i=s.iterator=function(g,p,y,v,a){return d.default.iterator(g)?(y(g,p,a),!0):!1};s.default=[l,i,n,u,A]},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/wrap.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.cps=s.call=void 0;var E=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),d=m(E);function m(n){return n&&n.__esModule?n:{default:n}}function A(n){if(Array.isArray(n)){for(var i=0,f=Array(n.length);i<n.length;i++)f[i]=n[i];return f}else return Array.from(n)}var l=s.call=function(i,f,g,p,y){if(!d.default.call(i))return!1;try{f(i.func.apply(i.context,i.args))}catch(v){y(v)}return!0},u=s.cps=function(i,f,g,p,y){var v;return d.default.cps(i)?((v=i.func).call.apply(v,[null].concat(A(i.args),[function(a,O){a?y(a):f(O)}])),!0):!1};s.default=[l,u]},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/create.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var E=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/builtin.js"),d=l(E),m=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js"),A=l(m);function l(i){return i&&i.__esModule?i:{default:i}}function u(i){if(Array.isArray(i)){for(var f=0,g=Array(i.length);f<i.length;f++)g[f]=i[f];return g}else return Array.from(i)}var n=function(){var f=arguments.length<=0||arguments[0]===void 0?[]:arguments[0],g=[].concat(u(f),u(d.default)),p=function y(v){var a=arguments.length<=1||arguments[1]===void 0?function(){}:arguments[1],O=arguments.length<=2||arguments[2]===void 0?function(){}:arguments[2],I=function(T){var _=function(N){return function($){try{var q=N?T.throw($):T.next($),ae=q.value,ce=q.done;if(ce)return a(ae);U(ae)}catch(X){return O(X)}}},U=function k(N){g.some(function($){return $(N,k,y,_(!1),_(!0))})};_(!1)()},S=A.default.iterator(v)?v:regeneratorRuntime.mark(function R(){return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,v;case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},R,this)})();I(S,a,O)};return p};s.default=n},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/index.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.wrapControls=s.asyncControls=s.create=void 0;var E=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js");Object.keys(E).forEach(function(f){f!=="default"&&Object.defineProperty(s,f,{enumerable:!0,get:function(){return E[f]}})});var d=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/create.js"),m=i(d),A=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/async.js"),l=i(A),u=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/controls/wrap.js"),n=i(u);function i(f){return f&&f.__esModule?f:{default:f}}s.create=m.default,s.asyncControls=l.default,s.wrapControls=n.default},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/dispatcher.js":(K,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var c=function(){var d=[];return{subscribe:function(A){return d.push(A),function(){d=d.filter(function(l){return l!==A})}},dispatch:function(A){d.slice().forEach(function(l){return l(A)})}}};s.default=c},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/helpers.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.createChannel=s.subscribe=s.cps=s.apply=s.call=s.invoke=s.delay=s.race=s.join=s.fork=s.error=s.all=void 0;var E=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js"),d=m(E);function m(I){return I&&I.__esModule?I:{default:I}}var A=s.all=function(S){return{type:d.default.all,value:S}},l=s.error=function(S){return{type:d.default.error,error:S}},u=s.fork=function(S){for(var R=arguments.length,T=Array(R>1?R-1:0),_=1;_<R;_++)T[_-1]=arguments[_];return{type:d.default.fork,iterator:S,args:T}},n=s.join=function(S){return{type:d.default.join,task:S}},i=s.race=function(S){return{type:d.default.race,competitors:S}},f=s.delay=function(S){return new Promise(function(R){setTimeout(function(){return R(!0)},S)})},g=s.invoke=function(S){for(var R=arguments.length,T=Array(R>1?R-1:0),_=1;_<R;_++)T[_-1]=arguments[_];return{type:d.default.call,func:S,context:null,args:T}},p=s.call=function(S,R){for(var T=arguments.length,_=Array(T>2?T-2:0),U=2;U<T;U++)_[U-2]=arguments[U];return{type:d.default.call,func:S,context:R,args:_}},y=s.apply=function(S,R,T){return{type:d.default.call,func:S,context:R,args:T}},v=s.cps=function(S){for(var R=arguments.length,T=Array(R>1?R-1:0),_=1;_<R;_++)T[_-1]=arguments[_];return{type:d.default.cps,func:S,args:T}},a=s.subscribe=function(S){return{type:d.default.subscribe,channel:S}},O=s.createChannel=function(S){var R=[],T=function(k){return R.push(k),function(){return R.splice(R.indexOf(k),1)}},_=function(k){return R.forEach(function(N){return N(k)})};return S(_),{subscribe:T}}},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/is.js":(K,s,c)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol?"symbol":typeof u},d=c("../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js"),m=A(d);function A(u){return u&&u.__esModule?u:{default:u}}var l={obj:function(n){return(typeof n=="undefined"?"undefined":E(n))==="object"&&!!n},all:function(n){return l.obj(n)&&n.type===m.default.all},error:function(n){return l.obj(n)&&n.type===m.default.error},array:Array.isArray,func:function(n){return typeof n=="function"},promise:function(n){return n&&l.func(n.then)},iterator:function(n){return n&&l.func(n.next)&&l.func(n.throw)},fork:function(n){return l.obj(n)&&n.type===m.default.fork},join:function(n){return l.obj(n)&&n.type===m.default.join},race:function(n){return l.obj(n)&&n.type===m.default.race},call:function(n){return l.obj(n)&&n.type===m.default.call},cps:function(n){return l.obj(n)&&n.type===m.default.cps},subscribe:function(n){return l.obj(n)&&n.type===m.default.subscribe},channel:function(n){return l.obj(n)&&l.func(n.subscribe)}};s.default=l},"../../../node_modules/.pnpm/rungen@0.3.2/node_modules/rungen/dist/utils/keys.js":(K,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var c={all:Symbol("all"),error:Symbol("error"),fork:Symbol("fork"),join:Symbol("join"),race:Symbol("race"),call:Symbol("call"),cps:Symbol("cps"),subscribe:Symbol("subscribe")};s.default=c},"../../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js":K=>{function s(c){var E=Object.keys(c),d;return d=function(){var m,A,l;for(m="return {",A=0;A<E.length;A++)l=JSON.stringify(E[A]),m+=l+":r["+l+"](s["+l+"],a),";return m+="}",new Function("r,s,a",m)}(),function(A,l){var u,n,i;if(A===void 0)return d(c,{},l);for(u=d(c,A,l),n=E.length;n--;)if(i=E[n],A[i]!==u[i])return u;return A}}K.exports=s}}]);})();
