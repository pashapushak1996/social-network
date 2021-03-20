import {Field, reduxForm} from "redux-form";
import styles from './Login.module.css';
import classes from '../common/FormsControls/FormControls.module.css'
import {required} from "../../utils/validators";
import {formElement} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";

const input = formElement('input');

const LoginForm = (props) => {

    return (
        <form onSubmit={ props.handleSubmit } className={ styles.form }>
            <div className={ styles.item }>
                <Field type="text" component={ input } name={ `email` } placeholder={ 'email' }
                       validate={ [required] }/>
            </div>
            <div className={ styles.item }>
                <Field type="password" component={ input } name={ `password` } placeholder={ 'password' }
                       validate={ [required] }/>
            </div>
            <div className={ styles.item }>
                <Field type="checkbox" component={ `input` } name={ `rememberMe` }/>
                <span>remember me</span>
            </div>
            { props.captchaURL > 0 && <div>
                <Field type={ 'text' } component={ `input` } name={ `captcha` }/>
            </div> }
            <div className={ styles.btn }>
                <button>Sign in</button>
            </div>
            <div className={classes.formSummaryError}>
                    {props.error && props.error }
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL
});

const connectedLoginReduxForm = connect(mapStateToProps, {})(LoginReduxForm);


export default connectedLoginReduxForm;