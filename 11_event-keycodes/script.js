const eventKey = document.querySelector('.event-key');
const keyCode = document.querySelector('.key-code');
const eventCode = document.querySelector('.event-code');

window.addEventListener('keydown', (e) => {
    eventKey.innerText = e.key;
    keyCode.innerText = e.keyCode;
    eventCode.innerText = e.code;
})