function getBuscar() {
    const idmuni=document.getElementById("id-municipio").value
    const idprov=document.getElementById("id-provincia").value
    
    fetch("asentamientos.json")
    .then(res=>res.json())
    .then(function(data){
        console.log(data)
        let contenedor=document.getElementById("contenedor")
        let localidades=data.localidades
        if (idmuni>0){
        for (let i = 0; i < localidades.length; i++) {
                if ((idmuni==localidades[i].municipio.id)){
                    if (localidades[i].municipio.nombre!=null){
                        contenedor.innerHTML=`Provincia: ${localidades[i].provincia.nombre} <br> Municipio: ${localidades[i].municipio.nombre}`
                    }
                }
        }
    }
    })
    }
//