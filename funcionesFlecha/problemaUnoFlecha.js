
let inicialX=5;
let finalX=10;

let inicialY=15;
let finalY=25;


let resultadoDistancia=(xinicial,xfinal,yinicial,yfinal)=>Math.sqrt(Math.pow((xfinal-xinicial),2)+Math.pow((yfinal-yinicial),2)).toFixed(2);

console.log(`La distancia solicitada es ${resultadoDistancia(inicialX,finalX,inicialY,finalY)}`);

