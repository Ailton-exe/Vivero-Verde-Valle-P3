const slides = document.querySelectorAll(".carousel-slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentSlide = 0;

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });
    const offset = -currentSlide * 100;
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

updateCarousel();
