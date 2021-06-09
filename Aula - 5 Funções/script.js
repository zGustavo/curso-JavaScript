function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são argumentos
imc(60, 1.70); // 60 e 1.70 são os argumentos
imc(70, 1.80);


function imc2 (peso, altura) {
    const imc = peso / (altura * altura);
    console.log(imc2);
}

function terceiraIdade (idade) {
    if(typeof idade !== 'number') {
        return "Por favor preencha um número"
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(30));

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

// Escopo Léxico
var profissao = 'Designer';

function dados() {
    var nome = 'André';
    var idade = 28;

    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro


// Exercícios
// Crie uma função para verificar se um valor é Truthy

function verificar(valor) {
    return !valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro (lado) {
    return `O perimetro do quadrado é: ${lado * 4}`;
}
// lembrando: perímetro é a soma dos quatro lados do quadrado
// Crie uma função que retorne o seu nome completo

function nomeCompleto(nome, sobrenome) {
    return `Nome completo: ${nome} ${sobrenome}`
}
// ela deve possuir os parâmetros: nome e sobrenome
// Crie uma função que verifica se um número é par
function par(num) {
    if(num % 2 == 0) {
        return "número par";
    } else {
        return "número impar";
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDados (dado) {
    return typeof(dado);
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.
addEventListener('click', function(){
    console.log("Gustavo dias")
})
