import React, { Component } from 'react'

import { ChooseSport } from './ChooseSport'

import { connect } from 'react-redux'
import { getSportListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseSportContainerWithoutConnect extends Component {

    favouriteMatches = {
        name: 'Популярные матчи',
        imageSource: require('../../../../assets/png/popular2.png'),
        onPress: () => this.props.navigation.navigate(SCREENS.CHOOSE_MATCH, { popular: true })
    }

    nearestMatches = {
        name: 'Ближайшие матчи',
        imageSource: require('../../../../assets/png/nearest2.png'),
        onPress: () => this.props.navigation.navigate(SCREENS.CHOOSE_MATCH, { nearest: true })
    }

    componentDidMount() {
        this.props.getSportListActionCreator(this.props.token)
    }

    navigateToTournaments = sport => this.props.navigation.navigate(SCREENS.CHOOSE_TOURNAMENT, { sport })

    render() {
        let { loading, sportList } = this.props
        return <ChooseSport
            loading={loading}
            favouriteMatches={this.favouriteMatches}
            nearestMatches={this.nearestMatches}
            sportList={sportList}
            navigateToTournaments={this.navigateToTournaments}
        />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loading: state.sport.loading,
    sportList: state.sport.sportList,
    error: state.sport.error
})
export const ChooseSportContainer =
    connect(mapStateToProps, { getSportListActionCreator })(ChooseSportContainerWithoutConnect)