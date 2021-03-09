import React from 'react';
import userImage from '../../../assets/images/ProfileImage.svg';
import styles from './User.module.css';

const User = ({user, follow, unfollow}) => {
    return (
            <div>
                <img className={styles.image} src={user.photos.small || userImage} alt=""/>
                <div>{user.name}</div>
                <div>{user.status}</div>
                {user.followed
                        ? <button onClick={() => unfollow(user.id)}>unfollow</button>
                        :<button onClick={() => follow(user.id)}>follow</button>}

            </div>
    );
};

export default User;
