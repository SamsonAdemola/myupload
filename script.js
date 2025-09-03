// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Slider Logic
let slideIndex = 0;
const slides = document.querySelector(".slides");
const projects = document.querySelectorAll(".project");
const totalSlides = projects.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

// Show first slide initially
showSlide(slideIndex);