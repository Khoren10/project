'use strict';

const now = new Date('2021-02-13');
// new Date.parse('2021-02-13');

//Геттеры 

//  console.log(now);
//  console.log(now.getFullYear());
//  console.log(now.getMonth());
//  console.log(now.getDate());
//  console.log(now.getDay());
//  console.log(now.getHours());
//  console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

//Сеттеры

// console.log(now.setHours(40));
console.log(now);

const start = new Date();

for(let i = 0; i < 100000; i++) {
        let some = i ** 1;
}


let end = new Date();

alert(`Cikl dolzhen lala za ${end - start} milisekund`);