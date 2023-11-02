const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 150,
  loopedSlides: 2,
  initialSlide: 1,
  speed: 2600,

  pagination: {
    el: '.swiper-pagination',
  },
});

const thumbsSwiper = new Swiper('.thumbs-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 150,
  loopedSlides: 2,
  initialSlide: 1,
  speed: 2600,
  linkedSwiper: swiper,
});

swiper.controller.control = thumbsSwiper;
thumbsSwiper.controller.control = swiper;

const nextButton = document.querySelector('.slider__rightBlock');
const prevButton = document.querySelector('.slider__leftBlock');

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