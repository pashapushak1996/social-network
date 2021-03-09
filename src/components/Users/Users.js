import React from 'react';
import User from './User/User';
import axios from 'axios';

const Users = ({users, follow, unfollow, setUsers}) => {
    const setAllUsers = () => {
        if (users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(res => {
                setUsers(res.data.items);
            });
        }
    };

    return (
            <div>
                <button onClick={setAllUsers}>Set users</button>
                {users.map((user) => <User key={user.id} user={user} follow={follow} unfollow={unfollow}/>)}
            </div>
    );
};


export default Users;

