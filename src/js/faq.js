$( document ).ready(function() {
    $('.apply').click(function(){
        $(this).toggleClass('active-button').parent().children('.job-apply').slideToggle('slow');
        $('.vacancy-info').toggleClass('clear-border');
        return false;
    });

    $(".question").click( function(e) {
        e.target.classList.toggle("open");
        e.target.nextElementSibling.classList.toggle("show");
    });

    $('.question-block').click(function(){
        $(this).children('.hidden').slideToggle('slow');
        return false;
    });


});