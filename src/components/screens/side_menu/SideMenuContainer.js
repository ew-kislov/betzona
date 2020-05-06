import React, { Component, PureComponent } from 'react'
import Toast from 'react-native-root-toast'

import { SideMenu } from './SideMenu'

import { loginActionCreator, logoutActionCreator, getProfileBankActionCreator } from '../../../store'
import { connect } from 'react-redux'
import { SCREENS } from '../../../constants'

export class SideMenuContainerWithoutConnect extends Component {
    componentDidMount = () => {
        if (this.props.token) {
            this.props.getProfileBankActionCreator(this.props.token)
        }
    }

    closeDrawer = () => this.props.navigation.closeDrawer();

    handleLogout = () => {
        this.props.logoutActionCreator()
    }

    navigateToProfileInfo = () => this.props.navigation.navigate(SCREENS.PROFILE)
    navigateToRating = () => this.props.navigation.navigate(SCREENS.RATING)
    navigateToPrognosis = () => this.props.navigation.navigate(SCREENS.PROGNOSIS_LIST)
    navigateToAddPrognosis = () => this.props.navigation.navigate(SCREENS.CHOOSE_SPORT)

    render() {
        let { token, username, profileLoading, available, bank } = this.props
        return <SideMenu
            loading={profileLoading}
            token={token}
            username={username}
            available={available}
            bank={bank}
            closeDrawer={this.closeDrawer}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            navigateToProfileInfo={this.navigateToProfileInfo}
            navigateToRating={this.navigateToRating}
            navigateToPrognosis={this.navigateToPrognosis}
            navigateToAddPrognosis={this.navigateToAddPrognosis}
            navigateToRegistration={this.navigateToRegistration}
        />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    username: state.auth.username,
    error: state.auth.error,

    profileLoading: state.profile.loading,
    available: state.profile.available,
    bank: state.profile.bank,
    profileError: state.profile.error
})
export const SideMenuContainer =
    connect(
        mapStateToProps,
        {
            getProfileBankActionCreator,
            loginActionCreator,
            logoutActionCreator
        }
    )(SideMenuContainerWithoutConnect)