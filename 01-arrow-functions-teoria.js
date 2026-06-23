// ─── ARROW FUNCTIONS ────────────────────────────────────────────────────────

// FORMA TRADICIONAL
function sumar(a, b) {
    return a + b;
}

// ARROW FUNCTION — equivalente exacto
const sumar2 = (a, b) => {
    return a + b;
}

// ARROW FUNCTION CORTA — cuando solo hay un return, se omiten {} y return
const sumar3 = (a, b) => a + b;

// UN SOLO PARÁMETRO — se pueden omitir los paréntesis
const doble = n => n * 2;

// SIN PARÁMETROS — los paréntesis son obligatorios
const saludar = () => "Hola mundo";

// RETORNAR UN OBJETO — necesita paréntesis extra para no confundir con el bloque {}
const crearUsuario = (nombre, edad) => ({ nombre, edad });

console.log(sumar(3, 4));           // 7
console.log(sumar2(3, 4));          // 7
console.log(sumar3(3, 4));          // 7
console.log(doble(5));              // 10
console.log(saludar());             // Hola mundo
console.log(crearUsuario("Miguel", 22)); // { nombre: 'Miguel', edad: 22 }

// DONDE MÁS SE USAN — como argumento de otras funciones
const numeros = [1, 2, 3, 4, 5];

// Sin arrow function
const pares1 = numeros.filter(function(n) { return n % 2 === 0; });

// Con arrow function — mucho más limpio
const pares2 = numeros.filter(n => n % 2 === 0);

console.log(pares1); // [2, 4]
console.log(pares2); // [2, 4]
