const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts"
const botones = document.querySelectorAll('button');

function enviarMensaje(event) {
    console.log(event.target);

    let titulo = event.target.dataset.titulo;
    let idUsuario = Number(event.target.dataset.idUsuario);
    // console.log(titulo);
    // console.log(idUsuario);
    
    fetch(API_URL_POSTS, {
        method: "POST",
        body: JSON.stringify({
            title: titulo,
            userId: idUsuario
        }),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
    .then(resultado => resultado.json())
    .then(data => {
        // console.log(data);
        const contenedorMensaje = document.querySelector("#mensaje-posteado");
        contenedorMensaje.textContent = data.title;
    });

}

botones.forEach((boton) => boton.addEventListener('click',enviarMensaje))