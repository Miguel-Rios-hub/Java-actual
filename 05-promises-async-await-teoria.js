// ─── PROMESAS Y ASYNC/AWAIT ──────────────────────────────────────────────────
// Una promesa representa un valor que todavía no existe pero existirá en el futuro.
// async/await es la forma moderna de manejar promesas sin anidar callbacks.

// ── PROMESA BÁSICA ───────────────────────────────────────────────────────────
// Simula una operación que tarda 1 segundo (como consultar una base de datos)
const obtenerUsuario = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve({ nombre: "Miguel", edad: 22 }); // éxito
            } else {
                reject("Error: usuario no encontrado");  // fallo
            }
        }, 1000);
    });
};

// ── .then() / .catch() — forma antigua de manejar promesas ──────────────────
obtenerUsuario()
    .then(usuario => console.log("Con .then:", usuario))
    .catch(error => console.log("Error:", error));


// ── ASYNC/AWAIT — forma moderna, más legible ─────────────────────────────────
// async convierte una función en asíncrona
// await pausa la ejecución hasta que la promesa resuelva
const main = async () => {
    try {
        const usuario = await obtenerUsuario();
        console.log("Con async/await:", usuario);
    } catch (error) {
        console.log("Error:", error);
    }
};

main();

// ── MÚLTIPLES PROMESAS EN PARALELO ──────────────────────────────────────────
const obtenerDato = (valor, ms) => new Promise(resolve => setTimeout(() => resolve(valor), ms));

const paralelo = async () => {
    // Espera a que TODAS terminen (corren al mismo tiempo)
    const [a, b, c] = await Promise.all([
        obtenerDato("primero", 1000),
        obtenerDato("segundo", 500),
        obtenerDato("tercero", 800),
    ]);
    console.log(a, b, c); // primero segundo tercero
};

paralelo();

// ── PROMISE.ALLSETTLED — cuando no quieres que un fallo detenga todo ─────────
const obtenerDato2 = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (id === 99) reject(`ID ${id} no existe`);
        else resolve({ id, dato: `dato_${id}` });
    }, 300);
});

const conFallos = async () => {
    // Promise.all detiene todo si uno falla
    // Promise.allSettled espera a todos y reporta éxito o fallo de cada uno
    const resultados = await Promise.allSettled([
        obtenerDato2(1),
        obtenerDato2(99), // este falla
        obtenerDato2(3),
    ]);

    resultados.forEach(r => {
        if (r.status === "fulfilled") console.log("OK:", r.value);
        else console.log("Error:", r.reason);
    });
};

conFallos();

// VOCABULARIO:
// resolve          → la promesa tuvo éxito
// reject           → la promesa falló
// await            → espera a que la promesa termine
// async            → marca que una función contiene awaits
// try/catch        → maneja errores (equivale al .catch())
// Promise.all      → corre varias promesas en paralelo, falla si una falla
// Promise.allSettled → corre todas, reporta éxito o fallo de cada una
