$("a").click(function(){
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
})
$(document).ready(function(){
    $(".cssload-my-name").css("opacity","0")
    $(".loading").css("opacity", "0");
    $(".loading").css("z-index","0");
}) 

let prevScroll = window.pageYOffset
window.onscroll = function(){  
    currentScroll = window.pageYOffset
    if(prevScroll > currentScroll && $(document).scrollTop() < 50){
      $(".my-bg").css("background-color", "transparent");
      $("nav a").css("color","#f1f1f1")
    }
    else if(prevScroll > currentScroll){
        $(".my-bg").css("top","0")
        $(".my-bg").css("background-color","white")
        $("nav a").css("color","#242424")
    }
    else{
        $(".my-bg").css("top","-100px")
    }
    prevScroll = currentScroll
}


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        },
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

    });
  });
  particlesJS("particles-js", {"particles":{"number":{"value":433,"density":{"enable":false,"value_area":8979.107540846928}},
  "color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},
  "image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,
  "anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,
  "anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
  "move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":706.5071747021702,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var  update;
  /*end of particles*/
  new WOW().init();