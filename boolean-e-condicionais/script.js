// Verifique se a sua idade é maior do que a de algum parente
var fulano = 28; 
var beltrano = 30; 
if (fulano > beltrano) {
    console.log("Fulano tem idade maior")
} else {
    console.log("beltrano é mais velho");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3 Pois as 3 condições são TRUE logo ele mostra a ultima condição 3
 
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy
// Compare o total de habitantes do Brasil com China (valor em mi

var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log("Brasil tem mais habitantes");
} else {
    console.log("Falso");
}

// O que irá aparecer no console
if(('Gato' === 'gato') && (5 > 2)) {
    console.log("verdadeiro");
} else {
    console.log("Falso");
}

// O que irá aparecer no console
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
