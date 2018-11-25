function menuToggle() {

    var mainMenu = $('.main-menu');

    $('.main-menu-toggle').click(function () {
        $(this).toggleClass('main-menu_is-open');
        mainMenu.slideToggle();
    });

    $('.sub-menu-toggle').click(function () {
        $(this).toggleClass('sub-menu_is-open').prev('.sub-menu').slideToggle();
    });

}

$(function () {
    menuToggle();
});