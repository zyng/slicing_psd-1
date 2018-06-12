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
