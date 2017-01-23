$(document).ready(function(){
  $('.main_slider').bxSlider();
});



$(document).ready(function(){
    $('.jcarousel').jcarousel({
        // Конфигурация инициализации
    });

    $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
    $('.jcarousel-next').jcarouselControl({ target: '+=1' });

});





//$(function() {
 //   $('.jcarousel').jcarousel({
 //       // Конфигурация инициализации
 //   });
//
 //   $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
//    $('.jcarousel-next').jcarouselControl({ target: '+=1' });
//});