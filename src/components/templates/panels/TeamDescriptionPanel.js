import React from 'react'
import { View } from 'react-native'

import { Panel, TitleText, SubtitleText, DescriptionText } from '../../primitives'
import { MatchResult } from './MatchResult'


export const TeamDescriptionPanel = ({ team, style }) => {
    return (
        <View style={style}>
            <TitleText>{team && team.name}</TitleText>
            <DescriptionText style={{ marginTop: 10 }}>
                {team && team.description}
            </DescriptionText>

            <TitleText style={{ marginTop: 15 }}>Последние матчи {team && team.name}</TitleText>

            <View style={{ marginTop: 10 }}>
                {team && team.last.map(matchResult =>
                    <MatchResult
                        key={matchResult.match_id}
                        currentTeamName={team ? team.name : ''}
                        matchResult={matchResult}
                        style={{ marginTop: 5 }}
                    />)}
            </View>
        </View>
    )
}