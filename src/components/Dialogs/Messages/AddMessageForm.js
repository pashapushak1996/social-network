import React from 'react';
import {Field, reduxForm, reset} from "redux-form";


const AddMessageForm = (props) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field placeholder={ `Enter your message` } component={ `textarea` } name={ `messageText` }/>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>;
};

export default reduxForm({
    form: 'messages',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('messages'))
})(AddMessageForm);