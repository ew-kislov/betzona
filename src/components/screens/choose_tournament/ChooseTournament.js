import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    TournamentPanel,
} from '../../templates'

export const ChooseTournament = ({ loading, tournamentList, navigateToChooseMatch }) => {
    return (
        <ScreenLayout>
            <Header back />
            <ContentLayout loading={loading}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    {tournamentList.map(tournament => <TournamentPanel tournament={tournament} onPress={() => navigateToChooseMatch(tournament.id)} />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}