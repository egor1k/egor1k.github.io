function swipers() {
    var mySwiper1 = new Swiper('.swiper-geoport', {
        loop: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 2,
            }
        }
    })
    var mySwiper2 = new Swiper('.swiper-tech', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 2,
            }
        }
    })
}


function tech() {
    $('.tech').on({
        mouseenter: function () {
            $(this).addClass('is-open').find('.tech-txt').stop().animate({
                height: $(this).get(0).scrollHeight
            }, 300, function() {
                $(this).height('auto');
            });
        },
        mouseleave: function () {
            $(this).removeClass('is-open').find('.tech-txt').stop().animate({
                height: '200'
            }, 200);
        }
    }, '.tech-item');
}

$(function () {
    swipers();
    tech();
});