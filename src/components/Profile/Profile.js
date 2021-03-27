import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = ({profile, status, updateProfileStatus, isOwner, savePhoto, updateProfileData}) => {

    return (
        <div>
            <ProfileInfo updateProfileData={ updateProfileData } isOwner={ isOwner } profile={ profile }
                         status={ status }
                         updateProfileStatus={ updateProfileStatus } savePhoto={ savePhoto }/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;