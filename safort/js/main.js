$(document).ready(function () {


	var $body = $('body'),
		$header = $('.header');

	$(window).scroll(function () {
		togglePageScrolledClass();
	});

	togglePageScrolledClass();

	function togglePageScrolledClass() {
		if (this.pageYOffset > 0) {
			$body.addClass('page-scrolled');
		} else {
			$body.removeClass('page-scrolled');
		}
	}




	$(document).on('opening', '.remodal', function () {
		compensateHeader();
	});

	$(document).on('closed', '.remodal', function () {
		compensateHeader();
	});

	function compensateHeader() {
		var pr = $body.css('padding-right');
		$header.css('padding-right', pr);
	}




	var $thumbs = $('.review-thumb'),
		$reviews = $('.review');

	$thumbs.click(function (e) {
		e.preventDefault();

		var $self = $(this);
		$self.addClass('active');
		$self.siblings().removeClass('active');

		var index = $self.attr('data-index');
		index--;

		$reviews.filter(':visible').fadeOut(150, function () {
			$reviews.eq(index).fadeIn(300);
		});

	});




	$('.partner-slider').lightSlider({
		autoWidth: true,
		slideMargin: 50,
		pager: false,
		auto: true,
		pause: 2000,
		speed: 25000,
		cssEasing: 'linear',
		controls: false
		// loop: true,
	});




	var $titles = $('.primary-title'),
		$dots = $('.primary-section-dot'),
		$bg = $('.primary-section-bg');

	$titles.click(function () {
		var index = $(this).attr('data-index');
		togglePrimarySection(--index);
		clearInterval(intervalPrimarySection);
	});

	function togglePrimarySection(index) {
		$titles.removeClass('active').eq(index).addClass('active');
		$dots.removeClass('active').eq(index).addClass('active');
		$bg.removeClass('active').eq(index).addClass('active');
	}

	var intervalPrimarySection = setInterval(function () {
		var count = $titles.length;
		var index = $titles.filter('.active').attr('data-index');
		if (index == count) index = 0;
		togglePrimarySection(index);
	}, 3500);

});