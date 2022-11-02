const API_URL = 'https://dog.ceo/api/breeds/image/random';

function callApi() {
    fetch(API_URL)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            loadImageAndShowAlert(data.message);
        });
}

let button = document.querySelector('button');
button.addEventListener('click', function() {
    callApiWithError();
});

function loadImageAndShowAlert(src) {
    document.querySelector('img').setAttribute('src', src);
    console.log('Se cargó la imagen correctamente.')
}

function callApiWithError() {
    fetch(API_URL + 'a')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            loadImageAndShowAlert(data.message);
        })
        .catch(error => {
            console.error('Ocurrió un error al llamar a la API - ' + error);
        });
}

function testTryAndCatch() {
    try {
        throwSomeError();
        console.log('Se ejecuta solo si NO hay error');
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Se ejecuta haya o no error');
    }
}

function throwSomeError() {
    throw new Error('No se puede realizar la operación.');
}

testTryAndCatch();