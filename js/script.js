$('.container-header-navigation').click(function () {
    'use strict';
    $(this).toggleClass('open');
//    $('.menu-nav ul').toggleClass('menu-items-col');
//    $('.part2').toggle();

});


//var hamburger = document.querySelector(".hamburger");
//hamburger.addEventListener("click", function () {
//  document.querySelector(".page-header").classList.toggle("nav-opened");
//}, false);

$(window).resize(function () {


    var viewportWidth = $(window).width();

    if (viewportWidth >= 840) {
        $('.container-header-navigation').removeClass('open');
    }
});
