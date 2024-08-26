$(document).ready(function () {
    "use strict";

    /*============= PRELOADER ============= */
    setTimeout(function () {
        $('body').addClass('loaded');
        $('.preloader').fadeOut(1500);
    }, 1500);

    /*============= SCROLLIT ============= */
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'swing',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
    });

    /*===========  NAVBAR ===============*/
    var c, currentScrollTop = 0,
        navbar = $('nav');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    // Adjust navbar for different screen sizes
    if ($(window).width() <= 768) {
        $(".navbar-nav a").on('click', function () {
            $(".navbar-collapse").removeClass("show");
        });
    }

    /*=========  COUNT TO =========*/
    var eventFired = false,
        objectPositionTop = $('.counts').offset().top;
    $(window).on('scroll', function () {
        var currentPosition = $(document).scrollTop() + 400;
        if (currentPosition >= objectPositionTop && eventFired === false) {
            eventFired = true;
            $(".count").countTo({
                speed: 5000,
                refreshInterval: 80
            });
        }
    });

    /*=========  EASYPIECHART =========*/
    $('.chart').easyPieChart({
        size: 140,
        easing: 'easeOutBounce',
        barColor: '#00eeff', // Updated color
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 12,
        trackColor: '#333333',
        animate: 500
    });

    /*============= SCROLL TO TOP ============= */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    $('#scroll-to-top').click(function () {
        $('#scroll-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /*===========  PORTFOLIO ===============*/
    var options = {
        animationDuration: 0.6,
        filter: "all",
        callbacks: {
            onFilteringStart: function () { },
            onFilteringEnd: function () { }
        },
        delay: 0,
        delayMode: "alternate",
        easing: "ease-out",
        layout: "sameSize",
        selector: ".filtr-container",
        setupControls: true
    }
    var filterizd = $(".filtr-container").filterizr(options);
    filterizd.filterizr("setOptions", options);

    /*========= OWLCAROUSEL =========*/
    $('.testi-carousel').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 450,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

    /*========= VALIDATOR =========*/
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // EmailJS integration
        emailjs.sendForm('service_aqb7hop', 'template_jnuodwq', this)
            .then(function () {
                // Show success message
                var alertBox = '<div class="alert alert-success alert-dismissable">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                    'Your message has been sent successfully!' +
                    '</div>';
                $('#contact-form').find('.messages').html(alertBox);
                $('#contact-form')[0].reset(); // Reset form after submission
            }, function (error) {
                // Show error message
                var alertBox = '<div class="alert alert-danger alert-dismissable">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                    'There was an error sending your message. Please try again later.' +
                    '</div>';
                $('#contact-form').find('.messages').html(alertBox);
            });
    });
});
