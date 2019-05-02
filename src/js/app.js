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

function _translate(img, offset=0){
    let rect = img.getBoundingClientRect();
    let elements = ['translate3D('];
    elements.push(rect.left - offset + 'px,');
    elements.push(rect.top - offset + 'px,0)');
    return elements.join('');
}


// ------------------APP-------------------------
(function() {
    el('#cart-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        openCart();
    }, false);
    el('.toggle-sidebar').addEventListener('click', function(e) {
        e.preventDefault();
        closeCart();
    });

    // Контент шаблона
    const $template = document.getElementById("productItem").content;

    for (var i = 0; i < Object.keys(data).length; i++) {
        document.querySelector('.main').append(makeProductItem($template, data[i]).cloneNode(true));
    }

    const byes = Array.from(document.getElementsByClassName('buy-now'));
    byes.forEach(function (buy) {
        buy.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
            e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
            e.target.style.display = 'none';
            e.target.parentNode.querySelector('.product-detail').style.display = 'block';
            e.target.parentNode.style.top = '40%';
        });
    });

    const cancels = Array.from(document.getElementsByClassName('cancel'));
    cancels.forEach(function (cancel) {
        cancel.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.querySelector(
                '.product-name'
            ).style.display = 'block';
            e.target.parentNode.parentNode.querySelector('.icon').style.display =
                'block';
            e.target.parentNode.querySelector('.buy-now').style.display = 'block';
            e.target.parentNode.querySelector('.product-detail').style.display = 'none';
            e.target.parentNode.style.top = '80%';
        });
    });

    
    let plus = Array.from(document.getElementsByClassName('plus'));
    plus.forEach(function (elem) {
        elem.addEventListener('click', function () {
            let val = parseInt(this.previousElementSibling.getAttribute('value'));
            this.previousElementSibling.setAttribute('value', val + 1);
        });
    });


    let minus = Array.from(document.getElementsByClassName('minus'));
    minus.forEach(function (elem) {
        elem.addEventListener('click', function () {
            let val = parseInt(this.nextElementSibling.getAttribute('value'));
            this.nextElementSibling.setAttribute('value', val - 1);
        });
    });

    // ==============addProductToCart====================


    let addProductToCart = function (content, item){
        content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
        content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
        content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
        content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));
        return content;
    }
    

    const content = document.getElementById("cartItem").content;
    const carts = Array.from(document.getElementsByClassName('add-to-cart'));
    // =====================Step 1============================
    
    carts.forEach(function (cart) {
        cart.addEventListener('click', function (e) {
            e.preventDefault();
            let item = e.target.parentNode.parentNode.parentNode;
            
            item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
            item.parentNode.querySelector('.product-back').classList.add('back-is-visible');
            el('.cart-items').append(document.importNode(addProductToCart(content, item), true));

            let cardQty = el(".cart-qty");
            
            let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
            
            cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
            if (!cardQty.classList.contains('cart-not-empty')){
                cardQty.classList.add('cart-not-empty');
            }
        });
        
    });
    // =====================Step 2============================
    
    // carts.forEach(function (cart) {
    //     cart.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let item = e.target.parentNode.parentNode.parentNode;
            
    //         item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
    //         item.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         el('.cart-items').append(document.importNode(addProductToCart(content, item), true));

    //         let cardQty = el(".cart-qty");
            
    //         let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
            
    //         cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
    //         if (!cardQty.classList.contains('cart-not-empty')){
    //             cardQty.classList.add('cart-not-empty');
    //         }
    //         cardQty.classList.add("rotate-x");
    //     });
        
    // });

    // =====================Step 3============================
    // function removeAnimation(e) {
    //     e.target.classList.remove("rotate-x");
    // }

    // const counter = el(".cart-qty");
    // counter.addEventListener("animationend", removeAnimation);
        
    // carts.forEach(function (cart) {
    //     cart.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let item = e.target.parentNode.parentNode.parentNode;
            
    //         item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
    //         item.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         el('.cart-items').append(document.importNode(addProductToCart(content, item), true));

    //         let cardQty = el(".cart-qty");
            
    //         let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
            
    //         cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
    //         if (!cardQty.classList.contains('cart-not-empty')){
    //             cardQty.classList.add('cart-not-empty');
    //         }
    //         cardQty.classList.add("rotate-x");
    //     });
        
    // });

    // =====================Step 4============================
            
    // carts.forEach(function (cart) {
    //     cart.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let item = e.target.parentNode.parentNode.parentNode;
    //         var imgToDrag = item.querySelector("img");

    //         let rectOrigin = imgToDrag.getBoundingClientRect();
    //         let toLeftStart = rectOrigin.left + 'px';
    //         let toTopStart = rectOrigin.top + 'px';
    //         console.log(toLeftStart, toTopStart);

    //         if (imgToDrag) {
    //             var imgClone = imgToDrag.cloneNode(true);
    //             imgClone.style.left = 0;
    //             imgClone.style.top = 0;
    //             imgClone.classList.add('offset-img');
    //             imgClone.style.height = '150px';
    //             imgClone.style.width = '150px';
    //             document.body.appendChild(imgClone);

    //             item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
    //             item.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //             el('.cart-items').append(document.importNode(addProductToCart(content, item), true));

    //             let cardQty = el(".cart-qty");
                
    //             let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
                
    //             cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
    //             if (!cardQty.classList.contains('cart-not-empty')){
    //                 cardQty.classList.add('cart-not-empty');
    //             }
    //             cardQty.classList.add("rotate-x");
    //         }
    //     });
        
    // });

    // =====================Step 5============================
    
    // carts.forEach(function (cart) {
    //     cart.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let item = e.target.parentNode.parentNode.parentNode;
    //         var imgToDrag = item.querySelector("img");

    //         let rectOrigin = imgToDrag.getBoundingClientRect();
    //         let toLeftStart = rectOrigin.left + 'px';
    //         let toTopStart = rectOrigin.top + 'px';
    //         console.log(toLeftStart, toTopStart);

    //         if (imgToDrag) {
    //             var imgClone = imgToDrag.cloneNode(true);
    //             imgClone.style.left = 0;
    //             imgClone.style.top = 0;
    //             imgClone.classList.add('offset-img');
    //             imgClone.style.height = '150px';
    //             imgClone.style.width = '150px';
    //             document.body.appendChild(imgClone);

    //             item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
    //             item.parentNode.querySelector('.product-back').classList.add('back-is-visible');

    //             let rect = el('#cart-toggle').getBoundingClientRect();
    //                             let toLeft = rect.left - 50 + 'px';
    //                             let toTop = rect.top - 50 + 'px';
    //             console.log(toLeft, toTop);

    //             el('.cart-items').append(document.importNode(addProductToCart(content, item), true));

    //             let cardQty = el(".cart-qty");
                
    //             let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
                
    //             cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
    //             if (!cardQty.classList.contains('cart-not-empty')){
    //                 cardQty.classList.add('cart-not-empty');
    //             }
    //             cardQty.classList.add("rotate-x");

    //         }
    //     });
        
    // });

    // =====================Step 6============================
    
    // carts.forEach(function (cart) {
    //     cart.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let item = e.target.parentNode.parentNode.parentNode;
    //         var imgToDrag = item.querySelector("img");

    //         if (imgToDrag) {
    //             var imgClone = imgToDrag.cloneNode(true);
    //             imgClone.classList.add('offset-img');
    //             document.body.appendChild(imgClone);

    //             item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
    //             item.parentNode.querySelector('.product-back').classList.add('back-is-visible');

    //             imgClone.animate([{
    //                     transform: _translate(imgToDrag)
    //                 },
    //                 {
    //                     transform: _translate(el('#cart-toggle'), 50) + 'perspective(500px) scale3d(0.1, 0.1, 0.2)'
    //                 },
    //             ], {
    //                 duration: 2000,
    //             });
                
    //         }
    //     });
        
    // });

    // =====================Step 7============================
    
    // carts.forEach(function (cart) {
    //     cart.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let item = e.target.parentNode.parentNode.parentNode;
    //         var imgToDrag = item.querySelector("img");

    //         if (imgToDrag) {
    //             var imgClone = imgToDrag.cloneNode(true);
    //             imgClone.classList.add('offset-img');
    //             document.body.appendChild(imgClone);

    //             item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
    //             item.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //             el('.cart-items').append(document.importNode(addProductToCart(content, item), true));

    //             imgClone.animate([{
    //                     transform: _translate(imgToDrag)
    //                 },
    //                 {
    //                     transform: _translate(el('#cart-toggle'), 50) + 'perspective(500px) scale3d(0.1, 0.1, 0.2)'
    //                 },
    //             ], {
    //                 duration: 2000,
    //             })
    //             .onfinish = function () {
    //                 imgClone.remove();
    //                 item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(0deg)';
    //                 item.querySelector('.product-name').style.display = 'block';
    //                 item.querySelector('.icon').style.display = 'block';
    //                 item.querySelector('.buy-now').style.display = 'block';
    //                 item.querySelector('.product-detail').style.display = 'none';
    //                 e.target.parentNode.style.top = '80%';

    //                 let cardQty = el(".cart-qty");
            
    //                 let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
            
    //                 cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
    //                 if (!cardQty.classList.contains('cart-not-empty')){
    //                     cardQty.classList.add('cart-not-empty');
    //                 }
    //                 cardQty.classList.add("rotate-x");
    //             };
    //         }
    //     });
        
    // });
})();

