   var widgetOptions = {
        token: '3EEB66E7-F189-4553-8B7A-0D3D29A50033',
        //css: 'http://pms.frontdesk24.ru/BookingWidgetFront/styles/default.css',
        css: 'http://ug-service.info/frontdesk24.css', 
        target: 'search-widget',
        language: 'ru',
        popupHeader: '',
        maxAdults: 10,
        widget_width: 928,
        align: 'left',
        showGuestsCount: true,
        showChildren: false,
        minAge: 1,
        maxAge: 17,
        method: 'popup',
        showAllIfNotExists: true, 
        usePaygate: true,
        showHours: true         
    };

    (function () {

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;

        script.src = 'http://pms.frontdesk24.ru/BookingWidgetFront/Scripts/widget.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    })();








$(function(){
    $('#form').validate({
        rules:{
            name:{
                required:true,
                minlength:2
            }
        },
        messages:{
            name:{
                reqired:"поле 'имя' обязательно к заполнению",
                minlength:"Введите не менее 2-ух символов"
            },
            email:{
                required:"поле обязательно для заполнения",
                email:"необходим формат адреса"
            },
            subject:"нужна тема"
        }
    });
});


$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 100,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});



function ajax() { //Ajax отправка формы
    var msg = $("#form").serialize();
    console.log(msg);
    $.ajax({
        type: "POST",
        url: "send.php",
        data: msg,
        success: function(data) {
            $("#results").html(data);
            console.log('отправлено успешно');
        },
        error:  function(xhr, str){
            alert("Возникла ошибка!");
        }
    });
}



$(document).ready(function(){
  $('.main-slider').bxSlider({
    'auto' : 'true',
    controls:false,
    nextSelector:null
  });
});

// бронирование 
//Ранее бронирование, скидка 5%      5354
$(document).ready(function(){
        $("#isidor-early-bron").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5354','' ,undefined ,undefined , '2','0', '2','2');
  });
});
//Продли удовольствие, скидка 10%    5355
$(document).ready(function(){
        $("#isidor-prolong-pleasure").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5355','' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
//      popupRooms(tariff, room, arrival, departure, adults, children, maxAdults, maxChildren);
 
//Исидор
//Стандартный тариф                  5353
//Ранее бронирование, скидка 5%      5354
//Продли удовольствие, скидка 10%    5355

//коды категорий номеров
//2-местный Стандарт dbl             5873
//2-местный Стандарт dbl+            5874
//2-местный Стандарт dbl++           5875
//2-местный Стандарт twin            5876
//2-местный Стандарт twin++          5877
//3-местный Стандарт                 5878
//2-местный Студия++                 5879
//4-местный 2-комнатный Люкс         5880
//4-местный 2-комнатный Люкс+        5881

        $("#isidor-standart2-dbl").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5873' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-standart2-dbl-plus").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5874' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("isidor-#standart2-dbl-plus-plus").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5875' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-standart2-dbl-twin").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5876' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-standart2-dbl-twin-plus-plus").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5877' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-standart3").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5878' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-studio2-plus-plus").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5879' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-4place-rooms2-lux").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5880' ,undefined ,undefined , '2','0', '2','2');
  });
});

$(document).ready(function(){
        $("#isidor-4place-rooms2-lux-plus").click(function () {
        //alert ('Нажали на кнопку Заказать');
         popupRooms('5353','5881' ,undefined ,undefined , '2','0', '2','2');
  });
});
// бронирование - end

$(window).load(function () {
    
 var url = location.pathname;
 //alert(url);
        $('ul.smenu li').each(function() {
            var href = $(this).find('a').attr('href');
            //alert(href);
            if(url == href) {
                //alert(href);
                $(this).find('a').addClass("active");
            }
        });
    
  });

$(window).load(function () {
    
 var url = location.pathname;
 //alert(url);
        $('ul.dropdown li').each(function() {
            var href = $(this).find('a').attr('href');
            //alert(href);
            //alert(url);
            if(url == href) {
                //alert(href);
                $(this).find('a').addClass("active");
            }
        });
    
  });



$(document).ready(function(){
    // все отзывы
    $('div.test a').click(function(){
        alert('show all');
        console.log('попал');
    });
    $("body").on("click", ".show-all", function () {
      var what = $(this);
      console.log(what);
      //alert('show all');
      var link = 'block_visantia_more_response' + '.html';
      //alert(link);      
      $('div.show-all').hide();
      $('div.more-response').load(link);
    });

});




