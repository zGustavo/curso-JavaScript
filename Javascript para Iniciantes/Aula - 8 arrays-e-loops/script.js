var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0]; // Switch
videoGames[2]; // XBox

// Métodos e propriedades de uma Arrays

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final do Array
videoGames.length; // 3 tamanho do array

// Loops

// Laço For
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console

// Laço while
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console


// Break
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break;
    }
}


// forEach
videoGames.forEach(function(item) {
    console.log(item);
});
// O argumento item será atribuido dinamicamente


// Exercícios
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var venceuCopa = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (i = 0; i < venceuCopa.length; i++) {
    console.log(`O brasil ganhou a copa de ${venceuCopa[i]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(i = 0; i < frutas.length; i++) {
    if(frutas[i] === 'Pera') {
        break;
    }
    console.log(frutas[i]);
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);