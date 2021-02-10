'use strict';


const btn = document.querySelector('.btn');
let timer,
    i = 0;

    function myAnimation () {
        const box = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame () {
         if(pos == 300) {
             clearInterval(id);
         }else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
         }
        }
    }
btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     timer = setInterval(logger, 500);
// });

// function logger () {
//     if(i === 3){
//         clearInterval(timer);
//     }
//     console.log('text');
//     i++;
// }

// let id  = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 500);      
// }, 500);