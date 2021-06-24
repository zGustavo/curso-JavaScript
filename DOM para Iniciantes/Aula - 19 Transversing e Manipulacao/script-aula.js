const mapa = document.querySelector('.mapa');

// Criar Elementos

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo título';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1); // Adiciona o novo ELEMENTO APÓS PRIMEIRO FILHO DO "MAPA"


// CLONAR item
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);