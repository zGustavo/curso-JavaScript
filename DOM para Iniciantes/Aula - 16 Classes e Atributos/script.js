// Exercicios

// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item);
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove('ativo');
  console.log(item);
})

menu[0].classList.add('ativo');
console.log(menu[0]);

// Verifique se as imagens possuem o atributo alt
const imgAlt = document.querySelectorAll('img');
imgAlt.forEach((item) => console.log(item.hasAttribute('alt')));
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
console.log(linkExterno);
linkExterno.setAttribute('href', 'https://www.google.com.br');
console.log(linkExterno);