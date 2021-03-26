import React from "react";
import Contact from "../Contacts";


const ProfileData = ({profile, isOwner, goToEditMode}) => {

    const {aboutMe, contacts, fullName, lookingForAJob, lookingForAJobDescription} = profile;

    return (
        <div>
            <div>
                <h3>{ fullName }</h3>
            </div>
            <div>
                <b>About me: </b>
                <span>
                    { aboutMe }
                </span>
            </div>
            <div>
                <b>Looking for a job: </b>
                <span>
                    { lookingForAJob ? "yes" : "no" }
                </span>
            </div>
            <div>
                <b>My professional skills: </b>
                <span>
                    { lookingForAJobDescription }
                </span>
            </div>
            <div>
                <b>Contacts: </b>
                { Object.keys(contacts).map((key) => <Contact key={ key } contactValue={ contacts[key] }
                                                              contactTitle={ key }/>) }
            </div>
            { isOwner && <button onClick={ goToEditMode }>Edit profile</button> }
        </div>
    );
};

export default ProfileData;