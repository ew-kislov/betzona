import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'
import { RowContainer } from '../containers'

export const OddRateButton = ({ odd, rate, style }) => {
    return (
        <RowContainer style={[styles.oddRateButton, style]}>
            <View style={styles.oddRateButtonLeft}>
                <Text style={styles.oddRateButtonText}>{odd}</Text>
            </View>
            <View style={styles.oddRateButtonRight}>
                <Text style={styles.oddRateButtonText}>{rate}</Text>
            </View>
        </RowContainer>
    )
}