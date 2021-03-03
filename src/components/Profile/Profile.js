import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state,dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}
                     dispatch={dispatch}
                     newPostText={state.newPostMessage}/>
        </div>
    );
}

export default Profile;