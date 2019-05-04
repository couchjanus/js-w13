// test.js
'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;

var shoppingCart = [];

// function openCart(){
//     showCart(shoppingCart);
//     $('.aside').addClass('open');
//     $(".backdrop").addClass("backdrop--open");
// }

// function closeCart(){
//     $(".aside").removeClass("open");
//     $(".backdrop").removeClass("backdrop--open");
// }

// $("#cart-toggle").on('click', () => openCart());
// $(".toggle-sidebar").on('click', () => closeCart());


// JQuery

// $('.add-to-cart').each(function(index, element) {
// 	$(element).on('click', () => {
// 		let id = $(this).parents('.product-wrapper').attr('productId');
// 		console.log(id);
// 		let price = $(this).parents('.product-menu').find('.product-price').text();
// 		console.log(price);
// 		let name = $(this).parents('.product').children('.product-name').text();
// 		console.log(name);
// 		let quantity = $(this).parents('.product-menu').find('.quantity').val();
// 		console.log(quantity);
// 		let picture = $(this).parents('.product').find('img').attr('src');
// 		console.log(picture);

// 		let item = {
// 			Id: id,
// 			Product: name,
// 			Price: price,
// 			Quantity: quantity,
// 			Picture: picture
// 		};
// 		console.log(item);

// 		shoppingCart.push(item);

// 		saveCart(shoppingCart);
// 	});
// });

// ========================Очистка всего хранилища======================
// $('body').on('click', '#cart-sidebar .clear-cart', function() {
// 	localStorage.removeItem('shoppingCart');
// 	$('.cart-items').empty();
// 	shoppingCart = [];
// });

