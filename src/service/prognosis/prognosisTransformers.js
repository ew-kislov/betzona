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
                odd: prognosis.odd_name,
                home: prognosis.home.name,
                away: prognosis.away.name,
                title: prognosis.home.name + ' - ' + prognosis.away.name,
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

    let description = prognosis.description
        .replace(/<\/?p[^>]*>|<br>|<\/?em[^>]*>|<\/?span[^>]*>|<\/?strong[^>]*>|<br\/>|\n|\r/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(/<h3>|<\/h3>/g)
    let home = {
        name: prognosis.home.home_info.name,
        description: description[2].trim(),
        logoUrl: prognosis.home.home_logo,
        last: prognosis.last.home.splice(0, 5)
    }
    let away = {
        name: prognosis.away.away_info.name,
        description: description[4].trim(),
        logoUrl: prognosis.away.away_logo,
        last: prognosis.last.away.splice(0, 5)
    }
    let prognosisDescription = description[6].trim()

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
        title: prognosis.home.home_info.name + ' - ' + prognosis.away.away_info.name,
        rate: prognosis.betsUsers.ratio,
        home: home,
        away: away,
        slog: prognosis.odd_name,
        description: prognosisDescription,
        sport: prognosis.sport.name,
        tournament: prognosis.sport.name + '. ' + prognosis.tournament_name.name,
        date: formattedDate,
        time: time,
        last: prognosis.last.face_to_face.splice(0, 5)
    }
}