function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character/") // PARA SABER LA CANTIDAD DE PERSONAJES
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let cantpers = data.info.count; // Cantidad total de personajes
      let personaje = document.getElementById("numero").value; // Valor de la caja de texto
      if ((personaje >= 1) && (personaje <= cantpers)) {
      buscar(personaje);
      }
      else{
        alert("Ese personaje no existe, Ingrese un numero entre 1 y "+cantpers) // ALERTA DE ERROR
      }
    })
}
function buscar(personaje) {
    
  fetch("https://rickandmortyapi.com/api/character/"+personaje) // BUSCAR DIRECTAMENTE EL PERSONAJE
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

  let nombre = document.getElementById("nombre");
  nombre.innerText = "Nombre: " + data.name;

  let status = document.getElementById("status");
  status.innerText = "Status: " + data.status;

  let especie = document.getElementById("especie");
  especie.innerText = "Especie: " + data.species;

  let location = document.getElementById("location");
  location.innerText = "Locacion: " + data.location.name;

  let imagen = document.getElementById("imagen");
  imagen.src = data.image;

  let borde=document.getElementById("personaje") // PARA AGREGAR UN BORDE DESPUES DE LA CONSULTA
  borde.classList.add("consulta")
  })
}