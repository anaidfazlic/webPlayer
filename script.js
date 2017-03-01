$(document).ready(function () {
    $(".toggleButton").hover(function () {

        $(this).addClass("highlight");

    }, function () {

        $(this).removeClass("highlight");

    });
    $(".toggleButton").click(function () {

        $(this).toggleClass("active");

        $(this).removeClass("highlightedButton");
    });

    $(".panel").height($(window).height() - $('#header').height());
    $('.panel').width($(window).width() / 2 - 5);
    $('iframe').contents().find("html").html($('#htmlPanel').val());
    $("textarea").on('change keyup paste', function () {
        $('iframe').contents().find("html").html($('#htmlPanel').val());
    });
});
