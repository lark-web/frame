// для страницы Исидор

    widgetOptions = {
        token: '3EEB66E7-F189-4553-8B7A-0D3D29A50033',
        css: 'http://ug-service.info/frontdesk24.css',
        target: 'search-widget-isidor',
    language: 'ru',
        popupHeader: 'Отель "Исидор"',
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