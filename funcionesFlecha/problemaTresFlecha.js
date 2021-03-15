let temperaturaMaxima=50;
let temperaturaMinima=23;

let calcularTemperatura=(maxima,minima)=>((maxima+minima)/2).toFixed(2);

llamadoTemperatura=calcularTemperatura(temperaturaMaxima,temperaturaMinima);

console.log(`La temperatura media es ${llamadoTemperatura}`);