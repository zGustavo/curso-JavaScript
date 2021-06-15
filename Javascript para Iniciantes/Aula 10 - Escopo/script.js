function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca
//console.log(carro) // Erro, carro is not defined


// Escopo de bloco
// Var "vaza" do escopo de bloco, não recomendado
{
    var mes = 'Dezembro';
    console.log(mes);
}

console.log(mes);

// objeto com const
const data = {
    ano: 2021,
    mes: 'Dezembro',
}

data.ano = 2022; // Altera o valor de ano.

// Exercícios
// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(var, marca, portas); // colocou var no lugar da variavel cor
// Como corrigir o erro abaixo?
function somarDois(x) {
    const dois = 2; 
    return x + dois;
}

function dividirDois(x) {
    return x + dois; // variavel dois não existe nesse bloco  
}
somarDois(4);
dividirDois(6);
// O que fazer para total retornar 500
var numero = 50;
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
const total = 10 * numero; // confliito de bloco VAR numero trocar por const ou let
console.log(total);