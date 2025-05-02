import Swiper from 'swiper/bundle';
//import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css/bundle';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
window.alert("hello");  
console.log("hello");
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  