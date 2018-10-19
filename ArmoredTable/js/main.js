var calendar = function () {
    var datepicker = new Datepickk();
    datepicker.maxSelections = 1;
    datepicker.container = document.querySelector('#bs-calendar');
    // datepicker.inline = true;
    datepicker.lang = 'ru';
    datepicker.show();
}

var slidePage = function () {
    $(document).ready(function () {

        var bsbody = $('body'),
            buttonNext = $('.bs-next'),
            buttonPrev = $('.bs-back'),
            bsquantity = 3;

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

    });
}

calendar();
slidePage();