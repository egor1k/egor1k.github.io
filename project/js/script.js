(function ($) {
    "use strict";

    var clMainNav = function () {
        var nav = $('.main-nav'),
            navHeight = nav.innerHeight(),
            menu = nav.find('.main-nav__menu'),
            button = nav.find('.main-nav-toggle'),
            secretList = nav.find('.secret-list'),
            secretLinkClass = "secret-list__link";

        function isNavOverflow() {
            var currentMenuHeight = menu.innerHeight();
            if (currentMenuHeight > navHeight) {
                return true;
            }
            return false;
        }

        function fixNav() {
            if (isNavOverflow()) {
                var lastVisible = menu.find('>:visible:last');
                lastVisible.hide();
                return fixNav();
            }
            displayButton();
            transfer();
        }
        fixNav();

        function displayButton() {
            if (menu.find('>:hidden').length > 0) {
                button.show();
            } else {
                button.hide();
            }
        }

        function transfer() {
            var hiddenElements = menu.find('>:hidden');
            secretList.html(hiddenElements.clone().show());
            secretList.find('a').removeAttr('class').addClass(secretLinkClass);
        }

        $(window).resize(function () {
            menu.find('>').show();
            fixNav();
        });

    };

    var clProductQty = function () {
        var minus = $('.product-qty__minus'),
            plus = $('.product-qty__plus');

        $(minus).click(function (e) {
            e.preventDefault();
            var number = $(this).next('.product-qty__number'),
                numberValue = +number.text();
            if (numberValue > 1) {
                number.text(--numberValue);
            }
            copyVal($(this), numberValue);
        });

        $(plus).click(function (e) {
            e.preventDefault();
            var number = $(this).prev('.product-qty__number'),
                numberValue = +number.text();
            if (numberValue < 99) {
                number.text(++numberValue);
            }
            copyVal($(this), numberValue);
        });

        function copyVal(that, qty) {
            var buttonCart = that.closest('.product-card__buttons').find('.put-to-cart');
            buttonCart.attr('data-qty', qty);
        }

    };

    var clShave = function () {

        function mShave(selector) {
            var maxHeight = parseInt($(selector).css('max-height'));
            if (maxHeight) {
                $(selector).shave(maxHeight);
            }
        }

        mShave('.product-card__name');
        mShave('.product-card__details');

    };

    (function ssInit() {
        clMainNav();
        clProductQty();
        clShave();
    })();

})(jQuery);