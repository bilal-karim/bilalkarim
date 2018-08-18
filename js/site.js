// Toggle mobile menu
$('.mobile-menu').click(function() {
    $('nav').toggleClass('hide-on-mobile');
});
// Scroll to div
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
            '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 95
            }, 300);
            return false;
        }
    }
});
setTimeout(function() {
    $('.animated').removeClass('fadeInUp');
}, 700);
