$(function(){
	'use-strict';

	// slider-intro
	$('.slider-intro').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		outhight:true,
		autoplaySpeed: 2000,
		autoplay:true,
		dots: true, 
		arrows:false,
	  })
	  
	  // commet-slider
	  $('.commet-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  outhight:true,
		  autoplaySpeed: 2000,
		  autoplay:true,
		  dots: false, 
		  arrows:false,
		})


	AOS.init({
	 	once: true,
	 	duration: 1500,
	});
	
});