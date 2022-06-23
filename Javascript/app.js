const swiper = new Swiper(".swiper", {
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 4,
      centeredSlides: true,
    },
  },
});
