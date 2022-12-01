const boxes = document.querySelectorAll('.content-box');

function checkBoxes() {
    const scrollDistance = document.documentElement.scrollTop;
    const windowSize = window.innerHeight;
    const bottomOfWindow = windowSize + scrollDistance;

    boxes.forEach(box => {
        if (bottomOfWindow >= box.offsetTop + box.offsetHeight/1.5) {
            box.classList.remove('hide');
        }
        else {
            box.classList.add('hide');
        }
    })
}
checkBoxes();

window.addEventListener('scroll', checkBoxes);

// document.addEventListener('mousemove', (e) => console.log(e.clientY))