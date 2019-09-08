import 'moment/min/moment-with-locales'


export function prognosisListResponseTransformer(prognosisList) {
    for (selector in prognosisList) {
        let list = prognosisList[selector]
        list = list.map(prognosis => {
            let date = new Date(parseInt(prognosis.match.date_start) * 1000)
            let time = date.toTimeString().substr(0, 5)
            let day
            if (new Date().toDateString() == date.toDateString())
                day = 'Сегодня'
            else
                day = 'Завтра'
            let formattedDate = day + ' в ' + time

            return {
                id: prognosis.id,
                path: prognosis.path,
                rate: prognosis.betsUsers.ratio,
                odd: prognosis.oddstype.name,
                home: prognosis.home_team.name,
                away: prognosis.away_team.name,
                title: prognosis.home_team.name + ' - ' + prognosis.away_team.name,
                sport: prognosis.sport.name,
                date: date,
                dateString: formattedDate
            }
        })

        prognosisList[selector] = list
    }
    return prognosisList
}

export function prognosisResponseTransformer(prognosis) {

    // let description = prognosis.description
    //     .replace(/<\/?p[^>]*>|<br>|<\/?em[^>]*>|<\/?span[^>]*>|<\/?strong[^>]*>|<br\/>|\n|\r/g, ' ')
    //     .replace(/\s+/g, ' ')
    //     .trim()
    //     .split(/<h3>|<\/h3>/g)
    let home = {
        name: prognosis.home_team.name,
        description: prognosis.home,
        logoUrl: prognosis.home_logo.filename,
        last: prognosis.scores.home.splice(0, 5)
    }
    let away = {
        name: prognosis.away_team.name,
        description: prognosis.away,
        logoUrl: prognosis.away_logo.filename,
        last: prognosis.scores.away.splice(0, 5)
    }
    // let prognosisDescription = description[6].trim()

    let date = new Date(parseInt(prognosis.match.date_start) * 1000)
    let time = date.toTimeString().substr(0, 5)

    let months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ]

    let formattedDate = date.getDate() + ' ' + months[date.getMonth()]

    return {
        id: prognosis.id,
        title: prognosis.home_team.name + ' - ' + prognosis.away_team.name,
        rate: prognosis.betsUsers.ratio,
        home: home,
        away: away,
        slog: prognosis.oddstype.name,
        description: prognosis.forecast,
        sport: prognosis.sport.name,
        tournament: prognosis.sport.name + '. ' + prognosis.tournament.name,
        date: formattedDate,
        time: time,
        last: prognosis.scores.face_to_face.splice(0, 5)
    }
}