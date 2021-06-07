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