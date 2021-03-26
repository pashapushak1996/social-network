import React from "react";
import Contact from "../Contacts";
import {Field, reduxForm} from "redux-form";
import {formElement} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators";

const ProfileDataForm = (props) => {

    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <b>Name: </b>
                <div>
                    <Field name={ 'fullName' } component={ formElement('input') } placeholder={ 'Full name' }
                           validate={ [required] }/>
                </div>
            </div>
            <div>
                <b>About me: </b>
                <div>
                    <Field name={ 'aboutMe' } component={ formElement('input') } placeholder={ 'Type about you' }/>
                </div>

            </div>
            <div>
                <b>Looking for a job: </b>
                <Field name={ 'lookingForAJob' } component={ 'input' } type={ 'checkbox' }/>
            </div>
            <div>
                <b>My professional skills: </b>
                <div>
                    <Field name={ 'lookingForAJobDescription' } component={ formElement('textarea') }
                           placeholder={ 'Type your skills' }/>
                </div>

            </div>
            <div>
                <b>Contacts: </b>
                { Object.keys(props.profile.contacts).map((key) => <div key={ key }>
                    <b>{ key } :</b>
                    <Field name={ 'contacts.' + key } component={ 'input' } placeholder={ key }/>
                </div>) }
            </div>
            <button>Save</button>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm({
    form: 'profile'
})(ProfileDataForm);

export default ProfileDataReduxForm;