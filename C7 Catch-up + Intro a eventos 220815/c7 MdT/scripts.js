// const tema = confirm('Desea aplicar el tema oscuro?');

// if (tema) {
//   document.querySelector('body').classList.add('dark')
// }

const listadoFelinos = [{
  nombre: "El Tigre",
  descripcion: "El tigre (Panthera tigris) es una de las especies de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.",
  imagen: "./imagenes/tiger.jpg"
},
{
  nombre: "El leon",
  descripcion: "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India",
  imagen: "./imagenes/leon.jpg"
},
{
  nombre: " El leopardo",
  descripcion: "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).",
  imagen: "./imagenes/leopardo.jpg"
}];

function agregarFelinos(){
let container = document.querySelector(".contenedor");
let html = '';
listadoFelinos.forEach(e => {
  html += `
    <div class="item">
      <img src="${e.imagen}">
      <h2>${e.nombre}</h2>
      <p>${e.descripcion}</p>
    </div>`
});
container.innerHTML = html;
};

agregarFelinos();


