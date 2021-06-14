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
