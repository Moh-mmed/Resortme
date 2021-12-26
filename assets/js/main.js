/*===============      NAVBAR     ================ */
const navbar = document.querySelector(".header")
window.onscroll = () => {
window.scrollY > 10
  ? (navbar.style.backgroundColor = "#ffffffcc")
  : (navbar.style.backgroundColor = "transparent");}


/*===============      mySwiper_one     ================ */
 const swiper_one = new Swiper(".mySwiper_one", {
   slidesPerView: 1,
   spaceBetween: 45,
   breakpoints: {
         800: {
             slidesPerView: 2,
             spaceBetween: 30
         },
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

/*===============      mySwiper_one     ================ */
  const swiper_two = new Swiper(".mySwiper_two", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });