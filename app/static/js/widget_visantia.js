// для страницы Византия



    var widgetOptions = {
        token: 'C584BE97-A4BE-4D53-99DF-4625FB00742D',
        css: 'http://ug-service.info/frontdesk24.css',
        target: 'search-widget-visantia',
        language: 'ru',
        popupHeader: 'Отель "Византия"',
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