'use strict';

function fullPageMenu () {
    var toggle = $('.js-fullpage-menu-toggle');

    toggle.click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('fullpage-menu-is-open');
    });
}

$(function () {
    fullPageMenu ();
});