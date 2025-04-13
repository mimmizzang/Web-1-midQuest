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

// 줄 배경쪽 gsap

gsap.utils.toArray(".float-img").forEach((el) => {
  gsap.to(el, {
    y: gsap.utils.random(10, 30),
    duration: gsap.utils.random(1.5, 3),
    repeat: -1, // 무한 반복
    yoyo: true, // 갔다가 되돌아옴
    delay: gsap.utils.random(0, 1.5),
  });
});

// 왼쪽, 오른쪽 이미지들이 중앙으로 오면서 흐릿 -> 선명해지는 gsap
// 스크롤 해서 그 부분이 보이면 실행
// 같은거 반복이니까 묶는방법 있으면 묶어보기

gsap.registerPlugin(ScrollTrigger);

gsap.from(".sixth .left-img", {
  scrollTrigger: {
    trigger: ".sixth",
    strat: "top 80%",
    toggleActions: "play none none reset",
  },
  x: -200,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

gsap.from(".sixth .right-img", {
  scrollTrigger: {
    trigger: ".sixth",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  x: 200,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

gsap.from(".seventh .left-img", {
  scrollTrigger: {
    trigger: ".seventh",
    strat: "top 80%",
    toggleActions: "play none none reset",
  },
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".seventh .right-img", {
  scrollTrigger: {
    trigger: ".seventh",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  x: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".eighth .left-img", {
  scrollTrigger: {
    trigger: ".eighth",
    strat: "top 80%",
    toggleActions: "play none none reset",
  },
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".tenth .left-img", {
  scrollTrigger: {
    trigger: ".tenth",
    strat: "top 80%",
    toggleActions: "play none none reset",
  },
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".tenth .right-img", {
  scrollTrigger: {
    trigger: ".tenth",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  x: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

// scroll

const scrollBadge = document.getElementById("badge_box");
const scrollTopBtn = document.getElementById("scroll_top");

ScrollTrigger.create({
  start: "top -500", // 스크롤 500px 이상일 때 작동
  onEnter: () => {
    // 아래로 스크롤해서 조건 충족될 때 실행
    gsap.to(scrollTopBtn, { duration: 0.5, x: 0 });
    gsap.to(scrollBadge, { duration: 0.5, opacity: 0, display: "none" });
  },
  onLeaveBack: () => {
    // 다시 위로 스크롤해서 조건 미충족일 때 실행
    gsap.to(scrollTopBtn, { duration: 0.5, x: 100 });
    gsap.to(scrollBadge, { duration: 0.5, opacity: 1, display: "block" });
  },
});

/*  window.onscroll = function() + class or gsap 이용 가능
    window.addEventListener("scroll", function()) + class or gsap 이용 가능
    확장성이나 여러 이벤트를 다룰 땐 addEventListener가 더 좋음
    그래서 실제로는 addEventListener 방식이 더 선호되긴 함
*/

// 누르면 맨 위로

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
