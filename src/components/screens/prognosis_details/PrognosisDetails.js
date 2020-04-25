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

import { TitleText, SliderPanel, SliderButton } from '../../../components/primitives'

export const PrognosisDetails = ({
    loading,
    refreshing,
    prognosis,
    refreshHandler,
    makeBet
}) => {
    return (
        <ScreenLayout>
            <Header customTitle={true} title={prognosis.title} shadow back />
            <ContentLayout loading={loading} refreshing={refreshing} refreshHandler={refreshHandler}>
                <TitleText style={{ selfAlign: 'center', textAlign: 'center', marginTop: 25 }}>{prognosis.tournament}</TitleText>
                <VSPanel homeTeam={prognosis.home} awayTeam={prognosis.away} time={prognosis.time} date={prognosis.date} style={{ marginTop: 20 }} />

                <SliderPanel style={{ margin: 25 }}>
                    <SliderButton isActive={true} disabled={true}>{prognosis.home && prognosis.home.name}</SliderButton>
                    <SliderButton isActive={false} disabled={true}>{prognosis.away && prognosis.away.name}</SliderButton>
                </SliderPanel>

                <TeamDescriptionPanel team={prognosis.home} style={{ marginTop: 20, marginBottom: 20 }} />
                <TeamDescriptionPanel team={prognosis.away} style={{ marginTop: 20 }} />

                <PrognosisTextPanel style={{ marginTop: 20, marginBottom: 10 }}>
                    {prognosis && prognosis.description}
                </PrognosisTextPanel>

                {prognosis.last && prognosis.last.length > 0 && (
                    <View style={{ marginTop: 10, marginBottom: 15 }}>
                        <TitleText style={{ marginTop: 20, marginBottom: 10 }}>Статистика личных встреч</TitleText>
                        {prognosis.last.map(matchResult => <MatchResult matchResult={matchResult} key={matchResult.match_id} style={{ marginBottom: 5 }} />)}
                    </View>
                )}
            </ContentLayout>
        </ScreenLayout>
    )
}