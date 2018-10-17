var clPreloader = function () {

    $("html").addClass('cl-preload');

    $(window).on('load', function () {

        //force page scroll position to top at page refresh
        // $('html, body').animate({ scrollTop: 0 }, 'normal');

        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

        // for hero content animations 
        $("html").removeClass('cl-preload');
        $("html").addClass('cl-loaded');

    });
}

//  https://kingsora.github.io/OverlayScrollbars/#!overview
var clOverlayScrollbars = function () {
    $("body").overlayScrollbars({
        className: 'os-theme-light',
        scrollbars: {
            visibility: "auto",
            autoHide: "scroll",
            autoHideDelay: 400,
        },
    });
}

clPreloader();
// clOverlayScrollbars();

// jarallax(document.querySelectorAll('.jarallax'), {
//     disableParallax: /iPad|iPhone|iPod|Android/,
//     disableVideo: /iPad|iPhone|iPod|Android/
// });