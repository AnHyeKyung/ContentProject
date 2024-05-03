const swiper = new Swiper(".slide-visual", {
  navigation: {
    nextEl: ".slide-visual__next",
    prevEl: ".slide-visual__prev",
  },
  loop: true,
});

const swiper2 = new Swiper(".slide-main", {
  pagination: {
    el: ".slide-main__paging",
  },
});

const swiper3 = new Swiper(".slide-kukmin", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".slide-kukmin__next",
    prevEl: ".slide-kukmin__prev",
  },
  loop: true,
});
