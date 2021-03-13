import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {setIsFetching} from "../../redux/reducers/users-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let {match: {params: {id}}} = this.props;
        if (!id) {
            id = 2
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${ id }`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    };

    render() {
        return <Profile { ...this.props }/>
    };
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    setIsFetching
})(ProfileContainerWithRouter);