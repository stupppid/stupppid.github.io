// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pages/lifegame/index.js":[function(require,module,exports) {
var nextTick = null;

function initPersons(a, b, p, auto, t) {
  var stop = true;
  var theWorld = {
    isOver: false,
    arr: [],
    getMatrix: function getMatrix(i, j) {
      return this.arr[i - 1][j - 1] + this.arr[i - 1][j] + this.arr[i - 1][j + 1] + this.arr[i][j - 1] + this.arr[i][j + 1] + this.arr[i + 1][j - 1] + this.arr[i + 1][j] + this.arr[i + 1][j + 1];
    }
  };

  function stopGo() {
    stop = true;
    document.getElementById('start').innerText = '开始';
  }

  function continueGo() {
    stop = false;
    document.getElementById('start').innerText = '暂停';
    nextTick = setTimeout(setWorld, t);
  }

  function initTable() {
    var wd = document.getElementById('wd');
    wd.innerHTML = null;

    for (var i = 0; i < b + 2; i++) {
      var uel = document.createElement('div');
      uel.setAttribute('class', 'uel');

      for (var j = 0; j < a + 2; j++) {
        var el = document.createElement('i');
        el.setAttribute('class', 'el');
        uel.appendChild(el);
      }

      wd.appendChild(uel);
    }

    wd.style.width = (a + 2) * 15 + 'px';
    a += 1;
    b += 1;
  }

  function clearWorld() {
    for (var i in theWorld.arr) {
      for (var j in theWorld.arr[i]) {
        setDead(i, j);
      }
    }
  }

  function changeLife(i, j) {
    if (onEdge(i, j)) {
      return;
    }

    if (theWorld.arr[j][i]) {
      setDead(j, i);
    } else {
      setAlive(j, i);
    }
  }

  function addEvent() {
    var wd = document.getElementById('wd');
    wd.addEventListener('mouseover', function (e) {
      e.cancelBubble = true;
      e.preventDefault();

      if (e.buttons == 0) {
        return;
      }

      if (!e.target.className.startsWith('el')) {
        return;
      }

      for (var i in e.target.parentNode.children) {
        if (e.target.parentNode.children[i] == e.target) {
          break;
        }
      }

      for (var j = 0; j < wd.children.length; j++) {
        if (wd.children[j] == e.target.parentNode) {
          break;
        }
      }

      changeLife(i, j);
    });
    wd.addEventListener('click', function (e) {
      e.cancelBubble = true;
      e.preventDefault();

      for (var i in e.target.parentNode.children) {
        if (e.target.parentNode.children[i] == e.target) {
          break;
        }
      }

      for (var j = 0; j < wd.children.length; j++) {
        if (wd.children[j] == e.target.parentNode) {
          break;
        }
      }

      changeLife(i, j);
    });
    document.getElementById('rand').addEventListener('click', function () {
      autoSelectAlive(false);
    });
    document.getElementById('clear').addEventListener('click', function () {
      stopGo();
      clearWorld();
    });
    document.getElementById('start').addEventListener('click', function () {
      t = document.getElementById('time').value || 0;

      if (document.getElementById('a').value != a || document.getElementById('b').value != b) {
        var at = parseInt(document.getElementById('a').value) || 20;
        var bt = parseInt(document.getElementById('b').value) || 20;

        if (at != a - 1 || bt != b - 1) {
          a = at;
          b = bt;
          initTable();
          autoSelectAlive(true);
        }
      }

      p = document.getElementById('p').value || 0.3;

      if (stop) {
        continueGo();
      } else {
        stopGo();
      }
    });
    document.getElementById('slider').addEventListener('click', function () {
      stopGo();
      var arr = [[0, 0, 1], [1, 0, 1], [0, 1, 1]];
      selectAliveByArray(arr);
    });
    document.getElementById('shadow').addEventListener('click', function () {
      var rl = document.styleSheets[0].cssRules;

      for (var i in rl) {
        if (rl[i].selectorText == '.el') {
          if (rl[i].style.transition) {
            rl[i].style.transition = null;
          } else {
            rl[i].style.transition = 'background-color ease-in-out 200ms';
          }
        }
      }
    });
    document.getElementById('useInitStatus').addEventListener('click', function () {
      stopGo();
      var arr = JSON.parse(document.querySelector('#initStatus').value);
      selectAliveByArray(arr);
    });
  }

  function onEdge(i, j) {
    return i == 0 || j == 0 || j == a || i == b;
  }

  function selectAliveByArray(arr) {
    clearWorld();

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j]) {
          setAlive(i + 1, j + 1);
        }
      }
    }
  }

  function autoSelectAlive(none) {
    var uel = document.getElementById('uel');
    theWorld.arr = [];

    for (var i = 0; i < b + 1; i++) {
      var newLine = [];
      theWorld.arr.push(newLine);

      for (var j = 0; j < a + 1; j++) {
        if (onEdge(i, j) || none) {
          newLine.push(false);
          continue;
        }

        if (Math.random() < p) {
          newLine.push(true);
          document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el alive');
        } else {
          newLine.push(false);
          document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el');
        }
      }
    }
  }

  function setAlive(i, j) {
    theWorld.arr[i][j] = true;
    document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el alive');
  }

  function setDead(i, j) {
    theWorld.arr[i][j] = false;
    document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el');
  }

  function setWorld() {
    var tmparr = [];

    for (var i in theWorld.arr) {
      var arr2 = [];
      tmparr.push(arr2);

      if (i == 0 || i == theWorld.arr.length - 1) {
        continue;
      }

      for (var j in theWorld.arr[i]) {
        if (j == 0 || j == theWorld.arr[i].length - 1) {
          continue;
        }

        i = parseInt(i);
        j = parseInt(j);

        if (theWorld.getMatrix(i, j) == 2) {
          tmparr[i][j] = theWorld.arr[i][j];
        } else {
          tmparr[i][j] = theWorld.getMatrix(i, j) == 3 | false;
        }
      }
    }

    for (var i in theWorld.arr) {
      for (var j in theWorld.arr[i]) {
        theWorld.arr[i][j] = tmparr[i][j];

        if (tmparr[i][j]) {
          setAlive(i, j);
        } else {
          setDead(i, j);
        }
      }
    }

    if (!stop) {
      nextTick = setTimeout(setWorld, t);
    }
  }

  initTable();
  addEvent();

  if (auto) {
    continueGo();
    autoSelectAlive(); // true是全部都死掉

    nextTick = setTimeout(setWorld, t);
  } else {
    autoSelectAlive(true);
  }
}

function index() {
  initPersons(20, 20, 0.3, true, 100);
}

index.prototype.beforeLeave = function () {
  clearTimeout(nextTick);
};

module.exports = index;
},{}],"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5699" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","pages/lifegame/index.js"], null)
//# sourceMappingURL=/lifegame.b304b987.js.map