//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

document.querySelector('#tarjeta').classList.add('card');

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

document.querySelector('img').setAttribute('src','https://www.youtube.com/img/desktop/yt_1200.png');

//3- Quitarle al titulo la clase que le está dando un formato feo

document.querySelector('.titulo-feo').removeAttribute('class');

//4- Chequear si el link a youtube posee o no el atributo href

console.log(document.querySelector('#link_youtube').hasAttribute('href'));

//5- Obtener el href del link a wikipedia y mostrarlo por consola

console.log(document.querySelector('#link_youtube').getAttribute('href'));
