$(document).ready(function () {

    $('.main-slider__body').slick({
        prevArrow: $('.main-slider__prev'),
        nextArrow: $('.main-slider__next'),
        appendDots: $('.main-slider__dots'),
        dots: true,
        fade: true,
        swipe: false
    });

    $('.review-slider__body').slick({
        arrows: false,
        appendDots: $('.review-slider__dots'),
        dots: true,
        touchThreshold: 20
    });

});