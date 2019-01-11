"use strict";

$(function () {
    pushWindowNav();
    scrolling();
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        once: true,
        disable: 'mobile'
    });
});

function pushWindowNav() {
    var nav = $('.js-win-nav'),
        form = $('.js-win-form'),
        openWindowButton = $('.js-open-window'),
        closeWindowButton = $('.js-close-window'),
        openFormButton = $('.js-open-form'),
        closeFormButton = $('.js-close-form');

    $(openWindowButton).click(function (e) {
        e.preventDefault();
        nav.addClass('is-open');
    });

    $(closeWindowButton).click(function (e) {
        e.preventDefault();
        nav.removeClass('is-open');
    });

    $(openFormButton).click(function (e) {
        e.preventDefault();
        form.addClass('is-open');
    });

    $(closeFormButton).click(function (e) {
        e.preventDefault();
        form.removeClass('is-open');
    });

    $('body').on('click', function (e) {
        if (!$(e.target).is('.js-win-nav, .js-win-nav *, .js-win-form, .js-win-form *, .js-open-window, .js-open-window span, .js-open-form, .js-open-form span')) {
            nav.add(form).removeClass('is-open');
        }
    });
}

function scrolling() {
    $('body').niceScroll({
        zindex: 100,
        horizrailenabled: false,
    });
    $('.js-push-window').niceScroll({
        cursoropacitymax: 0
    });
}