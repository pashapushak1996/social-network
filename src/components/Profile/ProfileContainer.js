import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    getProfileThunkCreator,
    updateProfileStatus
} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let {match: {params: {id}}} = this.props;
        if (!id) {
            id = 14564
        }
        this.props.getProfileThunkCreator(id);
        this.props.getProfileStatusThunkCreator(id);
    };


    render() {
        return <Profile { ...this.props }
                        status={ this.props.status }
                        profile={ this.props.profile }
                        updateProfileStatus={ this.props.updateProfileStatus }/>
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

export default compose(
    connect(mapStateToProps, {getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatus}),
    withRouter
)(ProfileContainer);
