import React, { Component } from 'react'
import Toast from 'react-native-root-toast'

import { SideMenu } from './SideMenu'

import { loginActionCreator, logoutActionCreator } from '../../../store'
import { connect } from 'react-redux'

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
                        Toast.show('Вы ввели неверные данные')
                })
        else
            Toast.show('Введите логин и пароль')
    }

    handleLogout = () => {
        this.props.logoutActionCreator()
    }

    render() {
        let { token, username, loading } = this.props
        return <SideMenu
            loading={loading}
            token={token}
            username={username}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
        />
    }
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    token: state.auth.token,
    username: state.auth.username,
    error: state.auth.error
})
export const SideMenuContainer =
    connect(mapStateToProps, { loginActionCreator, logoutActionCreator })(SideMenuContainerWithoutConnect)