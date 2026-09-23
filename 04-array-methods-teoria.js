// ─── MÉTODOS DE ARRAY: map, filter, reduce ───────────────────────────────────
// Los tres reciben una arrow function y recorren el array sin modificar el original.

const productos = [
    { nombre: "Café",     precio: 25,  disponible: true  },
    { nombre: "Pizza",    precio: 120, disponible: false },
    { nombre: "Agua",     precio: 10,  disponible: true  },
    { nombre: "Cerveza",  precio: 35,  disponible: true  },
    { nombre: "Pastel",   precio: 80,  disponible: false },
];

// ── MAP — transforma cada elemento, devuelve nuevo array del mismo tamaño ───
const nombres = productos.map(p => p.nombre);
console.log(nombres); // ['Café', 'Pizza', 'Agua', 'Cerveza', 'Pastel']

const precios_con_iva = productos.map(p => ({
    nombre: p.nombre,
    precio: p.precio * 1.16
}));
console.log(precios_con_iva);


// ── FILTER — filtra elementos según condición, devuelve nuevo array ──────────
const disponibles = productos.filter(p => p.disponible);
console.log(disponibles); // Café, Agua, Cerveza

const baratos = productos.filter(p => p.precio < 50);
console.log(baratos); // Café, Agua, Cerveza


// ── REDUCE — reduce el array a un solo valor ─────────────────────────────────
// Parámetros: (acumulador, elemento) y valor inicial del acumulador
const totalInventario = productos.reduce((total, p) => total + p.precio, 0);
console.log(totalInventario); // 270

// Contar cuántos están disponibles
const cantidadDisponible = productos.reduce((cont, p) => p.disponible ? cont + 1 : cont, 0);
console.log(cantidadDisponible); // 3


// ── ENCADENAR — se pueden combinar ──────────────────────────────────────────
// Total de solo los productos disponibles
const totalDisponibles = productos
    .filter(p => p.disponible)
    .reduce((total, p) => total + p.precio, 0);
console.log(totalDisponibles); // 70


// ── MÉTODOS EXTRA — muy usados en Express ────────────────────────────────────

// FIND — devuelve el primer elemento que cumple la condición (o undefined)
const cafe = productos.find(p => p.nombre === "Café");
console.log(cafe); // { nombre: 'Café', precio: 25, disponible: true }

const noExiste = productos.find(p => p.nombre === "Sushi");
console.log(noExiste); // undefined

// FINDINDEX — devuelve el índice del primer elemento que cumple la condición
const indicePizza = productos.findIndex(p => p.nombre === "Pizza");
console.log(indicePizza); // 1

// SOME — true si AL MENOS UN elemento cumple la condición
const hayCaros = productos.some(p => p.precio > 100);
console.log(hayCaros); // true

// EVERY — true si TODOS los elementos cumplen la condición
const todosDisponibles = productos.every(p => p.disponible);
console.log(todosDisponibles); // false

// SORT — ordena el array (modifica el original, cuidado)
const porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(porPrecio.map(p => p.nombre)); // ['Agua', 'Café', 'Cerveza', 'Pastel', 'Pizza']

// VOCABULARIO:
// find      → busca uno, devuelve el elemento
// findIndex → busca uno, devuelve su posición
// some      → ¿existe alguno que cumpla?
// every     → ¿todos cumplen?
// sort      → ordena (a-b ascendente, b-a descendente)
