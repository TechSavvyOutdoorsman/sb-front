
// TOGGLE HAMBURGER AND COLLAPSE NAV
$('#toggle-button').on('click', (e) => {
    e.preventDefault()
    $(this).toggleClass('open')
    $('#mobile-menu').toggleClass('collapse')
})
// TOGGLE HAMBURGER AND COLLAPSE NAV ON CLICK 
$('mobile-link a').on('click', () => {
    $('#toggle-button').removeClass('open')
    $('#mobile-menu').removeClass('collapse')

})

// SHOW/HIDE NAV

// Hide Header on scroll down 
let didScroll
let lastScrollTop = 0
let delta = 5
let navbarHeight = $('.navbar').outerHeight()

$(window).scroll((e) => {
    didScroll = true
})

setInterval(function() {
    if (didScroll) {
        hasScrolled()
        didScroll = false
    }
}, 250)

function hasScrolled() {
    var st = $(this).scrollTop()

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('show-nav').addClass('hide-nav');
        $('#toggle-button').removeClass('open')
        $('#mobile-menu').removeClass('collapse')
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}