let currentIndex = 2;
const slides = document.querySelectorAll(".slide_box");
const totalSlides = slides.length;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("slide_active");
    slide.style.opacity = index === currentIndex ? "1" : "0.5";
  });

  const slider = document.querySelector(".promotion_slide");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  slides[currentIndex].classList.add("slide_active");
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  updateSlides();
}

function nextSlide() {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  updateSlides();
}

updateSlides(); // 초기화
