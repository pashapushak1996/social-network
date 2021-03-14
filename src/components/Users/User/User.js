import React from 'react';
import userImage from '../../../assets/images/ProfileImage.svg';
import styles from './User.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

const User = ({user, follow, unfollow,setErrorMessage}) => {

    const followUser = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${ id }`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': '34d11c8b-f8d3-4701-b00b-af8f93333a60'
                }
            }
        ).then(res => {
            if (res.data.resultCode === 0) {
                follow(id);
            }else {
                setErrorMessage(res.data.messages[0])
            }

        })

    };

    const unfollowUser = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${ id }`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '34d11c8b-f8d3-4701-b00b-af8f93333a60'
                }
            }
        ).then(res => {
            if (res.data.resultCode === 0) {
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
