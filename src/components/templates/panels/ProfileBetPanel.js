import React from 'react'
import { Text, View } from 'react-native'

import { Panel, RowContainer, DescriptionText, TimeButton, PrimaryText, OddRateButton, ShadowPanel, SmallText, RateButton, GrayText } from '../../primitives'
import { styles } from './styles'

export const ProfileBetPanel = ({ profileBet, style }) => {
    let resultColor
    if (!profileBet.resultSum)
        resultColor = ''
    else if (profileBet.resultSum[0] == '+')
        resultColor = '#68942c'
    else if (profileBet.resultSum[0] == '-')
        resultColor = '#d31d16'
    else
        resultColor = '#ff741f'

    return (
        <ShadowPanel outerStyle={style} innerStyle={{ padding: 10 }} height={170}>
            <RowContainer>
                <View style={styles.prognoseSection}>
                    <DescriptionText style={{ textAlign: 'center' }}>{profileBet.homeName}</DescriptionText>
                </View>
                <View style={styles.prognoseSection}>
                    <SmallText style={{ textAlign: 'center' }}>{profileBet.time}</SmallText>
                </View>
                <View style={styles.prognoseSection}>
                    <DescriptionText style={{ textAlign: 'center' }}>{profileBet.awayName}</DescriptionText>
                </View>
            </RowContainer>

            <View style={{ width: '100%' }}>
                <PrimaryText style={{ marginTop: 15 }}>#{profileBet.description.length > 40 ? (profileBet.description.substring(0, 40) + '...') : profileBet.description}</PrimaryText>
            </View>

            <RowContainer style={{ justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                <DescriptionText>{profileBet.odd}</DescriptionText>
                <RateButton>{profileBet.rate}</RateButton>
            </RowContainer>

            <View style={styles.oddPayment}>
                <Text style={styles.profileBetSumText}>{profileBet.sum + '€'}</Text>
                <GrayText>Результат: {profileBet.score.length > 20 ? (profileBet.score.substring(0, 20) + '...') : profileBet.score}</GrayText>
                {
                    profileBet.resultSum &&
                    <Text style={[styles.profileSumResultText, { color: resultColor }]}>{profileBet.resultSum + '€'}</Text>
                }
            </View>
        </ShadowPanel>
    )
}