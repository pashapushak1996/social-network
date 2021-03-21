import Navbar from './Navbar';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        followedUsers: state.sideBar.followedUsers,
    };
};

export default connect(mapStateToProps, {})(Navbar);