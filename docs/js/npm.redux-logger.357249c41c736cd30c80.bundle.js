(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[224],{3974:function(e,t,r){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function l(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t=void 0===e?"undefined":C(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,p,d){d=d||[];var h=(s=s||[]).slice(0);if(void 0!==p){if(n){if("function"==typeof n&&n(h,p))return;if("object"===(void 0===n?"undefined":C(n))){if(n.prefilter&&n.prefilter(h,p))return;if(n.normalize){var g=n.normalize(h,p,e,t);g&&(e=g[0],t=g[1])}}}h.push(p)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":C(e),b=void 0===t?"undefined":C(t),y="undefined"!==v||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),m="undefined"!==b||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!y&&m)r(new i(h,t));else if(!m&&y)r(new a(h,e));else if(u(e)!==u(t))r(new o(h,e,t));else if("date"===u(e)&&e-t!=0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(d.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new c(h,w,new a(void 0,e[w]))):f(e[w],t[w],r,n,h,w,d);for(;w<t.length;)r(new c(h,w,new i(void 0,t[w++])))}else{var x=Object.keys(e),k=Object.keys(t);x.forEach((function(o,i){var a=k.indexOf(o);a>=0?(f(e[o],t[o],r,n,h,o,d),k=l(k,a)):f(e[o],void 0,r,n,h,o,d)})),k.forEach((function(e){f(void 0,t[e],r,n,h,e,d)}))}d.length=d.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e=l(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":p(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function h(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":h(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":h(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=l(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":h(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function v(e,t,r){e&&t&&f(e,t,(function(n){r&&!r(e,t,n)||d(e,t,n)}))}function b(e){return"color: "+T[e].color+"; font-weight: bold"}function y(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function m(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=y(e);r.log.apply(r,["%c "+T[t].text,b(t)].concat(P(n)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function w(e,t,r,n){switch(void 0===e?"undefined":C(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function x(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function k(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?x(t):o,a=t.collapsed,c=t.colors,l=t.level,u=t.diff,f=void 0===t.titleFormatter;e.forEach((function(o,s){var p=o.started,d=o.startedTime,h=o.action,g=o.prevState,v=o.error,b=o.took,y=o.nextState,x=e[s+1];x&&(y=x.prevState,b=x.started-p);var k=n(h),S="function"==typeof a?a((function(){return y}),h,o):a,j=O(d),E=c.title?"color: "+c.title(k)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var D=i(k,j,b);try{S?c.title&&f?r.groupCollapsed.apply(r,["%c "+D].concat(A)):r.groupCollapsed(D):c.title&&f?r.group.apply(r,["%c "+D].concat(A)):r.group(D)}catch(e){r.log(D)}var N=w(l,k,[g],"prevState"),C=w(l,k,[k],"action"),P=w(l,k,[v,g],"error"),F=w(l,k,[y],"nextState");if(N)if(c.prevState){var T="color: "+c.prevState(g)+"; font-weight: bold";r[N]("%c prev state",T,g)}else r[N]("prev state",g);if(C)if(c.action){var _="color: "+c.action(k)+"; font-weight: bold";r[C]("%c action    ",_,k)}else r[C]("action    ",k);if(v&&P)if(c.error){var L="color: "+c.error(v,g)+"; font-weight: bold;";r[P]("%c error     ",L,v)}else r[P]("error     ",v);if(F)if(c.nextState){var M="color: "+c.nextState(y)+"; font-weight: bold";r[F]("%c next state",M,y)}else r[F]("next state",y);u&&m(g,y,r,S);try{r.groupEnd()}catch(e){r.log("—— log end ——")}}))}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},_,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var r=e.getState;return function(e){return function(u){if("function"==typeof i&&!i(r,u))return e(u);var f={};l.push(f),f.started=N.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=u;var s=void 0;if(a)try{s=e(u)}catch(e){f.error=o(e)}else s=e(u);f.took=N.now()-f.started,f.nextState=n(r());var p=t.diff&&"function"==typeof c?c(r,u):t.diff;if(k(l,Object.assign({},t,{diff:p})),l.length=0,f.error)throw f.error;return s}}}}var j,E,A=function(e,t){return new Array(t+1).join(e)},D=function(e,t){return A("0",t-e.toString().length)+e},O=function(e){return D(e.getHours(),2)+":"+D(e.getMinutes(),2)+":"+D(e.getSeconds(),2)+"."+D(e.getMilliseconds(),3)},N="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},F=[];j="object"===(void 0===r.g?"undefined":C(r.g))&&r.g?r.g:"undefined"!=typeof window?window:{},(E=j.DeepDiff)&&F.push((function(){void 0!==E&&j.DeepDiff===s&&(j.DeepDiff=E,E=void 0)})),t(o,n),t(i,n),t(a,n),t(c,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:v,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return void 0!==E},enumerable:!0},noConflict:{value:function(){return F&&(F.forEach((function(e){e()})),F=null),s},enumerable:!0}});var T={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},_={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=_,e.createLogger=S,e.logger=L,e.default=L,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);