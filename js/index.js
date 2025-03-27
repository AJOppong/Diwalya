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

function goToContact(){
  window.location.href = "#footer";
}

function openTerms(event) {
  event.preventDefault(); // Prevents the default jump to #terms
  
  let termsContent = document.querySelector('#terms');

  if (termsContent.style.display === 'none' || termsContent.style.display === '') {
    termsContent.style.display = 'block'; 
    document.querySelector("#termsModal").style.display = "flex";
  } else {
    termsContent.style.display = 'none';
  }
}

function closeTerms() {
  let termsContent = document.querySelector('#terms');

  termsContent.style.display = 'none';
}

function openPrivacy(event){
  event.preventDefault(); 
  
  let privacyContent = document.querySelector('#privacy');

  if (privacyContent.style.display === 'none' || privacyContent.style.display === '') {
    privacyContent.style.display = 'block'; 
    document.querySelector("#privacyModal").style.display = "flex";
  } else {
    privacyContent.style.display = 'none';
  }
}

function closePrivacy() {
  let privacyContent = document.querySelector('#privacy');

  privacyContent.style.display = 'none';
}