$(document).ready(function(){
    $('.jcarousel').jcarousel({
        // Конфигурация инициализации
        //center : true
    });

    $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
    $('.jcarousel-next').jcarouselControl({ target: '+=1' });

});








$(document).ready(function(){
    $(window).scroll(function() {
        var vscroll = $(this).scrollTop();
        //console.log(vscroll);
        if ($(this).scrollTop() >= 190) {
            $('nav.second-nav').addClass("stickytop");
            //console.log('LARK');
        }
        else {
            $('nav.second-nav').removeClass("stickytop");
        }
    });
})

//$(document).ready(function() {
//          jQuery("a").fancybox({
//            'translationIn'  : 'fade',
//            'translationOut' : 'elastic',
//            'speedIn'        : 600,
//            'speedOut'       : 200,
//            'overlayShow'    : true
//
//          });
//});



$(document).ready(function() {
            /*
             *  Simple image gallery. Uses default settings
             */

            $('.fancybox').fancybox({
                'margin' : 5,
                'padding' : 2
            });

            /*
             *  Different effects
             */

            // Change title type, overlay closing speed
            $(".fancybox-effects-a").fancybox({
                helpers: {
                    title : {
                        type : 'outside'
                    },
                    overlay : {
                        speedOut : 0
                    }
                }
            });

            // Disable opening and closing animations, change title type
            $(".fancybox-effects-b").fancybox({
                openEffect  : 'none',
                closeEffect : 'none',

                helpers : {
                    title : {
                        type : 'over'
                    }
                }
            });

            // Set custom style, close if clicked, change title type and overlay color
            $(".fancybox-effects-c").fancybox({
                wrapCSS    : 'fancybox-custom',
                closeClick : true,

                openEffect : 'none',

                helpers : {
                    title : {
                        type : 'inside'
                    },
                    overlay : {
                        css : {
                            'background' : 'rgba(238,238,238,0.85)'
                        }
                    }
                }
            });

            // Remove padding, set opening and closing animations, close if clicked and disable overlay
            $(".fancybox-effects-d").fancybox({
                padding: 0,

                openEffect : 'elastic',
                openSpeed  : 150,

                closeEffect : 'elastic',
                closeSpeed  : 150,

                closeClick : true,

                helpers : {
                    overlay : null
                }
            });

            /*
             *  Button helper. Disable animations, hide close button, change title type and content
             */

            $('.fancybox-buttons').fancybox({
                openEffect  : 'none',
                closeEffect : 'none',

                prevEffect : 'none',
                nextEffect : 'none',

                closeBtn  : false,

                helpers : {
                    title : {
                        type : 'inside'
                    },
                    buttons : {}
                },

                afterLoad : function() {
                    this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
                }
            });


            /*
             *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
             */

            $('.fancybox-thumbs').fancybox({
                prevEffect : 'none',
                nextEffect : 'none',

                closeBtn  : false,
                arrows    : false,
                nextClick : true,

                helpers : {
                    thumbs : {
                        width  : 50,
                        height : 50
                    }
                }
            });

            /*
             *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
            */
            $('.fancybox-media')
                .attr('rel', 'media-gallery')
                .fancybox({
                    openEffect : 'none',
                    closeEffect : 'none',
                    prevEffect : 'none',
                    nextEffect : 'none',

                    arrows : false,
                    helpers : {
                        media : {},
                        buttons : {}
                    }
                });

            /*
             *  Open manually
             */

            $("#fancybox-manual-a").click(function() {
                $.fancybox.open('1_b.jpg');
            });

            $("#fancybox-manual-b").click(function() {
                $.fancybox.open({
                    href : 'iframe.html',
                    type : 'iframe',
                    padding : 5
                });
            });

            $("#fancybox-manual-c").click(function() {
                $.fancybox.open([
                    {
                        href : '1_b.jpg',
                        title : 'My title'
                    }, {
                        href : '2_b.jpg',
                        title : '2nd title'
                    }, {
                        href : '3_b.jpg'
                    }
                ], {
                    helpers : {
                        thumbs : {
                            width: 75,
                            height: 50
                        }
                    }
                });
            });


        });
    