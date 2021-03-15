//Action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

//Action creators

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId
})

const initialState = {
    users: [],
    totalCount: null,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
                })
            };
        }
        case UNFOLLOW : {
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false,};
                    }
                    return user;
                })
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
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export default usersReducer;