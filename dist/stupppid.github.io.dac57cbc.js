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
},{}],"0nx4":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"2YyK":[function(require,module,exports) {
var process = require("process");
var define;
var t,n=require("process"),e=function(){this._tweens={},this._tweensAddedDuringUpdate={}};e.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,n){var e=Object.keys(this._tweens);if(0===e.length)return!1;for(t=void 0!==t?t:i.now();e.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<e.length;r++){var a=this._tweens[e[r]];a&&!1===a.update(t)&&(a._isPlaying=!1,n||delete this._tweens[e[r]])}e=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i=new e;i.Group=e,i._nextId=0,i.nextId=function(){return i._nextId++},"undefined"==typeof window&&void 0!==n&&n.hrtime?i.now=function(){var t=n.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?i.now=window.performance.now.bind(window.performance):void 0!==Date.now?i.now=Date.now:i.now=function(){return(new Date).getTime()},i.Tween=function(t,n){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=i.Easing.Linear.None,this._interpolationFunction=i.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=n||i,this._id=i.nextId()},i.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,n){return this._valuesEnd=t,void 0!==n&&(this._duration=n),this},start:function(t){for(var n in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?i.now()+parseFloat(t):t:i.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[n]instanceof Array){if(0===this._valuesEnd[n].length)continue;this._valuesEnd[n]=[this._object[n]].concat(this._valuesEnd[n])}void 0!==this._object[n]&&(this._valuesStart[n]=this._object[n],this._valuesStart[n]instanceof Array==!1&&(this._valuesStart[n]*=1),this._valuesStartRepeat[n]=this._valuesStart[n]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var n,e,i;if(t<this._startTime)return!0;for(n in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),e=(t-this._startTime)/this._duration,e=0===this._duration||e>1?1:e,i=this._easingFunction(e),this._valuesEnd)if(void 0!==this._valuesStart[n]){var r=this._valuesStart[n]||0,a=this._valuesEnd[n];a instanceof Array?this._object[n]=this._interpolationFunction(a,i):("string"==typeof a&&(a="+"===a.charAt(0)||"-"===a.charAt(0)?r+parseFloat(a):parseFloat(a)),"number"==typeof a&&(this._object[n]=r+(a-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===e){if(this._repeat>0){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[n]&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo){var s=this._valuesStartRepeat[n];this._valuesStartRepeat[n]=this._valuesEnd[n],this._valuesEnd[n]=s}this._valuesStart[n]=this._valuesStartRepeat[n]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,u=this._chainedTweens.length;o<u;o++)this._chainedTweens[o].start(this._startTime+this._duration);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,n){var e=t.length-1,r=e*n,a=Math.floor(r),s=i.Interpolation.Utils.Linear;return n<0?s(t[0],t[1],r):n>1?s(t[e],t[e-1],e-r):s(t[a],t[a+1>e?e:a+1],r-a)},Bezier:function(t,n){for(var e=0,r=t.length-1,a=Math.pow,s=i.Interpolation.Utils.Bernstein,o=0;o<=r;o++)e+=a(1-n,r-o)*a(n,o)*t[o]*s(r,o);return e},CatmullRom:function(t,n){var e=t.length-1,r=e*n,a=Math.floor(r),s=i.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(a=Math.floor(r=e*(1+n))),s(t[(a-1+e)%e],t[a],t[(a+1)%e],t[(a+2)%e],r-a)):n<0?t[0]-(s(t[0],t[0],t[1],t[1],-r)-t[0]):n>1?t[e]-(s(t[e],t[e],t[e-1],t[e-1],r-e)-t[e]):s(t[a?a-1:0],t[a],t[e<a+1?e:a+1],t[e<a+2?e:a+2],r-a)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=i.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:function(){var t=[1];return function(n){var e=1;if(t[n])return t[n];for(var i=n;i>1;i--)e*=i;return t[n]=e,e}}(),CatmullRom:function(t,n,e,i,r){var a=.5*(e-t),s=.5*(i-n),o=r*r;return(2*n-2*e+a+s)*(r*o)+(-3*n+3*e-2*a-s)*o+a*r+n}}},function(n){"function"==typeof t&&t.amd?t([],function(){return i}):"undefined"!=typeof module&&"object"==typeof exports?module.exports=i:void 0!==n&&(n.TWEEN=i)}(this);
},{"process":"0nx4"}],"Rq/L":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=require("@tweenjs/tween.js");function n(e){console.log(e.x)}function a(e){requestAnimationFrame(a),t.update(e)}var i=function i(o){var r=o.rootEl,s=void 0===r?document.body:r,d=o.showNumber,c=void 0!==d&&d,u=o.initNumber,l=void 0===u?0:u,p=o.callback,m=void 0===p?n:p,v=o.TWEENSet,f=void 0!==v&&v;e(this,i),f||requestAnimationFrame(a);var h=0,b={x:0},w=document.createElement("div"),x=document.createElement("div"),E=document.createElement("span");w.classList.add("process-wrap"),x.classList.add("process-entity");var C=new t.Tween(b).easing(t.Easing.Cubic.Out).onUpdate(function(){x.style.width="calc("+parseInt(b.x)+"% - 6px)",E.innerText=parseInt(b.x)+"%"});E.classList.add("number-span"),w.appendChild(x),c&&s.appendChild(E),s.appendChild(w),s.appendChild(E),Object.defineProperty(this,"number",{set:function(e){e>100&&(e=100),h=e,100===e?C.to({x:e},100).onComplete(m).start():e<100&&e>=0&&C.to({x:e},100).start()},get:function(){return h}}),this.number=l};module.exports=i;
},{"@tweenjs/tween.js":"2YyK"}],"nxaC":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=require("lodash/throttle"),n=require("../../lib/snow/index"),o=require("../../lib/process/index");function r(){var e=new n("welcomePage");window.snow=e,e.open();var r=new o({rootEl:document.getElementById("process"),showNumber:!0,TWEENSet:!1,callback:function(){e.close(),document.getElementById("hr").remove()}}),i=document.querySelector("#welcomePage").getElementsByClassName("snow-group")[0],l="perspective(3000px) translate3d(0px, 0px, 300px) ";i.style.transform=l,document.getElementById("welcomePage").addEventListener("mousemove",t(function(e){i.style.transform=l+"rotate3d("+[(i.clientHeight/2-e.clientY)/i.clientHeight,(e.clientX-i.clientWidth/2)/i.clientWidth,0].join(",")+",5deg) "},50)),setTimeout(function e(){r.number+=10*Math.random(),r.number<100&&setTimeout(e,1e3)})}module.exports=r;
},{"lodash/throttle":"xX8v","../../lib/snow/index":"3c8t","../../lib/process/index":"Rq/L","process":"0nx4"}],"D3VI":[function(require,module,exports) {
function o(){}module.exports=o;
},{}],"KtO6":[function(require,module,exports) {
var e=document.createElement("template"),n=null,t="";function o(o){var d=o.appId,r=void 0===d?"app":d,a=o.paths;window.addEventListener("hashchange",function(e){p.go(e.newURL.substr(e.newURL.indexOf("#")+1))});var p={go:function(o){(a[o]||t!==o)&&(t=o,e.innerHTML=a[o].page,n&&n.remove(),document.getElementById(r).appendChild(document.importNode(e.content,!0)),n=document.querySelector("div[page="+o+"]"),a[o].script())}};return p}module.exports=o;
},{}],"Zo2V":[function(require,module,exports) {
var e={welcome:{page:require("./pages/welcome/index.html"),script:require("./pages/welcome/index.js")},pingpong:{page:require("./pages/pingpong/index.html"),script:require("./pages/pingpong/index.js")}};module.exports=require("./lib/router")({appId:"app",paths:e});
},{"./pages/welcome/index.html":"Z0eu","./pages/welcome/index.js":"nxaC","./pages/pingpong/index.html":"6QVh","./pages/pingpong/index.js":"D3VI","./lib/router":"KtO6"}],"Focm":[function(require,module,exports) {
require("./pages/welcome/index.html"),require("./pages/welcome/index.js");var e=require("./route");e.go("welcome");
},{"./pages/welcome/index.html":"Z0eu","./pages/welcome/index.js":"nxaC","./route":"Zo2V"}],"+voD":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"oBPc":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"+voD"}],"phy6":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("oBPc");b.register("html",require("phy6"));b.load([["welcome.5c40a90a.html","Z0eu"],["pingpong.47a70d96.html","6QVh"]]).then(function(){require("Focm");});
},{}]},{},[0], null)
//# sourceMappingURL=stupppid.github.io.dac57cbc.js.map