import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { WhiteText, DescriptionText } from '../../primitives'

export const ChosenPrognosisPanel = ({ name, rate, style }) => {
    return (
        <LinearGradient colors={['#6ECCFC', '#3692C0']} style={[styles.chosenPrognosisPanel, style]}>
            <WhiteText style={styles.chosenPrognosisPanelBottomText}>{name}</WhiteText>
            <View style={{ width: 43, height: 24, backgroundColor: '#fff', borderRadius: 7, marginTop: 12, alignItems: 'center', justifyContent: 'center' }}>
                <DescriptionText>{rate}</DescriptionText>
            </View>
        </LinearGradient>
    )
}