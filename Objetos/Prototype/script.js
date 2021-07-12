function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

const gustavo = new Pessoa('Gustavo', 28);

// console.log(Pessoa.prototype);
// console.log(gustavo.prototype);



const pais = 'Brasil';
const cidade = new String('Rio');



const carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}


// Exercícios
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
    return `Nome completo: ${this.nome} ${this.sobrenome}`;
}

const joao = new Pessoas('João', 'Silva', 25);


// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
