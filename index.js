$(document).ready(function(){
    $("h1").addClass("big-title");
    $("h1").text("This is some changed text with jQuery");
    $("h1").removeClass("big-title");
    $("button").html("<em>I'm reborn!</em>");
    $("img").attr("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");

    $("h1").click(function(){
        $("h1").css("color", "purple");
    })
    $("button").click(function(){
        $("h1").css("color", "red");
    })
    $("input").keypress(function(event){
        $("h1").text(event.key);
    })

    $("img").on("mouseover", function(){
        $("img").attr("src", "http://t3.gstatic.com/images?q=tbn:ANd9GcSoorKS-3CxgdJFB3QNWhu_L7DTYVdgGMybnW1PUwgcoqmRLmO8N8D7yfBGzC_BZuLlBkB_IVLnv2WWgus4vlNRn3su7MRHDChgWqfXadI");
    })
});
