const textarea = document.querySelector('textarea');
const choiceContainer = document.querySelector('.choice-container');

// create a choice tag
function makeChoiceElem(txt) {
    const choice = document.createElement('div');
    choice.classList.add('choice');
    choice.innerText = txt;
    return choice;
}

//  append choice tags every time the textarea input changes
function checkInput() {
    choiceContainer.innerHTML = "";
    const choices = textarea.value.split(', ');
    choices.forEach(choice => {
        choiceContainer.appendChild(makeChoiceElem(choice));
    })
    if (textarea.value === "") choiceContainer.innerHTML = "";
}

// generate a number between 0 and max-1
function generateRandomNum(max) {
    return Math.floor(Math.random() * max)
}

// randomly select a choice
function selectChoice(choices) {
    const allChoices = choiceContainer.querySelectorAll('.choice');
    allChoices.forEach(choice => choice.classList.remove('selected'));

    const num = generateRandomNum(choices.length);
    choices[num].classList.add('selected');
}

// exclude the current selected choice so we don't randomly pick
// it twice in a row
function excludeSelectedChoice(choices) {
    const currentSelected = choices.findIndex(choice => choice.classList.contains('selected'));
    if (currentSelected === -1) return choices;

    const filteredChoices = [...choices];
    filteredChoices.splice(currentSelected, 1);
    return filteredChoices;
}

function handleKeyPress(e) {
    const time = 100;
    if (e.key === 'Enter') {
        e.preventDefault();
        const choices = [...choiceContainer.querySelectorAll('.choice')];
        if (choices && choices.length) {
            const interval = setInterval(() => {
                const filteredChoices = excludeSelectedChoice(choices)
                selectChoice(filteredChoices);
            }, time);
            setTimeout(() => {
                clearInterval(interval)
            }, Math.max(time * choices.length, time*12));
        }
    }
}

textarea.addEventListener('input', checkInput);
document.addEventListener('keypress', handleKeyPress);