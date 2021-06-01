var swiper = new Swiper('.swiper1', {
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
    speed: 500,
    centeredSlides:true,
    slideToClickedSlide:true,

    on:{
      slideChangeTransitionEnd: function(){
        animationEnd = true;
      },
      slideChangeTransitionStart: function(){
        animationEnd = false;
      } 
    }
  });



  var swiper2 = new Swiper('.swiper2',{
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed:1000,
    on:{
      slideChangeTransitionStart: function(){
        $('.review-slider-counter>svg circle').removeAttr('style');
      },

      slideChangeTransitionEnd:function(){

      
        $('.review-slider-counter>svg circle').css({'animation':'circle 4.75s linear alternate forwards'});
      }
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev',
    }
    
  });

  $('.review-slider-counter-next').click(function(){

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

  

$('.modal-company .modal-close').click(function(){
  $('.modal-company').toggleClass('show');
  $('body').css('overflow','');
  $('.overlay').toggleClass('show');
});
var animationEnd = true;
$('.about-us-slide').parent().click(function(){
  if ( animationEnd == true ){
    $('.modal-company').addClass('show');
    $('body').css('overflow','hidden');
    $('.overlay').addClass('show');
  }
});


$('.overlay').click(function(){
  $('.modal-company').toggleClass('show');
  $('body').css('overflow','');
  $(this).toggleClass('show');
});

$('.header-mobile-nav').click(function(){
$('.modal-nav').toggleClass('show');
$('.overlay').toggleClass('show');
});
$('.modal-nav .modal-close').click(function(){
  $('.overlay').toggleClass('show');
  $('.modal-nav').toggleClass('show');
});