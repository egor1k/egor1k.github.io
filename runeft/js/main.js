"use strict";


/* Слайдер на главной
 * ------------------------------------------------------ */
var clSliders = function () {
    var sliderMain = new Swiper('.slider-main', {

        pagination: {
            el: '.swiper-pagination',
        }
    });
    $('.slider-main__name').shave(256);


    var sliderYears = new Swiper('.slider-years', {
        slidesPerView: 12,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var sliderArchive = new Swiper('.slider-archive', {
        spaceBetween: 60,
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

};


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
});