import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    MatchPanel,
} from '../../templates'

export const ChooseMatch = ({ loading, matchList, matchesShown, showMore, tournament, navigateToChooseOdd }) => {
    return (
        <ScreenLayout>
            <Header back customTitle title={tournament.name} />
            <ContentLayout scrollEndHanler={showMore} loading={loading}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    {
                        matchList.map((match, ind) =>
                            (ind < matchesShown) && <MatchPanel match={match} onPress={() => navigateToChooseOdd(match)} />)
                    }
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}