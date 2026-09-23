// ════════════════════════════════════════════════════════════════════════════
// EXAMEN DE REPASO — ARROW FUNCTIONS · TEMPLATE LITERALS · DESTRUCTURING
// ════════════════════════════════════════════════════════════════════════════
// Instrucciones:
//   · Resuelve escribiendo el código donde dice // TU CÓDIGO
//   · Ejecuta con: node examen-js-repaso.js
//   · El comentario de la derecha dice qué DEBE imprimir cada console.log
//   · No borres los console.log: son tu forma de calificarte
//   · Cada tema va de menor a mayor dificultad. No saltes ejercicios.
// ════════════════════════════════════════════════════════════════════════════


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  TEMA 1 — ARROW FUNCTIONS                                                ║
// ╚══════════════════════════════════════════════════════════════════════════╝

{
    // ─── NIVEL 1 ────────────────────────────────────────────────────────────

    // EJERCICIO 1
    // Convierte esta función en arrow function (versión larga, con {} y return)
    //   function restar(a, b) { return a - b; }
    // TU CÓDIGO
    const restar=(a,b)=>{return a-b}
    console.log(restar(10, 4));            // 6


    // EJERCICIO 2
    // Arrow function corta, un solo parámetro SIN paréntesis:
    // recibe un número y devuelve su triple
    // TU CÓDIGO
    const triple=n=>n*3
    console.log(triple(7));                // 21


    // EJERCICIO 3
    // Arrow function SIN parámetros que devuelva el string "Sistema listo"
    // TU CÓDIGO
    const iniciar=()=>"Sistema listo"
    console.log(iniciar());                // Sistema listo


    // ─── NIVEL 2 ────────────────────────────────────────────────────────────

    // EJERCICIO 4
    // Arrow function corta que reciba nombre y calificacion
    // y RETORNE un objeto { nombre, calificacion }
    // Ojo: hay un detalle de sintaxis para retornar objetos
    // TU CÓDIGO
    const crearAlumno=(nombre, calificacion)=>({nombre,calificacion})
    console.log(crearAlumno("Ana", 90));   // { nombre: 'Ana', calificacion: 90 }


    // EJERCICIO 5
    // Arrow function corta que reciba un string y devuelva su longitud
    // TU CÓDIGO
    const caracteres=n=>n.length
    console.log(caracteres("destructuring")); // 13


    // EJERCICIO 6
    // Arrow function corta que reciba dos números
    // y devuelva true si el primero es múltiplo del segundo
    // TU CÓDIGO
    const esMultiplo=(n1,n2)=>n1%n2===0
    console.log(esMultiplo(12, 4));        // true
    console.log(esMultiplo(13, 4));        // false


    // ─── NIVEL 3 ────────────────────────────────────────────────────────────

    const valores = [12, 5, 40, 3, 27, 8, 60];

    // EJERCICIO 7
    // Usa filter con arrow function corta para quedarte con los mayores a 10
    // TU CÓDIGO
    const mayores=valores.filter(n=>n>10);
    console.log(mayores);                  // [ 12, 40, 27, 60 ]


    // EJERCICIO 8
    // Encadena dos filter: primero los pares, luego los mayores a 10
    // TU CÓDIGO
    const paresGrandes=valores.filter((n=>n%2==0)).filter(x=>x>10);
    console.log(paresGrandes);             // [ 12, 40, 60 ]


    // ─── NIVEL 4 ────────────────────────────────────────────────────────────

    const inventario = [
        { nombre: "Teclado", precio: 450 },
        { nombre: "Mouse", precio: 200 },
        { nombre: "Monitor", precio: 3200 },
        { nombre: "Cable", precio: 90 },
    ];

    // EJERCICIO 9
    // Con filter y arrow function corta, quédate con los productos
    // cuyo precio sea mayor a 300
    // TU CÓDIGO
    const caros=inventario.filter(n=>n.precio>300)
    console.log(caros);
    // [ { nombre: 'Teclado', precio: 450 }, { nombre: 'Monitor', precio: 3200 } ]


    // ─── NIVEL 5 — RETO ─────────────────────────────────────────────────────

    // EJERCICIO 10
    // Escribe una arrow function que RECIBA un número y DEVUELVA otra arrow
    // function, la cual recibe un segundo número y devuelve la suma de ambos.
    // Pista: el cuerpo de una arrow puede ser otra arrow → a => b => ...
    // TU CÓDIGO
    const sumador=a=>b=>a+b;
    const sumarCinco = sumador(5);
    console.log(sumarCinco(3));            // 8
    console.log(sumador(10)(7));           // 17
}


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  TEMA 2 — TEMPLATE LITERALS                                              ║
// ╚══════════════════════════════════════════════════════════════════════════╝

