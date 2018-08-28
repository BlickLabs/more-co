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
  $(".moreBox").slice(10).hide();
  if ($(".blogBox:hidden").length !== 0) {
    $("#loadMore").show();
  }   
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".moreBox:hidden").slice(0, 10).slideDown();
    if ($(".moreBox:hidden").length === 0) {
      $("#loadMore").fadeOut('slow');
    }
    myLazyLoad.update()
  });
});

$(function () {
  $(".more-page-box").slice(10).hide();
  if ($(".page-box:hidden").length !== 0) {
    $("#load-page").show();
  }   
  $("#load-page").on('click', function (e) {
    e.preventDefault();
    $(".more-page-box:hidden").slice(0, 10).slideDown();
    if ($(".more-page-box:hidden").length === 0) {
      $("#load-page").fadeOut('slow');
    }
    myLazyLoad.update()
  });
});
