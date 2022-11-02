let body = document.querySelector("body");
let title = document.querySelector("h1");

let darkMode = confirm('¿Querés cambiar a modo oscuro?');

if (darkMode) {
    body.className = 'darkMode';
    title.className = 'darkTitle';
}
   