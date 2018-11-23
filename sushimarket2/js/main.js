function sub_menu_toggle() {
    $('.sub-menu-toggle').click(function(){
        $(this).toggleClass('sub-menu_is-open').prev('.sub-menu').slideToggle();
    });
}

$(function () {
    sub_menu_toggle();
});