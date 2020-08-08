'use strict';

function first() {
    setTimeout(function() {
        console.log(1);

    }, 1000);
}

function second() {
    console.log(2);
}

first();
second();

// Callback


function learnJS(lang, lang2, callback) {
    setTimeout(function() {
        console.log(`Я учу: ${lang}`);
        console.log(`Я учу: ${lang2}`);
        callback();
    }, 1000);
}

// Способ писать код анонимная функция N1
// learnJS('JS', function() {
//     console.log('Я прошёл этот урок');
// });

// Способ писать код N2
function done() {
    console.log('Я прошёл этот урок');
}
learnJS('JS','PHP',done);

