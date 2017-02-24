widgetOptions = {
        token: '5AC2A793-9873-4D05-8D65-92197C328F18',
        css: 'http://ug-service.info/frontdesk24.css',
        target: 'search-widget-yug',
	language: 'ru',
        popupHeader: 'Отель "Южная ночь"',
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