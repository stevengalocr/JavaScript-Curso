// Una variable que contenga la lista de la compra (mínimo 5 elementos)
// Modifica la lista de la compra y añádele "Aceite de Girasol"
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

const ListaCompra = ['Arroz', 'Frijoles', 'Pollo', 'Carne', 'Sal', 'Azúcar'];

ListaCompra.push('Aceite de girasol');

ListaCompra.splice(-1)

console.log(ListaCompra)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const Peliculas = [
    {Titulo: 'Spiderman', Director: 'Hombre araña', Fecha: '10/10/2022'},
    {Titulo: 'Batman', Director: 'Hombre batman', Fecha: '07/07/2022'},
    {Titulo: 'Hulk', Director: 'Hombre verde', Fecha: '04/04/2022'}
]

console.log(Peliculas)

const Directores = Peliculas.map(a => a.Director)
console.log(Directores)

const Nombres = Peliculas.map(a => a.Titulo)
console.log(Nombres)

console.log(Directores.concat(Nombres))

