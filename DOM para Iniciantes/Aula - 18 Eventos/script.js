//Exercício

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function addAtivo(event) {
    event.preventDefault(); // Previne comportamento padrão do link
    linksInternos.forEach((item) => {
        item.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((item) => {
    item.addEventListener('click', addAtivo);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *'); // pega todos os elementos a partir do body

// function handleElemento(event) {
//     console.log(event.currentTarget);
// }

// todosElementos.forEach((item) => {
//     item.addEventListener('click', handleElemento)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function handleElemento(event) {
//     event.currentTarget.remove(); // Alterando a função anterior para remover
// }


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
    console.log(event.key);
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);