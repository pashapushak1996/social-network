import React from 'react';
import User from './User/User';
import axios from 'axios';
import styles from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            debugger;
            this.props.setTotalCount(res.data.totalCount);
            this.props.setUsers(res.data.items);
        });
    };


    followUser(id) {
        this.props.follow(id);
    };

    unfollowUser = (id) => {
        this.props.unfollow(id);
    };

    switchCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
        });
    };

    render() {

        const pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        const {users} = this.props;

        return (<div>
            <div>
                {pages.map((p) => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                                 onClick={() => this.switchCurrentPage(p)}> {p}</span>;
                })}
            </div>
            {users.map((user) => <User key={user.id} user={user} follow={this.followUser.bind(this)}
                                       unfollow={this.unfollowUser}/>)}
        </div>);
    }
}


export default Users;

