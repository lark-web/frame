// загрузка динамимически загружаемых страниц для Византии

$(document).ready(function(){
    var hotel = $('ul.smenu').attr('id');
    link_default = 'block_'+ hotel +'_about' +'.html';
    //alert(link_default);
    $('#loadcontent').load('block_visantia_about.html');
    $('.map-wrap').hide();
    //$('.form-back-window').hide();
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
        //if (linkname == 'response'){
        //    $('.form-back-window').show();
        //}else{
        //    $('.form-back-window').hide();
        //}
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
