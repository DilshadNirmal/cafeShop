const back2top = document.querySelector('#back-2-top'),
            offset = 400,
            body = document.body,
            docElem = document.documentElement;

window.addEventListener('scroll', (e) => {
    scrollPos = body.scrollTop || docElem.scrollTop;

    back2top.className = (scrollPos > offset) ? 'visible' : '';

})

back2top.addEventListener('click', (e) => {
    e.preventDefault;
    window.scrollTo(0, 0);
});

const menu = document.querySelector('#menu-btn'),
    modal = document.querySelector('#menu');

menu.addEventListener('click', (e) => {
    if (modal.className == 'modal') {
        modal.className = 'open';
    } else {
        modal.className = 'modal';
    }
});

const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', (e) => {
    e.preventDefault;

    if (modal.className == 'open') {
        modal.className = 'modal';
    } else {
        modal.className = 'open';
    }
})