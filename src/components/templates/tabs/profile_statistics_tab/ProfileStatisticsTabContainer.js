import React, { Component } from 'react'

import { getProfileStatsActionCreator } from '../../../../store'
import { connect } from 'react-redux'
import { ProfileStatisticsTab } from './ProfileStatisticsTab'

export class ProfileStatisticsTabContainerWithoutConnect extends Component {
    componentDidMount() {
        let username = this.props.screenProps.username;
        if (!username) {
            username = this.props.username;
        }

        this.props.getProfileStatsActionCreator(username)
    }

    render() {
        let { loading, profileStats } = this.props
        return (
            <ProfileStatisticsTab loading={loading} profileStats={profileStats?.stats || {}} graph={profileStats?.graph || {}} />
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.username,
    loading: state.profile.loading,
    profileStats: state.profile.profileStats,
    error: state.profile.error
})
export const ProfileStatisticsTabContainer
    = connect(mapStateToProps, { getProfileStatsActionCreator })(ProfileStatisticsTabContainerWithoutConnect)