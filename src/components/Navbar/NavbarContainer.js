import Navbar from './Navbar';
import {connect} from 'react-redux';
import {getFollowedUser} from "../../redux/selectors/users-selectors";
import {getIsAuth} from "../../redux/selectors/auth-selectors";


const mapStateToProps = (state) => {
    return {
        followedUsers: getFollowedUser(state),
        isAuth: getIsAuth(state)
    };
};

export default connect(mapStateToProps, {})(Navbar);