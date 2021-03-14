//Action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

//Action creators

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setErrorMessage = (error) => ({type: SET_ERROR_MESSAGE, error});

const initialState = {
    users: [],
    totalCount: null,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    errorMessage: '',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            };
        }
        case UNFOLLOW : {
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state, users: action.users,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.page,
            };
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.totalCount,
            };
        }
        case SET_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state, errorMessage: action.error
            }
        }
        default:
            return state;
    }
};

export default usersReducer;