let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

function openMenu() {

}

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})