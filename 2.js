(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(n,t,r){"use strict";r.r(t);var u=r(2),e=r(3),o=r.n(e),i=r(4),c=r(5),f=u.Gb();o()("#build-id").text(f);var s="Build ID: "+f;o()("#report-issue").attr("href","https://github.com/endbasic/endbasic/issues/new?body="+s);var d=new i.Terminal;d.setOption("fontSize",18);const a=new c.FitAddon;d.loadAddon(a),d.open(document.getElementById("terminal")),a.fit();var l=new u.a,b=navigator.userAgent;if(/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(b)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(b)){var p=l.on_screen_keyboard();o()("#button-esc").on("click",(function(){p.press_escape(),d.focus()})),o()("#button-up").on("click",(function(){p.press_arrow_up(),d.focus()})),o()("#button-down").on("click",(function(){p.press_arrow_down(),d.focus()})),o()("#button-left").on("click",(function(){p.press_arrow_left(),d.focus()})),o()("#button-right").on("click",(function(){p.press_arrow_right(),d.focus()})),o()("#controls").css("visibility","visible")}d.focus(),l.run_repl_loop(d)},function(n,t,r){"use strict";(function(n,u){r.d(t,"Gb",(function(){return x})),r.d(t,"a",(function(){return S})),r.d(t,"qb",(function(){return D})),r.d(t,"Cb",(function(){return W})),r.d(t,"Eb",(function(){return B})),r.d(t,"ab",(function(){return F})),r.d(t,"g",(function(){return I})),r.d(t,"B",(function(){return P})),r.d(t,"k",(function(){return R})),r.d(t,"W",(function(){return U})),r.d(t,"pb",(function(){return q})),r.d(t,"zb",(function(){return C})),r.d(t,"Bb",(function(){return $})),r.d(t,"n",(function(){return z})),r.d(t,"x",(function(){return J})),r.d(t,"E",(function(){return K})),r.d(t,"cb",(function(){return N})),r.d(t,"D",(function(){return M})),r.d(t,"A",(function(){return G})),r.d(t,"r",(function(){return H})),r.d(t,"eb",(function(){return L})),r.d(t,"j",(function(){return V})),r.d(t,"K",(function(){return Q})),r.d(t,"c",(function(){return X})),r.d(t,"w",(function(){return Y})),r.d(t,"lb",(function(){return Z})),r.d(t,"gb",(function(){return nn})),r.d(t,"v",(function(){return tn})),r.d(t,"d",(function(){return rn})),r.d(t,"ib",(function(){return un})),r.d(t,"m",(function(){return en})),r.d(t,"R",(function(){return on})),r.d(t,"z",(function(){return cn})),r.d(t,"b",(function(){return fn})),r.d(t,"i",(function(){return sn})),r.d(t,"F",(function(){return dn})),r.d(t,"o",(function(){return an})),r.d(t,"Y",(function(){return ln})),r.d(t,"X",(function(){return bn})),r.d(t,"wb",(function(){return pn})),r.d(t,"nb",(function(){return hn})),r.d(t,"U",(function(){return yn})),r.d(t,"G",(function(){return wn})),r.d(t,"h",(function(){return _n})),r.d(t,"H",(function(){return gn})),r.d(t,"vb",(function(){return vn})),r.d(t,"T",(function(){return mn})),r.d(t,"S",(function(){return kn})),r.d(t,"l",(function(){return On})),r.d(t,"mb",(function(){return An})),r.d(t,"y",(function(){return xn})),r.d(t,"q",(function(){return Tn})),r.d(t,"f",(function(){return jn})),r.d(t,"J",(function(){return En})),r.d(t,"O",(function(){return Sn})),r.d(t,"p",(function(){return Dn})),r.d(t,"I",(function(){return Wn})),r.d(t,"V",(function(){return Bn})),r.d(t,"N",(function(){return Fn})),r.d(t,"L",(function(){return In})),r.d(t,"Z",(function(){return Pn})),r.d(t,"kb",(function(){return Rn})),r.d(t,"jb",(function(){return Un})),r.d(t,"bb",(function(){return qn})),r.d(t,"ob",(function(){return Cn})),r.d(t,"s",(function(){return $n})),r.d(t,"t",(function(){return zn})),r.d(t,"yb",(function(){return Jn})),r.d(t,"e",(function(){return Kn})),r.d(t,"P",(function(){return Nn})),r.d(t,"C",(function(){return Mn})),r.d(t,"M",(function(){return Gn})),r.d(t,"fb",(function(){return Hn})),r.d(t,"Q",(function(){return Ln})),r.d(t,"hb",(function(){return Vn})),r.d(t,"u",(function(){return Qn})),r.d(t,"db",(function(){return Xn})),r.d(t,"xb",(function(){return Yn})),r.d(t,"Db",(function(){return Zn})),r.d(t,"ub",(function(){return nt})),r.d(t,"Fb",(function(){return tt})),r.d(t,"Ab",(function(){return rt})),r.d(t,"sb",(function(){return ut})),r.d(t,"tb",(function(){return et})),r.d(t,"rb",(function(){return ot}));var e=r(8);const o=new Array(32).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let c=o.length;function f(n){const t=i(n);return function(n){n<36||(o[n]=c,c=n)}(n),t}let s=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let d=null;function a(){return null!==d&&d.buffer===e.m.buffer||(d=new Uint8Array(e.m.buffer)),d}function l(n,t){return s.decode(a().subarray(n,n+t))}function b(n){c===o.length&&o.push(o.length+1);const t=c;return c=o[t],o[t]=n,t}let p=0;let h=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const y="function"==typeof h.encodeInto?function(n,t){return h.encodeInto(n,t)}:function(n,t){const r=h.encode(n);return t.set(r),{read:n.length,written:r.length}};function w(n,t,r){if(void 0===r){const r=h.encode(n),u=t(r.length);return a().subarray(u,u+r.length).set(r),p=r.length,u}let u=n.length,e=t(u);const o=a();let i=0;for(;i<u;i++){const t=n.charCodeAt(i);if(t>127)break;o[e+i]=t}if(i!==u){0!==i&&(n=n.slice(i)),e=r(e,u,u=i+3*n.length);const t=a().subarray(e+i,e+u);i+=y(n,t).written}return p=i,e}let _=null;function g(){return null!==_&&_.buffer===e.m.buffer||(_=new Int32Array(e.m.buffer)),_}function v(n){return null==n}function m(n,t,r,u){const o={a:n,b:t,cnt:1,dtor:r},i=(...n)=>{o.cnt++;const t=o.a;o.a=0;try{return u(t,o.b,...n)}finally{0==--o.cnt?e.e.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}function k(n,t,r){e.i(n,t,b(r))}function O(n,t){e.k(n,t)}function A(n,t,r){e.j(n,t,b(r))}function x(){try{const r=e.c(-16);e.l(r);var n=g()[r/4+0],t=g()[r/4+1];return l(n,t)}finally{e.c(16),e.f(n,t)}}function T(n,t){try{return n.apply(this,t)}catch(n){e.d(b(n))}}function j(n,t){return a().subarray(n/1,n/1+t)}Object.freeze({Width0:0,0:"Width0",Width1:1,1:"Width1",Width2:2,2:"Width2"});class E{static __wrap(n){const t=Object.create(E.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.a(n)}press_escape(){e.r(this.ptr)}press_arrow_up(){e.q(this.ptr)}press_arrow_down(){e.n(this.ptr)}press_arrow_left(){e.o(this.ptr)}press_arrow_right(){e.p(this.ptr)}}class S{static __wrap(n){const t=Object.create(S.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();e.b(n)}constructor(){var n=e.t();return S.__wrap(n)}on_screen_keyboard(){var n=e.u(this.ptr);return E.__wrap(n)}run_repl_loop(n){const t=this.__destroy_into_raw();return f(e.v(t,b(n)))}}function D(n){const t=f(n).original;if(1==t.cnt--)return t.a=0,!0;return!1}function W(n){f(n)}function B(n,t){return b(l(n,t))}function F(n){return i(n).rows}function I(n){return i(n).cols}function P(n,t){var r=w(i(t).key,e.g,e.h),u=p;g()[n/4+1]=u,g()[n/4+0]=r}function R(n){return b(i(n).domEvent)}function U(n,t){return b(i(n).onKey(i(t)))}function q(n,t,r){i(n).write(l(t,r))}function C(n,t){const r=i(t);var u=w(JSON.stringify(void 0===r?null:r),e.g,e.h),o=p;g()[n/4+1]=o,g()[n/4+0]=u}function $(n){return b(i(n))}function z(n){return b(fetch(i(n)))}function J(n){return i(n)instanceof Window}function K(){return T((function(n){var t=i(n).localStorage;return v(t)?0:b(t)}),arguments)}function N(){return T((function(n,t,r,u){return i(n).setTimeout(i(t),r,...i(u))}),arguments)}function M(){return T((function(n){return i(n).length}),arguments)}function G(){return T((function(n,t,r){var u=i(t).key(r>>>0),o=v(u)?0:w(u,e.g,e.h),c=p;g()[n/4+1]=c,g()[n/4+0]=o}),arguments)}function H(){return T((function(n,t,r,u){var o=i(t)[l(r,u)],c=v(o)?0:w(o,e.g,e.h),f=p;g()[n/4+1]=f,g()[n/4+0]=c}),arguments)}function L(){return T((function(n,t,r,u,e){i(n)[l(t,r)]=l(u,e)}),arguments)}function V(){return T((function(n,t,r){delete i(n)[l(t,r)]}),arguments)}function Q(){return T((function(){return b(new Headers)}),arguments)}function X(){return T((function(n,t,r,u,e){i(n).append(l(t,r),l(u,e))}),arguments)}function Y(n){return i(n)instanceof Response}function Z(n,t){var r=w(i(t).url,e.g,e.h),u=p;g()[n/4+1]=u,g()[n/4+0]=r}function nn(n){return i(n).status}function tn(n){return b(i(n).headers)}function rn(){return T((function(n){return b(i(n).arrayBuffer())}),arguments)}function un(){return T((function(n){return b(i(n).text())}),arguments)}function en(n,t){return b(i(n).fetch(i(t)))}function on(){return T((function(n,t,r){return b(new Request(l(n,t),i(r)))}),arguments)}function cn(n){return i(n).keyCode}function fn(n){return i(n).altKey}function sn(n){return i(n).ctrlKey}function dn(n){return i(n).metaKey}function an(){return T((function(n,t){i(n).getRandomValues(i(t))}),arguments)}function ln(){return T((function(n,t,r){i(n).randomFillSync(j(t,r))}),arguments)}function bn(n){return b(i(n).process)}function pn(n){const t=i(n);return"object"==typeof t&&null!==t}function hn(n){return b(i(n).versions)}function yn(n){return b(i(n).node)}function wn(){return T((function(n,t){return b(r(9)(l(n,t)))}),arguments)}function _n(n){return b(i(n).crypto)}function gn(n){return b(i(n).msCrypto)}function vn(n){return"function"==typeof i(n)}function mn(n){return b(i(n).next)}function kn(){return T((function(n){return b(i(n).next())}),arguments)}function On(n){return i(n).done}function An(n){return b(i(n).value)}function xn(){return b(Symbol.iterator)}function Tn(){return T((function(n,t){return b(Reflect.get(i(n),i(t)))}),arguments)}function jn(){return T((function(n,t){return b(i(n).call(i(t)))}),arguments)}function En(){return b(new Array)}function Sn(n,t){return b(new Function(l(n,t)))}function Dn(n){return i(n).getTimezoneOffset()}function Wn(){return b(new Date)}function Bn(){return Date.now()}function Fn(){return b(new Object)}function In(n,t){try{var r={a:n,b:t},u=new Promise((n,t)=>{const u=r.a;r.a=0;try{return function(n,t,r,u){e.s(n,t,b(r),b(u))}(u,r.b,n,t)}finally{r.a=u}});return b(u)}finally{r.a=r.b=0}}function Pn(n){return b(Promise.resolve(i(n)))}function Rn(n,t){return b(i(n).then(i(t)))}function Un(n,t,r){return b(i(n).then(i(t),i(r)))}function qn(){return T((function(){return b(self.self)}),arguments)}function Cn(){return T((function(){return b(window.window)}),arguments)}function $n(){return T((function(){return b(globalThis.globalThis)}),arguments)}function zn(){return T((function(){return b(u.global)}),arguments)}function Jn(n){return void 0===i(n)}function Kn(n){return b(i(n).buffer)}function Nn(n,t,r){return b(new Uint8Array(i(n),t>>>0,r>>>0))}function Mn(n){return i(n).length}function Gn(n){return b(new Uint8Array(i(n)))}function Hn(n,t,r){i(n).set(i(t),r>>>0)}function Ln(n){return b(new Uint8Array(n>>>0))}function Vn(n,t,r){return b(i(n).subarray(t>>>0,r>>>0))}function Qn(){return T((function(n,t){return Reflect.has(i(n),i(t))}),arguments)}function Xn(){return T((function(n,t,r){return Reflect.set(i(n),i(t),i(r))}),arguments)}function Yn(n){return"string"==typeof i(n)}function Zn(n,t){const r=i(t);var u="string"==typeof r?r:void 0,o=v(u)?0:w(u,e.g,e.h),c=p;g()[n/4+1]=c,g()[n/4+0]=o}function nt(n,t){var r=w(function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return""+t;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let u="[";r>0&&(u+=n(t[0]));for(let e=1;e<r;e++)u+=", "+n(t[e]);return u+="]",u}const u=/\[object ([^\]]+)\]/.exec(toString.call(t));let e;if(!(u.length>1))return toString.call(t);if(e=u[1],"Object"==e)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:e}(i(t)),e.g,e.h),u=p;g()[n/4+1]=u,g()[n/4+0]=r}function tt(n,t){throw new Error(l(n,t))}function rt(){return b(e.m)}function ut(n,t,r){return b(m(n,t,19,k))}function et(n,t,r){return b(m(n,t,19,O))}function ot(n,t,r){return b(m(n,t,493,A))}}).call(this,r(6)(n),r(7))},,,,,,function(n,t,r){"use strict";var u=r.w[n.i];n.exports=u;r(2);u.w()},function(n,t){function r(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,n.exports=r,r.id=9}]]);