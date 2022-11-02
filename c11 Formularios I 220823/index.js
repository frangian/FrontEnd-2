const inputName = document.querySelector('#nombre');
inputName.addEventListener('keyup',(event) => {

    console.log(inputName.value);
    inputName.value = getNormalizedName(inputName.value);
    
});



function getNormalizedName (name){
    name = removeNumbersFromText(name)
    return setUpperCaseOnlyToTheFirstLetter(name);
}

function setUpperCaseOnlyToTheFirstLetter(text){
    return text[0].toUpperCase() + text.slice(1).toLowerCase(); // slice quita un caracter de la palabra!! o los que quieras. 
}

function removeNumbersFromText(text){
    const lastChar = parseInt(text[text.length -1]);
    if (!isNaN(lastChar)){
       return text.replaceAll(lastChar, "");
    }
    return text;
}

// normalizar el telefono 

const inputTel = document.querySelector('#tel');

function getNormalizedTel (name){
    name =  removeLettersFromText(name);
    name = maxNumersTel(name);
    return name;
}

function removeLettersFromText(text){
    const lastChar = (text[text.length -1]);
    if (isNaN(lastChar)){
       return text.replace(lastChar, "");
    }
    return text;
}
function maxNumersTel(text){
    const lastChar = (text[text.length -1]);
    if(text.length > 9){
        return text.replace(lastChar, "");
    }
    return text;
}

inputTel.addEventListener('keyup',(event) => {

    console.log(inputName.value);
    inputTel.value = getNormalizedTel(inputTel.value);
    
});

// capturar los datos del formulario y guardarlo en el objeto registerUser. 

const registerUser = {
    name:"",
    password:"",
    telephone: 0,
    hobbies:[],
    nationality:"",
};

const boton = document.querySelector('button');
const inputPassword = document.querySelector('#pass');
const inputHobbies = document.getElementsByName('hobbies');


function hobbiesCliqueados(array){
    let elegidos = [];
    array.forEach(element => {
        if(element.checked == true){
            elegidos.push(element.value);
        }
    });
    return elegidos; 
}


// FALTARIA EL DE NACIONALIDAD. 

boton.addEventListener('click', (e) =>{
    e.preventDefault();
    registerUser.name = inputName.value;
    registerUser.password = inputPassword.value;
    registerUser.telephone = inputTel.value;
    registerUser.hobbies = hobbiesCliqueados(inputHobbies); 
    console.log(registerUser); 
})