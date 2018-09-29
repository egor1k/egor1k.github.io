$(window).on('load', function() {
    $("#preloader").delay(800).fadeOut('slow');
    $('#s1').addClass('animated fadeIn delay-1s slow');
    $('header').addClass('animated fadeInDown delay-1s');
    $('#s1 h1').addClass('animated fadeInLeft delay-1s');
    $('#s1 h2').addClass('animated fadeIn delay-2s');

    $('.section-title').addClass('wow fadeInUp slow').attr('data-wow-offset', '150');
    $('#s2 .console img').addClass('wow fadeInLeft').attr('data-wow-offset', '250');
    $('#s2 .console-body').addClass('wow fadeInRight').attr('data-wow-offset', '250');
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