function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/more-co/index.html"!==window.location.pathname&&"/more-co/"!==window.location.pathname&&"/more-co/es/index.html"!==window.location.pathname&&"/more-co/en/index.html"!==window.location.pathname&&"/es/index.html"!==window.location.pathname&&"/en/index.html"!==window.location.pathname&&"es/index.html"!==window.location.pathname&&"en/index.html"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-scroll"),$(".nav-logo").attr("src","/img/logos/logo-getmore-blanco.png")):(siteNavbar.classList.remove("nav-scroll"),$(".nav-logo").attr("src","/img/logos/logo-getmore-negro.png")))}function showMenu(){document.querySelector("#menuContainer").style.width="54%",document.querySelector("#hamburgerMenu").style.display="none",document.querySelector("body").style.overflow="hidden"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline",document.querySelector("body").style.overflow="auto"}function startCarousel(){var e=$(".ourwork-tab-carousel");e.owlCarousel({loop:!1,nav:!0,dots:!1,navText:['<img class="carousel-arrow" src="/img/icons/control-left.png" />','<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],margin:0,responsive:{0:{items:2,nav:!1,autoWidth:!0},421:{items:2,nav:!1},1e3:{items:2}}}),e.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='ourwork-tab-carousel-controls'></div>")})}function stopCarousel(){var e=$(".ourwork-tab-carousel");e.trigger("destroy.owl.carousel"),e.addClass("off")}function portfolioSwitchTab(e,o){var n,t=document.getElementsByClassName("ourwork-tab-content");for(n=0;n<t.length;n++)t[n].style.display="none";document.getElementById(o).style.display="flex";var n,t=document.getElementsByClassName("ourwork-tab-link");for(n=0;n<t.length;n++)t[n].className="ourwork-tab-link";document.getElementById(e).className="ourwork-tab-link active",myLazyLoad.update()}var homeServicesCarousel=$(".home-services-mobile-carousel");homeServicesCarousel.owlCarousel({loop:!1,nav:!0,dots:!1,navText:['<img class="carousel-arrow" src="/img/icons/control-left.png" />','<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],margin:20,responsive:{0:{items:1,autoHeight:!0},800:{items:1},1e3:{items:1}}}),homeServicesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-services-mobile-carousel-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/more-co/index.html"!==window.location.pathname&&"/more-co/"!==window.location.pathname&&"/more-co/es/index.html"!==window.location.pathname&&"/more-co/en/index.html"!==window.location.pathname&&"/es/index.html"!==window.location.pathname&&"/en/index.html"!==window.location.pathname&&"es/index.html"!==window.location.pathname&&"en/index.html"!==window.location.pathname&&siteNavbar.classList.add("nav-scroll"),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),$(document).ready(function(){$(window).width()<805?startCarousel():$(".ourwork-tab-carousel").addClass("off")}),$(window).resize(function(){$(window).width()<805?startCarousel():stopCarousel()});var myLazyLoad=new LazyLoad({threshold:0});$(function(){$(".moreAll").slice(10).hide(),0!==$(".itemAll:hidden").length&&$("#load-all").show(),$("#load-all").on("click",function(e){e.preventDefault(),$(".moreAll:hidden").slice(0,10).slideDown(),0===$(".moreAll:hidden").length&&$("#load-all").fadeOut("slow"),myLazyLoad.update()})}),$(function(){$(".moreOnlineStore").slice(10).hide(),0!==$(".itemOnlineStore:hidden").length&&$("#load-online-store").show(),$("#load-online-store").on("click",function(e){e.preventDefault(),$(".moreOnlineStore:hidden").slice(0,10).slideDown(),0===$(".moreOnlineStore:hidden").length&&$("#load-online-store").fadeOut("slow"),myLazyLoad.update()})}),$(function(){$(".moreWebPages").slice(10).hide(),0!==$(".itemWebPages:hidden").length&&$("#load-web-pages").show(),$("#load-web-pages").on("click",function(e){e.preventDefault(),$(".moreWebPages:hidden").slice(0,10).slideDown(),0===$(".moreWebPages:hidden").length&&$("#load-web-pages").fadeOut("slow"),myLazyLoad.update()})}),$(window).scroll(function(){$(window).scrollTop()>=160?$(".ourwork-tab-container").addClass("fixed-tab"):$(".ourwork-tab-container").removeClass("fixed-tab")});