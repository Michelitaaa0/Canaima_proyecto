/* ===========================
   SLIDESHOW AUTOMÁTICO
=========================== */

let slideIndex = 1;
let autoSlide;
let arrDots;

function initSlideShow() {
    arrDots = document.querySelectorAll(".dot");
    showSlide(slideIndex);
    startAutoSlide();

    // Eventos en los puntos
    arrDots.forEach((dot, k) => {
        dot.addEventListener("click", function () {
            stopAutoSlide();
            currentDotSlide(k);
            startAutoSlide();
        });
    });

    // Flechas
    document.querySelector(".next").addEventListener("click", function(){
        stopAutoSlide();
        nextPrevSlide(1);
        startAutoSlide();
    });

    document.querySelector(".prev").addEventListener("click", function(){
        stopAutoSlide();
        nextPrevSlide(-1);
        startAutoSlide();
    });
}

document.addEventListener("DOMContentLoaded", initSlideShow);


function nextPrevSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentDotSlide(n) {
    slideIndex = n + 1;
    showSlide(slideIndex);
}

function showSlide(n) {
    let slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    arrDots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    arrDots[slideIndex - 1].classList.add("active");
}

function startAutoSlide() {
    autoSlide = setInterval(() => nextPrevSlide(1), 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}