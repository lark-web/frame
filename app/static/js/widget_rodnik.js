// для страницы Родничок

widgetOptions = {
        token: '4DBE3152-9CC5-41E2-9324-8F8F9A2C9292',
        css: 'http://ug-service.info/frontdesk24.css',
        target: 'search-widget-rodnik',
    language: 'ru',
        popupHeader: 'Отель "Родничок"',
        maxAdults: 10,
        widget_width: 928,
        align: 'left',
        showGuestsCount: true,
        showChildren: true,
        minAge: 1,
        maxAge: 17,
        method: 'popup',
        showAllIfNotExists: true, 
        usePaygate: false,
        defLength: 1,
        defAdults: 2,
        alwaysShowTariff: false,
        expanded: false,
        showHours: false,
        buttonText: 'Проверить наличие',
        periodText: 'Выберите дату',
        allowOverbooking: false,
        emailRequired: false,
        //card: true,
        
    };


    createWidget(widgetOptions);