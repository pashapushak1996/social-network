//Action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

//Action creators

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsFetchingAC = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

const initialState = {
    users: [],
    totalCount: null,
    pageSize: 100,
    currentPage: 1,
    isFetching: false
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
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.totalCount,
            };
        }
        case SET_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export default usersReducer;