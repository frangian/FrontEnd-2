// console.log(getCountries());
// console.log("se terminó de cargar el listado.");

// getCountriesAsync(() => console.log("prueba"));
// console.log("se terminó de cargar el listado.");

// getCountriesPromise.then(function(response) {
//     console.log("prueba");
// });
// console.log("se terminó de cargar el listado.");


function loadHomeAsync() {
    const container = document.querySelector('.bancaMobile');
    loadAccountStatusAsync(container);
    loadInternationalAccountStatusAsync(container);
    loadCreditCardStatusAsync(container);
};

function loadHome() {
    const container = document.querySelector('.bancaMobile');
    loadAccountStatus(container);
    loadInternationalAccountStatus(container);
    loadCreditCardStatus(container);
};

loadHomeAsync();



// Mesa: renderizar los arrays que trae de getCountries, getCountriesAsync y getCountriesPromise y observar las diferencias
// Mostrar un alert con el tiempo que tardó el 'llamado a la API'