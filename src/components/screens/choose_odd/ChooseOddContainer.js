import React, { Component } from 'react'

import { ChooseOdd } from './ChooseOdd'

import { connect } from 'react-redux'
import { getOddListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseOddContainerWithoutConnect extends Component {

    state = {
        match: this.props.navigation.getParam('match')
    }

    componentDidMount() {
        this.props.getOddListActionCreator(this.props.token, this.state.match.id)
    }

    navigateToChooseMoney = odd => {
        this.props.navigation.navigate(SCREENS.CHOOSE_MONEY, { odd, match: this.state.match })
    }

    render() {
        let { loading, oddList } = this.props
        let { match } = this.state
        return <ChooseOdd
            loading={loading}
            oddList={oddList}
            navigateToChooseMoney={this.navigateToChooseMoney}
            match={match}
        />
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