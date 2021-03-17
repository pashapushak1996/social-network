import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {updateProfileStatus} from "../../redux/reducers/profile-reducer";


const Profile = ({profile, status, updateProfileStatus}) => {

    return (
        <div>
            <ProfileInfo profile={ profile } status={ status } updateProfileStatus={ updateProfileStatus }/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;