import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const OutlineButton = ({ children, style, onPress, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[disabled ? styles.outlineButtonInactive : styles.outlineButton, style]}>
                <Text style={disabled ? styles.outlineButtonTextInactive : styles.outlineButtonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}