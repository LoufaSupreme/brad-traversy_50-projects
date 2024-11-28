const replaceContentElements = document.querySelectorAll(".replace");

replaceContentElements.forEach(el => {
  const origHTML = el.innerHTML;
  el.innerHTML = "&nbsp;"

  setTimeout(() => {
    el.innerHTML = origHTML;
    el.style.backgroundImage = "none";
  }, 2000);
})