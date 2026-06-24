// ─── TEMPLATE LITERALS ──────────────────────────────────────────────────────
// Se escriben con backticks ` en lugar de comillas simples o dobles.

const nombre = "Miguel";
const edad = 22;

// FORMA ANTIGUA — concatenar con +
const saludo1 = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";

// CON TEMPLATE LITERALS — más legible
const saludo2 = `Hola, me llamo ${nombre} y tengo ${edad} años.`;

console.log(saludo1);
console.log(saludo2); // igual resultado, mejor código

// EXPRESIONES — dentro de ${} puedes poner cualquier expresión JS
const precio = 100;
const descuento = 0.15;
console.log(`Precio final: $${precio - precio * descuento}`); // $85

// MULTILÍNEA — sin concatenar ni \n
const html = `
    <div>
        <h1>${nombre}</h1>
        <p>Edad: ${edad}</p>
    </div>
`;
console.log(html);

// LLAMAR FUNCIONES dentro del template
const mayusculas = str => str.toUpperCase();
console.log(`Nombre en mayúsculas: ${mayusculas(nombre)}`); // MIGUEL

// TERNARIO dentro del template
const hora = 14;
console.log(`Buenas ${hora < 12 ? "mañanas" : "tardes"}`); // Buenas tardes
