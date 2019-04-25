// test.js
'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;


$(document).ready(
    function(){
        $('.footer').append('<a href="http://google.com">Googling!</a>');

        $('<a>', {
            href: 'http://google.com',
            text: "Let's Googling!"
            }).appendTo('#output');
        
        // $(".hello").appendTo(".container");


    }
);


