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
})({"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/bundle-url.js"}],"node_modules/ratta-console/src/index.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/css-loader.js"}],"node_modules/mobx/lib/mobx.module.js":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowCancellationError = FlowCancellationError;
exports._allowStateChanges = allowStateChanges;
exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
exports._allowStateReadsEnd = allowStateReadsEnd;
exports._allowStateReadsStart = allowStateReadsStart;
exports._endAction = _endAction;
exports._getAdministration = getAdministration;
exports._getGlobalState = getGlobalState;
exports._interceptReads = interceptReads;
exports._isComputingDerivation = isComputingDerivation;
exports._resetGlobalState = resetGlobalState;
exports._startAction = _startAction;
exports.autorun = autorun;
exports.configure = configure;
exports.createAtom = createAtom;
exports.decorate = decorate;
exports.entries = entries;
exports.extendObservable = extendObservable;
exports.flow = flow;
exports.get = get;
exports.getAtom = getAtom;
exports.getDebugName = getDebugName;
exports.getDependencyTree = getDependencyTree;
exports.getObserverTree = getObserverTree;
exports.has = has;
exports.intercept = intercept;
exports.isAction = isAction;
exports.isArrayLike = isArrayLike;
exports.isComputed = isComputed;
exports.isComputedProp = isComputedProp;
exports.isFlowCancellationError = isFlowCancellationError;
exports.isObservable = isObservable;
exports.isObservableArray = isObservableArray;
exports.isObservableObject = isObservableObject;
exports.isObservableProp = isObservableProp;
exports.keys = keys;
exports.observe = observe;
exports.onBecomeObserved = onBecomeObserved;
exports.onBecomeUnobserved = onBecomeUnobserved;
exports.onReactionError = onReactionError;
exports.reaction = reaction;
exports.remove = remove;
exports.runInAction = runInAction;
exports.set = set;
exports.spy = spy;
exports.toJS = toJS;
exports.trace = trace;
exports.transaction = transaction;
exports.untracked = untracked;
exports.values = values;
exports.when = when;
exports.observable = exports.isObservableSet = exports.isObservableMap = exports.isBoxedObservable = exports.computed = exports.comparer = exports.action = exports.Reaction = exports.ObservableSet = exports.ObservableMap = exports.IDerivationState = exports.$mobx = void 0;

/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);

function getNextId() {
  return ++globalState.mobxGuid;
}

function fail(message) {
  invariant(false, message);
  throw "X"; // unreachable
}

function invariant(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg, thing) {
  if ("development" === "production") return false;

  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop = function () {};

function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}

function isObject(value) {
  return value !== null && typeof value === "object";
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}

function assertPropertyConfigurable(object, prop) {
  if ("development" !== "production" && !isPropertyConfigurable(object, prop)) fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}

function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */


function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}

function isES6Map(thing) {
  return thing instanceof Map;
}

function isES6Set(thing) {
  return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */


function getPlainObjectKeys(object) {
  var enumerables = new Set();

  for (var key in object) enumerables.add(key); // *all* enumerables


  Object.getOwnPropertySymbols(object).forEach(function (k) {
    if (Object.getOwnPropertyDescriptor(object, k).enumerable) enumerables.add(k);
  }); // *own* symbols
  // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
  // as there is no efficient iterator that returns *all* properties

  return Array.from(enumerables);
}

function stringifyKey(key) {
  if (key && key.toString) return key.toString();else return new String(key).toString();
}

function getMapLikeKeys(map) {
  if (isPlainObject(map)) return Object.keys(map);
  if (Array.isArray(map)) return map.map(function (_a) {
    var _b = __read(_a, 1),
        key = _b[0];

    return key;
  });
  if (isES6Map(map) || isObservableMap(map)) return Array.from(map.keys());
  return fail("Cannot get keys from '" + map + "'");
}

function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
exports.$mobx = $mobx;

var Atom =
/** @class */
function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name) {
    if (name === void 0) {
      name = "Atom@" + getNextId();
    }

    this.name = name;
    this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    this.isBeingObserved = false;
    this.observers = new Set();
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.NOT_TRACKING;
  }

  Atom.prototype.onBecomeObserved = function () {
    if (this.onBecomeObservedListeners) {
      this.onBecomeObservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };

  Atom.prototype.onBecomeUnobserved = function () {
    if (this.onBecomeUnobservedListeners) {
      this.onBecomeUnobservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */


  Atom.prototype.reportObserved = function () {
    return reportObserved(this);
  };
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */


  Atom.prototype.reportChanged = function () {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  Atom.prototype.toString = function () {
    return this.name;
  };

  return Atom;
}();

var isAtom = createInstanceofPredicate("Atom", Atom);

function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer,
  shallow: shallowComparer
};
exports.comparer = comparer;
var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};

function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function () {
      initializeInstance(this);
      return this[prop];
    },
    set: function (value) {
      initializeInstance(this);
      this[prop] = value;
    }
  });
}

function initializeInstance(target) {
  var e_1, _a;

  if (target[mobxDidRunLazyInitializersSymbol] === true) return;
  var decorators = target[mobxPendingDecorators];

  if (decorators) {
    addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true); // Build property key array from both strings and symbols

    var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));

    try {
      for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
        var key = keys_1_1.value;
        var d = decorators[key];
        d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  }
}

function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;

    var decorator = function decorate(target, prop, descriptor, applyImmediately // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }

      if ("development" !== "production" && !quacksLikeADecorator(arguments)) fail("This function is a decorator, but it wasn't invoked like a decorator");

      if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
        var inheritedDecorators = target[mobxPendingDecorators];
        addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
      }

      target[mobxPendingDecorators][prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };

    if (quacksLikeADecorator(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}

function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && (typeof args[1] === "string" || typeof args[1] === "symbol") || args.length === 4 && args[3] === true;
}

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}

function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  return fail("development" !== "production" && "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}

function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}

function refStructEnhancer(v, oldValue, name) {
  if ("development" !== "production" && isObservable(v)) throw "observable.struct should not be used with observable values";
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

function createDecoratorForEnhancer(enhancer) {
  invariant(enhancer);
  var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if ("development" !== "production") {
      invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
    }

    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
  });
  var res = // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && "development" !== "production" ? function observableDecorator() {
    // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
    // and simply return the created prop decorator
    if (arguments.length < 2) return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
    return decorator.apply(null, arguments);
  } : decorator;
  res.enhancer = enhancer;
  return res;
} // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases


var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);

function assertValidOption(key) {
  if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key)) fail("invalid option for (extend)observable: " + key);
}

function asCreateObservableOptions(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions;
  if (typeof thing === "string") return {
    name: thing,
    deep: true,
    proxy: true
  };

  if ("development" !== "production") {
    if (typeof thing !== "object") return fail("expected options object");
    Object.keys(thing).forEach(assertValidOption);
  }

  return thing;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);

function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */


function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
    return deepDecorator.apply(null, arguments);
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res; // otherwise, just box it

  fail("development" !== "production" && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}

var observableFactories = {
  box: function (value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function (initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions(options);
    return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function (initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function (initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("set");
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function (props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions(options);

    if (o.proxy === false) {
      return extendObservable({}, props, decorators, o);
    } else {
      var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
      var base = extendObservable({}, undefined, undefined, o);
      var proxy = createDynamicObservableObject(base);
      extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
      return proxy;
    }
  },
  ref: refDecorator,
  shallow: shallowDecorator,
  deep: deepDecorator,
  struct: refStructDecorator
};
var observable = createObservable; // weird trick to keep our typings nicely with our funcs, and still extend the observable function

exports.observable = observable;
Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});

function incorrectlyUsedAsDecorator(methodName) {
  fail( // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  var get = descriptor.get,
      set = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:

  var options = decoratorArgs[0] || {};
  asObservableObject(instance).addComputedProp(instance, propertyName, __assign({
    get: get,
    set: set,
    context: instance
  }, options));
});
var computedStructDecorator = computedDecorator({
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator.apply(null, arguments);
  }

  if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator.apply(null, arguments);
  } // computed(expr, options?)


  if ("development" !== "production") {
    invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
    invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
  }

  var opts = typeof arg2 === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};

exports.computed = computed;
computed.struct = computedStructDecorator;
var IDerivationState;
exports.IDerivationState = IDerivationState;

(function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (exports.IDerivationState = IDerivationState = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException =
/** @class */
function () {
  function CaughtException(cause) {
    this.cause = cause; // Empty
  }

  return CaughtException;
}();

function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;

    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;

    case IDerivationState.POSSIBLY_STALE:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
} // function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }


function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers = atom.observers.size > 0; // Should never be possible to change an observed observable from inside computed, see #798

  if (globalState.computationDepth > 0 && hasObservers) fail("development" !== "production" && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name); // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict")) fail("development" !== "production" && (globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}

function checkIfStateReadsAreAllowed(observable) {
  if ("development" !== "production" && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if ("development" === "production") return;
  if (derivation.observing.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
    console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var dep = prevObserving[l];

    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }

    dep.diffValue = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var dep = observing[i0];

    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) removeObserver(obs[i], derivation);

  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}

function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}

function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}

function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}

function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}

function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
} // we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions


var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () {}, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;

function createAction(actionName, fn, ref) {
  if ("development" !== "production") {
    invariant(typeof fn === "function", "`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
  }

  var res = function () {
    return executeAction(actionName, fn, ref || this, arguments);
  };

  res.isMobxAction = true;

  if ("development" !== "production") {
    if (isFunctionNameConfigurable) {
      Object.defineProperty(res, "name", {
        value: actionName
      });
    }
  }

  return res;
}

function executeAction(actionName, fn, scope, args) {
  var runInfo = _startAction(actionName, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}

function _startAction(actionName, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;

  if (notifySpy && "development" !== "production") {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) flattendArgs[i] = args[i];
    spyReportStart({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }

  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  var prevAllowStateReads = allowStateReadsStart(true);
  var runInfo = {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    prevAllowStateReads: prevAllowStateReads,
    notifySpy: notifySpy,
    startTime: startTime,
    actionId: nextActionId++,
    parentActionId: currentActionId
  };
  currentActionId = runInfo.actionId;
  return runInfo;
}

function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId) {
    fail("invalid action stack. did you forget to finish an action?");
  }

  currentActionId = runInfo.parentActionId;

  if (runInfo.error !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  allowStateReadsEnd(runInfo.prevAllowStateReads);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);

  if (runInfo.notifySpy && "development" !== "production") {
    spyReportEnd({
      time: Date.now() - runInfo.startTime
    });
  }

  globalState.suppressReactionErrors = false;
}

function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  var res;

  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }

  return res;
}

function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}

function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function allowStateChangesInsideComputed(func) {
  var prev = globalState.computationDepth;
  globalState.computationDepth = 0;
  var res;

  try {
    res = func();
  } finally {
    globalState.computationDepth = prev;
  }

  return res;
}

var ObservableValue =
/** @class */
function (_super) {
  __extends(ObservableValue, _super);

  function ObservableValue(value, enhancer, name, notifySpy, equals) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer.default;
    }

    var _this = _super.call(this, name) || this;

    _this.enhancer = enhancer;
    _this.name = name;
    _this.equals = equals;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);

    if (notifySpy && isSpyEnabled() && "development" !== "production") {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: "create",
        name: _this.name,
        newValue: "" + _this.value
      });
    }

    return _this;
  }

  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (notifySpy && "development" !== "production") {
        spyReportStart({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue(newValue);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }
  };

  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value, this.name);
    return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
  };

  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };

  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };

  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };

  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  ObservableValue.prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);

var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

exports.isBoxedObservable = isObservableValue;

var ComputedValue =
/** @class */
function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = null; // during tracking it's an array with new observed observers

    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = new Set();
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles

    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    invariant(options.get, "missing option for computed: get");
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter = createAction(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }

  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };

  ComputedValue.prototype.onBecomeObserved = function () {
    if (this.onBecomeObservedListeners) {
      this.onBecomeObservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };

  ComputedValue.prototype.onBecomeUnobserved = function () {
    if (this.onBecomeUnobservedListeners) {
      this.onBecomeUnobservedListeners.forEach(function (listener) {
        return listener();
      });
    }
  };
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */


  ComputedValue.prototype.get = function () {
    if (this.isComputing) fail("Cycle detected in computation " + this.name + ": " + this.derivation);

    if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead();
        startBatch(); // See perf test 'computed memoization'

        this.value = this.computeValue(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }

    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };

  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;

      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false, "development" !== "production" && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };

  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled() && "development" !== "production") {
      spyReport({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }

    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);

    if (changed) {
      this.value = newValue;
    }

    return changed;
  };

  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };

  ComputedValue.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };

  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  ComputedValue.prototype.warnAboutUntrackedRead = function () {
    if ("development" === "production") return;

    if (this.requiresReaction === true) {
      fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }

    if (this.isTracing !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };

  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };

  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  ComputedValue.prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();

var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED"];

var MobXGlobals =
/** @class */
function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */

    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */

    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */

    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */

    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */

    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */

    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */

    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */

    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */

    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */

    this.allowStateChanges = true;
    /**
     * Is it allowed to read observables at this point?
     * Used to hold the state needed for `observableRequiresReaction`
     */

    this.allowStateReads = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */

    this.enforceActions = false;
    /**
     * Spy callbacks
     */

    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */

    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */

    this.computedRequiresReaction = false;
    /**
     * (Experimental)
     * Warn if you try to create to derivation / reactive context without accessing any observable.
     */

    this.reactionRequiresObservable = false;
    /**
     * (Experimental)
     * Warn if observables are accessed outside a reactive context
     */

    this.observableRequiresReaction = false;
    /**
     * Allows overwriting of computed properties, useful in tests but not prod as it can cause
     * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
     */

    this.computedConfigurable = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */

    this.disableErrorBoundaries = false;
    /*
     * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
     * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
     */

    this.suppressReactionErrors = false;
  }

  return MobXGlobals;
}();

var mockGlobal = {};

function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var canMergeGlobalState = true;
var isolateCalled = false;

var globalState = function () {
  var global = getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
}();

function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;

  if (canMergeGlobalState) {
    if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}

function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers && observable.observers.size > 0;
}

function getObservers(observable) {
  return observable.observers;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }


function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers.add(node);
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers.delete(node);

  if (observable.observers.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch() {
  globalState.inBatch++;
}

function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;

      if (observable.observers.size === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}

function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving[derivation.unboundDepsCount++] = observable;

      if (!observable.isBeingObserved) {
        observable.isBeingObserved = true;
        observable.onBecomeObserved();
      }
    }

    return true;
  } else if (observable.observers.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers.forEach(function (d) {
    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }

    d.dependenciesState = IDerivationState.STALE;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  observable.observers.forEach(function (d) {
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  observable.observers.forEach(function (d) {
    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;

      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");

  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction =
/** @class */
function () {
  function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
    if (name === void 0) {
      name = "Reaction@" + getNextId();
    }

    if (requiresObservable === void 0) {
      requiresObservable = false;
    }

    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.requiresObservable = requiresObservable;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }

  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };

  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */


  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;

      if (shouldCompute(this)) {
        this._isTrackPending = true;

        try {
          this.onInvalidate();

          if (this._isTrackPending && isSpyEnabled() && "development" !== "production") {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }

      endBatch();
    }
  };

  Reaction.prototype.track = function (fn) {
    if (this.isDisposed) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (notify && "development" !== "production") {
      startTime = Date.now();
      spyReportStart({
        name: this.name,
        type: "reaction"
      });
    }

    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;

    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);

    if (notify && "development" !== "production") {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;

    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";

    if (globalState.suppressReactionErrors) {
      console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
    } else {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    }

    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;

      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };

  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();

exports.Reaction = Reaction;

function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function (f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) remainingReactions[i].runReaction();
  }

  globalState.isRunningReactions = false;
}

var isReaction = createInstanceofPredicate("Reaction", Reaction);

function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function (f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return "development" !== "production" && !!globalState.spyListeners.length;
}

function spyReport(event) {
  if ("development" === "production") return; // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) listeners[i](event);
}

function spyReportStart(event) {
  if ("development" === "production") return;

  var change = __assign(__assign({}, event), {
    spyReportStart: true
  });

  spyReport(change);
}

var END_EVENT = {
  spyReportEnd: true
};

function spyReportEnd(change) {
  if ("development" === "production") return;
  if (change) spyReport(__assign(__assign({}, change), {
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}

function spy(listener) {
  if ("development" === "production") {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function () {};
  } else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

function dontReassignFields() {
  fail("development" !== "production" && "@action fields are not reassignable");
}

function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if ("development" !== "production" && descriptor.get !== undefined) {
        return fail("@action cannot be used with getters");
      } // babel / typescript
      // @action method() { }


      if (descriptor.value) {
        // typescript
        return {
          value: createAction(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)

        };
      } // babel only: @action method = () => {}


      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function () {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction(name, initializer_1.call(this));
        }
      };
    } // bound instance methods


    return actionFieldDecorator(name).apply(this, arguments);
  };
}

function actionFieldDecorator(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function () {
        return undefined;
      },
      set: function (value) {
        addHiddenProp(this, prop, action(name, value));
      }
    });
  };
}

function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction(target, propertyName, descriptor.value);
    return null;
  }

  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function () {
        defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  } // field decorator Typescript @action.bound method = () => {}


  return {
    enumerable: false,
    configurable: true,
    set: function (v) {
      defineBoundAction(this, propertyName, v);
    },
    get: function () {
      return undefined;
    }
  };
}

var action = function action(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1); // action("name", fn() {})

  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2); // @action("name") fn() {}

  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1); // @action fn() {}

  if (arg4 === true) {
    // apply to instance immediately
    addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
  } else {
    return namedActionDecorator(arg2).apply(null, arguments);
  }
};

exports.action = action;
action.bound = boundActionDecorator;

function runInAction(arg1, arg2) {
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;

  if ("development" !== "production") {
    invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
    if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
  }

  return executeAction(actionName, fn, this, undefined);
}

function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}

function defineBoundAction(target, propertyName, fn) {
  addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */


function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if ("development" !== "production") {
    invariant(typeof view === "function", "Autorun expects a function as first argument");
    invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
  }

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled_1 = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction.isDisposed) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule();
  return reaction.getDisposer();
}

var run = function (f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if ("development" !== "production") {
    invariant(typeof expression === "function", "First argument to reaction should be a function");
    invariant(typeof opts === "object", "Third argument of reactions should be an object");
  }

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?

    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }

  r.schedule();
  return r.getDisposer();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}

function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = typeof arg3 === "function" ? arg3 : arg2;
  var listenersKey = hook + "Listeners";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  var orig = atom[hook];
  if (typeof orig !== "function") return fail("development" !== "production" && "Not an atom that can be (un)observed");
  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners.delete(cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

function configure(options) {
  var enforceActions = options.enforceActions,
      computedRequiresReaction = options.computedRequiresReaction,
      computedConfigurable = options.computedConfigurable,
      disableErrorBoundaries = options.disableErrorBoundaries,
      reactionScheduler = options.reactionScheduler,
      reactionRequiresObservable = options.reactionRequiresObservable,
      observableRequiresReaction = options.observableRequiresReaction;

  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = void 0;

    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;

      case false:
      case "never":
        ea = false;
        break;

      case "strict":
      case "always":
        ea = "strict";
        break;

      default:
        fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }

    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }

  if (computedRequiresReaction !== undefined) {
    globalState.computedRequiresReaction = !!computedRequiresReaction;
  }

  if (reactionRequiresObservable !== undefined) {
    globalState.reactionRequiresObservable = !!reactionRequiresObservable;
  }

  if (observableRequiresReaction !== undefined) {
    globalState.observableRequiresReaction = !!observableRequiresReaction;
    globalState.allowStateReads = !globalState.observableRequiresReaction;
  }

  if (computedConfigurable !== undefined) {
    globalState.computedConfigurable = !!computedConfigurable;
  }

  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
    globalState.disableErrorBoundaries = !!disableErrorBoundaries;
  }

  if (reactionScheduler) {
    setReactionScheduler(reactionScheduler);
  }
}

function decorate(thing, decorators) {
  "development" !== "production" && invariant(isPlainObject(decorators), "Decorators should be a key value map");
  var target = typeof thing === "function" ? thing.prototype : thing;

  var _loop_1 = function (prop) {
    var propertyDecorators = decorators[prop];

    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    }

    "development" !== "production" && invariant(propertyDecorators.every(function (decorator) {
      return typeof decorator === "function";
    }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };

  for (var prop in decorators) {
    _loop_1(prop);
  }

  return thing;
}

function extendObservable(target, properties, decorators, options) {
  if ("development" !== "production") {
    invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
    invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
    invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
  }

  options = asCreateObservableOptions(options);
  var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
  initializeInstance(target); // Fixes #1740

  asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props

  if (properties) extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
  return target;
}

function getDefaultDecoratorFromObjectOptions(options) {
  return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}

function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
  var e_1, _a, e_2, _b;

  if ("development" !== "production") {
    invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");

    if (decorators) {
      var keys = getPlainObjectKeys(decorators);

      try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;
          if (!(key in properties)) fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
  }

  startBatch();

  try {
    var keys = getPlainObjectKeys(properties);

    try {
      for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
        var key = keys_2_1.value;
        var descriptor = Object.getOwnPropertyDescriptor(properties, key);

        if ("development" !== "production") {
          if (!isPlainObject(properties)) fail("'extendObservabe' only accepts plain objects as second argument");
          if (isComputed(descriptor.value)) fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
        }

        var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
        if ("development" !== "production" && typeof decorator !== "function") fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
        var resultDescriptor = decorator(target, key, descriptor, true);
        if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
        ) Object.defineProperty(target, key, resultDescriptor);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
  } finally {
    endBatch();
  }
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

var generatorId = 0;

function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}

FlowCancellationError.prototype = Object.create(Error.prototype);

function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}

function flow(generator) {
  if (arguments.length !== 1) fail(!!"development" && "Flow expects 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var res = gen.return(undefined); // eat anything that promise would do, it's cancelled!

        var yieldedPromise = Promise.resolve(res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };
}

function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail("development" !== "production" && "InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail("development" !== "production" && "Expected observable map, object or array as first array");
  }

  if (target.dehancer !== undefined) return fail("development" !== "production" && "An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}

function isComputed(value) {
  if (arguments.length > 1) return fail("development" !== "production" && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isComputed(value);
}

function isComputedProp(value, propName) {
  if (typeof propName !== "string") return fail("development" !== "production" && "isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if ("development" !== "production" && (isObservableMap(value) || isObservableArray(value))) return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      return value[$mobx].values.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (arguments.length !== 1) fail("development" !== "production" && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}

function isObservableProp(value, propName) {
  if (typeof propName !== "string") return fail("development" !== "production" && "expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].getKeys();
  }

  if (isObservableMap(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  return fail("development" !== "production" && "'keys()' can only be used on observable objects, arrays, sets and maps");
}

function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  return fail("development" !== "production" && "'values()' can only be used on observable objects, arrays, sets and maps");
}

function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  return fail("development" !== "production" && "'entries()' can only be used on observable objects, arrays and maps");
}

function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var values_1 = key;

    try {
      for (var key_1 in values_1) set(obj, key_1, values_1[key_1]);
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj[$mobx];
    var existingObservable = adm.values.get(key);

    if (existingObservable) {
      adm.write(key, value);
    } else {
      adm.addObservableProp(key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else {
    return fail("development" !== "production" && "'set()' can only be used on observable objects, arrays and maps");
  }
}

function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].remove(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableSet(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail("development" !== "production" && "'remove()' can only be used on observable objects, arrays and maps");
  }
}

function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration(obj);
    return adm.has(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail("development" !== "production" && "'has()' can only be used on observable objects, arrays and maps");
  }
}

function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  } else {
    return fail("development" !== "production" && "'get()' can only be used on observable objects, arrays and maps");
  }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};

function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}

function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable(source)) return source;
  if (typeof source !== "object") return source; // Directly return null if source is null

  if (source === null) return null; // Directly return the Date object itself if contained in the observable

  if (source instanceof Date) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen); // make sure we track the keys of the object

  if (isObservable(source)) keys(source);
  var detectCycles = options.detectCycles === true;

  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;

    for (var i = 0, l = toAdd.length; i < l; i++) res_1[i] = toAdd[i];

    return res_1;
  }

  if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Set(), options);
      source.forEach(function (value) {
        res_2.add(toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, [], options);
      source.forEach(function (value) {
        res_3.push(toJSHelper(value, options, __alreadySeen));
      });
      return res_3;
    }
  }

  if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_4 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_4.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_4;
    } else {
      var res_5 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_5[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_5;
    }
  } // Fallback to the situation that source is an ObservableObject or a plain object


  var res = cache(__alreadySeen, source, {}, options);
  getPlainObjectKeys(source).forEach(function (key) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  });
  return res;
}

function toJS(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = {
    detectCycles: options
  };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;

  var __alreadySeen;

  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}

function trace() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return fail("development" !== "production" && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }

  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect);
  var disposer = autorun(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ("development" !== "production" && opts && opts.onError) return fail("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, __assign(__assign({}, opts), {
      onError: reject
    }));

    cancel = function () {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
}

function isPropertyKey(val) {
  return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function (target, name) {
    if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol) return true;
    var adm = getAdm(target); // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
    // TODO: check performance stats!
    // if (adm.values.get(name as string)) return true

    if (isPropertyKey(name)) return adm.has(name);
    return name in target;
  },
  get: function (target, name) {
    if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol) return target[name];
    var adm = getAdm(target);
    var observable = adm.values.get(name);

    if (observable instanceof Atom) {
      var result = observable.get();

      if (result === undefined) {
        // This fixes #1796, because deleting a prop that has an
        // undefined value won't retrigger a observer (no visible effect),
        // the autorun wouldn't subscribe to future key changes (see also next comment)
        adm.has(name);
      }

      return result;
    } // make sure we start listening to future keys
    // note that we only do this here for optimization


    if (isPropertyKey(name)) adm.has(name);
    return target[name];
  },
  set: function (target, name, value) {
    if (!isPropertyKey(name)) return false;
    set(target, name, value);
    return true;
  },
  deleteProperty: function (target, name) {
    if (!isPropertyKey(name)) return false;
    var adm = getAdm(target);
    adm.remove(name);
    return true;
  },
  ownKeys: function (target) {
    var adm = getAdm(target);
    adm.keysAtom.reportObserved();
    return Reflect.ownKeys(target);
  },
  preventExtensions: function (target) {
    fail("Dynamic observable objects cannot be frozen");
    return false;
  }
};

function createDynamicObservableObject(base) {
  var proxy = new Proxy(base, objectProxyTraps);
  base[$mobx].proxy = proxy;
  return proxy;
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}

function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = __spread(interceptable.interceptors || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}

function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function (target, name) {
    if (name === $mobx) return target[$mobx];
    if (name === "length") return target[$mobx].getArrayLength();

    if (typeof name === "number") {
      return arrayExtensions.get.call(target, name);
    }

    if (typeof name === "string" && !isNaN(name)) {
      return arrayExtensions.get.call(target, parseInt(name));
    }

    if (arrayExtensions.hasOwnProperty(name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function (target, name, value) {
    if (name === "length") {
      target[$mobx].setArrayLength(value);
    }

    if (typeof name === "number") {
      arrayExtensions.set.call(target, name, value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      arrayExtensions.set.call(target, parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function (target) {
    fail("Observable arrays cannot be frozen");
    return false;
  }
};

function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray@" + getNextId();
  }

  if (owned === void 0) {
    owned = false;
  }

  var adm = new ObservableArrayAdministration(name, enhancer, owned);
  addHiddenFinalProp(adm.values, $mobx, adm);
  var proxy = new Proxy(adm.values, arrayTraps);
  adm.proxy = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
}

var ObservableArrayAdministration =
/** @class */
function () {
  function ObservableArrayAdministration(name, enhancer, owned) {
    this.owned = owned;
    this.values = [];
    this.proxy = undefined;
    this.lastKnownLength = 0;
    this.atom = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        object: this.proxy,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };

  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) newItems[i] = undefined; // No Array.fill everywhere...


      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  };

  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
    this.lastKnownLength += delta;
  };

  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });

    if ("development" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };

  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;

    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };

  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.proxy,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd();
  };

  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.proxy,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
      name: this.atom.name
    }));
    this.atom.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd();
  };

  return ObservableArrayAdministration;
}();

var arrayExtensions = {
  intercept: function (handler) {
    return this[$mobx].intercept(handler);
  },
  observe: function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    var adm = this[$mobx];
    return adm.observe(listener, fireImmediately);
  },
  clear: function () {
    return this.splice(0);
  },
  replace: function (newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray(0, adm.values.length, newItems);
  },

  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */
  toJS: function () {
    return this.slice();
  },
  toJSON: function () {
    // Used by JSON.stringify
    return this.toJS();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function (index, deleteCount) {
    var newItems = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray(index);

      case 2:
        return adm.spliceWithArray(index, deleteCount);
    }

    return adm.spliceWithArray(index, deleteCount, newItems);
  },
  spliceWithArray: function (index, deleteCount, newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray(index, deleteCount, newItems);
  },
  push: function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this[$mobx];
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  },
  pop: function () {
    return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this[$mobx];
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  },
  reverse: function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    if ("development" !== "production") {
      console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
    }

    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  },
  sort: function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if ("development" !== "production") {
      console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
    }

    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  },
  remove: function (value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues(adm.values).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  },
  get: function (index) {
    var adm = this[$mobx];

    if (adm) {
      if (index < adm.values.length) {
        adm.atom.reportObserved();
        return adm.dehanceValue(adm.values[index]);
      }

      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }

    return undefined;
  },
  set: function (index, newValue) {
    var adm = this[$mobx];
    var values = adm.values;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];

      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: adm.proxy,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  }
};
["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
  arrayExtensions[funcName] = function () {
    var adm = this[$mobx];
    adm.atom.reportObserved();
    var res = adm.dehanceValues(adm.values);
    return res[funcName].apply(res, arguments);
  };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;

var ObservableMapMarker = {}; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

var ObservableMap =
/** @class */
function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableMap@" + getNextId();
    }

    this.enhancer = enhancer;
    this.name = name;
    this[_a] = ObservableMapMarker;
    this._keysAtom = createAtom(this.name + ".keys()");
    this[Symbol.toStringTag] = "Map";

    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }

    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }

  ObservableMap.prototype._has = function (key) {
    return this._data.has(key);
  };

  ObservableMap.prototype.has = function (key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this._has(key);

    var entry = this._hasMap.get(key);

    if (!entry) {
      // todo: replace with atom (breaking change)
      var newEntry = entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);

      this._hasMap.set(key, newEntry);

      onBecomeUnobserved(newEntry, function () {
        return _this._hasMap.delete(key);
      });
    }

    return entry.get();
  };

  ObservableMap.prototype.set = function (key, value) {
    var hasKey = this._has(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }

    return this;
  };

  ObservableMap.prototype.delete = function (key) {
    var _this = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
        name: this.name,
        key: key
      }));
      transaction(function () {
        _this._keysAtom.reportChanged();

        _this._updateHasMapEntry(key, false);

        var observable = _this._data.get(key);

        observable.setNewValue(undefined);

        _this._data.delete(key);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    var entry = this._hasMap.get(key);

    if (entry) {
      entry.setNewValue(value);
    }
  };

  ObservableMap.prototype._updateValue = function (key, newValue) {
    var observable = this._data.get(key);

    newValue = observable.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }
  };

  ObservableMap.prototype._addValue = function (key, newValue) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._keysAtom);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);

      _this._data.set(key, observable);

      newValue = observable.value; // value might have been changed

      _this._updateHasMapEntry(key, true);

      _this._keysAtom.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd();
  };

  ObservableMap.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };

  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableMap.prototype.keys = function () {
    this._keysAtom.reportObserved();

    return this._data.keys();
  };

  ObservableMap.prototype.values = function () {
    var self = this;
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    return makeIterable({
      next: function () {
        return nextIndex < keys.length ? {
          value: self.get(keys[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableMap.prototype.entries = function () {
    var self = this;
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    return makeIterable({
      next: function () {
        if (nextIndex < keys.length) {
          var key = keys[nextIndex++];
          return {
            value: [key, self.get(key)],
            done: false
          };
        }

        return {
          done: true
        };
      }
    });
  };

  ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
    return this.entries();
  };

  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var e_1, _b;

    try {
      for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2),
            key = _e[0],
            value = _e[1];

        callback.call(thisArg, value, key, this);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  /** Merge another object into this object, returns this. */


  ObservableMap.prototype.merge = function (other) {
    var _this = this;

    if (isObservableMap(other)) {
      other = other.toJS();
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_b) {
        var _c = __read(_b, 2),
            key = _c[0],
            value = _c[1];

        return _this.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore

        other.forEach(function (value, key) {
          return _this.set(key, value);
        });
      } else if (other !== null && other !== undefined) fail("Cannot initialize map from " + other);
    });
    return this;
  };

  ObservableMap.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        var e_2, _b;

        try {
          for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var key = _d.value;

            _this.delete(key);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      });
    });
  };

  ObservableMap.prototype.replace = function (values) {
    var _this = this;

    transaction(function () {
      // grab all the keys that are present in the new map but not present in the current map
      // and delete them from the map, then merge the new map
      // this will cause reactions only on changed values
      var newKeys = getMapLikeKeys(values);
      var oldKeys = Array.from(_this.keys());
      var missingKeys = oldKeys.filter(function (k) {
        return newKeys.indexOf(k) === -1;
      });
      missingKeys.forEach(function (k) {
        return _this.delete(k);
      });

      _this.merge(values);
    });
    return this;
  };

  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function () {
      this._keysAtom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */

  ObservableMap.prototype.toPOJO = function () {
    var e_3, _b;

    var res = {};

    try {
      for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2),
            key = _e[0],
            value = _e[1]; // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863


        res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */


  ObservableMap.prototype.toJS = function () {
    return new Map(this);
  };

  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };

  ObservableMap.prototype.toString = function () {
    var _this = this;

    return this.name + "[{ " + Array.from(this.keys()).map(function (key) {
      return stringifyKey(key) + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableMap.prototype.observe = function (listener, fireImmediately) {
    "development" !== "production" && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  return ObservableMap;
}();
/* 'var' fixes small-build issue */


exports.ObservableMap = ObservableMap;
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
exports.isObservableMap = isObservableMap;

var _a$1;

var ObservableSetMarker = {};

var ObservableSet =
/** @class */
function () {
  function ObservableSet(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableSet@" + getNextId();
    }

    this.name = name;
    this[_a$1] = ObservableSetMarker;
    this._data = new Set();
    this._atom = createAtom(this.name);
    this[Symbol.toStringTag] = "Set";

    if (typeof Set !== "function") {
      throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
    }

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  ObservableSet.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableSet.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        var e_1, _b;

        try {
          for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var value = _d.value;

            _this.delete(value);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      });
    });
  };

  ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
    var e_2, _b;

    try {
      for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
        var value = _d.value;
        callbackFn.call(thisArg, value, value, this);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
  };

  Object.defineProperty(ObservableSet.prototype, "size", {
    get: function () {
      this._atom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });

  ObservableSet.prototype.add = function (value) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._atom);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "add",
        object: this,
        newValue: value
      });
      if (!change) return this; // TODO: ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this._data.add(_this.enhancer(value, undefined));

        _this._atom.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "add",
        object: this,
        newValue: value
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }

    return this;
  };

  ObservableSet.prototype.delete = function (value) {
    var _this = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
        name: this.name
      }));
      transaction(function () {
        _this._atom.reportChanged();

        _this._data.delete(value);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableSet.prototype.has = function (value) {
    this._atom.reportObserved();

    return this._data.has(this.dehanceValue(value));
  };

  ObservableSet.prototype.entries = function () {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function () {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableSet.prototype.keys = function () {
    return this.values();
  };

  ObservableSet.prototype.values = function () {
    this._atom.reportObserved();

    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this._data.values());
    return makeIterable({
      next: function () {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableSet.prototype.replace = function (other) {
    var _this = this;

    if (isObservableSet(other)) {
      other = other.toJS();
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this.clear();

        other.forEach(function (value) {
          return _this.add(value);
        });
      } else if (isES6Set(other)) {
        _this.clear();

        other.forEach(function (value) {
          return _this.add(value);
        });
      } else if (other !== null && other !== undefined) {
        fail("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  ObservableSet.prototype.observe = function (listener, fireImmediately) {
    // TODO 'fireImmediately' can be true?
    "development" !== "production" && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  ObservableSet.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableSet.prototype.toJS = function () {
    return new Set(this);
  };

  ObservableSet.prototype.toString = function () {
    return this.name + "[ " + Array.from(this).join(", ") + " ]";
  };

  ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
    return this.values();
  };

  return ObservableSet;
}();

exports.ObservableSet = ObservableSet;
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
exports.isObservableSet = isObservableSet;

var ObservableObjectAdministration =
/** @class */
function () {
  function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
    if (values === void 0) {
      values = new Map();
    }

    this.target = target;
    this.values = values;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.keysAtom = new Atom(name + ".keys");
  }

  ObservableObjectAdministration.prototype.read = function (key) {
    return this.values.get(key).get();
  };

  ObservableObjectAdministration.prototype.write = function (key, newValue) {
    var instance = this.target;
    var observable = this.values.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "update",
        object: this.proxy || instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var change = notify || notifySpy ? {
        type: "update",
        object: this.proxy || instance,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }
  };

  ObservableObjectAdministration.prototype.has = function (key) {
    var map = this.pendingKeys || (this.pendingKeys = new Map());
    var entry = map.get(key);
    if (entry) return entry.get();else {
      var exists = !!this.values.get(key); // Possible optimization: Don't have a separate map for non existing keys,
      // but store them in the values map instead, using a special symbol to denote "not existing"

      entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
      map.set(key, entry);
      return entry.get(); // read to subscribe
    }
  };

  ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
    if (enhancer === void 0) {
      enhancer = this.defaultEnhancer;
    }

    var target = this.target;
    assertPropertyConfigurable(target, propName);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy || target,
        name: propName,
        type: "add",
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
    this.values.set(propName, observable);
    newValue = observable.value; // observableValue might have changed it

    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
    this.notifyPropertyAddition(propName, newValue);
  };

  ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
  propName, options) {
    var target = this.target;
    options.name = options.name || this.name + "." + stringifyKey(propName);
    this.values.set(propName, new ComputedValue(options));
    if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName)) Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
  };

  ObservableObjectAdministration.prototype.remove = function (key) {
    if (!this.values.has(key)) return;
    var target = this.target;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy || target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var oldObservable = this.values.get(key);
      var oldValue = oldObservable && oldObservable.get();
      oldObservable && oldObservable.set(undefined); // notify key and keyset listeners

      this.keysAtom.reportChanged();
      this.values.delete(key);

      if (this.pendingKeys) {
        var entry = this.pendingKeys.get(key);
        if (entry) entry.set(false);
      } // delete the prop


      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: this.proxy || target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
        name: this.name,
        key: key
      }));
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    } finally {
      endBatch();
    }
  };

  ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
    "development" !== "production" && invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
    var notify = hasListeners(this);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy ? {
      type: "add",
      object: this.proxy || this.target,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy && "development" !== "production") spyReportStart(__assign(__assign({}, change), {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners(this, change);
    if (notifySpy && "development" !== "production") spyReportEnd();

    if (this.pendingKeys) {
      var entry = this.pendingKeys.get(key);
      if (entry) entry.set(true);
    }

    this.keysAtom.reportChanged();
  };

  ObservableObjectAdministration.prototype.getKeys = function () {
    var e_1, _a;

    this.keysAtom.reportObserved(); // return Reflect.ownKeys(this.values) as any

    var res = [];

    try {
      for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2),
            key = _d[0],
            value = _d[1];

        if (value instanceof ObservableValue) res.push(key);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return res;
  };

  return ObservableObjectAdministration;
}();

function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  if (Object.prototype.hasOwnProperty.call(target, $mobx)) return target[$mobx];
  "development" !== "production" && invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
  addHiddenProp(target, $mobx, adm);
  return adm;
}

