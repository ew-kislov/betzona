import React, { Component } from 'react'
import Toast from 'react-native-root-toast'

import { Registration } from './Registration'

import { registrationActionCreator, getProfileBankActionCreator } from '../../../store'
import { connect } from 'react-redux'

import { SCREENS } from '../../../constants'

export class RegistrationContainerWithoutConnect extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    async componentDidMount() {
        // TODO
    }

    handleUsernameChange = value => this.setState({ username: value })
    handleEmailChange = value => this.setState({ email: value })
    handlePasswordChange = value => this.setState({ password: value })
    handleRegistration = () => {
        if (this.state.username != '' && this.state.username != '' && this.state.username != '') {
            this.props.registrationActionCreator(this.state.username, this.state.email, this.state.password)
                .then(() => {
                    if (this.props.error) {
                        Toast.show(this.props.error)
                    }
                    else {
                        this.props.navigation.navigate(SCREENS.EMAIL_VERIFICATION)
                    }
                })
        } else {
            Toast.show('Введите все данные')
        }
    }

    render() {
        return (
            <Registration
                handleUsernameChange={this.handleUsernameChange}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleRegistration={this.handleRegistration}
            />
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    username: state.auth.username,
    error: state.auth.error
})
export const RegistrationContainer
    = connect(
        mapStateToProps,
        { registrationActionCreator, getProfileBankActionCreator }
    )(RegistrationContainerWithoutConnect)