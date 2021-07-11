// Exemplo real

// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//         // const elementoSelecionado = document.querySelector(this.seletor);
//         // elementoSelecionado.classList.add('ativar');
//     }
// }

// Função construtora
function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
    // const elementoSelecionado = document.querySelector(this.seletor);
    // elementoSelecionado.classList.add('ativar');
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

const Lastli = new Dom("li:last-child");

// Exercícios
// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//     console.log(this.nome + ' andou');
//     }
//     }
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa("João", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom1(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.element = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        })
    }
}

const listaItens = new Dom1("li");