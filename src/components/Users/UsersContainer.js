import {connect} from 'react-redux';
import {
    followUserThunkCreator,
    getUsersThunkCreator, setCurrentPage,
    unfollowUserThunkCreator,
} from '../../redux/reducers/users-reducer';
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length !== 0) {
            return
        }
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    };


    switchCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    };

    render() {
        return this.props.isFetching ? <Preloader/> : <Users
            users={ this.props.users }
            followUserThunk={ this.props.followUserThunkCreator }
            unfollowUserThunk={ this.props.unfollowUserThunkCreator }
            switchCurrentPage={ this.switchCurrentPage }
            currentPage={ this.props.currentPage }
            totalCount={ this.props.totalCount }
            pageSize={ this.props.pageSize }
            followingInProgress={ this.props.followingInProgress }/>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    setCurrentPage
})(UsersAPIComponent);

export default UserContainer;