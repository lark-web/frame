// для страницы Приморский

   var widgetOptions = {
        token: '4DBE3152-9CC5-41E2-9324-8F8F9A2C9292',
        //css: 'http://pms.frontdesk24.ru/BookingWidgetFront/styles/default.css',
        css: 'http://ug-service.info/frontdesk24.css', 
        target: 'search-widget-primorski',
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