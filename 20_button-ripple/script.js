const btn = document.querySelector("button");

function createRipple(e) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.height = `${Math.max(this.clientWidth, this.clientHeight)}px`;
    ripple.style.width = `${Math.max(this.clientWidth, this.clientHeight)}px`;

    // set position to mouse pos
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    ripple.addEventListener('animationend', (e) => {
        ripple.remove();
    })

    this.appendChild(ripple);
}

btn.addEventListener('click', createRipple);
