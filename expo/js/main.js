"use strict";

function fileUpload() {
    $('.file-upload').on('change', function () {
        var label = $(this),
            input = label.find('input'),
            inputVal = input.val();
        if (inputVal != "") {
            label.addClass('active');
        } else {
            label.removeClass('active');
        }
    });
}

$(function () {
    fileUpload(); // если загружены файлы в input -> добавляет класс active для label
});