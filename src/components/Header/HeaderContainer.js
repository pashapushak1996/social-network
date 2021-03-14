import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/reducers/auth-reducer";
import {authService} from "../../services/auth-service";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authService.getAuthData()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setAuthData(id, login, email);
                }
            })
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
    setAuthData
})(HeaderContainer);