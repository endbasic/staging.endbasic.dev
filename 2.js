(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(n,t,r){"use strict";r.r(t);var e=r(2),u=r(3),o=r.n(u),i=r(4),c=r(5),f=e.T();o()("#build-id").text(f);var s="Build ID: "+f;o()("#report-issue").attr("href","https://github.com/jmmv/endbasic/issues/new?body="+s);var l=new i.Terminal;l.setOption("fontSize",18);const a=new c.FitAddon;l.loadAddon(a),l.open(document.getElementById("terminal")),a.fit();var d=new e.a,p=navigator.userAgent;if(/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(p)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(p)){var h=d.on_screen_keyboard();o()("#button-esc").on("click",(function(){h.press_escape(),l.focus()})),o()("#button-up").on("click",(function(){h.press_arrow_up(),l.focus()})),o()("#button-down").on("click",(function(){h.press_arrow_down(),l.focus()})),o()("#button-left").on("click",(function(){h.press_arrow_left(),l.focus()})),o()("#button-right").on("click",(function(){h.press_arrow_right(),l.focus()})),o()("#controls").css("visibility","visible")}l.focus(),d.run_repl_loop(l)},2:function(n,t,r){"use strict";(function(n,e){r.d(t,"T",(function(){return O})),r.d(t,"a",(function(){return S})),r.d(t,"R",(function(){return E})),r.d(t,"L",(function(){return W})),r.d(t,"D",(function(){return D})),r.d(t,"d",(function(){return I})),r.d(t,"q",(function(){return P})),r.d(t,"h",(function(){return B})),r.d(t,"z",(function(){return F})),r.d(t,"K",(function(){return $})),r.d(t,"n",(function(){return q})),r.d(t,"s",(function(){return K})),r.d(t,"r",(function(){return z})),r.d(t,"p",(function(){return C})),r.d(t,"k",(function(){return J})),r.d(t,"G",(function(){return M})),r.d(t,"g",(function(){return N})),r.d(t,"o",(function(){return R})),r.d(t,"b",(function(){return G})),r.d(t,"f",(function(){return H})),r.d(t,"t",(function(){return L})),r.d(t,"c",(function(){return Q})),r.d(t,"Q",(function(){return U})),r.d(t,"x",(function(){return V})),r.d(t,"j",(function(){return X})),r.d(t,"v",(function(){return Y})),r.d(t,"y",(function(){return Z})),r.d(t,"w",(function(){return nn})),r.d(t,"C",(function(){return tn})),r.d(t,"I",(function(){return rn})),r.d(t,"E",(function(){return en})),r.d(t,"J",(function(){return un})),r.d(t,"l",(function(){return on})),r.d(t,"m",(function(){return cn})),r.d(t,"P",(function(){return fn})),r.d(t,"i",(function(){return sn})),r.d(t,"A",(function(){return ln})),r.d(t,"F",(function(){return an})),r.d(t,"H",(function(){return dn})),r.d(t,"B",(function(){return pn})),r.d(t,"e",(function(){return hn})),r.d(t,"u",(function(){return bn})),r.d(t,"O",(function(){return wn})),r.d(t,"S",(function(){return yn})),r.d(t,"M",(function(){return gn})),r.d(t,"N",(function(){return _n}));var u=r(8);const o=new Array(32).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let c=o.length;function f(n){const t=i(n);return function(n){n<36||(o[n]=c,c=n)}(n),t}function s(n){c===o.length&&o.push(o.length+1);const t=c;return c=o[t],o[t]=n,t}let l=0,a=null;function d(){return null!==a&&a.buffer===u.l.buffer||(a=new Uint8Array(u.l.buffer)),a}let p=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const h="function"==typeof p.encodeInto?function(n,t){return p.encodeInto(n,t)}:function(n,t){const r=p.encode(n);return t.set(r),{read:n.length,written:r.length}};function b(n,t,r){if(void 0===r){const r=p.encode(n),e=t(r.length);return d().subarray(e,e+r.length).set(r),l=r.length,e}let e=n.length,u=t(e);const o=d();let i=0;for(;i<e;i++){const t=n.charCodeAt(i);if(t>127)break;o[u+i]=t}if(i!==e){0!==i&&(n=n.slice(i)),u=r(u,e,e=i+3*n.length);const t=d().subarray(u+i,u+e);i+=h(n,t).written}return l=i,u}let w=null;function y(){return null!==w&&w.buffer===u.l.buffer||(w=new Int32Array(u.l.buffer)),w}let g=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function _(n,t){return g.decode(d().subarray(n,n+t))}function v(n,t,r,e){const o={a:n,b:t,cnt:1,dtor:r},i=(...n)=>{o.cnt++;const t=o.a;o.a=0;try{return e(t,o.b,...n)}finally{0==--o.cnt?u.d.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}function m(n,t,r){u.i(n,t,s(r))}function k(n,t,r){u.j(n,t,s(r))}function O(){try{const r=u.e.value-16;u.e.value=r,u.k(r);var n=y()[r/4+0],t=y()[r/4+1];return _(n,t)}finally{u.e.value+=16,u.f(n,t)}}function T(n){return null==n}function A(n){return function(){try{return n.apply(this,arguments)}catch(n){u.c(s(n))}}}function j(n,t){return d().subarray(n/1,n/1+t)}g.decode();Object.freeze({Width0:0,0:"Width0",Width1:1,1:"Width1",Width2:2,2:"Width2"});class x{static __wrap(n){const t=Object.create(x.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,u.a(n)}press_escape(){u.q(this.ptr)}press_arrow_up(){u.p(this.ptr)}press_arrow_down(){u.m(this.ptr)}press_arrow_left(){u.n(this.ptr)}press_arrow_right(){u.o(this.ptr)}}class S{static __wrap(n){const t=Object.create(S.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,u.b(n)}constructor(){var n=u.s();return S.__wrap(n)}on_screen_keyboard(){var n=u.t(this.ptr);return x.__wrap(n)}run_repl_loop(n){var t=this.ptr;return this.ptr=0,f(u.u(t,s(n)))}}const E=function(n){f(n)},W=function(n){const t=f(n).original;if(1==t.cnt--)return t.a=0,!0;return!1},D=function(n){return i(n).rows},I=function(n){return i(n).cols},P=function(n,t){var r=b(i(t).key,u.g,u.h),e=l;y()[n/4+1]=e,y()[n/4+0]=r},B=function(n){return s(i(n).domEvent)},F=function(n,t){return s(i(n).onKey(i(t)))},$=function(n,t,r){i(n).write(_(t,r))},q=function(n){return i(n)instanceof Window},K=A((function(n){var t=i(n).localStorage;return T(t)?0:s(t)})),z=A((function(n){return i(n).length})),C=A((function(n,t,r){var e=i(t).key(r>>>0),o=T(e)?0:b(e,u.g,u.h),c=l;y()[n/4+1]=c,y()[n/4+0]=o})),J=A((function(n,t,r,e){var o=i(t)[_(r,e)],c=T(o)?0:b(o,u.g,u.h),f=l;y()[n/4+1]=f,y()[n/4+0]=c})),M=A((function(n,t,r,e,u){i(n)[_(t,r)]=_(e,u)})),N=A((function(n,t,r){delete i(n)[_(t,r)]})),R=function(n){return i(n).keyCode},G=function(n){return i(n).altKey},H=function(n){return i(n).ctrlKey},L=function(n){return i(n).metaKey},Q=A((function(n,t){return s(i(n).call(i(t)))})),U=function(n){return s(i(n))},V=function(n,t){return s(new Function(_(n,t)))},X=function(n){return i(n).getTimezoneOffset()},Y=function(){return s(new Date)},Z=function(){return Date.now()},nn=function(n,t){try{var r={a:n,b:t},e=new Promise((n,t)=>{const e=r.a;r.a=0;try{return function(n,t,r,e){u.r(n,t,s(r),s(e))}(e,r.b,n,t)}finally{r.a=e}});return s(e)}finally{r.a=r.b=0}},tn=function(n){return s(Promise.resolve(i(n)))},rn=function(n,t){return s(i(n).then(i(t)))},en=A((function(){return s(self.self)})),un=A((function(){return s(window.window)})),on=A((function(){return s(globalThis.globalThis)})),cn=A((function(){return s(e.global)})),fn=function(n){return void 0===i(n)},sn=A((function(n,t,r){i(n).getRandomValues(j(t,r))})),ln=A((function(n,t,r){i(n).randomFillSync(j(t,r))})),an=A((function(){return s(self.self)})),dn=function(){return s(n)},pn=A((function(n,t,r){return s(i(n).require(_(t,r)))})),hn=function(n){return s(i(n).crypto)},bn=function(n){return s(i(n).msCrypto)},wn=function(n,t){var r=b(function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return""+t;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=n(t[0]));for(let u=1;u<r;u++)e+=", "+n(t[u]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(e.length>1))return toString.call(t);if(u=e[1],"Object"==u)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:u}(i(t)),u.g,u.h),e=l;y()[n/4+1]=e,y()[n/4+0]=r},yn=function(n,t){throw new Error(_(n,t))},gn=function(n,t,r){return s(v(n,t,32,m))},_n=function(n,t,r){return s(v(n,t,114,k))}}).call(this,r(6)(n),r(7))},8:function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(2);e.v()}}]);