const mobileMenu = document.getElementById("mobileMenu");
const menuContent = document.getElementById("menuContent");

const searchBtn = document.getElementById("search-icon");
const searchForm = document.getElementById("search-form")

mobileMenu.addEventListener("click", function() {
    menuContent.classList.toggle("open")
}) 

searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active")
}) 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        mouseDrag: false
    });
  });


  $(".categoryBtn").click(function(){
    var attr = $(this).attr("data-category");

    $(".categoryBtn").removeClass("active");
    $(this).addClass("active");

    $("#container .item").hide();

    if(attr == "branding"){
        $("." + attr).show();
        $("#container").addClass("filter");
    }
    else if(attr == "mockup"){
        $("." + attr).show();
        $("#container").addClass("filter");
    } else if(attr == "website"){
        $("." + attr).show();
        $("#container").addClass("filter");
    } else if(attr == "ui-ux"){
        $("." + attr).show();
        $("#container").addClass("filter");
    } else{
        $("#container .item").show();
        $("#container").removeClass("filter");
    }
}); 