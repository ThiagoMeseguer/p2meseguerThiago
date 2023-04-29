function getCharacter(){
    var aux=(document.getElementById("numero"))
    fetch("https://rickandmortyapi.com/api/character/"+aux.value)
    .then(function (response) {
        return response.json()
    })
    .then (function(data){
        
        var nombre=document.getElementById("nombre")
        nombre.innerText="Nombre: "+data.name

        var status=document.getElementById("status")
        status.innerText="Status: "+data.status

        var especie=document.getElementById("especie")
        especie.innerText="Especie: "+data.species

        var location=document.getElementById("location")
        location.innerText="Localidad: "+data.location.name

        var imagen=document.getElementById("imagen")
        imagen.src=data.image


    })
}