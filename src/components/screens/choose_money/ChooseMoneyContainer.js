import React, { Component } from 'react'

import { ChooseMoney } from './ChooseMoney'

import { connect } from 'react-redux'
import { getMoneyListActionCreator, addPrognosisActionCreator } from '../../../store'
import Toast from 'react-native-root-toast'

export class ChooseMoneyContainerWithoutConnect extends Component {

    state = {
        odd: this.props.navigation.getParam('odd'),
        match: this.props.navigation.getParam('match'),

        activeSum: null
    }

    componentDidMount() {
        this.props.getMoneyListActionCreator(this.props.token, this.state.odd.id, this.state.match.id)
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
        console.warn(prognosis)

        this.props.addPrognosisActionCreator(this.props.token, prognosis)
            .then(() => {
                if (this.props.prognosisError) {
                    console.warn(this.props.prognosisError)
                    Toast.show('Во время добавления прогноза произошла ошибка')
                }
                else
                    Toast.show('Ваш прогноз добавлен')
            })
    }

    render() {
        let { moneyLoading, moneyList, prognosisLoading } = this.props
        let { odd, match, activeSum } = this.state
        return <ChooseMoney
            loading={moneyLoading || prognosisLoading}
            moneyList={moneyList}
            odd={odd}
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

    prognosisLoading: state.prognosis.addPrognosisLoading,
    prognosisError: state.prognosis.addPrognosisError
})
export const ChooseMoneyContainer =
    connect(mapStateToProps, { getMoneyListActionCreator, addPrognosisActionCreator })(ChooseMoneyContainerWithoutConnect)