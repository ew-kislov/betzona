import * as util from '../../util'

export function transformProfileBetsResponse(profileBets) {
    return profileBets
        .map(profileBet => {
            let date = new Date(parseInt(profileBet.match.date_start) * 1000)
            let time = date.toTimeString().substr(0, 5)
            let formattedDate = util.getDayMonthFormat(date)

            let resultSum
            if (profileBet.sum_result == null && profileBet.score !== null)
                resultSum = profileBet.sum
            else if (profileBet.sum_result !== null)
                resultSum = profileBet.sum_result + ''
            else
                resultSum = profileBet.sum_result

            return {
                id: profileBet.id,
                homeName: profileBet.home.name,
                awayName: profileBet.away.name,
                description: profileBet.tournament.name,
                date: formattedDate,
                time: time,
                odd: profileBet.oddstype.name,
                rate: profileBet.ratio,
                sum: profileBet.sum,
                resultSum,
                score: profileBet.score || 'Ожидается'
            }
        })
        .groupBy('date')
}

export function tranformProfileBankResponse(profileBank) {
    return {
        available: Math.trunc(profileBank.available),
        bank: Math.trunc(profileBank.bank)
    }
}

function transformCategoryStatResponse(stat) {
    return {
        categoryName: stat.category_name,
        totalCount: stat.count_bets,
        winCount: stat.count_win,
        winPercent: Math.round(stat.count_win / stat.count_bets * 100),
        loseCount: stat.count_lose,
        losePercent: Math.round(stat.count_lose / stat.count_bets * 100),
        drawCount: stat.count_draw,
        drawPercent: Math.round(stat.count_draw / stat.count_bets * 100),
        roi: (stat.profit / stat.total_bets * 100).toFixed(2)
    }
}

function transformCategoryStatsResponse(categoryStatistics) {
    return categoryStatistics.map(statisticsElement => ({
        categoryName: statisticsElement.category_name,
        totalCount: statisticsElement.count_bets,
        winCount: statisticsElement.count_win,
        winPercent: Math.round(statisticsElement.count_win / statisticsElement.count_bets * 100),
        loseCount: statisticsElement.count_lose,
        losePercent: Math.round(statisticsElement.count_lose / statisticsElement.count_bets * 100),
        drawCount: statisticsElement.count_draw,
        drawPercent: Math.round(statisticsElement.count_draw / statisticsElement.count_bets * 100),
        roi: (statisticsElement.profit / statisticsElement.total_bets * 100).toFixed(2)
    }))
}

export function transformProfileStatsResponse(profileStatsRaw) {
    // stats

    const categoriesStats = profileStatsRaw.stats.categories_stats;
    const totalStats = profileStatsRaw.stats.total_stats;
    // const totalStats = profileStatsRaw.stats.total_stats;

    let profileStats = {};
    profileStats['Общая статистика'] = [transformCategoryStatResponse(totalStats['Общая статистика'])]
    
    for (statType in categoriesStats)
        profileStats[statType] = transformCategoryStatsResponse(categoriesStats[statType])

    //graph

    const graphSize = Object.keys(profileStatsRaw.graph).length;

    const graph = {
        labels: Object.keys(profileStatsRaw.graph).slice(Math.max(graphSize - 5, 0)),
        data: Object.values(profileStatsRaw.graph).slice(Math.max(graphSize - 5, 0)),
    }

    // profile

    const profile = {
        id: profileStatsRaw.user.id ,
        email: profileStatsRaw.user.email,
        username: profileStatsRaw.user.username,
        photoUrl: profileStatsRaw.user.path
    }

    return {
        stats: profileStats,
        graph,
        profile
    }
}