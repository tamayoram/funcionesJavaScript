
let nombreTipo="Pablo";
let planetaTipo="Pandora";
let edadTipo=18;
let estaturaTipo=1.7;

function asociarDatos(nombrePadawan,planetaPadawan,edadPadawan,estaturaPadawan,clasificarActividad){

    let informacionPadawan={
        nombre:nombrePadawan,
        planeta:planetaPadawan,
        edad:edadPadawan,
        estatura:estaturaPadawan
    
        };
       
        clasificarActividad(informacionPadawan.nombre,informacionPadawan.planeta,informacionPadawan.edad);  

}

asociarDatos(nombreTipo,planetaTipo,edadTipo,estaturaTipo,function(nombreClasificar,planetaClasificar, edadClasificar){

    if (edadClasificar<15){

        console.log("El Padawan con nombre "+nombreClasificar+" del planeta "+planetaClasificar+" tiene asignado el manejo de la fuerza");
        

    }else{

        console.log("El Padawan con nombre "+nombreClasificar+" del planeta "+planetaClasificar+" tiene asignado el manejo del sable de luz");
        
    }

    

});

