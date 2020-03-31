import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const WidePrimaryButton = ({ children, style, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[disabled ? styles.widePrimaryButtonInactive : styles.widePrimaryButton, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.widePrimaryButtonText}>{children}</Text>
        </TouchableOpacity>

    )
}