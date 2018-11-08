"use strict";

$(window).on('load', function () {
    $(".tr-preloader").delay(600).fadeOut();
});

// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
var trOverlayScrollbars = function () {
    $(".tr-workplace").overlayScrollbars({
        scrollbars: {
            visibility: "hidden"
        },
    });
};

var trDatePick = function () {
    var DatePick = $('.tr-datepick'),
        DatePickClose = DatePick.find('#tr-datepick_close'),
        DatePickShow = $('#tr-datepick_show');

    DatePickClose.on('click', function (e) {
        e.preventDefault();
        DatePick.hide();
    });

    DatePickShow.on('click', function (e) {
        e.preventDefault();
        DatePick.show();
    });

    $('.tr-datepick button[type=submit]').on('click', function (e) {
        e.preventDefault();
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
    // datepicker.onSelect = function () {
    //     $('input[name=date]').val(this.toLocaleDateString());
    // };
};

$(function () {
    trOverlayScrollbars();
    trDatePick();
    trCalendar();
});