$(document).ready(function(){
    $(".customer-carousel").owlCarousel({
        items:1,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:2000,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
    
            }
        }

    });


    // partner carousel
    $(".Partherns-carousel").owlCarousel({
        items:5,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:2000,
        margin:20,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            768:{
                items:3,
                nav:false
            },
            992:{
                items:5,
                nav:false
            },
            1000:{
                items:5,
                nav:false
    
            }
        }

    });
    // manu scrool
    $(window).on('scroll', function (){   
        var sticky = $('.header-area'),
        scroll = $(window).scrollTop();
        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

      });




// WOW active
new WOW().init();

// counter plugin
var timer = $('.timer');
if(timer.length) {
    timer.appear(function () {
      timer.countTo();
  })
}
// isotope
$(".project-list").isotope();
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".project-list").isotope({
            filter: selector,
            
        });
    });




    $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close, .offcanvas-overylay").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
      });







    
  });