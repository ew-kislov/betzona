import { getDateTimeFormat } from '../../util'

export function transformMatchListResponse(matchList) {
    return matchList.map(match => {
        let date = new Date(parseInt(match.date_start) * 1000)
        return {
            id: match.id,
            date: getDateTimeFormat(date),
            name: match.home.name + ' - ' + match.away.name,
            tournament: match?.tournament?.name || ''
        }
    })
}