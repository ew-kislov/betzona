import React, { Component } from 'react'
import { ProfilePrognosisListTab } from './ProfilePrognosisListTab'

import { getProfileBetsActionCreator } from '../../../../store'
import { connect } from 'react-redux'

export class ProfilePrognosisListTabContainerWithoutConnect extends Component {

    state = {
        betsShown: 10
    }

    componentDidMount() {
        let username = this.props.screenProps.username;
        if (!username) {
            username = this.props.username;
        }

        this.props.getProfileBetsActionCreator(username)
    }

    showMore = () => this.setState({ betsShown: this.state.betsShown + 10 })

    render() {
        let { loading, profileBets } = this.props
        let { betsShown } = this.state
        return (
            <ProfilePrognosisListTab loading={loading} profileBets={profileBets} betsShown={betsShown} showMore={this.showMore} />
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.username,
    loading: state.profile.loading,
    profileBets: state.profile.profileBets,
    error: state.profile.error
})
export const ProfilePrognosisListTabContainer
    = connect(mapStateToProps, { getProfileBetsActionCreator })(ProfilePrognosisListTabContainerWithoutConnect)