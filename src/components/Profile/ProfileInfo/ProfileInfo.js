import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhoto from '../../../assets/images/ProfileImage.svg'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile, status, updateProfileStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={ `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg` } alt=""/>
            </div>
            <div className={ styles.descriptionBlock }>
                <div>
                    <img src={ !profile.photos.large ? profilePhoto : profile.photos.large } alt=""/>
                </div>
                <div>
                    <h3>{ profile.fullName }</h3>
                </div>
                <div>
                    <ProfileStatus status={ status } updateProfileStatus={ updateProfileStatus }/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