var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);

function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function () {
      return this[$mobx].read(propName);
    },
    set: function (v) {
      this[$mobx].write(propName, v);
    }
  });
}

function getAdministrationForComputedPropOwner(owner) {
  var adm = owner[$mobx];

  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance(owner);
    return owner[$mobx];
  }

  return adm;
}

function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: globalState.computedConfigurable,
    enumerable: false,
    get: function () {
      return getAdministrationForComputedPropOwner(this).read(propName);
    },
    set: function (v) {
      getAdministrationForComputedPropOwner(this).write(propName, v);
    }
  });
}

var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) fail("development" !== "production" && "It is not possible to get index atoms from arrays");
      return thing[$mobx].atom;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return anyThing._keysAtom;

      var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);

      if (!observable) fail("development" !== "production" && "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
      return observable;
    } // Initializers run lazily when transpiling to babel, so make sure they are run...


    initializeInstance(thing);
    if (property && !thing[$mobx]) thing[property]; // See #1072

    if (isObservableObject(thing)) {
      if (!property) return fail("development" !== "production" && "please specify a property");
      var observable = thing[$mobx].values.get(property);
      if (!observable) fail("development" !== "production" && "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
      return observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  return fail("development" !== "production" && "Cannot obtain atom from " + thing);
}

function getAdministration(thing, property) {
  if (!thing) fail("Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing; // Initializers run lazily when transpiling to babel, so make sure they are run...

  initializeInstance(thing);
  if (thing[$mobx]) return thing[$mobx];
  fail("development" !== "production" && "Cannot obtain administration from " + thing);
}

function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name;
}

var toString = Object.prototype.toString;

function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.


function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key = void 0;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function has$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}
/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
  throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}

try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  "development";
} catch (e) {
  var g = getGlobal();
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
}

(function () {
  function testCodeMinification() {}

  if (testCodeMinification.name !== "testCodeMinification" && "development" !== "production" && typeof process !== 'undefined' && undefined !== "true") {
    // trick so it doesn't get replaced
    var varName = ["process", "env", "NODE_ENV"].join(".");
    console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
  }
})();

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}
},{"process":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/process/browser.js"}],"node_modules/ratta-console/src/handlers/InputProxy.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
/**
 * 要保证一个session上 只有一个handler
 * inputProxy 会存取当前app
 */
var InputProxy = /** @class */ (function () {
    function InputProxy() {
        var _this = this;
        this.stdin = mobx_1.observable.box('');
        this.stdout = mobx_1.observable.box('');
        this.stderr = mobx_1.observable.box('');
        this.handlers = [];
        mobx_1.autorun(function () {
            var str = _this.stdout.get();
            _this.currentHandler && _this.currentHandler.handleStdoutChange(str, _this.lastStdout);
            _this.lastStdout = str;
        });
        mobx_1.autorun(function () {
            var str = _this.stdin.get();
            _this.currentHandler && _this.currentHandler.handleStdinChange(str, _this.lastStdin);
            _this.lastStdin = str;
        });
        mobx_1.autorun(function () {
            var str = _this.stderr.get();
            _this.currentHandler && _this.currentHandler.handleStdoutChange(str, _this.lastStderr);
            _this.lastStderr = str;
        });
    }
    InputProxy.prototype.setHandler = function (handler) {
        this.handlers.push(handler);
        this.currentHandler = handler;
        this.currentHandler.init();
    };
    InputProxy.prototype.popHandler = function () {
        if (this.handlers.length > 1) {
            this.currentHandler.destroy();
            this.handlers.pop();
            this.currentHandler = this.handlers[this.handlers.length - 1];
            this.currentHandler.init();
        }
        else {
            throw new Error('no handler can be popped');
        }
    };
    InputProxy.prototype.replaceHandler = function (handler) {
        this.currentHandler.destroy();
        this.currentHandler = handler;
        this.currentHandler.init();
    };
    InputProxy.prototype.handleInput = function (e) {
        this.currentHandler.handleInput(e);
    };
    InputProxy.prototype.handleKeyDown = function (e) {
        this.currentHandler.handleKeyDown(e);
    };
    InputProxy.prototype.handleKeyUp = function (e) {
        this.currentHandler.handleKeyUp(e);
    };
    InputProxy.prototype.handleKeyPress = function (e) {
        this.currentHandler.handleKeyPress(e);
    };
    InputProxy.prototype.handleMouseDown = function (e) {
        this.currentHandler.handleMouseDown(e);
    };
    InputProxy.prototype.handleMouseUp = function (e) {
        this.currentHandler.handleMouseUp(e);
    };
    InputProxy.prototype.handleClick = function (e) {
        this.currentHandler.handleClick(e);
    };
    return InputProxy;
}());
exports.InputProxy = InputProxy;

},{"mobx":"node_modules/mobx/lib/mobx.module.js"}],"node_modules/ratta-console/src/handlers/CommonInputHandler.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var REPLACE_STDOUT_TYPE;
(function (REPLACE_STDOUT_TYPE) {
    REPLACE_STDOUT_TYPE[REPLACE_STDOUT_TYPE["WORD"] = 0] = "WORD";
    REPLACE_STDOUT_TYPE[REPLACE_STDOUT_TYPE["LINE"] = 1] = "LINE";
    REPLACE_STDOUT_TYPE[REPLACE_STDOUT_TYPE["PAGE"] = 2] = "PAGE";
})(REPLACE_STDOUT_TYPE || (REPLACE_STDOUT_TYPE = {}));
/**
 * 一个session只有一个stdin
 */
var CommonInputHandler = /** @class */ (function () {
    function CommonInputHandler(store, inputEl, inputProxy) {
        this.store = store;
        this.inputEl = inputEl;
        this.inputProxy = inputProxy;
    }
    CommonInputHandler.prototype.init = function () { };
    CommonInputHandler.prototype.destroy = function () { };
    CommonInputHandler.prototype.handleKeyDown = function (e) { };
    CommonInputHandler.prototype.handleKeyUp = function (e) { };
    CommonInputHandler.prototype.handleInput = function (e) { };
    CommonInputHandler.prototype.handleKeyPress = function (e) { };
    CommonInputHandler.prototype.handleClick = function (e) { };
    CommonInputHandler.prototype.handleMouseUp = function (e) { };
    CommonInputHandler.prototype.handleMouseDown = function (e) { };
    CommonInputHandler.prototype.handleStdoutChange = function (value, oldValue) { };
    CommonInputHandler.prototype.handleStdinChange = function (value, oldValue) { };
    CommonInputHandler.prototype.handleStderrChange = function (value, oldValue) { };
    CommonInputHandler.prototype.print = function (content) {
        // this.inputProxy.stdout = content
        this.inputEl.value += content;
        this.inputEl.scrollTo({
            top: this.inputEl.scrollHeight
        });
    };
    CommonInputHandler.prototype.replace = function (content, type, length) {
        if (type === void 0) { type = 0; }
        if (length === void 0) { length = 1; }
        switch (type) {
            case REPLACE_STDOUT_TYPE.WORD:
                this.inputEl.value = this.inputEl.value.slice(0, this.inputEl.value.length - length) + content;
                break;
            case REPLACE_STDOUT_TYPE.LINE:
                break;
            case REPLACE_STDOUT_TYPE.PAGE:
                break;
            default:
                break;
        }
    };
    return CommonInputHandler;
}());
exports.CommonInputHandler = CommonInputHandler;

},{}],"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/CommandHandler.ts":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CommonInputHandler_1 = require("../../CommonInputHandler");
/**
 * handler可以从inputProxy中获取stdin和stdout
 * 从store中获取数据
 */
var CommandHandler = /** @class */ (function (_super) {
    __extends(CommandHandler, _super);
    function CommandHandler(store, inputEl, inputProxy, commandHandler) {
        var _this = _super.call(this, store, inputEl, inputProxy) || this;
        _this.stdinSeek = 0;
        _this.stdinLength = 0;
        _this.historySeek = 0;
        _this.history = [];
        _this.commandHandler = function () { };
        _this.commandHandler = commandHandler;
        return _this;
    }
    Object.defineProperty(CommandHandler.prototype, "stdin", {
        get: function () {
            if (this.stdinLength < 1) {
                return '';
            }
            return this.inputEl.value.substr(-this.stdinLength);
        },
        enumerable: true,
        configurable: true
    });
    CommandHandler.prototype.changeCommandInHistory = function () {
        var command = this.history[this.history.length - 1 - this.historySeek];
        this.inputEl.value = this.inputEl.value.slice(0, this.inputEl.value.length - this.stdinLength) + command;
        this.stdinLength = command.length;
        this.stdinSeek = 0;
    };
    CommandHandler.prototype.dispatchKeyEvent = function (key, type) {
        if (type === void 0) { type = 'keydown'; }
        var event = new KeyboardEvent(type, {
            key: key,
            // code: key,
            composed: true,
            cancelable: true,
            bubbles: true,
        });
        // @ts-ignore
        event['keyCode'] = 37;
        this.inputEl.dispatchEvent(event);
    };
    CommandHandler.prototype.handleKeyDown = function (e) {
        _super.prototype.handleKeyDown.call(this, e);
        if (e.key.length > 1) {
            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    this.commandHandler(this.stdin);
                    this.stdinLength = 0;
                    this.stdinSeek = 0;
                    this.historySeek = -1;
                    break;
                case 'Tab':
                    e.preventDefault();
                    // Command.run(this)('ls').then(r => {
                    //     let tips = []
                    //     r.msg.split(' ').forEach(subVal => {
                    //         if(subVal.startsWith(this.stdin)) {
                    //             tips.push(subVal)
                    //         }
                    //     })
                    //     tips = tips.sort((a,b) => b.length - a.length)
                    //     this.dispatchKeyEvent('Enter')
                    // })
                    // todo 智能提示
                    break;
                case "Down": // IE/Edge specific value
                case "ArrowDown":
                    e.preventDefault();
                    if (this.historySeek > 0) {
                        --this.historySeek;
                        this.changeCommandInHistory();
                    }
                    break;
                case "Up": // IE/Edge specific value
                case "ArrowUp":
                    e.preventDefault();
                    if (this.historySeek < this.history.length - 1) {
                        ++this.historySeek;
                        this.changeCommandInHistory();
                    }
                    break;
                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    if (this.stdinSeek < this.stdinLength) {
                        this.stdinSeek += 1;
                    }
                    else {
                        e.preventDefault();
                    }
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    if (this.stdinSeek > 0) {
                        this.stdinSeek -= 1;
                    }
                    break;
                case "Backspace":
                    if (this.stdinSeek >= this.stdinLength || e.ctrlKey) {
                        e.preventDefault();
                    }
                    else {
                        this.stdinLength--;
                    }
                    break;
                case "Home":
                    // 手动触发事件不会生成与该事件关联的默认操作，尽量不用hack方法实现
                    e.preventDefault();
                    break;
                case "End":
                    e.preventDefault();
                    break;
                default:
                    e.preventDefault();
                    break;
            }
        }
        else {
            this.stdinLength++;
        }
    };
    CommandHandler.prototype.handleMouseDown = function (e) {
        _super.prototype.handleMouseDown.call(this, e);
        this.inputEl.focus();
        e.preventDefault();
    };
    return CommandHandler;
}(CommonInputHandler_1.CommonInputHandler));
exports.default = CommandHandler;

},{"../../CommonInputHandler":"node_modules/ratta-console/src/handlers/CommonInputHandler.ts"}],"node_modules/ratta-console/src/handlers/SystemCommandHandler/StepHandler/index.ts":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommandHandler_1 = __importDefault(require("../CommandHandler/CommandHandler"));
/**
 * handler可以从inputProxy中获取stdin和stdout
 * 从store中获取数据
 */
var StepHandler = /** @class */ (function (_super) {
    __extends(StepHandler, _super);
    function StepHandler(store, inputEl, inputProxy, steps, nextHandler) {
        if (nextHandler === void 0) { nextHandler = null; }
        var _this = _super.call(this, store, inputEl, inputProxy) || this;
        _this.steps = steps(store, _this);
        _this.commandHandler = _this.nextStep;
        _this.nextHandler = nextHandler;
        return _this;
    }
    StepHandler.prototype.init = function () {
        this.lastStep = this.steps.next();
        this.printTip(this.lastStep.value.tip);
    };
    StepHandler.prototype.printTip = function (tip) {
        if (typeof this.lastStep.value.tip === "string") {
            this.print(this.lastStep.value.tip);
        }
        else {
            this.print(this.lastStep.value.tip());
        }
    };
    StepHandler.prototype.nextStep = function (command) {
        var _this = this;
        if (!this.lastStep.done) {
            this.lastStep.value.answer(command.trim()).then(function (r) {
                _this.lastStep = _this.steps.next(command.trim());
                if (_this.lastStep.done) {
                    if (_this.nextHandler !== null) {
                        _this.inputProxy.replaceHandler(_this.nextHandler);
                    }
                    else {
                        _this.inputProxy.popHandler();
                    }
                }
                else {
                    if (_this.lastStep.value.tip instanceof Function) {
                        _this.printTip(_this.lastStep.value.tip());
                    }
                    else {
                        _this.printTip(_this.lastStep.value.tip);
                    }
                }
            });
        }
    };
    return StepHandler;
}(CommandHandler_1.default));
exports.default = StepHandler;

},{"../CommandHandler/CommandHandler":"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/CommandHandler.ts"}],"node_modules/ratta/src/core/model/File.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RT_FILE_TYPE;
(function (RT_FILE_TYPE) {
    RT_FILE_TYPE[RT_FILE_TYPE["FILE"] = 0] = "FILE";
    RT_FILE_TYPE[RT_FILE_TYPE["FOLDER"] = 1] = "FOLDER";
    RT_FILE_TYPE[RT_FILE_TYPE["LINK"] = 2] = "LINK";
    RT_FILE_TYPE[RT_FILE_TYPE["RUNNABLE"] = 3] = "RUNNABLE";
})(RT_FILE_TYPE = exports.RT_FILE_TYPE || (exports.RT_FILE_TYPE = {}));
var RtFilePermission = /** @class */ (function () {
    function RtFilePermission(permission) {
        if (permission.accountId !== undefined) {
            this.permission = permission.permission;
            this.accountId = permission.accountId;
        }
        else if (permission.groupId !== null) {
            this.permission = permission.permission;
            this.groupId = permission.groupId;
        }
        else {
            throw new Error('accountId or permissionId must exist');
        }
    }
    return RtFilePermission;
}());
var defaultRtFilePermission = function () {
    return new RtFilePermission({
        permission: 6,
    });
};
// todo 除非单独设置了权限，否则直接用默认权限  如果新增了账户，那么直接使用默认权限
var RtFile = /** @class */ (function () {
    function RtFile(params, additionalParams) {
        if (params instanceof RtFile) {
            return new RtFile(Object.assign({
                absolutePath: params.absolutePath,
                type: params.type,
                permission: params.permission,
                content: params.content,
                linkPath: params.linkPath,
                permissionAccounts: params.permissionAccounts,
            }, additionalParams));
        }
        if (params.absolutePath === undefined) {
            throw new Error('absolutePath must be set');
        }
        this.absolutePath = params.absolutePath;
        if (params.absolutePath === '/') {
            this.level = 1;
        }
        else {
            this.level = params.absolutePath.split('/').length;
        }
        if (this.level > RtFile.MAX_FILE_LEVEL) {
            throw new Error("path deep cannot be above " + RtFile.MAX_FILE_LEVEL);
        }
        this.content = params.content || '';
        this.type = params.type || RT_FILE_TYPE.FILE;
        this.permission = [] || params.permission;
        this.createTime = new Date();
        this.updateTime = new Date();
        this.isDeleted = false;
        this.shareLink = params.shareLink;
        this.linkPath = params.linkPath;
        this.owner = params.owner;
        this.group = params.group;
    }
    RtFile.MAX_FILE_LEVEL = 100;
    RtFile.READONLY_ATTR = [
        'level', 'type', 'createTime', 'createBy', 'updateTime', 'updateBy', 'permissionAccounts'
    ];
    return RtFile;
}());
exports.RtFile = RtFile;

},{}],"node_modules/ratta/src/core/annotation/index.ts":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var instances = new Map();
/**
 * 构造一个实例
 * @param constructor
 */
function instance(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            var instance = instances.get(constructor);
            if (instance !== undefined) {
                return instance;
            }
            else {
                instance = new constructor(args);
                instances.set(constructor, instance);
            }
            return instances.get(constructor);
        }
        return class_1;
    }(constructor));
}
exports.instance = instance;
/**
 * 混入
 * @param constructor
 */
function mixin(obj) {
    return function (target) {
        return Object.assign(target, obj);
    };
}
exports.mixin = mixin;
function functionWrap(obj) {
    return function (target) {
        return Object.assign(target, obj);
    };
}
exports.functionWrap = functionWrap;

},{}],"node_modules/dexie/dist/dexie.es.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version {version}, {date}
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
var keys = Object.keys;
var isArray = Array.isArray;

var _global = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;

function extend(obj, extension) {
  if (_typeof(extension) !== 'object') return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}

var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;

function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}

function props(proto, extension) {
  if (typeof extension === 'function') extension = extension(getProto(proto));
  keys(extension).forEach(function (key) {
    setProp(proto, key, extension[key]);
  });
}

var defineProperty = Object.defineProperty;

function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}

function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

function getPropertyDescriptor(obj, prop) {
  var pd = getOwnPropertyDescriptor(obj, prop),
      proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}

var _slice = [].slice;

function slice(args, start, end) {
  return _slice.call(args, start, end);
}

function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}

function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}

function asap(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}
/** Generate an object (hash map) based on given array.
 * @param extractor Function taking an array item and its index and returning an array of 2 items ([key, value]) to
 *        instert on the resulting object for each item in the array. If this function returns a falsy value, the
 *        current item wont affect the resulting object.
 */


function arrayToObject(array, extractor) {
  return array.reduce(function (result, item, i) {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}

function trycatcher(fn, reject) {
  return function () {
    try {
      fn.apply(this, arguments);
    } catch (e) {
      reject(e);
    }
  };
}

function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}

function getByKeyPath(obj, keyPath) {
  // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
  if (hasOwn(obj, keyPath)) return obj[keyPath]; // This line is moved from last to first for optimization purpose.

  if (!keyPath) return obj;

  if (typeof keyPath !== 'string') {
    var rv = [];

    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }

    return rv;
  }

  var period = keyPath.indexOf('.');

  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }

  return undefined;
}

function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === undefined) return;
  if ('isFrozen' in Object && Object.isFrozen(obj)) return;

  if (typeof keyPath !== 'string' && 'length' in keyPath) {
    assert(typeof value !== 'string' && 'length' in value);

    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf('.');

    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === undefined) delete obj[currentKeyPath];else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === undefined) delete obj[keyPath];else obj[keyPath] = value;
    }
  }
}

function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === 'string') setByKeyPath(obj, keyPath, undefined);else if ('length' in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, undefined);
  });
}

function shallowClone(obj) {
  var rv = {};

  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }

  return rv;
}

var concat = [].concat;

function flatten(a) {
  return concat.apply([], a);
} //https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm


var intrinsicTypes = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(',').concat(flatten([8, 16, 32, 64].map(function (num) {
  return ["Int", "Uint", "Float"].map(function (t) {
    return t + num + "Array";
  });
}))).filter(function (t) {
  return _global[t];
}).map(function (t) {
  return _global[t];
});

function deepClone(any) {
  if (!any || _typeof(any) !== 'object') return any;
  var rv;

  if (isArray(any)) {
    rv = [];

    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(deepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    rv = any.constructor ? Object.create(any.constructor.prototype) : {};

    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = deepClone(any[prop]);
      }
    }
  }

  return rv;
}

function getObjectDiff(a, b, rv, prfx) {
  // Compares objects a and b and produces a diff object.
  rv = rv || {};
  prfx = prfx || '';
  keys(a).forEach(function (prop) {
    if (!hasOwn(b, prop)) rv[prfx + prop] = undefined; // Property removed
    else {
        var ap = a[prop],
            bp = b[prop];
        if (_typeof(ap) === 'object' && _typeof(bp) === 'object' && ap && bp && // Now compare constructors are same (not equal because wont work in Safari)
        '' + ap.constructor === '' + bp.constructor) // Same type of object but its properties may have changed
          getObjectDiff(ap, bp, rv, prfx + prop + ".");else if (ap !== bp) rv[prfx + prop] = b[prop]; // Primitive value changed
      }
  });
  keys(b).forEach(function (prop) {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop]; // Property added
    }
  });
  return rv;
} // If first argument is iterable or array-like, return it as an array


var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {}; // Takes one or several arguments and returns an array based on the following criteras:
// * If several arguments provided, return arguments converted to an array in a way that
//   still allows javascript engine to optimize the code.
// * If single argument is an array, return a clone of it.
// * If this-pointer equals NO_CHAR_ARRAY, don't accept strings as valid iterables as a special
//   case to the two bullets below.
// * If single argument is an iterable, convert it to an array and return the resulting array.
// * If single argument is array-like (has length of type number), convert it to an array.

function getArrayOf(arrayLike) {
  var i, a, x, it;

  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string') return [arrayLike];

    if (it = getIteratorOf(arrayLike)) {
      a = [];

      while (x = it.next(), !x.done) {
        a.push(x.value);
      }

      return a;
    }

    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;

    if (typeof i === 'number') {
      a = new Array(i);

      while (i--) {
        a[i] = arrayLike[i];
      }

      return a;
    }

    return [arrayLike];
  }

  i = arguments.length;
  a = new Array(i);

  while (i--) {
    a[i] = arguments[i];
  }

  return a;
} // By default, debug will be true only if platform is a web platform and its page is served from localhost.
// When debug = true, error's stacks will contain asyncronic long stacks.


var debug = typeof location !== 'undefined' && // By default, use debug mode if served from localhost.
/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}

var libraryFilter = function () {
  return true;
};

var NEEDS_THROW_FOR_STACK = !new Error("").stack;

function getErrorWithStack() {
  "use strict";

  if (NEEDS_THROW_FOR_STACK) try {
    // Doing something naughty in strict mode here to trigger a specific error
    // that can be explicitely ignored in debugger's exception settings.
    // If we'd just throw new Error() here, IE's debugger's exception settings
    // will just consider it as "exception thrown by javascript code" which is
    // something you wouldn't want it to ignore.
    getErrorWithStack.arguments;
    throw new Error(); // Fallback if above line don't throw.
  } catch (e) {
    return e;
  }
  return new Error();
}

function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split('\n').length;
  return stack.split('\n').slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
    return "\n" + frame;
  }).join('');
}

function deprecated(what, fn) {
  return function () {
    console.warn(what + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + prettyStack(getErrorWithStack(), 1));
    return fn.apply(this, arguments);
  };
}

var dexieErrorNames = ['Modify', 'Bulk', 'OpenFailed', 'VersionChange', 'Schema', 'Upgrade', 'InvalidTable', 'MissingAPI', 'NoSuchDatabase', 'InvalidArgument', 'SubTransaction', 'Unsupported', 'Internal', 'DatabaseClosed', 'PrematureCommit', 'ForeignAwait'];
var idbDomErrorNames = ['Unknown', 'Constraint', 'Data', 'TransactionInactive', 'ReadOnly', 'Version', 'NotFound', 'InvalidState', 'InvalidAccess', 'Abort', 'Timeout', 'QuotaExceeded', 'Syntax', 'DataClone'];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed"
}; //
// DexieError - base class of all out exceptions.
//

function DexieError(name, msg) {
  // Reason we don't use ES6 classes is because:
  // 1. It bloats transpiled code and increases size of minified code.
  // 2. It doesn't give us much in this case.
  // 3. It would require sub classes to call super(), which
  //    is not needed when deriving from Error.
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}

derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});

function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + failures.map(function (f) {
    return f.toString();
  }).filter(function (v, i, s) {
    return s.indexOf(v) === i;
  }) // Only unique error strings
  .join('\n');
} //
// ModifyError - thrown in Collection.modify()
// Specific constructor because it contains members failures and failedKeys.
//


function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
}

derive(ModifyError).from(DexieError);

function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = failures;
  this.message = getMultiErrorMessage(msg, failures);
}

derive(BulkError).from(DexieError); //
//
// Dynamically generate error names and exception classes based
// on the names in errorList.
//
//
// Map of {ErrorName -> ErrorName + "Error"}

var errnames = errorList.reduce(function (obj, name) {
  return obj[name] = name + "Error", obj;
}, {}); // Need an alias for DexieError because we're gonna create subclasses with the same name.

var BaseException = DexieError; // Map of {ErrorName -> exception constructor}

var exceptions = errorList.reduce(function (obj, name) {
  // Let the name be "DexieError" because this name may
  // be shown in call stack and when debugging. DexieError is
  // the most true name because it derives from DexieError,
  // and we cannot change Function.name programatically without
  // dynamically create a Function object, which would be considered
  // 'eval-evil'.
  var fullName = name + "Error";

  function DexieError(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;

    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === 'string') {
      this.message = msgOrInner;
      this.inner = inner || null;
    } else if (_typeof(msgOrInner) === 'object') {
      this.message = msgOrInner.name + " " + msgOrInner.message;
      this.inner = msgOrInner;
    }
  }

  derive(DexieError).from(BaseException);
  obj[name] = DexieError;
  return obj;
}, {}); // Use ECMASCRIPT standard exceptions where applicable:

exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});

function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);

  if ("stack" in domError) {
    // Derive stack from inner exception if it has a stack
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }

  return rv;
}

var fullNameExceptions = errorList.reduce(function (obj, name) {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() {}

function mirror(val) {
  return val;
}

function pureFunctionChain(f1, f2) {
  // Enables chained events that takes ONE argument and returns it to the next function in chain.
  // This pattern is used in the hook("reading") event.
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}

function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}

function hookCreatingChain(f1, f2) {
  // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
  // This pattern is used in the hook("creating") event.
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== undefined) arguments[0] = res;
    var onsuccess = this.onsuccess,
        // In case event listener has set this.onsuccess
    onerror = this.onerror; // In case event listener has set this.onerror

    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== undefined ? res2 : res;
  };
}

function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
        // In case event listener has set this.onsuccess
    onerror = this.onerror; // In case event listener has set this.onerror

    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}

function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.

    var onsuccess = this.onsuccess,
        // In case event listener has set this.onsuccess
    onerror = this.onerror; // In case event listener has set this.onerror

    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
  };
}

function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}

function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);

    if (res && typeof res.then === 'function') {
      var thiz = this,
          i = arguments.length,
          args = new Array(i);

      while (i--) {
        args[i] = arguments[i];
      }

      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }

    return f2.apply(this, arguments);
  };
}
/*
 * Copyright (c) 2014-2017 David Fahlander
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/LICENSE-2.0
 */
//
// Promise and Zone (PSD) for Dexie library
//
// I started out writing this Promise class by copying promise-light (https://github.com/taylorhakes/promise-light) by
// https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
//
// In previous versions this was fixed by not calling setTimeout when knowing that the resolve() or reject() came from another
// tick. In Dexie v1.4.0, I've rewritten the Promise class entirely. Just some fragments of promise-light is left. I use
// another strategy now that simplifies everything a lot: to always execute callbacks in a new micro-task, but have an own micro-task
// engine that is indexedDB compliant across all browsers.
// Promise class has also been optimized a lot with inspiration from bluebird - to avoid closures as much as possible.
// Also with inspiration from bluebird, asyncronic stacks in debug mode.
//
// Specific non-standard features of this Promise class:
// * Custom zone support (a.k.a. PSD) with ability to keep zones also when using native promises as well as
//   native async / await.
// * Promise.follow() method built upon the custom zone engine, that allows user to track all promises created from current stack frame
//   and below + all promises that those promises creates or awaits.
// * Detect any unhandled promise in a PSD-scope (PSD.onunhandled). 
//
// David Fahlander, https://github.com/dfahlander
//
// Just a pointer that only this module knows about.
// Used in Promise constructor to emulate a private constructor.


var INTERNAL = {}; // Async stacks (long stacks) must not grow infinitely.

var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 7;

var nativePromiseInstanceAndProto = function () {
  try {
    // Be able to patch native async functions
    return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")();
  } catch (e) {
    var P = _global.Promise;
    return P ? [P.resolve(), P.prototype, P.resolve()] : [];
  }
}();

