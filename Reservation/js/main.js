// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
var trScrollContent = function () {
    $(".tr-scrollcontent").overlayScrollbars({
        scrollbars: {
            visibility: "hidden"
        },
    });
};

var trSteps = function () {
    var maincontainer = $('.tablereservation'),
        nextbtn = $('.tr-footer__btn_next'),
        prevbtn = $('.tr-footer__btn_prev'),
        stepsBody = maincontainer.find('.tr-main'),
        stepmax = stepsBody.children().length;

    maincontainer.attr('data-step', '1');
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

$(function () {
    trScrollContent();
    trSteps();


    var tr = $('.tablereservation');
    var trs = $('.tr-scrollcontent');

    var hh = window.innerHeight;

    var sethh = function () {
        hh = window.innerHeight;
        if (hh <= 568) {
            tr.height(hh);
            trs.css('max-height', hh);
        } else {
            tr.height(568);
            trs.css('max-height', 568);
        }
    }

    sethh();

    window.onscroll = function () {
        sethh();
    };

    $(window).resize(function () {
        sethh();
    });

});