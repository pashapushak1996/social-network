import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthData} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data;
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