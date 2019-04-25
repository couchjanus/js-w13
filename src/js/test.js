// test.js
'use strict';

// Создание элементов массива возможно несколькими способами:

// var earth = new Array(4); /* массив из 4-х элементов*/
// earth[0] = "Earth";
// earth[1] = "24 h";
// earth[2] = 6378;
// earth[3] = 365.25;

// var earth = new Array("Earth", "24 h", 6378, 365.25);

// var earth = new Array(); // пустой массив
// var earth = []; // пустой массив

// earth.xtype = "Solar";
// earth.xday = "24 h";
// earth.radius = 6378;
// earth.period = 365.25;

// var country = ["UK", "USA", "GB"];

// Если вы указываете числа или значения true или false при определении массива, 
// то тип переменной будет числовой или булев тип, а не строковый.

// var arr = ['первый элемент', 'второй элемент'];
// console.log(arr[0]); // напечатает 'первый элемент'
// console.log(arr[1]); // напечатает 'второй элемент'


// доступ к элементам массива в javaScript:
// var mas = new Array(1, 25, 'Привет');
// mas[0] = 'Пока';
// mas[1] = 35;


// Свойство массивов length взаимосвязано с числовыми свойствами.
// var fruits = [];
// fruits.push('банан', 'яблоко', 'персик');
// console.log(fruits.length); // 3

// Длина length – не количество элементов массива, а последний индекс + 1.
// var arr = [];
// arr[1000] = true;
// console.log(arr.length); // 1001


// При уменьшении length массив укорачивается.
// var arr = [1, 2, 3, 4, 5];
// arr.length = 2; // укоротить до 2 элементов
// console.log(arr[3]);
// arr.length = 5; // вернуть length обратно, как было
// console.log(arr[3]); // undefined: значения не вернулись

//   Массивы в JavaScript индексируются с нуля: первый элемент массива имеет индекс, равный 0, а индекс последнего элемента равен значению свойства массива length минус 1.
// var arr = ['первый элемент', 'второй элемент'];
// console.log(arr[0]); // напечатает 'первый элемент'
// console.log(arr[1]); // напечатает 'второй элемент'
// console.log(arr[arr.length - 1]); // напечатает 'второй элемент'

// Удаление элементов массива
// в javascript удалить элемент массива можно при помощи оператора delete:

// var myColors = new Array("red", "green", "blue");
// delete myColors[1];
// console.log(myColors); // red,,blue

// Самый простой способ очистить массив - это arr.length=0.

// вывести элементы массива на экран, в качестве конечного значения счетчика цикла использовать свойство length

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr.length);


// вывод элементов массива с использованием обычного цикла for:

// var mas = new Array(1, 25, 'Привет');
// mas[0] = 'Пока';
// mas[1] = 35;

// function showElement() {
//     for (i = 0; i < 3; i++) {
//         console.log(mas[i]);
//     }
// }
// showElement();

// var child = document.createElement("h2");
// var childText = document.createTextNode("Hello Element!");

// appendChild - Добавляет элемент в конец списка дочерних элементов родителя. 
// child.appendChild(childText);

// Вставляемый узел становится последним в списке дочерних узлов элемента.

// var childElement = document.querySelector('#box').appendChild(child);

// var div = document.createElement('div');
// var Html = '<h2>Вставляемый узел</h2> становится последним в списке дочерних узлов элемента.';
// div.innerHTML = Html;

// document.querySelector('#box').appendChild(div);

// var aOne = document.createElement('a');
// aOne.href = "http://google.com"
// aOne.innerText = "Goodling!"
// document.querySelector('#box').appendChild(aOne);
// ==============================================
var element = document.createElement("article");

element.innerHTML = "<h2>Вставка в самое начало родителя, то есть перед первым узлом!</h2>";
var parent = document.querySelector('#box');
// Вставка в самое начало родителя, то есть перед первым узлом
// parent.insertBefore(element, parent.firstChild);

// ================================================
// Вставка в конец родителя, аналогично appendChild()

var element = document.createElement("article");

// element.innerHTML = "<h2>Вставка в конец родителя, аналогично appendChild()!</h2>";
// parent.insertBefore(element, null);


// Вставка перед конкретным элементом parentChild
element.innerHTML = "<h2>Вставка перед конкретным элементом parentChild!</h2>";
var parentChild = document.querySelector('#box h3');

parent.insertBefore(element, parentChild);


// Вставка после конкретного элемента parentItem
// здесь происходит вставка перед тем узлом, который находится сразу за узлом parentChild

var parentItems = document.querySelector('#items');
var parentItem = parentItems.firstElementChild;
parentItems.insertBefore(element, parentItem.nextSibling);

// =====================================
// Создаем новый пустой элемент
var sp1 = document.createElement("span");

// Присваиваем ему id 'newSpan'
sp1.setAttribute("id", "newSpan");

// Создаем строку.
var sp1_content = document.createTextNode("New replacement span element.");

// Добавляем контент в созданный нами узел
sp1.appendChild(sp1_content);

// создаем ссылку на элемент который будем заменять
var sp2 = document.querySelector('.footer-socials');
var parentDiv = sp2.parentNode;

// заменяем существующий элемент sp2 на созданный нами sp1
// parentDiv.replaceChild(sp1, sp2);

// ==============================================
// добавляем новый элемент
var list = document.querySelector('.footer-socials');

list.insertAdjacentHTML('beforeend', '<a href="#"><i class="fab fa-github"></i></a>');


// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td = document.createElement('td');
// td.textContent = 'Data Cell 1';
// tr.appendChild(td);
// table.appendChild(tr);
// output.appendChild(table);


// var input = document.querySelector('input[type="text"]');
// var submit = document.querySelector('.form-inline input[type="submit"]');
// var ul = document.getElementById('items');

// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     let li = document.createElement('li');
//     let liText = document.createTextNode('New item');
//     li.appendChild(liText);
//     ul.appendChild(li);

// });

// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     let li = document.createElement('li');
//     li.textContent = input.value;
//     ul.appendChild(li);
// });
// ==============Шаблоны в HTML-коде===============
var templateSource = document.getElementById("template-item").innerHTML;   
var templateSource = document.getElementById("template-item").innerHTML;      

var article = document.createElement("article");
article.innerHTML = document.getElementById("template-item").innerHTML;
document.querySelector('.footer').appendChild(article);

// ==============HTML элемент template =================

// let template =  document.getElementById("cells-to-repeat").innerHTML;
// document.querySelector('.table-row').append(template);

// Клонирование узлов копирует все атрибуты и их значения.
let el = document.getElementById("cells-to-repeat");
// let e = el.cloneNode(true);
// console.log(e.content);
// document.querySelector('.table-row').append(e.content);
document.querySelector('.table-row').append(document.importNode(el.content, true));


// использование цикла for in для перебора элементов массива:

// function showElement() {
//     for (var i in mas) {
//         console.log(mas[i]);
//     }
// }
// showElement();


// var obj = {a:1, b:2, c:3};
// for (var key in obj) {
//   console.log("obj." + key + " = " + obj[key]);
// }

// Вы также можете использовать for… in для итерации по значениям индекса итерируемого типа массива или строки:

// let str = 'Turn the page';

// for (let index in str) {
//   console.log(`Index of ${str[index]}: ${index}`);
// }
// let str = 'Turn the page';
//    var counter = 0;
//    for (var key in str) {
//      counter++;
//    }


//    const product = {
//     id: 0,
//     name: "Really Cool Cat",
//     price: 177,
//     picture: "cat3.jpg",
//  };
//  product.description = "Really Cool Cat";
//  // порядок перебора соответствует порядку присвоения свойства
//  for (var prop in product) {
//     console.log( prop ); // id, name, price, picture, description
//  }

//  var users = {
//     "9": 'Gertrude',
//     "3": 'Henry',
//     "1": 'Melvin'
//   };

//   for (var key in users) console.log( key ); // 1, 3, 9

//   var usersPlus = {
//     "+9": 'Gertrude',
//     "+3": 'Henry',
//     "+1": 'Melvin' };
//   for (var key in usersPlus) {
//     var value = usersPlus[key];
//     key = +key; // ..если нужно именно число, преобразуем: "+1" -> 1
//     alert( key + ": " + value ); // 9, 3, 1 во всех браузерах
//   }

//   let animals = ['🐔', '🐷', '🐑', '🐇'];
//   let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

//   for (let animal of animals) {
//     // Random name for our animal
//     let nameIdx = Math.floor(Math.random() * names.length);

//     console.log(`${names[nameIdx]} the ${animal}`);
//   }

// Строки также являются итеративным типом, поэтому вы можете использовать for…of для строк

// let str = 'abcde';

// for (let char of str) {
//   console.log(char.toUpperCase().repeat(3));
// }

// const product = {
//     id: 0,
//     name: "Cool Cat",
//     price: 177,
//     picture: "cat1.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur elit."
// };
// for (let key in product) { 
// console.log(key + ': ' + product[key]);
// }


// // Почему нельзя использовать форму obj.key?  Используя такую запись вы подразумеваете, что хотите получить значение свойства key итерируемого объекта, а не значение соответствующее данному ключу.


// for (let key in product) {
//            console.log(key + ': ' + product.key);
//  }

// // Метод Object.keys()

//  console.log(Object.keys(data));
//  // консоль: Array(8) [ "0", "1", "2", "3", "4", "5", "6", "7" ]

 // Массивоподобный объект
//  console.log(Object.keys(data[1]));
//  // консоль: Array(5) [ "id", "name", "price", "image", "description" ]


// Массивоподобный объект со случайным порядком ключей

//        var an_obj = { 100: 'a', 2: 'b', 7: 'c' };

//        console.log(Object.keys(an_obj)); // консоль: ['2', '7', '100']

// Свойство getFoo является не перечисляемым свойством
//        var my_obj = Object.create({}, { 
//         getFoo: { 
//         value: function() { return this.foo; } 
//         } 
//         });
//                my_obj.foo = 1;
//                console.log(Object.keys(my_obj)); // консоль: ['foo']
        
      
//                const $template = document.getElementById("productItem").content;  

//                for (var i=0; i<Object.keys(data).length; i++)  {
//                          document.querySelector('.main')
//                .append(makeProductItem($template, data[i])
//                .cloneNode(true));
//                }
            
              

// Метод forEach(callback[, thisObject]) выполняет callback-функцию по каждому элементу массива.

//                var a = ['a', 'b', 'c'];
// выводит в консоль каждый элемент массива по порядку
//                a.forEach(function(element) { 
//                console.log(element);
//                } );
            
            
              
              
//                var colors = ['red', 'green', 'blue'];

//                colors.forEach(function(color) {
//                 console.log(color);
//                });
              
// Как вариант, вы можете сократить код программы, используя стрелочные функции из ES6:

//                var colors = ['red', 'green', 'blue'];
              
//                colors.forEach(
//                color => console.log(color)
//                );
              
              
              
// Метод slice(start_index, upto_index) возвращает секцию массива как новый массив.

//                var sliceArray = new Array ("a", "b", "c", "d", "e");
//                     sliceArray = sliceArray.slice(1, 4);
//                     // начиная с индекса 1 извлекаются элементы
//                     // вплоть до индекса 3
//                     console.log(sliceArray);
//                     // sliceArray = [ "b", "c", "d"]
