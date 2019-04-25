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
},{"./images/overlay.png":[["overlay.b2a30f3f.png","sass/images/overlay.png"],"sass/images/overlay.png"],"./images/delete-item.png":[["delete-item.ff1ffbcd.png","sass/images/delete-item.png"],"sass/images/delete-item.png"],"_css_loader":"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/app.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = [{
  id: 0,
  name: "Cool Cat",
  price: 177,
  picture: "cat1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 1,
  name: "Black Cat",
  price: 666,
  picture: "cat2.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 2,
  name: "Red Cat",
  price: 555,
  picture: "cat3.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 3,
  name: "Blue Cat",
  price: 444,
  picture: "cat4.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 4,
  name: "Green Cat",
  price: 333,
  picture: "cat5.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 5,
  name: "Grey Cat",
  price: 222,
  picture: "cat6.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 6,
  name: "Orange Cat",
  price: 777,
  picture: "cat7.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}, {
  id: 7,
  name: "Pretty Cat",
  price: 888,
  picture: "cat8.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
}];
exports.data = data;

function makeProductItem($template, product) {
  $template.querySelector('.product-wrapper').setAttribute('productId', product.id);
  $template.querySelector('.product-name').textContent = product.name;
  $template.querySelector('img').setAttribute('src', "images/" + product.picture);
  $template.querySelector('img').setAttribute('alt', product.name);
  $template.querySelector('.product-price').textContent = '$' + product.price;
  return $template;
}

function el(selector) {
  return document.querySelector(selector);
}

function openCart() {
  el('.aside').classList.add('open');
  el('.backdrop').classList.add('backdrop--open');
}

function closeCart() {
  el('.aside').classList.remove('open');
  el('.backdrop').classList.remove('backdrop--open');
} // ------------------APP-------------------------


