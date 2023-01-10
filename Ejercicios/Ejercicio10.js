// Crea un archivo JS que contenga las siguientes líneas
// Una función sin parámetros que devuelva siempre "true"
// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// Una función generadora de índices pares automáticos

function ForeverTrue(){
    return true
}
console.log(ForeverTrue())

///

function promesa(){
    console.log("Hola soy una promesa 5 segundos después de haberse ejecutado");
  }
  
setTimeout(promesa, 5000);

///

function* generadorIndice() {
    let generadorIndice = 0;
    while(true) {
        generadorIndice = generadorIndice + 2;
        yield generadorIndice
    }
}

const indice = generadorIndice();

console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
