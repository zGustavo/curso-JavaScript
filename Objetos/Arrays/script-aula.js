const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1]; // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; //11


// Array from

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const obj = {
    0: 'Gustavo',
    1: 'Dias',
    2: 'Teste',
    length: 3,
};

const objArray = Array.from(obj);

// Modificadores de Array de Array
instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(idades);

console.log(instrumentos);