{
    const curso = "JavaScript";
    const alumno = "Miguel";
    const horas = 8;
    const costoHora = 120;
    const saldo = 900;

    // ─── NIVEL 1 ────────────────────────────────────────────────────────────

    // EJERCICIO 1
    // Reescribe con template literal:
    //   const linea = "El curso de " + curso + " dura " + horas + " horas";
    // TU CÓDIGO
    const linea=`El curso de ${curso} dura ${horas} horas`;
    console.log(linea);                    // El curso de JavaScript dura 8 horas


    // EJERCICIO 2
    // Template literal con una EXPRESIÓN dentro: el costo total (horas × costoHora)
    // TU CÓDIGO
    const cobro=`Total a pagar: $${horas*costoHora}`
    console.log(cobro);                    // Total a pagar: $960


    // ─── NIVEL 2 ────────────────────────────────────────────────────────────

    // EJERCICIO 3
    // Template literal MULTILÍNEA. Debe imprimir exactamente:
    //   === CONSTANCIA ===
    //   Alumno: Miguel
    //   Curso: JavaScript
    //   Horas: 8
    // TU CÓDIGO
    const constancia=`=== CONSTANCIA ===
Alumno: ${alumno}
Curso: ${curso}
Horas: ${horas}`
    console.log(constancia);


    // EJERCICIO 4
    // Usa un TERNARIO dentro del template:
    //   si saldo >= costo total → "Pago aprobado"
    //   si no                   → "Saldo insuficiente"
    // TU CÓDIGO
    const estado=`Estado: ${saldo>=(costoHora*horas)?`Pago aprobado`:`Saldo insuficiente`}`
    console.log(estado);                   // Estado: Saldo insuficiente


    // ─── NIVEL 3 ────────────────────────────────────────────────────────────

    // EJERCICIO 5
    // Crea una arrow function 'gritar' que pase un string a mayúsculas,
    // y LLÁMALA dentro de un template literal
    // TU CÓDIGO
    const gritar=str=>(str.toUpperCase())
    const titulo=`${gritar(`Curso: ${curso}`)}`
    console.log(titulo);                   // CURSO: JAVASCRIPT


    // EJERCICIO 6
    // Arrow function 'presentar' que reciba nombre y curso
    // y RETORNE un template literal
    // TU CÓDIGO
    const presentar=(nombre,curso)=>`Soy ${nombre} y estoy aprendiendo ${curso}`
    console.log(presentar("Ana", "Node"));
    //Soy Ana y estoy aprendiendo Node


    // ─── NIVEL 4 ────────────────────────────────────────────────────────────

    const stock = 0;
    const producto = "Café";

    // EJERCICIO 7
    // Un solo template literal que combine expresión + ternario:
    // Debe imprimir el producto, las unidades, y "AGOTADO" si stock es 0
    // o "DISPONIBLE" si es mayor a 0
    // TU CÓDIGO
    const etiqueta=`${producto} — ${stock} unidades — ${stock>0 ? "DISPONIBLE":"AGOTADO"}`
    console.log(etiqueta);                 // Café — 0 unidades — AGOTADO


    // EJERCICIO 8
    // Arrow function 'ticket' que reciba (concepto, cantidad, precio)
    // y retorne un template MULTILÍNEA:
    //   ----------------------
    //   Concepto: Café
    //   Cantidad: 3 x $25
    //   Subtotal: $75
    //   ----------------------
    // TU CÓDIGO
    const ticket=(concepto, cantidad, precio)=>
        `----------------------
Concepto: ${concepto}
Cantidad: ${cantidad} x $${precio}
Subtotal: $${cantidad*precio}
----------------------`
    console.log(ticket("Café", 3, 25));


    // ─── NIVEL 5 — RETO ─────────────────────────────────────────────────────

    const tags = ["ES6", "Arrow", "Template"];

    // EJERCICIO 9
    // Arrow function 'resumen' que reciba (alumno, tags) y retorne un template
    // que use: el nombre, la CANTIDAD de tags, y un ternario que diga
    // "tema" si hay 1 tag o "temas" si hay más de 1
    // TU CÓDIGO
    const resumen =(alumno, tags)=>`${alumno} repasó ${tags.length} ${tags.length==1 ? "tema":"temas"}`
    console.log(resumen(alumno, tags));    // Miguel repasó 3 temas
    console.log(resumen("Ana", ["ES6"]));  // Ana repasó 1 tema


    // EJERCICIO 10
    // Arrow function 'tarjeta' que reciba (alumno, curso, horas)
    // y retorne este HTML multilínea (respeta la indentación):
    //   <div>
    //       <h1>Miguel</h1>
    //       <p>JavaScript — 8 hrs</p>
    //   </div>
    // TU CÓDIGO
const tarjeta=(alumno,curso,horas)=>`<div>
    <h1>${alumno}</h1>
    <p>${curso} — ${horas} hrs</p>
</div>`
    console.log(tarjeta(alumno, curso, horas));
}


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  TEMA 3 — DESTRUCTURING                                                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const empleado = {
    nombre: "Laura",
    puesto: "Backend",
    salario: 28000,
    activo: true
};

