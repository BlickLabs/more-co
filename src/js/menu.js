var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.nav');

//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/more-co/index.html' || window.location.pathname === '/more-co/' || window.location.pathname === '/more-co/en/index.html' || window.location.pathname === '/en/index.html' || window.location.pathname === 'en/index.html') {
    if (scroll_pos > 30) {
      siteNavbar.classList.add('nav-scroll');
      $('.nav-logo').attr('src', '/img/logos/logo-getmore-blanco.png');

    } else {
      siteNavbar.classList.remove('nav-scroll');
      $('.nav-logo').attr('src', '/img/logos/logo-getmore-negro.png');
    }
  }
}

doSomething();

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});

if (!(window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/more-co/index.html' || window.location.pathname === '/more-co/' || window.location.pathname === '/more-co/en/index.html' || window.location.pathname === '/en/index.html' || window.location.pathname === 'en/index.html')) {
  siteNavbar.classList.add('nav-scroll');
}

function showMenu() {
  document.querySelector('#menuContainer').style.width = '70%';
  document.querySelector('#hamburgerMenu').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
}

function hideMenu() {
  document.querySelector('#menuContainer').style.width = '0%';
  document.querySelector('#hamburgerMenu').style.display = 'inline';
  document.querySelector('body').style.overflow = 'auto';
}

window.addEventListener('click', function(e) {
  if (!e.target.dataset.hasOwnProperty('attribute')) {
    hideMenu();
  }
});

/*Events of touchstart to mobile version*/

var showHamburger = document.querySelector('#hamburgerMenu');

showHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  showMenu();
});

var hideHamburger = document.querySelector('#hideHamburger');

hideHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  hideMenu();
});

/* Events of click to desktop version*/

showHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});

hideHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  hideMenu();
});

function dropDown() {
    document.getElementById("navDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
