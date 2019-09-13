import React, { Component } from 'react'
import { ProfileInfo } from './ProfileInfo'

import { getProfileBetsActionCreator } from '../../../store'
import { connect } from 'react-redux'

export class ProfileInfoContainerWithoutConnect extends Component {

    state = {
        betsShown: 10
    }

    componentDidMount() {
        this.props.getProfileBetsActionCreator(this.props.username)
    }

    showMore = () => this.setState({ betsShown: this.state.betsShown + 10 })

    render() {
        let { loading, profileBets } = this.props
        let { betsShown } = this.state
        return (
            <ProfileInfo loading={loading} profileBets={profileBets} betsShown={betsShown} showMore={this.showMore} />
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.username,
    loading: state.profile.loading,
    profileBets: state.profile.profileBets,
    error: state.profile.error
})
export const ProfileInfoContainer
    = connect(mapStateToProps, { getProfileBetsActionCreator })(ProfileInfoContainerWithoutConnect)