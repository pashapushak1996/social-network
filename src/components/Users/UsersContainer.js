import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsersTotalCount,
    setUsers,
    unfollow,
} from '../../redux/reducers/users-reducer';
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length !== 0) {
            this.props.setIsFetching(false);
            return
        }
        this.props.setIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(res => {
                debugger;
                this.props.setUsersTotalCount(res.data.totalCount);
                this.props.setUsers(res.data.items);
                this.props.setIsFetching(false);
            });
    };


    switchCurrentPage = (page) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setIsFetching(false);
            });
    };

    render() {
        return this.props.isFetching ? <Preloader/> : <Users
            users={ this.props.users }
            followUser={ this.props.follow }
            unfollowUser={ this.props.unfollow }
            switchCurrentPage={ this.switchCurrentPage }
            currentPage={ this.props.currentPage }
            totalCount={ this.props.totalCount }
            pageSize={ this.props.pageSize }/>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
    setIsFetching
})(UsersAPIComponent);

export default UserContainer;