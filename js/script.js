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


$(document).ready(function() {

  var scrollTo = function (link, goto ,speed) {

    $(link).click(function(){
      $('html,body').animate({
        scrollTop: $(goto).offset().top
      },speed);
    });
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
        } else {
            $('.part2').removeClass('sticky');
        }

	};

	stickyNav();

    var about = $('.section-main-about').offset().top;
    var services = $('.section-main-services').offset().top;
    var gallery = $('.section-main-gallery').offset().top;
    var blog = $('.section-main-blog').offset().top;
    var contact = $('.page-footer').offset().top;

     var change_background_size = function () {
        ScrollY = $(window).scrollTop();


        if (ScrollY >= about) {
            $('.sticky').css('maxWidth',"135px");
        }
        if (ScrollY >= services) {
            $('.sticky').css('maxWidth',"230px");
        }
        if (ScrollY >= gallery) {
            $('.sticky').css('maxWidth',"320px");
        }
        if (ScrollY >= blog) {
            $('.sticky').css('maxWidth',"385px");
        }
        if (ScrollY >= contact) {
            $('.sticky').css('maxWidth',"480px");
        }
        if (ScrollY < about) {
            $('.sticky').css('maxWidth',"");
        }

        if (ScrollY >= gallery && ScrollY < blog) {
            $('.sticky').css('background-color', 'rgba(255,255,255,0.9)');
        }else {
            $('.sticky').css('background-color', '');
        }


    };

    change_background_size();

	$(window).scroll(function () {
        change_background_size();
        stickyNav();

	});

});
