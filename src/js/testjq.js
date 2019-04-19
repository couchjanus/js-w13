// test.js
'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;

console.log(jQuery('h1'));
        
// JQuery Получить DOM-элемент body
console.log($("body"));

// JQuery Получить все элементы div
console.log($('div'));

console.log($('#cart-sidebar'));

// JQuery Получить все элементы span внутри div
console.log($($('div span')));
      
// JQuery Получить все элементы span внутри div
console.log($($($('div').find('span'))));
       
// JQuery Получить все элементы span внутри div
console.log($($('div > span')));


// Например, выбрать все элементы, имеющие класс btn:
console.log($(".btn"));
// также можно записать следующим образом:
console.log($("*.btn"));


// JQuery Получить элемент перед .plus
console.log($('.plus').prev());

// JQuery Получить элемент после #banner
console.log($('.minus').next());



$(document).ready(
    function(){
        console.log('Bla, Bla, Bla...');
        // $('p').css('border', '3px solid blue');
        // // получим значение background у элемента a
        // var background = $('.nav li a').css('background-color');
        // console.log(background);     // выведем его в консоль

        // var cssProperties = $('p').css(['width','height']);
        // console.log(cssProperties);
        // $("a").css("color", "red");

        // $('div').css({
        //     'color':'green',
        //     'font-size':'16px'
        // });

        // var newCSS = {
        //     'color':'green',
        //     'font-size':'16px'
        // };
        
        // $('p').css(newCSS);

        // $('p').css({
        //     "padding-left": "+=10",
        //     "padding-right":"+=10", 
        //     "padding-top": "+=10"
        // });
            


    }
);

// $(document).ready(ready);
 


function square(x) {
    return x * x;
}

let i = 2;

function setMessageText(msg) {
    $('.footer').text(msg);
}

// setMessageText("The Square of " + i + " is " + square(i));

// $('.footer').click(() => {
//     i++;
//     setMessageText("The Square of " + i + " is " + square(i));
// })

// $(function () {
//     console.log('Bla, Bla, Bla...');
//     const cart_toggle = $('#cart-toggle');
//     console.log(cart_toggle, "It's Cart Toggle");
// });


// $(function () {
//     $('#cart-toggle').click(function(){
//     console.log("jQuery: It's Cart Trigger");
//     });
// });

// $(function () {
//     $('#cart-toggle').on('click', function(){
//         console.log("jQuery: It's Cart Trigger");
//     });
// });

// $(function () {
//     $('#cart-toggle').on('click', function(){
//         $(".aside").addClass('show-sidebar');
//     });
// });


// $(function () {
//     $('#cart-toggle').on('click', function(){
//         if ($(".aside").hasClass('show-sidebar')) {
//             $(".aside").removeClass('show-sidebar');
//         } else {
//             $(".aside").addClass('show-sidebar');
//         }
//     });
// });

// $(function () {
//     $("#cart-toggle").on('click', function () {
//         $('.aside').toggleClass('show-sidebar');
//     });
// });

// $('.buy-now').on('click', function () {
//     $('.product .product-name').css('display', 'none');
//     $('.product .icon').css('display', 'none');
//     $('.product .buy-now').css('display','none');
//     $('.product .product-detail').css('display', 'block');
//     $('.product-menu').css('top', '40%');
// });


// $('.cancel').on('click', function () {
//     $('.product .product-name').css('display', 'block');
//     $('.product .icon').css('display', 'block');
//     $('.product .buy-now').css('display','block');
//     $('.product .product-detail').css('display', 'none');
//     $('.product-menu').css('top', '80%');
// });
