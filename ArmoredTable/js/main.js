var datepicker = new Datepickk();
datepicker.maxSelections = 1;
datepicker.container = document.querySelector('#bs-calendar');
datepicker.inline = true;
datepicker.lang = 'ru';
datepicker.show();



$('.bs-content.bs-1 .bs-next').on('click', function(e) {
    e.preventDefault();
    $('.bs-content').removeClass('bs-1');
    $('.bs-content').addClass('bs-2');
});

$('.bs-content.bs-2 .bs-prev').on('click', function(e) {
    e.preventDefault();
    $('.bs-content').removeClass('bs-2');
    $('.bs-content').addClass('bs-1');
});