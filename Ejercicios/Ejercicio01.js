// Tipos primitivos

// number
4;
0;

// string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleanos
true;
false;

// nulo y undefined
null;
undefined;

// Notación
// ; -> Delimitar el final de una línea
const b = 4;
b + 4;

// . -> Se utiliza en los objetos para acceder a los atributos 
// movil.anchura

// [] -> listas, arreglos o arrays
const ar = [1, 2, 3, 4]
console.log(ar[2])

// () -> Funciones
function suma(a, b) {
    // Se escribe la función
}

// {} -> Llaves para objetos, funciones y estructuras de control
const movil = {
    anchura: 5,
    altura: 10
}

if (true) {
    // todo lo que haya entre llaves

    const constante2 = "hola"

}

var variable;
let variableLet_;

// const constante;
const constante = "Hola soy una constante";
console.log(constante)
// constante = "Adiós" // Nos da un error

var a = 1;
console.log(a);

a = 4;
console.log(a);

let c = 3;
console.log(c);

c = 5;
console.log(c);

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable)

let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable LET";
}

console.log(variableLet);