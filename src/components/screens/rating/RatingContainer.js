import React, { Component } from 'react'
import { Rating } from './Rating'

import { getMonthRatingActionCreator } from '../../../store'
import { connect } from 'react-redux'

import { SCREENS } from '../../../constants'

export class RatingContainerWithoutConnect extends Component {
    state = {
        elementsShown: 20
    }

    showMore = () => this.setState({ elementsShown: this.state.elementsShown + 20 })

    navigateToProfile = (username) => this.props.navigation.navigate(SCREENS.RATING_PROFILE_INFO, { username })

    componentDidMount() {
        this.props.getMonthRatingActionCreator()
    }

    render() {
        const { loading, monthRating, error, username } = this.props
        const { elementsShown } = this.state;

        return (
            <Rating
                loading={loading}
                monthRating={monthRating}
                error={error}
                elementsShown={elementsShown}
                showMore={this.showMore}
                currentUser={username}
                navigateToProfile={this.navigateToProfile}
            />
        )
    }
}

const mapStateToProps = state => ({
    loading: state.rating.loading,
    monthRating: state.rating.monthRating,
    error: state.rating.error,
    username: state.auth.username
})
export const RatingContainer
    = connect(mapStateToProps, { getMonthRatingActionCreator })(RatingContainerWithoutConnect)