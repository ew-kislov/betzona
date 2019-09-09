export function transformProfileBetsResponse(profileBets) {
    return profileBets.map(profileBet => {
        let date = new Date(parseInt(profileBet.match.date_start) * 1000)
        let time = date.toTimeString().substr(0, 5)

        return {
            id: profileBet.id,
            homeName: profileBet.home.name,
            awayName: profileBet.away.name,
            description: profileBet.tournament.name,
            time: time,
            odd: profileBet.oddstype.name,
            rate: profileBet.ratio,
            sum: profileBet.sum
        }
    })
}