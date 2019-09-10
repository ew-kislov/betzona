import * as util from '../../util'

export function transformProfileBetsResponse(profileBets) {
    return profileBets
        .map(profileBet => {
            let date = new Date(parseInt(profileBet.match.date_start) * 1000)
            let time = date.toTimeString().substr(0, 5)
            let formattedDate = util.getDayMonthFormat(date)

            return {
                id: profileBet.id,
                homeName: profileBet.home.name,
                awayName: profileBet.away.name,
                description: profileBet.tournament.name,
                date: formattedDate,
                time: time,
                odd: profileBet.oddstype.name,
                rate: profileBet.ratio,
                sum: profileBet.sum
            }
        })
        .groupBy('date')
}