$(document).ready(function() {

	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Home slider
	$('.main_slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// Top menu hover
	$('.navabr__link').on('mouseenter', function(event) {
		event.preventDefault();
		$('.navbar__drop').removeClass('open');
		$(this).parent().find('.navbar__drop').addClass('open');
	});
	$('.navbar').on('mouseleave', function(event) {
		event.preventDefault();
		$('.navbar__drop').removeClass('open');
	});

});