"use strict";


/* Все слайдеры
 * ------------------------------------------------------ */
var clSliders = function () {

    $('.slider-main').slick({
        arrows: false,
        dots: true,
        infinite: false,
        touchThreshold: 50,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000
    });

    $('.slider-years').slick({
        variableWidth: true,
        arrows: true,
        dots: false,
        infinite: false,
        touchThreshold: 50,
        slidesToScroll: 1,
        asNavFor: '.slider-archive',
        focusOnSelect: true,
        speed: 150,
        accessibility: false,
        infinite: true,
        swipe: false
    });

    $('.slider-archive').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-years',
        swipe: false,
        accessibility: false,
        speed: 150
    });

    $('.slider-matreshka').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        touchThreshold: 500
    })

};


/* Обрезка текста
 * ------------------------------------------------------ */
var clShave = function () {

    function doShave(selector, height) {
        var el = $(selector),
            text = el.text();

        $(selector).shave(height);
        let timer = null;
        $(window).on('resize', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                el = text;
                $(selector).shave(height);
            }, 1000);
        });
    }

    doShave('.article__name', 63);
    doShave('.slider-main__name', 256);
}


/* Back to Top
 * ------------------------------------------------------ */
var clBackToTop = function () {

    var pxShow = 500, // height on which the button will show
        fadeInTime = 400, // how slow/fast you want the button to show
        fadeOutTime = 400, // how slow/fast you want the button to hide
        goTopButton = $(".go-top")

    // Show or hide the sticky footer button
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= pxShow) {
            goTopButton.fadeIn(fadeInTime);
        } else {
            goTopButton.fadeOut(fadeOutTime);
        }
    });
};


/* Smooth Scrolling
 * ------------------------------------------------------ */
var clSmoothScroll = function () {

    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
            $target = $(target);

        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing').promise().done(function () {

            // check if menu is open
            // if ($('body').hasClass('menu-is-open')) {
            //     $('.header-menu-toggle').trigger('click');
            // }

            window.location.hash = target;
        });
    });

};


$(document).ready(function () {
    clBackToTop();
    clSmoothScroll();
    clSliders();
    clShave();
});