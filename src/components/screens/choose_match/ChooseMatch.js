import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    MatchPanel,
} from '../../templates'

export const ChooseMatch = ({
    loading,
    popular,
    nearest,
    matchList,
    matchesShown,
    showMore,
    tournament,
    navigateToChooseOdd
}) => {
    let title = ''
    if (tournament)
        title = tournament.name
    else if (popular)
        title = 'Популярные матчи'
    else if (nearest)
        title = 'Ближайшие матчи'

    return (
        <ScreenLayout>
            <Header back customTitle title={title} />
            <ContentLayout scrollEndHanler={showMore} loading={loading}>
                <View>
                    {matchList.map((match, ind) => (ind < matchesShown) &&
                        <MatchPanel
                            key={match.id}
                            match={match}
                            popular={popular}
                            nearest={nearest}
                            onPress={() => navigateToChooseOdd(match)}
                        />
                    )}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}