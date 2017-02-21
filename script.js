$(document).ready(function(){
    $(".toggleButton").hover(function () {

    $(this).addClass("highlight");

}, function () {

    $(this).removeClass("highlight");

});
$(".toggleButton").click(function () {

    $(this).toggleClass("active");

    $(this).removeClass("highlightedButton");
});

});
