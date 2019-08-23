import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const PrimaryButton = ({ children, isActive, style, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.primaryButton, style, isActive ? styles.primaryButton : styles.outlinedButton]}
            onPress={onPress}
        >
            <Text style={isActive ? styles.primaryButtonText : styles.outlinedButtonText}>{children}</Text>
        </TouchableOpacity>

    )
}