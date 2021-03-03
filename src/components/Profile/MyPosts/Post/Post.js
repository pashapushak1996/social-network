import React from "react";
import styles from "./Post.module.css";
import userImage from '../../../../assets/images/userPhoto.jpg'
import {deletePostCreator} from "../../../../redux/reducers/profile-reducer";

export const Post = ({message, likesCount, dispatch, id}) => {

    const onDeletePost = () => {
        dispatch(deletePostCreator(id))
    }
    return (
        <div className={styles.item}>
            <img src={userImage} alt=""/>
            <span>{message}</span>
            <div>
                <span className={styles.likes}>likes: {likesCount}</span>
            </div>
            <button onClick={onDeletePost}>Delete post</button>
        </div>
    );
}

