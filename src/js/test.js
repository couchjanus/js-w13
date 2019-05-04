// test.js
'use strict';

var shoppingCart = [];

// if (window.sessionStorage && window.localStorage) {
// 	// объекты sessionStorage и localStorage поддерживаются
// 	console.log('объекты sessionStorage и localStorage поддерживаются');
// } else {
// 	// объекты sessionStorage и localStorage не поддерживаются
// 	console.log('объекты sessionStorage и localStorage не поддерживаются');
// }

// try {
// 	localStorage.setItem('ключ', 'значение');
// } catch (e) {
// 	if (e == QUOTA_EXCEEDED_ERR) {
// 		console.log('Превышен лимит');
// 	}
// }

// var numbers = '[0, 1, 2, 3]';
// numbers = JSON.parse(numbers);
// console.log(numbers[1]); // 1

// var user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// console.log(user.friends[1]); // 1

// function saveCart(shoppingCart) {
//     if (window.localStorage) {
//         console.log(JSON.stringify(shoppingCart));
//     }
// }

// function saveCart(shoppingCart) {
// 	if (window.localStorage) {
// 		//    localStorage.setItem('shoppingCart',  JSON.stringify(shoppingCart));
// 		localStorage.shoppingCart = JSON.stringify(shoppingCart);
// 	}
// }

// let item = {
// 	Id: 1,
// 	Product: 'name',
// 	Price: 111,
// 	Quantity: 2,
// 	Picture: 'picture'
// };

// shoppingCart.push(item);

// Вызываем функцию
// saveCart(shoppingCart);

// Результат работы JSON.stringify [{"Id":1,"Product":"name","Price":111,"Quantity":2,"Picture":"picture"}]

// Получим наш сериализованный объект через API

// var shoppingCartObj = localStorage.getItem("shoppingCart");
// console.log(shoppingCartObj);

// if (localStorage.shoppingCart) {
//     shoppingCart = JSON.parse(localStorage.shoppingCart);
// }

// Получим наш сериализованный объект через API
// Одновременно преобразуем к обычному объекту JavaScript
// var shoppingCartObj = JSON.parse(localStorage.getItem("shoppingCart"));
// console.log(shoppingCartObj);

// function showCart(shoppingCart){
//     if (shoppingCart.length == 0) {
//         console.log("Your Shopping Cart is Empty!");
//         return;
//     } else { console.log("Your Shopping Cart Contains: ", shoppingCart.length, " Items");
//       return;
//     }
// }

// Vanila JS

// function openCart(e) {
// 	showCart(shoppingCart);
// 	e.preventDefault();
// 	document.querySelector('.aside').classList.toggle('open');
// 	document.querySelector('.backdrop').classList.toggle('backdrop--open');
// }

// function closeCart(e) {
// 	e.preventDefault();
// 	document.querySelector('.aside').classList.toggle('open');
// 	document.querySelector('.backdrop').classList.toggle('backdrop--open');
// }

// document.getElementById('cart-toggle').addEventListener('click', (e) => openCart(e));
// document.querySelector('.toggle-sidebar').addEventListener('click', (e) => closeCart(e));

// =================Удаление значения===========================
// localStorage.removeItem("Ключ");

// Удаление значения
// delete localStorage["Ключ"];

// Очистка всего хранилища
// localStorage.clear();

//Добавляем или изменяем значение:
// localStorage.setItem('myKey', 'myValue');
// теперь в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводм его в консоль:
// var localValue = localStorage.getItem('myKey');
// console.log(localValue); //"myValue"

// То же самое, только с квадратными скобками:
// localStorage["Ключ"] = "Значение"; //установка значения
// localStorage["Ключ"]; // Получение значения
// delete localStorage["Ключ"]; // Удаление значения

// localStorage работает и с вложенными структурами, например, объектами.

//создадим объект
// var obj = {
//  item1: 1,
//  item2: [123, "two", 3.0],
//  item3:"hello"
// };

// var serialObj = JSON.stringify(obj);  //сериализуем его
// localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"
// var returnObj = JSON.parse(localStorage.getItem("myKey")); // парсим его обратно в объект
