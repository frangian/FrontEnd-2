// Clase 11
// Mesa:
// 1- Normalizar el campo teléfono
// 2- Capturar los datos del formulario y guardarlos en el objeto 'registerUser'

const registerUser = {
    name: '',
    password: '',
    telephone: 123,
    hobbies: ['', ''],
    nationality: ''
};

const nameInput = document.querySelector('#nombre');
nameInput.addEventListener('keyup', (e) => {
    // console.log(e.key);
    nameInput.value = getNormalizedName(nameInput.value);

    function getNormalizedName(name) {
        name = setUpperCaseOnlyToTheFirstLetter(name);
        name = removeNumbersFromText(name);
        return setUpperCaseAfterEachSeparation(name);
    }

    function setUpperCaseOnlyToTheFirstLetter(text) {
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    }

    function removeNumbersFromText(text) {
        const lastChar = parseInt(text[text.length - 1]);

        if (isNaN(lastChar) == false) {
            // si estamos acá, 'lastChart' es número
            return text.replace(lastChar, '');
        }

        return text;
    }

    function setUpperCaseAfterEachSeparation(text) {
        let nextIsUpperCase = true;
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (nextIsUpperCase) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }

            nextIsUpperCase = text[i] == ' ';
        }

        return newText;
    }
});

// Agregamos un punto final al salir del input nombre
nameInput.addEventListener('blur', (e) => {
    nameInput.value = nameInput.value.concat('.');
});



// Mesa 11 - Normalizamos el teléfono y obtenemos la info guardada
const nameTelephone = document.querySelector('#tel');
nameTelephone.addEventListener('keyup', (e) => {
    nameTelephone.value = getNormalizedTelephone(nameTelephone.value);
    console.log(nameTelephone.value);

    function getNormalizedTelephone(telephone) {
        return removeNotNumbersFromText(removeEmptySpaces(telephone));
    }

    function removeNotNumbersFromText(text) {
        const lastChar = text[text.length - 1];

        if (isNaN(lastChar)) {
            // si estamos acá, 'lastChart' es número
            return text.replace(lastChar, '');
        }

        return text;
    }

    function removeEmptySpaces(text) {
        return text.trim();
    }
});

// Clase 12 validamos todo
window.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNameValid() && isTelephoneValid() && isNationalityValid()) {
        registerUser.name = nameInput.value;
        registerUser.password = document.querySelector('#pass').value;
        registerUser.telephone = nameTelephone.value;
        registerUser.nationality = document.querySelector('input[type=radio][name=nacionalidad]:checked').value
        registerUser.hobbies = getHobbies();
        console.log(registerUser);
    }
    function isNameValid(){
        // console.log(document.querySelector('#nombre').value.length >= 4);
        return document.querySelector('#nombre').value.length >= 4;
    }
    function isTelephoneValid(){
        return document.querySelector('#tel').value.length >= 7;
    }
    function isNationalityValid() {
        return document.querySelector('input[type=radio][name=nacionalidad]:checked').value !=null;
    }
    function getHobbies(){
        let hobbies = [];
        const checks = document.getElementsByName('hobbies');
        checks.forEach(element => {
            if(element.checked){
                hobbies.push(element.value)
            }
        });
        return hobbies;
    }


})