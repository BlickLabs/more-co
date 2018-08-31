function startCarousel () {
  var ourWorkTabsCarousel = $('.ourwork-tab-carousel');

  ourWorkTabsCarousel.owlCarousel ({
    loop: false,
    nav: true,
    dots: false,
    navText: ['<img class="carousel-arrow" src="/img/icons/control-left.png" />', '<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],
    margin: 0,
    responsive:{
      0:{
        items: 1
      },
      421:{
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  ourWorkTabsCarousel.each(function(index) {
    $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='ourwork-tab-carousel-controls'></div>");
  });
}

function stopCarousel() {
  var owl = $('.ourwork-tab-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}

$(document).ready(function() {
  if ( $(window).width() < 805 ) {
    startCarousel();
  } else {
    $('.ourwork-tab-carousel').addClass('off');
  }
});

$(window).resize(function() {
  if ( $(window).width() < 805 ) {
    startCarousel();
  } else {
    stopCarousel();
  }
});
