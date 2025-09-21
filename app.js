//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // [{nome: 'Fulano', email: 'fulano@email.com'}]

function checarCampoNome() {
    let inputNome = document.getElementById('amigoNome').value;
    let inputEmail = document.getElementById('amigoEmail').value;
    let botaoAdicionar = document.getElementsByClassName('button-add')[0];

    if (inputNome.trim() !== "" && inputEmail.trim() !== "") {
        botaoAdicionar.style.backgroundColor = '#fe652b';
    } else {
        botaoAdicionar.style.backgroundColor = '#c4c4c4';
    }
}

function adicionarAmigo() {
    let inputNome = document.getElementById('amigoNome').value;
    let inputEmail = document.getElementById('amigoEmail').value;
    let listaAmigos = document.getElementById('listaAmigos');
    if (inputNome.trim() !== "" && inputEmail.trim() !== "") {
        amigos.push({ nome: inputNome, email: inputEmail });
        let novoItem = document.createElement('li');
        novoItem.textContent = `${inputNome} (${inputEmail})`;
        listaAmigos.appendChild(novoItem);
        document.getElementById('amigoNome').value = "";
        document.getElementById('amigoEmail').value = "";
        checarCampoNome();
    } else {
        alert("Por favor, insira nome e email válidos.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    let nomes = amigos.map(a => a.nome);
    let sorteio = {};
    let nomesDisponiveis = [...nomes];
    for (let i = 0; i < nomes.length; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * nomesDisponiveis.length);
        } while (nomesDisponiveis[index] === nomes[i] && nomesDisponiveis.length > 1);
        sorteio[nomes[i]] = nomesDisponiveis[index];
        nomesDisponiveis.splice(index, 1);
    }
    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = "<h3>Resultado do Sorteio:</h3>";
    for (let amigo in sorteio) {
        resultadoSorteio.innerHTML += `<p><strong>${amigo}</strong> tirou <strong>${sorteio[amigo]}</strong></p>`;
    }
    alert("Sorteio realizado! Os resultados serão enviados por email.");

    // Enviar emails usando EmailJS
    amigos.forEach(amigo => {
        let sorteado = sorteio[amigo.nome];
        enviarEmail(amigo.email, amigo.nome, sorteado);
    });
}

// Função para enviar email usando EmailJS
function enviarEmail(email, nome, sorteado) {
    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
        to_name: nome,
        to_email: email,
        sorteado_nome: sorteado
    }).then(function(response) {
        console.log("Email enviado para " + email);
    }, function(error) {
        console.error("Erro ao enviar email:", error);
    });
}

// Inicialização dos eventos
document.getElementById('amigoNome').addEventListener('input', checarCampoNome);
document.getElementById('amigoEmail').addEventListener('input', checarCampoNome);
