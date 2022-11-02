/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt ('Ingresa tu nombre: ');
  const anio = prompt ('Ingresa tu año de nacimiento: ');
  const edad = 2022 - anio;
  const ciudad = prompt ('Ingresa ciudad donde naciste:');
  const tema = confirm('Te interesa JavaScript?');
  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  if (tema) {
    datosPersona.interesPorJs = "Si";
  } else {
    datosPersona.interesPorJs = "No";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.querySelector('#nombre').innerText = datosPersona.nombre;
  document.querySelector('#edad').innerText = datosPersona.edad;
  document.querySelector('#ciudad').innerText = datosPersona.ciudad;
  document.querySelector('#javascript').innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  for (let index = 0; index < listado.length; index++) {
    const tarjeta = `
    <div class='caja'> 
      <img src=${listado[index].imgUrl} alt=${listado[index].lenguajes}> 
      <p>${listado[index].lenguajes}</p> 
      <p>${listado[index].bimestre}</p> 
    </div>
    `
    document.querySelector('#fila').innerHTML += tarjeta;
  }

  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let sobreMi = document.querySelector('.oculto');
addEventListener('keydown', (event) => {
  if(event.key == "f"){
    sobreMi.classList.remove('oculto');
  }
});

