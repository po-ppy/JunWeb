$(document).ready(function () {
    // $("#my-video").width($("#my-video").parent().width());
    $("#left_side_bar").css("min-height",$(window).height());
    $("#pdf_preview").css("height",$("#pdf_preview").width()*1.53);

    $("#wechat").popover({
        // animation: true,
        placement: 'top',
        html: true,
        // container: "body",
        content: "<img src='img/wechat.jpg' class='embed-responsive'>",
    });
    $("#wechat").click();
    $("#wechat").click();
});
$(window).resize(function () {
    // $("#my-video").width($("#my-video").parent().width());
    $("#left_side_bar").css("min-height",$(window).height());
});
$(window).scroll(function () {
    // $("#left_sidebar").css("height",$(window).height());
    $("#left_side_bar").css("min-height",$(window).height());
    $("#pdf_preview").css("height",$("#pdf_preview").width()*1.53);
});

$(window).bind('orientationchange',function (e) {
    $("#left_side_bar").css("min-height",$(window).height());
});