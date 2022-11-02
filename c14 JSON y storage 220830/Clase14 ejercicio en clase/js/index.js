// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     let textToSearch = document.querySelector('#busqueda').value;
//     let url = `https://www.google.com.ar/search?q=${textToSearch}`;


//     saveSearchInHistory(textToSearch);
//     console.log();
//     showSearchHistory();
//     location.href = url;
//     // reemplaza el historial del navegador
//     // location.replace(url);
// });

// function saveSearchInHistory(textToSearch) {
//     // Busco del localStore para que no se pierda el historial al refrescar la página
//     let searchHistory = JSON.parse(localStorage.getItem('search'));
//     searchHistory.push(textToSearch);
//     localStorage.setItem('search', JSON.stringify(searchHistory));
// }

// let list = document.querySelector('#busquedas-realizadas');

// function showSearchHistory() {
//     // Antes de cargar el listado, borro los elementos anteriores
//     list.innerHTML = '';

//     let history = JSON.parse(localStorage.getItem('search'));
//     history.forEach(element => {
//         let nodo = document.createElement('p');
//         let texto = document.createTextNode(element);
//         nodo.appendChild(texto);

//         list.appendChild(nodo);
//     });
// }

// showSearchHistory();

// repaso 220914
window.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputBusqueda = document.querySelector('#busqueda').value;
    saveHistorySearchInStorage(inputBusqueda);

    const url = `https:www.google.com/search?q=${inputBusqueda}`;
    location.href = url;

});
const KEY_SEARCH = 'historial';

function saveHistorySearchInStorage(search) {
    localStorage.setItem(KEY_SEARCH, search);
};

function getHistoryFromStorage() {
    return localStorage.getItem(KEY_SEARCH);
};

function showHistoryFromStorage() {
    const container = document.querySelector('#busquedas-realizadas');
    container.innerHTML = `<p>${getHistoryFromStorage()}</p>`;
};

showHistoryFromStorage();