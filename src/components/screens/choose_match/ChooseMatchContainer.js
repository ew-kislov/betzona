import React, { Component } from 'react'

import { ChooseMatch } from './ChooseMatch'

import { connect } from 'react-redux'
import { getMatchListActionCreator } from '../../../store'
import { SCREENS } from '../../../constants'

export class ChooseMatchContainerWithoutConnect extends Component {
    state = {
        matchesShown: 10
    }

    componentDidMount() {
        let tournament = this.props.navigation.getParam('tournament')
        let popular = this.props.navigation.getParam('popular')
        let nearest = this.props.navigation.getParam('nearest')

        this.props.getMatchListActionCreator(
            this.props.token,
            { tournament_id: tournament ? tournament.id : null, popular, nearest }
        )
    }

    showMore = () => this.setState({ matchesShown: this.state.matchesShown + 10 })

    navigateToChooseOdd = match => this.props.navigation.navigate(SCREENS.CHOOSE_ODD, { match })

    render() {
        let { loading, matchList } = this.props
        let { matchesShown } = this.state
        return <ChooseMatch
            loading={loading}
            popular={this.props.navigation.getParam('popular')}
            nearest={this.props.navigation.getParam('nearest')}
            matchList={matchList}
            matchesShown={matchesShown}
            showMore={this.showMore}
            tournament={this.props.navigation.getParam('tournament')}
            navigateToChooseOdd={this.navigateToChooseOdd}
        />
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