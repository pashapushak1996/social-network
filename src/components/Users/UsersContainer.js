import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setUsersAC, unfollowAC} from '../../redux/reducers/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);