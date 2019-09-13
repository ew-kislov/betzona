import React, { Component } from 'react'

import { ChooseMatch } from './ChooseMatch'

import { connect } from 'react-redux'
import { getMatchListActionCreator } from '../../../store'

export class ChooseMatchContainerWithoutConnect extends Component {
    componentDidMount() {
        this.props.getMatchListActionCreator(this.props.token, this.props.navigation.getParam('tournament_id'))
            .then(() => console.warn(this.props.error))
    }

    render() {
        let { loading, matchList } = this.props
        return <ChooseMatch loading={loading} matchList={matchList} />
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