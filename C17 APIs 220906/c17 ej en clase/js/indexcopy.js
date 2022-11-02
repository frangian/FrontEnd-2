const API_URL = 'https://dog.ceo/api/breeds/image/random';

function callApi() {
    fetch(API_URL)
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            loadImageAndShowAlert(data.message);
        })
}
let button = document.querySelector('button');
button.addEventListener('click', function() {
    callApiWithError();
});

function loadImageAndShowAlert(src) {
    document.querySelector('img').setAttribute('src', src);
    console.log('Se cargó la imagen correctamente.')
}

const API_URL2 = API_URL + 'a';

function callApiWithError() {
    fetch(API_URL)
        .then((respuesta) => {
            if (respuesta.ok) {
                return respuesta.json();
            }
        })
        .then((data) => {
            // console.log('Antes del loadimage');
            loadImageAndShowAlert(data.message);
            // console.log('Despues del loadimage');
        })
        .catch((error) => {
            console.error("ocurrio error: " + error);
        })
}

function testTryAndCatch() {
    try {
        throwSomeError();
        console.log('se ejecuta SOLO si NO hay error');
    } catch (error) {
        console.error(error);
    } finally {
        console.log('se ejecuta haya o no error');
    }
    console.log('fin del llamado');
}

function throwSomeError(params) {
    throw new Error('No se puede realizar la operacion.')
}
// testTryAndCatch();