
$(document).ready(function(){
    $('.banner-slider').slick({
        autoplay:true,
        dots:true,
        arrows: false,
    });
    //about vedio
    new VenoBox({
    selector: '.my-custom-links',
    });

    //testimonial
    $('.testimonial-slider').slick({
        autoplay:false,
        dots:true,
        arrows: false,
       slidesToShow:2,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

//counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
 // brand slider

$('.brand-slider').slick({  
        arrows: true,
        slidesToShow:5,
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-prev next-arrow"></i>',
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
     
    });

});