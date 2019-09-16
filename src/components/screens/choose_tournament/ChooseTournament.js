import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    TournamentPanel,
} from '../../templates'

export const ChooseTournament = ({ loading, tournamentList, sport, navigateToChooseMatch }) => {
    return (
        <ScreenLayout>
            <Header back customTitle title={sport.name} />
            <ContentLayout loading={loading}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    {tournamentList.map(tournament => <TournamentPanel tournament={tournament} onPress={() => navigateToChooseMatch(tournament)} />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}