// ─── PRACTICA: PROMESAS Y ASYNC/AWAIT ───────────────────────────────────────
// Tienes estas funciones que simulan operaciones lentas (base de datos, red, etc.)
// No las modifiques — solo úsalas con async/await

const buscarProducto = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const productos = {
            1: { nombre: "Café",  precio: 25 },
            2: { nombre: "Pizza", precio: 120 },
            3: { nombre: "Agua",  precio: 10 },
        };
        const producto = productos[id];
        if (producto) resolve(producto);
        else reject(`Producto con ID ${id} no encontrado`);
    }, 800);
});

const aplicarDescuento = (producto) => new Promise(resolve => {
    setTimeout(() => {
        resolve({ ...producto, precio: producto.precio * 0.9 });
    }, 500);
});


// EJERCICIO 1
// Crea una función async que busque el producto con ID 2 e imprima su nombre y precio
const mostrarProducto= async() =>{
    try {
        const producto= await buscarProducto(2)
        console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
//mostrarProducto();


// EJERCICIO 2
// Crea una función async que busque el producto con ID 99 (no existe)
// y maneje el error imprimiendo "Error: " + el mensaje
const buscarInexistente= async() => {
        try {
            const producto=await buscarProducto(99);
            console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio}`)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
}
//buscarInexistente();


// EJERCICIO 3
// Crea una función async que:
// 1. Busque el producto con ID 1
// 2. Le aplique el descuento
// 3. Imprima el precio original y el precio con descuento
const productoConDescuento= async() => {
    try {
        const producto=await buscarProducto(1)
        const {precio}=await aplicarDescuento(producto)
        console.log(`Precio: ${producto.precio}     Precio Descuento: ${precio}`)
    } catch (error) {
        console.log("Error: "+error)
    }
}
//productoConDescuento();


// EJERCICIO 4
// Crea una función async que busque los productos 1, 2 y 3 EN PARALELO
// usando Promise.all y los imprima todos
const buscarTodos= async()=> {
    const [a,b,c]=await Promise.all([
        buscarProducto(1),
        buscarProducto(2),
        buscarProducto(3)
    ])
    console.log(`
        ${a.nombre}    ${a.precio}
        ${b.nombre}     ${b.precio}
        ${c.nombre}     ${c.precio}`)
}
//buscarTodos();


// ─── EJERCICIOS DIFÍCILES ────────────────────────────────────────────────────

// EJERCICIO 5
// Busca los 3 productos en paralelo y calcula el total de sus precios
const totalProductos= async() =>{
    const [a,b,c]=await Promise.all([
        buscarProducto(1),
        buscarProducto(2),
        buscarProducto(3)
    ])
    const total=a.precio+b.precio+c.precio
    console.log(`Total: ${total}`)
}
//totalProductos(); // Total: $155


// EJERCICIO 6
// Busca los productos 1, 2 y 99 en paralelo
// Si alguno falla, NO detengas los demás — imprime los que sí existen
// Investiga Promise.allSettled (diferente a Promise.all)
const buscarConFallos= async()=> {
    const resultados=await Promise.allSettled([
        buscarProducto(1),
        buscarProducto(2),
        buscarProducto(99)
    ])
    let cadena=``;
    resultados.forEach(r=>{
        if(r.status ==="fulfilled"){
                let {nombre,precio}=r.value;
                cadena+=`Nombre: ${nombre}  Precio: ${precio}\n`
            }
    })
    console.log(cadena)
}
//buscarConFallos();


// EJERCICIO 7 — simula una cadena de operaciones como en backend real
// 1. Busca el producto con ID 2
// 2. Aplícale descuento
// 3. "Guárdalo" imprimiendo: "Producto guardado: Pizza a $108"
// 4. Si algo falla en cualquier paso, imprime el error
const procesarPedido= async(id) => { 
    try {
        const producto=await buscarProducto(id);
        const {precio}=await aplicarDescuento(producto);
        console.log(`Producto guardado: ${producto.nombre} a $${precio}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
    
}
procesarPedido(2);
procesarPedido(99); // debe manejar el error
