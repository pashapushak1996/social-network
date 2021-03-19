import React from 'react';
import styles from './MyPosts.module.css';
import {Post} from './Post/Post';
import MyPostsForm from "./AddPostForm";

const MyPosts = (props) => {

    let {posts, deletePost} = props;

    const postDataElement = posts.map((post) => <Post
        deletePost={ deletePost }
        id={ post.id }
        key={ post.id }
        message={ post.message }
        likesCount={ post.likesCount }/>);


    const handleAddPost = ({postText}) => {
        props.addPost(postText);
    };


    return (
        <div className={ styles.postsBlock }>
            <h2>My posts</h2>
            <div>
                <MyPostsForm onSubmit={ handleAddPost }/>
            </div>
            <div className={ styles.posts }>
                { postDataElement }
            </div>
        </div>
    );
}

export default MyPosts;