const main = document.querySelector('.main');
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const icons = document.querySelector('.icon-box');
const navItems = document.querySelectorAll('.nav--item');

hamburger.addEventListener('click', () => {
    main.classList.toggle('rotate');
    icons.classList.toggle('rotate');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('show');
        }, index*100);
    })
})

close.addEventListener('click', () => {
    main.classList.toggle('rotate');
    icons.classList.toggle('rotate');
    navItems.forEach(item => item.classList.toggle('show'));
})