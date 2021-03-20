import React from "react";
import styles from './Login.module.css'
import LoginReduxForm from "./LoginReduxForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const Hello = ({email, password, rememberMe, captcha}) => {
        props.loginThunkCreator(email, password, rememberMe, captcha);
    }
    console.log(props);
    return (
        props.isAuth ? <Redirect to={ `/profile` }/>
            : <div className={ styles.formContainer }>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={ Hello }/>
                { props.captchaURL && <img src={ props.captchaURL } alt=""/> }
            </div>)

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
});


export default connect(mapStateToProps, {loginThunkCreator})(Login);