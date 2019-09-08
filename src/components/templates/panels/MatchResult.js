import React from 'react'
import { View } from 'react-native'

import { RowContainer, UpperText, DescriptionText } from '../../primitives'
import { styles } from './styles'

export const MatchResult = ({ matchResult, currentTeamName, style }) => {

    firstScore = matchResult.score.split(' ')[0]

    if (currentTeamName) {
        homeScore = firstScore.split(':')[0]
        awayScore = firstScore.split(':')[1]
        var currentScore, opponentScore

        if (matchResult.home.name == currentTeamName) {
            currentScore = homeScore
            opponentScore = awayScore
        }
        else {
            currentScore = awayScore
            opponentScore = homeScore
        }
    }

    return (
        <RowContainer style={[{ justifyContent: 'space-between' }, style]}>
            <DescriptionText style={{ flex: 1 }}>
                {matchResult.home.name} - {matchResult.away.name}
            </DescriptionText>

            <RowContainer style={{ alignItems: 'center' }}>
                {currentTeamName && <View style={[
                    styles.indicator,
                    { backgroundColor: currentScore > opponentScore ? '#68942c' : currentScore == opponentScore ? '#ffa200' : '#de0b1a' }
                ]} />}
                <DescriptionText>{firstScore}</DescriptionText>
            </RowContainer>
        </RowContainer>
    )
}