import React, { Component } from 'react'

import { ChooseOdd } from './ChooseOdd'

import { connect } from 'react-redux'
import { getOddListActionCreator } from '../../../store'

export class ChooseOddContainerWithoutConnect extends Component {
    componentDidMount() {
        this.props.getOddListActionCreator(this.props.token, this.props.navigation.getParam('match_id'))
    }

    navigateToChooseMoney = oddstype_id => console.warn(oddstype_id)

    render() {
        let { loading, oddList } = this.props
        return <ChooseOdd loading={loading} oddList={oddList} navigateToChooseMoney={this.navigateToChooseMoney} />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loading: state.odd.loading,
    oddList: state.odd.oddList,
    error: state.odd.error
})
export const ChooseOddContainer =
    connect(mapStateToProps, { getOddListActionCreator })(ChooseOddContainerWithoutConnect)