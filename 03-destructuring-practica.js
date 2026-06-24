// ─── PRACTICA: DESTRUCTURING ────────────────────────────────────────────────

const producto = {
    nombre: "Laptop",
    precio: 15000,
    marca: "Lenovo",
    disponible: true
};

const calificaciones = [95, 87, 73, 100, 60];

// EJERCICIOS 1-6 — en bloque para aislar sus variables
{
    // EJERCICIO 1
    // Extrae nombre, precio y marca del objeto producto usando destructuring
    const {nombre, precio, marca}=producto;
    console.log(nombre, precio, marca); // Laptop 15000 Lenovo


    // EJERCICIO 2
    // Extrae disponible pero renómbrala como enStock
    const {disponible: enStock}=producto;
    console.log(enStock); // true


    // EJERCICIO 3
    // Extrae una propiedad "descuento" que no existe en el objeto
    // Dale un valor por defecto de 0
    const {descuento=0}=producto;
    console.log(descuento); // 0


    // EJERCICIO 4
    // Crea una función llamada mostrarProducto que reciba el objeto producto
    // y use destructuring en los parámetros para imprimir:
    // "Laptop de Lenovo — $15000"
    const mostrarProducto = ({nombre,marca,precio})=> `${nombre} de ${marca} — $${precio}`
    console.log(mostrarProducto(producto));


    // EJERCICIO 5
    // Extrae la primera y última calificación del array
    // (para la última investiga cómo hacerlo con destructuring o con .at())
    const [primera]=calificaciones;
    const ultima=calificaciones.at(-1);
    console.log(primera, ultima); // 95 60


    // EJERCICIO 6
    // Extrae la primera calificación y guarda el resto en una variable llamada demas
    const [primera2, ...demas]=calificaciones;
    console.log(primera2);  // 95
    console.log(demas);     // [87, 73, 100, 60]
}

// ─── EJERCICIOS DIFÍCILES ────────────────────────────────────────────────────

const pedido = {
    id: 1042,
    cliente: {
        nombre: "Miguel",
        direccion: {
            ciudad: "Monterrey",
            codigoPostal: "64000"
        }
    },
    items: [
        { producto: "Café", cantidad: 2, precio: 25 },
        { producto: "Pastel", cantidad: 1, precio: 80 },
    ]
};

// EJERCICIOS 7-9 — en bloque para aislar sus variables
{
    // EJERCICIO 7 — destructuring anidado
    // Extrae nombre del cliente y ciudad de la dirección en una sola línea
    const {cliente: {nombre, direccion: {ciudad}}} = pedido;
    console.log(nombre, ciudad); // Miguel Monterrey


    // EJERCICIO 8 — destructuring anidado profundo
    // Extrae codigoPostal de la dirección
    const {cliente:{direccion:{codigoPostal}}}=pedido;
    console.log(codigoPostal); // 64000


    // EJERCICIO 9 — destructuring de array dentro de objeto
    // Extrae el primer item del array items
    const [primerItem]=pedido.items;
    console.log(primerItem); // { producto: 'Café', cantidad: 2, precio: 25 }
}


// EJERCICIO 10 — todo junto
// Crea una función que reciba el objeto pedido y use destructuring para imprimir:
// "Pedido #1042 para Miguel en Monterrey — 2 items"
const resumirPedido = ({id, cliente:{nombre, direccion:{ciudad}},items}) =>`Pedido #${id} para ${nombre} en ${ciudad} — ${items.length} items`
console.log(resumirPedido(pedido));


// EJERCICIO 11 — destructuring combinado (objeto + array + objeto anidado)
// En una sola línea extrae del objeto pedido:
//   - id del pedido
//   - nombre del cliente
//   - del PRIMER item: el producto (renómbralo primerProducto) y su precio (renómbralo precioUnitario)
const {id, cliente:{nombre}, items: [{producto:primerProducto, precio:precioUnitario}]}=pedido;
console.log(id, nombre, primerProducto, precioUnitario); // 1042 Miguel Café 25


// EJERCICIO 12 — destructuring dentro de reduce
// Crea una función calcularTotal que reciba el objeto pedido
// Usa destructuring en los parámetros para extraer nombre del cliente y los items
// Con reduce, suma cantidad * precio de cada item
// Dentro del reduce también usa destructuring para extraer cantidad y precio de cada item
// Imprime: "Factura de Miguel — Total: $130"
const calcularTotal = ({cliente: {nombre},items})=> `Factura de ${nombre} — Total: $${items.reduce((total, {cantidad,precio})=>cantidad*precio+total,0)}`
console.log(calcularTotal(pedido));