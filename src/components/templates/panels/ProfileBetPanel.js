import React from 'react'
import { Text, View } from 'react-native'

import { Panel, RowContainer, DescriptionText, TimeButton, PrimaryText, OddRateButton } from '../../primitives'
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
        <Panel style={style}>
            <RowContainer style={{ alignItems: 'center' }}>
                <TimeButton>{profileBet.time}</TimeButton>
                <View style={{ marginLeft: 30 }}>
                    <DescriptionText>{profileBet.homeName}</DescriptionText>
                    <DescriptionText>{profileBet.awayName}</DescriptionText>
                </View>
            </RowContainer>

            <PrimaryText style={{ marginTop: 15 }}>{'#' + profileBet.description}</PrimaryText>

            <OddRateButton style={{ marginTop: 15 }} odd={profileBet.odd} rate={profileBet.rate} />

            <View style={styles.oddPayment}>
                <Text style={styles.profileBetSumText}>{profileBet.sum + '€'}</Text>
                <Text style={styles.profileBetResultText}>{'Результат: ' + profileBet.score}</Text>
                {
                    profileBet.resultSum ?
                        <Text style={[styles.profileSumResultText, { backgroundColor: resultColor }]}>{profileBet.resultSum + '€'}</Text>
                        :
                        <View />
                }
            </View>
        </Panel>
    )
}