import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    Header,
    ContentLayout,
    ProfileBetPanel
} from '../../templates'
import { SubtitleText } from '../../primitives'

export const ProfileInfo = ({ loading, profileBets, betsShown, showMore }) => {
    let count = 0
    return (
        <ScreenLayout>
            <Header menu />
            <ContentLayout scrollEndHanler={showMore} loading={loading}>
                {
                    Object.entries(profileBets).map(([date, profileBetsByDate]) => {
                        if (count < betsShown) {
                            let renderedProfileBets = profileBetsByDate.map(profileBet => {
                                count++
                                return <ProfileBetPanel style={{ marginTop: 10 }} profileBet={profileBet} />
                            })
                            return (
                                <View style={{ marginBottom: 20 }}>
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