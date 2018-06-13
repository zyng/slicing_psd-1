$(document).ready(function() {

    var hamburger = document.querySelector('.menu-toggle')

    hamburger.addEventListener("click", function () {
        document.querySelector(".container-header-navigation").classList.toggle("open");
    }, false);


    $(window).resize(function () {
        var viewportWidth = $(window).width();

        if (viewportWidth >= 840) {
            $('.container-header-navigation').removeClass('open');
        }
    });


    var scrollTo = function (link, goto ,speed) {

        $(link).click(function(){
            $('html,body').animate({
            scrollTop: $(goto).offset().top
        },speed)});
    }

    scrollTo("#link1", "#section-home", 1500);
    scrollTo("#link2", "#section-about", 1500);
    scrollTo("#link3", "#section-services", 1500);
    scrollTo("#link4", "#section-gallery", 1500);
    scrollTo("#link5", "#section-blog", 1500);
    scrollTo("#link6", "#section-contact", 1500);

    var NavY = $('.page-main').offset().top;

    var stickyNav = function () {
        ScrollY = $(window).scrollTop();


        if (ScrollY > NavY) {
            $('.part2').addClass('sticky');
        }
        else {
            $('.part2').removeClass('sticky');
        }

	};

	stickyNav();


    var about = $('.section-main-about').offset().top;
    var services = $('.section-main-services').offset().top;
    var gallery = $('.section-main-gallery').offset().top;
    var blog = $('.section-main-blog').offset().top;
    var contact = $('.page-footer').offset().top;
    var currentvalue = $('.sticky').css('maxWidth');


    var sizeChange = function () {

        var ScrollY = $(window).scrollTop();
        var sticky = $('.sticky');

        if (currentvalue != "135px" && ScrollY >= about && ScrollY < services) {
            sticky.stop().animate({maxWidth:"135px"},{duration:800,queue:false});
            currentvalue = "135px";
        }
        else if (currentvalue != "230px" && ScrollY >= services && ScrollY < gallery) {
            sticky.stop().animate({maxWidth:"230px"},{duration:800,queue:false});
            currentvalue = "230px";
        }
        else if (currentvalue != "320px" && ScrollY >= gallery && ScrollY < blog) {
            sticky.stop().animate({maxWidth:"320px"},{duration:800,queue:false});
            currentvalue = "320px";
        }
        else if (currentvalue != "385px" && ScrollY >= blog && ScrollY < contact) {
            sticky.stop().animate({maxWidth:"385px"},{duration:800,queue:false});
            currentvalue = "385px";
        }
        else if (currentvalue != "480px" && ScrollY >= contact) {
            sticky.stop().animate({maxWidth:"480px"},{duration:800,queue:false});
            currentvalue = "480px";
        }
        else if (currentvalue != '' && ScrollY < about) {
            $('.part2').stop().css('maxWidth', '');
            currentvalue = '';
        }


        if (ScrollY >= gallery && ScrollY < blog) {
            sticky.css('background-color', 'rgba(255,255,255,0.9)');
        }
        else {
            sticky.css('background-color', '');
        }

    }



    $(window).scroll( function () {
        stickyNav();
        sizeChange();
    });



});

