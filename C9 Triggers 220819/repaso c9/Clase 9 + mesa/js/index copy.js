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

const userNameElement = document.querySelector("#nombreUsuario"); 
userNameElement.addEventListener("click",askName) 

setTimeout(() => {
    showAlbums();
}, 500);
showLegends();
showBanner();


// 1- Pedimos el nombre al usuario
function askName() {
    document.querySelector("#nombreUsuario").textContent = prompt("Ingresa tu nombre");
}

// 2- Renderizamos los álbumes
function showAlbums() {
    let container = document.querySelector('.covers');
    container.innerHTML = '';
    // let component = '';
    albumesFamosos.forEach(e => {
        container.innerHTML += `
        <li>
            <img src='${e.imagen}'>
            <p>${e.nombre}</p>
            <i onclick="markAsFavourite('${e.id}')" class="fa fa-heart ${e.like ? 'favorito' : ''}"></i>
        </li>
        `
    });
    // container.innerHTML += component;

}

// 3 - Marcamos como favorito
function markAsFavourite(indentificador) {
    console.log(indentificador);
    albumesFamosos.forEach(e => {
    if(e.id === indentificador){
        e.like = e.like ? false : true;
    }

    showAlbums();


});

}

// Devuelve la cantidad de álbumes marcados como favoritos
function getFavouritesAmount() {

}

// Mostramos la cantidad de álbumes mostrados y la de favoritos
// Teniendo en cuenta singular y plural
function showLegends() {

}

// Mostramos el banner publicitario al pie del sitio

// function showBanner() {
//     let banners = document.querySelector('.banner');
//     banners.innerHTML = '';
//         bannerList.forEach(e => {
//             banners.innerHTML += `
//             <a href='${e}' target='_blank'>
//             <img src='${e}'>
//             </a>
//             `
//         });
// }
setInterval(() => {
    
}, interval);
function showBanner() {
    let banners = document.querySelector('.banner');
    banners.innerHTML = '';
        bannerList.forEach(e => {
            console.log(e);
            setTimeout(() => {
                console.log(e);
                banners.innerHTML += `
                <a href='${e}' target='_blank'>
                <img src='${e}'>
                </a>
                `
                }, 5000);
        });
}

// Mesa:
// 1- Retrasar el renderiado de los álbumes 1/2" 
// 2- Mostrar los banners en el div class=banner
// 3- Al hacer click en una imagen, abrir la imagen en una pestaña nueva
// 4- con el setInterval, intercambiar los banners cada 3"