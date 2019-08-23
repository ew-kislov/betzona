import React, { Component } from 'react'

import { PrognosisDetails } from './PrognosisDetails'

import { openUrlInBrowser } from '../../../util'

import { getPrognosisActionCreator } from '../../../store'
import { connect } from 'react-redux'

export class PrognosisDetailsContainerWithoutConnect extends Component {

    componentDidMount() {
        path = this.props.navigation.getParam('prognosisPath')
        this.props.getPrognosisActionCreator(path)
    }

    makeBet = () => {
        const url = 'https://betzona.ru/redirect/redirect/39'
        openUrlInBrowser(url)
    }

    registerInOneXBet = () => {
        const url = 'https://betzona.ru/redirect/redirect/50'
        openUrlInBrowser(url)
    }

    makeMaraphonBet = () => {
        const url = ''
        openUrlInBrowser(url)
    }

    refreshHandler = () => this.props.getPrognosisActionCreator(path, true)

    render() {
        let { loading, prognosis, error, refreshing } = this.props
        return (
            <PrognosisDetails
                loading={loading}
                refreshing={refreshing}
                prognosis={prognosis}
                error={error}
                refreshHandler={this.refreshHandler}
                makeBet={this.makeBet}
                registerInOneXBet={this.registerInOneXBet}
            />
        )
    }
}

const mapStateToProps = state => ({
    loading: state.prognosis.prognosisLoading,
    refreshing: state.prognosis.prognosisRefreshing,
    prognosis: state.prognosis.prognosis,
    error: state.prognosis.prognosisError
})
export const PrognosisDetailsContainer
    = connect(mapStateToProps, { getPrognosisActionCreator })(PrognosisDetailsContainerWithoutConnect)