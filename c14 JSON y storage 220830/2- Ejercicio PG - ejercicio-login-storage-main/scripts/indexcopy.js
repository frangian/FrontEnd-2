// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
    usuarios: [{
            id: 1,
            name: "Steve Jobs",
            email: "steve@jobs.com",
            password: "Steve123",
        },
        {
            id: 2,
            name: "Ervin Howell",
            email: "shanna@melissa.tv",
            password: "Ervin345",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            email: "nathan@yesenia.net",
            password: "Floppy39876",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            email: "julianne.oconner@kory.org",
            password: "MysuperPassword345",
        },
    ],
};

// ACTIVIDAD CLASE 13

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona haga click en el botón iniciar sesión.
// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."
// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una persona que se encuentre registrada en la base de datos.
// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar un mensaje de bienvenida al sitio.
// En caso de que alguna de las validaciones no sea exitosa, se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"
/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
const iniciandoSesion = document.querySelector('#loader');
const botonInicio = document.querySelector('.login-btn');
const email = document.querySelector('#email-input');
const pass = document.querySelector('#password-input');
const error = document.querySelector('#error-container');
const botonCierre = document.createElement('button');
botonCierre.classList.add('logout-btn');
botonCierre.setAttribute('type', 'button');
botonCierre.innerText = "Cerrar sesion";

let nombreUsuario = '';

window.addEventListener('load', () => {
    if (localStorage.getItem('nombreUsuario')) {
        document.querySelector('main').innerHTML = `
          <h1> Bienvenido al sitio 😀 ${localStorage.getItem('nombreUsuario')}</h1>
          `;
        document.querySelector('main').appendChild(botonCierre)
    }
});

botonInicio.addEventListener('click', () => {
    iniciandoSesion.classList.remove('hidden')
    error.classList.add('hidden');

    setTimeout(() => {
        iniciandoSesion.classList.add('hidden')
    }, 3000);

    setTimeout(validarDatos, 3000);

    function validarDatos() {
        if (isEmailValid(email) && isPassValid(pass) && isPersonRegistered(baseDeDatos.usuarios)) {
            document.querySelector('main').innerHTML = `
              <h1> Bienvenido al sitio 😀 ${nombreUsuario}</h1>
              `;
            document.querySelector('main').appendChild(botonCierre)
            saveToLocalStorage();
        } else {
            error.classList.remove('hidden');
            error.innerHTML = '<small>Alguno de los datos ingresados son incorrectos</small>'
        };
    };

    findRegisteredPersonName(baseDeDatos.usuarios);

    function saveToLocalStorage() {
        if (localStorage.getItem('nombreUsuario') == null) {
            localStorage.setItem('nombreUsuario', nombreUsuario)
            localStorage.setItem("emailUsuario", email.value);
        }
    };

    function isEmailValid(texto) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto.value)) {
            return true;
        }
        return false;
    };

    function isPassValid(pass) {
        if (pass.value.length >= 5) {
            return true;
        }
        return false;
    };

    function isPersonRegistered(array) {
        for (let index = 0; index < array.length; index++) {
            if (array[index].email == email.value && array[index].password == pass.value) {
                return true;
            }
        }
        return false;
    };

    function findRegisteredPersonName(array) {
        for (let index = 0; index < array.length; index++) {
            if (array[index].email == email.value && array[index].password == pass.value) {
                return nombreUsuario = array[index].name;
            }
        }
        return nombreUsuario = '';
    };
});

botonCierre.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});


// ACTIVIDAD CLASE 14

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona recargue la página. Para ello, deberás validar si existe información del usuario al momento en que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y separar la información que tienes que almacenar, a partir del objeto que contiene la información del usuario.

   ¡Manos a la obra!
 */