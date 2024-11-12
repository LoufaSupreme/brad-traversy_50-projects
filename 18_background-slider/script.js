const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const body = document.querySelector('body');
const imgWindow = document.querySelector('.img-container');

const images = ['https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80','https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80','https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80','https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80','https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'];

let currentImage = 0;

function switchImage(n) {
    currentImage = ((currentImage + images.length) + n) % images.length;
    const url = images[currentImage];
    imgWindow.style.backgroundImage = `url(${url})`; // note, should NOT have quotations inside brackets, or semicolon afterwards!
    body.style.backgroundImage = `url(${url})`;
}

left.addEventListener('click', () => {
    switchImage(-1);
});

right.addEventListener('click', () => {
    switchImage(1);
});


