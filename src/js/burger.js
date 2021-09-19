let menuBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

function openMenu() {}

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  menu.classList.contains("active")
    ? (menu.style.display = "block")
    : (menu.style.display = "none");
});
