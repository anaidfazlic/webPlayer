$(document).ready(function () {
    function updateOutput() {

        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

        document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());



    }
    $(".toggleButton").hover(function () {

        $(this).addClass("highlight");

    }, function () {

        $(this).removeClass("highlight");

    });
    $(".toggleButton").click(function () {

        $(this).toggleClass("active");

        $(this).removeClass("highlightedButton");
        var panelId = $(this).attr('id') + "Panel";
        $("#" + panelId).toggleClass("hidden");
        var numberOfActivePanels = 4 - $('.hidden').length
        $('.panel').width($(window).width() / numberOfActivePanels - 6);
    });

    $(".panel").height($(window).height() - $('#header').height());
    $('.panel').width($(window).width() / 2 - 5);
    $('iframe').contents().find("html").html($('#htmlPanel').val());
    $("textarea").on('change keyup paste', function () {
         updateOutput();
    });
});
