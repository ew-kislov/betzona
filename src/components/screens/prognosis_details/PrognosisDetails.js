import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    VSPanel,
    DetailedBetPanel,
    TeamDescriptionPanel,
    PrognosisTextPanel,
    MatchResult
} from '../../templates'

import { TitleText } from '../../../components/primitives'

export const PrognosisDetails = ({
    loading,
    refreshing,
    prognosis,
    refreshHandler,
    makeBet,
}) => {
    return (
        <ScreenLayout>
            <Header customTitle={true} title={prognosis.title} back />
            <ContentLayout loading={loading} refreshing={refreshing} refreshHandler={refreshHandler}>
                <VSPanel homeTeam={prognosis.home} awayTeam={prognosis.away} style={{ marginTop: 15 }} />
                <DetailedBetPanel description={prognosis.tournament} date={prognosis.date} time={prognosis.time} onPress={makeBet} style={{ marginTop: 35 }} />

                <TeamDescriptionPanel team={prognosis.home} style={{ marginTop: 20, marginBottom: 20 }} />
                <TeamDescriptionPanel team={prognosis.away} style={{ marginTop: 20 }} />

                <PrognosisTextPanel style={{ marginTop: 20, marginBottom: 10 }}>
                    {prognosis && prognosis.description}
                </PrognosisTextPanel>

                {prognosis.last && prognosis.last.length > 0 && (
                    <View style={{ marginTop: 10, marginBottom: 15 }}>
                        <TitleText style={{ marginTop: 20 }}>Статистика личных встреч</TitleText>
                        {prognosis.last.map(matchResult => <MatchResult matchResult={matchResult} key={matchResult.score.match_id} style={{ marginBottom: 5 }} />)}
                    </View>
                )}
            </ContentLayout>
        </ScreenLayout>
    )
}