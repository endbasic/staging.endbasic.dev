(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(n,t,r){"use strict";r.r(t);var e=r(2),u=r(3),o=r.n(u),i=r(4),c=r(5),f=e.gb();o()("#build-id").text(f);var s="Build ID: "+f;o()("#report-issue").attr("href","https://github.com/jmmv/endbasic/issues/new?body="+s);var d=new i.Terminal;d.setOption("fontSize",18);const a=new c.FitAddon;d.loadAddon(a),d.open(document.getElementById("terminal")),a.fit();var l=new e.a,b=navigator.userAgent;if(/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(b)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(b)){var p=l.on_screen_keyboard();o()("#button-esc").on("click",(function(){p.press_escape(),d.focus()})),o()("#button-up").on("click",(function(){p.press_arrow_up(),d.focus()})),o()("#button-down").on("click",(function(){p.press_arrow_down(),d.focus()})),o()("#button-left").on("click",(function(){p.press_arrow_left(),d.focus()})),o()("#button-right").on("click",(function(){p.press_arrow_right(),d.focus()})),o()("#controls").css("visibility","visible")}d.focus(),l.run_repl_loop(d)},function(n,t,r){"use strict";(function(n,e){r.d(t,"gb",(function(){return A})),r.d(t,"a",(function(){return S})),r.d(t,"U",(function(){return D})),r.d(t,"eb",(function(){return W})),r.d(t,"K",(function(){return F})),r.d(t,"e",(function(){return I})),r.d(t,"r",(function(){return P})),r.d(t,"i",(function(){return B})),r.d(t,"G",(function(){return U})),r.d(t,"T",(function(){return $})),r.d(t,"o",(function(){return C})),r.d(t,"u",(function(){return K})),r.d(t,"M",(function(){return q})),r.d(t,"t",(function(){return z})),r.d(t,"q",(function(){return J})),r.d(t,"l",(function(){return M})),r.d(t,"N",(function(){return N})),r.d(t,"h",(function(){return L})),r.d(t,"p",(function(){return R})),r.d(t,"b",(function(){return V})),r.d(t,"g",(function(){return G})),r.d(t,"v",(function(){return H})),r.d(t,"j",(function(){return Q})),r.d(t,"I",(function(){return X})),r.d(t,"H",(function(){return Y})),r.d(t,"Z",(function(){return Z})),r.d(t,"R",(function(){return nn})),r.d(t,"E",(function(){return tn})),r.d(t,"w",(function(){return rn})),r.d(t,"f",(function(){return en})),r.d(t,"x",(function(){return un})),r.d(t,"d",(function(){return on})),r.d(t,"db",(function(){return cn})),r.d(t,"z",(function(){return fn})),r.d(t,"C",(function(){return sn})),r.d(t,"k",(function(){return dn})),r.d(t,"y",(function(){return an})),r.d(t,"F",(function(){return ln})),r.d(t,"A",(function(){return bn})),r.d(t,"J",(function(){return pn})),r.d(t,"Q",(function(){return hn})),r.d(t,"L",(function(){return wn})),r.d(t,"S",(function(){return yn})),r.d(t,"m",(function(){return _n})),r.d(t,"n",(function(){return gn})),r.d(t,"bb",(function(){return vn})),r.d(t,"c",(function(){return mn})),r.d(t,"s",(function(){return kn})),r.d(t,"B",(function(){return On})),r.d(t,"O",(function(){return An})),r.d(t,"D",(function(){return Tn})),r.d(t,"P",(function(){return jn})),r.d(t,"ab",(function(){return xn})),r.d(t,"Y",(function(){return En})),r.d(t,"fb",(function(){return Sn})),r.d(t,"cb",(function(){return Dn})),r.d(t,"W",(function(){return Wn})),r.d(t,"X",(function(){return Fn})),r.d(t,"V",(function(){return In}));var u=r(8);const o=new Array(32).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let c=o.length;function f(n){const t=i(n);return function(n){n<36||(o[n]=c,c=n)}(n),t}function s(n){c===o.length&&o.push(o.length+1);const t=c;return c=o[t],o[t]=n,t}let d=0,a=null;function l(){return null!==a&&a.buffer===u.m.buffer||(a=new Uint8Array(u.m.buffer)),a}let b=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof b.encodeInto?function(n,t){return b.encodeInto(n,t)}:function(n,t){const r=b.encode(n);return t.set(r),{read:n.length,written:r.length}};function h(n,t,r){if(void 0===r){const r=b.encode(n),e=t(r.length);return l().subarray(e,e+r.length).set(r),d=r.length,e}let e=n.length,u=t(e);const o=l();let i=0;for(;i<e;i++){const t=n.charCodeAt(i);if(t>127)break;o[u+i]=t}if(i!==e){0!==i&&(n=n.slice(i)),u=r(u,e,e=i+3*n.length);const t=l().subarray(u+i,u+e);i+=p(n,t).written}return d=i,u}let w=null;function y(){return null!==w&&w.buffer===u.m.buffer||(w=new Int32Array(u.m.buffer)),w}let _=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function g(n,t){return _.decode(l().subarray(n,n+t))}function v(n,t,r,e){const o={a:n,b:t,cnt:1,dtor:r},i=(...n)=>{o.cnt++;const t=o.a;o.a=0;try{return e(t,o.b,...n)}finally{0==--o.cnt?u.e.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}function m(n,t,r){u.i(n,t,s(r))}function k(n,t){u.k(n,t)}function O(n,t,r){u.j(n,t,s(r))}function A(){try{const r=u.c(-16);u.l(r);var n=y()[r/4+0],t=y()[r/4+1];return g(n,t)}finally{u.c(16),u.f(n,t)}}function T(n){return null==n}function j(n,t){try{return n.apply(this,t)}catch(n){u.d(s(n))}}function x(n,t){return l().subarray(n/1,n/1+t)}_.decode();Object.freeze({Width0:0,0:"Width0",Width1:1,1:"Width1",Width2:2,2:"Width2"});class E{static __wrap(n){const t=Object.create(E.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();u.a(n)}press_escape(){u.r(this.ptr)}press_arrow_up(){u.q(this.ptr)}press_arrow_down(){u.n(this.ptr)}press_arrow_left(){u.o(this.ptr)}press_arrow_right(){u.p(this.ptr)}}class S{static __wrap(n){const t=Object.create(S.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();u.b(n)}constructor(){var n=u.t();return S.__wrap(n)}on_screen_keyboard(){var n=u.u(this.ptr);return E.__wrap(n)}run_repl_loop(n){const t=this.__destroy_into_raw();return f(u.v(t,s(n)))}}function D(n){const t=f(n).original;if(1==t.cnt--)return t.a=0,!0;return!1}function W(n){f(n)}function F(n){return i(n).rows}function I(n){return i(n).cols}function P(n,t){var r=h(i(t).key,u.g,u.h),e=d;y()[n/4+1]=e,y()[n/4+0]=r}function B(n){return s(i(n).domEvent)}function U(n,t){return s(i(n).onKey(i(t)))}function $(n,t,r){i(n).write(g(t,r))}function C(n){return i(n)instanceof Window}function K(){return j((function(n){var t=i(n).localStorage;return T(t)?0:s(t)}),arguments)}function q(){return j((function(n,t,r,e){return i(n).setTimeout(i(t),r,...i(e))}),arguments)}function z(){return j((function(n){return i(n).length}),arguments)}function J(){return j((function(n,t,r){var e=i(t).key(r>>>0),o=T(e)?0:h(e,u.g,u.h),c=d;y()[n/4+1]=c,y()[n/4+0]=o}),arguments)}function M(){return j((function(n,t,r,e){var o=i(t)[g(r,e)],c=T(o)?0:h(o,u.g,u.h),f=d;y()[n/4+1]=f,y()[n/4+0]=c}),arguments)}function N(){return j((function(n,t,r,e,u){i(n)[g(t,r)]=g(e,u)}),arguments)}function L(){return j((function(n,t,r){delete i(n)[g(t,r)]}),arguments)}function R(n){return i(n).keyCode}function V(n){return i(n).altKey}function G(n){return i(n).ctrlKey}function H(n){return i(n).metaKey}function Q(){return j((function(n,t){i(n).getRandomValues(i(t))}),arguments)}function X(){return j((function(n,t,r){i(n).randomFillSync(x(t,r))}),arguments)}function Y(n){return s(i(n).process)}function Z(n){const t=i(n);return"object"==typeof t&&null!==t}function nn(n){return s(i(n).versions)}function tn(n){return s(i(n).node)}function rn(){return j((function(n,t){return s(r(9)(g(n,t)))}),arguments)}function en(n){return s(i(n).crypto)}function un(n){return s(i(n).msCrypto)}function on(){return j((function(n,t){return s(i(n).call(i(t)))}),arguments)}function cn(n){return s(i(n))}function fn(){return s(new Array)}function sn(n,t){return s(new Function(g(n,t)))}function dn(n){return i(n).getTimezoneOffset()}function an(){return s(new Date)}function ln(){return Date.now()}function bn(n,t){try{var r={a:n,b:t},e=new Promise((n,t)=>{const e=r.a;r.a=0;try{return function(n,t,r,e){u.s(n,t,s(r),s(e))}(e,r.b,n,t)}finally{r.a=e}});return s(e)}finally{r.a=r.b=0}}function pn(n){return s(Promise.resolve(i(n)))}function hn(n,t){return s(i(n).then(i(t)))}function wn(){return j((function(){return s(self.self)}),arguments)}function yn(){return j((function(){return s(window.window)}),arguments)}function _n(){return j((function(){return s(globalThis.globalThis)}),arguments)}function gn(){return j((function(){return s(e.global)}),arguments)}function vn(n){return void 0===i(n)}function mn(n){return s(i(n).buffer)}function kn(n){return i(n).length}function On(n){return s(new Uint8Array(i(n)))}function An(n,t,r){i(n).set(i(t),r>>>0)}function Tn(n){return s(new Uint8Array(n>>>0))}function jn(n,t,r){return s(i(n).subarray(t>>>0,r>>>0))}function xn(n){return"string"==typeof i(n)}function En(n,t){var r=h(function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return""+t;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=n(t[0]));for(let u=1;u<r;u++)e+=", "+n(t[u]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(e.length>1))return toString.call(t);if(u=e[1],"Object"==u)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:u}(i(t)),u.g,u.h),e=d;y()[n/4+1]=e,y()[n/4+0]=r}function Sn(n,t){throw new Error(g(n,t))}function Dn(){return s(u.m)}function Wn(n,t,r){return s(v(n,t,11,m))}function Fn(n,t,r){return s(v(n,t,11,k))}function In(n,t,r){return s(v(n,t,135,O))}}).call(this,r(6)(n),r(7))},,,,,,function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(2);e.w()},function(n,t){function r(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,n.exports=r,r.id=9}]]);