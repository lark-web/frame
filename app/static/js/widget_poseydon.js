widgetOptions = {
        token: '45E87E85-E82B-491F-A39F-C376DF50D4DD',
        css: 'http://ug-service.info/frontdesk24.css',
        target: 'search-widget-poseydon',
	language: 'ru',
        popupHeader: 'Отель "Посейдон"',
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