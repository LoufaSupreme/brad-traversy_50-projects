const canvas = document.querySelector('#canvas');
const clearBtn = document.querySelector(".clear");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const colorInput = document.querySelector('input[type="color"]');
const fontSize = document.querySelector('.fontsize');

const ctx = canvas.getContext('2d');

let lineWidth = 5;
let strokeColor = 'black';
let pos = {x: 0, y: 0};

function initializeCanvas() {
  ctx.lineWidth = lineWidth;
  fontSize.innerText = lineWidth;
  ctx.strokeStyle = strokeColor;
}

function resizeCanvas() {
  // resizing canvas (when screen size changes) causes all art to be lost by default. Can combat this by making temp canvas:
  // make temp canvas
  const temp_canvas = document.createElement('canvas');
  const temp_ctx = temp_canvas.getContext('2d');

  // set width/height so that drawing scale is accurate
  temp_canvas.width = canvas.offsetWidth;
  temp_canvas.height = canvas.offsetHeight;
  // pull background colour from CSS custom variable
  temp_ctx.fillStyle = `rgb(${getComputedStyle(document.body).getPropertyValue('--light-clr')})`;
  // draw the current canvas onto the temp canvas
  temp_ctx.fillRect(0,0,canvas.offsetWidth, canvas.offsetHeight);
  temp_ctx.drawImage(canvas, 0, 0);
  
  // resize the original canvas
  canvas.width = canvas.offsetWidth; // necessary for accurate drawing
  canvas.height = canvas.offsetHeight; // you can't rely on css height/width for some reason
  // draw temp canvas onto original canvas
  ctx.drawImage(temp_canvas, 0, 0);

  // reset colour and stroke size
  initializeCanvas();
}

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
    lineWidth += amt;
    initializeCanvas();
  }
}

function changeColor(e) {
  strokeColor = e.target.value;
  initializeCanvas();
}

function decreaseSize() {
  const min = 1;
  const amt = 1;
  
  if (ctx.lineWidth - amt >= min) {
    lineWidth -= amt;
    initializeCanvas();
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);

clearBtn.addEventListener('click', clearCanvas);
increaseBtn.addEventListener('click', increaseSize);
decreaseBtn.addEventListener('click', decreaseSize);
colorInput.addEventListener('change', changeColor);

window.addEventListener('resize', resizeCanvas);
resizeCanvas();