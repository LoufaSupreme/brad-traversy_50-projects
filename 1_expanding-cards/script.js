const panels = document.querySelectorAll('.panel');

function handleClick(e) {
    panels.forEach(panel => {
        panel.classList.remove('active');
        // const caption = panel.querySelector('.caption');
        // caption.classList.remove('expanded');
    });
    e.target.classList.add('active');
}

// function transitionEnd(e) {
//     if (e.target.classList.contains('active')) {
//         const caption = e.target.querySelector('.caption');
//         caption.classList.add('expanded')
//     }

// }

panels.forEach(panel => {
    panel.addEventListener('click', handleClick);
    // panel.addEventListener('transitionend', transitionEnd)
})