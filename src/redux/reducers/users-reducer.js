//Action types
import {usersService} from "../../services/users-service";
import {updateObjectInArray} from "../../utils/helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

//Action creators

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
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
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users:
                    updateObjectInArray(state.users, "id", action.userId, {followed: true})
            };
        }
        case UNFOLLOW : {
            return {
                ...state, users:
                    updateObjectInArray(state.users, "id", action.userId, {followed: false})
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

//THUNK CREATORS


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersService.getUsers(currentPage, pageSize);
    dispatch(setUsersTotalCount(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(setIsFetching(false));
};

//Функція логіки follow і unfollow thunk creator, заміна двох функцій щоб використати одну цю, рефакторинг

const followUnfollowFlow = async (dispatch, userId, toggleFollowingInProgress, actionCreator, apiMethod) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const followUserThunkCreator = (userId) => async (dispatch) => {
    const apiMethod = usersService.followUser.bind(usersService);
    followUnfollowFlow(dispatch, userId, toggleFollowingInProgress, followSuccess, apiMethod);
};

export const unfollowUserThunkCreator = (userId) => async (dispatch) => {
    const apiMethod = usersService.unfollowUser.bind(usersService);
    followUnfollowFlow(dispatch, userId, toggleFollowingInProgress, unfollowSuccess, apiMethod);
};

export default usersReducer;