let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', () => {
    let images = document.querySelectorAll('.carousel-image');
    document.querySelector('.carousel-holder').appendChild(images[0]);
});

prev.addEventListener('click', () => {
    let images = document.querySelectorAll('.carousel-image');
    document.querySelector('.carousel-holder').prepend(images[images.length - 1]);
});