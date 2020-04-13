import React, { Component } from 'react'
import { ProfileInfo } from './ProfileInfo'

export class ProfileInfoContainer extends Component {
    state = {
        username: this.props.navigation.getParam('username')
    }

    render() {
        let { username } = this.state
        console.warn(username);
        return (
            <ProfileInfo username={username} />
        )
    }
}