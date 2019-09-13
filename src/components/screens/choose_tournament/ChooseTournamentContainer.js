import React, { Component } from 'react'

import { ChooseTournament } from './ChooseTournament'

import { connect } from 'react-redux'
import { getTournamentListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseTournamentContainerWithoutConnect extends Component {
    componentDidMount() {
        this.props.getTournamentListActionCreator(this.props.token, this.props.navigation.getParam('sport_id'))
    }

    navigateToChooseMatch = tournament_id => this.props.navigation.navigate(SCREENS.CHOOSE_MATCH, { tournament_id })

    render() {
        let { loading, tournamentList } = this.props
        return <ChooseTournament loading={loading} tournamentList={tournamentList} navigateToChooseMatch={this.navigateToChooseMatch} />
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