var trScrollContent = function () {
    // $(function () {
    $(".tablereservation").niceScroll(".tr-scrollcontent", {
        cursorcolor: "transparent",
        horizrailenabled: false,
        cursorwidth: "0",
        cursorborder: "none",
        cursoropacitymax: 0,
    });
    // });
}

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

}

trScrollContent();
trSteps();