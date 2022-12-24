const glasses = document.querySelectorAll('.glass');
const water = document.querySelector('.water');
const fillLevel = document.querySelector('.fill-level');
const label = document.querySelector('.label');
const target = document.querySelector('.target');
const subtext = document.querySelector('.subtext');

function handleGlassClick() {
    const idx = [...glasses].indexOf(this);
    let waterLevel;
    if (idx === 0 && this.classList.contains('selected') && [...glasses].filter(glass=> glass.classList.contains('selected')).length === 1) {
        this.classList.remove('selected');
        waterLevel = 0;
    }
    else {
        glasses.forEach((glass, i) => {
            if (i <= idx) glass.classList.add('selected');
            else glass.classList.remove('selected');
        })
        waterLevel = (idx+1) * 250;
    }
    updateLevel(waterLevel);
    updateLabel(waterLevel);
}

function updateLevel(waterLevel) {
    const goal = 2000;
    const fraction = waterLevel / goal;
    water.style.height = `${fraction*100}%`;

    if (fraction) fillLevel.innerText = `${fraction*100}%`;
    else fillLevel.innerText = "";
}

function updateLabel(waterLevel) {
    const goal = 2000;
    const waterFraction = waterLevel / goal;
    const airFraction = 1 - waterFraction;
    const labelPos = airFraction / 2;

    label.style.top = `${labelPos * 100}%`;
    target.innerText = `${2 * (1-waterFraction)}L`

    if (labelPos < 0.05) label.style.opacity = 0;
    else if (labelPos < 0.1) {
        subtext.style.display = 'none';
        label.style.opacity = 1;
    }
    else {
        subtext.style.display = 'block';
        label.style.opacity = 1;
    }

}

glasses.forEach(glass => {
    glass.addEventListener('click', handleGlassClick);
})