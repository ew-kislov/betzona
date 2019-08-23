import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const WidePrimaryButton = ({ children, style, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.widePrimaryButton, style]}
            onPress={onPress}
        >
            <Text style={styles.widePrimaryButtonText}>{children}</Text>
        </TouchableOpacity>

    )
}