const body = document.querySelector("body");
const button = document.querySelector("#hamburger");
const drawer = document.querySelector(".mobile-nav");

button.addEventListener("click", (e) => {
  e.preventDefault();
  drawer.classList.toggle("open");

  const isOpen = drawer.classList.contains("open");
  if (isOpen) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "☰";
  }

  e.stopPropagation();
});