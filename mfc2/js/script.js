"use strict";

(function ssInit() {
    // clPreload();
    clHeader();
    clAnchors();
    clOverlay();
})();

function clHeader() {
    var body = $('body'),
        className = "header-is-smaller";

    $(document).scroll(function () {
        if ($(this).scrollTop() > 0) {
            body.addClass(className);
        } else {
            body.removeClass(className);
        }
    });
}

function clAnchors() {
    var header = $('.header'),
        window = $('.push-window');

    $('.js-anchor').on('click', function (e) {
        e.preventDefault();
        var headerHeight = header.innerHeight();

        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top - 64
        }, 800);

        window.removeClass('is-open');
        removeOverlay();
    });
}

function clPreload() {
    $("html").addClass('cl-preload');

    $(window).on('load', function () {
        // $('html, body').animate({
        //     scrollTop: 0
        // }, 'normal');

        $("#loader").fadeOut("slow", function () {
            $("#preloader").delay(300).fadeOut("slow");
        });

        $("html").removeClass('cl-preload');
        $("html").addClass('cl-loaded');

    });

}

function clOverlay() {
    var windows = $('.push-window');

    $('body').on('click', '.overlay', function (e) {
        e.preventDefault();
        windows.removeClass('is-open');
        removeOverlay();
    });
}

function toggleSubForm(id) {
    $('.push-window').removeClass('is-open');
    removeOverlay();
    var win = $('#w3');

    if (id == 0) {
        win.removeClass('is-open');
        toggleOverlay(win);
        return;
    }

    win.find('.sub-form').hide();

    var form = win.find('#sub-form-' + id);
    form.show();

    win.toggleClass('is-open');
    toggleOverlay(win);
}

function toggleShopWindow(id) {
    var win = $('#w2');

    if (id == 0) {
        win.removeClass('is-open');
        toggleOverlay(win);
        return;
    }

    win.find('.shop-item').hide();

    var item = win.find('#shop-item-' + id);
    item.show();

    var name = item.find('.push-window__title').text();
    win.find('input[name=item]').val(name);

    win.toggleClass('is-open');
    toggleOverlay(win);
}

function toggleNav() {
    var win = $('#w1');
    win.toggleClass('is-open');
    toggleOverlay(win);
}

function toggleOverlay(win) {
    if (win.hasClass('is-open')) {
        createOverlay();
    } else {
        removeOverlay();
    }
}

function createOverlay() {
    var docHeight = $(document).height();

    $('body').addClass('overflow');

    $("<div class='overlay'></div>")
        .appendTo("body")
        .height(docHeight)
        .css({
            'opacity': 0.4,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': 'black',
            'width': '100%',
            'z-index': 90
        });
}

function removeOverlay() {
    $('body').removeClass('overflow');
    $('.overlay').remove();
}