const progress = document.querySelector('.progress');
const img = document.querySelector('img');
const STARTING_BLUR = 50; //pixels

img.style.filter = `blur(${STARTING_BLUR}px)`;

function loadPage() {
    const interval = setInterval(() => {
        if (progress.innerText === "100") {
            progress.getElementsByClassName.display = 'none';
            console.log('ALL DONE');
            setTimeout(() => {
                progress.parentElement.style.display = 'none';
            }, 500)
            return clearInterval(interval)
        }
        else {
            const currentProgress = +progress.innerText;
            progress.innerText = currentProgress+1;

            const blur = STARTING_BLUR - (currentProgress / 100 ) * STARTING_BLUR;

            img.style.filter = `blur(${blur}px)`
        }
    }, 25)
}

window.addEventListener('DOMContentLoaded', loadPage);
   