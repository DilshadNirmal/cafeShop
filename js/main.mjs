import { form, handleSubmit } from './formDataApi.mjs';
// import { carousel } from './carousel.js';

let back2top = document.querySelector('#back-2-top'),
            offset = 400,
            body = document.body,
            docElem = document.documentElement,
            scrollPos = 0;

window.addEventListener('scroll', (e) => {
    scrollPos = body.scrollTop || docElem.scrollTop;

    back2top.className = (scrollPos > offset) ? 'visible' : '';

})

back2top.addEventListener('click', (e) => {
    e.preventDefault;
    window.scrollTo(0, 0);
});

let menu = document.querySelector('#menu-btn'),
    modal = document.querySelector('#menu');

menu.addEventListener('click', (e) => {
    if (modal.className == 'modal') {
        modal.className = 'open';
    } else {
        modal.className = 'modal';
    }
});

let closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', (e) => {
    e.preventDefault;

    if (modal.className == 'open') {
        modal.className = 'modal';
    } else {
        modal.className = 'open';
    }
})

// form submission check
form.addEventListener('submit', handleSubmit);

// carousel event
// carousel(1);