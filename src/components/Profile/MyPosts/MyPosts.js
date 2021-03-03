import React from "react";
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostCreator, changePostTextCreator} from "../../../redux/reducers/profile-reducer";

const MyPosts = ({posts, dispatch, newPostText}) => {

    const postDataElement = posts
        .map((post) => <Post
            dispatch={dispatch}
            id={post.id}
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}/>);

    const changeTextAreaValue = (value) => {
        dispatch(changePostTextCreator(value));
    };

    const handleAddPost = () => {
        dispatch(addPostCreator());
    };

    return (
        <div className={styles.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea placeholder={`New post message`}
                              value={newPostText}
                              onChange={({target: {value}}) => changeTextAreaValue(value)}/>
                </div>
                <div>
                    <button onClick={handleAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postDataElement}
            </div>
        </div>
    );
}

export default MyPosts;