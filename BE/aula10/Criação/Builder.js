class Carro{
    constructor(){
        this.modelo = "Argo"
        this.marca = "Fiat"
        this.ano = 2024
    }
}

function carroBuilder(){
    return new Carro();
}

class Arvore{
    especie;
    altura;
    idade
}

const arvore = new Arvore();
console.log(arvore)


const arvore1 = new Arvore();
arvore1.especie = "Mogno";
arvore1.altura = 10;
arvore1.idade = 100;
console.log(arvore1);

const arvore2 = new Arvore();
arvore2.especie = "Cedro";
arvore2.altura = 10;
arvore2.idade = 100;
console.log(arvore2);