import {authService} from "../../services/auth-service";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state, captchaURL: action.captcha
            }
        }
        default :
            return state;
    }
};

const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha});

export const setAuthData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_DATA,
    data: {userId, login, email, isAuth}
});

//THUNK CREATORS

export const setAuthDataThunkCreator = () => async (dispatch) => {
    const data = await authService.getAuthData();
    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthData(id, login, email, true));
    }
};

const getCaptcha = () => async (dispatch) => {
    const {url} = await authService.getCaptcha();
    dispatch(setCaptcha(url));
};

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    const {resultCode, messages} = await authService.login(email, password, rememberMe, captcha);
    if (resultCode === 0) dispatch(setAuthDataThunkCreator());
    if (resultCode === 10) dispatch(getCaptcha());
    if (resultCode === 1) dispatch(stopSubmit("login", {_error: messages[0]}));
};

export const logoutThunk = () => async (dispatch) => {
    const res = await authService.logout();
    if (res.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }

};


export default authReducer;