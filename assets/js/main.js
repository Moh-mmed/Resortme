/*===============      NAVBAR     ================ */
const navbar = document.querySelector(".header")


window.onscroll = () => {
(window.scrollY>10)?navbar.style.backgroundColor="#ffffff5e":navbar.style.backgroundColor = "transparent"}


/*===============      mySwiper     ================ */

// window.onload = () => {
//     let slidesNumber = 3;
//     let screenWidth = window.innerWidth;
//     if (screenWidth < 1290 && screenWidth >= 900) slidesNumber = 2;
//     else if (screenWidth < 900) slidesNumber = 1;
//     let swiper = new Swiper(".swiper", {
//       slidesPerView: slidesNumber,
//       spaceBetween: 30,
//       freeMode: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
// }
// window.onresize = () => {
//     let screenWidth = window.innerWidth;
//     if (screenWidth >= 1290) {
//         swiper = new Swiper(".swiper", {
//           slidesPerView: 3,
//           spaceBetween: 30,
//           freeMode: true,
//           pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//           navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//         });
//     }
//     else if (screenWidth < 1290 && screenWidth >= 900) {
//        swiper = new Swiper(".swiper", {
//          slidesPerView: 2,
//          spaceBetween: 30,
//            freeMode: true,
//          loop
//          pagination: {
//            el: ".swiper-pagination",
//            clickable: true,
//          },
//          navigation: {
//            nextEl: ".swiper-button-next",
//            prevEl: ".swiper-button-prev",
//          },
//        });
//     }
//     else if (screenWidth < 900) {
//       swiper = new Swiper(".swiper", {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         freeMode: true,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }
// }

 let swiper = new Swiper(".swiper", {
   slidesPerView: 1,
   spaceBetween: 45,
   breakpoints: {
         // when window width is >= 320px
         800: {
             slidesPerView: 2,
             spaceBetween: 30
         },
         // when window width is >= 480px
         1100: {
             slidesPerView: 3,
             spaceBetween: 30
         }
     },
   freeMode: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });