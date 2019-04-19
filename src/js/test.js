// test.js
'use strict';

// document object
// console.dir(document);

// document object property

// console.log(document.domain); // localhost
// console.log(document.URL); // http://localhost:1234/
// console.log(document.title); // Shopping cart

// console.log(document.doctype); // <!DOCTYPE html>

// console.log(document.head); // head

// console.log(document.all); // HTMLAllCollection

// document.all[27].textContent = "Hello DOM!";

// console.log(document.images[0].src); // http://localhost:1234/cat3.06d0e916.jpg 


// GETELEMENTBYID //

// var hello = document.getElementById('hell');
// hello.textContent = "Hello ID Element!";
// hello.innerText = "Hello Inner Text!";
// hello.innerHTML = "Hello Inner HTML!";
// hello.style.backgroundColor = 'solid 3px indigo';

// let cartToggle = document.getElementById("cart-toggle");
// console.log(cartToggle);

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Hello Item 2';
// items[2].style.fontWeight = 800;
// items[2].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i<items.length; i++) {
//   items[i].style.backgroundColor = "#b0"+(3*i+"a")+"00";
// }

// GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#0f0';
// }


// QUERYSELECTOR //

// var header = document.querySelector('.special');
// header.style.borderBottom = 'solid 4px #c00';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';



// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
  console.log('Button clicked');

  // document.getElementById('hell').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f4f';
  // console.log(e);

  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>';

  // console.log(e.type);

  // console.log(e.clientX);
  // console.log(e.clientY);

  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
}

// 
// function messageShow() {
//   alert('Документ и все ресурсы загружены!');
// }

// window.onload = function() {
//   messageShow();
// };

// document.addEventListener("DOMContentLoaded", function(){
//     console.log('Документ и все ресурсы загружены!');
// }, false);


// window.onbeforeunload = function () {
//   return "Точно перейти? И куда же ты собрался?";
// };

// (function(){
//     console.log('Документ и все ресурсы загружены!');
// })();


var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//   e.preventDefault();
//   console.log('EVENT TYPE: '+e.type);

//   console.log(e.target.value);
//   document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

//   output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

//   document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
// }

