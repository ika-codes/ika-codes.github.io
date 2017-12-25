$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//$('body').scrollspy({ target: '#menu-nav' });

var offset = 80;

$('.navbar a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});