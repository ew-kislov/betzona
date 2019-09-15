import React, { Component } from 'react'

import { ChooseMatch } from './ChooseMatch'

import { connect } from 'react-redux'
import { getMatchListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseMatchContainerWithoutConnect extends Component {
    componentDidMount() {
        this.props.getMatchListActionCreator(this.props.token, this.props.navigation.getParam('tournament_id'))
    }

    navigateToChooseOdd = match => this.props.navigation.navigate(SCREENS.CHOOSE_ODD, { match })

    render() {
        let { loading, matchList } = this.props
        return <ChooseMatch loading={loading} matchList={matchList} navigateToChooseOdd={this.navigateToChooseOdd} />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loading: state.match.loading,
    matchList: state.match.matchList,
    error: state.match.error
})
export const ChooseMatchContainer =
    connect(mapStateToProps, { getMatchListActionCreator })(ChooseMatchContainerWithoutConnect)