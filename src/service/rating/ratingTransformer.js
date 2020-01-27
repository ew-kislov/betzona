export function transformRatingResponse(rating) {
    return rating.map(ratingItem => ({
        userId: ratingItem.user_id,
        username: ratingItem.user.username,
        profit: ratingItem.profit,
        roi: ratingItem.roi,
        betCount: ratingItem.count_bet
    }))
}