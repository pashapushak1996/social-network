const ADD_FRIEND = `ADD_FRIEND`;

const initialState = {
    followedUsers: [
        {
            name: `Max`,
            photo: 'https://freesvg.org/img/abstract-user-flat-4.png',
        },
        {
            name: `John`,
            photo: 'https://freesvg.org/img/abstract-user-flat-4.png',
        },
        {
            name: `Ivy`,
            photo: 'https://freesvg.org/img/abstract-user-flat-4.png',
        },
    ],
};


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default sidebarReducer;