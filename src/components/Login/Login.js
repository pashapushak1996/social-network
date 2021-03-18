import React from "react";
import styles from './Login.module.css'
import LoginReduxForm from "./LoginReduxForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const Hello = ({login, password, rememberMe}) => {
        props.loginThunkCreator(login, password, rememberMe);
    }
    return (
        props.isAuth ? <Redirect to={ `/profile` }/>
            : <div className={ styles.formContainer }>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={ Hello }/>
            </div>)

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {loginThunkCreator})(Login);