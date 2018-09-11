var homeServicesCarousel = $('.home-services-mobile-carousel');

homeServicesCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: false,
  navText: ['<img class="carousel-arrow" src="/img/icons/control-left.png" />', '<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],
  margin: 20,
  responsive:{
    0:{
      items:1,
      autoHeight: true
    },
    800:{
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

homeServicesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-services-mobile-carousel-controls'></div>");
});