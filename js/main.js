const mobileMenu = document.getElementById("mobileMenu");
const menuContent = document.getElementById("menuContent");

mobileMenu.addEventListener("click", function() {
    menuContent.classList.toggle("open")
}) 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        mouseDrag: false
    });
  });