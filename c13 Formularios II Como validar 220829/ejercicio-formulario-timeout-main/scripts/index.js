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

// ACTIVIDAD

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
const boton = document.querySelector('.login-btn');
const email = document.querySelector('#email-input');
const pass = document.querySelector('#password-input');
const error = document.querySelector('#error-container');

boton.addEventListener('click', () => {
    // console.log("se hizo click en el botón iniciar sesión");
    document.querySelector('#loader').classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('#loader').classList.add('hidden')
    }, 3000);

    setTimeout(validarDatos, 3000);

    function validarDatos() {
        if (isEmailValid(email) && isPassValid(pass) && isPersonRegistered(baseDeDatos.usuarios)) {
            console.log("bien");
            console.log(email.value);
            console.log(pass.value);
            document.querySelector('form').classList.add('hidden');
            document.querySelector('h1').innerText = "Bienvenido al sitio 😀";
        } else {
            console.log("mal");
            error.classList.remove('hidden');
            error.innerHTML = '<small>Alguno de los datos ingresados son incorrectos</small>'
        };
    }
});

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