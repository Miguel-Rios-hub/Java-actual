// ─── PRACTICA: TEMPLATE LITERALS ────────────────────────────────────────────

const producto = "Café";
const precio = 25;
const cantidad = 3;
const usuario = "Miguel";
const saldo = 150;

// EJERCICIO 1
// Reescribe esta línea usando template literal
const mensaje1 = `El producto ${producto} cuesta $${precio}`;
console.log(mensaje1); // El producto Café cuesta $25


// EJERCICIO 2
// Usa template literal con una expresión para calcular el total
const total = `El total por ${cantidad} cafe es $${precio * cantidad}`
console.log(total); // El total por 3 Café es $75


// EJERCICIO 3
// Crea un recibo multilínea con template literal usando las variables de arriba
// Debe verse así:
// === RECIBO ===
// Usuario: Miguel
// Producto: Café
// Cantidad: 3
// Total: $75
const recibo = `=== RECIBO ===
Usuario: ${usuario}
Producto: ${producto}
Cantidad: ${cantidad}
Total: $${precio*cantidad}`;
console.log(recibo);


// EJERCICIO 4
// Usa un ternario dentro del template para mostrar si el usuario puede pagar
// Si saldo >= total → "Pago aprobado"
// Si saldo < total → "Saldo insuficiente"
console.log(`Estado: ${saldo>=precio*cantidad ? "Pago aprobado":"Saldo insuficiente"}`);


// EJERCICIO 5
// Crea una arrow function llamada presentar que reciba nombre y edad
// y retorne un template literal con la presentación
// Ejemplo: presentar("Miguel", 22) → "Me llamo Miguel y tengo 22 años"
const presentar = (nombre,edad)=> `Me llamo ${nombre} y tengo ${edad} años`
console.log(presentar("Miguel", 21));//Tengo 21
