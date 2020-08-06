"use strict";


// function declaration
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}
showFirstMessage('Hello world');


// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(6,3));
// console.log(calc(4,7));


function ret() {
    let num = 50;

    // .....

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//function expression

const logger = function() {
    console.log('Hello');
};
logger();


//Стрелочные функции

const calc = (a, b) => {
    
    return a + b;
};
console.log(calc(4, 2));

 