var resolvedNativePromise = nativePromiseInstanceAndProto[0];
var nativePromiseProto = nativePromiseInstanceAndProto[1];
var resolvedGlobalPromise = nativePromiseInstanceAndProto[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var AsyncFunction = nativePromiseInstanceAndProto[3];
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
/* The default function used only for the very first promise in a promise chain.
   As soon as then promise is resolved or rejected, all next tasks will be executed in micro ticks
   emulated in this module. For indexedDB compatibility, this means that every method needs to
   execute at least one promise before doing an indexedDB operation. Dexie will always call
   db.ready().then() for every operation to make sure the indexedDB event is started in an
   indexedDB-compatible emulated micro task loop.
*/

var schedulePhysicalTick = resolvedGlobalPromise ? function () {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? // setImmediate supported. Those modern platforms also supports Function.bind().
setImmediate.bind(null, physicalTick) : _global.MutationObserver ? // MutationObserver supported
function () {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(function () {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute('i', '1');
} : // No support for setImmediate or MutationObserver. No worry, setTimeout is only called
// once time. Every tick that follows will be our emulated micro tick.
// Could have uses setTimeout.bind(null, 0, physicalTick) if it wasnt for that FF13 and below has a bug 
function () {
  setTimeout(physicalTick, 0);
}; // Configurable through Promise.scheduler.
// Don't export because it would be unsafe to let unknown
// code call it unless they do try..catch within their callback.
// This function can be retrieved through getter of Promise.scheduler though,
// but users must not do Promise.scheduler = myFuncThatThrowsException

var asap$1 = function (callback, args) {
  microtickQueue.push([callback, args]);

  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};

var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror; // Remove in next major when removing error mapping of DOMErrors and DOMExceptions

var globalPSD = {
  id: 'global',
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(function (uh) {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = []; // Callbacks to call in this or next physical tick.

var numScheduledCalls = 0; // Number of listener-calls left to do in this physical tick.

var tickFinalizers = []; // Finalizers to call when there are no more async calls scheduled within current physical tick.

function Promise(fn) {
  if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
  this._listeners = [];
  this.onuncatched = nop; // Deprecate in next major. Not needed. Better to use global error handler.
  // A library may set `promise._lib = true;` after promise is created to make resolve() or reject()
  // execute the microtask engine implicitely within the call to resolve() or reject().
  // To remain A+ compliant, a library must only set `_lib=true` if it can guarantee that the stack
  // only contains library code when calling resolve() or reject().
  // RULE OF THUMB: ONLY set _lib = true for promises explicitely resolving/rejecting directly from
  // global scope (event handler, timer etc)!

  this._lib = false; // Current async scope

  var psd = this._PSD = PSD;

  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0; // Number of previous promises (for long stacks)
  }

  if (typeof fn !== 'function') {
    if (fn !== INTERNAL) throw new TypeError('Not a function'); // Private constructor (INTERNAL, state, value).
    // Used internally by Promise.resolve() and Promise.reject().

    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value); // Map error, set stack and addPossiblyUnhandledError().

    return;
  }

  this._state = null; // null (=pending), false (=rejected) or true (=resolved)

  this._value = null; // error or result

  ++psd.ref; // Refcounting current scope

  executePromiseTask(this, fn);
} // Prepare a property descriptor to put onto Promise.prototype.then


var thenProp = {
  get: function () {
    var psd = PSD,
        microTaskId = totalEchoes;

    function then(onFulfilled, onRejected) {
      var _this = this;

      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      if (possibleAwait) decrementExpectedAwaits();
      var rv = new Promise(function (resolve, reject) {
        propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }

    then.prototype = INTERNAL; // For idempotense, see setter below.

    return then;
  },
  // Be idempotent and allow another framework (such as zone.js or another instance of a Dexie.Promise module) to replace Promise.prototype.then
  // and when that framework wants to restore the original property, we must identify that and restore the original property descriptor.
  set: function (value) {
    setProp(this, 'then', value && value.prototype === INTERNAL ? thenProp : // Restore to original property descriptor.
    {
      get: function () {
        return value; // Getter returning provided value (behaves like value is just changed)
      },
      set: thenProp.set // Keep a setter that is prepared to restore original.

    });
  }
};
props(Promise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    // A little tinier version of then() that don't have to create a resulting promise.
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected); // First argument is the Error type to catch

    var type = arguments[0],
        handler = arguments[1];
    return typeof type === 'function' ? this.then(null, function (err) {
      // Catching errors by its constructor type (similar to java / c++ / c#)
      // Sample: promise.catch(TypeError, function (e) { ... });
      return err instanceof type ? handler(err) : PromiseReject(err);
    }) : this.then(null, function (err) {
      // Catching errors by the error.name property. Makes sense for indexedDB where error type
      // is always DOMError but where e.name tells the actual error type.
      // Sample: promise.catch('ConstraintError', function (e) { ... });
      return err && err.name === type ? handler(err) : PromiseReject(err);
    });
  },
  finally: function (onFinally) {
    return this.then(function (value) {
      onFinally();
      return value;
    }, function (err) {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;

      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack; // Stack may be updated on reject.

        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    var _this = this;

    return ms < Infinity ? new Promise(function (resolve, reject) {
      var handle = setTimeout(function () {
        return reject(new exceptions.Timeout(msg));
      }, ms);

      _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag) setProp(Promise.prototype, Symbol.toStringTag, 'Promise'); // Now that Promise.prototype is defined, we have all it takes to set globalPSD.env.
// Environment globals snapshotted on leaving global zone

globalPSD.env = snapShot();

function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
} // Promise Static Properties


props(Promise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments) // Supports iterables, implicit arguments and array-like.
    .map(onPossibleParallellAsync); // Handle parallell async/awaits 

    return new Promise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach(function (a, i) {
        return Promise.resolve(a).then(function (x) {
          values[i] = x;
          if (! --remaining) resolve(values);
        }, reject);
      });
    });
  },
  resolve: function (value) {
    if (value instanceof Promise) return value;
    if (value && typeof value.then === 'function') return new Promise(function (resolve, reject) {
      value.then(resolve, reject);
    });
    var rv = new Promise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new Promise(function (resolve, reject) {
      values.map(function (value) {
        return Promise.resolve(value).then(resolve, reject);
      });
    });
  },
  PSD: {
    get: function () {
      return PSD;
    },
    set: function (value) {
      return PSD = value;
    }
  },
  //totalEchoes: {get: ()=>totalEchoes},
  //task: {get: ()=>task},
  newPSD: newScope,
  usePSD: usePSD,
  scheduler: {
    get: function () {
      return asap$1;
    },
    set: function (value) {
      asap$1 = value;
    }
  },
  rejectionMapper: {
    get: function () {
      return rejectionMapper;
    },
    set: function (value) {
      rejectionMapper = value;
    } // Map reject failures

  },
  follow: function (fn, zoneProps) {
    return new Promise(function (resolve, reject) {
      return newScope(function (resolve, reject) {
        var psd = PSD;
        psd.unhandleds = []; // For unhandled standard- or 3rd party Promises. Checked at psd.finalize()

        psd.onunhandled = reject; // Triggered directly on unhandled promises of this library.

        psd.finalize = callBoth(function () {
          var _this = this; // Unhandled standard or 3rd part promises are put in PSD.unhandleds and
          // examined upon scope completion while unhandled rejections in this Promise
          // will trigger directly through psd.onunhandled


          run_at_end_of_this_or_next_physical_tick(function () {
            _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
/**
* Take a potentially misbehaving resolver function and make sure
* onFulfilled and onRejected are only called once.
*
* Makes no guarantees about asynchrony.
*/

function executePromiseTask(promise, fn) {
  // Promise Resolution Procedure:
  // https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  try {
    fn(function (value) {
      if (promise._state !== null) return; // Already settled

      if (value === promise) throw new TypeError('A promise cannot be resolved with itself.');
      var shouldExecuteTick = promise._lib && beginMicroTickScope();

      if (value && typeof value.then === 'function') {
        executePromiseTask(promise, function (resolve, reject) {
          value instanceof Promise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }

      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise)); // If Function.bind is not supported. Exception is handled in catch below
  } catch (ex) {
    handleRejection(promise, ex);
  }
}

function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && _typeof(reason) === 'object' && !reason._promise && tryCatch(function () {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: function () {
        return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
      }
    });
  }); // Add the failure to a list of possibly uncaught errors

  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}

function propagateAllListeners(promise) {
  //debug && linkToPreviousPromise(promise);
  var listeners = promise._listeners;
  promise._listeners = [];

  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }

  var psd = promise._PSD;
  --psd.ref || psd.finalize(); // if psd.ref reaches zero, call psd.finalize();

  if (numScheduledCalls === 0) {
    // If numScheduledCalls is 0, it means that our stack is not in a callback of a scheduled call,
    // and that no deferreds where listening to this rejection or success.
    // Since there is a risk that our stack can contain application code that may
    // do stuff after this code is finished that may generate new calls, we cannot
    // call finalizers here.
    ++numScheduledCalls;
    asap$1(function () {
      if (--numScheduledCalls === 0) finalizePhysicalTick(); // Will detect unhandled errors
    }, []);
  }
}

function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);

    return;
  }

  var cb = promise._state ? listener.onFulfilled : listener.onRejected;

  if (cb === null) {
    // This Listener doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }

  ++listener.psd.ref;
  ++numScheduledCalls;
  asap$1(callListener, [cb, promise, listener]);
}

function callListener(cb, promise, listener) {
  try {
    // Set static variable currentFulfiller to the promise that is being fullfilled,
    // so that we connect the chain of promises (for long stacks support)
    currentFulfiller = promise; // Call callback and resolve our listener with it's return value.

    var ret,
        value = promise._value;

    if (promise._state) {
      // cb is onResolved
      ret = cb(value);
    } else {
      // cb is onRejected
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise); // Callback didnt do Promise.reject(err) nor reject(err) onto another promise.
    }

    listener.resolve(ret);
  } catch (e) {
    // Exception thrown in callback. Reject our listener.
    listener.reject(e);
  } finally {
    // Restore env and currentFulfiller.
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}

function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";

  if (promise._state === false) {
    var failure = promise._value,
        errorName,
        message;

    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure; // If error is undefined or null, show that.

      message = "";
    }

    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }

  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }

  return stacks;
}

function linkToPreviousPromise(promise, prev) {
  // Support long stacks by linking to previous completed promise.
  var numPrev = prev ? prev._numPrev + 1 : 0;

  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
/* The callback to schedule with setImmediate() or setTimeout().
   It runs a virtual microtick and executes any callback registered in microtickQueue.
 */


function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}

function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
/* Executes micro-ticks without doing try..catch.
   This can be possible because we only use this internally and
   the registered functions are exception-safe (they do try..catch
   internally before calling any external method). If registering
   functions in the microtickQueue that are not exception-safe, this
   would destroy the framework and make it instable. So we don't export
   our asap method.
*/


function endMicroTickScope() {
  var callbacks, i, l;

  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;

      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);

  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}

function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(function (p) {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0); // Clone first because finalizer may remove itself from list.

  var i = finalizers.length;

  while (i) {
    finalizers[--i]();
  }
}

function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }

  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap$1(function () {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}

function addPossiblyUnhandledError(promise) {
  // Only add to unhandledErrors if not already there. The first one to add to this list
  // will be upon the first rejection so that the root cause (first promise in the
  // rejection chain) is the one listed.
  if (!unhandledErrors.some(function (p) {
    return p._value === promise._value;
  })) unhandledErrors.push(promise);
}

function markErrorAsHandled(promise) {
  // Called when a reject handled is actually being called.
  // Search in unhandledErrors for any promise whos _value is this promise_value (list
  // contains only rejected promises, and only one item per error)
  var i = unhandledErrors.length;

  while (i) {
    if (unhandledErrors[--i]._value === promise._value) {
      // Found a promise that failed with this same error object pointer,
      // Remove that since there is a listener that actually takes care of it.
      unhandledErrors.splice(i, 1);
      return;
    }
  }
}

function PromiseReject(reason) {
  return new Promise(INTERNAL, false, reason);
}

function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
        outerScope = PSD;

    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
} //
// variables used for native await support
//


var task = {
  awaits: 0,
  echoes: 0,
  id: 0
}; // The ongoing macro-task when using zone-echoing.

var taskCounter = 0; // ID counter for macro tasks.

var zoneStack = []; // Stack of left zones to restore asynchronically.

var zoneEchoes = 0; // zoneEchoes is a must in order to persist zones between native await expressions.

var totalEchoes = 0; // ID counter for micro-tasks. Used to detect possible native await in our Promise.prototype.then.

var zone_id_counter = 0;

function newScope(fn, props$$1, a1, a2) {
  var parent = PSD,
      psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter; // Prepare for promise patching (done in usePSD):

  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: Promise,
    PromiseProp: {
      value: Promise,
      configurable: true,
      writable: true
    },
    all: Promise.all,
    race: Promise.race,
    resolve: Promise.resolve,
    reject: Promise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd) // global then

  } : {};
  if (props$$1) extend(psd, props$$1); // unhandleds and onunhandled should not be specifically set here.
  // Leave them on parent prototype.
  // unhandleds.push(err) will push to parent's prototype
  // onunhandled() will call parents onunhandled (with this scope's this-pointer though!)

  ++parent.ref;

  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };

  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
} // Function to call if scopeFunc returns NativePromise
// Also for each NativePromise in the arguments to Promise.all()


function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
} // Function to call when 'then' calls back on a native promise where onAwaitExpected() had been called.
// Also call this when a native await calls then method on a promise. In that case, don't supply
// sourceTaskId because we already know it refers to current task.


function decrementExpectedAwaits(sourceTaskId) {
  if (!task.awaits || sourceTaskId && sourceTaskId !== task.id) return;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT; // Will reset echoes to 0 if awaits is 0.
} // Call from Promise.all() and Promise.race()


function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(function (x) {
      decrementExpectedAwaits();
      return x;
    }, function (e) {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }

  return possiblePromise;
}

function zoneEnterEcho(targetZone) {
  ++totalEchoes;

  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0; // Cancel zone echoing.
  }

  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}

function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}

function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;

  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    // Enter or leave zone asynchronically as well, so that tasks initiated during current tick
    // will be surrounded by the zone when they are invoked.
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }

  if (targetZone === PSD) return;
  PSD = targetZone; // The actual zone switch occurs at this line.
  // Snapshot on every leave from global zone.

  if (currentZone === globalPSD) globalPSD.env = snapShot();

  if (patchGlobalPromise) {
    // Let's patch the global and native Promises (may be same or may be different)
    var GlobalPromise = globalPSD.env.Promise; // Swich environments (may be PSD-zone or the global zone. Both apply.)

    var targetEnv = targetZone.env; // Change Promise.prototype.then for native and global Promise (they MAY differ on polyfilled environments, but both can be accessed)
    // Must be done on each zone change because the patched method contains targetZone in its closure.

    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;

    if (currentZone.global || targetZone.global) {
      // Leaving or entering global zone. It's time to patch / restore global Promise.
      // Set this Promise to window.Promise so that transiled async functions will work on Firefox, Safari and IE, as well as with Zonejs and angular.
      Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp); // Support Promise.all() etc to work indexedDB-safe also when people are including es6-promise as a module (they might
      // not be accessing global.Promise but a local reference to it)

      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
    }
  }
}

function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}

function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;

  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}

function enqueueNativeMicroTask(job) {
  //
  // Precondition: nativePromiseThen !== undefined
  //
  nativePromiseThen.call(resolvedNativePromise, job);
}

function nativeAwaitCompatibleWrap(fn, zone, possibleAwait) {
  return typeof fn !== 'function' ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);

    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
    }
  };
}

function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone, false), nativeAwaitCompatibleWrap(onRejected, zone, false));
  };
}

var UNHANDLEDREJECTION = "unhandledrejection";

function globalError(err, promise) {
  var rv;

  try {
    rv = promise.onuncatched(err);
  } catch (e) {}

  if (rv !== false) try {
    var event,
        eventData = {
      promise: promise,
      reason: err
    };

    if (_global.document && document.createEvent) {
      event = document.createEvent('Event');
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }

    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) // No native support for PromiseRejectionEvent but user has set window.onunhandledrejection. Manually call it.
        try {
          _global.onunhandledrejection(event);
        } catch (_) {}
    }

    if (!event.defaultPrevented) {
      console.warn("Unhandled rejection: " + (err.stack || err));
    }
  } catch (e) {}
}

var rejection = Promise.reject;

function Events(ctx) {
  var evs = {};

  var rv = function (eventName, subscriber) {
    if (subscriber) {
      // Subscribe. If additional arguments than just the subscriber was provided, forward them as well.
      var i = arguments.length,
          args = new Array(i - 1);

      while (--i) {
        args[i - 1] = arguments[i];
      }

      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === 'string') {
      // Return interface allowing to fire or unsubscribe from event
      return evs[eventName];
    }
  };

  rv.addEventType = add;

  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }

  return rv;

  function add(eventName, chainFunction, defaultFunction) {
    if (_typeof(eventName) === 'object') return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }

  function addConfiguredEvents(cfg) {
    // events(this, {reading: [functionChain, nop]});
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];

      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === 'asap') {
        // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
        // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
        var context = add(eventName, mirror, function fire() {
          // Optimazation-safe cloning of arguments into args.
          var i = arguments.length,
              args = new Array(i);

          while (i--) {
            args[i] = arguments[i];
          } // All each subscriber:


          context.subscribers.forEach(function (fn) {
            asap(function fireEvent() {
              fn.apply(null, args);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * Copyright (c) 2014-2017 David Fahlander
 *
 * Version {version}, {date}
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/LICENSE-2.0
 *
 */


var DEXIE_VERSION = '{version}';
var maxString = String.fromCharCode(65535);

var maxKey = function () {
  try {
    IDBKeyRange.only([[]]);
    return [[]];
  } catch (e) {
    return maxString;
  }
}();

var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;

var dexieStackFrameFilter = function (frame) {
  return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};

var dbNamesDB; // Global database for backing Dexie.getDatabaseNames() on browser without indexedDB.webkitGetDatabaseNames() 
// Init debug

setDebug(debug, dexieStackFrameFilter);

function Dexie(dbName, options) {
  /// <param name="options" type="Object" optional="true">Specify only if you wich to control which addons that should run on this instance</param>
  var deps = Dexie.dependencies;
  var opts = extend({
    // Default Options
    addons: Dexie.addons,
    autoOpen: true,
    indexedDB: deps.indexedDB,
    IDBKeyRange: deps.IDBKeyRange // Backend IDBKeyRange api. Default to browser env.

  }, options);
  var addons = opts.addons,
      autoOpen = opts.autoOpen,
      indexedDB = opts.indexedDB,
      IDBKeyRange = opts.IDBKeyRange;
  var globalSchema = this._dbSchema = {};
  var versions = [];
  var dbStoreNames = [];
  var allTables = {}; ///<var type="IDBDatabase" />

  var idbdb = null; // Instance of IDBDatabase

  var dbOpenError = null;
  var isBeingOpened = false;
  var onReadyBeingFired = null;
  var openComplete = false;
  var READONLY = "readonly",
      READWRITE = "readwrite";
  var db = this;
  var dbReadyResolve,
      dbReadyPromise = new Promise(function (resolve) {
    dbReadyResolve = resolve;
  }),
      cancelOpen,
      openCanceller = new Promise(function (_, reject) {
    cancelOpen = reject;
  });
  var autoSchema = true;
  var hasNativeGetDatabaseNames = !!getNativeGetDatabaseNamesFn(indexedDB),
      hasGetAll;

  function init() {
    // Default subscribers to "versionchange" and "blocked".
    // Can be overridden by custom handlers. If custom handlers return false, these default
    // behaviours will be prevented.
    db.on("versionchange", function (ev) {
      // Default behavior for versionchange event is to close database connection.
      // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
      // Let's not block the other window from making it's delete() or open() call.
      // NOTE! This event is never fired in IE,Edge or Safari.
      if (ev.newVersion > 0) console.warn("Another connection wants to upgrade database '" + db.name + "'. Closing db now to resume the upgrade.");else console.warn("Another connection wants to delete database '" + db.name + "'. Closing db now to resume the delete request.");
      db.close(); // In many web applications, it would be recommended to force window.reload()
      // when this event occurs. To do that, subscribe to the versionchange event
      // and call window.location.reload(true) if ev.newVersion > 0 (not a deletion)
      // The reason for this is that your current web app obviously has old schema code that needs
      // to be updated. Another window got a newer version of the app and needs to upgrade DB but
      // your window is blocking it unless we close it here.
    });
    db.on("blocked", function (ev) {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn("Dexie.delete('" + db.name + "') was blocked");else console.warn("Upgrade '" + db.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
    });
  } //
  //
  //
  // ------------------------- Versioning Framework---------------------------
  //
  //
  //


  this.version = function (versionNumber) {
    /// <param name="versionNumber" type="Number"></param>
    /// <returns type="Version"></returns>
    if (idbdb || isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    var versionInstance = versions.filter(function (v) {
      return v._cfg.version === versionNumber;
    })[0];
    if (versionInstance) return versionInstance;
    versionInstance = new Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst); // Disable autoschema mode, as at least one version is specified.

    autoSchema = false;
    return versionInstance;
  };

  function Version(versionNumber) {
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
    this.stores({}); // Derive earlier schemas by default.
  }

  extend(Version.prototype, {
    stores: function (stores) {
      /// <summary>
      ///   Defines the schema for a particular version
      /// </summary>
      /// <param name="stores" type="Object">
      /// Example: <br/>
      ///   {users: "id++,first,last,&amp;username,*email", <br/>
      ///   passwords: "id++,&amp;username"}<br/>
      /// <br/>
      /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
      /// Special characters:<br/>
      ///  "&amp;"  means unique key, <br/>
      ///  "*"  means value is multiEntry, <br/>
      ///  "++" means auto-increment and only applicable for primary key <br/>
      /// </param>
      this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores; // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.

      var storesSpec = {};
      versions.forEach(function (version) {
        extend(storesSpec, version._cfg.storesSource);
      });
      var dbschema = this._cfg.dbschema = {};

      this._parseStoresSpec(storesSpec, dbschema); // Update the latest schema to this version
      // Update API


      globalSchema = db._dbSchema = dbschema;
      removeTablesApi([allTables, db, Transaction.prototype]); // Keep Transaction.prototype even though it should be depr.

      setApiOnPlace([allTables, db, Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
      dbStoreNames = keys(dbschema);
      return this;
    },
    upgrade: function (upgradeFunction) {
      this._cfg.contentUpgrade = upgradeFunction;
      return this;
    },
    _parseStoresSpec: function (stores, outSchema) {
      keys(stores).forEach(function (tableName) {
        if (stores[tableName] !== null) {
          var instanceTemplate = {};
          var indexes = parseIndexSyntax(stores[tableName]);
          var primKey = indexes.shift();
          if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
          if (primKey.keyPath) setByKeyPath(instanceTemplate, primKey.keyPath, primKey.auto ? 0 : primKey.keyPath);
          indexes.forEach(function (idx) {
            if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
            setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () {
              return "";
            }) : "");
          });
          outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
        }
      });
    }
  });

  function runUpgraders(oldVersion, idbtrans, reject) {
    var trans = db._createTransaction(READWRITE, dbStoreNames, globalSchema);

    trans.create(idbtrans);

    trans._completion.catch(reject);

    var rejectTransaction = trans._reject.bind(trans);

    newScope(function () {
      PSD.trans = trans;

      if (oldVersion === 0) {
        // Create tables:
        keys(globalSchema).forEach(function (tableName) {
          createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
        });
        Promise.follow(function () {
          return db.on.populate.fire(trans);
        }).catch(rejectTransaction);
      } else updateTablesAndIndexes(oldVersion, trans, idbtrans).catch(rejectTransaction);
    });
  }

  function updateTablesAndIndexes(oldVersion, trans, idbtrans) {
    // Upgrade version to version, step-by-step from oldest to newest version.
    // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
    var queue = [];
    var oldVersionStruct = versions.filter(function (version) {
      return version._cfg.version === oldVersion;
    })[0];
    if (!oldVersionStruct) throw new exceptions.Upgrade("Dexie specification of currently installed DB version is missing");
    globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
    var anyContentUpgraderHasRun = false;
    var versToRun = versions.filter(function (v) {
      return v._cfg.version > oldVersion;
    });
    versToRun.forEach(function (version) {
      /// <param name="version" type="Version"></param>
      queue.push(function () {
        var oldSchema = globalSchema;
        var newSchema = version._cfg.dbschema;
        adjustToExistingIndexNames(oldSchema, idbtrans);
        adjustToExistingIndexNames(newSchema, idbtrans);
        globalSchema = db._dbSchema = newSchema;
        var diff = getSchemaDiff(oldSchema, newSchema); // Add tables           

        diff.add.forEach(function (tuple) {
          createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
        }); // Change tables

        diff.change.forEach(function (change) {
          if (change.recreate) {
            throw new exceptions.Upgrade("Not yet support for changing primary key");
          } else {
            var store = idbtrans.objectStore(change.name); // Add indexes

            change.add.forEach(function (idx) {
              addIndex(store, idx);
            }); // Update indexes

            change.change.forEach(function (idx) {
              store.deleteIndex(idx.name);
              addIndex(store, idx);
            }); // Delete indexes

            change.del.forEach(function (idxName) {
              store.deleteIndex(idxName);
            });
          }
        });

        if (version._cfg.contentUpgrade) {
          anyContentUpgraderHasRun = true;
          return Promise.follow(function () {
            version._cfg.contentUpgrade(trans);
          });
        }
      });
      queue.push(function (idbtrans) {
        if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
          var newSchema = version._cfg.dbschema; // Delete old tables

          deleteRemovedTables(newSchema, idbtrans);
        }
      });
    }); // Now, create a queue execution engine

    function runQueue() {
      return queue.length ? Promise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : Promise.resolve();
    }

    return runQueue().then(function () {
      createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
    });
  }

  function getSchemaDiff(oldSchema, newSchema) {
    var diff = {
      del: [],
      add: [],
      change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}

    };

    for (var table in oldSchema) {
      if (!newSchema[table]) diff.del.push(table);
    }

    for (table in newSchema) {
      var oldDef = oldSchema[table],
          newDef = newSchema[table];

      if (!oldDef) {
        diff.add.push([table, newDef]);
      } else {
        var change = {
          name: table,
          def: newDef,
          recreate: false,
          del: [],
          add: [],
          change: []
        };

        if (oldDef.primKey.src !== newDef.primKey.src) {
          // Primary key has changed. Remove and re-add table.
          change.recreate = true;
          diff.change.push(change);
        } else {
          // Same primary key. Just find out what differs:
          var oldIndexes = oldDef.idxByName;
          var newIndexes = newDef.idxByName;

          for (var idxName in oldIndexes) {
            if (!newIndexes[idxName]) change.del.push(idxName);
          }

          for (idxName in newIndexes) {
            var oldIdx = oldIndexes[idxName],
                newIdx = newIndexes[idxName];
            if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
          }

          if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
            diff.change.push(change);
          }
        }
      }
    }

    return diff;
  }

  function createTable(idbtrans, tableName, primKey, indexes) {
    /// <param name="idbtrans" type="IDBTransaction"></param>
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
      keyPath: primKey.keyPath,
      autoIncrement: primKey.auto
    } : {
      autoIncrement: primKey.auto
    });
    indexes.forEach(function (idx) {
      addIndex(store, idx);
    });
    return store;
  }

  function createMissingTables(newSchema, idbtrans) {
    keys(newSchema).forEach(function (tableName) {
      if (!idbtrans.db.objectStoreNames.contains(tableName)) {
        createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
      }
    });
  }

  function deleteRemovedTables(newSchema, idbtrans) {
    for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
      var storeName = idbtrans.db.objectStoreNames[i];

      if (newSchema[storeName] == null) {
        idbtrans.db.deleteObjectStore(storeName);
      }
    }
  }

  function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, {
      unique: idx.unique,
      multiEntry: idx.multi
    });
  } //
  //
  //      Dexie Protected API
  //
  //


  this._allTables = allTables;

  this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
    return new Transaction(mode, storeNames, dbschema, parentTransaction);
  };
  /* Generate a temporary transaction when db operations are done outside a transaction scope.
  */


  function tempTransaction(mode, storeNames, fn) {
    if (!openComplete && !PSD.letThrough) {
      if (!isBeingOpened) {
        if (!autoOpen) return rejection(new exceptions.DatabaseClosed());
        db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
      }

      return dbReadyPromise.then(function () {
        return tempTransaction(mode, storeNames, fn);
      });
    } else {
      var trans = db._createTransaction(mode, storeNames, globalSchema);

      try {
        trans.create();
      } catch (ex) {
        return rejection(ex);
      }

      return trans._promise(mode, function (resolve, reject) {
        return newScope(function () {
          PSD.trans = trans;
          return fn(resolve, reject, trans);
        });
      }).then(function (result) {
        // Instead of resolving value directly, wait with resolving it until transaction has completed.
        // Otherwise the data would not be in the DB if requesting it in the then() operation.
        // Specifically, to ensure that the following expression will work:
        //
        //   db.friends.put({name: "Arne"}).then(function () {
        //       db.friends.where("name").equals("Arne").count(function(count) {
        //           assert (count === 1);
        //       });
        //   });
        //
        return trans._completion.then(function () {
          return result;
        });
      });
      /*.catch(err => { // Don't do this as of now. If would affect bulk- and modify methods in a way that could be more intuitive. But wait! Maybe change in next major.
      trans._reject(err);
      return rejection(err);
      });*/
    }
  }

  this._whenReady = function (fn) {
    return openComplete || PSD.letThrough ? fn() : new Promise(function (resolve, reject) {
      if (!isBeingOpened) {
        if (!autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }

        db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
      }

      dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }; //
  //
  //
  //
  //      Dexie API
  //
  //
  //


  this.verno = 0;

  this.open = function () {
    if (isBeingOpened || idbdb) return dbReadyPromise.then(function () {
      return dbOpenError ? rejection(dbOpenError) : db;
    });
    debug && (openCanceller._stackHolder = getErrorWithStack()); // Let stacks point to when open() was called rather than where new Dexie() was called.

    isBeingOpened = true;
    dbOpenError = null;
    openComplete = false; // Function pointers to call when the core opening process completes.

    var resolveDbReady = dbReadyResolve,
        // upgradeTransaction to abort on failure.
    upgradeTransaction = null;
    return Promise.race([openCanceller, new Promise(function (resolve, reject) {
      // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE:
      // IE fails when deleting objectStore after reading from it.
      // A future version of Dexie.js will stopover an intermediate version to workaround this.
      // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.
      // If no API, throw!
      if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " + "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
      var req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
      if (!req) throw new exceptions.MissingAPI("IndexedDB API not available"); // May happen in Safari private mode, see https://github.com/dfahlander/Dexie.js/issues/134

      req.onerror = eventRejectHandler(reject);
      req.onblocked = wrap(fireOnBlocked);
      req.onupgradeneeded = wrap(function (e) {
        upgradeTransaction = req.transaction;

        if (autoSchema && !db._allowEmptyDB) {
          // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
          // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we
          // do not create a new database by accident here.
          req.onerror = preventDefault; // Prohibit onabort error from firing before we're done!

          upgradeTransaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
          // Close database and delete it.

          req.result.close();
          var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!

          delreq.onsuccess = delreq.onerror = wrap(function () {
            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
          });
        } else {
          upgradeTransaction.onerror = eventRejectHandler(reject);
          var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.

          runUpgraders(oldVer / 10, upgradeTransaction, reject, req);
        }
      }, reject);
      req.onsuccess = wrap(function () {
        // Core opening procedure complete. Now let's just record some stuff.
        upgradeTransaction = null;
        idbdb = req.result;
        connections.push(db); // Used for emulating versionchange event on IE/Edge/Safari.

        if (autoSchema) readGlobalSchema();else if (idbdb.objectStoreNames.length > 0) {
          try {
            adjustToExistingIndexNames(globalSchema, idbdb.transaction(safariMultiStoreFix(idbdb.objectStoreNames), READONLY));
          } catch (e) {// Safari may bail out if > 1 store names. However, this shouldnt be a showstopper. Issue #120.
          }
        }
        idbdb.onversionchange = wrap(function (ev) {
          db._vcFired = true; // detect implementations that not support versionchange (IE/Edge/Safari)

          db.on("versionchange").fire(ev);
        });

        if (!hasNativeGetDatabaseNames && dbName !== '__dbnames') {
          dbNamesDB.dbnames.put({
            name: dbName
          }).catch(nop);
        }

        resolve();
      }, reject);
    })]).then(function () {
      // Before finally resolving the dbReadyPromise and this promise,
      // call and await all on('ready') subscribers:
      // Dexie.vip() makes subscribers able to use the database while being opened.
      // This is a must since these subscribers take part of the opening procedure.
      onReadyBeingFired = [];
      return Promise.resolve(Dexie.vip(db.on.ready.fire)).then(function fireRemainders() {
        if (onReadyBeingFired.length > 0) {
          // In case additional subscribers to db.on('ready') were added during the time db.on.ready.fire was executed.
          var remainders = onReadyBeingFired.reduce(promisableChain, nop);
          onReadyBeingFired = [];
          return Promise.resolve(Dexie.vip(remainders)).then(fireRemainders);
        }
      });
    }).finally(function () {
      onReadyBeingFired = null;
    }).then(function () {
      // Resolve the db.open() with the db instance.
      isBeingOpened = false;
      return db;
    }).catch(function (err) {
      try {
        // Did we fail within onupgradeneeded? Make sure to abort the upgrade transaction so it doesnt commit.
        upgradeTransaction && upgradeTransaction.abort();
      } catch (e) {}

      isBeingOpened = false; // Set before calling db.close() so that it doesnt reject openCanceller again (leads to unhandled rejection event).

      db.close(); // Closes and resets idbdb, removes connections, resets dbReadyPromise and openCanceller so that a later db.open() is fresh.
      // A call to db.close() may have made on-ready subscribers fail. Use dbOpenError if set, since err could be a follow-up error on that.

      dbOpenError = err; // Record the error. It will be used to reject further promises of db operations.

      return rejection(dbOpenError);
    }).finally(function () {
      openComplete = true;
      resolveDbReady(); // dbReadyPromise is resolved no matter if open() rejects or resolved. It's just to wake up waiters.
    });
  };

  this.close = function () {
    var idx = connections.indexOf(db);
    if (idx >= 0) connections.splice(idx, 1);

    if (idbdb) {
      try {
        idbdb.close();
      } catch (e) {}

      idbdb = null;
    }

    autoOpen = false;
    dbOpenError = new exceptions.DatabaseClosed();
    if (isBeingOpened) cancelOpen(dbOpenError); // Reset dbReadyPromise promise:

    dbReadyPromise = new Promise(function (resolve) {
      dbReadyResolve = resolve;
    });
    openCanceller = new Promise(function (_, reject) {
      cancelOpen = reject;
    });
  };

  this.delete = function () {
    var hasArguments = arguments.length > 0;
    return new Promise(function (resolve, reject) {
      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");

      if (isBeingOpened) {
        dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }

      function doDelete() {
        db.close();
        var req = indexedDB.deleteDatabase(dbName);
        req.onsuccess = wrap(function () {
          if (!hasNativeGetDatabaseNames) {
            dbNamesDB.dbnames.delete(dbName).catch(nop);
          }

          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = fireOnBlocked;
      }
    });
  };

  this.backendDB = function () {
    return idbdb;
  };

  this.isOpen = function () {
    return idbdb !== null;
  };

  this.hasBeenClosed = function () {
    return dbOpenError && dbOpenError instanceof exceptions.DatabaseClosed;
  };

  this.hasFailed = function () {
    return dbOpenError !== null;
  };

  this.dynamicallyOpened = function () {
    return autoSchema;
  }; //
  // Properties
  //


  this.name = dbName; // db.tables - an array of all Table instances.

  props(this, {
    tables: {
      get: function () {
        /// <returns type="Array" elementType="Table" />
        return keys(allTables).map(function (name) {
          return allTables[name];
        });
      }
    }
  }); //
  // Events
  //

  this.on = Events(this, "populate", "blocked", "versionchange", {
    ready: [promisableChain, nop]
  });
  this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
    return function (subscriber, bSticky) {
      Dexie.vip(function () {
        if (openComplete) {
          // Database already open. Call subscriber asap.
          if (!dbOpenError) Promise.resolve().then(subscriber); // bSticky: Also subscribe to future open sucesses (after close / reopen) 

          if (bSticky) subscribe(subscriber);
        } else if (onReadyBeingFired) {
          // db.on('ready') subscribers are currently being executed and have not yet resolved or rejected
          onReadyBeingFired.push(subscriber);
          if (bSticky) subscribe(subscriber);
        } else {
          // Database not yet open. Subscribe to it.
          subscribe(subscriber); // If bSticky is falsy, make sure to unsubscribe subscriber when fired once.

          if (!bSticky) subscribe(function unsubscribe() {
            db.on.ready.unsubscribe(subscriber);
            db.on.ready.unsubscribe(unsubscribe);
          });
        }
      });
    };
  });

  this.transaction = function () {
    /// <summary>
    ///
    /// </summary>
    /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
    /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
    /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>
    var args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  };

  function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    // Let table arguments be all arguments between mode and last argument.
    var i = arguments.length;
    if (i < 2) throw new exceptions.InvalidArgument("Too few arguments"); // Prevent optimzation killer (https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments)
    // and clone arguments except the first one into local var 'args'.

    var args = new Array(i - 1);

    while (--i) {
      args[i - 1] = arguments[i];
    } // Let scopeFunc be the last argument and pop it so that args now only contain the table arguments.


    scopeFunc = args.pop();
    var tables = flatten(args); // Support using array as middle argument, or a mix of arrays and non-arrays.

    return [mode, tables, scopeFunc];
  }

  this._transaction = function (mode, tables, scopeFunc) {
    var parentTransaction = PSD.trans; // Check if parent transactions is bound to this db instance, and if caller wants to reuse it

    if (!parentTransaction || parentTransaction.db !== db || mode.indexOf('!') !== -1) parentTransaction = null;
    var onlyIfCompatible = mode.indexOf('?') !== -1;
    mode = mode.replace('!', '').replace('?', ''); // Ok. Will change arguments[0] as well but we wont touch arguments henceforth.

    try {
      //
      // Get storeNames from arguments. Either through given table instances, or through given table names.
      //
      var storeNames = tables.map(function (table) {
        var storeName = table instanceof Table ? table.name : table;
        if (typeof storeName !== 'string') throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      }); //
      // Resolve mode. Allow shortcuts "r" and "rw".
      //

      if (mode == "r" || mode == READONLY) mode = READONLY;else if (mode == "rw" || mode == READWRITE) mode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);

      if (parentTransaction) {
        // Basic checks
        if (parentTransaction.mode === READONLY && mode === READWRITE) {
          if (onlyIfCompatible) {
            // Spawn new transaction instead.
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }

        if (parentTransaction) {
          storeNames.forEach(function (storeName) {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                // Spawn new transaction instead.
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }

        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          // '?' mode should not keep using an inactive transaction.
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
        reject(e);
      }) : rejection(e);
    } // If this is a sub-transaction, lock the parent and then launch the sub-transaction.


    return parentTransaction ? parentTransaction._promise(mode, enterTransactionScope, "lock") : PSD.trans ? // no parent transaction despite PSD.trans exists. Make sure also
    // that the zone we create is not a sub-zone of current, because
    // Promise.follow() should not wait for it if so.
    usePSD(PSD.transless, function () {
      return db._whenReady(enterTransactionScope);
    }) : db._whenReady(enterTransactionScope);

    function enterTransactionScope() {
      return Promise.resolve().then(function () {
        // Keep a pointer to last non-transactional PSD to use if someone calls Dexie.ignoreTransaction().
        var transless = PSD.transless || PSD; // Our transaction.
        //return new Promise((resolve, reject) => {

        var trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction); // Let the transaction instance be part of a Promise-specific data (PSD) value.


        var zoneProps = {
          trans: trans,
          transless: transless
        };

        if (parentTransaction) {
          // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
          trans.idbtrans = parentTransaction.idbtrans;
        } else {
          trans.create(); // Create the backend transaction so that complete() or error() will trigger even if no operation is made upon it.
        } // Support for native async await.


        if (scopeFunc.constructor === AsyncFunction) {
          incrementExpectedAwaits();
        }

        var returnValue;
        var promiseFollowed = Promise.follow(function () {
          // Finally, call the scope function with our table and transaction arguments.
          returnValue = scopeFunc.call(trans, trans);

          if (returnValue) {
            if (returnValue.constructor === NativePromise) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            } else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
              // scopeFunc returned an iterator with throw-support. Handle yield as await.
              returnValue = awaitIterator(returnValue);
            }
          }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === 'function' ? // Promise returned. User uses promise-style transactions.
        Promise.resolve(returnValue).then(function (x) {
          return trans.active ? x // Transaction still active. Continue.
          : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
        }) // No promise returned. Wait for all outstanding promises before continuing. 
        : promiseFollowed.then(function () {
          return returnValue;
        })).then(function (x) {
          // sub transactions don't react to idbtrans.oncomplete. We must trigger a completion:
          if (parentTransaction) trans._resolve(); // wait for trans._completion
          // (if root transaction, this means 'complete' event. If sub-transaction, we've just fired it ourselves)

          return trans._completion.then(function () {
            return x;
          });
        }).catch(function (e) {
          trans._reject(e); // Yes, above then-handler were maybe not called because of an unhandled rejection in scopeFunc!


          return rejection(e);
        });
      });
    }
  };

  this.table = function (tableName) {
    /// <returns type="Table"></returns>
    if (!hasOwn(allTables, tableName)) {
      throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
    }

    return allTables[tableName];
  }; //
  //
  //
  // Table Class
  //
  //
  //


  function Table(name, tableSchema, optionalTrans) {
    /// <param name="name" type="String"></param>
    this.name = name;
    this.schema = tableSchema;
    this._tx = optionalTrans;
    this.hook = allTables[name] ? allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  }

  function BulkErrorHandlerCatchAll(errorList, done, supportHooks) {
    return (supportHooks ? hookedEventRejectHandler : eventRejectHandler)(function (e) {
      errorList.push(e);
      done && done();
    });
  }

  function bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook) {
    // If hasDeleteHook, keysOrTuples must be an array of tuples: [[key1, value2],[key2,value2],...],
    // else keysOrTuples must be just an array of keys: [key1, key2, ...].
    return new Promise(function (resolve, reject) {
      var len = keysOrTuples.length,
          lastItem = len - 1;
      if (len === 0) return resolve();

      if (!hasDeleteHook) {
        for (var i = 0; i < len; ++i) {
          var req = idbstore.delete(keysOrTuples[i]);
          req.onerror = eventRejectHandler(reject);
          if (i === lastItem) req.onsuccess = wrap(function () {
            return resolve();
          });
        }
      } else {
        var hookCtx,
            errorHandler = hookedEventRejectHandler(reject),
            successHandler = hookedEventSuccessHandler(null);
        tryCatch(function () {
          for (var i = 0; i < len; ++i) {
            hookCtx = {
              onsuccess: null,
              onerror: null
            };
            var tuple = keysOrTuples[i];
            deletingHook.call(hookCtx, tuple[0], tuple[1], trans);
            var req = idbstore.delete(tuple[0]);
            req._hookCtx = hookCtx;
            req.onerror = errorHandler;
            if (i === lastItem) req.onsuccess = hookedEventSuccessHandler(resolve);else req.onsuccess = successHandler;
          }
        }, function (err) {
          hookCtx.onerror && hookCtx.onerror(err);
          throw err;
        });
      }
    });
  }

  props(Table.prototype, {
    //
    // Table Protected Methods
    //
    _trans: function getTransaction(mode, fn, writeLocked) {
      var trans = this._tx || PSD.trans;
      return trans && trans.db === db ? trans === PSD.trans ? trans._promise(mode, fn, writeLocked) : newScope(function () {
        return trans._promise(mode, fn, writeLocked);
      }, {
        trans: trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(mode, [this.name], fn);
    },
    _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
      var tableName = this.name;

      function supplyIdbStore(resolve, reject, trans) {
        if (trans.storeNames.indexOf(tableName) === -1) throw new exceptions.NotFound("Table" + tableName + " not part of transaction");
        return fn(resolve, reject, trans.idbtrans.objectStore(tableName), trans);
      }

      return this._trans(mode, supplyIdbStore, writeLocked);
    },
    //
    // Table Public Methods
    //
    get: function (keyOrCrit, cb) {
      if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
      var self = this;
      return this._idbstore(READONLY, function (resolve, reject, idbstore) {
        var req = idbstore.get(keyOrCrit);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(function () {
          resolve(self.hook.reading.fire(req.result));
        }, reject);
      }).then(cb);
    },
    where: function (indexOrCrit) {
      if (typeof indexOrCrit === 'string') return new WhereClause(this, indexOrCrit);
      if (isArray(indexOrCrit)) return new WhereClause(this, "[" + indexOrCrit.join('+') + "]"); // indexOrCrit is an object map of {[keyPath]:value} 

      var keyPaths = keys(indexOrCrit);
      if (keyPaths.length === 1) // Only one critera. This was the easy case:
        return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]); // Multiple criterias.
      // Let's try finding a compound index that matches all keyPaths in
      // arbritary order:

      var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
        return ix.compound && keyPaths.every(function (keyPath) {
          return ix.keyPath.indexOf(keyPath) >= 0;
        }) && ix.keyPath.every(function (keyPath) {
          return keyPaths.indexOf(keyPath) >= 0;
        });
      })[0];
      if (compoundIndex && maxKey !== maxString) // Cool! We found such compound index
        // and this browser supports compound indexes (maxKey !== maxString)!
        return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function (kp) {
          return indexOrCrit[kp];
        }));
      if (!compoundIndex) console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join('+') + "]")); // Ok, now let's fallback to finding at least one matching index
      // and filter the rest.

      var idxByName = this.schema.idxByName;
      var simpleIndex = keyPaths.reduce(function (r, keyPath) {
        return [r[0] || idxByName[keyPath], r[0] || !idxByName[keyPath] ? combine(r[1], function (x) {
          return '' + getByKeyPath(x, keyPath) == '' + indexOrCrit[keyPath];
        }) : r[1]];
      }, [null, null]);
      var idx = simpleIndex[0];
      return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(simpleIndex[1]) : compoundIndex ? this.filter(simpleIndex[1]) : // Has compound but browser bad. Allow filter.
      this.where(keyPaths).equals(''); // No index at all. Fail lazily.
    },
    count: function (cb) {
      return this.toCollection().count(cb);
    },
    offset: function (offset) {
      return this.toCollection().offset(offset);
    },
    limit: function (numRows) {
      return this.toCollection().limit(numRows);
    },
    reverse: function () {
      return this.toCollection().reverse();
    },
    filter: function (filterFunction) {
      return this.toCollection().and(filterFunction);
    },
    each: function (fn) {
      return this.toCollection().each(fn);
    },
    toArray: function (cb) {
      return this.toCollection().toArray(cb);
    },
    orderBy: function (index) {
      return new Collection(new WhereClause(this, isArray(index) ? "[" + index.join('+') + "]" : index));
    },
    toCollection: function () {
      return new Collection(new WhereClause(this));
    },
    mapToClass: function (constructor, structure) {
      /// <summary>
      ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
      ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
      /// </summary>
      /// <param name="constructor">Constructor function representing the class.</param>
      /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
      /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
      this.schema.mappedClass = constructor;
      var instanceTemplate = Object.create(constructor.prototype);

      if (structure) {
        // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
        applyStructure(instanceTemplate, structure);
      }

      this.schema.instanceTemplate = instanceTemplate; // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
      // no matter which method to use for reading (Table.get() or Table.where(...)... )

      var readHook = function (obj) {
        if (!obj) return obj; // No valid object. (Value is null). Return as is.
        // Create a new object that derives from constructor:

        var res = Object.create(constructor.prototype); // Clone members:

        for (var m in obj) {
          if (hasOwn(obj, m)) try {
            res[m] = obj[m];
          } catch (_) {}
        }

        return res;
      };

      if (this.schema.readHook) {
        this.hook.reading.unsubscribe(this.schema.readHook);
      }

      this.schema.readHook = readHook;
      this.hook("reading", readHook);
      return constructor;
    },
    defineClass: function (structure) {
      /// <summary>
      ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
      ///     as well as making it possible to extend the prototype of the returned constructor function.
      /// </summary>
      /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
      /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
      return this.mapToClass(Dexie.defineClass(structure), structure);
    },
    bulkDelete: function (keys$$1) {
      if (this.hook.deleting.fire === nop) {
        return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
          resolve(bulkDelete(idbstore, trans, keys$$1, false, nop));
        });
      } else {
        return this.where(':id').anyOf(keys$$1).delete().then(function () {}); // Resolve with undefined.
      }
    },
    bulkPut: function (objects, keys$$1) {
      var _this = this;

      return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
        if (!idbstore.keyPath && !_this.schema.primKey.auto && !keys$$1) throw new exceptions.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
        if (idbstore.keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
        if (objects.length === 0) return resolve(); // Caller provided empty list.

        var done = function (result) {
          if (errorList.length === 0) resolve(result);else reject(new BulkError(_this.name + ".bulkPut(): " + errorList.length + " of " + numObjs + " operations failed", errorList));
        };

        var req,
            errorList = [],
            errorHandler,
            numObjs = objects.length,
            table = _this;

        if (_this.hook.creating.fire === nop && _this.hook.updating.fire === nop) {
          //
          // Standard Bulk (no 'creating' or 'updating' hooks to care about)
          //
          errorHandler = BulkErrorHandlerCatchAll(errorList);

          for (var i = 0, l = objects.length; i < l; ++i) {
            req = keys$$1 ? idbstore.put(objects[i], keys$$1[i]) : idbstore.put(objects[i]);
            req.onerror = errorHandler;
          } // Only need to catch success or error on the last operation
          // according to the IDB spec.


          req.onerror = BulkErrorHandlerCatchAll(errorList, done);
          req.onsuccess = eventSuccessHandler(done);
        } else {
          var effectiveKeys = keys$$1 || idbstore.keyPath && objects.map(function (o) {
            return getByKeyPath(o, idbstore.keyPath);
          }); // Generate map of {[key]: object}

          var objectLookup = effectiveKeys && arrayToObject(effectiveKeys, function (key, i) {
            return key != null && [key, objects[i]];
          });
          var promise = !effectiveKeys ? // Auto-incremented key-less objects only without any keys argument.
          table.bulkAdd(objects) : // Keys provided. Either as inbound in provided objects, or as a keys argument.
          // Begin with updating those that exists in DB:
          table.where(':id').anyOf(effectiveKeys.filter(function (key) {
            return key != null;
          })).modify(function () {
            this.value = objectLookup[this.primKey];
            objectLookup[this.primKey] = null; // Mark as "don't add this"
          }).catch(ModifyError, function (e) {
            errorList = e.failures; // No need to concat here. These are the first errors added.
          }).then(function () {
            // Now, let's examine which items didnt exist so we can add them:
            var objsToAdd = [],
                keysToAdd = keys$$1 && []; // Iterate backwards. Why? Because if same key was used twice, just add the last one.

            for (var i = effectiveKeys.length - 1; i >= 0; --i) {
              var key = effectiveKeys[i];

              if (key == null || objectLookup[key]) {
                objsToAdd.push(objects[i]);
                keys$$1 && keysToAdd.push(key);
                if (key != null) objectLookup[key] = null; // Mark as "dont add again"
              }
            } // The items are in reverse order so reverse them before adding.
            // Could be important in order to get auto-incremented keys the way the caller
            // would expect. Could have used unshift instead of push()/reverse(),
            // but: http://jsperf.com/unshift-vs-reverse


            objsToAdd.reverse();
            keys$$1 && keysToAdd.reverse();
            return table.bulkAdd(objsToAdd, keysToAdd);
          }).then(function (lastAddedKey) {
            // Resolve with key of the last object in given arguments to bulkPut():
            var lastEffectiveKey = effectiveKeys[effectiveKeys.length - 1]; // Key was provided.

            return lastEffectiveKey != null ? lastEffectiveKey : lastAddedKey;
          });
          promise.then(done).catch(BulkError, function (e) {
            // Concat failure from ModifyError and reject using our 'done' method.
            errorList = errorList.concat(e.failures);
            done();
          }).catch(reject);
        }
      }, "locked"); // If called from transaction scope, lock transaction til all steps are done.
    },
    bulkAdd: function (objects, keys$$1) {
      var self = this,
          creatingHook = this.hook.creating.fire;
      return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
        if (!idbstore.keyPath && !self.schema.primKey.auto && !keys$$1) throw new exceptions.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
        if (idbstore.keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
        if (objects.length === 0) return resolve(); // Caller provided empty list.

        function done(result) {
          if (errorList.length === 0) resolve(result);else reject(new BulkError(self.name + ".bulkAdd(): " + errorList.length + " of " + numObjs + " operations failed", errorList));
        }

        var req,
            errorList = [],
            errorHandler,
            successHandler,
            numObjs = objects.length;

        if (creatingHook !== nop) {
          //
          // There are subscribers to hook('creating')
          // Must behave as documented.
          //
          var keyPath = idbstore.keyPath,
              hookCtx;
          errorHandler = BulkErrorHandlerCatchAll(errorList, null, true);
          successHandler = hookedEventSuccessHandler(null);
          tryCatch(function () {
            for (var i = 0, l = objects.length; i < l; ++i) {
              hookCtx = {
                onerror: null,
                onsuccess: null
              };
              var key = keys$$1 && keys$$1[i];
              var obj = objects[i],
                  effectiveKey = keys$$1 ? key : keyPath ? getByKeyPath(obj, keyPath) : undefined,
                  keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans);

              if (effectiveKey == null && keyToUse != null) {
                if (keyPath) {
                  obj = deepClone(obj);
                  setByKeyPath(obj, keyPath, keyToUse);
                } else {
                  key = keyToUse;
                }
              }

              req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
              req._hookCtx = hookCtx;

              if (i < l - 1) {
                req.onerror = errorHandler;
                if (hookCtx.onsuccess) req.onsuccess = successHandler;
              }
            }
          }, function (err) {
            hookCtx.onerror && hookCtx.onerror(err);
            throw err;
          });
          req.onerror = BulkErrorHandlerCatchAll(errorList, done, true);
          req.onsuccess = hookedEventSuccessHandler(done);
        } else {
          //
          // Standard Bulk (no 'creating' hook to care about)
          //
          errorHandler = BulkErrorHandlerCatchAll(errorList);

          for (var i = 0, l = objects.length; i < l; ++i) {
            req = keys$$1 ? idbstore.add(objects[i], keys$$1[i]) : idbstore.add(objects[i]);
            req.onerror = errorHandler;
          } // Only need to catch success or error on the last operation
          // according to the IDB spec.


          req.onerror = BulkErrorHandlerCatchAll(errorList, done);
          req.onsuccess = eventSuccessHandler(done);
        }
      });
    },
    add: function (obj, key) {
      /// <summary>
      ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
      /// </summary>
      /// <param name="obj" type="Object">A javascript object to insert</param>
      /// <param name="key" optional="true">Primary key</param>
      var creatingHook = this.hook.creating.fire;
      return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
        var hookCtx = {
          onsuccess: null,
          onerror: null
        };

        if (creatingHook !== nop) {
          var effectiveKey = key != null ? key : idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined;
          var keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.

          if (effectiveKey == null && keyToUse != null) {
            if (idbstore.keyPath) setByKeyPath(obj, idbstore.keyPath, keyToUse);else key = keyToUse;
          }
        }

        try {
          var req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
          req._hookCtx = hookCtx;
          req.onerror = hookedEventRejectHandler(reject);
          req.onsuccess = hookedEventSuccessHandler(function (result) {
            // TODO: Remove these two lines in next major release (2.0?)
            // It's no good practice to have side effects on provided parameters
            var keyPath = idbstore.keyPath;
            if (keyPath) setByKeyPath(obj, keyPath, result);
            resolve(result);
          });
        } catch (e) {
          if (hookCtx.onerror) hookCtx.onerror(e);
          throw e;
        }
      });
    },
    put: function (obj, key) {
      var _this = this; /// <summary>
      ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
      /// </summary>
      /// <param name="obj" type="Object">A javascript object to insert or update</param>
      /// <param name="key" optional="true">Primary key</param>


      var creatingHook = this.hook.creating.fire,
          updatingHook = this.hook.updating.fire;

      if (creatingHook !== nop || updatingHook !== nop) {
        //
        // People listens to when("creating") or when("updating") events!
        // We must know whether the put operation results in an CREATE or UPDATE.
        //
        var keyPath = this.schema.primKey.keyPath;
        var effectiveKey = key !== undefined ? key : keyPath && getByKeyPath(obj, keyPath);
        if (effectiveKey == null) return this.add(obj); // Since key is optional, make sure we get it from obj if not provided
        // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
        // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.

        obj = deepClone(obj);
        return this._trans(READWRITE, function () {
          return _this.where(":id").equals(effectiveKey).modify(function () {
            // Replace extisting value with our object
            // CRUD event firing handled in Collection.modify()
            this.value = obj;
          }).then(function (count) {
            return count === 0 ? _this.add(obj, key) : effectiveKey;
          });
        }, "locked"); // Lock needed because operation is splitted into modify() and add().
      } else {
        // Use the standard IDB put() method.
        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
          var req = key !== undefined ? idbstore.put(obj, key) : idbstore.put(obj);
          req.onerror = eventRejectHandler(reject);
          req.onsuccess = wrap(function (ev) {
            var keyPath = idbstore.keyPath;
            if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
            resolve(req.result);
          });
        });
      }
    },
    'delete': function (key) {
      /// <param name="key">Primary key of the object to delete</param>
      if (this.hook.deleting.subscribers.length) {
        // People listens to when("deleting") event. Must implement delete using Collection.delete() that will
        // call the CRUD event. Only Collection.delete() will know whether an object was actually deleted.
        return this.where(":id").equals(key).delete();
      } else {
        // No one listens. Use standard IDB delete() method.
        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
          var req = idbstore.delete(key);
          req.onerror = eventRejectHandler(reject);
          req.onsuccess = wrap(function () {
            resolve(req.result);
          });
        });
      }
    },
    clear: function () {
      if (this.hook.deleting.subscribers.length) {
        // People listens to when("deleting") event. Must implement delete using Collection.delete() that will
        // call the CRUD event. Only Collection.delete() will knows which objects that are actually deleted.
        return this.toCollection().delete();
      } else {
        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
          var req = idbstore.clear();
          req.onerror = eventRejectHandler(reject);
          req.onsuccess = wrap(function () {
            resolve(req.result);
          });
        });
      }
    },
    update: function (keyOrObject, modifications) {
      if (_typeof(modifications) !== 'object' || isArray(modifications)) throw new exceptions.InvalidArgument("Modifications must be an object.");

      if (_typeof(keyOrObject) === 'object' && !isArray(keyOrObject)) {
        // object to modify. Also modify given object with the modifications:
        keys(modifications).forEach(function (keyPath) {
          setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
        });
        var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
        if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
        return this.where(":id").equals(key).modify(modifications);
      } else {
        // key to modify
        return this.where(":id").equals(keyOrObject).modify(modifications);
      }
    }
  }); //
  //
  //
  // Transaction Class
  //
  //
  //

  function Transaction(mode, storeNames, dbschema, parent) {
    var _this = this; /// <summary>
    ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
    /// </summary>
    /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
    /// <param name="storeNames" type="Array">Array of table names to operate on</param>


    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0; // Just for debugging waitFor()

    this._completion = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });

    this._completion.then(function () {
      _this.active = false;

      _this.on.complete.fire();
    }, function (e) {
      var wasActive = _this.active;
      _this.active = false;

      _this.on.error.fire(e);

      _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
      return rejection(e); // Indicate we actually DO NOT catch this error.
    });
  }

  props(Transaction.prototype, {
    //
    // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
    //
    _lock: function () {
      assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
      // Temporary set all requests into a pending queue if they are called before database is ready.

      ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)

      if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
      return this;
    },
    _unlock: function () {
      assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.

      if (--this._reculock === 0) {
        if (!PSD.global) PSD.lockOwnerFor = null;

        while (this._blockedFuncs.length > 0 && !this._locked()) {
          var fnAndPSD = this._blockedFuncs.shift();

          try {
            usePSD(fnAndPSD[1], fnAndPSD[0]);
          } catch (e) {}
        }
      }

      return this;
    },
    _locked: function () {
      // Checks if any write-lock is applied on this transaction.
      // To simplify the Dexie API for extension implementations, we support recursive locks.
      // This is accomplished by using "Promise Specific Data" (PSD).
      // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
      // PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
      //         * callback given to the Promise() constructor  (function (resolve, reject){...})
      //         * callbacks given to then()/catch()/finally() methods (function (value){...})
      // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
      // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
      // PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
      return this._reculock && PSD.lockOwnerFor !== this;
    },
    create: function (idbtrans) {
      var _this = this;

      if (!this.mode) return this;
      assert(!this.idbtrans);

      if (!idbtrans && !idbdb) {
        switch (dbOpenError && dbOpenError.name) {
          case "DatabaseClosedError":
            // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
            throw new exceptions.DatabaseClosed(dbOpenError);

          case "MissingAPIError":
            // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
            throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);

          default:
            // Make it clear that the user operation was not what caused the error - the error had occurred earlier on db.open()!
            throw new exceptions.OpenFailed(dbOpenError);
        }
      }

      if (!this.active) throw new exceptions.TransactionInactive();
      assert(this._completion._state === null);
      idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
      idbtrans.onerror = wrap(function (ev) {
        preventDefault(ev); // Prohibit default bubbling to window.error

        _this._reject(idbtrans.error);
      });
      idbtrans.onabort = wrap(function (ev) {
        preventDefault(ev);
        _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
        _this.active = false;

        _this.on("abort").fire(ev);
      });
      idbtrans.oncomplete = wrap(function () {
        _this.active = false;

        _this._resolve();
      });
      return this;
    },
    _promise: function (mode, fn, bWriteLock) {
      var _this = this;

      if (mode === READWRITE && this.mode !== READWRITE) return rejection(new exceptions.ReadOnly("Transaction is readonly"));
      if (!this.active) return rejection(new exceptions.TransactionInactive());

      if (this._locked()) {
        return new Promise(function (resolve, reject) {
          _this._blockedFuncs.push([function () {
            _this._promise(mode, fn, bWriteLock).then(resolve, reject);
          }, PSD]);
        });
      } else if (bWriteLock) {
        return newScope(function () {
          var p = new Promise(function (resolve, reject) {
            _this._lock();

            var rv = fn(resolve, reject, _this);
            if (rv && rv.then) rv.then(resolve, reject);
          });
          p.finally(function () {
            return _this._unlock();
          });
          p._lib = true;
          return p;
        });
      } else {
        var p = new Promise(function (resolve, reject) {
          var rv = fn(resolve, reject, _this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p._lib = true;
        return p;
      }
    },
    _root: function () {
      return this.parent ? this.parent._root() : this;
    },
    waitFor: function (promise) {
      // Always operate on the root transaction (in case this is a sub stransaction)
      var root = this._root(); // For stability reasons, convert parameter to promise no matter what type is passed to waitFor().
      // (We must be able to call .then() on it.)


      promise = Promise.resolve(promise);

      if (root._waitingFor) {
        // Already called waitFor(). Wait for both to complete.
        root._waitingFor = root._waitingFor.then(function () {
          return promise;
        });
      } else {
        // We're not in waiting state. Start waiting state.
        root._waitingFor = promise;
        root._waitingQueue = []; // Start interacting with indexedDB until promise completes:

        var store = root.idbtrans.objectStore(root.storeNames[0]);

        (function spin() {
          ++root._spinCount; // For debugging only

          while (root._waitingQueue.length) {
            root._waitingQueue.shift()();
          }

          if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
        })();
      }

      var currentWaitPromise = root._waitingFor;
      return new Promise(function (resolve, reject) {
        promise.then(function (res) {
          return root._waitingQueue.push(wrap(resolve.bind(null, res)));
        }, function (err) {
          return root._waitingQueue.push(wrap(reject.bind(null, err)));
        }).finally(function () {
          if (root._waitingFor === currentWaitPromise) {
            // No one added a wait after us. Safe to stop the spinning.
            root._waitingFor = null;
          }
        });
      });
    },
    //
    // Transaction Public Properties and Methods
    //
    abort: function () {
      this.active && this._reject(new exceptions.Abort());
      this.active = false;
    },
    tables: {
      get: deprecated("Transaction.tables", function () {
        return allTables;
      })
    },
    table: function (name) {
      var table = db.table(name); // Don't check that table is part of transaction. It must fail lazily!

      return new Table(name, table.schema, this);
    }
  }); //
  //
  //
  // WhereClause
  //
  //
  //

  function WhereClause(table, index, orCollection) {
    /// <param name="table" type="Table"></param>
    /// <param name="index" type="String" optional="true"></param>
    /// <param name="orCollection" type="Collection" optional="true"></param>
    this._ctx = {
      table: table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
  }

  props(WhereClause.prototype, function () {
    // WhereClause private methods
    function fail(collectionOrWhereClause, err, T) {
      var collection = collectionOrWhereClause instanceof WhereClause ? new Collection(collectionOrWhereClause) : collectionOrWhereClause;
      collection._ctx.error = T ? new T(err) : new TypeError(err);
      return collection;
    }

    function emptyCollection(whereClause) {
      return new Collection(whereClause, function () {
        return IDBKeyRange.only("");
      }).limit(0);
    }

    function upperFactory(dir) {
      return dir === "next" ? function (s) {
        return s.toUpperCase();
      } : function (s) {
        return s.toLowerCase();
      };
    }

    function lowerFactory(dir) {
      return dir === "next" ? function (s) {
        return s.toLowerCase();
      } : function (s) {
        return s.toUpperCase();
      };
    }

    function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
      var length = Math.min(key.length, lowerNeedle.length);
      var llp = -1;

      for (var i = 0; i < length; ++i) {
        var lwrKeyChar = lowerKey[i];

        if (lwrKeyChar !== lowerNeedle[i]) {
          if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
          if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
          if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
          return null;
        }

        if (cmp(key[i], lwrKeyChar) < 0) llp = i;
      }

      if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
      if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
      return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
    }

    function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
      /// <param name="needles" type="Array" elementType="String"></param>
      var upper,
          lower,
          compare,
          upperNeedles,
          lowerNeedles,
          direction,
          nextKeySuffix,
          needlesLen = needles.length;

      if (!needles.every(function (s) {
        return typeof s === 'string';
      })) {
        return fail(whereClause, STRING_EXPECTED);
      }

      function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = dir === "next" ? simpleCompare : simpleCompareReverse;
        var needleBounds = needles.map(function (needle) {
          return {
            lower: lower(needle),
            upper: upper(needle)
          };
        }).sort(function (a, b) {
          return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function (nb) {
          return nb.upper;
        });
        lowerNeedles = needleBounds.map(function (nb) {
          return nb.lower;
        });
        direction = dir;
        nextKeySuffix = dir === "next" ? "" : suffix;
      }

      initDirection("next");
      var c = new Collection(whereClause, function () {
        return IDBKeyRange.bound(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
      });

      c._ondirectionchange = function (direction) {
        // This event onlys occur before filter is called the first time.
        initDirection(direction);
      };

      var firstPossibleNeedle = 0;

      c._addAlgorithm(function (cursor, advance, resolve) {
        /// <param name="cursor" type="IDBCursor"></param>
        /// <param name="advance" type="Function"></param>
        /// <param name="resolve" type="Function"></param>
        var key = cursor.key;
        if (typeof key !== 'string') return false;
        var lowerKey = lower(key);

        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
          return true;
        } else {
          var lowestPossibleCasing = null;

          for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
            var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
            if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
              lowestPossibleCasing = casing;
            }
          }

          if (lowestPossibleCasing !== null) {
            advance(function () {
              cursor.continue(lowestPossibleCasing + nextKeySuffix);
            });
          } else {
            advance(resolve);
          }

          return false;
        }
      });

      return c;
    } //
    // WhereClause public methods
    //


    return {
      between: function (lower, upper, includeLower, includeUpper) {
        /// <summary>
        ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
        /// </summary>
        /// <param name="lower"></param>
        /// <param name="upper"></param>
        /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
        /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
        /// <returns type="Collection"></returns>
        includeLower = includeLower !== false; // Default to true

        includeUpper = includeUpper === true; // Default to false

        try {
          if (cmp(lower, upper) > 0 || cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.

          return new Collection(this, function () {
            return IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper);
          });
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }
      },
      equals: function (value) {
        return new Collection(this, function () {
          return IDBKeyRange.only(value);
        });
      },
      above: function (value) {
        return new Collection(this, function () {
          return IDBKeyRange.lowerBound(value, true);
        });
      },
      aboveOrEqual: function (value) {
        return new Collection(this, function () {
          return IDBKeyRange.lowerBound(value);
        });
      },
      below: function (value) {
        return new Collection(this, function () {
          return IDBKeyRange.upperBound(value, true);
        });
      },
      belowOrEqual: function (value) {
        return new Collection(this, function () {
          return IDBKeyRange.upperBound(value);
        });
      },
      startsWith: function (str) {
        /// <param name="str" type="String"></param>
        if (typeof str !== 'string') return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
      },
      startsWithIgnoreCase: function (str) {
        /// <param name="str" type="String"></param>
        if (str === "") return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return x.indexOf(a[0]) === 0;
        }, [str], maxString);
      },
      equalsIgnoreCase: function (str) {
        /// <param name="str" type="String"></param>
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return x === a[0];
        }, [str], "");
      },
      anyOfIgnoreCase: function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return a.indexOf(x) !== -1;
        }, set, "");
      },
      startsWithAnyOfIgnoreCase: function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return a.some(function (n) {
            return x.indexOf(n) === 0;
          });
        }, set, maxString);
      },
      anyOf: function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = ascending;

        try {
          set.sort(compare);
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }

        if (set.length === 0) return emptyCollection(this);
        var c = new Collection(this, function () {
          return IDBKeyRange.bound(set[0], set[set.length - 1]);
        });

        c._ondirectionchange = function (direction) {
          compare = direction === "next" ? ascending : descending;
          set.sort(compare);
        };

        var i = 0;

        c._addAlgorithm(function (cursor, advance, resolve) {
          var key = cursor.key;

          while (compare(key, set[i]) > 0) {
            // The cursor has passed beyond this key. Check next.
            ++i;

            if (i === set.length) {
              // There is no next. Stop searching.
              advance(resolve);
              return false;
            }
          }

          if (compare(key, set[i]) === 0) {
            // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
            return true;
          } else {
            // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
            advance(function () {
              cursor.continue(set[i]);
            });
            return false;
          }
        });

        return c;
      },
      notEqual: function (value) {
        return this.inAnyRange([[minKey, value], [value, maxKey]], {
          includeLowers: false,
          includeUppers: false
        });
      },
      noneOf: function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return new Collection(this); // Return entire collection.

        try {
          set.sort(ascending);
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        } // Transform ["a","b","c"] to a set of ranges for between/above/below: [[minKey,"a"], ["a","b"], ["b","c"], ["c",maxKey]]


        var ranges = set.reduce(function (res, val) {
          return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
        }, null);
        ranges.push([set[set.length - 1], maxKey]);
        return this.inAnyRange(ranges, {
          includeLowers: false,
          includeUppers: false
        });
      },

      /** Filter out values withing given set of ranges.
      * Example, give children and elders a rebate of 50%:
      *
      *   db.friends.where('age').inAnyRange([[0,18],[65,Infinity]]).modify({Rebate: 1/2});
      *
      * @param {(string|number|Date|Array)[][]} ranges
      * @param {{includeLowers: boolean, includeUppers: boolean}} options
      */
      inAnyRange: function (ranges, options) {
        if (ranges.length === 0) return emptyCollection(this);

        if (!ranges.every(function (range) {
          return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
        })) {
          return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        }

        var includeLowers = !options || options.includeLowers !== false; // Default to true

        var includeUppers = options && options.includeUppers === true; // Default to false

        function addRange(ranges, newRange) {
          for (var i = 0, l = ranges.length; i < l; ++i) {
            var range = ranges[i];

            if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
              range[0] = min(range[0], newRange[0]);
              range[1] = max(range[1], newRange[1]);
              break;
            }
          }

          if (i === l) ranges.push(newRange);
          return ranges;
        }

        var sortDirection = ascending;

        function rangeSorter(a, b) {
          return sortDirection(a[0], b[0]);
        } // Join overlapping ranges


        var set;

        try {
          set = ranges.reduce(addRange, []);
          set.sort(rangeSorter);
        } catch (ex) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }

        var i = 0;
        var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
          return ascending(key, set[i][1]) > 0;
        } : function (key) {
          return ascending(key, set[i][1]) >= 0;
        };
        var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
          return descending(key, set[i][0]) > 0;
        } : function (key) {
          return descending(key, set[i][0]) >= 0;
        };

        function keyWithinCurrentRange(key) {
          return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }

        var checkKey = keyIsBeyondCurrentEntry;
        var c = new Collection(this, function () {
          return IDBKeyRange.bound(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
        });

        c._ondirectionchange = function (direction) {
          if (direction === "next") {
            checkKey = keyIsBeyondCurrentEntry;
            sortDirection = ascending;
          } else {
            checkKey = keyIsBeforeCurrentEntry;
            sortDirection = descending;
          }

          set.sort(rangeSorter);
        };

        c._addAlgorithm(function (cursor, advance, resolve) {
          var key = cursor.key;

          while (checkKey(key)) {
            // The cursor has passed beyond this key. Check next.
            ++i;

            if (i === set.length) {
              // There is no next. Stop searching.
              advance(resolve);
              return false;
            }
          }

          if (keyWithinCurrentRange(key)) {
            // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
            return true;
          } else if (cmp(key, set[i][1]) === 0 || cmp(key, set[i][0]) === 0) {
            // includeUpper or includeLower is false so keyWithinCurrentRange() returns false even though we are at range border.
            // Continue to next key but don't include this one.
            return false;
          } else {
            // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
            advance(function () {
              if (sortDirection === ascending) cursor.continue(set[i][0]);else cursor.continue(set[i][1]);
            });
            return false;
          }
        });

        return c;
      },
      startsWithAnyOf: function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);

        if (!set.every(function (s) {
          return typeof s === 'string';
        })) {
          return fail(this, "startsWithAnyOf() only works with strings");
        }

        if (set.length === 0) return emptyCollection(this);
        return this.inAnyRange(set.map(function (str) {
          return [str, str + maxString];
        }));
      }
    };
  }); //
  //
  //
  // Collection Class
  //
  //
  //

  function Collection(whereClause, keyRangeGenerator) {
    /// <summary>
    ///
    /// </summary>
    /// <param name="whereClause" type="WhereClause">Where clause instance</param>
    /// <param name="keyRangeGenerator" value="function(){ return IDBKeyRange.bound(0,1);}" optional="true"></param>
    var keyRange = null,
        error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    var whereCtx = whereClause._ctx,
        table = whereCtx.table;
    this._ctx = {
      table: table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error: error,
      or: whereCtx.or,
      valueMapper: table.hook.reading.fire
    };
  }

  function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
  }

  props(Collection.prototype, function () {
    //
    // Collection Private Functions
    //
    function addFilter(ctx, fn) {
      ctx.filter = combine(ctx.filter, fn);
    }

    function addReplayFilter(ctx, factory, isLimitFilter) {
      var curr = ctx.replayFilter;
      ctx.replayFilter = curr ? function () {
        return combine(curr(), factory());
      } : factory;
      ctx.justLimit = isLimitFilter && !curr;
    }

    function addMatchFilter(ctx, fn) {
      ctx.isMatch = combine(ctx.isMatch, fn);
    }
    /** @param ctx {
     *      isPrimKey: boolean,
     *      table: Table,
     *      index: string
     * }
     * @param store IDBObjectStore
     **/


    function getIndexOrStore(ctx, store) {
      if (ctx.isPrimKey) return store;
      var indexSpec = ctx.table.schema.idxByName[ctx.index];
      if (!indexSpec) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
      return store.index(indexSpec.name);
    }
    /** @param ctx {
     *      isPrimKey: boolean,
     *      table: Table,
     *      index: string,
     *      keysOnly: boolean,
     *      range?: IDBKeyRange,
     *      dir: "next" | "prev"
     * }
     */


    function openCursor(ctx, store) {
      var idxOrStore = getIndexOrStore(ctx, store);
      return ctx.keysOnly && 'openKeyCursor' in idxOrStore ? idxOrStore.openKeyCursor(ctx.range || null, ctx.dir + ctx.unique) : idxOrStore.openCursor(ctx.range || null, ctx.dir + ctx.unique);
    }

    function iter(ctx, fn, resolve, reject, idbstore) {
      var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;

      if (!ctx.or) {
        iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, filter), fn, resolve, reject, !ctx.keysOnly && ctx.valueMapper);
      } else (function () {
        var set = {};
        var resolved = 0;

        function resolveboth() {
          if (++resolved === 2) resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
        }

        function union(item, cursor, advance) {
          if (!filter || filter(cursor, advance, resolveboth, reject)) {
            var primaryKey = cursor.primaryKey;
            var key = '' + primaryKey;
            if (key === '[object ArrayBuffer]') key = '' + new Uint8Array(primaryKey);

            if (!hasOwn(set, key)) {
              set[key] = true;
              fn(item, cursor, advance);
            }
          }
        }

        ctx.or._iterate(union, resolveboth, reject, idbstore);

        iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, !ctx.keysOnly && ctx.valueMapper);
      })();
    }

    return {
      //
      // Collection Protected Functions
      //
      _read: function (fn, cb) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._idbstore(READONLY, fn).then(cb);
      },
      _write: function (fn) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
      },
      _addAlgorithm: function (fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
      },
      _iterate: function (fn, resolve, reject, idbstore) {
        return iter(this._ctx, fn, resolve, reject, idbstore);
      },
      clone: function (props$$1) {
        var rv = Object.create(this.constructor.prototype),
            ctx = Object.create(this._ctx);
        if (props$$1) extend(ctx, props$$1);
        rv._ctx = ctx;
        return rv;
      },
      raw: function () {
        this._ctx.valueMapper = null;
        return this;
      },
      //
      // Collection Public methods
      //
      each: function (fn) {
        var ctx = this._ctx;
        return this._read(function (resolve, reject, idbstore) {
          iter(ctx, fn, resolve, reject, idbstore);
        });
      },
      count: function (cb) {
        var ctx = this._ctx;

        if (isPlainKeyRange(ctx, true)) {
          // This is a plain key range. We can use the count() method if the index.
          return this._read(function (resolve, reject, idbstore) {
            var idx = getIndexOrStore(ctx, idbstore);
            var req = ctx.range ? idx.count(ctx.range) : idx.count();
            req.onerror = eventRejectHandler(reject);

            req.onsuccess = function (e) {
              resolve(Math.min(e.target.result, ctx.limit));
            };
          }, cb);
        } else {
          // Algorithms, filters or expressions are applied. Need to count manually.
          var count = 0;
          return this._read(function (resolve, reject, idbstore) {
            iter(ctx, function () {
              ++count;
              return false;
            }, function () {
              resolve(count);
            }, reject, idbstore);
          }, cb);
        }
      },
      sortBy: function (keyPath, cb) {
        /// <param name="keyPath" type="String"></param>
        var parts = keyPath.split('.').reverse(),
            lastPart = parts[0],
            lastIndex = parts.length - 1;

        function getval(obj, i) {
          if (i) return getval(obj[parts[i]], i - 1);
          return obj[lastPart];
        }

        var order = this._ctx.dir === "next" ? 1 : -1;

        function sorter(a, b) {
          var aVal = getval(a, lastIndex),
              bVal = getval(b, lastIndex);
          return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }

        return this.toArray(function (a) {
          return a.sort(sorter);
        }).then(cb);
      },
      toArray: function (cb) {
        var ctx = this._ctx;
        return this._read(function (resolve, reject, idbstore) {
          if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            // Special optimation if we could use IDBObjectStore.getAll() or
            // IDBKeyRange.getAll():
            var readingHook = ctx.table.hook.reading.fire;
            var idxOrStore = getIndexOrStore(ctx, idbstore);
            var req = ctx.limit < Infinity ? idxOrStore.getAll(ctx.range, ctx.limit) : idxOrStore.getAll(ctx.range);
            req.onerror = eventRejectHandler(reject);
            req.onsuccess = readingHook === mirror ? eventSuccessHandler(resolve) : eventSuccessHandler(function (res) {
              try {
                resolve(res.map(readingHook));
              } catch (e) {
                reject(e);
              }
            });
          } else {
            // Getting array through a cursor.
            var a = [];
            iter(ctx, function (item) {
              a.push(item);
            }, function arrayComplete() {
              resolve(a);
            }, reject, idbstore);
          }
        }, cb);
      },
      offset: function (offset) {
        var ctx = this._ctx;
        if (offset <= 0) return this;
        ctx.offset += offset; // For count()

        if (isPlainKeyRange(ctx)) {
          addReplayFilter(ctx, function () {
            var offsetLeft = offset;
            return function (cursor, advance) {
              if (offsetLeft === 0) return true;

              if (offsetLeft === 1) {
                --offsetLeft;
                return false;
              }

              advance(function () {
                cursor.advance(offsetLeft);
                offsetLeft = 0;
              });
              return false;
            };
          });
        } else {
          addReplayFilter(ctx, function () {
            var offsetLeft = offset;
            return function () {
              return --offsetLeft < 0;
            };
          });
        }

        return this;
      },
      limit: function (numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()

        addReplayFilter(this._ctx, function () {
          var rowsLeft = numRows;
          return function (cursor, advance, resolve) {
            if (--rowsLeft <= 0) advance(resolve); // Stop after this item has been included

            return rowsLeft >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
          };
        }, true);
        return this;
      },
      until: function (filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function (cursor, advance, resolve) {
          if (filterFunction(cursor.value)) {
            advance(resolve);
            return bIncludeStopEntry;
          } else {
            return true;
          }
        });
        return this;
      },
      first: function (cb) {
        return this.limit(1).toArray(function (a) {
          return a[0];
        }).then(cb);
      },
      last: function (cb) {
        return this.reverse().first(cb);
      },
      filter: function (filterFunction) {
        /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
        addFilter(this._ctx, function (cursor) {
          return filterFunction(cursor.value);
        }); // match filters not used in Dexie.js but can be used by 3rd part libraries to test a
        // collection for a match without querying DB. Used by Dexie.Observable.

        addMatchFilter(this._ctx, filterFunction);
        return this;
      },
      and: function (filterFunction) {
        return this.filter(filterFunction);
      },
      or: function (indexName) {
        return new WhereClause(this._ctx.table, indexName, this);
      },
      reverse: function () {
        this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
        if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
        return this;
      },
      desc: function () {
        return this.reverse();
      },
      eachKey: function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) {
          cb(cursor.key, cursor);
        });
      },
      eachUniqueKey: function (cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
      },
      eachPrimaryKey: function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) {
          cb(cursor.primaryKey, cursor);
        });
      },
      keys: function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
          a.push(cursor.key);
        }).then(function () {
          return a;
        }).then(cb);
      },
      primaryKeys: function (cb) {
        var ctx = this._ctx;

        if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
          // Special optimation if we could use IDBObjectStore.getAllKeys() or
          // IDBKeyRange.getAllKeys():
          return this._read(function (resolve, reject, idbstore) {
            var idxOrStore = getIndexOrStore(ctx, idbstore);
            var req = ctx.limit < Infinity ? idxOrStore.getAllKeys(ctx.range, ctx.limit) : idxOrStore.getAllKeys(ctx.range);
            req.onerror = eventRejectHandler(reject);
            req.onsuccess = eventSuccessHandler(resolve);
          }).then(cb);
        }

        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
          a.push(cursor.primaryKey);
        }).then(function () {
          return a;
        }).then(cb);
      },
      uniqueKeys: function (cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
      },
      firstKey: function (cb) {
        return this.limit(1).keys(function (a) {
          return a[0];
        }).then(cb);
      },
      lastKey: function (cb) {
        return this.reverse().firstKey(cb);
      },
      distinct: function () {
        var ctx = this._ctx,
            idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi) return this; // distinct() only makes differencies on multiEntry indexes.

        var set = {};
        addFilter(this._ctx, function (cursor) {
          var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string

          var found = hasOwn(set, strKey);
          set[strKey] = true;
          return !found;
        });
        return this;
      },
      //
      // Methods that mutate storage
      //
      modify: function (changes) {
        var self = this,
            ctx = this._ctx,
            hook = ctx.table.hook,
            updatingHook = hook.updating.fire,
            deletingHook = hook.deleting.fire;
        return this._write(function (resolve, reject, idbstore, trans) {
          var modifyer;

          if (typeof changes === 'function') {
            // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
            if (updatingHook === nop && deletingHook === nop) {
              // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
              modifyer = changes;
            } else {
              // People want to know exactly what is being modified or deleted.
              // Let modifyer be a proxy function that finds out what changes the caller is actually doing
              // and call the hooks accordingly!
              modifyer = function (item) {
                var origItem = deepClone(item); // Clone the item first so we can compare laters.

                if (changes.call(this, item, this) === false) return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)

                if (!hasOwn(this, "value")) {
                  // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                  deletingHook.call(this, this.primKey, item, trans);
                } else {
                  // No deletion. Check what was changed
                  var objectDiff = getObjectDiff(origItem, this.value);
                  var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);

                  if (additionalChanges) {
                    // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                    item = this.value;
                    keys(additionalChanges).forEach(function (keyPath) {
                      setByKeyPath(item, keyPath, additionalChanges[keyPath]); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                    });
                  }
                }
              };
            }
          } else if (updatingHook === nop) {
            // changes is a set of {keyPath: value} and no one is listening to the updating hook.
            var keyPaths = keys(changes);
            var numKeys = keyPaths.length;

            modifyer = function (item) {
              var anythingModified = false;

              for (var i = 0; i < numKeys; ++i) {
                var keyPath = keyPaths[i],
                    val = changes[keyPath];

                if (getByKeyPath(item, keyPath) !== val) {
                  setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath

                  anythingModified = true;
                }
              }

              return anythingModified;
            };
          } else {
            // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
            // allow it to add additional modifications to make.
            var origChanges = changes;
            changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.

            modifyer = function (item) {
              var anythingModified = false;
              var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
              if (additionalChanges) extend(changes, additionalChanges);
              keys(changes).forEach(function (keyPath) {
                var val = changes[keyPath];

                if (getByKeyPath(item, keyPath) !== val) {
                  setByKeyPath(item, keyPath, val);
                  anythingModified = true;
                }
              });
              if (additionalChanges) changes = shallowClone(origChanges); // Restore original changes for next iteration

              return anythingModified;
            };
          }

          var count = 0;
          var successCount = 0;
          var iterationComplete = false;
          var failures = [];
          var failKeys = [];
          var currentKey = null;

          function modifyItem(item, cursor) {
            currentKey = cursor.primaryKey;
            var thisContext = {
              primKey: cursor.primaryKey,
              value: item,
              onsuccess: null,
              onerror: null
            };

            function onerror(e) {
              failures.push(e);
              failKeys.push(thisContext.primKey);
              checkFinished();
              return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
            }

            if (modifyer.call(thisContext, item, thisContext) !== false) {
              var bDelete = !hasOwn(thisContext, "value");
              ++count;
              tryCatch(function () {
                var req = bDelete ? cursor.delete() : cursor.update(thisContext.value);
                req._hookCtx = thisContext;
                req.onerror = hookedEventRejectHandler(onerror);
                req.onsuccess = hookedEventSuccessHandler(function () {
                  ++successCount;
                  checkFinished();
                });
              }, onerror);
            } else if (thisContext.onsuccess) {
              // Hook will expect either onerror or onsuccess to always be called!
              thisContext.onsuccess(thisContext.value);
            }
          }

          function doReject(e) {
            if (e) {
              failures.push(e);
              failKeys.push(currentKey);
            }

            return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
          }

          function checkFinished() {
            if (iterationComplete && successCount + failures.length === count) {
              if (failures.length > 0) doReject();else resolve(successCount);
            }
          }

          self.clone().raw()._iterate(modifyItem, function () {
            iterationComplete = true;
            checkFinished();
          }, doReject, idbstore);
        });
      },
      'delete': function () {
        var _this = this;

        var ctx = this._ctx,
            range = ctx.range,
            deletingHook = ctx.table.hook.deleting.fire,
            hasDeleteHook = deletingHook !== nop;

        if (!hasDeleteHook && isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || !range)) {
          // May use IDBObjectStore.delete(IDBKeyRange) in this case (Issue #208)
          // For chromium, this is the way most optimized version.
          // For IE/Edge, this could hang the indexedDB engine and make operating system instable
          // (https://gist.github.com/dfahlander/5a39328f029de18222cf2125d56c38f7)
          return this._write(function (resolve, reject, idbstore) {
            // Our API contract is to return a count of deleted items, so we have to count() before delete().
            var onerror = eventRejectHandler(reject),
                countReq = range ? idbstore.count(range) : idbstore.count();
            countReq.onerror = onerror;

            countReq.onsuccess = function () {
              var count = countReq.result;
              tryCatch(function () {
                var delReq = range ? idbstore.delete(range) : idbstore.clear();
                delReq.onerror = onerror;

                delReq.onsuccess = function () {
                  return resolve(count);
                };
              }, function (err) {
                return reject(err);
              });
            };
          });
        } // Default version to use when collection is not a vanilla IDBKeyRange on the primary key.
        // Divide into chunks to not starve RAM.
        // If has delete hook, we will have to collect not just keys but also objects, so it will use
        // more memory and need lower chunk size.


        var CHUNKSIZE = hasDeleteHook ? 2000 : 10000;
        return this._write(function (resolve, reject, idbstore, trans) {
          var totalCount = 0; // Clone collection and change its table and set a limit of CHUNKSIZE on the cloned Collection instance.

          var collection = _this.clone({
            keysOnly: !ctx.isMatch && !hasDeleteHook
          }) // load just keys (unless filter() or and() or deleteHook has subscribers)
          .distinct() // In case multiEntry is used, never delete same key twice because resulting count
          .limit(CHUNKSIZE).raw(); // Don't filter through reading-hooks (like mapped classes etc)


          var keysOrTuples = []; // We're gonna do things on as many chunks that are needed.
          // Use recursion of nextChunk function:

          var nextChunk = function () {
            return collection.each(hasDeleteHook ? function (val, cursor) {
              // Somebody subscribes to hook('deleting'). Collect all primary keys and their values,
              // so that the hook can be called with its values in bulkDelete().
              keysOrTuples.push([cursor.primaryKey, cursor.value]);
            } : function (val, cursor) {
              // No one subscribes to hook('deleting'). Collect only primary keys:
              keysOrTuples.push(cursor.primaryKey);
            }).then(function () {
              // Chromium deletes faster when doing it in sort order.
              hasDeleteHook ? keysOrTuples.sort(function (a, b) {
                return ascending(a[0], b[0]);
              }) : keysOrTuples.sort(ascending);
              return bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook);
            }).then(function () {
              var count = keysOrTuples.length;
              totalCount += count;
              keysOrTuples = [];
              return count < CHUNKSIZE ? totalCount : nextChunk();
            });
          };

          resolve(nextChunk());
        });
      }
    };
  }); //
  //
  //
  // ------------------------- Help functions ---------------------------
  //
  //
  //

  function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
  }

  function setApiOnPlace(objs, tableNames, dbschema) {
    tableNames.forEach(function (tableName) {
      var schema = dbschema[tableName];
      objs.forEach(function (obj) {
        if (!(tableName in obj)) {
          if (obj === Transaction.prototype || obj instanceof Transaction) {
            // obj is a Transaction prototype (or prototype of a subclass to Transaction)
            // Make the API a getter that returns this.table(tableName)
            setProp(obj, tableName, {
              get: function () {
                return this.table(tableName);
              }
            });
          } else {
            // Table will not be bound to a transaction (will use Dexie.currentTransaction)
            obj[tableName] = new Table(tableName, schema);
          }
        }
      });
    });
  }

  function removeTablesApi(objs) {
    objs.forEach(function (obj) {
      for (var key in obj) {
        if (obj[key] instanceof Table) delete obj[key];
      }
    });
  }

  function iterate(req, filter, fn, resolve, reject, valueMapper) {
    // Apply valueMapper (hook('reading') or mappped class)
    var mappedFn = valueMapper ? function (x, c, a) {
      return fn(valueMapper(x), c, a);
    } : fn; // Wrap fn with PSD and microtick stuff from Promise.

    var wrappedFn = wrap(mappedFn, reject);
    if (!req.onerror) req.onerror = eventRejectHandler(reject);

    if (filter) {
      req.onsuccess = trycatcher(function filter_record() {
        var cursor = req.result;

        if (cursor) {
          var c = function () {
            cursor.continue();
          };

          if (filter(cursor, function (advancer) {
            c = advancer;
          }, resolve, reject)) wrappedFn(cursor.value, cursor, function (advancer) {
            c = advancer;
          });
          c();
        } else {
          resolve();
        }
      }, reject);
    } else {
      req.onsuccess = trycatcher(function filter_record() {
        var cursor = req.result;

        if (cursor) {
          var c = function () {
            cursor.continue();
          };

          wrappedFn(cursor.value, cursor, function (advancer) {
            c = advancer;
          });
          c();
        } else {
          resolve();
        }
      }, reject);
    }
  }

  function parseIndexSyntax(indexes) {
    /// <param name="indexes" type="String"></param>
    /// <returns type="Array" elementType="IndexSpec"></returns>
    var rv = [];
    indexes.split(',').forEach(function (index) {
      index = index.trim();
      var name = index.replace(/([&*]|\+\+)/g, ""); // Remove "&", "++" and "*"
      // Let keyPath of "[a+b]" be ["a","b"]:

      var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
      rv.push(new IndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), /\./.test(index)));
    });
    return rv;
  }

  function cmp(key1, key2) {
    return indexedDB.cmp(key1, key2);
  }

  function min(a, b) {
    return cmp(a, b) < 0 ? a : b;
  }

  function max(a, b) {
    return cmp(a, b) > 0 ? a : b;
  }

  function ascending(a, b) {
    return indexedDB.cmp(a, b);
  }

  function descending(a, b) {
    return indexedDB.cmp(b, a);
  }

  function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
  }

  function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
  }

  function combine(filter1, filter2) {
    return filter1 ? filter2 ? function () {
      return filter1.apply(this, arguments) && filter2.apply(this, arguments);
    } : filter1 : filter2;
  }

  function readGlobalSchema() {
    db.verno = idbdb.version / 10;
    db._dbSchema = globalSchema = {};
    dbStoreNames = slice(idbdb.objectStoreNames, 0);
    if (dbStoreNames.length === 0) return; // Database contains no stores.

    var trans = idbdb.transaction(safariMultiStoreFix(dbStoreNames), 'readonly');
    dbStoreNames.forEach(function (storeName) {
      var store = trans.objectStore(storeName),
          keyPath = store.keyPath,
          dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
      var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
      var indexes = [];

      for (var j = 0; j < store.indexNames.length; ++j) {
        var idbindex = store.index(store.indexNames[j]);
        keyPath = idbindex.keyPath;
        dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
        var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
        indexes.push(index);
      }

      globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
    });
    setApiOnPlace([allTables], keys(globalSchema), globalSchema);
  }

  function adjustToExistingIndexNames(schema, idbtrans) {
    /// <summary>
    /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
    /// </summary>
    /// <param name="schema" type="Object">Map between name and TableSchema</param>
    /// <param name="idbtrans" type="IDBTransaction"></param>
    var storeNames = idbtrans.db.objectStoreNames;

    for (var i = 0; i < storeNames.length; ++i) {
      var storeName = storeNames[i];
      var store = idbtrans.objectStore(storeName);
      hasGetAll = 'getAll' in store;

      for (var j = 0; j < store.indexNames.length; ++j) {
        var indexName = store.indexNames[j];
        var keyPath = store.index(indexName).keyPath;
        var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";

        if (schema[storeName]) {
          var indexSpec = schema[storeName].idxByName[dexieName];
          if (indexSpec) indexSpec.name = indexName;
        }
      }
    } // Bug with getAll() on Safari ver<604 on Workers only, see discussion following PR #579


    if (/Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
      hasGetAll = false;
    }
  }

  function fireOnBlocked(ev) {
    db.on("blocked").fire(ev); // Workaround (not fully*) for missing "versionchange" event in IE,Edge and Safari:

    connections.filter(function (c) {
      return c.name === db.name && c !== db && !c._vcFired;
    }).map(function (c) {
      return c.on("versionchange").fire(ev);
    });
  }

  extend(this, {
    Collection: Collection,
    Table: Table,
    Transaction: Transaction,
    Version: Version,
    WhereClause: WhereClause
  });
  init();
  addons.forEach(function (fn) {
    fn(db);
  });
}

