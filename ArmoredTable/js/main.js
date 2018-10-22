"use strict";

// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
var trScrollContent = function () {
    $(".tr-scrollcontent").overlayScrollbars({
        scrollbars: {
            visibility: "hidden"
        },
    });
};

var trSteps = function () {
    var maincontainer = $('body'),
        stepsBody = maincontainer.find('.tr-main'), // указать контейнер в котором находятся слайды
        nextbtn = $('.tr-footer__btn_next'), // кнопка вперед
        prevbtn = $('.tr-footer__btn_prev'), // кнопка назад
        stepmax = stepsBody.children().length;

    maincontainer.attr('data-step', '4');
    var stepNumber = maincontainer.attr('data-step');

    var switchStep = function () {
        stepsBody.children().hide().eq(--stepNumber).show();
    }

    switchStep();

    nextbtn.on('click', function (e) {
        e.preventDefault();
        stepNumber = maincontainer.attr('data-step');
        if (stepNumber >= stepmax) {
            return;
        } else {
            maincontainer.attr('data-step', ++stepNumber);
            switchStep();
        }
    });

    prevbtn.on('click', function (e) {
        e.preventDefault();
        stepNumber = maincontainer.attr('data-step');
        if (stepNumber <= 1) {
            return;
        } else {
            maincontainer.attr('data-step', --stepNumber);
            switchStep();
        }
    });

};

var trFixHeight = function (maxheight) {
    var maincontainer = $('.tablereservation'),
        scrollcontent = maincontainer.find('.tr-scrollcontent'),
        currentHeight = window.innerHeight;
    var setHeight = function (maxheight) {
        currentHeight = window.innerHeight;
        if (currentHeight <= maxheight) {
            maincontainer.height(currentHeight);
            scrollcontent.css('max-height', currentHeight);
        } else {
            maincontainer.height(maxheight);
            scrollcontent.css('max-height', maxheight);
        }
    };
    setHeight(maxheight);
    window.onscroll = function () {
        setHeight(maxheight);
    };
    $(window).resize(function () {
        setHeight(maxheight);
    });
};

// http://crsten.github.io/datepickk/
var trCalendar = function () {
    var datepicker = new Datepickk();
    datepicker.maxSelections = 1;
    datepicker.lang = 'ru';
    datepicker.container = document.querySelector('.tr-calendar');
    datepicker.show();
    datepicker.daynames = false;
    datepicker.today = true;
};

var trInputToggle = function () {
    var inputToggle = $('.tr-input-toggle'),
        plus = inputToggle.find('.tr-plus'),
        minus = inputToggle.find('.tr-minus');

    plus.on('click', function (e) {
        e.preventDefault();
        var input = $(this).next('input');
        var inputValue = input.val();

        if (input.attr('name') == 'minutes') {
            if (inputValue == "00") {
                input.val('30');
            } else {
                input.val('00');
            }
        } else if (input.attr('name') == 'hours') {
            if (inputValue < 24) {
                input.val(++inputValue);
            } else {
                input.val(1);
            }
        } else {
            input.val(++inputValue);
        }

    });

    minus.on('click', function (e) {
        e.preventDefault();
        var input = $(this).prev('input');
        var inputValue = input.val();

        if (input.attr('name') == 'minutes') {
            if (inputValue == "00") {
                input.val('30');
            } else {
                input.val('00');
            }
        } else if (input.attr('name') == 'hours') {
            if (inputValue == 1) {
                input.val(24);
            } else {
                input.val(--inputValue);
            }
        } else {
            if (inputValue > 1) {
                input.val(--inputValue);
            }
        }
    });
};

$(function () {
    trCalendar();
    trSteps();
    trFixHeight(568);
    trScrollContent();
    trInputToggle();
});