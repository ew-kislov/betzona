import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const OutlineButton = ({ children, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.outlineButton, style]}>
                <Text style={styles.outlineButtonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}