import React from "react";
import profilePhoto from "../../../assets/images/ProfileImage.svg";

const ProfilePhoto = ({profile, isOwner, savePhoto}) => {


    const onMainPhotoChange = (e) => {
        const photo = e.target.files[0];
        savePhoto(photo);
    };

    return (<div>
            <img src={ !profile.photos.large ? profilePhoto : profile.photos.large } alt=""/>
            <div>
                { isOwner && <input type={ `file` }
                                    name={ `userPhoto` }
                                    onChange={ (e) => onMainPhotoChange(e) }/> }
            </div>
        </div>
    );
};

export default ProfilePhoto;