var nome = 'Gustavo';

var numero = 1.8;

numero.toString() // 1.8 mostra como string
numero.toFixed(); // 2

var btn = document.querySelector('.btn');

btn.classList.add('azul'); // Adiciona a classe azul
btn.innerText; // Pega o valor "Clique aqui!"
btn.addEventListener('click', function() {
    console.log('Clicou!');
}); // Quando clicar no link, apareceu no console a mensagem


// Exercícios
// nomeie 3 propriedades ou métodos de strings
/* Resposta
    fixed
    length
    slice 
*/
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
/*  addEventListener
    appendChild
    id
    innerHTML
    outerHTML
*/
// busque na web um objeto (método) capaz de interagir com o clip
// clipboard é a parte do seu computador que lida com o CTRL + C