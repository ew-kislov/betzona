import React from 'react'
import { View } from 'react-native'

import {
    ScreenLayout,
    ContentLayout,
    ProfileBetPanel
} from '../../../templates'
import { SubtitleText, SmallText, GrayText } from '../../../primitives'

export const ProfilePrognosisListTab = ({ loading, profileBets, betsShown, showMore }) => {
    let count = 0
    return (
        <ScreenLayout>
            <ContentLayout scrollEndHanler={showMore} loading={loading} withoutPadding={true}>
                {
                    Object.entries(profileBets).map(([date, profileBetsByDate]) => {
                        if (count < betsShown) {
                            let renderedProfileBets = profileBetsByDate.map(profileBet => {
                                count++
                                return <ProfileBetPanel key={profileBet.id} style={{ marginTop: 15 }} profileBet={profileBet} />
                            })
                            return (
                                <View key={date} style={{ marginBottom: 15 }}>
                                    <GrayText style={{ marginTop: 15, marginLeft: 15 }}>{date}</GrayText>
                                    <View style={{ alignItems: 'center' }}>
                                        {renderedProfileBets}
                                    </View>
                                </View>
                            )
                        }
                    })
                }
            </ContentLayout>
        </ScreenLayout>
    )
}