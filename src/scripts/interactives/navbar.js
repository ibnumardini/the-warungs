const body = document.querySelector("body");
const button = document.querySelector("#hamburger");
const drawer = document.querySelector(".mobile-nav");

button.addEventListener("click", (e) => {
  e.preventDefault();
  drawer.classList.toggle("open");
  e.stopPropagation();
});

body.addEventListener("click", (e) => {
  e.preventDefault();
  drawer.classList.remove("open");
  e.stopPropagation();
});
