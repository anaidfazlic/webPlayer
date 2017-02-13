
// var show=true;
$("#htmlButton").click(function () {
    // if(show){
    //     $("#textHTML").css("display","none");
    //     show=false;
    // }

    // else{
    //     $("#textHTML").show();
    //     show=true;
    // }
    $("#textHTML").toggle();
});
$("#cssButton").click(function () {
    $("#textCSS").toggle();
});
$("#jsButton").click(function () {
    $("#textJS").toggle();
});
