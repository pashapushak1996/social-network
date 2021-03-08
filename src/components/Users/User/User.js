import React from 'react';

const User = ({user, follow, unfollow}) => {
    return (
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                {user.followed
                        ? <button onClick={() => unfollow(user.id)}>unfollow</button>
                        :<button onClick={() => follow(user.id)}>follow</button>}

            </div>
    );
};

export default User;
