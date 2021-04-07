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

  const categoryBtns = document.getElementsByClassName("category");

for(var i = 0; i < categoryBtns.length; i++){

    const categoryBtns = document.getElementsByClassName("category");

    categoryBtns[i].addEventListener("click", function() {

        const categoryBtns = document.getElementsByClassName("category");
    
        const attr = categoryBtns[i].getAttribute('data-category');
    
        let items = document.getElementsByClassName("item");
        items[i].style.display = "none";
    
        if(attr == "branding"){
            attr.style.display = "flex";
        } else if(attr == "mockup") {
            attr.style.display = "flex";
        } else if(attr == "website") {
            attr.style.display = "flex";
        } else if(attr == "ui/ux") {
            attr.style.display = "flex";
        } else{
            items.style.display = "flex";
        }
    })
}