let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        document.getElementById("listaAmigos").innerHTML =
            amigos.map(a => `<li>${a}</li>`).join("");
    }

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML =
        `<li>O amigo secreto sorteado é ${sorteado}</li>`;
}
