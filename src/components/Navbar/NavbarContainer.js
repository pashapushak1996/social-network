import Navbar from './Navbar';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        users: state.sideBar.users,
    };
};

export default connect(mapStateToProps, {})(Navbar);