import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/reducers/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/selectors/auth-selectors";

class HeaderContainer extends React.Component {

    render() {
        return <Header { ...this.props }/>
    }
}

const mapStateToProps = (state) => ({
    login: getLogin(state),
    isAuth: getIsAuth(state)
});

export default connect(mapStateToProps, {
    logoutThunk
})(HeaderContainer);