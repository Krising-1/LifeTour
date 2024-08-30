// import Swiper from 'swiper/bundle';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const initHeroSwiper = () => {
  new Swiper('.swiper--hero', {

    modules: [Navigation, Pagination],

    loop: true,
    speed: 500,
    spaceBetween: 0,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    }
  });
};

const initToursSwiper = () => {
  new Swiper('.swiper--tours', {

    modules: [Navigation, Pagination],

    width: 290,
    speed: 500,
    spaceBetween: 18,

    navigation: {
      nextEl: '.swiper-button-next--tours',
      prevEl: '.swiper-button-prev--tours',
    },

    breakpoints: {
      768: {
        width: 678,
        slidesPerView: 2,
      },

      1440: {
        width: 1200,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    }
  });
};

const initTrainingSwiper = () => {
  new Swiper('.swiper--training', {

    modules: [Navigation, Pagination],

    width: 290,
    speed: 500,
    spaceBetween: 16,
    initialSlide: 2,

    navigation: {
      nextEl: '.swiper-button-next--training',
      prevEl: '.swiper-button-prev--training',
    },

    breakpoints: {
      768: {
        width: 678,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },

      1440: {
        width: 1200,
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerGroup: 1,
        initialSlide: 0,
        allowTouchMove: false,
      },
    }
  });
};

const initReviewsSwiper = () => {
  new Swiper('.swiper--reviews', {

    modules: [Navigation, Pagination],

    width: 290,
    speed: 500,
    spaceBetween: 16,

    navigation: {
      nextEl: '.swiper-button-next--reviews',
      prevEl: '.swiper-button-prev--reviews',
    },

    breakpoints: {
      768: {
        width: 678,
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1440: {
        width: 1200,
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    }
  });
};

export { initHeroSwiper, initToursSwiper, initTrainingSwiper, initReviewsSwiper };
