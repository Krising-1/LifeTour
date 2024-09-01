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
        width: 1160,
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1440: {
        width: 1520,
        spaceBetween: 120,
        slidesPerView: 2,
        allowTouchMove: false,
      },
    }
  });
};

const initAdvantagesSwiper = () => {
  new Swiper('.swiper--advantages', {

    modules: [Navigation, Pagination],

    speed: 500,
    enabled: false,

    navigation: {
      nextEl: '.swiper-button-next--advantages',
      prevEl: '.swiper-button-prev--advantages',
    },

    breakpoints: {
      768: {
        width: 324,
      },

      1440: {
        enabled: 'true',
        width: 3660,
        loop: true,
        spaceBetween: 30,

        slidesPerView: 9,
        // loopAddBlankSlides: true,
        slidesPerGroup: 2,
        centeredSlides: true,

        allowTouchMove: false,
        initialSlide: 2,
      },
    }
  });
};

const initGallerySwiper = () => {
  new Swiper('.swiper--gallery', {

    modules: [Navigation, Pagination],

    width: 320,
    speed: 500,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 8,

    navigation: {
      nextEl: '.swiper-button-next--gallery',
      prevEl: '.swiper-button-prev--gallery',
    },

    breakpoints: {
      768: {
        spaceBetween: 5,
        width: 768,
        slidesPerView: 3,
      },

      1440: {
        enabled: false,
        loop: false,
        width: 1440,
        slidesPerView: 5,
        spaceBetween: 7,
      },
    }
  });
};

export { initHeroSwiper, initToursSwiper, initTrainingSwiper, initReviewsSwiper, initAdvantagesSwiper, initGallerySwiper };

