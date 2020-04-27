import React, { Component } from 'react'
import { PrognosisListTab } from './PrognosisListTab'

import {
    getPrognosisListActionCreator,
    popularPrognosisListSelector,
    footballPrognosisListSelector,
    tennisPrognosisListSelector,
    hockeyPrognosisListSelector
} from '../../../../store'
import { connect } from 'react-redux'

import { SPORT_TYPES, DAY_TYPES } from '../../../../constants'

export class PrognosisListTabContainerWithoutConnect extends Component {

    state = {
        selector: DAY_TYPES.ALL,
        shown: 5
    }

    showMore = () => this.setState({ shown: this.state.shown + 5 })

    changeSelector = selector => {
        this.setState({ selector, shown: 5 })
    }

    refreshHandler = () => this.props.getPrognosisListActionCreator(true)

    render() {
        let { screenProps, loading, refreshing, prognosisList } = this.props
        let { prognosisPressHandler } = screenProps
        let { selector, shown } = this.state

        return <PrognosisListTab
            loading={loading}
            refreshing={refreshing}
            prognosisList={prognosisList}
            selector={selector}
            changeSelector={this.changeSelector}
            prognosisPressHandler={prognosisPressHandler}
            refreshHandler={this.refreshHandler}
            shown={shown}
            showMore={this.showMore}
        />
    }
}

const mapStateToProps_All = state => ({
    loading: state.prognosis.prognosisListLoading,
    refreshing: state.prognosis.prognosisListRefreshing,
    prognosisList: state.prognosis.prognosisList,
    error: state.prognosis.prognosisListError,
    sportSelector: SPORT_TYPES.ALL
})
export const AllPrognosisListTabContainer
    = connect(mapStateToProps_All, { getPrognosisListActionCreator })(PrognosisListTabContainerWithoutConnect)



const mapStateToProps_Football = state => ({
    loading: state.prognosis.prognosisListLoading,
    refreshing: state.prognosis.prognosisListRefreshing,
    prognosisList: footballPrognosisListSelector(state),
    error: state.prognosis.prognosisListError,
    sportSelector: SPORT_TYPES.FOOTBALL
})
export const FootballPrognosisListTabContainer
    = connect(mapStateToProps_Football, { getPrognosisListActionCreator })(PrognosisListTabContainerWithoutConnect)



const mapStateToProps_Tennis = state => ({
    loading: state.prognosis.prognosisListLoading,
    refreshing: state.prognosis.prognosisListRefreshing,
    prognosisList: tennisPrognosisListSelector(state),
    error: state.prognosis.prognosisListError,
    sportSelector: SPORT_TYPES.TENNIS
})
export const TennisPrognosisListTabContainer
    = connect(mapStateToProps_Tennis, { getPrognosisListActionCreator })(PrognosisListTabContainerWithoutConnect)



const mapStateToProps_Hockey = state => ({
    loading: state.prognosis.prognosisListLoading,
    refreshing: state.prognosis.prognosisListRefreshing,
    prognosisList: hockeyPrognosisListSelector(state),
    error: state.prognosis.prognosisListError,
    sportSelector: SPORT_TYPES.HOCKEY
})
export const HockeyPrognosisListTabContainer
    = connect(mapStateToProps_Hockey, { getPrognosisListActionCreator })(PrognosisListTabContainerWithoutConnect)