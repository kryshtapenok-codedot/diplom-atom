var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.2,
  slideActiveClass:'active',
  breakpoints: {
  1800:{
    slidesPerView:6.8,
  },
  1600:{
  slidesPerView: 5,
    },
  1200:{
    slidesPerView:5,

  },
  800:{

    slidesPerView:4,
  },
  600:{

    slidesPerView:2.5,
  },
  440:{
    slidesPerView:2
  },
  330:{
    slidesPerView:1.3
  }
  
  },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop:true,
    loopFillGroupWithBlank:true,
    speed: 2000,
    centeredSlides:true,
    slideToClickedSlide:true
  });


  $(function() {
    $('.marquee').marquee({
      duration: 18000,
      startVisible: true,
      duplicated: true,
      delayBeforeStart:0,
      pauseOnHover:true,
    });
  });

$('.modal-close').click(function(){
  $('.modal-company').toggleClass('show');
  $('body').css('overflow','');
  $('.overlay').toggleClass('show');
});

$(document).ready(function(){
  $('.swiper-wrapper .active').click(function(){
    $('.modal-company').addClass('show');
    $('body').css('overflow','hidden');
    $('.overlay').addClass('show');
});

});
$('.overlay').click(function(){
  $('.modal-company').toggleClass('show');
  $('body').css('overflow','');
  $(this).toggleClass('show');
});