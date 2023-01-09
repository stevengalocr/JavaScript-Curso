// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// La fecha de hoy
// La fecha de tu nacimiento
// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// Una variable que contenga el día de tu nacimiento
// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const fechaHoy = new Date()
console.log(fechaHoy)

const Nacimiento = new Date(2002, 01, 15)
console.log(Nacimiento)

console.log(Nacimiento.getMonth() + 1)

console.log(Nacimiento.toLocaleDateString("en-GB"))

