import React from 'react'
import { View, Text } from 'react-native'

import { RowContainer, UpperText, DescriptionText, WhiteText } from '../../primitives'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'

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
                <DescriptionText>{firstScore}</DescriptionText>
                <View>
                    {
                        currentScore > opponentScore ? (
                            <LinearGradient style={styles.resultIndicator} colors={['#BCE384', '#68942C']}>
                                <Text style={styles.indicatorText}>В</Text>
                            </LinearGradient>
                        ) : currentScore == opponentScore ? (
                            <LinearGradient style={styles.resultIndicator} colors={['#FFDD64', '#FFA300']}>
                                <Text style={styles.indicatorText}>Н</Text>
                            </LinearGradient>
                        ) : (
                            <LinearGradient style={styles.resultIndicator} colors={['#FF8888', '#DE0D1B']}>
                                <Text style={styles.indicatorText}>П</Text>
                            </LinearGradient>
                        )
                    }
                </View>
            </RowContainer>
        </RowContainer>
    )
}