parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wY0Z":[function(require,module,exports) {
"use strict";var t=function(t,e){this.callback=e,this.id=t.id,this.overTime=t.overTime>9||t.overTime<1?9e3:1e3*t.overTime||9e3,this.reverse=t.reverse||!1,this.x=t.startTime||1,this.tick=t.tick||40,this.leftTime=this.overTime,this.x=100,this.y=60,this.radius=47,this.isover=!0,this.init()};t.prototype={init:function(){let t=this,e=Math.random();document.getElementById(this.id).innerHTML='<canvas id="bell'+e+'"width="200px" height="120px" style="border: solid gray 1px;"></canvas><audio id=\'audio\' autoplay muted loop><source src="./bell.wav" type="audio/ogg">老电视声音无法在该浏览器播放</audio>',this.el=document.getElementById("bell"+e),this.audio=document.getElementById("audio"),this.ctx=this.el.getContext("2d"),document.getElementById(this.id).addEventListener("touchstart",function(e){t.isover&&(e.preventDefault(),t.start())}),this.el.addEventListener("click",function(e){t.isover&&(e.preventDefault(),t.start())}),t.drawBell(),t.drawNumber(this.ctx,0)},start(){let t=this;t.audio.muted=null,t.isover=!1;let e=t.drawInterval||1e3/t.tick;t.startTime=new Date,t.intervalHandler=setInterval(function(){t.onTimer()},e)},onTimer(){let t,e=this,i=new Date-e.startTime;e.leftTime=i,i>e.overTime&&(clearInterval(e.intervalHandler),e.audio.muted="muted",e.isover=!0,e.callback()),e.drawBell(),t=e.reverse?Math.ceil((e.overTime-i)/1e3):Math.floor(i/1e3),e.drawNumber(this.ctx,t),e.preSecond=t},drawBell(){let t=this.ctx;this.drawMask(t),this.drawBlackMask(t),this.drawBorder(t),this.drawLines(t)},drawNumber(t,e){t.beginPath(),t.font="100px Arial",t.fillStyle="black",t.fillText(e,this.x-27,this.y+36)},drawMask(t){let e=t.createRadialGradient(this.x,this.y,0,this.x,this.y,2.5*this.radius*(.9+.1*Math.random()));e.addColorStop(0,"#bbb"),e.addColorStop(.4,"#999"),e.addColorStop(.7,"#555"),e.addColorStop(1,"black"),t.fillStyle=e,t.fillRect(0,0,200,120)},drawBlackMask(t){t.beginPath(),t.fillStyle="rgba(0,0,0,.5)";let e=this.leftTime%1e3/1e3;t.moveTo(this.x,this.y),t.lineTo(2*this.x,this.y),t.arc(this.x,this.y,Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),0,e*Math.PI*2),t.fill()},drawLines(t){t.beginPath(),t.lineWidth=1,t.strokeStyle="black",t.moveTo(this.x,0),t.lineTo(this.x,2*this.y),t.moveTo(0,this.y),t.lineTo(2*this.x,this.y),t.stroke()},drawBorder(t){t.beginPath(),t.lineWidth=1,t.strokeStyle="#bbb",t.arc(this.x,this.y,this.radius+1,0,2*Math.PI),t.arc(this.x,this.y,this.radius+12,0,2*Math.PI),t.stroke()}},module.exports=t;
},{}],"H5TN":[function(require,module,exports) {
"use strict";var e=o(require("oldtvdemo"));function o(e){return e&&e.__esModule?e:{default:e}}module.exports=function(){window.bell=new e.default({id:"bell",overTime:9,reverse:!0},function(){console.log("time over, if you want to test again, you can click on the screen or run `bell.start()` on console.")}),window.bell.start()};
},{"oldtvdemo":"wY0Z"}]},{},["H5TN"], null)
//# sourceMappingURL=oldTV.457d6489.js.map