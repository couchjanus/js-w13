'use strict';

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

function openCart(shoppingCart) {
    showCart(shoppingCart);
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


function saveCart(shoppingCart) {
    // Store data
    localStorage.shoppingCart = JSON.stringify(shoppingCart);
    console.log(JSON.stringify(shoppingCart));
}

const content = document.getElementById("cartItem").content;



// ==============addProductToCart====================
            let productInCart = function (content, item){
                content.querySelector('.item-name').textContent = item.Product;
                content.querySelector('.item-quantity').textContent = item.Quantity;
                content.querySelector('.item-price').textContent = item.Price;
                content.querySelector('.item-img img').setAttribute('src', item.Picture);
                return content;
            }

            
function showCart(shoppingCart) {
    if (shoppingCart.length == 0) {
        console.log("Your Shopping Cart is Empty!");
        return;
    }
    el(".cart-items").innerHTML='';

    shoppingCart.forEach(function (item) {
        el('.cart-items').append(document.importNode(productInCart(content, item), true));

    });
}


const url = 'https://api.myjson.com/bins/wzxxy';


var shoppingCart = [];

// ------------------APP-------------------------
(function() {
    el('#cart-toggle').addEventListener('click', function(e) {
        e.preventDefault();
        openCart(shoppingCart);
    }, false);
    el('.toggle-sidebar').addEventListener('click', function(e) {
        e.preventDefault();
        closeCart();
    });

    // Контент шаблона
    const $template = document.getElementById("productItem").content;

     
    if (localStorage.shoppingCart) {
        shoppingCart = JSON.parse(localStorage.shoppingCart);
    }

    fetch(url)
    .then( (response) => {
            if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
            }
            response.json().then( (data) => {
                data.forEach(function (index) {
                        document.querySelector('.main').append(makeProductItem($template, index).cloneNode(true));
                });
            
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
            

            let addProductToCart = function (item) {
                let id = item.parentNode.getAttribute("productId");
                let price = item.querySelector(".product-price").textContent;
                let name = item.querySelector(".product-name").textContent;
                let quantity = item.querySelector(".quantity").value;
                let picture = item.querySelector(".product-picture img").getAttribute('src');
                return {id, price, name, quantity, picture};
            }
            

            
            const carts = Array.from(document.getElementsByClassName('add-to-cart'));
            
            carts.forEach(function (cart) {
                cart.addEventListener('click', function (e) {
                    e.preventDefault();
                    let item = e.target.parentNode.parentNode.parentNode;
                    let {id, price, name, quantity, picture} = addProductToCart(item);



                    var imgToDrag = item.querySelector("img");

                    if (imgToDrag) {
                        var imgClone = imgToDrag.cloneNode(true);
                        imgClone.classList.add('offset-img');
                        document.body.appendChild(imgClone);

                        item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
                        item.parentNode.querySelector('.product-back').classList.add('back-is-visible');
                        
                        imgClone.animate([{
                                transform: _translate(imgToDrag)
                            },
                            {
                                transform: _translate(el('#cart-toggle'), 50) + 'perspective(500px) scale3d(0.1, 0.1, 0.2)'
                            },
                        ], {
                            duration: 2000,
                        })
                        .onfinish = function () {
                            imgClone.remove();
                            item.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(0deg)';
                            item.querySelector('.product-name').style.display = 'block';
                            item.querySelector('.icon').style.display = 'block';
                            item.querySelector('.buy-now').style.display = 'block';
                            item.querySelector('.product-detail').style.display = 'none';
                            e.target.parentNode.style.top = '80%';

                            let cardQty = el(".cart-qty");
                    
                            let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
                    
                            cardQty.textContent = parseInt(value)+parseInt(item.querySelector(".quantity").value);
                            if (!cardQty.classList.contains('cart-not-empty')){
                                cardQty.classList.add('cart-not-empty');
                            }
                            cardQty.classList.add("rotate-x");
                        };
                    }

                    for (let i in shoppingCart) {
                        if (shoppingCart[i].Id == id) {
                            shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
                            saveCart(shoppingCart);
                            return;
                        }
                    }
        
                    let pitem = {
                        Id: id,
                        Product: name,
                        Price: price,
                        Quantity: quantity,
                        Picture: picture
                    };
        
                    shoppingCart.push(pitem);
                    saveCart(shoppingCart);
                });
            // =================Очистка всего хранилища================

            document.querySelector('.clear-cart').addEventListener('click', () => {
                localStorage.removeItem('shoppingCart');
                document.querySelector('.cart-items').innerHTML = '';
                shoppingCart = [];
                updateTotal();
            });

            document.querySelector('.cart-items').addEventListener('click', (e) => {
                if (e.target && e.target.matches(".remove-item")) {
                    var index = e.target.parentNode.querySelector('.productInCart').getAttribute("id");
                    shoppingCart.splice(shoppingCart.indexOf(shoppingCart.find(x => x.Id === index)), 1);
                    e.target.parentNode.remove();
                    saveCart(shoppingCart);
                    updateTotal();
                }
            }, false);
            });
        });
    })
    .catch( (err) => {
        console.log('Fetch Error :-S', err);
    });
})();

