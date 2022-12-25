const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');
const body = document.querySelector('body');
const imgWindow = document.querySelector('.img-container');

function switchImage(url) {
    body.style.backgroundImage = `url("${url}");`;
    imgWindow.style.backgroundImage = `url("${url}");`;
}

async function generateImage() {
    const res = await fetch(`https://source.unsplash.com/collection/${928423}/?sig=${Math.floor(Math.random() * 100)}`);
    const img = await res.json();
    console.log(img.url)
}