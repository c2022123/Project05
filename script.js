$(document).ready(function(){
    $("#btn-show").click(function(){
        // alert("HELLO THERE");
        $("#text").show();
    });

    $("#btn-toggle").click(function(){
        $(".menu-content").toggle();
    });

    $(".form-input").change(function(){
        $(".alert").show();
    });

    $(".form-blur").blur(function(){
        $(".alert-blur").show();
    });

    $("#tabs li a:not(:first)").addClass("inactive");
    $(".tab-content").hide();
    $(".tab-content:first").show();

    $("#tabs li a").click(function(){
        var t = $(this).attr("id");
        if($(this).hasClass("inactive")){
            $("#tabs li a").addClass("inactive");
            $(this).removeClass("inactive");

            $(".tab-content").hide();
            $("#" + t + "content").fadeIn("slow");
        }
            
    })

    $(".clickToSmall").click(function(){
        $(".box").animate({
            marginLeft: "500px",
            height: "300px"
        });
    })

    $(".clickToBig").click(function(){
        $(".box").animate({
            marginLeft: "0px",
            height: "300px",
        }, 3000);   

    })

    $(".clickToFade").click(function(){
        $('.boxFade').fadeOut(3000)
    })

    (".slideToggle").click(function(){
        $(".boxToggle").slideToggle("1000")
    })
})