var servicesProjectsCarousel = $('.service-projects-img-carousel');

servicesProjectsCarousel.owlCarousel ({
  loop: false,
  nav: true,
  dots: true,
  navText: ['<img class="carousel-arrow" src="/img/icons/control-left.png" />', '<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],
  margin: 0,
  items: 1
});

servicesProjectsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='service-projects-img-carousel-controls'></div>");
});