function parseType(type) {
  if (typeof type === 'function') {
    return new type();
  } else if (isArray(type)) {
    return [parseType(type[0])];
  } else if (type && _typeof(type) === 'object') {
    var rv = {};
    applyStructure(rv, type);
    return rv;
  } else {
    return type;
  }
}

function applyStructure(obj, structure) {
  keys(structure).forEach(function (member) {
    var value = parseType(structure[member]);
    obj[member] = value;
  });
  return obj;
}

function hookedEventSuccessHandler(resolve) {
  // wrap() is needed when calling hooks because the rare scenario of:
  //  * hook does a db operation that fails immediately (IDB throws exception)
  //    For calling db operations on correct transaction, wrap makes sure to set PSD correctly.
  //    wrap() will also execute in a virtual tick.
  //  * If not wrapped in a virtual tick, direct exception will launch a new physical tick.
  //  * If this was the last event in the bulk, the promise will resolve after a physical tick
  //    and the transaction will have committed already.
  // If no hook, the virtual tick will be executed in the reject()/resolve of the final promise,
  // because it is always marked with _lib = true when created using Transaction._promise().
  return wrap(function (event) {
    var req = event.target,
        ctx = req._hookCtx,
        // Contains the hook error handler. Put here instead of closure to boost performance.
    result = ctx.value || req.result,
        // Pass the object value on updates. The result from IDB is the primary key.
    hookSuccessHandler = ctx && ctx.onsuccess;
    hookSuccessHandler && hookSuccessHandler(result);
    resolve && resolve(result);
  }, resolve);
}

function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}

function eventSuccessHandler(resolve) {
  return wrap(function (event) {
    resolve(event.target.result);
  });
}

function hookedEventRejectHandler(reject) {
  return wrap(function (event) {
    // See comment on hookedEventSuccessHandler() why wrap() is needed only when supporting hooks.
    var req = event.target,
        err = req.error,
        ctx = req._hookCtx,
        // Contains the hook error handler. Put here instead of closure to boost performance.
    hookErrorHandler = ctx && ctx.onerror;
    hookErrorHandler && hookErrorHandler(err);
    preventDefault(event);
    reject(err);
    return false;
  });
}

function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}

function awaitIterator(iterator) {
  var callNext = function (result) {
    return iterator.next(result);
  },
      doThrow = function (error) {
    return iterator.throw(error);
  },
      onSuccess = step(callNext),
      onError = step(doThrow);

  function step(getNext) {
    return function (val) {
      var next = getNext(val),
          value = next.value;
      return next.done ? value : !value || typeof value.then !== 'function' ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }

  return step(callNext)();
} //
// IndexSpec struct
//


function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
  /// <param name="name" type="String"></param>
  /// <param name="keyPath" type="String"></param>
  /// <param name="unique" type="Boolean"></param>
  /// <param name="multi" type="Boolean"></param>
  /// <param name="auto" type="Boolean"></param>
  /// <param name="compound" type="Boolean"></param>
  /// <param name="dotted" type="Boolean"></param>
  this.name = name;
  this.keyPath = keyPath;
  this.unique = unique;
  this.multi = multi;
  this.auto = auto;
  this.compound = compound;
  this.dotted = dotted;
  var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && '[' + [].join.call(keyPath, '+') + ']';
  this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
} //
// TableSchema struct
//


function TableSchema(name, primKey, indexes, instanceTemplate) {
  /// <param name="name" type="String"></param>
  /// <param name="primKey" type="IndexSpec"></param>
  /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
  /// <param name="instanceTemplate" type="Object"></param>
  this.name = name;
  this.primKey = primKey || new IndexSpec();
  this.indexes = indexes || [new IndexSpec()];
  this.instanceTemplate = instanceTemplate;
  this.mappedClass = null;
  this.idxByName = arrayToObject(indexes, function (index) {
    return [index.name, index];
  });
}

function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getNativeGetDatabaseNamesFn(indexedDB) {
  var fn = indexedDB && (indexedDB.getDatabaseNames || indexedDB.webkitGetDatabaseNames);
  return fn && fn.bind(indexedDB);
} // Export Error classes


props(Dexie, fullNameExceptions); // Dexie.XXXError = class XXXError {...};
//
// Static methods and properties
// 

props(Dexie, {
  //
  // Static delete() method.
  //
  delete: function (databaseName) {
    var db = new Dexie(databaseName),
        promise = db.delete();

    promise.onblocked = function (fn) {
      db.on("blocked", fn);
      return this;
    };

    return promise;
  },
  //
  // Static exists() method.
  //
  exists: function (name) {
    return new Dexie(name).open().then(function (db) {
      db.close();
      return true;
    }).catch(Dexie.NoSuchDatabaseError, function () {
      return false;
    });
  },
  //
  // Static method for retrieving a list of all existing databases at current host.
  //
  getDatabaseNames: function (cb) {
    var getDatabaseNames = getNativeGetDatabaseNamesFn(Dexie.dependencies.indexedDB);
    return getDatabaseNames ? new Promise(function (resolve, reject) {
      var req = getDatabaseNames();

      req.onsuccess = function (event) {
        resolve(slice(event.target.result, 0)); // Converst DOMStringList to Array<String>
      };

      req.onerror = eventRejectHandler(reject);
    }).then(cb) : dbNamesDB.dbnames.toCollection().primaryKeys(cb);
  },
  defineClass: function () {
    // Default constructor able to copy given properties into this object.
    function Class(properties) {
      /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
      /// </param>
      if (properties) extend(this, properties);
    }

    return Class;
  },
  applyStructure: applyStructure,
  ignoreTransaction: function (scopeFunc) {
    // In case caller is within a transaction but needs to create a separate transaction.
    // Example of usage:
    //
    // Let's say we have a logger function in our app. Other application-logic should be unaware of the
    // logger function and not need to include the 'logentries' table in all transaction it performs.
    // The logging should always be done in a separate transaction and not be dependant on the current
    // running transaction context. Then you could use Dexie.ignoreTransaction() to run code that starts a new transaction.
    //
    //     Dexie.ignoreTransaction(function() {
    //         db.logentries.add(newLogEntry);
    //     });
    //
    // Unless using Dexie.ignoreTransaction(), the above example would try to reuse the current transaction
    // in current Promise-scope.
    //
    // An alternative to Dexie.ignoreTransaction() would be setImmediate() or setTimeout(). The reason we still provide an
    // API for this because
    //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
    //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
    //  3) setImmediate() is not supported in the ES standard.
    //  4) You might want to keep other PSD state that was set in a parent PSD, such as PSD.letThrough.
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : // Use the closest parent that was non-transactional.
    scopeFunc(); // No need to change scope because there is no ongoing transaction.
  },
  vip: function (fn) {
    // To be used by subscribers to the on('ready') event.
    // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
    // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
    // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
    // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
    // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
    // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
    // the caller will not resolve until database is opened.
    return newScope(function () {
      PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.

      return fn();
    });
  },
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== 'function') return Promise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== 'function') return Promise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  // Dexie.currentTransaction property
  currentTransaction: {
    get: function () {
      return PSD.trans || null;
    }
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    // If a function is provided, invoke it and pass the returning value to Transaction.waitFor()
    var promise = Promise.resolve(typeof promiseOrFunction === 'function' ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 60000); // Default the timeout to one minute. Caller may specify Infinity if required.       
    // Run given promise on current transaction. If no current transaction, just return a Dexie promise based
    // on given value.

    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  // Export our Promise implementation since it can be handy as a standalone Promise implementation
  Promise: Promise,
  // Dexie.debug proptery:
  // Dexie.debug = false
  // Dexie.debug = true
  // Dexie.debug = "dexie" - don't hide dexie's stack frames.
  debug: {
    get: function () {
      return debug;
    },
    set: function (value) {
      setDebug(value, value === 'dexie' ? function () {
        return true;
      } : dexieStackFrameFilter);
    }
  },
  // Export our derive/extend/override methodology
  derive: derive,
  extend: extend,
  props: props,
  override: override,
  // Export our Events() function - can be handy as a toolkit
  Events: Events,
  // Utilities
  getByKeyPath: getByKeyPath,
  setByKeyPath: setByKeyPath,
  delByKeyPath: delByKeyPath,
  shallowClone: shallowClone,
  deepClone: deepClone,
  getObjectDiff: getObjectDiff,
  asap: asap,
  maxKey: maxKey,
  minKey: minKey,
  // Addon registry
  addons: [],
  // Global DB connection list
  connections: connections,
  MultiModifyError: exceptions.Modify,
  errnames: errnames,
  // Export other static classes
  IndexSpec: IndexSpec,
  TableSchema: TableSchema,
  //
  // Dependencies
  //
  // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
  //
  // In node.js, however, these properties must be set "manually" before instansiating a new Dexie().
  // For node.js, you need to require indexeddb-js or similar and then set these deps.
  //
  dependencies: function () {
    try {
      return {
        // Required:
        indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
      };
    } catch (e) {
      return {
        indexedDB: null,
        IDBKeyRange: null
      };
    }
  }(),
  // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split('.').map(function (n) {
    return parseInt(n);
  }).reduce(function (p, c, i) {
    return p + c / Math.pow(10, i * 2);
  }),
  // https://github.com/dfahlander/Dexie.js/issues/186
  // typescript compiler tsc in mode ts-->es5 & commonJS, will expect require() to return
  // x.default. Workaround: Set Dexie.default = Dexie.
  default: Dexie,
  // Make it possible to import {Dexie} (non-default import)
  // Reason 1: May switch to that in future.
  // Reason 2: We declare it both default and named exported in d.ts to make it possible
  // to let addons extend the Dexie interface with Typescript 2.1 (works only when explicitely
  // exporting the symbol, not just default exporting)
  Dexie: Dexie
}); // Map DOMErrors and DOMExceptions to corresponding Dexie errors. May change in Dexie v2.0.

Promise.rejectionMapper = mapError; // Initialize dbNamesDB (won't ever be opened on chromium browsers')

dbNamesDB = new Dexie('__dbnames');
dbNamesDB.version(1).stores({
  dbnames: 'name'
});

(function () {
  // Migrate from Dexie 1.x database names stored in localStorage:
  var DBNAMES = 'Dexie.DatabaseNames';

  try {
    if ((typeof localStorage === "undefined" ? "undefined" : _typeof(localStorage)) !== undefined && _global.document !== undefined) {
      // Have localStorage and is not executing in a worker. Lets migrate from Dexie 1.x.
      JSON.parse(localStorage.getItem(DBNAMES) || "[]").forEach(function (name) {
        return dbNamesDB.dbnames.put({
          name: name
        }).catch(nop);
      });
      localStorage.removeItem(DBNAMES);
    }
  } catch (_e) {}
})();

var _default = Dexie;
exports.default = _default;
},{}],"node_modules/ratta/src/config/DBVersions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  files: "$$id,&absolutePath,level,linkPath,permission,createTime,createBy,updateTime,updateBy,type,isDeleted,shareLink,content,permissionAccounts,owner,group",
  accounts: "$$id,type,name,password,info,setting,group",
  states: "$$id,[name+accountId],setting"
}];
exports.default = _default;
},{}],"node_modules/convert-hex/convert-hex.js":[function(require,module,exports) {
!function(globals) {
'use strict'

var convertHex = {
  bytesToHex: function(bytes) {
    /*if (typeof bytes.byteLength != 'undefined') {
      var newBytes = []

      if (typeof bytes.buffer != 'undefined')
        bytes = new DataView(bytes.buffer)
      else
        bytes = new DataView(bytes)

      for (var i = 0; i < bytes.byteLength; ++i) {
        newBytes.push(bytes.getUint8(i))
      }
      bytes = newBytes
    }*/
    return arrBytesToHex(bytes)
  },
  hexToBytes: function(hex) {
    if (hex.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.")
    if (hex.indexOf('0x') === 0) hex = hex.slice(2)
    return hex.match(/../g).map(function(x) { return parseInt(x,16) })
  }
}


// PRIVATE

function arrBytesToHex(bytes) {
  return bytes.map(function(x) { return padLeft(x.toString(16),2) }).join('')
}

function padLeft(orig, len) {
  if (orig.length > len) return orig
  return Array(len - orig.length + 1).join('0') + orig
}


if (typeof module !== 'undefined' && module.exports) { //CommonJS
  module.exports = convertHex
} else {
  globals.convertHex = convertHex
}

}(this);
},{}],"node_modules/convert-string/convert-string.js":[function(require,module,exports) {
!function(globals) {
'use strict'

var convertString = {
  bytesToString: function(bytes) {
    return bytes.map(function(x){ return String.fromCharCode(x) }).join('')
  },
  stringToBytes: function(str) {
    return str.split('').map(function(x) { return x.charCodeAt(0) })
  }
}

//http://hossa.in/2012/07/20/utf-8-in-javascript.html
convertString.UTF8 = {
   bytesToString: function(bytes) {
    return decodeURIComponent(escape(convertString.bytesToString(bytes)))
  },
  stringToBytes: function(str) {
   return convertString.stringToBytes(unescape(encodeURIComponent(str)))
  }
}

if (typeof module !== 'undefined' && module.exports) { //CommonJS
  module.exports = convertString
} else {
  globals.convertString = convertString
}

}(this);
},{}],"node_modules/sha256/lib/sha256.js":[function(require,module,exports) {
!function(globals) {
'use strict'

var _imports = {}

if (typeof module !== 'undefined' && module.exports) { //CommonJS
  _imports.bytesToHex = require('convert-hex').bytesToHex
  _imports.convertString = require('convert-string')
  module.exports = sha256
} else {
  _imports.bytesToHex = globals.convertHex.bytesToHex
  _imports.convertString = globals.convertString
  globals.sha256 = sha256
}

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

// Initialization round constants tables
var K = []

// Compute constants
!function () {
  function isPrime(n) {
    var sqrtN = Math.sqrt(n);
    for (var factor = 2; factor <= sqrtN; factor++) {
      if (!(n % factor)) return false
    }

    return true
  }

  function getFractionalBits(n) {
    return ((n - (n | 0)) * 0x100000000) | 0
  }

  var n = 2
  var nPrime = 0
  while (nPrime < 64) {
    if (isPrime(n)) {
      K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3))
      nPrime++
    }

    n++
  }
}()

var bytesToWords = function (bytes) {
  var words = []
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32)
  }
  return words
}

var wordsToBytes = function (words) {
  var bytes = []
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF)
  }
  return bytes
}

// Reusable object
var W = []

