import '../scss/style.scss';

const overlay = document.querySelector(".l-head__overlay");

const menuBtn = document.querySelector(".l-head__menu .l-head__menu__btn");
menuBtn.addEventListener("click", () => {
    overlay.classList.add("show");
    document.body.classList.add("stopScroll");
})
const closeBtn = document.querySelector(".l-head__overlay .l-wrap-inner .close");
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    document.body.classList.remove("stopScroll");
})