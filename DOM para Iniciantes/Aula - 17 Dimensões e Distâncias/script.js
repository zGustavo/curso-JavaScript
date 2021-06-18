// Exercícios

// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstimage = document.querySelector('img');
const imgTop = firstimage.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const allImages = document.querySelectorAll('img');
    let soma = 0;
    allImages.forEach((item) => {
        soma += item.offsetWidth;
    });

    console.log(soma);
}

window.onload = () => { // onload acontece só depois da página seja inteira carregada
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48 ) {
        console.log(link, 'Possui boa acessibilidade');
    } else {
        console.log('Não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}
