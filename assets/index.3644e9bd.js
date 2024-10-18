function wf(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(o,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),bf=Symbol.for("react.portal"),kf=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),xf=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Ef=Symbol.for("react.memo"),Af=Symbol.for("react.lazy"),hc=Symbol.iterator;function Rf(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,$u={};function ro(e,t,n){this.props=e,this.context=t,this.refs=$u,this.updater=n||_u}ro.prototype.isReactComponent={};ro.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qu(){}qu.prototype=ro.prototype;function $s(e,t,n){this.props=e,this.context=t,this.refs=$u,this.updater=n||_u}var qs=$s.prototype=new qu;qs.constructor=$s;Ju(qs,ro.prototype);qs.isPureReactComponent=!0;var pc=Array.isArray,Gu=Object.prototype.hasOwnProperty,Gs={current:null},Yu={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,t,n){var o,a={},r=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(r=""+t.key),t)Gu.call(t,o)&&!Yu.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)a[o]===void 0&&(a[o]=s[o]);return{$$typeof:sa,type:e,key:r,ref:i,props:a,_owner:Gs.current}}function Of(e,t){return{$$typeof:sa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===sa}function Wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fc=/\/+/g;function si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wf(""+e.key):t.toString(36)}function Da(e,t,n,o,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case sa:case bf:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+si(i,0):o,pc(a)?(n="",e!=null&&(n=e.replace(fc,"$&/")+"/"),Da(a,t,n,"",function(c){return c})):a!=null&&(Ys(a)&&(a=Of(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(fc,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",pc(e))for(var s=0;s<e.length;s++){r=e[s];var l=o+si(r,s);i+=Da(r,t,n,l,a)}else if(l=Rf(e),typeof l=="function")for(e=l.call(e),s=0;!(r=e.next()).done;)r=r.value,l=o+si(r,s++),i+=Da(r,t,n,l,a);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ma(e,t,n){if(e==null)return e;var o=[],a=0;return Da(e,o,"","",function(r){return t.call(n,r,a++)}),o}function Mf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Na={transition:null},Pf={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Na,ReactCurrentOwner:Gs};function Ku(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ro;z.Fragment=kf;z.Profiler=xf;z.PureComponent=$s;z.StrictMode=If;z.Suspense=Cf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;z.act=Ku;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Ju({},e.props),a=e.key,r=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,i=Gs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Gu.call(t,l)&&!Yu.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:sa,type:e.type,key:a,ref:r,props:o,_owner:i}};z.createContext=function(e){return e={$$typeof:jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sf,_context:e},e.Consumer=e};z.createElement=Vu;z.createFactory=function(e){var t=Vu.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Tf,render:e}};z.isValidElement=Ys;z.lazy=function(e){return{$$typeof:Af,_payload:{_status:-1,_result:e},_init:Mf}};z.memo=function(e,t){return{$$typeof:Ef,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};z.unstable_act=Ku;z.useCallback=function(e,t){return Re.current.useCallback(e,t)};z.useContext=function(e){return Re.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};z.useEffect=function(e,t){return Re.current.useEffect(e,t)};z.useId=function(){return Re.current.useId()};z.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Re.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};z.useRef=function(e){return Re.current.useRef(e)};z.useState=function(e){return Re.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Re.current.useTransition()};z.version="18.3.1";(function(e){e.exports=z})(b);const gt=Js(b.exports),mc=wf({__proto__:null,default:gt},[b.exports]);var zi={},Vs={exports:{}},qe={},Qu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var P=C.length;C.push(O);e:for(;0<P;){var G=P-1>>>1,S=C[G];if(0<a(S,O))C[G]=O,C[P]=S,P=G;else break e}}function n(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var O=C[0],P=C.pop();if(P!==O){C[0]=P;e:for(var G=0,S=C.length,A=S>>>1;G<A;){var D=2*(G+1)-1,F=C[D],W=D+1,N=C[W];if(0>a(F,P))W<S&&0>a(N,F)?(C[G]=N,C[W]=P,G=W):(C[G]=F,C[D]=P,G=D);else if(W<S&&0>a(N,P))C[G]=N,C[W]=P,G=W;else break e}}return O}function a(C,O){var P=C.sortIndex-O.sortIndex;return P!==0?P:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],c=[],d=1,h=null,m=3,v=!1,y=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var O=n(c);O!==null;){if(O.callback===null)o(c);else if(O.startTime<=C)o(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function w(C){if(g=!1,f(C),!y)if(n(l)!==null)y=!0,Ve(j);else{var O=n(c);O!==null&&dt(w,O.startTime-C)}}function j(C,O){y=!1,g&&(g=!1,p(R),R=-1),v=!0;var P=m;try{for(f(O),h=n(l);h!==null&&(!(h.expirationTime>O)||C&&!he());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var S=G(h.expirationTime<=O);O=e.unstable_now(),typeof S=="function"?h.callback=S:h===n(l)&&o(l),f(O)}else o(l);h=n(l)}if(h!==null)var A=!0;else{var D=n(c);D!==null&&dt(w,D.startTime-O),A=!1}return A}finally{h=null,m=P,v=!1}}var I=!1,x=null,R=-1,K=5,M=-1;function he(){return!(e.unstable_now()-M<K)}function We(){if(x!==null){var C=e.unstable_now();M=C;var O=!0;try{O=x(!0,C)}finally{O?He():(I=!1,x=null)}}else I=!1}var He;if(typeof u=="function")He=function(){u(We)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Dt=Pt.port2;Pt.port1.onmessage=We,He=function(){Dt.postMessage(null)}}else He=function(){k(We,0)};function Ve(C){x=C,I||(I=!0,He())}function dt(C,O){R=k(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Ve(j))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var P=m;m=O;try{return C()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=m;m=C;try{return O()}finally{m=P}},e.unstable_scheduleCallback=function(C,O,P){var G=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?G+P:G):P=G,C){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=P+S,C={id:d++,callback:O,priorityLevel:C,startTime:P,expirationTime:S,sortIndex:-1},P>G?(C.sortIndex=P,t(c,C),n(l)===null&&C===n(c)&&(g?(p(R),R=-1):g=!0,dt(w,P-G))):(C.sortIndex=S,t(l,C),y||v||(y=!0,Ve(j))),C},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(C){var O=m;return function(){var P=m;m=O;try{return C.apply(this,arguments)}finally{m=P}}}})(Xu);(function(e){e.exports=Xu})(Qu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=b.exports,$e=Qu.exports;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zu=new Set,No={};function In(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(No[e]=t,e=0;e<t.length;e++)Zu.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,Nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yc={},gc={};function Lf(e){return Bi.call(gc,e)?!0:Bi.call(yc,e)?!1:Nf.test(e)?gc[e]=!0:(yc[e]=!0,!1)}function Ff(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hf(e,t,n,o){if(t===null||typeof t>"u"||Ff(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,o,a,r,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=i}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,Qs);ke[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,Qs);ke[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,Qs);ke[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,n,o){var a=ke.hasOwnProperty(t)?ke[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hf(t,n,a,o)&&(n=null),o||a===null?Lf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Wt=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),An=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Zs=Symbol.for("react.strict_mode"),Ui=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),td=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),_i=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),tl=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),nd=Symbol.for("react.offscreen"),vc=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,li;function ko(e){if(li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);li=t&&t[1]||""}return`
`+li+e}var ci=!1;function ui(e,t){if(!e||ci)return"";ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),r=o.stack.split(`
`),i=a.length-1,s=r.length-1;1<=i&&0<=s&&a[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==r[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ko(e):""}function zf(e){switch(e.tag){case 5:return ko(e.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return e=ui(e.type,!1),e;case 11:return e=ui(e.type.render,!1),e;case 1:return e=ui(e.type,!0),e;default:return""}}function $i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case An:return"Portal";case Ui:return"Profiler";case Zs:return"StrictMode";case _i:return"Suspense";case Ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case td:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case el:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tl:return t=e.displayName||null,t!==null?t:$i(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return $i(e(t))}catch{}}return null}function Bf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $i(t);case 8:return t===Zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uf(e){var t=od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ga(e){e._valueTracker||(e._valueTracker=Uf(e))}function ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=od(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qi(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function wc(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rd(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function Gi(e,t){rd(e,t);var n=Zt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yi(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yi(e,t,n){(t!=="number"||Ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function Bn(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Io(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function id(e,t){var n=Zt(t.value),o=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ic(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var va,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){_f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=cd(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Jf=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qi(e,t){if(t){if(Jf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,Un=null,_n=null;function xc(e){if(e=ua(e)){if(typeof es!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Wr(t),es(e.stateNode,e.type,t))}}function dd(e){Un?_n?_n.push(e):_n=[e]:Un=e}function hd(){if(Un){var e=Un,t=_n;if(_n=Un=null,xc(e),t)for(e=0;e<t.length;e++)xc(t[e])}}function pd(e,t){return e(t)}function fd(){}var di=!1;function md(e,t,n){if(di)return e(t,n);di=!0;try{return pd(e,t,n)}finally{di=!1,(Un!==null||_n!==null)&&(fd(),hd())}}function Fo(e,t){var n=e.stateNode;if(n===null)return null;var o=Wr(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ts=!1;if(Ct)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){ts=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{ts=!1}function $f(e,t,n,o,a,r,i,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Eo=!1,Qa=null,Xa=!1,ns=null,qf={onError:function(e){Eo=!0,Qa=e}};function Gf(e,t,n,o,a,r,i,s,l){Eo=!1,Qa=null,$f.apply(qf,arguments)}function Yf(e,t,n,o,a,r,i,s,l){if(Gf.apply(this,arguments),Eo){if(Eo){var c=Qa;Eo=!1,Qa=null}else throw Error(T(198));Xa||(Xa=!0,ns=c)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sc(e){if(xn(e)!==e)throw Error(T(188))}function Vf(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Sc(a),e;if(r===o)return Sc(a),t;r=r.sibling}throw Error(T(188))}if(n.return!==o.return)n=a,o=r;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,o=r;break}if(s===o){i=!0,o=a,n=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===n){i=!0,n=r,o=a;break}if(s===o){i=!0,o=r,n=a;break}s=s.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==o)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function gd(e){return e=Vf(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var wd=$e.unstable_scheduleCallback,jc=$e.unstable_cancelCallback,Kf=$e.unstable_shouldYield,Qf=$e.unstable_requestPaint,le=$e.unstable_now,Xf=$e.unstable_getCurrentPriorityLevel,ol=$e.unstable_ImmediatePriority,bd=$e.unstable_UserBlockingPriority,Za=$e.unstable_NormalPriority,Zf=$e.unstable_LowPriority,kd=$e.unstable_IdlePriority,Er=null,vt=null;function em(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:om,tm=Math.log,nm=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(tm(e)/nm|0)|0}var wa=64,ba=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function er(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,r=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~a;s!==0?o=xo(s):(r&=i,r!==0&&(o=xo(r)))}else i=n&~a,i!==0?o=xo(i):r!==0&&(o=xo(r));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,r=t&-t,a>=r||a===16&&(r&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-lt(t),a=1<<n,o|=e[n],t&=~a;return o}function am(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rm(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-lt(r),s=1<<i,l=a[i];l===-1?((s&n)===0||(s&o)!==0)&&(a[i]=am(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}}function os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Id(){var e=wa;return wa<<=1,(wa&4194240)===0&&(wa=64),e}function hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-lt(n),r=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~r}}function al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-lt(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Y=0;function xd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sd,rl,jd,Td,Cd,as=!1,ka=[],$t=null,qt=null,Gt=null,Ho=new Map,zo=new Map,Bt=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Ho.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function ho(e,t,n,o,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ua(t),t!==null&&rl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function lm(e,t,n,o,a){switch(t){case"focusin":return $t=ho($t,e,t,n,o,a),!0;case"dragenter":return qt=ho(qt,e,t,n,o,a),!0;case"mouseover":return Gt=ho(Gt,e,t,n,o,a),!0;case"pointerover":var r=a.pointerId;return Ho.set(r,ho(Ho.get(r)||null,e,t,n,o,a)),!0;case"gotpointercapture":return r=a.pointerId,zo.set(r,ho(zo.get(r)||null,e,t,n,o,a)),!0}return!1}function Ed(e){var t=cn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=yd(n),t!==null){e.blockedOn=t,Cd(e.priority,function(){jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function La(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Zi=o,n.target.dispatchEvent(o),Zi=null}else return t=ua(n),t!==null&&rl(t),e.blockedOn=n,!1;t.shift()}return!0}function Cc(e,t,n){La(e)&&n.delete(t)}function cm(){as=!1,$t!==null&&La($t)&&($t=null),qt!==null&&La(qt)&&(qt=null),Gt!==null&&La(Gt)&&(Gt=null),Ho.forEach(Cc),zo.forEach(Cc)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,as||(as=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,cm)))}function Bo(e){function t(a){return po(a,e)}if(0<ka.length){po(ka[0],e);for(var n=1;n<ka.length;n++){var o=ka[n];o.blockedOn===e&&(o.blockedOn=null)}}for($t!==null&&po($t,e),qt!==null&&po(qt,e),Gt!==null&&po(Gt,e),Ho.forEach(t),zo.forEach(t),n=0;n<Bt.length;n++)o=Bt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Ed(n),n.blockedOn===null&&Bt.shift()}var Jn=Wt.ReactCurrentBatchConfig,tr=!0;function um(e,t,n,o){var a=Y,r=Jn.transition;Jn.transition=null;try{Y=1,il(e,t,n,o)}finally{Y=a,Jn.transition=r}}function dm(e,t,n,o){var a=Y,r=Jn.transition;Jn.transition=null;try{Y=4,il(e,t,n,o)}finally{Y=a,Jn.transition=r}}function il(e,t,n,o){if(tr){var a=rs(e,t,n,o);if(a===null)Ii(e,t,o,nr,n),Tc(e,o);else if(lm(a,e,t,n,o))o.stopPropagation();else if(Tc(e,o),t&4&&-1<sm.indexOf(e)){for(;a!==null;){var r=ua(a);if(r!==null&&Sd(r),r=rs(e,t,n,o),r===null&&Ii(e,t,o,nr,n),r===a)break;a=r}a!==null&&o.stopPropagation()}else Ii(e,t,o,null,n)}}var nr=null;function rs(e,t,n,o){if(nr=null,e=nl(o),e=cn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nr=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case ol:return 1;case bd:return 4;case Za:case Zf:return 16;case kd:return 536870912;default:return 16}default:return 16}}var _t=null,sl=null,Fa=null;function Rd(){if(Fa)return Fa;var e,t=sl,n=t.length,o,a="value"in _t?_t.value:_t.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[r-o];o++);return Fa=a.slice(e,1<o?1-o:void 0)}function Ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ia(){return!0}function Ec(){return!1}function Ge(e){function t(n,o,a,r,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ia:Ec,this.isPropagationStopped=Ec,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),t}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Ge(io),ca=re({},io,{view:0,detail:0}),hm=Ge(ca),pi,fi,fo,Ar=re({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(pi=e.screenX-fo.screenX,fi=e.screenY-fo.screenY):fi=pi=0,fo=e),pi)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),Ac=Ge(Ar),pm=re({},Ar,{dataTransfer:0}),fm=Ge(pm),mm=re({},ca,{relatedTarget:0}),mi=Ge(mm),ym=re({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=Ge(ym),vm=re({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wm=Ge(vm),bm=re({},io,{data:0}),Rc=Ge(bm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xm[e])?!!t[e]:!1}function cl(){return Sm}var jm=re({},ca,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tm=Ge(jm),Cm=re({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=Ge(Cm),Em=re({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),Am=Ge(Em),Rm=re({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=Ge(Rm),Wm=re({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mm=Ge(Wm),Pm=[9,13,27,32],ul=Ct&&"CompositionEvent"in window,Ao=null;Ct&&"documentMode"in document&&(Ao=document.documentMode);var Dm=Ct&&"TextEvent"in window&&!Ao,Od=Ct&&(!ul||Ao&&8<Ao&&11>=Ao),Wc=String.fromCharCode(32),Mc=!1;function Wd(e,t){switch(e){case"keyup":return Pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Nm(e,t){switch(e){case"compositionend":return Md(t);case"keypress":return t.which!==32?null:(Mc=!0,Wc);case"textInput":return e=t.data,e===Wc&&Mc?null:e;default:return null}}function Lm(e,t){if(On)return e==="compositionend"||!ul&&Wd(e,t)?(e=Rd(),Fa=sl=_t=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function Pd(e,t,n,o){dd(o),t=or(t,"onChange"),0<t.length&&(n=new ll("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Ro=null,Uo=null;function Hm(e){$d(e,0)}function Rr(e){var t=Pn(e);if(ad(t))return e}function zm(e,t){if(e==="change")return t}var Dd=!1;if(Ct){var yi;if(Ct){var gi="oninput"in document;if(!gi){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),gi=typeof Dc.oninput=="function"}yi=gi}else yi=!1;Dd=yi&&(!document.documentMode||9<document.documentMode)}function Nc(){Ro&&(Ro.detachEvent("onpropertychange",Nd),Uo=Ro=null)}function Nd(e){if(e.propertyName==="value"&&Rr(Uo)){var t=[];Pd(t,Uo,e,nl(e)),md(Hm,t)}}function Bm(e,t,n){e==="focusin"?(Nc(),Ro=t,Uo=n,Ro.attachEvent("onpropertychange",Nd)):e==="focusout"&&Nc()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rr(Uo)}function _m(e,t){if(e==="click")return Rr(t)}function Jm(e,t){if(e==="input"||e==="change")return Rr(t)}function $m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:$m;function _o(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Bi.call(t,a)||!ut(e[a],t[a]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var n=Lc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function Ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fd(){for(var e=window,t=Ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ka(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qm(e){var t=Fd(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ld(n.ownerDocument.documentElement,n)){if(o!==null&&dl(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,r=Math.min(o.start,a);o=o.end===void 0?r:Math.min(o.end,a),!e.extend&&r>o&&(a=o,o=r,r=a),a=Fc(n,r);var i=Fc(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=Ct&&"documentMode"in document&&11>=document.documentMode,Wn=null,is=null,Oo=null,ss=!1;function Hc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ss||Wn==null||Wn!==Ka(o)||(o=Wn,"selectionStart"in o&&dl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oo&&_o(Oo,o)||(Oo=o,o=or(is,"onSelect"),0<o.length&&(t=new ll("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Wn)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},vi={},Hd={};Ct&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Or(e){if(vi[e])return vi[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hd)return vi[e]=t[n];return e}var zd=Or("animationend"),Bd=Or("animationiteration"),Ud=Or("animationstart"),_d=Or("transitionend"),Jd=new Map,zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Jd.set(e,t),In(t,[e])}for(var wi=0;wi<zc.length;wi++){var bi=zc[wi],Ym=bi.toLowerCase(),Vm=bi[0].toUpperCase()+bi.slice(1);tn(Ym,"on"+Vm)}tn(zd,"onAnimationEnd");tn(Bd,"onAnimationIteration");tn(Ud,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(_d,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Bc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Yf(o,t,void 0,e),e.currentTarget=null}function $d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==r&&a.isPropagationStopped())break e;Bc(a,s,c),r=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,c=s.currentTarget,s=s.listener,l!==r&&a.isPropagationStopped())break e;Bc(a,s,c),r=l}}}if(Xa)throw e=ns,Xa=!1,ns=null,e}function ee(e,t){var n=t[hs];n===void 0&&(n=t[hs]=new Set);var o=e+"__bubble";n.has(o)||(qd(t,e,2,!1),n.add(o))}function ki(e,t,n){var o=0;t&&(o|=4),qd(n,e,o,t)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[Sa]){e[Sa]=!0,Zu.forEach(function(n){n!=="selectionchange"&&(Km.has(n)||ki(n,!1,e),ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sa]||(t[Sa]=!0,ki("selectionchange",!1,t))}}function qd(e,t,n,o){switch(Ad(t)){case 1:var a=um;break;case 4:a=dm;break;default:a=il}n=a.bind(null,t,n,e),a=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ii(e,t,n,o,a){var r=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=cn(s),i===null)return;if(l=i.tag,l===5||l===6){o=r=i;continue e}s=s.parentNode}}o=o.return}md(function(){var c=r,d=nl(n),h=[];e:{var m=Jd.get(e);if(m!==void 0){var v=ll,y=e;switch(e){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":v=Tm;break;case"focusin":y="focus",v=mi;break;case"focusout":y="blur",v=mi;break;case"beforeblur":case"afterblur":v=mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Am;break;case zd:case Bd:case Ud:v=gm;break;case _d:v=Om;break;case"scroll":v=hm;break;case"wheel":v=Mm;break;case"copy":case"cut":case"paste":v=wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Oc}var g=(t&4)!==0,k=!g&&e==="scroll",p=g?m!==null?m+"Capture":null:m;g=[];for(var u=c,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=Fo(u,p),w!=null&&g.push($o(u,w,f)))),k)break;u=u.return}0<g.length&&(m=new v(m,y,null,n,d),h.push({event:m,listeners:g}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Zi&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[Et]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?cn(y):null,y!==null&&(k=xn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(g=Ac,w="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=Oc,w="onPointerLeave",p="onPointerEnter",u="pointer"),k=v==null?m:Pn(v),f=y==null?m:Pn(y),m=new g(w,u+"leave",v,n,d),m.target=k,m.relatedTarget=f,w=null,cn(d)===c&&(g=new g(p,u+"enter",y,n,d),g.target=f,g.relatedTarget=k,w=g),k=w,v&&y)t:{for(g=v,p=y,u=0,f=g;f;f=Tn(f))u++;for(f=0,w=p;w;w=Tn(w))f++;for(;0<u-f;)g=Tn(g),u--;for(;0<f-u;)p=Tn(p),f--;for(;u--;){if(g===p||p!==null&&g===p.alternate)break t;g=Tn(g),p=Tn(p)}g=null}else g=null;v!==null&&Uc(h,m,v,g,!1),y!==null&&k!==null&&Uc(h,k,y,g,!0)}}e:{if(m=c?Pn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=zm;else if(Pc(m))if(Dd)j=Jm;else{j=Um;var I=Bm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=_m);if(j&&(j=j(e,c))){Pd(h,j,n,d);break e}I&&I(e,m,c),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&Yi(m,"number",m.value)}switch(I=c?Pn(c):window,e){case"focusin":(Pc(I)||I.contentEditable==="true")&&(Wn=I,is=c,Oo=null);break;case"focusout":Oo=is=Wn=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,Hc(h,n,d);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Hc(h,n,d)}var x;if(ul)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else On?Wd(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Od&&n.locale!=="ko"&&(On||R!=="onCompositionStart"?R==="onCompositionEnd"&&On&&(x=Rd()):(_t=d,sl="value"in _t?_t.value:_t.textContent,On=!0)),I=or(c,R),0<I.length&&(R=new Rc(R,e,null,n,d),h.push({event:R,listeners:I}),x?R.data=x:(x=Md(n),x!==null&&(R.data=x)))),(x=Dm?Nm(e,n):Lm(e,n))&&(c=or(c,"onBeforeInput"),0<c.length&&(d=new Rc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=x))}$d(h,t)})}function $o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function or(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Fo(e,n),r!=null&&o.unshift($o(e,r,a)),r=Fo(e,t),r!=null&&o.push($o(e,r,a))),e=e.return}return o}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,t,n,o,a){for(var r=t._reactName,i=[];n!==null&&n!==o;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&c!==null&&(s=c,a?(l=Fo(n,r),l!=null&&i.unshift($o(n,l,s))):a||(l=Fo(n,r),l!=null&&i.push($o(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Qm=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(Qm,`
`).replace(Xm,"")}function ja(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(T(425))}function ar(){}var ls=null,cs=null;function us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ds=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,Jc=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Jc<"u"?function(e){return Jc.resolve(null).then(e).catch(ty)}:ds;function ty(e){setTimeout(function(){throw e})}function xi(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Bo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Bo(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var so=Math.random().toString(36).slice(2),yt="__reactFiber$"+so,qo="__reactProps$"+so,Et="__reactContainer$"+so,hs="__reactEvents$"+so,ny="__reactListeners$"+so,oy="__reactHandles$"+so;function cn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[yt])return n;e=$c(e)}return t}e=n,n=e.parentNode}return null}function ua(e){return e=e[yt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Wr(e){return e[qo]||null}var ps=[],Dn=-1;function nn(e){return{current:e}}function te(e){0>Dn||(e.current=ps[Dn],ps[Dn]=null,Dn--)}function Z(e,t){Dn++,ps[Dn]=e.current,e.current=t}var en={},Te=nn(en),De=nn(!1),yn=en;function Qn(e,t){var n=e.type.contextTypes;if(!n)return en;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ne(e){return e=e.childContextTypes,e!=null}function rr(){te(De),te(Te)}function qc(e,t,n){if(Te.current!==en)throw Error(T(168));Z(Te,t),Z(De,n)}function Gd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(T(108,Bf(e)||"Unknown",a));return re({},n,o)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,yn=Te.current,Z(Te,e),Z(De,De.current),!0}function Gc(e,t,n){var o=e.stateNode;if(!o)throw Error(T(169));n?(e=Gd(e,t,yn),o.__reactInternalMemoizedMergedChildContext=e,te(De),te(Te),Z(Te,e)):te(De),Z(De,n)}var xt=null,Mr=!1,Si=!1;function Yd(e){xt===null?xt=[e]:xt.push(e)}function ay(e){Mr=!0,Yd(e)}function on(){if(!Si&&xt!==null){Si=!0;var e=0,t=Y;try{var n=xt;for(Y=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}xt=null,Mr=!1}catch(a){throw xt!==null&&(xt=xt.slice(e+1)),wd(ol,on),a}finally{Y=t,Si=!1}}return null}var Nn=[],Ln=0,sr=null,lr=0,Xe=[],Ze=0,gn=null,St=1,jt="";function rn(e,t){Nn[Ln++]=lr,Nn[Ln++]=sr,sr=e,lr=t}function Vd(e,t,n){Xe[Ze++]=St,Xe[Ze++]=jt,Xe[Ze++]=gn,gn=e;var o=St;e=jt;var a=32-lt(o)-1;o&=~(1<<a),n+=1;var r=32-lt(t)+a;if(30<r){var i=a-a%5;r=(o&(1<<i)-1).toString(32),o>>=i,a-=i,St=1<<32-lt(t)+a|n<<a|o,jt=r+e}else St=1<<r|n<<a|o,jt=e}function hl(e){e.return!==null&&(rn(e,1),Vd(e,1,0))}function pl(e){for(;e===sr;)sr=Nn[--Ln],Nn[Ln]=null,lr=Nn[--Ln],Nn[Ln]=null;for(;e===gn;)gn=Xe[--Ze],Xe[Ze]=null,jt=Xe[--Ze],Xe[Ze]=null,St=Xe[--Ze],Xe[Ze]=null}var _e=null,Ue=null,ne=!1,st=null;function Kd(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Ue=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:St,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Ue=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ms(e){if(ne){var t=Ue;if(t){var n=t;if(!Yc(e,t)){if(fs(e))throw Error(T(418));t=Yt(n.nextSibling);var o=_e;t&&Yc(e,t)?Kd(o,n):(e.flags=e.flags&-4097|2,ne=!1,_e=e)}}else{if(fs(e))throw Error(T(418));e.flags=e.flags&-4097|2,ne=!1,_e=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Ta(e){if(e!==_e)return!1;if(!ne)return Vc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!us(e.type,e.memoizedProps)),t&&(t=Ue)){if(fs(e))throw Qd(),Error(T(418));for(;t;)Kd(e,t),t=Yt(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=_e?Yt(e.stateNode.nextSibling):null;return!0}function Qd(){for(var e=Ue;e;)e=Yt(e.nextSibling)}function Xn(){Ue=_e=null,ne=!1}function fl(e){st===null?st=[e]:st.push(e)}var ry=Wt.ReactCurrentBatchConfig;function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var o=n.stateNode}if(!o)throw Error(T(147,e));var a=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(i){var s=a.refs;i===null?delete s[r]:s[r]=i},t._stringRef=r,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ca(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function Xd(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function o(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function a(p,u){return p=Xt(p,u),p.index=0,p.sibling=null,p}function r(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,f,w){return u===null||u.tag!==6?(u=Oi(f,p.mode,w),u.return=p,u):(u=a(u,f),u.return=p,u)}function l(p,u,f,w){var j=f.type;return j===Rn?d(p,u,f.props.children,w,f.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lt&&Kc(j)===u.type)?(w=a(u,f.props),w.ref=mo(p,u,f),w.return=p,w):(w=qa(f.type,f.key,f.props,null,p.mode,w),w.ref=mo(p,u,f),w.return=p,w)}function c(p,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Wi(f,p.mode,w),u.return=p,u):(u=a(u,f.children||[]),u.return=p,u)}function d(p,u,f,w,j){return u===null||u.tag!==7?(u=pn(f,p.mode,w,j),u.return=p,u):(u=a(u,f),u.return=p,u)}function h(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Oi(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ya:return f=qa(u.type,u.key,u.props,null,p.mode,f),f.ref=mo(p,null,u),f.return=p,f;case An:return u=Wi(u,p.mode,f),u.return=p,u;case Lt:var w=u._init;return h(p,w(u._payload),f)}if(Io(u)||co(u))return u=pn(u,p.mode,f,null),u.return=p,u;Ca(p,u)}return null}function m(p,u,f,w){var j=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:s(p,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ya:return f.key===j?l(p,u,f,w):null;case An:return f.key===j?c(p,u,f,w):null;case Lt:return j=f._init,m(p,u,j(f._payload),w)}if(Io(f)||co(f))return j!==null?null:d(p,u,f,w,null);Ca(p,f)}return null}function v(p,u,f,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,s(u,p,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ya:return p=p.get(w.key===null?f:w.key)||null,l(u,p,w,j);case An:return p=p.get(w.key===null?f:w.key)||null,c(u,p,w,j);case Lt:var I=w._init;return v(p,u,f,I(w._payload),j)}if(Io(w)||co(w))return p=p.get(f)||null,d(u,p,w,j,null);Ca(u,w)}return null}function y(p,u,f,w){for(var j=null,I=null,x=u,R=u=0,K=null;x!==null&&R<f.length;R++){x.index>R?(K=x,x=null):K=x.sibling;var M=m(p,x,f[R],w);if(M===null){x===null&&(x=K);break}e&&x&&M.alternate===null&&t(p,x),u=r(M,u,R),I===null?j=M:I.sibling=M,I=M,x=K}if(R===f.length)return n(p,x),ne&&rn(p,R),j;if(x===null){for(;R<f.length;R++)x=h(p,f[R],w),x!==null&&(u=r(x,u,R),I===null?j=x:I.sibling=x,I=x);return ne&&rn(p,R),j}for(x=o(p,x);R<f.length;R++)K=v(x,p,R,f[R],w),K!==null&&(e&&K.alternate!==null&&x.delete(K.key===null?R:K.key),u=r(K,u,R),I===null?j=K:I.sibling=K,I=K);return e&&x.forEach(function(he){return t(p,he)}),ne&&rn(p,R),j}function g(p,u,f,w){var j=co(f);if(typeof j!="function")throw Error(T(150));if(f=j.call(f),f==null)throw Error(T(151));for(var I=j=null,x=u,R=u=0,K=null,M=f.next();x!==null&&!M.done;R++,M=f.next()){x.index>R?(K=x,x=null):K=x.sibling;var he=m(p,x,M.value,w);if(he===null){x===null&&(x=K);break}e&&x&&he.alternate===null&&t(p,x),u=r(he,u,R),I===null?j=he:I.sibling=he,I=he,x=K}if(M.done)return n(p,x),ne&&rn(p,R),j;if(x===null){for(;!M.done;R++,M=f.next())M=h(p,M.value,w),M!==null&&(u=r(M,u,R),I===null?j=M:I.sibling=M,I=M);return ne&&rn(p,R),j}for(x=o(p,x);!M.done;R++,M=f.next())M=v(x,p,R,M.value,w),M!==null&&(e&&M.alternate!==null&&x.delete(M.key===null?R:M.key),u=r(M,u,R),I===null?j=M:I.sibling=M,I=M);return e&&x.forEach(function(We){return t(p,We)}),ne&&rn(p,R),j}function k(p,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Rn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ya:e:{for(var j=f.key,I=u;I!==null;){if(I.key===j){if(j=f.type,j===Rn){if(I.tag===7){n(p,I.sibling),u=a(I,f.props.children),u.return=p,p=u;break e}}else if(I.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lt&&Kc(j)===I.type){n(p,I.sibling),u=a(I,f.props),u.ref=mo(p,I,f),u.return=p,p=u;break e}n(p,I);break}else t(p,I);I=I.sibling}f.type===Rn?(u=pn(f.props.children,p.mode,w,f.key),u.return=p,p=u):(w=qa(f.type,f.key,f.props,null,p.mode,w),w.ref=mo(p,u,f),w.return=p,p=w)}return i(p);case An:e:{for(I=f.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=a(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Wi(f,p.mode,w),u.return=p,p=u}return i(p);case Lt:return I=f._init,k(p,u,I(f._payload),w)}if(Io(f))return y(p,u,f,w);if(co(f))return g(p,u,f,w);Ca(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=a(u,f),u.return=p,p=u):(n(p,u),u=Oi(f,p.mode,w),u.return=p,p=u),i(p)):n(p,u)}return k}var Zn=Xd(!0),Zd=Xd(!1),cr=nn(null),ur=null,Fn=null,ml=null;function yl(){ml=Fn=ur=null}function gl(e){var t=cr.current;te(cr),e._currentValue=t}function ys(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){ur=e,ml=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pe=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(ml!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(ur===null)throw Error(T(308));Fn=e,ur.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var un=null;function vl(e){un===null?un=[e]:un.push(e)}function eh(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,vl(t)):(n.next=a.next,a.next=n),t.interleaved=n,At(e,o)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(U&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,At(e,n)}return a=o.interleaved,a===null?(t.next=t,vl(o)):(t.next=a.next,a.next=t),o.interleaved=t,At(e,n)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,al(e,n)}}function Qc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=i:r=r.next=i,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dr(e,t,n,o){var a=e.updateQueue;Ft=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,c=l.next;l.next=null,i===null?r=c:i.next=c,i=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;i=0,d=c=l=null,s=r;do{var m=s.lane,v=s.eventTime;if((o&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,g=s;switch(m=t,v=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){h=y.call(v,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,m=typeof y=="function"?y.call(v,h,m):y,m==null)break e;h=re({},h,m);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,l=h):d=d.next=v,i|=m;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else r===null&&(a.shared.lanes=0);wn|=i,e.lanes=i,e.memoizedState=h}}function Xc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(T(191,a));a.call(o)}}}var da={},wt=nn(da),Go=nn(da),Yo=nn(da);function dn(e){if(e===da)throw Error(T(174));return e}function bl(e,t){switch(Z(Yo,t),Z(Go,e),Z(wt,da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ki(t,e)}te(wt),Z(wt,t)}function eo(){te(wt),te(Go),te(Yo)}function nh(e){dn(Yo.current);var t=dn(wt.current),n=Ki(t,e.type);t!==n&&(Z(Go,e),Z(wt,n))}function kl(e){Go.current===e&&(te(wt),te(Go))}var oe=nn(0);function hr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Il(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var Ba=Wt.ReactCurrentDispatcher,Ti=Wt.ReactCurrentBatchConfig,vn=0,ae=null,pe=null,me=null,pr=!1,Wo=!1,Vo=0,iy=0;function Ie(){throw Error(T(321))}function xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Sl(e,t,n,o,a,r){if(vn=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ba.current=e===null||e.memoizedState===null?uy:dy,e=n(o,a),Wo){r=0;do{if(Wo=!1,Vo=0,25<=r)throw Error(T(301));r+=1,me=pe=null,t.updateQueue=null,Ba.current=hy,e=n(o,a)}while(Wo)}if(Ba.current=fr,t=pe!==null&&pe.next!==null,vn=0,me=pe=ae=null,pr=!1,t)throw Error(T(300));return e}function jl(){var e=Vo!==0;return Vo=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ae.memoizedState=me=e:me=me.next=e,me}function ot(){if(pe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?ae.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?ae.memoizedState=me=e:me=me.next=e}return me}function Ko(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=ot(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var o=pe,a=o.baseQueue,r=n.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}o.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,o=o.baseState;var s=i=null,l=null,c=r;do{var d=c.lane;if((vn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=h,i=o):l=l.next=h,ae.lanes|=d,wn|=d}c=c.next}while(c!==null&&c!==r);l===null?i=o:l.next=s,ut(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do r=a.lane,ae.lanes|=r,wn|=r,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ei(e){var t=ot(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do r=e(r,i.action),i=i.next;while(i!==a);ut(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function oh(){}function ah(e,t){var n=ae,o=ot(),a=t(),r=!ut(o.memoizedState,a);if(r&&(o.memoizedState=a,Pe=!0),o=o.queue,Tl(sh.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Qo(9,ih.bind(null,n,o,a,t),void 0,null),ye===null)throw Error(T(349));(vn&30)!==0||rh(n,t,a)}return a}function rh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ih(e,t,n,o){t.value=n,t.getSnapshot=o,lh(t)&&ch(e)}function sh(e,t,n){return n(function(){lh(t)&&ch(e)})}function lh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function ch(e){var t=At(e,1);t!==null&&ct(t,e,1,-1)}function Zc(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=cy.bind(null,ae,e),[t.memoizedState,e]}function Qo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function uh(){return ot().memoizedState}function Ua(e,t,n,o){var a=pt();ae.flags|=e,a.memoizedState=Qo(1|t,n,void 0,o===void 0?null:o)}function Pr(e,t,n,o){var a=ot();o=o===void 0?null:o;var r=void 0;if(pe!==null){var i=pe.memoizedState;if(r=i.destroy,o!==null&&xl(o,i.deps)){a.memoizedState=Qo(t,n,r,o);return}}ae.flags|=e,a.memoizedState=Qo(1|t,n,r,o)}function eu(e,t){return Ua(8390656,8,e,t)}function Tl(e,t){return Pr(2048,8,e,t)}function dh(e,t){return Pr(4,2,e,t)}function hh(e,t){return Pr(4,4,e,t)}function ph(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fh(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4,4,ph.bind(null,t,e),n)}function Cl(){}function mh(e,t){var n=ot();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&xl(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function yh(e,t){var n=ot();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&xl(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function gh(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n):(ut(n,t)||(n=Id(),ae.lanes|=n,wn|=n,e.baseState=!0),t)}function sy(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var o=Ti.transition;Ti.transition={};try{e(!1),t()}finally{Y=n,Ti.transition=o}}function vh(){return ot().memoizedState}function ly(e,t,n){var o=Qt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},wh(e))bh(t,n);else if(n=eh(e,t,n,o),n!==null){var a=Ae();ct(n,e,o,a),kh(n,t,o)}}function cy(e,t,n){var o=Qt(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(wh(e))bh(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,s=r(i,n);if(a.hasEagerState=!0,a.eagerState=s,ut(s,i)){var l=t.interleaved;l===null?(a.next=a,vl(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=eh(e,t,a,o),n!==null&&(a=Ae(),ct(n,e,o,a),kh(n,t,o))}}function wh(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function bh(e,t){Wo=pr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kh(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,al(e,n)}}var fr={readContext:nt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},uy={readContext:nt,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4194308,4,ph.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=pt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=ly.bind(null,ae,e),[o.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Zc,useDebugValue:Cl,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Zc(!1),t=e[0];return e=sy.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ae,a=pt();if(ne){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ye===null)throw Error(T(349));(vn&30)!==0||rh(o,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,eu(sh.bind(null,o,r,e),[e]),o.flags|=2048,Qo(9,ih.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=pt(),t=ye.identifierPrefix;if(ne){var n=jt,o=St;n=(o&~(1<<32-lt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=iy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dy={readContext:nt,useCallback:mh,useContext:nt,useEffect:Tl,useImperativeHandle:fh,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:yh,useReducer:Ci,useRef:uh,useState:function(){return Ci(Ko)},useDebugValue:Cl,useDeferredValue:function(e){var t=ot();return gh(t,pe.memoizedState,e)},useTransition:function(){var e=Ci(Ko)[0],t=ot().memoizedState;return[e,t]},useMutableSource:oh,useSyncExternalStore:ah,useId:vh,unstable_isNewReconciler:!1},hy={readContext:nt,useCallback:mh,useContext:nt,useEffect:Tl,useImperativeHandle:fh,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:yh,useReducer:Ei,useRef:uh,useState:function(){return Ei(Ko)},useDebugValue:Cl,useDeferredValue:function(e){var t=ot();return pe===null?t.memoizedState=e:gh(t,pe.memoizedState,e)},useTransition:function(){var e=Ei(Ko)[0],t=ot().memoizedState;return[e,t]},useMutableSource:oh,useSyncExternalStore:ah,useId:vh,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gs(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dr={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ae(),a=Qt(e),r=Tt(o,a);r.payload=t,n!=null&&(r.callback=n),t=Vt(e,r,a),t!==null&&(ct(t,e,a,o),za(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ae(),a=Qt(e),r=Tt(o,a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Vt(e,r,a),t!==null&&(ct(t,e,a,o),za(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),o=Qt(e),a=Tt(n,o);a.tag=2,t!=null&&(a.callback=t),t=Vt(e,a,o),t!==null&&(ct(t,e,o,n),za(t,e,o))}};function tu(e,t,n,o,a,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!_o(n,o)||!_o(a,r):!0}function Ih(e,t,n){var o=!1,a=en,r=t.contextType;return typeof r=="object"&&r!==null?r=nt(r):(a=Ne(t)?yn:Te.current,o=t.contextTypes,r=(o=o!=null)?Qn(e,a):en),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),t}function nu(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Dr.enqueueReplaceState(t,t.state,null)}function vs(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},wl(e);var r=t.contextType;typeof r=="object"&&r!==null?a.context=nt(r):(r=Ne(t)?yn:Te.current,a.context=Qn(e,r)),a.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(gs(e,t,r,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Dr.enqueueReplaceState(a,a.state,null),dr(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t){try{var n="",o=t;do n+=zf(o),o=o.return;while(o);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:a,digest:null}}function Ai(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ws(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function xh(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){yr||(yr=!0,As=o),ws(e,t)},n}function Sh(e,t,n){n=Tt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){ws(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){ws(e,t),typeof o!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ou(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new py;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Cy.bind(null,e,t,n),t.then(e,e))}function au(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ru(e,t,n,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var fy=Wt.ReactCurrentOwner,Pe=!1;function Ee(e,t,n,o){t.child=e===null?Zd(t,null,n,o):Zn(t,e.child,n,o)}function iu(e,t,n,o,a){n=n.render;var r=t.ref;return $n(t,a),o=Sl(e,t,n,o,r,a),n=jl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Rt(e,t,a)):(ne&&n&&hl(t),t.flags|=1,Ee(e,t,o,a),t.child)}function su(e,t,n,o,a){if(e===null){var r=n.type;return typeof r=="function"&&!Dl(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,jh(e,t,r,o,a)):(e=qa(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,(e.lanes&a)===0){var i=r.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(i,o)&&e.ref===t.ref)return Rt(e,t,a)}return t.flags|=1,e=Xt(r,o),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,o,a){if(e!==null){var r=e.memoizedProps;if(_o(r,o)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=o=r,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Rt(e,t,a)}return bs(e,t,n,o,a)}function Th(e,t,n){var o=t.pendingProps,a=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(zn,Be),Be|=n;else{if((n&1073741824)===0)return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(zn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,Z(zn,Be),Be|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,Z(zn,Be),Be|=o;return Ee(e,t,a,n),t.child}function Ch(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bs(e,t,n,o,a){var r=Ne(n)?yn:Te.current;return r=Qn(t,r),$n(t,a),n=Sl(e,t,n,o,r,a),o=jl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Rt(e,t,a)):(ne&&o&&hl(t),t.flags|=1,Ee(e,t,n,a),t.child)}function lu(e,t,n,o,a){if(Ne(n)){var r=!0;ir(t)}else r=!1;if($n(t,a),t.stateNode===null)_a(e,t),Ih(t,n,o),vs(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=Ne(n)?yn:Te.current,c=Qn(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||l!==c)&&nu(t,i,o,c),Ft=!1;var m=t.memoizedState;i.state=m,dr(t,o,i,a),l=t.memoizedState,s!==o||m!==l||De.current||Ft?(typeof d=="function"&&(gs(t,n,d,o),l=t.memoizedState),(s=Ft||tu(t,n,s,o,m,l,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=c,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,th(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rt(t.type,s),i.props=c,h=t.pendingProps,m=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Ne(n)?yn:Te.current,l=Qn(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==l)&&nu(t,i,o,l),Ft=!1,m=t.memoizedState,i.state=m,dr(t,o,i,a);var y=t.memoizedState;s!==h||m!==y||De.current||Ft?(typeof v=="function"&&(gs(t,n,v,o),y=t.memoizedState),(c=Ft||tu(t,n,c,o,m,y,l)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,y,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,y,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=y),i.props=o,i.state=y,i.context=l,o=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return ks(e,t,n,o,r,a)}function ks(e,t,n,o,a,r){Ch(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&Gc(t,n,!1),Rt(e,t,r);o=t.stateNode,fy.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Zn(t,e.child,null,r),t.child=Zn(t,null,s,r)):Ee(e,t,s,r),t.memoizedState=o.state,a&&Gc(t,n,!0),t.child}function Eh(e){var t=e.stateNode;t.pendingContext?qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qc(e,t.context,!1),bl(e,t.containerInfo)}function cu(e,t,n,o,a){return Xn(),fl(a),t.flags|=256,Ee(e,t,n,o),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ah(e,t,n){var o=t.pendingProps,a=oe.current,r=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Z(oe,a&1),e===null)return ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=o.children,e=o.fallback,r?(o=t.mode,r=t.child,i={mode:"hidden",children:i},(o&1)===0&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Fr(i,o,0,null),e=pn(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=xs(n),t.memoizedState=Is,e):El(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return my(e,t,i,o,s,a,n);if(r){r=o.fallback,i=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:o.children};return(i&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Xt(a,l),o.subtreeFlags=a.subtreeFlags&14680064),s!==null?r=Xt(s,r):(r=pn(r,i,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,i=e.child.memoizedState,i=i===null?xs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~n,t.memoizedState=Is,o}return r=e.child,e=r.sibling,o=Xt(r,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function El(e,t){return t=Fr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ea(e,t,n,o){return o!==null&&fl(o),Zn(t,e.child,null,n),e=El(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function my(e,t,n,o,a,r,i){if(n)return t.flags&256?(t.flags&=-257,o=Ai(Error(T(422))),Ea(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,a=t.mode,o=Fr({mode:"visible",children:o.children},a,0,null),r=pn(r,a,i,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,(t.mode&1)!==0&&Zn(t,e.child,null,i),t.child.memoizedState=xs(i),t.memoizedState=Is,r);if((t.mode&1)===0)return Ea(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var s=o.dgst;return o=s,r=Error(T(419)),o=Ai(r,o,void 0),Ea(e,t,i,o)}if(s=(i&e.childLanes)!==0,Pe||s){if(o=ye,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|i))!==0?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,At(e,a),ct(o,e,a,-1))}return Pl(),o=Ai(Error(T(421))),Ea(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Ey.bind(null,e),a._reactRetry=t,null):(e=r.treeContext,Ue=Yt(a.nextSibling),_e=t,ne=!0,st=null,e!==null&&(Xe[Ze++]=St,Xe[Ze++]=jt,Xe[Ze++]=gn,St=e.id,jt=e.overflow,gn=t),t=El(t,o.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ys(e.return,t,n)}function Ri(e,t,n,o,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=a)}function Rh(e,t,n){var o=t.pendingProps,a=o.revealOrder,r=o.tail;if(Ee(e,t,o.children,n),o=oe.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Z(oe,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&hr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ri(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&hr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ri(t,!0,n,null,r);break;case"together":Ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _a(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yy(e,t,n){switch(t.tag){case 3:Eh(t),Xn();break;case 5:nh(t);break;case 1:Ne(t.type)&&ir(t);break;case 4:bl(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Z(cr,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ah(e,t,n):(Z(oe,oe.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Rh(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(oe,oe.current),o)break;return null;case 22:case 23:return t.lanes=0,Th(e,t,n)}return Rt(e,t,n)}var Oh,Ss,Wh,Mh;Oh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};Wh=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,dn(wt.current);var r=null;switch(n){case"input":a=qi(e,a),o=qi(e,o),r=[];break;case"select":a=re({},a,{value:void 0}),o=re({},o,{value:void 0}),r=[];break;case"textarea":a=Vi(e,a),o=Vi(e,o),r=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ar)}Qi(n,o);var i;n=null;for(c in a)if(!o.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in o){var l=o[c];if(s=a!=null?a[c]:void 0,o.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(r||(r=[]),r.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ee("scroll",e),r||s===l||(r=[])):(r=r||[]).push(c,l))}n&&(r=r||[]).push("style",n);var c=r;(t.updateQueue=c)&&(t.flags|=4)}};Mh=function(e,t,n,o){n!==o&&(t.flags|=4)};function yo(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function gy(e,t,n){var o=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ne(t.type)&&rr(),xe(t),null;case 3:return o=t.stateNode,eo(),te(De),te(Te),Il(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,st!==null&&(Ws(st),st=null))),Ss(e,t),xe(t),null;case 5:kl(t);var a=dn(Yo.current);if(n=t.type,e!==null&&t.stateNode!=null)Wh(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(T(166));return xe(t),null}if(e=dn(wt.current),Ta(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[yt]=t,o[qo]=r,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",o),ee("close",o);break;case"iframe":case"object":case"embed":ee("load",o);break;case"video":case"audio":for(a=0;a<So.length;a++)ee(So[a],o);break;case"source":ee("error",o);break;case"img":case"image":case"link":ee("error",o),ee("load",o);break;case"details":ee("toggle",o);break;case"input":wc(o,r),ee("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},ee("invalid",o);break;case"textarea":kc(o,r),ee("invalid",o)}Qi(n,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?o.textContent!==s&&(r.suppressHydrationWarning!==!0&&ja(o.textContent,s,e),a=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&ja(o.textContent,s,e),a=["children",""+s]):No.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ee("scroll",o)}switch(n){case"input":ga(o),bc(o,r,!0);break;case"textarea":ga(o),Ic(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=ar)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[yt]=t,e[qo]=o,Oh(e,t,!1,!1),t.stateNode=e;e:{switch(i=Xi(n,o),n){case"dialog":ee("cancel",e),ee("close",e),a=o;break;case"iframe":case"object":case"embed":ee("load",e),a=o;break;case"video":case"audio":for(a=0;a<So.length;a++)ee(So[a],e);a=o;break;case"source":ee("error",e),a=o;break;case"img":case"image":case"link":ee("error",e),ee("load",e),a=o;break;case"details":ee("toggle",e),a=o;break;case"input":wc(e,o),a=qi(e,o),ee("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=re({},o,{value:void 0}),ee("invalid",e);break;case"textarea":kc(e,o),a=Vi(e,o),ee("invalid",e);break;default:a=o}Qi(n,a),s=a;for(r in s)if(s.hasOwnProperty(r)){var l=s[r];r==="style"?ud(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ld(e,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(e,l):typeof l=="number"&&Lo(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(No.hasOwnProperty(r)?l!=null&&r==="onScroll"&&ee("scroll",e):l!=null&&Xs(e,r,l,i))}switch(n){case"input":ga(e),bc(e,o,!1);break;case"textarea":ga(e),Ic(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Zt(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?Bn(e,!!o.multiple,r,!1):o.defaultValue!=null&&Bn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ar)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Mh(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(T(166));if(n=dn(Yo.current),dn(wt.current),Ta(t)){if(o=t.stateNode,n=t.memoizedProps,o[yt]=t,(r=o.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:ja(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ja(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[yt]=t,t.stateNode=o}return xe(t),null;case 13:if(te(oe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ue!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Qd(),Xn(),t.flags|=98560,r=!1;else if(r=Ta(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(T(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(T(317));r[yt]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),r=!1}else st!==null&&(Ws(st),st=null),r=!0;if(!r)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?fe===0&&(fe=3):Pl())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return eo(),Ss(e,t),e===null&&Jo(t.stateNode.containerInfo),xe(t),null;case 10:return gl(t.type._context),xe(t),null;case 17:return Ne(t.type)&&rr(),xe(t),null;case 19:if(te(oe),r=t.memoizedState,r===null)return xe(t),null;if(o=(t.flags&128)!==0,i=r.rendering,i===null)if(o)yo(r,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=hr(e),i!==null){for(t.flags|=128,yo(r,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}r.tail!==null&&le()>no&&(t.flags|=128,o=!0,yo(r,!1),t.lanes=4194304)}else{if(!o)if(e=hr(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!ne)return xe(t),null}else 2*le()-r.renderingStartTime>no&&n!==1073741824&&(t.flags|=128,o=!0,yo(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=le(),t.sibling=null,n=oe.current,Z(oe,o?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Ml(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Be&1073741824)!==0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function vy(e,t){switch(pl(t),t.tag){case 1:return Ne(t.type)&&rr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return eo(),te(De),te(Te),Il(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(te(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(oe),null;case 4:return eo(),null;case 10:return gl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Aa=!1,je=!1,wy=typeof WeakSet=="function"?WeakSet:Set,E=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){se(e,t,o)}else n.current=null}function js(e,t,n){try{n()}catch(o){se(e,t,o)}}var du=!1;function by(e,t){if(ls=tr,e=Fd(),dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,c=0,d=0,h=e,m=null;t:for(;;){for(var v;h!==n||a!==0&&h.nodeType!==3||(s=i+a),h!==r||o!==0&&h.nodeType!==3||(l=i+o),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++c===a&&(s=i),m===r&&++d===o&&(l=i),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cs={focusedElem:e,selectionRange:n},tr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,k=y.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:rt(t.type,g),k);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=du,du=!1,y}function Mo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&js(t,n,r)}a=a.next}while(a!==o)}}function Nr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Ts(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ph(e){var t=e.alternate;t!==null&&(e.alternate=null,Ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[qo],delete t[hs],delete t[ny],delete t[oy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dh(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ar));else if(o!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}function Es(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var ve=null,it=!1;function Nt(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Er,n)}catch{}switch(n.tag){case 5:je||Hn(n,t);case 6:var o=ve,a=it;ve=null,Nt(e,t,n),ve=o,it=a,ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?xi(e.parentNode,n):e.nodeType===1&&xi(e,n),Bo(e)):xi(ve,n.stateNode));break;case 4:o=ve,a=it,ve=n.stateNode.containerInfo,it=!0,Nt(e,t,n),ve=o,it=a;break;case 0:case 11:case 14:case 15:if(!je&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&((r&2)!==0||(r&4)!==0)&&js(n,t,i),a=a.next}while(a!==o)}Nt(e,t,n);break;case 1:if(!je&&(Hn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){se(n,t,s)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(je=(o=je)||n.memoizedState!==null,Nt(e,t,n),je=o):Nt(e,t,n);break;default:Nt(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wy),t.forEach(function(o){var a=Ay.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var r=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,it=!1;break e;case 3:ve=s.stateNode.containerInfo,it=!0;break e;case 4:ve=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(ve===null)throw Error(T(160));Nh(r,i,a),ve=null,it=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(c){se(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),ht(e),o&4){try{Mo(3,e,e.return),Nr(3,e)}catch(g){se(e,e.return,g)}try{Mo(5,e,e.return)}catch(g){se(e,e.return,g)}}break;case 1:at(t,e),ht(e),o&512&&n!==null&&Hn(n,n.return);break;case 5:if(at(t,e),ht(e),o&512&&n!==null&&Hn(n,n.return),e.flags&32){var a=e.stateNode;try{Lo(a,"")}catch(g){se(e,e.return,g)}}if(o&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,i=n!==null?n.memoizedProps:r,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&rd(a,r),Xi(s,i);var c=Xi(s,r);for(i=0;i<l.length;i+=2){var d=l[i],h=l[i+1];d==="style"?ud(a,h):d==="dangerouslySetInnerHTML"?ld(a,h):d==="children"?Lo(a,h):Xs(a,d,h,c)}switch(s){case"input":Gi(a,r);break;case"textarea":id(a,r);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?Bn(a,!!r.multiple,v,!1):m!==!!r.multiple&&(r.defaultValue!=null?Bn(a,!!r.multiple,r.defaultValue,!0):Bn(a,!!r.multiple,r.multiple?[]:"",!1))}a[qo]=r}catch(g){se(e,e.return,g)}}break;case 6:if(at(t,e),ht(e),o&4){if(e.stateNode===null)throw Error(T(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(g){se(e,e.return,g)}}break;case 3:if(at(t,e),ht(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(t.containerInfo)}catch(g){se(e,e.return,g)}break;case 4:at(t,e),ht(e);break;case 13:at(t,e),ht(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(Ol=le())),o&4&&pu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(je=(c=je)||d,at(t,e),je=c):at(t,e),ht(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(E=e,d=e.child;d!==null;){for(h=E=d;E!==null;){switch(m=E,v=m.child,m.tag){case 0:case 11:case 14:case 15:Mo(4,m,m.return);break;case 1:Hn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){o=m,n=m.return;try{t=o,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){se(o,n,g)}}break;case 5:Hn(m,m.return);break;case 22:if(m.memoizedState!==null){mu(h);continue}}v!==null?(v.return=m,E=v):mu(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{a=h.stateNode,c?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=h.stateNode,l=h.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=cd("display",i))}catch(g){se(e,e.return,g)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){se(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:at(t,e),ht(e),o&4&&pu(e);break;case 21:break;default:at(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dh(n)){var o=n;break e}n=n.return}throw Error(T(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Lo(a,""),o.flags&=-33);var r=hu(e);Es(e,r,a);break;case 3:case 4:var i=o.stateNode.containerInfo,s=hu(e);Cs(e,s,i);break;default:throw Error(T(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ky(e,t,n){E=e,Fh(e)}function Fh(e,t,n){for(var o=(e.mode&1)!==0;E!==null;){var a=E,r=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||Aa;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||je;s=Aa;var c=je;if(Aa=i,(je=l)&&!c)for(E=a;E!==null;)i=E,l=i.child,i.tag===22&&i.memoizedState!==null?yu(a):l!==null?(l.return=i,E=l):yu(a);for(;r!==null;)E=r,Fh(r),r=r.sibling;E=a,Aa=s,je=c}fu(e)}else(a.subtreeFlags&8772)!==0&&r!==null?(r.return=a,E=r):fu(e)}}function fu(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||Nr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!je)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Xc(t,r,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xc(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}je||t.flags&512&&Ts(t)}catch(m){se(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function mu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function yu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nr(4,t)}catch(l){se(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(l){se(t,a,l)}}var r=t.return;try{Ts(t)}catch(l){se(t,r,l)}break;case 5:var i=t.return;try{Ts(t)}catch(l){se(t,i,l)}}}catch(l){se(t,t.return,l)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Iy=Math.ceil,mr=Wt.ReactCurrentDispatcher,Al=Wt.ReactCurrentOwner,tt=Wt.ReactCurrentBatchConfig,U=0,ye=null,ue=null,be=0,Be=0,zn=nn(0),fe=0,Xo=null,wn=0,Lr=0,Rl=0,Po=null,Me=null,Ol=0,no=1/0,It=null,yr=!1,As=null,Kt=null,Ra=!1,Jt=null,gr=0,Do=0,Rs=null,Ja=-1,$a=0;function Ae(){return(U&6)!==0?le():Ja!==-1?Ja:Ja=le()}function Qt(e){return(e.mode&1)===0?1:(U&2)!==0&&be!==0?be&-be:ry.transition!==null?($a===0&&($a=Id()),$a):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e)}function ct(e,t,n,o){if(50<Do)throw Do=0,Rs=null,Error(T(185));la(e,n,o),((U&2)===0||e!==ye)&&(e===ye&&((U&2)===0&&(Lr|=n),fe===4&&Ut(e,be)),Le(e,o),n===1&&U===0&&(t.mode&1)===0&&(no=le()+500,Mr&&on()))}function Le(e,t){var n=e.callbackNode;rm(e,t);var o=er(e,e===ye?be:0);if(o===0)n!==null&&jc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&jc(n),t===1)e.tag===0?ay(gu.bind(null,e)):Yd(gu.bind(null,e)),ey(function(){(U&6)===0&&on()}),n=null;else{switch(xd(o)){case 1:n=ol;break;case 4:n=bd;break;case 16:n=Za;break;case 536870912:n=kd;break;default:n=Za}n=qh(n,Hh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hh(e,t){if(Ja=-1,$a=0,(U&6)!==0)throw Error(T(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var o=er(e,e===ye?be:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=vr(e,o);else{t=o;var a=U;U|=2;var r=Bh();(ye!==e||be!==t)&&(It=null,no=le()+500,hn(e,t));do try{jy();break}catch(s){zh(e,s)}while(1);yl(),mr.current=r,U=a,ue!==null?t=0:(ye=null,be=0,t=fe)}if(t!==0){if(t===2&&(a=os(e),a!==0&&(o=a,t=Os(e,a))),t===1)throw n=Xo,hn(e,0),Ut(e,o),Le(e,le()),n;if(t===6)Ut(e,o);else{if(a=e.current.alternate,(o&30)===0&&!xy(a)&&(t=vr(e,o),t===2&&(r=os(e),r!==0&&(o=r,t=Os(e,r))),t===1))throw n=Xo,hn(e,0),Ut(e,o),Le(e,le()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(T(345));case 2:sn(e,Me,It);break;case 3:if(Ut(e,o),(o&130023424)===o&&(t=Ol+500-le(),10<t)){if(er(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ae(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ds(sn.bind(null,e,Me,It),t);break}sn(e,Me,It);break;case 4:if(Ut(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-lt(o);r=1<<i,i=t[i],i>a&&(a=i),o&=~r}if(o=a,o=le()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Iy(o/1960))-o,10<o){e.timeoutHandle=ds(sn.bind(null,e,Me,It),o);break}sn(e,Me,It);break;case 5:sn(e,Me,It);break;default:throw Error(T(329))}}}return Le(e,le()),e.callbackNode===n?Hh.bind(null,e):null}function Os(e,t){var n=Po;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=vr(e,t),e!==2&&(t=Me,Me=n,t!==null&&Ws(t)),e}function Ws(e){Me===null?Me=e:Me.push.apply(Me,e)}function xy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],r=a.getSnapshot;a=a.value;try{if(!ut(r(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Rl,t&=~Lr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),o=1<<n;e[n]=-1,t&=~o}}function gu(e){if((U&6)!==0)throw Error(T(327));qn();var t=er(e,0);if((t&1)===0)return Le(e,le()),null;var n=vr(e,t);if(e.tag!==0&&n===2){var o=os(e);o!==0&&(t=o,n=Os(e,o))}if(n===1)throw n=Xo,hn(e,0),Ut(e,t),Le(e,le()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Me,It),Le(e,le()),null}function Wl(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(no=le()+500,Mr&&on())}}function bn(e){Jt!==null&&Jt.tag===0&&(U&6)===0&&qn();var t=U;U|=1;var n=tt.transition,o=Y;try{if(tt.transition=null,Y=1,e)return e()}finally{Y=o,tt.transition=n,U=t,(U&6)===0&&on()}}function Ml(){Be=zn.current,te(zn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zm(n)),ue!==null)for(n=ue.return;n!==null;){var o=n;switch(pl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&rr();break;case 3:eo(),te(De),te(Te),Il();break;case 5:kl(o);break;case 4:eo();break;case 13:te(oe);break;case 19:te(oe);break;case 10:gl(o.type._context);break;case 22:case 23:Ml()}n=n.return}if(ye=e,ue=e=Xt(e.current,null),be=Be=t,fe=0,Xo=null,Rl=Lr=wn=0,Me=Po=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,r=n.pending;if(r!==null){var i=r.next;r.next=a,o.next=i}n.pending=o}un=null}return e}function zh(e,t){do{var n=ue;try{if(yl(),Ba.current=fr,pr){for(var o=ae.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}pr=!1}if(vn=0,me=pe=ae=null,Wo=!1,Vo=0,Al.current=null,n===null||n.return===null){fe=1,Xo=t,ue=null;break}e:{var r=e,i=n.return,s=n,l=t;if(t=be,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,h=d.tag;if((d.mode&1)===0&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=au(i);if(v!==null){v.flags&=-257,ru(v,i,s,r,t),v.mode&1&&ou(r,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var g=new Set;g.add(l),t.updateQueue=g}else y.add(l);break e}else{if((t&1)===0){ou(r,c,t),Pl();break e}l=Error(T(426))}}else if(ne&&s.mode&1){var k=au(i);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),ru(k,i,s,r,t),fl(to(l,s));break e}}r=l=to(l,s),fe!==4&&(fe=2),Po===null?Po=[r]:Po.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var p=xh(r,l,t);Qc(r,p);break e;case 1:s=l;var u=r.type,f=r.stateNode;if((r.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Kt===null||!Kt.has(f)))){r.flags|=65536,t&=-t,r.lanes|=t;var w=Sh(r,s,t);Qc(r,w);break e}}r=r.return}while(r!==null)}_h(n)}catch(j){t=j,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(1)}function Bh(){var e=mr.current;return mr.current=fr,e===null?fr:e}function Pl(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||(wn&268435455)===0&&(Lr&268435455)===0||Ut(ye,be)}function vr(e,t){var n=U;U|=2;var o=Bh();(ye!==e||be!==t)&&(It=null,hn(e,t));do try{Sy();break}catch(a){zh(e,a)}while(1);if(yl(),U=n,mr.current=o,ue!==null)throw Error(T(261));return ye=null,be=0,fe}function Sy(){for(;ue!==null;)Uh(ue)}function jy(){for(;ue!==null&&!Kf();)Uh(ue)}function Uh(e){var t=$h(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?_h(e):ue=t,Al.current=null}function _h(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=gy(n,t,Be),n!==null){ue=n;return}}else{if(n=vy(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function sn(e,t,n){var o=Y,a=tt.transition;try{tt.transition=null,Y=1,Ty(e,t,n,o)}finally{tt.transition=a,Y=o}return null}function Ty(e,t,n,o){do qn();while(Jt!==null);if((U&6)!==0)throw Error(T(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(im(e,r),e===ye&&(ue=ye=null,be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ra||(Ra=!0,qh(Za,function(){return qn(),null})),r=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||r){r=tt.transition,tt.transition=null;var i=Y;Y=1;var s=U;U|=4,Al.current=null,by(e,n),Lh(n,e),qm(cs),tr=!!ls,cs=ls=null,e.current=n,ky(n),Qf(),U=s,Y=i,tt.transition=r}else e.current=n;if(Ra&&(Ra=!1,Jt=e,gr=a),r=e.pendingLanes,r===0&&(Kt=null),em(n.stateNode),Le(e,le()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(yr)throw yr=!1,e=As,As=null,e;return(gr&1)!==0&&e.tag!==0&&qn(),r=e.pendingLanes,(r&1)!==0?e===Rs?Do++:(Do=0,Rs=e):Do=0,on(),null}function qn(){if(Jt!==null){var e=xd(gr),t=tt.transition,n=Y;try{if(tt.transition=null,Y=16>e?16:e,Jt===null)var o=!1;else{if(e=Jt,Jt=null,gr=0,(U&6)!==0)throw Error(T(331));var a=U;for(U|=4,E=e.current;E!==null;){var r=E,i=r.child;if((E.flags&16)!==0){var s=r.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(E=c;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Mo(8,d,r)}var h=d.child;if(h!==null)h.return=d,E=h;else for(;E!==null;){d=E;var m=d.sibling,v=d.return;if(Ph(d),d===c){E=null;break}if(m!==null){m.return=v,E=m;break}E=v}}}var y=r.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}E=r}}if((r.subtreeFlags&2064)!==0&&i!==null)i.return=r,E=i;else e:for(;E!==null;){if(r=E,(r.flags&2048)!==0)switch(r.tag){case 0:case 11:case 15:Mo(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,E=p;break e}E=r.return}}var u=e.current;for(E=u;E!==null;){i=E;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,E=f;else e:for(i=u;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Nr(9,s)}}catch(j){se(s,s.return,j)}if(s===i){E=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,E=w;break e}E=s.return}}if(U=a,on(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Er,e)}catch{}o=!0}return o}finally{Y=n,tt.transition=t}}return!1}function vu(e,t,n){t=to(n,t),t=xh(e,t,1),e=Vt(e,t,1),t=Ae(),e!==null&&(la(e,1,t),Le(e,t))}function se(e,t,n){if(e.tag===3)vu(e,e,n);else for(;t!==null;){if(t.tag===3){vu(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kt===null||!Kt.has(o))){e=to(n,e),e=Sh(t,e,1),t=Vt(t,e,1),e=Ae(),t!==null&&(la(t,1,e),Le(t,e));break}}t=t.return}}function Cy(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(be&n)===n&&(fe===4||fe===3&&(be&130023424)===be&&500>le()-Ol?hn(e,0):Rl|=n),Le(e,t)}function Jh(e,t){t===0&&((e.mode&1)===0?t=1:(t=ba,ba<<=1,(ba&130023424)===0&&(ba=4194304)));var n=Ae();e=At(e,t),e!==null&&(la(e,t,n),Le(e,n))}function Ey(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jh(e,n)}function Ay(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(T(314))}o!==null&&o.delete(t),Jh(e,n)}var $h;$h=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Pe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Pe=!1,yy(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,ne&&(t.flags&1048576)!==0&&Vd(t,lr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;_a(e,t),e=t.pendingProps;var a=Qn(t,Te.current);$n(t,n),a=Sl(null,t,o,e,a,n);var r=jl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(o)?(r=!0,ir(t)):r=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,wl(t),a.updater=Dr,t.stateNode=a,a._reactInternals=t,vs(t,o,e,n),t=ks(null,t,o,!0,r,n)):(t.tag=0,ne&&r&&hl(t),Ee(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(_a(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Oy(o),e=rt(o,e),a){case 0:t=bs(null,t,o,e,n);break e;case 1:t=lu(null,t,o,e,n);break e;case 11:t=iu(null,t,o,e,n);break e;case 14:t=su(null,t,o,rt(o.type,e),n);break e}throw Error(T(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rt(o,a),bs(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rt(o,a),lu(e,t,o,a,n);case 3:e:{if(Eh(t),e===null)throw Error(T(387));o=t.pendingProps,r=t.memoizedState,a=r.element,th(e,t),dr(t,o,null,n);var i=t.memoizedState;if(o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){a=to(Error(T(423)),t),t=cu(e,t,o,n,a);break e}else if(o!==a){a=to(Error(T(424)),t),t=cu(e,t,o,n,a);break e}else for(Ue=Yt(t.stateNode.containerInfo.firstChild),_e=t,ne=!0,st=null,n=Zd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),o===a){t=Rt(e,t,n);break e}Ee(e,t,o,n)}t=t.child}return t;case 5:return nh(t),e===null&&ms(t),o=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,us(o,a)?i=null:r!==null&&us(o,r)&&(t.flags|=32),Ch(e,t),Ee(e,t,i,n),t.child;case 6:return e===null&&ms(t),null;case 13:return Ah(e,t,n);case 4:return bl(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Zn(t,null,o,n):Ee(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rt(o,a),iu(e,t,o,a,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,r=t.memoizedProps,i=a.value,Z(cr,o._currentValue),o._currentValue=i,r!==null)if(ut(r.value,i)){if(r.children===a.children&&!De.current){t=Rt(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(r.tag===1){l=Tt(-1,n&-n),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),ys(r.return,n,t),s.lanes|=n;break}l=l.next}}else if(r.tag===10)i=r.type===t.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(T(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ys(i,n,t),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===t){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}Ee(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,$n(t,n),a=nt(a),o=o(a),t.flags|=1,Ee(e,t,o,n),t.child;case 14:return o=t.type,a=rt(o,t.pendingProps),a=rt(o.type,a),su(e,t,o,a,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rt(o,a),_a(e,t),t.tag=1,Ne(o)?(e=!0,ir(t)):e=!1,$n(t,n),Ih(t,o,a),vs(t,o,a,n),ks(null,t,o,!0,e,n);case 19:return Rh(e,t,n);case 22:return Th(e,t,n)}throw Error(T(156,t.tag))};function qh(e,t){return wd(e,t)}function Ry(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,o){return new Ry(e,t,n,o)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oy(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===el)return 11;if(e===tl)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,t,n,o,a,r){var i=2;if(o=e,typeof e=="function")Dl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rn:return pn(n.children,a,r,t);case Zs:i=8,a|=8;break;case Ui:return e=et(12,n,t,a|2),e.elementType=Ui,e.lanes=r,e;case _i:return e=et(13,n,t,a),e.elementType=_i,e.lanes=r,e;case Ji:return e=et(19,n,t,a),e.elementType=Ji,e.lanes=r,e;case nd:return Fr(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:i=10;break e;case td:i=9;break e;case el:i=11;break e;case tl:i=14;break e;case Lt:i=16,o=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=et(i,n,t,a),t.elementType=e,t.type=o,t.lanes=r,t}function pn(e,t,n,o){return e=et(7,e,o,t),e.lanes=n,e}function Fr(e,t,n,o){return e=et(22,e,o,t),e.elementType=nd,e.lanes=n,e.stateNode={isHidden:!1},e}function Oi(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Wi(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wy(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Nl(e,t,n,o,a,r,i,s,l){return e=new Wy(e,t,n,s,l),t===1?(t=1,r===!0&&(t|=8)):t=0,r=et(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(r),e}function My(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Gh(e){if(!e)return en;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Gd(e,n,t)}return t}function Yh(e,t,n,o,a,r,i,s,l){return e=Nl(n,o,!0,e,a,r,i,s,l),e.context=Gh(null),n=e.current,o=Ae(),a=Qt(n),r=Tt(o,a),r.callback=t!=null?t:null,Vt(n,r,a),e.current.lanes=a,la(e,a,o),Le(e,o),e}function Hr(e,t,n,o){var a=t.current,r=Ae(),i=Qt(a);return n=Gh(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(r,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Vt(a,t,i),e!==null&&(ct(e,a,i,r),za(e,a,i)),i}function wr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ll(e,t){wu(e,t),(e=e.alternate)&&wu(e,t)}function Py(){return null}var Vh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}zr.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Hr(e,t,null,null)};zr.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Hr(null,e,null,null)}),t[Et]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Ed(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Br(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bu(){}function Dy(e,t,n,o,a){if(a){if(typeof o=="function"){var r=o;o=function(){var c=wr(i);r.call(c)}}var i=Yh(t,o,e,0,null,!1,!1,"",bu);return e._reactRootContainer=i,e[Et]=i.current,Jo(e.nodeType===8?e.parentNode:e),bn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var s=o;o=function(){var c=wr(l);s.call(c)}}var l=Nl(e,0,!1,null,null,!1,!1,"",bu);return e._reactRootContainer=l,e[Et]=l.current,Jo(e.nodeType===8?e.parentNode:e),bn(function(){Hr(t,l,n,o)}),l}function Ur(e,t,n,o,a){var r=n._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var s=a;a=function(){var l=wr(i);s.call(l)}}Hr(t,i,e,a)}else i=Dy(n,t,e,a,o);return wr(i)}Sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(al(t,n|1),Le(t,le()),(U&6)===0&&(no=le()+500,on()))}break;case 13:bn(function(){var o=At(e,1);if(o!==null){var a=Ae();ct(o,e,1,a)}}),Ll(e,1)}};rl=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ae();ct(t,e,134217728,n)}Ll(e,134217728)}};jd=function(e){if(e.tag===13){var t=Qt(e),n=At(e,t);if(n!==null){var o=Ae();ct(n,e,t,o)}Ll(e,t)}};Td=function(){return Y};Cd=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};es=function(e,t,n){switch(t){case"input":if(Gi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Wr(o);if(!a)throw Error(T(90));ad(o),Gi(o,a)}}}break;case"textarea":id(e,n);break;case"select":t=n.value,t!=null&&Bn(e,!!n.multiple,t,!1)}};pd=Wl;fd=bn;var Ny={usingClientEntryPoint:!1,Events:[ua,Pn,Wr,dd,hd,Wl]},go={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gd(e),e===null?null:e.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||Py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Er=Oa.inject(Ly),vt=Oa}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(t))throw Error(T(200));return My(e,t,null,n)};qe.createRoot=function(e,t){if(!Hl(e))throw Error(T(299));var n=!1,o="",a=Vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Nl(e,1,!1,null,null,n,!1,o,a),e[Et]=t.current,Jo(e.nodeType===8?e.parentNode:e),new Fl(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=gd(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return bn(e)};qe.hydrate=function(e,t,n){if(!Br(t))throw Error(T(200));return Ur(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Hl(e))throw Error(T(405));var o=n!=null&&n.hydratedSources||null,a=!1,r="",i=Vh;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Yh(t,null,e,1,n!=null?n:null,a,!1,r,i),e[Et]=t.current,Jo(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new zr(t)};qe.render=function(e,t,n){if(!Br(t))throw Error(T(200));return Ur(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Br(e))throw Error(T(40));return e._reactRootContainer?(bn(function(){Ur(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};qe.unstable_batchedUpdates=Wl;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Br(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ur(e,t,n,!1,o)};qe.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=qe})(Vs);const jo=Js(Vs.exports);var ku=Vs.exports;zi.createRoot=ku.createRoot,zi.hydrateRoot=ku.hydrateRoot;var Kh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(r=a(r,o(s)))}return r}function o(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var i="";for(var s in r)t.call(r,s)&&r[s]&&(i=a(i,s));return i}function a(r,i){return i?r?r+" "+i:r+i:r}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Kh);const ie=Kh.exports;function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Zo.apply(null,arguments)}function zl(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;n[o]=e[o]}return n}function Iu(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Fy(e){var t=Hy(e,"string");return typeof t=="symbol"?t:String(t)}function Hy(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zy(e,t,n){var o=b.exports.useRef(e!==void 0),a=b.exports.useState(t),r=a[0],i=a[1],s=e!==void 0,l=o.current;return o.current=s,!s&&l&&r!==t&&i(t),[s?e:r,b.exports.useCallback(function(c){for(var d=arguments.length,h=new Array(d>1?d-1:0),m=1;m<d;m++)h[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(h)),i(c)},[n])]}function By(e,t){return Object.keys(t).reduce(function(n,o){var a,r=n,i=r[Iu(o)],s=r[o],l=zl(r,[Iu(o),o].map(Fy)),c=t[o],d=zy(s,i,e[c]),h=d[0],m=d[1];return Zo({},l,(a={},a[o]=h,a[c]=m,a))},e)}function Ms(e,t){return Ms=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Ms(e,t)}function Qh(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ms(e,t)}var _r={exports:{}},Jr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=b.exports,_y=Symbol.for("react.element"),Jy=Symbol.for("react.fragment"),$y=Object.prototype.hasOwnProperty,qy=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function Xh(e,t,n){var o,a={},r=null,i=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)$y.call(t,o)&&!Gy.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:_y,type:e,key:r,ref:i,props:a,_owner:qy.current}}Jr.Fragment=Jy;Jr.jsx=Xh;Jr.jsxs=Xh;(function(e){e.exports=Jr})(_r);const Zh=_r.exports.Fragment,L=_r.exports.jsx,br=_r.exports.jsxs;var Yy=!1;function Vy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ky(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Qy=function(){function e(n){var o=this;this._insertTag=function(a){var r;o.tags.length===0?o.insertionPoint?r=o.insertionPoint.nextSibling:o.prepend?r=o.container.firstChild:r=o.before:r=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(a,r),o.tags.push(a)},this.isSpeedy=n.speedy===void 0?!Yy:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(o){o.forEach(this._insertTag)},t.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ky(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var r=Vy(a);try{r.insertRule(o,r.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(o));this.ctr++},t.flush=function(){this.tags.forEach(function(o){var a;return(a=o.parentNode)==null?void 0:a.removeChild(o)}),this.tags=[],this.ctr=0},e}(),Se="-ms-",kr="-moz-",$="-webkit-",ep="comm",Bl="rule",Ul="decl",Xy="@import",tp="@keyframes",Zy="@layer",eg=Math.abs,$r=String.fromCharCode,tg=Object.assign;function ng(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function np(e){return e.trim()}function og(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function Ps(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function ea(e,t,n){return e.slice(t,n)}function ft(e){return e.length}function _l(e){return e.length}function Wa(e,t){return t.push(e),e}function ag(e,t){return e.map(t).join("")}var qr=1,oo=1,op=0,Fe=0,ce=0,lo="";function Gr(e,t,n,o,a,r,i){return{value:e,root:t,parent:n,type:o,props:a,children:r,line:qr,column:oo,length:i,return:""}}function vo(e,t){return tg(Gr("",null,null,"",null,null,0),e,{length:-e.length},t)}function rg(){return ce}function ig(){return ce=Fe>0?we(lo,--Fe):0,oo--,ce===10&&(oo=1,qr--),ce}function Je(){return ce=Fe<op?we(lo,Fe++):0,oo++,ce===10&&(oo=1,qr++),ce}function bt(){return we(lo,Fe)}function Ga(){return Fe}function ha(e,t){return ea(lo,e,t)}function ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ap(e){return qr=oo=1,op=ft(lo=e),Fe=0,[]}function rp(e){return lo="",e}function Ya(e){return np(ha(Fe-1,Ds(e===91?e+2:e===40?e+1:e)))}function sg(e){for(;(ce=bt())&&ce<33;)Je();return ta(e)>2||ta(ce)>3?"":" "}function lg(e,t){for(;--t&&Je()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return ha(e,Ga()+(t<6&&bt()==32&&Je()==32))}function Ds(e){for(;Je();)switch(ce){case e:return Fe;case 34:case 39:e!==34&&e!==39&&Ds(ce);break;case 40:e===41&&Ds(e);break;case 92:Je();break}return Fe}function cg(e,t){for(;Je()&&e+ce!==47+10;)if(e+ce===42+42&&bt()===47)break;return"/*"+ha(t,Fe-1)+"*"+$r(e===47?e:Je())}function ug(e){for(;!ta(bt());)Je();return ha(e,Fe)}function dg(e){return rp(Va("",null,null,null,[""],e=ap(e),0,[0],e))}function Va(e,t,n,o,a,r,i,s,l){for(var c=0,d=0,h=i,m=0,v=0,y=0,g=1,k=1,p=1,u=0,f="",w=a,j=r,I=o,x=f;k;)switch(y=u,u=Je()){case 40:if(y!=108&&we(x,h-1)==58){Ps(x+=q(Ya(u),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:x+=Ya(u);break;case 9:case 10:case 13:case 32:x+=sg(y);break;case 92:x+=lg(Ga()-1,7);continue;case 47:switch(bt()){case 42:case 47:Wa(hg(cg(Je(),Ga()),t,n),l);break;default:x+="/"}break;case 123*g:s[c++]=ft(x)*p;case 125*g:case 59:case 0:switch(u){case 0:case 125:k=0;case 59+d:p==-1&&(x=q(x,/\f/g,"")),v>0&&ft(x)-h&&Wa(v>32?Su(x+";",o,n,h-1):Su(q(x," ","")+";",o,n,h-2),l);break;case 59:x+=";";default:if(Wa(I=xu(x,t,n,c,d,a,s,f,w=[],j=[],h),r),u===123)if(d===0)Va(x,t,I,I,w,r,h,s,j);else switch(m===99&&we(x,3)===110?100:m){case 100:case 108:case 109:case 115:Va(e,I,I,o&&Wa(xu(e,I,I,0,0,a,s,f,a,w=[],h),j),a,j,h,s,o?w:j);break;default:Va(x,I,I,I,[""],j,0,s,j)}}c=d=v=0,g=p=1,f=x="",h=i;break;case 58:h=1+ft(x),v=y;default:if(g<1){if(u==123)--g;else if(u==125&&g++==0&&ig()==125)continue}switch(x+=$r(u),u*g){case 38:p=d>0?1:(x+="\f",-1);break;case 44:s[c++]=(ft(x)-1)*p,p=1;break;case 64:bt()===45&&(x+=Ya(Je())),m=bt(),d=h=ft(f=x+=ug(Ga())),u++;break;case 45:y===45&&ft(x)==2&&(g=0)}}return r}function xu(e,t,n,o,a,r,i,s,l,c,d){for(var h=a-1,m=a===0?r:[""],v=_l(m),y=0,g=0,k=0;y<o;++y)for(var p=0,u=ea(e,h+1,h=eg(g=i[y])),f=e;p<v;++p)(f=np(g>0?m[p]+" "+u:q(u,/&\f/g,m[p])))&&(l[k++]=f);return Gr(e,t,n,a===0?Bl:s,l,c,d)}function hg(e,t,n){return Gr(e,t,n,ep,$r(rg()),ea(e,2,-2),0)}function Su(e,t,n,o){return Gr(e,t,n,Ul,ea(e,0,o),ea(e,o+1,-1),o)}function Gn(e,t){for(var n="",o=_l(e),a=0;a<o;a++)n+=t(e[a],a,e,t)||"";return n}function pg(e,t,n,o){switch(e.type){case Zy:if(e.children.length)break;case Xy:case Ul:return e.return=e.return||e.value;case ep:return"";case tp:return e.return=e.value+"{"+Gn(e.children,o)+"}";case Bl:e.value=e.props.join(",")}return ft(n=Gn(e.children,o))?e.return=e.value+"{"+n+"}":""}function fg(e){var t=_l(e);return function(n,o,a,r){for(var i="",s=0;s<t;s++)i+=e[s](n,o,a,r)||"";return i}}function mg(e){return function(t){t.root||(t=t.return)&&e(t)}}function yg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gg=function(t,n,o){for(var a=0,r=0;a=r,r=bt(),a===38&&r===12&&(n[o]=1),!ta(r);)Je();return ha(t,Fe)},vg=function(t,n){var o=-1,a=44;do switch(ta(a)){case 0:a===38&&bt()===12&&(n[o]=1),t[o]+=gg(Fe-1,n,o);break;case 2:t[o]+=Ya(a);break;case 4:if(a===44){t[++o]=bt()===58?"&\f":"",n[o]=t[o].length;break}default:t[o]+=$r(a)}while(a=Je());return t},wg=function(t,n){return rp(vg(ap(t),n))},ju=new WeakMap,bg=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,o=t.parent,a=t.column===o.column&&t.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ju.get(o))&&!a){ju.set(t,!0);for(var r=[],i=wg(n,r),s=o.props,l=0,c=0;l<i.length;l++)for(var d=0;d<s.length;d++,c++)t.props[c]=r[l]?i[l].replace(/&\f/g,s[d]):s[d]+" "+i[l]}}},kg=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ip(e,t){switch(ng(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+kr+e+Se+e+e;case 6828:case 4268:return $+e+Se+e+e;case 6165:return $+e+Se+"flex-"+e+e;case 5187:return $+e+q(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return $+e+Se+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return $+e+Se+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+Se+q(e,"shrink","negative")+e;case 5292:return $+e+Se+q(e,"basis","preferred-size")+e;case 6060:return $+"box-"+q(e,"-grow","")+$+e+Se+q(e,"grow","positive")+e;case 4554:return $+q(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+kr+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ps(e,"stretch")?ip(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,ft(e)-3-(~Ps(e,"!important")&&10))){case 107:return q(e,":",":"+$)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(we(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+Se+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return $+e+Se+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+Se+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+Se+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+Se+e+e}return e}var Ig=function(t,n,o,a){if(t.length>-1&&!t.return)switch(t.type){case Ul:t.return=ip(t.value,t.length);break;case tp:return Gn([vo(t,{value:q(t.value,"@","@"+$)})],a);case Bl:if(t.length)return ag(t.props,function(r){switch(og(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gn([vo(t,{props:[q(r,/:(read-\w+)/,":"+kr+"$1")]})],a);case"::placeholder":return Gn([vo(t,{props:[q(r,/:(plac\w+)/,":"+$+"input-$1")]}),vo(t,{props:[q(r,/:(plac\w+)/,":"+kr+"$1")]}),vo(t,{props:[q(r,/:(plac\w+)/,Se+"input-$1")]})],a)}return""})}},xg=[Ig],sp=function(t){var n=t.key;if(n==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(g){var k=g.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=t.stylisPlugins||xg,r={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var k=g.getAttribute("data-emotion").split(" "),p=1;p<k.length;p++)r[k[p]]=!0;s.push(g)});var l,c=[bg,kg];{var d,h=[pg,mg(function(g){d.insert(g)})],m=fg(c.concat(a,h)),v=function(k){return Gn(dg(k),m)};l=function(k,p,u,f){d=u,v(k?k+"{"+p.styles+"}":p.styles),f&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new Qy({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:r,registered:{},insert:l};return y.sheet.hydrate(s),y},lp={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=typeof Symbol=="function"&&Symbol.for,Jl=ge?Symbol.for("react.element"):60103,$l=ge?Symbol.for("react.portal"):60106,Yr=ge?Symbol.for("react.fragment"):60107,Vr=ge?Symbol.for("react.strict_mode"):60108,Kr=ge?Symbol.for("react.profiler"):60114,Qr=ge?Symbol.for("react.provider"):60109,Xr=ge?Symbol.for("react.context"):60110,ql=ge?Symbol.for("react.async_mode"):60111,Zr=ge?Symbol.for("react.concurrent_mode"):60111,ei=ge?Symbol.for("react.forward_ref"):60112,ti=ge?Symbol.for("react.suspense"):60113,Sg=ge?Symbol.for("react.suspense_list"):60120,ni=ge?Symbol.for("react.memo"):60115,oi=ge?Symbol.for("react.lazy"):60116,jg=ge?Symbol.for("react.block"):60121,Tg=ge?Symbol.for("react.fundamental"):60117,Cg=ge?Symbol.for("react.responder"):60118,Eg=ge?Symbol.for("react.scope"):60119;function Ye(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jl:switch(e=e.type,e){case ql:case Zr:case Yr:case Kr:case Vr:case ti:return e;default:switch(e=e&&e.$$typeof,e){case Xr:case ei:case oi:case ni:case Qr:return e;default:return t}}case $l:return t}}}function cp(e){return Ye(e)===Zr}V.AsyncMode=ql;V.ConcurrentMode=Zr;V.ContextConsumer=Xr;V.ContextProvider=Qr;V.Element=Jl;V.ForwardRef=ei;V.Fragment=Yr;V.Lazy=oi;V.Memo=ni;V.Portal=$l;V.Profiler=Kr;V.StrictMode=Vr;V.Suspense=ti;V.isAsyncMode=function(e){return cp(e)||Ye(e)===ql};V.isConcurrentMode=cp;V.isContextConsumer=function(e){return Ye(e)===Xr};V.isContextProvider=function(e){return Ye(e)===Qr};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jl};V.isForwardRef=function(e){return Ye(e)===ei};V.isFragment=function(e){return Ye(e)===Yr};V.isLazy=function(e){return Ye(e)===oi};V.isMemo=function(e){return Ye(e)===ni};V.isPortal=function(e){return Ye(e)===$l};V.isProfiler=function(e){return Ye(e)===Kr};V.isStrictMode=function(e){return Ye(e)===Vr};V.isSuspense=function(e){return Ye(e)===ti};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yr||e===Zr||e===Kr||e===Vr||e===ti||e===Sg||typeof e=="object"&&e!==null&&(e.$$typeof===oi||e.$$typeof===ni||e.$$typeof===Qr||e.$$typeof===Xr||e.$$typeof===ei||e.$$typeof===Tg||e.$$typeof===Cg||e.$$typeof===Eg||e.$$typeof===jg)};V.typeOf=Ye;(function(e){e.exports=V})(lp);var up=lp.exports,Ag={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dp={};dp[up.ForwardRef]=Ag;dp[up.Memo]=Rg;var Og=!0;function Wg(e,t,n){var o="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):a&&(o+=a+" ")}),o}var hp=function(t,n,o){var a=t.key+"-"+n.name;(o===!1||Og===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Mg=function(t,n,o){hp(t,n,o);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var r=n;do t.insert(n===r?"."+a:"",r,t.sheet,!0),r=r.next;while(r!==void 0)}};function Pg(e){for(var t=0,n,o=0,a=e.length;a>=4;++o,a-=4)n=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(o+2)&255)<<16;case 2:t^=(e.charCodeAt(o+1)&255)<<8;case 1:t^=e.charCodeAt(o)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Dg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ng=!1,Lg=/[A-Z]|^ms/g,Fg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pp=function(t){return t.charCodeAt(1)===45},Tu=function(t){return t!=null&&typeof t!="boolean"},Mi=yg(function(e){return pp(e)?e:e.replace(Lg,"-$&").toLowerCase()}),Cu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Fg,function(o,a,r){return mt={name:a,styles:r,next:mt},a})}return Dg[t]!==1&&!pp(t)&&typeof n=="number"&&n!==0?n+"px":n},Hg="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function na(e,t,n){if(n==null)return"";var o=n;if(o.__emotion_styles!==void 0)return o;switch(typeof n){case"boolean":return"";case"object":{var a=n;if(a.anim===1)return mt={name:a.name,styles:a.styles,next:mt},a.name;var r=n;if(r.styles!==void 0){var i=r.next;if(i!==void 0)for(;i!==void 0;)mt={name:i.name,styles:i.styles,next:mt},i=i.next;var s=r.styles+";";return s}return zg(e,t,n)}case"function":{if(e!==void 0){var l=mt,c=n(e);return mt=l,na(e,t,c)}break}}var d=n;if(t==null)return d;var h=t[d];return h!==void 0?h:d}function zg(e,t,n){var o="";if(Array.isArray(n))for(var a=0;a<n.length;a++)o+=na(e,t,n[a])+";";else for(var r in n){var i=n[r];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?o+=r+"{"+t[s]+"}":Tu(s)&&(o+=Mi(r)+":"+Cu(r,s)+";")}else{if(r==="NO_COMPONENT_SELECTOR"&&Ng)throw new Error(Hg);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var l=0;l<i.length;l++)Tu(i[l])&&(o+=Mi(r)+":"+Cu(r,i[l])+";");else{var c=na(e,t,i);switch(r){case"animation":case"animationName":{o+=Mi(r)+":"+c+";";break}default:o+=r+"{"+c+"}"}}}}return o}var Eu=/label:\s*([^\s;{]+)\s*(;|$)/g,mt;function Bg(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var o=!0,a="";mt=void 0;var r=e[0];if(r==null||r.raw===void 0)o=!1,a+=na(n,t,r);else{var i=r;a+=i[0]}for(var s=1;s<e.length;s++)if(a+=na(n,t,e[s]),o){var l=r;a+=l[s]}Eu.lastIndex=0;for(var c="",d;(d=Eu.exec(a))!==null;)c+="-"+d[1];var h=Pg(a)+c;return{name:h,styles:a,next:mt}}var Ug=function(t){return t()},_g=mc["useInsertionEffect"]?mc["useInsertionEffect"]:!1,Jg=_g||Ug,$g=!1,fp=typeof document<"u",Ir=b.exports.createContext(typeof HTMLElement<"u"?sp({key:"css"}):null);Ir.Provider;var mp=function(t){return b.exports.forwardRef(function(n,o){var a=b.exports.useContext(Ir);return t(n,a,o)})};fp||(mp=function(t){return function(n){var o=b.exports.useContext(Ir);return o===null?(o=sp({key:"css"}),X(Ir.Provider,{value:o,children:t(n,o)})):t(n,o)}});var qg=b.exports.createContext({}),ai={}.hasOwnProperty,Ns="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",yp=function(t,n){var o={};for(var a in n)ai.call(n,a)&&(o[a]=n[a]);return o[Ns]=t,o},Gg=function(t){var n=t.cache,o=t.serialized,a=t.isStringTag;hp(n,o,a);var r=Jg(function(){return Mg(n,o,a)});if(!fp&&r!==void 0){for(var i,s=o.name,l=o.next;l!==void 0;)s+=" "+l.name,l=l.next;return X("style",{...(i={},i["data-emotion"]=n.key+" "+s,i.dangerouslySetInnerHTML={__html:r},i.nonce=n.sheet.nonce,i)})}return null},Yg=mp(function(e,t,n){var o=e.css;typeof o=="string"&&t.registered[o]!==void 0&&(o=t.registered[o]);var a=e[Ns],r=[o],i="";typeof e.className=="string"?i=Wg(t.registered,r,e.className):e.className!=null&&(i=e.className+" ");var s=Bg(r,void 0,b.exports.useContext(qg));i+=t.key+"-"+s.name;var l={};for(var c in e)ai.call(e,c)&&c!=="css"&&c!==Ns&&!$g&&(l[c]=e[c]);return l.className=i,n&&(l.ref=n),En(Vg,{children:[X(Gg,{cache:t,serialized:s,isStringTag:typeof a=="string"}),X(a,{...l})]})}),gp=Yg,Vg=Zh;function X(e,t,n){return ai.call(t,"css")?L(gp,yp(e,t),n):L(e,t,n)}function En(e,t,n){return ai.call(t,"css")?br(gp,yp(e,t),n):br(e,t,n)}const Kg=["xxl","xl","lg","md","sm","xs"],Qg="xs",Gl=b.exports.createContext({prefixes:{},breakpoints:Kg,minBreakpoint:Qg});function de(e,t){const{prefixes:n}=b.exports.useContext(Gl);return e||n[t]||t}function Xg(){const{breakpoints:e}=b.exports.useContext(Gl);return e}function Zg(){const{minBreakpoint:e}=b.exports.useContext(Gl);return e}function ev(e){return e&&e.ownerDocument||document}function tv(e){var t=ev(e);return t&&t.defaultView||window}function nv(e,t){return tv(e).getComputedStyle(e,t)}var ov=/([A-Z])/g;function av(e){return e.replace(ov,"-$1").toLowerCase()}var rv=/^ms-/;function Ma(e){return av(e).replace(rv,"-ms-")}var iv=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function sv(e){return!!(e&&iv.test(e))}function xr(e,t){var n="",o="";if(typeof t=="string")return e.style.getPropertyValue(Ma(t))||nv(e).getPropertyValue(Ma(t));Object.keys(t).forEach(function(a){var r=t[a];!r&&r!==0?e.style.removeProperty(Ma(a)):sv(a)?o+=a+"("+r+") ":n+=Ma(a)+": "+r+";"}),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n}var fn={exports:{}},lv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cv=lv,uv=cv;function vp(){}function wp(){}wp.resetWarningCache=vp;var dv=function(){function e(o,a,r,i,s,l){if(l!==uv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:wp,resetWarningCache:vp};return n.PropTypes=n,n};fn.exports=dv();const Au={disabled:!1},bp=gt.createContext(null);var hv=function(t){return t.scrollTop},To="unmounted",Ht="exited",zt="entering",ln="entered",Sr="exiting",Mt=function(e){Qh(t,e);function t(o,a){var r;r=e.call(this,o,a)||this;var i=a,s=i&&!i.isMounting?o.enter:o.appear,l;return r.appearStatus=null,o.in?s?(l=Ht,r.appearStatus=zt):l=ln:o.unmountOnExit||o.mountOnEnter?l=To:l=Ht,r.state={status:l},r.nextCallback=null,r}t.getDerivedStateFromProps=function(a,r){var i=a.in;return i&&r.status===To?{status:Ht}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var r=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==zt&&i!==ln&&(r=zt):(i===zt||i===ln)&&(r=Sr)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,r,i,s;return r=i=s=a,a!=null&&typeof a!="number"&&(r=a.exit,i=a.enter,s=a.appear!==void 0?a.appear:i),{exit:r,enter:i,appear:s}},n.updateStatus=function(a,r){if(a===void 0&&(a=!1),r!==null)if(this.cancelNextCallback(),r===zt){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:jo.findDOMNode(this);i&&hv(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ht&&this.setState({status:To})},n.performEnter=function(a){var r=this,i=this.props.enter,s=this.context?this.context.isMounting:a,l=this.props.nodeRef?[s]:[jo.findDOMNode(this),s],c=l[0],d=l[1],h=this.getTimeouts(),m=s?h.appear:h.enter;if(!a&&!i||Au.disabled){this.safeSetState({status:ln},function(){r.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:zt},function(){r.props.onEntering(c,d),r.onTransitionEnd(m,function(){r.safeSetState({status:ln},function(){r.props.onEntered(c,d)})})})},n.performExit=function(){var a=this,r=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:jo.findDOMNode(this);if(!r||Au.disabled){this.safeSetState({status:Ht},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Sr},function(){a.props.onExiting(s),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:Ht},function(){a.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,r){r=this.setNextCallback(r),this.setState(a,r)},n.setNextCallback=function(a){var r=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,r.nextCallback=null,a(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(a,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:jo.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===To)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var s=zl(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return X(bp.Provider,{value:null,children:typeof i=="function"?i(a,s):gt.cloneElement(gt.Children.only(i),s)})},t}(gt.Component);Mt.contextType=bp;Mt.propTypes={};function Cn(){}Mt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Cn,onEntering:Cn,onEntered:Cn,onExit:Cn,onExiting:Cn,onExited:Cn};Mt.UNMOUNTED=To;Mt.EXITED=Ht;Mt.ENTERING=zt;Mt.ENTERED=ln;Mt.EXITING=Sr;const pv=!!(typeof window<"u"&&window.document&&window.document.createElement);var Ls=!1,Fs=!1;try{var Pi={get passive(){return Ls=!0},get once(){return Fs=Ls=!0}};pv&&(window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,!0))}catch{}function fv(e,t,n,o){if(o&&typeof o!="boolean"&&!Fs){var a=o.once,r=o.capture,i=n;!Fs&&a&&(i=n.__once||function s(l){this.removeEventListener(t,s,r),n.call(this,l)},n.__once=i),e.addEventListener(t,i,Ls?o:r)}e.addEventListener(t,n,o)}function mv(e,t,n,o){var a=o&&typeof o!="boolean"?o.capture:o;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)}function kp(e,t,n,o){return fv(e,t,n,o),function(){mv(e,t,n,o)}}function yv(e,t,n,o){if(n===void 0&&(n=!1),o===void 0&&(o=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,o),e.dispatchEvent(a)}}function gv(e){var t=xr(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function vv(e,t,n){n===void 0&&(n=5);var o=!1,a=setTimeout(function(){o||yv(e,"transitionend",!0)},t+n),r=kp(e,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(a),r()}}function wv(e,t,n,o){n==null&&(n=gv(e)||0);var a=vv(e,n,o),r=kp(e,"transitionend",t);return function(){a(),r()}}function Ru(e,t){const n=xr(e,t)||"",o=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*o}function bv(e,t){const n=Ru(e,"transitionDuration"),o=Ru(e,"transitionDelay"),a=wv(e,r=>{r.target===e&&(a(),t(r))},n+o)}function wo(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...a){t.apply(this,a),n.apply(this,a)}},null)}function kv(e){e.offsetHeight}const Ou=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Iv(e,t){const n=Ou(e),o=Ou(t);return a=>{n&&n(a),o&&o(a)}}function xv(e,t){return b.exports.useMemo(()=>Iv(e,t),[e,t])}function Sv(e){return e&&"setState"in e?jo.findDOMNode(e):e!=null?e:null}const jv=gt.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,onExited:r,addEndListener:i,children:s,childRef:l,...c},d)=>{const h=b.exports.useRef(null),m=xv(h,l),v=I=>{m(Sv(I))},y=I=>x=>{I&&h.current&&I(h.current,x)},g=b.exports.useCallback(y(e),[e]),k=b.exports.useCallback(y(t),[t]),p=b.exports.useCallback(y(n),[n]),u=b.exports.useCallback(y(o),[o]),f=b.exports.useCallback(y(a),[a]),w=b.exports.useCallback(y(r),[r]),j=b.exports.useCallback(y(i),[i]);return L(Mt,{ref:d,...c,onEnter:g,onEntered:p,onEntering:k,onExit:u,onExited:w,onExiting:f,addEndListener:j,nodeRef:h,children:typeof s=="function"?(I,x)=>s(I,{...x,ref:v}):gt.cloneElement(s,{ref:v})})}),Tv={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Cv(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,o=t[n],a=Tv[e];return o+parseInt(xr(t,a[0]),10)+parseInt(xr(t,a[1]),10)}const Ev={[Ht]:"collapse",[Sr]:"collapsing",[zt]:"collapsing",[ln]:"collapse show"},Av=gt.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,className:r,children:i,dimension:s="height",in:l=!1,timeout:c=300,mountOnEnter:d=!1,unmountOnExit:h=!1,appear:m=!1,getDimensionValue:v=Cv,...y},g)=>{const k=typeof s=="function"?s():s,p=b.exports.useMemo(()=>wo(I=>{I.style[k]="0"},e),[k,e]),u=b.exports.useMemo(()=>wo(I=>{const x=`scroll${k[0].toUpperCase()}${k.slice(1)}`;I.style[k]=`${I[x]}px`},t),[k,t]),f=b.exports.useMemo(()=>wo(I=>{I.style[k]=null},n),[k,n]),w=b.exports.useMemo(()=>wo(I=>{I.style[k]=`${v(k,I)}px`,kv(I)},o),[o,v,k]),j=b.exports.useMemo(()=>wo(I=>{I.style[k]=null},a),[k,a]);return L(jv,{ref:g,addEndListener:bv,...y,"aria-expanded":y.role?l:null,onEnter:p,onEntering:u,onEntered:f,onExit:w,onExiting:j,childRef:i.ref,in:l,timeout:c,mountOnEnter:d,unmountOnExit:h,appear:m,children:(I,x)=>gt.cloneElement(i,{...x,className:ie(r,i.props.className,Ev[I],k==="width"&&"collapse-horizontal")})})});function Ip(e,t){return Array.isArray(e)?e.includes(t):e===t}const pa=b.exports.createContext({});pa.displayName="AccordionContext";const Yl=b.exports.forwardRef(({as:e="div",bsPrefix:t,className:n,children:o,eventKey:a,...r},i)=>{const{activeEventKey:s}=b.exports.useContext(pa);return t=de(t,"accordion-collapse"),L(Av,{ref:i,in:Ip(s,a),...r,className:ie(n,t),children:L(e,{children:b.exports.Children.only(o)})})});Yl.displayName="AccordionCollapse";const ri=b.exports.createContext({eventKey:""});ri.displayName="AccordionItemContext";const xp=b.exports.forwardRef(({as:e="div",bsPrefix:t,className:n,onEnter:o,onEntering:a,onEntered:r,onExit:i,onExiting:s,onExited:l,...c},d)=>{t=de(t,"accordion-body");const{eventKey:h}=b.exports.useContext(ri);return L(Yl,{eventKey:h,onEnter:o,onEntering:a,onEntered:r,onExit:i,onExiting:s,onExited:l,children:L(e,{ref:d,...c,className:ie(n,t)})})});xp.displayName="AccordionBody";function Rv(e,t){const{activeEventKey:n,onSelect:o,alwaysOpen:a}=b.exports.useContext(pa);return r=>{let i=e===n?null:e;a&&(Array.isArray(n)?n.includes(e)?i=n.filter(s=>s!==e):i=[...n,e]:i=[e]),o==null||o(i,r),t==null||t(r)}}const Vl=b.exports.forwardRef(({as:e="button",bsPrefix:t,className:n,onClick:o,...a},r)=>{t=de(t,"accordion-button");const{eventKey:i}=b.exports.useContext(ri),s=Rv(i,o),{activeEventKey:l}=b.exports.useContext(pa);return e==="button"&&(a.type="button"),L(e,{ref:r,onClick:s,...a,"aria-expanded":Array.isArray(l)?l.includes(i):i===l,className:ie(n,t,!Ip(l,i)&&"collapsed")})});Vl.displayName="AccordionButton";const Sp=b.exports.forwardRef(({as:e="h2",bsPrefix:t,className:n,children:o,onClick:a,...r},i)=>(t=de(t,"accordion-header"),L(e,{ref:i,...r,className:ie(n,t),children:L(Vl,{onClick:a,children:o})})));Sp.displayName="AccordionHeader";const jp=b.exports.forwardRef(({as:e="div",bsPrefix:t,className:n,eventKey:o,...a},r)=>{t=de(t,"accordion-item");const i=b.exports.useMemo(()=>({eventKey:o}),[o]);return L(ri.Provider,{value:i,children:L(e,{ref:r,...a,className:ie(n,t)})})});jp.displayName="AccordionItem";const Tp=b.exports.forwardRef((e,t)=>{const{as:n="div",activeKey:o,bsPrefix:a,className:r,onSelect:i,flush:s,alwaysOpen:l,...c}=By(e,{activeKey:"onSelect"}),d=de(a,"accordion"),h=b.exports.useMemo(()=>({activeEventKey:o,onSelect:i,alwaysOpen:l}),[o,i,l]);return L(pa.Provider,{value:h,children:L(n,{ref:t,...c,className:ie(r,d,s&&`${d}-flush`)})})});Tp.displayName="Accordion";const Pa=Object.assign(Tp,{Button:Vl,Collapse:Yl,Item:jp,Header:Sp,Body:xp}),Cp=b.exports.forwardRef(({bsPrefix:e,bg:t="primary",pill:n=!1,text:o,className:a,as:r="span",...i},s)=>{const l=de(e,"badge");return L(r,{ref:s,...i,className:ie(a,l,n&&"rounded-pill",o&&`text-${o}`,t&&`bg-${t}`)})});Cp.displayName="Badge";const Ov=["as","disabled"];function Wv(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function Mv(e){return!e||e.trim()==="#"}function Ep({tagName:e,disabled:t,href:n,target:o,rel:a,role:r,onClick:i,tabIndex:s=0,type:l}){e||(n!=null||o!=null||a!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},c];const d=m=>{if((t||e==="a"&&Mv(n))&&m.preventDefault(),t){m.stopPropagation();return}i==null||i(m)},h=m=>{m.key===" "&&(m.preventDefault(),d(m))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:r!=null?r:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?o:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:d,onKeyDown:h},c]}const Pv=b.exports.forwardRef((e,t)=>{let{as:n,disabled:o}=e,a=Wv(e,Ov);const[r,{tagName:i}]=Ep(Object.assign({tagName:n,disabled:o},a));return L(i,Object.assign({},a,r,{ref:t}))});Pv.displayName="Button";const Ap=b.exports.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:o,active:a=!1,disabled:r=!1,className:i,...s},l)=>{const c=de(t,"btn"),[d,{tagName:h}]=Ep({tagName:e,disabled:r,...s});return L(h,{...d,...s,ref:l,disabled:r,className:ie(i,c,a&&"active",n&&`${c}-${n}`,o&&`${c}-${o}`,s.href&&r&&"disabled")})});Ap.displayName="Button";const Dv={type:fn.exports.string,tooltip:fn.exports.bool,as:fn.exports.elementType},ii=b.exports.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:o=!1,...a},r)=>L(e,{...a,ref:r,className:ie(t,`${n}-${o?"tooltip":"feedback"}`)}));ii.displayName="Feedback";ii.propTypes=Dv;const Ot=b.exports.createContext({}),Kl=b.exports.forwardRef(({id:e,bsPrefix:t,className:n,type:o="checkbox",isValid:a=!1,isInvalid:r=!1,as:i="input",...s},l)=>{const{controlId:c}=b.exports.useContext(Ot);return t=de(t,"form-check-input"),L(i,{...s,ref:l,type:o,id:e||c,className:ie(n,t,a&&"is-valid",r&&"is-invalid")})});Kl.displayName="FormCheckInput";const jr=b.exports.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...o},a)=>{const{controlId:r}=b.exports.useContext(Ot);return e=de(e,"form-check-label"),L("label",{...o,ref:a,htmlFor:n||r,className:ie(t,e)})});jr.displayName="FormCheckLabel";function Nv(e,t){return b.exports.Children.toArray(e).some(n=>b.exports.isValidElement(n)&&n.type===t)}const Rp=b.exports.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:o=!1,reverse:a=!1,disabled:r=!1,isValid:i=!1,isInvalid:s=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:d,className:h,style:m,title:v="",type:y="checkbox",label:g,children:k,as:p="input",...u},f)=>{t=de(t,"form-check"),n=de(n,"form-switch");const{controlId:w}=b.exports.useContext(Ot),j=b.exports.useMemo(()=>({controlId:e||w}),[w,e]),I=!k&&g!=null&&g!==!1||Nv(k,jr),x=L(Kl,{...u,type:y==="switch"?"checkbox":y,ref:f,isValid:i,isInvalid:s,disabled:r,as:p});return L(Ot.Provider,{value:j,children:L("div",{style:m,className:ie(h,I&&t,o&&`${t}-inline`,a&&`${t}-reverse`,y==="switch"&&n),children:k||br(Zh,{children:[x,I&&L(jr,{title:v,children:g}),c&&L(ii,{type:d,tooltip:l,children:c})]})})})});Rp.displayName="FormCheck";const Tr=Object.assign(Rp,{Input:Kl,Label:jr}),Op=b.exports.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:o,id:a,className:r,isValid:i=!1,isInvalid:s=!1,plaintext:l,readOnly:c,as:d="input",...h},m)=>{const{controlId:v}=b.exports.useContext(Ot);return e=de(e,"form-control"),L(d,{...h,type:t,size:o,ref:m,readOnly:c,id:a||v,className:ie(r,l?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,i&&"is-valid",s&&"is-invalid")})});Op.displayName="FormControl";const Lv=Object.assign(Op,{Feedback:ii}),Wp=b.exports.forwardRef(({className:e,bsPrefix:t,as:n="div",...o},a)=>(t=de(t,"form-floating"),L(n,{ref:a,className:ie(e,t),...o})));Wp.displayName="FormFloating";const Ql=b.exports.forwardRef(({controlId:e,as:t="div",...n},o)=>{const a=b.exports.useMemo(()=>({controlId:e}),[e]);return L(Ot.Provider,{value:a,children:L(t,{...n,ref:o})})});Ql.displayName="FormGroup";function Fv({as:e,bsPrefix:t,className:n,...o}){t=de(t,"col");const a=Xg(),r=Zg(),i=[],s=[];return a.forEach(l=>{const c=o[l];delete o[l];let d,h,m;typeof c=="object"&&c!=null?{span:d,offset:h,order:m}=c:d=c;const v=l!==r?`-${l}`:"";d&&i.push(d===!0?`${t}${v}`:`${t}${v}-${d}`),m!=null&&s.push(`order${v}-${m}`),h!=null&&s.push(`offset${v}-${h}`)}),[{...o,className:ie(n,...i,...s)},{as:e,bsPrefix:t,spans:i}]}const Mp=b.exports.forwardRef((e,t)=>{const[{className:n,...o},{as:a="div",bsPrefix:r,spans:i}]=Fv(e);return L(a,{...o,ref:t,className:ie(n,!i.length&&r)})});Mp.displayName="Col";const Pp=b.exports.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:o=!1,className:a,htmlFor:r,...i},s)=>{const{controlId:l}=b.exports.useContext(Ot);t=de(t,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=ie(a,t,o&&"visually-hidden",n&&c);return r=r||l,n?L(Mp,{ref:s,as:"label",className:d,htmlFor:r,...i}):L(e,{ref:s,className:d,htmlFor:r,...i})});Pp.displayName="FormLabel";const Dp=b.exports.forwardRef(({bsPrefix:e,className:t,id:n,...o},a)=>{const{controlId:r}=b.exports.useContext(Ot);return e=de(e,"form-range"),L("input",{...o,type:"range",ref:a,className:ie(t,e),id:n||r})});Dp.displayName="FormRange";const Np=b.exports.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:o,isValid:a=!1,isInvalid:r=!1,id:i,...s},l)=>{const{controlId:c}=b.exports.useContext(Ot);return e=de(e,"form-select"),L("select",{...s,size:n,ref:l,className:ie(o,e,t&&`${e}-${t}`,a&&"is-valid",r&&"is-invalid"),id:i||c})});Np.displayName="FormSelect";const Lp=b.exports.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:o,...a},r)=>(e=de(e,"form-text"),L(n,{...a,ref:r,className:ie(t,e,o&&"text-muted")})));Lp.displayName="FormText";const Fp=b.exports.forwardRef((e,t)=>L(Tr,{...e,ref:t,type:"switch"}));Fp.displayName="Switch";const Hv=Object.assign(Fp,{Input:Tr.Input,Label:Tr.Label}),Hp=b.exports.forwardRef(({bsPrefix:e,className:t,children:n,controlId:o,label:a,...r},i)=>(e=de(e,"form-floating"),br(Ql,{ref:i,className:ie(t,e),controlId:o,...r,children:[n,L("label",{htmlFor:o,children:a})]})));Hp.displayName="FloatingLabel";const zv={_ref:fn.exports.any,validated:fn.exports.bool,as:fn.exports.elementType},Xl=b.exports.forwardRef(({className:e,validated:t,as:n="form",...o},a)=>L(n,{...o,ref:a,className:ie(e,t&&"was-validated")}));Xl.displayName="Form";Xl.propTypes=zv;const Wu=Object.assign(Xl,{Group:Ql,Control:Lv,Floating:Wp,Check:Tr,Switch:Hv,Label:Pp,Text:Lp,Range:Dp,Select:Np,FloatingLabel:Hp});var Hs="data-focus-lock",zp="data-focus-lock-disabled",Bv="data-no-focus-lock",Uv="data-autofocus-inside",_v="data-no-autofocus";function Di(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Jv(e,t){var n=b.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var a=n.value;a!==o&&(n.value=o,n.callback(o,a))}}}})[0];return n.callback=t,n.facade}var $v=typeof window<"u"?b.exports.useLayoutEffect:b.exports.useEffect,Mu=new WeakMap;function qv(e,t){var n=Jv(t||null,function(o){return e.forEach(function(a){return Di(a,o)})});return $v(function(){var o=Mu.get(n);if(o){var a=new Set(o),r=new Set(e),i=n.current;a.forEach(function(s){r.has(s)||Di(s,null)}),r.forEach(function(s){a.has(s)||Di(s,i)})}Mu.set(n,e)},[e]),n}var Ni={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},zs=function(){return zs=Object.assign||function(t){for(var n,o=1,a=arguments.length;o<a;o++){n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zs.apply(this,arguments)};function Bp(e){return e}function Up(e,t){t===void 0&&(t=Bp);var n=[],o=!1,a={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(r){var i=t(r,o);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(r){for(o=!0;n.length;){var i=n;n=[],i.forEach(r)}n={push:function(s){return r(s)},filter:function(){return n}}},assignMedium:function(r){o=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(r),i=n}var l=function(){var d=i;i=[],d.forEach(r)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){i.push(d),c()},filter:function(d){return i=i.filter(d),n}}}};return a}function Zl(e,t){return t===void 0&&(t=Bp),Up(e,t)}function Gv(e){e===void 0&&(e={});var t=Up(null);return t.options=zs({async:!0,ssr:!1},e),t}var _p=Zl({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Jp=Zl(),Yv=Zl(),Vv=Gv({async:!0,ssr:typeof document<"u"}),Kv=b.exports.createContext(void 0),Qv=[],$p=b.exports.forwardRef(function(t,n){var o,a=b.exports.useState(),r=a[0],i=a[1],s=b.exports.useRef(),l=b.exports.useRef(!1),c=b.exports.useRef(null),d=b.exports.useState({}),h=d[1],m=t.children,v=t.disabled,y=v===void 0?!1:v,g=t.noFocusGuards,k=g===void 0?!1:g,p=t.persistentFocus,u=p===void 0?!1:p,f=t.crossFrame,w=f===void 0?!0:f,j=t.autoFocus,I=j===void 0?!0:j;t.allowTextSelection;var x=t.group,R=t.className,K=t.whiteList,M=t.hasPositiveIndices,he=t.shards,We=he===void 0?Qv:he,He=t.as,Pt=He===void 0?"div":He,Dt=t.lockProps,Ve=Dt===void 0?{}:Dt,dt=t.sideCar,C=t.returnFocus,O=C===void 0?!1:C,P=t.focusOptions,G=t.onActivation,S=t.onDeactivation,A=b.exports.useState({}),D=A[0],F=b.exports.useCallback(function(Qe){var Sn=Qe.captureFocusRestore;if(!c.current){var jn,an=(jn=document)==null?void 0:jn.activeElement;c.current=an,an!==document.body&&(c.current=Sn(an))}s.current&&G&&G(s.current),l.current=!0,h()},[G]),W=b.exports.useCallback(function(){l.current=!1,S&&S(s.current),h()},[S]),N=b.exports.useCallback(function(Qe){var Sn=c.current;if(Sn){var jn=(typeof Sn=="function"?Sn():Sn)||document.body,an=typeof O=="function"?O(jn):O;if(an){var dc=typeof an=="object"?an:void 0;c.current=null,Qe?Promise.resolve().then(function(){return jn.focus(dc)}):jn.focus(dc)}}},[O]),H=b.exports.useCallback(function(Qe){l.current&&_p.useMedium(Qe)},[]),B=Jp.useMedium,_=b.exports.useCallback(function(Qe){s.current!==Qe&&(s.current=Qe,i(Qe))},[]),J=Zo((o={},o[zp]=y&&"disabled",o[Hs]=x,o),Ve),Q=k!==!0,Ce=Q&&k!=="tail",Ke=qv([n,_]),fa=b.exports.useMemo(function(){return{observed:s,shards:We,enabled:!y,active:l.current}},[y,l.current,We,r]);return b.exports.createElement(b.exports.Fragment,null,Q&&[X("div",{"data-focus-guard":!0,tabIndex:y?-1:0,style:Ni},"guard-first"),M?X("div",{"data-focus-guard":!0,tabIndex:y?-1:1,style:Ni},"guard-nearest"):null],!y&&X(dt,{id:D,sideCar:Vv,observed:r,disabled:y,persistentFocus:u,crossFrame:w,autoFocus:I,whiteList:K,shards:We,onActivation:F,onDeactivation:W,returnFocus:N,focusOptions:P,noFocusGuards:k}),b.exports.createElement(Pt,Zo({ref:Ke},J,{className:R,onBlur:B,onFocus:H}),b.exports.createElement(Kv.Provider,{value:fa},m)),Ce&&X("div",{"data-focus-guard":!0,tabIndex:y?-1:0,style:Ni}))});$p.propTypes={};const qp=$p;function oa(e){return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oa(e)}function Xv(e,t){if(oa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(oa(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zv(e){var t=Xv(e,"string");return oa(t)=="symbol"?t:t+""}function ew(e,t,n){return(t=Zv(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tw(e,t){function n(o){return o.displayName||o.name||"Component"}return function(a){var r=[],i;function s(){i=e(r.map(function(c){return c.props})),t(i)}var l=function(c){Qh(d,c);function d(){return c.apply(this,arguments)||this}d.peek=function(){return i};var h=d.prototype;return h.componentDidMount=function(){r.push(this),s()},h.componentDidUpdate=function(){s()},h.componentWillUnmount=function(){var v=r.indexOf(this);r.splice(v,1),s()},h.render=function(){return X(a,{...this.props})},d}(b.exports.PureComponent);return ew(l,"displayName","SideEffect("+n(a)+")"),l}}var kt=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},kn=function(e){return Array.isArray(e)?e:[e]},Gp=function(e){return Array.isArray(e)?e[0]:e},nw=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},Yp=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},Vp=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},ow=function(e){return e.hasAttribute("inert")},aw=function(e,t){return!e||Vp(e)||!nw(e)&&!ow(e)&&t(Yp(e))},Kp=function(e,t){var n=e.get(t);if(n!==void 0)return n;var o=aw(t,Kp.bind(void 0,e));return e.set(t,o),o},rw=function(e,t){return e&&!Vp(e)?lw(e)?t(Yp(e)):!1:!0},Qp=function(e,t){var n=e.get(t);if(n!==void 0)return n;var o=rw(t,Qp.bind(void 0,e));return e.set(t,o),o},Xp=function(e){return e.dataset},iw=function(e){return e.tagName==="BUTTON"},Zp=function(e){return e.tagName==="INPUT"},ef=function(e){return Zp(e)&&e.type==="radio"},sw=function(e){return!((Zp(e)||iw(e))&&(e.type==="hidden"||e.disabled))},lw=function(e){var t=e.getAttribute(_v);return![!0,"true",""].includes(t)},ec=function(e){var t;return Boolean(e&&((t=Xp(e))===null||t===void 0?void 0:t.focusGuard))},Bs=function(e){return!ec(e)},cw=function(e){return Boolean(e)},uw=function(e,t){var n=Math.max(0,e.tabIndex),o=Math.max(0,t.tabIndex),a=n-o,r=e.index-t.index;if(a){if(!n)return 1;if(!o)return-1}return a||r},dw=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},tc=function(e,t,n){return kt(e).map(function(o,a){var r=dw(o);return{node:o,index:a,tabIndex:n&&r===-1?(o.dataset||{}).focusGuard?0:-1:r}}).filter(function(o){return!t||o.tabIndex>=0}).sort(uw)},hw=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],nc=hw.join(","),pw="".concat(nc,", [data-focus-guard]"),tf=function(e,t){return kt((e.shadowRoot||e).children).reduce(function(n,o){return n.concat(o.matches(t?pw:nc)?[o]:[],tf(o))},[])},fw=function(e,t){var n;return e instanceof HTMLIFrameElement&&((n=e.contentDocument)===null||n===void 0?void 0:n.body)?ao([e.contentDocument.body],t):[e]},ao=function(e,t){return e.reduce(function(n,o){var a,r=tf(o,t),i=(a=[]).concat.apply(a,r.map(function(s){return fw(s,t)}));return n.concat(i,o.parentNode?kt(o.parentNode.querySelectorAll(nc)).filter(function(s){return s===o}):[])},[])},mw=function(e){var t=e.querySelectorAll("[".concat(Uv,"]"));return kt(t).map(function(n){return ao([n])}).reduce(function(n,o){return n.concat(o)},[])},oc=function(e,t){return kt(e).filter(function(n){return Kp(t,n)}).filter(function(n){return sw(n)})},Pu=function(e,t){return t===void 0&&(t=new Map),kt(e).filter(function(n){return Qp(t,n)})},ac=function(e,t,n){return tc(oc(ao(e,n),t),!0,n)},aa=function(e,t){return tc(oc(ao(e),t),!1)},yw=function(e,t){return oc(mw(e),t)},mn=function(e,t){return e.shadowRoot?mn(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:kt(e.children).some(function(n){var o;if(n instanceof HTMLIFrameElement){var a=(o=n.contentDocument)===null||o===void 0?void 0:o.body;return a?mn(a,t):!1}return mn(n,t)})},gw=function(e){for(var t=new Set,n=e.length,o=0;o<n;o+=1)for(var a=o+1;a<n;a+=1){var r=e[o].compareDocumentPosition(e[a]);(r&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(a),(r&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(o)}return e.filter(function(i,s){return!t.has(s)})},nf=function(e){return e.parentNode?nf(e.parentNode):e},rc=function(e){var t=kn(e);return t.filter(Boolean).reduce(function(n,o){var a=o.getAttribute(Hs);return n.push.apply(n,a?gw(kt(nf(o).querySelectorAll("[".concat(Hs,'="').concat(a,'"]:not([').concat(zp,'="disabled"])')))):[o]),n},[])},vw=function(e){try{return e()}catch{return}},ra=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?ra(t.shadowRoot):t instanceof HTMLIFrameElement&&vw(function(){return t.contentWindow.document})?ra(t.contentWindow.document):t}},ww=function(e,t){return e===t},bw=function(e,t){return Boolean(kt(e.querySelectorAll("iframe")).some(function(n){return ww(n,t)}))},of=function(e,t){return t===void 0&&(t=ra(Gp(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:rc(e).some(function(n){return mn(n,t)||bw(n,t)})},kw=function(e){e===void 0&&(e=document);var t=ra(e);return t?kt(e.querySelectorAll("[".concat(Bv,"]"))).some(function(n){return mn(n,t)}):!1},Iw=function(e,t){return t.filter(ef).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ic=function(e,t){return ef(e)&&e.name?Iw(e,t):e},xw=function(e){var t=new Set;return e.forEach(function(n){return t.add(ic(n,e))}),e.filter(function(n){return t.has(n)})},Du=function(e){return e[0]&&e.length>1?ic(e[0],e):e[0]},Nu=function(e,t){return e.indexOf(ic(t,e))},Us="NEW_FOCUS",Sw=function(e,t,n,o,a){var r=e.length,i=e[0],s=e[r-1],l=ec(o);if(!(o&&e.indexOf(o)>=0)){var c=o!==void 0?n.indexOf(o):-1,d=a?n.indexOf(a):c,h=a?e.indexOf(a):-1;if(c===-1)return h!==-1?h:Us;if(h===-1)return Us;var m=c-d,v=n.indexOf(i),y=n.indexOf(s),g=xw(n),k=o!==void 0?g.indexOf(o):-1,p=k-(a?g.indexOf(a):c);if(!m&&h>=0||t.length===0)return h;var u=Nu(e,t[0]),f=Nu(e,t[t.length-1]);if(c<=v&&l&&Math.abs(m)>1)return f;if(c>=y&&l&&Math.abs(m)>1)return u;if(m&&Math.abs(p)>1)return h;if(c<=v)return f;if(c>y)return u;if(m)return Math.abs(m)>1?h:(r+h+m)%r}},jw=function(e){return function(t){var n,o=(n=Xp(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||o!==void 0&&o!=="false"||e.indexOf(t)>=0}},Lu=function(e,t,n){var o=e.map(function(r){var i=r.node;return i}),a=Pu(o.filter(jw(n)));return a&&a.length?Du(a):Du(Pu(t))},_s=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&_s(e.parentNode.host||e.parentNode,t),t},Li=function(e,t){for(var n=_s(e),o=_s(t),a=0;a<n.length;a+=1){var r=n[a];if(o.indexOf(r)>=0)return r}return!1},af=function(e,t,n){var o=kn(e),a=kn(t),r=o[0],i=!1;return a.filter(Boolean).forEach(function(s){i=Li(i||s,s)||i,n.filter(Boolean).forEach(function(l){var c=Li(r,l);c&&(!i||mn(c,i)?i=c:i=Li(c,i))})}),i},Fu=function(e,t){return e.reduce(function(n,o){return n.concat(yw(o,t))},[])},Tw=function(e,t){var n=new Map;return t.forEach(function(o){return n.set(o.node,o)}),e.map(function(o){return n.get(o)}).filter(cw)},Cw=function(e,t){var n=ra(kn(e).length>0?document:Gp(e).ownerDocument),o=rc(e).filter(Bs),a=af(n||e,e,o),r=new Map,i=aa(o,r),s=i.filter(function(y){var g=y.node;return Bs(g)});if(!!s[0]){var l=aa([a],r).map(function(y){var g=y.node;return g}),c=Tw(l,s),d=c.map(function(y){var g=y.node;return g}),h=c.filter(function(y){var g=y.tabIndex;return g>=0}).map(function(y){var g=y.node;return g}),m=Sw(d,h,l,n,t);if(m===Us){var v=Lu(i,h,Fu(o,r))||Lu(i,d,Fu(o,r));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:c[m]}},Ew=function(e){var t=rc(e).filter(Bs),n=af(e,e,t),o=tc(ao([n],!0),!0,!0),a=ao(t,!1);return o.map(function(r){var i=r.node,s=r.index;return{node:i,index:s,lockItem:a.indexOf(i)>=0,guard:ec(i)}})},sc=function(e,t){!e||("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},Fi=0,Hi=!1,rf=function(e,t,n){n===void 0&&(n={});var o=Cw(e,t);if(!Hi&&o){if(Fi>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Hi=!0,setTimeout(function(){Hi=!1},1);return}Fi++,sc(o.node,n.focusOptions),Fi--}};function bo(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var Aw=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:bo(n),parent:bo(n.parentElement),left:bo(n.previousElementSibling),right:bo(n.nextElementSibling)}),n=n.parentElement;return{element:bo(e),stack:t,ownerDocument:e.ownerDocument}},Rw=function(e){var t,n,o,a,r;if(!!e)for(var i=e.stack,s=e.ownerDocument,l=new Map,c=0,d=i;c<d.length;c++){var h=d[c],m=(t=h.parent)===null||t===void 0?void 0:t.call(h);if(m&&s.contains(m)){for(var v=(n=h.left)===null||n===void 0?void 0:n.call(h),y=h.current(),g=m.contains(y)?y:void 0,k=(o=h.right)===null||o===void 0?void 0:o.call(h),p=ac([m],l),u=(r=(a=g!=null?g:v==null?void 0:v.nextElementSibling)!==null&&a!==void 0?a:k)!==null&&r!==void 0?r:v;u;){for(var f=0,w=p;f<w.length;f++){var j=w[f];if(u!=null&&u.contains(j.node))return j.node}u=u.nextElementSibling}if(p.length)return p[0].node}}},sf=function(e){var t=Aw(e);return function(){return Rw(t)}},Ow=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var o=kn(t);if(o.every(function(i){return!mn(i,e)}))return console.error("Active element is not contained in the scope"),{};var a=n?ac(o,new Map):aa(o,new Map),r=a.findIndex(function(i){var s=i.node;return s===e});if(r!==-1)return{prev:a[r-1],next:a[r+1],first:a[0],last:a[a.length-1]}},Ww=function(e,t){var n=t?ac(kn(e),new Map):aa(kn(e),new Map);return{first:n[0],last:n[n.length-1]}},Mw=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},lf=function(e,t,n){t===void 0&&(t={});var o=Mw(t),a=Ow(e,o.scope,o.onlyTabbable);if(!!a){var r=n(a,o.cycle);r&&sc(r.node,o.focusOptions)}},Pw=function(e,t){t===void 0&&(t={}),lf(e,t,function(n,o){var a=n.next,r=n.first;return a||o&&r})},Dw=function(e,t){t===void 0&&(t={}),lf(e,t,function(n,o){var a=n.prev,r=n.last;return a||o&&r})},cf=function(e,t,n){var o,a=Ww(e,(o=t.onlyTabbable)!==null&&o!==void 0?o:!0),r=a[n];r&&sc(r.node,t.focusOptions)},Nw=function(e,t){t===void 0&&(t={}),cf(e,t,"first")},Lw=function(e,t){t===void 0&&(t={}),cf(e,t,"last")};function lc(e){setTimeout(e,1)}var Fw=function(t){return t&&"current"in t?t.current:t},uf=function(){return document&&document.activeElement===document.body},Hw=function(){return uf()||kw()},Yn=null,ze=null,Hu=function(){return null},Vn=null,ia=!1,cc=!1,zw=function(){return!0},Bw=function(t){return(Yn.whiteList||zw)(t)},Uw=function(t,n){Vn={observerNode:t,portaledElement:n}},_w=function(t){return Vn&&Vn.portaledElement===t};function zu(e,t,n,o){var a=null,r=e;do{var i=o[r];if(i.guard)i.node.dataset.focusAutoGuard&&(a=i);else if(i.lockItem){if(r!==e)return;a=null}else break}while((r+=n)!==t);a&&(a.node.tabIndex=0)}var Jw=function(t){return t?Boolean(ia):ia==="meanwhile"},$w=function e(t,n,o){return n&&(n.host===t&&(!n.activeElement||o.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,o))},qw=function(t,n){return n.some(function(o){return $w(t,o,o)})},df=function(t){return aa(t,new Map)},Gw=function(t){return!df([t.parentNode]).some(function(n){return n.node===t})},Cr=function(){var t=!1;if(Yn){var n=Yn,o=n.observed,a=n.persistentFocus,r=n.autoFocus,i=n.shards,s=n.crossFrame,l=n.focusOptions,c=n.noFocusGuards,d=o||Vn&&Vn.portaledElement;if(uf()&&ze&&(!document.body.contains(ze)||Gw(ze))){ze=null;var h=Hu();h&&h.focus()}var m=document&&document.activeElement;if(d){var v=[d].concat(i.map(Fw).filter(Boolean)),y=function(){if(!Jw(s)||!c||!ze||cc)return!1;var f=df(v),w=f.findIndex(function(j){var I=j.node;return I===ze});return w===0||w===f.length-1};if((!m||Bw(m))&&(a||y()||!Hw()||!ze&&r)&&(d&&!(of(v)||m&&qw(m,v)||_w(m))&&(document&&!ze&&m&&!r?(m.blur&&m.blur(),document.body.focus()):(t=rf(v,ze,{focusOptions:l}),Vn={})),ia=!1,ze=document&&document.activeElement,Hu=sf(ze)),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var g=document&&document.activeElement,k=Ew(v),p=k.map(function(u){var f=u.node;return f}).indexOf(g);p>-1&&(k.filter(function(u){var f=u.guard,w=u.node;return f&&w.dataset.focusAutoGuard}).forEach(function(u){var f=u.node;return f.removeAttribute("tabIndex")}),zu(p,k.length,1,k),zu(p,-1,-1,k))}}}return t},hf=function(t){Cr()&&t&&(t.stopPropagation(),t.preventDefault())},uc=function(){return lc(Cr)},Yw=function(t){var n=t.target,o=t.currentTarget;o.contains(n)||Uw(o,n)},Vw=function(){return null},pf=function(){cc=!0},ff=function(){cc=!1,ia="just",lc(function(){ia="meanwhile"})},Kw=function(){document.addEventListener("focusin",hf),document.addEventListener("focusout",uc),window.addEventListener("focus",pf),window.addEventListener("blur",ff)},Qw=function(){document.removeEventListener("focusin",hf),document.removeEventListener("focusout",uc),window.removeEventListener("focus",pf),window.removeEventListener("blur",ff)};function Xw(e){return e.filter(function(t){var n=t.disabled;return!n})}var mf={moveFocusInside:rf,focusInside:of,focusNextElement:Pw,focusPrevElement:Dw,focusFirstElement:Nw,focusLastElement:Lw,captureFocusRestore:sf};function Zw(e){var t=e.slice(-1)[0];t&&!Yn&&Kw();var n=Yn,o=n&&t&&t.id===n.id;Yn=t,n&&!o&&(n.onDeactivation(),e.filter(function(a){var r=a.id;return r===n.id}).length||n.returnFocus(!t)),t?(ze=null,(!o||n.observed!==t.observed)&&t.onActivation(mf),Cr(),lc(Cr)):(Qw(),ze=null)}_p.assignSyncMedium(Yw);Jp.assignMedium(uc);Yv.assignMedium(function(e){return e(mf)});const eb=tw(Xw,Zw)(Vw);var yf=b.exports.forwardRef(function(t,n){return X(qp,{sideCar:eb,ref:n,...t})}),gf=qp.propTypes||{};gf.sideCar;zl(gf,["sideCar"]);yf.propTypes={};const tb=yf;var vf={exports:{}};(function(e){e.exports=function(t){var n={};function o(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}return o.m=t,o.c=n,o.p="",o(0)}([function(t,n,o){t.exports=o(1)},function(t,n,o){Object.defineProperty(n,"__esModule",{value:!0});function a(s){return s&&s.__esModule?s:{default:s}}var r=o(2),i=a(r);n.default=i.default,t.exports=n.default},function(t,n,o){Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(y){for(var g=1;g<arguments.length;g++){var k=arguments[g];for(var p in k)Object.prototype.hasOwnProperty.call(k,p)&&(y[p]=k[p])}return y};n.default=v;function r(y){return y&&y.__esModule?y:{default:y}}function i(y,g){var k={};for(var p in y)g.indexOf(p)>=0||!Object.prototype.hasOwnProperty.call(y,p)||(k[p]=y[p]);return k}var s=o(3),l=o(4),c=r(l),d=o(14),h=o(15),m=r(h);v.propTypes={activeClassName:c.default.string,activeIndex:c.default.number,activeStyle:c.default.object,autoEscape:c.default.bool,className:c.default.string,findChunks:c.default.func,highlightClassName:c.default.oneOfType([c.default.object,c.default.string]),highlightStyle:c.default.object,highlightTag:c.default.oneOfType([c.default.node,c.default.func,c.default.string]),sanitize:c.default.func,searchWords:c.default.arrayOf(c.default.oneOfType([c.default.string,c.default.instanceOf(RegExp)])).isRequired,textToHighlight:c.default.string.isRequired,unhighlightTag:c.default.oneOfType([c.default.node,c.default.func,c.default.string]),unhighlightClassName:c.default.string,unhighlightStyle:c.default.object};function v(y){var g=y.activeClassName,k=g===void 0?"":g,p=y.activeIndex,u=p===void 0?-1:p,f=y.activeStyle,w=y.autoEscape,j=y.caseSensitive,I=j===void 0?!1:j,x=y.className,R=y.findChunks,K=y.highlightClassName,M=K===void 0?"":K,he=y.highlightStyle,We=he===void 0?{}:he,He=y.highlightTag,Pt=He===void 0?"mark":He,Dt=y.sanitize,Ve=y.searchWords,dt=y.textToHighlight,C=y.unhighlightTag,O=C===void 0?"span":C,P=y.unhighlightClassName,G=P===void 0?"":P,S=y.unhighlightStyle,A=i(y,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightTag","unhighlightClassName","unhighlightStyle"]),D=(0,s.findAll)({autoEscape:w,caseSensitive:I,findChunks:R,sanitize:Dt,searchWords:Ve,textToHighlight:dt}),F=Pt,W=-1,N="",H=void 0,B=function(Q){var Ce={};for(var Ke in Q)Ce[Ke.toLowerCase()]=Q[Ke];return Ce},_=(0,m.default)(B);return(0,d.createElement)("span",a({className:x},A,{children:D.map(function(J,Q){var Ce=dt.substr(J.start,J.end-J.start);if(J.highlight){W++;var Ke=void 0;typeof M=="object"?I?Ke=M[Ce]:(M=_(M),Ke=M[Ce.toLowerCase()]):Ke=M;var fa=W===+u;N=Ke+" "+(fa?k:""),H=fa===!0&&f!=null?Object.assign({},We,f):We;var Qe={children:Ce,className:N,key:Q,style:H};return typeof F!="string"&&(Qe.highlightIndex=W),(0,d.createElement)(F,Qe)}else return(0,d.createElement)(O,{children:Ce,className:G,key:Q,style:S})})}))}t.exports=n.default},function(t,n){t.exports=function(o){var a={};function r(i){if(a[i])return a[i].exports;var s=a[i]={exports:{},id:i,loaded:!1};return o[i].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}return r.m=o,r.c=a,r.p="",r(0)}([function(o,a,r){o.exports=r(1)},function(o,a,r){Object.defineProperty(a,"__esModule",{value:!0});var i=r(2);Object.defineProperty(a,"combineChunks",{enumerable:!0,get:function(){return i.combineChunks}}),Object.defineProperty(a,"fillInChunks",{enumerable:!0,get:function(){return i.fillInChunks}}),Object.defineProperty(a,"findAll",{enumerable:!0,get:function(){return i.findAll}}),Object.defineProperty(a,"findChunks",{enumerable:!0,get:function(){return i.findChunks}})},function(o,a){Object.defineProperty(a,"__esModule",{value:!0}),a.findAll=function(h){var m=h.autoEscape,v=h.caseSensitive,y=v===void 0?!1:v,g=h.findChunks,k=g===void 0?i:g,p=h.sanitize,u=h.searchWords,f=h.textToHighlight;return s({chunksToHighlight:r({chunks:k({autoEscape:m,caseSensitive:y,sanitize:p,searchWords:u,textToHighlight:f})}),totalLength:f?f.length:0})};var r=a.combineChunks=function(h){var m=h.chunks;return m=m.sort(function(v,y){return v.start-y.start}).reduce(function(v,y){if(v.length===0)return[y];var g=v.pop();if(y.start<=g.end){var k=Math.max(g.end,y.end);v.push({start:g.start,end:k})}else v.push(g,y);return v},[]),m},i=function(h){var m=h.autoEscape,v=h.caseSensitive,y=h.sanitize,g=y===void 0?l:y,k=h.searchWords,p=h.textToHighlight;return p=g(p),k.filter(function(u){return u}).reduce(function(u,f){f=g(f),m&&(f=c(f));for(var w=new RegExp(f,v?"g":"gi"),j=void 0;j=w.exec(p);){var I=j.index,x=w.lastIndex;x>I&&u.push({start:I,end:x}),j.index==w.lastIndex&&w.lastIndex++}return u},[])};a.findChunks=i;var s=a.fillInChunks=function(h){var m=h.chunksToHighlight,v=h.totalLength,y=[],g=function(u,f,w){f-u>0&&y.push({start:u,end:f,highlight:w})};if(m.length===0)g(0,v,!1);else{var k=0;m.forEach(function(p){g(k,p.start,!1),g(p.start,p.end,!0),k=p.end}),g(k,v,!1)}return y};function l(d){return d}function c(d){return d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}])},function(t,n,o){(function(a){t.exports=o(13)()}).call(n,o(5))},function(t,n){var o=t.exports={},a,r;function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?a=setTimeout:a=i}catch{a=i}try{typeof clearTimeout=="function"?r=clearTimeout:r=s}catch{r=s}})();function l(u){if(a===setTimeout)return setTimeout(u,0);if((a===i||!a)&&setTimeout)return a=setTimeout,setTimeout(u,0);try{return a(u,0)}catch{try{return a.call(null,u,0)}catch{return a.call(this,u,0)}}}function c(u){if(r===clearTimeout)return clearTimeout(u);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(u);try{return r(u)}catch{try{return r.call(null,u)}catch{return r.call(this,u)}}}var d=[],h=!1,m,v=-1;function y(){!h||!m||(h=!1,m.length?d=m.concat(d):v=-1,d.length&&g())}function g(){if(!h){var u=l(y);h=!0;for(var f=d.length;f;){for(m=d,d=[];++v<f;)m&&m[v].run();v=-1,f=d.length}m=null,h=!1,c(u)}}o.nextTick=function(u){var f=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)f[w-1]=arguments[w];d.push(new k(u,f)),d.length===1&&!h&&l(g)};function k(u,f){this.fun=u,this.array=f}k.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={};function p(){}o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(u){return[]},o.binding=function(u){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(u){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,n,o){(function(a){var r=o(7),i=o(8),s=o(9),l=o(10),c=o(11),d=o(12);t.exports=function(h,m){var v=typeof Symbol=="function"&&Symbol.iterator,y="@@iterator";function g(S){var A=S&&(v&&S[v]||S[y]);if(typeof A=="function")return A}var k="<<anonymous>>",p={array:j("array"),bool:j("boolean"),func:j("function"),number:j("number"),object:j("object"),string:j("string"),symbol:j("symbol"),any:I(),arrayOf:x,element:R(),instanceOf:K,node:He(),objectOf:he,oneOf:M,oneOfType:We,shape:Pt,exact:Dt};function u(S,A){return S===A?S!==0||1/S===1/A:S!==S&&A!==A}function f(S){this.message=S,this.stack=""}f.prototype=Error.prototype;function w(S){function A(F,W,N,H,B,_,J){return H=H||k,_=_||N,J!==c&&m&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),W[N]==null?F?W[N]===null?new f("The "+B+" `"+_+"` is marked as required "+("in `"+H+"`, but its value is `null`.")):new f("The "+B+" `"+_+"` is marked as required in "+("`"+H+"`, but its value is `undefined`.")):null:S(W,N,H,B,_)}var D=A.bind(null,!1);return D.isRequired=A.bind(null,!0),D}function j(S){function A(D,F,W,N,H,B){var _=D[F],J=C(_);if(J!==S){var Q=O(_);return new f("Invalid "+N+" `"+H+"` of type "+("`"+Q+"` supplied to `"+W+"`, expected ")+("`"+S+"`."))}return null}return w(A)}function I(){return w(r.thatReturnsNull)}function x(S){function A(D,F,W,N,H){if(typeof S!="function")return new f("Property `"+H+"` of component `"+W+"` has invalid PropType notation inside arrayOf.");var B=D[F];if(!Array.isArray(B)){var _=C(B);return new f("Invalid "+N+" `"+H+"` of type "+("`"+_+"` supplied to `"+W+"`, expected an array."))}for(var J=0;J<B.length;J++){var Q=S(B,J,W,N,H+"["+J+"]",c);if(Q instanceof Error)return Q}return null}return w(A)}function R(){function S(A,D,F,W,N){var H=A[D];if(!h(H)){var B=C(H);return new f("Invalid "+W+" `"+N+"` of type "+("`"+B+"` supplied to `"+F+"`, expected a single ReactElement."))}return null}return w(S)}function K(S){function A(D,F,W,N,H){if(!(D[F]instanceof S)){var B=S.name||k,_=G(D[F]);return new f("Invalid "+N+" `"+H+"` of type "+("`"+_+"` supplied to `"+W+"`, expected ")+("instance of `"+B+"`."))}return null}return w(A)}function M(S){if(!Array.isArray(S))return r.thatReturnsNull;function A(D,F,W,N,H){for(var B=D[F],_=0;_<S.length;_++)if(u(B,S[_]))return null;var J=JSON.stringify(S);return new f("Invalid "+N+" `"+H+"` of value `"+B+"` "+("supplied to `"+W+"`, expected one of "+J+"."))}return w(A)}function he(S){function A(D,F,W,N,H){if(typeof S!="function")return new f("Property `"+H+"` of component `"+W+"` has invalid PropType notation inside objectOf.");var B=D[F],_=C(B);if(_!=="object")return new f("Invalid "+N+" `"+H+"` of type "+("`"+_+"` supplied to `"+W+"`, expected an object."));for(var J in B)if(B.hasOwnProperty(J)){var Q=S(B,J,W,N,H+"."+J,c);if(Q instanceof Error)return Q}return null}return w(A)}function We(S){if(!Array.isArray(S))return r.thatReturnsNull;for(var A=0;A<S.length;A++){var D=S[A];if(typeof D!="function")return s(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",P(D),A),r.thatReturnsNull}function F(W,N,H,B,_){for(var J=0;J<S.length;J++){var Q=S[J];if(Q(W,N,H,B,_,c)==null)return null}return new f("Invalid "+B+" `"+_+"` supplied to "+("`"+H+"`."))}return w(F)}function He(){function S(A,D,F,W,N){return Ve(A[D])?null:new f("Invalid "+W+" `"+N+"` supplied to "+("`"+F+"`, expected a ReactNode."))}return w(S)}function Pt(S){function A(D,F,W,N,H){var B=D[F],_=C(B);if(_!=="object")return new f("Invalid "+N+" `"+H+"` of type `"+_+"` "+("supplied to `"+W+"`, expected `object`."));for(var J in S){var Q=S[J];if(!!Q){var Ce=Q(B,J,W,N,H+"."+J,c);if(Ce)return Ce}}return null}return w(A)}function Dt(S){function A(D,F,W,N,H){var B=D[F],_=C(B);if(_!=="object")return new f("Invalid "+N+" `"+H+"` of type `"+_+"` "+("supplied to `"+W+"`, expected `object`."));var J=l({},D[F],S);for(var Q in J){var Ce=S[Q];if(!Ce)return new f("Invalid "+N+" `"+H+"` key `"+Q+"` supplied to `"+W+"`.\nBad object: "+JSON.stringify(D[F],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(S),null,"  "));var Ke=Ce(B,Q,W,N,H+"."+Q,c);if(Ke)return Ke}return null}return w(A)}function Ve(S){switch(typeof S){case"number":case"string":case"undefined":return!0;case"boolean":return!S;case"object":if(Array.isArray(S))return S.every(Ve);if(S===null||h(S))return!0;var A=g(S);if(A){var D=A.call(S),F;if(A!==S.entries){for(;!(F=D.next()).done;)if(!Ve(F.value))return!1}else for(;!(F=D.next()).done;){var W=F.value;if(W&&!Ve(W[1]))return!1}}else return!1;return!0;default:return!1}}function dt(S,A){return S==="symbol"||A["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&A instanceof Symbol}function C(S){var A=typeof S;return Array.isArray(S)?"array":S instanceof RegExp?"object":dt(A,S)?"symbol":A}function O(S){if(typeof S>"u"||S===null)return""+S;var A=C(S);if(A==="object"){if(S instanceof Date)return"date";if(S instanceof RegExp)return"regexp"}return A}function P(S){var A=O(S);switch(A){case"array":case"object":return"an "+A;case"boolean":case"date":case"regexp":return"a "+A;default:return A}}function G(S){return!S.constructor||!S.constructor.name?k:S.constructor.name}return p.checkPropTypes=d,p.PropTypes=p,p}}).call(n,o(5))},function(t,n){function o(r){return function(){return r}}var a=function(){};a.thatReturns=o,a.thatReturnsFalse=o(!1),a.thatReturnsTrue=o(!0),a.thatReturnsNull=o(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(r){return r},t.exports=a},function(t,n,o){(function(a){function r(i,s,l,c,d,h,m,v){if(!i){var y;if(s===void 0)y=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[l,c,d,h,m,v],k=0;y=new Error(s.replace(/%s/g,function(){return g[k++]})),y.name="Invariant Violation"}throw y.framesToPop=1,y}}t.exports=r}).call(n,o(5))},function(t,n,o){(function(a){var r=o(7),i=r;t.exports=i}).call(n,o(5))},function(t,n){var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(l){if(l==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(l)}function s(){try{if(!Object.assign)return!1;var l=new String("abc");if(l[5]="de",Object.getOwnPropertyNames(l)[0]==="5")return!1;for(var c={},d=0;d<10;d++)c["_"+String.fromCharCode(d)]=d;var h=Object.getOwnPropertyNames(c).map(function(v){return c[v]});if(h.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(v){m[v]=v}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}t.exports=s()?Object.assign:function(l,c){for(var d,h=i(l),m,v=1;v<arguments.length;v++){d=Object(arguments[v]);for(var y in d)a.call(d,y)&&(h[y]=d[y]);if(o){m=o(d);for(var g=0;g<m.length;g++)r.call(d,m[g])&&(h[m[g]]=d[m[g]])}}return h}},function(t,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";t.exports=o},function(t,n,o){(function(a){function r(i,s,l,c,d){}t.exports=r}).call(n,o(5))},function(t,n,o){var a=o(7),r=o(8),i=o(11);t.exports=function(){function s(d,h,m,v,y,g){g!==i&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}s.isRequired=s;function l(){return s}var c={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l};return c.checkPropTypes=a,c.PropTypes=c,c}},function(t,n){t.exports=b.exports},function(t,n){var o=function(i,s){return i===s};function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o,s=void 0,l=[],c=void 0,d=!1,h=function(y,g){return i(y,l[g])},m=function(){for(var y=arguments.length,g=Array(y),k=0;k<y;k++)g[k]=arguments[k];return d&&s===this&&g.length===l.length&&g.every(h)||(d=!0,s=this,l=g,c=r.apply(this,g)),c};return m}t.exports=a}])})(vf);const Bu=Js(vf.exports),nb=[{title:"Tell me about yourself.",type:1,content:`I am a versatile and experienced professional with over 8 years of expertise in full-stack development and blockchain technologies. My journey began with a Bachelor's degree in Computer Science from Hong Kong College of Technology, where I gained a strong foundation in advanced algorithms, data structures, and software engineering principles.
Throughout my career, I have had the opportunity to work on a diverse range of projects, from developing responsive user interfaces using React to designing and executing decentralized applications  on various blockchain platforms like Ethereum, Binance Smart Chain, Avalanche, and Solana. 
In my last company, NextQloud, I developed and deployed the NexQloud blockchain and its explorer using Go and Rust languages forking cosmos sdk and blockscout.
I also developed smart contracts on Ethereum using Solidity, created private blockchain networks for businesses using Hyperledger Fabric, and built custom blockchains (parachains) on Polkadot using Substrate. This diverse experience allowed me to work across multiple blockchain platforms, adapting to different use cases and technical requirements.
I am passionate about staying up-to-date with the latest trends and technologies in the blockchain and software development industries. 
I am a quick learner and thrive in collaborative environments, where I can leverage my unique ability to understand and translate business requirements into successful development roadmaps.
        `},{title:"My Daily Routine",type:1,content:`Thank you for the opportunity to share my daily routine. 
My days are often a blend of coding, problem-solving, and continuous learning.
I typically start my mornings early, around 7 AM, with a cup of coffee and a quick review of my task list and priorities for the day. 
I find that having a structured plan helps me stay focused and productive throughout the day.
Once I've organized my tasks, I dive into coding or development work. 
During the day, I make sure to take breaks to stretch, grab a healthy snack, and clear my mind. 
I find that these short breaks help me maintain my energy levels and approach challenges with a fresh perspective.
In the afternoons, I often have meetings or collaborative sessions with team members or clients. These sessions allow me to discuss project requirements, share updates, and gather feedback. 
I value open communication and strive to translate business requirements into clear development roadmaps.
After work hours, I dedicate time to personal growth and learning. 
I stay up-to-date with the latest trends and best practices in the tech industry by reading articles, attending online workshops, or working on personal projects. 
I'm particularly interested in exploring emerging technologies like machine learning for crypto price analysis or developing trading bots.
In the evenings, I enjoy unwinding by engaging in physical activities like running or cycling. Exercise helps me maintain a healthy work-life balance and recharge for the next day.
`},{title:"My Life Experience",type:1,content:`I was born in 1993 in Texas, USA. My early childhood was spent there until my family moved to Hong Kong when I was around 10 years old. In Hong Kong, I attended the Hong Kong College of Technology, where I pursued a Bachelor's degree in Computer Science from 2010 to 2013.
During my time at the university, I developed a strong foundation in computer science principles, including advanced algorithms, data structures, and software engineering. 
I engaged in hands-on projects that involved designing and implementing scalable applications using various programming languages like Python, Java, and C++.
After graduating, I kickstarted my professional journey as a React Developer at Enplug Inc, a remote company based in Los Angeles, California, from 2013 to 2019. 
There, I honed my skills in developing responsive user interfaces using the React library, ensuring cross-browser compatibility and optimal performance. 
In 2018, I made an upgrade in my career as a full stack developer at LoanDepot in Lake Forest, California, where I worked until 2021. 
There I took part in the development of backend and frontend using various stacks and gained great experience in implementing interactions between frontend and backend using Restful Apis and GraphQL.
And Also I worked on implementing Devops environment for the productions using Azure Devops took part in the designing the application architecture with the design teams.
This experience allowed me to delve into the world of blockchain technologies, including Ethereum, Binance Smart Chain, and Cardano. I designed and executed decentralized applications (dApps) to facilitate secure and transparent transactions, developed various types of solidity smart contracts, and worked on web3 platforms for token dashboards, staking, farming, swapping, liquidity, and more.
From December 2021 to November 2024, I served as a Blockchain Developer at NextQloud in Campbell, California, further expanding my expertise in blockchain development. 
During this time, I developed different kinds of coins, including those with inflation, deflation, auto-staking, auto-compounding, reflection, governance, and utility tokens.
 I also gained experience with various blockchain platforms like Avalanche, Fuse, Polygon, Solana, Cosmos, and Cronos.
Throughout my career, I have contributed to the continuous improvement of development processes by suggesting and implementing best practices, tools, and technologies to optimize productivity and efficiency. 
Additionally, I have developed crypto trading bots, including arbitrage, frontrunning, and sniper bots, as well as a machine learning engine to analyze crypto price variations.
My diverse experiences have equipped me with a broad skill set ranging from full-stack development and distributed computing to blockchain technologies. I have a unique ability to understand and translate business requirements into development roadmaps, making me a valuable asset in the ever-evolving tech industry.
`},{title:"Tell me about how to handle stress in your business",type:1,content:`As a full-stack and blockchain developer, I understand that the tech industry can be fast-paced and demanding, with tight deadlines, complex projects, and constantly evolving technologies. Stress is an inevitable part of the job, but I've developed effective strategies to manage it and maintain a healthy work-life balance.
One of the primary ways I handle stress is through time management and prioritization. 
I use project management tools and agile methodologies to break down complex tasks into smaller, manageable chunks. 
This helps me stay organized, focused, and on track, reducing the overwhelming feeling that can come with large-scale projects.
Additionally, I make it a point to stay up-to-date with the latest technologies and best practices in both full-stack development and blockchain. 
While this requires continuous learning and adaptation, it also helps me feel more confident and prepared when tackling new challenges, which can eliminate stress.
When I find myself feeling particularly overwhelmed, I take a step back and engage in mindfulness practices, such as meditation or deep breathing exercises. 
These techniques help me clear my mind, regain focus, and approach problems with a fresh perspective.
Regular exercise is also a crucial part of my stress management routine. 
In addition to personal strategies, I also rely on my support system, which includes colleagues, mentors, and industry peers. 
Collaborating with others, seeking advice, and sharing experiences not only helps me find solutions to technical challenges but also reminds me that I'm not alone in facing stress and obstacles.
Finally, I practice gratitude and celebrate small wins along the way. 
Acknowledging my accomplishments, no matter how small, helps me maintain a positive mindset and stay motivated, even during stressful periods.
By employing these strategies, I've been able to effectively manage stress in my career as a full-stack and blockchain developer, allowing me to consistently deliver high-quality work while maintaining a healthy work-life balance and overall well-being.
`},{title:"Tell me about how to handle success in your business",type:1,content:`Success in the tech industry, especially in the rapidly evolving fields of full-stack development and blockchain, is often accompanied by its own set of challenges. 
While celebrating achievements is important, it's crucial to maintain a level-headed approach and continue striving for growth and improvement.
One of the key ways I handle success is by staying grounded and humble. 
I recognize that success is rarely the result of individual effort alone but rather a culmination of hard work, collaboration, and support from colleagues, mentors, and the broader tech community. 
This mindset helps me avoid complacency and remain motivated to continue learning and pushing boundaries.( Complacency is a feeling of self-satisfaction accompanied by an unawareness of potential dangers or deficiencies.)
At the same time, I make sure to take the time to acknowledge and celebrate successes, both personal and team-based. 
Whether it's launching a successful project, receiving positive feedback from clients, or achieving a significant milestone, I believe in recognizing these accomplishments and expressing gratitude to those who contributed. 
This not only boosts morale and motivation but also reinforces a positive and supportive work culture.
However, I don't let success breed overconfidence or complacency. 
Instead, I use it as a catalyst for continuous improvement and growth. 
After celebrating a win, I take a step back and critically analyze the process, identifying areas for optimization and opportunities to enhance our workflows, technologies, or methodologies. 
This constant pursuit of improvement helps me stay ahead of the curve and maintain a competitive edge in the ever-evolving tech landscape.
Additionally, I make it a point to share my knowledge and experiences with others, whether through mentoring, writing technical articles, or participating in industry events and communities. This not only contributes to the growth of the broader tech ecosystem but also helps me solidify my understanding and gain new perspectives from others.
Furthermore, I recognize that success is often accompanied by increased responsibilities and expectations.
As a result, I prioritize effective time management and delegation to ensure that I can handle the increased workload without compromising quality or my well-being. I rely on my team's strengths and collaborate closely with them to distribute tasks and responsibilities effectively.
Finally, I remain adaptable and open to change. Success in the tech industry is often fleeting, and what works today may not be effective tomorrow. By embracing a growth mindset and being willing to pivot and adapt to new technologies, trends, and market demands, I can continue to build upon my successes and stay relevant in this rapidly evolving field.By maintaining a balanced perspective, celebrating achievements while continuously striving for improvement, and fostering a collaborative and growth-oriented mindset, I can effectively handle success in my business as a full-stack and blockchain developer.
`},{title:"What makes me unique?",type:1,content:`As a full-stack and blockchain developer with a diverse background and skill set, I believe what makes me unique is my ability to bridge the gap between traditional software development and cutting-edge blockchain technologies.
Born in Texas, USA, in 1993, I had the opportunity to experience different cultures when my family moved to Hong Kong during my childhood. 
There, I pursued a Bachelor's degree in Computer Science from the Hong Kong College of Technology, where I developed a strong foundation in computer science principles, including advanced algorithms, data structures, and software engineering.
My professional journey began as a React Developer at Enplug Inc, where I honed my skills in developing responsive user interfaces, integrating RESTful APIs, and leveraging state management libraries like Redux. 
This experience allowed me to master the art of creating seamless and efficient user experiences for web applications.
However, my true passion lies in the realm of blockchain technology, which I discovered during my time as a Blockchain Developer at MobiDev and NextQloud. 
Over the past eight years, I have gained extensive experience working with various blockchain platforms, including Ethereum, Binance Smart Chain,  Avalanche, Fuse, Polygon, Solana, Cosmos.
What sets me apart is my ability to design and execute decentralized applications (dApps) that facilitate secure and transparent transactions.
I have developed a wide range of solidity smart contracts, including proxy, upgradable, fallback, router, bridge, and factory contracts, demonstrating my deep understanding of blockchain architecture and security protocols.
This versatility allows me to seamlessly integrate front-end and back-end components with blockchain infrastructure, creating cohesive and robust solutions.
What truly sets me apart is my unique ability to understand and translate business requirements into development roadmaps. 
With a strong foundation in computer science, extensive experience in full-stack development and blockchain technologies, and a proven track record of delivering innovative solutions, I am confident in my ability to contribute significantly to any organization seeking to leverage the power of blockchain and cutting-edge technologies.
`},{title:"SSN, DL, Linkedin",type:1,content:`DL front: https://drive.google.com/file/d/19dV3fFuSlf5pYyQiafSKLxIK-QDijHvM/view?usp=share_link,
        DL back: https://drive.google.com/file/d/1BKM91nW3dNNGI2ZeWcwXg2NefYeeQJ1R/view?usp=share_link,
        SSN: https://drive.google.com/file/d/1t4Ezy7EaaWTElRrANWno9NO5GNcVxhmY/view?usp=share_link,
        LinkedIn: https://www.linkedin.com/in/john-michael-b57a18243/`},{title:"What makes me interested about this job?",type:1,content:`I am extremely interested in this opportunity to work on a Universal Settlement Layer for Blockchain using Zero-Knowledge proofs. Here's what excites me about this role:s
Innovative Use of Zero-Knowledge Proofs: Zero-Knowledge proofs are a groundbreaking cryptographic technique that allows for secure and private transactions without revealing sensitive information. The prospect of applying this technology to build a Universal Settlement Layer is incredibly intriguing to me, as it presents an opportunity to work on the forefront of blockchain innovation and privacy-preserving solutions.
Solving Real-World Challenges: The idea of creating a Universal Settlement Layer addresses a significant challenge in the blockchain ecosystem \u2013 the need for interoperability and seamless value transfer across different blockchain networks. This aligns with my desire to work on projects that have a tangible impact and solve real-world problems in the industry.
Expanding My Blockchain Expertise: With over 8 years of experience in blockchain technologies like Ethereum, Binance Smart Chain, and Cardano, this role would allow me to further deepen my knowledge and skills in this rapidly evolving field. Working on a cutting-edge project like this would expose me to new techniques, architectures, and best practices, fostering my professional growth as a blockchain developer.
Leveraging My Go and Solidity Skills: The requirement for proficiency in Go and Solidity aligns perfectly with my technical expertise. Go is a language I have experience with, and I have extensively developed and deployed smart contracts on the Ethereum blockchain using Solidity. This role would allow me to leverage my existing skills while also providing opportunities to enhance them further.
Remote Opportunity: As someone who has worked remotely in the past, I appreciate the flexibility and work-life balance that remote opportunities offer. This role would allow me to contribute to an exciting project while maintaining a healthy work-life balance, which is essential for productivity and overall well-being.
Competitive Compensation Package: The offer of up to $200k base salary, along with potential bonuses, stock options, and token incentives, is a strong motivator. It demonstrates the company's commitment to attracting top talent and recognizing the value that skilled blockchain developers can bring to the table.
Overall, this opportunity aligns perfectly with my interests, skills, and career aspirations. It would allow me to work on the cutting edge of blockchain technology, solve real-world challenges, expand my expertise, and contribute to a project that has the potential to revolutionize the way value is transferred across blockchain networks. I am excited about the prospect of joining a team that is pushing the boundaries of what's possible in the blockchain space.
`},{title:"What motivates you?",type:1,content:`What truly motivates me is the opportunity to work on innovative and impactful projects that push the boundaries of technology. As a full-stack and blockchain developer, I am driven by the desire to solve complex problems and create solutions that have the potential to revolutionize industries and improve people's lives.
I am motivated by the challenge of translating complex business requirements into elegant and efficient technical solutions.
I take pride in my ability to bridge the gap between business objectives and technical implementations, ensuring that the end product not only meets but exceeds expectations. 
The process of understanding stakeholder needs, analyzing requirements, and architecting scalable and secure systems is deeply satisfying to me.
Furthermore, I find great motivation in the potential for blockchain technology to disrupt traditional industries and create more transparent, secure, and decentralized systems. 
I am driven by the opportunity to shape the future of blockchain and its real-world applications.
Collaboration and teamwork are also significant sources of motivation for me. 
I thrive in environments where I can collaborate with talented individuals, exchange ideas, and learn from diverse perspectives. 
Lastly, I am motivated by the opportunity for professional growth and the pursuit of excellence. 
Overall, my motivation stems from a combination of intellectual curiosity, a passion for innovation, a desire to create impactful solutions, and a drive for personal and professional growth. 
These factors collectively fuel my dedication and commitment to delivering exceptional results in the dynamic fields of full-stack and blockchain development.
`},{title:"What is your strength?",type:1,content:`One of my key strengths is my proficiency in a wide range of programming languages and frameworks, including Go, Solidity, React, Node.js, Python, and JavaScript. 
This versatility allows me to seamlessly work on both front-end and back-end development, as well as blockchain-specific projects.
For instance, my experience in developing and deploying smart contracts on the Ethereum blockchain using Solidity has equipped me with a deep understanding of blockchain architecture and security protocols.
Another strength of mine is my problem-solving mindset and analytical approach. 
I have a proven track record of understanding and translating business requirements into development roadmaps, ensuring that the solutions I create align with the client's goals and provide tangible value. This ability to bridge the gap between technical complexities and business objectives has been instrumental in my success as a developer.
Furthermore, my experience in developing crypto trading bots, including arbitrage, frontrunning, and sniper bots, as well as a machine learning engine to analyze crypto price variations, showcases my aptitude for leveraging cutting-edge technologies to solve complex problems in the blockchain and finance domains.
Adaptability is another key strength that sets me apart. 
The tech industry, particularly in the realms of blockchain and decentralized applications, is constantly evolving, and I have consistently demonstrated the ability to stay ahead of the curve by quickly learning and mastering new technologies and concepts.
This adaptability has allowed me to work seamlessly across various blockchain platforms, including Ethereum, Binance Smart Chain, Avalanche, Fuse, Polygon, Solana, Cosmos, Cardano, and Cronos.
Moreover, my strong experience in agile methodologies, Docker, GCP, and AWS environments has equipped me with the skills necessary to thrive in fast-paced and collaborative development environments, ensuring efficient project delivery and seamless integration with existing infrastructure.
Lastly, my unique background, which includes being born in Texas, USA, and later moving to Hong Kong for my education at the Hong Kong College of Technology, has instilled in me a global perspective and the ability to work effectively in diverse teams and cultural settings.
With my technical expertise, problem-solving abilities, adaptability, and cross-cultural competence, I am confident in my ability to contribute significantly to your team and the development of a Universal Settlement Layer for Blockchain using Zero-Knowledge proofs. My strengths align perfectly with the requirements of this role, and I am excited about the opportunity to leverage my skills in this innovative and impactful project.
`},{title:"What is your weakness?",type:1,content:"While my passion for technology and problem-solving is a strength, I recognize that it's crucial to maintain a balanced approach and ensure effective communication and coordination with team members and stakeholders. There have been instances where I've become so focused on finding the perfect technical solution that I may have neglected to provide regular updates or seek input from others, which can potentially lead to misalignments or delays.Another area where I can improve is in staying up-to-date with the latest trends and advancements across the vast landscape of technologies I work with. The fields of full-stack development and blockchain are rapidly evolving, with new frameworks, tools, and best practices emerging constantly. While I make conscious efforts to continuously learn and upskill myself, the sheer breadth of technologies I work with can sometimes make it challenging to stay equally proficient in all areas."},{title:"What is your future plan?",type:1,content:`Short-Term Goals
Expand My Blockchain Knowledge: Enroll in an online course or obtain a certification to deepen my understanding of emerging blockchain technologies like zero-knowledge proofs and their applications in building secure and privacy-preserving decentralized systems.
Improve Public Speaking Skills: Attend a public speaking course or workshop to enhance my ability to effectively communicate complex technical concepts and deliver presentations at professional conferences or to clients.
Learn a New Programming Language: Dedicate time to learning a new programming language like Rust or WebAssembly, which are gaining traction in the blockchain and web3 space, to expand my versatility as a developer.

Long-Term Goals
Become a Subject Matter Expert: Through continuous learning, practical experience, and knowledge sharing, establish myself as a recognized subject matter expert in the field of blockchain development, with a focus on building secure, scalable, and interoperable decentralized solutions.
Transition into a Leadership Role: Develop strong leadership and management skills, such as mentoring, coaching, and inclusive leadership, to position myself for potential leadership opportunities within the blockchain and web3 space.
Contribute to Open-Source Projects: Actively participate in and contribute to open-source blockchain projects, fostering collaboration and knowledge sharing within the community while also showcasing my expertise and commitment to the field.
Explore Entrepreneurial Opportunities: Leverage my technical expertise and industry knowledge to identify and pursue entrepreneurial opportunities in the blockchain and web3 space, potentially launching my own startup or consulting firm focused on innovative decentralized solutions.
`},{title:"Why did you leave your last position?",type:1,content:`Thank you for the opportunity to explain my reasons for leaving my previous company, NextQloud. 
As someone deeply passionate about blockchain technology and its potential to revolutionize various industries, I am genuinely excited about this role focused on building a Universal Settlement Layer for Blockchain using Zero-Knowledge proofs.
At NextQloud, I had the privilege of working as a Blockchain Developer from October 2022 to November 2023. During my tenure, I gained invaluable experience in developing various types of solidity smart contracts and I also worked extensively on web3 platforms for token dashboards, staking, farming, swapping, liquidity, reflection, NFT minting, marketplaces, crypto mining, lotteries, DAOs, and play-to-earn games.
However, as someone who thrives on continuous learning and growth, I felt that I had reached a point where I needed to explore new challenges and opportunities to further expand my skills and knowledge in the blockchain space.
Additionally, the opportunity to work with a team that values and encourages the use of Go and Solidity, two languages in which I have extensive expertise, is particularly appealing to me. Throughout my career, I have developed a deep understanding of Go and have extensively deployed smart contracts on the Ethereum blockchain using Solidity. This role would allow me to leverage my existing skills while also providing opportunities to enhance them further by working on a groundbreaking project.
Furthermore, the remote nature of this opportunity resonates with my values and lifestyle preferences. Having worked remotely in the past, I appreciate the flexibility and work-life balance that such arrangements offer, enabling me to maintain productivity while also prioritizing personal well-being.Lastly, the competitive compensation package, including the potential for bonuses, stock options, and token incentives, demonstrates the company's commitment to attracting and retaining top talent in the blockchain space. This not only aligns with my professional goals but also reflects the value that my skills and experience can bring to the table.
In summary, my decision to leave NextQloud was driven by a desire to continuously challenge myself, work on innovative projects at the forefront of blockchain technology, and contribute to a team that shares my passion for pushing the boundaries of what's possible in this rapidly evolving field. This opportunity to build a Universal Settlement Layer for Blockchain using Zero-Knowledge proofs represents an exciting next step in my career journey, and I am confident that my skills and experience make me an ideal candidate for this role.
`},{title:"How do you respond to stress or change?",type:1,content:`
I\u2019m able to stay calm by focusing on the bigger picture first and then breaking down my projects into smaller tasks. I always start by identifying the ultimate goal I\u2019m trying to achieve. From there, I make a list of short and long-term action items that will get me to my final goal.
`},{title:" How do you define success?",type:1,content:"I define success as fulfilling the goals and expectations of my role as well as helping my colleagues achieve their own benchmarks so the company can be successful. In my previous role, success meant exceeding weekly quotas and, implementing new processes that increased productivity and decreased the amount of time it took us to complete our tasks.\u201D"},{title:"What is your greatest accomplishment?",type:1,content:"My greatest accomplishment has been my ability to continuously learn, grow, and adapt throughout my career journey in the dynamic fields of full-stack development and blockchain technology.When I reflect on my path, from my early days as a React Developer at Enplug Inc , where I honed my skills in building responsive user interfaces and integrating APIs, to my transition into blockchain development at MobiDev  and NextQloud , where I gained extensive experience in developing decentralized applications (dApps), smart contracts, and web3 platforms across multiple blockchain networks, I am filled with a sense of pride and accomplishment.However, what truly stands out as my greatest achievement is not any single project or milestone, but rather the resilience, problem-solving abilities, and adaptability I have developed along the way. The tech industry, especially in the realms of blockchain and decentralized applications, is constantly evolving, and my ability to stay ahead of the curve by quickly learning and mastering new technologies and concepts has been instrumental in my success. One particular accomplishment that exemplifies this is the complex dApp project I worked on at MobiDev, where I played a crucial role in overcoming compatibility issues between multiple blockchain networks and implementing a hybrid architecture that leveraged cross-chain communication protocols and zero-knowledge proof techniques. This not only showcased my technical expertise but also my ability to translate business requirements into innovative solutions, facilitate effective communication, and lead a team through challenging situations. Looking ahead, my greatest accomplishment will be to continue pushing the boundaries of what's possible in the blockchain space, contributing to groundbreaking projects like the development of a Universal Settlement Layer using Zero-Knowledge proofs.  I am driven by the desire to create impactful solutions that have the potential to revolutionize industries and improve people's lives. Ultimately, my greatest accomplishment is the journey itself \u2013 a journey of continuous learning, growth, and adaptation, fueled by a passion for innovation and a commitment to delivering exceptional results in the ever-evolving tech landscape. "},{title:"Why should we hire you?",type:1,content:`You should hire me because I have extensive hands-on experience in blockchain development, spanning over 8 years. I am proficient in Go and Solidity, the specific languages required for this role. My ability to understand complex business needs and translate them into technical solutions is a key strength. I have worked on various blockchain projects, including decentralized apps, smart contracts, and web3 platforms across multiple blockchain networks.I am passionate about blockchain technology and continuously learning new trends and innovations, like Zero-Knowledge proofs. This drive for knowledge ensures I can deliver cutting-edge and future-proof solutions. My background in developing crypto trading bots and machine learning engines for price analysis also demonstrates my versatility in applying blockchain to finance.Overall, my technical expertise, problem-solving skills, business acumen, and passion for innovation make me an ideal fit for this role. I am confident I can contribute significantly to building a secure and efficient Universal Settlement Layer using Zero-Knowledge proofs.
        `},{title:"What is your salary range expectation?",type:1,content:"My salary expectation is between $00,000 and $00,000, which is the average salary for a candidate with my level of experience in this city. However, I have some flexibility.\u201D"},{title:"what are your strengths and weakness?",type:1,content:`I\u2019ve never been one to give up, even on my personal life, and that personality trait has definitely transpired into my career. When I\u2019m involved in a project, I like to feel like I actually contributed to it in a significant way and that\u2019s what feeds my determination and focus.
        To state my strength and weakness can be a little confusing because both of the two concepts are same for me. My quality of being self-motivated. I can work hard and consistently to achieve a goal if that helps me in growing and learning. I can motivate myself to do a task even when there are multiple obstacles and I can complete it.
        However, my weakness is being over self-motivated because in that process I lose myself and get too goal oriented. If it is a team task then my self-goals become a burden for them and as a result, I come across clashes and group breakdowns sometimes.
        I have been working on this for the last few months where I set a limit for myself and for the team and try not to affect my goals and objectives becomes a pressure for the others.
        In a word, both my strength and weakness arise from the same quality.`},{title:"What is your mistake you made?",type:1,content:`This question is a bit difficult for me, because I have to expose my flaws.
        But I am honest with myself. I attach great importance to the work itself.
        I worked tirelessly to find myself in work and devoted a lot of time to it.
        As a result, I didn't have a life for my family, and I didn't feel warm love.
        I couldn't even keep my father's last appearance by his side.
        I'm 31 now and it's time to start a family, but I'm still a single.
        But without those devotion that lost such values, there would never be today's myself.
        That is the biggest mistake I made and also the biggest thing I am proud of.`},{title:"What is your work style?",type:1,content:`I can do my best in a strong cooperative environment out of company members, and I can strive to achieve great goals while helping and learning from each other.
        I like a quiet environment when I work, but I really like to discuss new technologies and company roadmaps frequently.
        To point out my work style:
        passionate
        Result-drvien
        high-energy
        motivation.
        `},{title:"What is your management experience?",type:1,content:`When I work in a group, I am motivated - even more motivated. In my experience, one person may spark my thoughts and encourage me to come up with a brand-new creative thinking or concept.
        And when I was working as a team leader, I used to let the members do the same project in cooperation rather than different projects in separation.
       It was good to bring members closer to each other and more motivational to pursue one goal.`},{title:"What are you career goals over the next 3-5 years?",type:1,content:`I hope to work as a senior software engineer for a company such as yours\u2014one with a mission based on excellent communicating skills and technologies. Working as a senior software engineer for a company I believe in will prepare me to take on expanded team leadership responsibilities in the future, as those become available.
        To pursue those goals, I have set four steps.
        - Increase my expertise and training. I am trying to prepare myself as a competent senior engineer who owns frontend technology and further possesses clouding and backend technology.
        - Increase my income. Trying to balance life and business and increase income for a better future life. I will increase my income to over $12,000 per month on average.
        - Improve relationships with team members. I try to possess leadership skills in the process of cooperation with different team members.
        - Have a new experience. As an important core engineer of the technical team, I will have more experience in interpersonal relationships and in the technology stack.`},{title:"How do you work under pressure?",type:1,content:`Throughout my career, I\u2019ve discovered how to embrace working under pressure. 
        I find that routine can make us complacent, so I try to look for challenges that push me to grow. 
        One time, I was supposed to deliver a project to a client in five days. 
        A colleague who was working with another client had the same deadline, but he had to take a leave of absence due to personal reasons.
         I was asked to take up both projects at the same time.
          While I felt an initial sense of panic, I came up with a very detailed time management plan and 
          found new ways to boost my efficiency that enabled me to deliver both projects on time.`},{title:"How to explain the gaps in your resume?",type:1,content:"I was able to take some time off work to focus on myself. It was a time that prepared me to take on new challenges. I\u2019m incredibly excited about the opportunities that lie ahead, such as this position."},{title:"Briefly summarize your recent contributions to either a web application or API service.",type:1,content:`https://projectisla.co/ is my recent project.
        This site uses versatile search tools to explore our database of hospital information and hospital analytics.  It creates a list or a map of hospitals that match the interests of customers near their location. 
        This provides data, statistics, and analytics about more than 3,000 hospitals nationwide. 
        Elasticsearch was used as a search engine for data processing.
        I used Django python framework for the backend and React for the frontend.
        Most of what I was responsible for in this project was frontend, REST api and admin dashboard.
        As for a development on my side, I have used React, material UI, Tailwind CSS, Axios for the REST api, react-saga for redux.
        This site consists of a landing page, a research component, a category page for displaying the hospital list, and a reservation page.
        I gave importance to the code optimization, responsiveness and the render speed.
        The most exciting thing was that I used some of react hook functions in this project such as useMemo, useCallback so that I can reduce unnecessary rendering into components.
        As a result, my customers gave me good feedbacks and reviews.
        Finally, I deploy this on the AWS EC2 after domain purchase.`},{title:"Do you relocate?",type:1,content:"Due to the pandmic and a current family obligation, I am not able to relocate at this time. However, I have experience working remotely and could be available to travel frequently to your other offices if these were viable options."},{title:"Why shouldn't we hire you?",type:1,content:"If you're looking for someone to lead marketing, then I'm probably not the right fit for this position. I'm better suited to being an active participant in meetings than to lead marketing. But where I really shine is execution\u2014so often, a meeting generates a lot of great ideas, but then none of them are completed. One of my strengths is following up on meeting tasks and completing projects in general."},{title:"What is your most important quality that makes you successful in your career?",type:1,content:`1. Passion
        2. Curious mind distinct from others
        3. Problem-solving skills
        4. Influencing Skills and high tech skills
        5. Courage & Confidence
        6. Results-driven`},{title:"Are you feeling comfortable for working with a big team? ",type:1,content:`I have a strong team spirit. Whether the company is big or small, it all looks like one thing to me. A team.
        I've been used to working in a team and working in cooperation for over 10 years, so I felt really lonely while lancing alone for the past 3 months.
        If I work in a team environment, I can make a great contribution to the company and play an active role in promoting cooperation among team members.`},{title:"Why should we hire you? ",type:1,content:`Two years ago I had a misfortune.
        I couldn't even keep the last apperance of my beloved father by his side.
        So I wanted to work for people's health care with my skills.
        This pain is enough for me alone, and I don't want many more people in the world to suffer this kind of sadness.
        Luckily, finding a job, I found out that your company is working as a primary mission to help people live healthier lives! Perfect same to my goal.
        Your company is looking for a frontend developer who is both strong in interpersonal skills and tech skills in medical services. I believe my experience aligns with your company\u2019s requirements and makes me a great fit.
        I'm an effective developer who is skilled in modern frontend technologies especially React, having an eye on design. I'm also fluent in several relevant programming, including backend and blockchain technologies. I'd love to bring my diverse skill set to your company.`},{title:"What additional skills and experiences do you think will help you in this role?",type:1,content:`Apart from the JS, TS, React, I specialized in decentralized applications, GraphQL, Microsoft Azure, serverless technology and AWS.
        I have developed micro services for the hotel booking system at the last company.
        Furthermore, I will be very fit for this position with:
        1. Passion
        2. Curious mind distinct from others
        3. Problem-solving skills
        4. Influencing Skills and high tech skills
        5. Courage & Confidence
        6. Results-driven`},{title:"What are you usually doing when you are free? ",type:1,content:"Because I sit at a computer all day and work, my health is a major concern. I visit the gym three times a week to take care of my health. I particularly enjoy basketball and swimming. Exercise helps me maintain a positive mindset, it reduces stress, and it increases concentration levels. I also enjoy spending time with my friends, family. It is usually a great talk because it taught me the skill of taking ownership of difficult challenges in my life, and how to achieve my goals."},{title:"Are you overqualified for this job?",type:1,content:`While my qualifications and years of experience may exceed the stated requirements for this position, I don't believe that makes me overqualified. Instead, I view my extensive background as an asset that will allow me to make valuable contributions to this role and your organization from day one
.My diverse skill set spanning full-stack development, blockchain technologies like Ethereum and Solidity, and experience working with cutting-edge concepts like zero-knowledge proofs, position me well to tackle the complex challenges involved in building a Universal Settlement Layer. Rather than feeling bored or unchallenged, I am excited by the prospect of applying my expertise to such an innovative project. 
My passion lies in continuously learning and pushing the boundaries of what's possible in blockchain and web3.
 This role represents an opportunity to further that passion while leveraging my accumulated knowledge. Additionally, my background has taught me the importance of translating complex technical concepts into clear development roadmaps that align with business objectives. I will bring this talent for bridging technical and business needs to ensure we deliver a solution that provides tangible value. I understand your concern about compensation expectations. However, I am open to a competitive package that recognizes the value I can provide, including potential bonuses, stock options, and token incentives. My primary motivation is to be part of groundbreaking work in this field. Ultimately, I am at a stage in my career where I am driven more by passion projects than traditional career progression. This role checks all the boxes - innovative technology, an exciting challenge, and an opportunity to expand my blockchain expertise. You can be confident that I am committed to this project's long-term success. I hope this addresses any concerns you may have had about my qualifications. I am confident that my unique blend of technical skills and passion for blockchain innovation make me an ideal fit for this role. I would be thrilled to discuss further how I can contribute to building your Universal Settlement Layer.

        `},{title:"Tell me about a time when you were not satisfied with your performance.",type:1,content:`I'm not satisfied with my performance every time.
        Satisfaction with oneself is human happiness, but for some reason, even if the client is satisfied, I am not. That's why I'm trying to do something more, but at that time, I get advice from my teammates saying that this is all it takes.`},{title:"Tell me about a time when you experienced difficulty at work while working on a project.",type:1,content:`There was an argument while working alone with a customer 3 years ago.
        It was a project to build a website using React, and I had signed a contract and started working.
        The design sent by the customer was completed and sent in 2 days, but the feedback came that it needed to be fully changed because the design was not to his liking.
        Cause of that, the project could be delayed by 3 days.
        I replied that this problem was not included at the time of the contract and that I didn't like to increase the amount of work in this way.
        He said that I was right, and then let's go ahead as planned.
        Then, even though I had achieved my goal, I was not happy at all.
        So I apologized to the customer and updated the site with a new design I made, and the project was guaranteed in time. He expressed great satisfaction.
        I think I forgot for a while that the customer was my god at that time.
        Since then, when working with customers, I do a lot of research and raise enough possible problems so that customers don't miss anything.
        And I always go above and beyond for my clients.`},{title:"united health group uhg",type:1,content:"UnitedHealth Group is a health and well-being company offering health care coverage and benefits through UnitedHealthcare, and technology and data-enabled care delivery through Optum. Optum plays an important role in the implementation of guidance and tools they need to achieve better health. The main duty of Optum is to support UHG with its technology."},{title:"Describe a time you dealt with a difficult colleague and how did you resolve it?",type:1,content:`Among my co-workers, there was a person who worked without self-confidence. He kept asking if there was anything he didn't know, but most of them were problems he could have solved on his own.
        Cause of that, I used to be interrupted even though I was concentrating on my work, it sometimes got in the way.
        I thought I should grow confidence in him.
        So I organized him to take the leadership position for a week. I decided to work under his guidance.
        Everyone didn't know why at first. But surprisingly, it was noticeably announced that he was trying to do something differently day in day out.
        It seemed that his presence was highlighted by the sense of responsibility that he held onto not only himself but also the fate of the team.
        From then on he developed the ability to do all the business on his own.
        A week later I told another him that if you dream it, you can do it.
        Life's not about expecting, hoping and wishing, it's about doing, being and becoming.`},{title:"Do you consider yourself successful?",type:1,content:`Yes I do.
        Originally, I used to think that if I made a lot of worth, I was successful.
        But after misfortune happened two years ago, I realized that wealth isn't everything to success.
        Success is not what I acknowledge, but what others evaluate.
        Right away, I consider success when I dedicate myself for others.
        That is accomplishing the goal of helping myself and others lead a better, happier, healthier life.
        Today\u2019s interview is the prelude to success.`},{title:"Are you willing to work overtime? Nights? Weekends?",type:1,content:`Yes, I am.
        If I face to the urgent task due in a limited time, I will surely work overtime.
        If I find something happy in my work, I won't be tired, I'm even happier.`},{title:"What is difficult for you to answer in the interview? ",type:1,content:""},{title:"What do you like most while working at the company? ",type:1,content:""},{title:"Tell me about a time when you had to deal with a difficult team member. How did you handle it, and what was the outcome? ",type:1,content:`In a previous role, I worked on a project with a team member who frequently missed deadlines and didn't communicate their progress. This caused delays and frustration within the team.

I decided to address the issue directly but tactfully. I scheduled a one-on-one meeting to understand their perspective and any challenges they were facing. During the discussion, it became clear that they were struggling with the workload and didn't feel comfortable asking for help.

Together, we developed a plan to redistribute some of the tasks and set up regular check-ins to ensure they felt supported and the team stayed on track. As a result, the team member's performance improved significantly, and we were able to complete the project on time. This experience reinforced the importance of open communication and early intervention when addressing team issues.`},{title:"Describe a situation where you had to meet a tight deadline. How did you prioritize tasks and ensure everything was completed on time? ",type:1,content:`In my role as a senior blockchain developer at NextQloud, we had a situation where a critical smart contract for a decentralized finance (DeFi) application needed to be deployed within a week due to a strategic partnership announcement.

To tackle this, I first broke down the project into key tasks: smart contract development, security auditing, and integration with the frontend. I prioritized tasks based on their dependencies and criticality, ensuring that development and auditing were completed first.

I held daily stand-up meetings to monitor progress, address any issues promptly, and adjust priorities as needed. Additionally, I leveraged automated testing tools to accelerate the security audit process, ensuring robustness without sacrificing time.

By maintaining clear communication and focusing on high-priority tasks, we successfully deployed the smart contract on schedule, which enabled a timely partnership announcement and significantly boosted our platform\u2019s credibility and user base.`},{title:"Can you share an example of when you had to adapt to a significant change in a project or task? How did you manage the transition?",type:1,content:"At LoanDepot, I faced a significant change when we decided to transition our mortgage application platform from a monolithic to a microservices architecture to improve scalability. I led the effort by first mapping out a detailed migration plan, then educating the team on microservices best practices and tools like Docker and Kubernetes. We migrated components incrementally, ensuring seamless integration with the existing system and implementing CI/CD pipelines to automate testing and deployment. This structured approach enabled us to successfully transition to a more scalable architecture while maintaining the project's timeline and improving overall system performance."},{title:"Give me an example of a challenging problem you faced at work and the steps you took to solve it.",type:1,content:"At LoanDepot, a challenging problem arose when we encountered severe performance bottlenecks in our mortgage application platform during peak usage times. To tackle this, I first conducted a detailed performance analysis to pinpoint the bottlenecks. I then refactored critical parts of the code, optimized database queries, and implemented caching strategies. Additionally, I introduced load balancing to distribute the traffic more efficiently. These steps resulted in a significant performance improvement, ensuring a smooth and responsive user experience even during high traffic periods."},{title:"Tell me about a time when you had to persuade someone to see things from your perspective. How did you approach the situation? ",type:1,content:"At NextQloud, I had to persuade the team to adopt a new consensus algorithm for our blockchain project to enhance security and scalability. I approached this by presenting a well-researched proposal that highlighted the benefits, backed by data and case studies from other successful implementations. I organized a series of discussions to address concerns and demonstrated how the new algorithm would integrate seamlessly with our existing system. By focusing on the long-term advantages and providing thorough evidence, I was able to gain the team's support and proceed with the implementation."},{title:"If you were assigned a project with a tight deadline and limited resources, how would you approach it to ensure its successful completion?",type:1,content:"If I were assigned a project with a tight deadline and limited resources in the future, I would draw on my experience as a blockchain developer at NextQloud and a full stack developer at LoanDepot. I would start by breaking the project into prioritized tasks, focusing on high-impact and critical components. Utilizing existing frameworks and tools would streamline development, while maintaining daily stand-ups would ensure effective communication and quick problem resolution. By staying organized and leveraging efficient practices, I would ensure the project's successful completion within the constraints."},{title:"Imagine you're working on a team project, and a team member is not contributing their fair share. How would you address the situation?",type:1,content:"In that case, I would first have a private, empathetic conversation with the team member to understand any challenges they might be facing. Then, I would offer support or resources to help them improve their contribution. If the issue persisted, I would discuss it with the team to redistribute tasks more effectively, ensuring the project's success while maintaining team spirit."},{title:"Suppose a key team member unexpectedly leaves the project, leaving a gap in expertise. How would you handle the knowledge transfer and maintain project momentum?",type:1,content:"Certainly! If a key team member unexpectedly leaves the project, it's crucial to act swiftly and strategically. First, I would assess the extent of the expertise gap and identify critical project dependencies. Then, I would initiate a knowledge transfer plan, leveraging any existing documentation and arranging focused sessions with the departing member if possible. Simultaneously, I would redistribute responsibilities among the remaining team members based on their strengths and familiarity with the project. Clear communication and frequent updates would be key to ensuring everyone understands their new roles and the evolving project priorities. Additionally, I would prioritize hiring or temporarily outsourcing expertise to fill the gap and maintain momentum, ensuring the project stays on track without compromising quality or timelines."},{title:"If you are responsible for managing conflicting priorities from different team members, how would you prioritize tasks and resolve conflicts?",type:1,content:"In managing conflicting priorities, I prioritize tasks by aligning them with the project's overall objectives and deadlines. I gather input from each team member, assess the urgency and impact of each task, and strive for consensus through open communication and understanding. If consensus isn't possible, I make decisions based on objective criteria such as project timelines and strategic importance. Throughout, I maintain transparency and keep the team informed to ensure everyone understands the reasoning behind task prioritization."},{title:"How would you handle a situation where a project you've been working on for months is suddenly scrapped due to a change in company strategy?",type:1,content:"If that really happened to me, I would first seek clarity on the rationale behind the decision from management. Once understood, I would focus on ensuring a smooth transition, documenting key learnings and insights gained from the project. I would then redirect my efforts towards supporting the new strategic initiatives of the company, leveraging my experience and skills to contribute effectively to the evolving priorities. Maintaining adaptability and a proactive mindset would be crucial in navigating such a transition professionally."},{title:"What type of work environment do you thrive in, and how do you contribute to a positive workplace culture?",type:1,content:"I thrive in a collaborative work environment where there's a balance between autonomy and teamwork. I value clear communication, mutual respect, and a culture that encourages continuous learning and innovation. I contribute to a positive workplace culture by being proactive in sharing knowledge, supporting my colleagues, and embracing new challenges with enthusiasm. My experience in blockchain development at NextQloud and full stack development at LoanDepot has equipped me to adapt quickly, contribute effectively to team goals, and foster a supportive atmosphere where everyone can succeed and grow together."},{title:"Describe a work culture that you believe brings out the best in employees. How have you contributed to creating such a culture in your previous roles?",type:1,content:"A work culture that brings out the best in employees is one that values open communication, encourages collaboration across teams, and fosters a sense of ownership and empowerment. In my previous roles, I've contributed to such a culture by actively engaging with my colleagues, sharing knowledge and best practices, and advocating for continuous improvement. I believe in creating a supportive environment where everyone feels valued and motivated to contribute their ideas and skills. My experience in blockchain development at NextQloud and full stack development at LoanDepot has taught me the importance of teamwork and inclusivity in achieving collective success within an organization."},{title:"How do you handle stress and pressure in a work environment? Can you provide an example of a high-pressure situation you successfully navigated?",type:1,content:"I handle stress and pressure by maintaining a structured approach to tasks, prioritizing effectively, and staying organized. For example, during a critical deployment at LoanDepot, I faced tight deadlines and unexpected technical issues. I maintained composure by breaking down the problem, collaborating closely with team members, and communicating transparently with stakeholders. Through perseverance and adaptability, we successfully resolved the issues and completed the deployment on schedule, ensuring minimal disruption to operations. This experience reinforced my ability to thrive under pressure while delivering quality results in demanding situations."},{title:"What role do you believe diversity and inclusion play in the workplace, and how have you contributed to fostering a diverse and inclusive environment in your previous roles?",type:1,content:"I believe diversity and inclusion are integral to a thriving workplace because they bring varied perspectives, foster innovation, and create a sense of belonging among employees. In my previous roles at NextQloud and LoanDepot, I actively promoted diversity by collaborating with colleagues from diverse backgrounds, respecting different viewpoints, and advocating for inclusive practices. I've participated in initiatives to enhance diversity awareness and ensure equal opportunities for all team members. By celebrating differences and embracing inclusivity, I've helped create environments where everyone feels valued, respected, and empowered to contribute their best."},{title:"How do you handle feedback, both giving and receiving? Can you share an example of a time when you provided constructive feedback to a colleague or received feedback that helped you grow?",type:1,content:"I approach feedback as a valuable opportunity for growth and improvement. When giving feedback, I ensure it's constructive, specific, and delivered with empathy to support my colleague's development. For instance, at LoanDepot, I provided feedback to a team member on refining their code structure, emphasizing the importance of clarity and efficiency. Conversely, I've received feedback that helped me enhance my communication skills during project updates, leading to clearer and more effective presentations to stakeholders. I value feedback as a two-way process that fosters continuous learning and strengthens team collaboration."}],ob=[{title:"Resume chris beal Java Spring Boot",type:3,content:`Senior Java Developer, 02/2019 to 7/2024
Bongarde \u2013 Penticton, British Columbia
Managed and maintained responsive and accessible web applications utilizing Spring MVC, Spring Boot, and Java Server Pages (JSP).
\u2022	Architected productive web applications using Spring Framework to visualize data from over 80 schools, communicating critical education information to more than 1M users through RESTful APIs and Java-based microservices. 
\u2022	Collaborated with a team of scientists and researchers to create user-friendly interfaces using JavaServer Faces (JSF) and PrimeFaces for over 7 complex environmental data sets, enhancing public understanding of climate change issues and increasing user engagement by 45%. 
\u2022	Optimized Spring Boot application performance to handle large-scale environmental data visualization of up to 10 million data points, leveraging Java 8 streams and parallel processing, improving load times and reducing bounce rates, enhancing overall user experience for an average of 50,000 daily visitors. 
\u2022	Monitored and updated main websites built with Spring Framework, implementing responsive design principles using Spring MVC, ensuring seamless access to critical information for mobile users, which now account for 45% of total traffic.
Java Developer, 10/2017 to 01/2019
Lark Health \u2013 Mountain View, CA
Established a cutting-edge communication platform using Java and Spring Boot, enabling users to connect and chat in real-time with features like file sharing, video conferencing, and secure authentication mechanisms.
\u2022	Partnered closely with 15 members to develop the company's healthcare system using Java, Spring, Hibernate, and MySQL, ensuring robust data management and seamless integration.
\u2022	Translated 9 UI/UX design wireframes into actual code using Java Spring MVC, ensuring smooth operation of company infrastructure components and achieving a 35% speed increase.
\u2022	Led Agile development methodologies, including daily standups, sprint planning, and retrospective meetings for 2 years, while implementing Java-based solutions.
\u2022	Optimized application performance and refined UI responsiveness through code optimization and caching strategies by 10% using Spring Boot, JUnit, and CDN links.
\u2022	Conducted code reviews and provided guidance and mentoring to 6 junior developers, focusing on Java best practices and Spring framework utilization.
\u2022	Successfully deployed 6 applications on AWS, utilizing Docker for containerization and performing continuous integration and deployment with Jenkins and Kubernetes.
Java Developer, 01/2015 to 10/2017
LoanDepot \u2013 Lake Forest, CA
Implemented modernization of legacy Java codebases by migrating to modern Spring Boot architectures. Through this effort, improved maintainability and performance of these projects by 45%.
\u2022	Published 2 custom Spring Boot starters, 15 reusable Spring components, and utility functions for Java enterprise applications. 
\u2022	Translated requirements into responsive web applications utilizing Spring MVC, Spring Boot, Hibernate, and PostgreSQL for 22 projects and enhanced deployments using Amazon Web Services, Terraform, CI/CD pipelines, and GitLab.
\u2022	Leveraged Elasticsearch within a large distributed Java-based system, focusing on large-scale design, real-time data processing, data storage, and integration with machine learning models using Spring Data Elasticsearch.
\u2022	Used Spring Data JPA, Hibernate ORM, and both SQL (PostgreSQL) and NoSQL (MongoDB) databases to develop and manage persistent data layers. Executed comprehensive unit and integration testing using JUnit, Mockito, and Spring Test for 3 years.
Frontend Developer, 05/2013 to 01/2015
North Shore Signs & Graphics \u2013 Calgary, Alberta
Coordinated closely with 2 designers, 10 product managers, and QA teams to ensure delivery of high-quality software.
\u2022	Designed 4 new user interactive landing pages using React, REST APIs, HTML, XHTML, and CSS with web design expertise.
\u2022	Developed B2B, B2C system for individual customers and businesses to make transactions and elevated design resulting in 80% boost in conversion rate.
\u2022	Created onboarding 4 web apps for customers to make transactions secure and safe using React, Vue.js, Node.js and PHP.
\u2022	Managed frontend website development using WordPress, HubSpot, and other editing software.
\u2022	Created over 12 responsive application UIs using React (ES6), Electron, Node.js and functional components libraries with support for switching between Microsoft Azure and Google Cloud APIs, Terraform.
EDUCATION
Bachelor's Degree in Computer Science
Hong Kong College of Technology \u2013 Hong Kong
9/2009 to 2/2013

`},{title:"What was your last project and what you have done on it? or Briefly summarize your recent contributions to either a web application or API service.",type:3,content:`My greatest accomplishment was developing Project ISLA, a healthcare system that made a significant impact. 
        I created a versatile search tool that helps people find hospital information and analytics for over 3,000 hospitals nationwide.
         Using React, Django, and Elasticsearch, I built a user-friendly platform that includes features like hospital mapping and detailed statistics. 
         I'm particularly proud of optimizing the site's performance using advanced React techniques, which resulted in faster loading times and a smoother user experience. 
         The project was a huge success, earning great feedback from customers and potentially saving the healthcare system up to 500,000 dollars by improving efficiency and access to information.
         This experience taught me the value of combining technical skills with real-world problem-solving to create meaningful solutions in healthcare`},{title:"Tell me about yourself- Chris Beal Java Spring Boot Developer",type:3,content:`First of all, let me tell you about myself.
I am a backend Java developer with 10 years of experience. I specialize in microservices and RESTful API development, and in addition to backend development, I am interested in cloud technologies, DevOps practices, and database management.
My great performances are in Java 17+, Spring Boot, Spring Data, and MongoDB. I also have strong knowledge in designing and implementing RESTful APIs, which always helps me build robust and scalable applications.
My software developer career started when I was a university student. When I was a sophomore, I really loved algorithms and later enterprise application development, so I was selected as one of the Java development team members and participated in various projects.
In the team, I learned and practiced modern microservices architectures and design patterns. That was my meaningful start in the world of enterprise software development.
Later, my skills expanded amazingly, especially in Spring Boot and cloud technologies. I built over 30 microservices using this stack in the past 5 years, deploying them on AWS using Docker and Kubernetes.
I have comprehensive experience with the entire development-release lifecycle, including CI/CD pipelines using GitHub Actions. My problem-solving skills and ability to translate functional requirements into technical solutions have been honed through working in cross-functional teams on complex projects.
I am self-motivated and always eager to learn new technologies and business domains. My experience spans various industries, including healthcare and finance, giving me insight into developing software for regulated sectors.
Actually, I am available now and can start a new role immediately.
That's all.`}],ab=[{title:"Resume chris beal react developer",type:2,content:`PROFESSIONAL EXPERIENCE
Senior Frontend Developer, 02/2019 to 7/2024
Bongarde \u2013 Penticton, British Columbia
Managed and Maintained responsive and accessible web applications utilizing React, Node.js, and Next.js.
\u2022	Architected productive web applications to visualize data from over 80 schools, communicating critical education information to more than 1M users. 
\u2022	Collaborated with a team of scientists and researchers to create user-friendly interfaces for over 7 complex environmental data sets, enhancing public understanding of climate change issues and increasing user engagement by 45%. 
\u2022	Optimized web application performance to handle large-scale environmental data visualization of up to 10 million data points, improving load times and reducing bounce rates, enhancing overall user experience for an average of 50,000 daily visitors. 
\u2022	Monitored and updated main websites, implementing responsive design principles, ensuring seamless access to critical information for mobile users, which now account for 45% of total traffic.
Frontend Developer, 10/2017 to 01/2019
Lark Health \u2013 Mountain View, CA
Established cutting-edge communication platform that allowed users to connect, chat in real time, with features like file sharing, video conferencing, and secure authentication mechanisms.
\u2022	Partnered closely with 15 members to develop company's healthcare system using React, Redux, Electron, Node.js, Express, and MySQL.
\u2022	Translated 9 UI/UX design wireframes into actual code using Next.js 13, React, three.js and ensured smooth operation of company infrastructure components resulting speed increase by 35%.
\u2022	Led Agile development methodologies, including daily standups, sprint planning, and retrospective meetings for 2 years.
\u2022	Optimized application performance and refined UI responsiveness through code optimization and caching strategies by 10% using React hook, Jest, CDN links.
\u2022	Conducted code reviews and provided guidance and mentoring to 6 junior developers.
\u2022	Successfully deployed 6 applications on AWS and performed continuous integration and deployment using Docker.
Frontend Developer, 01/2015 to 10/2017
LoanDepot \u2013 Lake Forest, CA
Implemented modernization of legacy codebases by migrating to modern React architectures. Through this effort, improved maintainability and performance of these projects by 45%.
\u2022	Published custom 2 plugins, 15 templates and functions for MERN/MEAN stack applications and reviewed code, debugged problems, and corrected issues.
\u2022	Translated requirements into responsive web apps utilizing React, Next.js, Electron, MongoDB, Express.js, and Node.js for 22 websites and enhanced using Amazon Web Services, Terraform, CI/CD, Gitlab.
\u2022	Leveraged elastic search for one large distributed computing system, large scale design, real time data processing, data storage, ML, and AI to address challenging dataset problems using Python.
\u2022	Used Node.js, ORM and SQL, NoSQL to develop and manage databases and executed comprehensive unit and integrated testing using Jest, Enzyme, and Jasmine for 3 years.
Frontend Developer, 05/2013 to 01/2015
North Shore Signs & Graphics \u2013 Calgary, Alberta
Coordinated closely with 2 designers, 10 product managers, and QA teams to ensure delivery of high-quality software.
\u2022	Designed 4 new user interactive landing pages using React, Next.js, HTML, XHTML, and CSS with web design expertise.
\u2022	Developed B2B, B2C system for individual customers and businesses to make transactions and elevated design resulting in 80% boost in conversion rate.
\u2022	Created onboarding 4 web apps for customers to make transactions secure and safe using React, Vue.js, Node.js and PHP.
\u2022	Managed frontend website development using WordPress, HubSpot, and other editing software.
\u2022	Created over 12 responsive application UIs using React (ES6), Electron, Node.js and functional components libraries with support for switching between Microsoft Azure and Google Cloud APIs, Terraform.
EDUCATION
Bachelor's Degree in Computer Science
Hong Kong College of Technology \u2013 Hong Kong
9/2009 to 2/2013
`},{title:"What was your last project and what you have done on it? or Briefly summarize your recent contributions to either a web application or API service.",type:2,content:`My greatest accomplishment was developing Project ISLA, a healthcare system that made a significant impact. 
        I created a versatile search tool that helps people find hospital information and analytics for over 3,000 hospitals nationwide.
         Using React, Django, and Elasticsearch, I built a user-friendly platform that includes features like hospital mapping and detailed statistics. 
         I'm particularly proud of optimizing the site's performance using advanced React techniques, which resulted in faster loading times and a smoother user experience. 
         The project was a huge success, earning great feedback from customers and potentially saving the healthcare system up to 500,000 dollars by improving efficiency and access to information.
         This experience taught me the value of combining technical skills with real-world problem-solving to create meaningful solutions in healthcare`},{title:"Tell me about yourself- Chris Beal React Developer",type:2,content:`First of all, let me tell you about myself.
        I am a front-end JavaScript developer with 10 years of experience.       
       I specialize in Web and Decentralized applications, and in addition to front-end development, I am interested in Web Design, back-end development and GraphQL.       
        My great performances are in TypeScript, JavaScript and its libraries such as React, Redux, Web3.js, etc.       
       I also have strong knowledge in Data Structure & Algorithm, which always helps me build robust applications.
       My software developer career was started when I was a university student at the Hong Kong College of Technology.
       When I was a sophomore, I really loved maths, and later programming so I was selected as one of the Programing contest candidates and participated in a training team.
       In the team, I learned and practised modern data structrues and algorithmic patterns.
       That was my meaningful start in the software developers\u2019 world.
       Later my skills expanded amazingly, especially in React. I built over 30 websites using this stack in 2018.
       Actually, I am free now and I can start a new work immediately.
       That's all.`}],rb=[{title:"What is the Cosmos SDK?",type:6,content:`The Cosmos SDK is an open-source toolkit for building multi-asset public Proof-of-Stake (PoS) blockchains, like the Cosmos Hub, as well as permissioned Proof-of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as application-specific blockchains.

The goal of the Cosmos SDK is to allow developers to easily create custom blockchains from scratch that can natively interoperate with other blockchains. We further this modular approach by allowing developers to plug and play with different consensus engines this can range from the CometBFT or Rollkit.

SDK-based blockchains have the choice to use the predefined modules or to build their own modules. What this means is that developers can build a blockchain that is tailored to their specific use case, without having to worry about the low-level details of building a blockchain from scratch. Predefined modules include staking, governance, and token issuance, among others.

What's more, the Cosmos SDK is a capabilities-based system that allows developers to better reason about the security of interactions between modules. For a deeper look at capabilities, jump to Object-Capability Model.`},{title:"What is Tendermint in Blockchain?( Now it's called CometBFT)",type:6,content:"Tendermint is a core technology used in the blockchain world that focuses on providing a high-performance, secure, and scalable consensus engine. It is a Byzantine Fault Tolerant (BFT) consensus algorithm and is designed to support the creation of public and private blockchains."},{title:"How to call loading function with React useEffect only once?",type:6,content:"If I only want to run the function given to useEffect after the initial render, I can give it an empty array [] as the second argument."},{title:"What are Application-Specific Blockchains?",type:6,content:`One development paradigm in the blockchain world today is that of virtual-machine blockchains like Ethereum, where development generally revolves around building decentralized applications on top of an existing blockchain as a set of smart contracts. While smart contracts can be very good for some use cases like single-use applications (e.g. ICOs), they often fall short for building complex decentralized platforms. More generally, smart contracts can be limiting in terms of flexibility, sovereignty and performance.
        Application-specific blockchains offer a radically different development paradigm than virtual-machine blockchains. An application-specific blockchain is a blockchain customized to operate a single application: developers have all the freedom to make the design decisions required for the application to run optimally. They can also provide better sovereignty, security and performance.`},{title:"Why the Cosmos SDK?",type:6,content:`The Cosmos SDK is the most advanced framework for building custom modular application-specific blockchains today. Here are a few reasons why you might want to consider building your decentralized application with the Cosmos SDK:
It allows you to plug and play and customize your consensus layer. As above you can use Rollkit and Celestia as your consensus and data availability layer. This offers a lot of flexibility and customisation.
Previously the default consensus engine available within the Cosmos SDK is CometBFT. CometBFT is the most (and only) mature BFT consensus engine in existence. It is widely used across the industry and is considered the gold standard consensus engine for building Proof-of-Stake systems.
The Cosmos SDK is open-source and designed to make it easy to build blockchains out of composable modules. As the ecosystem of open-source Cosmos SDK modules grows, it will become increasingly easier to build complex decentralized platforms with it.
The Cosmos SDK is inspired by capabilities-based security, and informed by years of wrestling with blockchain state-machines. This makes the Cosmos SDK a very secure environment to build blockchains.
Most importantly, the Cosmos SDK has already been used to build many application-specific blockchains that are already in production. Among others, we can cite Cosmos Hub, IRIS Hub, Binance Chain, Terra or Kava. Many more are building on the Cosmos SDK.`},{title:"What is Cosmos SDK in simpler terms?",type:6,content:"The Cosmos SDK is a framework that facilitates the development of secure state-machines on top of CometBFT. At its core, the Cosmos SDK is a boilerplate implementation of the ABCI in Golang. It comes with a multistore to persist data and a router to handle transactions."},{title:"What does Batching mean in ReactJS?",type:6,content:"Batching is nothing but grouping React multiple state updates together into a single render state to achieve better computational performance. Until React 18, we only batched updates during the React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default."},{title:"What are the advantages of Batching in ReactJS?",type:6,content:`- Batching is great for performance because it avoids unnecessary re-renders.
        - Batching also prevents my component from rendering half-finished states where only one state variable was updated, which may cause bugs.
        - Another reason to use batching is when the web application grows, the number of nested components will increase. Therefore, if a parent component executes an unbatched state updated, the entire component tree will be re-rendered per state update that is expensive.`},{title:"Which lifecycle methods of class component is replaced by useEffect in functional component?",type:6,content:`The lifecyce methods replaced by useEffect Hooks of functional component are componentDidMount(), componentDidUpdate(), and componentWillUnmount()

        - componentDidMount: is equivalent for running an effect once.
        - componentDidUpdate: is equivalent for running effects when things change.
        - componentWillUnmount: To run a hook as the component is about to unmount, we just have to return a function from the useEffect Hook`},{title:"Compare React Context Api with useContext React hook",type:6,content:`When using the React Context API:
        - We need to wrap our content in a Consumer component and then pass a function as a child just so we could access (or consume) our state.
        - This introduces unnecessary component nesting and increases the complexity of our code.
        When using useContext Hook: \u201Cuse\u201D context without a Consumer:`},{title:"When would I use useContext hook?",type:6,content:"React\u2019s useContext hook makes it easy to pass data throughout my app without manually passing props down the tree. React Context is a way to manage state globally. Wrap child components in the Context Provider and supply the state value. Then I can access the user Context in all components:"},{title:"Is there any problem when using useContext Hook?",type:6,content:`The problem is that any component consuming state with useContext will re-render when any piece of the Context\u2019s state updates. This resulted in components that were totally divorced from one another causing each other to re-render.
        In cases where these re-renders were expensive, the memory in users\u2019 browsers accumulated JS Heap footprints in the orders of gigabytes.`},{title:"Compare useState and useReducer implementations",type:6,content:`- useState updates state with setState, while useReducer with dispatch function.
        - useState passes down all the setState custom helper functions, while useReducer passes down just the dispatch function.
        - useState needs to wrap functions in useCallback(if we want to memorize them), while dispatch function is already memorized.
        - useState easier to write, useReducer is harder to implement and needs more logic to be coded.`},{title:"Do React Hooks cover all use cases for class components?",type:6,content:`No, The following methods have not been introduced in Hooks yet:
        - getSnapshotBeforeUpdate
        - getDerivedStateFromError
        - componentDidCatch`},{title:"How can I make use of Error Boundaries in functional React components?",type:6,content:`As of v16.2.0, there's no way to turn a functional component into an error boundary. The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you\u2019ll want to declare an error boundary component once and use it throughout my application.

        Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to update and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        A few third party packages on npm implement error boundary hooks.`},{title:"What are differences between React.memo() and useMemo()?",type:6,content:`- React.memo() is a higher-order component (HOC) that we can use to wrap components that we do not want to re-render unless props within them change.
        - useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change`},{title:"What are common use cases for the useMemo?",type:6,content:`<> The primary purpose of useMemo hook is "performance optimization".
        - It returns a memoized value,
        - It accepts two arguments - create function (which should return a value to be memoized) and dependency array. It will recompute the memoized value only when one of the dependencies has changed.
        <> Using useMemo I achieve:
        referential equality of the values (to further send them to props of the components to potentially avoid re-renders)
        eliminate redoing of the computationally expensive operations for same parameters`},{title:"What are production use cases for the useRef?",type:6,content:`useRef simply returns a plain Javascript object. Its value can be accessed and modified (mutability) as many times as I need without worrying about rerender.
        useRef value will persist (won't be reset to the initialValue unlike an ordinary object defined in my function component; it persists because useRef gives I the same object instead of creating a new one on subsequent renders) for the component lifetime and across re-renders.
        useRef hook is often used to store values instead of DOM references. These values can either be a state that does not need to change too often or a state that should change as frequently as possible but should not trigger full re-rendering of the component.`},{title:"Explain the difference between useState and useRef hooks?",type:6,content:`- Updating a reference created by useRef doesn't trigger re-rendering, while updating the state (setState) makes the component re-render;
        - useRef returns an object with a current property holding the actual value. In contrast, useState returns an array with two elements.
        - useRef's current property is mutable, but useState's state variable is not.
        - The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).
        Using useRef - no re-renders.
        Using useState - triggers re-render`},{title:"When would you use useRef?",type:6,content:`To store a ref to DOM elements so I can later do something with them.
        To store values without triggering re-renders.`},{title:"When writing a Custom Hook, what is the difference between it and a normal function?",type:6,content:`Hooks use a stateful closure around the invocation of the function component to store the state on behalf of that component instance. That closure is maintained by React.
        - Custom hook will only be "stateful" if I use state with useState inside (or something that implements useState),
        - Hooks should be called from the React code only not from the regular JS functions. Hence, Hooks' scope is limited to the React code world and has more power to do a lot with React code,
        - In the class-based components, the Hooks won't work but regular functions will.
        - In the regular JS functions, I can't access useState, useEffect, useContext etc. but in react custom hooks I can.`},{title:"Do two components using the same Hook share state?",type:6,content:"No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time I use a custom Hook, all state and effects inside of it are fully isolated."},{title:"Do Hooks replace render props and higher-order components (HOC)?",type:6,content:`Often, render props and higher-order components render only a single child. React team thinks Hooks are a simpler way to serve this use case.
        There is still a place for both patterns (for example, a virtual scroller component might have a renderItem prop, or a visual container component might have its own DOM structure). But in most cases, Hooks will be sufficient and can help reduce nesting in my tree.`},{title:"What's the difference between useCallback and useMemo in practice?",type:6,content:`With useCallback I memoize functions, useMemo memoizes any computed value:
        (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time I invoke memoFn, that complex computation starts again.
        (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.`},{title:"How do I update state on a nested object with useState()?",type:6,content:"I can use spread syntax. Also while trying to update current state based on previous, use the callback pattern os setState"},{title:"Is there a React hook equivalent to componentDidCatch?",type:6,content:`There is not a React hook equivalent of componentDidCatch. However, the React team plans to add one soon.
        For functional components I can sometimes use try...catch to catch component errors. Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to updates and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        That approach has some limitations: when I use a hook like useEffect and I use some internal functions in it, I cannot put that internal function into try...catch(Error Boundary) block because I should define that function on top of useEffect hook (why?) and I shouldn't use useEffect conditionally (why?)!`},{title:"Are there any problems using useCallback?",type:6,content:"Since MyChild component is light and its re-rendering doesn't create performance issues, using useCallback here is not important. Using useCallback I also increased code complexity."},{title:"Explain the use of useLayoutEffect React Hook",type:6,content:`useLayoutEffect React Hook runs synchronously immediately after React has performed all DOM mutations. This can be useful if I need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating the state.
        As far as scheduling and lifecycle, this works the same way as componentDidMount and componentDidUpdate. my code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted).`},{title:"How would you store non-state/instance variables in functional React components?",type:6,content:`I can use useRef hook (it's the recommended way stated in docs). useRef returns an object whose reference would not change across re-renders, the actual value for foo is then kept in the current property of that object.
        - Declaring variable: const a = useRef(5) // 5 is initial value
        - getting the value: a.current
        - setting the value: a.current = my_value`},{title:"How can I force component to re-render with Hooks in React?",type:6,content:`This is possible with useState or useReducer, since useState uses useReducer internally:
        useCallback memoizes forceUpdate, so it stays constant during component lifespan and can be passed as a prop safely. updateState({}) updates the state with new object on each forceUpdate call, this results in a re-render. So yes, it forces an update when being called.
        forceUpdate isn't intended to be used under normal circumstances, only in testing or other outstanding cases. This situation may be addressed in a more conventional way.`},{title:"Can a custom React hook return JSX?",type:6,content:`While there is no hardcore restriction on how I should define custom hooks and what logic should contain, it's an anti-pattern to write hooks that return JSX.
        There are a few downsides to using hooks to return JSX
        When I write a hook that returns JSX component, I are essentially defining the component within the functional component, so on each and every re-render I will be creating a new instance of the component. This will lead to the component being unmounted and mounted again. This is bad for performance and also buggy if I have stateful login within the component as the state will get reset with every re-render of the parent
        By defining a JSX component within the hook, I are taking away the option of lazy loading my component if the need be.
        Any performance optimization to the component will require I to make use of useMemo which doesn't give I the flexibility of a custom comparator function like React.memo()
        The benefit on the other hand is that I have control over the state of the component in the parent. However, I can still implement the same logic by using a controlled component approach`},{title:"When would you want to avoid useEffect and use useLayoutEffect instead?",type:6,content:"If my effect is mutating the DOM (via a DOM node ref) and the DOM mutation will change the appearance of the DOM node between the time that it is rendered and my effect mutates it, then I don't want to use useEffect. You'll want to use useLayoutEffect. Otherwise, the user could see a flicker when my DOM mutations take effect. This is pretty much the only time I want to avoid useEffect and use useLayoutEffect instead."}],ib=[{title:"What is an Object and a Class?",type:9,content:`A-Class is an encapsulation of properties and methods that are used to represent a real-time entity. It is a data structure that brings all the instances together in a single unit.

An Object in an instance of a Class. Technically, it is just a block of memory allocated that can be stored in the form of Variables, Array or a Collection.`},{title:"What are the fundamental OOP concepts?",type:9,content:`The four fundamental concepts of Object-Oriented Programming are:

\xB7 Encapsulation \u2013 The Internal representation of an object is hidden from the view outside the object\u2018s definition. Only the required information can be accessed, whereas the rest of the data implementation is hidden.

\xB7 Abstraction \u2013 It is a process of identifying the critical behavior and data of an object and eliminating the irrelevant details.

\xB7 Inheritance \u2013 It is the ability to create new classes from another class. It is done by accessing, modifying, and extending the behavior of objects in the parent class.

\xB7 Polymorphism \u2013 The name means, one name, many forms. It is achieved by having multiple methods with the same name but different implementations.`},{title:"What is Managed and Unmanaged code?",type:9,content:`Managed code is a code that is executed by the CLR (Common Language Runtime) i.e all application code based on .Net Platform. It is considered as managed because of the .Net framework which internally uses the garbage collector to clear up the unused memory.

Unmanaged code is any code that is executed by the application runtime of any other framework apart from .Net. The application runtime will take care of memory, security, and other performance operations.`},{title:"What is an Interface?",type:9,content:"An Interface is a class with no implementation. The only thing that it contains is the declaration of methods, properties, and events."},{title:"What are the different types of classes in C#?",type:9,content:`The different types of class in C# are:

\xB7 Partial class \u2013 Allows its members to be divided or shared with multiple .cs files. It is denoted by the keyword Partial.

\xB7 Sealed class \u2013 It is a class that cannot be inherited. To access the members of a sealed class, we need to create the object of the class. It is denoted by the keyword Sealed.

\xB7 Abstract class \u2013 It is a class whose object cannot be instantiated. The class can only be inherited. It should contain at least one method. It is denoted by the keyword abstract.

\xB7 Static class \u2013 It is a class that does not allow inheritance. The members of the class are also static. It is denoted by the keyword static. This keyword tells the compiler to check for any accidental instances of the static class.`},{title:"Explain Code compilation in C#.",type:9,content:`There are four steps in code compilation, which include:

\xB7 Compiling the source code into Managed code by C# compiler.

\xB7 Combining the newly created code into assemblies.

\xB7 Loading the Common Language Runtime(CLR).

\xB7 Executing the assembly by CLR.`},{title:"What are the differences between a Class and a Struct?",type:9,content:`Given below are the differences between a Class and a Struct:

Class                                                                           Struct

Supports Inheritance                                                            Does not support Inheritance

Class is Pass by reference (reference type)                                     Struct is Pass by Copy (Value type)

Members are private by default                                                  Members are public by default

Good for larger complex objects                                                 Good for Small isolated models

Can use waste collector for memory management                                   Cannot use Garbage collector and hence no Memory management`},{title:"What is the difference between the Virtual method and the Abstract method?",type:9,content:`A Virtual method must always have a default implementation. However, it can be overridden in the derived class, though not mandatory. It can be overridden using override keyword.

An Abstract method does not have an implementation. It resides in the abstract class. It is mandatory that the derived class implements the abstract method. An override keyword is not necessary here though it can be used.`},{title:"Explain Namespaces in C#.",type:9,content:`They are used to organize large code projects. \u201CSystem\u201D is the most widely used namespace in C#. We can create our own namespace and use one namespace in another, which are called Nested Namespaces.

They are denoted by the keyword \u201Cnamespace\u201D`},{title:"What is the \u201Cusing\u201D statement in C#?",type:9,content:`\u201CUsing\u201D Keyword denotes that the particular namespace is being used by the program.

For Example, using System. Here System is a namespace. The class Console is defined under System. So we can use the console.writeline (\u201C\u2026.\u201D) or readline in our program.`},{title:"Explain Abstraction.",type:9,content:`Abstraction is one of the OOP concepts. It is used to display only the essential features of the class and hides the unnecessary information.

Let us take an Example of a Car:

A driver of the car should know the details about the Car such as color, name, mirror, steering, gear, brake, etc. What he doesn\u2018t have to know is an Internal engine, Exhaust system.

So, Abstraction helps in knowing what is necessary and hiding the internal details from the outside world. Hiding of the internal information can be achieved by declaring such parameters as Private using the private keyword.`},{title:"Explain Polymorphism?",type:9,content:`Programmatically, Polymorphism means same method but different implementations.

It is of 2 types, Compile-time and Runtime.

Compile-time polymorphism is achieved by operator overloading.

Runtime polymorphism is achieved by overriding. Inheritance and Virtual functions are used during Runtime Polymorphism.

For Example, If a class has a method Void Add(), polymorphism is achieved by Overloading the method, that is, void Add(int a, int b), void Add(int add) are all overloaded methods.`},{title:"How is Exception Handling implemented in C#?",type:9,content:`Exception handling is done using four keywords in C#:

\xB7 try \u2013 Contains a block of code for which an exception will be checked.

\xB7 catch \u2013 It is a program that catches an exception with the help of an exception handler.

\xB7 finally \u2013 It is a block of code written to execute regardless of whether an exception is caught or not.

\xB7 Throw \u2013 Throws an exception when a problem occurs.`},{title:"What are C# I/O Classes? What are the commonly used I/O Classes?",type:9,content:`C# has System.IO namespace, consisting of classes that are used to perform various operations on files like creating, deleting, opening, closing, etc.

Some commonly used I/O classes are:

\xB7 File \u2013 Helps in manipulating a file.

\xB7 StreamWriter \u2013 Used for writing characters to a stream.

\xB7 StreamReader \u2013 Used for reading characters to a stream.

\xB7 StringWriter \u2013 Used for reading a string buffer.

\xB7 StringReader \u2013 Used for writing a string buffer.

\xB7 Path \u2013 Used for performing operations related to the path information.`},{title:"What is StreamReader/StreamWriter class?",type:9,content:`StreamReader and StreamWriter are classes of namespace System.IO. They are used when we want to read or write charact90, Reader-based data, respectively.

Some of the members of StreamReader are: Close(), Read(), Readline().

Members of StreamWriter are: Close(), Write(), Writeline().

    Class Program1
    {
        using(StreamReader sr = new StreamReader(\u201CC:\\ReadMe.txt\u201D)
        {
            //----------------code to read-------------------//
        }

        using(StreamWriter sw = new StreamWriter(\u201CC:\\ReadMe.txt\u201D))
        {
            //-------------code to write-------------------//
        }
    }`},{title:"What is a Destructor in C#?",type:9,content:`A Destructor is used to clean up the memory and free the resources. But in C# this is done by the garbage collector on its own. System. GC.Collect() is called internally for cleaning up. But sometimes it may be necessary to implement destructors manually.

For Example:

    ~Car()
    {
        Console.writeline(\u201C....\u201D);
    }`},{title:"What is an Abstract Class?",type:9,content:`An Abstract class is a class which is denoted by abstract keyword and can be used only as a Base class. An Abstract class should always be inherited. An instance of the class itself cannot be created. If we do not want any program to create an object of a class, then such classes can be made abstract.

Any method in the abstract class does not have implementations in the same class. But they must be implemented in the child class.

For Example:

    abstract class AB1
    {
        Public void Add();
    }

    Class childClass : AB1
    {
        childClass cs = new childClass ();
        int Sum = cs.Add();
    }

All the methods in an abstract class are implicitly virtual methods. Hence virtual keywords should not be used with any methods in the abstract class.`},{title:"What are Boxing and Unboxing?",type:9,content:`Converting a value type to a reference type is called Boxing.

For Example:

    int Value1 -= 10;
    //------Boxing------//
    object boxedValue = Value1;

Explicit conversion of same reference type (created by boxing) back to value type is called Unboxing.

For Example:

    //------UnBoxing------//
    int UnBoxing = int (boxedValue);`},{title:"What is the difference between Continue and Break Statement?",type:9,content:"Break statement breaks the loop. It makes the control of the program to exit the loop. Continue statement makes the control of the program to exit only the current iteration. It does not break the loop."},{title:"What is the difference between finally and finalize block?",type:9,content:`finally block is called after the execution of try and catch block. It is used for exception handling. Regardless of whether an exception is caught or not, this block of code will be executed. Usually, this block will have a clean-up code.

finalize method is called just before garbage collection. It is used to perform clean up operations of Unmanaged code. It is automatically called when a given instance is not subsequently called.`},{title:"What is an Array? Give the syntax for a single and multi-dimensional array?",type:9,content:`An Array is used to store multiple variables of the same type. It is a collection of variables stored in a contiguous memory location.

For Example:

    double numbers = new double[10];
    int[] score = new int[4] {25,24,23,25};

A Single dimensional array is a linear array where the variables are stored in a single row. Above example is a Single dimensional array.

Arrays can have more than one dimension. Multidimensional arrays are also called rectangular arrays.

For Example:

    int[,] numbers = new int[3,2] { {1,2} ,{2,3},{3,4} };`},{title:"What is a Jagged Array?",type:9,content:`A Jagged array is an array whose elements are arrays. It is also called an array of arrays. It can be either single or multiple dimensions.

    int[] jaggedArray = new int[4][];`},{title:"Name some properties of Array.",type:9,content:`Properties of an Array include:

\xB7 Length \u2013 Gets the total number of elements in an array.

\xB7 IsFixedSize \u2013 Tells whether the array is fixed in size or not.

\xB7 IsReadOnly \u2013 Tells whether the array is read-only or not.`},{title:"What is an Array Class?",type:9,content:"An Array class is the base class for all arrays. It provides many properties and methods. It is present in the namespace System."},{title:"What is a String? What are the properties of a String Class?",type:9,content:`A String is a collection of char objects. We can also declare string variables in c#.

    string name = \u201CC# Questions\u201D;

A string class in C# represents a string.

The properties of String class are Chars and Length.
Chars get the Char object in the current String.
Length gets the number of objects in the current String.`},{title:"What is an Escape Sequence? Name some String escape sequences in C#.",type:9,content:`An Escape sequence is denoted by a backslash (). The backslash indicates that the character that follows it should be interpreted literally or it is a special character. An escape sequence is considered as a single character.

String escape sequences are as follows:

\xB7 \\n \u2013 Newline character

\xB7 \\b \u2013 Backspace

\xB7 \\\\ \u2013 Backslash

\xB7 \\\u2018 \u2013 Single quote

\xB7 \\\u2018\u2018 \u2013 Double Quote`},{title:"What are Regular expressions? Search a string using regular expressions?",type:9,content:`Regular expression is a template to match a set of input. The pattern can consist of operators, constructs or character literals. Regex is used for string parsing and replacing the character string.

For Example:

* matches the preceding character zero or more times. So, a*b regex is equivalent to b, ab, aab, aaab and so on.

Searching a string using Regex

    static void Main(string[] args)
    {
        string[] languages = { "C#", "Python", "Java" };
        foreach(string s in languages)
        {
            if(System.Text.RegularExpressions.Regex.IsMatch(s,"Python"))
            {
                Console.WriteLine("Match found");
            }
        }
    }

The above example searches for \u201CPython\u201D against the set of inputs from the languages array. It uses Regex.IsMatch which returns true in case if the pattern is found in the input. The pattern can be any regular expression representing the input that we want to match.`},{title:"What are the basic String Operations? Explain.",type:9,content:`Some of the basic string operations are:

\xB7 Concatenate \u2013 Two strings can be concatenated either by using System.String.Concat or by using + operator.

\xB7 Modify \u2013 Replace(a,b) is used to replace a string with another string. Trim() is used to trim the string at the end or at the beginning.

\xB7 Compare \u2013 System.StringComparison() is used to compare two strings, either case-sensitive comparison or not case sensitive. Mainly takes two parameters, original string, and string to be compared with.

\xB7 Search \u2013 StartWith, EndsWith methods are used to search a particular string.`},{title:"What is Parsing? How to Parse a Date Time String?",type:9,content:`Parsing is converting a string into another data type.

For Example:

    string text = \u201C500\u201D;
    int num = int.Parse(text);

500 is an integer. So, Parse method converts the string 500 into its own base type, i.e int.

Follow the same method to convert a DateTime string.

    string dateTime = \u201CJan 1, 2018\u201D;
    DateTime parsedValue = DateTime.Parse(dateTime);`},{title:"What is a Delegate? Explain.",type:9,content:`A Delegate is a variable that holds the reference to a method. Hence it is a function pointer of reference type. All Delegates are derived from System.Delegate namespace. Both Delegate and the method that it refers to can have the same signature.

Declaring a delegate:

    public delegate void AddNumbers(int n);

After the declaration of a delegate, the object must be created of the delegate using the new keyword.

    AddNumbers an1 = new AddNumbers(number);

The delegate provides a kind of encapsulation to the reference method, which will internally get called when a delegate is called.

    public delegate int myDel(int number);
    public class Program
    {
        public int AddNumbers(int a)
        {
            int Sum = a + 10;
            return Sum;
        }

        public void Start()
        {
            myDel DelgateExample = AddNumbers;
        }
    }

In the above example, we have a delegate myDel which takes an integer value as a parameter. Class Program has a method of the same signature as the delegate, called AddNumbers().

If there is another method called Start() which creates an object of the delegate, then the object can be assigned to AddNumbers as it has the same signature as that of the delegate.`},{title:"What are Events?",type:9,content:`Events are user actions that generate notifications to the application to which it must respond. The user actions can be mouse movements, keypress and so on.

Programmatically, a class that raises an event is called a publisher and a class which responds/receives the event is called a subscriber. An Event should have at least one subscriber else that event is never raised.

Delegates are used to declare Events.

    Public delegate void PrintNumbers();
    Event PrintNumbers myEvent;`},{title:"How to use Delegates with Events?",type:9,content:`Delegates are used to raise events and handle them. Always a delegate needs to be declared first and then the Events are declared.

Let us see an Example:

Consider a class called Patient. Consider two other classes, Insurance, and Bank which requires Death information of the Patient from patient class. Here, Insurance and Bank are the subscribers and the Patient class becomes the Publisher. It triggers the death event and the other two classes should receive the event.

    namespace ConsoleApp2
    {

        public class Patient
        {

            public delegate void deathInfo(); //Declaring a Delegate//

            public event deathInfo deathDate; //Declaring the event//

            public void Death()
            {
                deathDate();
            }
        }

        public class Insurance
        {

            Patient myPat = new Patient();

            void GetDeathDetails()
            {
                //-------Do Something with the deathDate event------------//
            }

            void Main()
            {
                //--------Subscribe the function GetDeathDetails----------//
                myPat.deathDate += GetDeathDetails;
            }

        }

        public class Bank
        {

            Patient myPat = new Patient();

            void GetPatInfo()
            {
                //-------Do Something with the deathDate event------------//
            }

            void Main()
            {
                //--------Subscribe the function GetPatInfo ----------//
                myPat.deathDate += GetPatInfo;
            }
        }
    }`},{title:"What are the different types of Delegates?",type:9,content:`The Different types of Delegates are:

Single Delegate \u2013 A delegate which can call a single method.

Multicast Delegate \u2013 A delegate which can call multiple methods. + and \u2013 operators are used to subscribe and unsubscribe respectively.

Generic Delegate \u2013 It does not require an instance of delegate to be defined. It is of three types, Action, Funcs and Predicate.

\xB7 Action \u2013 In the above example of delegates and events, we can replace the definition of delegate and event using Action keyword. The Action delegate defines a method that can be called on arguments but does not return a result

    Public delegate void deathInfo();
    Public event deathInfo deathDate;
    //Replacing with Action//
    Public event Action deathDate;

Action implicitly refers to a delegate.

\xB7 Func \u2013 A Func delegate defines a method that can be called on arguments and returns a result.

Func <int, string, bool> myDel is same as delegate bool myDel(int a, string b);

\xB7 Predicate \u2013 Defines a method that can be called on arguments and always returns the bool.

Predicate<string> myDel is same as delegate bool myDel(string s);`},{title:"What do Multicast Delegates mean?",type:9,content:`A Delegate that points to more than one method is called a Multicast Delegate. Multicasting is achieved by using + and += operator.

Consider the Example from question 32.

There are two subscribers for deathEvent, GetPatInfo, and GetDeathDetails. And hence we have used += operator. It means whenever the myDel is called, both the subscribers get called. The delegates will be called in the order in which they are added.`},{title:"Explain Publishers and Subscribers in Events.",type:9,content:`A Publisher is a class responsible for publishing a message of different types of other classes. The message is nothing but Event as discussed in the above questions.

From the Example in Question 32, Class Patient is the Publisher class. It is generating an Event deathEvent, which the other classes receive.

Subscribers capture the message of the type that it is interested in. Again, from the Example of Question 32, Class Insurance and Bank are Subscribers. They are interested in event deathEvent of type void.`},{title:"What are Synchronous and Asynchronous operations?",type:9,content:`Synchronization is a way to create a thread-safe code where only one thread can access the resource at any given time.

Asynchronous call waits for the method to complete before continuing with the program flow. Synchronous programming badly affects the UI operations, when the user tries to perform time-consuming operations since only one thread will be used.

In Asynchronous operation, the method call will immediately return so that the program can perform other operations while the called method completes its work in certain situations.

In C#, Async and Await keywords are used to achieve asynchronous programming. Look at Question 43 for more details on synchronous programming.`},{title:"What is Reflection in C#?",type:9,content:`Reflection is the ability of code to access the metadata of the assembly during runtime. A program reflects upon itself and uses the metadata to inform the user or modify its behavior. Metadata refers to information about objects, methods.

The namespace System. Reflection contains methods and classes that manage the information of all the loaded types and methods. It is mainly used for windows applications, for Example, to view the properties of a button in a windows form.

The MemberInfo object of the class reflection is used to discover the attributes associated with a class.

Reflection is implemented in two steps, first, we get the type of the object, and then we use the type to identify members such as methods and properties.

To get the type of a class, we can simply use

    Type mytype = myClass.GetType();

Once we have a type of class, the other information of the class can be easily accessed.

    System.Reflection.MemberInfo Info = mytype.GetMethod(\u201CAddNumbers\u201D);

Above statement tries to find a method with name AddNumbers in the class myClass.`},{title:"What is a Generic Class?",type:9,content:`Generics or Generic class is used to create classes or objects which do not have any specific data type. The data type can be assigned during runtime, i.e when it is used in the program.

For Example:

    class Program
    {
        0 references
        public void Compare(int a, int b)
        {
        }

        0 references
        public void Compare(string a, string b)
        {
        }

        4 references
        class CompareGenericClass<T>
        {
            2 references
            public void Compare(T x, T y)
            {
            }
        }

        0 references
        static void Main(string[] args)
        {
            CompareGenericClass<string> stringCompare = new CompareGenericClass<string>();
            stringCompare.Compare("", "");

            CompareGenericClass<int> intCompare = new CompareGenericClass<int>();
            intCompare.Compare(2, 3);
        }
    }

So, from the above code, we see 2 compare methods initially, to compare string and int.

In case of other data type parameter comparisons, instead of creating many overloaded methods, we can create a generic class and pass a substitute data type, i.e T. So, T acts as a datatype until it is used specifically in the Main() method.`},{title:"Explain Get and Set Accessor properties?",type:9,content:`Get and Set are called Accessors. These are made use by Properties. A property provides a mechanism to read, write the value of a private field. For accessing that private field, these accessors are used.

Get Property is used to return the value of a property
Set Property accessor is used to set the value.

The usage of get and set is as below:

    namespace ConsoleApp1
    {
        2 references
        class Program
        {
            int number;

           2 references
           public int Number
           {
               get
               {
                   return this.number;
               }

               set
               {
                   this.number = value;
               }
           }

           0 references
           class New
           {
               0 references
               static void Main()
               {
                   Program myprgm = new Program();
                   myprgm.Number = 10;
                   Console.WriteLine(myprgm.Number);
               }
           }
        }
    }`},{title:"What is a Thread? What is Multithreading?",type:9,content:`A Thread is a set of instructions that can be executed, which will enable our program to perform concurrent processing. Concurrent processing helps us do more than one operation at a time. By default, C# has only one thread. But the other threads can be created to execute the code in parallel with the original thread.

Thread has a life cycle. It starts whenever a thread class is created and is terminated after the execution. System.Threading is the namespace which needs to be included to create threads and use its members.

Threads are created by extending the Thread Class. Start() method is used to begin thread execution.

    //CallThread is the target method//
    ThreadStart methodThread = new ThreadStart(CallThread);
    Thread childThread = new Thread(methodThread);
    childThread.Start();

C# can execute more than one task at a time. This is done by handling different processes by different threads. This is called MultiThreading.

There are several thread methods that are used to handle the multi-threaded operations:

Start, Sleep, Abort, Suspend, Resume and Join.

Most of these methods are self-explanatory.`},{title:"Name some properties of Thread Class.",type:9,content:`Answer: Few Properties of thread class are:

\xB7 IsAlive \u2013 contains value True when a thread is Active.

\xB7 Name \u2013 Can return the name of the thread. Also, can set a name for the thread.

\xB7 Priority \u2013 returns the prioritized value of the task set by the operating system.

\xB7 IsBackground \u2013 gets or sets a value which indicates whether a thread should be a background process or foreground.

\xB7 ThreadState \u2013 describes the thread state.`},{title:"What are the different states of a Thread?",type:9,content:`Different states of a thread are:

\xB7 Unstarted \u2013 Thread is created.

\xB7 Running \u2013 Thread starts execution.

\xB7 WaitSleepJoin \u2013 Thread calls sleep, calls wait on another object and calls join on another thread.

\xB7 Suspended \u2013 Thread has been suspended.

\xB7 Aborted \u2013 Thread is dead but not changed to state stopped.

\xB7 Stopped \u2013 Thread has stopped.`},{title:"What are Async and Await?",type:9,content:`Async and Await keywords are used to create asynchronous methods in C.

Asynchronous programming means that the process runs independently of main or other processes.

Usage of Async and Await is as shown below:

    public async Task<int> CalculateCount()
      {
          //Write Code to calculate Count of characters in a file//

          await Task.Delay(1000);
          return 1;
      }

      public async Task myMethod()
      {
          Task<int> count = CalculateCount();
          int result = await count;
      }

\xB7 Async keyword is used for the method declaration.

\xB7 The count is of a task of type int which calls the method CalculateCount().

\xB7 Calculatecount() starts execution and calculates something.

\xB7 Independent work is done on my thread and then an await count statement is reached.

\xB7 If the Calculatecount is not finished, myMethod will return to its calling method, thus the main thread doesn\u2018t get blocked.

\xB7 If the Calculatecount is already finished, then we have the result available when the control reaches await count. So the next step will continue in the same thread. However, it is not the situation in the above case where Delay of 1 second is involved.`},{title:"What is a Deadlock?",type:9,content:`A Deadlock is a situation where a process is not able to complete its execution because two or more processes are waiting for each other to finish. This usually occurs in multi-threading.

Here a Shared resource is being held by a process and another process is waiting for the first process to release it and the thread holding the locked item is waiting for another process to complete.

Consider the below Example:

    private static ibject ObjA = new object()
    private static ibject ObjB = new object()

    private static void PerformtaskA()
    {
        //-----------------some code------------//

        //Try to access ObjB//
        lock(ObjB)
        {
            Thread.Sleep(1000);
            lock(ObjA)
            {
                //-----------------some code------------//
            }
        }
    }

    private static void PerformtaskB()
    {

        //-----------------some code------------//

        lock(ObjA)
        {
            lock(ObjB)
            {
                //-----------------some code------------//
            }
        }
    }

    public static void Main()
    {
        Thread thread1 = new Thread(PerformaskA);
        Thread thread2 = new Thread(PerformaskB);

        thread1.Start(); thread2.Start();
    }

\xB7 Perform tasks accesses objB and waits for 1 second.

\xB7 Meanwhile, PerformtaskB tries to access ObjA.

\xB7 After 1 second, PeformtaskA tries to access ObjA which is locked by PerformtaskB.

\xB7 PerformtaskB tries to access ObjB which is locked by PerformtaskA.

This creates Deadlock.`},{title:"Explain Lock, Monitors, and Mutex Object in Threading.",type:9,content:`Lock keyword ensures that only one thread can enter a particular section of the code at any given time. In the above Example, lock(ObjA) means the lock is placed on ObjA until this process releases it, no other thread can access ObjA.

A Mutex is also like a lock but it can work across multiple processes at a time. WaitOne() is used to lock and ReleaseMutex() is used to release the lock. But Mutex is slower than lock as it takes time to acquire and release it.

Monitor.Enter and Monitor.Exit implements lock internally. a lock is a shortcut for Monitors. lock(objA) internally calls.

    Monitor.Enter(ObjA);
    try
    {
    }
    Finally {Monitor.Exit(ObjA));}`},{title:"What is a Race Condition?",type:9,content:`A Race condition occurs when two threads access the same resource and are trying to change it at the same time. The thread which will be able to access the resource first cannot be predicted.

If we have two threads, T1 and T2, and they are trying to access a shared resource called X. And if both the threads try to write a value to X, the last value written to X will be saved.`},{title:"What is Thread Pooling?",type:9,content:`A Thread pool is a collection of threads. These threads can be used to perform tasks without disturbing the primary thread. Once the thread completes the task, the thread returns to the pool.

System.Threading.ThreadPool namespace has classes that manage the threads in the pool and its operations.

    System.Threading.ThreadPool.QueueUserWorkItem(new System.Threading.WaitCallback(SomeTask));

The above line queues a task. SomeTask methods should have a parameter of type Object.`},{title:"What is Serialization?",type:9,content:`Serialization is a process of converting code to its binary format. Once it is converted to bytes, it can be easily stored and written to a disk or any such storage devices. Serializations are mainly useful when we do not want to lose the original form of the code and it can be retrieved anytime in the future.

Any class which is marked with the attribute [Serializable] will be converted to its binary form.

The reverse process of getting the c# code back from the binary form is called Deserialization.

To Serialize an object we need the object to be serialized, a stream that can contain the serialized object and namespace System.Runtime.Serialization can contain classes for serialization.`},{title:"What are the types of Serialization?",type:9,content:`The different types of Serialization are: XML serialization, SOAP, and Binary.

\xB7 XML serialization \u2013 It serializes all the public properties to the XML document. Since the data is in XML format, it can be easily read and manipulated in various formats. The classes reside in System.sml.Serialization.

\xB7 SOAP \u2013 Classes reside in System.Runtime.Serialization. Similar to XML but produces a complete SOAP compliant envelope that can be used by any system that understands SOAP.

\xB7 Binary Serialization \u2013 Allows any code to be converted to its binary form. Can serialize and restore public and non-public properties. It is faster and occupies less space.`},{title:"What is an XSD file?",type:9,content:`An XSD file stands for XML Schema Definition. It gives a structure for the XML file. It means it decides the elements that the XML should have and in what order and what properties should be present. Without an XSD file associated with XML, the XML can have any tags, any attributes, and any elements.

Xsd.exe tool converts the files to XSD format. During Serialization of C# code, the classes are converted to XSD compliant format by xsd.exe.`},{title:"Yield Statement",type:9,content:`The yield keyword signals to the compiler that the method in which it appears is an iterator block. The compiler generates a class to implement the behavior that is expressed in the iterator block. In the iterator block, the yield keyword is used together with the return keyword to provide a value to the enumerator object. This is the value that is returned, for example, in each loop of a foreach statement. The yield keyword is also used with break to signal the end of iteration.

To use "yield return", you just need to create a method with a return type that is an IEnumerable (arrays and collections in. Net implements IEnumerable interface) with a loop and use "yield return" to return a value to set in the loop body.

The yield statement is used in an iterator block to yield a value to the enumerator object or enumerable object of an iterator or to signal the end of the iteration.

yield_statement
    : 'yield' 'return' expression ';'
    | 'yield' 'break' ';'
    ;

yield is a contextual keyword and has special meaning only when used immediately before a return or break keyword.

There are several restrictions on where a yield statement can appear, as described in the following.

\xB7 It is a compile-time error for a yield statement (of either form) to appear outside a method_body, operator_body, or accessor_body.
\xB7 It is a compile-time error for a yield statement (of either form) to appear inside an anonymous function.
\xB7 It is a compile-time error for a yield statement (of either form) to appear in the finally clause of a try statement.
\xB7 It is a compile-time error for a yield return statement to appear anywhere in a try statement that contains any catch_clauses.`},{title:"What is C#?",type:9,content:"C# is a simple, modern, general purpose programming language. It is an object oriented programming language developed by Microsoft. It is a safe and managed language that is compiled by .NET framework to generate Microsoft intermediate language (machine code)."}],sb=[{title:"Can you explain the difference between Proof of Work and Proof of Stake consensus algorithms?",type:8,content:`Proof of Work (PoW) and Proof of Stake (PoS) are two common consensus mechanisms in blockchain:
Proof of Work requires miners to solve complex mathematical puzzles to validate transactions and create new blocks. It's secure but energy-intensive.
Proof of Stake selects validators based on the amount of cryptocurrency they "stake" or lock up as collateral. It's more energy-efficient but can potentially lead to centralization if not implemented carefully.`},{title:"What experience do you have with Ethereum smart contract development?",type:8,content:"I have extensive experience developing smart contracts on Ethereum using Solidity. I've created and deployed contracts for various DApps, including a decentralized exchange and an NFT marketplace. I'm familiar with tools like Truffle and Hardhat for development and testing, and I've used OpenZeppelin for secure contract implementations."},{title:"How would you explain the concept of a Merkle tree in blockchain?",type:8,content:"A Merkle tree is a data structure used in blockchain to efficiently verify the integrity of large datasets. It's a binary tree where each leaf node is a hash of a data block, and each non-leaf node is a hash of its child nodes. This structure allows for quick verification of whether a specific transaction is included in a block without needing to download the entire blockchain."},{title:" Can you describe your experience with decentralized storage solutions?",type:8,content:"I've worked with several decentralized storage solutions, including IPFS (InterPlanetary File System) and Filecoin. I've integrated IPFS into DApps to store and retrieve data off-chain, reducing on-chain storage costs. I've also set up and maintained IPFS nodes and developed smart contracts that interact with decentralized storage networks."},{title:"How do you ensure the security of smart contracts you develop?",type:8,content:`To ensure smart contract security, I follow several best practices:
Use well-audited libraries like OpenZeppelin
Conduct thorough testing, including unit tests and integration tests
Perform static analysis using tools like Slither
Conduct manual code reviews
Consider formal verification for critical contracts
Use bug bounty programs for additional security checks
Keep contracts simple and modular to reduce attack surface`},{title:"Can you explain your experience with CI/CD pipelines in blockchain development?",type:8,content:`I've set up CI/CD pipelines using tools like Jenkins and GitLab CI for blockchain projects. These pipelines typically include:
Automated testing of smart contracts
Static code analysis
Deployment to test networks
Gas optimization checks
Documentation generation
This ensures consistent quality and streamlines the development process.`},{title:"How do you stay updated with the latest developments in blockchain technology?",type:8,content:` I stay updated through several methods:
Following key blockchain developers and projects on social media
Regularly reading blockchain-focused publications and research papers
Participating in online forums and communities
Attending blockchain conferences and meetups
Experimenting with new technologies in personal projects
Taking online courses and certifications
This multi-faceted approach helps me stay current in this rapidly evolving field.`},{title:"What is your experience with cross-chain interoperability solutions?",type:8,content:" I've worked with cross-chain bridges and protocols like Polkadot's Substrate framework and Cosmos's Inter-Blockchain Communication (IBC) protocol. I've implemented cross-chain token transfers and developed smart contracts that can interact across different blockchain networks. This experience has given me insights into the challenges and solutions for blockchain interoperability."},{title:"How would you explain the concept of gas in Ethereum to a non-technical person?",type:8,content:" I've worked with cross-chain bridges and protocols like Polkadot's Substrate framework and Cosmos's Inter-Blockchain Communication (IBC) protocol. I've implemented cross-chain token transfers and developed smart contracts that can interact across different blockchain networks. This experience has given me insights into the challenges and solutions for blockchain interoperability."},{title:"Can you describe your experience with Layer 2 scaling solutions?",type:8,content:"I've worked extensively with Layer 2 scaling solutions, particularly Optimistic Rollups and zk-Rollups. I've implemented smart contracts that interact with Layer 2 protocols like Optimism and zkSync. This involved adapting existing DApps to work on Layer 2, handling state transitions between Layer 1 and Layer 2, and optimizing for the specific characteristics of each Layer 2 solution."},{title:"How do you approach testing blockchain applications?",type:8,content:`My approach to testing blockchain applications involves:
Unit testing individual functions and smart contracts
Integration testing to ensure different components work together
Simulating various network conditions and edge cases
Using test networks (testnets) for real-world testing
Conducting security audits and vulnerability assessments
Performing gas optimization tests
User acceptance testing to ensure usability
I use tools like Truffle, Hardhat, and Ganache for Ethereum development, and similar frameworks for other blockchains.`},{title:"What's your understanding of tokenomics, and how have you applied it in your projects?",type:8,content:"Tokenomics refers to the economic model of a cryptocurrency or token within a blockchain ecosystem. It encompasses factors like token supply, distribution, utility, and incentive mechanisms. In my projects, I've designed tokenomic models that balance user incentives, platform sustainability, and token value. For example, in a DeFi project, I implemented a staking mechanism with time-locked rewards to encourage long-term holding and platform engagement."},{title:"How docker kubernetes AWS zure can be used for blockchain development?",type:8,content:`Docker, Kubernetes, and cloud services play important roles in blockchain development and deployment. Here's how they are typically used together:
Docker:
Used to package blockchain nodes and applications into containers
Provides consistent environments for development and deployment
Allows quick setup of blockchain networks using pre-built images (e.g. Hyperledger, Ethereum)
Simplifies deployment and scaling of blockchain nodes
Kubernetes:
Orchestrates and manages containerized blockchain applications
Automates deployment, scaling, and management of blockchain nodes
Provides features like load balancing, self-healing, and rolling updates
Enables creation of secure and isolated environments for blockchain nodes
Simplifies management of complex blockchain networks
Cloud Services (AWS, Azure, Google Cloud):
Provide managed Kubernetes services (e.g. EKS, AKS, GKE) to run blockchain networks
Offer blockchain-as-a-service platforms (e.g. IBM Blockchain Platform)
Enable easy provisioning of infrastructure for blockchain networks
Provide scalable and flexible resources for blockchain deployments
Together, these technologies enable:
Simplified deployment and management of blockchain networks
Improved scalability and resilience of blockchain applications
Consistent development and production environments
Easier integration of blockchain with existing cloud infrastructure
For example, a developer might use Docker to package a blockchain node, deploy it to a Kubernetes cluster running on AWS EKS, and use Helm charts to manage the deployment configuration. This approach allows for efficient development, testing, and production deployment of blockchain applications.`}],lb=[{title:"What are React Hooks?",type:4,content:"Hooks are a new addition in React 16.8. They let I use state and other React features without writing a class. With Hooks, I can extract stateful logic from a component so it can be tested independently and reused. Hooks allow I to reuse stateful logic without changing my component hierarchy. This makes it easy to share Hooks among many components or with the community."},{title:"What are advantages of using React Hooks?",type:4,content:`Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.
        Hooks don\u2019t work inside classes (because they let I use React without classes). By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, we will use built-in hooks like useEffect .`},{title:"How to call loading function with React useEffect only once?",type:4,content:"If I only want to run the function given to useEffect after the initial render, I can give it an empty array [] as the second argument."},{title:"How to access DOM elements in React?",type:4,content:`One of the useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:
        - Define the reference to access the element const elementRef = useRef();
        - Assign the reference to ref attribute of the element: <div ref={elementRef}></div>;
        - After mounting, elementRef.current points to the DOM element.`},{title:"How to use componentWillMount() in React Hooks?",type:4,content:`I cannot use any of the existing lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount etc.) in a hook. They can only be used in class components. And with Hooks I can only use in functional components.
        I can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
        - Code inside componentDidMount run once when the component is mounted. useEffect hook equivalent for this behaviour is.
        - Without the second parameter the useEffect hook will be called on every render (like componentDidUpdate) of the component which can be dangerous.
        - Hook equivalent of componentWillUnmount() code will be as follows`},{title:"Does React useState Hook update immediately?",type:4,content:`React useState and setState don\u2019t make changes directly to the state object; they create queues to optimize performance, which is why the changes don\u2019t update immediately. The process to update React state is asynchronous for performance reasons.
        To perform side effects after state has change, I must use the useEffect`},{title:"What does Batching mean in ReactJS?",type:4,content:"Batching is nothing but grouping React multiple state updates together into a single render state to achieve better computational performance. Until React 18, we only batched updates during the React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default."},{title:"What are the advantages of Batching in ReactJS?",type:4,content:`- Batching is great for performance because it avoids unnecessary re-renders.
        - Batching also prevents my component from rendering half-finished states where only one state variable was updated, which may cause bugs.
        - Another reason to use batching is when the web application grows, the number of nested components will increase. Therefore, if a parent component executes an unbatched state updated, the entire component tree will be re-rendered per state update that is expensive.`},{title:"Which lifecycle methods of class component is replaced by useEffect in functional component?",type:4,content:`The lifecyce methods replaced by useEffect Hooks of functional component are componentDidMount(), componentDidUpdate(), and componentWillUnmount()

        - componentDidMount: is equivalent for running an effect once.
        - componentDidUpdate: is equivalent for running effects when things change.
        - componentWillUnmount: To run a hook as the component is about to unmount, we just have to return a function from the useEffect Hook`},{title:"Compare React Context Api with useContext React hook",type:4,content:`When using the React Context API:
        - We need to wrap our content in a Consumer component and then pass a function as a child just so we could access (or consume) our state.
        - This introduces unnecessary component nesting and increases the complexity of our code.
        When using useContext Hook: \u201Cuse\u201D context without a Consumer:`},{title:"When would I use useContext hook?",type:4,content:"React\u2019s useContext hook makes it easy to pass data throughout my app without manually passing props down the tree. React Context is a way to manage state globally. Wrap child components in the Context Provider and supply the state value. Then I can access the user Context in all components:"},{title:"Is there any problem when using useContext Hook?",type:4,content:`The problem is that any component consuming state with useContext will re-render when any piece of the Context\u2019s state updates. This resulted in components that were totally divorced from one another causing each other to re-render.
        In cases where these re-renders were expensive, the memory in users\u2019 browsers accumulated JS Heap footprints in the orders of gigabytes.`},{title:"Compare useState and useReducer implementations",type:4,content:`- useState updates state with setState, while useReducer with dispatch function.
        - useState passes down all the setState custom helper functions, while useReducer passes down just the dispatch function.
        - useState needs to wrap functions in useCallback(if we want to memorize them), while dispatch function is already memorized.
        - useState easier to write, useReducer is harder to implement and needs more logic to be coded.`},{title:"Do React Hooks cover all use cases for class components?",type:4,content:`No, The following methods have not been introduced in Hooks yet:
        - getSnapshotBeforeUpdate
        - getDerivedStateFromError
        - componentDidCatch`},{title:"How can I make use of Error Boundaries in functional React components?",type:4,content:`As of v16.2.0, there's no way to turn a functional component into an error boundary. The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you\u2019ll want to declare an error boundary component once and use it throughout my application.

        Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to update and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        A few third party packages on npm implement error boundary hooks.`},{title:"What are differences between React.memo() and useMemo()?",type:4,content:`- React.memo() is a higher-order component (HOC) that we can use to wrap components that we do not want to re-render unless props within them change.
        - useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change`},{title:"What are common use cases for the useMemo?",type:4,content:`<> The primary purpose of useMemo hook is "performance optimization".
        - It returns a memoized value,
        - It accepts two arguments - create function (which should return a value to be memoized) and dependency array. It will recompute the memoized value only when one of the dependencies has changed.
        <> Using useMemo I achieve:
        referential equality of the values (to further send them to props of the components to potentially avoid re-renders)
        eliminate redoing of the computationally expensive operations for same parameters`},{title:"What are production use cases for the useRef?",type:4,content:`useRef simply returns a plain Javascript object. Its value can be accessed and modified (mutability) as many times as I need without worrying about rerender.
        useRef value will persist (won't be reset to the initialValue unlike an ordinary object defined in my function component; it persists because useRef gives I the same object instead of creating a new one on subsequent renders) for the component lifetime and across re-renders.
        useRef hook is often used to store values instead of DOM references. These values can either be a state that does not need to change too often or a state that should change as frequently as possible but should not trigger full re-rendering of the component.`},{title:"Explain the difference between useState and useRef hooks?",type:4,content:`- Updating a reference created by useRef doesn't trigger re-rendering, while updating the state (setState) makes the component re-render;
        - useRef returns an object with a current property holding the actual value. In contrast, useState returns an array with two elements.
        - useRef's current property is mutable, but useState's state variable is not.
        - The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).
        Using useRef - no re-renders.
        Using useState - triggers re-render`},{title:"When would you use useRef?",type:4,content:`To store a ref to DOM elements so I can later do something with them.
        To store values without triggering re-renders.`},{title:"When writing a Custom Hook, what is the difference between it and a normal function?",type:4,content:`Hooks use a stateful closure around the invocation of the function component to store the state on behalf of that component instance. That closure is maintained by React.
        - Custom hook will only be "stateful" if I use state with useState inside (or something that implements useState),
        - Hooks should be called from the React code only not from the regular JS functions. Hence, Hooks' scope is limited to the React code world and has more power to do a lot with React code,
        - In the class-based components, the Hooks won't work but regular functions will.
        - In the regular JS functions, I can't access useState, useEffect, useContext etc. but in react custom hooks I can.`},{title:"Do two components using the same Hook share state?",type:4,content:"No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time I use a custom Hook, all state and effects inside of it are fully isolated."},{title:"Do Hooks replace render props and higher-order components (HOC)?",type:4,content:`Often, render props and higher-order components render only a single child. React team thinks Hooks are a simpler way to serve this use case.
        There is still a place for both patterns (for example, a virtual scroller component might have a renderItem prop, or a visual container component might have its own DOM structure). But in most cases, Hooks will be sufficient and can help reduce nesting in my tree.`},{title:"What's the difference between useCallback and useMemo in practice?",type:4,content:`With useCallback I memoize functions, useMemo memoizes any computed value:
        (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time I invoke memoFn, that complex computation starts again.
        (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.`},{title:"How do I update state on a nested object with useState()?",type:4,content:"I can use spread syntax. Also while trying to update current state based on previous, use the callback pattern os setState"},{title:"Is there a React hook equivalent to componentDidCatch?",type:4,content:`There is not a React hook equivalent of componentDidCatch. However, the React team plans to add one soon.
        For functional components I can sometimes use try...catch to catch component errors. Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to updates and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        That approach has some limitations: when I use a hook like useEffect and I use some internal functions in it, I cannot put that internal function into try...catch(Error Boundary) block because I should define that function on top of useEffect hook (why?) and I shouldn't use useEffect conditionally (why?)!`},{title:"Are there any problems using useCallback?",type:4,content:"Since MyChild component is light and its re-rendering doesn't create performance issues, using useCallback here is not important. Using useCallback I also increased code complexity."},{title:"Explain the use of useLayoutEffect React Hook",type:4,content:`useLayoutEffect React Hook runs synchronously immediately after React has performed all DOM mutations. This can be useful if I need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating the state.
        As far as scheduling and lifecycle, this works the same way as componentDidMount and componentDidUpdate. my code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted).`},{title:"How would you store non-state/instance variables in functional React components?",type:4,content:`I can use useRef hook (it's the recommended way stated in docs). useRef returns an object whose reference would not change across re-renders, the actual value for foo is then kept in the current property of that object.
        - Declaring variable: const a = useRef(5) // 5 is initial value
        - getting the value: a.current
        - setting the value: a.current = my_value`},{title:"How can I force component to re-render with Hooks in React?",type:4,content:`This is possible with useState or useReducer, since useState uses useReducer internally:
        useCallback memoizes forceUpdate, so it stays constant during component lifespan and can be passed as a prop safely. updateState({}) updates the state with new object on each forceUpdate call, this results in a re-render. So yes, it forces an update when being called.
        forceUpdate isn't intended to be used under normal circumstances, only in testing or other outstanding cases. This situation may be addressed in a more conventional way.`},{title:"Can a custom React hook return JSX?",type:4,content:`While there is no hardcore restriction on how I should define custom hooks and what logic should contain, it's an anti-pattern to write hooks that return JSX.
        There are a few downsides to using hooks to return JSX
        When I write a hook that returns JSX component, I are essentially defining the component within the functional component, so on each and every re-render I will be creating a new instance of the component. This will lead to the component being unmounted and mounted again. This is bad for performance and also buggy if I have stateful login within the component as the state will get reset with every re-render of the parent
        By defining a JSX component within the hook, I are taking away the option of lazy loading my component if the need be.
        Any performance optimization to the component will require I to make use of useMemo which doesn't give I the flexibility of a custom comparator function like React.memo()
        The benefit on the other hand is that I have control over the state of the component in the parent. However, I can still implement the same logic by using a controlled component approach`},{title:"When would you want to avoid useEffect and use useLayoutEffect instead?",type:4,content:"If my effect is mutating the DOM (via a DOM node ref) and the DOM mutation will change the appearance of the DOM node between the time that it is rendered and my effect mutates it, then I don't want to use useEffect. You'll want to use useLayoutEffect. Otherwise, the user could see a flicker when my DOM mutations take effect. This is pretty much the only time I want to avoid useEffect and use useLayoutEffect instead."}],Uu=["Interview","Interview1","Chris_React","Chris_Java","React Hooks","JavaScript","Cosmos","React","Go Blockchain","C#"],cb=[{title:"openai chatgpt project ai",type:0,content:`One of the most impressive projects I worked on involved natural language processing (NLP) and machine learning (ML) to create a search site. The site utilized NLP to extract relevant files and responses from a large database based on user input in natural language. Similar to Google, this site was able to search through various types of data including news, scientific and technical information, and more. 

To process the data, Elasticsearch was used for its powerful querying capabilities. When a user entered a search term, an Elasticsearch query was generated using OpenAI's technology. The query was then pre-processed and passed on to the search engine.
I used node.js for the backend and React for the frontend.
Most of what I was responsible for in this project was frontend, REST api and admin dashboard.
As for a development on my side, I have used React, material UI, Tailwind CSS, Axios for the REST api, react-saga for redux.

Another interesting project I worked on was a chatbot that utilized ML. Two key features of this chatbot were its learning function and field selection. To train the chatbot, learning materials were manually prepared and the chatbot was trained for a week. During this time, the field was set as healthcare and appropriate information was selected and learned. As a result, customer service work was reduced by over 20%.

I gave importance to the code optimization, responsiveness and the render speed.
The most exciting thing was that I used some of react hook functions in this project such as useMemo, useCallback so that I can reduce unnecessary rendering into components.
As a result, my customers gave me good feedbacks and reviews.
        `},{title:"What are you looking for in a new role?",type:0,content:`I'm looking for a role that pushes me to grow as a React developer. 
        I want to work on cutting-edge projects that make a real difference. 
        Being part of a collaborative team where we can bounce ideas off each other is important to me. 
        I'm excited about opportunities to mentor others and possibly step into leadership down the line. 
        Ultimately, I want a position where I can bring my A-game every day and help drive the company forward.`},{title:"Why are you interested in this job?",type:0,content:`Franklly Speaking, before applying for this role with your company, I spent time reading the job descriptions and the person specifications.
        I wanted to make sure I was both properly qualified for the roles, and that I also had the appropriate experiences and skills to help drive the companys forward.
        I sincerly want to work for this role because it's just the role that I am extremely passionate about and also one I get immense job satisfaction from, especially when I get to see first-hand
        the positive contribution my work makes to the organization I am working for.
        If I become a member of your company, then I will not only work hard to deliver consistent positive results, but I will also use my developing, researching, analytical and technical
        skills to help the company continually thrive and develop.
        `},{title:"What motivates you to work at this company? or Why do you want to work for our company?",type:0,content:`For me the company I work for is very important, I believe that, to be able to perform your duties and responsabilities as a member, you need the supoort of your employer,
        and you also need to work with like-minded people who are all working towards a common goal.
        During my research into your organization , it soon became apparent that you are not only a leader within the industry, buy you also continually look for ways to grow and develop.
        You also cleary hire some of the best people available, and this means I will be working with other professionals who all genuinely care about the work they produce.
        I am someone who is ambitious, I don't like to sit back and just do the bare minimum and it u hire me, I feel confident you will be impressed with my work values, ethics and high standards.
        `},{title:"What motivates you to apply for this particular role? ",type:0,content:`When I was a sophomore, I really loved art and design. So I wanted to get a job for both art and science. That is the frontend postion, I think.
        I am happy that my creations come into direct contact with people, and I feel the greatest pride when I receive the best feedback from them. I am also motivated by working as part of a team to complete tasks and projects.
        I gain a great sense of job satisfaction when I know I have contributed to a team's goals or objectives.`},{title:"what are your strengths?",type:0,content:`My greatest strength is my ability to adapt and learn quickly in the ever-changing world of web development. 
        I have a knack for understanding complex systems and breaking them down into manageable parts. 
        I'm excellent at collaborating with others, whether it's brainstorming ideas or solving tricky problems together. 
        My attention to detail ensures that I deliver high-quality work, from clean code to smooth user experiences. 
        I have a strong drive for continuous improvement, always looking for ways to enhance my skills and stay ahead of industry trends.
        And I think these can be counted my greatest strengths if you ask me.`},{title:"what are your weaknesses?",type:0,content:`My greatest weakness is that I sometimes spend too much time perfecting details. 
        I want everything to be just right, which can slow me down. 
        However, I've been working on balancing quality with efficiency by setting clear priorities.
        I've also started using time management tools to stay on track. This way, I can still deliver high-quality work without getting bogged down in the details.`},{title:"What are you career goals over the next 3-5 years?",type:0,content:`In the next 3-5 years, I want to grow in my career and take on more responsibilities. 
        I hope to learn new skills that will help me become better at my job. I aim to work on exciting projects that challenge me and allow me to be creative. 
        Building strong relationships with my colleagues and mentors is also important to me.
         I would like to move into a leadership role where I can help guide and support others or maybe like mentoring junior developers. 
         Overall, 
        I want to make a positive impact in my field and continue to develop both personally and professionally. 
        I\u2019m excited about the future and the opportunities it holds.`},{title:"What did you like most about your last position?",type:0,content:`What I liked most about my last job was the team I worked with. We had a great group of people who supported each other and worked well together. I also enjoyed the projects I was involved in because they were interesting and allowed me to be creative. I appreciated the chance to learn new skills and grow in my role. The company had a positive atmosphere, which made coming to work enjoyable. 
        I felt valued for my contributions, and that motivated me to do my best. Overall, it was a rewarding experience that I will always remember fondly`},{title:"WHAT DID YOU LIKE LEAST ABOUT YOUR LAST POSITION?",type:0,content:`"In my last job, I really enjoyed my work and my team, but one thing I liked least was the lack of new challenges. I found that some tasks were quite repetitive, which made it hard to stay excited sometimes. I believe that learning and growing is really important for me. So, I was hoping for more opportunities to take on different projects. I think having variety in my work helps me stay motivated and engaged. Overall, 
        I\u2019m looking for a position where I can learn new skills and face fresh challenges. I\u2019m excited about the possibility of doing that in this new role!"`},{title:"Can u tell me about the difficult work situation and how you overcame it? or Tell me a time when u worked as part of a team to solve a complex task?",type:0,content:` Situation : I was part of a multi-agency project building a software application for an important client. Towards the end of the project, We encountered a number of bugs and problems with 
        the software application, and time was against us to get everything fixed before the offical handover date.
        Task : I felt it was my responsibility to come up with a solution to get the issues fixed. I stayed behind late that evening collaborating with other experienced team
        members to come up with a plan that would ensure the bugs were not only full rectified, but that a support system was in place to respond to any future issues if they were to arise, post handover.
        Action : We started off by creating a list of all bugs and issues. We then attempted to recreate each bug so that we could assess what was causing the issue.
        We managed to recreate all of the bugs and it was then my task to create a timescale for rectifying and testing each issue.
        Once we had a plan in place, we could then allocate tasks to team members based on their area of technical competence the follwing morning.
        Result : By creating a plan of action, and by working closely together as a team, we were able to tap into the combined team expertise and competence to not only 
        provide a time-sensitive solution to the problem, but to also implement a support mechanism for our client.`},{title:"How do you respond to stress and change?",type:0,content:`I think as a software developer, you have to realize that stress and pressure is all part of the role. And in actual fact, I feel I tend to perform better when I am up against it
        and there is a definitive timeframe to work towards.
        I manage stress in three ways. First and foremost, I ensure I plan my work well in advance, so I know what I need to do ,and by waht deadline.
        By having a plan in place, it means I work more efficiently and I can decide which tasks need my attention first.
        The second way I handle stress and pressure, is to make sure I work closely with other memebers of the team and that communication is a constant theme throughout the day.
        Finally I handle stress and pressure by making sure I dedicate some time each week to keeping up-to-date with developments from within the industry.
        This gives me the confidence in my role as a software developer and it also eliminates any unwelcome surprises when updates do come out or changes within the industry are released.`},{title:"How do u handle conflict at work? or How would you deal with a memeber of your team who disaggreed with the work you carried out your role?",type:0,content:`I have a lot of experience as a Software develoer and I feel the work I produce is to a very high standard.
        Having said that I am also aware that when I do work as part of  a team. it's important to listen to other people as they may have valid contributions to make.
        On that basis, I would certainly be open to listening to why they felt the work I was carrying out could be altered or improved.
        At the end of the day, we are all working for the same organization, and if it means changing the way I do things for the benefit of the team goal. I will certainly do that.`},{title:"What is your greatest accomplishment?",type:0,content:`My greatest accomplishment was developing Project ISLA, a healthcare system that made a significant impact. 
        I created a versatile search tool that helps people find hospital information and analytics for over 3,000 hospitals nationwide. 
        Using React, Django, and Elasticsearch, I built a user-friendly platform that includes features like hospital mapping and detailed statistics. 
        I'm particularly proud of optimizing the site's performance using advanced React techniques, which resulted in faster loading times and a smoother user experience. 
        The project was a huge success, earning great feedback from customers and potentially saving the healthcare system up to 500,000 dollars by improving efficiency and access to information.
         This experience taught me the value of combining technical skills with real-world problem-solving to create meaningful solutions in healthcare`},{title:"DO YOU CONSIDER YOURSELF SUCCESSFUL?",type:0,content:`Yes, I do consider myself successful. I believe success is about setting goals and working hard to achieve them. In my career, 
        I've been able to accomplish many things I'm proud of. I've learned new skills, taken on challenging projects, and grown as a professional. 
        Success for me also means having good relationships with my colleagues and making a positive impact in my work. 
        I know there's always room to grow and improve, which keeps me motivated. 
        Overall, I feel successful because I'm constantly learning and moving forward in my career and personal life.`},{title:"Why are you good fit for this position? or How do your skills align with this role? or why should we hire you?",type:0,content:`I believe I'm a great fit for this React frontend position because of my deep expertise and passion for React development.
         I've worked on complex projects where I've implemented advanced React concepts like hooks, context API, and custom optimizations.
          My experience with state management tools like Redux and performance optimization techniques ensures I can build efficient and scalable applications. 
          I stay up-to-date with the latest React trends and best practices, which allows me to bring innovative solutions to the table. 
          I'm also skilled in collaborating with backend teams to create seamless integrations. 
        I'm excited about the opportunity to contribute my React knowledge and problem-solving skills to your team. Overall, my technical proficiency, coupled with my enthusiasm for creating top-notch user experiences, makes me an ideal candidate for this role.`},{title:"How do u define success?",type:0,content:`I define success as reaching my goals and doing my best in everything I take on. 
        For me, it\u2019s about making progress and learning new things along the way. Success also means having good relationships with my colleagues and working well as a team. 
        I feel successful when I can help others and make a positive impact in my job. Meeting deadlines and delivering quality work that people appreciate is important to me, too. 
        I believe that success is not just about personal achievements but also about contributing to a bigger picture.
         Overall, success is about growth, happiness, and making a difference.`},{title:"What is your salary expectation?",type:0,content:`I have conducted some research prior to attending the interview on what I feel would be a fair salary for this position.
        The average salary for a software engineer in this industry is $90 000 to $110, 000.
        Whilst I do feel I am worth the higher salary brand, I understand you don't know me, and I need to prove to you my worth.
        On the basis, I would feel comfortable with a salary of $102, 000 and I feel you will see a positive return on your investiment at this level if you hire me.`},{title:"What are you passionate about?",type:0,content:`I am passionate about creating great user experiences through technology. I love building websites and applications that are not only functional 
        but also enjoyable to use. Learning new programming languages and tools excites me because it helps me improve my skills. I also enjoy solving problems and
         finding creative solutions to challenges. 
        I believe that technology can make a positive impact on people's lives, and I want to be part of that. 
        Overall, my passion lies in using my skills to make the digital world better for everyone.`},{title:"How do you work under pressure?",type:0,content:`I handle pressure by staying calm and focused. When things get busy, I take a moment to prioritize my tasks and figure out what needs to be done first. I find it helpful to break big projects into smaller steps, so they feel more manageable. I also make sure to communicate with my team, so we can support each other. Taking short breaks helps me recharge and stay productive.
         I believe that pressure can actually help me perform better and think more creatively. Overall, I see working under pressure as an opportunity to grow and show what I can do.`},{title:"What is your dream job?",type:0,content:`My dream job is one where I can push the boundaries of what's possible with React.
         I'd love to work on innovative projects that challenge me to use advanced React concepts and cutting-edge technologies. Ideally, I'd be part of a team that values continuous learning and encourages sharing knowledge.
          I dream of a role where I can contribute to open-source projects and help shape the future of frontend development. 
          Working in an environment that promotes work-life balance and supports professional growth is also important to me. 
          I'd be thrilled to have opportunities to mentor junior developers and help them grow in their careers. 
        Ultimately, my dream job is one where I can make a significant impact through my React expertise while constantly evolving as a developer.`},{title:"Tell me about a joke, humor.",type:0,content:`John had been undergoing tests for a serious health concern for several weeks. Finally it was the day for him to receive his test results.

        So he was sitting in his doctor\u2019s office and he said, \u201CDoc, I really need to know my test results! Not knowing is driving me crazy.\u201C
        His doctor reviewed at his notes again and then said, \u201CWell John, there\u2019s some good news and some bad news I\u2019m afraid. Which one do you want first?\u201D
        
        To which John replied, \u201CI think I\u2019d prefer the good news first. Yeah Doc, let me have the good news first!\u201D
        
        \u201CWell,\u201D said the doctor, \u201CI hear there are some amazing deals on cremations this week.\u201C`},{title:"DO YOU HAVE ANY QUESTIONS?",type:0,content:`-	What is the job description?
                -	How quickly are you looking to fill the position?
                -	Why have other candidates been passed up?
                -	What are the most important skills for the job?
                -	Do you have any concerns about my candidacy?
                -	How many people are on the team I\u2019d be part of?
                -	Are you the only recruiter working for this company?`},{title:"ARE YOU FEELING COMFORTABLE FOR WORKING WITH A BIG TEAM?",type:0,content:`Yes, I feel very comfortable working with a big team.
         I enjoy collaborating with others and believe that teamwork leads to better results. 
         In my past projects, I've worked closely with designers, backend developers, and other frontend developers. 
         I find that sharing ideas and feedback helps us create more innovative solutions.
          I\u2019m good at communicating and making sure everyone is on the same page. 
          I also appreciate the diverse perspectives that a big team brings. 
          Overall, I thrive in a team environment and look forward to contributing my React skills to a larger group.`},{title:"What motivates you?",type:0,content:`What really gets me fired up is solving complex problems with elegant code.
        I love the feeling of cracking a tough challenge and seeing a smooth, user-friendly interface come to life. 
        Working with a team of talented developers and learning new things every day keeps me on my toes. 
        I'm also motivated by the impact our work has on users - knowing that we're making their lives easier or more enjoyable. 
        Ultimately, the constant evolution in tech, especially in React, drives me to keep pushing my skills to the next level.`},{title:"What do you feel about the Los Angeles?",type:0,content:`It\u2019s amazing how many cultures can call Los Angeles home. As I drive through the city I can\u2019t help but see signs 
        the numerous areas of LA that make it so special; Chinatown, Silver Lake, The Arts District.
        Here brings people of all colors, cultures, and creeds together like nowhere else!
        People are so nice and the weather is just perfect all year round - always-sunny weather. I would like to live here for the rest of my life.`},{title:"How do you handle stress, pressure, and anxiety?",type:0,content:`When I get stressed, I open the window and look over the sky.
        And listen.
        Let me tell you something my father told me. Look at the stars. The great kings of the past look down on us from those stars.
        So whenever you feel alone, just remember that those kings will always be there to guide you... and so will I.
        His voice makes me encourage and I can overcome all the obstacles on those power.
        I think he watches everything I do.
        Each time, I manage to refine myself and overcome the difficult hurdles.
        My mental strength comes from my father. No pressure, No diamonds.`},{title:"How did you work before?",type:0,content:`At my previous company, I\u2019ve learned a lot about how to make the most of a project and how to work closely with different team members.
        I\u2019ve been proud of how each member was able to feel confident enough to make suggestions on ways to ensure the success of the project. In my role, I was responsible for directing a team of five and pulling together strategies and plans to develop the websites and maximize the efforts of the company.
        In one year, we made more than $200M in revenue, and I consider this to be the greatest achievement of my career.
        I am known for coming in early and staying late to finish important tasks and achieve results.
        I guess working for 10 hours a day for three hundred days did that to me.
        I always meet deadlines and help my teammates to meet theirs as well.
        In a word, I have enjoyed my work and found great successes in interpersonal and engineering skill.`},{title:"Talk about the last time when you learned a lot.",type:0,content:`I believe there is no end to learning.
        I think people learn as much as they know. Being content with myself and thinking I have nothing more to learn is probably the biggest failure of my life.
        The time I learned a lot was when I worked as a senior engineer at my previous company.
        From a technical point of view, I learned about clouding technology such as AWS, Microsoft Azure, data management like Elastic Search, and analysis methods.
        Personally, I have learned the art of raising many colleagues according to their positions and leading the business to success with their initiative and awareness.
        The wisest mind has something yet to learn.`},{title:"Do you have experience in DevOps?",type:0,content:`These include stronger ability to support operations, faster bug fixes, increased agility as a business, individual team agility increases, better collaboration and skill improvement. This is from googling.
        Personally, I think it's a crucial skill for a software engineer. I have used the DevOps tools such as Jenkins, Docker, Jira, AWS, CI/CD , git and agile methodology for project management.
        Stage 1: Idea & requirement collection.
        Stage 2: Development from the frontend to the backend
        Stage 3: Testing.
        Stage 4: Deployment on AWS or other.
        Stage 5: Operations.
        I think this is a higher level development area that increases the speed and quality of development and guarantees the life cycle of the project.`},{title:"What do you know about this company?",type:0,content:""},{title:"Tell me about a conflict you\u2019ve faced at work and how you dealt with it.",type:0,content:`In my previous job as a senior engineer, I performed tasks for two different managers. I found myself in a situation where both managers were demanding a lot of my time and resources and I was forced to say 'no' to some of their tasks or else I\u2019d fall severely behind on the higher-priority tasks.

        At first, one of my managers was visibly upset. I quickly realized that I hadn\u2019t done a good enough job of explaining the situation. I quickly asked to meet one-on-one and told the manager why I didn\u2019t have as much time available as he thought. He immediately understood and I was able to avoid a bigger conflict.
        
        It turned out that neither manager realized how busy I was. They ended up speaking with each other and coming up with a plan that would lighten my workload so that I could continue to perform the most important tasks for both of them.`},{title:"Give me an example of how you have worked on teams. What role did you play?",type:0,content:`In my last job, I was frequently required to interact with many different groups in the company like finance, accounting, sales, customer service, and more. 
        I\u2019ve also worked on projects with five other colleagues in my own group.

        In those cases, I played the role of a specialist because I\u2019m the only team member who is familiar with AWS and full stack development. 
        So I provided expert insight into that area, and they handled the other areas.
        
        My understanding, based on reading the job description for this position, is that you need that same skill set in your group right now. Is that correct? And can you talk about what the scope of the project is.`},{title:"Tell me about your last company.",type:0,content:`loanDepot:
        loanDepot was established in 2010 and has hired for full-time, 100% remote jobs.
         The company is the nation\u2019s second-largest nonbank consumer lender and the first nonbank lender to provide home, personal, and home equity loans.
        They provide technical design, estimation and implementation for user stories, take part in agile ceremonies, and provide technical design leadership on user stories. And I was responsible for the full stack development there and it's a good place to work.
        I love my company and love my work, so will I do for your company.
        
        Enplug:
        They've been focused on building the simplest, most stable digital signage technology on the market.
        Customer service is quick and very helpful, online service is very good.
        They were recruiting many engineers and I found that allowing customers to schedule calls directly on their support team's calendar improved 3 times as many people per day compared to direct phone support.
        At that time I have developed those platforms with my team and gave good feedbacks from the customers.
        It was a great place to work too.`},{title:"What did you learn from the freelancing?",type:0,content:`After 10 years of working full-time, suddenly freelancing didn't make sense at the very first time.
        Considering that there are some people with low skills among freelancers, I was a bit reluctant at first.
        However, in the process of working, there was a lot to learn from it.
        For example, I learned how to have a relationship with customers, what freelancers feel like, and to do lancing, you need to have knowledge in wide technical fields rather than a specific major.
        This is also very interesting, but I have made up my mind that if I want to do something big that I can contribute not only for myself but also for society, I have to work for a full-time job like yours.
        Even if it's not a career that I'm proud of, I think it's an experience of going through hardships that must have as an engineer.
        `},{title:"What are your main skills?",type:0,content:`I specialize in Web and Decentralized applications, and in addition to front-end development, I am interested in Web Design, back-end development and GraphQL.
        My great performances are in TypeScript, JavaScript and its libraries and such as Angular, React, Redux, Web3.js, etc.
        I also have strong knowledge in Data Structure & Algorithm, which always helps me build robust and high-performance applications.
        ---------
        As for the egineering skills, I have an expertise in AWS, Agile methodology, CI/CD, Jira, GraphQL, Microsoft Azure, serverless technology . In a word, DevOps.
        So I have a knowledge of Java, Javascript, PHP for the server-side languages apart from frontend.
        Also interpersonal skills + communictation skills I would have more professionally later.
        Furthermore, I will be very fit for this position with:
        1. Passion
        2. Problem-solving skills
        3. Confidence
        4. Results-driven`},{title:"What is your mistake you made?",type:0,content:`This question is a bit difficult for me, because I have to expose my flaws.
        But I am honest with myself. I attach great importance to the work itself.
        I worked tirelessly to find myself in work and devoted a lot of time to it.
        As a result, I didn't have a life for my family, and I didn't feel warm love.
        I couldn't even keep my father's last appearance by his side.
        I'm 31 now and it's time to start a family, but I'm still a single.
        But without those devotion that lost such values, there would never be today's myself.
        That is the biggest mistake I made and also the biggest thing I am proud of.`},{title:"What is your work style?",type:0,content:`I can do my best in a strong cooperative environment out of company members, and I can strive to achieve great goals while helping and learning from each other.
        I like a quiet environment when I work, but I really like to discuss new technologies and company roadmaps frequently.
        To point out my work style:
        passionate
        Result-drvien
        high-energy
        motivation.
        `},{title:"What is your management experience?",type:0,content:`When I work in a group, I am motivated - even more motivated. In my experience, one person may spark my thoughts and encourage me to come up with a brand-new creative thinking or concept.
        And when I was working as a team leader, I used to let the members do the same project in cooperation rather than different projects in separation.
       It was good to bring members closer to each other and more motivational to pursue one goal.`},{title:"Why don't you speak English fluently?",type:0,content:""},{title:"What is your personality?",type:0,content:"Team player, confident, Ambitious and friendly are three words I'd pick to describe myself."},{title:"Do you relocate?",type:0,content:"Due to the pandmic and a current family obligation, I am not able to relocate at this time. However, I have experience working remotely and could be available to travel frequently to your other offices if these were viable options."},{title:"Why shouldn't we hire you?",type:0,content:"If you're looking for someone to lead marketing, then I'm probably not the right fit for this position. I'm better suited to being an active participant in meetings than to lead marketing. But where I really shine is execution\u2014so often, a meeting generates a lot of great ideas, but then none of them are completed. One of my strengths is following up on meeting tasks and completing projects in general."},{title:"What is your most important quality that makes you successful in your career?",type:0,content:`1. Passion
        2. Curious mind distinct from others
        3. Problem-solving skills
        4. Influencing Skills and high tech skills
        5. Courage & Confidence
        6. Results-driven`},{title:"Are you feeling comfortable for working with a big team? ",type:0,content:`I have a strong team spirit. Whether the company is big or small, it all looks like one thing to me. A team.
        I've been used to working in a team and working in cooperation for over 10 years, so I felt really lonely while lancing alone for the past 3 months.
        If I work in a team environment, I can make a great contribution to the company and play an active role in promoting cooperation among team members.`},{title:"Why should we hire you? ",type:0,content:`Two years ago I had a misfortune.
        I couldn't even keep the last apperance of my beloved father by his side.
        So I wanted to work for people's health care with my skills.
        This pain is enough for me alone, and I don't want many more people in the world to suffer this kind of sadness.
        Luckily, finding a job, I found out that your company is working as a primary mission to help people live healthier lives! Perfect same to my goal.
        Your company is looking for a frontend developer who is both strong in interpersonal skills and tech skills in medical services. I believe my experience aligns with your company\u2019s requirements and makes me a great fit.
        I'm an effective developer who is skilled in modern frontend technologies especially React, having an eye on design. I'm also fluent in several relevant programming, including backend and blockchain technologies. I'd love to bring my diverse skill set to your company.`},{title:"What additional skills and experiences do you think will help you in this role?",type:0,content:`Apart from the JS, TS, React, I specialized in decentralized applications, GraphQL, Microsoft Azure, serverless technology and AWS.
        I have developed micro services for the hotel booking system at the last company.
        Furthermore, I will be very fit for this position with:
        1. Passion
        2. Curious mind distinct from others
        3. Problem-solving skills
        4. Influencing Skills and high tech skills
        5. Courage & Confidence
        6. Results-driven`},{title:"What are you usually doing when you are free? ",type:0,content:"Because I sit at a computer all day and work, my health is a major concern. I visit the gym three times a week to take care of my health. I particularly enjoy basketball and swimming. Exercise helps me maintain a positive mindset, it reduces stress, and it increases concentration levels. I also enjoy spending time with my friends, family. It is usually a great talk because it taught me the skill of taking ownership of difficult challenges in my life, and how to achieve my goals."},{title:"Is there anything that makes you different from other candidates? ",type:0,content:`I don't want to underestimate the other candidates.
        As for me, I have a good nature for new things.
        Even if I have very good programming skills now, I still want to learn new skills.
        Moreover, frontend technology has a fast renewal cycle, so even a little carelessness can leave me a behindhand developer. so I hope to stay ahead of the trend in terms of technology.
        The other thing, I have the confidence and passion to solve any difficult problem.
        Everything is a product of hard work and belief in myself. That's the thing.
        I am also quick to get used to new environment and love my work and my company.
        It is not our abilities that show what we truly are\u2026 it is our choices.
        `},{title:"Tell me about a time when you were not satisfied with your performance.",type:0,content:`I'm not satisfied with my performance every time.
        Satisfaction with oneself is human happiness, but for some reason, even if the client is satisfied, I am not. That's why I'm trying to do something more, but at that time, I get advice from my teammates saying that this is all it takes.`},{title:"Tell me about a time when you experienced difficulty at work while working on a project.",type:0,content:`There was an argument while working alone with a customer 3 years ago.
        It was a project to build a website using React, and I had signed a contract and started working.
        The design sent by the customer was completed and sent in 2 days, but the feedback came that it needed to be fully changed because the design was not to his liking.
        Cause of that, the project could be delayed by 3 days.
        I replied that this problem was not included at the time of the contract and that I didn't like to increase the amount of work in this way.
        He said that I was right, and then let's go ahead as planned.
        Then, even though I had achieved my goal, I was not happy at all.
        So I apologized to the customer and updated the site with a new design I made, and the project was guaranteed in time. He expressed great satisfaction.
        I think I forgot for a while that the customer was my god at that time.
        Since then, when working with customers, I do a lot of research and raise enough possible problems so that customers don't miss anything.
        And I always go above and beyond for my clients.`},{title:"united health group uhg",type:0,content:"UnitedHealth Group is a health and well-being company offering health care coverage and benefits through UnitedHealthcare, and technology and data-enabled care delivery through Optum. Optum plays an important role in the implementation of guidance and tools they need to achieve better health. The main duty of Optum is to support UHG with its technology."},{title:"Describe a time you dealt with a difficult colleague and how did you resolve it?",type:0,content:`Among my co-workers, there was a person who worked without self-confidence. He kept asking if there was anything he didn't know, but most of them were problems he could have solved on his own.
        Cause of that, I used to be interrupted even though I was concentrating on my work, it sometimes got in the way.
        I thought I should grow confidence in him.
        So I organized him to take the leadership position for a week. I decided to work under his guidance.
        Everyone didn't know why at first. But surprisingly, it was noticeably announced that he was trying to do something differently day in day out.
        It seemed that his presence was highlighted by the sense of responsibility that he held onto not only himself but also the fate of the team.
        From then on he developed the ability to do all the business on his own.
        A week later I told another him that if you dream it, you can do it.
        Life's not about expecting, hoping and wishing, it's about doing, being and becoming.`},{title:"Do you consider yourself successful?",type:0,content:`Yes I do.
        Originally, I used to think that if I made a lot of worth, I was successful.
        But after misfortune happened two years ago, I realized that wealth isn't everything to success.
        Success is not what I acknowledge, but what others evaluate.
        Right away, I consider success when I dedicate myself for others.
        That is accomplishing the goal of helping myself and others lead a better, happier, healthier life.
        Today\u2019s interview is the prelude to success.`},{title:"Are you willing to work overtime? Nights? Weekends?",type:0,content:`Yes, I am.
        If I face to the urgent task due in a limited time, I will surely work overtime.
        If I find something happy in my work, I won't be tired, I'm even happier.`},{title:"What is difficult for you to answer in the interview? ",type:0,content:""},{title:"What do you like most while working at the company? ",type:0,content:""}],ub=[{title:"What are the possible ways to create objects in JavaScript",type:5,content:`
   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

      ---javascript
      var object = new Object();
      ---

   2. **Object's create method:**

      The create method of Object creates a new object by passing the prototype object as a parameter

      ---javascript
      var object = Object.create(null);
      ---

   3. **Object literal syntax:**

      The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

      ---javascript
      var object = {
           name: "Sudheer",
           age: 34
      };

      Object literal property values can be of any data type, including array, function, and nested object.
      ---

      **Note:** This is an easiest way to create an object

   4. **Function constructor:**

      Create any function and apply the new operator to create object instances,

      ---javascript
      function Person(name) {
        this.name = name;
        this.age = 21;
      }
      var object = new Person("Sudheer");
      ---

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ---javascript
      function Person() {}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ---

      This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

      ---javascript
      function func() {};

      new func(x, y, z);
      ---

      **(OR)**

      ---javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ---

   6. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects

      ---javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      var object = new Person("Sudheer");
      ---

   7. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

      ---javascript
      var object = new (function () {
        this.name = "Sudheer";
      })();
      ---

      `},{title:"What is a prototype chain",type:5,content:`
   **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

   The prototype on object instance is available through **Object.getPrototypeOf(object)** or ****proto**** property whereas prototype on constructors function is available through **Object.prototype**.

   ![Screenshot](images/prototype_chain.png)

   `},{title:"What is the difference between Call, Apply and Bind",type:5,content:`
   The difference between Call, Apply and Bind can be explained with below examples,

   **Call:** The call() method invokes a function with a given \`this\` value and arguments provided one by one

   ---javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
   invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ---

   **Apply:** Invokes the function with a given \`this\` value and allows you to pass in arguments as an array

   ---javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
   invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
   ---

   **bind:** returns a new function, allowing you to pass any number of arguments

   ---javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   var inviteEmployee1 = invite.bind(employee1);
   var inviteEmployee2 = invite.bind(employee2);
   inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
   inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ---

   Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it\u2019s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**.

   Whereas Bind creates a new function that will have \`this\` set to the first parameter passed to bind().

   `},{title:"What is JSON and its common operations",type:5,content:`
   **JSON** is a text-based data format following JavaScript object syntax, which was popularized by \`Douglas Crockford\`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

   **Parsing:** Converting a string to a native object

   ---javascript
   JSON.parse(text);
   ---

   **Stringification:** converting a native object to a string so it can be transmitted across the network

   ---javascript
   JSON.stringify(object);
   ---

   `},{title:"What is the purpose of the array slice method",type:5,content:`
   The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

   Some of the examples of this method are,

   ---javascript
   let arrayIntegers = [1, 2, 3, 4, 5];
   let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
   let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
   let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
   ---

   **Note:** Slice method won't mutate the original array but it returns the subset as a new array.

   `},{title:"What is the purpose of the array splice method",type:5,content:`
   The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

   Some of the examples of this method are,

   ---javascript
   let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
   let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
   let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

   let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
   let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
   let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
   ---

   **Note:** Splice method modifies the original array and returns the deleted array.

   `},{title:"What is the difference between slice and splice",type:5,content:`
   Some of the major difference in a tabular form

   | Slice                                        | Splice                                          |
   | -------------------------------------------- | ----------------------------------------------- |
   | Doesn't modify the original array(immutable) | Modifies the original array(mutable)            |
   | Returns the subset of original array         | Returns the deleted elements as array           |
   | Used to pick the elements from array         | Used to insert or delete elements to/from array |

   `},{title:"How do you compare Object and Map",type:5,content:`
   **Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

   1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
   2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
   3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
   4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
   5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
   6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

   `},{title:"What is the difference between == and === operators",type:5,content:`
   JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

   1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
   2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value.
      There are two special cases in this,
      1. NaN is not equal to anything, including NaN.
      2. Positive and negative zeros are equal to one another.
   3. Two Boolean operands are strictly equal if both are true or both are false.
   4. Two objects are strictly equal if they refer to the same Object.
   5. Null and Undefined types are not equal with ===, but equal with ==. i.e,
      null===undefined --> false but null==undefined --> true

   Some of the example which covers the above cases,

   ---javascript
   0 == false   // true
   0 === false  // false
   1 == "1"     // true
   1 === "1"    // false
   null == undefined // true
   null === undefined // false
   '0' == false // true
   '0' === false // false
   []==[] or []===[] //false, refer different objects in memory
   {}=={} or {}==={} //false, refer different objects in memory
   ---

   `},{title:"What are lambda or arrow functions",type:5,content:`
    An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors.

    `},{title:"What is a first class function",type:5,content:`
    In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

    For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

    ---javascript
    const handler = () => console.log("This is a click handler function");
    document.addEventListener("click", handler);
    ---

    `},{title:"What is a first order function",type:5,content:`
    First-order function is a function that doesn\u2019t accept another function as an argument and doesn\u2019t return a function as its return value.

    ---javascript
    const firstOrder = () => console.log("I am a first order function!");
    ---

    `},{title:"What is a higher order function",type:5,content:`
    Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

    ---javascript
    const firstOrderFunc = () =>
      console.log("Hello, I am a First order function");
    const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
    higherOrder(firstOrderFunc);
    ---

    `},{title:"What is a unary function",type:5,content:`
    Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.

    Let us take an example of unary function,

    ---javascript
    const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value
    ---

    `},{title:"What is the currying function",type:5,content:`
    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, a n-ary function turns it into a unary function.

    Let's take an example of n-ary function and how it turns into a currying function,

    ---javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1, 2, 3)); // 6

    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction(1)(2); // returns a function: c => 3 + c
    curryUnaryFunction(1)(2)(3); // returns the number 6
    ---

    Curried functions are great to improve **code reusability** and **functional composition**.

    `},{title:"What is a pure function",type:5,content:`
    A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

    Let's take an example to see the difference between pure and impure functions,

    ---javascript
    //Impure
    let numberArray = [];
    const impureAddNumber = (number) => numberArray.push(number);
    //Pure
    const pureAddNumber = (number) => (argNumberArray) =>
      argNumberArray.concat([number]);

    //Display the results
    console.log(impureAddNumber(6)); // returns 1
    console.log(numberArray); // returns [6]
    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
    console.log(numberArray); // returns [6]
    ---

    As per the above code snippets, the **Push** function is impure itself by altering the array and returning a push number index independent of the parameter value. . Whereas **Concat** on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.

    Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with **Immutability** concept of ES6 by giving preference to **const** over **let** usage.

    `},{title:"What is the purpose of the let keyword",type:5,content:`
    The \`let\` statement declares a **block scope local variable**. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the \`var\` keyword used to define a variable globally, or locally to an entire function regardless of block scope.

    Let's take an example to demonstrate the usage,

    ---javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
    ---

    `},{title:"What is the difference between let and var",type:5,content:`
    You can list out the differences in a tabular format

    | var                                                   | let                         |
    | ----------------------------------------------------- | --------------------------- |
    | It is been available from the beginning of JavaScript | Introduced as part of ES6   |
    | It has function scope                                 | It has block scope          |
    | Variables will be hoisted                             | Hoisted but not initialized |

    Let's take an example to see the difference,

    ---javascript
    function userDetails(username) {
      if (username) {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 30;
        var salary = 10000;
      }
      console.log(salary); //10000 (accessible to due function scope)
      console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails("John");
    ---

    `},{title:"What is the reason to choose the name let as a keyword",type:5,content:"\n    `let` is a mathematical statement that was adopted by early programming languages like **Scheme** and **Basic**. It has been borrowed from dozens of other languages that use `let` already as a traditional keyword as close to `var` as possible.\n\n    "},{title:"How do you redeclare variables in switch block without an error",type:5,content:`
    If you try to redeclare variables in a \`switch block\` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,

    ---javascript
    let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ---

    To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

    ---javascript
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        break;
      }
      case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
      }
    }
    ---

    `},{title:"What is the Temporal Dead Zone",type:5,content:`
    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a \`let\` or \`const\` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable\u2019s binding and its declaration, is called the temporal dead zone.

    Let's see this behavior with an example,

    ---javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    ---

    `},{title:"What is IIFE(Immediately Invoked Function Expression)",type:5,content:`
    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ---javascript
    (function () {
      // logic here
    })();
    ---

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

    ---javascript
    (function () {
      var message = "IIFE";
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    ---

    `},{title:"How do you decode or encode a URL in JavaScript?",type:5,content:`
    \`encodeURI()\` function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string.
    \`decodeURI()\` function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

    **Note:** If you want to encode characters such as \`/ ? : @ & = + $ #\` then you need to use \`encodeURIComponent()\`.

    ---javascript
    let uri = "employeeDetails?name=john&occupation=manager";
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);
    ---

    `},{type:5,title:"What is memoization",content:`

        Memoization is a programming technique which attempts to increase a function\u2019s performance by caching its previously computed results.Each time a memoized function is called, its parameters are used to index the cache.If the data is present, then it can be returned, without executing the entire function.Otherwise the function is executed and then the result is added to the cache.
            Let's take an example of adding function with memoization,

    --- javascript
    const memoizAddition = () => {
            let cache = {};
            return (value) => {
                if (value in cache) {
                    console.log("Fetching from cache");
                    return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
                } else {
                    console.log("Calculating result");
                    let result = value + 20;
                    cache[value] = result;
                    return result;
                }
            };
        };
        // returned function from memoizAddition
        const addition = memoizAddition();
        console.log(addition(20)); //output: 40 calculated
        console.log(addition(20)); //output: 40 cached
    ---

    `},{type:5,title:"What is Hoisting",content:`

    Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,

    ---javascript
    console.log(message); //output : undefined
    var message = "The variable Has been hoisted";
    ---

    The above code looks like as below to the interpreter,

    ---javascript
    var message;
    console.log(message);
    message = "The variable Has been hoisted";
    ---

    In the same fashion, function declarations are hoisted too

    ---javascript
    message("Good morning"); //Good morning

    function message(name) {
      console.log(name);
    }
    ---

    This hoisting makes functions to be safely used in code before they are declared.

    `},{title:"What are classes in ES6",type:5,content:`
    In ES6, Javascript classes are primarily syntactic sugar over JavaScript\u2019s existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,

    ---javascript
    function Bike(model, color) {
      this.model = model;
      this.color = color;
    }

    Bike.prototype.getDetails = function () {
      return this.model + " bike has" + this.color + " color";
    };
    ---

    Whereas ES6 classes can be defined as an alternative

    ---javascript
    class Bike {
      constructor(color, model) {
        this.color = color;
        this.model = model;
      }

      getDetails() {
        return this.model + " bike has" + this.color + " color";
      }
    }
    ---

    `},{type:5,title:"What are closures",content:`

        A closure is the combination of a function and the lexical environment within which that function was declared.i.e, It is an inner function that has access to the outer or enclosing function\u2019s variables.The closure has three scope chains

    1. Own scope where variables defined between its curly brackets
    2. Outer function\u2019s variables
    3. Global variables

    Let's take an example of closure concept,

    --- javascript
    function Welcome(name) {
        var greetingInfo = function (message) {
            console.log(message + " " + name);
        };
        return greetingInfo;
    }
    var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr.John
---

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

    `},{type:5,title:"What are modules",content:`

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

    `},{title:"Why do you need modules",type:5,content:`
    Below are the list of benefits using modules in javascript ecosystem

    1. Maintainability
    2. Reusability
    3. Namespacing

    `},{title:"What is scope in javascript",type:5,content:`
    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

    `},{title:"What is a service worker",type:5,content:`
    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

    `},{title:"How do you manipulate DOM using a service worker",type:5,content:`
    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the \`postMessage\` interface, and those pages can manipulate the DOM.

    `},{title:"How do you reuse information across service worker restarts",type:5,content:"\n    The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.\n\n    "},{type:5,title:"What is IndexedDB",content:`
        IndexedDB is a low - level API for client - side storage of larger amounts of structured data, including files / blobs.This API uses indexes to enable high - performance searches of this data.

    `},{type:5,title:"What is web storage",content:`

    Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

    1. **Local storage:** It stores data for current origin with no expiration date.
    2. **Session storage:** It stores data for one session and the data is lost when the browser tab is closed.

    `},{type:5,title:"What is a post message",content:`
    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

    `},{type:5,title:"What is a Cookie",content:`

        A cookie is a piece of data that is stored on your computer to be accessed by your browser.Cookies are saved as key/ value pairs.
    For example, you can create a cookie named username as below,

    --- javascript
    document.cookie = "username=John";
---

    ![Screenshot](images / cookie.png)

        `},{title:"Why do you need a Cookie",type:5,content:`
    Cookies are used to remember information about the user profile(such as username).It basically involves two steps,

    1. When a user visits a web page, the user profile can be stored in a cookie.
    2. Next time the user visits the page, the cookie remembers the user profile.

    `},{title:"What are the options in a cookie",type:5,content:`
    There are few below options available for a cookie,

    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date(in UTC time).

    --- javascript
document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
---

    1. By default, the cookie belongs to a current page.But you can tell the browser what path the cookie belongs to using a path parameter.

    --- javascript
document.cookie = "username=John; path=/services";
---

    `},{title:"How do you delete a cookie",type:5,content:`
    You can delete a cookie by setting the expiry date as a passed date.You don't need to specify a cookie value in this case.
    For example, you can delete a username cookie in the current page as below.

    --- javascript
document.cookie =
    "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
---

    ** Note:** You should define the cookie path option to ensure that you delete the right cookie.Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

    `},{title:"What are the differences between cookie, local storage and session storage",type:5,content:`
    Below are some of the differences between cookie, local storage and session storage,

    | Feature | Cookie | Local storage | Session storage |
    | --------------------------------- | ---------------------------------- | ---------------- | ------------------- |
    | Accessed on client or server side | Both server - side & client - side | client - side only | client - side only |
    | Lifetime | As configured using Expires option | until deleted | until tab is closed |
    | SSL support | Supported | Not supported | Not supported |
    | Maximum data size | 4KB | 5 MB | 5MB |

    `},{title:"What is the main difference between localStorage and sessionStorage",type:5,content:`
    LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.

    `},{title:"How do you access web storage",type:5,content:`
    The Window object implements the \`WindowLocalStorage\` and \`WindowSessionStorage\` objects which has \`localStorage\`(window.localStorage) and \`sessionStorage\`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local).
    For example, you can read and write on local storage objects as below

    ---javascript
    localStorage.setItem("logo", document.getElementById("logo").value);
    localStorage.getItem("logo");
    ---

    `},{title:"What are the methods available on session storage",type:5,content:`
    The session storage provided methods for reading, writing and clearing the session data

    ---javascript
    // Save data to sessionStorage
    sessionStorage.setItem("key", "value");

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem("key");

    // Remove saved data from sessionStorage
    sessionStorage.removeItem("key");

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    ---

    `},{title:"What is a storage event and its event handler",type:5,content:`
    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
    The syntax would be as below

    ---javascript
    window.onstorage = functionRef;
    ---

    Let's take the example usage of onstorage event handler which logs the storage key and it's values

    ---javascript
    window.onstorage = function (e) {
      console.log(
        "The " +
          e.key +
          " key has been changed from " +
          e.oldValue +
          " to " +
          e.newValue +
          "."
      );
    };
    ---

    `},{title:"Why do you need web storage",type:5,content:`
    Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

    `},{title:"How do you check web storage browser support",type:5,content:`
    You need to check browser support for localStorage and sessionStorage before using web storage,

    ---javascript
    if (typeof Storage !== "undefined") {
      // Code for localStorage/sessionStorage.
    } else {
      // Sorry! No Web Storage support..
    }
    ---

    `},{title:"How do you check web workers browser support",type:5,content:`
    You need to check browser support for web workers before using it

    ---javascript
    if (typeof Worker !== "undefined") {
      // code for Web worker support.
    } else {
      // Sorry! No Web Worker support..
    }
    ---

    `},{title:"Give an example of a web worker",type:5,content:`
    You need to follow below steps to start using web workers for counting example

    1. Create a Web Worker File: You need to write a script to increment the count value. Let's name it as counter.js

    ---javascript
    let i = 0;

    function timedCount() {
      i = i + 1;
      postMessage(i);
      setTimeout("timedCount()", 500);
    }

    timedCount();
    ---

    Here postMessage() method is used to post a message back to the HTML page

    1. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js

    ---javascript
    if (typeof w == "undefined") {
      w = new Worker("counter.js");
    }
    ---

    and we can receive messages from web worker

    ---javascript
    w.onmessage = function (event) {
      document.getElementById("message").innerHTML = event.data;
    };
    ---

    1. Terminate a Web Worker:
       Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use the terminate() method to terminate listening to the messages.

    ---javascript
    w.terminate();
    ---

    1. Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code

    ---javascript
    w = undefined;
    ---

    `},{title:"What are the restrictions of web workers on DOM",type:5,content:`
    WebWorkers don't have access to below javascript objects since they are defined in an external files

    1. Window object
    2. Document object
    3. Parent object

    `},{type:5,title:"What is a promise",content:`

        A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it\u2019s not resolved(for example, network error).It will be in one of the 3 possible states: fulfilled, rejected, or pending.

    The syntax of Promise creation looks like below,

        --- javascript
    const promise = new Promise(function (resolve, reject) {
        // promise description
    });
    ---

        The usage of a promise would be as below,

            --- javascript
    const promise = new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve("I'm a Promise!");
            }, 5000);
        },
        (reject) => { }
    );

    promise.then((value) => console.log(value));
    ---

        The action flow of a promise will be as below,

            ![Screenshot](images / promises.png)

                `},{title:"Why do you need a promise",type:5,content:`
    Promises are used to handle asynchronous operations.They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

    `},{title:"What are the three states of promise",type:5,content:`
    Promises have three states:

    1. ** Pending:** This is an initial state of the Promise before an operation begins
    2. ** Fulfilled:** This state indicates that the specified operation was completed.
    3. ** Rejected:** This state indicates that the operation did not complete.In this case an error value will be thrown.

    `},{title:"What is a callback function",type:5,content:`
    A callback function is a function passed into another function as an argument.This function is invoked inside the outer function to complete an action.
        Let's take a simple example of how to use callback function

    --- javascript
    function callbackFunction(name) {
        console.log("Hello " + name);
    }

    function outerFunction(callback) {
        let name = prompt("Please enter your name.");
        callback(name);
    }

    outerFunction(callbackFunction);
    ---

        `},{title:"Why do we need callbacks",type:5,content:`
    The callbacks are needed because javascript is an event driven language.That means instead of waiting for a response javascript will keep executing while listening for other events.
        Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

    --- javascript
    function firstFunction() {
        // Simulate a code delay
        setTimeout(function () {
            console.log("First function called");
        }, 1000);
    }
    function secondFunction() {
        console.log("Second function called");
    }
    firstFunction();
    secondFunction();

    Output;
    // Second function called
    // First function called
    ---

        As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn\u2019t execute until the other code finishes execution.

            `},{title:"What is a callback hell",type:5,content:`
    Callback Hell is an anti - pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.The callback hell looks like below,

        --- javascript
    async1(function () {
        async2(function () {
            async3(function () {
                async4(function () {
                    ....
                });
        });
    });
});
---

    `},{title:"What are server-sent events",type:5,content:`
Server - sent events(SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling.These are a one way communications channel - events flow from server to client only.This has been used in Facebook / Twitter updates, stock price updates, news feeds etc.

    `},{title:"How do you receive server-sent event notifications",type:5,content:`
    The EventSource object is used to receive server - sent event notifications.For example, you can receive messages from server as below,

    --- javascript
if (typeof EventSource !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
        document.getElementById("output").innerHTML += event.data + "<br>";
    };
}
---

    `},{title:"How do you check browser support for server-sent events",type:5,content:`
    You can perform browser support for server - sent events before using it as below,

    --- javascript
if (typeof EventSource !== "undefined") {
    // Server-sent events supported. Let's have some code here!
} else {
    // No server-sent events supported
}
---

    `},{title:"What are the events available for server sent events",type:5,content:`
    Below are the list of events available for server sent events
    | Event | Description |
    | ---- | ---------
    | onopen | It is used when a connection to the server is opened |
    | onmessage | This event is used when a message is received |
    | onerror | It happens when an error occurs |

    `},{title:"What are the main rules of promise",type:5,content:`
    A promise must follow a specific set of rules,

    1. A promise is an object that supplies a standard - compliant \`.then()\` method
    2. A pending promise may transition into either fulfilled or rejected state
    3. A fulfilled or rejected promise is settled and it must not transition into any other state.
    4. Once a promise is settled, the value must not change.

    `},{title:"What is callback in callback",type:5,content:`
    You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.

    ---javascript
    loadScript("/script1.js", function (script) {
      console.log("first script is loaded");

      loadScript("/script2.js", function (script) {
        console.log("second script is loaded");

        loadScript("/script3.js", function (script) {
          console.log("third script is loaded");
          // after all scripts are loaded
        });
      });
    });
    ---

    `},{title:"What is promise chaining",type:5,content:`
    The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

    ---javascript
    new Promise(function (resolve, reject) {
      setTimeout(() => resolve(1), 1000);
    })
      .then(function (result) {
        console.log(result); // 1
        return result * 2;
      })
      .then(function (result) {
        console.log(result); // 2
        return result * 3;
      })
      .then(function (result) {
        console.log(result); // 6
        return result * 4;
      });
    ---

    In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

    1. The initial promise resolves in 1 second,
    2. After that \`.then\` handler is called by logging the result(1) and then return a promise with the value of result * 2.
    3. After that the value passed to the next \`.then\` handler by logging the result(2) and return a promise with result * 3.
    4. Finally the value passed to the last \`.then\` handler by logging the result(6) and return a promise with result * 4.

    `},{type:5,title:"What is promise.all",content:`

        Promise.all is a promise that takes an array of promises as an input(an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected.For example, the syntax of promise.all method is below,

            --- javascript
    Promise.all([Promise1, Promise2, Promise3]).then(result) => { console.log(result) }) .catch (error => console.log(\`Error in promises \${error}\`))
    ---

    **Note:** Remember that the order of the promises(output the result) is maintained as per input order.

    `},{title:"What is the purpose of the race method in promise",type:5,content:`
    Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first

    ---javascript
    var promise1 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, "one");
    });
    var promise2 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, "two");
    });

    Promise.race([promise1, promise2]).then(function (value) {
      console.log(value); // "two" // Both promises will resolve, but promise2 is faster
    });
    ---

    `},{title:"What is a strict mode in javascript",type:5,content:`
    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a \u201Cstrict\u201D operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression \`"use strict";\` instructs the browser to use the javascript code in the Strict mode.

    `},{title:"Why do you need strict mode",type:5,content:`
    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

    `},{title:"How do you declare strict mode",type:5,content:`
    The strict mode is declared by adding "use strict"; to the beginning of a script or a function.
    If declared at the beginning of a script, it has global scope.

    ---javascript
    "use strict";
    x = 3.14; // This will cause an error because x is not declared
    ---

    and if you declare inside a function, it has local scope

    ---javascript
    x = 3.14; // This will not cause an error.
    myFunction();

    function myFunction() {
      "use strict";
      y = 3.14; // This will cause an error
    }
    ---

    `},{title:"What is the purpose of double exclamation",type:5,content:`
    The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.
    For example, you can test IE version using this expression as below,

    ---javascript
    let isIE8 = false;
    isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
    ---

    If you don't use this expression then it returns the original value.

    ---javascript
    console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null
    ---

    **Note:** The expression !! is not an operator, but it is just twice of ! operator.

    `},{title:"What is the purpose of the delete operator",type:5,content:`
    The delete keyword is used to delete the property as well as its value.

    ---javascript
    var user = { name: "John", age: 20 };
    delete user.age;

    console.log(user); // {name: "John"}
    ---

    `},{title:"What is typeof operator",type:5,content:`
    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

    ---javascript
    typeof "John Abraham"; // Returns "string"
    typeof (1 + 2); // Returns "number"
    ---

    `},{title:"What is undefined property",type:5,content:`
    The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.

    ---javascript
    var user; // Value is undefined, type is undefined
    console.log(typeof user); //undefined
    ---

    Any variable can be emptied by setting the value to undefined.

    ---javascript
    user = undefined;
    ---

    `},{type:5,title:"What is null value",content:`

        The value null represents the intentional absence of any object value.It is one of JavaScript's primitive values. The type of null value is object.
    You can empty the variable by setting the value to null.

    --- javascript
    var user = null;
console.log(typeof user); //object
---

    `},{title:"What is the difference between null and undefined",type:5,content:`
    Below are the main differences between null and undefined,

    | Null | Undefined |
    | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
    | It is an assignment value which indicates that variable points to no object.                    | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object | Type of undefined is undefined |
    | The null value is a primitive value that represents the null, empty, or non - existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.            |
    | Indicates the absence of a value for a variable | Indicates absence of variable itself |
    | Converted to zero(0) while performing primitive operations | Converted to NaN while performing primitive operations |

    `},{type:5,title:"What is eval",content:`

        The eval() function evaluates JavaScript code represented as a string.The string can be a JavaScript expression, variable, statement, or sequence of statements.

    --- javascript
    console.log(eval("1 + 2")); //  3
---

    `},{title:"What is the difference between window and document",type:5,content:`
    Below are the main differences between window and document,

    | Window | Document |
    | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
    | It is the root level element in any web page | It is the direct child of the window object.This is also known as Document Object Model(DOM) |
    | By default window object is available implicitly in the page | You can access it via window.document or document.                                            |
    | It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById, getElementsByTagName, createElement etc |

    `},{title:"How do you access history in javascript",type:5,content:`
    The window.history object contains the browser's history. You can load previous and next URLs in the history using back() and next() methods.

--- javascript
function goBack() {
    window.history.back();
}
function goForward() {
    window.history.forward();
}
---

    ** Note:** You can also access history without window prefix.

    `},{title:"How do you detect caps lock key turned on or not",type:5,content:`
The \`mouseEvent getModifierState()\` is used to return a boolean value that indicates whether the specified modifier key is activated or not. The modifiers such as CapsLock, ScrollLock and NumLock are activated when they are clicked, and deactivated when they are clicked again.

    Let's take an input element to detect the CapsLock on/off behavior with an example,

    ---html
    <input type="password" onmousedown="enterInput(event)" />

    <p id="feedback"></p>

    <script>
      function enterInput(e) {
        var flag = e.getModifierState("CapsLock");
        if (flag) {
          document.getElementById("feedback").innerHTML = "CapsLock activated";
        } else {
          document.getElementById("feedback").innerHTML =
            "CapsLock not activated";
        }
      }
    <\/script>
    ---

    `},{type:5,title:"What is isNaN",content:`

    The isNaN() function is used to determine whether a value is an illegal number(Not - a - Number) or not.i.e, This function returns true if the value equates to NaN.Otherwise it returns false.

    --- javascript
isNaN("Hello"); //true
isNaN("100"); //false
---

    `},{title:"What are the differences between undeclared and undefined variables",type:5,content:`
    Below are the major differences between undeclared(not defined) and undefined variables,

    | undeclared | undefined |
    | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
    | These variables do not exist in a program and are not declared | These variables declared in the program but have not assigned any value |
    | If you try to read the value of an undeclared variable, then a runtime error is encountered | If you try to read the value of an undefined variable, an undefined value is returned. |

    `},{title:"What are global variables",type:5,content:`
    Global variables are those that are available throughout the length of the code without any scope.The var keyword is used to declare a local variable but if you omit it then it will become global variable

--- javascript
msg = "Hello"; // var is missing, it becomes global variable
---

    `},{title:"What are the problems with global variables",type:5,content:`
    The problem with global variables is the conflict of variable names of local and global scope.It is also difficult to debug and test the code that relies on global variables.

    `},{type:5,title:"What is NaN property",content:`

    The NaN property is a global property that represents "Not-a-Number" value.i.e, It indicates that a value is not a legal number.It is very rare to use NaN in a program but it can be used as return value for few cases

    --- javascript
    Math.sqrt(-1);
parseInt("Hello");
---

    `},{title:"What is the purpose of isFinite function",type:5,content:`
    The isFinite() function is used to determine whether a number is a finite, legal number.It returns false if the value is + infinity, -infinity, or NaN(Not - a - Number), otherwise it returns true.

    --- javascript
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(100); // true
---

    `},{type:5,title:"What is an event flow",content:`

    Event flow is the order in which event is received on the web page.When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.
    There are two ways of event flow

1. Top to Bottom(Event Capturing)
2. Bottom to Top(Event Bubbling)

    `},{title:"What is event bubbling",type:5,content:`
    Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors(parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

    `},{title:"What is event capturing",type:5,content:`
    Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants(children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.

    `},{title:"How do you submit a form using JavaScript",type:5,content:`
    You can submit a form using \`document.forms[0].submit()\`. All the form input's information is submitted using onsubmit event handler

    ---javascript
    function submit() {
      document.forms[0].submit();
    }
    ---

    `},{title:"How do you find operating system details",type:5,content:`
    The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

    ---javascript
    console.log(navigator.platform);
    ---

    `},{title:"What is the difference between document load and DOMContentLoaded events",type:5,content:`
    The \`DOMContentLoaded\` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).

    `},{title:"What is the difference between native, host and user objects",type:5,content:"\n    `Native objects` are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.\n    `Host objects` are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.\n    `User objects` are objects defined in the javascript code. For example, User objects created for profile information.\n\n    "},{title:"What are the tools or techniques used for debugging JavaScript code",type:5,content:`
    You can use below tools or techniques for debugging javascript

    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

    `},{title:"What are the pros and cons of promises over callbacks",type:5,content:`
    Below are the list of pros and cons of promises over callbacks,

    **Pros:**

    1. It avoids callback hell which is unreadable
    2. Easy to write sequential asynchronous code with .then()
    3. Easy to write parallel asynchronous code with Promise.all()
    4. Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

    **Cons:**

    1. It makes little complex code
    2. You need to load a polyfill if ES6 is not supported

    `},{title:"What is the difference between an attribute and a property",type:5,content:`
    Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

    ---javascript
    <input type="text" value="Name:">
    ---

    You can retrieve the attribute value as below,

    ---javascript
    const input = document.querySelector("input");
    console.log(input.getAttribute("value")); // Good morning
    console.log(input.value); // Good morning
    ---

    And after you change the value of the text field to "Good evening", it becomes like

    ---javascript
    console.log(input.getAttribute("value")); // Good evening
    console.log(input.value); // Good evening
    ---

    `},{title:"What is same-origin policy",type:5,content:`
    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

    `},{title:"What is the purpose of void 0",type:5,content:`
    Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an \`<a>\` element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression.
    For example, the below link notify the message without reloading the page

    ---javascript
    <a href="JavaScript:void(0);" onclick="alert('Well done!')">
      Click Me!
    </a>
    ---

    `},{title:"Is JavaScript a compiled or interpreted language",type:5,content:`
    JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

    `},{title:"Is JavaScript a case-sensitive language",type:5,content:`
    Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

    `},{title:"Is there any relation between Java and JavaScript",type:5,content:`
    No, they are entirely two different programming languages and have nothing to do with each other. But both of them are Object Oriented Programming languages and like many other languages, they follow similar syntax for basic features(if, else, for, switch, break, continue etc).

    `},{type:5,title:"What are events",content:`

		Events are "things" that happen to HTML elements.When JavaScript is used in HTML pages, JavaScript can \`react\` on these events. Some of the examples of HTML events are,

     1. Web page has finished loading
     2. Input field was changed
     3. Button was clicked

     Let's describe the behavior of click event for button element,

     ---javascript
     <!doctype html>
     <html>
      <head>
        <script>
          function greeting() {
            alert('Hello! Good morning');
          }
        <\/script>
      </head>
      <body>
        <button type="button" onclick="greeting()">Click me</button>
      </body>
     </html>
     ---

     `},{type:5,title:"Who created javascript",content:"\n     JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name `Mocha`, but later the language was officially called `LiveScript` when it first shipped in beta releases of Netscape.\n\n     "},{title:"What is the use of preventDefault method",type:5,content:`
     The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

     ---javascript
     document
       .getElementById("link")
       .addEventListener("click", function (event) {
         event.preventDefault();
       });
     ---

     **Note:** Remember that not all events are cancelable.

     `},{title:"What is the use of stopPropagation method",type:5,content:`
     The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

     ---javascript
     <p>Click DIV1 Element</p>
     <div onclick="secondFunc()">DIV 2
       <div onclick="firstFunc(event)">DIV 1</div>
     </div>

     <script>
     function firstFunc(event) {
       alert("DIV 1");
       event.stopPropagation();
     }

     function secondFunc() {
       alert("DIV 2");
     }
     <\/script>
     ---

     `},{title:"What are the steps involved in return false usage",type:5,content:`
     The return false statement in event handlers performs the below steps,

     1. First it stops the browser's default action or behaviour.
     2. It prevents the event from propagating the DOM
     3. Stops callback execution and returns immediately when called.

     `},{type:5,title:"What is BOM",content:`

		The Browser Object Model(BOM) allows JavaScript to "talk to" the browser.It consists of the objects navigator, history, screen, location and document which are children of the window.The Browser Object Model is not standardized and can change based on different browsers.

     ![Screenshot](images / bom.png)

		`},{title:"What is the use of setTimeout",type:5,content:`
     The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds.For example, let's log a message after 2 seconds using setTimeout method,

	--- javascript
	setTimeout(function () {
			console.log("Good morning");
		}, 2000);
---

	`},{title:"What is the use of setInterval",type:5,content:`
     The setInterval() method is used to call a function or evaluate an expression at specified intervals(in milliseconds).For example, let's log a message after 2 seconds using setInterval method,

--- javascript
setInterval(function () {
	console.log("Good morning");
}, 2000);
---

	`},{title:"Why is JavaScript treated as Single threaded",type:5,content:`
     JavaScript is a single - threaded language.Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes.Whereas languages like java, go, C++ can make multi - threaded and multi - process programs.

     `},{title:"What is an event delegation",type:5,content:`
     Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

     For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

	--- javascript
var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the form
form.addEventListener(
	"input",
	function (event) {
		// Log the field that was changed
		console.log(event.target);
	},
	false
);
---

	`},{type:5,title:"What is ECMAScript",content:`

	ECMAScript is the scripting language that forms the basis of JavaScript.ECMAScript standardized by the ECMA International standards organization in the ECMA - 262 and ECMA - 402 specifications.The first edition of ECMAScript was released in 1997.

		`},{type:5,title:"What is JSON",content:`

		JSON(JavaScript Object Notation) is a lightweight format that is used for data interchanging.It is based on a subset of JavaScript language in the way objects are built in JavaScript.

     `},{title:"What are the syntax rules of JSON",type:5,content:`
     Below are the list of syntax rules of JSON

     1. The data is in name/ value pairs
    2. The data is separated by commas
    3. Curly braces hold objects
    4. Square brackets hold arrays

		`},{title:"What is the purpose JSON stringify",type:5,content:`
     When sending data to a web server, the data has to be in a string format.You can achieve this by converting JSON object into a string using stringify() method.

     --- javascript
    var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"
---

	`},{title:"How do you parse JSON string",type:5,content:`
     When receiving the data from a web server, the data is always in a string format.But you can convert this string value to a javascript object using parse() method.

     --- javascript
var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}
---

	`},{type:5,title:"Why do you need JSON",content:`

	When exchanging data between a browser and a server, the data can only be text.Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

     `},{type:5,title:"What are PWAs",content:`

	Progressive web applications(PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript.These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

     `},{title:"What is the purpose of clearTimeout method",type:5,content:`
     The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that.i.e, The return value of setTimeout() function is stored in a variable and it\u2019s passed into the clearTimeout() function to clear the timer.

     For example, the below setTimeout method is used to display the message after 3 seconds.This timeout can be cleared by the clearTimeout() method.

     --- javascript
	< script >
     var msg;
function greeting() {
	alert('Good morning');
}
function start() {
	msg = setTimeout(greeting, 3000);

}

function stop() {
	clearTimeout(msg);
}
     <\/script >
	---

	`},{title:"What is the purpose of clearInterval method",type:5,content:`
     The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function.i.e, The return value returned by setInterval() function is stored in a variable and it\u2019s passed into the clearInterval() function to clear the interval.

     For example, the below setInterval method is used to display the message for every 3 seconds.This interval can be cleared by the clearInterval() method.

     --- javascript
	< script >
     var msg;
function greeting() {
	alert('Good morning');
}
function start() {
	msg = setInterval(greeting, 3000);

}

function stop() {
	clearInterval(msg);
}
     <\/script >
	---

	`},{title:"How do you redirect new page in javascript",type:5,content:`
     In vanilla javascript, you can redirect to a new page using the \`location\` property of window object. The syntax would be as follows,

     ---javascript
     function redirect() {
       window.location.href = "newPage.html";
     }
     ---

     `},{title:"How do you check whether a string contains a substring",type:5,content:`
     There are 3 possible ways to check whether a string contains a substring or not,

     1. **Using includes:** ES6 provided \`String.prototype.includes\` method to test a string contains a substring

     ---javascript
     var mainString = "hello",
       subString = "hell";
     mainString.includes(subString);
     ---

     1. **Using indexOf:** In an ES5 or older environment, you can use \`String.prototype.indexOf\` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.

     ---javascript
     var mainString = "hello",
       subString = "hell";
     mainString.indexOf(subString) !== -1;
     ---

     1. **Using RegEx:** The advanced solution is using Regular expression's test method(\`RegExp.test\`), which allows for testing for against regular expressions

     ---javascript
     var mainString = "hello",
       regex = /hell/;
     regex.test(mainString);
     ---

     `},{title:"How do you validate an email in javascript",type:5,content:`
     You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

     ---javascript
     function validateEmail(email) {
       var re =
         /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase());
     }
     ---
     The above regular expression accepts unicode characters
     `},{title:"How do you get the current url with javascript",type:5,content:`
     You can use \`window.location.href\` expression to get the current url path and you can use the same expression for updating the URL too. You can also use \`document.URL\` for read-only purposes but this solution has issues in FF.

     ---javascript
     console.log("location.href", window.location.href); // Returns full URL
     ---

     `},{title:"What are the various url properties of location object",type:5,content:`
     The below \`Location\` object properties can be used to access URL components of the page,

     1. href - The entire URL
     2. protocol - The protocol of the URL
     3. host - The hostname and port of the URL
     4. hostname - The hostname of the URL
     5. port - The port number in the URL
     6. pathname - The path name of the URL
     7. search - The query portion of the URL
     8. hash - The anchor portion of the URL

     `},{title:"How do get query string values in javascript",type:5,content:`
     You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,

     ---javascript
     const urlParams = new URLSearchParams(window.location.search);
     const clientCode = urlParams.get("clientCode");
     ---

     `},{title:"How do you check if a key exists in an object",type:5,content:`
     You can check whether a key exists in an object or not using three approaches,

     1. **Using in operator:** You can use the in operator whether a key exists in an object or not

     ---javascript
     "key" in obj;
     ---

     and If you want to check if a key doesn't exist, remember to use parenthesis,

     ---javascript
     !("key" in obj);
     ---

     1. **Using hasOwnProperty method:** You can use \`hasOwnProperty\` to particularly test for properties of the object instance (and not inherited properties)

     ---javascript
     obj.hasOwnProperty("key"); // true
     ---

     1. **Using undefined comparison:** If you access a non-existing property from an object, the result is undefined. Let\u2019s compare the properties against undefined to determine the existence of the property.

     ---javascript
     const user = {
       name: "John",
     };

     console.log(user.name !== undefined); // true
     console.log(user.nickName !== undefined); // false
     ---

     `},{title:"How do you loop through or enumerate javascript object",type:5,content:`
     You can use the \`for-in\` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using \`hasOwnProperty\` method.

     ---javascript
     var object = {
       k1: "value1",
       k2: "value2",
       k3: "value3",
     };

     for (var key in object) {
       if (object.hasOwnProperty(key)) {
         console.log(key + " -> " + object[key]); // k1 -> value1 ...
       }
     }
     ---

     `},{title:"How do you test for an empty object",type:5,content:`
     There are different solutions based on ECMAScript versions

     1. **Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.

     ---javascript
     Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
     ---

     1. **Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.

     ---javascript
     Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
     ---

     1. **Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use a for-in loop along with hasOwnProperty.

     ---javascript
     function isEmpty(obj) {
       for (var prop in obj) {
         if (obj.hasOwnProperty(prop)) {
           return false;
         }
       }

       return JSON.stringify(obj) === JSON.stringify({});
     }
     ---

     `},{title:"What is an arguments object",type:5,content:`
     The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

     ---javascript
     function sum() {
       var total = 0;
       for (var i = 0, len = arguments.length; i < len; ++i) {
         total += arguments[i];
       }
       return total;
     }

     sum(1, 2, 3); // returns 6
     ---

     **Note:** You can't apply array methods on arguments object. But you can convert into a regular array as below.

     ---javascript
     var argsArray = Array.prototype.slice.call(arguments);
     ---

     `},{title:"How do you make first letter of the string in an uppercase",type:5,content:`
     You can create a function which uses a chain of string methods such as charAt, toUpperCase and slice methods to generate a string with the first letter in uppercase.

     ---javascript
     function capitalizeFirstLetter(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
     }
     ---

     `},{title:"What are the pros and cons of for loop",type:5,content:`   
    The for-loop is a commonly used iteration syntax in javascript. It has both pros and con"Pros",
	  Pros
			1. Works on every environment,
      2. You can use break and continue flow control statement"Cons"
		Cons
     1. Too verbose
     2. Imperative
     3. You might face one-by-off errors

    `},{title:"How do you display the current date in javascript",type:5,content:`
     You can use \`new Date()\` to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy

     ---javascript
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, "0");
     var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
     var yyyy = today.getFullYear();

     today = mm + "/" + dd + "/" + yyyy;
     document.write(today);
     ---

     `},{title:"How do you compare two date objects",type:5,content:`
     You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

     ---javascript
     var d1 = new Date();
     var d2 = new Date(d1);
     console.log(d1.getTime() === d2.getTime()); //True
     console.log(d1 === d2); // False
     ---

     `},{title:"How do you check if a string starts with another string",type:5,content:`
     You can use ECMAScript 6's \`String.prototype.startsWith()\` method to check if a string starts with another string or not. But it is not yet supported in all browsers. Let's see an example to see this usage,

     ---javascript
     "Good morning".startsWith("Good"); // true
     "Good morning".startsWith("morning"); // false
     ---

     `},{title:"How do you trim a string in javascript",type:5,content:`
     JavaScript provided a trim method on string types to trim any whitespaces present at the beginning or ending of the string.

     ---javascript
     "  Hello World   ".trim(); //Hello World
     ---

     If your browser(<IE9) doesn't support this method then you can use below polyfill.

     ---javascript
     if (!String.prototype.trim) {
       (function () {
         // Make sure we trim BOM and NBSP
         var rtrim = /^[\uFEFF\xA0]+|[\uFEFF\xA0]+$/g;
         String.prototype.trim = function () {
           return this.replace(rtrim, "");
         };
       })();
     }
     ---

     `},{title:"How do you add a key value pair in javascript",type:5,content:`
     There are two possible solutions to add new properties to an object. Let's take a simple object to explain these solutions.

     ---javascript
     var object = {
       key1: value1,
       key2: value2,
     };
     ---

     1. **Using dot notation:** This solution is useful when you know the name of the property

     ---javascript
     object.key3 = "value3";
     ---

     1. **Using square bracket notation:** This solution is useful when the name of the property is dynamically determined.

     ---javascript
     obj["key3"] = "value3";
     ---

     `},{title:"Is the !-- notation represents a special operator",type:5,content:`
     No,that's not a special operator. But it is a combination of 2 standard operators one after the other,

     1. A logical not (!)
     2. A prefix decrement (--)

     At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.

     `},{title:"How do you assign default values to variables",type:5,content:`
     You can use the logical or operator \`||\` in an assignment expression to provide a default value. The syntax looks like as below,

     ---javascript
     var a = b || c;
     ---

     As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.

     `},{title:"How do you define multiline strings",type:5,content:`
     You can define multiline string literals using the '\\' character followed by line terminator.

     ---javascript
     var str =
       "This is a      very lengthy      sentence!";
     ---

     But if you have a space after the '\\' character, the code will look exactly the same, but it will raise a SyntaxError.

     `},{title:"What is an app shell model",type:5,content:`
     An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.

     `},{title:"Can we define properties for functions",type:5,content:`
     Yes, We can define properties for functions because functions are also objects.

     ---javascript
     fn = function (x) {
       //Function code goes here
     };

     fn.name = "John";

     fn.profile = function (y) {
       //Profile code goes here
     };
     ---

     `},{title:"What is the way to find the number of parameters expected by a function",type:5,content:`
     You can use \`function.length\` syntax to find the number of parameters expected by a function. Let's take an example of \`sum\` function to calculate the sum of numbers,

     ---javascript
     function sum(num1, num2, num3, num4) {
       return num1 + num2 + num3 + num4;
     }
     sum.length; // 4 is the number of parameters expected.
     ---

     `},{type:5,title:"What is a polyfill",content:`

            A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it.For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

                `},{title:"What are break and continue statements",type:5,content:`
     The break statement is used to "jump out" of a loop.i.e, It breaks the loop and continues executing the code after the loop.

     --- javascript
        for (i = 0; i < 10; i++) {
            if (i === 5) {
                break;
            }
            text += "Number: " + i + "<br>";
        }
        ---

            The continue statement is used to "jump over" one iteration in the loop.i.e, It breaks one iteration(in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

     --- javascript
        for (i = 0; i < 10; i++) {
            if (i === 5) {
                continue;
            }
            text += "Number: " + i + "<br>";
        }
        ---

            `},{type:5,title:"What are js labels",content:`

            The label statement allows us to name loops and blocks in JavaScript.We can then use these labels to refer back to the code later.For example, the below code with labels avoids printing the numbers when they are same,

                --- javascript
        var i, j;

        loop1: for (i = 0; i < 3; i++) {
            loop2: for (j = 0; j < 3; j++) {
                if (i === j) {
                    continue loop1;
                }
                console.log("i = " + i + ", j = " + j);
            }
        }

        // Output is:
        //   "i = 1, j = 0"
        //   "i = 2, j = 0"
        //   "i = 2, j = 1"
        ---

            `},{title:"What are the benefits of keeping declarations at the top",type:5,content:`
     It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,

            1. Gives cleaner code
        2. It provides a single place to look for local variables
     3. Easy to avoid unwanted global variables
        4. It reduces the possibility of unwanted re - declarations

            `},{title:"What are the benefits of initializing variables",type:5,content:`
     It is recommended to initialize variables because of the below benefits,

            1. It gives cleaner code
        2. It provides a single place to initialize variables
        3. Avoid undefined values in the code

            `},{title:"What are the recommendations to create new object",type:5,content:`
     It is recommended to avoid creating new objects using \`new Object()\`. Instead you can initialize values based on it's type to create the objects.

     1. Assign {} instead of new Object()
     2. Assign "" instead of new String()
     3. Assign 0 instead of new Number()
     4. Assign false instead of new Boolean()
     5. Assign [] instead of new Array()
     6. Assign /()/ instead of new RegExp()
     7. Assign function (){} instead of new Function()

     You can define them as an example,

     ---javascript
     var v1 = {};
     var v2 = "";
     var v3 = 0;
     var v4 = false;
     var v5 = [];
     var v6 = /()/;
     var v7 = function () {};
     ---

     `},{title:"How do you define JSON arrays",type:5,content:`
     JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,

     ---javascript
     "users":[
       {"firstName":"John", "lastName":"Abrahm"},
       {"firstName":"Anna", "lastName":"Smith"},
       {"firstName":"Shane", "lastName":"Warn"}
     ]
     ---

     `},{title:"How do you generate random integers",type:5,content:`
     You can use Math.random() with Math.floor() to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,

     ---javascript
     Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
     Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
     ---

     **Note:** Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

     `},{title:"Can you write a random integers function to print integers with in a range",type:5,content:`
     Yes, you can create a proper random function to return a random number between min and max (both included)

     ---javascript
     function randomInteger(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
     }
     randomInteger(1, 100); // returns a random integer from 1 to 100
     randomInteger(1, 1000); // returns a random integer from 1 to 1000
     ---

     `},{type:5,title:"What is tree shaking",content:`

                Tree shaking is a form of dead code elimination.It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,(i.e.import and export ).Initially this has been popularized by the ES2015 module bundler \`rollup\`.

     `},{title:"What is the need of tree shaking",type:5,content:`
     Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a \u201CHello World\u201D Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.

     `},{title:"Is it recommended to use eval",type:5,content:`
     No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.

     `},{title:"What is a Regular Expression",type:5,content:`
     A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,

     ---javascript
     /pattern/modifiers;
     ---

     For example, the regular expression or search pattern with case-insensitive username would be,

     ---javascript
     /John/i;
     ---

     `},{title:"What are the string methods available in Regular expression",type:5,content:`
     Regular Expressions has two string methods: search() and replace().
     The search() method uses an expression to search for a match, and returns the position of the match.

     ---javascript
     var msg = "Hello John";
     var n = msg.search(/John/i); // 6
     ---

     The replace() method is used to return a modified string where the pattern is replaced.

     ---javascript
     var msg = "Hello John";
     var n = msg.replace(/John/i, "Buttler"); // Hello Buttler
     ---

     `},{title:"What are modifiers in regular expression",type:5,content:`
     Modifiers can be used to perform case-insensitive and global searches. Let's list down some of the modifiers,

     | Modifier | Description                                             |
     | -------- | ------------------------------------------------------- |
     | i        | Perform case-insensitive matching                       |
     | g        | Perform a global match rather than stops at first match |
     | m        | Perform multiline matching                              |

     Let's take an example of global modifier,

     ---javascript
     var text = "Learn JS one by one";
     var pattern = /one/g;
     var result = text.match(pattern); // one,one
     ---

     `},{title:"What are regular expression patterns",type:5,content:`
     Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

     1. **Brackets:** These are used to find a range of characters.
        For example, below are some use cases,
        1. [abc]: Used to find any of the characters between the brackets(a,b,c)
        2. [0-9]: Used to find any of the digits between the brackets
        3. (a|b): Used to find any of the alternatives separated with |
     2. **Metacharacters:** These are characters with a special meaning
        For example, below are some use cases,
        1. \\d: Used to find a digit
        2. \\s: Used to find a whitespace character
        3. \\b: Used to find a match at the beginning or ending of a word
     3. **Quantifiers:** These are useful to define quantities
        For example, below are some use cases,
        1. n+: Used to find matches for any string that contains at least one n
        2. n*: Used to find matches for any string that contains zero or more occurrences of n
        3. n?: Used to find matches for any string that contains zero or one occurrences of n

     `},{title:"What is a RegExp object",type:5,content:`
     RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

     ---javascript
     var regexp = new RegExp("\\w+");
     console.log(regexp);
     // expected output: /\\w+/
     ---

     `},{title:"How do you search a string for a pattern",type:5,content:`
     You can use the test() method of regular expression in order to search a string for a pattern, and return true or false depending on the result.

     ---javascript
     var pattern = /you/;
     console.log(pattern.test("How are you?")); //true
     ---

     `},{title:"What is the purpose of exec method",type:5,content:`
     The purpose of exec method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false.

     ---javascript
     var pattern = /you/;
     console.log(pattern.exec("How are you?")); //["you", index: 8, input: "How are you?", groups: undefined]
     ---

     `},{title:"How do you change the style of a HTML element",type:5,content:`
     You can change inline style or classname of a HTML element using javascript

     1. **Using style property:** You can modify inline style using style property

     ---javascript
     document.getElementById("title").style.fontSize = "30px";
     ---

     1. **Using ClassName property:** It is easy to modify element class using className property

     ---javascript
     document.getElementById("title").className = "custom-title";
     ---

     `},{title:"What would be the result of 1+2+'3'",type:5,content:"\n     The output is going to be `33`. Since `1` and `2` are numeric values, the result of the first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`.\n\n     "},{title:"What is a debugger statement",type:5,content:`
     The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
     For example, in the below function a debugger statement has been inserted. So
     execution is paused at the debugger statement just like a breakpoint in the script source.

     ---javascript
     function getProfile() {
       // code goes here
       debugger;
       // code goes here
     }
     ---

     `},{title:"What is the purpose of breakpoints in debugging",type:5,content:`
     You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

     `},{title:"Can I use reserved words as identifiers",type:5,content:`
     No, you cannot use the reserved words as variables, labels, object or function names. Let's see one simple example,

     ---javascript
     var else = "hello"; // Uncaught SyntaxError: Unexpected token else
     ---

     `},{title:"How do you detect a mobile browser",type:5,content:`
     You can use regex which returns a true or false value depending on whether or not the user is browsing with a mobile.

     ---javascript
     window.mobilecheck = function () {
       var mobileCheck = false;
       (function (a) {
         if (
           /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
             a
           ) ||
           /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(
             a.substr(0, 4)
           )
         )
           mobileCheck = true;
       })(navigator.userAgent || navigator.vendor || window.opera);
       return mobileCheck;
     };
     ---

     `},{title:"How do you detect a mobile browser without regexp",type:5,content:`
     You can detect mobile browsers by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,

     ---javascript
     function detectmob() {
       if (
         navigator.userAgent.match(/Android/i) ||
         navigator.userAgent.match(/webOS/i) ||
         navigator.userAgent.match(/iPhone/i) ||
         navigator.userAgent.match(/iPad/i) ||
         navigator.userAgent.match(/iPod/i) ||
         navigator.userAgent.match(/BlackBerry/i) ||
         navigator.userAgent.match(/Windows Phone/i)
       ) {
         return true;
       } else {
         return false;
       }
     }
     ---

     `},{title:"How do you get the image width and height using JS",type:5,content:`
     You can programmatically get the image and check the dimensions(width and height) using Javascript.

     ---javascript
     var img = new Image();
     img.onload = function () {
       console.log(this.width + "x" + this.height);
     };
     img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
     ---

     `},{title:"How do you make synchronous HTTP request",type:5,content:`
     Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript

     ---javascript
     function httpGet(theUrl) {
       var xmlHttpReq = new XMLHttpRequest();
       xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
       xmlHttpReq.send(null);
       return xmlHttpReq.responseText;
     }
     ---

     `},{title:"How do you make asynchronous HTTP request",type:5,content:`
     Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests from JavaScript by passing the 3rd parameter as true.

     ---javascript
     function httpGetAsync(theUrl, callback) {
       var xmlHttpReq = new XMLHttpRequest();
       xmlHttpReq.onreadystatechange = function () {
         if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
           callback(xmlHttpReq.responseText);
       };
       xmlHttp.open("GET", theUrl, true); // true for asynchronous
       xmlHttp.send(null);
     }
     ---

     `},{title:"How do you convert date to another timezone in javascript",type:5,content:`
     You can use the toLocaleString() method to convert dates in one timezone to another. For example, let's convert current date to British English timezone as below,

     ---javascript
     console.log(event.toLocaleString("en-GB", { timeZone: "UTC" })); //29/06/2019, 09:56:00
     ---

     `},{title:"What are the properties used to get size of window",type:5,content:`
     You can use innerWidth, innerHeight, clientWidth, clientHeight properties of windows, document element and document body objects to find the size of a window. Let's use them combination of these properties to calculate the size of a window or document,

     ---javascript
     var width =
       window.innerWidth ||
       document.documentElement.clientWidth ||
       document.body.clientWidth;

     var height =
       window.innerHeight ||
       document.documentElement.clientHeight ||
       document.body.clientHeight;
     ---

     `},{title:"What is a conditional operator in javascript",type:5,content:`
     The conditional (ternary) operator is the only JavaScript operator that takes three operands which acts as a shortcut for if statements.

     ---javascript
     var isAuthenticated = false;
     console.log(
       isAuthenticated ? "Hello, welcome" : "Sorry, you are not authenticated"
     ); //Sorry, you are not authenticated
     ---

     `},{title:"Can you apply chaining on conditional operator",type:5,content:`
     Yes, you can apply chaining on conditional operators similar to if \u2026 else if\u2008\u2026 else if \u2026 else chain. The syntax is going to be as below,

     ---javascript
     function traceValue(someParam) {
       return condition1
         ? value1
         : condition2
         ? value2
         : condition3
         ? value3
         : value4;
     }

     // The above conditional operator is equivalent to:

     function traceValue(someParam) {
       if (condition1) {
         return value1;
       } else if (condition2) {
         return value2;
       } else if (condition3) {
         return value3;
       } else {
         return value4;
       }
     }
     ---

     `},{title:"What are the ways to execute javascript after page load",type:5,content:`
     You can execute javascript after page load in many different ways,

     1. **window.onload:**

     ---javascript
     window.onload = function ...
     ---

     1. **document.onload:**

     ---javascript
     document.onload = function ...
     ---

     1. **body onload:**

     ---javascript
     <body onload="script();">
     ---

     `},{title:"What is the difference between proto and prototype",type:5,content:`
     The \`__proto__\` object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas \`prototype\` is the object that is used to build \`__proto__\` when you create an object with new

     ---javascript
     new Employee().__proto__ === Employee.prototype;
     new Employee().prototype === undefined;
     ---

     `},{title:"Give an example where do you really need semicolon",type:5,content:`
     It is recommended to use semicolons after every statement in JavaScript. For example, in the below case it throws an error ".. is not a function" at runtime due to missing semicolon.

     ---javascript
     // define a function
     var fn = (function () {
       //...
     })(
       // semicolon missing at this line

       // then execute some code inside a closure
       function () {
         //...
       }
     )();
     ---

     and it will be interpreted as

     ---javascript
     var fn = (function () {
       //...
     })(function () {
       //...
     })();
     ---

     In this case, we are passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. Hence, the second function will fail with a "... is not a function" error at runtime.

     `},{title:"What is a freeze method",type:5,content:`
     The **freeze()** method is used to freeze an object. Freezing an object does not allow adding new properties to an object,prevents from removing and prevents changing the enumerability, configurability, or writability of existing properties. i.e, It returns the passed object and does not create a frozen copy.

     ---javascript
     const obj = {
       prop: 100,
     };

     Object.freeze(obj);
     obj.prop = 200; // Throws an error in strict mode

     console.log(obj.prop); //100
     ---

     Remember freezing is only applied to the top-level properties in objects but not for nested objects. 
     For example, let's try to freeze user object which has employment details as nested object and observe that details have been changed.

     ---javascript
     const user = {
       name: 'John',
       employment: {
         department: 'IT'
       }
     };

     Object.freeze(user);
     user.employment.department = 'HR';
     ---


     **Note:** It causes a TypeError if the argument passed is not an object.

     `},{title:"What is the purpose of freeze method",type:5,content:`
     Below are the main benefits of using freeze method,

     1. It is used for freezing objects and arrays.
     2. It is used to make an object immutable.

     `},{title:"Why do I need to use freeze method",type:5,content:`
     In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the \`final\` keyword which is used in various languages.

     `},{title:"How do you detect a browser language preference",type:5,content:`
     You can use navigator object to detect a browser language preference as below,

     ---javascript
     var language =
       (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
       navigator.language || // All browsers
       navigator.userLanguage; // IE <= 10

     console.log(language);
     ---

     `},{title:"How to convert string to title case with javascript",type:5,content:`
     Title case means that the first letter of each word is capitalized. You can convert a string to title case using the below function,

     ---javascript
     function toTitleCase(str) {
       return str.replace(/\\w\\S*/g, function (txt) {
         return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
       });
     }
     toTitleCase("good morning john"); // Good Morning John
     ---

     `},{title:"How do you detect javascript disabled in the page",type:5,content:`
     You can use the \`<noscript>\` tag to detect javascript disabled or not. The code block inside \`<noscript>\` gets executed when JavaScript is disabled, and is typically used to display alternative content when the page generated in JavaScript.

     ---javascript
     <script type="javascript">
         // JS related code goes here
     <\/script>
     <noscript>
         <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
     </noscript>
     ---

     `},{title:"What are various operators supported by javascript",type:5,content:`
     An operator is capable of manipulating(mathematical and logical computations) a certain value or operand. There are various operators supported by JavaScript as below,

     1. **Arithmetic Operators:** Includes + (Addition),\u2013 (Subtraction), * (Multiplication), / (Division), % (Modulus), + + (Increment) and \u2013 \u2013 (Decrement)
     2. **Comparison Operators:** Includes = =(Equal),!= (Not Equal), ===(Equal with type), > (Greater than),> = (Greater than or Equal to),< (Less than),<= (Less than or Equal to)
     3. **Logical Operators:** Includes &&(Logical AND),||(Logical OR),!(Logical NOT)
     4. **Assignment Operators:** Includes = (Assignment Operator), += (Add and Assignment Operator), \u2013 = (Subtract and Assignment Operator), *= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)
     5. **Ternary Operators:** It includes conditional(: ?) Operator
     6. **typeof Operator:** It uses to find type of variable. The syntax looks like \`typeof variable\`

     `},{title:"What is a rest parameter",type:5,content:`
     Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,

     ---javascript
     function f(a, b, ...theArgs) {
       // ...
     }
     ---

     For example, let's take a sum example to calculate on dynamic number of parameters,

     ---javascript
     function total(\u2026args){
     let sum = 0;
     for(let i of args){
     sum+=i;
     }
     return sum;
     }
     console.log(fun(1,2)); //3
     console.log(fun(1,2,3)); //6
     console.log(fun(1,2,3,4)); //13
     console.log(fun(1,2,3,4,5)); //15
     ---

     **Note:** Rest parameter is added in ES2015 or ES6

     `},{title:"What happens if you do not use rest parameter as a last argument",type:5,content:`
     The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn\u2019t make any sense and will throw an error.

     ---javascript
     function someFunc(a,\u2026b,c){
     //You code goes here
     return;
     }
     ---

     `},{title:"What are the bitwise operators available in javascript",type:5,content:`
     Below are the list of bitwise logical operators used in JavaScript

     1. Bitwise AND ( & )
     2. Bitwise OR ( | )
     3. Bitwise XOR ( ^ )
     4. Bitwise NOT ( ~ )
     5. Left Shift ( << )
     6. Sign Propagating Right Shift ( >> )
     7. Zero fill Right Shift ( >>> )

     `},{title:"What is a spread operator",type:5,content:`
     Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,

     ---javascript
     function calculateSum(x, y, z) {
       return x + y + z;
     }

     const numbers = [1, 2, 3];

     console.log(calculateSum(...numbers)); // 6
     ---

     `},{title:"How do you determine whether object is frozen or not",type:5,content:`
     Object.isFrozen() method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,

     1. If it is not extensible.
     2. If all of its properties are non-configurable.
     3. If all its data properties are non-writable.
        The usage is going to be as follows,

     ---javascript
     const object = {
       property: "Welcome JS world",
     };
     Object.freeze(object);
     console.log(Object.isFrozen(object));
     ---

     `},{title:"How do you determine two values same or not using object",type:5,content:`
     The Object.is() method determines whether two values are the same value. For example, the usage with different types of values would be,

     ---javascript
     Object.is("hello", "hello"); // true
     Object.is(window, window); // true
     Object.is([], []); // false
     ---

     Two values are the same if one of the following holds:

     1. both undefined
     2. both null
     3. both true or both false
     4. both strings of the same length with the same characters in the same order
     5. both the same object (means both object have same reference)
     6. both numbers and
        both +0
        both -0
        both NaN
        both non-zero and both not NaN and both have the same value.

     `},{title:"What is the purpose of using object is method",type:5,content:`
     Some of the applications of Object's \`is\` method are follows,

     1. It is used for comparison of two strings.
     2. It is used for comparison of two numbers.
     3. It is used for comparing the polarity of two numbers.
     4. It is used for comparison of two objects.

     `},{title:"How do you copy properties from one object to other",type:5,content:`
     You can use the Object.assign() method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as below,

     ---javascript
     Object.assign(target, ...sources);
     ---

     Let's take example with one source and one target object,

     ---javascript
     const target = { a: 1, b: 2 };
     const source = { b: 3, c: 4 };

     const returnedTarget = Object.assign(target, source);

     console.log(target); // { a: 1, b: 3, c: 4 }

     console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
     ---

     As observed in the above code, there is a common property(\`b\`) from source to target so it's value has been overwritten.

     `},{title:"What are the applications of assign method",type:5,content:`
     Below are the some of main applications of Object.assign() method,

     1. It is used for cloning an object.
     2. It is used to merge objects with the same properties.

     `},{title:"What is a proxy object",type:5,content:`
     The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows,

     ---javascript
     var p = new Proxy(target, handler);
     ---

     Let's take an example of proxy object,

     ---javascript
     var handler = {
       get: function (obj, prop) {
         return prop in obj ? obj[prop] : 100;
       },
     };

     var p = new Proxy({}, handler);
     p.a = 10;
     p.b = null;

     console.log(p.a, p.b); // 10, null
     console.log("c" in p, p.c); // false, 100
     ---

     In the above code, it uses \`get\` handler which define the behavior of the proxy when an operation is performed on it

     `},{title:"What is the purpose of seal method",type:5,content:`
     The **Object.seal()** method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method

     ---javascript
     const object = {
       property: "Welcome JS world",
     };
     Object.seal(object);
     object.property = "Welcome to object world";
     console.log(Object.isSealed(object)); // true
     delete object.property; // You cannot delete when sealed
     console.log(object.property); //Welcome to object world
     ---

     `},{title:"What are the applications of seal method",type:5,content:`
     Below are the main applications of Object.seal() method,

     1. It is used for sealing objects and arrays.
     2. It is used to make an object immutable.

     `},{title:"What are the differences between freeze and seal methods",type:5,content:`
     If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.

     `},{title:"How do you determine if an object is sealed or not",type:5,content:`
     The Object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true

     1. If it is not extensible.
     2. If all of its properties are non-configurable.
     3. If it is not removable (but not necessarily non-writable).
        Let's see it in the action

     ---javascript
     const object = {
       property: "Hello, Good morning",
     };

     Object.seal(object); // Using seal() method to seal the object

     console.log(Object.isSealed(object)); // checking whether the object is sealed or not
     ---

     `},{title:"How do you get enumerable key and value pairs",type:5,content:`
     The Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. Let's see the functionality of object.entries() method in an example,

     ---javascript
     const object = {
       a: "Good morning",
       b: 100,
     };

     for (let [key, value] of Object.entries(object)) {
       console.log(\`\${key}: \${value}\`); // a: 'Good morning'
       // b: 100
     }
     ---

     **Note:** The order is not guaranteed as object defined.

     `},{title:"What is the main difference between Object.values and Object.entries method",type:5,content:`
     The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.

     ---javascript
     const object = {
       a: "Good morning",
       b: 100,
     };

     for (let value of Object.values(object)) {
       console.log(\`\${value}\`); // 'Good morning'
       100;
     }
     ---

     `},{title:"How can you get the list of keys of any object",type:5,content:`
     You can use the \`Object.keys()\` method which is used to return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,

     ---javascript
     const user = {
       name: "John",
       gender: "male",
       age: 40,
     };

     console.log(Object.keys(user)); //['name', 'gender', 'age']
     ---

     `},{title:"How do you create an object with prototype",type:5,content:`
     The Object.create() method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.

     ---javascript
     const user = {
       name: "John",
       printInfo: function () {
         console.log(\`My name is \${this.name}.\`);
       },
     };

     const admin = Object.create(user);

     admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

     admin.printInfo(); // My name is Nick
     ---

     `},{type:5,title:"What is a WeakSet",content:`

            WeakSet is used to store a collection of weakly(weak references) held objects.The syntax would be as follows,

                --- javascript
        new WeakSet([iterable]);
        ---

            Let's see the below example to explain it's behavior,

                --- javascript
        var ws = new WeakSet();
        var user = {};
        ws.add(user);
        ws.has(user); // true
        ws.delete(user); // removes user from the set
        ws.has(user); // false, user has been removed
        ---

            `},{title:"What are the differences between WeakSet and Set",type:5,content:`
     The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak.i.e, An object in WeakSet can be garbage collected if there is no other reference to it.
     Other differences are,

            1. Sets can store any value Whereas WeakSets can store only collections of objects
        2. WeakSet does not have size property unlike Set
        3. WeakSet does not have methods such as clear, keys, values, entries, forEach.
     4. WeakSet is not iterable.

     `},{title:"List down the collection of methods available on WeakSet",type:5,content:`
     Below are the list of methods available on WeakSet,

            1. add(value): A new object is appended with the given value to the weakset
        2. delete (value): Deletes the value from the WeakSet collection.
     3. has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.

            Let's see the functionality of all the above methods in an example,

        --- javascript
        var weakSetObject = new WeakSet();
        var firstObject = {};
        var secondObject = {};
        // add(value)
        weakSetObject.add(firstObject);
        weakSetObject.add(secondObject);
        console.log(weakSetObject.has(firstObject)); //true
        weakSetObject.delete(secondObject);
        ---

     `},{type:5,title:"What is a WeakMap",content:`

     The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,

     ---javascript
     new WeakMap([iterable]);
     ---

     Let's see the below example to explain it's behavior,

     ---javascript
     var ws = new WeakMap();
     var user = {};
     ws.set(user);
     ws.has(user); // true
     ws.delete(user); // removes user from the map
     ws.has(user); // false, user has been removed
     ---

     `},{title:"What are the differences between WeakMap and Map",type:5,content:`
     The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it.
     Other differences are,

     1. Maps can store any key type Whereas WeakMaps can store only collections of key objects
     2. WeakMap does not have size property unlike Map
     3. WeakMap does not have methods such as clear, keys, values, entries, forEach.
     4. WeakMap is not iterable.

     `},{title:"List down the collection of methods available on WeakMap",type:5,content:`
     Below are the list of methods available on WeakMap,

     1. set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
     2. delete(key): Removes any value associated to the key.
     3. has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
     4. get(key): Returns the value associated to the key, or undefined if there is none.
        Let's see the functionality of all the above methods in an example,

     ---javascript
     var weakMapObject = new WeakMap();
     var firstObject = {};
     var secondObject = {};
     // set(key, value)
     weakMapObject.set(firstObject, "John");
     weakMapObject.set(secondObject, 100);
     console.log(weakMapObject.has(firstObject)); //true
     console.log(weakMapObject.get(firstObject)); // John
     weakMapObject.delete(secondObject);
     ---

     `},{title:"What is the purpose of uneval",type:5,content:`
     The uneval() is an inbuilt function which is used to create a string representation of the source code of an Object. It is a top-level function and is not associated with any object. Let's see the below example to know more about it's functionality,

     ---javascript
     var a = 1;
     uneval(a); // returns a String containing 1
     uneval(function user() {}); // returns "(function user(){})"
     ---

     `},{title:"How do you encode an URL",type:5,content:`
     The encodeURI() function is used to encode complete URI which has special characters except (, / ? : @ & = + $ #) characters.

     ---javascript
     var uri = "https://mozilla.org/?x=\u0448\u0435\u043B\u043B\u044B";
     var encoded = encodeURI(uri);
     console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
     ---

     `},{title:"How do you decode an URL",type:5,content:`
     The decodeURI() function is used to decode a Uniform Resource Identifier (URI) previously created by encodeURI().

     ---javascript
     var uri = "https://mozilla.org/?x=\u0448\u0435\u043B\u043B\u044B";
     var encoded = encodeURI(uri);
     console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
     try {
       console.log(decodeURI(encoded)); // "https://mozilla.org/?x=\u0448\u0435\u043B\u043B\u044B"
     } catch (e) {
       // catches a malformed URI
       console.error(e);
     }
     ---

     `},{title:"How do you print the contents of web page",type:5,content:`
     The window object provided a print() method which is used to print the contents of the current window. It opens a Print dialog box which lets you choose between various printing options. Let's see the usage of print method in an example,

     ---html
     <input type="button" value="Print" onclick="window.print()" />
     ---

     **Note:** In most browsers, it will block while the print dialog is open.

     `},{title:"What is the difference between uneval and eval",type:5,content:`
     The \`uneval\` function returns the source of a given object; whereas the \`eval\` function does the opposite, by evaluating that source code in a different memory area. Let's see an example to clarify the difference,

     ---javascript
     var msg = uneval(function greeting() {
       return "Hello, Good morning";
     });
     var greeting = eval(msg);
     greeting(); // returns "Hello, Good morning"
     ---

     `},{title:"What is an anonymous function",type:5,content:`
     An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

     ---javascript
     function (optionalParameters) {
       //do something
     }

     const myFunction = function(){ //Anonymous function assigned to a variable
       //do something
     };

     [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
       //do something
     });
     ---

     Let's see the above anonymous function in an example,

     ---javascript
     var x = function (a, b) {
       return a * b;
     };
     var z = x(5, 10);
     console.log(z); // 50
     ---

     `},{title:"What is the precedence order between local and global variables",type:5,content:`
     A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.

     ---javascript
     var msg = "Good morning";
     function greeting() {
       msg = "Good Evening";
       console.log(msg); // Good Evening
     }
     greeting();
     ---

     `},{title:"What are javascript accessors",type:5,content:`
     ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses the \`get\` keyword whereas Setters uses the \`set\` keyword.

     ---javascript
     var user = {
       firstName: "John",
       lastName : "Abraham",
       language : "en",
       get lang() {
         return this.language;
       }
       set lang(lang) {
       this.language = lang;
       }
     };
     console.log(user.lang); // getter access lang as en
     user.lang = 'fr';
     console.log(user.lang); // setter used to set lang as fr
     ---

     `},{title:"How do you define property on Object constructor",type:5,content:`
     The Object.defineProperty() static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,

     ---javascript
     const newObject = {};

     Object.defineProperty(newObject, "newProperty", {
       value: 100,
       writable: false,
     });

     console.log(newObject.newProperty); // 100

     newObject.newProperty = 200; // It throws an error in strict mode due to writable setting
     ---

     `},{title:"What is the difference between get and defineProperty",type:5,content:"\n     Both have similar results until unless you use classes. If you use `get` the property will be defined on the prototype of the object whereas using `Object.defineProperty()` the property will be defined on the instance it is applied to.\n\n     "},{title:"What are the advantages of Getters and Setters",type:5,content:`
     Below are the list of benefits of Getters and Setters,

     1. They provide simpler syntax
     2. They are used for defining computed properties, or accessors in JS.
     3. Useful to provide equivalence relation between properties and methods
     4. They can provide better data quality
     5. Useful for doing things behind the scenes with the encapsulated logic.

     `},{title:"Can I add getters and setters using defineProperty method",type:5,content:`
     Yes, You can use the \`Object.defineProperty()\` method to add Getters and Setters. For example, the below counter object uses increment, decrement, add and subtract properties,

     ---javascript
     var obj = { counter: 0 };

     // Define getters
     Object.defineProperty(obj, "increment", {
       get: function () {
         this.counter++;
       },
     });
     Object.defineProperty(obj, "decrement", {
       get: function () {
         this.counter--;
       },
     });

     // Define setters
     Object.defineProperty(obj, "add", {
       set: function (value) {
         this.counter += value;
       },
     });
     Object.defineProperty(obj, "subtract", {
       set: function (value) {
         this.counter -= value;
       },
     });

     obj.add = 10;
     obj.subtract = 5;
     console.log(obj.increment); //6
     console.log(obj.decrement); //5
     ---

     `},{title:"What is the purpose of switch-case",type:5,content:`
     The switch case statement in JavaScript is used for decision making purposes. In a few cases, using the switch case statement is going to be more convenient than if-else statements. The syntax would be as below,

     ---javascript
     switch (expression)
     {
         case value1:
             statement1;
             break;
         case value2:
             statement2;
             break;
         .
         .
         case valueN:
             statementN;
             break;
         default:
             statementDefault;
     }
     ---

     The above multi-way branch statement provides an easy way to dispatch execution to different parts of code based on the value of the expression.

     `},{title:"What are the conventions to be followed for the usage of switch case",type:5,content:`
     Below are the list of conventions should be taken care,

     1. The expression can be of type either number or string.
     2. Duplicate values are not allowed for the expression.
     3. The default statement is optional. If the expression passed to switch does not match with any case value then the statement within default case will be executed.
     4. The break statement is used inside the switch to terminate a statement sequence.
     5. The break statement is optional. But if it is omitted, the execution will continue on into the next case.

     `},{title:"What are primitive data types",type:5,content:`
     A primitive data type is data that has a primitive value (which has no properties or methods). There are 7 types of primitive data types.

     1. string
     2. number
     3. boolean
     4. null
     5. undefined
     6. bigint
     7. symbol

     `},{title:"What are the different ways to access object properties",type:5,content:`
     There are 3 possible ways for accessing the property of an object.

     1. **Dot notation:** It uses dot for accessing the properties

     ---javascript
     objectName.property;
     ---

     1. **Square brackets notation:** It uses square brackets for property access

     ---javascript
     objectName["property"];
     ---

     1. **Expression notation:** It uses expression in the square brackets

     ---javascript
     objectName[expression];
     ---

     `},{title:"What are the function parameter rules",type:5,content:`
     JavaScript functions follow below rules for parameters,

     1. The function definitions do not specify data types for parameters.
     2. Do not perform type checking on the passed arguments.
     3. Do not check the number of arguments received.
        i.e, The below function follows the above rules,

     ---javascript
     function functionName(parameter1, parameter2, parameter3) {
       console.log(parameter1); // 1
     }
     functionName(1);
     ---

     `},{title:"What is an error object",type:5,content:`
     An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,

     ---javascript
     try {
       greeting("Welcome");
     } catch (err) {
       console.log(err.name + "<br>" + err.message);
     }
     ---

     `},{title:"When you get a syntax error",type:5,content:`
     A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing quote for the function parameter throws a syntax error

     ---javascript
     try {
       eval("greeting('welcome)"); // Missing ' will produce an error
     } catch (err) {
       console.log(err.name);
     }
     ---

     `},{title:"What are the different error names from error object",type:5,content:`
     There are 6 different types of error names returned from error object,
     | Error Name | Description |
     |---- | ---------
     | EvalError | An error has occurred in the eval() function |
     | RangeError | An error has occurred with a number "out of range" |
     | ReferenceError | An error due to an illegal reference|
     | SyntaxError | An error due to a syntax error|
     | TypeError | An error due to a type error |
     | URIError | An error due to encodeURI() |

     `},{title:"What are the various statements in error handling",type:5,content:`
     Below are the list of statements used in an error handling,

     1. **try:** This statement is used to test a block of code for errors
     2. **catch:** This statement is used to handle the error
     3. **throw:** This statement is used to create custom errors.
     4. **finally:** This statement is used to execute code after try and catch regardless of the result.

     `},{title:"What are the two types of loops in javascript",type:5,content:`
     1. **Entry Controlled loops:** In this kind of loop type, the test condition is tested before entering the loop body. For example, For Loop and While Loop comes under this category.
     2. **Exit Controlled Loops:** In this kind of loop type, the test condition is tested or evaluated at the end of the loop body. i.e, the loop body will execute at least once irrespective of test condition true or false. For example, do-while loop comes under this category.

     `},{type:5,title:"What is nodejs",content:`

			Node.js is a server - side platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. It is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.

     `},{title:"What is an Intl object",type:5,content:`
			The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting.It provides access to several constructors and language sensitive functions.

     `},{title:"How do you perform language specific date and time formatting",type:5,content:`
     You can use the \`Intl.DateTimeFormat\` object which is a constructor for objects that enable language-sensitive date and time formatting. Let's see this behavior with an example,

     ---javascript
     var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
     console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
     console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019
     ---

     `},{type:5,title:"What is an Iterator",content:"\n\n                An iterator is an object which defines a sequence and a return value upon its termination.It implements the Iterator protocol with a `next()` method which returns an object with two properties: `value` (the next value in the sequence) and `done` (which is true if the last value in the sequence has been consumed).\n\n     "},{title:"How does synchronous iteration works",type:5,content:`
     Synchronous iteration was introduced in ES6 and it works with below set of components,

     **Iterable:** It is an object which can be iterated over via a method whose key is Symbol.iterator.
     **Iterator:** It is an object returned by invoking \`[Symbol.iterator]()\` on an iterable. This iterator object wraps each iterated element in an object and returns it via \`next()\` method one by one.
     **IteratorResult:** It is an object returned by \`next()\` method. The object contains two properties; the \`value\` property contains an iterated element and the \`done\` property determines whether the element is the last element or not.

     Let's demonstrate synchronous iteration with an array as below,

     ---javascript
     const iterable = ["one", "two", "three"];
     const iterator = iterable[Symbol.iterator]();
     console.log(iterator.next()); // { value: 'one', done: false }
     console.log(iterator.next()); // { value: 'two', done: false }
     console.log(iterator.next()); // { value: 'three', done: false }
     console.log(iterator.next()); // { value: 'undefined, done: true }
     ---

     `},{type:5,title:"What is an event loop",content:`

                The Event Loop is a queue of callback functions.When an async function executes, the callback function is pushed into the queue.The JavaScript engine doesn't start processing the event loop until the async function has finished executing the code.
                    ** Note:** It allows Node.js to perform non - blocking I / O operations even though JavaScript is single - threaded.

     `},{type:5,title:"What is call stack",content:`

     Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,

     1. Whenever you call a function for its execution, you are pushing it to the stack.
     2. Whenever the execution is completed, the function is popped out of the stack.

     Let's take an example and it's state representation in a diagram format

     ---javascript
     function hungry() {
       eatFruits();
     }
     function eatFruits() {
       return "I'm eating fruits";
     }

     // Invoke the \`hungry\` function
     hungry();
     ---

     The above code processed in a call stack as below,

     1. Add the \`hungry()\` function to the call stack list and execute the code.
     2. Add the \`eatFruits()\` function to the call stack list and execute the code.
     3. Delete the \`eatFruits()\` function from our call stack list.
     4. Delete the \`hungry()\` function from the call stack list since there are no items anymore.

     ![Screenshot](images/call-stack.png)

     `},{title:"What is an event queue",type:5,content:`
      The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.
    
      Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).
    
      The event queue constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event queue moves the callback into the call stack. If there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.

     `},{type:5,title:"What is a decorator",content:`

                        A decorator is an expression that evaluates to a function and that takes the target, name, and decorator descriptor as arguments.Also, it optionally returns a decorator descriptor to install on the target object.Let's define admin decorator for user class at design time,

     --- javascript
     function admin(isAdmin) {
                return function (target) {
                    target.isAdmin = isAdmin;
                }
            }

            @admin(true)
            class User() {
            }
            console.log(User.isAdmin); //true

            @admin(false)
            class User() {
            }
            console.log(User.isAdmin); //false
            ---

                `},{title:"What are the properties of Intl object",type:5,content:`
     Below are the list of properties available on Intl object,

                1. ** Collator:** These are the objects that enable language - sensitive string comparison.
     2. ** DateTimeFormat:** These are the objects that enable language - sensitive date and time formatting.
     3. ** ListFormat:** These are the objects that enable language - sensitive list formatting.
     4. ** NumberFormat:** Objects that enable language - sensitive number formatting.
     5. ** PluralRules:** Objects that enable plural - sensitive formatting and language - specific rules for plurals.
     6. ** RelativeTimeFormat:** Objects that enable language - sensitive relative time formatting.

     `},{title:"What is an Unary operator",type:5,content:`
     The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN.Let's see this behavior in an action.

            --- javascript
            var x = "100";
            var y = +x;
            console.log(typeof x, typeof y); // string, number

            var a = "Hello";
            var b = +a;
            console.log(typeof a, typeof b, b); // string, number, NaN
            ---

                `},{title:"How do you sort elements in an array",type:5,content:`
     The sort() method is used to sort the elements of an array in place and returns the sorted array.The example usage would be as below,

                --- javascript
            var months = ["Aug", "Sep", "Jan", "June"];
            months.sort();
            console.log(months); //  ["Aug", "Jan", "June", "Sep"]
            ---

                `},{title:"What is the purpose of compareFunction while sorting arrays",type:5,content:`
     The compareFunction is used to define the sort order.If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value. Let's take an example to see the usage of compareFunction,

                --- javascript
            let numbers = [1, 2, 5, 3, 4];
            numbers.sort((a, b) => b - a);
            console.log(numbers); // [5, 4, 3, 2, 1]
            ---

                `},{title:"How do you reversing an array",type:5,content:`
     You can use the reverse() method to reverse the elements in an array.This method is useful to sort an array in descending order.Let's see the usage of reverse() method in an example,

            --- javascript
            let numbers = [1, 2, 5, 3, 4];
            numbers.sort((a, b) => b - a);
            numbers.reverse();
            console.log(numbers); // [1, 2, 3, 4 ,5]
            ---

                `},{title:"How do you find min and max value in an array",type:5,content:`
     You can use \`Math.min\` and \`Math.max\` methods on array variables to find the minimum and maximum elements within an array. Let's create two functions to find the min and max value with in an array,

     ---javascript
     var marks = [50, 20, 70, 60, 45, 30];
     function findMin(arr) {
       return Math.min.apply(null, arr);
     }
     function findMax(arr) {
       return Math.max.apply(null, arr);
     }

     console.log(findMin(marks));
     console.log(findMax(marks));
     ---

     `},{title:"How do you find min and max values without Math functions",type:5,content:`
     You can write functions which loop through an array comparing each value with the lowest value or highest value to find the min and max values. Let's create those functions to find min and max values,

     ---javascript
     var marks = [50, 20, 70, 60, 45, 30];
     function findMin(arr) {
       var length = arr.length;
       var min = Infinity;
       while (length--) {
         if (arr[length] < min) {
           min = arr[length];
         }
       }
       return min;
     }

     function findMax(arr) {
       var length = arr.length;
       var max = -Infinity;
       while (length--) {
         if (arr[length] > max) {
           max = arr[length];
         }
       }
       return max;
     }

     console.log(findMin(marks));
     console.log(findMax(marks));
     ---

     `},{title:"What is an empty statement and purpose of it",type:5,content:`
     The empty statement is a semicolon (;) indicating that no statement will be executed, even if JavaScript syntax requires one. Since there is no action with an empty statement you might think that it's usage is quite less, but the empty statement is occasionally useful when you want to create a loop that has an empty body. For example, you can initialize an array with zero values as below,

     ---javascript
     // Initialize an array a
     for(let i=0; i < a.length; a[i++] = 0) ;
     ---

     `},{title:"How do you get metadata of a module",type:5,content:`
     You can use the \`import.meta\` object which is a meta-property exposing context-specific meta data to a JavaScript module. It contains information about the current module, such as the module's URL. In browsers, you might get different meta data than NodeJS.

     ---javascript
     <script type="module" src="welcome-module.js"><\/script>;
     console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }
     ---

     `},{title:"What is a comma operator",type:5,content:`
     The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters. For example, the usage for numeric expressions would be as below,

     ---javascript
     var x = 1;
     x = (x++, x);

     console.log(x); // 2
     ---

     `},{title:"What is the advantage of a comma operator",type:5,content:`
     It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a \`for\` loop. For example, the below for loop uses multiple expressions in a single location using comma operator,

     ---javascript
     for (var a = 0, b =10; a <= 10; a++, b--)
     ---

     You can also use the comma operator in a return statement where it processes before returning.

     ---javascript
     function myFunction() {
       var a = 1;
       return (a += 10), a; // 11
     }
     ---

     `},{type:5,title:"What is typescript",content:`

            TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async / await, and many other features, and compiles to plain JavaScript.Angular built entirely in TypeScript and used as a primary language.You can install it globally as

     --- bash
     npm install - g typescript
        ---

            Let's see a simple example of TypeScript usage,

        --- typescript
        function greeting(name: string): string {
            return "Hello, " + name;
        }

        let user = "Sudheer";

        console.log(greeting(user));
        ---

            The greeting method allows only string type as argument.

     `},{title:"What are the differences between javascript and typescript",type:5,content:`
     Below are the list of differences between javascript and typescript,

     | feature | typescript | javascript |
     | ------------------- | ------------------------------------- | ----------------------------------------------- |
     | Language paradigm | Object oriented programming language | Scripting language |
     | Typing support | Supports static typing | It has dynamic typing |
     | Modules | Supported | Not supported |
     | Interface | It has interfaces concept | Doesn't support interfaces                      |
            | Optional parameters | Functions support optional parameters | No support of optional parameters for functions |

                `},{title:"What are the advantages of typescript over javascript",type:5,content:`
     Below are some of the advantages of typescript over javascript,

            1. TypeScript is able to find compile time errors at the development time only and it makes sures less runtime errors.Whereas javascript is an interpreted language.
     2. TypeScript is strongly - typed or supports static typing which allows for checking type correctness at compile time.This is not available in javascript.
     3. TypeScript compiler can compile the.ts files into ES3, ES4 and ES5 unlike ES6 features of javascript which may not be supported in some browsers.

     `},{title:"What is an object initializer",type:5,content:`
     An object initializer is an expression that describes the initialization of an Object.The syntax for this expression is represented as a comma - delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces({}).This is also known as literal notation.It is one of the ways to create an object.

     --- javascript
        var initObject = { a: "John", b: 50, c: {} };

        console.log(initObject.a); // John
        ---

            `},{title:"What is a constructor method",type:5,content:`
     The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used.The example usage of constructor would be as below,

            --- javascript
        class Employee {
            constructor() {
                this.name = "John";
            }
        }

        var employeeObject = new Employee();

        console.log(employeeObject.name); // John
        ---

            `},{title:"What happens if you write constructor more than once in a class",type:5,content:`
     The "constructor" in a class is a special method and it should be defined only once in a class.i.e, If you write a constructor method more than once in a class it will throw a \`SyntaxError\` error.

     ---javascript
      class Employee {
        constructor() {
          this.name = "John";
        }
        constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
          this.age = 30;
        }
      }

      var employeeObject = new Employee();

      console.log(employeeObject.name);
     ---

     `},{title:"How do you call the constructor of a parent class",type:5,content:`
     You can use the \`super\` keyword to call the constructor of a parent class. Remember that \`super()\` must be called before using 'this' reference. Otherwise it will cause a reference error. Let's the usage of it,

     ---javascript
     class Square extends Rectangle {
       constructor(length) {
         super(length, length);
         this.name = "Square";
       }

       get area() {
         return this.width * this.height;
       }

       set area(value) {
         this.area = value;
       }
     }
     ---

     `},{title:"How do you get the prototype of an object",type:5,content:`
     You can use the \`Object.getPrototypeOf(obj)\` method to return the prototype of the specified object. i.e. The value of the internal \`prototype\` property. If there are no inherited properties then \`null\` value is returned.

     ---javascript
     const newPrototype = {};
     const newObject = Object.create(newPrototype);

     console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
     ---

     `},{title:"What happens If I pass string type for getPrototype method",type:5,content:`
     In ES5, it will throw a TypeError exception if the obj parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an \`Object\`.

     ---javascript
     // ES5
     Object.getPrototypeOf("James"); // TypeError: "James" is not an object
     // ES2015
     Object.getPrototypeOf("James"); // String.prototype
     ---

     `},{title:"How do you set prototype of one object to another",type:5,content:`
     You can use the \`Object.setPrototypeOf()\` method that sets the prototype (i.e., the internal \`Prototype\` property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,

     ---javascript
     Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
     Object.setPrototypeOf({}, null);
     ---

     `},{title:"How do you check whether an object can be extendable or not",type:5,content:`
     The \`Object.isExtensible()\` method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.

     ---javascript
     const newObject = {};
     console.log(Object.isExtensible(newObject)); //true
     ---

     **Note:** By default, all the objects are extendable. i.e, The new properties can be added or modified.

     `},{title:"How do you prevent an object to extend",type:5,content:`
     The \`Object.preventExtensions()\` method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,

     ---javascript
     const newObject = {};
     Object.preventExtensions(newObject); // NOT extendable

     try {
       Object.defineProperty(newObject, "newProperty", {
         // Adding new property
         value: 100,
       });
     } catch (e) {
       console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
     }
     ---

     `},{title:"What are the different ways to make an object non-extensible",type:5,content:`
     You can mark an object non-extensible in 3 ways,

     1. Object.preventExtensions
     2. Object.seal
     3. Object.freeze

     ---javascript
     var newObject = {};

     Object.preventExtensions(newObject); // Prevent objects are non-extensible
     Object.isExtensible(newObject); // false

     var sealedObject = Object.seal({}); // Sealed objects are non-extensible
     Object.isExtensible(sealedObject); // false

     var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
     Object.isExtensible(frozenObject); // false
     ---

     `},{title:"How do you define multiple properties on an object",type:5,content:`
     The \`Object.defineProperties()\` method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,

     ---javascript
     const newObject = {};

     Object.defineProperties(newObject, {
       newProperty1: {
         value: "John",
         writable: true,
       },
       newProperty2: {},
     });
     ---

     `},{title:"What is MEAN in javascript",type:5,content:`
     The MEAN (MongoDB, Express, AngularJS, and Node.js) stack is the most popular open-source JavaScript software tech stack available for building dynamic web apps where you can write both the server-side and client-side halves of the web project entirely in JavaScript.

     `},{title:"What Is Obfuscation in javascript",type:5,content:`
     Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) that is difficult for humans to understand. It is something similar to encryption, but a machine can understand the code and execute it.
     Let's see the below function before Obfuscation,

     ---javascript
     function greeting() {
       console.log("Hello, welcome to JS world");
     }
     ---

     And after the code Obfuscation, it would be appeared as below,

     ---javascript
     eval(
       (function (p, a, c, k, e, d) {
         e = function (c) {
           return c;
         };
         if (!"".replace(/^/, String)) {
           while (c--) {
             d[c] = k[c] || c;
           }
           k = [
             function (e) {
               return d[e];
             },
           ];
           e = function () {
             return "\\w+";
           };
           c = 1;
         }
         while (c--) {
           if (k[c]) {
             p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
           }
         }
         return p;
       })(
         "2 1(){0.3('4, 7 6 5 8')}",
         9,
         9,
         "console|greeting|function|log|Hello|JS|to|welcome|world".split("|"),
         0,
         {}
       )
     );
     ---

     `},{title:"Why do you need Obfuscation",type:5,content:`
     Below are the few reasons for Obfuscation,

     1. The Code size will be reduced. So data transfers between server and client will be fast.
     2. It hides the business logic from outside world and protects the code from others
     3. Reverse engineering is highly difficult
     4. The download time will be reduced

     `},{type:5,title:"What is Minification",content:`

                Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .

                    `},{title:"What are the advantages of minification",type:5,content:`
     Normally it is recommended to use minification for heavy traffic and intensive requirements of resources.It reduces file sizes with below benefits,

                1. Decreases loading times of a web page
            2. Saves bandwidth usages

                `},{title:"What are the differences between Obfuscation and Encryption",type:5,content:`
     Below are the main differences between Obfuscation and Encryption,

     | Feature | Obfuscation | Encryption |
     | ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------- |
     | Definition | Changing the form of any data in any other form | Changing the form of information to an unreadable format by using a key |
     | A key to decode | It can be decoded without any key | It is required |
     | Target data format | It will be converted to a complex form | Converted into an unreadable format |

                `},{title:"What are the common tools used for minification",type:5,content:`
     There are many online / offline tools to minify the javascript files,

                1. Google's Closure Compiler
            2. UglifyJS2
            3. jsmin
            4. javascript - minifier.com /
                5. prettydiff.com

                    `},{title:"How do you perform form validation using javascript",type:5,content:`
     JavaScript can be used to perform HTML form validation.For example, if the form field is empty, the function needs to notify, and return false, to prevent the form being submitted.
                Lets' perform user login in an html form,

            --- html
                < form name = "myForm" onsubmit = "return validateForm()" method = "post" >
                    User name: <input type="text" name="uname" />
       <input type="submit" value="Submit" />
     </form >
                ---

                And the validation on user login is below,

                    --- javascript
            function validateForm() {
                var x = document.forms["myForm"]["uname"].value;
                if (x == "") {
                    alert("The username shouldn't be empty");
                    return false;
                }
            }
            ---

                `},{title:"How do you perform form validation without javascript",type:5,content:`
     You can perform HTML form validation automatically without using javascript.The validation enabled by applying the \`required\` attribute to prevent form submission when the input is empty.

     ---html
     <form method="post">
       <input type="text" name="uname" required />
       <input type="submit" value="Submit" />
     </form>
     ---

     **Note:** Automatic form validation does not work in Internet Explorer 9 or earlier.

     `},{title:"What are the DOM methods available for constraint validation",type:5,content:`
     The below DOM methods are available for constraint validation on an invalid input,

     1. checkValidity(): It returns true if an input element contains valid data.
     2. setCustomValidity(): It is used to set the validationMessage property of an input element.
        Let's take an user login form with DOM validations

     ---javascript
     function myFunction() {
       var userName = document.getElementById("uname");
       if (!userName.checkValidity()) {
         document.getElementById("message").innerHTML =
           userName.validationMessage;
       } else {
         document.getElementById("message").innerHTML =
           "Entered a valid username";
       }
     }
     ---

     `},{title:"What are the available constraint validation DOM properties",type:5,content:`
     Below are the list of some of the constraint validation DOM properties available,

     1. validity: It provides a list of boolean properties related to the validity of an input element.
     2. validationMessage: It displays the message when the validity is false.
     3. willValidate: It indicates if an input element will be validated or not.

     `},{title:"What are the list of validity properties",type:5,content:`
     The validity property of an input element provides a set of properties related to the validity of data.

     1. customError: It returns true, if a custom validity message is set.
     2. patternMismatch: It returns true, if an element's value does not match its pattern attribute.
     3. rangeOverflow: It returns true, if an element's value is greater than its max attribute.
     4. rangeUnderflow: It returns true, if an element's value is less than its min attribute.
     5. stepMismatch: It returns true, if an element's value is invalid according to step attribute.
     6. tooLong: It returns true, if an element's value exceeds its maxLength attribute.
     7. typeMismatch: It returns true, if an element's value is invalid according to type attribute.
     8. valueMissing: It returns true, if an element with a required attribute has no value.
     9. valid: It returns true, if an element's value is valid.

     `},{title:"Give an example usage of rangeOverflow property",type:5,content:`
     If an element's value is greater than its max attribute then rangeOverflow property returns true. For example, the below form submission throws an error if the value is more than 100,

     ---html
     <input id="age" type="number" max="100" />
     <button onclick="myOverflowFunction()">OK</button>
     ---

     ---javascript
     function myOverflowFunction() {
       if (document.getElementById("age").validity.rangeOverflow) {
         alert("The mentioned age is not allowed");
       }
     }
     ---

     `},{title:"Is enums feature available in javascript",type:5,content:`
     No, javascript does not natively support enums. But there are different kinds of solutions to simulate them even though they may not provide exact equivalents. For example, you can use freeze or seal on object,

     ---javascript
     var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
     ---

     `},{type:5,title:"What is an enum",content:`

			An enum is a type restricting variables to one value from a predefined set of constants.JavaScript has no enums but typescript provides built -in enum support.

		--- javascript
		enum Color {
			RED, GREEN, BLUE
		}
		---

			`},{title:"How do you list all properties of an object",type:5,content:`
     You can use the \`Object.getOwnPropertyNames()\` method which returns an array of all properties found directly in a given object. Let's the usage of it in an example,

     ---javascript
     const newObject = {
       a: 1,
       b: 2,
       c: 3,
     };

     console.log(Object.getOwnPropertyNames(newObject));
     ["a", "b", "c"];
     ---

     `},{title:"How do you get property descriptors of an object",type:5,content:`
     You can use the \`Object.getOwnPropertyDescriptors()\` method which returns all own property descriptors of a given object. The example usage of this method is below,

     ---javascript
     const newObject = {
       a: 1,
       b: 2,
       c: 3,
     };
     const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
     console.log(descriptorsObject.a.writable); //true
     console.log(descriptorsObject.a.configurable); //true
     console.log(descriptorsObject.a.enumerable); //true
     console.log(descriptorsObject.a.value); // 1
     ---

     `},{title:"What are the attributes provided by a property descriptor",type:5,content:`
     A property descriptor is a record which has the following attributes

     1. value: The value associated with the property
     2. writable: Determines whether the value associated with the property can be changed or not
     3. configurable: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
     4. enumerable: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
     5. set: A function which serves as a setter for the property
     6. get: A function which serves as a getter for the property

     `},{title:"How do you extend classes",type:5,content:`
     The \`extends\` keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,

     ---javascript
     class ChildClass extends ParentClass { ... }
     ---

     Let's take an example of Square subclass from Polygon parent class,

     ---javascript
     class Square extends Rectangle {
       constructor(length) {
         super(length, length);
         this.name = "Square";
       }

       get area() {
         return this.width * this.height;
       }

       set area(value) {
         this.area = value;
       }
     }
     ---

     `},{title:"How do I modify the url without reloading the page",type:5,content:`
     The \`window.location.url\` property will be helpful to modify the url but it reloads the page. HTML5 introduced the \`history.pushState()\` and \`history.replaceState()\` methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,

     ---javascript
     window.history.pushState("page2", "Title", "/page2.html");
     ---

     `},{title:"How do you check whether an array includes a particular value or not",type:5,content:`
     The \`Array#includes()\` method is used to determine whether an array includes a particular value among its entries by returning either true or false. Let's see an example to find an element(numeric and string) within an array.

     ---javascript
     var numericArray = [1, 2, 3, 4];
     console.log(numericArray.includes(3)); // true

     var stringArray = ["green", "yellow", "blue"];
     console.log(stringArray.includes("blue")); //true
     ---

     `},{title:"How do you compare scalar arrays",type:5,content:`
     You can use length and every method of arrays to compare two scalar(compared directly using ===) arrays. The combination of these expressions can give the expected result,

     ---javascript
     const arrayFirst = [1, 2, 3, 4, 5];
     const arraySecond = [1, 2, 3, 4, 5];
     console.log(
       arrayFirst.length === arraySecond.length &&
         arrayFirst.every((value, index) => value === arraySecond[index])
     ); // true
     ---

     If you would like to compare arrays irrespective of order then you should sort them before,

     ---javascript
     const arrayFirst = [2, 3, 1, 4, 5];
     const arraySecond = [1, 2, 3, 4, 5];
     console.log(
       arrayFirst.length === arraySecond.length &&
         arrayFirst.sort().every((value, index) => value === arraySecond[index])
     ); //true
     ---

     `},{title:"How to get the value from get parameters",type:5,content:`
     The \`new URL()\` object accepts the url string and \`searchParams\` property of this object can be used to access the get parameters. Remember that you may need to use polyfill or \`window.location\` to access the URL in older browsers(including IE).

     ---javascript
     let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
     let url = new URL(urlString);
     let parameterZ = url.searchParams.get("z");
     console.log(parameterZ); // 3
     ---

     `},{title:"How do you print numbers with commas as thousand separators",type:5,content:`
     You can use the \`Number.prototype.toLocaleString()\` method which returns a string with a language-sensitive representation such as thousand separator,currency etc of this number.

     ---javascript
     function convertToThousandFormat(x) {
       return x.toLocaleString(); // 12,345.679
     }

     console.log(convertToThousandFormat(12345.6789));
     ---

     `},{title:"What is the difference between java and javascript",type:5,content:`
     Both are totally unrelated programming languages and no relation between them. Java is statically typed, compiled, runs on its own VM. Whereas Javascript is dynamically typed, interpreted, and runs in a browser and nodejs environments. Let's see the major differences in a tabular format,
     | Feature | Java | JavaScript |
     |---- | ---- | -----
     | Typed | It's a strongly typed language | It's a dynamic typed language |
     | Paradigm | Object oriented programming | Prototype based programming |
     | Scoping | Block scoped | Function-scoped |
     | Concurrency | Thread based | event based |
     | Memory | Uses more memory | Uses less memory. Hence it will be used for web pages |

     `},{title:"Does JavaScript supports namespace",type:5,content:`
     JavaScript doesn\u2019t support namespace by default. So if you create any element(function, method, object, variable) then it becomes global and pollutes the global namespace. Let's take an example of defining two functions without any namespace,

     ---javascript
     function func1() {
       console.log("This is a first definition");
     }
     function func1() {
       console.log("This is a second definition");
     }
     func1(); // This is a second definition
     ---

     It always calls the second function definition. In this case, namespace will solve the name collision problem.

     `},{title:"How do you declare namespace",type:5,content:`
     Even though JavaScript lacks namespaces, we can use Objects , IIFE to create namespaces.

     1. **Using Object Literal Notation:** Let's wrap variables and functions inside an Object literal which acts as a namespace. After that you can access them using object notation

     ---javascript
     var namespaceOne = {
        function func1() {
            console.log("This is a first definition");
        }
     }
     var namespaceTwo = {
          function func1() {
              console.log("This is a second definition");
          }
      }
     namespaceOne.func1(); // This is a first definition
     namespaceTwo.func1(); // This is a second definition
     ---

     1. **Using IIFE (Immediately invoked function expression):** The outer pair of parentheses of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create the same function in two different function expressions to act as a namespace.

     ---javascript
     (function () {
       function fun1() {
         console.log("This is a first definition");
       }
       fun1();
     })();

     (function () {
       function fun1() {
         console.log("This is a second definition");
       }
       fun1();
     })();
     ---

     1. **Using a block and a let/const declaration:** In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.

     ---javascript
     {
       let myFunction = function fun1() {
         console.log("This is a first definition");
       };
       myFunction();
     }
     //myFunction(): ReferenceError: myFunction is not defined.

     {
       let myFunction = function fun1() {
         console.log("This is a second definition");
       };
       myFunction();
     }
     //myFunction(): ReferenceError: myFunction is not defined.
     ---

     `},{title:"How do you invoke javascript code in an iframe from parent page",type:5,content:`
     Initially iFrame needs to be accessed using either \`document.getElementBy\` or \`window.frames\`. After that \`contentWindow\` property of iFrame gives the access for targetFunction

     ---javascript
     document.getElementById("targetFrame").contentWindow.targetFunction();
     window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox
     ---

     `},{title:"How do get the timezone offset from date",type:5,content:`
     You can use the \`getTimezoneOffset\` method of the date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC

     ---javascript
     var offset = new Date().getTimezoneOffset();
     console.log(offset); // -480
     ---

     `},{title:"How do you load CSS and JS files dynamically",type:5,content:`
     You can create both link and script elements in the DOM and append them as child to head tag. Let's create a function to add script and style resources as below,

     ---javascript
     function loadAssets(filename, filetype) {
       if (filetype == "css") {
         // External CSS file
         var fileReference = document.createElement("link");
         fileReference.setAttribute("rel", "stylesheet");
         fileReference.setAttribute("type", "text/css");
         fileReference.setAttribute("href", filename);
       } else if (filetype == "js") {
         // External JavaScript file
         var fileReference = document.createElement("script");
         fileReference.setAttribute("type", "text/javascript");
         fileReference.setAttribute("src", filename);
       }
       if (typeof fileReference != "undefined")
         document.getElementsByTagName("head")[0].appendChild(fileReference);
     }
     ---

     `},{title:"What are the different methods to find HTML elements in DOM",type:5,content:`
     If you want to access any element in an HTML page, you need to start with accessing the document object. Later you can use any of the below methods to find the HTML element,

     1. document.getElementById(id): It finds an element by Id
     2. document.getElementsByTagName(name): It finds an element by tag name
     3. document.getElementsByClassName(name): It finds an element by class name

     `},{type:5,title:"What is jQuery",content:`

			jQuery is a popular cross - browser JavaScript library that provides Document Object Model(DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers.It is widely famous with its philosophy of \u201CWrite less, do more\u201D. For example, you can display welcome message on the page load using jQuery as below,

				--- javascript
		$(document).ready(function () {
			// It selects the document and apply the function on page load
			alert("Welcome to jQuery world");
		});
		---

     ** Note:** You can download it from jquery's official site or install it from CDNs, like google.

			`},{title:"What is V8 JavaScript engine",type:5,content:`
     V8 is an open source high - performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project.It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12 +, and Linux systems that use x64, IA - 32, ARM, or MIPS processors.
     ** Note:** It can run standalone, or can be embedded into any C++ application.

     `},{title:"Why do we call javascript as dynamic language",type:5,content:`
     JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned / reassigned with values of all types.

     --- javascript
		let age = 50; // age is a number now
		age = "old"; // age is a string now
		age = true; // age is a boolean
		---

			`},{title:"What is a void operator",type:5,content:`
		The \`void\` operator evaluates the given expression and then returns undefined(i.e, without returning value). The syntax would be as below,

     ---javascript
     void expression;
     void expression;
     ---

     Let's display a message without any redirection or reload

     ---javascript
     <a href="javascript:void(alert('Welcome to JS world'))">
       Click here to see a message
     </a>
     ---

     **Note:** This operator is often used to obtain the undefined primitive value, using "void(0)".

     `},{title:"How to set the cursor to wait",type:5,content:`
     The cursor can be set to wait in JavaScript by using the property "cursor". Let's perform this behavior on page load using the below function.

     ---javascript
     function myFunction() {
       window.document.body.style.cursor = "wait";
     }
     ---

     and this function invoked on page load

     ---html
     <body onload="myFunction()"></body>
     ---

     `},{title:"How do you create an infinite loop",type:5,content:`
     You can create infinite loops using for and while loops without using any expressions. The for loop construct or syntax is better approach in terms of ESLint and code optimizer tools,

     ---javascript
     for (;;) {}
     while (true) {}
     ---

     `},{title:"Why do you need to avoid with statement",type:5,content:`
     JavaScript's with statement was intended to provide a shorthand for writing recurring accesses to objects. So it can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. Let's take an example where it is used to avoid redundancy when accessing an object several times.

     ---javascript
     a.b.c.greeting = "welcome";
     a.b.c.age = 32;
     ---

     Using \`with\` it turns this into:

     ---javascript
     with (a.b.c) {
       greeting = "welcome";
       age = 32;
     }
     ---

     But this \`with\` statement creates performance problems since one cannot predict whether an argument will refer to a real variable or to a property inside the with argument.

     `},{title:"What is the output of below for loops",type:5,content:`
     ---javascript
     for (var i = 0; i < 4; i++) {
       // global scope
       setTimeout(() => console.log(i));
     }

     for (let i = 0; i < 4; i++) {
       // block scope
       setTimeout(() => console.log(i));
     }
     ---

     The output of the above for loops is 4 4 4 4 and 0 1 2 3

     **Explanation:** Due to the event queue/loop of javascript, the \`setTimeout\` callback function is called after the loop has been executed. Since the variable i is declared with the \`var\` keyword it became a global variable and the value was equal to 4 using iteration when the time \`setTimeout\` function is invoked. Hence, the output of the first loop is \`4 4 4 4\`.

     Whereas in the second loop, the variable i is declared as the \`let\` keyword it becomes a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is \`0 1 2 3\`.

     `},{title:"List down some of the features of ES6",type:5,content:`
     Below are the list of some new features of ES6,

     1. Support for constants or immutable variables
     2. Block-scope support for variables, constants and functions
     3. Arrow functions
     4. Default parameters
     5. Rest and Spread Parameters
     6. Template Literals
     7. Multi-line Strings
     8. Destructuring Assignment
     9. Enhanced Object Literals
     10. Promises
     11. Classes
     12. Modules

     `},{type:5,title:"What is ES6",content:`

		ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6(ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.

     `},{title:"Can I redeclare let and const variables",type:5,content:`
	No, you cannot redeclare let and const variables.If you do, it throws below error

	--- bash
     Uncaught SyntaxError: Identifier 'someVariable' has already been declared
	---

     ** Explanation:** The variable declaration with \`var\` keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both var and let/const variables.

     ---javascript
     var name = "John";
     function myFunc() {
       var name = "Nick";
       var name = "Abraham"; // Re-assigned in the same function block
       alert(name); // Abraham
     }
     myFunc();
     alert(name); // John
     ---

     The block-scoped multi-declaration throws syntax error,

     ---javascript
     let name = "John";
     function myFunc() {
       let name = "Nick";
       let name = "Abraham"; // Uncaught SyntaxError: Identifier 'name' has already been declared
       alert(name);
     }

     myFunc();
     alert(name);
     ---

     `},{title:"Is const variable makes the value immutable",type:5,content:`
     No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

     ---javascript
     const userList = [];
     userList.push("John"); // Can mutate even though it can't re-assign
     console.log(userList); // ['John']
     ---

     `},{title:"What are default parameters",type:5,content:`
     In E5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

     ---javascript
     //ES5
     var calculateArea = function (height, width) {
       height = height || 50;
       width = width || 60;

       return width * height;
     };
     console.log(calculateArea()); //300
     ---

     The default parameters makes the initialization more simpler,

     ---javascript
     //ES6
     var calculateArea = function (height = 50, width = 60) {
       return width * height;
     };

     console.log(calculateArea()); //300
     ---

     `},{title:"What are template literals",type:5,content:`
     Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (\`) character instead of double or single quotes.
     In E6, this feature enables using dynamic expressions as below,

     ---javascript
     var greeting = \`Welcome to JS World, Mr. \${firstName} \${lastName}.\`;
     ---

     In ES5, you need break string like below,

     ---javascript
     var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.\`
     ---

     **Note:** You can use multi-line strings and string interpolation features with template literals.

     `},{title:"How do you write multi-line strings in template literals",type:5,content:`
     In ES5, you would have to use newline escape characters('\\n') and concatenation symbols(+) in order to get multi-line strings.

     ---javascript
     console.log("This is string sentence 1
" + "This is string sentence 2");
     ---

     Whereas in ES6, You don't need to mention any newline sequence character,

     ---javascript
     console.log(\`This is string sentence
     'This is string sentence 2\`);
     ---

     `},{title:"What are nesting templates",type:5,content:`
     The nesting template is a feature supported within template literals syntax to allow inner backticks inside a placeholder \${ } within the template. For example, the below nesting template is used to display the icons based on user permissions whereas outer template checks for platform type,

     ---javascript
     const iconStyles = \`icon \${isMobilePlatform()
						? ""
						: \`icon-\${user.isAuthorized ? "submit" : "disabled"}\`
     }\`;
     ---

     You can write the above use case without nesting template features as well. However, the nesting template feature is more compact and readable.

     ---javascript
     //Without nesting templates
      const iconStyles = \`icon \${isMobilePlatform() ? '' :
								(user.isAuthorized ? 'icon-submit' : 'icon-disabled'}\`;
     ---

     `},{title:"What are tagged templates",type:5,content:`
     Tagged templates are the advanced form of templates in which tags allow you to parse template literals with a function. The tag function accepts the first parameter as an array of strings and remaining parameters as expressions. This function can also return manipulated strings based on parameters. Let's see the usage of this tagged template behavior of an IT professional skill set in an organization,

     ---javascript
     var user1 = "John";
     var skill1 = "JavaScript";
     var experience1 = 15;

     var user2 = "Kane";
     var skill2 = "JavaScript";
     var experience2 = 5;

     function myInfoTag(strings, userExp, experienceExp, skillExp) {
       var str0 = strings[0]; // "Mr/Ms. "
       var str1 = strings[1]; // " is a/an "
       var str2 = strings[2]; // "in"

       var expertiseStr;
       if (experienceExp > 10) {
         expertiseStr = "expert developer";
       } else if (skillExp > 5 && skillExp <= 10) {
         expertiseStr = "senior developer";
       } else {
         expertiseStr = "junior developer";
       }

       return \`\${str0}\${userExp}\${str1}\${expertiseStr}\${str2}\${skillExp}\`;
     }

     var output1 = myInfoTag\`Mr/Ms. \${user1} is a/an \${experience1} in \${skill1}\`;
     var output2 = myInfoTag\`Mr/Ms. \${user2} is a/an \${experience2} in \${skill2}\`;

     console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript
     console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript
     ---

     `},{type:5,title:"What are raw strings",content:`

                ES6 provides a raw strings feature using the \`String.raw()\` method which is used to get the raw string form of template strings. This feature allows you to access the raw strings as they were entered, without processing escape sequences. For example, the usage would be as below,

     ---javascript
     var calculationString = String.raw\`The sum of numbers is 
${1+2+3+4}!\`;
     console.log(calculationString); // The sum of numbers is 10
     ---

     If you don't use raw strings, the newline character sequence will be processed by displaying the output in multiple lines

     ---javascript
     var calculationString = \`The sum of numbers is 
${1+2+3+4}!\`;
     console.log(calculationString);
     // The sum of numbers is
     // 10
     ---

     Also, the raw property is available on the first argument to the tag function

     ---javascript
     function tag(strings) {
       console.log(strings.raw[0]);
     }
     ---

     `},{title:"What is destructuring assignment",type:5,content:`
     The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
     Let's get the month values from an array using destructuring assignment

     ---javascript
     var [one, two, three] = ["JAN", "FEB", "MARCH"];

     console.log(one); // "JAN"
     console.log(two); // "FEB"
     console.log(three); // "MARCH"
     ---

     and you can get user properties of an object using destructuring assignment,

     ---javascript
     var { name, age } = { name: "John", age: 32 };

     console.log(name); // John
     console.log(age); // 32
     ---

     `},{title:"What are default values in destructuring assignment",type:5,content:`
     A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,

     **Arrays destructuring:**

     ---javascript
     var x, y, z;

     [x = 2, y = 4, z = 6] = [10];
     console.log(x); // 10
     console.log(y); // 4
     console.log(z); // 6
     ---

     **Objects destructuring:**

     ---javascript
     var { x = 2, y = 4, z = 6 } = { x: 10 };

     console.log(x); // 10
     console.log(y); // 4
     console.log(z); // 6
     ---

     `},{title:"How do you swap variables in destructuring assignment",type:5,content:`
     If you don't use destructuring assignment, swapping two values requires a temporary variable. Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression. Let's swap two number variables in array destructuring assignment,

     ---javascript
     var x = 10,
       y = 20;

     [x, y] = [y, x];
     console.log(x); // 20
     console.log(y); // 10
     ---

     `},{title:"What are enhanced object literals",type:5,content:`
     Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.

     ---javascript
     //ES6
     var x = 10,
       y = 20;
     obj = { x, y };
     console.log(obj); // {x: 10, y:20}
     //ES5
     var x = 10,
       y = 20;
     obj = { x: x, y: y };
     console.log(obj); // {x: 10, y:20}
     ---

     `},{title:"What are dynamic imports",type:5,content:`
     The dynamic imports using \`import()\` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in [stage4 proposal](https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience.
     The syntax of dynamic imports would be as below,

     ---javascript
     import("./Module").then((Module) => Module.method());
     ---

     `},{title:"What are the use cases for dynamic imports",type:5,content:`
     Below are some of the use cases of using dynamic imports over static imports,

     1. Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser

     ---javascript
     if (isLegacyBrowser()) {
         import(\xB7\xB7\xB7)
         .then(\xB7\xB7\xB7);
     }
     ---

     1. Compute the module specifier at runtime. For example, you can use it for internationalization.

     ---javascript
     import(\`messages_\${getLocale()}.js\`).then(\xB7\xB7\xB7);
     ---

     1. Import a module from within a regular script instead a module.

     `},{type:5,title:"What are typed arrays",content:`

                Typed arrays are array - like objects from ECMAScript 6 API for handling binary data.JavaScript provides 8 Typed array types,

                    1. Int8Array: An array of 8 - bit signed integers
            2. Int16Array: An array of 16 - bit signed integers
            3. Int32Array: An array of 32 - bit signed integers
            4. Uint8Array: An array of 8 - bit unsigned integers
            5. Uint16Array: An array of 16 - bit unsigned integers
            6. Uint32Array: An array of 32 - bit unsigned integers
            7. Float32Array: An array of 32 - bit floating point numbers
            8. Float64Array: An array of 64 - bit floating point numbers

     For example, you can create an array of 8 - bit signed integers as below

            --- javascript
            const a = new Int8Array();
            // You can pre-allocate n bytes
            const bytes = 1024;
            const a = new Int8Array(bytes);
            ---

                `},{title:"What are the advantages of module loaders",type:5,content:`
     The module loaders provides the below features,

                1. Dynamic loading
            2. State isolation
            3. Global namespace isolation
     4. Compilation hooks
            5. Nested virtualization

                `},{type:5,title:"What is collation",content:`

     Collation is used for sorting a set of strings and searching within a set of strings. It is parameterized by locale and aware of Unicode. Let's take comparison and sorting features,

     1. **Comparison:**

     ---javascript
     var list = ["\xE4", "a", "z"]; // In German,  "\xE4" sorts with "a" Whereas in Swedish, "\xE4" sorts after "z"
     var l10nDE = new Intl.Collator("de");
     var l10nSV = new Intl.Collator("sv");
     console.log(l10nDE.compare("\xE4", "z") === -1); // true
     console.log(l10nSV.compare("\xE4", "z") === +1); // true
     ---

     1. **Sorting:**

     ---javascript
     var list = ["\xE4", "a", "z"]; // In German,  "\xE4" sorts with "a" Whereas in Swedish, "\xE4" sorts after "z"
     var l10nDE = new Intl.Collator("de");
     var l10nSV = new Intl.Collator("sv");
     console.log(list.sort(l10nDE.compare)); // [ "a", "\xE4", "z" ]
     console.log(list.sort(l10nSV.compare)); // [ "a", "z", "\xE4" ]
     ---

     `},{title:"What is for...of statement",type:5,content:`
     The for...of statement creates a loop iterating over iterable objects or elements such as built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. The basic usage of for...of statement on arrays would be as below,

     ---javascript
     let arrayIterable = [10, 20, 30, 40, 50];

     for (let value of arrayIterable) {
       value++;
       console.log(value); // 11 21 31 41 51
     }
     ---

     `},{title:"What is the output of below spread operator array",type:5,content:`
     ---javascript
     [..."John Resig"];
     ---

     The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g']
     **Explanation:** The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

     `},{type:5,title:"Is PostMessage secure",content:`

                    Yes, postMessages can be considered very secure as long as the programmer/ developer is careful about checking the origin and source of an arriving message.But if you try to send / receive a message without verifying its source will create cross - site scripting attacks.

     `},{title:"What are the problems with postmessage target origin as wildcard",type:5,content:`
     The second argument of postMessage method specifies which origin is allowed to receive the message.If you use the wildcard \u201C*\u201D as an argument then any origin is allowed to receive the message.In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message.If the target window has been navigated to another origin, the other origin would receive the data.Hence, this may lead to XSS vulnerabilities.

     --- javascript
            targetWindow.postMessage(message, "*");
            ---

                `},{title:"How do you avoid receiving postMessages from attackers",type:5,content:`
     Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker\u2019s origin, which gives an impression that the receiver received the message from the actual sender\u2019s window.You can avoid this issue by validating the origin of the message on the receiver's end using the \u201Cmessage.origin\u201D attribute. For examples, let's check the sender's origin [http://www.some-sender.com](http://www.some-sender.com) on receiver side [www.some-receiver.com](www.some-receiver.com),

            --- javascript
            //Listener on http://www.some-receiver.com/
            window.addEventListener("message", function (message) {
                if (/^http:/ / www.some - sender.com$ /.test(message.origin)){
                console.log('You received the data from valid sender', message.data);
            }
        });
        ---

            `},{title:"Can I avoid using postMessages completely",type:5,content:`
     You cannot avoid using postMessages completely(or 100 %).Even though your application doesn\u2019t use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service.So your application might be using postMessage without your knowledge.

     `},{title:"Is postMessages synchronous",type:5,content:`
     The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all other modern browsers(i.e, IE9 +, Firefox, Chrome, Safari).Due to this asynchronous behaviour, we use a callback mechanism when the postMessage is returned.

     `},{title:"What paradigm is Javascript",type:5,content:`
     JavaScript is a multi - paradigm language, supporting imperative / procedural programming, Object - Oriented Programming and functional programming.JavaScript supports Object - Oriented Programming with prototypical inheritance.

     `},{title:"What is the difference between internal and external javascript",type:5,content:`
            ** Internal JavaScript:** It is the source code within the script tag.
     ** External JavaScript:** The source code is stored in an external file(stored with .js extension) and referred with in the tag.

     `},{title:"Is JavaScript faster than server side script",type:5,content:`
        Yes, JavaScript is faster than server side script.Because JavaScript is a client - side script it does not require any web server\u2019s help for its computation or calculation.So JavaScript is always faster than any server - side script like ASP, PHP, etc.

     `},{title:"How do you get the status of a checkbox",type:5,content:`
     You can apply the \`checked\` property on the selected checkbox in the DOM. If the value is \`True\` means the checkbox is checked otherwise it is unchecked. For example, the below HTML checkbox element can be access using javascript as below,

     ---html
     <input type="checkbox" name="checkboxname" value="Agree" /> Agree the
     conditions<br />
     ---

     ---javascript
     console.log(document.getElementById(\u2018checkboxname\u2019).checked); // true or false
     ---

     `},{title:"What is the purpose of double tilde operator",type:5,content:`
     The double tilde operator(~~) is known as double NOT bitwise operator. This operator is going to be a quicker substitute for Math.floor().

     `},{title:"How do you convert character to ASCII code",type:5,content:`
     You can use the \`String.prototype.charCodeAt()\` method to convert string characters to ASCII numbers. For example, let's find ASCII code for the first letter of 'ABC' string,

     ---javascript
     "ABC".charCodeAt(0); // returns 65
     ---

     Whereas \`String.fromCharCode()\` method converts numbers to equal ASCII characters.

     ---javascript
     String.fromCharCode(65, 66, 67); // returns 'ABC'
     ---

     `},{type:5,title:"What is ArrayBuffer",content:`

            An ArrayBuffer object is used to represent a generic, fixed - length raw binary data buffer.You can create it as below,

                --- javascript
        let buffer = new ArrayBuffer(16); // create a buffer of length 16
        alert(buffer.byteLength); // 16
        ---

            To manipulate an ArrayBuffer, we need to use a \u201Cview\u201D object.

     --- javascript
        //Create a DataView referring to the buffer
        let view = new DataView(buffer);
        ---

            `},{title:"What is the output of below string expression",type:5,content:`
        --- javascript
        console.log("Welcome to JS world"[0]);
        ---

            The output of the above expression is "W".
     ** Explanation:** The bracket notation with specific index on a string returns the character at a specific location.Hence, it returns the character "W" of the string.Since this is not supported in IE7 and below versions, you may need to use the.charAt() method to get the desired result.

     `},{title:"What is the purpose of Error object",type:5,content:`
     The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur.The Error object can also be used as a base object for user - defined exceptions.The syntax of error object would be as below,

            --- javascript
        new Error([message[, fileName[, lineNumber]]])
        ---

            You can throw user defined exceptions or errors using Error object in try...catch block as below,

                --- javascript
        try {
            if (withdraw > balance)
                throw new Error("Oops! You don't have enough balance");
        } catch (e) {
            console.log(e.name + ": " + e.message);
        }
        ---

            `},{title:"What is the purpose of EvalError object",type:5,content:`
     The EvalError object indicates an error regarding the global \`eval()\` function. Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. The syntax of this expression would be as below,

     ---javascript
     new EvalError([message[, fileName[, lineNumber]]])
     ---

     You can throw EvalError with in try...catch block as below,

     ---javascript
     try {
       throw new EvalError('Eval function error', 'someFile.js', 100);
     } catch (e) {
       console.log(e.message, e.name, e.fileName);              // "Eval function error", "EvalError", "someFile.js"
     ---

     `},{title:"What are the list of cases error thrown from non-strict mode to strict mode",type:5,content:`
     When you apply 'use strict'; syntax, some of the below cases will throw a SyntaxError before executing the script

     1. When you use Octal syntax

     ---javascript
     var n = 022;
     ---

     1. Using \`with\` statement
     2. When you use delete operator on a variable name
     3. Using eval or arguments as variable or function argument name
     4. When you use newly reserved keywords
     5. When you declare a function in a block

     ---javascript
     if (someCondition) {
       function f() {}
     }
     ---

     Hence, the errors from above cases are helpful to avoid errors in development/production environments.

     `},{title:"Do all objects have prototypes",type:5,content:`
     No. All objects have prototypes except for the base object which is created by the user, or an object that is created using the new keyword.

     `},{title:"What is the difference between a parameter and an argument",type:5,content:`
     Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function

     ---javascript
     function myFunction(parameter1, parameter2, parameter3) {
       console.log(arguments[0]); // "argument1"
       console.log(arguments[1]); // "argument2"
       console.log(arguments[2]); // "argument3"
     }
     myFunction("argument1", "argument2", "argument3");
     ---

     `},{title:"What is the purpose of some method in arrays",type:5,content:`
     The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,

     ---javascript
     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

     var odd = (element) => element % 2 !== 0;

     console.log(array.some(odd)); // true (the odd element exists)
     ---

     `},{title:"How do you combine two or more arrays",type:5,content:`
     The concat() method is used to join two or more arrays by returning a new array containing all the elements. The syntax would be as below,

     ---javascript
     array1.concat(array2, array3, ..., arrayX)
     ---

     Let's take an example of array's concatenation with veggies and fruits arrays,

     ---javascript
     var veggies = ["Tomato", "Carrot", "Cabbage"];
     var fruits = ["Apple", "Orange", "Pears"];
     var veggiesAndFruits = veggies.concat(fruits);
     console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
     ---

     `},{title:"What is the difference between Shallow and Deep copy",type:5,content:`
     There are two ways to copy an object,

     **Shallow Copy:**
     Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

     **Example**

     ---javascript
     var empDetails = {
       name: "John",
       age: 25,
       expertise: "Software Developer",
     };
     ---

     to create a duplicate

     ---javascript
     var empDetailsShallowCopy = empDetails; //Shallow copying!
     ---

     if we change some property value in the duplicate one like this:

     ---javascript
     empDetailsShallowCopy.name = "Johnson";
     ---

     The above statement will also change the name of \`empDetails\`, since we have a shallow copy. That means we're losing the original data as well.

     **Deep copy:**
     A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

     **Example**

     ---javascript
     var empDetails = {
       name: "John",
       age: 25,
       expertise: "Software Developer",
     };
     ---

     Create a deep copy by using the properties from the original object into new variable

     ---javascript
     var empDetailsDeepCopy = {
       name: empDetails.name,
       age: empDetails.age,
       expertise: empDetails.expertise,
     };
     ---

     Now if you change \`empDetailsDeepCopy.name\`, it will only affect \`empDetailsDeepCopy\` & not \`empDetails\`

     `},{title:"How do you create specific number of copies of a string",type:5,content:`
     The \`repeat()\` method is used to construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together. Remember that this method has been added to the ECMAScript 2015 specification.
     Let's take an example of Hello string to repeat it 4 times,

     ---javascript
     "Hello".repeat(4); // 'HelloHelloHelloHello'
     `},{title:"How do you return all matching strings against a regular expression",type:5,content:`
		The \`matchAll()\` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,

     ---javascript
     let regexp = /Hello(\\d?))/g;
     let greeting = "Hello1Hello2Hello3";

     let greetingList = [...greeting.matchAll(regexp)];

     console.log(greetingList[0]); //Hello1
     console.log(greetingList[1]); //Hello2
     console.log(greetingList[2]); //Hello3
     ---

     `},{title:"How do you trim a string at the beginning or ending",type:5,content:`
     The \`trim\` method of string prototype is used to trim on both sides of a string. But if you want to trim especially at the beginning or ending of the string then you can use \`trimStart/trimLeft\` and \`trimEnd/trimRight\` methods. Let's see an example of these methods on a greeting message,

     ---javascript
     var greeting = "   Hello, Goodmorning!   ";

     console.log(greeting); // "   Hello, Goodmorning!   "
     console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
     console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

     console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
     console.log(greeting.trimRight()); // "   Hello, Goodmorning!"
     ---

     `},{title:"What is the output of below console statement with unary operator",type:5,content:`
     Let's take console statement with unary operator as given below,

     ---javascript
     console.log(+"Hello");
     ---

     The output of the above console log statement returns NaN. Because the element is prefixed by the unary operator and the JavaScript interpreter will try to convert that element into a number type. Since the conversion fails, the value of the statement results in NaN value.

     `},{title:"Does javascript uses mixins",type:5,content:`
     Mixin is a generic object-oriented programming term - is a class containing methods that can be used by other classes without a need to inherit from it. In JavaScript we can only inherit from a single object. ie. There can be only one \`[[prototype]]\` for an object.

     But sometimes we require to extend more than one, to overcome this we can use Mixin which helps to copy methods to the prototype of another class.

     Say for instance, we've two classes \`User\` and \`CleanRoom\`. Suppose we need to add \`CleanRoom\` functionality to \`User\`, so that user can clean the room at demand. Here's where concept called mixins comes into picture.

     ---javascript
     // mixin
     let cleanRoomMixin = {
       cleanRoom() {
         alert(\`Hello \${this.name}, your room is clean now\`);
       },
       sayBye() {
         alert(\`Bye \${this.name}\`);
       },
     };

     // usage:
     class User {
       constructor(name) {
         this.name = name;
       }
     }

     // copy the methods
     Object.assign(User.prototype, cleanRoomMixin);

     // now User can clean the room
     new User("Dude").cleanRoom(); // Hello Dude, your room is clean now!
     ---

     `},{type:5,title:"What is a thunk function",content:`

            A thunk is just a function which delays the evaluation of the value.It doesn\u2019t take any arguments but gives the value whenever you invoke the thunk.i.e, It is used not to execute now but it will be sometime in the future.Let's take a synchronous example,

        --- javascript
        const add = (x, y) => x + y;

        const thunk = () => add(2, 3);

        thunk(); // 5
        ---

            `},{title:"What are asynchronous thunks",type:5,content:`
     The asynchronous thunks are useful to make network requests.Let's see an example of network requests,

        --- javascript
        function fetchData(fn) {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
                .then((response) => response.json())
                .then((json) => fn(json));
        }

        const asyncThunk = function () {
            return fetchData(function getData(data) {
                console.log(data);
            });
        };

        asyncThunk();
        ---

            The \`getData\` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

     `},{title:"What is the output of below function calls",type:5,content:`
     **Code snippet:**

     ---javascript
     const circle = {
       radius: 20,
       diameter() {
         return this.radius * 2;
       },
       perimeter: () => 2 * Math.PI * this.radius,
     };
     ---
     
     ---javascript
     console.log(circle.diameter());
     console.log(circle.perimeter());
     ---

     **Output:**

     The output is 40 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The \`this\` keyword of a regular function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers to the surrounding scope which is a window object. Since there is no radius property on window objects it returns an undefined value and the multiple of number value returns NaN value.

     `},{title:"How to remove all line breaks from a string",type:5,content:`
     The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.

     ---javascript
     function remove_linebreaks( var message ) {
         return message.replace( /[\r
]+/gm, "" );
     }
     ---

     In the above expression, g and m are for global and multiline flags.

     `},{title:"What is the difference between reflow and repaint",type:5,content:`
     A _repaint_ occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A _reflow_ involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.

     `},{title:"What happens with negating an array",type:5,content:`
     Negating an array with \`!\` character will coerce the array into a boolean. Since Arrays are considered to be truthy So negating it will return \`false\`.

     ---javascript
     console.log(![]); // false
     ---

     `},{title:"What happens if we add two arrays",type:5,content:`
     If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,

     ---javascript
     console.log(["a"] + ["b"]); // "ab"
     console.log([] + []); // ""
     console.log(![] + []); // "false", because ![] returns false.
     ---

     `},{title:"What is the output of prepend additive operator on falsy values",type:5,content:`
     If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, ""), the falsy value converts to a number value zero. Let's display them on browser console as below,

     ---javascript
     console.log(+null); // 0
     console.log(+undefined); // NaN
     console.log(+false); // 0
     console.log(+NaN); // NaN
     console.log(+""); // 0
     ---

     `},{title:"How do you create self string using special characters",type:5,content:`
     The self string can be formed with the combination of \`[]()!+\` characters. You need to remember the below conventions to achieve this pattern.

     1. Since Arrays are truthful values, negating the arrays will produce false: ![] === false
     2. As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
     3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1

     By applying the above rules, we can derive below conditions

     ---javascript
     (![] + [] === "false" + !+[]) === 1;
     ---

     Now the character pattern would be created as below,

     ---javascript
           s               e               l               f
      ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^

      (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
      ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
     (![] + [])[+!+[]+!+[]+!+[]] +
     (![] + [])[+!+[]+!+[]+!+[]+!+[]] +
     (![] + [])[+!+[]+!+[]] +
     (![] + [])[+[]]
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]
     ---

     `},{title:"How do you remove falsy values from an array",type:5,content:`
     You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and "") from the array.

     ---javascript
     const myArray = [false, null, 1, 5, undefined];
     myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
     ---

     `},{title:"How do you get unique values of an array",type:5,content:`
     You can get unique values of an array with the combination of \`Set\` and rest expression/spread(...) syntax.

     ---javascript
     console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
     ---

     `},{title:"What is destructuring aliases",type:5,content:`
     Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a \`: newName\` to specify a name for the variable. This process is called destructuring aliases.

     ---javascript
     const obj = { x: 1 };
     // Grabs obj.x as as { otherName }
     const { x: otherName } = obj;
     ---

     `},{title:"How do you map the array values without using map method",type:5,content:`
     You can map the array values without using the \`map\` method by just using the \`from\` method of Array. Let's map city names from Countries array,

     ---javascript
     const countries = [
       { name: "India", capital: "Delhi" },
       { name: "US", capital: "Washington" },
       { name: "Russia", capital: "Moscow" },
       { name: "Singapore", capital: "Singapore" },
       { name: "China", capital: "Beijing" },
       { name: "France", capital: "Paris" },
     ];

     const cityNames = Array.from(countries, ({ capital }) => capital);
     console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
     ---

     `},{type:5,title:"How do you empty an array",content:`

     You can empty an array quickly by setting the array length to zero.

     ---javascript
     let cities = ["Singapore", "Delhi", "London"];
     cities.length = 0; // cities becomes []
     ---

     `},{title:"How do you rounding numbers to certain decimals",type:5,content:`
     You can round numbers to a certain number of decimals using \`toFixed\` method from native javascript.

     ---javascript
     let pie = 3.141592653;
     pie = pie.toFixed(3); // 3.142
     ---

     `},{title:"What is the easiest way to convert an array to an object",type:5,content:`
     You can convert an array to an object with the same data using spread(...) operator.

     ---javascript
     var fruits = ["banana", "apple", "orange", "watermelon"];
     var fruitsObject = { ...fruits };
     console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}
     ---

     `},{title:"How do you create an array with some data",type:5,content:`
     You can create an array with some data or an array with the same values using \`fill\` method.

     ---javascript
     var newArray = new Array(5).fill("0");
     console.log(newArray); // ["0", "0", "0", "0", "0"]
     ---

     `},{title:"What are the placeholders from console object",type:5,content:`
     Below are the list of placeholders available from console object,

     1. %o \u2014 It takes an object,
     2. %s \u2014 It takes a string,
     3. %d \u2014 It is used for a decimal or integer
        These placeholders can be represented in the console.log as below

     ---javascript
     const user = { name: "John", id: 1, city: "Delhi" };
     console.log(
       "Hello %s, your details %o are available in the object form",
       "John",
       user
     ); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object
     ---

     `},{title:"Is it possible to add CSS to console messages",type:5,content:`
     Yes, you can apply CSS styles to console messages similar to html text on the web page.

     ---javascript
     console.log(
       "%c The text has blue color, with large font and red background",
       "color: blue; font-size: x-large; background: red"
     );
     ---

     The text will be displayed as below,
     ![Screenshot](images/console-css.png)

     **Note:** All CSS styles can be applied to console messages.

     `},{title:"What is the purpose of dir method of console object",type:5,content:`
     The \`console.dir()\` is used to display an interactive list of the properties of the specified JavaScript object as JSON.

     ---javascript
     const user = { name: "John", id: 1, city: "Delhi" };
     console.dir(user);
     ---

     The user object displayed in JSON representation
     ![Screenshot](images/console-dir.png)

     `},{title:"Is it possible to debug HTML elements in console",type:5,content:`
     Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.

     ---javascript
     const element = document.getElementsByTagName("body")[0];
     console.log(element);
     ---

     It prints the HTML element in the console,

     ![Screenshot](images/console-html.png)

     `},{title:"How do you display data in a tabular format using console object",type:5,content:`
     The \`console.table()\` is used to display data in the console in a tabular format to visualize complex arrays or objects.

     ---js
     const users = [
       { name: "John", id: 1, city: "Delhi" },
       { name: "Max", id: 2, city: "London" },
       { name: "Rod", id: 3, city: "Paris" },
     ];
     console.table(users);
     ---

     The data visualized in a table format,

     ![Screenshot](images/console-table.png)
     **Not:** Remember that \`console.table()\` is not supported in IE.

     `},{title:"How do you verify that an argument is a Number or not",type:5,content:`
     The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.

     ---javascript
     function isNumber(n) {
       return !isNaN(parseFloat(n)) && isFinite(n);
     }
     ---

     `},{title:"How do you create copy to clipboard button",type:5,content:`
     You need to select the content(using .select() method) of the input element and execute the copy command with execCommand (i.e, execCommand('copy')). You can also execute other system commands like cut and paste.

     ---javascript
     document.querySelector("#copy-button").onclick = function () {
       // Select the content
       document.querySelector("#copy-input").select();
       // Copy to the clipboard
       document.execCommand("copy");
     };
     ---

     `},{title:"What is the shortcut to get timestamp",type:5,content:`
     You can use \`new Date().getTime()\` to get the current timestamp. There is an alternative shortcut to get the value.

     ---javascript
     console.log(+new Date());
     console.log(Date.now());
     ---

     `},{title:"How do you flattening multi dimensional arrays",type:5,content:`
     Flattening bi-dimensional arrays is trivial with Spread operator.

     ---javascript
     const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
     const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ---

     But you can make it work with multi-dimensional arrays by recursive calls,

     ---javascript
     function flattenMultiArray(arr) {
       const flattened = [].concat(...arr);
       return flattened.some((item) => Array.isArray(item))
         ? flattenMultiArray(flattened)
         : flattened;
     }
     const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
     const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ---
     
     Also you can use the \`flat\` method of Array.
     
     ---javascript
     const arr = [1, [2,3], 4, 5, [6,7]];
     const fllattenArr = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]
     
     // And for multiDemensional arrays
     const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
     const oneStepFlat = multiDimensionalArr.flat(1); // [11, 22, 33, 44, [55, 66, [77, [88]], 99]]
     const towStep = multiDimensionalArr.flat(2); // [11, 22, 33, 44, 55, 66, [77, [88]], 99]
     const fullyFlatArray = multiDimensionalArr.flat(Infinity); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
     ---

     `},{title:"What is the easiest multi condition checking",type:5,content:`
     You can use \`indexOf\` to compare input with multiple values instead of checking each value as one condition.

     ---javascript
     // Verbose approach
     if (
       input === "first" ||
       input === 1 ||
       input === "second" ||
       input === 2
     ) {
       someFunction();
     }
     // Shortcut
     if (["first", 1, "second", 2].indexOf(input) !== -1) {
       someFunction();
     }
     ---

     `},{title:"How do you capture browser back button",type:5,content:`
     The \`window.onbeforeunload\` method is used to capture browser back button events. This is helpful to warn users about losing the current data.

     ---javascript
     window.onbeforeunload = function () {
       alert("You work will be lost");
     };
     ---

     `},{title:"How do you disable right click in the web page",type:5,content:`
     The right click on the page can be disabled by returning false from the \`oncontextmenu\` attribute on the body element.

     ---html
     <body oncontextmenu="return false;"></body>
     ---

     `},{type:5,title:"What are wrapper objects",content:`

            Primitive Values like string, number and boolean don't have properties and methods but they are temporarily converted or coerced to an object(Wrapper object) when you try to perform actions on them. For example, if you apply toUpperCase() method on a primitive string value, it does not throw an error but returns uppercase of the string.

        --- javascript
        let name = "john";

        console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());
        ---

            i.e, Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String, Number, Boolean, Symbol and BigInt.

     `},{type:5,title:"What is AJAX",content:`

			AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously.i.e.We can send data to the server and get data from the server without reloading the web page.

     `},{title:"What are the different ways to deal with Asynchronous Code",type:5,content:`
     Below are the list of different ways to deal with Asynchronous code.

     1. Callbacks
		2. Promises
		3. Async / await
			4. Third - party libraries such as async.js, bluebird etc

				`},{title:"How to cancel a fetch request",type:5,content:`
     Until a few days back, One shortcoming of native promises is no direct way to cancel a fetch request.But the new \`AbortController\` from js specification allows you to use a signal to abort one or multiple fetch calls.
     The basic flow of cancelling a fetch request would be as below,

     1. Create an \`AbortController\` instance
     2. Get the signal property of an instance and pass the signal as a fetch option for signal
     3. Call the AbortController's abort property to cancel all fetches that use that signal
        For example, let's pass the same signal to multiple fetch calls will cancel all requests with that signal,

     ---javascript
     const controller = new AbortController();
     const { signal } = controller;

     fetch("http://localhost:8000", { signal })
       .then((response) => {
         console.log(\`Request 1 is complete!\`);
       })
       .catch((e) => {
         if (e.name === "AbortError") {
           // We know it's been canceled!
         }
       });

     fetch("http://localhost:8000", { signal })
       .then((response) => {
         console.log(\`Request 2 is complete!\`);
       })
       .catch((e) => {
         if (e.name === "AbortError") {
           // We know it's been canceled!
         }
       });

     // Wait 2 seconds to abort both requests
     setTimeout(() => controller.abort(), 2000);
     ---

     `},{type:5,title:"What is web speech API",content:`

                    Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps).This API has been introduced by W3C Community in the year 2012. It has two main parts,

                    1. ** SpeechRecognition(Asynchronous Speech Recognition or Speech - to - Text):** It provides the ability to recognize voice context from an audio input and respond accordingly.This is accessed by the \`SpeechRecognition\` interface.
        The below example shows on how to use this API to get text from speech,

     ---javascript
     window.SpeechRecognition =
       window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
     const recognition = new window.SpeechRecognition();
     recognition.onresult = (event) => {
       // SpeechRecognitionEvent type
       const speechToText = event.results[0][0].transcript;
       console.log(speechToText);
     };
     recognition.start();
     ---

     In this API, browser is going to ask you for permission to use your microphone

     1. **SpeechSynthesis (Text-to-Speech):** It provides the ability to recognize voice context from an audio input and respond. This is accessed by the \`SpeechSynthesis\` interface.
        For example, the below code is used to get voice/speech from text,

     ---javascript
     if ("speechSynthesis" in window) {
       var speech = new SpeechSynthesisUtterance("Hello World!");
       speech.lang = "en-US";
       window.speechSynthesis.speak(speech);
     }
     ---

     The above examples can be tested on chrome(33+) browser's developer console.
     **Note:** This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome only implemented the specification)

     `},{title:"What is minimum timeout throttling",type:5,content:`
     Both browser and NodeJS javascript environments throttles with a minimum delay that is greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously.
     **Browsers:** They have a minimum delay of 4ms. This throttle occurs when successive calls are triggered due to callback nesting(certain depth) or after a certain number of successive intervals.
     Note: The older browsers have a minimum delay of 10ms.
     **Nodejs:** They have a minimum delay of 1ms. This throttle happens when the delay is larger than 2147483647 or less than 1.
     The best example to explain this timeout throttling behavior is the order of below code snippet.

     ---javascript
     function runMeFirst() {
       console.log("My script is initialized");
     }
     setTimeout(runMeFirst, 0);
     console.log("Script loaded");
     ---

     and the output would be in

     ---cmd
     Script loaded
     My script is initialized
     ---

     If you don't use \`setTimeout\`, the order of logs will be sequential.

     ---javascript
     function runMeFirst() {
       console.log("My script is initialized");
     }
     runMeFirst();
     console.log("Script loaded");
     ---

     and the output is,

     ---cmd
     My script is initialized
     Script loaded
     ---

     `},{title:"How do you implement zero timeout in modern browsers",type:5,content:`
     You can't use setTimeout(fn, 0) to execute the code immediately due to minimum delay of greater than 0ms. But you can use window.postMessage() to achieve this behavior.

     `},{title:"What are tasks in event loop",type:5,content:`
     A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue.
     Below are the list of use cases to add tasks to the task queue,

     1. When a new javascript program is executed directly from console or running by the \`<script>\` element, the task will be added to the task queue.
     2. When an event fires, the event callback added to task queue
     3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue

     `},{type:5,title:"What is microtask",content:`

			Microtask is the javascript code which needs to be executed immediately after the currently executing task / microtask is completed.They are kind of blocking in nature.i.e, The main thread will be blocked until the microtask queue is empty.
     The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

			** Note:** All of these microtasks are processed in the same turn of the event loop.
     `},{title:"What are different event loops",type:5,content:`
				`},{title:"What is the purpose of queueMicrotask",type:5,content:`
				`},{title:"How do you use javascript libraries in typescript file",type:5,content:`
     It is known that not all JavaScript libraries or frameworks have TypeScript declaration files.But if you still want to use libraries or frameworks in our TypeScript files without getting compilation errors, the only solution is \`declare\` keyword along with a variable declaration. For example, let's imagine you have a library called \`customLibrary\` that doesn\u2019t have a TypeScript declaration and have a namespace called \`customLibrary\` in the global namespace. You can use this library in typescript code as below,

     ---javascript
     declare var customLibrary;
     ---

     In the runtime, typescript will provide the type to the \`customLibrary\` variable as \`any\` type. The another alternative without using declare keyword is below

     ---javascript
     var customLibrary: any;
     ---

     `},{title:"What are the differences between promises and observables",type:5,content:`
     Some of the major difference in a tabular form

     | Promises                                                           | Observables                                                                              |
     | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
     | Emits only a single value at a time                                | Emits multiple values over a period of time(stream of values ranging from 0 to multiple) |
     | Eager in nature; they are going to be called immediately           | Lazy in nature; they require subscription to be invoked                                  |
     | Promise is always asynchronous even though it resolved immediately | Observable can be either synchronous or asynchronous                                     |
     | Doesn't provide any operators                                      | Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc        |
     | Cannot be canceled                                                 | Canceled by using unsubscribe() method                                                   |

     `},{type:5,title:"What is heap",content:`

			Heap(Or memory heap) is the memory location where objects are stored when we define variables.i.e, This is the place where all the memory allocations and de - allocation take place.Both heap and call - stack are two containers of JS runtime.
     Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

     ![Screenshot](images / heap.png)

			`},{type:5,title:"What is an event table",content:`

			Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests.i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table.
     It doesn't not execute functions on it\u2019s own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.

		![Screenshot](images / event - table.png)

			`},{type:5,title:"What is a microTask queue",content:`

			Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue.
     The microtasks queue are processed before the next rendering and painting jobs.But if these microtasks are running for a long time then it leads to visual degradation.

     `},{title:"What is the difference between shim and polyfill",type:5,content:`
     A shim is a library that brings a new API to an older environment, using only the means of that environment.It isn't necessarily restricted to a web application. For example, es5-shim.js is used to emulate ES5 features on older browsers (mainly pre IE9).
     Whereas polyfill is a piece of code(or plugin) that provides the technology that you, the developer, expect the browser to provide natively.
     In a simple sentence, A polyfill is a shim for a browser API.

     `},{title:"How do you detect primitive or non primitive value type",type:5,content:`
     In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined.Whereas non - primitive types include the Objects.But you can easily identify them with the below function,

		--- javascript
		var myPrimitive = 30;
		var myNonPrimitive = {};
		function isPrimitive(val) {
			return Object(val) !== val;
		}

		isPrimitive(myPrimitive);
		isPrimitive(myNonPrimitive);
		---

			If the value is a primitive data type, the Object constructor creates a new wrapper object for the value.But If the value is a non - primitive data type(an object), the Object constructor will give the same object.

     `},{type:5,title:"What is babel",content:`

                    Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.Some of the main features are listed below,

                    1. Transform syntax
     2. Polyfill features that are missing in your target environment(using @babel/ polyfill)
        3. Source code transformations(or codemods)

            `},{title:"Is Node.js completely single threaded",type:5,content:`
     Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded.i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

     `},{title:"What are the common use cases of observables",type:5,content:`
     Some of the most common use cases of observables are web sockets with push notifications, user input changes, repeating intervals, etc

            `},{type:5,title:"What is RxJS",content:`

					RxJS(Reactive Extensions for JavaScript) is a library for implementing reactive programming using observables that makes it easier to compose asynchronous or callback- based code.It also provides utility functions for creating and working with observables.

     `},{title:"What is the difference between Function constructor and function declaration",type:5,content:`
     The functions which are created with \`Function constructor\` do not create closures to their creation contexts but they are always created in the global scope. i.e, the function can access its own local variables and global scope variables only. Whereas function declarations can access outer function variables(closures) too.

     Let's see this difference with an example,

     **Function Constructor:**

     ---javascript
     var a = 100;
     function createFunction() {
       var a = 200;
       return new Function("return a;");
     }
     console.log(createFunction()()); // 100
     ---

     **Function declaration:**

     ---javascript
     var a = 100;
     function createFunction() {
       var a = 200;
       return function func() {
         return a;
       };
     }
     console.log(createFunction()()); // 200
     ---

     `},{title:"What is a Short circuit condition",type:5,content:`
     Short circuit conditions are meant for condensed way of writing simple if statements. Let's demonstrate the scenario using an example. If you would like to login to a portal with an authentication condition, the expression would be as below,

     ---javascript
     if (authenticate) {
       loginToPorta();
     }
     ---

     Since the javascript logical operators evaluated from left to right, the above expression can be simplified using && logical operator

     ---javascript
     authenticate && loginToPorta();
     ---

     `},{title:"What is the easiest way to resize an array",type:5,content:`
     The length property of an array is useful to resize or empty an array quickly. Let's apply length property on number array to resize the number of elements from 5 to 2,

     ---javascript
     var array = [1, 2, 3, 4, 5];
     console.log(array.length); // 5

     array.length = 2;
     console.log(array.length); // 2
     console.log(array); // [1,2]
     ---

     and the array can be emptied too

     ---javascript
     var array = [1, 2, 3, 4, 5];
     array.length = 0;
     console.log(array.length); // 0
     console.log(array); // []
     ---

     `},{type:5,title:"What is an observable",content:`

            An Observable is basically a function that can return a stream of values either synchronously or asynchronously to an observer over time.The consumer can get the value by calling \`subscribe()\` method.
     Let's look at a simple example of an Observable

     ---javascript
     import { Observable } from "rxjs";

     const observable = new Observable((observer) => {
       setTimeout(() => {
         observer.next("Message from a Observable!");
       }, 3000);
     });

     observable.subscribe((value) => console.log(value));
     ---

     ![Screenshot](images/observables.png)

     **Note:** Observables are not part of the JavaScript language yet but they are being proposed to be added to the language

     `},{title:"What is the difference between function and class declarations",type:5,content:`
     The main difference between function declarations and class declarations is \`hoisting\`. The function declarations are hoisted but not class declarations.

     **Classes:**

     ---javascript
     const user = new User(); // ReferenceError

     class User {}
     ---

     **Constructor Function:**

     ---javascript
     const user = new User(); // No error

     function User() {}
     ---

     `},{type:5,title:"What is an async function",content:`

     An async function is a function declared with the \`async\` keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more \`await\` expressions.

     Let's take a below async function example,

     ---javascript
     async function logger() {
       let data = await fetch("http://someapi.com/users"); // pause until fetch returns
       console.log(data);
     }
     logger();
     ---

     It is basically syntax sugar over ES2015 promises and generators.

     `},{title:"How do you prevent promises swallowing errors",type:5,content:`
     While using asynchronous code, JavaScript\u2019s ES6 promises can make your life a lot easier without having callback pyramids and error handling on every second line. But Promises have some pitfalls and the biggest one is swallowing errors by default.

     Let's say you expect to print an error to the console for all the below cases,

     ---javascript
     Promise.resolve("promised value").then(function () {
       throw new Error("error");
     });

     Promise.reject("error value").catch(function () {
       throw new Error("error");
     });

     new Promise(function (resolve, reject) {
       throw new Error("error");
     });
     ---

     But there are many modern JavaScript environments that won't print any errors. You can fix this problem in different ways,

     1. **Add catch block at the end of each chain:** You can add catch block to the end of each of your promise chains

        ---javascript
        Promise.resolve("promised value")
          .then(function () {
            throw new Error("error");
          })
          .catch(function (error) {
            console.error(error.stack);
          });
        ---

        But it is quite difficult to type for each promise chain and verbose too.

     2. **Add done method:** You can replace first solution's then and catch blocks with done method

        ---javascript
        Promise.resolve("promised value").done(function () {
          throw new Error("error");
        });
        ---

        Let's say you want to fetch data using HTTP and later perform processing on the resulting data asynchronously. You can write \`done\` block as below,

        ---javascript
        getDataFromHttp()
          .then(function (result) {
            return processDataAsync(result);
          })
          .done(function (processed) {
            displayData(processed);
          });
        ---

        In future, if the processing library API changed to synchronous then you can remove \`done\` block as below,

        ---javascript
        getDataFromHttp().then(function (result) {
          return displayData(processDataAsync(result));
        });
        ---

        and then you forgot to add \`done\` block to \`then\` block leads to silent errors.

     3. **Extend ES6 Promises by Bluebird:**
        Bluebird extends the ES6 Promises API to avoid the issue in the second solution. This library has a \u201Cdefault\u201D onRejection handler which will print all errors from rejected Promises to stderr. After installation, you can process unhandled rejections

        ---javascript
        Promise.onPossiblyUnhandledRejection(function (error) {
          throw error;
        });
        ---

        and discard a rejection, just handle it with an empty catch

        ---javascript
        Promise.reject("error value").catch(function () {});
        ---

     `},{type:5,title:"What is deno",content:`

			Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 JavaScript engine and the Rust programming language.

     `},{title:"How do you make an object iterable in javascript",type:5,content:`
     By default, plain objects are not iterable.But you can make the object iterable by defining a \`Symbol.iterator\` property on it.

     Let's demonstrate this with an example,

     ---javascript
     const collection = {
       one: 1,
       two: 2,
       three: 3,
       [Symbol.iterator]() {
         const values = Object.keys(this);
         let i = 0;
         return {
           next: () => {
             return {
               value: this[values[i++]],
               done: i > values.length,
             };
           },
         };
       },
     };

     const iterator = collection[Symbol.iterator]();

     console.log(iterator.next()); // \u2192 {value: 1, done: false}
     console.log(iterator.next()); // \u2192 {value: 2, done: false}
     console.log(iterator.next()); // \u2192 {value: 3, done: false}
     console.log(iterator.next()); // \u2192 {value: undefined, done: true}
     ---

     The above process can be simplified using a generator function,

     ---javascript
     const collection = {
       one: 1,
       two: 2,
       three: 3,
       [Symbol.iterator]: function* () {
         for (let key in this) {
           yield this[key];
         }
       },
     };
     const iterator = collection[Symbol.iterator]();
     console.log(iterator.next()); // {value: 1, done: false}
     console.log(iterator.next()); // {value: 2, done: false}
     console.log(iterator.next()); // {value: 3, done: false}
     console.log(iterator.next()); // {value: undefined, done: true}
     ---

     `},{title:"What is a Proper Tail Call",type:5,content:`
     First, we should know about tail call before talking about "Proper Tail Call". A tail call is a subroutine or function call performed as the final action of a calling function. Whereas **Proper tail call(PTC)** is a technique where the program or code will not create additional stack frames for a recursion when the function call is a tail call.

     For example, the below classic or head recursion of factorial function relies on stack for each step. Each step need to be processed upto \`n * factorial(n - 1)\`

     ---javascript
     function factorial(n) {
       if (n === 0) {
         return 1;
       }
       return n * factorial(n - 1);
     }
     console.log(factorial(5)); //120
     ---

     But if you use Tail recursion functions, they keep passing all the necessary data it needs down the recursion without relying on the stack.

     ---javascript
     function factorial(n, acc = 1) {
       if (n === 0) {
         return acc;
       }
       return factorial(n - 1, n * acc);
     }
     console.log(factorial(5)); //120
     ---

     The above pattern returns the same output as the first one. But the accumulator keeps track of total as an argument without using stack memory on recursive calls.

     `},{title:"How do you check an object is a promise or not",type:5,content:`
     If you don't know if a value is a promise or not, wrapping the value as \`Promise.resolve(value)\` which returns a promise

     ---javascript
     function isPromise(object) {
       if (Promise && Promise.resolve) {
         return Promise.resolve(object) == object;
       } else {
         throw "Promise not supported in your environment";
       }
     }

     var i = 1;
     var promise = new Promise(function (resolve, reject) {
       resolve();
     });

     console.log(isPromise(i)); // false
     console.log(isPromise(promise)); // true
     ---

     Another way is to check for \`.then()\` handler type

     ---javascript
     function isPromise(value) {
       return Boolean(value && typeof value.then === "function");
     }
     var i = 1;
     var promise = new Promise(function (resolve, reject) {
       resolve();
     });

     console.log(isPromise(i)); // false
     console.log(isPromise(promise)); // true
     ---

     `},{title:"How to detect if a function is called as constructor",type:5,content:`
     You can use \`new.target\` pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.

     1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
     2. For function calls, new.target is undefined.

     ---javascript
     function Myfunc() {
        if (new.target) {
           console.log('called with new');
        } else {
           console.log('not called with new');
        }
     }

     new Myfunc(); // called with new
     Myfunc(); // not called with new
     Myfunc.call({}); not called with new
     ---

     `},{title:"What are the differences between arguments object and rest parameter",type:5,content:`
     There are three main differences between arguments object and rest parameters

     1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
     2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
     3. The rest parameters are only the ones that haven\u2019t been given a separate name, while the arguments object contains all arguments passed to the function

     `},{title:"What are the differences between spread operator and rest parameter",type:5,content:`
     Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.

     `},{title:"What are the different kinds of generators",type:5,content:`
     There are five kinds of generators,

     1. **Generator function declaration:**

        ---javascript
        function* myGenFunc() {
          yield 1;
          yield 2;
          yield 3;
        }
        const genObj = myGenFunc();
        ---

     2. **Generator function expressions:**

        ---javascript
        const myGenFunc = function* () {
          yield 1;
          yield 2;
          yield 3;
        };
        const genObj = myGenFunc();
        ---

     3. **Generator method definitions in object literals:**

        ---javascript
        const myObj = {
          *myGeneratorMethod() {
            yield 1;
            yield 2;
            yield 3;
          },
        };
        const genObj = myObj.myGeneratorMethod();
        ---

     4. **Generator method definitions in class:**

        ---javascript
        class MyClass {
          *myGeneratorMethod() {
            yield 1;
            yield 2;
            yield 3;
          }
        }
        const myObject = new MyClass();
        const genObj = myObject.myGeneratorMethod();
        ---

     5. **Generator as a computed property:**

        ---javascript
        const SomeObj = {
          *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
          },
        };

        console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]
        ---

     `},{title:"What are the built-in iterables",type:5,content:`
     Below are the list of built-in iterables in javascript,

     1. Arrays and TypedArrays
     2. Strings: Iterate over each character or Unicode code-points
     3. Maps: iterate over its key-value pairs
     4. Sets: iterates over their elements
     5. arguments: An array-like special variable in functions
     6. DOM collection such as NodeList

     `},{title:"What are the differences between for...of and for...in statements",type:5,content:`
     Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:

     1. for..in iterates over all enumerable property keys of an object
     2. for..of iterates over the values of an iterable object.

     Let's explain this difference with an example,

     ---javascript
     let arr = ["a", "b", "c"];

     arr.newProp = "newVlue";

     // key are the property keys
     for (let key in arr) {
       console.log(key);
     }

     // value are the property values
     for (let value of arr) {
       console.log(value);
     }
     ---

     Since for..in loop iterates over the keys of the object, the first loop logs 0, 1, 2 and newProp while iterating over the array object. The for..of loop iterates over the values of a arr data structure and logs a, b, c in the console.

     `},{title:"How do you define instance and non-instance properties",type:5,content:`
     The Instance properties must be defined inside of class methods. For example, name and age properties defined inside constructor as below,

     ---javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
     }
     ---

     But Static(class) and prototype data properties must be defined outside of the ClassBody declaration. Let's assign the age value for Person class as below,

     ---javascript
     Person.staticAge = 30;
     Person.prototype.prototypeAge = 40;
     ---

     `},{title:"What is the difference between isNaN and Number.isNaN?",type:5,content:`
     1. **isNaN**: The global function \`isNaN\` converts the argument to a Number and returns true if the resulting value is NaN.
     2. **Number.isNaN**: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.

     Let's see the difference with an example,

     ---javascript
     isNaN(\u2018hello\u2019);   // true
     Number.isNaN('hello'); // false
     ---

     `},{title:"How to invoke an IIFE without any extra brackets?",type:5,content:`
     Immediately Invoked Function Expressions(IIFE) requires a pair of parenthesis to wrap the function which contains set of statements.

     ---js
     (function (dt) {
       console.log(dt.toLocaleTimeString());
     })(new Date());
     ---

     Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using \`void operator\` for IIFE as below,

     ---js
     void (function (dt) {
       console.log(dt.toLocaleTimeString());
     })(new Date());
     ---

     `},{title:"Is that possible to use expressions in switch cases?",type:5,content:`
     You might have seen expressions used in switch condition but it is also possible to use for switch cases by assigning true value for the switch condition. Let's see the weather condition based on temparature as an example,

     ---js
     const weather = (function getWeather(temp) {
       switch (true) {
         case temp < 0:
           return "freezing";
         case temp < 10:
           return "cold";
         case temp < 24:
           return "cool";
         default:
           return "unknown";
       }
     })(10);
     ---

     `},{title:"What is the easiest way to ignore promise errors?",type:5,content:`
     The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.

     ---js
     await promise.catch((e) => void e);
     ---

     `},{title:"How do style the console output using CSS?",type:5,content:`
     You can add CSS styling to the console output using the CSS format content specifier %c. The console string message can be appended after the specifier and CSS style in another argument. Let's print the red the color text using console.log and CSS specifier as below,

     ---js
     console.log("%cThis is a red text", "color:red");
     ---

     It is also possible to add more styles for the content. For example, the font-size can be modified for the above text

     ---js
     console.log(
       "%cThis is a red text with bigger font",
       "color:red; font-size:20px"
     );
     ---

     `},{title:"What is nullish coalescing operator (??)?",type:5,content:`
     It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.

     ---js
     console.log(null ?? true); // true
     console.log(false ?? true); // false
     console.log(undefined ?? true); // true
     ---

     `},{title:"How do you group and nest console output?",type:5,content:`
     The \`console.group()\` can be used to group related log messages to be able to easily read the logs and use console.groupEnd()to close the group. Along with this, you can also nest groups which allows to output message in hierarchical manner.

     For example, if you\u2019re logging a user\u2019s details:

     ---js
     console.group("User Details");
     console.log("name: Sudheer Jonna");
     console.log("job: Software Developer");

     // Nested Group
     console.group("Address");
     console.log("Street: Commonwealth");
     console.log("City: Los Angeles");
     console.log("State: California");

     console.groupEnd();
     ---

     You can also use \`console.groupCollapsed()\` instead of \`console.group()\` if you want the groups to be collapsed by default.

     `},{title:"What is the difference between dense and sparse arrays?",type:5,content:`
     An array contains items at each index starting from first(0) to last(array.length - 1) is called as Dense array. Whereas if at least one item is missing at any index, the array is called as sparse.

     Let's see the below two kind of arrays,

     ---js
     const avengers = ["Ironman", "Hulk", "CaptainAmerica"];
     console.log(avengers[0]); // 'Ironman'
     console.log(avengers[1]); // 'Hulk'
     console.log(avengers[2]); // 'CaptainAmerica'
     console.log(avengers.length); // 3

     const justiceLeague = ["Superman", "Aquaman", , "Batman"];
     console.log(justiceLeague[0]); // 'Superman'
     console.log(justiceLeague[1]); // 'Aquaman'
     console.log(justiceLeague[2]); // undefined
     console.log(justiceLeague[3]); // 'Batman'
     console.log(justiceLeague.length); // 4
     ---

     `},{title:"What are the different ways to create sparse arrays?",type:5,content:`
     There are 4 different ways to create sparse arrays in JavaScript

     1. **Array literal:** Omit a value when using the array literal
        ---js
        const justiceLeague = ["Superman", "Aquaman", , "Batman"];
        console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']
        ---
     2. **Array() constructor:** Invoking Array(length) or new Array(length)
        ---js
        const array = Array(3);
        console.log(array); // [empty, empty ,empty]
        ---
     3. **Delete operator:** Using delete array[index] operator on the array
        ---js
        const justiceLeague = ["Superman", "Aquaman", "Batman"];
        delete justiceLeague[1];
        console.log(justiceLeague); // ['Superman', empty, ,'Batman']
        ---
     4. **Increase length property:** Increasing length property of an array
        \`js const justiceLeague = ['Superman', 'Aquaman', 'Batman']; justiceLeague.length = 5; console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty] \`
        `},{title:"What is the difference between setTimeout, setImmediate and process.nextTick?",type:5,content:`
     1. **Set Timeout:** setTimeout() is to schedule execution of a one-time callback after delay milliseconds.
     2. **Set Immediate:** The setImmediate function is used to execute a function right after the current event loop finishes.
     3. **Process NextTick:** If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.

     `},{title:"How do you reverse an array without modifying original array?",type:5,content:`
     The \`reverse()\` method reverses the order of the elements in an array but it mutates the original array. Let's take a simple example to demonistrate this case,

     ---javascript
     const originalArray = [1, 2, 3, 4, 5];
     const newArray = originalArray.reverse();

     console.log(newArray); // [ 5, 4, 3, 2, 1]
     console.log(originalArray); // [ 5, 4, 3, 2, 1]
     ---

     There are few solutions that won't mutate the original array. Let's take a look.

     1. **Using slice and reverse methods:**
        In this case, just invoke the \`slice()\` method on the array to create a shallow copy followed by \`reverse()\` method call on the copy.

        ---javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ---

     2. **Using spread and reverse methods:**
        In this case, let's use the spread syntax (...) to create a copy of the array followed by \`reverse()\` method call on the copy.

        ---javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = [...originalArray].reverse();

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ---

     3. **Using reduce and spread methods:**
        Here execute a reducer function on an array elements and append the accumulated array on right side using spread syntax

        ---javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.reduce((accumulator, value) => {
          return [value, ...accumulator];
        }, []);

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ---

     4. **Using reduceRight and spread methods:**
        Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and append the accumulated array on left side using spread syntax

        ---javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.reduceRight((accumulator, value) => {
          return [...accumulator, value];
        }, []);

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ---

     5. **Using reduceRight and push methods:**
        Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and push the iterated value to the accumulator

        ---javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.reduceRight((accumulator, value) => {
          accumulator.push(value);
          return accumulator;
        }, []);

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ---

     `},{title:"How do you create custom HTML element?",type:5,content:`
     The creation of custom HTML elements involves two main steps,

     1. **Define your custom HTML element:** First you need to define some custom class by extending HTMLElement class.
        After that define your component properties (styles,text etc) using \`connectedCallback\` method.
        **Note:** The browser exposes a function called \`customElements.define\` inorder to reuse the element.
        ---javascript
        class CustomElement extends HTMLElement {
          connectedCallback() {
            this.innerHTML = "This is a custom element";
          }
        }
        customElements.define("custom-element", CustomElement);
        ---
     2. **Use custome element just like other HTML element:** Declare your custom element as a HTML tag.

     ---javascript
        <body>
             <custom-element>
        </body>
     ---

     `},{title:"What is global execution context?",type:5,content:`
     The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.

     For example, the below code other than code inside any function or object is executed inside the global execution context.

     ---javascript
     var x = 10;

     function A() {
       console.log("Start function A");

       function B() {
         console.log("In function B");
       }

       B();
     }

     A();

     console.log("GlobalContext");
     ---

     `},{title:"What is function execution context?",type:5,content:`
     Whenever a function is invoked, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the Global Execution Context (GEC) to evaluate and execute the code within that function.

     `},{type:5,title:"What is debouncing?",content:`

	Debouncing is a programming pattern that allows delaying execution of some piece of code until a specified time to avoid unnecessary _CPU cycles, API calls and improve performance_.The debounce function make sure that your code is only triggered once per user input.The common usecases are Search box suggestions, text - field auto - saves, and eliminating double - button clicks.

		Let's say you want to show suggestions for a search query, but only after a visitor has finished typing it. So here you write a debounce function where the user keeps writing the characters with in 500ms then previous timer cleared out using \`clearTimeout\` and reschedule API call/DB query for a new time\u2014300 ms in the future.

--- js
function debounce(func, timeout = 500) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
function fetchResults() {
	console.log("Fetching input suggestions");
}
const processChange = debounce(() => fetchResults());
-- -

	The _debounce() _ function can be used on input, button and window events

		** Input: **

			-- - html
			< input type = "text" onkeyup = "processChange()" / >
				-- -

				** Button: **

	-- - html
	< button onclick = "processChange()" > Click me</button >
		-- -

						** Windows event: **

	-- - html
window.addEventListener("scroll", processChange);
-- -

	`},{type:5,title:"What is throttling?",content:`

	Throttling is a technique used to limit the execution of an event handler function, even when this event triggers continuously due to user actions.The common use cases are browser resizing, window scrolling etc.

     The below example creates a throttle function to reduce the number of events for each pixel change and trigger scroll event for each 100ms except for the first event.

     ---js
     const throttle = (func, limit) => {
		let inThrottle;
		return (...args) => {
			if (!inThrottle) {
				func.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	};
	window.addEventListener("scroll", () => {
		throttle(handleScrollAnimation, 100);
	});
     ---
 
     `},{type:5,title:"What is optional chaining?",content:`

	According to MDN official docs, the optional chaining operator(?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

		The?.operator is like the .chaining operator, except that instead of causing an error if a reference is nullish(null or undefined), the expression short- circuits with a return value of undefined.When used with function calls, it returns undefined if the given function does not exist.

-- - js
const adventurer = {
		name: 'Alice',
		cat: {
			name: 'Dinah'
		}
	};

	const dogName = adventurer.dog?.name;
	console.log(dogName);
	// expected output: undefined

	console.log(adventurer.someNonExistentMethod?.());
	// expected output: undefined
	`},{title:"What is an environment record?",type:5,content:`
	According to ECMAScript specification 262(9.1):

	>[Environment Record](https://262.ecma-international.org/12.0/#sec-environment-records) is a specification type used to define the association of Identifiers to specific variables and functions, based upon the lexical nesting structure of ECMAScript code.

		Usually an Environment Record is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement.

Each time such code is evaluated, a new Environment Record is created to record the identifier bindings that are created by that code.
     `}],db=[{title:"How does React work?",type:7,content:"React uses a virtual DOM. When something changes in a component, it first runs a 'diffing' algorithm to see what's different in the virtual DOM. Then, it does reconciliation, where it updates the actual DOM based on those changes."},{title:"What is React?",type:7,content:`React is a front-end JavaScript library developed by Facebook in 2011.
It follows the component based approach which helps in building reusable UI components.
It is used for developing complex and interactive web and mobile UI.
Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.`},{title:"Difference between class components and functional components?",type:7,content:`A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which also returns a React element. Before the usage of hooks, the functional components were stateless.
        Now in functioal components, we can use React hook functions like useState, useEffect instead of lifecycle methods in class components.`},{title:"What is Context API in ReactJS?",type:7,content:"Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered \u201Cglobal\u201D for a tree of React components, such as the current authenticated user, theme, or preferred language. Using context, I can avoid passing props through intermediate elements."},{title:"What are props in React?",type:7,content:"Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This helps in maintaining the unidirectional data flow and are generally used to render the dynamically generated data."},{title:"What do you understand by refs in React?",type:7,content:"Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components."},{title:"What is the use of refs?  ",type:7,content:`Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when I need direct access to DOM element or an instance of a component.
        There are a few good use cases for refs:
        -Managing focus, text selection, or media playback.
        -Triggering imperative animations.
        -Integrating with third-party DOM libraries.
        Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.`},{title:"What are the advantages of ReactJS?",type:7,content:`
       It is easy to know how a component is rendered, you just need to look at the render function.
JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined.
You can render React on the server side. This improves SEO and performance.
It is easy to test.
You can use React with any framework you wish as it is only a view layer.`},{title:"What are React Hooks?",type:7,content:`React Hooks were introduced in version 16.8, and they let us use state and other React features without having to create a class component. Basically, they let you take advantage of React's capabilities while writing functional components.

One of the big benefits of Hooks is that they let you pull out stateful logic from a component. This means you can test that logic on its own and reuse it in different components, which helps keep your code clean and easy to maintain.

Plus, Hooks give you a way to share stateful logic without changing the component structure. This makes it a lot easier to share Hooks with other components or even with the larger community. Overall, Hooks have really changed how we work with state and lifecycle methods in React, making things more flexible and powerful.`},{title:"How would you write an inline style in React?",type:7,content:`So, when you want to add inline styles in React, you can do it right in the style attribute of your elements. Instead of using the usual way, you actually write your styles as a JavaScript object.

You\u2019ll use camelCase for the property names, like 'backgroundColor' instead of 'background-color.' And remember, the values need to be in quotes, just like you do in JavaScript, not like regular CSS.

One cool thing about inline styles is that you can make them dynamic, so you can change the style based on some state or props in your component. It\u2019s a great way to control styles directly based on the logic in your app.`},{title:"What are the major features of ReactJS?",type:7,content:`The major features of ReactJS are as follows,
    -It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
        - Supports server - side rendering
    - Follows Unidirectional data flow or data binding
        - Uses reusable / composable UI components to develop the view`},{title:"What is the difference between state and props?",type:7,content:`State and Props are both concepts in React that are used to store and manipulate data within a React component.The main difference between the two is that State is used to store and manage the data that is local and specific to a component, while Props are used to pass data from a parent component to its child components.
State is considered to be dynamic, meaning that it can change over time as a result of user interactions or other events.On the other hand, Props are considered to be static and cannot be changed by the child component.Instead, the parent component is responsible for updating the value of its Props and passing the updated value to the child component.
In summary, State is used to manage the internal state of a component, while Props are used to pass data from a parent component to its child components.
`},{title:"What is the difference between a Presentational component and a Container component?",type:7,content:`- Presentational components are concerned with how things look.They generally receive data and callbacks exclusively via props.These components rarely have their own state, but when they do it generally concerns UI state, as opposed to data state.
        - Container components are more concerned with how things work.These components provide the data and behavior to presentational or other container components.They call Flux actions and provide these as callbacks to the presentational components.They are also often stateful as they serve as data sources.`},{title:"What's the difference between a Controlled component and an Uncontrolled one in React?",type:7,content:`In React, the difference between controlled and uncontrolled components is about how they manage form data.

A controlled component is one where the form data is managed by the component's state. The value of the input is set by the state, and any changes to the input are handled through event handlers that update the state. This approach allows for more control over the data and makes it easier to implement features like validation.

An uncontrolled component, on the other hand, manages its form data using the DOM.You access the input's value through a ref, which allows the input to maintain its own state. This can be simpler to set up for basic forms where you don't need to manage the data actively within the component.

In summary, controlled components use React state to manage data, while uncontrolled components rely on the DOM.`},{title:"What are Controlled components in ReactJS?",type:7,content:'A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange.A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.I could also call this a "dumb component".'},{title:"What does it mean for a component to be mounted in React?",type:7,content:"It has a corresponding element created in the DOM and is connected to that."},{title:"What are Fragments in React?",type:7,content:"It's common pattern in React which is used for a component to return multiple elements. Fragments let I group a list of children without adding extra nodes to the DOM. shorter syntax: <></>"},{title:"When rendering a list what is a key and what is it's purpose?",type:7,content:`Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
        Most often I would use IDs from my data as keys. When I don't have stable IDs for rendered items, I may use the item index as a key as a last resort. It is not recommend to use indexes for keys if the items can reorder, as that would be slow.`},{title:"How to create refs in React?",type:7,content:"Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property with in constructor.I can also use it in functional components with the help of closures. And can use useRef from the hook functions."},{title:"What is useState() in React?",type:7,content:`Definition:
useState is a React Hook that allows you to add state to functional components.
Purpose:
It enables functional components to manage and update their own state without needing to convert them to class components.
Syntax:
const [state, setState] = useState(initialValue);
Parameters:
initialValue: The initial state value
Return Value:
useState returns an array with two elements:
The current state value
A function to update the state`},{title:"What are Stateless components in React?",type:7,content:`If the behaviour is independent of its state then it can be a stateless component. I can use either a function or a class for creating stateless components. But unless I need to use a lifecycle hook in my components, I should go for stateless functional components.
        There are a lot of benefits if I decide to use stateless functional components here; they are easy to write, understand, and test, and I can avoid the THIS keyword altogether.`},{title:"What are Stateful components in React?",type:7,content:"If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These Stateful components can be either class components which have a state that gets initialized in the constructor or functional components using Hooks."},{title:"What is JSX?",type:7,content:"JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. Below is an example of JSX:"},{title:"What are the limitations of React?",type:7,content:`1.React is just a view library, not a full-blown framework
        2.There is a learning curve for beginners who are new to web development.
        3.Integrating React.js into a traditional MVC framework requires some additional configuration
        4.The code complexity increases with inline templating and JSX.
        5.Too many smaller components leading to over-engineering or boilerplate`},{title:"How is React different from AngularJS (1.x)?",type:7,content:`1. ARCHITECTURE	Only the View of MVC	Complete MVC
2. RENDERING	Server-side rendering	Client-side rendering
3. DOM	Uses virtual DOM	Uses real DOM
4. DATA BINDING	One-way data binding	Two-way data binding
5. DEBUGGING	Compile time debugging	Runtime debugging
6. AUTHOR	Facebook	Google`},{title:"What is state in React?",type:7,content:"States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."},{title:"What are two types of components in ReactJS?",type:7,content:`A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which also returns a React element. Before the usage of hooks, the functional components were stateless.
        Now in functioal components, we can use React hook functions like useState, useEffect instead of lifecycle methods in class components.`},{title:"What is the purpose of callback function as an argument of setState?",type:7,content:`The callback function is invoked when setState finished and the component gets rendered. Since setState is asynchronous, the callback function is used for any post action. But it'd better use lifecycle method rather this callback function. componentDidUpdate(prevProps, prevState)
        For functional components using hooks, you can use the useEffect hook to achieve similar functionality.`},{title:"What are portals in React and when do I need them?",type:7,content:`Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
        Sometimes it\u2019s useful to insert a child into a different location in the DOM:
        A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but I need the child to visually \u201Cbreak out\u201D of its container.`},{title:"What are advantages of using React Hooks?",type:7,content:`Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.
        Hooks don\u2019t work inside classes (because they let I use React without classes). By using them, I can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, I will use built-in hooks like useEffect .
        `},{title:"What happens during the lifecycle of a React component?",type:7,content:`At the highest level, React components have lifecycle events that fall into three general categories:
        1. Initialization
        2. State/Property Updates
        3. Destruction `},{title:"What is the difference between Component and Container in Redux?",type:7,content:`- Component is part of the React API. A Component is a class or function that describes part of a React UI.
        - Container is an informal term for a React component that is connected to a redux store. Containers receive Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.`},{title:"What are inline conditional expressions in ReactJS?",type:7,content:"I can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, I can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator(&&)."},{title:"What is Reconciliation in ReactJS?",type:7,content:"When a component\u2019s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation."},{title:"What is the purpose of using super constructor with props argument in React?",type:7,content:"A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in my child constructors."},{title:"What happens when you call setState?",type:7,content:`The first thing React will do when setState is called is merge the object I passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, update the UI based on this new state in the most efficient way possible.
        To do this, React will construct a new tree of React elements (which I can think of as an object representation of my UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree.
        By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.`},{title:"What is the difference between Element and Component in ReactJS?",type:7,content:`An element is a plain object describing what I want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
        Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output. JSX transpiled as createElement at the end.`},{title:"What are Higher-Order Components (HOC) in React?",type:7,content:"Higher Order Component is an advanced way of reusing the component logic. Basically, it\u2019s a pattern that is derived from React\u2019s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won\u2019t modify or copy any behavior from their input components. You can say that HOC are \u2018pure\u2019 components."},{title:"How to call loading function with React useEffect only once?",type:7,content:"If I only want to run the function given to useEffect after the initial render, I can give it an empty array [] as the second argument."},{title:"How to access DOM elements in React?",type:7,content:`One of the useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:
        1. Define the reference to access the element const elementRef = useRef();
        2. Assign the reference to ref attribute of the element: <div ref={elementRef}></div>;
        3. After mounting, elementRef.current points to the DOM element.`},{title:"Name the different lifecycle methods for a class components",type:7,content:`componentWillMount() \u2013 Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() \u2013 Executed on the client side only after the first render.
componentWillReceiveProps() \u2013 Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() \u2013 Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() \u2013 Called just before rendering takes place in the DOM.
componentDidUpdate() \u2013 Called immediately after rendering takes place.
componentWillUnmount() \u2013 Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.`},{title:"What is {this.props.children} and when you should use it?",type:7,content:"I can use props.children on components that represent 'generic boxes' and that don\u2019t know their children ahead of time. It is used to display whatever I include between the opening and closing tags when invoking a component."},{title:"How would you prevent a component from rendering in React?",type:7,content:"Returning null from a component's render method does not affect the firing of the component's lifecycle methods."},{title:"What's the typical pattern for rendering a list of components from an array in React?",type:7,content:"Call map on an array with an arrow function that executes for each array element, possibly outputting a React component for each."},{title:"What are Pure Components?",type:7,content:`Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.A \u201Cpure component\u201D in React is a component that updates only when its properties or state have changed. In contrast, a \u201Cnon-pure component\u201D re-renders each time the parent component re-renders, regardless of whether its props or state have changed. Pure components are more productive since they do not needlessly re-render. By extending React, a component in React can be made pure. React is substituted by PureComponent. 
        This prompts the shouldComponentUpdate method, which decides whether or not to re-render, to provide an automatic shallow comparison of the component\u2019s props and state.`},{title:"What's the typical flow of data like in a React + Redux app?",type:7,content:"Callback from UI component dispatches an action with a payload, which then is intercepted in a reducer, possibly producing a new application state, which is then propagated down through the tree of components in the application from the Redux store."},{title:"What are some limitations of things you shouldn't do in the component's render method in React?",type:7,content:"I cannot modify the component's state (with setState), nor interact with the browser (do that in componentDidMount). Render should be a pure function."},{title:"How to bind methods or event handlers in JSX callbacks?",type:7,content:`There are 3 possible ways to achieve,
        1. Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for ReactJS event handlers defined as class methods. Normally I bind them in constructor as follows,
        2. Public class fields syntax: If I don\u2019t like to use bind approach then public class fields syntax can be used to correctly bind callbacks,
        3. Arrow functions in callbacks: I can use arrow functions directly in the callbacks as below`},{title:"What is prop drilling and how can you avoid it?",type:7,content:`When building a React application, there is often the need for a deeply nested component to use data provided by another component that is much higher in the hierarchy. The simplest approach is to simply pass a prop from each component to the next in the hierarchy from the source component to the deeply nested component. This is called prop drilling.
        The primary disadvantage of prop drilling is that components that should not otherwise be aware of the data become unnecessarily complicated and are harder to maintain.
        To avoid prop drilling, a common approach is to use React context. This allows a Provider component that supplies data to be defined, and allows nested components to consume context data via either a Consumer component or a useContext hook.`},{title:"What is the point of shouldComponentUpdate() method?",type:7,content:"It's used for performance reasons, for example if the implementor of a component knows for sure that a particular property change does not necessitate a re-render, they could return false from this method and skip the re-render."},{title:"What are forward refs?",type:7,content:"Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child."},{title:"What do these three dots (...) in React do? Spread notation",type:7,content:"It was added in ES2018 (spread for arrays/iterables was earlier, ES2015). Spread notation is handy not only for that use case, but for creating a new object with most (or all) of the properties of an existing object \u2014 which comes up a lot when you're updating state, since I can't modify state directly:"},{title:"What are the different phases of ReactJS component lifecycle?",type:7,content:`Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
Unmounting Phase: This is the final phase of a component\u2019s life cycle in which the component is destroyed and removed from the DOM.`},{title:"What is Key and benefit of using it in lists?",type:7,content:`A key is a special string attribute I need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. When I don\u2019t have stable IDs for rendered items, I may use the item index as a key as a last resort:
        I don\u2019t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state
        If I extract list item as separate component then apply keys on list component instead li tag.
        There will be a warning in the console if the key is not present on list items.`},{title:"What's the difference between an Element and a Component in React?",type:7,content:`- Elements are the fundamental building blocks of React, and describe what I want to see on the screen. They are just simple JS objects with props, key, ref, and type properties, whereas
        - Components have a render method and optionally accept inputs.`},{title:"What is the difference between ShadowDOM and VirtualDOM?",type:7,content:`- Virtual DOM,

        Virtual DOM is about avoiding unnecessary changes to the DOM, which are expensive performance-wise, because changes to the DOM usually cause re-rendering of the page. Virtual DOM also allows to collect several changes to be applied at once, so not every single change causes a re-render, but instead re-rendering only happens once after a set of changes was applied to the DOM.
        - Shadow DOM,
        
        Shadow dom is mostly about encapsulation of the implementation. A single custom element can implement more-or-less complex logic combined with more-or-less complex DOM. An entire web application of arbitrary complexity can be added to a page by an import and <body><my-app></my-app> but also simpler reusable and composable components can be implemented as custom elements where the internal representation is hidden in the shadow DOM like <date-picker></date-picker>.`},{title:"Why do class methods need to be bound to a class instance?",type:7,content:"In JavaScript, the value of this changes depending on the current context. Within React class component methods, developers normally expect this to refer to the current instance of a component, so it is necessary to bind these methods to the instance. Normally this is done in the constructor."},{title:"What are Stateless components in React?",type:7,content:`Stateless components (a flavor of \u201Creusable\u201D components) are nothing more than pure functions that render DOM based solely on the properties provided to them.
        This component has no need for any internal state \u2014 let alone a constructor or lifecycle handlers. The output of the component is purely a function of the properties provided to it.`},{title:"What is children prop?",type:7,content:`Children is a prop (this.prop.children) that allow I to pass components as data to other components, just like any other prop I use.
        There are a number of methods available in the React API to work with this prop. These include:
        - React.Children.map,
        - React.Children.forEach,
        - React.Children.count,
        - React.Children.only,
        - React.Children.toArray.`},{title:"Why React uses className over class attribute?",type:7,content:"class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class."},{title:"Difference between real Dom and virtual Dom?",type:7,content:`Real Dom updates slow and can directly update itself but virtual Dom updates faster and can't directly update HTML.
        In real Dom when elements update a new Dom is created but In Virtual Dom update JSX.
        Dom manipulation is very expensive in real Dom but is very easy in virtual dom.
        Too much of memory wastage is caused in Real Dom but in virtual Dom no memory wastage.
        `},{title:"What does shouldComponentUpdate do and why is it important?",type:7,content:"What shouldComponentUpdate does is it\u2019s a lifecycle method that allows us to opt out of setState reconciliation process for certain components (and their child components). If we know that a certain section of our UI isn\u2019t going to change, there\u2019s no reason to have React go through the trouble of trying to figure out if it should. By returning false from shouldComponentUpdate, React will assume that the current component, and all its child components, will stay the same as they currently are."},{title:"What is Lifting State Up in ReactJS?",type:7,content:"When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, then move the state to parent instead of maintaining the local state in both child components."},{title:"Why we should not update state directly?",type:7,content:"If I try to update state directly then it won\u2019t re-render the component. Instead use setState() method. It schedules an update to a component\u2019s state object. When state changes, the component responds by re-rendering. The only place I can assign the state is constructor."},{title:"What's the difference between useRef and createRef?",type:7,content:`The difference is:
        First of all createRef is used in class-based component but useRef is used in functional components.
        - createRef will always create a new ref. I would typically put the ref in an instance property during construction (e.g. this.input = createRef()). I don't have this option in a function component.
        - useRef takes care of returning the same ref each time as on the initial rendering.
        `},{title:"What is StrictMode in React?",type:7,content:`React's StrictMode is sort of a helper component that will help I write better react components, I can wrap a set of components with <StrictMode /> and it'll basically:
        - Verify that the components inside are following some of the recommended practices and warn I if not in the console.
        - Verify the deprecated methods are not being used, and if they're used strict mode will warn I in the console.
        - Help I prevent some side effects by identifying potential risks.`},{title:"What is the difference between createElement and cloneElement?",type:7,content:`- createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI).
        - cloneElement is used in order to clone an element and pass it new props. They nailed the naming on these two.`},{title:"What is the significance of keys in ReactJS?",type:7,content:"Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. When React reconciles the keyed children, it will ensure that any child with key will be reordered (instead of clobbered) or destroyed (instead of reused)."},{title:"What would be the common mistake of function being called every time the component renders?",type:7,content:"I need to make sure that function is not being called while passing the function as a parameter. Instead, pass the function itself without parenthesis:"},{title:"Are you familiar with Flux in the context of React?",type:7,content:`Flux is an architectural pattern which enforces the uni-directional data flow. It controls derived data and enables communication between multiple components using a central Store which has authority for all data. Any update in data throughout the application must occur here only. Flux provides stability to the application and reduces run-time errors.Changes to the Store data are subsequently broadcast to subscribing Views via events. Views then update themselves based on the new state of received data.
        To request changes to any Store data, Actions may be fired. These Actions are controlled by a central Dispatcher; Actions may not occur simultaneously, ensuring that a Store only mutates data once per Action.
        The strict unidirectional flow of this Flux pattern enforces data stability, reducing data-related runtime errors throughout an application.`},{title:"What is the difference between HTML and React event handling?",type:7,content:`1. In HTML, the event name should be in lowercase. Whereas in ReactJS it follows camelCase convention,
        2. In HTML, I can return false to prevent default behavior,
        3. Whereas in ReactJS I must call preventDefault explicitly,`},{title:"What are Error Boundaries in ReactJS?",type:7,content:"Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info). After that use it as a regular component."},{title:"What are Uncontrolled components?",type:7,content:"The Uncontrolled Component are the one that stores its own state internally, and I query the DOM using a ref to find its current value when I need it. This is a bit more like traditional HTML For example, in the below UserProfile component, the name input accessed using ref as below, In most cases, it is recommend using controlled components to implement forms."},{title:"What's wrong with using Context in React?",type:7,content:`- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
        - If I only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
        It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It\u2019s also annoying that whenever the Avatar component needs more props from the top, I have to add them at all the intermediate levels too.`},{title:"What is Components Composition in React?",type:7,content:`Sometimes we think about components as being \u201Cspecial cases\u201D of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.
        In React, this is also achieved by components composition, where a more \u201Cspecific\u201D component renders a more \u201Cgeneric\u201D one and configures it with props:`},{title:"What does Batching mean in ReactJS?",type:7,content:"Batching is nothing but grouping React multiple state updates together into a single render state to achieve better computational performance. Until React 18, we only batched updates during the React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default."},{title:"What are the advantages of Batching in ReactJS?",type:7,content:`- Batching is great for performance because it avoids unnecessary re-renders.
        - Batching also prevents my component from rendering half-finished states where only one state variable was updated, which may cause bugs.
        - Another reason to use batching is when the web application grows, the number of nested components will increase. Therefore, if a parent component executes an unbatched state updated, the entire component tree will be re-rendered per state update that is expensive.`},{title:"Which lifecycle methods of class component is replaced by useEffect in functional component?",type:7,content:`The lifecyce methods replaced by useEffect Hooks of functional component are componentDidMount(), componentDidUpdate(), and componentWillUnmount().

        - componentDidMount: is equivalent for running an effect once.
        - componentDidUpdate: is equivalent for running effects when things change.
        - componentWillUnmount: To run a hook as the component is about to unmount, we just have to return a function from the useEffect Hook`},{title:"Compare useState and useReducer implementations",type:7,content:`- useState updates state with setState, while useReducer with dispatch function.
        - useState passes down all the setState custom helper functions, while useReducer passes down just the dispatch - function.
        - useState needs to wrap functions in useCallback(if we want to memorize them), while dispatch function is - already memorized.
        - useState easier to write, useReducer is harder to implement and needs more logic to be coded.`},{title:"Do React Hooks cover all use cases for class components?",type:7,content:`No, The following methods have not been introduced in Hooks yet:
        - getSnapshotBeforeUpdate
        - getDerivedStateFromError
        - componentDidCatch`},{title:"How can I make use of Error Boundaries in functional React components?",type:7,content:`As of v16.2.0, there's no way to turn a functional component into an error boundary. The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you\u2019ll want to declare an error boundary component once and use it throughout my application.

        Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to update and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        A few third party packages on npm implement error boundary hooks.`},{title:"When would you use useRef?",type:7,content:`- To store a ref to DOM elements so I can later do something with them: useRef(null)
        - To store values without triggering re-renders: useRef()`},{title:"How would you pass data from child to parent component in React?",type:7,content:`Often, several components need to reflect the same changing data. In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called lifting state up.
        A common technique for these situations is to lift the state up to the first common ancestor of all the components that need to use the state (i.e. the PageComponent in this case) and pass down the state and state-altering functions to the child components as props.`},{title:"What is the purpose of super(props)?",type:7,content:"When I pass props to super, the props get assigned to this. Passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it."},{title:"Explain the Virtual DOM concept in React",type:7,content:`A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React\u2019s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. Check out this Full stack developer course online to learn more about react.

This Virtual DOM works in three simple steps.

Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
Then the difference between the previous DOM representation and the new one is calculated.
Once the calculations are done, the real DOM will be updated with only the things that have actually changed. `},{title:"Describe Flux vs MVC?",type:7,content:`Traditional MVC patterns have worked well for separating the concerns of data (Model), UI (View) and logic (Controller) \u2014 but MVC architectures frequently encounter two main problems:
        - Poorly defined data flow: The cascading updates which occur across views often lead to a tangled web of events which is difficult to debug.
        - Lack of data integrity: Model data can be mutated from anywhere, yielding unpredictable results across the UI.
        With the Flux pattern complex UIs no longer suffer from cascading updates; any given React component will be able to reconstruct its state based on the data provided by the store. The Flux pattern also enforces data integrity by restricting direct access to the shared data.
        `},{title:"Can you force a React component to rerender without calling setState?",type:7,content:`In my component, I can call this.forceUpdate() to force a rerender. Another way is this.setState(this.state);
        forceUpdate should be avoided because it deviates from a React mindset. The React docs cite an example of when forceUpdate might be used:
        By default, when my component's state or props change, my component will re-render. However, if these change implicitly (eg: data deep within an object changes without changing the object itself) or if my render() method depends on some other data, I can tell React that it needs to re-run render() by calling forceUpdate().`},{title:"Why does React use SyntheticEvents?",type:7,content:`React implements a synthetic events system that brings consistency and high performance to React apps and interfaces. It achieves consistency by normalizing events so that they have the same properties across different browsers and platforms.
        A synthetic event is a cross-browser wrapper around the browser\u2019s native event. It has the same interface as the browser\u2019s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
        It achieves high performance by automatically using event delegation. In actuality, React doesn\u2019t attach event handlers to the nodes themselves. Instead, a single event listener is attached to the root of the document. When an event is fired, React maps it to the appropriate component element.`},{title:"How would you go about investigating slow React application rendering?",type:7,content:`One of the most common issues in React applications is when components re-render unnecessarily. There are two tools provided by React that are helpful in these situations:
        - React.memo(): This prevents unnecessary re-rendering of function components
        - PureComponent: This prevents unnecessary re-rendering of class components
        Both of these tools rely on a shallow comparison of the props passed into the component\u2014if the props have not changed, then the component will not re-render. While both tools are very useful, the shallow comparison brings with it an additional performance penalty, so both can have a negative performance impact if used incorrectly. By using the React Profiler, performance can be measured before and after using these tools to ensure that performance is actually improved by making a given change.
        `},{title:"What's a Pure Functional Component in React?",type:7,content:`A function is said to be pure if:
        - Its return value is only determined by its input values
        - Its return value is always the same for the same input values
        A React component is considered pure if it renders the same output for the same state and props.
        With React.memo(), I can create memoized functional components that bail out of rendering on unnecessary updates using shallow comparison of props.`},{title:"What is the second argument that can optionally be passed to setState and what is its purpose?",type:7,content:`A callback function which will be invoked when setState has finished and the component is re-rendered.
        Something that\u2019s not spoken of a lot is that setState is asynchronous, which is why it takes in a second callback function. Typically it\u2019s best to use another lifecycle method rather than relying on this callback function, but it\u2019s good to know it exists.`},{title:"When is it important to pass props to super(), and why?",type:7,content:"The only one reason when one needs to pass props to super() is when I want to access this.props in constructor. passing or not passing props to super has no effect on later uses of this.props outside constructor."},{title:"Why would you need to bind event handlers to this?",type:7,content:`Binding is not something that is specifc to React, but rather how this works in Javascript. When I define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. In JavaScript, class methods are not bound by default. If I forget to bind this.someEventHandler and pass it to onChange, this will be undefined when the function is actually called.
        Generally, if I refer to a method without () after it, such as onChange={this.someEventHandler}, I should bind that method.`},{title:"What is the difference between using constructor vs getInitialState in React?",type:7,content:"The difference between constructor and getInitialState is the difference between ES6 and ES5 itself. I should initialize state in the constructor when using ES6 classes, and define the getInitialState method when using React.createClass."},{title:"Why doesn't this.props.children.map work?",type:7,content:`this.props.children is an opaque data structure. It can be either an array or a single element. In my case, this.props.children is probably a single element, which is why the .map() method is undefined.
        I should use the React.Children API when manipulating the children prop.`},{title:"How to create Props Proxy for HOC component?",type:7,content:"I can add/edit props passed to the Component as a props proxy"},{title:"How to conditionally add attributes to React components?",type:7,content:"For certain attributes, React is intelligent enough to omit the attribute if the value I pass to it is not truthy. I can also use && operator."},{title:"Does React re-render all components and sub components every time setState is called?",type:7,content:`yes.
        There is a method boolean shouldComponentUpdate(object nextProps, object nextState), each component has this method and it's responsible to determine "should component update (run render function)?" every time I change state or pass new props from parent component.
        I can write my own implementation of shouldComponentUpdate method for my component, but default implementation always returns true - meaning always re-run render function.`},{title:"Describe how events are handled in React",type:7,content:`In order to solve cross browser compatibility issues, my event handlers in React will be passed instances of SyntheticEvent, which is React\u2019s cross-browser wrapper around the browser\u2019s native event. These synthetic events have the same interface as native events you\u2019re used to, except they work identically across all browsers.
        What\u2019s mildly interesting is that React doesn\u2019t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn\u2019t need to worry about keeping track of event listeners when updating the DOM.
        `},{title:"How to apply validation on props in ReactJS?",type:7,content:`When the application is running in development mode, React will automatically check for all props that we set on components to make sure they must right correct and right data type. For incorrect type, it will generate warning messages in the console for development mode whereas it is disabled in production mode due performance impact. The mandatory prop is defined with isRequired.
        The set of predefined prop types are below
        - React.PropTypes.string
        - React.PropTypes.number
        - React.PropTypes.func
        - React.PropTypes.node
        - React.PropTypes.bool
        For example, we define propTypes for user component as below,`},{title:"When would I use StrictMode component in React?",type:7,content:"I've found it especially useful to implement strict mode when I'm working on new code bases and I want to see what kind of code/components I'm facing. Also if you're on bug hunting mode, sometimes it's a good idea to wrap with <StrictMode /> the components/blocks of code I think might be the source of the problem."},{title:"What's the difference between useCallback and useMemo in practice?",type:7,content:`With useCallback I memoize functions, useMemo memoizes any computed value.
        (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time I invoke memoFn, that complex computation starts again.
        (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.`},{title:"Explain why and when would I use useMemo()?",type:7,content:`Why:

        In the lifecycle of a component, React re-renders the component when an update is made. When React checks for any changes in a component, it may detect an unintended or unexpected change due to how JavaScript handles equality and shallow comparisons. This change in the React application will cause it to re-render unnecessarily.
        Additionally, if that re-rendering is an expensive operation, like a long for loop, it can hurt performance. Expensive operations can be costly in either time, memory, or processing.
        When:
        
        Optimal if the wrapped function is large and expensive.
        How:
        
        Memoization is an optimization technique which passes a complex function to be memoized. In memoization, the result is \u201Cremembered\u201D when the same parameters are passed-in subsequently.
        useMemo takes in a function and an array of dependencies. The dependency\u2019s list are the elements useMemo watches: if there are no changes, the function result will stay the same. Otherwise, it will re-run the function. If they don\u2019t change, it doesn\u2019t matter if our entire component re-renders, the function won\u2019t re-run but instead return the stored result.`},{title:"When to use useCallback, useMemo and useEffect?",type:7,content:`- useEffect - It's the alternative for the class component lifecycle methods componentDidMount, componentWillUnmount, componentDidUpdate, etc. I can also use it to create a side effect when dependencies change, i.e. "If some variable changes, do this".
        - useCallback - On every render, everything that's inside a functional component will run again. If a child component has a dependency on a function from the parent component, the child will re-render every time the parent re-renders even if that function "doesn't change" (the reference changes, but what the function does won't).
        It's used for optimization by avoiding unnecessary renders from the child, making the function change the reference only when dependencies change. I should use it when a function is a dependency of a side effect e.g. useEffect.
        - useMemo - It will run on every render, but with cached values. It will only use new values when certain dependencies change. It's used for optimization when I have expensive computations.`},{title:"Can you do Components Inheritance in React?",type:7,content:`The React Team has\u2019t found any use cases where we would recommend creating component inheritance hierarchies.
        Props and composition give I all the flexibility I need to customize a component\u2019s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
        If I want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.`},{title:"What is difference between Incremental DOM and Virtual DOM?",type:7,content:`- Incremental DOM is a library for building up DOM trees and updating them in-place when data changes. It differs from the established virtual DOM approach in that no intermediate tree is created (the existing tree is mutated in-place).
        This approach significantly reduces memory allocation and GC thrashing for incremental updates to the DOM tree therefore increasing performance significantly in some cases.
        - Virtual DOM compares (diff) a new entire virtual DOM with the previous virtual DOM for changes then applies those changes to the actual DOM. - This approach creates a new virtual DOM to determine the changes (memory heavy). Has a big memory footprint because it needs headroom for changes that "might" happen to the virtual DOM.`},{title:"When would you use flushSync in ReactJS?",type:7,content:`React 18 adds out-of-the-box performance improvements by doing more batching (automated) by default. Batching is when React groups multiple state updates into a single re-render for better performance.
        To opt-out of automatic batching, I can use flushSync so my component will be re-rendered after each state update. I might need it when for example some code may depend on reading something from the DOM immediately after a state change.`},{title:"When shall we use useReducer hook in ReactJS?",type:7,content:`useReducer is an alternative to useState. useReducer is usually preferable to useState when I have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
        An example will be a list of items, where I need to add, update and remove items in the state, Here I might have noticed that the state management logic takes a good part of the component body. useReducer helps to separate the concerns of rendering vs a concern of state management.
        useReducer also lets I optimize performance for components that trigger deep updates because I can pass dispatch down instead of callbacks. React guarantees that dispatch function identity is stable and won\u2019t change on re-renders. This is why it\u2019s safe to omit from the useEffect or useCallback dependency list.`},{title:"When to use useState vs useReducer?",type:7,content:`The decision of whether to use useState or useReducer isn't always black and white; there are many shades of grey. But,
        use useState if I have:
        - JavaScript primitives as state
        - Simple state transitions
        - Business logic within my component
        - Different properties that don't change in any correlated way and can be managed by multiple useState hooks.
        use useReducer if I have:
        - JavaScript objects or arrays as state
        - Complex state transitions
        - Complicated business logic more suitable for a reducer function (to separate concern of it)
        - Different properties tied together that should be managed in one state object (when state depends on state)
        `},{title:"How would you store non-state/instance variables in functional React components?",type:7,content:`I can use useRef hook (it's the recommended way stated in docs). useRef returns an object whose reference would not change across re-renders, the actual value for foo is then kept in the current property of that object.
        - Declaring variable: const a = useRef(5) // 5 is initial value
        - getting the value: a.current
        - setting the value: a.current = my_value`},{title:"What is a Pure Function?",type:7,content:"A Pure function is a function that doesn't depend on and doesn't modify the states of variables out of its scope. Essentially, this means that a pure function will always return the same result given same parameters."},{title:"Explain some difference between Flux and AngularJS (1.x) approach",type:7,content:`UI components in AngularJS typically rely on some internal $scope to store their data. This data can be directly mutated from within the UI component or anything given access to $scope \u2014 a risky situation for any part of the component or greater application which relies on that data.
        By contrast, the Flux pattern encourages the use of immutable data. Because the store is the central authority on all data, any mutations to that data must occur within the store. The risk of data pollution is greatly reduced.`},{title:"What is the key architectural difference between a JavaScript library such as React and a JavaScript framework such as Angular?",type:7,content:`React enables developers to render a user interface. To create a full front-end application, developers need other pieces, such as state management tools like Redux.
        Like React, Angular enables developers to render a user interface, but it is a \u201Cbatteries included\u201D framework that includes prescriptive, opinionated solutions to common requirements like state management.
        While there are many other considerations when comparing React and Angular specifically, this key architectural difference means that:
        - Using a library such as React can give a project a greater ability to evolve parts of the system\u2014again for example, state management\u2014over time, when new solutions are created by the open source community.
        - Using a framework such as Angular can make it easier for developers to get started and can also simplify maintenance.`},{title:"What is React Fiber?",type:7,content:`React Fiber is an ongoing reimplementation of React's core algorithm. The main difference between react and react fiber are these new features :-
        1. Incremental Rendering :- React v16.0 includes a completely rewritten server renderer. It\u2019s really fast. It supports streaming, so I can start sending bytes to the client faster
        2. Handle errors in the render API : To make class component an error boundary we define a new lifecycle method called componentDidCatch(error, info).
        3. Return multiple elements from render : With this new feature in React v16.0 now we can also return an array of elements, and string from component\u2019s render method.
        4. Portals : Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
        5. Fragments : A common pattern in React is for a component to return multiple elements. Fragments let us group a list of children without adding extra nodes to the DOM.`},{title:"How to avoid the need for binding in React?",type:7,content:`There are several common approaches used to avoid methods binding in React:
        - Define my Event Handler as an Inline Arrow Function
        - Define my Event Handler as an Arrow Function Assigned to a Class Field
        - Use a Function Component with Hooks`},{title:"How does React renderer work exactly when we call setState?",type:7,content:`There are two steps of what we may call render:
        - Virtual DOM render: when render method is called it returns a new virtual dom structure of the component. This render method is called always when I call setState(), because shouldComponentUpdate always returns true by default. So, by default, there is no optimisation here in React.
        - Native DOM render: React changes real DOM nodes in my browser only if they were changed in the Virtual DOM and as little as needed - this is that great React's feature which optimizes real DOM mutation and makes React fast.`},{title:"How to use React.memo()?",type:7,content:`With React.memo(), I can create memoized functional components that bail out of rendering on unnecessary updates using shallow comparison of props.
        Using the new React.memo() API, the functional component can be wrapped`},{title:"Can a custom React hook return JSX?",type:7,content:`While there is no hardcore restriction on how I should define custom hooks and what logic should contain, it's an anti-pattern to write hooks that return JSX.
        There are a few downsides to using hooks to return JSX
        - When I write a hook that returns JSX component, I are essentially defining the component within the functional component, so on each and every re-render I will be creating a new instance of the component. This will lead to the component being unmounted and mounted again. This is bad for performance and also buggy if I have stateful login within the component as the state will get reset with every re-render of the parent
        - By defining a JSX component within the hook, I are taking away the option of lazy loading my component if the need be.
        - Any performance optimization to the component will require I to make use of useMemo which doesn't give I the flexibility of a custom comparator function like React.memo()
        The benefit on the other hand is that I have control over the state of the component in the parent. However, I can still implement the same logic by using a controlled component approach`},{title:"What is the order of useInsertionEffect, useEffect and useLayoutEffect hooks at component generation?",type:7,content:`useInsertionEffect.

        It fires synchronously before all DOM mutations. Use this to inject styles into the DOM before reading layout in useLayoutEffect. So it runs before useLayoutEffect.
        useLayoutEffect
        
        It fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.
        useEffect.
        
        It will run after the render is committed to the screen. So it runs after useLayoutEffect.
        Therefore the order of running is:
        - useInsertionEffect
        - useLayoutEffect
        - useEffect`},{title:"What is Promise?",type:7,content:`JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another.
        A Promise is an object representing the eventual completion or failure of an asynchronous operation.
        `},{title:"What is async await keyword?",type:7,content:`Async/Await is used to work with promises in asynchronous functions. It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises easier to read and use. It makes asynchronous code look more like synchronous/procedural code, which is easier to understand
        `},{title:"What is AWS lambda?",type:7,content:`Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, and logging.
        Lambda is ideal for short-term tasks. AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.`},{title:"What is AWS EC2?",type:7,content:"EC2 is the AWS computing service, which offers computing capacity on demand with immediate availability and no set commitment to length of use. S3 is the AWS's first service. It offers the object storage over the web."},{title:"What is Microsoft Azure?",type:7,content:"Azure is the only consistent hybrid cloud, delivers unparalleled developer productivity, provides comprehensive, multilayered security, including the largest compliance coverage of any cloud provider, and you\u2019ll pay less for Azure as AWS is five times more expensive than Azure for Windows Server and SQL Server."},{title:"What is Microsoft Azure?",type:7,content:`Async/Await is used to work with promises in asynchronous functions. It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises easier to read and use. It makes asynchronous code look more like synchronous/procedural code, which is easier to understand
        `}];const hb=()=>{const[e,t]=b.exports.useState(""),[n,o]=b.exports.useState(!1),[a,r]=b.exports.useState([]),[i,s]=b.exports.useState(!1),l=b.exports.useRef(),c=b.exports.useCallback(d=>{d.key==="Escape"?(d.preventDefault(),l.current.focus(),t("")):d.key==="/"?(d.preventDefault(),l.current.focus(),l.current.select()):d.key==="\\"?(d.preventDefault(),o(h=>!h)):d.key==="F9"&&(d.preventDefault(),s(h=>!h))},[]);return b.exports.useEffect(()=>(window.addEventListener("keyup",c),()=>{window.removeEventListener("keyup",c)}),[c]),X("div",{className:"d-flex align-items-center justify-content-center mt-3",children:i?En("div",{className:"container",style:{maxWidth:"600px",marginBottom:"500px"},children:[X("div",{children:Uu.map((d,h)=>X(Ap,{className:"m-2",variant:`${a[h]?"":"outline-"}light`,onClick:()=>r(m=>{const v=[...m];return v[h]=!v[h],v}),children:d},h))}),En(tb,{children:[En("div",{className:"d-flex align-items-center justify-content-center mt-3",children:[X(Wu.Check,{className:"white d-flex align-items-center justify-content-center pe-2",type:"checkbox",checked:n,label:"Content(\\)",onChange:d=>o(d.target.checked)}),X(Wu.Control,{ref:l,type:"text",value:e,placeholder:"Search...",onChange:d=>t(d.target.value)})]}),X(Pa,{className:"mt-1 preline",children:[...cb,...nb,...ab,...ob,...lb,...ub,...rb,...db,...sb,...ib].sort((d,h)=>d<h).filter(d=>{const h=e.split(" ");return n?h.every(m=>d.title.toLowerCase().includes(m)||d.content.toLowerCase().includes(m)):h.every(m=>d.title.toLowerCase().includes(m))}).filter(d=>a.every(h=>!h)||a[d.type]).map((d,h)=>En(Pa.Item,{eventKey:h,children:[En(Pa.Header,{className:"d-flex align-items-center justify-content-between",children:[X(Cp,{pill:!0,className:"fw-normal",bg:"dark",children:Uu[d.type]}),X(Bu,{className:"ps-3",highlightClassName:"highlight",searchWords:e.split(" "),autoEscape:!0,textToHighlight:d.title})]}),X(Pa.Body,{className:"text-start text-content",children:X(Bu,{highlightClassName:"highlight",searchWords:e.split(" "),autoEscape:!0,textToHighlight:d.content})})]},h))})]})]}):X("div",{})})};function pb(){return X("div",{className:"App",children:X(hb,{})})}zi.createRoot(document.getElementById("root")).render(X(gt.StrictMode,{children:X(pb,{})}));
