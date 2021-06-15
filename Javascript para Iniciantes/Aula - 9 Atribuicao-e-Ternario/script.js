// Operadores de Atribuição
var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (5)
x %= y; // x = x % y (5)
x **= y; // x = x ** y (9765625)

// Operador Ternário
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber

// condicao ? true : false

// Exercícios

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll+= 500;
console.log(scroll);
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCasa && possuiCarro);
console.log(darCredito);