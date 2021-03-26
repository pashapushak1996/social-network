import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";


const ProfileInfo = ({profile, isOwner, status, updateProfileStatus, savePhoto, updateProfileData}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onProfileDataSave = (data) => {
        updateProfileData(data);
        setEditMode(false);
    }

    return (
        <div>
            <div>
                <img src={ `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg` } alt=""/>
            </div>
            <div className={ styles.descriptionBlock }>
                <ProfilePhoto profile={ profile } isOwner={ isOwner } savePhoto={ savePhoto }/>
                { !editMode ?
                    <ProfileData profile={ profile } isOwner={ isOwner }
                                 goToEditMode={ () => {
                                     setEditMode(true)
                                 } }/>
                    : <ProfileDataForm profile={ profile } initialValues={ profile } onSubmit={ onProfileDataSave }/>
                }
                <div>
                    <ProfileStatus status={ status } updateProfileStatus={ updateProfileStatus }/>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;

