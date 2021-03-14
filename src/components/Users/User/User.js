import React from 'react';
import userImage from '../../../assets/images/ProfileImage.svg';
import styles from './User.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersService} from "../../../services/users-service";

const User = ({user, follow, unfollow}) => {

    const followUser = (id) => {
        usersService.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    follow(id);
                }
            })

    };

    const unfollowUser = (id) => {
        usersService.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    unfollow(id);
                }
            })

    };

    return (
        <div>
            <NavLink to={ `/profile/${ user.id }` }>
                <img className={ styles.image } src={ user.photos.small || userImage } alt=""/>
            </NavLink>
            <div>{ user.name }</div>
            <div>{ user.status }</div>
            { user.followed
                ? <button onClick={ () => unfollowUser(user.id) }>unfollow</button>
                : <button onClick={ () => followUser(user.id) }>follow</button> }
        </div>
    );
};

export default User;
