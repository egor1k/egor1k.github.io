// https://github.com/inuyaksa/jquery.nicescroll
// var clniceScroll = function () {
//     $(document).ready(function () {
//         $('body').niceScroll({
//             cursorborder: "1px solid #000"
//         });
//     });
// }

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

jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: /iPad|iPhone|iPod|Android/,
    disableVideo: /iPad|iPhone|iPod|Android/
});

clPreloader();
// clniceScroll();