//Функція маппінгу користувачів і замінювання в них властивостів

export const updateObjectInArray = (items, objProp, itemId, objPropToReplace) => {
    return items.map((obj) => {
        if (obj[objProp] === itemId) {
            return {...obj, ...objPropToReplace};
        }
        return obj;
    });
};


