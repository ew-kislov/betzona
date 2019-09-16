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
            <ContentLayout loading={loading}>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    {Object.keys(oddList).map((oddName, ind) =>
                        <OddPanel
                            key={ind}
                            oddName={oddName}
                            oddInfo={oddList[oddName]}
                            handleOddPress={navigateToChooseMoney}
                        />)}
                </View>
            </ContentLayout>
        </ScreenLayout>
    )
}