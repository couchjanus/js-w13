"use strict";
import $ from 'jquery';

window.jQuery = window.$ = $;

function openCart() {
    $('.aside').addClass('open');
    $(".backdrop").addClass("backdrop--open");
}

function closeCart() {
    $(".aside").removeClass("open");
    $(".backdrop").removeClass("backdrop--open");
}

$(function () {

    $("#cart-toggle").on('click', () => openCart());
    $(".toggle-sidebar").on('click', () => closeCart());

    $('.buy-now').on('click', function () {
        $('.product .product-name').css('display', 'none');
        $('.product .icon').css('display', 'none');
        $('.product .buy-now').css('display','none');
        $('.product .product-detail').css('display', 'block');
        $('.product-menu').css('top', '40%');
    });

    $('.cancel').on('click', function () {
        $('.product .product-name').css('display', 'block');
        $('.product .icon').css('display', 'block');
        $('.product .buy-now').css('display','block');
        $('.product .product-detail').css('display', 'none');
        $('.product-menu').css('top', '80%');
    });

});