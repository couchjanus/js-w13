"use strict";

// (function () {
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("cart-toggle").addEventListener('click', function () {
//         console.log('Togle Click');
//         document.querySelector(".aside").classList.add('open');
//     });

// })();


// (function () {
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("cart-toggle").addEventListener('click', function () {
//         document.querySelector(".aside").classList.add("open");
//         document.querySelector(".backdrop").classList.add("backdrop--open")
//     });

// })();

function el(selector) {
    return document.querySelector(selector);
}

// (function () {
//     el("#cart-toggle").addEventListener('click', function () {
//         el(".aside").classList.add("open");
//         el(".backdrop").classList.add("backdrop--open")
//     });
// })();

function openCart() {
    el(".aside").classList.add("open");
    el(".backdrop").classList.add("backdrop--open")
}


// (function () {
//     el("#cart-toggle").addEventListener('click', function () {
//         openCart();
//     });
// })();

// toggle-sidebar

function closeCart() {
    el(".aside").classList.remove("open");
    el(".backdrop").classList.remove("backdrop--open");
}

// (function () {
//     el("#cart-toggle").addEventListener('click', function () {
//         openCart();
//     });
//     el(".toggle-sidebar").addEventListener('click', function () {
//         closeCart();
//     });
// })();


(function () {
    el("#cart-toggle").addEventListener('click', function (e) {
        e.preventDefault();
        openCart();
    });
    el(".toggle-sidebar").addEventListener('click', function (e) {
        e.preventDefault();
        closeCart();
    });
})();

