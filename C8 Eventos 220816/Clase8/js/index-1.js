let i = 0;

function contador() {
    i++;
    document.querySelector("p").innerHTML = i;
}

function mostrarMensajePorConsola() {
    console.log(i);
}

function mostrarMensajePorPantalla() {
    alert(i);
}

function hacerNada() {

}

// function restarContador() {
//     i--;
//     document.querySelector("p").innerHTML = i
//     console.log(i)
// }

window.onload = () => {
    console.log('index-a.js')

    let button = document.querySelector('button');

    button.addEventListener('click', contador);
    button.addEventListener('click', mostrarMensajePorConsola);
    button.addEventListener('click', mostrarMensajePorPantalla);

    // button.addEventListener('click', restarContador);

    // button.onclick = contador;
    // button.onclick = restarContador;

    button.onclick = hacerNada;
};


// 2da parte

// var n = 0;
// var l = document.getElementById("number");
// let cont = setInterval(function() {
//     l.innerHTML = n;
//     n++;
// }, 1000);

// function pararContador() {
//     clearInterval(cont);
//     console.log("Se paró el cronómetro.")
// }


// let button = document.querySelector('button');
// button.onclick = pararContador;

// let time = Date.now();
// console.log(time);
// setTimeout(() => {
//     alert(`Mensaje retrasado ${Date.now()-time} ms`);
// }, 2000);