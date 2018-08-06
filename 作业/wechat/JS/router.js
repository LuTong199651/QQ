


$(function(){

    // $("#title").load("../page/QQ-title.html")
    // $("#dynamic").load("../page/QQ-dynamic.html")



    //切换
    $(".menu-1").click(function() {

        $("#container").load($(this).data("page"))

    })
    $(".haoyoudongtai").click(function() {

        $("#container").load($(this).data("page"))

    })
    $("#title-box2").click(function() {

        $("#container").load($(this).data("page"))

    })

})