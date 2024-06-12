const apiUrl = 'http://localhost:3000';

// Funções para Destinos
async function loadDestinos() {
    try {
        const response = await fetch(`${apiUrl}/destinos`);
        const destinos = await response.json();
        const destinosTable = document.getElementById('destinos');
        destinosTable.innerHTML = destinos.map(destino => `
            <tr>
                <td>${destino.id}</td>
                <td>${destino.nome}</td>
                <td>${destino.descricao}</td>
                <td>
                    <button onclick="editDestino(${destino.id})">Editar</button>
                    <button onclick="deleteDestino(${destino.id})">Deletar</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Erro ao carregar destinos:', error);
    }
}

async function criarDestino(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        nome: formData.get('nome'),
        descricao: formData.get('descricao')
    };
    try {
        await fetch(`${apiUrl}/destinos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        form.reset();
        toggleModal('cadastroDestino');
        loadDestinos();
    } catch (error) {
        console.error('Erro ao criar destino:', error);
    }
}

async function deleteDestino(id) {
    try {
        await fetch(`${apiUrl}/destinos/${id}`, {
            method: 'DELETE'
        });
        loadDestinos();
    } catch (error) {
        console.error('Erro ao deletar destino:', error);
    }
}

async function editDestino(id) {
    const nome = prompt('Digite o novo nome do destino:');
    const descricao = prompt('Digite a nova descrição do destino:');
    if (nome && descricao) {
        try {
            await fetch(`${apiUrl}/destinos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, descricao })
            });
            loadDestinos();
        } catch (error) {
            console.error('Erro ao editar destino:', error);
        }
    }
}

// Funções para Hotéis
async function loadHoteis() {
    try {
        const response = await fetch(`${apiUrl}/hoteis`);
        const hoteis = await response.json();
        const hoteisTable = document.getElementById('hoteis');
        hoteisTable.innerHTML = hoteis.map(hotel => `
            <tr>
                <td>${hotel.id}</td>
                <td>${hotel.nome}</td>
                <td>${hotel.endereco}</td>
                <td>${hotel.destinoId}</td>
                <td>
                    <button onclick="editHotel(${hotel.id})">Editar</button>
                    <button onclick="deleteHotel(${hotel.id})">Deletar</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Erro ao carregar hotéis:', error);
    }
}

async function criarHotel(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        nome: formData.get('nome'),
        endereco: formData.get('endereco'),
        destinoId: parseInt(formData.get('destinoId'))
    };
    try {
        await fetch(`${apiUrl}/hoteis`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        form.reset();
        toggleModal('cadastroHotel');
        loadHoteis();
    } catch (error) {
        console.error('Erro ao criar hotel:', error);
    }
}

async function deleteHotel(id) {
    try {
        await fetch(`${apiUrl}/hoteis/${id}`, {
            method: 'DELETE'
        });
        loadHoteis();
    } catch (error) {
        console.error('Erro ao deletar hotel:', error);
    }
}

async function editHotel(id) {
    const nome = prompt('Digite o novo nome do hotel:');
    const endereco = prompt('Digite o novo endereço do hotel:');
    const destinoId = parseInt(prompt('Digite o novo ID do destino:'));
    if (nome && endereco && destinoId) {
        try {
            await fetch(`${apiUrl}/hoteis/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, endereco, destinoId })
            });
            loadHoteis();
        } catch (error) {
            console.error('Erro ao editar hotel:', error);
        }
    }
}

// Funções para Pontos Turísticos
async function loadPontosTuristicos() {
    try {
        const response = await fetch(`${apiUrl}/pontos-turisticos`);
        const pontosTuristicos = await response.json();
        const pontosTuristicosTable = document.getElementById('pontosTuristicos');
        pontosTuristicosTable.innerHTML = pontosTuristicos.map(ponto => `
            <tr>
                <td>${ponto.id}</td>
                <td>${ponto.nome}</td>
                <td>${ponto.descricao}</td>
                <td>${ponto.destinoId}</td>
                <td>
                    <button onclick="editPontoTuristico(${ponto.id})">Editar</button>
                    <button onclick="deletePontoTuristico(${ponto.id})">Deletar</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Erro ao carregar pontos turísticos:', error);
    }
}

async function criarPontoTuristico(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        nome: formData.get('nome'),
        descricao: formData.get('descricao'),
        destinoId: parseInt(formData.get('destinoId'))
    };
    try {
        await fetch(`${apiUrl}/pontos-turisticos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        form.reset();
        toggleModal('cadastroPontoTuristico');
        loadPontosTuristicos();
    } catch (error) {
        console.error('Erro ao criar ponto turístico:', error);
    }
}

async function deletePontoTuristico(id) {
    try {
        await fetch(`${apiUrl}/pontos-turisticos/${id}`, {
            method: 'DELETE'
        });
        loadPontosTuristicos();
    } catch (error) {
        console.error('Erro ao deletar ponto turístico:', error);
    }
}

async function editPontoTuristico(id) {
    const nome = prompt('Digite o novo nome do ponto turístico:');
    const descricao = prompt('Digite a nova descrição do ponto turístico:');
    const destinoId = parseInt(prompt('Digite o novo ID do destino:'));
    if (nome && descricao && destinoId) {
        try {
            await fetch(`${apiUrl}/pontos-turisticos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, descricao, destinoId })
            });
            loadPontosTuristicos();
        } catch (error) {
            console.error('Erro ao editar ponto turístico:', error);
        }
    }
}

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('oculto');
}

// Load initial data
window.onload = () => {
    loadDestinos();
    loadHoteis();
    loadPontosTuristicos();
};
