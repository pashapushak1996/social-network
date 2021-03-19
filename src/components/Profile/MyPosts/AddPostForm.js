import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators";

let maxLength20 = maxLength(20);

const AddPostForm = (props) => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field placeholder={ `Enter your post` }
                   component={ Textarea }
                   name={ `postText` }
                   validate={ [required, maxLength20] }/>
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