"use strict";

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('OK');
}


const numm = 50;

switch (numm) {
    case 49:
        console.log('Error');
        break;

    case 100:
        console.log('Error');
        break;
    case 51:
        console.log('Ok');
        break;
    default:
        console.log('Ne v etot raz');
        break;
}