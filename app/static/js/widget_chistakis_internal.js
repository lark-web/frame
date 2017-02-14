
// для страницы Христакис
   var widgetOptions = {
        token: '432CFA38-34F6-4FF1-8C1D-59199908AE41',
        //css: 'http://pms.frontdesk24.ru/BookingWidgetFront/styles/default.css',
        css: 'http://ug-service.info/frontdesk24.css', 
        target: 'search-widget-chistakis',
        language: 'ru',
        popupHeader: 'Христакис',
        maxAdults: 10,
        widget_width: 928,
        //widget_width: 350,
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