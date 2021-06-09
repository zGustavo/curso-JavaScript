// Template String
let gols = 1000;
let frase1 = 'Romario fez ' + gols + ' gols';
let frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frase2);

/*
Exercício
Dica rápida, frases (string) devem ser colocadas entre aspas
(simples ou duplas) e números não levam aspas. */

// Declare uma variável contendo uma string
let string1 = "Isso é uma string";
// Declare uma variável contendo um número dentro de uma string
let string2 = "Isso é uma string com um número 2";
// Declare uma variável com a sua idade
let idade = 28;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let nome = "Gustavo";
let sobrenome = nome + " Dias";
// Coloque a seguinte frase em uma variável: It's time
let string3 = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof(nome));

console.log(string1,
            string2,
            idade,
            nome,
            sobrenome,
            string3);
