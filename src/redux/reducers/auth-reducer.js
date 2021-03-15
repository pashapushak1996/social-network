import {authService} from "../../services/auth-service";

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
                isAuth: true
            }
        }
        default :
            return state;
    }
};

export const setAuthData = (userId, login, email) => ({type: SET_AUTH_DATA, data: {userId, login, email}});

//THUNK CREATORS

export const setAuthDataThunkCreator = () => (dispatch) => {
    authService.getAuthData()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthData(id, login, email));
            }
        });
};


export default authReducer;