const ventas = [1200, 850, 3400, 990, 75];

{
    // ─── NIVEL 1 ────────────────────────────────────────────────────────────

    // EJERCICIO 1
    // Extrae nombre, puesto y salario del objeto empleado
    // TU CÓDIGO
    const {nombre,puesto,salario}=empleado;
    console.log(nombre, puesto, salario);  // Laura Backend 28000


    // EJERCICIO 2
    // Extrae 'activo' pero renómbralo como 'enPlantilla'
    // TU CÓDIGO
    const {activo: enPlantilla}=empleado;
    console.log(enPlantilla);              // true


    // EJERCICIO 3
    // Extrae la propiedad 'bono' (no existe) con valor por defecto 0
    // TU CÓDIGO
    const {bono=0}=empleado
    console.log(bono);                     // 0


    // ─── NIVEL 2 ────────────────────────────────────────────────────────────

    // EJERCICIO 4
    // Arrow function 'ficha' que reciba el objeto empleado y use destructuring
    // EN LOS PARÁMETROS para retornar un template literal
    // TU CÓDIGO
    const ficha=({nombre,puesto,salario})=>`${nombre} — ${puesto} — $${salario}`
    console.log(ficha(empleado));          // Laura — Backend — $28000


    // EJERCICIO 5
    // Del array ventas: extrae la primera y la SEGUNDA venta
    // TU CÓDIGO
    const [primera,segunda]=ventas;
    console.log(primera, segunda);         // 1200 850


    // EJERCICIO 6
    // Del array ventas: extrae SOLO la tercera, saltando las dos primeras
    // TU CÓDIGO
    const [,,tercera]=ventas;
    console.log(tercera);                  // 3400


    // EJERCICIO 7
    // Extrae la primera venta y guarda TODAS las demás en 'restantes'
    // TU CÓDIGO
    const [primeraVenta,... restantes] = ventas;
    console.log(restantes);                // [ 850, 3400, 990, 75 ]


    // EJERCICIO 8
    // Intercambia el valor de estas dos variables usando destructuring
    let x = "izquierda", y = "derecha";
    // TU CÓDIGO
    [x,y]=[y,x];
    console.log(x, y);                        // derecha izquierda
}


const sucursal = {
    id: 77,
    gerente: {
        nombre: "Miguel",
        contacto: {
            ciudad: "Monterrey",
            telefono: "81-1234-5678"
        }
    },
    productos: [
        { nombre: "Café", cantidad: 4, precio: 25 },
        { nombre: "Pastel", cantidad: 2, precio: 80 },
        { nombre: "Jugo", cantidad: 3, precio: 30 },
    ]
};

