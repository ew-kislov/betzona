import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    OddPanel
} from '../../templates'

export const ChooseOdd = ({ loading, oddList, navigateToChooseMoney, match }) => {
    return (
        <ScreenLayout>
            <Header back customTitle title={match.name} />
            <ContentLayout loading={loading} withoutPadding={true}>
                <View style={{ marginTop: 10 }}>
                    {Object.keys(oddList).map((oddName, ind) =>
                        <OddPanel
                            key={ind}
                            oddName={oddName}
                            oddInfo={oddList[oddName]}
                            handleOddPress={navigateToChooseMoney}
                            last={ind == Object.keys(oddList).length - 1}
                        />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}