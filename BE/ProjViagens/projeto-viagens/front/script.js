// Variáveis e constantes(objetos) globais
const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const cadastro = document.getElementById('cadastro');
const uriDestinos = "http://localhost:3000/destinos";
const uriHoteis = "http://localhost:3000/hoteis";
const uriPontosTuristicos = "http://localhost:3000/pontosTuristicos";
const destinos = [];
const hoteis = [];
const pontosTuristicos = [];

// Função para adicionar mensagens do sistema na caixa de mensagens
function addSystemMessage(message) {
    const systemMessages = document.getElementById('system-messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    systemMessages.appendChild(newMessage);
}

// Função para atualizar o patrimônio da agência na caixa correspondente
function updatePatrimonio() {
    const patrimonioElement = document.getElementById('patrimonio');
    const patrimonioTotal = destinos.reduce((total, currentDestino) => total + parseFloat(currentDestino.valor), 0)
                         + hoteis.reduce((total, currentHotel) => total + parseFloat(currentHotel.valor), 0)
                         + pontosTuristicos.reduce((total, currentPontoTuristico) => total + parseFloat(currentPontoTuristico.valor), 0);
    patrimonioElement.textContent = `R$ ${patrimonioTotal.toFixed(2)}`;
}

// Carregar dados dos destinos do back-end
function loadDestinos() {
    fetch(uriDestinos)
        .then(res => res.json())
        .then(res => {
            destinos.push(...res);
            preencherTabela(destinos);
        });
}

// Carregar dados dos hotéis do back-end
function loadHoteis() {
    fetch(uriHoteis)
        .then(res => res.json())
        .then(res => {
            hoteis.push(...res);
            preencherTabela(hoteis);
        });
}

// Carregar dados dos pontos turísticos do back-end
function loadPontosTuristicos() {
    fetch(uriPontosTuristicos)
        .then(res => res.json())
        .then(res => {
            pontosTuristicos.push(...res);
            preencherTabela(pontosTuristicos);
        });
}

// CRUD - Renderizar os dados obtidos em uma tabela
function preencherTabela(data) {
    data.forEach(item => {
        dados.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.descricao}</td>
                <td>${item.valor}</td>
                <td>
                    <button onclick="del('${item.id}', '${item.tipo}')">Excluir</button>
                    <button onclick="edit('${item.id}', '${item.tipo}')">Editar</button>
                </td>
            </tr>
        `;
    });

    // Atualizar a interface ou fazer outra ação necessária
    addSystemMessage('Itens carregados na tabela.');
    updatePatrimonio();
}

// CRUD - Create
criar.addEventListener('submit', e => {
    e.preventDefault();
    const tipo = criar.dataset.tipo;
    const data = {
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    let uri;
    switch (tipo) {
        case 'destino':
            uri = uriDestinos;
            break;
        case 'hotel':
            uri = uriHoteis;
            break;
        case 'pontoTuristico':
            uri = uriPontosTuristicos;
            break;
        default:
            return;
    }
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                switch (tipo) {
                    case 'destino':
                        destinos.push(res);
                        preencherTabela(destinos);
                        break;
                    case 'hotel':
                        hoteis.push(res);
                        preencherTabela(hoteis);
                        break;
                    case 'pontoTuristico':
                        pontosTuristicos.push(res);
                        preencherTabela(pontosTuristicos);
                        break;
                    default:
                        return;
                }
                cadastro.classList.add('oculto');
                criar.reset();

                // Adicione estas linhas
                addSystemMessage('Novo item cadastrado!');
                updatePatrimonio();
            } else {
                cadastro.classList.add('oculto');
                mensagens(res.sqlMessage, 'Erro ao cadastrar item!');
            }
        });
});

// CRUD - Update
function update(id, tipo) {
    const data = {
        nome: document.getElementById(`nome${tipo}${id}`).innerText,
        descricao: document.getElementById(`descricao${tipo}${id}`).innerText,
        valor: document.getElementById(`valor${tipo}${id}`).innerText
    };
    let uri;
    switch (tipo) {
        case 'destino':
            uri = `${uriDestinos}/${id}`;
            break;
        case 'hotel':
            uri = `${uriHoteis}/${id}`;
            break;
        case 'pontoTuristico':
            uri = `${uriPontosTuristicos}/${id}`;
            break;
        default:
            return;
    }
    fetch(uri, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                // Atualizar a interface ou fazer outra ação necessária
                addSystemMessage('Item atualizado!');
                updatePatrimonio();
            } else {
                mensagens(res.sqlMessage, 'Erro ao atualizar item!');
            }
        });
}

// CRUD - Delete
function del(id, tipo) {
    mensagens(`Deseja realmente excluir o item id = ${id}?`, 'Excluir item', id, tipo);
}

// Confirma exclusão
function confirmarExclusao(id, tipo) {
    let uri;
    switch (tipo) {
        case 'destino':
            uri = `${uriDestinos}/${id}`;
            break;
        case 'hotel':
            uri = `${uriHoteis}/${id}`;
            break;
        case 'pontoTuristico':
            uri = `${uriPontosTuristicos}/${id}`;
            break;
        default:
            return;
    }
    fetch(uri, {
        method: 'DELETE'
    })
        .then(() => {
            window.location.reload();
        });
}

// Tornar as células da linha da tabela editáveis
function edit(id, tipo) {
    const nomeElement = document.getElementById(`nome${tipo}${id}`);
    const descricaoElement = document.getElementById(`descricao${tipo}${id    }`);
    nomeElement.setAttribute('contenteditable', 'true');
    descricaoElement.setAttribute('contenteditable', 'true');
    document.getElementById(`valor${tipo}${id}`).setAttribute('contenteditable', 'true');
    const btn = document.createElement('button');
    btn.textContent = '✔';
    btn.onclick = function() {
        update(id, tipo);
    };
    const td = document.createElement('td');
    td.appendChild(btn);
    const tdOpcoes = document.getElementById(`opcoes${tipo}${id}`);
    tdOpcoes.innerHTML = '';
    tdOpcoes.appendChild(td);
}

// Mostrar mensagens do sistema em um modal
function mensagens(msg, titulo, id, tipo) {
    msgs.classList.remove('oculto');
    document.querySelector('#errTit').innerHTML = titulo;
    document.querySelector('#msg').innerHTML = msg;
    if (id != undefined && tipo != undefined) {
        const btnConfirma = document.querySelector('#confirma');
        btnConfirma.classList.remove('oculto');
        btnConfirma.onclick = function() {
            confirmarExclusao(id, tipo);
        };
    }
}

