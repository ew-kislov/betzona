import React, { Component } from 'react'

import { ChooseSport } from './ChooseSport'

import { connect } from 'react-redux'
import { getSportListActionCreator } from '../../../store'

export class ChooseSportContainerWithoutConnect extends Component {
    componentDidMount() {
        this.props.getSportListActionCreator(this.props.token)
    }

    render() {
        let { loading, sportList } = this.props
        return <ChooseSport loading={loading} sportList={sportList}  />
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loading: state.sport.loading,
    sportList: state.sport.sportList,
    error: state.sport.error
})
export const ChooseSportContainer = 
    connect(mapStateToProps, { getSportListActionCreator })(ChooseSportContainerWithoutConnect)