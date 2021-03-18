//Action types
import {profileService} from "../../services/profile-service";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_USER_STATUS = 'SET_USER_STATUS';

//Action creators
export const addPostCreator = (postText) => ({type: ADD_POST, postText});
export const deletePostCreator = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

const initialState = {
    posts: [
        {id: 1, message: `I am a hero`, likesCount: 20},
        {id: 2, message: `I love you Masha`, likesCount: 20},
        {id: 3, message: `i am a programmer`, likesCount: 20},
        {id: 4, message: `It New`, likesCount: 20},
        {id: 5, message: `Yo yo yo motherfucker`, likesCount: 20}],
    profile: null,
    status: null,
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : {
            if (action.postText.length === 0) {
                return state
            }
            const newPost = {
                id: Math.ceil(Math.random() * 1000),
                message: action.postText,
                likesCount: Math.ceil(Math.random() * 1000),
            };
            return {...state, posts: [...state.posts, newPost]};
        }
        case DELETE_POST : {
            return {...state, posts: state.posts.filter((post) => post.id !== action.postId)};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default : {
            return state;
        }
    }
};


export const getProfileThunkCreator = (id) => (dispatch) => {
    profileService.getUserProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};

export const getProfileStatusThunkCreator = (id) => (dispatch) => {
    profileService.getUserStatus(id)
        .then(data => {
            dispatch(setUserStatus(data.data));
        });
};

export const updateProfileStatus = (status) => (dispatch) => {
    profileService.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        }
    );
};

export default profileReducer;