//Функція маппінгу користувачів і замінювання в них властивостів

export const updateObjectInArray = (items, objProp, itemId, objPropToReplace) => {
    return items.map((obj) => {
        if (obj[objProp] === itemId) {
            return {...obj, ...objPropToReplace};
        }
        return obj;
    });
};

//Функція обробки строки помилки з серверу
export const errorMessageToForm = (string) => {
    const strings = string.split('->')
    return strings[1].slice(0, -1).toLowerCase();
};


