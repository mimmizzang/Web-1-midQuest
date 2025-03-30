// slide

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

// slide2

// gsap

// scroll

const scrollBadge = document.getElementById("badge_box");
const scrollTopBtn = document.getElementById("scroll_top");

window.onscroll = function () {
  const scrollY = document.documentElement.scrollTop;

  if (scrollY > 500) {
    scrollTopBtn.style.display = "inline-block";
    scrollBadge.classList.add("hidden");

    setTimeout(() => {
      if (scrollBadge.classList.contains("hidden")) {
        scrollBadge.style.display = "none";
      }
    }, 1000);
  } else {
    scrollTopBtn.style.display = "none";
    scrollBadge.classList.remove("hidden");
    scrollBadge.style.display = "block";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
