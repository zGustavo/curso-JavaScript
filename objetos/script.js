// Objeto
var pessoa = {
    nome: 'Gustavo',
    idade: 28
}

// Método
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return lado * 4;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function() {
    console.log('Escondi');
}

var bg = menu.backgroundColor;

// Exercícios

// Crie um objeto com os seus dados pessoais
// Deve possuí pelo menos duas propriedades nome e sobrenome
let humano = {
    nome: "Gustavo",
    sobrenome: 'Silva',
// Crie um método no objeto anterior, que mostre o seu nome completo
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

}

console.log(humano.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return `Au! Au! Au!`;
        } else {
            return 'Nada';
        }
    },
}