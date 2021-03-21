const ADD_FRIEND = `ADD_FRIEND`;

const addFriend = (userId) => ({type: ADD_FRIEND, userId});

const initialState = {
    followedUsersId: [],
    followedUsers: []
};


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND: {
            return {
                ...state, followedUsersId: [...state.followedUsers, action.userId]
            }
        }
        default:
            return state;
    }
};



export default sidebarReducer;