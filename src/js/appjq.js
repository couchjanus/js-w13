"use strict";
import $ from 'jquery';

window.jQuery = window.$ = $;

function openCart(shoppingCart) {
    showCart(shoppingCart);
    $('.aside').addClass('open');
    $(".backdrop").addClass("backdrop--open");
}


function closeCart() {
    $(".aside").removeClass("open");
    $(".backdrop").removeClass("backdrop--open");
}

function makeProductItem($template, product) {
    $template.find('.product-wrapper').attr('productId', product.id);
    $template.find('.product-name').text(product.name);
    $template.find('img').attr('src', "images/" + product.picture);
    $template.find('img').attr('alt', product.name);
    $template.find('.product-price').text('$' + product.price);
    return $template;
}


function addProductToCart(item) {
    let id = item.parents('.product-wrapper').attr("productId");
    let price = item.parents(".product-menu").find(".product-price").text();
    let name = item.parents(".product").children(".product-name").text();
    let quantity = item.parents(".product").find(".quantity").val();
    let picture = item.parents(".product").find("img").attr('src');
    return {id, price, name, quantity, picture};
}


function saveCart(shoppingCart) {
    // Store data
    localStorage.shoppingCart = JSON.stringify(shoppingCart);
    console.log(JSON.stringify(shoppingCart));
}

function showCart(shoppingCart) {
    if (shoppingCart.length == 0) {
        console.log("Your Shopping Cart is Empty!");
        return;
    }
    $(".cart-items").empty();

    shoppingCart.forEach(function (item) {
        var template = $($('#cartItem').html());
        productInCart(template, item);
        $(".cart-items").append(template);
    });
}

function productInCart(template, item) {
    template.find('.productInCart').attr('id', item.Id);
    template.find('.item-quantity').text(item.Quantity);
    template.find('.item-name').text(item.Product);
    template.find('.item-price').text(item.Price);
    template.find('.item-prices').text(parseFloat(item.Quantity) * parseFloat(item.Price.trim().substring(1)));
    template.find('.item-img img').attr('src', item.Picture);
    return template;
}


function _animate(imgToDrag) {
    if (imgToDrag) {
        var imgClone = imgToDrag.clone()
            .offset({
                top: imgToDrag.offset().top,
                left: imgToDrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': $('#cart-toggle').offset().top + 10,
                'left': $('#cart-toggle').offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000);

        imgClone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach();
        });
    }

}

function _animateBack(item) {
    item.parents('.product-wrapper')
        .css('transform', 'rotateY(180deg)');
    item.parents('.product-wrapper').find('.product-back').addClass('back-is-visible');

    item.parents('.product-wrapper').delay(3000).queue(function () {
        $(this).find('.product-name').show();
                $(this).find('.product-menu').css('top', '80%');
                $(this).find('.product-detail').hide();
                $(this).find('.buy-now').show();
                $(this).find('.icon').show();
                $(this).css({
                    'transform': 'rotateY(0deg)'
                }).dequeue();
    });
}

var shoppingCart = [];

$(function () {

    var url = 'https://api.myjson.com/bins/wzxxy';
    var data = [];
    
    if (localStorage.shoppingCart) {
        shoppingCart = JSON.parse(localStorage.shoppingCart);
    }

    $("#cart-toggle").on('click', () => openCart(shoppingCart));
    $(".toggle-sidebar").on('click', () => closeCart());


    $.ajax({
        url: url,
        method: 'GET'
    }).then(
        function(jsonData) {
        
        for(var i in jsonData) {
            data.push(jsonData[i]);
        }


    for (var i = 0; i < data.length; i++) {
        let $template = $($('#productItem').html());
        $(".main").append(makeProductItem($template, data[i]));
    }
    
    $(".buy-now").each(function (index, element) {
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name').fadeOut('slow', 'linear');
            $(e.target).parents('.product').find('.icon').fadeOut(600, 'linear');
            $(e.target).parents('.product').find('.buy-now').fadeOut('fast');

            $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
            $(e.target).parents('.product-menu').css('top', '40%');
            $(e.target).parents('.product').find('img').fadeTo("slow", 0.5);
        });
    });

    $(".cancel").each(function (index, element) {
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name')
                .fadeIn('slow', 'linear');
            $(e.target).parents('.product').find('.icon').fadeIn('slow', 'linear');
            $(e.target).parents('.product').find('.buy-now').fadeIn('slow', 'swing');

            $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
            $(e.target).parents('.product-menu').css('top', '80%');
            $(e.target).parents('.product').find('img').fadeTo("slow", 1);
        });
    });

    $(".plus").click(function () {
        var val = parseInt($(this).prev().attr('value'));
        $(this).prev().attr('value', val + 1);
    });
    $(".minus").click(function () {
        var val = parseInt($(this).next().attr('value'));
        $(this).next().attr('value', val - 1);
    });

    $(".add-to-cart").each(function (index, element) {
        $(element).on('click', function () {

            let {id, price, name, quantity, picture} = addProductToCart($(this))

            var imgToDrag = $(this).parents('.product').find("img").eq(0);
            _animate(imgToDrag);
            _animateBack($(this));
            // ========================================
            for (let i in shoppingCart) {
                if (shoppingCart[i].Id == id) {
                    shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
                    saveCart(shoppingCart);
                    return;
                }
            }

            let item = {
                Id: id,
                Product: name,
                Price: price,
                Quantity: quantity,
                Picture: picture
            };

            shoppingCart.push(item);
            saveCart(shoppingCart);

        });
    });

    // ===============Очистка всего хранилища======================
        $('body').on('click', '#cart-sidebar .clear-cart', function () {
            localStorage.removeItem('shoppingCart');
            $('.cart-items').empty();
            shoppingCart = [];
        });
        $('body').on('click', '.cart-items .remove-item', function () {
            var index = $(this).parent().attr("id");
            shoppingCart.splice(shoppingCart.indexOf(shoppingCart.find(x => x.Id === index)), 1);
    
            $(this).parents('li').remove();
    
            saveCart(shoppingCart);
        });
    });
});