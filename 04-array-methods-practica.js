// ─── PRACTICA: map, filter, reduce ──────────────────────────────────────────

const empleados = [
    { nombre: "Ana",     sueldo: 8000,  departamento: "Ventas",    activo: true  },
    { nombre: "Luis",    sueldo: 12000, departamento: "IT",        activo: true  },
    { nombre: "María",   sueldo: 6500,  departamento: "Ventas",    activo: false },
    { nombre: "Carlos",  sueldo: 15000, departamento: "IT",        activo: true  },
    { nombre: "Laura",   sueldo: 9000,  departamento: "RRHH",      activo: true  },
    { nombre: "Pedro",   sueldo: 7000,  departamento: "Ventas",    activo: false },
];

// EJERCICIO 1 — map
// Obtén un array con solo los nombres de todos los empleados
const nombres = empleados.map(p=>p.nombre)
//console.log(nombres); // ['Ana', 'Luis', 'María', 'Carlos', 'Laura', 'Pedro']


// EJERCICIO 2 — map
// Obtén un array con los sueldos aumentados un 10%
const sueldosAumentados = empleados.map(p=>p.sueldo*0.1+p.sueldo)
//console.log(sueldosAumentados); // [8800, 13200, ...]


// EJERCICIO 3 — filter
// Obtén solo los empleados activos
const activos = empleados.filter(p=>p.activo)
//console.log(activos.length); // 4


// EJERCICIO 4 — filter
// Obtén solo los empleados del departamento "IT"
const equipoIT = empleados.filter(p=>p.departamento==="IT")
//console.log(equipoIT.map(e => e.nombre)); // ['Luis', 'Carlos']


// EJERCICIO 5 — reduce
// Calcula la suma total de todos los sueldos
const totalNomina = empleados.reduce((total,{sueldo})=>total+sueldo,0)
//console.log(totalNomina); // 57500


// EJERCICIO 6 — encadenado
// Calcula el sueldo promedio solo de los empleados activos
// Pista: primero filtra los activos, luego suma con reduce, luego divide
const promedioActivos = empleados.filter(p=>p.activo).reduce((total,{sueldo})=>total+sueldo,0)/empleados.filter(p=>p.activo).length
//console.log(promedioActivos); // 11000


// ─── MÉTODOS EXTRA — find, some, every ──────────────────────────────────────
// find    → devuelve el PRIMER elemento que cumple la condición (o undefined)
// some    → devuelve true si AL MENOS UNO cumple la condición
// every   → devuelve true si TODOS cumplen la condición
// findIndex → devuelve el ÍNDICE del primer elemento que cumple la condición


// EJERCICIO 7 — find
// Encuentra el primer empleado del departamento "RRHH"
const empleadoRRHH = empleados.find(p=>p.departamento==="RRHH")
//console.log(empleadoRRHH.nombre); // Laura


// EJERCICIO 8 — findIndex
// Encuentra el índice de Carlos en el array
const indiceCarlos = empleados.findIndex(p=>p.nombre==="Carlos")
//console.log(indiceCarlos); // 3


// EJERCICIO 9 — some
// ¿Hay algún empleado con sueldo mayor a 14000?
const hayRicoEnLaEmpresa = empleados.some(p=>p.sueldo>14000)
//console.log(hayRicoEnLaEmpresa); // true


// EJERCICIO 10 — every
// ¿Todos los empleados de IT están activos?
// Pista: primero filtra IT, luego usa every
const todoITActivo = empleados.filter(p=>p.departamento==="IT").every(p=>p.activo)
//console.log(todoITActivo); // true


// ─── EJERCICIOS DIFÍCILES ────────────────────────────────────────────────────

// EJERCICIO 11 — encadenado complejo
// Obtén los nombres de los empleados activos de Ventas ordenados alfabéticamente
const ventasActivos = empleados.filter(p=>p.activo&&p.departamento==="Ventas").sort((a,b)=>a.nombre.toUpperCase().localeCompare(b.nombre.toUpperCase())).map(m=>m.nombre)
//console.log(ventasActivos); // ['Ana']


// EJERCICIO 12 — reduce avanzado
// Agrupa los empleados por departamento usando reduce
// El resultado debe ser un objeto así:
// { Ventas: [...], IT: [...], RRHH: [...] }
const porDepartamento = empleados.reduce((cad, emp) => {
    if (!cad[emp.departamento]) 
        cad[emp.departamento] = [];
    cad[emp.departamento].push(emp);
    return cad;
}, {});
console.log(porDepartamento);