{
    // ─── NIVEL 3 ────────────────────────────────────────────────────────────

    // EJERCICIO 9 — anidado
    // En UNA sola línea extrae el nombre del gerente y la ciudad
    // TU CÓDIGO
    const {gerente:{nombre,contacto:{ciudad}}}=sucursal
    console.log(nombre, ciudad);           // Miguel Monterrey


    // EJERCICIO 10 — anidado profundo + renombrar
    // Extrae 'telefono' pero renómbralo como 'tel'
    // TU CÓDIGO
    const {gerente:{contacto:{telefono:tel}}}=sucursal;
    console.log(tel);                      // 81-1234-5678


    // ─── NIVEL 4 ────────────────────────────────────────────────────────────

    // EJERCICIO 11 — array dentro de objeto
    // En UNA sola línea extrae del objeto sucursal:
    //   · el id
    //   · el nombre del gerente (renómbralo como gerenteNombre)
    //   · del SEGUNDO producto: su nombre (como segundoProducto) y su precio
    // TU CÓDIGO
    const {id,gerente:{nombre:gerenteNombre}, productos: [,{nombre: segundoProducto,precio}]}=sucursal;
    console.log(id, gerenteNombre, segundoProducto,precio); // 77 Miguel Pastel 80


    // EJERCICIO 12 — destructuring en parámetros + template
    // Arrow function 'describir' que reciba el objeto sucursal, use destructuring
    // en los parámetros y retorne:
    // TU CÓDIGO
    const describir=({id,gerente:{nombre,contacto:{ciudad}},productos})=>`Sucursal #${id} — ${nombre} (${ciudad}) — ${productos.length} ${productos.length>1?"productos":"producto"}`
    console.log(describir(sucursal));
    // Sucursal #77 — Miguel (Monterrey) — 3 productos


    // ─── NIVEL 5 — RETO ─────────────────────────────────────────────────────

    // EJERCICIO 13 — destructuring dentro de reduce
    // Arrow function 'facturar' que reciba el objeto sucursal.
    // Usa destructuring en los parámetros para sacar nombre del gerente
    // y productos. Con reduce suma cantidad * precio de cada producto,
    // usando destructuring DENTRO del reduce.
    // TU CÓDIGO
    const facturar=({gerente:{nombre},productos})=>`Factura de ${nombre} — Total: $${productos.reduce((total, {precio,cantidad})=>total+precio*cantidad,0)}`
    console.log(facturar(sucursal));       // Factura de Miguel — Total: $350


    // EJERCICIO 14 — todo junto
    // Arrow function 'inventarioCaro' que reciba el objeto sucursal y retorne
    // un template MULTILÍNEA con los productos cuyo subtotal (cantidad*precio)
    // sea mayor a 90. Usa destructuring en parámetros, filter con arrow,
    // y un ternario para el singular/plural.
    // Debe imprimir:
    //   === MONTERREY ===
    //   2 productos caros
    // TU CÓDIGO
    const inventarioCaro=({gerente:{contacto:{ciudad}},productos})=>{
        const contar=productos.filter(p=>p.cantidad*p.precio>90).length;
        return `=== ${ciudad.toUpperCase()} ===
${contar} ${contar>1 ? "productos caros":"producto caro"}`}
    console.log(inventarioCaro(sucursal));
}


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  EXAMEN FINAL — LOS 3 TEMAS JUNTOS                                       ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const pedidoFinal = {
    folio: 3051,
    cliente: { nombre: "Ana", ciudad: "Guadalajara" },
    articulos: [
        { producto: "Laptop", cantidad: 1, precio: 15000 },
        { producto: "Mouse", cantidad: 2, precio: 200 },
        { producto: "Funda", cantidad: 1, precio: 350 },
    ],
    saldoCliente: 20000
};

// FINAL 1
// Arrow function 'totalPedido' que reciba el pedido, use destructuring en los
// parámetros y con reduce (+ destructuring dentro) devuelva SOLO el número total
// TU CÓDIGO
const totalPedido=({articulos})=> articulos.reduce((total,{cantidad,precio})=>total+cantidad*precio,0);
console.log(totalPedido(pedidoFinal));     // 15750


// FINAL 2
// Arrow function 'articulosCaros' que reciba el pedido y devuelva un array
// con los artículos de precio mayor a 300 (filter + arrow corta + destructuring)
// TU CÓDIGO
const articulosCaros=({articulos})=>articulos.filter(p=>p.precio>300)
console.log(articulosCaros(pedidoFinal));
// [ { producto: 'Laptop', ... }, { producto: 'Funda', ... } ]


// FINAL 3
// Arrow function 'comprobante' que reciba el pedido y retorne un template
// MULTILÍNEA con destructuring anidado, expresiones y ternario:
//   ===== PEDIDO #3051 =====
//   Cliente: Ana (Guadalajara)
//   Artículos: 3
//   Total: $15750
//   Estado: Pago aprobado
// (Estado depende de si saldoCliente alcanza para el total)
// TU CÓDIGO
const comprobante=({folio,cliente:{nombre,ciudad},articulos,saldoCliente})=>{
    const total=articulos.reduce((total,{cantidad,precio})=>total+cantidad*precio,0);
    return `===== PEDIDO #${folio} =====
Cliente: ${nombre} (${ciudad})
Artículos: ${articulos.length}
Total: $${total}
Estado: ${saldoCliente>total?"Pago aprobado":"Saldo insuficiente"}`}
console.log(comprobante(pedidoFinal));