import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    getProfileThunkCreator, savePhoto, updateProfileData,
    updateProfileStatus
} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfile, getStatus} from "../../redux/selectors/profile-selectors";
import {getAuthUserId, getIsAuth} from "../../redux/selectors/auth-selectors";


const ProfileContainer = (props) => {
    useEffect(() => {
        let {match: {params: {id}}} = props;
        if (!id) {
            id = props.authorizedUserId;
            if (!id) {
                props.history.push(`/login`);
            }
        }
        props.getProfileThunkCreator(id);
        props.getProfileStatusThunkCreator(id);
    }, [props.authorizedUserId, props.match.params.id]);

    return <Profile savePhoto={ props.savePhoto }
                    isOwner={ !props.match.params.id }
                    status={ props.status }
                    profile={ props.profile }
                    updateProfileStatus={ props.updateProfileStatus }
                    updateProfileData={ props.updateProfileData }/>

}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthUserId(state),
        isAuth: getIsAuth(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        getProfileThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatus,
        savePhoto,
        updateProfileData
    }),
    withRouter,
)(ProfileContainer);
