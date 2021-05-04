// const body = document.body;
// const menu = document.querySelector(".menu");
// const menuBtn = document.querySelector(".menu-btn");
// const player = new Plyr('#player', {
//   fullscreen: {
//     iosNative: true,
//     container: null
//   },
// });


// menuBtn.addEventListener("click", function () {
//   menuBtn.classList.toggle("active");
//   menu.classList.toggle("active");
//   body.classList.toggle("active");
// });

// $(".menu__link").on("click", function () {
//   menuBtn.classList.remove("active");
//   menu.classList.remove("active");
//   body.classList.remove("active");
// });

// $(document).ready(function() {
//   setInterval('blockAnimate();', 4000);
// });

// // tabs unchecked
// const allRadios = document.getElementsByName("tabs2");
// var radioChecked;
// for (let i = 0; i < allRadios.length; i++) {
//   allRadios[i].onclick = function () {
//     if (radioChecked == this) {
//       this.checked = false;
//       radioChecked = null;
//     } else {
//       radioChecked = this;
//     }
//   };
// }

// function toggleHeader() {
//   var scroll_status = $(document).scrollTop();
//   if (scroll_status > 300) $(".header__fixing").addClass("header__fixed");
//   else $(".header__fixing").removeClass("header__fixed");
// }
// toggleHeader();
// $(document).scroll(function () {
//   toggleHeader();
// });

// //swiper

// $(document).ready(function(){
//   $('.reviews__slider .swiper-wrapper').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     touchThreshold: 15,
//     speed: 150,
//     responsive: [
//       {
//         breakpoint: 762,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 486,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
//   $('.swiper-gallery .swiper-wrapper').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//   });
//   $('.swiper-mobile .swiper-wrapper').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     adaptiveHeight: true,
//     centerMode: true,
//     variableWidth: true,
//     speed: 150,
//     responsive: [
//       {
//         breakpoint: 486,
//         settings: {
//           centerMode: false,
//           variableWidth: false,
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });

// $("a.menu__link")
//   .add("a.page__link")
//   .on("click", function (event) {
//     event.preventDefault();
//     var id = $(this).attr("href"),
//       top = $(id).offset().top;
//       if (id === '#contact') {
//         top -= 150;
//       }
//     $("body,html").animate({ scrollTop: top }, 1500, "linear");
//   });

//   $('.gallery').on('selectstart', function (event) {
//     event.preventDefault();
//   })

// const swiperGallery = new Swiper(".swiper-gallery", {
//   slidesPerView: 1,
//   slidesPerColumn: 1,
//   spaceBetween: 0,
//   slidesOffsetBefore: 0,
//   loop: true,
//   freeMode: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".gallery-button-next",
//     prevEl: ".gallery-button-prev",
//   },
// });
// const swiperMobile = new Swiper(".swiper-mobile", {
//   slidesPerView: "auto",
//   spaceBetween: 1,
//   autoHeight: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".gallery-button-next",
//     prevEl: ".gallery-button-prev",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       freeMode: false,
//     },
//     510: {
//       slidesPerView: 2,
//       freeMode: false,
//     },
//   },
// });
