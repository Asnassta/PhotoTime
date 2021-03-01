$(function() {
		/*Menu nav toggle*/
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})

	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

		$("html, body").animate ({
			scrollTop: blockOffset 
		}, 500);

	});

	/*Slider*/
	$('.slider').slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.arrow_left'),
		nextArrow: $('.arrow_right')
	})

		/*Slider_community*/
	$('.slider_community').slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.arrow_left--community_slider'),
		nextArrow: $('.arrow_right--community_slider')
	})

})