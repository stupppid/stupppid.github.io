parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ihtJ":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"PrXa":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"M4cY":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"PrXa"}],"8gRB":[function(require,module,exports) {
var r=require("./_root"),e=function(){return r.Date.now()};module.exports=e;
},{"./_root":"M4cY"}],"ydxh":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"M4cY"}],"+MKx":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"ydxh"}],"+SM0":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"fk/T":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"ydxh","./_getRawTag":"+MKx","./_objectToString":"+SM0"}],"cwaR":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"DFEd":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"fk/T","./isObjectLike":"cwaR"}],"K9rX":[function(require,module,exports) {
var e=require("./isObject"),r=require("./isSymbol"),t=NaN,i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,n=/^0o[0-7]+$/i,s=parseInt;function a(a){if("number"==typeof a)return a;if(r(a))return t;if(e(a)){var o="function"==typeof a.valueOf?a.valueOf():a;a=e(o)?o+"":o}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(i,"");var l=u.test(a);return l||n.test(a)?s(a.slice(2),l?2:8):f.test(a)?t:+a}module.exports=a;
},{"./isObject":"ihtJ","./isSymbol":"DFEd"}],"3o1J":[function(require,module,exports) {
var i=require("./isObject"),t=require("./now"),n=require("./toNumber"),r="Expected a function",e=Math.max,u=Math.min;function o(o,a,f){var c,v,d,m,l,s,p=0,T=!1,h=!1,x=!0;if("function"!=typeof o)throw new TypeError(r);function g(i){var t=c,n=v;return c=v=void 0,p=i,m=o.apply(n,t)}function q(i){var t=i-s;return void 0===s||t>=a||t<0||h&&i-p>=d}function w(){var i=t();if(q(i))return y(i);l=setTimeout(w,function(i){var t=a-(i-s);return h?u(t,d-(i-p)):t}(i))}function y(i){return l=void 0,x&&c?g(i):(c=v=void 0,m)}function b(){var i=t(),n=q(i);if(c=arguments,v=this,s=i,n){if(void 0===l)return function(i){return p=i,l=setTimeout(w,a),T?g(i):m}(s);if(h)return l=setTimeout(w,a),g(s)}return void 0===l&&(l=setTimeout(w,a)),m}return a=n(a)||0,i(f)&&(T=!!f.leading,d=(h="maxWait"in f)?e(n(f.maxWait)||0,a):d,x="trailing"in f?!!f.trailing:x),b.cancel=function(){void 0!==l&&clearTimeout(l),p=0,c=s=v=l=void 0},b.flush=function(){return void 0===l?m:y(t())},b}module.exports=o;
},{"./isObject":"ihtJ","./now":"8gRB","./toNumber":"K9rX"}],"xX8v":[function(require,module,exports) {
var i=require("./debounce"),e=require("./isObject"),n="Expected a function";function r(r,t,a){var o=!0,u=!0;if("function"!=typeof r)throw new TypeError(n);return e(a)&&(o="leading"in a?!!a.leading:o,u="trailing"in a?!!a.trailing:u),i(r,t,{leading:o,maxWait:t,trailing:u})}module.exports=r;
},{"./debounce":"3o1J","./isObject":"ihtJ"}],"3c8t":[function(require,module,exports) {
function e(e){var t;function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;e&&setTimeout(e,t)}this.open=function(n){if(t)t.classList.remove("snow-stop");else{(t=document.createElement("div")).classList.add("snow-group");for(var s=1;s<=3;s++){var i=document.createElement("div");i.classList.add("snow-"+s),t.appendChild(i)}e?document.getElementById(e).appendChild(t):document.body.appendChild(t)}o(n)},this.close=function(e){t.classList.add("snow-stop"),o(e)},this.quit=function(e){this.close(),o(function(){t.remove(),t=void 0,e&&e()})}}module.exports=e;
},{}],"9iW6":[function(require,module,exports) {
"use strict";var e,t="object"==typeof Reflect?Reflect:null,n=t&&"function"==typeof t.apply?t.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function r(e){console&&console.warn&&console.warn(e)}e=t&&"function"==typeof t.ownKeys?t.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}module.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function f(e,t,n,i){var o,s,f;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),f=s[t]),void 0===f)f=s[t]=n,++e._eventsCount;else if("function"==typeof f?f=s[t]=i?[n,f]:[f,n]:i?f.unshift(n):f.push(n),(o=u(e))>0&&f.length>o&&!f.warned){f.warned=!0;var p=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");p.name="MaxListenersExceededWarning",p.emitter=e,p.type=t,p.count=f.length,r(p)}return e}function p(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,n(this.listener,this.target,e))}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?y(i):c(i,i.length)}function a(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function c(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function l(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function y(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[e];if(void 0===f)return!1;if("function"==typeof f)n(f,this,t);else{var p=f.length,v=c(f,p);for(r=0;r<p;++r)n(v[r],this,t)}return!0},o.prototype.addListener=function(e,t){return f(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return f(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,v(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,v(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():l(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return h(this,e,!0)},o.prototype.rawListeners=function(e){return h(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):a.call(e,t)},o.prototype.listenerCount=a,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]};
},{}],"HKU1":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"2YyK":[function(require,module,exports) {
var process = require("process");
var define;
var t,n=require("process"),e=function(){this._tweens={},this._tweensAddedDuringUpdate={}};e.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,n){var e=Object.keys(this._tweens);if(0===e.length)return!1;for(t=void 0!==t?t:i.now();e.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<e.length;r++){var a=this._tweens[e[r]];a&&!1===a.update(t)&&(a._isPlaying=!1,n||delete this._tweens[e[r]])}e=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i=new e;i.Group=e,i._nextId=0,i.nextId=function(){return i._nextId++},"undefined"==typeof window&&void 0!==n&&n.hrtime?i.now=function(){var t=n.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?i.now=window.performance.now.bind(window.performance):void 0!==Date.now?i.now=Date.now:i.now=function(){return(new Date).getTime()},i.Tween=function(t,n){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=i.Easing.Linear.None,this._interpolationFunction=i.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=n||i,this._id=i.nextId()},i.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,n){return this._valuesEnd=t,void 0!==n&&(this._duration=n),this},start:function(t){for(var n in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?i.now()+parseFloat(t):t:i.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[n]instanceof Array){if(0===this._valuesEnd[n].length)continue;this._valuesEnd[n]=[this._object[n]].concat(this._valuesEnd[n])}void 0!==this._object[n]&&(this._valuesStart[n]=this._object[n],this._valuesStart[n]instanceof Array==!1&&(this._valuesStart[n]*=1),this._valuesStartRepeat[n]=this._valuesStart[n]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var n,e,i;if(t<this._startTime)return!0;for(n in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),e=(t-this._startTime)/this._duration,e=0===this._duration||e>1?1:e,i=this._easingFunction(e),this._valuesEnd)if(void 0!==this._valuesStart[n]){var r=this._valuesStart[n]||0,a=this._valuesEnd[n];a instanceof Array?this._object[n]=this._interpolationFunction(a,i):("string"==typeof a&&(a="+"===a.charAt(0)||"-"===a.charAt(0)?r+parseFloat(a):parseFloat(a)),"number"==typeof a&&(this._object[n]=r+(a-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===e){if(this._repeat>0){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[n]&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo){var s=this._valuesStartRepeat[n];this._valuesStartRepeat[n]=this._valuesEnd[n],this._valuesEnd[n]=s}this._valuesStart[n]=this._valuesStartRepeat[n]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,u=this._chainedTweens.length;o<u;o++)this._chainedTweens[o].start(this._startTime+this._duration);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,n){var e=t.length-1,r=e*n,a=Math.floor(r),s=i.Interpolation.Utils.Linear;return n<0?s(t[0],t[1],r):n>1?s(t[e],t[e-1],e-r):s(t[a],t[a+1>e?e:a+1],r-a)},Bezier:function(t,n){for(var e=0,r=t.length-1,a=Math.pow,s=i.Interpolation.Utils.Bernstein,o=0;o<=r;o++)e+=a(1-n,r-o)*a(n,o)*t[o]*s(r,o);return e},CatmullRom:function(t,n){var e=t.length-1,r=e*n,a=Math.floor(r),s=i.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(a=Math.floor(r=e*(1+n))),s(t[(a-1+e)%e],t[a],t[(a+1)%e],t[(a+2)%e],r-a)):n<0?t[0]-(s(t[0],t[0],t[1],t[1],-r)-t[0]):n>1?t[e]-(s(t[e],t[e],t[e-1],t[e-1],r-e)-t[e]):s(t[a?a-1:0],t[a],t[e<a+1?e:a+1],t[e<a+2?e:a+2],r-a)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=i.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:function(){var t=[1];return function(n){var e=1;if(t[n])return t[n];for(var i=n;i>1;i--)e*=i;return t[n]=e,e}}(),CatmullRom:function(t,n,e,i,r){var a=.5*(e-t),s=.5*(i-n),o=r*r;return(2*n-2*e+a+s)*(r*o)+(-3*n+3*e-2*a-s)*o+a*r+n}}},function(n){"function"==typeof t&&t.amd?t([],function(){return i}):"undefined"!=typeof module&&"object"==typeof exports?module.exports=i:void 0!==n&&(n.TWEEN=i)}(this);
},{"process":"HKU1"}],"Rq/L":[function(require,module,exports) {
"use strict";var e=require("events");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=require("@tweenjs/tween.js");function p(e){console.log(e.x)}function f(e){requestAnimationFrame(f),l.update(e)}var d=function(t){function o(e){var t,r=e.rootEl,a=void 0===r?document.body:r,s=e.showNumber,d=void 0!==s&&s,y=e.initNumber,b=void 0===y?0:y,m=e.callback,v=void 0===m?p:m,h=e.TWEENSet,w=void 0!==h&&h;n(this,o),t=i(this,u(o).call(this)),w||requestAnimationFrame(f),t.rootEl=a;var E=0,O="",g={x:0},j=document.createElement("div"),x=document.createElement("div"),C=document.createElement("div"),_=document.createElement("span");j.classList.add("process-wrap"),x.classList.add("process-entity"),C.classList.add("process-msg");var P=new l.Tween(g).easing(l.Easing.Cubic.Out).onUpdate(function(){x.style.width="calc("+parseInt(g.x)+"% - 6px)",_.innerText=parseInt(g.x)+"%"});return _.classList.add("number-span"),j.appendChild(x),j.appendChild(C),d&&a.appendChild(_),a.appendChild(j),a.appendChild(_),Object.defineProperty(c(t),"number",{set:function(e){e>100&&(e=100),E=e,100===e?P.to({x:e},100).onComplete(v).start():e<100&&e>=0&&P.to({x:e},100).start()},get:function(){return E}}),Object.defineProperty(c(t),"msg",{set:function(e){O=e,C.innerText=e},get:function(){return O}}),t.number=b,t}return a(o,e.EventEmitter),r(o,[{key:"hide",value:function(){this.rootEl.style.display="none"}},{key:"show",value:function(){this.rootEl.style.display="block"}}]),o}();module.exports=d;
},{"events":"9iW6","@tweenjs/tween.js":"2YyK"}],"nxaC":[function(require,module,exports) {

var e,t,n=require("lodash/throttle"),i=require("../../lib/snow/index"),d=require("../../lib/process/index");function a(e){var t=document.createElement("div");for(var n in t.classList.add("display-list"),e)e[n].display&&l.call(t,{name:n,picture:e[n].picture});document.getElementById("bottomPanel").insertBefore(t,document.getElementById("process"))}function l(e){var t=e.name,n=e.picture,i=document.createElement("div"),d=document.createElement("a");i.classList.add("display-item"),i.appendChild(d),d.href="#"+t;var a=document.createElement("div");if(a.classList.add("title"),a.innerText=t,d.appendChild(a),n){var l=document.createElement("div");l.classList.add("loading"),l.appendChild(document.createElement("div")),i.appendChild(l),d.style.background="url("+n+")"}else{var r=document.createElement("h1");r.classList.add("no-image"),r.innerText="NO IMAGE",d.appendChild(r)}this.appendChild(i)}function r(){e=new i("welcomePage"),window.snow=e,e.open()}function o(){(t=new d({rootEl:document.getElementById("process"),showNumber:!0,TWEENSet:!1,callback:function(){}})).hide(),t.on("process",function(e){t.number+=e.number,t.msg=e.msg})}function c(){a(require("../../route/index").raw),r(),o();var e=document.querySelector("#welcomePage").getElementsByClassName("snow-group")[0],t="perspective(3000px) translate3d(0px, 0px, 300px) ";e.style.transform=t,document.getElementById("welcomePage").addEventListener("mousemove",n(function(n){e.style.transform=t+"rotate3d("+[(e.clientHeight/2-n.clientY)/e.clientHeight,(n.clientX-e.clientWidth/2)/e.clientWidth,0].join(",")+",5deg) "},50))}module.exports=c;
},{"lodash/throttle":"xX8v","../../lib/snow/index":"3c8t","../../lib/process/index":"Rq/L","../../route/index":"1l+7"}],"3fe2":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"Ak0P":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"3fe2"}],"hGGp":[function(require,module,exports) {
module.exports="3d-word-rain.a88fa98c.gif";
},{}],"ZBJg":[function(require,module,exports) {
module.exports="oldTV.af55b045.gif";
},{}],"KtO6":[function(require,module,exports) {
var e=require("events").EventEmitter,t=document.createElement("template"),n=null,o="",r={},c=[],i=function(){};function a(a){var p=a.appId,u=void 0===p?"app":p,s=a.paths;function h(e,o){t.innerHTML=e,i.beforeLeave&&i.beforeLeave(),function(e){document.getElementById(u).appendChild(document.importNode(t.content,!0)),n=document.querySelector("div[page='"+e+"']"),"function"==typeof s[e].script?(i=s[e].script,s[e].script()):s[e].script.then(function(e){i=e,e()})}(o)}return window.addEventListener("hashchange",function(e){var t=e.newURL.substr(e.newURL.indexOf("#")+1);s[t]&&o!==t||null===n?(r.emit("beforeEnter",{path:t,pathInfo:s[t],event:e}),r.show(t),r.emit("enter",{path:t,pathInfo:s[t],event:e})):console.error("can not convert to this path: "+t)}),r.show=function(e){c.push(o),o=e,n&&n.remove(),"string"==typeof s[e].page?h(s[e].page,e):s[e].page.then(function(t){h(t,e)})},r.go=function(e){s[e]&&o!==e||null===n?""===o&&document.location.hash.substr(1)===e?r.show(e):document.location.hash=-1===e?c.pop():e:console.error("can not convert to this path: "+e)},r.history=c,r.__proto__=new e,r}module.exports=a;
},{"events":"9iW6"}],"1l+7":[function(require,module,exports) {
var e={welcome:{page:require("/pages/welcome/index.html"),script:require("/pages/welcome/index.js"),github:"https://github.com/stupppid/stupppid.github.io",isHomepage:!0},pingpong:{page:require("_bundle_loader")(require.resolve("/pages/pingpong/index.html")),script:require("_bundle_loader")(require.resolve("/pages/pingpong/index.js")),display:!0},lifegame:{page:require("_bundle_loader")(require.resolve("/pages/lifegame/index.html")),script:require("_bundle_loader")(require.resolve("/pages/lifegame/index.js")),github:"https://github.com/stupppid/lifegame",githubAddressColor:"black",display:!0},"3d-word-rain":{page:require("_bundle_loader")(require.resolve("/pages/3d-word-rain/index.html")),script:require("_bundle_loader")(require.resolve("/pages/3d-word-rain/index.js")),github:"https://github.com/stupppid/3d-word-rain",display:!0,picture:require("/pages/3d-word-rain/index.gif")},oldTV:{page:require("_bundle_loader")(require.resolve("/pages/oldTV/index.html")),script:require("_bundle_loader")(require.resolve("/pages/oldTV/index.js")),github:"https://github.com/stupppid/oldTV",display:!0,picture:require("/pages/oldTV/index.gif")}};module.exports={router:require("../lib/router")({appId:"app",paths:e}),raw:e};
},{"/pages/welcome/index.html":"Z0eu","/pages/welcome/index.js":"nxaC","_bundle_loader":"Ak0P","/pages/pingpong/index.html":[["pingpong.61470181.html","6QVh"],"6QVh"],"/pages/pingpong/index.js":[["pingpong.874f3cc3.js","D3VI"],"pingpong.874f3cc3.js.map",["pingpong.5c50a9c4.gltf","kit1"],["racket.7718a469.gltf","CbOD"],"D3VI"],"/pages/lifegame/index.html":[["lifegame.4442dc02.html","X687"],"X687"],"/pages/lifegame/index.js":[["lifegame.db6e5cf0.js","FD8j"],"lifegame.db6e5cf0.js.map","FD8j"],"/pages/3d-word-rain/index.html":[["3d-word-rain.994e0bd8.html","QzTe"],"QzTe"],"/pages/3d-word-rain/index.js":[["3d-word-rain.6367f431.js","7bcd"],"3d-word-rain.6367f431.js.map","7bcd"],"/pages/3d-word-rain/index.gif":"hGGp","/pages/oldTV/index.html":[["oldTV.362c7b95.html","nIqw"],"nIqw"],"/pages/oldTV/index.js":[["oldTV.c31b9cdc.js","H5TN"],"oldTV.c31b9cdc.js.map","H5TN"],"/pages/oldTV/index.gif":"ZBJg","../lib/router":"KtO6"}],"yMXu":[function(require,module,exports) {
module.exports={githubAddressDefaultColor:"white",pagePrototype:{beforeLeave:function(){}}};
},{}],"Focm":[function(require,module,exports) {
var e=require("./route/index"),r=e.router,t=e.raw,o=require("./config");function n(e){i.innerText=e.github,i.href=e.github,i.style.color=e.githubAddressColor||o.githubAddressDefaultColor}var i=document.getElementById("githubAddress");r.on("beforeEnter",function(e){e.path;var r=e.pathInfo;e.event;r.github?n(r):(i.innerText="",i.href="")}),function(){var e=!1;for(var o in t)if(o===window.location.hash.substr(1)){r.show(o),n(t[o]),e=!0;break}e||r.go("welcome")}();
},{"./route/index":"1l+7","./config":"yMXu"}],"NtIY":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],"ZgTD":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("Ak0P");b.register("html",require("NtIY"));b.register("js",require("ZgTD"));b.load([["welcome.9583192b.html","Z0eu"]]).then(function(){require("Focm");});
},{}]},{},[0], null)
//# sourceMappingURL=stupppid.github.io.f003c9cd.js.map