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
        about__us__animationEnd = true;
      },
      slideChangeTransitionStart: function(){
        about__us__animationEnd = false;
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
        reviews__animationEnd = false;
      },

      slideChangeTransitionEnd:function(){
        reviews__animationEnd = true;
      
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

  
//крестик закрывающий модальное окно modal-company-2
$('.modal-company-2 .modal-close').click(function(){
  $('.modal-company-2').toggleClass('show');
  $('body').css('overflow','');
  $('.overlay').toggleClass('show');
});
//крестик закрывающий модальное окно modal-company
$('.modal-company .modal-close').click(function(){
  $('.modal-company').toggleClass('show');
  $('body').css('overflow','');
  $('.overlay').toggleClass('show');
});
// для контроля модальных окон, открытие после конца прокрутки
//верхний слайдер на странице index 
var about__us__animationEnd = true;
$('.about-us-slide').parent().click(function(){
  if ( about__us__animationEnd == true ){
    $('.modal-company-2').addClass('show');
    $('body').css('overflow','hidden');
    $('.overlay').addClass('show');
  }
});
//нижний слайдер на странице index
var reviews__animationEnd = true;
$('.review-slide').click(function(){
  if ( reviews__animationEnd == true ){
    $('.overlay').addClass('show');
    $('.modal-company').addClass('show');
    $('body').css('overflow','hidden');
  }
});

// блок overlay который делает opacity :0.75; из-за которого становится затемнение
$('.overlay').click(function(){
  if($('.modal-company').hasClass('show')){
    $('.modal-company').toggleClass('show');
  }

  if ($('.modal-company-2').hasClass('show')){
     $('.modal-company-2').toggleClass('show');
  }

  if ($('.modal-user').hasClass('show')){
     $('.modal-user').removeClass('show');
  }
  $('body').css('overflow','');
  $(this).toggleClass('show');
});
//функции закрывания в странице index
$('.header-mobile-nav').click(function(){
$('.modal-nav').toggleClass('show');
$('.overlay').toggleClass('show');
});
$('.modal-nav .modal-close').click(function(){
  $('.overlay').toggleClass('show');
  $('.modal-nav').toggleClass('show');
});


//страница team

$('.team-page-item').click(function(){
  let name = $(this).data('name');
  if (name == undefined){
    name = "andrew_dudum";
    $("."+name).toggleClass('show')
    $('.overlay').toggleClass('show');
    $('body').css('overflow','hidden');
  }
  else{
    $("."+name).toggleClass('show')
    $('.overlay').toggleClass('show');
    $('body').css('overflow','hidden');
  }
  
});
// страница team закрывающий крестик 
$('.modal-user .modal-close').click(function(){
  $('.overlay').toggleClass('show');
  $('.modal-user').removeClass('show');
  $('body').css('overflow','');
});
