//Exercício
// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName('img');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavavra imagem
const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos)
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);
// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length -1]);