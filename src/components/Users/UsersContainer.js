import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setErrorMessage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow,
} from '../../redux/reducers/users-reducer';
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersService} from "../../services/users-service";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length !== 0) {
            return
        }
        this.props.setIsFetching(true);
        usersService.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.setUsersTotalCount(data.totalCount);
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            });
    };


    switchCurrentPage = (page) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
       usersService.getUsers(page,this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            });
    };

    render() {
        return this.props.isFetching ? <Preloader/> : <Users
            errorMessage={ this.props.errorMessage }
            users={ this.props.users }
            followUser={ this.props.follow }
            unfollowUser={ this.props.unfollow }
            switchCurrentPage={ this.switchCurrentPage }
            currentPage={ this.props.currentPage }
            totalCount={ this.props.totalCount }
            pageSize={ this.props.pageSize }
            setErrorMessage={ this.props.setErrorMessage }/>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        errorMessage: state.usersPage.errorMessage
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setIsFetching,
    setErrorMessage
})(UsersAPIComponent);

export default UserContainer;