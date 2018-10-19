var calendar = function () {
    var datepicker = new Datepickk();
    datepicker.maxSelections = 1;
    datepicker.container = document.querySelector('#bs-calendar');
    // datepicker.inline = true;
    datepicker.lang = 'ru';
    datepicker.show();
}

var slidePage = function () {

    var bsbody = $('.bs-content'), // отслеживаемый контейнер
        buttonNext = $('.bs-next'), // кнопка вперед
        buttonPrev = $('.bs-back'), // кнопка назад
        bsquantity = 3; // всего слайдов

    bsbody.addClass('bs-2').attr('data-bs', '2');

    buttonNext.on('click', function (e) {
        e.preventDefault();
        var slidenumber = bsbody.attr('data-bs');
        if (slidenumber >= bsquantity) {
            return;
        }
        var oldBsClass = "bs-" + slidenumber++,
            newBsClass = "bs-" + slidenumber;
        bsbody.attr('data-bs', slidenumber).removeClass(oldBsClass).addClass(newBsClass);
    });

    buttonPrev.on('click', function (e) {
        e.preventDefault();
        var slidenumber = bsbody.attr('data-bs');
        if (slidenumber <= 1) {
            return;
        }
        var oldBsClass = "bs-" + slidenumber--,
            newBsClass = "bs-" + slidenumber;
        bsbody.attr('data-bs', slidenumber).removeClass(oldBsClass).addClass(newBsClass);
    });

}

var plusMinus = function () {

    $('.bs-input .bs-plus').on('click', function (e) {
        e.preventDefault();
        var input = $(this).next('input');
        var inputValue = input.val();

        if (input.hasClass('bsMinute')) {
            if (inputValue == 00) {
                input.val('30');
            } else {
                input.val('00');
            }
        } else if (input.hasClass('bsHour')) {
            if (inputValue < 24) {
                input.val(++inputValue);
            } else {
                input.val(1);
            }
        } else {
            input.val(++inputValue);
        }

    });

    $('.bs-input .bs-minus').on('click', function (e) {
        e.preventDefault();
        var input = $(this).prev('input');
        var inputValue = input.val();

        if (input.hasClass('bsMinute')) {
            if (inputValue == 00) {
                input.val('30');
            } else {
                input.val('00');
            }
        } else if (input.hasClass('bsHour')) {
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
}

calendar();
slidePage();
plusMinus();