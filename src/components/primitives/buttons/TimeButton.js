import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

export const TimeButton = ({ children, style, popular }) => {
    return (
        <View style={[styles.timeButton, style, popular ? { backgroundColor: '#98be62' } : { backgroundColor: '#74bce4' } ]}>
            <Text style={styles.timeButtonText}>{children}</Text>
        </View>
        
    )
}