'use strict';

function slider() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        // slidesPerView: 1,
        freeMode: true,
        mousewheel: true,
        freeModeSticky: true,
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
}

$(function () {
    slider();
});