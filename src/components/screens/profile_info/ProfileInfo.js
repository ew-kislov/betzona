import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    ProfileBetPanel
} from '../../templates'
import { SubtitleText } from '../../primitives'
import { ProfileTabNavigator } from '../../templates/navigators/ProfileTabNavigator'

export const ProfileInfo = ({ username }) => {
    let count = 0
    return (
        <ScreenLayout>
            <Header customTitle={username ? true : false} title={username} menu noShadow />
            <ProfileTabNavigator screenProps={{ username }} />
        </ScreenLayout>
    )
}