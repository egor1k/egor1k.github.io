$(document).ready(function () {
	// Плавный переход по ссылкам
	$('main nav a').on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('a[data-src="#morphing-content"]').on('click', function (e) {
		e.preventDefault();
		$('#window').fadeIn();
	});

	$('.tovisit').on('click', function (e) {
		e.preventDefault();
		$('#checkbox1').prop('checked', true);
	});

	$('.participate').on('click', function (e) {
		e.preventDefault();
		$('#checkbox2').prop('checked', true);
	});

	// Если нет галочки на 'Согласие на обработку персональных данных' , то кнопка отправить форму будет неактивна
	$('.privacy').on('click', function (e) {
		formsubmit = $('#formsubmit');
		if ($('#privacy').prop('checked') == true) {
			formsubmit.prop('disabled',false);
		} else {
			formsubmit.prop('disabled',true);
		}
	});

});