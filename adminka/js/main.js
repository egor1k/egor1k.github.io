"use strict";

$(function () {
    $('.tr-login button[type=submit]').on('click', function (e) {
        e.preventDefault();
        $(location).attr('href',"admin.html");
    });
});