const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 150,
  loopedSlides: 2,
  initialSlide: 1,
  speed: 1600,

  pagination: {
    el: '.swiper-pagination',
  },
});

const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');

nextButton.addEventListener('click', (e) => {
  nextButton.disabled = true;
  setTimeout(() => {
    swiper.slideNext();
    nextButton.disabled = false;
  }, 300);
});

prevButton.addEventListener('click', (e) => {
  prevButton.disabled = true;
  setTimeout(() => {
    swiper.slidePrev();
    prevButton.disabled = false;
  }, 300);
});