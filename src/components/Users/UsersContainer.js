import {connect} from 'react-redux';
import Users from './Users';
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
} from '../../redux/reducers/users-reducer';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);