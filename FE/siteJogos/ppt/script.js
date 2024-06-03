var regras = document.getElementsByClassName("regras")[0];

function mostraregras() {
    regras.style.display = "flex";
}

function fecharregras() {
    regras.style.display = "none";
}

var jogo = document.getElementsByClassName("jogo")[0];
var selecao = document.getElementsByClassName("gameplay")[0];
var test = document.getElementsByClassName("test")[0];
var opcao = document.getElementsByClassName("opcao")[0];
var pedra = document.getElementsByClassName("pedra")[0];
var tesoura = document.getElementsByClassName("tesoura")[0];
var papel = document.getElementsByClassName("papel")[0];
var spok = document.getElementsByClassName("spok")[0];
var lagarto = document.getElementsByClassName("lagarto")[0];
var test1 = document.getElementsByClassName("test1")[0];
var resultado = document.getElementsByClassName("result")[0];
var refs = [pedra, papel, tesoura, spok, lagarto];
var pontuacao = document.getElementsByClassName("pontuacao")[0];
var playAgain = document.getElementsByClassName("fim")[0];
var score = 0;
var buttonRegras = document.getElementsByClassName("regras-button")[0];

function jogar(num) {
    jogo.style.cssText = "animation: opacidade 0.5s linear; animation-direction: reverse;"

    setTimeout(() => {
        jogo.style.display = "none";
    }, 500);

    setTimeout(() => {
        selecao.style.display = "flex";
    }, 500);
    selecao.style.cssText = "animation: opacidade 1.5s linear;"
    buttonRegras.style.display = "none";
    
    switch (num) {
        case pedra:
            test.innerHTML = pedra.outerHTML;
            test.value = "pedra";
            break;
        case papel:
            test.innerHTML = papel.outerHTML;
            test.value = "papel";
            break;
        case tesoura:
            test.innerHTML = tesoura.outerHTML;
            test.value = "tesoura";
            break;
        case spok:
            test.innerHTML = spok.outerHTML;
            test.value = "spok";
            break;
        case lagarto:
            test.innerHTML = lagarto.outerHTML;
            test.value = "lagarto";
            break;
        default:
            break;
    }

    var random = Math.floor(Math.random() * refs.length);
    var house = refs[random];
    test1.innerHTML = house.outerHTML;
    test1.value = house.value;

    // Partida
    setTimeout(() => {
        Resolucao();
    }, 500);
}

function Resolucao() {
    var vitoria = (
        (test.value == "pedra" && (test1.value == "tesoura" || test1.value == "lagarto")) ||
        (test.value == "papel" && (test1.value == "pedra" || test1.value == "spok")) ||
        (test.value == "tesoura" && (test1.value == "papel" || test1.value == "lagarto")) ||
        (test.value == "lagarto" && (test1.value == "spok" || test1.value == "papel")) ||
        (test.value == "spok" && (test1.value == "tesoura" || test1.value == "pedra"))
    );

    var derrota = (
        (test1.value == "pedra" && (test.value == "tesoura" || test.value == "lagarto")) ||
        (test1.value == "papel" && (test.value == "pedra" || test.value == "spok")) ||
        (test1.value == "tesoura" && (test.value == "papel" || test.value == "lagarto")) ||
        (test1.value == "lagarto" && (test.value == "spok" || test.value == "papel")) ||
        (test1.value == "spok" && (test.value == "tesoura" || test.value == "pedra"))
    );

    if (vitoria) {
        resultado.innerHTML = "Você ganhou";
        score += 1;
        pontuacao.innerHTML = score;
        test.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";
    } else if (derrota) {
        resultado.innerHTML = "Você perdeu";
        test1.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";
    } else {
        resultado.innerHTML = "Empate";
        test.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";
        test1.style.cssText = "animation: luzdeFundo 1.5s ease infinite;";
    }
    playAgain.style.display = "flex";
}

function reset() {
    jogo.style.display = "flex";
    selecao.style.display = "none";
    resultado.innerHTML = "";
    playAgain.style.display = "none";
    test.style.cssText = "";
    test1.style.cssText = "";
    jogo.style.cssText = "";
    buttonRegras.style.display = "block";
}
