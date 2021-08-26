const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
    array[index] = 'teste';
    console.log(item, index, array);
})

// Arrow Function
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));


// Map
// [].map(callback(itemAtual), index, array))
const carros2 = ['Ford', 'Fiat', 'Hoda'];

const novaArray = carros2.map((item, index, array) => {
    return item.toUpperCase();
})
console.log(novaArray);

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);

console.log(numerosX2);


const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

function nomeAulas(aula) {
    return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

// Reduce 
// [].reduce(callback(acumulador, valorAtual, index, array) valorInicial)
const aulas1 = [10, 25, 30];
const total1 = aulas1.reduce((acumulador, atual) => {
    return acumulador + atual;
});
console.log(total1); // 65

// Maior numero com Reduce
const numero = [10, 25, 30, 3, 54, 33 , 22];
const maiorNumero = numero.reduce((anterior, atual) => anterior > atual ? anterior : atual);
console.log(maiorNumero); //54 


// Maior que com Every
const numeros1 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros1.every(n => n > 7);

console.log(maiorQue3); // verifica se o primeiro elemento é verdadeiro e retorna


// Find 
const frutas = ['Banama', 'Maça', 'Uvas', 'Mamão'];
const indexUva = frutas.findIndex(item => {
    return item === 'Uvas';
})

console.log('Index: ',indexUva); // retorna index no primeiro verdadeiro

// Filter retorna sempre um array 
const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maça'];

const arrayFrutas = frutas1.filter((item) => {
    console.log(item);
})

console.log(arrayFrutas); //