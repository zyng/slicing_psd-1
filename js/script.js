$('.menu-toggle').click(function () {
    'use strict';
    $(this).toggleClass('open');
//    $('.menu-nav ul').toggleClass('menu-items-col');
//    $('.part2').toggle();

});


//$(window).resize(function () {
//    'use strict';
//    var viewportWidth = $(window).width();
//
//    if ($('.menu-nav ul').hasClass('menu-items-col') && viewportWidth > 840) {
//        $('.menu-nav ul').removeClass("menu-items-col");
//        $('.menu-toggle').removeClass('open');
//        $('.part2').show();
//    } else if (viewportWidth > 840) {
//        $('.part2').show();
//        $('.menu-toggle').removeClass('open');
//    } else if (viewportWidth <= 840 && !$('.menu-nav ul').hasClass('menu-items-col')) {
//        $('.part2').hide();
//    }
//});
