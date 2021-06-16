//const imgs = document.querySelectorAll('img');
//console.log(imgs);


//imgs.forEach(function (item, index, array) {
  //console.log(item, index, array);
//})


// HTMLCollection NÃO É ARRAY
const titulos = document.getElementsByClassName('titulo');
console.log(titulos);
// Método forEach só pode usado em Arrays
// para transforma o HTMLCollection em ARRAYS
const titulosArray = Array.from(titulos);
// Array.from pega os dados do HTMLCollection e joga em uma Array.from
titulosArray.forEach(function (item) {
  console.log(item);
})



// ARROW FUNCTION
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
})

// FORMA ACIMA SIMPLIFICADA
let i = 0;
imgs.forEach(() => console.log(i++));
