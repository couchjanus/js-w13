// test.js
'use strict';

/*
 * Add items to a list - from cssanimation.rocks/list-items/
 */
document.getElementById('add-to-list').addEventListener('click', function(e) {
    e.preventDefault();
    var list = document.getElementById('items');
    var newLI = document.createElement('li');
    newLI.innerHTML = 'A new item';
    list.appendChild(newLI);
    var cardQty = document.querySelector(".cart-qty");
    let value = isNaN(parseInt(cardQty.textContent)) ? 0 : parseInt(cardQty.textContent);
    cardQty.textContent = parseInt(value)+1;
    if (!cardQty.classList.contains('cart-not-empty')){
        cardQty.classList.add('cart-not-empty');
    }
    setTimeout(function() {
        newLI.className = newLI.className + " swing show";
    }, 200);
    setTimeout(function() {
        newLI.className = newLI.className + " show-swing";
    }, 200);
});

