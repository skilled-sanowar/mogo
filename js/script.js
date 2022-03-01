$(function(){

  
  //======banner slider part start========//
    $('.banner-main-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false
      });
//======banner slider part end========//
//=======counter-up start======// 
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');
//=======counter-up end======// 
//=======about-slider part start======// 
    $('.about-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          }
        ]
     
    });
//=======about-slider part end======// 
//=======comment-slider part start======// 
    $('.main-comment-slaider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:true,
      pauseOnHover:false,
      prevArrow:".left",
      nextArrow:".right",
    });
//=======comment-slider part end======// 
//=======work-slider part start======// 
    $('.work-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        }
      ]
    });
//=======work-slider part end======// 
// =======stacky part start=======// 
$(window).scroll(function(){
  var top = $(this).scrollTop()
  if(top > 300){
    $(".navbar").addClass("sticky-manu")
  }
  else{
    $(".navbar").removeClass("sticky-manu")
  }
  if(top > 400){
    $(".top-to-bottom").fadeIn(300)
  }
  else{
    $(".top-to-bottom").fadeOut(300)
  }
  if(top > 400){
    $(".top-to-bottom").addClass("vairas")
  }
  else{
    $(".top-to-bottom").removeClass("vairas")
  }
})



// =======stacky part end=======//
// =======top to bottom part start====//
$(".top-to-bottom").click(function(){
  $("html,body").animate({scrollTop:0},1000)
})





// =======top to bottom part end====//

})