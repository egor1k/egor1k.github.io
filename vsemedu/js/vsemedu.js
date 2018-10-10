$(document).ready(function () {
    $('.tarelka').hover(function () {
            $('.vertelka, .footer-vsemedu-logo').removeClass('active');
        }, function () {
            $('.vertelka, .footer-vsemedu-logo').addClass('active');
        }
    );
});