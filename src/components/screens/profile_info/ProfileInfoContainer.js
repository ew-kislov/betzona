import React, { Component } from 'react'
import { ProfileInfo } from './ProfileInfo'

import { getProfileBetsActionCreator } from '../../../store'
import { connect } from 'react-redux'

export class ProfileInfoContainerWithoutConnect extends Component {

    componentDidMount() {
        this.props.getProfileBetsActionCreator('username').then(() => console.warn(this.props.profileBets))
    }

    render() {
        let { loading, profileBets } = this.props
        return (
            <ProfileInfo loading={loading} profileBets={profileBets} />
        )
    }
}

const mapStateToProps = state => ({
    loading: state.profile.loading,
    profileBets: state.profile.profileBets
})
export const ProfileInfoContainer
    = connect(mapStateToProps, { getProfileBetsActionCreator })(ProfileInfoContainerWithoutConnect)