// ─── PRACTICA: FETCH ─────────────────────────────────────────────────────────
// API de prueba: https://jsonplaceholder.typicode.com
// Endpoints disponibles:
//   GET  /users        → lista de usuarios
//   GET  /users/1      → un usuario
//   GET  /posts        → lista de posts
//   GET  /posts/1      → un post
//   GET  /users/1/posts → posts de un usuario
//   POST /posts        → crear un post


// EJERCICIO 1
// Obtén el usuario con ID 3 e imprime su nombre y ciudad (address.city)
const ejercicio1= async()=>{
    const respuesta=await fetch(`https://jsonplaceholder.typicode.com/users/3`);
    const usuario= await respuesta.json();
    console.log(`Nombre: ${usuario.name}\nCiudad: ${usuario.address.city}`)
}
ejercicio1();

// EJERCICIO 2
// Obtén todos los usuarios e imprime solo sus nombres usando map
const ejercicio2= async() => {
    const respuesta=await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usuarios=await respuesta.json();
    const nombres=usuarios.map(x=>x.name)
    console.log(nombres)
}
ejercicio2();

// EJERCICIO 3
// Obtén los posts del usuario con ID 1 e imprime cuántos tiene
// Endpoint: /users/1/posts
const ejercicio3= async()=> {
    const respuesta=await fetch(`https://jsonplaceholder.typicode.com/users/1/posts`)
    const dato=await respuesta.json()
    console.log(`Cantidad de post del usuario 1: ${dato.length}`);
}
ejercicio3();


// EJERCICIO 4
// Obtén el usuario con ID 1 y sus posts EN PARALELO usando Promise.all
// Imprime el nombre del usuario y la cantidad de posts que tiene
const ejercicio4= async() => {
    const [dato1,dato2]=await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/1`),
        fetch(`https://jsonplaceholder.typicode.com/users/1/posts`)
    ])
    const usuario=await dato1.json();
    const posts=await dato2.json();
    console.log(`Nombre: ${usuario.name}\nCantidad de posts: ${posts.length}`)
}
ejercicio4();


// EJERCICIO 5 — el más completo
// Crea una función que reciba un ID de usuario y:
// 1. Verifique que el usuario exista (maneja el error si no existe)
// 2. Obtenga sus posts
// 3. Imprima: "Usuario X tiene N posts. Su post más reciente es: TÍTULO"
const resumenUsuario= async(id)=> {
    try {
        const [dato1,dato2]=await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        ])
        if (!dato1.ok)
            throw new Error(`Usuario con ID ${id} no encontrado`)

        const usuario=await dato1.json()
        const posts=await dato2.json()
        if (posts.length===0){
            console.log(`Usuario: ${usuario.username} no tiene posts.`)
        } else {
            const ultimo=posts[posts.length-1]
            console.log(`Usuario: ${usuario.username} tiene ${posts.length} posts. Su post más reciente es: ${ultimo.title}`)
        }
        
    } catch (error) {
        console.log(`Error ${error}`)
    }
}
resumenUsuario(2);
resumenUsuario(9999); // debe manejar el error


// ─── EJERCICIOS DIFÍCILES ────────────────────────────────────────────────────

// EJERCICIO 6
// Obtén todos los usuarios y filtra solo los que son de la compañía "Romaguera-Crona"
// Imprime sus nombres
// (la compañía está en usuario.company.name)
const ejercicio6= async()=> {
    const respuesta=await fetch(`https://jsonplaceholder.typicode.com/users`)
    const usuarios=await respuesta.json()
    const filtro=usuarios.filter(x=>x.company.name==="Romaguera-Crona")
    const nombres=filtro.map(p=>p.name)
    console.log(`Nombres: \n${nombres.join("\n")}`);
}
ejercicio6();


// EJERCICIO 7
// Obtén los posts del usuario 1, filtra los que tengan la palabra "qui" en el título
// e imprime cuántos encontraste y sus títulos
const ejercicio7= async()=>{
    const respuesta=await fetch(`https://jsonplaceholder.typicode.com/users/1/posts`)
    const dato=await respuesta.json()
    const filtro=dato.filter(x=>x.title.includes("qui")).map(p=>p.title)
    console.log(`El usuario 1 tiene ${filtro.length} posts filtrando qui:\n${filtro.join("\n")}`)
}
//ejercicio7();


// EJERCICIO 8 — el más difícil
// Obtén todos los usuarios (hay 10)
// Para cada usuario obtén sus posts EN PARALELO
// Imprime una tabla así:
// Usuario 1 (Leanne Graham): 10 posts
// Usuario 2 (Ervin Howell): 10 posts
// ...
// Pista: Promise.all + map
const tablaUsuarios= async() => {
    const dato=await fetch("https://jsonplaceholder.typicode.com/users")
    const usuarios=await dato.json()
    const result=usuarios.map(async (us)=>{
        const posts=await fetch(`https://jsonplaceholder.typicode.com/users/${us.id}/posts`)
        const post=await posts.json()
        return `Usuario ${us.id} (${us.name}): ${post.length} posts`
    })
    const final=await Promise.all(result)
    console.log(final.join("\n"));
}
tablaUsuarios();