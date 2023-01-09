// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// Un nuevo Set con los nombres de tu familia
// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const set = ["Steven", "Evelyn", "Francisco"]
const mySet = new Set(set)
mySet.add = ["Steven"]

console.log(mySet)

mySet.add = ["JavaScript"]
console.log(mySet)