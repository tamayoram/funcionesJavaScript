let temperaturaMaxima=50;
let temperaturaMinima=23;

function calcularTemperatura(maxima,minima){

    temperaturaMedia=((maxima+minima)/2).toFixed(2);
    return temperaturaMedia;
}

llamadoTemperatura=calcularTemperatura(temperaturaMaxima,temperaturaMinima);

console.log(`La temperatura media es ${llamadoTemperatura}`);

