// Navegação por tabs
function initTabNav() {
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
}
initTabNav();


// Accordion List
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }

}
initAccordion();

// Scroll suave
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault(); 
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    // // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // });
    
}

linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection);
})