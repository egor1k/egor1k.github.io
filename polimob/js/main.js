"use strict";

var slidePanel = {
    selector: $('.slide-panel'),
    activeClassName: 'is-open',
    open: function () {
        this.selector.addClass(this.activeClassName);
    },
    close: function () {
        this.selector.removeClass(this.activeClassName);
    }
}

$(function () {
    $('.slide-panel').bind('mouseenter touchstart', function(e) {
        var current = $(window).scrollTop();
        $(window).scroll(function(event) {
            $(window).scrollTop(current);
        });
    });
    $('.slide-panel').bind('mouseleave touchend', function(e) {
        $(window).off('scroll');
    });
});
