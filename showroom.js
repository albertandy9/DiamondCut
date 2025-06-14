// carousel showroom background
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
preloadImage(1);
showSlides();
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('slide-left'); 
    preloadImage(slideIndex + 1);
    setTimeout(showSlides, 5000); 
}

function preloadImage(index) {
    if (index > slides.length) { return; }
    let nextImage = new Image();
    nextImage.src = slides[index - 1].querySelector('img').src;
}

// hambueger menu at 768 px
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});