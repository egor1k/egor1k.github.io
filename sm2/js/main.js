'use strict';

function mainNavbar() {
    var navbar = $('.main-navbar'),
        menu = $('.main-menu'),
        button = $('.main-navbar-toggle'),
        neededHeight = 50,
        navClass = "is-open";

    function checkHeight() {
        var menuHeight = menu.innerHeight();

        if (menuHeight > neededHeight) {
            button.show();
            navbar.addClass('is-overflow');
        } else {
            button.hide();
            navbar.removeClass('is-overflow');
        }

    }

    checkHeight();

    $(window).resize(function () {
        navbar.removeClass('is-overflow');
        setTimeout(checkHeight(), 50);
    });

    button.click(function () {
        if (navbar.hasClass(navClass)) {
            navbar.animate({
                height: neededHeight
            }, 400).removeClass(navClass);
        } else {
            navbar.animate({
                height: navbar.get(0).scrollHeight
            }, 400, function () {
                $(this).height('auto');
            }).addClass(navClass);
        }
    });
}

$(function () {
    mainNavbar();

});