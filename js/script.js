/* Variables */

const nav = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const hamburgerIcon = document.querySelector(".hamburger img");

/* Opening menu, changing icon and adding overlay on hamburger click */

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  overlay.classList.toggle("show");
  hamburgerIcon.classList.toggle("change");
});
