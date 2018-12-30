jQuery(document).on('ready', function ($) {
"use strict";

/*----------------------------
    LOADING
------------------------------*/
$(window).on("load", function () {
    $('.loader').fadeOut(200);

   /*WoW js Active
    =================*/
    new WOW().init({
        mobile: false,
  });
});

/*----------------------------
    SCROLL TO TOP
------------------------------*/
$('.scrolltotop').each(function(){
$(this).on('click', function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
});
});

/*----------------------------
    SLIDER OWL CAROUSEL
------------------------------*/
if($(".banner").length > 0){
      $(".owl-carousel").owlCarousel({
        loop:true,
        center: true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        mouseDrag: false,
        responsiveRefreshRate: 0,
        autoplayTimeout:5000,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      });
    }

/*----------------------------
    FIXED SCROLL
------------------------------*/
jQuery(function() {
    var header = jQuery("header");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 0.0001) {
             header.removeClass('clearnavbar').addClass("fixed");
        } else {
             header.removeClass("fixed").addClass('clearnavbar');
        }
    });
});

jQuery(function() {
    var topheader = jQuery("#home");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 0.0001) {
            topheader.addClass("topfixed");
        } else {
            topheader.removeClass("topfixed");
        }
    });
});

}(jQuery));
