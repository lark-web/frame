// для страницы Исидор

   var widgetOptions = {
        token: '3EEB66E7-F189-4553-8B7A-0D3D29A50033',
        //css: 'http://pms.frontdesk24.ru/BookingWidgetFront/styles/default.css',
        css: 'http://ug-service.info/frontdesk24.css', 
        target: 'search-widget-isidor',
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