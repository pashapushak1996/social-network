import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const DELETE_POST = "DELETE_POST";
const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";


export const addPostCreator = () => ({type: ADD_POST});
export const changePostTextCreator = (postText) => ({type: CHANGE_POST_TEXT, postText});
export const deletePostCreator = (postId) => ({type: DELETE_POST, postId});
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const changeMessageTextCreator = (messageText) => ({type: CHANGE_MESSAGE_TEXT, messageText})

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: `I am a hero`, likesCount: 20},
                {id: 2, message: `I love you Masha`, likesCount: 20},
                {id: 3, message: `i am a programmer`, likesCount: 20},
                {id: 4, message: `It New`, likesCount: 20},
                {id: 5, message: `Yo yo yo motherfucker`, likesCount: 20}],
            newPostMessage: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sideBar: [
            {
                name: `Max`,
                photo: "https://freesvg.org/img/abstract-user-flat-4.png"
            },
            {
                name: `John`,
                photo: "https://freesvg.org/img/abstract-user-flat-4.png"
            },
            {
                name: `Ivy`,
                photo: "https://freesvg.org/img/abstract-user-flat-4.png"
            }
        ]
    },
    _subscriber() {
        console.log(`no subscribers (observers)`)
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        this._subscriber();
    }
};

window.store = store;


export default store;






