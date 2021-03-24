import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    return (

        <div>
            <Paginator switchCurrentPage={ props.switchCurrentPage } pageSize={ props.pageSize }
                       currentPage={ props.currentPage }
                       totalItemCount={ props.totalCount } portionSize={ 10 }/>
            { props.isFetching ? <Preloader/>
                : props.users.map((user) => <User
                    followingInProgress={ props.followingInProgress }
                    key={ user.id } user={ user }
                    followUserThunk={ props.followUserThunk }
                    unfollowUserThunk={ props.unfollowUserThunk }/>) }
        </div>
    );
};

export default Users;