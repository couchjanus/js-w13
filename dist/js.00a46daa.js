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
})({"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./images/overlay.png":[["overlay.b2a30f3f.png","sass/images/overlay.png"],"sass/images/overlay.png"],"./images/delete-item.png":[["delete-item.ff1ffbcd.png","sass/images/delete-item.png"],"sass/images/delete-item.png"],"_css_loader":"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/test.js":[function(require,module,exports) {
// test.js
'use strict'; // Создание элементов массива возможно несколькими способами:
// var earth = new Array(4); /* массив из 4-х элементов*/
// earth[0] = "Earth";
// earth[1] = "24 h";
// earth[2] = 6378;
// earth[3] = 365.25;
// var earth = new Array("Earth", "24 h", 6378, 365.25);
// var earth = new Array(); // пустой массив
// var earth = []; // пустой массив
// earth.xtype = "Solar";
// earth.xday = "24 h";
// earth.radius = 6378;
// earth.period = 365.25;
// var country = ["UK", "USA", "GB"];
// Если вы указываете числа или значения true или false при определении массива, 
// то тип переменной будет числовой или булев тип, а не строковый.
// var arr = ['первый элемент', 'второй элемент'];
// console.log(arr[0]); // напечатает 'первый элемент'
// console.log(arr[1]); // напечатает 'второй элемент'
// доступ к элементам массива в javaScript:
// var mas = new Array(1, 25, 'Привет');
// mas[0] = 'Пока';
// mas[1] = 35;
// Свойство массивов length взаимосвязано с числовыми свойствами.
// var fruits = [];
// fruits.push('банан', 'яблоко', 'персик');
// console.log(fruits.length); // 3
// Длина length – не количество элементов массива, а последний индекс + 1.
// var arr = [];
// arr[1000] = true;
// console.log(arr.length); // 1001
// При уменьшении length массив укорачивается.
// var arr = [1, 2, 3, 4, 5];
// arr.length = 2; // укоротить до 2 элементов
// console.log(arr[3]);
// arr.length = 5; // вернуть length обратно, как было
// console.log(arr[3]); // undefined: значения не вернулись
//   Массивы в JavaScript индексируются с нуля: первый элемент массива имеет индекс, равный 0, а индекс последнего элемента равен значению свойства массива length минус 1.
// var arr = ['первый элемент', 'второй элемент'];
// console.log(arr[0]); // напечатает 'первый элемент'
// console.log(arr[1]); // напечатает 'второй элемент'
// console.log(arr[arr.length - 1]); // напечатает 'второй элемент'
// Удаление элементов массива
// в javascript удалить элемент массива можно при помощи оператора delete:
// var myColors = new Array("red", "green", "blue");
// delete myColors[1];
// console.log(myColors); // red,,blue
// Самый простой способ очистить массив - это arr.length=0.
// вывести элементы массива на экран, в качестве конечного значения счетчика цикла использовать свойство length
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr.length);
// вывод элементов массива с использованием обычного цикла for:
// var mas = new Array(1, 25, 'Привет');
// mas[0] = 'Пока';
// mas[1] = 35;
// function showElement() {
//     for (i = 0; i < 3; i++) {
//         console.log(mas[i]);
//     }
// }
// showElement();
// использование цикла for in для перебора элементов массива:
// function showElement() {
//     for (var i in mas) {
//         console.log(mas[i]);
//     }
// }
// showElement();
// перебор элементов массива buy:

var buy = document.getElementsByClassName('buy-now'); // console.log('buy.length = ', buy.length);
// for (let i = 0; i < buy.length; i++) {
//     console.log(buy[i]);
// }
// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e);
//     });
// }
// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e.target);
//         e.target.style.display = 'none';
//     });
// }
// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         document.querySelector('.product .product-name').style.display = 'none';
//         document.querySelector('.product .icon').style.display = 'none';
//         e.target.style.display = 'none';
//         document.querySelector('.product .product-detail').style.display = 'block';
//         document.querySelector('.product-menu').style.top = '40%';
//     });
// }
// Свойство parentNode
// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e.target.parentNode);
//         e.target.style.display = 'none';
//     });
// }
// for (let i=0; i<buy.length; i++ ) {
//  buy[i].addEventListener('click', function (e) {
//    console.log(e.target.parentNode);
//    e.target.parentNode.parentNode.querySelector('.product .product-name').style.display = 'none';
//    e.target.parentNode.parentNode.querySelector('.product .icon').style.display = 'none';
//    e.target.style.display = 'none';
//    e.target.parentNode.parentNode.querySelector('.product .product-detail').style.display = 'block';
//    e.target.parentNode.parentNode.querySelector('.product-menu').style.top = '40%';
//  });
// }
// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode);
//       e.target.parentNode.parentNode.querySelector('.product .product-name').style.display = 'none';
//       e.target.parentNode.parentNode.querySelector('.product .icon').style.display = 'none';
//       e.target.style.display = 'none';
//       e.target.parentNode.parentNode.querySelector('.product .product-detail').style.display = 'block';
//       e.target.parentNode.style.top = '40%';
//     });
// }
// Свойство childNodes - представление дочерних узлов.
// var el = document.getElementsByClassName('product-menu').childNodes;
// console.log(el);
// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode);
//       console.log(e.target.parentNode.childNodes); // length: 13
//       console.log(e.target.parentNode.childElementCount); // 6
//     });
// }
// Свойство Node.children возвращает коллекцию (HTMLCollection) дочерних элементов узла.
// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode);
//       console.log(e.target.parentNode.children); // length: 13
//       console.log(e.target.parentNode.childElementCount); // 6
//     });
// }
// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e.target.parentNode);
//         console.log(e.target.parentNode.children[2]);
//         console.log(e.target.parentNode.querySelector('.product-detail'));
//         console.log(e.target.parentNode.parentNode.querySelector('.product-name'));
//         console.log(e.target.parentNode.parentNode.querySelector('.icon'));
//     });
// }
// firstChild - первый дочерний узел элемента,
// var el = document.getElementById('nav').firstChild;
// console.log(el);
// lastChild - последний дочерний узел.
// el = document.getElementById('nav').lastChild;
// console.log(el);
// nextSibling - узел после элемента,
// var el = document.getElementById('nav').nextSibling;
// console.log(el);
// previousSibling - узел до элемента.
// el = document.getElementById('nav').previousSibling;
// console.log(el);
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../sass/main.scss");

require("./test");
},{"../sass/main.scss":"sass/main.scss","./test":"js/test.js"}],"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35645" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map