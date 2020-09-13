'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

    //   box.style.backgroundColor = 'green';
    //   box.style.width = '500px';

box.style.cssText = `background-color: purple; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'pink';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'silver';
});

const div = document.createElement('div');
//const text = document.createTextNode('Tut bil ya');

div.classList.add('black');
//document.body.append(div);

wrapper.append(div); // -> В конец
//wrapper.appendChild(div); // -> Старая версия

//wrapper.prepend(div); // -> В начало 
//wrapper.before(div);  // -> Перед
//wrapper.after(div);  // -> После

//hearts[0].after(div);

//wrapper.insertBefore(div,hearts[1]);


//circles[0].remove(); // -> Удаление 
//wrapper.removeChild(hearts[1]); // -> Старая версия

//hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // ->Старая версия


div.innerHTML = '<h2>Hello</h2>';

// div.textContent = "Hello"; // -> Только текст

div.insertAdjacentHTML('afterbegin','<h2>Privet</h2>');