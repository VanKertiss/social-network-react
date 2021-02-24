import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {
    getUserProfile,
    getStatus,
    updateStatus,
    addMainFoto,
    saveProfile
} from "./../../redux/profileReducer";
import {withRouter} from "react-router-dom";
//import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from "redux";

class MainContainer extends React.Component {

    updateProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizetUserId;
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile()
        }
    }

    render() {
        return (
            <Main
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                addMainFoto = {this.props.addMainFoto}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizetUserId: state.auth.userid,
    });
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile}),
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addMainFoto, saveProfile})
)(MainContainer);
