import React from 'react';
import {addPostCreator, changePostTextCreator, deletePostCreator} from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({posts, dispatch, newPostText}) => {

    const changeTextAreaValue = (e) => {
        const value = e.target.value;
        dispatch(changePostTextCreator(value));
    };

    const handleAddPost = () => {
        dispatch(addPostCreator());
    };

    const deletePost = (postId) => {
        dispatch(deletePostCreator(postId));
    };

    return (
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     updatePostText={changeTextAreaValue}
                     addPost={handleAddPost}
                     deletePost={deletePost}/>
    );
};

export default MyPostsContainer;