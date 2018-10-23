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
        stepmax = stepsBody.children().length; // сколько всего шагов

    maincontainer.attr('data-step', '3');
    var stepNumber = maincontainer.attr('data-step');

    var showHide = function () { // скрыть все шаги, кроме активного
        stepsBody.children().hide().eq(--stepNumber).show();
    }

    showHide();

    var switchStepPrev = function () { // вернуться на предыдущий шаг
        maincontainer.attr('data-step', --stepNumber);
        showHide();
    }
    var switchStepNext = function () { // перейти к следующему шагу
        maincontainer.attr('data-step', ++stepNumber);
        showHide();
    }

    var mainformsend = function () {
        var send = true,
            mainform = $('#tr-mainform');

        mainform.find('input').each(function () { // проверка input на пустоту
            if (!$(this).val() || $(this).val() == '') {
                $(this).css('border', '1px solid red');
                send = false;
            } else {
                $(this).css('border', 'none');
            }
        });

        var checkbox = mainform.find('input:checkbox'),
            checkboxspan = checkbox.next('span');

        if (checkbox.prop('checked') == false) { // проверка чекбокса
            checkboxspan.css('color', 'red');
            send = false;
        } else {
            checkboxspan.css('color', 'white');
        }

        if (!send) return false;

        switchStepNext();
        $('.tr-header__h1').text('стол забронирован');
        prevbtn.hide();
        nextbtn.text('Вернуться на сайт');

    };

    nextbtn.on('click', function (e) {
        e.preventDefault();
        stepNumber = maincontainer.attr('data-step');
        if (stepNumber >= stepmax) { // если шаг последний
            return false;
        } else if (stepNumber == 4) {
            mainformsend();
        } else {
            switchStepNext();
        }
    });

    prevbtn.on('click', function (e) {
        e.preventDefault();
        stepNumber = maincontainer.attr('data-step');
        if (stepNumber <= 1) { // если шаг первый
            return false;
        } else {
            switchStepPrev();
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
            // scrollcontent.css('max-height', currentHeight);
            scrollcontent.css({
                'max-height': currentHeight,
                'min-height': currentHeight
            });
        } else {
            maincontainer.height(maxheight);
            // scrollcontent.css('max-height', maxheight);
            scrollcontent.css({
                'max-height': maxheight,
                'min-height': maxheight
            });
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
    datepicker.today = false;
    datepicker.daynames = false;
    datepicker.show();
    datepicker.selectDate(new Date());
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

// https://github.com/RobinHerbots/Inputmask
var trInputMask = function () {
    $('#tr-mainform input[type=tel]').inputmask("+7 999 999 99 99");
};

$(function () {
    trFixHeight(568);
    trScrollContent();
    trCalendar();
    trSteps();
    trInputToggle();
    trInputMask();
});