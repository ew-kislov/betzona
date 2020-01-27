import React, { Component } from 'react'
import Toast from 'react-native-root-toast'

import { SideMenu } from './SideMenu'

import { loginActionCreator, logoutActionCreator, getProfileBankActionCreator } from '../../../store'
import { connect } from 'react-redux'
import { SCREENS } from '../../../constants'

export class SideMenuContainerWithoutConnect extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = value => this.setState({ username: value })
    handlePasswordChange = value => this.setState({ password: value })

    handleLogin = () => {
        if (this.state.username !== '' && this.state.password != '')
            this.props.loginActionCreator(this.state.username, this.state.password)
                .then(() => {
                    if (this.props.error)
                        Toast.show('Вы введи неверные данные')
                    else
                        this.props.getProfileBankActionCreator(this.props.token)
                })
        else
            Toast.show('Введите логин и пароль')
    }

    handleLogout = () => {
        this.props.logoutActionCreator()
    }

    navigateToProfileInfo = () => this.props.navigation.navigate(SCREENS.PROFILE_INFO)
    navigateToRating = () => this.props.navigation.navigate(SCREENS.RATING)
    navigateToPrognosis = () => this.props.navigation.navigate(SCREENS.PROGNOSIS_LIST)
    navigateToAddPrognosis = () => this.props.navigation.navigate(SCREENS.CHOOSE_SPORT)

    render() {
        let { token, username, authLoading, profileLoading, profileBank } = this.props
        return <SideMenu
            loading={authLoading || profileLoading}
            token={token}
            username={username}
            profileBank={profileBank}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            navigateToProfileInfo={this.navigateToProfileInfo}
            navigateToRating={this.navigateToRating}
            navigateToPrognosis={this.navigateToPrognosis}
            navigateToAddPrognosis={this.navigateToAddPrognosis}
        />
    }
}

const mapStateToProps = state => ({
    authLoading: state.auth.loading,
    token: state.auth.token,
    username: state.auth.username,
    error: state.auth.error,

    profileLoading: state.profile.loading,
    profileBank: state.profile.profileBank,
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