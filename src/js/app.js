'use strict';

export const data = [{
    id: 0,
    name: "Cool Cat",
    price: 177,
    picture: "cat1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 1,
    name: "Black Cat",
    price: 666,
    picture: "cat2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 2,
    name: "Red Cat",
    price: 555,
    picture: "cat3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 3,
    name: "Blue Cat",
    price: 444,
    picture: "cat4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 4,
    name: "Green Cat",
    price: 333,
    picture: "cat5.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 5,
    name: "Grey Cat",
    price: 222,
    picture: "cat6.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 6,
    name: "Orange Cat",
    price: 777,
    picture: "cat7.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
{
    id: 7,
    name: "Pretty Cat",
    price: 888,
    picture: "cat8.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
},
];

function makeProductItem($template, product) {
    $template.querySelector('.product-wrapper').setAttribute('productId', product.id);
    $template.querySelector('.product-name').textContent = product.name;
    $template.querySelector('img').setAttribute('src', "images/"+ product.picture);
    $template.querySelector('img').setAttribute('alt', product.name);
    $template.querySelector('.product-price').textContent = '$'+product.price;
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

    // Контент шаблона
    const $template = document.getElementById("productItem").content;

    // for (var i = 0; i < Object.keys(data).length; i++) {
    //     document.querySelector('.main').append(makeProductItem($template, data[i]).cloneNode(true));
    // }

    // el('.buy-now').addEventListener('click', function () {
    //     el('.product .product-name').style.display = 'none';
    //     el('.product .icon').style.display = 'none';
    //     el('.product .buy-now').style.display = 'none';
    //     el('.product .product-detail').style.display = 'block';
    //     el('.product-menu').style.top = '40%';
    // });


    var buy = document.getElementsByClassName('buy-now');

    // const byes = Array.from(document.getElementsByClassName('buy-now'));
    // byes.forEach(function (buy) {
    //     buy.addEventListener('click', function (e) {
    //         e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
    //         e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
    //         e.target.style.display = 'none';
    //         e.target.parentNode.querySelector('.product-detail').style.display = 'block';
    //         e.target.parentNode.style.top = '40%';
    //     });
    // });


    for (let i = 0; i < buy.length; i++) {
        buy[i].addEventListener('click', function(e) {
            e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
            e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
            e.target.style.display = 'none';
            e.target.parentNode.querySelector('.product-detail').style.display = 'block';
            e.target.parentNode.style.top = '40%';
        });
    }


    // const cancels = Array.from(document.getElementsByClassName('cancel'));
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

    for (let i = 0; i < buy.length; i++) {
        cancel[i].addEventListener('click', function(e) {
            e.target.parentNode.parentNode.querySelector(
                '.product-name'
            ).style.display = 'block';
            e.target.parentNode.parentNode.querySelector('.icon').style.display =
                'block';
            e.target.parentNode.querySelector('.buy-now').style.display = 'block';
            e.target.parentNode.querySelector('.product-detail').style.display =
                'none';
            e.target.parentNode.style.top = '80%';
        });
    }

    

    let plus = document.getElementsByClassName('plus');
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function(e) {
            let val = parseInt(
                e.target.previousElementSibling.getAttribute('value')
            );
            e.target.previousElementSibling.setAttribute('value', val + 1);
        });
    }

    // plus = Array.prototype.slice.call(plus); // теперь plus - массив

    // plus.forEach(function (elem) {
    //     elem.addEventListener('click', function () {
    //         let val = parseInt(this.previousElementSibling.getAttribute('value'));
    //         this.previousElementSibling.setAttribute('value', val + 1);
    //     });
    // });

    let minus = document.getElementsByClassName('minus');
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', function(e) {
            let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
            e.target.nextElementSibling.setAttribute('value', val - 1);
        });
    }

    // minus = Array.prototype.slice.call(minus); // теперь minus - массив

    // minus.forEach(function (elem) {
    //     elem.addEventListener('click', function () {
    //         let val = parseInt(this.nextElementSibling.getAttribute('value'));
    //         this.nextElementSibling.setAttribute('value', val - 1);
    //     });
    // });

    var addcart = document.getElementsByClassName('add-to-cart');
    // ================appendChild==================
    for (let i = 0; i < addcart.length; i++) {
        addcart[i].addEventListener('click', function(e) {
            var y = 180;
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector(
                '.product-wrapper'
            ).style.transform = 'rotateY(' + y + 'deg)';
            e.target.parentNode.parentNode.parentNode.parentNode
                .querySelector('.product-back')
                .classList.add('back-is-visible');
        
            
            let content = document.getElementById("cartItem").content;
            document.querySelector('.cart-items').appendChild(content);
        });
    }

    // ==============addProductToCart====================

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