var processBlock = function (H, M, offset) {
  // Working variables
  var a = H[0], b = H[1], c = H[2], d = H[3]
  var e = H[4], f = H[5], g = H[6], h = H[7]

    // Computation
  for (var i = 0; i < 64; i++) {
    if (i < 16) {
      W[i] = M[offset + i] | 0
    } else {
      var gamma0x = W[i - 15]
      var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
                    ((gamma0x << 14) | (gamma0x >>> 18)) ^
                    (gamma0x >>> 3)

      var gamma1x = W[i - 2];
      var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                    ((gamma1x << 13) | (gamma1x >>> 19)) ^
                    (gamma1x >>> 10)

      W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
    }

    var ch  = (e & f) ^ (~e & g);
    var maj = (a & b) ^ (a & c) ^ (b & c);

    var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
    var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

    var t1 = h + sigma1 + ch + K[i] + W[i];
    var t2 = sigma0 + maj;

    h = g;
    g = f;
    f = e;
    e = (d + t1) | 0;
    d = c;
    c = b;
    b = a;
    a = (t1 + t2) | 0;
  }

  // Intermediate hash value
  H[0] = (H[0] + a) | 0;
  H[1] = (H[1] + b) | 0;
  H[2] = (H[2] + c) | 0;
  H[3] = (H[3] + d) | 0;
  H[4] = (H[4] + e) | 0;
  H[5] = (H[5] + f) | 0;
  H[6] = (H[6] + g) | 0;
  H[7] = (H[7] + h) | 0;
}

function sha256(message, options) {;
  if (message.constructor === String) {
    message = _imports.convertString.UTF8.stringToBytes(message);
  }

  var H =[ 0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
           0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19 ];

  var m = bytesToWords(message);
  var l = message.length * 8;

  m[l >> 5] |= 0x80 << (24 - l % 32);
  m[((l + 64 >> 9) << 4) + 15] = l;

  for (var i=0 ; i<m.length; i += 16) {
    processBlock(H, m, i);
  }

  var digestbytes = wordsToBytes(H);
  return options && options.asBytes ? digestbytes :
         options && options.asString ? _imports.convertString.bytesToString(digestbytes) :
         _imports.bytesToHex(digestbytes)
}

sha256.x2 = function(message, options) {
  return sha256(sha256(message, { asBytes:true }), options)
}

}(this);

},{"convert-hex":"node_modules/convert-hex/convert-hex.js","convert-string":"node_modules/convert-string/convert-string.js"}],"node_modules/ratta/src/core/model/Account.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require("sha256");
var ACCOUNT_TYPE;
(function (ACCOUNT_TYPE) {
    ACCOUNT_TYPE[ACCOUNT_TYPE["ROOT"] = 0] = "ROOT";
    ACCOUNT_TYPE[ACCOUNT_TYPE["GROUP"] = 1] = "GROUP";
    ACCOUNT_TYPE[ACCOUNT_TYPE["ACCOUNT"] = 2] = "ACCOUNT";
})(ACCOUNT_TYPE = exports.ACCOUNT_TYPE || (exports.ACCOUNT_TYPE = {}));
var RtAccount = /** @class */ (function () {
    function RtAccount(_a) {
        var type = _a.type, name = _a.name, password = _a.password, group = _a.group, _b = _a.info, info = _b === void 0 ? new Map() : _b, _c = _a.setting, setting = _c === void 0 ? {} : _c;
        this.type = type;
        this.name = name;
        if (type !== ACCOUNT_TYPE.GROUP) {
            this.password = md5(password);
        }
        this.info = info;
        this.setting = setting;
        this.group = group;
    }
    return RtAccount;
}());
exports.RtAccount = RtAccount;

},{"sha256":"node_modules/sha256/lib/sha256.js"}],"node_modules/dexie-observable/dist/dexie-observable.es.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dexie = _interopRequireDefault(require("dexie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ========================================================================== 
 *                           dexie-observable.js
 * ==========================================================================
 *
 * Dexie addon for observing database changes not just on local db instance
 * but also on other instances, tabs and windows.
 *
 * Comprises a base framework for dexie-syncable.js
 *
 * By David Fahlander, david.fahlander@gmail.com,
 *    Nikolas Poniros, https://github.com/nponiros
 *
 * ==========================================================================
 *
 * Version {version}, {date}
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 * 
 */
function nop() {}

function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);

    if (res && typeof res.then === 'function') {
      var thiz = this,
          args = arguments;
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }

    return f2.apply(this, arguments);
  };
}

function createUUID() {
  // Decent solution from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  var d = Date.now();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}

function initOverrideCreateTransaction(db, wakeupObservers) {
  return function overrideCreateTransaction(origFunc) {
    return function (mode, storenames, dbschema, parent) {
      if (db.dynamicallyOpened()) return origFunc.apply(this, arguments); // Don't observe dynamically opened databases.

      var addChanges = false;

      if (mode === 'readwrite' && storenames.some(function (storeName) {
        return dbschema[storeName] && dbschema[storeName].observable;
      })) {
        // At least one included store is a observable store. Make sure to also include the _changes store.
        addChanges = true;
        storenames = storenames.slice(0); // Clone

        if (storenames.indexOf("_changes") === -1) storenames.push("_changes"); // Otherwise, firefox will hang... (I've reported the bug to Mozilla@Bugzilla)
      } // Call original db._createTransaction()


      var trans = origFunc.call(this, mode, storenames, dbschema, parent); // If this transaction is bound to any observable table, make sure to add changes when transaction completes.

      if (addChanges) {
        trans._lastWrittenRevision = 0;
        trans.on('complete', function () {
          if (trans._lastWrittenRevision) {
            // Changes were written in this transaction.
            if (!parent) {
              // This is root-level transaction, i.e. a physical commit has happened.
              // Delay-trigger a wakeup call:
              if (wakeupObservers.timeoutHandle) clearTimeout(wakeupObservers.timeoutHandle);
              wakeupObservers.timeoutHandle = setTimeout(function () {
                delete wakeupObservers.timeoutHandle;
                wakeupObservers(trans._lastWrittenRevision);
              }, 25);
            } else {
              // This is just a virtual commit of a sub transaction.
              // Wait with waking up observers until root transaction has committed.
              // Make sure to mark root transaction so that it will wakeup observers upon commit.
              var rootTransaction = function findRootTransaction(trans) {
                return trans.parent ? findRootTransaction(trans.parent) : trans;
              }(parent);

              rootTransaction._lastWrittenRevision = Math.max(trans._lastWrittenRevision, rootTransaction.lastWrittenRevision || 0);
            }
          }
        }); // Derive "source" property from parent transaction by default

        if (trans.parent && trans.parent.source) trans.source = trans.parent.source;
      }

      return trans;
    };
  };
}

function initWakeupObservers(db, Observable, localStorage) {
  return function wakeupObservers(lastWrittenRevision) {
    // Make sure Observable.latestRevision[db.name] is still below our value, now when some time has elapsed and other db instances in same window possibly could have made changes too.
    if (Observable.latestRevision[db.name] < lastWrittenRevision) {
      // Set the static property lastRevision[db.name] to the revision of the last written change.
      Observable.latestRevision[db.name] = lastWrittenRevision; // Wakeup ourselves, and any other db instances on this window:

      _dexie.default.ignoreTransaction(function () {
        Observable.on('latestRevisionIncremented').fire(db.name, lastWrittenRevision);
      }); // Observable.on.latestRevisionIncremented will only wakeup db's in current window.
      // We need a storage event to wakeup other windwos.
      // Since indexedDB lacks storage events, let's use the storage event from WebStorage just for
      // the purpose to wakeup db instances in other windows.


      if (localStorage) localStorage.setItem('Dexie.Observable/latestRevision/' + db.name, lastWrittenRevision); // In IE, this will also wakeup our own window. However, onLatestRevisionIncremented will work around this by only running once per revision id.
    }
  };
} // Change Types


var CREATE = 1;
var UPDATE = 2;
var DELETE = 3;

function initCreatingHook(db, table) {
  return function creatingHook(primKey, obj, trans) {
    /// <param name="trans" type="db.Transaction"></param>
    var rv = undefined;

    if (primKey === undefined && table.schema.primKey.uuid) {
      primKey = rv = createUUID();

      if (table.schema.primKey.keyPath) {
        _dexie.default.setByKeyPath(obj, table.schema.primKey.keyPath, primKey);
      }
    }

    var change = {
      source: trans.source || null,
      table: table.name,
      key: primKey === undefined ? null : primKey,
      type: CREATE,
      obj: obj
    };

    var promise = db._changes.add(change).then(function (rev) {
      trans._lastWrittenRevision = Math.max(trans._lastWrittenRevision, rev);
      return rev;
    }); // Wait for onsuccess so that we have the primKey if it is auto-incremented and update the change item if so.


    this.onsuccess = function (resultKey) {
      if (primKey != resultKey) promise._then(function () {
        change.key = resultKey;

        db._changes.put(change);
      });
    };

    this.onerror = function () {
      // If the main operation fails, make sure to regret the change
      promise._then(function (rev) {
        // Will only happen if app code catches the main operation error to prohibit transaction from aborting.
        db._changes.delete(rev);
      });
    };

    return rv;
  };
}

function initUpdatingHook(db, tableName) {
  return function updatingHook(mods, primKey, oldObj, trans) {
    /// <param name="trans" type="db.Transaction"></param>
    // mods may contain property paths with undefined as value if the property
    // is being deleted. Since we cannot persist undefined we need to act
    // like those changes is setting the value to null instead.
    var modsWithoutUndefined = {}; // As of current Dexie version (1.0.3) hook may be called even if it wouldn't really change.
    // Therefore we may do that kind of optimization here - to not add change entries if
    // there's nothing to change.

    var anythingChanged = false;

    var newObj = _dexie.default.deepClone(oldObj);

    for (var propPath in mods) {
      var mod = mods[propPath];

      if (typeof mod === 'undefined') {
        _dexie.default.delByKeyPath(newObj, propPath);

        modsWithoutUndefined[propPath] = null; // Null is as close we could come to deleting a property when not allowing undefined.

        anythingChanged = true;
      } else {
        var currentValue = _dexie.default.getByKeyPath(oldObj, propPath);

        if (mod !== currentValue && JSON.stringify(mod) !== JSON.stringify(currentValue)) {
          _dexie.default.setByKeyPath(newObj, propPath, mod);

          modsWithoutUndefined[propPath] = mod;
          anythingChanged = true;
        }
      }
    }

    if (anythingChanged) {
      var change = {
        source: trans.source || null,
        table: tableName,
        key: primKey,
        type: UPDATE,
        mods: modsWithoutUndefined,
        oldObj: oldObj,
        obj: newObj
      };

      var promise = db._changes.add(change); // Just so we get the correct revision order of the update...


      this.onsuccess = function () {
        promise._then(function (rev) {
          trans._lastWrittenRevision = Math.max(trans._lastWrittenRevision, rev);
        });
      };

      this.onerror = function () {
        // If the main operation fails, make sure to regret the change.
        promise._then(function (rev) {
          // Will only happen if app code catches the main operation error to prohibit transaction from aborting.
          db._changes.delete(rev);
        });
      };
    }
  };
}

function initDeletingHook(db, tableName) {
  return function deletingHook(primKey, obj, trans) {
    /// <param name="trans" type="db.Transaction"></param>
    var promise = db._changes.add({
      source: trans.source || null,
      table: tableName,
      key: primKey,
      type: DELETE,
      oldObj: obj
    }).then(function (rev) {
      trans._lastWrittenRevision = Math.max(trans._lastWrittenRevision, rev);
      return rev;
    }).catch(function (e) {
      console.log(obj);
      console.log(e.stack);
    });

    this.onerror = function () {
      // If the main operation fails, make sure to regret the change.
      // Using _then because if promise is already fullfilled, the standard then() would
      // do setTimeout() and we would loose the transaction.
      promise._then(function (rev) {
        // Will only happen if app code catches the main operation error to prohibit transaction from aborting.
        db._changes.delete(rev);
      });
    };
  };
}

function initCrudMonitor(db) {
  //
  // The Creating/Updating/Deleting hook will make sure any change is stored to the changes table
  //
  return function crudMonitor(table) {
    /// <param name="table" type="db.Table"></param>
    if (table.hook._observing) return;
    table.hook._observing = true;
    var tableName = table.name;
    table.hook('creating').subscribe(initCreatingHook(db, table));
    table.hook('updating').subscribe(initUpdatingHook(db, tableName));
    table.hook('deleting').subscribe(initDeletingHook(db, tableName));
  };
}

function initOnStorage(Observable) {
  return function onStorage(event) {
    // We use the onstorage event to trigger onLatestRevisionIncremented since we will wake up when other windows modify the DB as well!
    if (event.key.indexOf("Dexie.Observable/") === 0) {
      // For example "Dexie.Observable/latestRevision/FriendsDB"
      var parts = event.key.split('/');
      var prop = parts[1];
      var dbname = parts[2];

      if (prop === 'latestRevision') {
        var rev = parseInt(event.newValue, 10);

        if (!isNaN(rev) && rev > Observable.latestRevision[dbname]) {
          Observable.latestRevision[dbname] = rev;

          _dexie.default.ignoreTransaction(function () {
            Observable.on('latestRevisionIncremented').fire(dbname, rev);
          });
        }
      } else if (prop.indexOf("deadnode:") === 0) {
        var nodeID = parseInt(prop.split(':')[1], 10);

        if (event.newValue) {
          Observable.on.suicideNurseCall.fire(dbname, nodeID);
        }
      } else if (prop === 'intercomm') {
        if (event.newValue) {
          Observable.on.intercomm.fire(dbname);
        }
      }
    }
  };
}

function initOverrideOpen(db, SyncNode, crudMonitor) {
  return function overrideOpen(origOpen) {
    return function () {
      //
      // Make sure to subscribe to "creating", "updating" and "deleting" hooks for all observable tables that were created in the stores() method.
      //
      Object.keys(db._allTables).forEach(function (tableName) {
        var table = db._allTables[tableName];

        if (table.schema.observable) {
          crudMonitor(table);
        }

        if (table.name === "_syncNodes") {
          table.mapToClass(SyncNode);
        }
      });
      return origOpen.apply(this, arguments);
    };
  };
}

var Promise = _dexie.default.Promise;

function initIntercomm(db, Observable, SyncNode, mySyncNode, localStorage) {
  //
  // Intercommunication between nodes
  //
  // Enable inter-process communication between browser windows using localStorage storage event (is registered in Dexie.Observable)
  var requestsWaitingForReply = {};
  /**
   * @param {string} type Type of message
   * @param message Message to send
   * @param {number} destinationNode ID of destination node
   * @param {{wantReply: boolean, isFailure: boolean, requestId: number}} options If {wantReply: true}, the returned promise will complete with the reply from remote. Otherwise it will complete when message has been successfully sent.</param>
   */

  db.observable.sendMessage = function (type, message, destinationNode, options) {
    /// <param name="type" type="String">Type of message</param>
    /// <param name="message">Message to send</param>
    /// <param name="destinationNode" type="Number">ID of destination node</param>
    /// <param name="options" type="Object" optional="true">{wantReply: Boolean, isFailure: Boolean, requestId: Number}. If wantReply, the returned promise will complete with the reply from remote. Otherwise it will complete when message has been successfully sent.</param>
    options = options || {};
    if (!mySyncNode.node) return options.wantReply ? Promise.reject(new _dexie.default.DatabaseClosedError()) : Promise.resolve(); // If caller doesn't want a reply, it won't catch errors either.

    var msg = {
      message: message,
      destinationNode: destinationNode,
      sender: mySyncNode.node.id,
      type: type
    };

    _dexie.default.extend(msg, options); // wantReply: wantReply, success: !isFailure, requestId: ...


    return _dexie.default.ignoreTransaction(function () {
      var tables = ["_intercomm"];
      if (options.wantReply) tables.push("_syncNodes"); // If caller wants a reply, include "_syncNodes" in transaction to check that there's a receiver there. Otherwise, new master will get it.

      var promise = db.transaction('rw', tables, function () {
        if (options.wantReply) {
          // Check that there is a receiver there to take the request.
          return db._syncNodes.where('id').equals(destinationNode).count(function (receiverAlive) {
            if (receiverAlive) return db._intercomm.add(msg);else // If we couldn't find a node -> send to master
              return db._syncNodes.where('isMaster').above(0).first(function (masterNode) {
                msg.destinationNode = masterNode.id;
                return db._intercomm.add(msg);
              });
          });
        } else {
          // If caller doesn't need a response, we don't have to make sure that it gets one.
          return db._intercomm.add(msg);
        }
      }).then(function (messageId) {
        var rv = null;

        if (options.wantReply) {
          rv = new Promise(function (resolve, reject) {
            requestsWaitingForReply[messageId.toString()] = {
              resolve: resolve,
              reject: reject
            };
          });
        }

        if (localStorage) {
          localStorage.setItem("Dexie.Observable/intercomm/" + db.name, messageId.toString());
        }

        Observable.on.intercomm.fire(db.name);
        return rv;
      });

      if (!options.wantReply) {
        promise.catch(function () {});
        return;
      } else {
        // Forward rejection to caller if it waits for reply.
        return promise;
      }
    });
  }; // Send a message to all local _syncNodes


  db.observable.broadcastMessage = function (type, message, bIncludeSelf) {
    if (!mySyncNode.node) return;
    var mySyncNodeId = mySyncNode.node.id;

    _dexie.default.ignoreTransaction(function () {
      db._syncNodes.toArray(function (nodes) {
        return Promise.all(nodes.filter(function (node) {
          return node.type === 'local' && (bIncludeSelf || node.id !== mySyncNodeId);
        }).map(function (node) {
          return db.observable.sendMessage(type, message, node.id);
        }));
      }).catch(function () {});
    });
  };

  function consumeIntercommMessages() {
    // Check if we got messages:
    if (!mySyncNode.node) return Promise.reject(new _dexie.default.DatabaseClosedError());
    return _dexie.default.ignoreTransaction(function () {
      return db.transaction('rw', '_intercomm', function () {
        return db._intercomm.where({
          destinationNode: mySyncNode.node.id
        }).toArray(function (messages) {
          messages.forEach(function (msg) {
            return consumeMessage(msg);
          });
          return db._intercomm.where('id').anyOf(messages.map(function (msg) {
            return msg.id;
          })).delete();
        });
      });
    });
  }

  function consumeMessage(msg) {
    if (msg.type === 'response') {
      // This is a response. Lookup pending request and fulfill its promise.
      var request = requestsWaitingForReply[msg.requestId.toString()];

      if (request) {
        if (msg.isFailure) {
          request.reject(msg.message.error);
        } else {
          request.resolve(msg.message.result);
        }

        delete requestsWaitingForReply[msg.requestId.toString()];
      }
    } else {
      // This is a message or request. Fire the event and add an API for the subscriber to use if reply is requested
      msg.resolve = function (result) {
        db.observable.sendMessage('response', {
          result: result
        }, msg.sender, {
          requestId: msg.id
        });
      };

      msg.reject = function (error) {
        db.observable.sendMessage('response', {
          error: error.toString()
        }, msg.sender, {
          isFailure: true,
          requestId: msg.id
        });
      };

      db.on.message.fire(msg);
    }
  } // Listener for 'intercomm' events
  // Gets fired when we get a 'storage' event from local storage or when sendMessage is called
  // 'storage' is used to communicate between tabs (sendMessage changes the localStorage to trigger the event)
  // sendMessage is used to communicate in the same tab and to trigger a storage event


  function onIntercomm(dbname) {
    // When storage event trigger us to check
    if (dbname === db.name) {
      consumeIntercommMessages().catch('DatabaseClosedError', function () {});
    }
  }

  return {
    onIntercomm: onIntercomm,
    consumeIntercommMessages: consumeIntercommMessages
  };
}

function overrideParseStoresSpec(origFunc) {
  return function (stores, dbSchema) {
    // Create the _changes and _syncNodes tables
    stores["_changes"] = "++rev";
    stores["_syncNodes"] = "++id,myRevision,lastHeartBeat,&url,isMaster,type,status";
    stores["_intercomm"] = "++id,destinationNode";
    stores["_uncommittedChanges"] = "++id,node"; // For remote syncing when server returns a partial result.
    // Call default implementation. Will populate the dbSchema structures.

    origFunc.call(this, stores, dbSchema); // Allow UUID primary keys using $$ prefix on primary key or indexes

    Object.keys(dbSchema).forEach(function (tableName) {
      var schema = dbSchema[tableName];

      if (schema.primKey.name.indexOf('$$') === 0) {
        schema.primKey.uuid = true;
        schema.primKey.name = schema.primKey.name.substr(2);
        schema.primKey.keyPath = schema.primKey.keyPath.substr(2);
      }
    }); // Now mark all observable tables

    Object.keys(dbSchema).forEach(function (tableName) {
      // Marked observable tables with "observable" in their TableSchema.
      if (tableName.indexOf('_') !== 0 && tableName.indexOf('$') !== 0) {
        dbSchema[tableName].observable = true;
      }
    });
  };
}

function deleteOldChanges(db) {
  // This is a background job and should never be done within
  // a caller's transaction. Use Dexie.ignoreTransaction() to ensure that.
  // We should not return the Promise but catch it ourselves instead.
  // To prohibit starving the database we want to lock transactions as short as possible
  // and since we're not in a hurry, we could do this job in chunks and reschedule a
  // continuation every 500 ms.
  var CHUNK_SIZE = 100;

  _dexie.default.ignoreTransaction(function () {
    return db._syncNodes.orderBy("myRevision").first(function (oldestNode) {
      return db._changes.where("rev").below(oldestNode.myRevision).limit(CHUNK_SIZE).primaryKeys();
    }).then(function (keysToDelete) {
      if (keysToDelete.length === 0) return; // Done.

      return db._changes.bulkDelete(keysToDelete).then(function () {
        // If not done garbage collecting, reschedule a continuation of it until done.
        if (keysToDelete.length === CHUNK_SIZE) {
          // Limit reached. Changes are there are more job to do. Schedule again:
          setTimeout(function () {
            return db.isOpen() && deleteOldChanges(db);
          }, 500);
        }
      });
    });
  }).catch(function () {// The operation is not crucial. A failure could almost only be due to that database has been closed.
    // No need to log this.
  });
}
/* ==========================================================================
 *                           dexie-observable.js
 * ==========================================================================
 *
 * Dexie addon for observing database changes not just on local db instance
 * but also on other instances, tabs and windows.
 *
 * Comprises a base framework for dexie-syncable.js
 *
 * By David Fahlander, david.fahlander@gmail.com,
 *    Nikolas Poniros, https://github.com/nponiros
 *
 * ==========================================================================
 *
 * Version {version}, {date}
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 *
 */


var global = self;
/** class DatabaseChange
    *
    *  Object contained by the _changes table.
    */

var DatabaseChange = _dexie.default.defineClass({
  rev: Number,
  source: String,
  table: String,
  key: Object,
  type: Number,
  obj: Object,
  mods: Object,
  oldObj: Object // DELETE: oldObj contains the object deleted. UPDATE: oldObj contains the old object before updates applied.

}); // Import some usable helper functions


var override = _dexie.default.override;
var Promise$1 = _dexie.default.Promise;
var browserIsShuttingDown = false;

function Observable(db) {
  /// <summary>
  ///   Extension to Dexie providing Syncronization capabilities to Dexie.
  /// </summary>
  /// <param name="db" type="Dexie"></param>
  var NODE_TIMEOUT = 20000,
      // 20 seconds before local db instances are timed out. This is so that old changes can be deleted when not needed and to garbage collect old _syncNodes objects.
  HIBERNATE_GRACE_PERIOD = 20000,
      // 20 seconds
  // LOCAL_POLL: The time to wait before polling local db for changes and cleaning up old nodes. 
  // Polling for changes is a fallback only needed in certain circomstances (when the onstorage event doesnt reach all listeners - when different browser windows doesnt share the same process)
  LOCAL_POLL = 500,
      // 500 ms. In real-world there will be this value + the time it takes to poll(). A small value is needed in Workers where we cannot rely on storage event.
  HEARTBEAT_INTERVAL = NODE_TIMEOUT - 5000;
  var localStorage = Observable.localStorageImpl;
  /** class SyncNode
      *
      * Object contained in the _syncNodes table.
      */

  var SyncNode = _dexie.default.defineClass({
    //id: Number,
    myRevision: Number,
    type: String,
    lastHeartBeat: Number,
    deleteTimeStamp: Number,
    url: String,
    isMaster: Number,
    // Below properties should be extended in Dexie.Syncable. Not here. They apply to remote nodes only (type == "remote"):
    syncProtocol: String,
    syncContext: null,
    syncOptions: Object,
    connected: false,
    status: Number,
    appliedRemoteRevision: null,
    remoteBaseRevisions: [{
      local: Number,
      remote: null
    }],
    dbUploadState: {
      tablesToUpload: [String],
      currentTable: String,
      currentKey: null,
      localBaseRevision: Number
    }
  });

  db.observable = {};
  db.observable.SyncNode = SyncNode;
  var wakeupObservers = initWakeupObservers(db, Observable, localStorage);
  var overrideCreateTransaction = initOverrideCreateTransaction(db, wakeupObservers);
  var crudMonitor = initCrudMonitor(db);
  var overrideOpen = initOverrideOpen(db, SyncNode, crudMonitor);
  var mySyncNode = {
    node: null
  };
  var intercomm = initIntercomm(db, Observable, SyncNode, mySyncNode, localStorage);
  var onIntercomm = intercomm.onIntercomm;
  var consumeIntercommMessages = intercomm.consumeIntercommMessages; // Allow other addons to access the local sync node. May be needed by Dexie.Syncable.

  Object.defineProperty(db, "_localSyncNode", {
    get: function () {
      return mySyncNode.node;
    }
  });
  var pollHandle = null,
      heartbeatHandle = null;

  if (_dexie.default.fake) {
    // This code will never run.
    // It's here just to enable auto-complete in visual studio - helps a lot when writing code.
    db.version(1).stores({
      _syncNodes: "++id,myRevision,lastHeartBeat",
      _changes: "++rev",
      _intercomm: "++id,destinationNode",
      _uncommittedChanges: "++id,node"
    });

    db._syncNodes.mapToClass(SyncNode);

    db._changes.mapToClass(DatabaseChange);

    mySyncNode.node = new SyncNode({
      myRevision: 0,
      type: "local",
      lastHeartBeat: Date.now(),
      deleteTimeStamp: null
    });
  } //
  // Override parsing the stores to add "_changes" and "_syncNodes" tables.
  // It also adds UUID support for the primary key and sets tables as observable tables.
  //


  db.Version.prototype._parseStoresSpec = override(db.Version.prototype._parseStoresSpec, overrideParseStoresSpec); // changes event on db:

  db.on.addEventType({
    changes: 'asap',
    cleanup: [promisableChain, nop],
    message: 'asap'
  }); //
  // Override transaction creation to always include the "_changes" store when any observable store is involved.
  //

  db._createTransaction = override(db._createTransaction, overrideCreateTransaction); // If Observable.latestRevsion[db.name] is undefined, set it to 0 so that comparing against it always works.
  // You might think that it will always be undefined before this call, but in case another Dexie instance in the same
  // window with the same database name has been created already, this static property will already be set correctly.

  Observable.latestRevision[db.name] = Observable.latestRevision[db.name] || 0; //
  // Override open to setup hooks for db changes and map the _syncNodes table to class
  //

  db.open = override(db.open, overrideOpen);
  db.close = override(db.close, function (origClose) {
    return function () {
      if (db.dynamicallyOpened()) return origClose.apply(this, arguments); // Don't observe dynamically opened databases.
      // Teardown our framework.

      if (wakeupObservers.timeoutHandle) {
        clearTimeout(wakeupObservers.timeoutHandle);
        delete wakeupObservers.timeoutHandle;
      }

      Observable.on('latestRevisionIncremented').unsubscribe(onLatestRevisionIncremented);
      Observable.on('suicideNurseCall').unsubscribe(onSuicide);
      Observable.on('intercomm').unsubscribe(onIntercomm);
      Observable.on('beforeunload').unsubscribe(onBeforeUnload); // Inform other db instances in same window that we are dying:

      if (mySyncNode.node && mySyncNode.node.id) {
        Observable.on.suicideNurseCall.fire(db.name, mySyncNode.node.id); // Inform other windows as well:

        if (localStorage) {
          localStorage.setItem('Dexie.Observable/deadnode:' + mySyncNode.node.id.toString() + '/' + db.name, "dead"); // In IE, this will also wakeup our own window. cleanup() may trigger twice per other db instance. But that doesnt to anything.
        }

        mySyncNode.node.deleteTimeStamp = 1; // One millisecond after 1970. Makes it occur in the past but still keeps it truthy.

        mySyncNode.node.lastHeartBeat = 0;

        db._syncNodes.put(mySyncNode.node); // This async operation may be cancelled since the browser is closing down now.


        mySyncNode.node = null;
      }

      if (pollHandle) clearTimeout(pollHandle);
      pollHandle = null;
      if (heartbeatHandle) clearTimeout(heartbeatHandle);
      heartbeatHandle = null;
      return origClose.apply(this, arguments);
    };
  }); // Override Dexie.delete() in order to delete Observable.latestRevision[db.name].

  db.delete = override(db.delete, function (origDelete) {
    return function () {
      return origDelete.apply(this, arguments).then(function (result) {
        // Reset Observable.latestRevision[db.name]
        Observable.latestRevision[db.name] = 0;
        return result;
      });
    };
  }); // When db opens, make sure to start monitor any changes before other db operations will start.

  db.on("ready", function startObserving() {
    if (db.dynamicallyOpened()) return db; // Don't observe dynamically opened databases.

    return db.table("_changes").orderBy("rev").last(function (lastChange) {
      // Since startObserving() is called before database open() method, this will be the first database operation enqueued to db.
      // Therefore we know that the retrieved value will be This query will
      var latestRevision = lastChange ? lastChange.rev : 0;
      mySyncNode.node = new SyncNode({
        myRevision: latestRevision,
        type: "local",
        lastHeartBeat: Date.now(),
        deleteTimeStamp: null,
        isMaster: 0
      });

      if (Observable.latestRevision[db.name] < latestRevision) {
        // Side track . For correctness whenever setting Observable.latestRevision[db.name] we must make sure the event is fired if increased:
        // There are other db instances in same window that hasnt yet been informed about a new revision
        Observable.latestRevision[db.name] = latestRevision;

        _dexie.default.ignoreTransaction(function () {
          Observable.on.latestRevisionIncremented.fire(latestRevision);
        });
      } // Add new sync node or if this is a reopening of the database after a close() call, update it.


      return db.transaction('rw', '_syncNodes', function () {
        return db._syncNodes.where('isMaster').equals(1).first(function (currentMaster) {
          if (!currentMaster) {
            // There's no master. We must be the master
            mySyncNode.node.isMaster = 1;
          } else if (currentMaster.lastHeartBeat < Date.now() - NODE_TIMEOUT) {
            // Master have been inactive for too long
            // Take over mastership
            mySyncNode.node.isMaster = 1;
            currentMaster.isMaster = 0;
            return db._syncNodes.put(currentMaster);
          }
        }).then(function () {
          // Add our node to DB and start subscribing to events
          return db._syncNodes.add(mySyncNode.node).then(function () {
            Observable.on('latestRevisionIncremented', onLatestRevisionIncremented); // Wakeup when a new revision is available.

            Observable.on('beforeunload', onBeforeUnload);
            Observable.on('suicideNurseCall', onSuicide);
            Observable.on('intercomm', onIntercomm); // Start polling for changes and do cleanups:

            pollHandle = setTimeout(poll, LOCAL_POLL); // Start heartbeat

            heartbeatHandle = setTimeout(heartbeat, HEARTBEAT_INTERVAL);
          });
        });
      }).then(function () {
        cleanup();
      });
    });
  }, true); // True means the on(ready) event will survive a db reopening (db.close() / db.open()).

  var handledRevision = 0;

  function onLatestRevisionIncremented(dbname, latestRevision) {
    if (dbname === db.name) {
      if (handledRevision >= latestRevision) return; // Make sure to only run once per revision. (Workaround for IE triggering storage event on same window)

      handledRevision = latestRevision;

      _dexie.default.vip(function () {
        readChanges(latestRevision).catch('DatabaseClosedError', function () {// Handle database closed error gracefully while reading changes.
          // Don't trigger 'unhandledrejection'.
          // Even though we intercept the close() method, it might be called when in the middle of
          // reading changes and then that flow will cancel with DatabaseClosedError.
        });
      });
    }
  }

  function readChanges(latestRevision, recursion, wasPartial) {
    // Whenever changes are read, fire db.on("changes") with the array of changes. Eventually, limit the array to 1000 entries or so (an entire database is
    // downloaded from server AFTER we are initiated. For example, if first sync call fails, then after a while we get reconnected. However, that scenario
    // should be handled in case database is totally empty we should fail if sync is not available)
    if (!recursion && readChanges.ongoingOperation) {
      // We are already reading changes. Prohibit a parallell execution of this which would lead to duplicate trigging of 'changes' event.
      // Instead, the callback in toArray() will always check Observable.latestRevision[db.name] to see if it has changed and if so, re-launch readChanges().
      // The caller should get the Promise instance from the ongoing operation so that the then() method will resolve when operation is finished.
      return readChanges.ongoingOperation;
    }

    var partial = false;
    var ourSyncNode = mySyncNode.node; // Because mySyncNode can suddenly be set to null on database close, and worse, can be set to a new value if database is reopened.

    if (!ourSyncNode) {
      return Promise$1.reject(new _dexie.default.DatabaseClosedError());
    }

    var LIMIT = 1000;

    var promise = db._changes.where("rev").above(ourSyncNode.myRevision).limit(LIMIT).toArray(function (changes) {
      if (changes.length > 0) {
        var lastChange = changes[changes.length - 1];
        partial = changes.length === LIMIT;
        db.on('changes').fire(changes, partial);
        ourSyncNode.myRevision = lastChange.rev;
      } else if (wasPartial) {
        // No more changes, BUT since we have triggered on('changes') with partial = true,
        // we HAVE TO trigger changes again with empty list and partial = false
        db.on('changes').fire([], false);
      }

      var ourNodeStillExists = false;
      return db._syncNodes.where(':id').equals(ourSyncNode.id).modify(function (syncNode) {
        ourNodeStillExists = true;
        syncNode.lastHeartBeat = Date.now(); // Update heart beat (not nescessary, but why not!)

        syncNode.deleteTimeStamp = null; // Reset "deleteTimeStamp" flag if it was there.

        syncNode.myRevision = Math.max(syncNode.myRevision, ourSyncNode.myRevision);
      }).then(function () {
        return ourNodeStillExists;
      });
    }).then(function (ourNodeStillExists) {
      if (!ourNodeStillExists) {
        // My node has been deleted. We must have been lazy and got removed by another node.
        if (browserIsShuttingDown) {
          throw new Error("Browser is shutting down");
        } else {
          db.close();
          console.error("Out of sync"); // TODO: What to do? Reload the page?

          if (global.location) global.location.reload(true);
          throw new Error("Out of sync"); // Will make current promise reject
        }
      } // Check if more changes have come since we started reading changes in the first place. If so, relaunch readChanges and let the ongoing promise not
      // resolve until all changes have been read.


      if (partial || Observable.latestRevision[db.name] > ourSyncNode.myRevision) {
        // Either there were more than 1000 changes or additional changes where added while we were reading these changes,
        // In either case, call readChanges() again until we're done.
        return readChanges(Observable.latestRevision[db.name], (recursion || 0) + 1, partial);
      }
    }).finally(function () {
      delete readChanges.ongoingOperation;
    });

    if (!recursion) {
      readChanges.ongoingOperation = promise;
    }

    return promise;
  }
  /**
   * The reason we need heartbeat in parallell with poll() is due to the risk of long-running
   * transactions while syncing changes from server to client in Dexie.Syncable. That transaction will
   * include _changes (which will block readChanges()) but not _syncNodes. So this heartbeat will go on
   * during that changes are being applied and update our lastHeartBeat property while poll() is waiting.
   * When cleanup() (who also is blocked by the sync) wakes up, it won't kill the master node because this
   * heartbeat job will have updated the master node's heartbeat during the long-running sync transaction.
   *
   * If we did not have this heartbeat, and a server send lots of changes that took more than NODE_TIMEOUT
   * (20 seconds), another node waking up after the sync would kill the master node and take over because
   * it would believe it was dead.
   */


  function heartbeat() {
    heartbeatHandle = null;
    var currentInstance = mySyncNode.node && mySyncNode.node.id;
    if (!currentInstance) return;
    db.transaction('rw!', db._syncNodes, function () {
      db._syncNodes.where({
        id: currentInstance
      }).first(function (ourSyncNode) {
        if (!ourSyncNode) {
          // We do not exist anymore. Call db.close() to teardown polls etc.
          if (db.isOpen()) db.close();
          return;
        }

        ourSyncNode.lastHeartBeat = Date.now();
        ourSyncNode.deleteTimeStamp = null; // Reset "deleteTimeStamp" flag if it was there.

        return db._syncNodes.put(ourSyncNode);
      });
    }).catch('DatabaseClosedError', function () {// Ignore silently
    }).finally(function () {
      if (mySyncNode.node && mySyncNode.node.id === currentInstance && db.isOpen()) {
        heartbeatHandle = setTimeout(heartbeat, HEARTBEAT_INTERVAL);
      }
    });
  }

  function poll() {
    pollHandle = null;
    var currentInstance = mySyncNode.node && mySyncNode.node.id;
    if (!currentInstance) return;

    _dexie.default.vip(function () {
      readChanges(Observable.latestRevision[db.name]).then(cleanup).then(consumeIntercommMessages).catch('DatabaseClosedError', function () {// Handle database closed error gracefully while reading changes.
        // Don't trigger 'unhandledrejection'.
        // Even though we intercept the close() method, it might be called when in the middle of
        // reading changes and then that flow will cancel with DatabaseClosedError.
      }).finally(function () {
        // Poll again in given interval:
        if (mySyncNode.node && mySyncNode.node.id === currentInstance && db.isOpen()) {
          pollHandle = setTimeout(poll, LOCAL_POLL);
        }
      });
    });
  }

  function cleanup() {
    var ourSyncNode = mySyncNode.node;
    if (!ourSyncNode) return Promise$1.reject(new _dexie.default.DatabaseClosedError());
    return db.transaction('rw', '_syncNodes', '_changes', '_intercomm', function () {
      // Cleanup dead local nodes that has no heartbeat for over a minute
      // Dont do the following:
      //nodes.where("lastHeartBeat").below(Date.now() - NODE_TIMEOUT).and(function (node) { return node.type == "local"; }).delete();
      // Because client may have been in hybernate mode and recently woken up. That would lead to deletion of all nodes.
      // Instead, we should mark any old nodes for deletion in a minute or so. If they still dont wakeup after that minute we could consider them dead.
      var weBecameMaster = false;

      db._syncNodes.where("lastHeartBeat").below(Date.now() - NODE_TIMEOUT).filter(function (node) {
        return node.type === 'local';
      }).modify(function (node) {
        if (node.deleteTimeStamp && node.deleteTimeStamp < Date.now()) {
          // Delete the node.
          delete this.value; // Cleanup localStorage "deadnode:" entry for this node (localStorage API was used to wakeup other windows (onstorage event) - an event type missing in indexedDB.)

          if (localStorage) {
            localStorage.removeItem('Dexie.Observable/deadnode:' + node.id + '/' + db.name);
          } // Check if we are deleting a master node


          if (node.isMaster) {
            // The node we are deleting is master. We must take over that role.
            // OK to call nodes.update(). No need to call Dexie.vip() because nodes is opened in existing transaction!
            db._syncNodes.update(ourSyncNode, {
              isMaster: 1
            });

            weBecameMaster = true;
          } // Cleanup intercomm messages destinated to the node being deleted.
          // Those that waits for reply should be redirected to us.


          db._intercomm.where({
            destinationNode: node.id
          }).modify(function (msg) {
            if (msg.wantReply) msg.destinationNode = ourSyncNode.id;else // Delete the message from DB and if someone is waiting for reply, let ourselved answer the request.
              delete this.value;
          });
        } else if (!node.deleteTimeStamp) {
          // Mark the node for deletion
          node.deleteTimeStamp = Date.now() + HIBERNATE_GRACE_PERIOD;
        }
      }).then(function () {
        // Cleanup old revisions that no node is interested of.
        Observable.deleteOldChanges(db);
        return db.on("cleanup").fire(weBecameMaster);
      });
    });
  }

  function onBeforeUnload() {
    // Mark our own sync node for deletion.
    if (!mySyncNode.node) return;
    browserIsShuttingDown = true;
    mySyncNode.node.deleteTimeStamp = 1; // One millisecond after 1970. Makes it occur in the past but still keeps it truthy.

    mySyncNode.node.lastHeartBeat = 0;

    db._syncNodes.put(mySyncNode.node); // This async operation may be cancelled since the browser is closing down now.


    Observable.wereTheOneDying = true; // If other nodes in same window wakes up by this call, make sure they dont start taking over mastership and stuff...
    // Inform other windows that we're gone, so that they may take over our role if needed. Setting localStorage item below will trigger Observable.onStorage, which will trigger onSuicie() below:

    if (localStorage) {
      localStorage.setItem('Dexie.Observable/deadnode:' + mySyncNode.node.id.toString() + '/' + db.name, "dead"); // In IE, this will also wakeup our own window. However, that is doublechecked in nursecall subscriber below.
    }
  }

  function onSuicide(dbname, nodeID) {
    if (dbname === db.name && !Observable.wereTheOneDying) {
      // Make sure it's dead indeed. Second bullet. Why? Because it has marked itself for deletion in the onbeforeunload event, which is fired just before window dies.
      // It's own call to put() may have been cancelled.
      // Note also that in IE, this event may be called twice, but that doesnt harm!
      _dexie.default.vip(function () {
        db._syncNodes.update(nodeID, {
          deleteTimeStamp: 1,
          lastHeartBeat: 0
        }).then(cleanup);
      });
    }
  }
} //
// Static properties and methods
// 


Observable.latestRevision = {}; // Latest revision PER DATABASE. Example: Observable.latestRevision.FriendsDB = 37;

Observable.on = _dexie.default.Events(null, "latestRevisionIncremented", "suicideNurseCall", "intercomm", "beforeunload"); // fire(dbname, value);

Observable.createUUID = createUUID;
Observable.deleteOldChanges = deleteOldChanges;
Observable._onStorage = initOnStorage(Observable);

Observable._onBeforeUnload = function () {
  Observable.on.beforeunload.fire();
};

try {
  Observable.localStorageImpl = global.localStorage;
} catch (ex) {} //
// Map window events to static events in Dexie.Observable:
//


if (global.addEventListener) {
  global.addEventListener("storage", Observable._onStorage);
  global.addEventListener("beforeunload", Observable._onBeforeUnload);
} // Register addon:


_dexie.default.Observable = Observable;

_dexie.default.addons.push(Observable);

var _default = Observable;
exports.default = _default;
},{"dexie":"node_modules/dexie/dist/dexie.es.js"}],"node_modules/ratta/src/core/model/State.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RtState = /** @class */ (function () {
    function RtState(name, accountId, setting) {
        this.name = name;
        this.accountId = accountId;
        this.setting = setting;
    }
    return RtState;
}());
exports.RtState = RtState;

},{}],"node_modules/ratta/src/core/service/RtDB/index.ts":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var File_1 = require("../../model/File");
var DBVersions_1 = __importDefault(require("../../../config/DBVersions"));
var annotation_1 = require("../../annotation");
var Account_1 = require("../../model/Account");
require("dexie-observable");
var State_1 = require("../../model/State");
var dexie_1 = __importDefault(require("dexie"));
/**
 * files等数据声明存在 /src/config/DBVersions.js 中，需要加个单元测试防止对不上
 */
