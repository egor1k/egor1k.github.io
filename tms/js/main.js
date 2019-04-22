$(document).ready(function () {
    var header = $('.header'),
        body = $('body');

    fixedHeader();

    $(window).resize(function () {
        fixedHeader();
    });

    $('#nav-main').on('hidden.bs.collapse', function () {
        fixedHeader();
    })

    function fixedHeader() {
        var headerHeight = header.innerHeight();
        body.css('padding-top', headerHeight);
    }

    $('.custom-file-input').on('change', function () {
        let fileName = $(this).val().split('\\').pop();
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
    })

    $('input[type=tel]').inputmask("+7 (999) 999-99-99"); // https://github.com/RobinHerbots/Inputmask
});