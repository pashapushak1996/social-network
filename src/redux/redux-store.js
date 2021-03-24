import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from "./reducers/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import musicReducer from "./reducers/music-reducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    musicPage: musicReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;

export default store;