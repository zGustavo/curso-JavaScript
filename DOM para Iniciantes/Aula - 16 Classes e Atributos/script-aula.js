const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
}


// Atributos

const animais = document.querySelector('.animais');
//console.log(animais.attributes[0]);

const img = document.querySelector('img');
console.log(img.getAttribute('src'));

// Seta um atributo
img.setAttribute('alt', 'É uma raposa')
console.log(img.attributes);

// Verifica se tem o atributo
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

