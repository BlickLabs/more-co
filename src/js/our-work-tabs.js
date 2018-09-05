var myLazyLoad = new LazyLoad({threshold:0});

function portfolioSwitchTab(portfolioTabID, portfolioTabContent) {

  // first of all we get all tab content blocks (I think the best way to get them by class names)
  var x = document.getElementsByClassName("ourwork-tab-content");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'; // hide all tab content
  }
  document.getElementById(portfolioTabContent).style.display = 'flex'; // display the content of the tab we need

  // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
  var x = document.getElementsByClassName("ourwork-tab-link");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].className = 'ourwork-tab-link';
  }
  document.getElementById(portfolioTabID).className = 'ourwork-tab-link active';

  myLazyLoad.update();
}

$(function () {
  $(".moreAll").slice(10).hide();
  if ($(".itemAll:hidden").length !== 0) {
    $("#load-all").show();
  }
  $("#load-all").on('click', function (e) {
    e.preventDefault();
    $(".moreAll:hidden").slice(0, 10).slideDown();
    if ($(".moreAll:hidden").length === 0) {
      $("#load-all").fadeOut('slow');
    }
    myLazyLoad.update()
  });
});

$(function () {
  $(".moreOnlineStore").slice(10).hide();
  if ($(".itemOnlineStore:hidden").length !== 0) {
    $("#load-online-store").show();
  }
  $("#load-online-store").on('click', function (e) {
    e.preventDefault();
    $(".moreOnlineStore:hidden").slice(0, 10).slideDown();
    if ($(".moreOnlineStore:hidden").length === 0) {
      $("#load-online-store").fadeOut('slow');
    }
    myLazyLoad.update()
  });
});

$(function () {
  $(".moreWebPages").slice(10).hide();
  if ($(".itemWebPages:hidden").length !== 0) {
    $("#load-web-pages").show();
  }
  $("#load-web-pages").on('click', function (e) {
    e.preventDefault();
    $(".moreWebPages:hidden").slice(0, 10).slideDown();
    if ($(".moreWebPages:hidden").length === 0) {
      $("#load-web-pages").fadeOut('slow');
    }
    myLazyLoad.update()
  });
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 160) {
    $('.ourwork-tab-container').addClass('fixed-tab');
  }
  else {
    $('.ourwork-tab-container').removeClass('fixed-tab');
  }
});
