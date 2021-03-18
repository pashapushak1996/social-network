import {Field, reduxForm} from "redux-form";
import styles from './Login.module.css';


const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={ styles.form }>
            <div className={ styles.item }>
                <Field type="text" component={ `input` } name={ `login` } placeholder={ 'login' }/>
            </div>
            <div className={ styles.item }>
                <Field type="text" component={ `input` } name={ `password` } placeholder={ 'password' }/>
            </div>
            <div className={ styles.item }>
                <Field type="checkbox" component={ `input` } name={ `rememberMe` }/>
                <span>remember me</span>
            </div>
            <div className={ styles.btn }>
                <button>Sign in</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;