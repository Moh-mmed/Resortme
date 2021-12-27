/*===============      HEADER     ================ */
const navbar = document.querySelector(".header")
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const scrollUp = document.querySelector(".scroll-arrow-up");
const scrollDown = document.querySelector(".scroll-arrow-down");

window.onscroll = () => {
  let scrollHeight = window.scrollY;
  scrollHeight > 10
    ? (navbar.style.backgroundColor = "#ffffffcc")
    : (navbar.style.backgroundColor = "transparent");
  
  scrollHeight >= 900 ? scrollUp.classList.add("show-scroll"): scrollUp.classList.remove("show-scroll");
}

scrollUp.addEventListener("click", () => window.scrollTo(0, 0));
scrollDown.addEventListener("click", () => window.scrollTo(0, 683));

/*===============      Navlist Toggle     ================ */
navToggle.addEventListener('click', () => {
  if (!navToggle.classList.contains('active')) {
    navToggle.classList.add('active')
    navMenu.classList.add("active");
  }
  else {
     navToggle.classList.remove("active");
     navMenu.classList.remove("active");
  }
})

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