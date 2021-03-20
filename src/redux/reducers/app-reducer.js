//Action types

import {setAuthDataThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

//Action creators

const initializedSuccess = (isInit) => ({type: INITIALIZED_SUCCESS, isInit});

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;

    }
};

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(setAuthDataThunkCreator());
    Promise.all([promise]).then(() =>
        dispatch(initializedSuccess())
    );
}

export default appReducer;