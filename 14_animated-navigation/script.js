const btn = document.querySelector('button');
const nav = document.querySelector('nav');
const navList = nav.querySelector('ul');

btn.addEventListener('click', function () {
    nav.classList.toggle('closed');
    this.classList.toggle('rotate');
})

