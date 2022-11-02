/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y123",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
},
{
    id: "z123",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: true
},
{
    id: "f123",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "a123",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "b123",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];

const bannerList = [
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MUPRqGYw6htuMbw0zI-R1MxtXEtoM03JSbZm--G4C33tP8BaT6UmzH5YTUikZlKUpA&usqp=CAU',
'https://arteint.com/wp-content/uploads/2017/12/banner-publicidad-01.jpg',
'https://thumbs.dreamstime.com/b/encabezado-de-banner-concepto-prueba-productos-consumidores-con-amplificador-probando-nuevas-propiedades-del-producto-pruebas-162414491.jpg'
];

const userNameElement = document.querySelector('#nombreUsuario');
userNameElement.addEventListener('click', askName);

document.querySelector('#nombreUsuario').addEventListener
showLegends();
showBanner();
setInterval(showBanner(), 3000);
setTimeout(() => {
showAlbums();
}, 500);

// 1- Pedimos el nombre al usuario
function askName() {
userNameElement.textContent = prompt("Ingresá tu nombre");
}

// 2- Renderizamos los álbumes
function showAlbums() {
const covers = document.getElementsByClassName('covers')[0];
covers.innerHTML = '';

albumesFamosos.forEach(album => {
    // albumesFamosos[i] == album

    covers.innerHTML += `
    <li>
        <img src="${album.imagen}" alt="${album.nombre}">
        <p>${album.nombre}</p>
        <i onclick="markAsFavourite('${album.id}')" class="fa fa-heart ${album.like ? 'favorito' : ''}"></i>
    </li>
    `;
});
}

// 3 - Marcamos como favorito
function markAsFavourite(indentificador) {
console.log(indentificador);

albumesFamosos.forEach(album => {
    if (album.id === indentificador) {
        // Operador ternario
        album.like = album.like ? false : true;

        // if else
        // if (album.like) {
        //     album.like = false;
        // } else {
        //     album.like = true;
        // }
    }
});
showAlbums();
}

// Devuelve la cantidad de álbumes marcados como favoritos
function getFavouritesAmount() {

}

// Mostramos la cantidad de álbumes mostrados y la de favoritos
// Teniendo en cuenta singular y plural
function showLegends() {

}

// Mostramos el banner publicitario al pie del sitio
function showBanner() {
    const banners = document.querySelector('.banner');
    bannerList.forEach(banner => {
            banners.innerHTML = `<a href="${banner}"><img src="${banner}"/></a>`;
        });
    };

function showBanner() {
    const banners = document.querySelector('.banner');
    bannerList.forEach(banner => {
            banners.innerHTML = `<a href="${banner}"><img src="${banner}"/></a>`;
        });
};

// function showBanner() {
// const banners = document.querySelector('.banner');
// bannerList.forEach(banner => {
//     setInterval(() => {
//         banners.innerHTML = `
//         <a href="${banner}"><img src="${banner}"/></a>
//     `;

//     }, 3000);
// });
// }

// function showBanner() {
//     const banners = document.querySelector('.banner');
//     bannerList.forEach(banner => {
//             banners.innerHTML = setInterval(() => {` <a href="${banner}"><img src="${banner}"/></a> `}, 3000)
//     })
//     }

// Mesa:
// 1- Retrasar el renderizado de los álbumes 1/2" /lito.
// 2- Mostrar los banners en el div class=banner /lito
// 3- Al hacer click en una imagen, abrir la imagen en una pestaña nueva /lito
// 4- con el setInterval, intercambiar los banners cada 3"