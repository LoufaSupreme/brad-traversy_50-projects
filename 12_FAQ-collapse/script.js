const faqs = document.querySelectorAll('.faq');

function handleClick(e) {
    e.target.classList.toggle('active');
    const icon = e.target.querySelector('i');
    if (e.target.classList.contains('active')) {
        icon.classList = 'fa-solid fa-chevron-up';
    }
    else {
        icon.classList = 'fa-solid fa-chevron-down';
    }
}

faqs.forEach(faq => {
    faq.addEventListener('click', handleClick)
})