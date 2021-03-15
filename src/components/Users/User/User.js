import React from 'react';
import userImage from '../../../assets/images/ProfileImage.svg';
import styles from './User.module.css';
import {NavLink} from "react-router-dom";
import {usersService} from "../../../services/users-service";

const User = ({user, follow, unfollow, toggleFollowingInProgress, followingInProgress}) => {

    const followUser = (id) => {
        toggleFollowingInProgress(true, id);
        usersService.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    follow(id);
                }
                toggleFollowingInProgress(false, id)
            });
    };

    const unfollowUser = (id) => {
        toggleFollowingInProgress(true, id);
        usersService.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    unfollow(id);
                }
                toggleFollowingInProgress(false, id);
            });
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
