var swiper = new Swiper(".myVisual", {
  loop:true,
  effect: "fade",
  speed:2000,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 4500,
    default:  false,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper('.mySection', {
  autoplay:true,
  autoplaySpeed:3000,
  slidesPerView: 2,
  spaceBetween: 60,
  scrollbar : {
		el : '.swiper-scrollbar',
		draggable: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  },
});

