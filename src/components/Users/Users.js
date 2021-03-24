import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import Paginator from "../Paginator/Paginator";

const Users = (props) => {
    return (
        <div>
            <Paginator switchCurrentPage={ props.switchCurrentPage } pageSize={ props.pageSize }
                       currentPage={ props.currentPage }
                       totalCount={ props.totalCount }/>
            { props.users.map((user) => <User followingInProgress={ props.followingInProgress }
                                              key={ user.id } user={ user } followUserThunk={ props.followUserThunk }
                                              unfollowUserThunk={ props.unfollowUserThunk }/>) }
        </div>
    );
};

export default Users;