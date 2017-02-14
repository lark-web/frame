// для страницы Византия

   var widgetOptions = {
        token: 'C584BE97-A4BE-4D53-99DF-4625FB00742D',
        //css: 'http://pms.frontdesk24.ru/BookingWidgetFront/styles/default.css',
        css: 'http://ug-service.info/frontdesk24.css', 
        target: 'search-widget-visantia',
        language: 'ru',
        popupHeader: 'Отель "Византия"',
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