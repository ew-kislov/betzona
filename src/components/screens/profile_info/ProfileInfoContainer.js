import React, { Component } from 'react'
import { ProfileInfo } from './ProfileInfo'

export class ProfileInfoContainer extends Component {
    state = {
        username: this.props.navigation.getParam('username'),
        activeTab: 'account'
    }

    setActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }

    render() {
        let { username, activeTab } = this.state
        return (
            <ProfileInfo username={username} activeTab={activeTab} setActiveTab={this.setActiveTab} />
        )
    }
}