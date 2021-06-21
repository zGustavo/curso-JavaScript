//  Callback
const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

img.addEventListener('click', callback)



const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

function handleKeyBoard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    }
    // console.log(event.key);
}

window.addEventListener('keydown', handleKeyBoard);




