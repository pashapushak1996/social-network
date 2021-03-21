import React from 'react';
import styles from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    const pageCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                { pages.map((p) => {
                    return <span key={ p } className={ props.currentPage === p ? styles.selectedPage : undefined }
                                 onClick={ () => props.switchCurrentPage(p) }> { p }</span>;
                }) }
            </div>
            { props.users.map((user) => <User addFollowedUser={props.addFollowedUser} followingInProgress={ props.followingInProgress }
                                              key={ user.id } user={ user } followUserThunk={ props.followUserThunk }
                                              unfollowUserThunk={ props.unfollowUserThunk }/>) }
        </div>
    );
};

export default Users;