$(document).ready(function() {

	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
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

	$(".fancybox").fancybox();

});