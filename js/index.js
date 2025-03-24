function Download(){
    window.open('https://play.google.com/store/apps/details?id=com.devspacesystems.diwalya&pli=1');
}

var swiper = new Swiper(".serviceSlider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });