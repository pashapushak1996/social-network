import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let {match: {params: {id}}} = this.props;
        if (!id) {
            id = 2
        }
        this.props.getProfileThunkCreator(id);
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
    getProfileThunkCreator
})(ProfileContainerWithRouter);