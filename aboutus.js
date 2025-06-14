// hambueger menu at 768 px
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});