const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', (e) => {
  ctx.fillStyle = 'green';
  ctx.fillRect(e.clientX, e.clientY, 10, 10)
})