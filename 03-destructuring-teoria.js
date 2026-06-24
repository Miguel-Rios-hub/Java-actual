// ─── DESTRUCTURING ──────────────────────────────────────────────────────────
// Extraer valores de objetos y arrays en variables de forma directa.

// ── OBJETOS ─────────────────────────────────────────────────────────────────

const usuario = {
    nombre: "Miguel",
    edad: 21,
    ciudad: "Mexico"
};

// FORMA ANTIGUA
const nombre1 = usuario.nombre;
const edad1 = usuario.edad;

// CON DESTRUCTURING
const { nombre, edad, ciudad } = usuario;
console.log(nombre, edad, ciudad); // Miguel 22 Monterrey

// RENOMBRAR al extraer
const { nombre: nombreUsuario, edad: añosUsuario } = usuario;
console.log(nombreUsuario, añosUsuario); // Miguel 22

// VALOR POR DEFECTO — si la propiedad no existe
const { pais = "México" } = usuario;
console.log(pais); // México

// EN PARÁMETROS DE FUNCIÓN — muy común en APIs y backend
const mostrarUsuario = ({ nombre, edad }) => {
    console.log(`${nombre} tiene ${edad} años`);
};
mostrarUsuario(usuario); // Miguel tiene 22 años


// ── ARRAYS ──────────────────────────────────────────────────────────────────

const colores = ["rojo", "verde", "azul"];

// FORMA ANTIGUA
const color1 = colores[0];
const color2 = colores[1];

// CON DESTRUCTURING
const [primero, segundo, tercero] = colores;
console.log(primero, segundo, tercero); // rojo verde azul

// SALTAR ELEMENTOS
const [, , ultimo] = colores;
console.log(ultimo); // azul

// REST — agarrar el resto en un array
const [cabeza, ...resto] = colores;
console.log(cabeza); // rojo
console.log(resto);  // ['verde', 'azul']

// INTERCAMBIAR VARIABLES — truco clásico
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
