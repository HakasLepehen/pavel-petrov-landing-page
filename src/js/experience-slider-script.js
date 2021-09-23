import Swiper from "swiper";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

let swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });