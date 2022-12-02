const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');

// not in use, just interesting
function findLabelForInput(input) {
    labels.forEach(label => {
        if (label.htmlFor === input.id) {
            return label
        }
    })
}

function spanify(text) {
    return text.split('').map((letter, index) => {
        return `<span style="transition-delay:${index*50}ms;">${letter}</span>`;
    }).join('');
}

labels.forEach(label => {
    label.innerHTML = spanify(label.innerText);
})
