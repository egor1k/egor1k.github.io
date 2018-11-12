"use strict";

function fileUpload() {
    var label = $('.file-upload'),
        input = label.find('input');

    label.on('change', function () {
        var inputVal = input.val();
        if (inputVal != "") {
            label.addClass('active');
        } else {
            label.removeClass('active');
        }
    });
}

function animateAnchor() {
    var header = $('header');

    $('.anchor-animate, .drop-menu a').on('click', function (e) {
        e.preventDefault();
        var headerHeight = header.innerHeight();
        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top - headerHeight
        }, 600);
    });
}

function dropMenu() {
    var button = $('.menu-hamburger');
    var dropMenu = $('.drop-menu');
    var checkbox = button.find('input[type=checkbox]');

    button.on('click', function () {
        if (checkbox.prop('checked') == true) {
            dropMenu.addClass('opened');
        } else {
            dropMenu.removeClass('opened');
        }
    });
}

function slider1() {
    var sliderContainer = $('.slider1'),
        logosContainer = $('.slider1-logos'),
        logoClass = ".img",
        logos = logosContainer.find(logoClass);

    sliderContainer.slick({
        // options
    });

    logosContainer.on('click', logoClass, function () {
        var index = $(this).index();
        sliderContainer.slick('slickGoTo', index);
        $('html, body').stop().animate({
            scrollTop: sliderContainer.offset().top - $(window).height()/2
        }, 400);
    });

    sliderContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        logos.removeClass('active').eq(nextSlide).addClass('active');
    })
}

function slider2() {
    var notebook = $('.notes'),
        sliderContainer = $('.slider2');

    notebook.slick({
        arrows: false,
        fade: true,
        swipe: false,
        touchMove: false,
        asNavFor: sliderContainer
    });

    sliderContainer.slick({
        dots: true,
        asNavFor: notebook
    });

}

function sendForm() {
    $('#main-form').on('submit', (e)=>{
        e.preventDefault();
        formData = new FormData($(this).get(0));
        alert(formData);
        $.ajax({
            type: "POST",
            url: "/ajax/form.php",
            data: formData,
            contentType: false,
            processData: false,
            // dataType: "dataType",
            success: function (response) {
                
            }
        });
    });
}

$(function () {
    animateAnchor();
    fileUpload();
    dropMenu();
    slider1();
    slider2();
    sendForm();
});