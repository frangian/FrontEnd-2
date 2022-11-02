console.log(getCountries());
console.log('El listado de paises ya fue mostrado');

console.log(getCountriesAsync());
getCountriesAsync(() => console.log("prueba"));
console.log('El listado de paises ya fue mostrado');


getCountriesPromise.then((respuesta) => {
    console.log(respuesta.list);
});

function loadHomeAsync() {
    const container = document.querySelector('.bancaMobile');
    let start = performance.now();
    loadAccountStatusAsync(container);
    loadInternationalAccountStatusAsync(container);
    loadCreditCardStatusAsync(container);
    let end = performance.now();
    alert('Tardo en ejecutarse ' + ((end - start) / 1000) + ' segundos');
}

function loadHome() {
    const container = document.querySelector('.bancaMobile');
    let start = performance.now();
    loadAccountStatus(container);
    loadInternationalAccountStatus(container);
    loadCreditCardStatus(container);
    let end = performance.now();
    alert('Tardo en ejecutarse ' + ((end - start) / 1000) + ' segundos');
}

loadHome();

// Mesa: renderizar los arrays que trae de getCountries, getCountriesAsync y getCountriesPromise y observar las diferencias
// Mostrar un alert con el tiempo que tardó el 'llamado a la API'