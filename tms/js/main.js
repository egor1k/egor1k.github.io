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
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out',
        responsive: [{
                breakpoint: 1229,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});