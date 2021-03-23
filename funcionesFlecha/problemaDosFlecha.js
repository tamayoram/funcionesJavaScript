
let nombre1="ARQ2555: Sara Bel-Sun";
let nombre2="ARQ2556: Nodin Chavdri";
let nombre3="ARQ2557: Finn";
let nombre4="ARQ2558: Juan Camilo Tamayo"

let separarNombre=(nombre)=>nombre.split(": ")[1];

llamadoNombre1=separarNombre(nombre1);
llamadoNombre2=separarNombre(nombre2);
llamadoNombre3=separarNombre(nombre3);
llamadoNombre4=separarNombre(nombre4);

console.log(`Los nombres requeridos son: ${llamadoNombre1}, ${llamadoNombre2}, ${llamadoNombre3} y ${llamadoNombre4}`);