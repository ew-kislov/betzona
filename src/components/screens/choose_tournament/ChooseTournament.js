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
                <View>
                    {tournamentList.map(tournament =>
                        <TournamentPanel
                            key={tournament.id}
                            tournament={tournament}
                            onPress={() => navigateToChooseMatch(tournament)}
                        />
                    )}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}