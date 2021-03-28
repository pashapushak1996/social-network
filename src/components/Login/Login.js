import React from "react";
import styles from './Login.module.css'
import LoginReduxForm from "./LoginReduxForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../redux/selectors/auth-selectors";


const Login = (props) => {
    const login = ({email, password, rememberMe, captcha}) => {
        props.loginThunkCreator(email, password, rememberMe, captcha);
    };
    return (
        props.isAuth ? <Redirect to={ `/profile` }/>
            : <div className={ styles.formContainer }>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={ login } captchaURL={ props.captchaURL }/>
            </div>)

};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaURL: state.auth.captchaURL
});


export default connect(mapStateToProps, {loginThunkCreator})(Login);