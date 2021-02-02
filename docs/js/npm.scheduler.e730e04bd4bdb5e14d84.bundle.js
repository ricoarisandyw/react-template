/*! For license information please see npm.scheduler.e730e04bd4bdb5e14d84.bundle.js.LICENSE.txt */
(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[655],{1196:(e,n)=>{"use strict";var t,r,a,o,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var i=null,u=null,s=function(){if(null!==i)try{var e=n.unstable_now();i(!0,e),i=null}catch(e){throw setTimeout(s,0),e}},c=Date.now();n.unstable_now=function(){return Date.now()-c},t=function(e){null!==i?setTimeout(t,0,e):(i=e,setTimeout(s,0))},r=function(e,n){u=setTimeout(e,n)},a=function(){clearTimeout(u)},o=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var f=window.performance,b=window.Date,p=window.setTimeout,w=window.clearTimeout;if("undefined"!=typeof console){var d=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof d&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)n.unstable_now=function(){return f.now()};else{var v=b.now();n.unstable_now=function(){return b.now()-v}}var m=!1,y=null,_=-1,h=5,k=0;o=function(){return n.unstable_now()>=k},l=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):h=0<e?Math.floor(1e3/e):5};var T=new MessageChannel,x=T.port2;T.port1.onmessage=function(){if(null!==y){var e=n.unstable_now();k=e+h;try{y(!0,e)?x.postMessage(null):(m=!1,y=null)}catch(e){throw x.postMessage(null),e}}else m=!1},t=function(e){y=e,m||(m=!0,x.postMessage(null))},r=function(e,t){_=p((function(){e(n.unstable_now())}),t)},a=function(){w(_),_=-1}}function g(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<F(a,n)))break e;e[r]=n,e[t]=a,t=r}}function C(e){return void 0===(e=e[0])?null:e}function P(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,l=e[o],i=o+1,u=e[i];if(void 0!==l&&0>F(l,t))void 0!==u&&0>F(u,l)?(e[r]=u,e[i]=t,r=i):(e[r]=l,e[o]=t,r=o);else{if(!(void 0!==u&&0>F(u,t)))break e;e[r]=u,e[i]=t,r=i}}}return n}return null}function F(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var I=[],M=[],A=1,L=null,q=3,D=!1,R=!1,j=!1;function E(e){for(var n=C(M);null!==n;){if(null===n.callback)P(M);else{if(!(n.startTime<=e))break;P(M),n.sortIndex=n.expirationTime,g(I,n)}n=C(M)}}function N(e){if(j=!1,E(e),!R)if(null!==C(I))R=!0,t(B);else{var n=C(M);null!==n&&r(N,n.startTime-e)}}function B(e,t){R=!1,j&&(j=!1,a()),D=!0;var l=q;try{for(E(t),L=C(I);null!==L&&(!(L.expirationTime>t)||e&&!o());){var i=L.callback;if(null!==i){L.callback=null,q=L.priorityLevel;var u=i(L.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?L.callback=u:L===C(I)&&P(I),E(t)}else P(I);L=C(I)}if(null!==L)var s=!0;else{var c=C(M);null!==c&&r(N,c.startTime-t),s=!1}return s}finally{L=null,q=l,D=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var W=l;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){R||D||(R=!0,t(B))},n.unstable_getCurrentPriorityLevel=function(){return q},n.unstable_getFirstCallbackNode=function(){return C(I)},n.unstable_next=function(e){switch(q){case 1:case 2:case 3:var n=3;break;default:n=q}var t=q;q=n;try{return e()}finally{q=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=W,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=q;q=e;try{return n()}finally{q=t}},n.unstable_scheduleCallback=function(e,o,l){var i=n.unstable_now();if("object"==typeof l&&null!==l){var u=l.delay;u="number"==typeof u&&0<u?i+u:i,l="number"==typeof l.timeout?l.timeout:U(e)}else l=U(e),u=i;return e={id:A++,callback:o,priorityLevel:e,startTime:u,expirationTime:l=u+l,sortIndex:-1},u>i?(e.sortIndex=u,g(M,e),null===C(I)&&e===C(M)&&(j?a():j=!0,r(N,u-i))):(e.sortIndex=l,g(I,e),R||D||(R=!0,t(B))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();E(e);var t=C(I);return t!==L&&null!==L&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<L.expirationTime||o()},n.unstable_wrapCallback=function(e){var n=q;return function(){var t=q;q=n;try{return e.apply(this,arguments)}finally{q=t}}}},2851:(e,n,t)=>{"use strict";e.exports=t(1196)}}]);