const canvas = document.querySelector('#canvas');
const clearBtn = document.querySelector(".clear");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const colorInput = document.querySelector('input[type="color"]');
const fontSize = document.querySelector('.fontsize');
canvas.width = canvas.offsetWidth; // necessary for accurate drawing
canvas.height = canvas.offsetHeight * 3; // you can't rely on css height/width for some reason

const ctx = canvas.getContext('2d');
ctx.lineWidth = 5;
fontSize.innerText = ctx.lineWidth;
ctx.strokeStyle = 'black';
let pos = {x: 0, y: 0};

function draw(e) {
  if (e.buttons !== 1) return; // left mouse btn must be clicked
  
  ctx.beginPath();
  ctx.lineCap = 'round';
  
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);

  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function setPosition(e) {
  pos.x = e.clientX - canvas.offsetLeft;
  pos.y = e.clientY - canvas.offsetTop;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function increaseSize() {
  const max = 15;
  const amt = 1;
  
  if (ctx.lineWidth + amt <= max) {
    ctx.lineWidth += amt;
    fontSize.innerText = ctx.lineWidth;
  }
}

function changeColor(e) {
  ctx.strokeStyle = e.target.value;
}

function decreaseSize() {
  const min = 1;
  const amt = 1;
  
  if (ctx.lineWidth - amt >= min) {
    ctx.lineWidth -= amt;
    fontSize.innerText = ctx.lineWidth;
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);

clearBtn.addEventListener('click', clearCanvas);
increaseBtn.addEventListener('click', increaseSize);
decreaseBtn.addEventListener('click', decreaseSize);
colorInput.addEventListener('change', changeColor);