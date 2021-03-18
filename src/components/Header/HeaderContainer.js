import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk, setAuthDataThunkCreator} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthDataThunkCreator();
    }

    render() {
        return <Header { ...this.props }/>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    setAuthDataThunkCreator,
    logoutThunk
})(HeaderContainer);