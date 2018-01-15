$( document ).ready(function() {

    $('.navbar-toggle').click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
        $('.main-nav').fadeToggle();
        $('.main-nav').removeClass('nav-hide');
    });


    $('.sl').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true
    });


});