$(document).ready(function () {
    var header = $('.header'),
        body = $('body');

    fixedHeader();

    $(window).resize(function () {
        fixedHeader();
    });

    function fixedHeader() {
        var headerHeight = header.innerHeight();
        body.css('padding-top', headerHeight);
    }

    $('.slider-partners').slick({
        swipe: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 12000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1229,
                settings: {
                    slidesToShow: 4,
                    speed: 10000
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    speed: 7500
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    speed: 5000
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    speed: 2500
                }
            }
        ]
    });
});