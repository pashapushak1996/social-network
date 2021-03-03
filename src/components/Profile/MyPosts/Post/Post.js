import React from "react";
import styles from "./Post.module.css";
import userImage from '../../../../assets/images/userPhoto.jpg'

export const Post = ({message, likesCount, id, deletePost}) => {

    const onDeletePost = () => {
        deletePost(id)
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

