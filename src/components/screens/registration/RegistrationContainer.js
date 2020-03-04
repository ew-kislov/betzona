import React, { Component } from 'react'
import Toast from 'react-native-root-toast'

import { Registration } from './Registration'

import { registrationActionCreator, getProfileBankActionCreator } from '../../../store'
import { connect } from 'react-redux'

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin'
import VKLogin from 'react-native-vkontakte-login';

export class RegistrationContainerWithoutConnect extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    async componentDidMount() {
        GoogleSignin.configure({
            scopes: [], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '298320704850-3058kg6ut13gm0gvlt25vug2ceu2cgtd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            accountName: '', // [Android] specifies an account name on the device that should be used
            iosClientId: '298320704850-3d3vgub6gu6lg3d701g7b4ac0ta6ev7c.apps.googleusercontent.com'
        });

        VKLogin.initialize(6871903);
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
                    else
                        this.props.getProfileBankActionCreator(this.props.token)
                })
        } else {
            Toast.show('Введите все данные')
        }
    }

    async handleGoogleRegistration() {
        const isLoggedIn = await VKLogin.isLoggedIn();
        const userInfo = await GoogleSignin.signIn();
        console.warn(userInfo);
        // TODO
    }

    async handleVkRegistration() {
        const auth = await VKLogin.login(['friends', 'photos', 'email']);
        console.warn(auth);
        // TODO
    }

    render() {
        return (
            <Registration
                handleUsernameChange={this.handleUsernameChange}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleRegistration={this.handleRegistration}
                handleGoogleRegistration={this.handleGoogleRegistration}
                handleVkRegistration={this.handleVkRegistration}
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