var RtDB = /** @class */ (function (_super) {
    __extends(RtDB, _super);
    function RtDB() {
        var _this = _super.call(this, "RtDB") || this;
        if (_this.states === undefined) {
            _this.init();
        }
        return _this;
    }
    RtDB.prototype.init = function () {
        for (var i = 0; i < DBVersions_1.default.length; i++) {
            this.version(i + 1).stores(DBVersions_1.default[i]);
        }
        this.files.mapToClass(File_1.RtFile);
        this.accounts.mapToClass(Account_1.RtAccount);
        this.states.mapToClass(State_1.RtState);
    };
    RtDB = __decorate([
        annotation_1.instance
    ], RtDB);
    return RtDB;
}(dexie_1.default));
exports.RtDB = RtDB;

},{"../../model/File":"node_modules/ratta/src/core/model/File.ts","../../../config/DBVersions":"node_modules/ratta/src/config/DBVersions.js","../../annotation":"node_modules/ratta/src/core/annotation/index.ts","../../model/Account":"node_modules/ratta/src/core/model/Account.ts","dexie-observable":"node_modules/dexie-observable/dist/dexie-observable.es.js","../../model/State":"node_modules/ratta/src/core/model/State.ts","dexie":"node_modules/dexie/dist/dexie.es.js"}],"node_modules/ratta/src/core/service/FileService.ts":[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var File_1 = require("../model/File");
var annotation_1 = require("../annotation");
var dexie_1 = __importDefault(require("dexie"));
var RtDB_1 = require("./RtDB");
var index_1 = require("../../index");
var UNKNOWN = 'unknown';
var FileService = /** @class */ (function () {
    function FileService() {
        this.files = new RtDB_1.RtDB().files;
    }
    FileService.prototype.addFile = function (file, put) {
        if (put === void 0) { put = false; }
        return __awaiter(this, void 0, void 0, function () {
            var owner, group;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, index_1.state.getItem('$CURRENT_ACCOUNT.name', 1)];
                    case 1:
                        owner = _a.sent();
                        return [4 /*yield*/, index_1.state.getItem('$CURRENT_ACCOUNT.group.name', 1)];
                    case 2:
                        group = _a.sent();
                        file.createBy = owner || UNKNOWN;
                        file.owner = owner || UNKNOWN;
                        file.group = group || UNKNOWN;
                        if (put) {
                            return [2 /*return*/, this.files.put(file)];
                        }
                        else {
                            return [2 /*return*/, this.files.add(file)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileService.prototype.bulkAddFile = function (files, put) {
        if (put === void 0) { put = false; }
        return __awaiter(this, void 0, dexie_1.default.Promise, function () {
            var db, owner, group;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = new RtDB_1.RtDB();
                        return [4 /*yield*/, index_1.state.getItem('$CURRENT_ACCOUNT.name', 1)];
                    case 1:
                        owner = _a.sent();
                        return [4 /*yield*/, index_1.state.getItem('$CURRENT_ACCOUNT.group.name', 1)];
                    case 2:
                        group = _a.sent();
                        index_1.state.getItem('$CURRENT_ACCOUNT.name', 1).then(function (createBy) {
                            files.forEach(function (file) {
                                file.createBy = createBy || UNKNOWN;
                                file.owner = owner || UNKNOWN;
                                file.group = group || UNKNOWN;
                            });
                        });
                        return [2 /*return*/, db.transaction('rw', [db.files], function () {
                                if (put) {
                                    return db.files.bulkPut(files).then();
                                }
                                else {
                                    return db.files.bulkAdd(files).then();
                                }
                            })];
                }
            });
        });
    };
    FileService.prototype.bulkDeleteFile = function (files, forever) {
        var _this = this;
        var db = new RtDB_1.RtDB();
        function action(obj, forever) {
            if (forever) {
                return obj.delete();
            }
            else {
                return obj.modify({
                    isDeleted: true,
                    absolutePath: obj.absolutePath + '$'
                });
            }
        }
        return db.transaction('rw', [db.files], function () {
            var arr = [];
            files.forEach(function (r) {
                arr.push(action(_this.getSubFileByPath(r, File_1.RtFile.MAX_FILE_LEVEL), forever), action(_this.files.where('absolutePath').equals(r), forever));
            });
            return dexie_1.default.Promise.all(arr);
        });
    };
    FileService.prototype.updateFile = function (abPath, change) {
        var attr = '';
        if (Object.keys(change).some(function (v) {
            attr = v;
            return v in File_1.RtFile.READONLY_ATTR;
        })) {
            throw new Error(attr + " cannot be changed");
        }
        change.updateTime = new Date();
        change.updateBy = new Date();
        return this.files.where({
            absolutePath: abPath
        }).modify(change);
    };
    FileService.prototype.getFileByPath = function (path) {
        return this.files.where('absolutePath').equals(path).first();
    };
    FileService.prototype.getSubFileByPath = function (path, subLevel) {
        if (subLevel === void 0) { subLevel = 1; }
        if (!path.endsWith('/')) {
            path += '/';
        }
        var len = path.split('/').length;
        if (path === '//') {
            --len;
        }
        var filter;
        if (subLevel > 0) {
            filter = function (r) { return r.level > len - 1 && r.level < len + subLevel; };
        }
        else {
            throw new Error('subLevel must above 0');
        }
        return this.files.where('absolutePath').startsWith(path).and(filter);
    };
    FileService.prototype.getFileById = function (id) {
        return this.files.get({
            id: id
        });
    };
    FileService = __decorate([
        annotation_1.instance
    ], FileService);
    return FileService;
}());
exports.default = FileService;

},{"../model/File":"node_modules/ratta/src/core/model/File.ts","../annotation":"node_modules/ratta/src/core/annotation/index.ts","dexie":"node_modules/dexie/dist/dexie.es.js","./RtDB":"node_modules/ratta/src/core/service/RtDB/index.ts","../../index":"node_modules/ratta/src/index.ts"}],"node_modules/ratta/src/core/controller/FileController.ts":[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileService_1 = __importDefault(require("../service/FileService"));
var File_1 = require("../model/File");
var annotation_1 = require("../annotation");
var FileController = /** @class */ (function () {
    function FileController() {
        this.fileService = new FileService_1.default();
    }
    FileController.prototype.addFile = function (file, force) {
        if (force === void 0) { force = false; }
        return this.fileService.addFile(new File_1.RtFile(file), force);
    };
    FileController.prototype.bulkAddFile = function (files, force) {
        if (force === void 0) { force = false; }
        return this.fileService.bulkAddFile(files.map(function (r) { return new File_1.RtFile(r); }), force);
    };
    FileController.prototype.bulkDeleteFile = function (files, forever) {
        if (forever === void 0) { forever = false; }
        return this.fileService.bulkDeleteFile(files, forever);
    };
    FileController.prototype.getFileByPath = function (path) {
        return this.fileService.getFileByPath(path);
    };
    FileController.prototype.getSubFileByPath = function (path, subLevel) {
        if (subLevel === void 0) { subLevel = 1; }
        return this.fileService.getSubFileByPath(path, subLevel).toArray();
    };
    FileController.prototype.getFileById = function (id) {
        return this.fileService.getFileById(id);
    };
    FileController.prototype.saveContent = function (abPath, content) {
        this.fileService.updateFile(abPath, {
            content: content
        });
    };
    FileController.prototype.moveFile = function (abPath, newPath) {
        return this.fileService.updateFile(abPath, {
            absolutePath: newPath
        });
    };
    FileController = __decorate([
        annotation_1.instance
    ], FileController);
    return FileController;
}());
exports.FileController = FileController;

},{"../service/FileService":"node_modules/ratta/src/core/service/FileService.ts","../model/File":"node_modules/ratta/src/core/model/File.ts","../annotation":"node_modules/ratta/src/core/annotation/index.ts"}],"node_modules/ratta/src/core/service/AccountService.ts":[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../annotation");
var RtDB_1 = require("./RtDB");
var Account_1 = require("../model/Account");
var md5 = require("sha256");
var dfs = [];
dfs[Account_1.ACCOUNT_TYPE.ACCOUNT] = {};
dfs[Account_1.ACCOUNT_TYPE.GROUP] = {};
dfs[Account_1.ACCOUNT_TYPE.ROOT] = {};
// fixme 这个应该是getItem获取$SYSTEM的设置
var defaultGroup = {
    name: '1'
};
exports.defaultSetting = dfs;
var AccountService = /** @class */ (function () {
    function AccountService() {
        this.accounts = new RtDB_1.RtDB().accounts;
    }
    AccountService.prototype.addAccount = function (name, password, info, group) {
        if (info === void 0) { info = new Map(); }
        return this.accounts.add(new Account_1.RtAccount({
            name: name,
            password: password,
            type: Account_1.ACCOUNT_TYPE.ACCOUNT,
            info: info,
            setting: exports.defaultSetting[Account_1.ACCOUNT_TYPE.ACCOUNT],
            group: defaultGroup.name
        }));
    };
    AccountService.prototype.addGroup = function (name, info) {
        if (info === void 0) { info = new Map(); }
        return this.accounts.add(new Account_1.RtAccount({
            name: name,
            type: Account_1.ACCOUNT_TYPE.GROUP,
            info: info,
            setting: exports.defaultSetting[Account_1.ACCOUNT_TYPE.GROUP]
        }));
    };
    AccountService.prototype.login = function (name, password) {
        return this.accounts.where({
            name: name, password: md5(password)
        }).and(function (v) { return v.type !== 1; }).first();
    };
    AccountService = __decorate([
        annotation_1.instance
    ], AccountService);
    return AccountService;
}());
exports.default = AccountService;

},{"../annotation":"node_modules/ratta/src/core/annotation/index.ts","./RtDB":"node_modules/ratta/src/core/service/RtDB/index.ts","../model/Account":"node_modules/ratta/src/core/model/Account.ts","sha256":"node_modules/sha256/lib/sha256.js"}],"node_modules/ratta/src/core/controller/AccountController.ts":[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../annotation");
var AccountService_1 = __importDefault(require("../service/AccountService"));
var AccountController = /** @class */ (function () {
    function AccountController() {
        this.accountService = new AccountService_1.default();
    }
    AccountController.prototype.addAccount = function (name, password, info, group) {
        if (info === void 0) { info = new Map(); }
        return this.accountService.addAccount(name, password, info, group);
    };
    AccountController.prototype.addGroup = function (name, info) {
        if (info === void 0) { info = new Map(); }
        return this.accountService.addGroup(name, info);
    };
    AccountController.prototype.login = function (name, password) {
        return this.accountService.login(name, password);
    };
    AccountController = __decorate([
        annotation_1.instance
    ], AccountController);
    return AccountController;
}());
exports.AccountController = AccountController;

},{"../annotation":"node_modules/ratta/src/core/annotation/index.ts","../service/AccountService":"node_modules/ratta/src/core/service/AccountService.ts"}],"node_modules/ratta/src/util/common.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatenull = validatenull;

/**
 * 判断是否为空
 */
function validatenull(val) {
  if (typeof val == 'boolean') {
    return false;
  }

  if (typeof val == 'number') {
    return false;
  }

  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
    return false;
  }

  return false;
}
},{}],"node_modules/ratta/src/util/store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearStore = exports.getAllStore = exports.removeStore = exports.getStore = exports.setStore = void 0;

var _common = require("./common");

const keyName = 'rt_';
/**
 * 存储localStorage
 */

const setStore = (params = {}) => {
  let {
    name,
    content,
    type
  } = params;
  name = keyName + name;
  let obj = {
    dataType: typeof content,
    content: content,
    type: type,
    datetime: new Date().getTime()
  };
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj));else window.localStorage.setItem(name, JSON.stringify(obj));
};
/**
 * 获取localStorage
 */


exports.setStore = setStore;

const getStore = (params = {}) => {
  let {
    name,
    debug
  } = params;
  name = keyName + name;
  let obj = {},
      content;
  obj = window.sessionStorage.getItem(name);
  if ((0, _common.validatenull)(obj)) obj = window.localStorage.getItem(name);
  if ((0, _common.validatenull)(obj)) return;

  try {
    obj = JSON.parse(obj);
  } catch {
    return obj;
  }

  if (debug) {
    return obj;
  }

  if (obj.dataType == 'string') {
    content = obj.content;
  } else if (obj.dataType == 'number') {
    content = Number(obj.content);
  } else if (obj.dataType == 'boolean') {
    content = eval(obj.content);
  } else if (obj.dataType == 'object') {
    content = obj.content;
  }

  return content;
};
/**
 * 删除localStorage
 */


exports.getStore = getStore;

const removeStore = (params = {}) => {
  let {
    name,
    type
  } = params;
  name = keyName + name;

  if (type) {
    window.sessionStorage.removeItem(name);
  } else {
    window.localStorage.removeItem(name);
  }
};
/**
 * 获取全部localStorage
 */


exports.removeStore = removeStore;

const getAllStore = (params = {}) => {
  let list = [];
  let {
    type
  } = params;

  if (type) {
    for (let i = 0; i <= window.sessionStorage.length; i++) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      });
    }
  } else {
    for (let i = 0; i <= window.localStorage.length; i++) {
      list.push({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.localStorage.key(i)
        })
      });
    }
  }

  return list;
};
/**
 * 清空全部localStorage
 */


exports.getAllStore = getAllStore;

const clearStore = (params = {}) => {
  let {
    type
  } = params;

  if (type) {
    window.sessionStorage.clear();
  } else {
    window.localStorage.clear();
  }
};

exports.clearStore = clearStore;
},{"./common":"node_modules/ratta/src/util/common.js"}],"node_modules/ratta/src/core/service/StateService.ts":[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../annotation");
var RtDB_1 = require("./RtDB");
var State_1 = require("../model/State");
exports.DEFAULT_STATE_ACCOUNTID = 65534;
var StateService = /** @class */ (function () {
    function StateService() {
        this.state = new RtDB_1.RtDB().states;
    }
    StateService.prototype.getState = function (_a) {
        var name = _a.name, accountId = _a.accountId;
        return this.state.where({ name: name, accountId: accountId || exports.DEFAULT_STATE_ACCOUNTID }).first();
    };
    StateService.prototype.setState = function (_a, changes) {
        var name = _a.name, accountId = _a.accountId;
        var setting = Object.keys(changes).reduce(function (prev, key) {
            prev["setting." + key] = changes[key];
            return prev;
        }, {});
        return this.state.where({ name: name, accountId: accountId || exports.DEFAULT_STATE_ACCOUNTID }).modify(setting);
    };
    StateService.prototype.putState = function (_a, setting) {
        var _this = this;
        var name = _a.name, accountId = _a.accountId;
        return this.state.where({ name: name, accountId: accountId || exports.DEFAULT_STATE_ACCOUNTID }).primaryKeys().then(function (r) {
            if (r[0] === undefined) {
                return _this.state.put(new State_1.RtState(name, accountId || exports.DEFAULT_STATE_ACCOUNTID, setting));
            }
            else {
                return _this.state.where({ name: name, accountId: accountId || exports.DEFAULT_STATE_ACCOUNTID }).modify({
                    setting: setting
                });
            }
        });
    };
    StateService.prototype.deleteState = function (_a) {
        var name = _a.name, accountId = _a.accountId;
        return this.state.where({ name: name, accountId: accountId || exports.DEFAULT_STATE_ACCOUNTID }).delete();
    };
    StateService = __decorate([
        annotation_1.instance
    ], StateService);
    return StateService;
}());
exports.default = StateService;

},{"../annotation":"node_modules/ratta/src/core/annotation/index.ts","./RtDB":"node_modules/ratta/src/core/service/RtDB/index.ts","../model/State":"node_modules/ratta/src/core/model/State.ts"}],"node_modules/ratta/src/core/controller/StateController.ts":[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../annotation");
var StateService_1 = __importDefault(require("../service/StateService"));
var StateController = /** @class */ (function () {
    function StateController() {
        this.stateService = new StateService_1.default();
    }
    StateController.prototype.getState = function (_a) {
        var name = _a.name, accountId = _a.accountId;
        return this.stateService.getState({ name: name, accountId: accountId });
    };
    StateController.prototype.setState = function (_a, setting) {
        var name = _a.name, accountId = _a.accountId;
        return this.stateService.setState({ name: name, accountId: accountId }, setting);
    };
    StateController.prototype.putState = function (_a, setting) {
        var name = _a.name, accountId = _a.accountId;
        return this.stateService.putState({ name: name, accountId: accountId }, setting);
    };
    StateController.prototype.deleteState = function (_a) {
        var name = _a.name, accountId = _a.accountId;
        return this.stateService.deleteState({ name: name, accountId: accountId });
    };
    StateController = __decorate([
        annotation_1.instance
    ], StateController);
    return StateController;
}());
exports.StateController = StateController;

},{"../annotation":"node_modules/ratta/src/core/annotation/index.ts","../service/StateService":"node_modules/ratta/src/core/service/StateService.ts"}],"node_modules/ratta/src/core/controller/state.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../util/store");
var RtDB_1 = require("../service/RtDB");
var StateController_1 = require("./StateController");
var STATE_NAME = 'rtState';
var stateController = new StateController_1.StateController();
var STORE_TYPE;
(function (STORE_TYPE) {
    STORE_TYPE[STORE_TYPE["SESSION"] = 1] = "SESSION";
    STORE_TYPE[STORE_TYPE["LOCAL"] = 2] = "LOCAL";
    STORE_TYPE[STORE_TYPE["DATABASE"] = 3] = "DATABASE";
})(STORE_TYPE || (STORE_TYPE = {}));
function getStoreType(type) {
    return type === STORE_TYPE.SESSION ? 'session' : '';
}
function getCurrentAccountId() {
    return this.getItem('$CURRENT_ACCOUNT.id', STORE_TYPE.SESSION);
}
exports.state = {
    setItem: function (stateKey, stateValue, type, current) {
        if (type === void 0) { type = STORE_TYPE.DATABASE; }
        if (current === void 0) { current = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _a, accountId, keyArr, name, setting, storeType, state_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = type;
                        switch (_a) {
                            case STORE_TYPE.DATABASE: return [3 /*break*/, 1];
                            case STORE_TYPE.LOCAL: return [3 /*break*/, 7];
                            case STORE_TYPE.SESSION: return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 8];
                    case 1:
                        accountId = current ? getCurrentAccountId() : null;
                        keyArr = stateKey.split('.');
                        name = keyArr.shift();
                        setting = void 0;
                        if (keyArr.length === 0) {
                            setting = stateValue;
                        }
                        else {
                            setting = (_b = {},
                                _b[keyArr.join('.')] = stateValue,
                                _b);
                        }
                        return [4 /*yield*/, stateController.setState({ name: name, accountId: accountId }, setting)];
                    case 2:
                        _c.sent();
                        if (!(keyArr.length > 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, stateController.setState({ name: name, accountId: accountId }, setting)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, stateController.putState({ name: name, accountId: accountId }, setting)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        storeType = getStoreType(type);
                        state_1 = store_1.getStore({
                            name: STATE_NAME,
                            type: storeType
                        }) || {};
                        RtDB_1.RtDB.setByKeyPath(state_1, stateKey, stateValue);
                        store_1.setStore({
                            name: STATE_NAME,
                            content: state_1,
                            type: storeType
                        });
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    },
    getItem: function (stateKey, type, current) {
        if (type === void 0) { type = STORE_TYPE.DATABASE; }
        if (current === void 0) { current = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _a, accountId, keyArr, name, obj, state_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = type;
                        switch (_a) {
                            case STORE_TYPE.DATABASE: return [3 /*break*/, 1];
                            case STORE_TYPE.LOCAL: return [3 /*break*/, 3];
                            case STORE_TYPE.SESSION: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        accountId = current ? getCurrentAccountId() : null;
                        keyArr = stateKey.split('.');
                        name = keyArr.shift();
                        return [4 /*yield*/, stateController.getState({
                                name: name,
                                accountId: accountId
                            })];
                    case 2:
                        obj = _b.sent();
                        if (obj === undefined) {
                            // throw new Error(`key ${name} was not found, key path provided is ${stateKey}`)
                            return [2 /*return*/, undefined];
                        }
                        else {
                            return [2 /*return*/, RtDB_1.RtDB.getByKeyPath(obj.setting, keyArr.join('.'))];
                        }
                        _b.label = 3;
                    case 3:
                        state_2 = store_1.getStore({
                            name: STATE_NAME,
                            type: getStoreType(type)
                        }) || {};
                        return [2 /*return*/, RtDB_1.RtDB.getByKeyPath(state_2, stateKey)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    updateItem: function () {
        stateController;
    },
    addItem: function () {
        stateController;
    }
};
exports.default = exports.state;

},{"../../util/store":"node_modules/ratta/src/util/store.js","../service/RtDB":"node_modules/ratta/src/core/service/RtDB/index.ts","./StateController":"node_modules/ratta/src/core/controller/StateController.ts"}],"node_modules/ratta/src/core/controller/index.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileController_1 = require("./FileController");
exports.FileController = FileController_1.FileController;
var AccountController_1 = require("./AccountController");
exports.AccountController = AccountController_1.AccountController;
// export {StateController} from './StateController'
var state_1 = require("./state");
exports.state = state_1.state;

},{"./FileController":"node_modules/ratta/src/core/controller/FileController.ts","./AccountController":"node_modules/ratta/src/core/controller/AccountController.ts","./state":"node_modules/ratta/src/core/controller/state.ts"}],"node_modules/ratta/src/index.ts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./core/controller");
var controller_2 = require("./core/controller");
var controller_3 = require("./core/controller");
exports.fileController = new controller_1.FileController();
exports.accountController = new controller_2.AccountController();
exports.store = {
    fileController: exports.fileController,
    accountController: exports.accountController,
    state: controller_3.state
};
var File_1 = require("./core/model/File");
exports.RT_FILE_TYPE = File_1.RT_FILE_TYPE;
exports.RtFile = File_1.RtFile;
var Account_1 = require("./core/model/Account");
exports.ACCOUNT_TYPE = Account_1.ACCOUNT_TYPE;
exports.RtAccount = Account_1.RtAccount;
var RtDB_1 = require("./core/service/RtDB");
exports.RtDB = RtDB_1.RtDB;
var controller_4 = require("./core/controller");
exports.state = controller_4.state;

},{"./core/controller":"node_modules/ratta/src/core/controller/index.ts","./core/model/File":"node_modules/ratta/src/core/model/File.ts","./core/model/Account":"node_modules/ratta/src/core/model/Account.ts","./core/service/RtDB":"node_modules/ratta/src/core/service/RtDB/index.ts"}],"node_modules/ratta-console/src/init/initSystem.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("ratta/src/index");
// todo store 应该有直接全局直接用的地方
function initSystem(initObject) {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    db = new index_1.RtDB();
                    return [4 /*yield*/, db.accounts.clear()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, db.files.clear()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, db.states.clear()];
                case 3:
                    _a.sent();
                    localStorage.clear();
                    sessionStorage.clear();
                    if (!initObject.init) return [3 /*break*/, 5];
                    return [4 /*yield*/, db.transaction('rw', [db.accounts, db.files, db.states], function () {
                            var _this = this;
                            db.accounts.add(new index_1.RtAccount({ type: index_1.ACCOUNT_TYPE.ROOT, name: initObject.root.name, password: initObject.root.password })).then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                                var account;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, db.accounts.get(r)];
                                        case 1:
                                            account = _a.sent();
                                            return [4 /*yield*/, index_1.state.setItem('$CURRENT_ACCOUNT', {
                                                    id: r,
                                                    name: account.name
                                                }, 1)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, index_1.state.setItem('$SYSTEM', {
                                                    render: initObject.device.render,
                                                    name: initObject.device.name
                                                })];
                                        case 3:
                                            _a.sent();
                                            db.files.bulkAdd([new index_1.RtFile({
                                                    absolutePath: '/',
                                                    type: index_1.RT_FILE_TYPE.FOLDER
                                                }), new index_1.RtFile({
                                                    absolutePath: '/home',
                                                    type: index_1.RT_FILE_TYPE.FOLDER
                                                }), new index_1.RtFile({
                                                    absolutePath: "/home/" + initObject.root.name,
                                                    type: index_1.RT_FILE_TYPE.FOLDER
                                                }), new index_1.RtFile({
                                                    absolutePath: '/etc',
                                                    type: index_1.RT_FILE_TYPE.FOLDER
                                                }), new index_1.RtFile({
                                                    absolutePath: '/etc/profile',
                                                    type: index_1.RT_FILE_TYPE.FILE,
                                                    content: ''
                                                })]).then();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }).then(function (r) {
                            index_1.state.setItem('account.currentPath', "/home/" + initObject.root.name);
                        }).catch(function (e) {
                            console.error(e);
                        })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.default = initSystem;

},{"ratta/src/index":"node_modules/ratta/src/index.ts"}],"node_modules/ratta-console/src/init/initSystemSteps.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommonInputHandler_1 = require("../handlers/CommonInputHandler");
var initSystem_1 = __importDefault(require("./initSystem"));
/**
 * 初始化
 */
function initSystemStep(store, stepHandler) {
    var initObject, wrongPassword, passwordExp, passwordStep, wrongAdminName, nameExp, adminNameStep, wrongPCName, pcNameStep, step;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initObject = {
                    root: {
                        name: '',
                        password: ''
                    },
                    device: {
                        name: '',
                        render: 'consoleView'
                    },
                    init: false
                };
                wrongPassword = false;
                passwordExp = /^[a-zA-Z0-9_]{6,32}$/;
                passwordStep = {
                    tip: function () { return "\n" + (wrongPassword ? 'Your password: Must be between 6 and 32 characters long, combined by letters, numbers or underscore\n' : '') + "what's your admin's password?    "; },
                    answer: function (answer) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!passwordExp.test(answer)) return [3 /*break*/, 1];
                                        wrongPassword = true;
                                        step.unshift(passwordStep);
                                        return [3 /*break*/, 3];
                                    case 1:
                                        initObject.root.password = answer;
                                        return [4 /*yield*/, initSystem_1.default(initObject)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    }
                };
                wrongAdminName = false;
                nameExp = /^[a-zA-Z0-9_]{4,16}$/;
                adminNameStep = {
                    tip: function () { return "\n" + (wrongAdminName ? 'Your admin\'s name: Must be between 4 and 16 characters long, combined by letters, numbers or underscore\n' : '') + "what's your admin's name?(root)    "; },
                    answer: function (answer) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (!nameExp.test(answer) && answer.length > 0) {
                                    wrongAdminName = true;
                                    step.unshift(adminNameStep);
                                }
                                else {
                                    initObject.root.name = answer || 'root';
                                }
                                return [2 /*return*/];
                            });
                        });
                    }
                };
                wrongPCName = false;
                pcNameStep = {
                    tip: function () { return "\n" + (wrongPCName ? "Your pc's name: Must be between 4 and 16 characters long, combined by letters, numbers or underscore\n" : '') + "what's your computer's name?(ratta)    "; },
                    answer: function (answer) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (!nameExp.test(answer) && answer.length > 0) {
                                    wrongPCName = true;
                                    step.unshift(pcNameStep);
                                }
                                else {
                                    initObject.device.name = answer || 'ratta';
                                }
                                return [2 /*return*/];
                            });
                        });
                    }
                };
                step = [
                    {
                        tip: "it's the first time to run ratta, it will use some space of your disk, continue?(y)    ",
                        answer: function (answer) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (answer.toLowerCase().startsWith('y') || answer.length < 1) {
                                        initObject.init = true;
                                    }
                                    else {
                                        step.splice(0, step.length, {
                                            tip: "\nthe answer is '" + answer + "', nothing would happen, or refresh the page to try again?\n",
                                            answer: function (a) { }
                                        });
                                        stepHandler.nextHandler = new CommonInputHandler_1.CommonInputHandler(stepHandler.store, stepHandler.inputEl, stepHandler.inputProxy);
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        },
                    },
                    pcNameStep,
                    adminNameStep,
                    passwordStep
                ];
                _a.label = 1;
            case 1:
                if (!(step.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, step.shift()];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.initSystemStep = initSystemStep;

},{"../handlers/CommonInputHandler":"node_modules/ratta-console/src/handlers/CommonInputHandler.ts","./initSystem":"node_modules/ratta-console/src/init/initSystem.ts"}],"node_modules/ratta-console/src/init/initFiles/bin/cd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        fileController,
        state
      } = handler.store;
      let p = await state.getItem('account.currentPath');
      let file = await fileController.getFileByPath(_path.default.resolve(p, args[0]));

      if (file === undefined) {
        throw new Error('the folder does not exist');
      }

      switch (file.type) {
        case 1:
          await state.setItem('account.currentPath', file.absolutePath);
          break;

        case 2:
          await state.setItem('account.currentPath', file.linkPath);
          break;

        default:
          throw new Error('the folder does not exist');
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js"}],"node_modules/ratta-console/src/init/initFiles/bin/ls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prefix = type => {
  switch (type) {
    case 0:
      return '';

    case 1:
      return '~';

    case 2:
      return '*';

    case 3:
      return '!';
  }
};

const helpMsg = `
    ls [options] [path]
    list the files of the path inputted
    
    -h, --help  check the command
    -a, --all   place all the files
`;

const getConfig = (...args) => {
  let config = {
    path: ''
  };

  while (args.length > 0) {
    let arg = args.shift();

    switch (arg) {
      case '-h':
      case '--help':
        config.help = true;
        return config;

      case '-a':
      case '--all':
        config.all = true;
        break;

      default:
        config.path = arg;
        break;
    }
  }

  return config;
};

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        fileController,
        state
      } = handler.store;
      let config = getConfig(...args);

      if (config.help) {
        return {
          code: 0,
          msg: helpMsg
        };
      }

      let p = _path.default.resolve((await state.getItem('account.currentPath')), config.path || '');

      if (!p.endsWith('/')) {
        p += '/';
      }

      let abpath = p;

      if (p !== '/') {
        let f = await fileController.getFileByPath(p.slice(0, p.length - 1));

        if (f === undefined) {
          throw new Error('file not exists');
        }

        if (f.type === 2) {
          abpath = f.linkPath + '/';
        }
      }

      const arr = (await fileController.getSubFileByPath(abpath)).filter(v => !v.isDeleted);
      let msg;

      if (config.all) {
        msg = arr.map(r => prefix(r.type) + _path.default.relative(abpath, r.absolutePath)).join('  ');
      } else {
        msg = arr.filter(v => !v.absolutePath.startsWith('.')).map(r => prefix(r.type) + _path.default.relative(abpath, r.absolutePath)).join('  ') || '';
      }

      return {
        code: 0,
        msg: msg || ''
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js"}],"node_modules/ratta-console/src/init/initFiles/bin/pwd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  run(handler) {
    return async () => {
      return {
        code: 0,
        msg: await handler.store.state.getItem('account.currentPath')
      };
    };
  }

};
exports.default = _default;
},{}],"node_modules/ratta-console/src/init/initFiles/bin/clear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  run(handler) {
    return async () => {
      handler.inputEl.value = '';
      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{}],"node_modules/ratta-console/src/init/initFiles/bin/validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateFileName = validateFileName;

