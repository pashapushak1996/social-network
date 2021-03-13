import React from 'react';
import userImage from '../../../assets/images/ProfileImage.svg';
import styles from './User.module.css';
import {NavLink} from "react-router-dom";

const User = ({user, follow, unfollow}) => {

    const followUser = (id) => {
        follow(id);
    };

    const unfollowUser = (id) => {
        unfollow(id);
    };

    return (
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={ styles.image } src={ user.photos.small || userImage } alt=""/>
                </NavLink>
                <div>{ user.name }</div>
                <div>{ user.status }</div>
                { user.followed
                        ? <button onClick={ () => unfollowUser(user.id) }>unfollow</button>
                        :<button onClick={ () => followUser(user.id) }>follow</button> }

            </div>
    );
};

export default User;
