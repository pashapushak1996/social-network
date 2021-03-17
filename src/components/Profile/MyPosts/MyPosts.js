import React, {useState} from 'react';
import styles from './MyPosts.module.css';
import {Post} from './Post/Post';

const MyPosts = (props) => {
    let [postText, setPostText] = useState('');
    const updatePostValue = (e) => {
        setPostText(postText = e.target.value);
    };
    const handleAddPost = () => {
        props.addPost(postText);
        setPostText(postText = '');
    };

    let {posts, deletePost} = props;
    const postDataElement = posts.map((post) => <Post
        deletePost={ deletePost }
        id={ post.id }
        key={ post.id }
        message={ post.message }
        likesCount={ post.likesCount }/>);

    return (
        <div className={ styles.postsBlock }>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea placeholder={ `New post message` }
                              value={ postText }
                              onChange={ (e) => updatePostValue(e) }/>
                </div>
                <div>
                    <button onClick={ handleAddPost }>Add post</button>
                </div>
            </div>
            <div className={ styles.posts }>
                { postDataElement }
            </div>
        </div>
    );
}

export default MyPosts;