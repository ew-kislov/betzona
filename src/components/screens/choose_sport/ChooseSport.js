import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    SportPanel,
} from '../../templates'

export const ChooseSport = ({ loading, sportList, navigateToTournaments }) => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout loading={loading}>
                <View style={{ marginBottom: 20 }}>
                    {sportList.map(sport => <SportPanel style={{ marginTop: 20 }} sport={sport} onPress={() => navigateToTournaments(sport.id)} />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}