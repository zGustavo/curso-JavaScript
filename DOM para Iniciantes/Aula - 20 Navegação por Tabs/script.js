const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) { // Verifica se tem itens

    tabContent[0].classList.add('ativo'); // Adiciona a classe ativo ao primeiro item

    function activeTab(index) {
        tabContent.forEach((item) => {
            item.classList.remove('ativo'); // remove a classe ativo dos outras sections
        })
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })
}