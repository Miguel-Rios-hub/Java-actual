// ─── FETCH ───────────────────────────────────────────────────────────────────
// fetch es la forma moderna de hacer peticiones HTTP (reemplaza XMLHttpRequest).
// Disponible en Node.js 18+ sin instalar nada.
// API que usamos: https://jsonplaceholder.typicode.com (datos de prueba gratuitos)

// ── GET BÁSICO ───────────────────────────────────────────────────────────────
const obtenerUsuario = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const usuario = await respuesta.json(); // convierte el JSON de texto a objeto JS
    console.log(usuario.name, usuario.email);
};

obtenerUsuario();

// ── GET CON MANEJO DE ERRORES ─────────────────────────────────────────────────
const obtenerPost = async (id) => {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!respuesta.ok) {  // ok es true si el status es 200-299
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const post = await respuesta.json();
        console.log(`Título: ${post.title}`);
    } catch (error) {
        console.log("Falló la petición:", error.message);
    }
};

obtenerPost(1);
obtenerPost(9999); // este falla


// ── POST — enviar datos ───────────────────────────────────────────────────────
const crearPost = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // le dices al servidor qué formato mandas
        },
        body: JSON.stringify({   // convierte el objeto JS a texto JSON
            title: "Mi primer post",
            body: "Contenido del post",
            userId: 1
        })
    });

    const resultado = await respuesta.json();
    console.log("Post creado:", resultado);
};

crearPost();

// ── PUT — actualizar un recurso existente ────────────────────────────────────
const actualizarPost = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Título actualizado",
            body: "Contenido actualizado",
            userId: 1
        })
    });
    const resultado = await respuesta.json();
    console.log("Post actualizado:", resultado);
};

actualizarPost();


// ── DELETE — eliminar un recurso ──────────────────────────────────────────────
const eliminarPost = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });
    console.log("Status:", respuesta.status); // 200 si se eliminó
};

eliminarPost();


// VOCABULARIO:
// fetch(url)       → hace la petición y devuelve una promesa
// respuesta.json() → parsea el cuerpo como JSON (también devuelve promesa)
// respuesta.ok     → true si el status HTTP es exitoso (200-299)
// respuesta.status → el código HTTP (200, 404, 500, etc.)
// JSON.stringify() → objeto JS → texto JSON
// JSON.parse()     → texto JSON → objeto JS
// GET              → obtener datos
// POST             → crear un recurso nuevo
// PUT              → reemplazar un recurso completo
// PATCH            → modificar solo algunos campos (menos común)
// DELETE           → eliminar un recurso
