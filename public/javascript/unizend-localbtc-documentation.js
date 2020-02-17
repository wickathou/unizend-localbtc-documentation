$(document).ready(function() {
    if ($(window).scrollTop() > 100) {
        if($(window).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    }
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $('#backToTop').on('click', function(e) {
        e.preventDefault();

        $('body, html').animate({scrollTop: 0}, 400);
        return false;
    });
});