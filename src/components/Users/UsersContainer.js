import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/reducers/users-reducer';
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(res => {
                this.props.setTotalCount(res.data.totalCount);
                this.props.setUsers(res.data.items);
            });
    };


    switchCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    };

    render() {
        return <Users
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
    };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UserContainer;