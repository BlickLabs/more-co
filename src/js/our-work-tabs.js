var myLazyLoad = new LazyLoad({threshold:0});

/*global $*/

// a temp value to cache *what* we're about to show
var target = null;

// collect all the tabs
var tabs = $('.ourwork-tab-link').on('click', function () {
  console.log('click')
  target = $(this.hash).removeAttr('id');
  if (location.hash === this.hash) {
    setTimeout(update);
  }
  myLazyLoad.update();
}).attr('tabindex', '0');

// get an array of the panel ids (from the anchor hash)
var targets = tabs.map(function () {
  return this.hash;
}).get();

// use those ids to get a jQuery collection of panels
var panels = $(targets.join(',')).each(function () {
  // keep a copy of what the original el.id was
  $(this).data('old-id', this.id);
});

function update() {
  console.log('update')
  if (target) {
    target.attr('id', target.data('old-id'));
    target = null;
  }
  
  var hash = window.location.hash;
  if (targets.indexOf(hash) !== -1) {
    return show(hash);
  }
  
  // NOTE: this was added after the article was written
  // to fix going "back" on the browser nav to an empty state
  if (!hash) {
    show();
  }
  myLazyLoad.update();
}

function show(id) {
  // if no value was given, let's take the first panel
  if (!id) {
    id = targets[0];
  }
  // remove the selected class from the tabs,
  // and add it back to the one the user selected
  tabs.removeClass('selected').attr('aria-selected', 'false').filter(function () {
    return (this.hash === id);
  }).addClass('selected').attr('aria-selected', 'true');

  // now hide all the panels, then filter to
  // the one we're interested in, and show it
  panels.hide().attr('aria-hidden', 'true').filter(id).show().attr('aria-hidden', 'false');
  myLazyLoad.update();
}

window.addEventListener('hashchange', update);

// initialise
if (targets.indexOf(window.location.hash) !== -1) {
  update();
} else {
  show();
}

// function portfolioSwitchTab(portfolioTabID, portfolioTabContent) {

//   // first of all we get all tab content blocks (I think the best way to get them by class names)
//   var x = document.getElementsByClassName("ourwork-tab-content");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = 'none'; // hide all tab content
//   }
//   document.getElementById(portfolioTabContent).style.display = 'flex'; // display the content of the tab we need

//   // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
//   var x = document.getElementsByClassName("ourwork-tab-link");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].className = 'ourwork-tab-link';
//   }
//   document.getElementById(portfolioTabID).className = 'ourwork-tab-link active';

//   myLazyLoad.update();
// }

$(function () {
  $(".moreAll").slice(20).hide();
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
  $(".moreOnlineStore").slice(20).hide();
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
  $(".moreWebPages").slice(20).hide();
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
  else if($(window).scrollTop() >= 110) {
    $('.ourwork-tab-container').addClass('fixed-tab');
  }
  else {
    $('.ourwork-tab-container').removeClass('fixed-tab');
  }
});
