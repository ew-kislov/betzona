const months = [
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

export function getDayMonthFormat(date) {
    return date.getDate() + ' ' + months[date.getMonth()]
}

export function getDateTimeFormat(date) {
    return date.getDate() + '/' + (date.getMonth() + 1) + ' ' + date.toTimeString().substr(0, 5)
}