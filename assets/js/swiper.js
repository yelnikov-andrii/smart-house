const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  spaceBetween: 200,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});