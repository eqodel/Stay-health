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
    $('.nav').toggleClass('nav--visible');
  });

  var modalButton = $('.button');
  var closeModalButton = $('.modal__close');
  modalButton.on("click", openModal);
  closeModalButton.on('click', closeModal);
    
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };

  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };