import * as service from '../../service'
import * as actions from './ratingActions'

export function getMonthRatingActionCreator() {
    return dispatch => {
        dispatch(actions.getMonthRatingRequest())
        return service.getMonthRating()
            .then(monthRating => dispatch(actions.getMonthRatingSuccess(monthRating)))
            .catch(error => dispatch(actions.getMonthRatingFail(error)))
    }
}