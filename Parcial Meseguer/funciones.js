function getBuscar() {
    const idmuni=document.getElementById("id-municipio").value
    const idprov=document.getElementById("id-provincia").value
    let contenedor=document.getElementById("contenedor")
    fetch("asentamientos.json")
    .then(res=>res.json())
    .then(function(data){
        console.log(data)
        let localidades=data.localidades
        if ((idmuni>0)&&(idprov>0)){
            for (let i = 0; i < localidades.length; i++) {           
                if ((idmuni==localidades[i].municipio.id)){
                    if (localidades[i].municipio.nombre!=null){
                        contenedor.innerHTML=`Provincia: ${localidades[i].provincia.nombre} <br> Municipio: ${localidades[i].municipio.nombre}`
                    }
                    else{
                        contenedor.innerHTML=`Provincia: ${localidades[i].provincia.nombre} <br> Departamento: ${localidades[i].departamento.nombre}`
                        break
                    }
                }
            }
        }
        else{
            contenedor.innerHTML="Ingrese Los datos nuevamente"
        }
    })
    }
//