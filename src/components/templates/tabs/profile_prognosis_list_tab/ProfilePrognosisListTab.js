import React from 'react'
import { View, Image, Text } from 'react-native'

import {
    ScreenLayout,
    ContentLayout,
    ProfileBetPanel
} from '../../../templates'
import { GrayText, TitleText, RowContainer, SubdescriptionText, BoldText } from '../../../primitives'

export const ProfilePrognosisListTab = ({ loading, id, username, activeUsername, photoUrl, available, bank, profileBets, betsShown, showMore }) => {
    let count = 0

    return (
        <ScreenLayout>
            <ContentLayout scrollEndHanler={showMore} loading={loading} withoutPadding={true}>
                <View style={{ height: 120, width: 120, alignSelf: 'center', borderRadius: 100, marginTop: 20 }}>
                    <Image
                        source={{ uri: photoUrl ? 'https://betzona.ru/img/avatars/158_150/' + photoUrl : 'https://betzona.ru/img/avatar_pari.png' }}
                        style={{ height: '100%', borderRadius: 100, width: '100%' }}
                    />
                    <View style={{ height: 24, width: '100%', alignContent: 'center', justifyContent: 'center', textAlign: 'center', position: 'absolute', bottom: 0, backgroundColor: '#ffffff40' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 14, fontFamily: 'Geometria-Bold', color: '#fff' }}>{id}</Text>
                    </View>
                </View>

                <TitleText style={{ alignSelf: 'center', marginTop: 15 }}>{username || activeUsername}</TitleText>

                {
                    activeUsername == username && (
                        <View>
                            <RowContainer style={{ marginTop: 40, justifyContent: 'center' }}>
                                <SubdescriptionText>Доступно: </SubdescriptionText>
                                <BoldText>{available}</BoldText>
                            </RowContainer>

                            <RowContainer style={{ justifyContent: 'center' }}>
                                <SubdescriptionText>Банк: </SubdescriptionText>
                                <BoldText>{bank}</BoldText>
                            </RowContainer>
                        </View>
                    )
                }

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