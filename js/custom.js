$(function(){
	'use-strict';

	// slider-intro
	$('.slider-intro').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		outhight:true,
		autoplaySpeed: 2000,
		autoplay:false,
		dots: true, 
		arrows:false,
	  })
	  
	  // commet-slider
	  $('.commet-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  outhight:true,
		  autoplaySpeed: 2000,
		  autoplay:false,
		  dots: false, 
		  arrows:false,
		})


	AOS.init({
	 	once: true,
	 	duration: 1500,
	});
	
});