function validateFileName(fileName, min = 1, max = 64) {
  if (!new RegExp(`^[^@#$!%^&*~\`\?]{${min},${max}}$`).test(fileName)) {
    throw new Error(`file name: Must be between ${min} and ${max} characters long, every character cannot be '@ # $ ! % ^ & * ~ \` ?' `);
  }
}
},{}],"node_modules/ratta-console/src/init/initFiles/bin/touch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const helpMsg = `
    touch [options] [path]
    create a file
    
    -h, --help  check the command
    -c, --content   assign the content
        when you use this config, you can only make one file
    -f, --force     overwrite the old file
`;

const getConfig = (...args) => {
  let config = {
    path: [],
    force: false
  };

  while (args.length > 0) {
    let arg = args.shift();

    switch (arg) {
      case '-h':
      case '--help':
        config.help = true;
        return config;

      case '-c':
      case '--content':
        config.content = args.shift();
        break;

      case '-f':
      case '--force':
        config.force = true;
        break;

      default:
        config.path.push(arg);
        break;
    }
  }

  return config;
};

var _default = {
  run(handler) {
    return async (...args) => {
      let config = getConfig(...args);

      if (config.help) {
        return {
          code: 0,
          msg: helpMsg
        };
      }

      const {
        fileController,
        state
      } = handler.store;

      if (config.path.length > 0) {
        for (let p of config.path) {
          (0, _validate.validateFileName)(p);
        }

        const basePath = await state.getItem('account.currentPath');

        if (config.content) {
          if (config.path.length > 1) {
            throw new Error('arguments error, you can only create one file when assign the content');
          }

          await fileController.addFile({
            absolutePath: _path.default.resolve(basePath, config.path[0]),
            content: config.content
          }, config.force);
        } else {
          await fileController.bulkAddFile(config.path.map(r => ({
            absolutePath: _path.default.resolve(basePath, r)
          })), config.force);
        }
      } else {
        throw new Error('file names were not input');
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js","./validate":"node_modules/ratta-console/src/init/initFiles/bin/validate.js"}],"node_modules/ratta-console/src/init/initFiles/bin/rm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        fileController,
        state
      } = handler.store;

      if (args.length > 0) {
        for (let p of args) {
          if (!p.startsWith('-')) {
            (0, _validate.validateFileName)(p);
          }
        }

        const basePath = await state.getItem('account.currentPath');
        await fileController.bulkDeleteFile(args.map(r => _path.default.resolve(basePath, r)), true);
      } else {
        throw new Error('file names were not input');
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js","./validate":"node_modules/ratta-console/src/init/initFiles/bin/validate.js"}],"node_modules/ratta-console/src/init/initFiles/bin/mkdir.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        fileController,
        state
      } = handler.store;

      if (args.length > 0) {
        for (let p of args) {
          if (!p.startsWith('-')) {
            (0, _validate.validateFileName)(p);
          }
        }

        const basePath = await state.getItem('account.currentPath');
        await fileController.bulkAddFile(args.map(r => ({
          absolutePath: _path.default.resolve(basePath, r),
          type: 1
        })));
      } else {
        throw new Error('file names was not input');
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js","./validate":"node_modules/ratta-console/src/init/initFiles/bin/validate.js"}],"node_modules/ratta-console/src/init/initFiles/bin/echo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      return {
        code: 0,
        msg: args[0]
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js"}],"node_modules/ratta-console/src/init/initFiles/bin/cat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const helpMsg = `
    -h, --help  check the command
`;

const getConfig = (...args) => {
  let config = {
    path: ''
  };

  while (args.length > 0) {
    let arg = args.shift();

    switch (arg) {
      case '-h':
      case '--help':
        config.help = true;
        return config;

      default:
        config.path = arg;
        break;
    }
  }

  return config;
};

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        fileController,
        state
      } = handler.store;
      let config = getConfig(...args);

      if (config.help) {
        return {
          code: 0,
          msg: helpMsg
        };
      }

      let p = _path.default.resolve((await state.getItem('account.currentPath')), config.path);

      const file = await fileController.getFileByPath(p);

      if (file === undefined || file.type !== 0) {
        throw new Error('file not found');
      }

      return {
        code: 0,
        msg: file.content || ''
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js"}],"node_modules/ratta-console/src/init/initFiles/bin/vi.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/css-loader.js"}],"node_modules/ratta-console/src/init/initFiles/bin/vi.ts":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var CommonInputHandler_1 = require("../../../handlers/CommonInputHandler");
require("./vi.css");
var VimHandler = /** @class */ (function (_super) {
    __extends(VimHandler, _super);
    function VimHandler(store, inputEl, inputProxy, abPath, content) {
        var _this = _super.call(this, store, inputEl, inputProxy) || this;
        _this.escaping = true;
        _this.commanding = true;
        _this.done = false;
        _this.abPath = abPath;
        _this.content = content;
        return _this;
    }
    VimHandler.prototype.init = function () {
        this.lastHandlerInput = this.inputEl.value;
        this.inputEl.value = this.content;
        this.escapingEl = document.createElement('input');
        this.escapingEl.className = 'vi-input-bottom';
        this.inputEl.parentElement.appendChild(this.escapingEl);
        this.escapingEl.addEventListener('keydown', this.handleKeyDown.bind(this));
        this.errEl = document.createElement('div');
        this.errEl.className = 'vi-input-error';
        this.inputEl.parentElement.appendChild(this.errEl);
    };
    VimHandler.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.inputEl.value = this.lastHandlerInput;
        this.inputEl.parentElement.removeChild(this.escapingEl);
        this.inputEl.parentElement.removeChild(this.errEl);
        // this.errEl = null
        // this.escapingEl = null
        this.inputEl.focus();
    };
    VimHandler.prototype.checkEscaping = function () {
        this.escaping = !this.escaping;
        if (!this.done) {
            if (this.escaping) {
                this.escapingEl.style.display = 'block';
                this.escapingEl.focus();
            }
            else {
                this.escapingEl.value = '';
                this.escapingEl.style.display = 'none';
                this.inputEl.focus();
            }
        }
    };
    VimHandler.prototype.popHandler = function () {
        this.done = true;
        this.inputProxy.popHandler();
    };
    VimHandler.prototype.showError = function (e) {
        this.errEl.style.display = 'block';
        this.errEl.innerText = e;
    };
    VimHandler.prototype.handleMouseDown = function (e) {
        _super.prototype.handleMouseDown.call(this, e);
        // e.preventDefault()
    };
    VimHandler.prototype.handleKeyDown = function (e) {
        _super.prototype.handleKeyDown.call(this, e);
        if (this.escaping) {
            switch (e.key) {
                case 'a':
                case 'i':
                    if (!this.commanding) {
                        this.checkEscaping();
                        e.preventDefault();
                    }
                    break;
                case "u":
                    if (!this.commanding) {
                        e.preventDefault();
                    }
                    break;
                case "d":
                    if (!this.commanding) {
                        e.preventDefault();
                    }
                    break;
                case "w":
                    if (!this.commanding) {
                        e.preventDefault();
                    }
                    break;
                case ":":
                    this.commanding = true;
                    // e.preventDefault()
                    break;
                case 'Enter':
                    try {
                        var value = this.escapingEl.value;
                        if (this.escapingEl.value.startsWith(':')) {
                            switch (this.escapingEl.value.substring(1).trim().split('').sort().join('')) {
                                case '!q':
                                    this.popHandler();
                                    break;
                                case 'qw':
                                    this.store.fileController.saveContent(this.abPath, this.inputEl.value);
                                    this.popHandler();
                                    break;
                                case 'q':
                                    if (this.inputEl.value !== this.content) {
                                        throw new Error('this file has been changed,input `q!` to quit without changing ');
                                    }
                                    else {
                                        this.popHandler();
                                    }
                                    break;
                                case 'help':
                                    throw new Error('no help here, check the help by google~');
                                    break;
                                default:
                                    throw new Error('this command does not exist');
                                    break;
                            }
                        }
                        if (this.errEl !== null) {
                            this.errEl.style.display = 'none';
                        }
                        this.checkEscaping();
                    }
                    catch (err) {
                        this.showError(err);
                    }
                    break;
                case "Escape":
                    this.checkEscaping();
                    e.preventDefault();
                    break;
                default:
                    // e.preventDefault()
                    break;
            }
        }
        else {
            switch (e.key) {
                case "Escape":
                    this.checkEscaping();
                    e.preventDefault();
                    break;
                default:
                    break;
            }
        }
    };
    return VimHandler;
}(CommonInputHandler_1.CommonInputHandler));
exports.default = {
    run: function (handler) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var _a, fileController, state, p, file, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = handler.store, fileController = _a.fileController, state = _a.state;
                            return [4 /*yield*/, state.getItem('account.currentPath')];
                        case 1:
                            p = _d.sent();
                            return [4 /*yield*/, fileController.getFileByPath(path.resolve(p, args[0]))];
                        case 2:
                            file = _d.sent();
                            if (!(file === undefined)) return [3 /*break*/, 5];
                            _c = (_b = fileController).getFileById;
                            return [4 /*yield*/, fileController.addFile({
                                    absolutePath: path.resolve(p, args[0])
                                })];
                        case 3: return [4 /*yield*/, _c.apply(_b, [_d.sent()])];
                        case 4:
                            file = _d.sent();
                            return [3 /*break*/, 8];
                        case 5:
                            if (!(file.type === 2)) return [3 /*break*/, 7];
                            return [4 /*yield*/, fileController.getFileByPath(file.linkPath)];
                        case 6:
                            file = _d.sent();
                            return [3 /*break*/, 8];
                        case 7:
                            if (file.type !== 0) {
                                throw new Error('the file already exists and cannot be edited');
                            }
                            _d.label = 8;
                        case 8: return [2 /*return*/, {
                                code: 0,
                                callBack: function () {
                                    handler.inputProxy.setHandler(new VimHandler(handler.store, handler.inputEl, handler.inputProxy, file.absolutePath, file.content));
                                }
                            }];
                    }
                });
            });
        };
    }
};

},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js","../../../handlers/CommonInputHandler":"node_modules/ratta-console/src/handlers/CommonInputHandler.ts","./vi.css":"node_modules/ratta-console/src/init/initFiles/bin/vi.css"}],"node_modules/ratta-console/src/init/initFiles/bin/history.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    run: function (handler) {
        var _this = this;
        return function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        code: '',
                        msg: handler.history.join('\n')
                    }];
            });
        }); };
    }
};

},{}],"node_modules/ratta-console/src/init/initFiles/bin/cp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _validate = require("./validate");

var _ratta = require("ratta");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cpFile(file, absolutePath) {
  let f = new _ratta.RtFile(file, {
    absolutePath
  });
  return f;
}

var _default = {
  run(handler) {
    return async (...args) => {
      if (args.length < 2) {
        throw new Error('arguments should be two');
      }

      const {
        fileController,
        state
      } = handler.store;

      for (let p of args) {
        if (!p.startsWith('-')) {
          (0, _validate.validateFileName)(_path.default.basename(p));
        }
      }

      const basePath = await state.getItem('account.currentPath');
      let file = await fileController.getFileByPath(_path.default.resolve(basePath, args[0]));

      if (file === undefined) {
        throw new Error('base file is not found');
      } else if (file.type === 1) {
        let filePath = _path.default.resolve(basePath, args[0]);

        let files = await fileController.getSubFileByPath(filePath, _ratta.RtFile.MAX_FILE_LEVEL);
        await fileController.bulkAddFile([cpFile(file, _path.default.resolve(basePath, args[1])), ...files.map(f => cpFile(f, _path.default.resolve(basePath, args[1], _path.default.relative(filePath, f.absolutePath))))]);
      } else {
        await fileController.addFile(cpFile(file, _path.default.resolve(basePath, args[1])));
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js","./validate":"node_modules/ratta-console/src/init/initFiles/bin/validate.js","ratta":"node_modules/ratta/src/index.ts"}],"node_modules/ratta-console/src/init/initFiles/bin/link.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _validate = require("./validate");

var _ratta = require("ratta");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      if (args.length < 2) {
        throw new Error('arguments should be two');
      }

      const {
        fileController,
        state
      } = handler.store;

      for (let p of args) {
        if (!p.startsWith('-')) {
          (0, _validate.validateFileName)(_path.default.basename(p));
        }
      }

      const basePath = await state.getItem('account.currentPath');
      let file = await fileController.getFileByPath(_path.default.resolve(basePath, args[0]));

      if (file === undefined) {
        throw new Error('base file is not found');
      } else if (file.type === 2) {
        await fileController.addFile(new _ratta.RtFile(file, {
          absolutePath: _path.default.resolve(basePath, args[1]),
          linkPath: file.linkPath,
          type: 2
        }));
      } else {
        await fileController.addFile(new _ratta.RtFile(file, {
          absolutePath: _path.default.resolve(basePath, args[1]),
          linkPath: file.absolutePath,
          type: 2
        }));
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js","./validate":"node_modules/ratta-console/src/init/initFiles/bin/validate.js","ratta":"node_modules/ratta/src/index.ts"}],"node_modules/ratta-console/src/init/initFiles/bin/mv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      if (args.length < 2) {
        throw new Error('arguments should be two');
      }

      const {
        fileController,
        state
      } = handler.store; // for(let p of args) {
      //     if(!p.startsWith('-')) {
      //         validateFileName(path.basename(p))
      //     }
      // }

      const basePath = await state.getItem('account.currentPath');
      let t = await fileController.moveFile(_path.default.resolve(basePath, args[0]), _path.default.resolve(basePath, args[1]));

      if (t !== 1) {
        throw new Error('move file failed');
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{"path":"../../AppData/Roaming/npm/node_modules/parcel/node_modules/path-browserify/index.js"}],"node_modules/ratta-console/src/init/initFiles/bin/useradd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const helpMsg = `
    -g, --gid GROUP
    The group name of the user's initial login group. The group name must exist. A group number must refer to an already existing group.
    If not specified, the bahavior of useradd will depend on the USERGROUPS_ENAB variable in /etc/login.defs. If this variable is set to yes (or -U/--user-group is specified on the command line), a group will be created for the user, with the same name as her loginname. If the variable is set to no (or -N/--no-user-group is specified on the command line), useradd will set the primary group of the new user to the value specified by the GROUP variable in /etc/default/useradd, or 100 by default.
    
    -G, --groups GROUP1[,GROUP2,...[,GROUPN]]]
    A list of supplementary groups which the user is also a member of. Each group is separated from the next by a comma, with no intervening whitespace. The groups are subject to the same restrictions as the group given with the -g option. The default is for the user to belong only to the initial group.
    -h, --help
    Display help message and exit.
    -p, --password PASSWORD
    The encrypted password, as returned by crypt(3). The default is to disable the password.
    Note: This option is not recommended because the password (or encrypted password) will be visible by users listing the processes.
    
    You should make sure the password respects the system's password policy.
`;

const getConfig = (...args) => {
  let config = {
    groups: []
  };

  while (args.length > 0) {
    let arg = args.shift();

    switch (arg) {
      case '-h':
      case '--help':
        config.help = true;
        return config;

      case '-g':
      case '--gid':
        config.gid = args.shift();
        break;

      case '-p':
      case '--password':
        config.password = args.shift();
        break;

      case '-G':
      case '--groups':
        let groups = [];

        while (!args[0].startsWith('-')) {
          if (args.length === 1 && args.username === undefined) {
            break;
          } else {
            groups.push(args.shift());
          }
        }

        config.groups = groups;
        break;

      default:
        config.username = arg;
        break;
    }
  }

  return config;
};

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        accountController,
        state
      } = handler.store;
      let config = getConfig(...args);

      if (config.help) {
        return {
          code: 0,
          msg: helpMsg
        };
      }

      if (!config.password) {
        throw new Error('--password must be set');
      }

      if (config.groups.length > 0 && typeof config.gid === "string") {
        throw new Error('--gid and --groups cannot be assign meanwhile');
      }

      if (config.groups.length > 0) {
        await accountController.addAccount(config.username, config.password, null, config.groups);
      } else if (typeof config.gid === "string") {
        await accountController.addAccount(config.username, config.password, null, [config.gid]);
      } else {
        await accountController.addAccount(config.username, config.password);
      }

      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{}],"node_modules/ratta-console/src/init/initFiles/bin/groupadd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const helpMsg = `
    groupAdd [options] [name]

    -h, --help
    Display help message and exit.
`;

const getConfig = (...args) => {
  let config = {};

  while (args.length > 0) {
    let arg = args.shift();

    switch (arg) {
      case '-h':
      case '--help':
        config.help = true;
        return config;

      default:
        config.groupName = arg;
        break;
    }
  }

  return config;
};

var _default = {
  run(handler) {
    return async (...args) => {
      const {
        accountController,
        state
      } = handler.store;
      let config = getConfig(...args);

      if (config.help) {
        return {
          code: 0,
          msg: helpMsg
        };
      }

      if (!config.groupName) {
        throw new Error('groupName must be set');
      }

      await accountController.addGroup(config.groupName);
      return {
        code: 0
      };
    };
  }

};
exports.default = _default;
},{}],"node_modules/ratta-console/src/init/initFiles/bin/grep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cat = _interopRequireDefault(require("./cat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  run(handler) {
    return async (...args) => {
      let msg = '';

      try {
        let t = (await _cat.default.run(handler)(args[1])).msg;
        msg = t.split('\n').filter(v => v.indexOf(args[0]) !== -1).join('\n');
      } catch (e) {
        msg = args[1].split('\n').filter(v => v.indexOf(args[0]) !== -1).join('\n');
      }

      return {
        code: 0,
        msg: msg
      };
    };
  }

};
exports.default = _default;
},{"./cat":"node_modules/ratta-console/src/init/initFiles/bin/cat.js"}],"node_modules/ratta-console/src/init/initFiles/bin/index.ts":[function(require,module,exports) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cd_js_1 = __importDefault(require("./cd.js"));
var ls_js_1 = __importDefault(require("./ls.js"));
var pwd_js_1 = __importDefault(require("./pwd.js"));
var clear_js_1 = __importDefault(require("./clear.js"));
var touch_1 = __importDefault(require("./touch"));
var rm_1 = __importDefault(require("./rm"));
var mkdir_1 = __importDefault(require("./mkdir"));
var echo_1 = __importDefault(require("./echo"));
var cat_1 = __importDefault(require("./cat"));
var vi_1 = __importDefault(require("./vi"));
var history_1 = __importDefault(require("./history"));
var cp_1 = __importDefault(require("./cp"));
var link_1 = __importDefault(require("./link"));
var mv_1 = __importDefault(require("./mv"));
var useradd_1 = __importDefault(require("./useradd"));
var groupadd_1 = __importDefault(require("./groupadd"));
var grep_1 = __importDefault(require("./grep"));
exports.default = {
    cd: cd_js_1.default,
    ls: ls_js_1.default,
    pwd: pwd_js_1.default,
    clear: clear_js_1.default,
    touch: touch_1.default,
    mkdir: mkdir_1.default,
    echo: echo_1.default,
    cat: cat_1.default,
    vi: vi_1.default,
    history: history_1.default,
    cp: cp_1.default,
    link: link_1.default,
    rm: rm_1.default,
    mv: mv_1.default,
    useradd: useradd_1.default,
    groupadd: groupadd_1.default,
    grep: grep_1.default,
};

},{"./cd.js":"node_modules/ratta-console/src/init/initFiles/bin/cd.js","./ls.js":"node_modules/ratta-console/src/init/initFiles/bin/ls.js","./pwd.js":"node_modules/ratta-console/src/init/initFiles/bin/pwd.js","./clear.js":"node_modules/ratta-console/src/init/initFiles/bin/clear.js","./touch":"node_modules/ratta-console/src/init/initFiles/bin/touch.js","./rm":"node_modules/ratta-console/src/init/initFiles/bin/rm.js","./mkdir":"node_modules/ratta-console/src/init/initFiles/bin/mkdir.js","./echo":"node_modules/ratta-console/src/init/initFiles/bin/echo.js","./cat":"node_modules/ratta-console/src/init/initFiles/bin/cat.js","./vi":"node_modules/ratta-console/src/init/initFiles/bin/vi.ts","./history":"node_modules/ratta-console/src/init/initFiles/bin/history.ts","./cp":"node_modules/ratta-console/src/init/initFiles/bin/cp.js","./link":"node_modules/ratta-console/src/init/initFiles/bin/link.js","./mv":"node_modules/ratta-console/src/init/initFiles/bin/mv.js","./useradd":"node_modules/ratta-console/src/init/initFiles/bin/useradd.js","./groupadd":"node_modules/ratta-console/src/init/initFiles/bin/groupadd.js","./grep":"node_modules/ratta-console/src/init/initFiles/bin/grep.js"}],"node_modules/load-script/index.js":[function(require,module,exports) {

module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}

},{}],"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/compileCommand.ts":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var expressions = ['&&', '|', '>', '\n', ';'];
// 转成表达式树
var expressionParser = function (node) {
    var cmd = node.command.trim();
    var exp = undefined;
    var arr = [];
    for (var _i = 0, expressions_1 = expressions; _i < expressions_1.length; _i++) {
        var expression = expressions_1[_i];
        var index = cmd.lastIndexOf(expression);
        if (index > 0) {
            exp = expression;
            arr = [
                cmd.slice(0, index),
                cmd.slice(index + exp.length, cmd.length)
            ];
            break;
        }
    }
    if (exp !== undefined) {
        node.expression = exp;
        node.command = undefined;
        node.left = {
            command: arr[0]
        };
        node.right = {
            command: arr[1]
        };
        expressionParser(node.left);
        expressionParser(node.right);
    }
    return node;
};
// 将命令转化为数组
function getArgs(str) {
    str = " " + str.trim() + " ";
    var chars = ['\'', '\"'];
    var spIndex = 0;
    var args = [];
    var flag = -1;
    var indexes = new Array(chars.length);
    for (var i = 0; i < str.length; i++) {
        if (str[i - 1] === ' ' && str[i] !== ' ' && flag === -1) {
            for (var j = 0; j < chars.length; j++) {
                if (str[i] === chars[j]) {
                    flag = j;
                    indexes[flag] = i;
                    break;
                }
            }
            if (flag === -1) {
                spIndex = i;
            }
        }
        else {
            if (spIndex && (str[i - 1] !== ' ' && str[i] === ' ')) {
                args.push(str.slice(spIndex, i));
                spIndex = 0;
            }
            else if (indexes[flag] && str[i] === chars[flag]) {
                args.push(str.slice(indexes[flag] + 1, i));
                indexes[flag] = 0;
                flag = -1;
            }
        }
    }
    return args;
}
// 将表达式树转化为可运行的promise返回
function compile(commands, handler) {
    return function cp(node) {
        return __awaiter(this, void 0, void 0, function () {
            var args, func, mh;
            var _this = this;
            return __generator(this, function (_a) {
                if (node.command !== undefined) {
                    args = getArgs(node.command);
                    func = args.shift();
                    if (commands[func] === undefined) {
                        mh = 'mh';
                        throw new Error("command " + func + " not found, do you mean : " + mh);
                    }
                    return [2 /*return*/, commands[func].run(handler).apply(void 0, args)];
                }
                switch (node.expression) {
                    case '&&':
                        return [2 /*return*/, cp(node.left).then(function (res) {
                                if (res.code === 0) {
                                    return cp(node.right);
                                }
                                else {
                                    throw Error();
                                }
                            })];
                    case '|':
                        return [2 /*return*/, cp(node.left).then(function (res) {
                                if (res.code === 0) {
                                    return cp(__assign(__assign({}, node.right), { command: node.right.command ? node.right.command + ' \"' + res.msg + '\"' : undefined }));
                                }
                            })];
                    case '>':
                        return [2 /*return*/, cp(node.left).then(function (res) {
                                console.log("touch " + node.right.command + " -c " + res.msg);
                                if (res.code === 0) {
                                    return cp(__assign(__assign({}, node.right), { command: "touch " + node.right.command + " -c \"" + res.msg + "\"" }));
                                }
                            })];
                    case '\n':
                    case ';':
                        return [2 /*return*/, cp(node.left).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var res1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(res.code === 0)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, cp(node.right)];
                                        case 1:
                                            res1 = _a.sent();
                                            return [2 /*return*/, {
                                                    code: res1.code,
                                                    msg: res.msg + '\n' + res1.msg
                                                }];
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
}
function default_1(command, commands, handler) {
    return compile(commands, handler)(expressionParser({
        command: command
    }));
}
exports.default = default_1;

},{}],"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/Command.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bin_1 = __importDefault(require("../../../init/initFiles/bin"));
var load_script_1 = __importDefault(require("load-script"));
var compileCommand_1 = __importDefault(require("./compileCommand"));
var allCommands = new Map();
function loadCommand(command) {
    if (command.path !== undefined) {
        if (allCommands.has(command.path)) {
            allCommands.get(command.path);
        }
        else {
            // return new FileController().getFileByPath(command.path)
        }
    }
    else if (command.url) {
        if (allCommands.has(command.url)) {
            allCommands.get(command.url);
        }
        else {
            load_script_1.default(command.url, function (err, script) {
                if (err) {
                }
                else {
                }
            });
        }
    }
}
/**
 * 多个view都可以共享
 */
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.run = function (handler) {
        // todo 先从当前文件夹下找
        //  loadScript -> 已经加载就直接用本地的静态方法 | 本地store读取文件 | 远程获取
        return function (str) {
            return new Promise(function (resolve, reject) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        try {
                            compileCommand_1.default(str, bin_1.default, handler).then(resolve).catch(reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                        return [2 /*return*/];
                    });
                });
            });
        };
    };
    return Command;
}());
exports.Command = Command;

},{"../../../init/initFiles/bin":"node_modules/ratta-console/src/init/initFiles/bin/index.ts","load-script":"node_modules/load-script/index.js","./compileCommand":"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/compileCommand.ts"}],"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/SystemCommandHandler.ts":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommandHandler_1 = __importDefault(require("./CommandHandler"));
var Command_1 = require("./Command");
/**
 * handler可以从inputProxy中获取stdin和stdout
 * 从store中获取数据
 */
var SystemCommandHandler = /** @class */ (function (_super) {
    __extends(SystemCommandHandler, _super);
    function SystemCommandHandler(store, inputEl, inputProxy) {
        var _this = _super.call(this, store, inputEl, inputProxy) || this;
        _this.commandHandler = _this.executeCommandHandler;
        return _this;
        // window.$c = this.Command.run(this)
    }
    SystemCommandHandler.prototype.init = function () {
        var _this = this;
        Promise.all([this.store.state.getItem('$CURRENT_ACCOUNT.name', 1), this.store.state.getItem('$SYSTEM.name')]).then(function (values) {
            _this.prefix = "\n" + values[0] + "@" + values[1] + ": ";
            _this.print(_this.prefix);
        });
    };
    SystemCommandHandler.prototype.handleStdoutChange = function (value, oldValue) {
        _super.prototype.handleStdoutChange.call(this, value, oldValue);
    };
    SystemCommandHandler.prototype.handleStderrChange = function (value, oldValue) {
        _super.prototype.handleStderrChange.call(this, value, oldValue);
    };
    SystemCommandHandler.prototype.executeCommandHandler = function (command) {
        var _this = this;
        command = command.trim();
        if (command.length > 0) {
            this.history.push(command);
            Command_1.Command.run(this)(command).then(function (obj) {
                if (obj.msg !== undefined) {
                    _this.inputProxy.stdout.set(new String(obj.msg));
                    _this.print('\n' + _this.inputProxy.stdout);
                }
                _this.print(_this.prefix);
                obj.callBack && obj.callBack();
                return obj;
            }).catch(function (err) {
                console.error(err);
                _this.inputProxy.stderr.set(new String(err));
                _this.print('\n' + _this.inputProxy.stderr + _this.prefix);
            });
        }
        else {
            this.print(this.prefix);
        }
    };
    return SystemCommandHandler;
}(CommandHandler_1.default));
exports.default = SystemCommandHandler;

},{"./CommandHandler":"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/CommandHandler.ts","./Command":"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/Command.ts"}],"node_modules/ratta-console/src/init/loginSteps.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function loginSteps(store) {
    var step, wrongPasswordTime, failed, loginObj, startSteps;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                wrongPasswordTime = 0;
                failed = false;
                loginObj = {
                    name: '',
                    password: '',
                };
                startSteps = [
                    {
                        tip: function () {
                            if (failed) {
                                wrongPasswordTime++;
                                return "\n\ninput wrong password\nlogin: ";
                            }
                            else {
                                return '\nlogin: ';
                            }
                        },
                        answer: function (answer) {
                            return __awaiter(this, void 0, Promise, function () {
                                return __generator(this, function (_a) {
                                    if (answer.trim() !== '') {
                                        loginObj.name = answer;
                                    }
                                    else {
                                        failed = true;
                                    }
                                    return [2 /*return*/, true];
                                });
                            });
                        }
                    },
                    {
                        tip: "\npassword: ",
                        answer: function (answer) {
                            loginObj.password = answer.trim();
                            return store.accountController.login(loginObj.name, loginObj.password).then(function (r) {
                                if (r === undefined) {
                                    failed = true;
                                    step.push.apply(step, startSteps);
                                }
                                else {
                                    store.state.setItem('$CURRENT_ACCOUNT', r, 1);
                                }
                            });
                        }
                    }
                ];
                step = __spreadArrays(startSteps);
                _a.label = 1;
            case 1:
                if (!(step.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, step.shift()];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.loginSteps = loginSteps;

},{}],"node_modules/ratta-console/src/index.ts":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var InputProxy_1 = require("./handlers/InputProxy");
var StepHandler_1 = __importDefault(require("./handlers/SystemCommandHandler/StepHandler"));
var initSystemSteps_1 = require("./init/initSystemSteps");
var SystemCommandHandler_1 = __importDefault(require("./handlers/SystemCommandHandler/CommandHandler/SystemCommandHandler"));
var loginSteps_1 = require("./init/loginSteps");
var consoleView = /** @class */ (function () {
    function consoleView(inputProxy, store, root) {
        var rt = document.createElement('div');
        rt.className = 'cv';
        root.appendChild(rt);
        this.inputProxy = inputProxy;
        this._addEventListener(rt);
        inputProxy.store = store;
    }
    consoleView.prototype._addEventListener = function (root) {
        var _this = this;
        root.innerHTML = "<textarea class=\"console-view\"></textarea>";
        this.inputEl = root.querySelector('.console-view');
        this.inputEl.addEventListener('keydown', function (e) { return _this.inputProxy.handleKeyDown(e); });
        this.inputEl.addEventListener('input', function (e) { return _this.inputProxy.handleInput(e); });
        this.inputEl.addEventListener('keyup', function (e) { return _this.inputProxy.handleKeyUp(e); });
        this.inputEl.addEventListener('input', function (e) { return _this.inputProxy.handleInput(e); });
        this.inputEl.addEventListener('mousedown', function (e) { return _this.inputProxy.handleMouseDown(e); });
        this.inputEl.addEventListener('mouseup', function (e) { return _this.inputProxy.handleMouseUp(e); });
        this.inputEl.addEventListener('click', function (e) { return _this.inputProxy.handleClick(e); });
    };
    return consoleView;
}());
exports.viewRunner = {
    run: function (store, root) {
        return __awaiter(this, void 0, void 0, function () {
            var inputProxy, cv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputProxy = new InputProxy_1.InputProxy();
                        cv = new consoleView(inputProxy, store, root);
                        console.log(321);
                        return [4 /*yield*/, store.state.getItem('$SYSTEM')];
                    case 1:
                        if (!((_a.sent()) === undefined)) return [3 /*break*/, 2];
                        inputProxy.setHandler(new StepHandler_1.default(store, cv.inputEl, inputProxy, initSystemSteps_1.initSystemStep, new SystemCommandHandler_1.default(store, cv.inputEl, inputProxy)));
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, store.state.getItem('$CURRENT_ACCOUNT', 1)];
                    case 3:
                        if ((_a.sent()) === undefined) {
                            inputProxy.setHandler(new StepHandler_1.default(store, cv.inputEl, inputProxy, loginSteps_1.loginSteps, new SystemCommandHandler_1.default(store, cv.inputEl, inputProxy)));
                        }
                        else {
                            inputProxy.setHandler(new SystemCommandHandler_1.default(store, cv.inputEl, inputProxy));
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};

},{"./index.css":"node_modules/ratta-console/src/index.css","./handlers/InputProxy":"node_modules/ratta-console/src/handlers/InputProxy.ts","./handlers/SystemCommandHandler/StepHandler":"node_modules/ratta-console/src/handlers/SystemCommandHandler/StepHandler/index.ts","./init/initSystemSteps":"node_modules/ratta-console/src/init/initSystemSteps.ts","./handlers/SystemCommandHandler/CommandHandler/SystemCommandHandler":"node_modules/ratta-console/src/handlers/SystemCommandHandler/CommandHandler/SystemCommandHandler.ts","./init/loginSteps":"node_modules/ratta-console/src/init/loginSteps.ts"}],"pages/ratta-console/index.js":[function(require,module,exports) {
var rattaConsole = require('ratta-console');

var ratta = require('ratta/src/index');

module.exports = function () {
  rattaConsole.viewRunner.run(ratta.store, document.body.querySelector('div[page=ratta-console]'));
};
},{"ratta-console":"node_modules/ratta-console/src/index.ts","ratta/src/index":"node_modules/ratta/src/index.ts"}],"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/ratta-console.83999974.js.map