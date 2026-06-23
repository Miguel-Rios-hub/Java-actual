// ─── PRACTICA: ARROW FUNCTIONS ──────────────────────────────────────────────
// Reescribe cada función tradicional como arrow function.
// Ejecuta el archivo para verificar que los resultados son iguales.

// EJERCICIO 1
// Convierte esta función en arrow function
const multiplicar =(a, b) => a * b;
console.log(multiplicar(3, 5)); // debe imprimir 15


// EJERCICIO 2
// Convierte esta función en arrow function corta (sin {} ni return)
const esMayorDeEdad = edad => edad >= 18;

console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false


// EJERCICIO 3
// Convierte esta función en arrow function
const obtenerSaludo =() =>  "Buenos días";
console.log(obtenerSaludo()); // Buenos días


// EJERCICIO 4
// Convierte esta función en arrow function que retorna un objeto
const crearProducto =(nombre, precio) => ({ nombre, precio });
console.log(crearProducto("Café", 25)); // { nombre: 'Café', precio: 25 }


// EJERCICIO 5
// Usa una arrow function dentro del filter para obtener solo los números negativos
const numeros = [3, -1, 7, -4, 0, -8, 2];
const negativo =numeros.filter(x => x<0);
console.log(negativo)

// ─── EJERCICIOS EXTRA — versión corta ───────────────────────────────────────
// Escribe TODAS las soluciones como arrow function corta (sin {} ni return)

// EJERCICIO 6
// Una función que recibe un número y devuelve true si es mayor a 100
const esMayorACien = num => num>100;
console.log(esMayorACien(150)); // true
console.log(esMayorACien(50));  // false


// EJERCICIO 7
// Una función que recibe un string y devuelve su longitud
const longitud = cad => cad.length;
console.log(longitud("Miguel")); // 6
console.log(longitud("Hola"));   // 4


// EJERCICIO 8
// Una función que recibe dos strings y los junta con un espacio entre ellos
const unir = (cad1,cad2) =>cad1+' '+cad2;
console.log(unir("Hola", "mundo")); // "Hola mundo"


// EJERCICIO 9
// Una función que recibe un número y devuelve true si es par
// Pista: usa el operador % que ya conoces de Java
const esPar = num => num%2 === 0
console.log(esPar(4));  // true
console.log(esPar(7));  // false


// EJERCICIO 10
// Usa filter con arrow function corta para quedarte solo con
// los strings que tengan más de 4 caracteres
const palabras = ["sol", "lluvia", "mar", "tormenta", "rio", "nube"];
const largas = palabras.filter(x=>x.length>4);
console.log(largas);