//Action types
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT';

//Action creators
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const changeMessageTextCreator = (messageText) => ({
    type: CHANGE_MESSAGE_TEXT,
    messageText,
});

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
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            const newMessage = {
                id: Math.ceil(Math.random() * 1000),
                message: state.newMessageText,
            };
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};
        }
        case CHANGE_MESSAGE_TEXT: {
            return {...state, newMessageText: action.messageText};
        }
        default: {
            return state;
        }
    }
};

export default dialogsReducer;