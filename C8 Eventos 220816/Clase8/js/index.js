// Función nominal declarada
sumar(1, 2);

function sumar(parametro1, parametro2) {
    // Contenido de la función, lo que hace
    return parametro1 + parametro2;
}
var sumar = function(parametro1, parametro2) {
    // Contenido de la función, lo que hace
    return parametro1 + parametro2;
}

// Función expresada
let sumar1 = function(parametro1, parametro2) {
    // Contenido de la función, lo que hace
    return parametro1 + parametro2;
}

sumar1(1, 2);


// Funciones flechas o arrows
let sumar2 = (parametro1, parametro2) => parametro1 + parametro2;


function otraFuncion() {
    console.log('otraFuncion');
}

function getEvent() {
    return "click";
}

const button = document.querySelector('button');
button.addEventListener(getEvent(), sumar);


// let func = sumar;
// let func1 = sumar(1, 2);
// console.log(func(2, 3));
function showCustomersFromAFIP() {
    console.log('Terminó el llamado al sistema externo.');
}

function getCustomesFromAFIP(parameter1, parameter2, callback) {
    // Lo que pongamos acá adentro, va a demorar 1 segundo en ejecutarlo
    console.log('Inicio de llamado al sistema externo con los siguientes valores;',
        parameter1,
        parameter2);

    setTimeout(callback, 3000);
}

getCustomesFromAFIP('valor1', 'valor2', showCustomersFromAFIP);


function multiply(valor1, valor2) {
    return valor1 * valor2;
}

const result = multiply(3, sumar(4, 5));