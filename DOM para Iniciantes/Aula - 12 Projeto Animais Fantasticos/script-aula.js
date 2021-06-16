const animais = document.getElementById('animais'); // seleciona pelo #ID
//console.log(animais);

const gridSection = document.getElementsByClassName('grid-section'); // Seleciona pelo nome da Class
//console.log(gridSection[1]);

// Seletor Geral Único
// Retorna o primeiro elementro que combinar com seu Seletor CSS

const animal = document.querySelector('.animais');
const contato = document.querySelector('#contato');

const primeiraLi = document.querySelector('li');
//console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
//console.log(linkInterno);
//console.log(animais, contato);


// Seletor Geral lista
const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg[1]);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index) {
    console.log(item);
    console.log(index);
})


const arrayGrid = Array.from(gridSectionHTML); // Transforma em Array