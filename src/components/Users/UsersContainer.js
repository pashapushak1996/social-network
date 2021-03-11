import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/reducers/users-reducer';
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(res => {
                this.props.setTotalCount(res.data.totalCount);
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
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching));
        }
    };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UserContainer;