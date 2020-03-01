import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

export const PrimaryUnderlinedText = ({ children, style }) => {
    return (
        <View>
            <Text style={[styles.primaryUnderlinedText, style]}>{children}</Text>
        </View>
    )
}