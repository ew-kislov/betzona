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
        <ShadowPanel outerStyle={style} innerStyle={{ padding: 15 }} height={146}>
            <RowContainer style={{ alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <DescriptionText>{profileBet.homeName}</DescriptionText>
                <SmallText>{profileBet.time}</SmallText>
                <DescriptionText>{profileBet.awayName}</DescriptionText>
            </RowContainer>

            <View style={{ width: '100%' }}>
                <PrimaryText style={{ marginTop: 15 }}>{'#' + profileBet.description}</PrimaryText>
            </View>

            <RowContainer style={{ justifyContent: 'space-between', width: '100%' }}>
                <DescriptionText>{profileBet.odd}</DescriptionText>
                <RateButton>{profileBet.rate}</RateButton>
            </RowContainer>

            <View style={styles.oddPayment}>
                <Text style={styles.profileBetSumText}>{profileBet.sum + '€'}</Text>
                <GrayText>{'Результат: ' + profileBet.score}</GrayText>
                {
                    profileBet.resultSum &&
                    <Text style={[styles.profileSumResultText, { color: resultColor }]}>{profileBet.resultSum + '€'}</Text>
                }
            </View>
        </ShadowPanel>
    )
}