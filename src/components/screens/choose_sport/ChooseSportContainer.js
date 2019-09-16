import React, { Component } from 'react'

import { ChooseSport } from './ChooseSport'

import { connect } from 'react-redux'
import { getSportListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseSportContainerWithoutConnect extends Component {
    componentDidMount() {
        this.props.getSportListActionCreator(this.props.token)
    }

    navigateToTournaments = sport => this.props.navigation.navigate(SCREENS.CHOOSE_TOURNAMENT, { sport })

    render() {
        let { loading, sportList } = this.props
        return <ChooseSport loading={loading} sportList={sportList} navigateToTournaments={this.navigateToTournaments} />
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