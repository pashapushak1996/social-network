//Action types
const ADD_MESSAGE = 'ADD_MESSAGE';

//Action creators
export const addMessageCreator = (message) => ({type: ADD_MESSAGE, message});


const initialState = {
    dialogs: [
        {id: 1, name: `John`},
        {id: 2, name: `Max`},
        {id: 3, name: `Andrew`},
        {id: 4, name: `Ivan`},
        {id: 5, name: `Pavlo`}],
    messages: [
        {id: 1, message: `Hello, my name is John`},
        {id: 2, message: `Hello, my first job is a programmer`},
        {id: 3, message: `I really like you?`},
        {id: 4, message: `You love me Masha?`},
        {id: 5, message: `Yes, of course`}],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            const newMessage = {
                id: Math.ceil(Math.random() * 1000),
                message: action.message,
            };
            return {...state, messages: [...state.messages, newMessage],};
        }

        default: {
            return state;
        }
    }
};

export default dialogsReducer;