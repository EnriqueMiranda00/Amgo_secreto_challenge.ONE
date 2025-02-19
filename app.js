const amigos = [];
const nombreInput = document.getElementById('nombre');
const agregarButton = document.getElementById('agregar');
const listaAmigos = document.getElementById('listaAmigos');
const sortearButton = document.getElementById('sortear');
const resultadoDiv = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("¡Este nombre ya está en la lista!");
        return;
    }
    amigos.push(nombre);
    nombreInput.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. ¡Agrega algunos!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultadoDiv.innerHTML = `¡El amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}

agregarButton.addEventListener('click', agregarAmigo);
sortearButton.addEventListener('click', sortearAmigo);