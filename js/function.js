$(document).ready(function() {

	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID
    $('#main__menu a[href^="#"]').click( function(){ 
	    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

	// Stiky menu
    $(document).ready(function(){
        var HeaderTop = $('#header').offset().top;
        
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $('#header').addClass('stiky');
                } else {
                        $('#header').removeClass('stiky');
                }
        });
    });

});