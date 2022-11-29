const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.bar-progress')

let step = 1;
const NUM_STEPS = circles.length;

function disableBtns() {
    if (step >= NUM_STEPS) {
        next.disabled = true;
        prev.disabled = false;
    }
    else if (step <= 1) {
        prev.disabled = true;
        next.disabled = false;
    }
    else {
        next.disabled=false;
        prev.disabled=false;
    }
}

function updateCircles() {
    circles.forEach(circle => circle.classList.remove('active'));
    circles[step-1].classList.add('active');
}

function updateProgressBar() {
    const stepSize = 1 / (NUM_STEPS - 1); 
    progress.style.width = `${(step-1) * stepSize * 100}%`;
}

next.addEventListener('click', () => {
    step += 1;
    disableBtns();
    updateCircles();
    updateProgressBar();
})

prev.addEventListener('click', () => {
    step -= 1;
    disableBtns();
    updateCircles();
    updateProgressBar();
})