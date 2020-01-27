import React from 'react'

import { ScreenLayout, Header, PrognosisTabNavigator } from '../../templates'

export const PrognosisList = ({ screenProps }) => {
    return (
        <ScreenLayout>
            <Header menu noShadow />
            <PrognosisTabNavigator screenProps={screenProps} />
        </ScreenLayout>
    )
}