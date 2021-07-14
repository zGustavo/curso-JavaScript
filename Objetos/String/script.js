// const comida = 'pizza';
// const agua = new String('agua ');

// console.log(agua.length);

const fruta = 'Banana';
const listaFruta = 'Melancia, Banana, Laranja';

console.log(listaFruta.includes(fruta, 11));

console.log(fruta.startsWith('Ba')); //procura no começo "case sensitive"
console.log(fruta.endsWith('Na')); // procura no fim  "case sensitive"

// Slide
const transacao1 = 'Depósito do cliente';
const transacao2 = "Depósito do forncedor";
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));

// Substring
const linguagem = 'JavaScript';
console.log(linguagem.substring(3,5)); 

// PadStart
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // .....R$ 99

// Repeat
// const frase = 'Ta';
// console.log(frase.repeat(5)); // TaTaTaTaTa

// Replace
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // R$ 1200.43 trocou a virgula por ponto
console.log(preco);



//Exercícios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [{
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
transacoes.forEach((item) => {
    if (item.descricao.slice(0, 4) === 'Taxa')
        taxaTotal = taxaTotal + item.valor;
})
console.log(taxaTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
// Substitua todos os span's por a's
const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// Retorne o total de taxas
// const transacoes = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
