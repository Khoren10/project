"use strict";

//Методы строк
const str = 'test';

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf('e'));

const logg = "Hello world";

console.log(logg.slice(6, 10));
console.log(logg.slice(6));

console.log(logg.substring(6, 10));

console.log(logg.substr(6, 5));

// Методы чисел 

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));