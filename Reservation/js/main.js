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

    maincontainer.attr('data-step', '2');
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
}

// http://crsten.github.io/datepickk/
var trCalendar = function () {
    var datepicker = new Datepickk();
    datepicker.maxSelections = 1;
    datepicker.lang = 'ru';
    datepicker.container = document.querySelector('.tr-calendar');
    datepicker.show();
    datepicker.daynames = false;
    datepicker.today = true;
}

$(function () {
    trCalendar();
    trSteps();
    trFixHeight(568);
    trScrollContent();
});