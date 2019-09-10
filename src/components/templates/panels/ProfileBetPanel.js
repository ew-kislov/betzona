import React from 'react'
import { Text, View } from 'react-native'

import { Panel, RowContainer, DescriptionText, TimeButton, PrimaryText, OddRateButton } from '../../primitives'
import { styles } from './styles'

export const ProfileBetPanel = ({ profileBet, style }) => {
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
                <DescriptionText>{profileBet.sum+'€'}</DescriptionText>
            </View>
        </Panel>
    )
}