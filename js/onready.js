var hasChangeDescirption = 0;
$(document).ready(function () {
    $("#left_side_bar").css("min-height",$(window).height());
    $("#my-video").width($("#my-video").parent().width());
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
    if($(window).width() < 992){
        $(".left-description").each(function () {
            $(this).parent().next().after($(this).parent());
        });
        hasChangeDescirption = 1;
    }else{
        $(".left-description").each(function () {
            $(this).parent().prev().before($(this).parent());
        });
        hasChangeDescirption = 0;
    }
});
$(window).resize(function () {
    $("#my-video").width($("#my-video").parent().width());
    $("#left_side_bar").css("min-height",$(window).height());
    if($(window).width() < 992){
        if(hasChangeDescirption == 0){
            console.log("des == 0");
            $(".left-description").each(function () {
                $(this).parent().next().after($(this).parent());
            });
            hasChangeDescirption = 1;
        }
    }else{
        if(hasChangeDescirption == 1){
            console.log("des == 1");
            $(".left-description").each(function () {
                $(this).parent().prev().before($(this).parent());
            });
            hasChangeDescirption = 0;
        }
    }
});
$(window).scroll(function () {
    // $("#left_sidebar").css("height",$(window).height());
    $("#left_side_bar").css("min-height",$(window).height());
    $("#pdf_preview").css("height",$("#pdf_preview").width()*1.53);
});

$(window).bind('orientationchange',function (e) {
    $("#left_side_bar").css("min-height",$(window).height());
});

$(".back-home").click(function () {
    window.location.href = "index.html";
});