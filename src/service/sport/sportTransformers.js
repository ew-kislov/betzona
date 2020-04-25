export function transformSportListResponse(sports) {
    return sports.map(sport => {
        imageSource = ''

        switch (sport.img) {
            case 'american_football.png':
                imageSource = require('../../../assets/png/football2.png')
                break
            case 'baseball.png':
                imageSource = require('../../../assets/png/baseball2.png')
                break
            case 'basketball.png':
                imageSource = require('../../../assets/png/basketball2.png')
                break
            case 'football.png':
                imageSource = require('../../../assets/png/football2.png')
                break
            case 'handball.png':
                imageSource = require('../../../assets/png/handball2.png')
                break
            case 'hockey.png':
                imageSource = require('../../../assets/png/hockey2.png')
                break
            case 'soccer.png':
                imageSource = require('../../../assets/png/soccer2.png')
                break
            case 'tennis.png':
                imageSource = require('../../../assets/png/tennis2.png')
                break
            case 'volleyball.png':
                imageSource = require('../../../assets/png/volleyball2.png')
                break
            case 'water_polo.png':
                imageSource = require('../../../assets/png/water_polo2.png')
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