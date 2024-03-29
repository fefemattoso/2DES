//Variáveis e constantes(objetos) globais
const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const cadastro = document.getElementById('cadastro');
const uri = "http://localhost:3000/item";
const item = [];

// Função para adicionar mensagens do sistema na caixa de mensagens
function addSystemMessage(message) {
    const systemMessages = document.getElementById('system-messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    systemMessages.appendChild(newMessage);
}

// Função para atualizar o patrimônio da loja na caixa correspondente
function updatePatrimonio() {
    const patrimonioElement = document.getElementById('patrimonio');
    const patrimonioTotal = item.reduce((total, currentItem) => total + parseFloat(currentItem.valor), 0);
    patrimonioElement.textContent = `R$ ${patrimonioTotal.toFixed(2)}`;
}

//Obter dados do back-end
function loadItens() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            item.push(...res);
            preencherTabela();
        });
}

//CRUD - Read - Renderizar os dados obtidos em uma tabela
function preencherTabela() {
    item.forEach(item => {
        dados.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${item.descricao}</td>
                    <td>${item.valor}</td>
                    <td>
                        <button onclick="del(${item.id})"> x </button>
                        <button onclick="edit(this)"> ✏️ </button>
                    </td>
                </tr>
            `;
    });

    // Adicione estas linhas para mensagem do sistema e atualização do patrimônio
    addSystemMessage('Itens carregados na tabela.');
    updatePatrimonio();
}

//CRUD - Create
criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
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
                item.push(res);
                dados.innerHTML = "";
                preencherTabela();
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

//CRUD - Update
function update(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let data = {
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML
    };
    fetch(uri + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                celulas[1].removeAttribute('contenteditable');
                celulas[2].removeAttribute('contenteditable');
                celulas[3].removeAttribute('contenteditable');
                btn.innerHTML = '*';
                btn.setAttribute('onclick', 'edit(this)');

                // Adicione estas linhas
                addSystemMessage('Item atualizado!');
                updatePatrimonio();
            } else {
                mensagens(res.sqlMessage, 'Erro ao atualizar item!');
            }
        });
}

//CRUD - Delete
function del(id) {
    mensagens('Deseja realmente excluir o item id = ' + id + '?', 'Excluir item', id);
}

//Confirma exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        });
}

//Tornar as células da linha tabela editáveis
function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length -1; i++) {
        celulas[i].setAttribute('contenteditable', 'true');
    }
    btn.innerHTML = '✔';
    btn.setAttribute('onclick', 'update(this)');
}

//Mostrar mensagens do sistema em um modal
function mensagens(msg, titulo, confirma) {
    msgs.classList.remove('oculto');
    document.querySelector('#errTit').innerHTML = titulo;
    document.querySelector('#msg').innerHTML = msg;
    if (confirma != undefined) {
        document.querySelector('#confirma').classList.remove('oculto');
        document.querySelector('#confirma').setAttribute("onclick", `confirmar(${confirma})`);
    }
}
