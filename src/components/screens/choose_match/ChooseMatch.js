import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    MatchPanel,
} from '../../templates'

export const ChooseMatch = ({ loading, matchList }) => {
    return (
        <ScreenLayout>
            <Header back />
            <ContentLayout loading={loading}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    {matchList.map(match => <MatchPanel match={match} />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}