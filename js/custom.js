$(document).ready(function () {
    $('.carousel').carousel({
        interval: 6000
    });

    $(".gear").click(function () {
        $(".option-color").fadeToggle();
    });

    var colorLi = $(".option-box .option-color ul li");
    
    colorLi
        .eq(0).css('backgroundColor', '#e41b17').end()
        .eq(1).css('backgroundColor', '#e02be0').end()
        .eq(2).css('backgroundColor', '#2d5bf2').end()
        .eq(3).css('backgroundColor', '#2cde3a').end()
        .eq(4).css('backgroundColor', '#13d0d8');

    colorLi.click(function () {
        $("link[href*='theme']").attr('href', $(this).attr("data-value"));
    });

});

$(window).scroll(function ()
    {
        $(scroll).scrollTop() >= 700 ? $(".scrollb").show() : $(".scrollb").hide();
    });
    
    $(".scrollb").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
});

$(window).on('load', function () {
        $('.loader').fadeOut();
        $('.loader-inner').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
});