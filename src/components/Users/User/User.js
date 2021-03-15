import React from 'react';
import userImage from '../../../assets/images/ProfileImage.svg';
import styles from './User.module.css';
import {NavLink} from "react-router-dom";

const User = ({user, followUserThunk, unfollowUserThunk, followingInProgress}) => {

    const followUser = (id) => {
        followUserThunk(id);
    };

    const unfollowUser = (id) => {
        unfollowUserThunk(id)
    };

    return (
        <div>
            <NavLink to={ `/profile/${ user.id }` }>
                <img className={ styles.image } src={ user.photos.small || userImage } alt=""/>
            </NavLink>
            <div>{ user.name }</div>
            <div>{ user.status }</div>
            { user.followed
                ? <button disabled={ followingInProgress.some(el => el === user.id) }
                          onClick={ () => unfollowUser(user.id) }>unfollow</button>
                : <button disabled={ followingInProgress.some(el => el === user.id) }
                          onClick={ () => followUser(user.id) }>follow</button> }
        </div>
    );
};

export default User;
