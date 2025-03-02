//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes inseridos pelo usuário
let amigos = []; // Lista de amigos para o sorteio

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Obtém o campo de entrada
    const nome = input.value.trim(); // Remove espaços extras

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido."); // Exibe um alerta se o nome for inválido
        return;
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!"); // Exibe um alerta para nomes repetidos
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a exibição da lista na tela
    input.value = ""; // Limpa o campo de entrada após a adição
}

// Função para atualizar a exibição da lista de nomes
function atualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
    lista.innerHTML = ""; // Limpa a lista antes de recriar os itens

    // Percorre o array e adiciona cada nome na lista visual
    amigos.forEach(nome => {
        const li = document.createElement("li"); // Cria um elemento <li>
        li.textContent = nome; // Define o texto do item
        lista.appendChild(li); // Adiciona o item à lista
    });
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    // Verifica se há nomes na lista antes do sorteio
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos dois nomes antes de sortear."); // Exibe alerta se a lista estiver vazia
        return;
    }

    // Seleciona um nome aleatoriamente a partir do array
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Exibe o nome sorteado na página
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Amigo secreto: ${sorteado}`;
    resultadoLista.appendChild(li);

    // Limpa a lista de nomes após o sorteio
    amigos = [];
    atualizarLista();
}
