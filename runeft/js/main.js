"use strict";

$(document).ready(function () {
    var sliderMain = new Swiper('.slider-main', {

        pagination: {
            el: '.swiper-pagination',
        }
    });
    $('.slider-main__name').shave(256);
});