import {authService} from "../../services/auth-service";
import {profileService} from "../../services/profile-service";
import {getProfileThunkCreator} from "./profile-reducer";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        }
        default :
            return state;
    }
};

export const setAuthData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_DATA,
    data: {userId, login, email},
    isAuth
});

//THUNK CREATORS

export const setAuthDataThunkCreator = () => (dispatch) => {
    authService.getAuthData()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthData(id, login, email, true));
            }
        });
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authService.login(email, password, rememberMe).then(res => {
        dispatch(setAuthDataThunkCreator())
    });
};

export const logoutThunk = () => (dispatch) => {
    authService.logout().then(res => {
        if (res.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false));
        }
    })
}


export default authReducer;