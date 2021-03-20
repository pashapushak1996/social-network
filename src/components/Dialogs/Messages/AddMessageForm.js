import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import {formElement} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators";

const textarea = formElement("textarea");
const maxLength300 = maxLength(300);

const AddMessageForm = (props) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field placeholder={ `Enter your message` } component={ formElement("textarea") } name={ `messageText` } validate={[required,maxLength300]}/>
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