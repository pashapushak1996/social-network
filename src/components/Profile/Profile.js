import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({state,dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={state.posts}
                     dispatch={dispatch}
                     newPostText={state.newPostMessage}/>
        </div>
    );
}

export default Profile;