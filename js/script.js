/*
Author       : Dreamguys
Template Name: Ventura - Bootstrap Admin Template
Version      : 1.0
*/

(function($) {
    "use strict";



	$(document).ready(function(){ 
		$(window).scroll(function(){ 
			if ($(this).scrollTop() > 100) { 
				$('#scroll').fadeIn(); 
			} else { 
				$('#scroll').fadeOut(); 
			} 
		}); 
		$('#scroll').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});
	jQuery(document).ready(function($) {
		$('.slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  arrows: true,
		  responsive: [{
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			 breakpoint: 400,
			 settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }]
	  });
  });
  
// home ourclients script
$(".home-our-clients .owl-carousel").owlCarousel({
	loop: true,
	margin: 2,
	responsiveClass: true,
	autoplay: true,
	smartSpeed: 1200,
	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	dots: false,
	navigation: true,
	responsive: {
		0: {
			items: 2,
			nav: true,
		},
		600: {
			items: 2,
			nav: true,
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
		},
	},
});




})(jQuery);

