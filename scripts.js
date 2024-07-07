let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.carousel-indicators button');
let slideInterval;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function playSlides() {
    slideInterval = setInterval(nextSlide, 4000);
}

function pauseSlides() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    playSlides();
});

const testimonialSlides = document.querySelector('.testimonial-slides');
const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
let currentTestimonialIndex = 0;

function showTestimonialSlide(index) {
    testimonialSlides.style.transform = `translateX(-${index * 100 / 3}%)`;
    testimonialIndicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextTestimonialSlide() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialIndicators.length;
    showTestimonialSlide(currentTestimonialIndex);
}

setInterval(nextTestimonialSlide, 3000);

testimonialIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showTestimonialSlide(index);
        currentTestimonialIndex = index;
    });
});
