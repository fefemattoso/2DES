function exibirDescricaoCurso(curso) {
    const descricao = document.getElementById(`${curso}Descricao`).innerHTML;
    document.getElementById(`${curso}ModalDescricao`).innerHTML = descricao;
}

document.addEventListener('DOMContentLoaded', function () {
    // Substitua 'cursoX' pelos identificadores reais dos seus cursos
    ['curso1', 'curso2', 'curso3', 'curso4', 'curso5'].forEach(function (curso) {
        document.getElementById(`${curso}Modal`).addEventListener('show.bs.modal', function () {
            exibirDescricaoCurso(curso);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelector('form').addEventListener('submit', function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        var nomeAluno = document.getElementById('nomeAluno').value;
        var emailAluno = document.getElementById('emailAluno').value;
        var cursoSelecionado = document.getElementById('cursoSelectModal').value;

       
        setTimeout(function () {
            exibirMensagemSucesso();
        }, 1000);
    });

    // Função para exibir a mensagem de sucesso
    function exibirMensagemSucesso() {
        // Exibe a mensagem de sucesso
        document.getElementById('mensagemSucesso').style.display = 'block';

        // Oculta o modal após 2 segundos (simulando uma ação adicional após o envio do formulário)
        setTimeout(function () {
            $('#matriculaModal').modal('hide');
        }, 2000);
    }
});
