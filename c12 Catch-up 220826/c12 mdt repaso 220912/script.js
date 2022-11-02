const nombre = document.querySelector('.nombre');
const email = document.querySelector('.email');
const pass = document.querySelector('.pass');
const terminos = document.querySelector('.terminos');

nombre.addEventListener('keypress', () => {
    nombre.value = maxNombre(nombre.value);

    function maxNombre(name){
        const lastChar = name[name.length - 1]
        // console.log(lastChar);
        if(name.length >= 25){
            return name.replace(lastChar,'');
        }
        return name;
    }   
})

email.addEventListener('blur', () => {
    email.value = isEmailValid(email.value);

    function isEmailValid(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
          return email;
        } 
          alert("You have entered an invalid email address!")
          return email = '';
        
        
    }
});

pass.addEventListener('blur', () => {
    pass.value = isPassValid(pass.value);
    console.log(pass.value.length);

    function isPassValid(pass){
        if(pass.length > 8 && pass.length < 20){
            return pass;
        } else {
            alert ("Your password should have between 8 and 20 characters")
            return pass = '';
        }
    }
});

window.querySelector('submit')

