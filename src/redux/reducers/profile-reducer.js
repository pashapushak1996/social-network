//Action types
const ADD_POST = "ADD_POST";
const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const DELETE_POST = "DELETE_POST";

//Action creators
export const addPostCreator = () => ({type: ADD_POST});
export const changePostTextCreator = (postText) => ({type: CHANGE_POST_TEXT, postText});
export const deletePostCreator = (postId) => ({type: DELETE_POST, postId});

const initialState = {
    posts: [
        {id: 1, message: `I am a hero`, likesCount: 20},
        {id: 2, message: `I love you Masha`, likesCount: 20},
        {id: 3, message: `i am a programmer`, likesCount: 20},
        {id: 4, message: `It New`, likesCount: 20},
        {id: 5, message: `Yo yo yo motherfucker`, likesCount: 20}],
    newPostMessage: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            if (state.newPostMessage.length <= 0) {
                return
            }
            const newPost = {
                id: Math.ceil(Math.random() * 1000),
                message: state.newPostMessage,
                likesCount: Math.ceil(Math.random() * 1000)
            };
            state.posts.push(newPost);
            state.newPostMessage = "";
            return state
        }
        case CHANGE_POST_TEXT: {

            state.newPostMessage = action.postText;
            return state
        }
        case DELETE_POST : {

            state.posts = state.posts.filter((post) => post.id !== action.postId);
            return state;
        }
        default : {
            return state
        }
    }
}

export default profileReducer;