import {combineReducers, createStore} from 'redux';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import sidebarReducer from './reducers/sidebar-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from "./reducers/auth-reducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
const store = createStore(rootReducer);
window.store = store;

export default store;