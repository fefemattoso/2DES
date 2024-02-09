function buscarCEP() {
    var cep = document.getElementById('cep').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                exibirResultado(data);
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch(error => console.error('Erro na busca:', error));
}

function exibirResultado(data) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade/UF:</strong> ${data.localidade}/${data.uf}</p>
    `;
}
