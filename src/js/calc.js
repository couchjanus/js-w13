'use strict';
console.log('#viewer'.charAt(0));
console.log('.num'.charAt(0));

if ('#viewer'.charAt(0) === '#') {
    console.log('It is ID'); 
} else {
    console.log('It is not ID');
}


// var el = function(element) {
//     if (element.charAt(0) === '#') {
//         return document.querySelector(element);
//     }
//     return document.querySelectorAll(element); 
// };

// var viewer = el('#viewer'),
//     equals = el('#equals'),
//     numbers = el('.num'), 
//     operators = el('.ops'),
//     currentNumber = '', 
//     firstNumber = '',
//     resultNumber, 
//     operator;

// firstNumber = 2;
// currentNumber = 2;
// resultNumber = firstNumber + currentNumber;
// viewer.innerHTML = resultNumber;


// var setNumber = function() {
//     if (resultNumber) {
//         currentNumber = this.getAttribute('data-num');
//         resultNumber = '';
//     } else {
//         currentNumber += this.getAttribute('data-num');
//     }
//     viewer.innerHTML = currentNumber; 
// };

// var clickOperator = function() {
//     firstNumber = currentNumber;
//     currentNumber = '';
//     operator = this.getAttribute('data-ops');
//     equals.setAttribute('data-result', '');
// };

// var displayResult = function() {
//     firstNumber = parseFloat(firstNumber);
//     currentNumber = parseFloat(currentNumber);

//     switch (operator) {
//         case 'plus':
//             resultNumber = firstNumber + currentNumber;
//             break;

//         case 'minus':
//             resultNumber = firstNumber - currentNumber;
//             break;

//         default:
//             resultNumber = currentNumber;
//     }
//     viewer.innerHTML = resultNumber;
//     equals.setAttribute('data-result', resultNumber);

//     firstNumber = 0;
//     currentNumber = resultNumber;
// };

// for (var i = 0, l = numbers.length; i < l; i++) {
//     numbers[i].onclick = setNumber;
// }

// for (var i = 0, l = operators.length; i < l; i++) {
//     operators[i].onclick = clickOperator;
// }

// equals.onclick = displayResult;
