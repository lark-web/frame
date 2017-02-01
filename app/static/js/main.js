
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
    'auto' : 'true'
  });
});

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



// загрузка страниц для Византии

$(document).ready(function(){
    var hotel = $('ul.smenu').attr('id');
    link_default = 'block_'+ hotel +'_about' +'.html';
    //alert(link_default);
    $('#loadcontent').load('block_visantia_about.html');
    $('.map-wrap').hide();
    $('.form-back-window').hide();
    //$('.room-desc').hide();
    $('ul.smenu li').click(function(){
        var linkname = $(this).attr('class');
        //alert(linkname);
        var idname = $('ul.smenu').attr('id');
        //alert(idname);
        if (linkname == 'contacts'){
            $('.map-wrap').show();
        }else{
            $('.map-wrap').hide();
        }
        if (linkname == 'response'){
            $('.form-back-window').show();
        }else{
            $('.form-back-window').hide();
        }
        if (linkname == 'rooms'){
            $('.room-desc').show();
        }else{
            //$('.room-desc').hide();
        }
        var link = 'block_'+ idname +'_'+ linkname +'.html';
        //alert(link);
        //$('#loadcontent').load(link);
        //console.log(this);
        //$test = $('ul.smenu li').children('a').removeClass('active');
        //console.log($test);
        //$(this).children('a').addClass('active');
    });




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
        if ($(this).scrollTop() >= 90) {
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

            $('.fancybox').fancybox();

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
    