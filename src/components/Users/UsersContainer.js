import {connect} from 'react-redux';
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    unfollowUserThunkCreator,
} from '../../redux/reducers/users-reducer';
import React, {useEffect} from "react";
import Users from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/selectors/users-selectors";

const UsersAPIComponent = (props) => {

    useEffect(() => {
        if (props.users.length !== 0) {
            return
        }
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, []);

    const switchCurrentPage = (page) => {
        props.setCurrentPage(page);
        props.getUsersThunkCreator(page, props.pageSize)
    };

    return <Users
        isFetching={ props.isFetching }
        users={ props.users }
        followUserThunk={ props.followUserThunkCreator }
        unfollowUserThunk={ props.unfollowUserThunkCreator }
        switchCurrentPage={ switchCurrentPage }
        currentPage={ props.currentPage }
        totalCount={ props.totalCount }
        pageSize={ props.pageSize }
        followingInProgress={ props.followingInProgress }/>;

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(follow(id));
//         },
//         unfollow: (id) => {
//             dispatch(unfollow(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPage(page));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCount(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetching(isFetching));
//         }
//     };
// };


const UserContainer = connect(mapStateToProps, {
    followUserThunkCreator,
    unfollowUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
})(UsersAPIComponent);

export default UserContainer;