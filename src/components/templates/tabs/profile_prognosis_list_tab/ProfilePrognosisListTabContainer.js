import React, { Component } from 'react'
import { ProfilePrognosisListTab } from './ProfilePrognosisListTab'

import { getProfileBetsActionCreator, getProfileStatsActionCreator } from '../../../../store'
import { connect } from 'react-redux'

export class ProfilePrognosisListTabContainerWithoutConnect extends Component {

    state = {
        betsShown: 3
    }

    componentDidMount() {
        let username = this.props.screenProps.username;
        if (!username) {
            username = this.props.activeUsername;
        }

        this.props.getProfileBetsActionCreator(username)
        this.props.getProfileStatsActionCreator(username)
    }

    showMore = () => this.setState({ betsShown: this.state.betsShown + 3 })

    render() {
        let { loading, profileBets, id, photoUrl, available, bank, activeUsername } = this.props
        let { betsShown } = this.state
        return (
            <ProfilePrognosisListTab
                loading={loading}
                id={id}
                username={this.props.screenProps.username || activeUsername}
                activeUsername={activeUsername}
                photoUrl={photoUrl}
                available={available}
                bank={bank}
                profileBets={profileBets}
                betsShown={betsShown}
                showMore={this.showMore}
            />
        )
    }
}

const mapStateToProps = state => ({
    activeUsername: state.auth.username,
    loading: state.profile.loading,
    id: state.profile.id,
    photoUrl: state.profile.photoUrl,
    available: state.profile.available,
    bank: state.profile.bank,
    loading: state.profile.loading,
    profileBets: state.profile.profileBets,
    error: state.profile.error
})
export const ProfilePrognosisListTabContainer
    = connect(mapStateToProps, { getProfileBetsActionCreator, getProfileStatsActionCreator })(ProfilePrognosisListTabContainerWithoutConnect)