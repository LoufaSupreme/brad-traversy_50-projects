const btn = document.querySelector('button');
const search = document.querySelector('.search');

btn.addEventListener('click', () => {
    search.classList.toggle('show');
})