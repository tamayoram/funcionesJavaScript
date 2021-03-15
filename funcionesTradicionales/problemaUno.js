
let inicialX=5;
let finalX=10;

let inicialY=15;
let finalY=25;

function calcularDistancia(xinicial,xfinal,yinicial,yfinal){
   
    let cuadradoX=Math.pow((xfinal-xinicial),2);
    let cuadradoY=Math.pow((yfinal-yinicial),2);
    
    let resultadoDistancia=Math.sqrt(cuadradoX+cuadradoY).toFixed(2);

    return resultadoDistancia;
   
}

let llamadoDistancia=calcularDistancia(inicialX,finalX,inicialY,finalY);


console.log(`La distancia es ${llamadoDistancia}`);