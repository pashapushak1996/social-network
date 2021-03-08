import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from './Post/Post';

const MyPosts = ({posts, newPostText, addPost, updatePostText, deletePost}) => {


    const postDataElement = posts.map((post) => <Post
            deletePost={deletePost}
            id={post.id}
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}/>);

    const updatePostValue = (e) => {
        const value = e.target.value;
        updatePostText(value);
    };

    const handleAddPost = () => {
        addPost();
    };

    return (
            <div className={styles.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                    <textarea placeholder={`New post message`}
                              value={newPostText}
                              onChange={(e) => updatePostValue(e)}/>
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
};

export default MyPosts;