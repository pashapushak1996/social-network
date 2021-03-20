import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import {formElement} from "../../common/FormsControls/FormsControls";

let maxLength200 = maxLength(200);
const TextArea = formElement("textarea");

const AddPostForm = (props) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field placeholder={ `Enter your post` }
                   component={ TextArea }
                   name={ `postText` }
                   validate={ [required, maxLength200] }/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const MyPostsReduxForm = reduxForm({
    form: 'posts',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('posts'))
})(AddPostForm);

export default MyPostsReduxForm;