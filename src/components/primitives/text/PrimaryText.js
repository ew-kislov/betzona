import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

export const PrimaryText = ({ children, style }) => {
    return (
        <View style={{ flexShrink: 1 }}>
            <Text style={[styles.primaryText, style]}>{children}</Text>
        </View>
    )
}