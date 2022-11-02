 // 1. Capturamos el input del usuario
 const form = document.forms[0];
 form.addEventListener('submit', function(event) {
     event.preventDefault();

     let inputComentario = document.querySelector('#comentario');
     if (inputComentario.value != '') {
         addComment(inputComentario.value);
         showComments();
         form.reset();
     }
 });

 let savedComments = []; // {comment:'', date:''}
 const KEY_COMMENTS = 'key_comments';

 function addComment(comment) {
     // Si el check esta tildado, guardamos en el storage. Sino en el array 'savedComments'
     let comments = getCommentsOrDefault();
     let dateNow = new Date();
     let dateNowFormated = `${dateNow.getDate()}/${dateNow.getMonth()+1}/${dateNow.getFullYear()} ${dateNow.getHours()}`;
     let item = { comment: comment, date: dateNowFormated };
     comments.push(item);
     sessionStorage.setItem(KEY_COMMENTS, JSON.stringify(comments));
 }

 function showComments() {
     const savedComments = getCommentsOrDefault();
     let container = document.querySelector('.comentarios');
     container.innerHTML = '';
     savedComments.forEach(item => {
         let parrafo = document.createElement('p');
         parrafo.textContent = `Comentario: ${item.comment} - Fecha: ${item.date}`;
         container.appendChild(parrafo);

         //  container.innerHTML += `<p>${comment}</p>`;
         //  container.innerHTML += '<p>' + comment + '</p>';
     });
 }

 function getCommentsOrDefault() {
     // Si el check esta tildado, devolvemos del storage. Sino del array 'savedComments'
     let savedComments = sessionStorage.getItem(KEY_COMMENTS);
     if (savedComments != null) {
         return JSON.parse(savedComments);
     }
     return [];
 }

 showComments();



 // Mesa:
 // Preguntarle al usuario (utilizando el check) si quiere guardar la información en el Storage o no
 // Poder eliminar un comentario
 // Mostar en la hora los minutos y segundos ('dateNowFormated')