
let idPlanoTipo=16;

function robarPlano(idPlano,despegar){

    if(idPlano>0 && idPlano<=10){

        let mensajeExitoso="El número de serie del plano obtenido es " + idPlano;
        despegar (mensajeExitoso,null);
    }

    else{

        mensajeError="De acuerdo con el número de serie, el plano obtenido es falso";
        despegar (null,mensajeError);
    }

}

robarPlano(idPlanoTipo,function(mensajeConfirmacion,mensajeDenegado){
    
    if(mensajeConfirmacion){

        console.log(mensajeConfirmacion + ", despegamos!!.");
        

    }else{

        console.log(mensajeDenegado+ " y no es posible despegar!!.");
        
    }
        

});



