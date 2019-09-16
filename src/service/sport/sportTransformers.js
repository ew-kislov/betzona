export function transformSportListResponse(sports) {
    return sports.map(sport => {
        imageSource = ''

        switch (sport.img) {
            case 'american_football.png':
                imageSource = require('../../../assets/png/american_football.png')
                break
            case 'baseball.png':
                imageSource = require('../../../assets/png/baseball.png')
                break
            case 'basketball.png':
                imageSource = require('../../../assets/png/basketball.png')
                break
            case 'football.png':
                imageSource = require('../../../assets/png/football.png')
                break
            case 'handball.png':
                imageSource = require('../../../assets/png/handball.png')
                break
            case 'hockey.png':
                imageSource = require('../../../assets/png/hockey.png')
                break
            case 'soccer.png':
                imageSource = require('../../../assets/png/soccer.png')
                break
            case 'tennis.png':
                imageSource = require('../../../assets/png/tennis.png')
                break
            case 'volleyball.png':
                imageSource = require('../../../assets/png/volleyball.png')
                break
            case 'water_polo.png':
                imageSource = require('../../../assets/png/water_polo.png')
                break
            default:
                imageSource = ''
                break
        }

        return {
            id: sport.id,
            name: sport.name,
            imageSource
        }
    })
}