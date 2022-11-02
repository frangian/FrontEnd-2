// let list = [
//     { nombre: 'Emi', ciudad: "Buenos Aires" },
//     { nombre: 'Mica', ciudad: "Capital" },
//     { nombre: 'Agos', ciudad: "Capital" },
//     { nombre: 'Emi 2', ciudad: "Capital" }
// ]
// let i = 0;
// for (const item of list) {
//     for (const key in item) {
//         console.log(key, item[key]);
//         i++;
//     }
// }

// console.log(i);

// piedra=1, papel=2, tijera=3

const STONE = 1;
const PAPER = 2;
const SCISSORS = 3;
let USER_OPTION;
const PC_OPTION = parseInt(Math.random() * 3 + 1);


function validarUSER_OPTION(){
    do {
        USER_OPTION = parseInt(prompt("¿Piedra(1), papel(2) o tijera(3)"));
        
    } while (isNaN(USER_OPTION) || USER_OPTION < 1 ||  USER_OPTION > 3)
}

function resultado(){
if (USER_OPTION == PC_OPTION) {
    console.log("Empate, intentá de nuevo");
} else {
    if (USER_OPTION == STONE) {
        if (PC_OPTION == SCISSORS) {
            console.log("¡Ganaste!")
        } else {
            console.log("Perdiste :(")
        }
    }

    if (USER_OPTION == SCISSORS) {
        if (PC_OPTION == PAPER) {
            console.log("¡Ganaste!")
        } else {
            console.log("Perdiste :(")
        }
    }

    if (USER_OPTION == PAPER) {
        if (PC_OPTION == STONE) {
            console.log("¡Ganaste!")
        } else {
            console.log("Perdiste :(")
        }
    }
}
}

validarUSER_OPTION();
resultado();

// PARA HACER EN LA MESA
// 1- Validar que la opción ingresada por el usuario sea válida
// 2- En caso de que no sea válida, volver a pedir