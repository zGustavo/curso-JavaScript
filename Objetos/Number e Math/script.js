console.log(Number.isNaN(NaN)); // Retorna true apenas se for NaN   
console.log(Number.isInteger(5.6)); // Retorna true só para números Inteiros

console.log(parseFloat('     3242.125'));
console.log(parseFloat('100 reais'));
console.log(parseInt('100 reais'));


// De acordo com a localidade
let valor = 48.49;
let valor2 = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 48,49
valor2 = valor2.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $48.49


// Math.
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5.5)); //5.5
console.log(Math.ceil(4.8334)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.floor(4.8334)); // 4
console.log(Math.round(4.8334)); // 5
console.log(Math.round(4.3)); // 4

