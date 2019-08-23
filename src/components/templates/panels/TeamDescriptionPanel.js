import React from 'react'
import { View } from 'react-native'

import { Panel, TitleText, SubtitleText, DescriptionText } from '../../primitives'
import { MatchResult } from './MatchResult'


export const TeamDescriptionPanel = ({ team, style }) => {
    return (
        <View style={style}>
            <SubtitleText>{team && team.name}</SubtitleText>
            <DescriptionText style={{ marginTop: 10 }}>
                {team && team.description}
            </DescriptionText>

            <TitleText style={{ marginTop: 15 }}>Последние матчи {team && team.name}</TitleText>

            <View style={{ marginTop: 10 }}>
                {team && team.last.map(matchResult =>
                    <MatchResult
                        key={matchResult.score.match_id}
                        currentTeamName={team ? team.name : ''}
                        matchResult={matchResult}
                        style={{ marginTop: 5 }}
                    />)}
            </View>
        </View>
    )
}