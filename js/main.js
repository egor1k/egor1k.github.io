$(window).on('load', function() {
    $("#preloader").delay(800).fadeOut('slow');
    $('header').addClass('animated fadeInDown delay-1s');
    $('h1').addClass('animated fadeInLeft delay-1s');
    $('h2').addClass('animated fadeIn delay-2s');
    $('#s2 .console img').addClass('wow fadeInLeft');
    $('#s2 .console-body').addClass('wow fadeInRight');
    new WOW().init();
});

$(document).ready(function () {
    $(document).scroll(function () { 
        if ($(this).scrollTop() > 0) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });
});