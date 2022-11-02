let email = document.getElementsByName('email').value
console.log(email);

function normalizeNameLength (){
    if(document.getElementsByName('name').length <= 25){
        return document.getElementsByName('name').value
    }
};
// function validateEmail(){
//     document.getElementsByName('email').value

//     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// }
// function validarEmail(valor) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
//      console.log("La dirección de email " + valor + " es correcta.");
//     } else {
//      console.log("La dirección de email es incorrecta.");
//     }
// }
// validarEmail(email);

function validatePassword(){
    let pass = document.getElementsByName('pass').value;
    if(pass.length >= 8 && pass.length <= 20){
        console.log(pass);
    }
}
validatePassword();