//   end navmenu
const menutoggle = document.querySelector(".menutoggle");

const nav = document.querySelector("nav");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");
     
    nav.classList.toggle("active");

})

//   end navmenu


$(document).ready(function(){

$(".counter").counterUp({

delay:10,
time:1800,

}); 


});

//   end no. animations

// ----- owl carosoul

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:1200,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        
        1000:{
            items:3
        }

    }
})

// ----- owl carosoul

// ---------  scroll navbar sticky-------------

window.addEventListener("scroll",function(){

var header = document.querySelector("header");

header.classList.toggle("sticky",window.scrollY > 0);

})

// ---------  scroll navbar sticky-------------











