// 공지 slide

var swiper1 = new Swiper(".second .mySwiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

// promotion slide

var swiper2 = new Swiper(".third .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".third .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".third .swiper-button-next",
    prevEl: ".third .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, // 사용자가 조작하면 자동 재생 정지
  },
});

// awards slide

var swiper3 = new Swiper(".eleventh .mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".eleventh .swiper-button-next",
    prevEl: ".eleventh .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

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
