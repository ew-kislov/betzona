import React, { Component } from 'react'
import { PrognosisList } from './PrognosisList'

import { SCREENS } from '../../../constants'

import { getPrognosisListActionCreator } from '../../../store'
import { connect } from 'react-redux'

export class PrognosisListContainerWithoutConnect extends Component {

    componentDidMount() {
        this.props.getPrognosisListActionCreator()
    }

    prognosisPressHandler = path => this.props.navigation.navigate(SCREENS.PROGNOSIS_DETAILS, { prognosisPath: path })

    render() {
        return (
            <PrognosisList
                screenProps={{
                    prognosisPressHandler: this.prognosisPressHandler
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
    loading: state.prognosis.prognosisListLoading,
    prognosisList: state.prognosis.prognosisList,
    error: state.prognosis.prognosisListError
})
export const PrognosisListContainer
    = connect(mapStateToProps, { getPrognosisListActionCreator })(PrognosisListContainerWithoutConnect)