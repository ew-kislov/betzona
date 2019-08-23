import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

export const RateButton = ({ children, style, popular }) => {
    return (
        <View style={[styles.rateButton, style, popular ? { backgroundColor: '#98be62' } : { backgroundColor: '#74bce4' } ]}>
            <Text style={styles.rateButtonText}>{children}</Text>
        </View>
        
    )
}