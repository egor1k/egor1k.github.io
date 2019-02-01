"use strict";

var slidePanel = {
    selector: $('.slide-panel'),
    activeClassName: 'is-open',
    open: function () {
        this.selector.addClass(this.activeClassName);
        $('body').addClass('overflow');
    },
    close: function () {
        this.selector.removeClass(this.activeClassName);
        $('body').removeClass('overflow');
    }
}
