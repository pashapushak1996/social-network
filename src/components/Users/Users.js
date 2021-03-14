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
            {props.errorMessage.length > 0 ? <div className={styles.error}>{props.errorMessage}</div> : null}
            { props.users.map((user) => <User setErrorMessage={props.setErrorMessage} key={ user.id } user={ user } follow={ props.followUser }
                                              unfollow={ props.unfollowUser }/>) }
        </div>
    );
};

export default Users;