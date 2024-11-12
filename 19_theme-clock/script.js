const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const timeContainer = document.querySelector(".time");
const dateContainer = document.querySelector(".date");
const button = document.querySelector("button");

let colorMode = "light";

function getTime() {
  const time = new Date();
  
  return ({
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
    date: time.toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}),
    time: `${time.getHours() - 12}:${addLeadingZero(time.getMinutes(),10)} ${time.getHours() > 12 ? "PM" : "AM"}`  
  })
}

function addLeadingZero(num, size) {
  num = num.toString();
  if (num.length < size) num = "0" + num;
  return num;
}

function calculateHandAngle(hand) {
  const time = getTime()[hand];
  
  switch(hand) {
    case 'hour':
      return `${((time - 12) % 12) * 360/12}deg`;
    case 'minute':
      return `${(time % 60) * 360/60}deg`;
    case 'second':
      return `${(time % 60) * 360/60}deg`;
    default:
      console.error("Hand not specified correctly.")
  }
}

function updateClock() {
  hourHand.style.transform = `rotate(${calculateHandAngle("hour")})`;
  minuteHand.style.transform = `rotate(${calculateHandAngle("minute")})`;
  secondHand.style.transform = `rotate(${calculateHandAngle("second")})`;
  timeContainer.innerText = getTime()["time"];
  dateContainer.innerText = getTime()["date"];
}

function toggleColorMode() {
  if (colorMode === "light") {
    document.documentElement.style.setProperty("--light-clr", "0,0,0");
    document.documentElement.style.setProperty("--dark-clr", "255,255,255");
    button.innerText = "Light Mode";
    colorMode = "dark";
  }
  else {
    document.documentElement.style.setProperty("--light-clr", "255,255,255");
    document.documentElement.style.setProperty("--dark-clr", "0,0,0");
    button.innerText = "Dark Mode";
    colorMode = "light";
  }
}

button.addEventListener('click', toggleColorMode);
setInterval(updateClock, 1);
