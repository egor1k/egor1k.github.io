"use strict";

(function ($) {

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

        $('body').on('click', '#overlay', function (e) {
            e.preventDefault();
            windows.removeClass('is-open');
            removeOverlay();
        });
    }

    (function ssInit() {
        // clPreload();
        clHeader();
        clAnchors();
        clOverlay();
    })();

})(jQuery);

function toggleWindow(num, that) {
    if (num == 1) {
        var window = $('#w1');
        window.toggleClass('is-open');
    } else if (num == 2) {
        var window = $('#w2'),
            itemName = that.closest('.shop-card').find('.shop-card__name').text(),
            title = $('#w2 .push-window__title');
        if (itemName) {
            title.text("Заказать " + itemName);
        } else {
            title.text('');
        }
        window.toggleClass('is-open');
    }

    if (window.hasClass('is-open')) {
        createOverlay();
    } else {
        removeOverlay();
    }

}

function createOverlay() {
    var docHeight = $(document).height();

    $("<div id='overlay'></div>")
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
    $('#overlay').remove();
}
