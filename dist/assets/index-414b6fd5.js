(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function zr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Ur(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?ts(r):Ur(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Q(e))return e;if(V(e))return e}}const Zo=/;(?![^(]*\))/g,Qo=/:([^]+)/,es=/\/\*.*?\*\//gs;function ts(e){const t={};return e.replace(es,"").split(Zo).forEach(n=>{if(n){const r=n.split(Qo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Br(e){let t="";if(Q(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Br(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ns="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rs=zr(ns);function Ci(e){return!!e||e===""}const rr=e=>Q(e)?e:e==null?"":R(e)||V(e)&&(e.toString===Ni||!j(e.toString))?JSON.stringify(e,Ii,2):String(e),Ii=(e,t)=>t&&t.__v_isRef?Ii(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Si(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!R(t)&&!Mi(t)?String(t):t,q={},vt=[],Oe=()=>{},as=()=>!1,is=/^on[^a-z]/,Dn=e=>is.test(e),Hr=e=>e.startsWith("onUpdate:"),le=Object.assign,Yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},os=Object.prototype.hasOwnProperty,D=(e,t)=>os.call(e,t),R=Array.isArray,bt=e=>zn(e)==="[object Map]",Si=e=>zn(e)==="[object Set]",j=e=>typeof e=="function",Q=e=>typeof e=="string",Wr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Ti=e=>V(e)&&j(e.then)&&j(e.catch),Ni=Object.prototype.toString,zn=e=>Ni.call(e),ss=e=>zn(e).slice(8,-1),Mi=e=>zn(e)==="[object Object]",Kr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Un=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ls=/-(\w)/g,At=Un(e=>e.replace(ls,(t,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,Ct=Un(e=>e.replace(fs,"-$1").toLowerCase()),Fi=Un(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Un(e=>e?`on${Fi(e)}`:""),Sn=(e,t)=>!Object.is(e,t),ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Tn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ri=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const cs=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Se;class us{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function ds(e,t=Se){t&&t.active&&t.effects.push(e)}const Xr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&Ve)>0,Li=e=>(e.n&Ve)>0,ms=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},ps=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ji(a)&&!Li(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},pr=new WeakMap;let Rt=0,Ve=1;const hr=30;let _e;const lt=Symbol(""),gr=Symbol("");class qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ds(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Xe=!0,Ve=1<<++Rt,Rt<=hr?ms(this):Sa(this),this.fn()}finally{Rt<=hr&&ps(this),Ve=1<<--Rt,_e=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Sa(this),this.onStop&&this.onStop(),this.active=!1)}}function Sa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const $i=[];function It(){$i.push(Xe),Xe=!1}function St(){const e=$i.pop();Xe=e===void 0?!0:e}function pe(e,t,n){if(Xe&&_e){let r=pr.get(e);r||pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Xr()),Di(a)}}function Di(e,t){let n=!1;Rt<=hr?Li(e)||(e.n|=Ve,n=!ji(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function $e(e,t,n,r,a,i){const o=pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Ri(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Kr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),bt(e)&&s.push(o.get(gr)));break;case"delete":R(e)||(s.push(o.get(lt)),bt(e)&&s.push(o.get(gr)));break;case"set":bt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&vr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);vr(Xr(l))}}function vr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ta(r);for(const r of n)r.computed||Ta(r)}function Ta(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const hs=zr("__proto__,__v_isRef,__isVue"),zi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wr)),gs=Vr(),vs=Vr(!1,!0),bs=Vr(!0),Na=ys();function ys(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){It();const r=H(this)[t].apply(this,n);return St(),r}}),e}function Vr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Rs:Wi:t?Yi:Hi).get(r))return r;const o=R(r);if(!e&&o&&D(Na,a))return Reflect.get(Na,a,i);const s=Reflect.get(r,a,i);return(Wr(a)?zi.has(a):hs(a))||(e||pe(r,"get",a),t)?s:oe(s)?o&&Kr(a)?s:s.value:V(s)?e?Ki(s):Zr(s):s}}const xs=Ui(),_s=Ui(!0);function Ui(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&oe(o)&&!oe(a))return!1;if(!e&&(!br(a)&&!Bt(a)&&(o=H(o),a=H(a)),!R(n)&&oe(o)&&!oe(a)))return o.value=a,!0;const s=R(n)&&Kr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Sn(a,o)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function ws(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function ks(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!zi.has(t))&&pe(e,"has",t),n}function As(e){return pe(e,"iterate",R(e)?"length":lt),Reflect.ownKeys(e)}const Bi={get:gs,set:xs,deleteProperty:ws,has:ks,ownKeys:As},Os={get:bs,set(e,t){return!0},deleteProperty(e,t){return!0}},Es=le({},Bi,{get:vs,set:_s}),Jr=e=>e,Bn=e=>Reflect.getPrototypeOf(e);function sn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Bn(a),s=r?Jr:n?ta:ea;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function fn(e,t=!1){return e=e.__v_raw,!t&&pe(H(e),"iterate",lt),Reflect.get(e,"size",e)}function Ma(e){e=H(e);const t=H(this);return Bn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Fa(e,t){t=H(t);const n=H(this),{has:r,get:a}=Bn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Sn(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function Ra(e){const t=H(this),{has:n,get:r}=Bn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function ja(){const e=H(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function cn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Jr:e?ta:ea;return!e&&pe(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function un(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Jr:t?ta:ea;return!t&&pe(i,"iterate",l?gr:lt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ps(){const e={get(i){return sn(this,i)},get size(){return fn(this)},has:ln,add:Ma,set:Fa,delete:Ra,clear:ja,forEach:cn(!1,!1)},t={get(i){return sn(this,i,!1,!0)},get size(){return fn(this)},has:ln,add:Ma,set:Fa,delete:Ra,clear:ja,forEach:cn(!1,!0)},n={get(i){return sn(this,i,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:cn(!0,!1)},r={get(i){return sn(this,i,!0,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:cn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=un(i,!1,!1),n[i]=un(i,!0,!1),t[i]=un(i,!1,!0),r[i]=un(i,!0,!0)}),[e,n,t,r]}const[Cs,Is,Ss,Ts]=Ps();function Gr(e,t){const n=t?e?Ts:Ss:e?Is:Cs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Ns={get:Gr(!1,!1)},Ms={get:Gr(!1,!0)},Fs={get:Gr(!0,!1)},Hi=new WeakMap,Yi=new WeakMap,Wi=new WeakMap,Rs=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ls(e){return e.__v_skip||!Object.isExtensible(e)?0:js(ss(e))}function Zr(e){return Bt(e)?e:Qr(e,!1,Bi,Ns,Hi)}function $s(e){return Qr(e,!1,Es,Ms,Yi)}function Ki(e){return Qr(e,!0,Os,Fs,Wi)}function Qr(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ls(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Bt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function br(e){return!!(e&&e.__v_isShallow)}function Xi(e){return yt(e)||Bt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function qi(e){return Tn(e,"__v_skip",!0),e}const ea=e=>V(e)?Zr(e):e,ta=e=>V(e)?Ki(e):e;function Ds(e){Xe&&_e&&(e=H(e),Di(e.dep||(e.dep=Xr())))}function zs(e,t){e=H(e),e.dep&&vr(e.dep)}function oe(e){return!!(e&&e.__v_isRef===!0)}function Us(e){return oe(e)?e.value:e}const Bs={get:(e,t,n)=>Us(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vi(e){return yt(e)?e:new Proxy(e,Bs)}var Ji;class Hs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ji]=!1,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,zs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Ds(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ji="__v_isReadonly";function Ys(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Hs(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Ee(e,t,n,r){if(j(e)){const i=qe(e,t,n,r);return i&&Ti(i)&&i.catch(o=>{Hn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Ws(e,n,a,r)}function Ws(e,t,n,r=!0){console.error(e)}let Ht=!1,yr=!1;const ne=[];let Ne=0;const xt=[];let Le=null,at=0;const Gi=Promise.resolve();let na=null;function Ks(e){const t=na||Gi;return e?t.then(this?e.bind(this):e):t}function Xs(e){let t=Ne+1,n=ne.length;for(;t<n;){const r=t+n>>>1;Yt(ne[r])<e?t=r+1:n=r}return t}function ra(e){(!ne.length||!ne.includes(e,Ht&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ne.push(e):ne.splice(Xs(e.id),0,e),Zi())}function Zi(){!Ht&&!yr&&(yr=!0,na=Gi.then(eo))}function qs(e){const t=ne.indexOf(e);t>Ne&&ne.splice(t,1)}function Vs(e){R(e)?xt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?at+1:at))&&xt.push(e),Zi()}function La(e,t=Ht?Ne+1:0){for(;t<ne.length;t++){const n=ne[t];n&&n.pre&&(ne.splice(t,1),t--,n())}}function Qi(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Yt(n)-Yt(r)),at=0;at<Le.length;at++)Le[at]();Le=null,at=0}}const Yt=e=>e.id==null?1/0:e.id,Js=(e,t)=>{const n=Yt(e)-Yt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eo(e){yr=!1,Ht=!0,ne.sort(Js);const t=Oe;try{for(Ne=0;Ne<ne.length;Ne++){const n=ne[Ne];n&&n.active!==!1&&qe(n,null,14)}}finally{Ne=0,ne.length=0,Qi(),Ht=!1,na=null,(ne.length||xt.length)&&eo()}}function Gs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(k=>Q(k)?k.trim():k)),m&&(a=n.map(Ri))}let s,l=r[s=ar(t)]||r[s=ar(At(t))];!l&&i&&(l=r[s=ar(Ct(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function to(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=to(c,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):le(o,i),V(e)&&r.set(e,o),o)}function Yn(e,t){return!e||!Dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Ct(t))||D(e,t))}let Me=null,Wn=null;function Nn(e){const t=Me;return Me=e,Wn=e&&e.type.__scopeId||null,t}function Zs(e){Wn=e}function Qs(){Wn=null}function el(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=Nn(t);let o;try{o=e(...a)}finally{Nn(i),r._d&&Wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:N}=e;let z,_;const P=Nn(e);try{if(n.shapeFlag&4){const L=a||r;z=Te(d.call(L,L,m,i,k,v,F)),_=l}else{const L=t;z=Te(L.length>1?L(i,{attrs:l,slots:s,emit:c}):L(i,null)),_=t.props?l:tl(l)}}catch(L){$t.length=0,Hn(L,e,1),z=se(Wt)}let E=z;if(_&&N!==!1){const L=Object.keys(_),{shapeFlag:U}=E;L.length&&U&7&&(o&&L.some(Hr)&&(_=nl(_,o)),E=Ot(E,_))}return n.dirs&&(E=Ot(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),z=E,Nn(P),z}const tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Dn(n))&&((t||(t={}))[n]=e[n]);return t},nl=(e,t)=>{const n={};for(const r in e)(!Hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Yn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$a(r,o,c):!0:!!o;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Yn(n,i))return!0}return!1}function al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const il=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Vs(e)}function sl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){const r=re||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const dn={};function An(e,t,n){return no(e,t,n)}function no(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=re;let l,c=!1,d=!1;if(oe(e)?(l=()=>e.value,c=br(e)):yt(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(E=>yt(E)||br(E)),l=()=>e.map(E=>{if(oe(E))return E.value;if(yt(E))return pt(E);if(j(E))return qe(E,s,2)})):j(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ee(e,s,3,[v])}:l=Oe,t&&r){const E=l;l=()=>pt(E())}let m,v=E=>{m=_.onStop=()=>{qe(E,s,4)}},k;if(Xt)if(v=Oe,t?n&&Ee(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=nf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Oe;let F=d?new Array(e.length).fill(dn):dn;const N=()=>{if(_.active)if(t){const E=_.run();(r||c||(d?E.some((L,U)=>Sn(L,F[U])):Sn(E,F)))&&(m&&m(),Ee(t,s,3,[E,F===dn?void 0:d&&F[0]===dn?[]:F,v]),F=E)}else _.run()};N.allowRecurse=!!t;let z;a==="sync"?z=N:a==="post"?z=()=>ue(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),z=()=>ra(N));const _=new qr(l,z);t?n?N():F=_.run():a==="post"?ue(_.run.bind(_),s&&s.suspense):_.run();const P=()=>{_.stop(),s&&s.scope&&Yr(s.scope.effects,_)};return k&&k.push(P),P}function ll(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?ro(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=re;Et(this);const s=no(a,i.bind(r),n);return o?Et(o):ft(),s}function ro(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))pt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(Si(e)||bt(e))e.forEach(n=>{pt(n,t)});else if(Mi(e))for(const n in e)pt(e[n],t);return e}function aa(e){return j(e)?{setup:e,name:e.name}:e}const On=e=>!!e.type.__asyncLoader,ao=e=>e.type.__isKeepAlive;function fl(e,t){io(e,"a",t)}function cl(e,t){io(e,"da",t)}function io(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Kn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ao(a.parent.vnode)&&ul(r,t,n,a),a=a.parent}}function ul(e,t,n,r){const a=Kn(t,e,r,!0);oo(()=>{Yr(r[t],a)},n)}function Kn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;It(),Et(n);const s=Ee(t,n,e,o);return ft(),St(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=re)=>(!Xt||e==="sp")&&Kn(e,(...r)=>t(...r),n),dl=Be("bm"),ml=Be("m"),pl=Be("bu"),hl=Be("u"),gl=Be("bum"),oo=Be("um"),vl=Be("sp"),bl=Be("rtg"),yl=Be("rtc");function xl(e,t=re){Kn("ec",e,t)}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(It(),Ee(l,n,8,[e.el,s,e,t]),St())}}const _l=Symbol();function wl(e,t,n,r){let a;const i=n&&n[r];if(R(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const xr=e=>e?vo(e)?la(e)||e.proxy:xr(e.parent):null,Lt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xr(e.parent),$root:e=>xr(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>ra(e.update)),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>ll.bind(e)}),sr=(e,t)=>e!==q&&!e.__isScriptSetup&&D(e,t),kl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return o[t]=1,r[t];if(a!==q&&D(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&D(c,t))return o[t]=3,i[t];if(n!==q&&D(n,t))return o[t]=4,n[t];_r&&(o[t]=0)}}const d=Lt[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==q&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&D(e,o)||sr(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Lt,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let _r=!0;function Al(e){const t=ia(e),n=e.proxy,r=e.ctx;_r=!1,t.beforeCreate&&Da(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:N,deactivated:z,beforeDestroy:_,beforeUnmount:P,destroyed:E,unmounted:L,render:U,renderTracked:fe,renderTriggered:te,errorCaptured:be,serverPrefetch:ge,expose:Re,inheritAttrs:Nt,components:nn,directives:rn,filters:er}=t;if(c&&Ol(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const Y=o[J];j(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Zr(J))}if(_r=!0,i)for(const J in i){const Y=i[J],Qe=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Oe,an=!j(Y)&&j(Y.set)?Y.set.bind(n):Oe,et=ve({get:Qe,set:an});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>et.value,set:Pe=>et.value=Pe})}if(s)for(const J in s)so(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{sl(Y,J[Y])})}d&&Da(d,e,"c");function ae(J,Y){R(Y)?Y.forEach(Qe=>J(Qe.bind(n))):Y&&J(Y.bind(n))}if(ae(dl,m),ae(ml,v),ae(pl,k),ae(hl,F),ae(fl,N),ae(cl,z),ae(xl,be),ae(yl,fe),ae(bl,te),ae(gl,P),ae(oo,L),ae(vl,ge),R(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:Qe=>n[Y]=Qe})})}else e.exposed||(e.exposed={});U&&e.render===Oe&&(e.render=U),Nt!=null&&(e.inheritAttrs=Nt),nn&&(e.components=nn),rn&&(e.directives=rn)}function Ol(e,t,n=Oe,r=!1){R(e)&&(e=wr(e));for(const a in e){const i=e[a];let o;V(i)?"default"in i?o=kn(i.from||a,i.default,!0):o=kn(i.from||a):o=kn(i),oe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Da(e,t,n){Ee(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function so(e,t,n,r){const a=r.includes(".")?ro(n,r):()=>n[r];if(Q(e)){const i=t[e];j(i)&&An(a,i)}else if(j(e))An(a,e.bind(n));else if(V(e))if(R(e))e.forEach(i=>so(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&An(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Mn(l,c,o,!0)),Mn(l,t,o)),V(t)&&i.set(t,l),l}function Mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Mn(e,i,n,!0),a&&a.forEach(o=>Mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=El[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const El={data:za,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:rt,directives:rt,watch:Cl,provide:za,inject:Pl};function za(e,t){return t?e?function(){return le(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Pl(e,t){return rt(wr(e),wr(t))}function wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?le(le(Object.create(null),e),t):t}function Cl(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function Il(e,t,n,r=!1){const a={},i={};Tn(i,qn,1),e.propsDefaults=Object.create(null),lo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:$s(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Sl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Yn(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const F=At(v);a[F]=kr(l,s,F,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{lo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=Ct(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=kr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m))&&(delete i[m],c=!0)}c&&$e(e,"set","$attrs")}function lo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(wn(l))continue;const c=t[l];let d;a&&D(a,d=At(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Yn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=kr(a,l,m,c[m],e,!D(c,m))}}return o}function kr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Et(a),r=c[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function fo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,k]=fo(m,t,!0);le(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,vt),vt;if(R(i))for(let d=0;d<i.length;d++){const m=At(i[d]);Ua(m)&&(o[m]=q)}else if(i)for(const d in i){const m=At(d);if(Ua(m)){const v=i[d],k=o[m]=R(v)||j(v)?{type:v}:Object.assign({},v);if(k){const F=Ya(Boolean,k.type),N=Ya(String,k.type);k[0]=F>-1,k[1]=N<0||F<N,(F>-1||D(k,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Ua(e){return e[0]!=="$"}function Ba(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ha(e,t){return Ba(e)===Ba(t)}function Ya(e,t){return R(t)?t.findIndex(n=>Ha(n,e)):j(t)&&Ha(t,e)?0:-1}const co=e=>e[0]==="_"||e==="$stable",oa=e=>R(e)?e.map(Te):[Te(e)],Tl=(e,t,n)=>{if(t._n)return t;const r=el((...a)=>oa(t(...a)),n);return r._c=!1,r},uo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(co(a))continue;const i=e[a];if(j(i))t[a]=Tl(a,i,r);else if(i!=null){const o=oa(i);t[a]=()=>o}}},mo=(e,t)=>{const n=oa(t);e.slots.default=()=>n},Nl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Tn(t,"_",n)):uo(t,e.slots={})}else e.slots={},t&&mo(e,t);Tn(e.slots,qn,1)},Ml=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,uo(t,a)),o=t}else t&&(mo(e,t),o={default:1});if(i)for(const s in a)!co(s)&&!(s in o)&&delete a[s]};function po(){return{app:null,config:{isNativeTag:as,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fl=0;function Rl(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=po(),o=new Set;let s=!1;const l=i.app={_uid:Fl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:rf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=se(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,la(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Ar(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>Ar(v,t&&(R(t)?t[k]:t),n,r,a));return}if(On(r)&&!a)return;const i=r.shapeFlag&4?la(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(Q(c)?(d[c]=null,D(m,c)&&(m[c]=null)):oe(c)&&(c.value=null)),j(l))qe(l,s,12,[o,d]);else{const v=Q(l),k=oe(l);if(v||k){const F=()=>{if(e.f){const N=v?D(m,l)?m[l]:d[l]:l.value;a?R(N)&&Yr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,ue(F,n)):F()}}}const ue=ol;function jl(e){return Ll(e)}function Ll(e,t){const n=cs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Oe,insertStaticContent:F}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ft(f,u)&&(g=on(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Xn:z(f,u,p,g);break;case Wt:_(f,u,p,g);break;case En:f==null&&P(u,p,g,A);break;case xe:nn(f,u,p,g,h,x,A,y,w);break;default:C&1?U(f,u,p,g,h,x,A,y,w):C&6?rn(f,u,p,g,h,x,A,y,w):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,y,w,dt)}S!=null&&h&&Ar(S,f&&f.ref,x,u||f,!u)},z=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},_=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},P=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},L=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?fe(u,p,g,h,x,A,y,w):ge(f,u,h,x,A,y,w)},fe=(f,u,p,g,h,x,A,y)=>{let w,b;const{type:S,props:C,shapeFlag:T,transition:M,dirs:$}=f;if(w=f.el=o(f.type,x,C&&C.is,C),T&8?d(w,f.children):T&16&&be(f.children,w,null,g,h,x&&S!=="foreignObject",A,y),$&&tt(f,null,g,"created"),C){for(const B in C)B!=="value"&&!wn(B)&&i(w,B,null,C[B],x,f.children,g,h,je);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ie(b,g,f)}te(w,f,f.scopeId,A,g),$&&tt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||W||$)&&ue(()=>{b&&Ie(b,g,f),W&&M.enter(w),$&&tt(f,null,g,"mounted")},h)},te=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;te(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const S=f[b]=y?Ke(f[b]):Te(f[b]);N(null,S,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:S}=u;w|=f.patchFlag&16;const C=f.props||q,T=u.props||q;let M;p&&nt(p,!1),(M=T.onVnodeBeforeUpdate)&&Ie(M,p,u,f),S&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const $=h&&u.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,g,$,x):A||Y(f,u,y,null,p,g,$,x,!1),w>0){if(w&16)Nt(y,u,C,T,p,g,h);else if(w&2&&C.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",C.style,T.style,h),w&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],ye=C[Z],mt=T[Z];(mt!==ye||Z==="value")&&i(y,Z,ye,mt,h,f.children,p,g,je)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Nt(y,u,C,T,p,g,h);((M=T.onVnodeUpdated)||S)&&ue(()=>{M&&Ie(M,p,u,f),S&&tt(u,f,p,"updated")},g)},Re=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],S=w.el&&(w.type===xe||!Ft(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,S,null,g,h,x,A,!0)}},Nt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!wn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,je);for(const y in g){if(wn(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,je)}"value"in g&&i(f,"value",p.value,g.value)}},nn=(f,u,p,g,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:M}=u;M&&(y=y?y.concat(M):M),f==null?(r(b,p,g),r(S,p,g),be(u.children,p,S,h,x,A,y,w)):C>0&&C&64&&T&&f.dynamicChildren?(Re(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&ho(f,u,!0)):Y(f,u,p,S,h,x,A,y,w)},rn=(f,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):er(u,p,g,h,x,A,w):ka(f,u,w)},er=(f,u,p,g,h,x,A)=>{const y=f.component=Vl(f,g,h);if(ao(f)&&(y.ctx.renderer=dt),Jl(y),y.asyncDep){if(h&&h.registerDep(y,ae),!f.el){const w=y.subTree=se(Wt);_(null,w,u,p)}return}ae(y,f,u,p,h,x,A)},ka=(f,u,p)=>{const g=u.component=f.component;if(rl(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,qs(g.update),g.update();else u.el=f.el,g.vnode=u},ae=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:T,parent:M,vnode:$}=f,W=S,B;nt(f,!1),S?(S.el=$.el,J(f,S,A)):S=$,C&&ir(C),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Ie(B,M,S,$),nt(f,!0);const Z=or(f),ye=f.subTree;f.subTree=Z,N(ye,Z,m(ye.el),on(ye),f,h,x),S.el=Z.el,W===null&&al(f,Z.el),T&&ue(T,h),(B=S.props&&S.props.onVnodeUpdated)&&ue(()=>Ie(B,M,S,$),h)}else{let S;const{el:C,props:T}=u,{bm:M,m:$,parent:W}=f,B=On(u);if(nt(f,!1),M&&ir(M),!B&&(S=T&&T.onVnodeBeforeMount)&&Ie(S,W,u),nt(f,!0),C&&nr){const Z=()=>{f.subTree=or(f),nr(C,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=or(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if($&&ue($,h),!B&&(S=T&&T.onVnodeMounted)){const Z=u;ue(()=>Ie(S,W,Z),h)}(u.shapeFlag&256||W&&On(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new qr(y,()=>ra(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,nt(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Sl(f,u.props,g,p),Ml(f,u.children,p),It(),La(),St()},Y=(f,u,p,g,h,x,A,y,w=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:T,shapeFlag:M}=u;if(T>0){if(T&128){an(b,C,p,g,h,x,A,y,w);return}else if(T&256){Qe(b,C,p,g,h,x,A,y,w);return}}M&8?(S&16&&je(b,h,x),C!==b&&d(p,C)):S&16?M&16?an(b,C,p,g,h,x,A,y,w):je(b,h,x,!0):(S&8&&d(p,""),M&16&&be(C,p,g,h,x,A,y,w))},Qe=(f,u,p,g,h,x,A,y,w)=>{f=f||vt,u=u||vt;const b=f.length,S=u.length,C=Math.min(b,S);let T;for(T=0;T<C;T++){const M=u[T]=w?Ke(u[T]):Te(u[T]);N(f[T],M,p,null,h,x,A,y,w)}b>S?je(f,h,x,!0,!1,C):be(u,p,g,h,x,A,y,w,C)},an=(f,u,p,g,h,x,A,y,w)=>{let b=0;const S=u.length;let C=f.length-1,T=S-1;for(;b<=C&&b<=T;){const M=f[b],$=u[b]=w?Ke(u[b]):Te(u[b]);if(Ft(M,$))N(M,$,p,null,h,x,A,y,w);else break;b++}for(;b<=C&&b<=T;){const M=f[C],$=u[T]=w?Ke(u[T]):Te(u[T]);if(Ft(M,$))N(M,$,p,null,h,x,A,y,w);else break;C--,T--}if(b>C){if(b<=T){const M=T+1,$=M<S?u[M].el:g;for(;b<=T;)N(null,u[b]=w?Ke(u[b]):Te(u[b]),p,$,h,x,A,y,w),b++}}else if(b>T)for(;b<=C;)Pe(f[b],h,x,!0),b++;else{const M=b,$=b,W=new Map;for(b=$;b<=T;b++){const de=u[b]=w?Ke(u[b]):Te(u[b]);de.key!=null&&W.set(de.key,b)}let B,Z=0;const ye=T-$+1;let mt=!1,Ea=0;const Mt=new Array(ye);for(b=0;b<ye;b++)Mt[b]=0;for(b=M;b<=C;b++){const de=f[b];if(Z>=ye){Pe(de,h,x,!0);continue}let Ce;if(de.key!=null)Ce=W.get(de.key);else for(B=$;B<=T;B++)if(Mt[B-$]===0&&Ft(de,u[B])){Ce=B;break}Ce===void 0?Pe(de,h,x,!0):(Mt[Ce-$]=b+1,Ce>=Ea?Ea=Ce:mt=!0,N(de,u[Ce],p,null,h,x,A,y,w),Z++)}const Pa=mt?$l(Mt):vt;for(B=Pa.length-1,b=ye-1;b>=0;b--){const de=$+b,Ce=u[de],Ca=de+1<S?u[de+1].el:g;Mt[b]===0?N(null,Ce,p,Ca,h,x,A,y,w):mt&&(B<0||b!==Pa[B]?et(Ce,p,Ca,2):B--)}}},et=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,dt);return}if(A===xe){r(x,u,p);for(let C=0;C<w.length;C++)et(w[C],u,p,g);r(f.anchor,u,p);return}if(A===En){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:C,delayLeave:T,afterLeave:M}=y,$=()=>r(x,u,p),W=()=>{C(x,()=>{$(),M&&M()})};T?T(x,$,W):W()}else r(x,u,p)},Pe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:T}=f;if(y!=null&&Ar(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&T,$=!On(f);let W;if($&&(W=A&&A.onVnodeBeforeUnmount)&&Ie(W,u,f),S&6)Go(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&tt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,dt,g):b&&(x!==xe||C>0&&C&64)?je(b,u,p,!1,!0):(x===xe&&C&384||!h&&S&16)&&je(w,u,p),g&&Aa(f)}($&&(W=A&&A.onVnodeUnmounted)||M)&&ue(()=>{W&&Ie(W,u,f),M&&tt(f,null,u,"unmounted")},p)},Aa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xe){Jo(p,g);return}if(u===En){L(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},Jo=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},Go=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ir(g),h.stop(),x&&(x.active=!1,Pe(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pe(f[A],u,p,g,h)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Oa=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),La(),Qi(),u._vnode=f},dt={p:N,um:Pe,m:et,r:Aa,mt:er,mc:be,pc:Y,pbc:Re,n:on,o:e};let tr,nr;return t&&([tr,nr]=t(dt)),{render:Oa,hydrate:tr,createApp:Rl(Oa,tr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ho(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||ho(o,s)),s.type===Xn&&(s.el=o.el)}}function $l(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Dl=e=>e.__isTeleport,xe=Symbol(void 0),Xn=Symbol(void 0),Wt=Symbol(void 0),En=Symbol(void 0),$t=[];let ke=null;function _t(e=!1){$t.push(ke=e?null:[])}function zl(){$t.pop(),ke=$t[$t.length-1]||null}let Kt=1;function Wa(e){Kt+=e}function Ul(e){return e.dynamicChildren=Kt>0?ke||vt:null,zl(),Kt>0&&ke&&ke.push(e),e}function wt(e,t,n,r,a,i){return Ul(me(e,t,n,r,a,i,!0))}function Or(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const qn="__vInternal",go=({key:e})=>e??null,Pn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Q(e)||oe(e)||j(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function me(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&go(t),ref:t&&Pn(t),scopeId:Wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(sa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Kt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const se=Bl;function Bl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_l)&&(e=Wt),Or(e)){const s=Ot(e,t,!0);return n&&sa(s,n),Kt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(ef(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=Br(s)),V(l)&&(Xi(l)&&!R(l)&&(l=le({},l)),t.style=Ur(l))}const o=Q(e)?1:il(e)?128:Dl(e)?64:V(e)?4:j(e)?2:0;return me(e,t,n,r,a,o,i,!0)}function Hl(e){return e?Xi(e)||qn in e?le({},e):e:null}function Ot(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Kl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&go(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Pn(t)):[a,Pn(t)]:Pn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Yl(e=" ",t=0){return se(Xn,null,e,t)}function Wl(e,t){const n=se(En,null,e);return n.staticCount=t,n}function Te(e){return e==null||typeof e=="boolean"?se(Wt):R(e)?se(xe,null,e.slice()):typeof e=="object"?Ke(e):se(Xn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function sa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),sa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(qn in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Yl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Br([t.class,r.class]));else if(a==="style")t.style=Ur([t.style,r.style]);else if(Dn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Ee(e,t,7,[n,r])}const Xl=po();let ql=0;function Vl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Xl,i={uid:ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new us(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fo(r,a),emitsOptions:to(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gs.bind(null,i),e.ce&&e.ce(i),i}let re=null;const Et=e=>{re=e,e.scope.on()},ft=()=>{re&&re.scope.off(),re=null};function vo(e){return e.vnode.shapeFlag&4}let Xt=!1;function Jl(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=vo(e);Il(e,n,a,t),Nl(e,r);const i=a?Gl(e,t):void 0;return Xt=!1,i}function Gl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qi(new Proxy(e.ctx,kl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ql(e):null;Et(e),It();const i=qe(r,e,0,[e.props,a]);if(St(),ft(),Ti(i)){if(i.then(ft,ft),t)return i.then(o=>{Ka(e,o,t)}).catch(o=>{Hn(o,e,0)});e.asyncDep=i}else Ka(e,i,t)}else bo(e,t)}function Ka(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Vi(t)),bo(e,n)}let Xa;function bo(e,t,n){const r=e.type;if(!e.render){if(!t&&Xa&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=Xa(a,c)}}e.render=r.render||Oe}Et(e),It(),Al(e),St(),ft()}function Zl(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function Ql(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Zl(e))},slots:e.slots,emit:e.emit,expose:t}}function la(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vi(qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function ef(e){return j(e)&&"__vccOpts"in e}const ve=(e,t)=>Ys(e,t,Xt);function yo(e,t,n){const r=arguments.length;return r===2?V(t)&&!R(t)?Or(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Or(n)&&(n=[n]),se(e,t,n))}const tf=Symbol(""),nf=()=>kn(tf),rf="3.2.45",af="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,qa=it&&it.createElement("template"),of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(af,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lf(e,t,n){const r=e.style,a=Q(n);if(n&&!a){for(const i in n)Er(r,i,n[i]);if(t&&!Q(t))for(const i in t)n[i]==null&&Er(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Va=/\s*!important$/;function Er(e,t,n){if(R(n))n.forEach(r=>Er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ff(e,t);Va.test(n)?e.setProperty(Ct(r),n.replace(Va,""),"important"):e[r]=n}}const Ja=["Webkit","Moz","ms"],lr={};function ff(e,t){const n=lr[t];if(n)return n;let r=At(t);if(r!=="filter"&&r in e)return lr[t]=r;r=Fi(r);for(let a=0;a<Ja.length;a++){const i=Ja[a]+r;if(i in e)return lr[t]=i}return t}const Ga="http://www.w3.org/1999/xlink";function cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n);else{const i=rs(t);n==null||i&&!Ci(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ci(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function df(e,t,n,r){e.addEventListener(t,n,r)}function mf(e,t,n,r){e.removeEventListener(t,n,r)}function pf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=hf(t);if(r){const c=i[t]=bf(r,a);df(e,s,c,l)}else o&&(mf(e,s,o,l),i[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function hf(e){let t;if(Za.test(e)){t={};let r;for(;r=e.match(Za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let fr=0;const gf=Promise.resolve(),vf=()=>fr||(gf.then(()=>fr=0),fr=Date.now());function bf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(yf(r,n.value),t,5,[r])};return n.value=e,n.attached=vf(),n}function yf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Qa=/^on[a-z]/,xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?sf(e,r,a):t==="style"?lf(e,n,r):Dn(t)?Hr(t)||pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_f(e,t,r,a))?uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cf(e,t,r,a))};function _f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qa.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qa.test(t)&&Q(n)?!1:t in e}const wf=le({patchProp:xf},of);let ei;function kf(){return ei||(ei=jl(wf))}const Af=(...e)=>{const t=kf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Of(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Of(e){return Q(e)?document.querySelector(e):e}const Ef="/andresNavarro/assets/logo3-e88c0e6d.svg",Pf={class:"row justify-content-center portada"},Cf=me("div",{class:"col-lg-6 col-8"},[me("img",{class:"mb-5",src:Ef,alt:""}),me("p",{class:"text-white text-center"},"Productor, compositor y pianista. ")],-1),If=[Cf];function Sf(e,t){return _t(),wt("div",Pf,If)}const Vn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Tf={},Nf=Vn(Tf,[["render",Sf]]),Mf="/andresNavarro/assets/logo2-5a60427c.svg",Ff="/andresNavarro/assets/instagram-ae3b5226.svg",Rf={class:"mb-5"},jf=Wl('<div class="nav-bar p-3"><div class="row justify-content-between"><div class="col-lg-1 col-3"><img src="'+Mf+'" alt=""></div><div class="col-1"><div class="d-flex justify-content-center align-items-center"><a href="https://www.instagram.com/andresnavrro/" target="_blank"><img class="social-icon" src="'+Ff+'" alt=""></a></div></div></div></div>',1),Lf=[jf];function $f(e,t,n,r,a,i){return _t(),wt("div",Rf,Lf)}const Df={},zf=Vn(Df,[["render",$f]]),Uf={class:"p-5 mx-5"},Bf={class:"content-cards row justify-content-center align-items-end"},Hf={class:"tarjeta-album text-white h-100"},Yf=["src"],Wf={class:"text-center"},Kf={class:"mb-1"},Xf={class:"mb-1"},qf={class:"mb-1"};function Vf(e,t,n,r,a,i){return _t(),wt("div",Uf,[me("div",Bf,[(_t(!0),wt(xe,null,wl(a.items,(o,s)=>(_t(),wt("div",{class:"col-xl-3",key:s},[me("div",Hf,[me("img",{src:o.imagen},null,8,Yf),me("div",Wf,[me("h3",Kf,rr(o.name),1),me("h5",Xf,rr(o.artist),1),me("p",qf,rr(o.rol),1)])])]))),128))])])}const Jf={data(){return{items:[{imagen:"./src/assets/imgs/img3.jpg",name:"Si te vas",artist:"Josele",rol:"Piano y produccion"},{imagen:"./src/assets/imgs/img5.jpg",name:"Somos y nos tenemos",artist:"El Rila",rol:"Piano y co-produccion"},{imagen:"./src/assets/imgs/img4.png",name:"Adictivo",artist:"Bienmeli",rol:"Piano y co-produccion"},{imagen:"./src/assets/imgs/img6.jpg",name:"So High",artist:"Garca",rol:"Piano y produccion"},{imagen:"./src/assets/imgs/img2.jpg",name:"Girl",artist:"El Rila ft El Ruido",rol:"Piano y produccion"},{imagen:"./src/assets/imgs/forero.jpg",name:"Raices de un corazón",artist:"Andres forero",rol:"Piano"},{imagen:"./src/assets/imgs/kuisi.jpg",name:"Tradicion Viva",artist:"Kuisitambo",rol:"Piano"},{imagen:"./src/assets/imgs/img1.jpg",name:"Entre montaña y cemento",artist:"Ricardo Andres",rol:"Piano"}]}}},Gf=Vn(Jf,[["render",Vf]]);const Zf=e=>(Zs("data-v-0837ce3e"),e=e(),Qs(),e),Qf=Zf(()=>me("br",null,null,-1)),ec={__name:"App",setup(e){return(t,n)=>(_t(),wt(xe,null,[se(zf),Qf,se(Nf),se(Gf)],64))}},tc=Vn(ec,[["__scopeId","data-v-0837ce3e"]]);function ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ti(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fn(e){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fn(e)}function nc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rc(e,t,n){return t&&ni(e.prototype,t),n&&ni(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fa(e,t){return ic(e)||sc(e,t)||xo(e,t)||fc()}function Qt(e){return ac(e)||oc(e)||xo(e)||lc()}function ac(e){if(Array.isArray(e))return Pr(e)}function ic(e){if(Array.isArray(e))return e}function oc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function xo(e,t){if(e){if(typeof e=="string")return Pr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pr(e,t)}}function Pr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ri=function(){},ca={},_o={},wo=null,ko={mark:ri,measure:ri};try{typeof window<"u"&&(ca=window),typeof document<"u"&&(_o=document),typeof MutationObserver<"u"&&(wo=MutationObserver),typeof performance<"u"&&(ko=performance)}catch{}var cc=ca.navigator||{},ai=cc.userAgent,ii=ai===void 0?"":ai,Je=ca,X=_o,oi=wo,mn=ko;Je.document;var He=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Ao=~ii.indexOf("MSIE")||~ii.indexOf("Trident/"),pn,hn,gn,vn,bn,De="___FONT_AWESOME___",Cr=16,Oo="fa",Eo="svg-inline--fa",ct="data-fa-i2svg",Ir="data-fa-pseudo-element",uc="data-fa-pseudo-element-pending",ua="data-prefix",da="data-icon",si="fontawesome-i2svg",dc="async",mc=["HTML","HEAD","STYLE","SCRIPT"],Po=function(){try{return!0}catch{return!1}}(),K="classic",G="sharp",ma=[K,G];function en(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var qt=en((pn={},ee(pn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(pn,G,{fa:"solid",fass:"solid","fa-solid":"solid"}),pn)),Vt=en((hn={},ee(hn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(hn,G,{solid:"fass"}),hn)),Jt=en((gn={},ee(gn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(gn,G,{fass:"fa-solid"}),gn)),pc=en((vn={},ee(vn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(vn,G,{"fa-solid":"fass"}),vn)),hc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Co="fa-layers-text",gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vc=en((bn={},ee(bn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(bn,G,{900:"fass"}),bn)),Io=[1,2,3,4,5,6,7,8,9,10],bc=Io.concat([11,12,13,14,15,16,17,18,19,20]),yc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Vt[K]).map(Gt.add.bind(Gt));Object.keys(Vt[G]).map(Gt.add.bind(Gt));var xc=[].concat(ma,Qt(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Io.map(function(e){return"".concat(e,"x")})).concat(bc.map(function(e){return"w-".concat(e)})),Dt=Je.FontAwesomeConfig||{};function _c(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var kc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kc.forEach(function(e){var t=fa(e,2),n=t[0],r=t[1],a=wc(_c(n));a!=null&&(Dt[r]=a)})}var So={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oo,replacementClass:Eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Pt=O(O({},So),Dt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var I={};Object.keys(So).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Pt[e]=n,zt.forEach(function(r){return r(I)})},get:function(){return Pt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,zt.forEach(function(n){return n(I)})},get:function(){return Pt.cssPrefix}});Je.FontAwesomeConfig=I;var zt=[];function Ac(e){return zt.push(e),function(){zt.splice(zt.indexOf(e),1)}}var We=Cr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oc(e){if(!(!e||!He)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=Ec[Math.random()*62|0];return t}function Tt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pa(e){return e.classList?Tt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function To(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(To(e[n]),'" ')},"").trim()}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ha(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Cc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Ic(e){var t=e.transform,n=e.width,r=n===void 0?Cr:n,a=e.height,i=a===void 0?Cr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ao?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function No(){var e=Oo,t=Eo,n=I.cssPrefix,r=I.replacementClass,a=Sc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var li=!1;function cr(){I.autoAddCss&&!li&&(Oc(No()),li=!0)}var Tc={mixout:function(){return{dom:{css:No,insertCss:cr}}},hooks:function(){return{beforeDOMElementCreation:function(){cr()},beforeI2svg:function(){cr()}}}},ze=Je||{};ze[De]||(ze[De]={});ze[De].styles||(ze[De].styles={});ze[De].hooks||(ze[De].hooks={});ze[De].shims||(ze[De].shims=[]);var Ae=ze[De],Mo=[],Nc=function e(){X.removeEventListener("DOMContentLoaded",e),Rn=1,Mo.map(function(t){return t()})},Rn=!1;He&&(Rn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Rn||X.addEventListener("DOMContentLoaded",Nc));function Mc(e){He&&(Rn?setTimeout(e,0):Mo.push(e))}function tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?To(e):"<".concat(t," ").concat(Pc(r),">").concat(i.map(tn).join(""),"</").concat(t,">")}function fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Fc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Rc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Sr(e){var t=Rc(e);return t.length===1?t[0].toString(16):null}function jc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ci(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Tr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ci(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,ci(t)):Ae.styles[e]=O(O({},Ae.styles[e]||{}),i),e==="fas"&&Tr("fa",t)}var yn,xn,_n,ht=Ae.styles,Lc=Ae.shims,$c=(yn={},ee(yn,K,Object.values(Jt[K])),ee(yn,G,Object.values(Jt[G])),yn),ga=null,Fo={},Ro={},jo={},Lo={},$o={},Dc=(xn={},ee(xn,K,Object.keys(qt[K])),ee(xn,G,Object.keys(qt[G])),xn);function zc(e){return~xc.indexOf(e)}function Uc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!zc(a)?a:null}var Do=function(){var t=function(i){return ur(ht,function(o,s,l){return o[l]=ur(s,i,{}),o},{})};Fo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ro=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$o=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ht||I.autoFetchSvg,r=ur(Lc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});jo=r.names,Lo=r.unicodes,ga=Gn(I.styleDefault,{family:I.familyDefault})};Ac(function(e){ga=Gn(e.styleDefault,{family:I.familyDefault})});Do();function va(e,t){return(Fo[e]||{})[t]}function Bc(e,t){return(Ro[e]||{})[t]}function st(e,t){return($o[e]||{})[t]}function zo(e){return jo[e]||{prefix:null,iconName:null}}function Hc(e){var t=Lo[e],n=va("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ga}var ba=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=qt[r][e],i=Vt[r][e]||Vt[r][a],o=e in Ae.styles?e:null;return i||o||null}var ui=(_n={},ee(_n,K,Object.keys(Jt[K])),ee(_n,G,Object.keys(Jt[G])),_n);function Zn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(I.cssPrefix,"-").concat(K)),ee(t,G,"".concat(I.cssPrefix,"-").concat(G)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return ui[K].includes(c)}))&&(s=K),(e.includes(i[G])||e.some(function(c){return ui[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=Uc(I.cssPrefix,d);if(ht[d]?(d=$c[s].includes(d)?pc[s][d]:d,o=d,c.prefix=d):Dc[s].indexOf(d)>-1?(o=d,c.prefix=Gn(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[K]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?zo(c.iconName):{},k=st(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ht.far&&ht.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ba());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(ht.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var Yc=function(){function e(){nc(this,e),this.definitions={}}return rc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Tr(s,o[s]);var l=Jt[K][s];l&&Tr(l,o[s]),Do()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),di=[],gt={},kt={},Wc=Object.keys(kt);function Kc(e,t){var n=t.mixoutsTo;return di=e,gt={},Object.keys(kt).forEach(function(r){Wc.indexOf(r)===-1&&delete kt[r]}),di.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Fn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function Nr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function Mr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=st(n,t)||t,fi(Uo.definitions,n,t)||fi(Ae.styles,n,t)}var Uo=new Yc,Xc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ut("noAuto")},qc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(ut("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Mc(function(){Jc({autoReplaceSvgRoot:n}),ut("watch",t)})}},Vc={icon:function(t){if(t===null)return null;if(Fn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(hc))){var a=Zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:Xc,config:I,dom:qc,parse:Vc,library:Uo,findIconDefinition:Mr,toHtml:tn},Jc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ae.styles).length>0||I.autoFetchSvg)&&He&&I.autoReplaceSvg&&he.dom.i2svg({node:r})};function Qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(He){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Gc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ha(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Jn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Zc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ya(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,N=F.width,z=F.height,_=a==="fak",P=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},L=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};k&&(E.attributes[ct]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},L),m.styles)}),fe=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},te=fe.children,be=fe.attributes;return U.children=te,U.attributes=be,s?Zc(U):Gc(U)}function mi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ct]="");var d=O({},o.styles);ha(a)&&(d.transform=Ic({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Qc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dr=Ae.styles;function Fr(e){var t=e[0],n=e[1],r=e.slice(4),a=fa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var eu={found:!1,width:512,height:512};function tu(e,t){!Po&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=zo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){var o=dr[t][e];return r(Fr(o))}tu(e,t),r(O(O({},eu),{},{icon:I.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var pi=function(){},jr=I.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:pi,measure:pi},jt='FA "6.2.1"',nu=function(t){return jr.mark("".concat(jt," ").concat(t," begins")),function(){return Bo(t)}},Bo=function(t){jr.mark("".concat(jt," ").concat(t," ends")),jr.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},xa={begin:nu,end:Bo},Cn=function(){};function hi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function ru(e){var t=e.getAttribute?e.getAttribute(ua):null,n=e.getAttribute?e.getAttribute(da):null;return t&&n}function au(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function iu(){if(I.autoReplaceSvg===!0)return In.replace;var e=In[I.autoReplaceSvg];return e||In.replace}function ou(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function su(e){return X.createElement(e)}function Ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ou:su:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ho(o,{ceFn:r}))}),a}function lu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ho(a),n)}),n.getAttribute(ct)===null&&I.keepOriginalSource){var r=X.createComment(lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~pa(n).indexOf(I.replacementClass))return In.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return tn(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function gi(e){e()}function Yo(e,t){var n=typeof t=="function"?t:Cn;if(e.length===0)n();else{var r=gi;I.mutateApproach===dc&&(r=Je.requestAnimationFrame||gi),r(function(){var a=iu(),i=xa.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function Wo(){_a=!0}function Lr(){_a=!1}var jn=null;function vi(e){if(oi&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Cn:t,r=e.nodeCallback,a=r===void 0?Cn:r,i=e.pseudoElementsCallback,o=i===void 0?Cn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;jn=new oi(function(c){if(!_a){var d=Ge();Tt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!hi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&hi(m.target)&&~yc.indexOf(m.attributeName))if(m.attributeName==="class"&&ru(m.target)){var v=Zn(pa(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(ua,k||d),F&&m.target.setAttribute(da,F)}else au(m.target)&&a(m.target)})}}),He&&jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fu(){jn&&jn.disconnect()}function cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Zn(pa(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Bc(a.prefix,e.innerText)||va(a.prefix,Sr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function du(e){var t=Tt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uu(e),r=n.iconName,a=n.prefix,i=n.rest,o=du(e),s=Nr("parseNodeAttributes",{},e),l=t.styleParser?cu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var pu=Ae.styles;function Ko(e){var t=I.autoReplaceSvg==="nest"?bi(e,{styleParser:!1}):bi(e);return~t.extra.classes.indexOf(Co)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Ze=new Set;ma.map(function(e){Ze.add("fa-".concat(e))});Object.keys(qt[K]).map(Ze.add.bind(Ze));Object.keys(qt[G]).map(Ze.add.bind(Ze));Ze=Qt(Ze);function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(si,"-").concat(m))},a=function(m){return n.remove("".concat(si,"-").concat(m))},i=I.autoFetchSvg?Ze:ma.map(function(d){return"fa-".concat(d)}).concat(Object.keys(pu));i.includes("fa")||i.push("fa");var o=[".".concat(Co,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Tt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=xa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Ko(m);v&&d.push(v)}catch(k){Po||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Yo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ko(e).then(function(n){n&&Yo([n],t)})}function gu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Mr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var vu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,N=n.classes,z=N===void 0?[]:N,_=n.attributes,P=_===void 0?{}:_,E=n.styles,L=E===void 0?{}:E;if(t){var U=t.prefix,fe=t.iconName,te=t.icon;return Qn(O({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?P["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||Zt()):(P["aria-hidden"]="true",P.focusable="false")),ya({icons:{main:Fr(te),mask:l?Fr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:fe,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:P,styles:L,classes:z}})})}},bu={mixout:function(){return{icon:gu(vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yi,n.nodeCallback=hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return yi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([Rr(a,s),d.iconName?Rr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=fa(N,2),_=z[0],P=z[1];k([n,ya({icons:{main:_,mask:P},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Jn(s);l.length>0&&(a.style=l);var c;return ha(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Qn({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(Qt(i)).join(" ")},children:o}]})}}}},xu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Qn({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),Qc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(Qt(s))}})})}}}},_u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return Qn({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),mi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(Qt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ao){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},wu=new RegExp('"',"ug"),xi=[1105920,1112319];function ku(e){var t=e.replace(wu,""),n=jc(t,0),r=n>=xi[0]&&n<=xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Sr(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Tt(e.children),o=i.filter(function(te){return te.getAttribute(Ir)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(gc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Vt[v][l[2].toLowerCase()]:vc[v][c],F=ku(m),N=F.value,z=F.isSecondary,_=l[0].startsWith("FontAwesome"),P=va(k,N),E=P;if(_){var L=Hc(N);L.iconName&&L.prefix&&(P=L.iconName,k=L.prefix)}if(P&&!z&&(!o||o.getAttribute(ua)!==k||o.getAttribute(da)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var U=mu(),fe=U.extra;fe.attributes[Ir]=t,Rr(P,k).then(function(te){var be=ya(O(O({},U),{},{icons:{main:te,mask:ba()},prefix:k,iconName:E,extra:fe,watchable:!0})),ge=X.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Re){return tn(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Au(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function Ou(e){return e.parentNode!==document.head&&!~mc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ir)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wi(e){if(He)return new Promise(function(t,n){var r=Tt(e.querySelectorAll("*")).filter(Ou).map(Au),a=xa.begin("searchPseudoElements");Wo(),Promise.all(r).then(function(){a(),Lr(),t()}).catch(function(){a(),Lr(),n()})})}var Eu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&wi(a)}}},ki=!1,Pu={mixout:function(){return{dom:{unwatch:function(){Wo(),ki=!0}}}},hooks:function(){return{bootstrap:function(){vi(Nr("mutationObserverCallbacks",{}))},noAuto:function(){fu()},watch:function(n){var r=n.observeMutationsRoot;ki?Lr():vi(Nr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ai=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Cu={mixout:function(){return{parse:{transform:function(n){return Ai(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ai(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},mr={x:0,y:0,width:"100%",height:"100%"};function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Iu(e){return e.tag==="g"?e.children:[e]}var Su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Zn(a.split(" ").map(function(o){return o.trim()})):ba();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Cc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:O(O({},mr),{},{fill:"white"})},N=d.children?{children:d.children.map(Oi)}:{},z={tag:"g",attributes:O({},k.inner),children:[Oi(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},_={tag:"g",attributes:O({},k.outer),children:[z]},P="mask-".concat(s||Zt()),E="clip-".concat(s||Zt()),L={tag:"mask",attributes:O(O({},mr),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,_]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Iu(v)},L]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},mr)}),{children:r,attributes:a}}}},Tu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mu=[Tc,bu,yu,xu,_u,Eu,Pu,Cu,Su,Tu,Nu];Kc(Mu,{mixoutsTo:he});he.noAuto;var Xo=he.config;he.library;he.dom;var Ln=he.parse;he.findIconDefinition;he.toHtml;var Fu=he.icon;he.layer;var Ru=he.text;he.counter;function Ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ei(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ju(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lu(e,t){if(e==null)return{};var n=ju(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $r(e){return $u(e)||Du(e)||zu(e)||Uu()}function $u(e){if(Array.isArray(e))return Dr(e)}function Du(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zu(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Uu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qo={exports:{}};(function(e){(function(t){var n=function(_,P,E){if(!c(P)||m(P)||v(P)||k(P)||l(P))return P;var L,U=0,fe=0;if(d(P))for(L=[],fe=P.length;U<fe;U++)L.push(n(_,P[U],E));else{L={};for(var te in P)Object.prototype.hasOwnProperty.call(P,te)&&(L[_(te,E)]=n(_,P[te],E))}return L},r=function(_,P){P=P||{};var E=P.separator||"_",L=P.split||/(?=[A-Z])/;return _.split(L).join(E)},a=function(_){return F(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var P=a(_);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(_,P){return r(_,P).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},v=function(_){return s.call(_)=="[object RegExp]"},k=function(_){return s.call(_)=="[object Boolean]"},F=function(_){return _=_-0,_===_},N=function(_,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?_:function(L,U){return E(L,_,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,P){return n(N(a,P),_)},decamelizeKeys:function(_,P){return n(N(o,P),_,P)},pascalizeKeys:function(_,P){return n(N(i,P),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(Bu)})(qo);var Hu=qo.exports,Yu=["class","style"];function Wu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Hu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ku(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return wa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ku(d);break;case"style":l.style=Wu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Lu(n,Yu);return yo(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var Vo=!1;try{Vo=!0}catch{}function Xu(){if(!Vo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function qu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Pi(e){if(e&&$n(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ln.icon)return Ln.icon(e);if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}aa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Pi(t.icon)}),i=ve(function(){return Ut("classes",qu(t))}),o=ve(function(){return Ut("transform",typeof t.transform=="string"?Ln.transform(t.transform):t.transform)}),s=ve(function(){return Ut("mask",Pi(t.mask))}),l=ve(function(){return Fu(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});An(l,function(d){if(!d)return Xu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?wa(l.value.abstract[0],{},r):null});return function(){return c.value}}});aa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Xo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat($r(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return yo("div",{class:i.value},r.default?r.default():[])}}});aa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Xo.familyPrefix,i=ve(function(){return Ut("classes",[].concat($r(t.counter?["".concat(a,"-layers-counter")]:[]),$r(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ut("transform",typeof t.transform=="string"?Ln.transform(t.transform):t.transform)}),s=ve(function(){var c=Ru(t.value.toString(),we(we({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return wa(s.value,{},r)});return function(){return l.value}}});Af(tc).mount("#app");
