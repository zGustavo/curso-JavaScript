const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight; // Pega o height total, mesmo dentro do scroll
console.log(listaAnimais.clientHeight); // Mostra Height + padding
console.log(listaAnimais.offsetHeight); // height + padding + border
console.log(height);


const animaisTop = listaAnimais.offsetTop; // pega a distancia em PX do Topo
console.log(animaisTop);



const primeiroH2 = document.querySelector('h2');
const rect = primeiroH2.getBoundingClientRect();

console.log(rect);


// window

console.log(
    window.innerWidth, // pega o tamanho da janela
    window.outerWidth
)



const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
    console.log('usuário mobile')
} else {
    console.log('usuário desktop')
}
