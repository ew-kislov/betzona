import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    ContentLayout,
    ProfileBetPanel
} from '../../../templates'
import { SubtitleText } from '../../../primitives'

export const ProfilePrognosisListTab = ({ loading, profileBets, betsShown, showMore }) => {
    let count = 0
    return (
        <ScreenLayout>
            <ContentLayout scrollEndHanler={showMore} loading={loading}>
                {
                    Object.entries(profileBets).map(([date, profileBetsByDate]) => {
                        if (count < betsShown) {
                            let renderedProfileBets = profileBetsByDate.map(profileBet => {
                                count++
                                return <ProfileBetPanel key={profileBet.id} style={{ marginTop: 10 }} profileBet={profileBet} />
                            })
                            return (
                                <View key={date} style={{ marginBottom: 20 }}>
                                    <SubtitleText style={{ marginTop: 20 }}>{date}</SubtitleText>
                                    {renderedProfileBets}
                                </View>
                            )
                        }
                    })
                }
            </ContentLayout>
        </ScreenLayout>
    )
}