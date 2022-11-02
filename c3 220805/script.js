const STONE = 1;
const PAPER = 2;
const SCISSORS = 3;


// console.log(userOption);
// console.log(pcOption);

// function unaFuncion() {
//     console.log(SCISSORS);
// }

// function otraFuncion(userOption) {
//     console.log(valor);
// }

// unaFuncion();
// otraFuncion(SCISSORS);

function playGame() {
    let isInputValid;
    let userOption;
    do {
        userOption = prompt("¿Piedra(1), papel(2) o tijera(3)");
        isInputValid = isUserOptionValid(userOption);
    } while (isInputValid == false);

    // console.log("Pasó el dowhile");
    const pcOption = parseInt(Math.random() * 3 + 1);
    checkWinner(userOption, pcOption);
}

function playGame1() {
    let isInputValid = false;
    let userOption;

    while (isInputValid == false) {
        userOption = prompt("¿Piedra(1), papel(2) o tijera(3)");
        isInputValid = isUserOptionValid(userOption);
    }

    const pcOption = parseInt(Math.random() * 3 + 1);
    console.log(checkWinner(userOption, pcOption));
}

function checkWinner(userOpt, pcOpt) {
    let resultado = 'empate';

    // 2 == 1 + 1  1 == 3 - 2
    // 3 == 2 + 1
    if (userOpt == pcOpt + 1  || userOpt == pcOpt - 2) {
        resultado = 'victoria';
    }

    if (userOpt == pcOpt - 1 || pcOpt == userOpt - 2) {
        resultado = 'derrota';
    }

    return resultado;
}

function isUserOptionValid(userOpt) {
    let result = parseInt(userOpt);
    return !isNaN(result) && result >= 1 && result <= 3;
    // if (!isNaN(result) && result >= 1 && result <= 3) {
    //     return true;
    // } else {
    //     return false;
    // }
}

function ganar2(){
    let ganador = 0;
    let derrota = 0;
    do {
        let resultado = playGame();
        // return resultado;
        if(resultado == 'victoria'){
            ganador += 1;
        } else{
            derrota += 1
        }
    } while (ganador < 3 || derrota < 3);
}
ganar2();