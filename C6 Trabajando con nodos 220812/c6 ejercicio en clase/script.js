const imgList = [
    document.createElement('img'),
    document.createElement('img'),
    document.createElement('img')
    // 1,2,3
];
// console.log(imgList);

const container = document.querySelector('.contenedor');

// imgList.forEach(img => {
//     // Creamos el 'div' class='tarjeta'
//     const divTarjeta = document.createElement('div');
//     divTarjeta.className = 'tarjeta';

//     // Creamos el 'a'href='http...'
//     const link = document.createElement('a');

//     // Obtenemos las url por pantalla y las asignamos a la imagen
//     const url = prompt('Ingresá la URL de la imagen.');
//     link.setAttribute('href', url);
//     img.setAttribute('src', url);

//     // Armamos la estrucutra de árbol
//     link.appendChild(img);
//     divTarjeta.appendChild(link);
//     container.appendChild(divTarjeta);
// });

let html = '';
imgList.forEach(img => {
    const url = prompt('Ingresá la URL de la imagen.');
    html +=
        `<div class="tarjeta">
    <a class="rutas-img" href='${url}'>
        <img src='${url}' class="imagen" alt="imagen-1" id="imagen-1" />
    </a>
</div>`;

});
// console.log(imgList);
container.innerHTML = html;