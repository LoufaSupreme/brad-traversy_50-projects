const squares = document.querySelectorAll('.square');
const draggables = document.querySelectorAll('[draggable="true"]');
let dragged;

//// the below is all code I did to try to make drag n drop functionality from scratch, before I knew html draggable=true was a thing... 

// function getImageDims(img) {
//   const width = img.offsetWidth + 'px';
//   const height = img.offsetHeight + 'px';
  
//   return {
//     width,
//     height
//   }
// }

// function updateImgPos(e) {
//   const img = e.target.imgElem;
//   img.style.top = (e.clientY) + 'px';
//   img.style.left = (e.clientX) + 'px';
//   img.style.transform = `translate(${-img.clickedLocation.x}px, ${-img.clickedLocation.y}px)`;

// }

// squares.forEach((square) => {
//   square.addEventListener('dragenter', (e) => {
//     square.classList.add("hover");
//   })
//   square.addEventListener('dragleave', (e) => {
//     square.classList.remove("hover");
//   })
// })


// images.forEach((img) => {
//   img.addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     img.classList.add('hold');
//     const imgDims = getImageDims(e.target);
//     img.style.position = "absolute";
//     img.style.maxWidth = imgDims.width;
//     img.style.maxHeight = imgDims.height;

//     const imgPos = img.getBoundingClientRect();
//     const mousePos = {x: e.clientX - imgPos.x, y: e.clientY - imgPos.y};
//     img.imgElem = img;
//     img.clickedLocation = {x: e.clientX - imgPos.x, y: e.clientY - imgPos.y};

//     img.addEventListener('mousemove', updateImgPos);

//   })

//   img.addEventListener('mouseup', (e) => {
//     console.log('mouseup')
//     img.classList.remove('hold');
//     // clearInterval(intervalDrag);
//     img.removeEventListener('mousemove', updateImgPos, false);
//   })
// })

function dragElement(e) {
  this.classList.add('dragging');
  dragged = this;
}

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', dragElement);  
  draggable.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging')
  });  
})

squares.forEach(square => {
  square.addEventListener('dragenter', (e) => {
    square.classList.add('hover');
  })
  square.addEventListener('dragover', (e) => {
    e.preventDefault(); // this is critical
  })
  square.addEventListener('dragleave', (e) => {
    square.classList.remove('hover');
  })
  square.addEventListener('drop', (e) => {
    square.classList.remove('hover');
    square.appendChild(dragged);
  })
})