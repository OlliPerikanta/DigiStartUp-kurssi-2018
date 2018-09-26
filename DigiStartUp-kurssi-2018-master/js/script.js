// Navbar fixed background
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('nav').addClass('fixed-bg');
    } else {
        $('nav').removeClass('fixed-bg');
    }
});

// Collapse .navbar-nav after click
$('.navbar-nav>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Smooth transition between sections
$(document).ready(function () {
    $(".page-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
    });
});

// Navbar show & hide on scroll
$(document).ready(function ($) {
    var mainHeader = $('.navbar'),
        headerHeight = mainHeader.height();

    // Scrolling variables
    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150;

    $(window).on('scroll', function () {
        if (!scrolling) {
            scrolling = true;
            (!window.requestAnimationFrame) ?
            setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
        }
    });

    $(window).on('resize', function () {
        headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
        var currentTop = $(window).scrollTop();

        checkSimpleNavigation(currentTop);

        previousTop = currentTop;
        scrolling = false;
    }

    function checkSimpleNavigation(currentTop) {
        if (previousTop - currentTop > scrollDelta) {
            //if scrolling up...
            mainHeader.removeClass('is-hidden');
        } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            //if scrolling down...
            mainHeader.addClass('is-hidden');
        }
    }
});