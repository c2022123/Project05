$(document).ready(function(){
    
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

})