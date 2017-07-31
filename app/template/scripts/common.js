$(document).ready(function($) {

	/* Slider */
	$('.slider__list').slick({
		// Arrows
		appendArrows: $('.slider__arrows .container'),
		prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-arrow-right rotate180"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon icon-arrow-right"></i></button>',
		// Dots
		dots: true,
		appendDots: $('.slider__dots .container')
	});

	/* Mask for phones */ 
	$('.input_phone input').mask('+7 (999) 999-99-99');
	
});