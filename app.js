// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
console.log("El archivo app.js está enlazado correctamente");
// Esta consola es para verificar que está enlazado correctamente el app.js con el index.html//

const inputAmigo = document.getElementById("amigo");
const botonAdicionar = document.querySelector("button-add");
const listaAmigos = document.getElementById("listaAmigos");
const botonSortear = document.querySelector("button-draw");
const resultadoLista = document.getElementById("resultado");
//para verificar en la consola//
console.log("Elementos capturados");
console.log("Campo de entrada:", inputAmigo);
console.log("Botón Añadir:", botonAdicionar);
console.log("lista de Amigos:", listaAmigos);
console.log("lista de Resultado:", resultadoLista);

let Amigos = [];
function agregarAmigo (){
    const nombre = inputAmigo.value ;
    if(nombre === ""){
        alert ("Ingresa un nombre por favor");
        return;
    }

Amigos.push(nombre); // agregar nombre
inputAmigo.value = ""; // limpiar el campo de entrada

actualizarLista(); // mostrar lista actualizada
}

function actualizarLista (){
    listaAmigos.innerHTML =""; // limpiar lista directo

    // recorrer el array para crear los elementos de la lista
    for (let i = 0; i < Amigos.length; i++){
        listaAmigos.innerHTML += "<li>" + Amigos[i]+ "</li>";
    }
}

function sortearAmigo(){
    if (Amigos.length === 0 ){
        alert ("No hay amigos para sortear, añade al menos uno");
        return;
    }
    //generar indice aleatorio y seleccionar amigo
    const indiceAleatorio = Math.floor(Math.random ()* Amigos.length);
    const amigoSorteado = Amigos[indiceAleatorio];

    resultadoLista.innerHTML = "<li> El amigo secreo es : <strong>" + amigoSorteado + "</strong></li>";
}