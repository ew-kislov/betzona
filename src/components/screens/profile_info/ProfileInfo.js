import React from 'react'
import { Text } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    ProfileBetPanel
} from '../../templates'

export const ProfileInfo = ({ loading, profileBets }) => {
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout loading={loading}>
                {
                    profileBets.map((profileBet, ind) =>
                        <ProfileBetPanel style={[{ marginTop: 20 }, (ind == profileBets.length - 1) && { marginBottom: 20 }]} profileBet={profileBet} />)
                }
            </ContentLayout>
        </ScreenLayout>
    )
}