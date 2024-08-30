// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { addSwitcherBurger } from './nav-switcher.js';
import { initHeroSwiper, initToursSwiper, initTrainingSwiper, initReviewsSwiper } from './swipers.js';

addSwitcherBurger();
initHeroSwiper();
initToursSwiper();
initTrainingSwiper();
initReviewsSwiper();
