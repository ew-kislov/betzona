import React, { Component } from 'react'

import { ChooseMoney } from './ChooseMoney'

import { connect } from 'react-redux'
import { getMoneyListActionCreator, addPrognosisActionCreator } from '../../../store'
import Toast from 'react-native-root-toast'
import { SCREENS } from '../../../constants'

export class ChooseMoneyContainerWithoutConnect extends Component {

    state = {
        odd: this.props.navigation.getParam('odd'),
        oddName: this.props.navigation.getParam('oddName'),
        match: this.props.navigation.getParam('match'),

        activeSum: null
    }

    componentDidMount() {
        this.props.getMoneyListActionCreator(this.props.token, this.props.navigation.getParam('odd').id, this.props.navigation.getParam('match').id)
    }

    handleSumChange = sum => this.setState({ activeSum: sum })
    handleSumInput = value => this.setState({ activeSum: value })

    addPrognosis = () => {
        if (this.state.activeSum == null || this.state.activeSum == '') {
            Toast.show('Укажите сумму')
            return
        }

        let prognosis = {
            oddstype_id: this.state.odd.id,
            match_id: this.state.match.id,
            sum: this.state.activeSum
        }

        this.props.addPrognosisActionCreator(this.props.token, prognosis)
            .then(() => {
                if (this.props.prognosisError)
                    Toast.show('Вы не можете делать повторные прогнозы')
                else {
                    Toast.show('Ваш прогноз добавлен')
                    this.props.navigation.navigate(SCREENS.CHOOSE_SPORT)
                }
            })
    }

    render() {
        let { moneyLoading, moneyList, prognosisLoading } = this.props
        let { odd, oddName, match, activeSum } = this.state
        return <ChooseMoney
            loading={moneyLoading || prognosisLoading}
            moneyList={moneyList}
            odd={odd}
            oddName={oddName}
            match={match}
            activeSum={activeSum}
            handleSumChange={this.handleSumChange}
            handleSumInput={this.handleSumInput}
            addPrognosis={this.addPrognosis}
        />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,

    moneyLoading: state.money.loading,
    moneyList: state.money.moneyList,
    moneyError: state.money.error,

    prognosisLoading: state.prognosis.addPrognosisLoading,
    prognosisError: state.prognosis.addPrognosisError
})
export const ChooseMoneyContainer =
    connect(mapStateToProps, { getMoneyListActionCreator, addPrognosisActionCreator })(ChooseMoneyContainerWithoutConnect)