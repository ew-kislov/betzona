import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    SportPanel,
    PrognosisPanel,
} from '../../templates'

export const ChooseSport = ({ loading, favouriteMatches, nearestMatches, sportList, navigateToTournaments }) => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout loading={loading} withoutPadding={true}>
                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <SportPanel
                        sport={favouriteMatches}
                        onPress={favouriteMatches.onPress}
                        style={{ marginTop: 20 }}
                    />
                    <SportPanel
                        sport={nearestMatches}
                        onPress={nearestMatches.onPress}
                        style={{ marginTop: 20 }}
                    />
                    {sportList.map(sport =>
                        <SportPanel
                            key={sport.id}
                            style={{ marginTop: 20 }}
                            sport={sport}
                            onPress={() => navigateToTournaments(sport)}
                        />
                    )}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}