// Forma tradicional
function saludar(nombre) {
    return "Hola " + nombre;
}

// Arrow function equivalente
const saludar2 = (nombre) => {
    return "Hola " + nombre;
}

// Si solo tiene un return, se puede acortar más
const saludar3 = (nombre) => "Hola " + nombre;

console.log(saludar("Miguel"));
console.log(saludar2("Miguel"));
console.log(saludar3("Miguel"));