(function () {
  el('#cart-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    openCart();
  });
  el('.toggle-sidebar').addEventListener('click', function (e) {
    e.preventDefault();
    closeCart();
  }); // Контент шаблона

  var $template = document.getElementById("productItem").content; // for (var i = 0; i < Object.keys(data).length; i++) {
  //     document.querySelector('.main').append(makeProductItem($template, data[i]).cloneNode(true));
  // }
  // el('.buy-now').addEventListener('click', function () {
  //     el('.product .product-name').style.display = 'none';
  //     el('.product .icon').style.display = 'none';
  //     el('.product .buy-now').style.display = 'none';
  //     el('.product .product-detail').style.display = 'block';
  //     el('.product-menu').style.top = '40%';
  // });

  var buy = document.getElementsByClassName('buy-now'); // const byes = Array.from(document.getElementsByClassName('buy-now'));
  // byes.forEach(function (buy) {
  //     buy.addEventListener('click', function (e) {
  //         e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
  //         e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
  //         e.target.style.display = 'none';
  //         e.target.parentNode.querySelector('.product-detail').style.display = 'block';
  //         e.target.parentNode.style.top = '40%';
  //     });
  // });

  for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener('click', function (e) {
      e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
      e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
      e.target.style.display = 'none';
      e.target.parentNode.querySelector('.product-detail').style.display = 'block';
      e.target.parentNode.style.top = '40%';
    });
  } // const cancels = Array.from(document.getElementsByClassName('cancel'));
  // cancels.forEach(function (cancel) {
  //     cancel.addEventListener('click', function (e) {
  //         e.target.parentNode.parentNode.querySelector(
  //             '.product-name'
  //         ).style.display = 'block';
  //         e.target.parentNode.parentNode.querySelector('.icon').style.display =
  //             'block';
  //         e.target.parentNode.querySelector('.buy-now').style.display = 'block';
  //         e.target.parentNode.querySelector('.product-detail').style.display = 'none';
  //         e.target.parentNode.style.top = '80%';
  //     });
  // });


  var cancel = document.getElementsByClassName('cancel');

  for (var _i = 0; _i < buy.length; _i++) {
    cancel[_i].addEventListener('click', function (e) {
      e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'block';
      e.target.parentNode.parentNode.querySelector('.icon').style.display = 'block';
      e.target.parentNode.querySelector('.buy-now').style.display = 'block';
      e.target.parentNode.querySelector('.product-detail').style.display = 'none';
      e.target.parentNode.style.top = '80%';
    });
  }

  var plus = document.getElementsByClassName('plus');

  for (var _i2 = 0; _i2 < plus.length; _i2++) {
    plus[_i2].addEventListener('click', function (e) {
      var val = parseInt(e.target.previousElementSibling.getAttribute('value'));
      e.target.previousElementSibling.setAttribute('value', val + 1);
    });
  } // plus = Array.prototype.slice.call(plus); // теперь plus - массив
  // plus.forEach(function (elem) {
  //     elem.addEventListener('click', function () {
  //         let val = parseInt(this.previousElementSibling.getAttribute('value'));
  //         this.previousElementSibling.setAttribute('value', val + 1);
  //     });
  // });


  var minus = document.getElementsByClassName('minus');

  for (var _i3 = 0; _i3 < minus.length; _i3++) {
    minus[_i3].addEventListener('click', function (e) {
      var val = parseInt(e.target.nextElementSibling.getAttribute('value'));
      e.target.nextElementSibling.setAttribute('value', val - 1);
    });
  } // minus = Array.prototype.slice.call(minus); // теперь minus - массив
  // minus.forEach(function (elem) {
  //     elem.addEventListener('click', function () {
  //         let val = parseInt(this.nextElementSibling.getAttribute('value'));
  //         this.nextElementSibling.setAttribute('value', val - 1);
  //     });
  // });


  var addcart = document.getElementsByClassName('add-to-cart'); // ================appendChild==================

  for (var _i4 = 0; _i4 < addcart.length; _i4++) {
    addcart[_i4].addEventListener('click', function (e) {
      var y = 180;
      e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
      e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
      var content = document.getElementById("cartItem").content;
      document.querySelector('.cart-items').appendChild(content);
    });
  } // ==============addProductToCart====================
  // function addProductToCart(content){
  //     document.querySelector('.cart-items').append(document.importNode(content, true));
  // }
  // for (let i = 0; i < addcart.length; i++) {
  //     addcart[i].addEventListener('click', function (e) {
  //         var y = 180;
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
  //         let content = document.getElementById("cartItem").content;
  //         addProductToCart(content);
  //     });
  // }
  // function addProductToCart(content){
  //     content.querySelector('.item-name').textContent = "Red Cat";
  //     content.querySelector('.item-quantity').textContent = 22;
  //     content.querySelector('.item-price').textContent = 1234;
  //     content.querySelector('.item-img img').setAttribute('src', 'images/cat3.jpg');
  //     document.querySelector('.cart-items').append(document.importNode(content, true));
  // }
  //     for (let i = 0; i < addcart.length; i++) {
  //     addcart[i].addEventListener('click', function (e) {
  //         var y = 180;
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
  //         let content = document.getElementById("cartItem").content;
  //         addProductToCart(content);
  //     });
  // }
  // function addProductToCart(content, item){
  //     content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
  //     content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
  //     content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
  //     content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));
  //     document.querySelector('.cart-items').append(document.importNode(content, true));
  // }
  // for (let i = 0; i < addcart.length; i++) {
  //     addcart[i].addEventListener('click', function (e) {
  //         var y = 180;
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
  //         let content = document.getElementById("cartItem").content;
  //         addProductToCart(content, e.target.parentNode.parentNode.parentNode);
  //     });
  // }
  // function addProductToCart(content, item){
  //     content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
  //     content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
  //     content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
  //     content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));
  //     return content;
  // }
  // for (let i = 0; i < addcart.length; i++) {
  //     addcart[i].addEventListener('click', function (e) {
  //         var y = 180;
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
  //         let content = document.getElementById("cartItem").content;
  //         document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, e.target.parentNode.parentNode.parentNode), true));
  //     });
  // }
  // const content = document.getElementById("cartItem").content;
  // for (let i = 0; i < addcart.length; i++) {
  //     addcart[i].addEventListener('click', function (e) {
  //         var y = 180;
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
  //         document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, e.target.parentNode.parentNode.parentNode), true));
  //     });
  // }
  // const carts = Array.from(document.getElementsByClassName('add-to-cart'));
  // carts.forEach(function (cart) {
  //     cart.addEventListener('click', function (e) {
  //         var y = 180;
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
  //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
  //         document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, e.target.parentNode.parentNode.parentNode), true));
  //     });
  // });

})();
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../sass/main.scss");

require("./app");
},{"../sass/main.scss":"sass/main.scss","./app":"js/app.js"}],"../../../.nvm/versions/node/v11.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39183" + '/');

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