import React, { Component } from 'react'

import { ChooseTournament } from './ChooseTournament'

import { connect } from 'react-redux'
import { getTournamentListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseTournamentContainerWithoutConnect extends Component {

    state = {
        sport: this.props.navigation.getParam('sport')
    }

    componentDidMount() {
        this.props.getTournamentListActionCreator(this.props.token, this.props.navigation.getParam('sport').id)
    }

    navigateToChooseMatch = tournament => this.props.navigation.navigate(SCREENS.CHOOSE_MATCH, { tournament })

    render() {
        let { loading, tournamentList } = this.props
        let { sport } = this.state
        return <ChooseTournament
            loading={loading}
            tournamentList={tournamentList}
            sport={sport}
            navigateToChooseMatch={this.navigateToChooseMatch}
        />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loading: state.tournament.loading,
    tournamentList: state.tournament.tournamentList,
    error: state.tournament.error
})
export const ChooseTournamentContainer =
    connect(mapStateToProps, { getTournamentListActionCreator })(ChooseTournamentContainerWithoutConnect)