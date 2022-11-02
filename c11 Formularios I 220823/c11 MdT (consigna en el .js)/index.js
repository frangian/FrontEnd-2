const registerUser = {
    name:'',
    password:'',
    telephone: 123,
    hobbies: ['',''],
    nationality:''
};

const inputName = document.querySelector('#nombre');
inputName.addEventListener('keyup', (e)=> {
    console.log(inputName.value);
    inputName.value = getNormalizadName(inputName.value);
});

function getNormalizadName(name){
    name = setUpperCaseOnlyToFirstLetter(name)
    name = removeNumersFromText(name);
    return name;
};

function setUpperCaseOnlyToFirstLetter(text) {
    if(text == ''){
        return '';
    }
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

function removeNumersFromText(text){
    const lastChar = parseInt(text[text.length - 1]);
    if (!isNaN(lastChar)) {
        return text.replaceAll(lastChar, '');
    }
    return text;
};
// ----------- normalizar telefono ---------------
const inputTel = document.querySelector('#tel');
inputTel.addEventListener('keyup', (e) => {
    console.log(inputTel.value);

});

function getNormalizadTel(tel){
    tel = removeTextFromNumbers(tel);
};

function removeTextFromNumbers(num){
    const lastChar = num[num.length - 1];
    if (isNaN(lastChar)) {
        return num.replaceAll(lastChar, '');
    }
    return num;

};

// Mesa:
// 1- normalizar el campo telefono
// 2- capturar los datos del formulario y guardarlos en el objeto 'registerUser'