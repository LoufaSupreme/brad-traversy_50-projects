const textarea = document.querySelector('textarea');
const choiceContainer = document.querySelector('.choice-container');

function makeChoiceElem(txt) {
    const choice = document.createElement('div');
    choice.classList.add('choice');
    choice.innerText = txt;
    return choice;
}

function checkInput() {
    choiceContainer.innerHTML = "";
    const choices = textarea.value.split(', ');
    choices.forEach(choice => {
        choiceContainer.appendChild(makeChoiceElem(choice));
    })
    if (textarea.value === "") choiceContainer.innerHTML = "";
}

function generateRandomNum(max) {
    return Math.floor(Math.random() * max)
}

function selectChoice(choices) {
    const allChoices = choiceContainer.querySelectorAll('.choice');
    allChoices.forEach(choice => choice.classList.remove('selected'));

    const num = generateRandomNum(choices.length);
    choices[num].classList.add('selected');
}

function handleKeyPress(e) {
    const time = 100;
    if (e.key === 'Enter') {
        e.preventDefault();
        const choices = [...choiceContainer.querySelectorAll('.choice')];
        if (choices && choices.length) {
            const interval = setInterval(() => {
                const currentSelected = choices.findIndex(choice => choice.classList.contains('selected'));
                const filteredChoices = [...choices];
                if (currentSelected !== -1) {
                    filteredChoices.splice(currentSelected, 1);
                }
                selectChoice(filteredChoices);
            }, time);
            setTimeout(() => {
                clearInterval(interval)
            },time*12);
        }
    }
}

textarea.addEventListener('input', checkInput);
document.addEventListener('keypress', handleKeyPress);