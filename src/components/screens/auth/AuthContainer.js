import React, { Component } from 'react'

import { Auth } from './Auth'

import { connect } from 'react-redux'
import { loginActionCreator, logoutActionCreator, getProfileBankActionCreator } from '../../../store'
import Toast from 'react-native-root-toast'

import { ProfileInfo } from '../profile_info'
import { SCREENS } from '../../../constants'

export class ProfileContainerWithoutConnect extends Component {
    state = {
        username: '',
        password: '',
        activeTab: 'statistics'
    }

    setActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }

    handleUsernameChange = value => this.setState({ username: value })
    handlePasswordChange = value => this.setState({ password: value })

    handleLogin = () => {
        if (this.state.username !== '' && this.state.password != '')
            this.props.loginActionCreator(this.state.username, this.state.password)
                .then(() => {
                    if (this.props.error) {
                        Toast.show('Вы ввели неверные данные')
                    }
                    else
                        this.props.getProfileBankActionCreator(this.props.token)
                })
        else
            Toast.show('Введите логин и пароль')
    }

    navigateToRegistration = () => this.props.navigation.navigate(SCREENS.REGISTRATION)

    render() {
        let { password, activeTab } = this.state
        let { authLoading, profileLoading, token } = this.props
        return token ?
            <ProfileInfo activeTab={activeTab} setActiveTab={this.setActiveTab} /> :
            <Auth
                navigateToRegistration={this.navigateToRegistration}
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleLogin={this.handleLogin}
                loading={authLoading || profileLoading}
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
export const ProfileContainer =
    connect(
        mapStateToProps,
        {
            getProfileBankActionCreator,
            loginActionCreator,
            logoutActionCreator
        }
    )(ProfileContainerWithoutConnect)