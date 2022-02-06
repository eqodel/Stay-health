$('.welcome__video').parent().click(function () {

    if($(this).children(".welcome__video").get(0).paused){       
   $(this).children(".welcome__video").get(0).play();   
  $(this).children(".welcome__playpause").fadeOut();
  
      }else{      
   $(this).children(".welcome__video").get(0).pause();
  
    $(this).children(".welcome__playpause").fadeIn();
  
      }
  
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper_button__next',
      prevEl: '.swiper_button__prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },

      481: {
        slidesPerView: 3
      }
    }
  });


  var menuButton = $('.menu__button');
  menuButton.on('click', function () {
    console.log('click');
    $('.nav').toggleClass('nav--visible');
  });
