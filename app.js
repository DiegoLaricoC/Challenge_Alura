let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value.trim();
    if (nombre !== "" && !listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    } else {
        asignarTextoElemento('#resultado', nombre ? 'Este nombre ya está en la lista.' : 'Ingrese un nombre válido.');
    }
}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";
    listaAmigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('#resultado', 'No hay amigos en la lista para sortear.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    asignarTextoElemento('#resultado', `El amigo sorteado es: ${listaAmigos[indiceSorteado]}`);
}
