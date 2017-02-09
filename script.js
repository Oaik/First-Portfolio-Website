var btnclicked = false,
    iconClicked = false,
    myBtn = $("#btn");

$(function () {
    "use strict";
    smoothScroll.init();
    //navbar
    $("nav .fa").click(function() {
        if ($( window ).width() < 768) {
            if (iconClicked) {
            $("nav ul li").hide();
            $(".fa-times").hide();
            $(".fa-align-justify").show();
            iconClicked = false;
        } else {
            $("nav ul li").show();
            $(".fa-times").show();
            $(".fa-align-justify").hide();
            $("nav ul li").css("display","block");
            iconClicked = true;
        }
        }
        
    });

    $('nav li a').on("click", function(){
        if ($( window ).width() < 768) {
        iconClicked = true;
        if (iconClicked) {
            $('nav ul li').slideUp();
            $("nav ul li").show();
            $(".fa-align-justify").show();
            $(".fa-times").hide();
            $("nav ul li").css("display","block");
        }
        iconClicked = false;
        }
    });
});
