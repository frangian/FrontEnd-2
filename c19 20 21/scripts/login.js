// emiliano.gallo@digitalhouse.com 1234

window.addEventListener('load', function() {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const url = 'https://ctd-todo-api.herokuapp.com/v1';


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    window.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('#inputEmail');
        const password = document.querySelector('#inputPassword');

        const reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (reg.test(email.value)) {
            login(email.value, password.value);
        }
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                     */
    /* -------------------------------------------------------------------------- */
    const TOKEN_KEY = 'Token';

    function login(email, pass) {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        }

        fetch(url + '/users/login', settings)
            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem(TOKEN_KEY, data.jwt);
                location.replace('../mis-tareas.html');
            });
    }
});