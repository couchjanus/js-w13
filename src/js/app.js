'use strict';

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
}

// ------------------APP-------------------------
(function() {
    el('#cart-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        openCart();
    });
    el('.toggle-sidebar').addEventListener('click', function(e) {
        e.preventDefault();
        closeCart();
    });

    el('.buy-now').addEventListener('click', function () {
        el('.product .product-name').style.display = 'none';
        el('.product .icon').style.display = 'none';
        el('.product .buy-now').style.display = 'none';
        el('.product .product-detail').style.display = 'block';
        el('.product-menu').style.top = '40%';
    });

    el('.cancel').addEventListener('click', function () {
        el('.product .product-name').style.display = 'block';
        el('.product .icon').style.display = 'block';
        el('.product .buy-now').style.display = 'block';
        el('.product .product-detail').style.display = 'none';
        el('.product-menu').style.top = '80%';
    });

    el('.add-to-cart').addEventListener('click', function () {
        var y = 180;
        el('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
        el('.product-back').classList.add('back-is-visible');
    });
})();

// var buy = document.getElementsByClassName('buy-now');

// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function(e) {
//         e.target.parentNode.parentNode.querySelector(
//             '.product-name'
//         ).style.display = 'none';
//         e.target.parentNode.parentNode.querySelector('.icon').style.display =
//             'none';
//         e.target.style.display = 'none';
//         e.target.parentNode.querySelector('.product-detail').style.display =
//             'block';
//         e.target.parentNode.style.top = '40%';
//     });
// }

// var cancel = document.getElementsByClassName('cancel');

// for (let i = 0; i < buy.length; i++) {
//     cancel[i].addEventListener('click', function(e) {
//         e.target.parentNode.parentNode.querySelector(
//             '.product-name'
//         ).style.display = 'block';
//         e.target.parentNode.parentNode.querySelector('.icon').style.display =
//             'block';
//         e.target.parentNode.querySelector('.buy-now').style.display = 'block';
//         e.target.parentNode.querySelector('.product-detail').style.display =
//             'none';
//         e.target.parentNode.style.top = '80%';
//     });
// }

// var addcart = document.getElementsByClassName('add-to-cart');
// for (let i = 0; i < addcart.length; i++) {
//     addcart[i].addEventListener('click', function(e) {
//         var y = 180;
//         e.target.parentNode.parentNode.parentNode.parentNode.querySelector(
//             '.product-wrapper'
//         ).style.transform = 'rotateY(' + y + 'deg)';
//         e.target.parentNode.parentNode.parentNode.parentNode
//             .querySelector('.product-back')
//             .classList.add('back-is-visible');
//     });
// }

// let plus = document.getElementsByClassName('plus');
// for (let i = 0; i < plus.length; i++) {
//     plus[i].addEventListener('click', function(e) {
//         let val = parseInt(
//             e.target.previousElementSibling.getAttribute('value')
//         );
//         e.target.previousElementSibling.setAttribute('value', val + 1);
//     });
// }
// let minus = document.getElementsByClassName('minus');
// for (let i = 0; i < minus.length; i++) {
//     minus[i].addEventListener('click', function(e) {
//         let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
//         e.target.nextElementSibling.setAttribute('value', val - 1);
//     });
// }
