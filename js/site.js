// Toggle mobile menu
$('.mobile-menu').click(function() {
    if (!$('header').hasClass('with-nav')) {
        $('header').addClass('with-nav');
        $('nav').removeClass('hide-on-mobile');
    } else {
        $('header').removeClass('with-nav');
        $('nav').addClass(' hide-on-mobile');
    }
});
// Scroll to div
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
            '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 300);
            return false;
        }
    }
});
// Remove animated class
setTimeout(function() {
    $('.animated').removeClass('fadeInUp');
}, 700);
