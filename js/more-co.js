function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-name/index.html"!==window.location.pathname&&"/project-name/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("nav-scroll"),$(".nav-logo").attr("src","/img/logos/logo-moreco-white.png")):(siteNavbar.classList.remove("nav-scroll"),$(".nav-logo").attr("src","/img/logos/logo-moreco-black.png")))}function showMenu(){document.querySelector("#menuContainer").style.width="100%",document.querySelector("#hamburgerMenu").style.display="none",document.querySelector("body").style.overflow="hidden"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline",document.querySelector("body").style.overflow="auto"}function startCarousel(){var e=$(".ourwork-tab-carousel");e.owlCarousel({loop:!1,nav:!0,dots:!1,navText:['<img class="carousel-arrow" src="/img/icons/control-left.png" />','<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],margin:0,responsive:{0:{items:1},421:{items:2},1e3:{items:2}}}),e.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='ourwork-tab-carousel-controls'></div>")})}function stopCarousel(){var e=$(".ourwork-tab-carousel");e.trigger("destroy.owl.carousel"),e.addClass("off")}function portfolioSwitchTab(e,o){var t,n=document.getElementsByClassName("ourwork-tab-content");for(t=0;t<n.length;t++)n[t].style.display="none";document.getElementById(o).style.display="flex";var t,n=document.getElementsByClassName("ourwork-tab-link");for(t=0;t<n.length;t++)n[t].className="ourwork-tab-link";document.getElementById(e).className="ourwork-tab-link active",myLazyLoad.update()}$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(e){var o=$('form[name="contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="contact-form"]')[0].reset())})},invalidHandler:function(e,o){var t=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+t+" errores.")}});var homeServicesCarousel=$(".home-services-mobile-carousel");homeServicesCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="carousel-arrow" src="/img/icons/control-left.png" />','<img class="carousel-arrow" src="/img/icons/control-right.svg" />'],margin:20,responsive:{0:{items:1},800:{items:1},1e3:{items:1}}}),homeServicesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-services-mobile-carousel-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),$(function(){"/es/templatea.html"!==window.location.pathname&&"es/templatea.html"!==window.location.pathname&&"/es/portafolio/templateb.html"!==window.location.pathname&&"es/portafolio/templateb.html"!==window.location.pathname||($("nav").remove(".nav"),$("footer").remove(".footer"))}),$(document).ready(function(){$(window).width()<805?startCarousel():$(".ourwork-tab-carousel").addClass("off")}),$(window).resize(function(){$(window).width()<805?startCarousel():stopCarousel()});var myLazyLoad=new LazyLoad({threshold:0});$(function(){$(".moreAll").slice(10).hide(),0!==$(".itemAll:hidden").length&&$("#load-all").show(),$("#load-all").on("click",function(e){e.preventDefault(),$(".moreAll:hidden").slice(0,10).slideDown(),0===$(".moreAll:hidden").length&&$("#load-all").fadeOut("slow"),myLazyLoad.update()})}),$(function(){$(".moreOnlineStore").slice(10).hide(),0!==$(".itemOnlineStore:hidden").length&&$("#load-online-store").show(),$("#load-online-store").on("click",function(e){e.preventDefault(),$(".moreOnlineStore:hidden").slice(0,10).slideDown(),0===$(".moreOnlineStore:hidden").length&&$("#load-online-store").fadeOut("slow"),myLazyLoad.update()})}),$(function(){$(".moreWebPages").slice(10).hide(),0!==$(".itemWebPages:hidden").length&&$("#load-web-pages").show(),$("#load-web-pages").on("click",function(e){e.preventDefault(),$(".moreWebPages:hidden").slice(0,10).slideDown(),0===$(".moreWebPages:hidden").length&&$("#load-web-pages").fadeOut("slow"),myLazyLoad.update()})});