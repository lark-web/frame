// для страницы Родничок

widgetOptions = {
        token: '648AC3CC-982B-46E1-805B-CFEDF3F8BD35',
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