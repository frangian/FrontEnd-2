let title = document.querySelector('h1');
title.className = 'red';

// let result = confirm('¿Querés achicar el texto de la pantalla?');
// if (result) {
//     document.querySelector('body').className = 'body-small';
// }

let elements = document.querySelectorAll('li');

elements.forEach((element, index) => {
    element.innerText = `${index+1} - ${element.innerText}`;
    // element.innerText = index + 1 + ' - ' + element.innerText;
});

// for (let index = 0; index < elements.length; index++) {
//     let element = console.log(elements[index]);
// }