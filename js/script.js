$(document).ready(function() {
	new WOW().init();

	//phone size menu onclick
	if ($(window).width() <= 992) {
        $('#menu-id').click(function (e) {
        e.preventDefault()
        $(".overlay-box").fadeIn(300);
        $(".navgition").addClass("reset-left");
        $("body").addClass("overflow");
    });
    $(".nav-head .close-btn, .overlay-box, .big-menu li a").click(function () {
        $(".overlay-box").fadeOut(300);
        $(".navgition").removeClass("reset-left");
        $("body").removeClass("overflow");
    });

}

       // NAVBAR STICKY
    var $stickyNav = $(".navbar-sticky");

    $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 120) {
            $stickyNav.addClass("navbar-sticky-moved-up");
        } else {
            $stickyNav.removeClass("navbar-sticky-moved-up");
        }
        // apply transition
        if (scroll >= 250) {
            $stickyNav.addClass("navbar-sticky-transitioned");
        } else {
            $stickyNav.removeClass("navbar-sticky-transitioned");
        }
        // sticky on
        if (scroll >= 500) {
            $stickyNav.addClass("navbar-sticky-on");
        } else {
            $stickyNav.removeClass("navbar-sticky-on");
        }

    });
    // //scroll down button to section
	$("#scroll-to-main").click(function () {
        $('html, body').animate({
            scrollTop: $("#main").offset().top -85
        }, 1000);
    });
    $("#scroll-to-about").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top -85
        }, 1000);
    });
    $("#scroll-to-features").click(function () { 
        $('html, body').animate({
            scrollTop: $("#features").offset().top -85
        }, 1000);
    });
    $("#scroll-to-screen").click(function () {
        $('html, body').animate({
            scrollTop: $("#screen").offset().top -85
        }, 1000);
    });
    $("#scroll-to-footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top -85
        }, 1000);
    });
    //////////////////////////////////
    if ( $(window).width() < 992 ) {
		$('.features-cont').contents().unwrap();
        $(".features-section .features").addClass("swiper-container");
        $(".features-section .features-div").addClass("swiper-wrapper");
        $(".features-section .features-slidess").addClass("swiper-slide");
        var features = new Swiper('.features-section .swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.features-section .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
    ///////// **screen-section** /////////
    var screen = new Swiper('.screen-section .swiper-container', {
        loop: true,
        autoplay: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        },
    });
});











	
	
		
	
		

