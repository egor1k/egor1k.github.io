(function ($) {
    "use strict";

    var clPreloader = function () {

        $("html").addClass('cl-preload');

        $(window).on('load', function () {

            //принудительное перемещение страницы верх при ее обновлении
            // $('html, body').animate({
            //     scrollTop: 0
            // }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // для анимации h1
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    }

    var clAOS = function () {

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 200,
            once: false,
            disable: 'mobile'
        });

    };

    var navOpen = function () {

        var siteBody = $('body');

        $('.header-icon').click(function (e) {
            e.preventDefault();
            siteBody.addClass('header-nav-open');
        });
        
    };

    (function ssInit() {

        clPreloader();
        clAOS();
        navOpen();

    })();


})(jQuery);